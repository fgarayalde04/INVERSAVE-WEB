#!/usr/bin/env tsx
/**
 * extract-indicators-from-pdf.ts
 * ──────────────────────────────────────────────────────────────────────────────
 * Script para extraer indicadores financieros de PDFs oficiales.
 *
 * USO:
 *   npm run update:indicators
 *
 * PREPARACIÓN:
 *   1. Colocar PDFs en:  src/data-sources/pdfs/
 *   2. Usar convención de nombres:
 *        bcu_TPM_mayo2025.pdf
 *        bcu_tasas_medias_mayo2025.pdf
 *        afap_republica_Q1_2025.pdf
 *        afap_sura_Q1_2025.pdf
 *        bps_indicadores_2024.pdf
 *        banks_BROU_mayo2025.pdf
 *        banks_ITAU_mayo2025.pdf
 *   3. Ejecutar: npm run update:indicators
 *
 * SALIDA:
 *   src/data/indicators/generated/indicators.json
 *
 * EXTRACCIÓN DE TEXTO (opcional):
 *   Para extraer texto real de los PDFs, instalar:
 *     npm install --save-dev pdf-parse @types/pdf-parse
 *   El script detecta automáticamente si pdf-parse está disponible.
 *   Sin él, los PDFs se registran como "needs_review" con metadatos.
 *
 * DETECCIÓN AUTOMÁTICA POR NOMBRE DE ARCHIVO:
 *   bcu_*     → BCU (Banco Central del Uruguay)
 *   afap_*    → AFAP (rentabilidad, comisiones)
 *   bps_*     → BPS (sistema previsional)
 *   banks_*   → Bancos (tasas DPF)
 *   (otro)    → unknown
 *
 * CÓMO AGREGAR UN NUEVO TIPO DE FUENTE:
 *   1. Agregar un case en detectFileType()
 *   2. Agregar patrones de extracción en extractFromText()
 *   3. Agregar la categoría en normalizeToIndicator()
 * ──────────────────────────────────────────────────────────────────────────────
 */

import * as fs   from "fs";
import * as path from "path";

// ── Tipos ─────────────────────────────────────────────────────────────────────

type FileType = "bcu" | "afap" | "bps" | "banks" | "unknown";
type FileStatus = "processed" | "needs_review" | "failed";
type IndicatorStatus = "updated" | "pending_review" | "needs_review";
type DataFrequency = "daily" | "weekly" | "monthly" | "manual";

interface ExtractedIndicator {
  id: string;
  name: string;
  value: string | number;
  unit?: string;
  category: string;
  entity?: string;
  period?: string;
  currency?: string;
  term?: string;
  source: string;
  sourceUrl?: string;
  sourceFile: string;
  lastUpdated: string;
  frequency: DataFrequency;
  explanation: string;
  disclaimer?: string;
  status: IndicatorStatus;
}

interface PdfSource {
  fileName: string;
  type: FileType;
  status: FileStatus;
  notes?: string;
}

interface GeneratedOutput {
  lastGenerated: string;
  sources: PdfSource[];
  indicators: ExtractedIndicator[];
}

// ── Paths ─────────────────────────────────────────────────────────────────────

const ROOT        = path.join(process.cwd());
const PDF_DIR     = path.join(ROOT, "src", "data-sources", "pdfs");
const OUTPUT_DIR  = path.join(ROOT, "src", "data", "indicators", "generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "indicators.json");

// ── Utilidades ────────────────────────────────────────────────────────────────

function log(msg: string): void {
  process.stdout.write(`${msg}\n`);
}

function logOk(msg: string): void {
  process.stdout.write(`  ✓ ${msg}\n`);
}

function logWarn(msg: string): void {
  process.stdout.write(`  ⚠ ${msg}\n`);
}

function logErr(msg: string): void {
  process.stdout.write(`  ✗ ${msg}\n`);
}

// ── Detección de tipo de archivo ──────────────────────────────────────────────

function detectFileType(fileName: string): FileType {
  const lower = fileName.toLowerCase();
  if (lower.startsWith("bcu_"))   return "bcu";
  if (lower.startsWith("afap_"))  return "afap";
  if (lower.startsWith("bps_"))   return "bps";
  if (lower.startsWith("banks_")) return "banks";
  // Buscar por contenido del nombre si no hay prefijo
  if (lower.includes("banco_central") || lower.includes("bcuuy") || lower.includes("tpm") || lower.includes("tasas_medias")) return "bcu";
  if (lower.includes("afap") || lower.includes("rafap") || lower.includes("sura") || lower.includes("rentabilidad")) return "afap";
  if (lower.includes("bps") || lower.includes("previsional") || lower.includes("jubilacion")) return "bps";
  if (lower.includes("brou") || lower.includes("itau") || lower.includes("santander") || lower.includes("plazo_fijo")) return "banks";
  return "unknown";
}

// ── Extracción de texto (con pdf-parse si disponible) ─────────────────────────

async function extractText(filePath: string): Promise<string | null> {
  try {
    // Intentar cargar pdf-parse dinámicamente (devDependency opcional)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pdfParse = require("pdf-parse") as (buffer: Buffer) => Promise<{ text: string }>;
    const buffer = fs.readFileSync(filePath);
    const data   = await pdfParse(buffer);
    return data.text;
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      (err.message.includes("Cannot find module") || err.message.includes("MODULE_NOT_FOUND"))
    ) {
      // pdf-parse no instalado — devolver null (modo metadata-only)
      return null;
    }
    // Otro error al parsear el PDF
    throw err;
  }
}

// ── Patrones de búsqueda en texto ─────────────────────────────────────────────

interface ExtractedPattern {
  key: string;
  value: string;
  confidence: "high" | "medium" | "low";
}

function extractPatternsFromText(text: string, fileType: FileType): ExtractedPattern[] {
  const patterns: ExtractedPattern[] = [];

  // Normalizar texto: colapsar espacios, quitar saltos
  const t = text.replace(/\s+/g, " ").toLowerCase();

  if (fileType === "bcu" || fileType === "unknown") {
    // Tasa de Política Monetaria
    const tpmMatch = t.match(/tasa\s+de\s+pol[íi]tica\s+monetaria[:\s]+(\d+[\.,]\d+)\s*%/);
    if (tpmMatch) {
      patterns.push({ key: "tpm", value: tpmMatch[1].replace(",", ".") + "%", confidence: "high" });
    }

    // Inflación IPC
    const ipcMatch = t.match(/(?:ipc|inflaci[óo]n)[^%\d]*(\d+[\.,]\d+)\s*%/);
    if (ipcMatch) {
      patterns.push({ key: "inflacion_uy", value: ipcMatch[1].replace(",", ".") + "%", confidence: "medium" });
    }

    // Tipo de cambio dólar
    const tcMatch = t.match(/(?:tipo\s+de\s+cambio|d[óo]lar\s+interbancario)[:\s]+(\d+[\.,]\d+)/);
    if (tcMatch) {
      patterns.push({ key: "dolar_interbancario", value: tcMatch[1].replace(",", "."), confidence: "medium" });
    }

    // Tasas pasivas USD
    const dpfUsdMatch = t.match(/(?:dpf|plazo\s+fijo)[^%\d]*usd[^%\d]*(\d+[\.,]\d+)\s*%/);
    if (dpfUsdMatch) {
      patterns.push({ key: "dpf_usd_sistema", value: dpfUsdMatch[1].replace(",", ".") + "%", confidence: "medium" });
    }
  }

  if (fileType === "afap") {
    // Rentabilidad real neta
    const rentMatch = t.match(/rentabilidad\s+(?:real\s+)?neta[^%\d]*(\d+[\.,]\d+)\s*%/);
    if (rentMatch) {
      patterns.push({ key: "rentabilidad_real_neta", value: rentMatch[1].replace(",", ".") + "%", confidence: "medium" });
    }

    // Comisión sobre salario
    const comisionMatch = t.match(/comisi[óo]n[^%\d]*(\d+[\.,]\d+)\s*%/);
    if (comisionMatch) {
      patterns.push({ key: "comision_salario", value: comisionMatch[1].replace(",", ".") + "%", confidence: "low" });
    }
  }

  if (fileType === "bps") {
    // Jubilación mínima
    const jubMinMatch = t.match(/jubilaci[óo]n\s+m[íi]nima[^$\d]*([\d.]+(?:,\d+)?)/);
    if (jubMinMatch) {
      patterns.push({ key: "jubilacion_minima", value: jubMinMatch[1].replace(/\./g, "").replace(",", "."), confidence: "medium" });
    }

    // Ratio aportantes / pasivos
    const ratioMatch = t.match(/(?:ratio|relaci[óo]n)\s+aportantes[^:]*:\s*(\d+[\.,]\d+)/);
    if (ratioMatch) {
      patterns.push({ key: "ratio_aportantes_pasivos", value: ratioMatch[1].replace(",", "."), confidence: "medium" });
    }
  }

  if (fileType === "banks") {
    // Tasa DPF USD genérica
    const tasaMatch = t.match(/(?:tna|tasa)[^%\d]*usd[^%\d]*(\d+[\.,]\d+)\s*%/);
    if (tasaMatch) {
      patterns.push({ key: "dpf_usd", value: tasaMatch[1].replace(",", ".") + "%", confidence: "low" });
    }
  }

  return patterns;
}

// ── Normalizar a ExtractedIndicator ──────────────────────────────────────────

function buildIndicatorsFromPatterns(
  patterns: ExtractedPattern[],
  fileType: FileType,
  fileName: string,
  _fileDate: string
): ExtractedIndicator[] {
  const today = new Date().toISOString().slice(0, 10);
  const indicators: ExtractedIndicator[] = [];

  const BCU_TASAS = "https://www.bcu.gub.uy/Servicios-Financieros-SSF/paginas/tasas-medias.aspx";
  const BCU_TPM   = "https://www.bcu.gub.uy/Politica-Economica-y-Mercados/Paginas/Politica-Monetaria.aspx";
  const BCU_AFAP  = "https://www.bcu.gub.uy/Servicios-Financieros-SSF/Paginas/Rentabilidad-Neta-AFAP.aspx";
  const BPS_IND   = "https://www.bps.gub.uy/1944/indicadores-de-la-seguridad-social.html";

  for (const p of patterns) {
    const status: IndicatorStatus = p.confidence === "high" ? "updated" : "needs_review";

    if (p.key === "tpm") {
      indicators.push({
        id: "bcu-tpm",
        name: "Tasa de Política Monetaria (TPM)",
        value: p.value,
        unit: "% anual",
        category: "macro",
        entity: "Banco Central del Uruguay (BCU)",
        source: "BCU — Política Monetaria",
        sourceUrl: BCU_TPM,
        sourceFile: fileName,
        lastUpdated: today,
        frequency: "monthly",
        explanation: "Tasa de referencia fijada por el BCU. Influye sobre el costo del crédito, los depósitos y las decisiones de ahorro e inversión.",
        status,
      });
    }

    if (p.key === "inflacion_uy") {
      indicators.push({
        id: "inflacion-uy",
        name: "Inflación Uruguay — IPC 12 meses",
        value: p.value,
        unit: "% anual",
        category: "macro",
        entity: "INE / BCU",
        source: "BCU / INE",
        sourceUrl: BCU_TASAS,
        sourceFile: fileName,
        lastUpdated: today,
        frequency: "monthly",
        explanation: "Variación anual del IPC. Mide cuánto sube el costo de vida y afecta el rendimiento real del ahorro en pesos.",
        status,
      });
    }

    if (p.key === "dolar_interbancario") {
      indicators.push({
        id: "dolar-interbancario",
        name: "Dólar interbancario",
        value: p.value,
        unit: "UYU por USD",
        currency: "USD",
        category: "macro",
        entity: "BCU",
        source: "BCU — Tipo de cambio",
        sourceUrl: "https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Cotizaciones.aspx",
        sourceFile: fileName,
        lastUpdated: today,
        frequency: "daily",
        explanation: "Tipo de cambio de referencia del dólar publicado por el BCU.",
        status,
      });
    }

    if (p.key === "dpf_usd_sistema") {
      indicators.push({
        id: "bcu-dpf-usd-promedio",
        name: "DPF USD — Promedio sistema",
        value: p.value,
        unit: "% TNA",
        currency: "USD",
        term: "30–365 días",
        category: "banks",
        entity: "Sistema financiero uruguayo",
        source: "BCU — Tasas medias sistema financiero",
        sourceUrl: BCU_TASAS,
        sourceFile: fileName,
        lastUpdated: today,
        frequency: "weekly",
        explanation: "Tasa promedio del sistema para depósitos a plazo fijo en dólares.",
        disclaimer: "Tasa promedio. Cada banco puede ofrecer condiciones distintas.",
        status,
      });
    }

    if (p.key === "rentabilidad_real_neta" && fileType === "afap") {
      // Intentar detectar nombre de AFAP del archivo
      const afapName = fileName.toLowerCase().includes("republica") ? "República AFAP"
        : fileName.toLowerCase().includes("sura")       ? "SURA AFAP"
        : fileName.toLowerCase().includes("union")      ? "UniónCapital AFAP"
        : fileName.toLowerCase().includes("integracion") ? "Integración AFAP"
        : "AFAP";

      const afapId = afapName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "");

      indicators.push({
        id: `afap-${afapId}-rentabilidad`,
        name: `${afapName} — Rentabilidad real neta`,
        value: p.value,
        unit: "% anual",
        category: "afaps",
        entity: afapName,
        source: "BCU — Superintendencia de Servicios Financieros",
        sourceUrl: BCU_AFAP,
        sourceFile: fileName,
        lastUpdated: today,
        frequency: "monthly",
        explanation: `Rentabilidad real neta de comisiones de ${afapName}. Publicada por la SSF del BCU.`,
        disclaimer: "La rentabilidad histórica no garantiza resultados futuros. Las AFAPs no ofrecen tasa fija.",
        status,
      });
    }

    if (p.key === "jubilacion_minima") {
      indicators.push({
        id: "bps-jubilacion-minima",
        name: "Jubilación mínima BPS",
        value: p.value,
        unit: "UYU/mes",
        currency: "UYU",
        category: "bps",
        entity: "BPS",
        source: "BPS — Montos y pasividades",
        sourceUrl: "https://www.bps.gub.uy/6182/montos-y-aumentos-de-pasividades.html",
        sourceFile: fileName,
        lastUpdated: today,
        frequency: "monthly",
        explanation: "Monto mínimo de jubilación del BPS. Se ajusta según el Índice Medio de Salarios.",
        disclaimer: "El BPS no es una inversión financiera.",
        status,
      });
    }
  }

  return indicators;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  log("\n╔══════════════════════════════════════════╗");
  log("║  INVERSAVE — Actualización de indicadores ║");
  log("╚══════════════════════════════════════════╝\n");

  // Verificar carpeta de PDFs
  if (!fs.existsSync(PDF_DIR)) {
    fs.mkdirSync(PDF_DIR, { recursive: true });
    logWarn(`Carpeta creada: ${PDF_DIR}`);
  }

  // Verificar carpeta de output
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    logOk(`Carpeta de salida creada: ${OUTPUT_DIR}`);
  }

  // Leer PDFs
  const allFiles = fs.readdirSync(PDF_DIR);
  const pdfFiles = allFiles.filter((f) => f.toLowerCase().endsWith(".pdf"));

  if (pdfFiles.length === 0) {
    log("⚠  No se encontraron PDFs en src/data-sources/pdfs/\n");
    log("   Colocar archivos con la siguiente convención:");
    log("     bcu_TPM_mayo2025.pdf");
    log("     afap_republica_Q1_2025.pdf");
    log("     bps_indicadores_2024.pdf");
    log("     banks_BROU_mayo2025.pdf\n");

    // Generar JSON vacío para que la app no falle
    const emptyOutput: GeneratedOutput = {
      lastGenerated: new Date().toISOString(),
      sources: [],
      indicators: [],
    };
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(emptyOutput, null, 2), "utf-8");
    logOk(`JSON vacío generado en: ${OUTPUT_FILE}`);
    log("\n  La app usará datos fallback (mock) hasta que haya PDFs.\n");
    return;
  }

  log(`  Encontrados ${pdfFiles.length} PDF(s):\n`);

  const sources: PdfSource[]           = [];
  const allIndicators: ExtractedIndicator[] = [];

  // Verificar disponibilidad de pdf-parse
  let hasPdfParse = false;
  try {
    require.resolve("pdf-parse");
    hasPdfParse = true;
    logOk("pdf-parse disponible — extracción de texto activada.");
  } catch {
    logWarn("pdf-parse no instalado. Modo metadata-only.");
    log("   Para activar extracción: npm install --save-dev pdf-parse @types/pdf-parse\n");
  }

  for (const fileName of pdfFiles) {
    const filePath = path.join(PDF_DIR, fileName);
    const fileType = detectFileType(fileName);

    log(`  📄 ${fileName} → tipo: ${fileType}`);

    let status: FileStatus = "needs_review";
    let notes = "";
    const fileIndicators: ExtractedIndicator[] = [];

    try {
      let text: string | null = null;

      if (hasPdfParse) {
        text = await extractText(filePath);
      }

      if (text) {
        const patterns = extractPatternsFromText(text, fileType);
        log(`     Patrones encontrados: ${patterns.length}`);

        if (patterns.length > 0) {
          const built = buildIndicatorsFromPatterns(
            patterns,
            fileType,
            fileName,
            new Date().toISOString().slice(0, 10)
          );
          fileIndicators.push(...built);
          status = "processed";
          notes  = `${patterns.length} patrón(es) extraído(s). ${built.length} indicador(es) generado(s). Revisar valores.`;
          logOk(`${built.length} indicador(es) extraído(s) → needs_review (verificar antes de publicar).`);
        } else {
          status = "needs_review";
          notes  = "Texto extraído pero no se reconocieron patrones de datos. Actualizar manualmente.";
          logWarn("No se reconocieron patrones. Actualización manual necesaria.");
        }
      } else {
        status = "needs_review";
        notes  = hasPdfParse
          ? "Texto vacío o no legible. El PDF puede ser escaneado (imagen). Actualización manual necesaria."
          : "pdf-parse no disponible. Instalar para extracción automática: npm install --save-dev pdf-parse";
        logWarn(notes);
      }
    } catch (err: unknown) {
      status = "failed";
      notes  = err instanceof Error ? err.message : "Error desconocido al procesar el PDF.";
      logErr(`Error: ${notes}`);
    }

    sources.push({ fileName, type: fileType, status, notes });
    allIndicators.push(...fileIndicators);
  }

  // Generar JSON de salida
  const output: GeneratedOutput = {
    lastGenerated: new Date().toISOString(),
    sources,
    indicators: allIndicators,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), "utf-8");

  log("\n──────────────────────────────────────────────");
  logOk(`JSON generado: ${OUTPUT_FILE}`);
  log(`   Fuentes procesadas: ${sources.length}`);
  log(`   Indicadores generados: ${allIndicators.length}`);

  const needsReview = sources.filter((s) => s.status === "needs_review");
  const failed      = sources.filter((s) => s.status === "failed");

  if (needsReview.length > 0) {
    log(`\n⚠  ${needsReview.length} archivo(s) requieren revisión manual:`);
    needsReview.forEach((s) => log(`   - ${s.fileName}: ${s.notes}`));
  }

  if (failed.length > 0) {
    log(`\n✗  ${failed.length} archivo(s) fallaron:`);
    failed.forEach((s) => log(`   - ${s.fileName}: ${s.notes}`));
  }

  log("\n  Próximos pasos:");
  log("   1. Revisar indicadores con status 'needs_review' en el JSON generado.");
  log("   2. Corregir valores incorrectos manualmente en el JSON.");
  log("   3. Cambiar status a 'updated' cuando el valor sea correcto.");
  log("   4. Reiniciar el servidor para que la app lea el JSON actualizado.\n");
}

main().catch((err) => {
  logErr(`Error fatal: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});
