import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import type { ParsedReport, Position, Trade, Dividend, CashMovement } from "./types";

const FLEX_BASE = "https://gdcdyn.interactivebrokers.com/Universal/servlet/FlexStatementService";
const POLL_INTERVAL_MS = 5_000;
const MAX_POLL_ATTEMPTS = 24; // 2 minutes total

interface FlexRequestResponse {
  FlexStatementResponse: {
    Status: string;
    ReferenceCode?: string;
    Url?: string;
    ErrorCode?: string;
    ErrorMessage?: string;
  };
}

interface FlexStatementResponse {
  FlexQueryResponse?: {
    FlexStatements?: {
      FlexStatement?: Record<string, unknown> | Record<string, unknown>[];
    };
  };
}

export async function downloadFlexReport(): Promise<{ raw: string; parsed: ParsedReport }> {
  const token = process.env.IBKR_FLEX_TOKEN;
  const queryId = process.env.IBKR_FLEX_QUERY_ID;

  if (!token || !queryId) {
    throw new Error("IBKR_FLEX_TOKEN and IBKR_FLEX_QUERY_ID must be set in .env");
  }

  console.log("📡 Solicitando generación del reporte Flex a IBKR...");
  const referenceCode = await requestReport(token, queryId);

  console.log(`⏳ ReferenceCode obtenido: ${referenceCode}. Esperando que el reporte esté listo...`);
  const rawXml = await pollForReport(token, referenceCode);

  console.log("✅ Reporte descargado. Parseando...");
  const parsed = parseFlexXml(rawXml);

  return { raw: rawXml, parsed };
}

async function requestReport(token: string, queryId: string): Promise<string> {
  const url = `${FLEX_BASE}.SendRequest?t=${token}&q=${queryId}&v=3`;
  const response = await axios.get<string>(url, { responseType: "text" });

  const parser = new XMLParser({ ignoreAttributes: false });
  const result: FlexRequestResponse = parser.parse(response.data);
  const status = result?.FlexStatementResponse;

  if (!status) {
    throw new Error(`Respuesta inesperada de IBKR:\n${response.data}`);
  }

  if (status.Status !== "Success" || !status.ReferenceCode) {
    throw new Error(
      `Error al solicitar reporte IBKR [${status.ErrorCode}]: ${status.ErrorMessage ?? "sin mensaje"}`
    );
  }

  return status.ReferenceCode;
}

async function pollForReport(token: string, referenceCode: string): Promise<string> {
  const url = `${FLEX_BASE}.GetStatement?t=${token}&q=${referenceCode}&v=3`;

  for (let attempt = 1; attempt <= MAX_POLL_ATTEMPTS; attempt++) {
    await sleep(POLL_INTERVAL_MS);

    const response = await axios.get<string>(url, { responseType: "text" });
    const text = response.data as string;

    // IBKR returns an error XML while the report is still being generated
    if (text.includes("<Status>Success</Status>") && text.includes("ReferenceCode")) {
      // Still processing — try again
      console.log(`  Intento ${attempt}/${MAX_POLL_ATTEMPTS}: procesando...`);
      continue;
    }

    if (text.includes("<FlexQueryResponse")) {
      return text;
    }

    // Check for generation-in-progress error code
    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed: FlexRequestResponse = parser.parse(text);
    const status = parsed?.FlexStatementResponse;

    if (status?.ErrorCode === "1019") {
      // Statement generation in progress
      console.log(`  Intento ${attempt}/${MAX_POLL_ATTEMPTS}: generando...`);
      continue;
    }

    if (status?.Status === "Warn") {
      console.log(`  Intento ${attempt}/${MAX_POLL_ATTEMPTS}: ${status.ErrorMessage ?? "esperando"}...`);
      continue;
    }

    throw new Error(`Error al obtener reporte IBKR [${status?.ErrorCode}]: ${status?.ErrorMessage ?? text}`);
  }

  throw new Error("Timeout: el reporte IBKR no estuvo listo después de 2 minutos.");
}

function parseFlexXml(xml: string): ParsedReport {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    isArray: (name) =>
      ["OpenPosition", "Trade", "CashTransaction", "ChangeInDividendAccrual", "Order"].includes(name),
  });

  const doc: FlexStatementResponse = parser.parse(xml);
  const stmt = doc?.FlexQueryResponse?.FlexStatements?.FlexStatement;
  const s: Record<string, unknown> = Array.isArray(stmt) ? stmt[0] : (stmt ?? {});

  // ── Account summary ───────────────────────────────────────────────────────
  const equitySummary = getFirst(s["EquitySummaryByReportDateInBase"]);
  const nav = toNum(equitySummary?.["total"] ?? equitySummary?.["totalLong"]);

  const cashReport = getFirst(s["CashReport"]);
  const cashLine = getFirst(cashReport?.["CashReportCurrency"]);
  const cash = toNum(cashLine?.["endingCash"] ?? cashLine?.["cash"]);

  const pnlSummary = getFirst(s["MTMPerformanceSummaryInBase"] ?? s["PnLDetails"]);
  const realizedPnL = toNum(pnlSummary?.["realized"] ?? pnlSummary?.["realizedPnl"]);
  const unrealizedPnL = toNum(pnlSummary?.["unrealized"] ?? pnlSummary?.["unrealizedPnl"]);

  const accInfo = getFirst(s["AccountInformation"]);
  const reportDate =
    toString(s["whenGenerated"] ?? accInfo?.["reportDate"]) ||
    new Date().toISOString().slice(0, 10);

  // ── Positions ─────────────────────────────────────────────────────────────
  const openPositionsSection = s["OpenPositions"] as Record<string, unknown> | undefined;
  const rawPositions = toArray(openPositionsSection?.["OpenPosition"] ?? s["OpenPosition"]);
  const positions: Position[] = rawPositions.map((p) => {
    const mv = toNum(p["markPrice"]) * toNum(p["position"]);
    const costBasis = toNum(p["costBasisMoney"] ?? p["costBasis"]);
    return {
      symbol: toString(p["symbol"]),
      description: toString(p["description"] ?? p["longName"] ?? p["symbol"]),
      quantity: toNum(p["position"]),
      marketValue: toNum(p["positionValue"] ?? mv),
      costBasis,
      unrealizedPnL: toNum(p["fifoPnlUnrealized"] ?? p["unrealizedPnl"]),
      percentOfNAV: 0, // calculated below after nav is known
      currency: toString(p["currency"]),
      assetClass: toString(p["assetCategory"] ?? p["assetClass"] ?? "STK"),
    };
  });

  const totalMV = positions.reduce((sum, p) => sum + p.marketValue, 0);
  const navForPct = nav > 0 ? nav : totalMV || 1;
  for (const p of positions) {
    p.percentOfNAV = (p.marketValue / navForPct) * 100;
  }

  // ── Trades ────────────────────────────────────────────────────────────────
  const tradesSection = s["Trades"] as Record<string, unknown> | undefined;
  const rawTrades = toArray(tradesSection?.["Trade"] ?? s["Trade"]);
  const trades: Trade[] = rawTrades.map((t) => ({
    symbol: toString(t["symbol"]),
    dateTime: toString(t["dateTime"] ?? t["tradeDate"]),
    quantity: toNum(t["quantity"]),
    price: toNum(t["tradePrice"] ?? t["price"]),
    proceeds: toNum(t["proceeds"]),
    commission: toNum(t["ibCommission"] ?? t["commission"]),
    realizedPnL: toNum(t["fifoPnlRealized"] ?? t["realizedPnl"]),
    buySell: toString(t["buySell"]).toUpperCase().startsWith("S") ? "SELL" : "BUY",
    currency: toString(t["currency"]),
  }));

  // ── Dividends ─────────────────────────────────────────────────────────────
  const cashTransactionsSection = s["CashTransactions"] as Record<string, unknown> | undefined;
  const rawCash = toArray(cashTransactionsSection?.["CashTransaction"] ?? s["CashTransaction"]);
  const dividends: Dividend[] = rawCash
    .filter((c) => toString(c["type"]).toLowerCase().includes("dividend"))
    .map((c) => ({
      symbol: toString(c["symbol"]),
      date: toString(c["dateTime"] ?? c["date"]).slice(0, 10),
      amount: toNum(c["amount"]),
      currency: toString(c["currency"]),
      description: toString(c["description"]),
    }));

  const cashMovements: CashMovement[] = rawCash.map((c) => ({
    date: toString(c["dateTime"] ?? c["date"]).slice(0, 10),
    description: toString(c["description"]),
    amount: toNum(c["amount"]),
    currency: toString(c["currency"]),
    type: toString(c["type"]),
  }));

  return {
    reportDate: reportDate.slice(0, 10),
    generatedAt: new Date().toISOString(),
    accountId: toString(accInfo?.["accountId"] ?? s["accountId"] ?? "N/A"),
    currency: toString(accInfo?.["currency"] ?? cashLine?.["currency"] ?? "USD"),
    nav,
    cash,
    totalEquityValue: totalMV,
    totalSecuritiesValue: totalMV - cash,
    realizedPnL,
    unrealizedPnL,
    positions: positions.sort((a, b) => b.marketValue - a.marketValue),
    trades,
    dividends,
    cashMovements,
  };
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function getFirst(val: unknown): Record<string, unknown> {
  if (!val) return {};
  if (Array.isArray(val)) return (val[0] as Record<string, unknown>) ?? {};
  return val as Record<string, unknown>;
}

function toArray(val: unknown): Record<string, unknown>[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as Record<string, unknown>[];
  return [val as Record<string, unknown>];
}

function toNum(val: unknown): number {
  const n = parseFloat(String(val ?? "0").replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
}

function toString(val: unknown): string {
  if (val === null || val === undefined) return "";
  return String(val);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
