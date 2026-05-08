import type { ParsedReport } from "./types";

export async function sendWhatsapp(report: ParsedReport, analysis: string): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM;
  const to = process.env.TWILIO_WHATSAPP_TO;

  if (!accountSid || !authToken || !from || !to) {
    console.log("📵 Variables de Twilio no configuradas. Saltando WhatsApp.");
    return;
  }

  // Lazy import to avoid errors when Twilio is not configured
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const twilio = require("twilio") as (sid: string, token: string) => TwilioClient;
  const client = twilio(accountSid, authToken);

  const fmtUSD = (n: number) =>
    `USD ${n.toLocaleString("es-UY", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  const topAlerts = extractAlerts(report, analysis);
  const body = buildWhatsappMessage(report, fmtUSD, topAlerts);

  console.log(`📱 Enviando aviso por WhatsApp a ${to}...`);

  await client.messages.create({ from, to, body });

  console.log("✅ WhatsApp enviado correctamente.");
}

function extractAlerts(report: ParsedReport, analysis: string): string {
  // Pull top-concentration positions for a quick summary
  const concentrated = report.positions.filter((p) => p.percentOfNAV >= 15);
  if (concentrated.length > 0) {
    return concentrated
      .slice(0, 3)
      .map((p) => `${p.symbol} (${p.percentOfNAV.toFixed(0)}%)`)
      .join(", ");
  }

  // Fallback: look for bullet points in the analysis mentioning alerts
  const match = analysis.match(/alertas?[:\s]+(.{20,100})/i);
  if (match) return match[1].replace(/\n.*/s, "").trim();

  return "Sin alertas críticas";
}

function buildWhatsappMessage(
  report: ParsedReport,
  fmtUSD: (n: number) => string,
  alerts: string
): string {
  const pnlSign = report.unrealizedPnL >= 0 ? "+" : "";
  const lines = [
    `📊 *Reporte IBKR ${report.reportDate}*`,
    ``,
    `💼 Valor cartera: *${fmtUSD(report.nav)}*`,
    `💵 Cash: ${fmtUSD(report.cash)}`,
    `📈 P&L no realizado: ${pnlSign}${fmtUSD(report.unrealizedPnL)}`,
    ``,
    `⚠️ Alertas: ${alerts}`,
    ``,
    `Te envié el reporte completo por email. ✉️`,
  ];

  return lines.join("\n");
}

// Minimal Twilio client type to avoid full import at module level
interface TwilioClient {
  messages: {
    create: (opts: { from: string; to: string; body: string }) => Promise<unknown>;
  };
}
