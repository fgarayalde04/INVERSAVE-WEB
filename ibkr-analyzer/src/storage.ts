import fs from "fs";
import path from "path";
import type { ParsedReport } from "./types";

const DATA_DIR = path.resolve(__dirname, "../data");

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function saveRawReport(date: string, xml: string): void {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, `${date}-raw.xml`);
  fs.writeFileSync(filePath, xml, "utf-8");
  console.log(`💾 Reporte bruto guardado: ${filePath}`);
}

export function saveParsedReport(date: string, report: ParsedReport): void {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, `${date}-parsed.json`);
  fs.writeFileSync(filePath, JSON.stringify(report, null, 2), "utf-8");
  console.log(`💾 Reporte parseado guardado: ${filePath}`);
}

export function saveAnalysis(date: string, analysis: string): void {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, `${date}-analysis.md`);
  fs.writeFileSync(filePath, analysis, "utf-8");
  console.log(`💾 Análisis guardado: ${filePath}`);
}

export function loadPreviousParsedReport(currentDate: string): ParsedReport | null {
  ensureDataDir();

  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith("-parsed.json") && !f.startsWith(currentDate))
    .sort()
    .reverse();

  if (files.length === 0) return null;

  const filePath = path.join(DATA_DIR, files[0]);
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log(`📂 Reporte anterior cargado: ${files[0]}`);
    return JSON.parse(content) as ParsedReport;
  } catch {
    return null;
  }
}
