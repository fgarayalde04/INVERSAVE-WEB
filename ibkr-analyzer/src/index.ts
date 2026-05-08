import "dotenv/config";
import { downloadFlexReport } from "./ibkrFlex";
import { saveRawReport, saveParsedReport, saveAnalysis, loadPreviousParsedReport } from "./storage";
import { compareReports } from "./compareReports";
import { analyzeWithClaude } from "./analyzeWithClaude";
import { sendEmail } from "./sendEmail";
import { sendWhatsapp } from "./sendWhatsapp";

async function main(): Promise<void> {
  console.log("=".repeat(60));
  console.log("  IBKR Report Analyzer — iniciando");
  console.log("=".repeat(60));

  // 1. Download and parse report from IBKR
  const { raw, parsed } = await downloadFlexReport();
  const date = parsed.reportDate;

  // 2. Save raw and parsed to /data
  saveRawReport(date, raw);
  saveParsedReport(date, parsed);

  // 3. Load previous report and compute diff
  const previous = loadPreviousParsedReport(date);
  const diff = previous ? compareReports(previous, parsed) : null;

  if (diff) {
    console.log(
      `📊 Comparación con reporte anterior (${previous!.reportDate}): NAV ${diff.navDelta >= 0 ? "+" : ""}${diff.navDelta.toFixed(0)} USD`
    );
  } else {
    console.log("ℹ️  No hay reporte anterior. Generando análisis sin comparación.");
  }

  // 4. Analyze with Claude
  const analysis = await analyzeWithClaude(parsed, diff);
  saveAnalysis(date, analysis);

  // 5. Send email
  await sendEmail(parsed, analysis);

  // 6. Send WhatsApp (optional — silently skipped if not configured)
  await sendWhatsapp(parsed, analysis);

  console.log("=".repeat(60));
  console.log("  Reporte completado exitosamente.");
  console.log("=".repeat(60));
}

main().catch((err) => {
  console.error("\n❌ Error fatal:", err instanceof Error ? err.message : err);
  process.exit(1);
});
