import type { ParsedReport, ReportDiff, Position } from "./types";

export function compareReports(previous: ParsedReport, current: ParsedReport): ReportDiff {
  const prevMap = new Map<string, Position>(previous.positions.map((p) => [p.symbol, p]));
  const currMap = new Map<string, Position>(current.positions.map((p) => [p.symbol, p]));

  const newPositions: Position[] = [];
  const closedPositions: Position[] = [];
  const weightChanges: ReportDiff["weightChanges"] = [];

  for (const [symbol, pos] of currMap) {
    if (!prevMap.has(symbol)) {
      newPositions.push(pos);
    }
  }

  for (const [symbol, pos] of prevMap) {
    if (!currMap.has(symbol)) {
      closedPositions.push(pos);
    }
  }

  for (const [symbol, curr] of currMap) {
    const prev = prevMap.get(symbol);
    if (!prev) continue;
    const deltaPct = curr.percentOfNAV - prev.percentOfNAV;
    if (Math.abs(deltaPct) >= 1) {
      weightChanges.push({
        symbol,
        previousPct: prev.percentOfNAV,
        currentPct: curr.percentOfNAV,
        deltaPct,
      });
    }
  }

  weightChanges.sort((a, b) => Math.abs(b.deltaPct) - Math.abs(a.deltaPct));

  const prevTradeKeys = new Set(
    previous.trades.map((t) => `${t.symbol}-${t.dateTime}-${t.quantity}`)
  );
  const newTrades = current.trades.filter(
    (t) => !prevTradeKeys.has(`${t.symbol}-${t.dateTime}-${t.quantity}`)
  );

  const prevDivKeys = new Set(
    previous.dividends.map((d) => `${d.symbol}-${d.date}-${d.amount}`)
  );
  const dividendsReceived = current.dividends.filter(
    (d) => !prevDivKeys.has(`${d.symbol}-${d.date}-${d.amount}`)
  );

  const navDelta = current.nav - previous.nav;
  const navDeltaPct = previous.nav !== 0 ? (navDelta / previous.nav) * 100 : 0;

  return {
    newPositions,
    closedPositions,
    weightChanges,
    cashDelta: current.cash - previous.cash,
    realizedPnLDelta: current.realizedPnL - previous.realizedPnL,
    unrealizedPnLDelta: current.unrealizedPnL - previous.unrealizedPnL,
    navDelta,
    navDeltaPct,
    newTrades,
    dividendsReceived,
  };
}
