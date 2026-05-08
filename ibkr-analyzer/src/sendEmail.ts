import { Resend } from "resend";
import type { ParsedReport } from "./types";

export async function sendEmail(report: ParsedReport, analysis: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.REPORT_EMAIL_TO;
  const from = process.env.REPORT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    throw new Error("RESEND_API_KEY, REPORT_EMAIL_TO y REPORT_EMAIL_FROM deben estar configurados.");
  }

  const resend = new Resend(apiKey);
  const subject = `Reporte IBKR - ${report.reportDate}`;
  const html = buildEmailHtml(report, analysis);

  console.log(`📧 Enviando reporte por email a ${to}...`);

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
  });

  if (error) {
    throw new Error(`Error al enviar email: ${JSON.stringify(error)}`);
  }

  console.log("✅ Email enviado correctamente.");
}

function buildEmailHtml(report: ParsedReport, analysisMarkdown: string): string {
  const fmtUSD = (n: number) =>
    `USD ${n.toLocaleString("es-UY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const positionsRows = report.positions
    .slice(0, 15)
    .map(
      (p) => `
      <tr>
        <td style="padding:6px 12px;border-bottom:1px solid #f0f0f0;">${p.symbol}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #f0f0f0;">${p.assetClass}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #f0f0f0;text-align:right;">${fmtUSD(p.marketValue)}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #f0f0f0;text-align:right;">${p.percentOfNAV.toFixed(1)}%</td>
        <td style="padding:6px 12px;border-bottom:1px solid #f0f0f0;text-align:right;color:${p.unrealizedPnL >= 0 ? "#16a34a" : "#dc2626"};">${fmtUSD(p.unrealizedPnL)}</td>
      </tr>`
    )
    .join("");

  const analysisHtml = analysisMarkdown
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/^## (.+)$/gm, '<h2 style="color:#1e40af;margin-top:24px;margin-bottom:8px;">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="color:#1e3a8a;margin-top:16px;margin-bottom:6px;">$1</h3>')
    .replace(/^\*\*(.+?)\*\*$/gm, "<strong>$1</strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, "<ul style='margin:8px 0;padding-left:20px;'>$&</ul>")
    .replace(/\n\n/g, "</p><p style='margin:8px 0;'>")
    .replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Reporte IBKR ${report.reportDate}</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a2e;background:#f8fafc;margin:0;padding:0;">
  <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1e40af,#1e3a8a);padding:32px 40px;color:#fff;">
      <p style="margin:0 0 4px;font-size:13px;opacity:0.75;text-transform:uppercase;letter-spacing:1px;">Interactive Brokers</p>
      <h1 style="margin:0 0 8px;font-size:26px;font-weight:700;">Reporte de Cartera</h1>
      <p style="margin:0;font-size:15px;opacity:0.9;">${report.reportDate}</p>
    </div>

    <!-- KPIs -->
    <div style="display:flex;padding:24px 40px;gap:16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;flex-wrap:wrap;">
      <div style="flex:1;min-width:140px;">
        <p style="margin:0 0 4px;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;">NAV Total</p>
        <p style="margin:0;font-size:20px;font-weight:700;color:#1e40af;">${fmtUSD(report.nav)}</p>
      </div>
      <div style="flex:1;min-width:140px;">
        <p style="margin:0 0 4px;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;">Cash</p>
        <p style="margin:0;font-size:20px;font-weight:700;">${fmtUSD(report.cash)}</p>
      </div>
      <div style="flex:1;min-width:140px;">
        <p style="margin:0 0 4px;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;">P&amp;L No Realizado</p>
        <p style="margin:0;font-size:20px;font-weight:700;color:${report.unrealizedPnL >= 0 ? "#16a34a" : "#dc2626"};">${fmtUSD(report.unrealizedPnL)}</p>
      </div>
      <div style="flex:1;min-width:140px;">
        <p style="margin:0 0 4px;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;">P&amp;L Realizado</p>
        <p style="margin:0;font-size:20px;font-weight:700;color:${report.realizedPnL >= 0 ? "#16a34a" : "#dc2626"};">${fmtUSD(report.realizedPnL)}</p>
      </div>
    </div>

    <!-- Body -->
    <div style="padding:32px 40px;">

      <!-- Positions table -->
      <h2 style="color:#1e40af;margin:0 0 16px;font-size:18px;">Principales Posiciones</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:32px;">
        <thead>
          <tr style="background:#f1f5f9;">
            <th style="padding:8px 12px;text-align:left;color:#475569;font-weight:600;">Símbolo</th>
            <th style="padding:8px 12px;text-align:left;color:#475569;font-weight:600;">Tipo</th>
            <th style="padding:8px 12px;text-align:right;color:#475569;font-weight:600;">Valor</th>
            <th style="padding:8px 12px;text-align:right;color:#475569;font-weight:600;">% NAV</th>
            <th style="padding:8px 12px;text-align:right;color:#475569;font-weight:600;">P&amp;L No Real.</th>
          </tr>
        </thead>
        <tbody>${positionsRows}</tbody>
      </table>

      <!-- Claude analysis -->
      <h2 style="color:#1e40af;margin:0 0 16px;font-size:18px;">Análisis de Cartera</h2>
      <div style="font-size:14px;line-height:1.7;color:#334155;">
        <p style="margin:0 0 12px;">${analysisHtml}</p>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 40px;font-size:12px;color:#94a3b8;line-height:1.5;">
      <p style="margin:0;">Cuenta: ${report.accountId} · Moneda base: ${report.currency} · Generado: ${new Date().toLocaleString("es-UY")}</p>
      <p style="margin:8px 0 0;font-style:italic;">Este reporte es informativo y no constituye asesoramiento financiero personalizado ni una recomendación de compra o venta.</p>
    </div>
  </div>
</body>
</html>`;
}
