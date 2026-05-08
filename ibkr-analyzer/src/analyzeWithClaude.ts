import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ParsedReport, ReportDiff } from "./types";

const DISCLAIMER =
  "Este reporte es informativo y no constituye asesoramiento financiero personalizado ni una recomendación de compra o venta.";

export async function analyzeWithClaude(
  report: ParsedReport,
  diff: ReportDiff | null
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY debe estar configurado en .env");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `Eres un analista de wealth management senior.
Redactas reportes de cartera en español con tono profesional pero claro y directo.
Tu objetivo es dar al inversor un panorama completo y práctico de su cartera.
No recomiendas comprar ni vender. No das asesoramiento personal.
Solo analizas y describes la situación actual.`,
  });

  const prompt = buildPrompt(report, diff);

  console.log("🤖 Enviando reporte a Gemini para análisis...");

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  if (!text) throw new Error("Gemini no devolvió texto.");

  return text + `\n\n---\n*${DISCLAIMER}*`;
}

function buildPrompt(report: ParsedReport, diff: ReportDiff | null): string {
  const fmt = (n: number, decimals = 2) =>
    n.toLocaleString("es-UY", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  const fmtUSD = (n: number) => `USD ${fmt(n)}`;
  const fmtPct = (n: number) => `${n >= 0 ? "+" : ""}${fmt(n, 1)}%`;

  const topPositions = report.positions
    .slice(0, 10)
    .map(
      (p, i) =>
        `${i + 1}. ${p.symbol} (${p.assetClass}): ${fmtUSD(p.marketValue)} | ${fmt(p.percentOfNAV, 1)}% del NAV | P&L no realizado: ${fmtUSD(p.unrealizedPnL)}`
    )
    .join("\n");

  const tradesSection =
    report.trades.length > 0
      ? report.trades
          .slice(0, 20)
          .map(
            (t) =>
              `- ${t.buySell} ${t.symbol}: ${Math.abs(t.quantity)} acc. @ ${fmtUSD(t.price)} (${t.dateTime.slice(0, 10)})`
          )
          .join("\n")
      : "Sin trades en el período.";

  const dividendsSection =
    report.dividends.length > 0
      ? report.dividends
          .map((d) => `- ${d.symbol}: ${fmtUSD(d.amount)} (${d.date})`)
          .join("\n")
      : "Sin dividendos en el período.";

  let diffSection = "No hay reporte anterior disponible para comparar.";
  if (diff) {
    const lines: string[] = [
      `Variación de NAV: ${fmtUSD(diff.navDelta)} (${fmtPct(diff.navDeltaPct)})`,
      `Variación de cash: ${fmtUSD(diff.cashDelta)}`,
      `Variación P&L realizado: ${fmtUSD(diff.realizedPnLDelta)}`,
      `Variación P&L no realizado: ${fmtUSD(diff.unrealizedPnLDelta)}`,
    ];
    if (diff.newPositions.length > 0)
      lines.push(`\nNuevas posiciones: ${diff.newPositions.map((p) => p.symbol).join(", ")}`);
    if (diff.closedPositions.length > 0)
      lines.push(`Posiciones cerradas: ${diff.closedPositions.map((p) => p.symbol).join(", ")}`);
    if (diff.weightChanges.length > 0) {
      lines.push("\nCambios de peso relevantes (≥1%):");
      diff.weightChanges.slice(0, 8).forEach((c) => {
        lines.push(`  ${c.symbol}: ${fmt(c.previousPct, 1)}% → ${fmt(c.currentPct, 1)}% (${fmtPct(c.deltaPct)})`);
      });
    }
    if (diff.newTrades.length > 0) lines.push(`\nNuevos trades: ${diff.newTrades.length}`);
    if (diff.dividendsReceived.length > 0) {
      const total = diff.dividendsReceived.reduce((s, d) => s + d.amount, 0);
      lines.push(`Dividendos nuevos: ${fmtUSD(total)}`);
    }
    diffSection = lines.join("\n");
  }

  return `Genera un reporte completo de cartera para el día ${report.reportDate}.

## DATOS DE LA CARTERA

**Cuenta:** ${report.accountId}
**Moneda base:** ${report.currency}
**NAV total:** ${fmtUSD(report.nav)}
**Cash disponible:** ${fmtUSD(report.cash)}
**Valor en valores:** ${fmtUSD(report.totalEquityValue)}
**P&L realizado:** ${fmtUSD(report.realizedPnL)}
**P&L no realizado:** ${fmtUSD(report.unrealizedPnL)}

## TOP POSICIONES

${topPositions}

Total de posiciones abiertas: ${report.positions.length}

## TRADES DEL PERÍODO

${tradesSection}

## DIVIDENDOS DEL PERÍODO

${dividendsSection}

## COMPARACIÓN CON PERÍODO ANTERIOR

${diffSection}

---

Genera el reporte con estas secciones:

1. **Resumen ejecutivo** (3-4 oraciones clave)
2. **Valor total de cartera y estructura** (NAV, cash, valores)
3. **Principales posiciones** (top 5-10, análisis de concentración)
4. **Cambios desde el período anterior** (si aplica)
5. **Alertas de concentración** (posiciones >15% del NAV, baja diversificación, etc.)
6. **Rendimiento y P&L** (realizado e irealizado si están disponibles)
7. **Dividendos y cobros** (si aplica)
8. **Actividad de trading** (resumen si hay trades)
9. **Comentario de wealth management** (panorama general, contexto, puntos a vigilar)
10. **Puntos a revisar** (lista de ítems concretos que el inversor debería evaluar)

Formato: Markdown limpio, fácil de leer. Usa tablas donde aporte claridad.
Tono: Profesional, claro, directo. Evita tecnicismos innecesarios.
Idioma: Español de Uruguay.`;
}
