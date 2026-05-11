/**
 * types.ts — Tipos centrales para la arquitectura de Indicadores.
 *
 * Estas interfaces definen el contrato entre:
 *   - fuentes de datos (FRED, BCU, AFAPs, BPS, bancos)
 *   - la capa de normalización
 *   - los componentes de presentación
 *   - las API routes
 *
 * Cómo agregar un nuevo campo:
 *   1. Agregarlo aquí con su tipo y JSDoc.
 *   2. Actualizarlo en el source correspondiente (sources/*.ts).
 *   3. Actualizarlo en el mock (si corresponde).
 */

// ── Status ───────────────────────────────────────────────────────────────────

/** Estado del dato:
 *  - `updated`:            dato actualizado desde fuente oficial
 *  - `pending_review`:     dato pendiente — fuente no conectada o no actualizada
 *  - `source_unavailable`: fuente no disponible o error al conectar
 */
export type IndicatorStatus =
  | "updated"
  | "pending_review"
  | "source_unavailable";

// ── Frequency ────────────────────────────────────────────────────────────────

export type DataFrequency = "daily" | "weekly" | "monthly" | "manual";

// ── Category ─────────────────────────────────────────────────────────────────

export type IndicatorCategory =
  | "fed"     // Reserva Federal / datos internacionales
  | "macro"   // BCU / macro Uruguay
  | "banks"   // Tasas bancarias / DPF
  | "afaps"   // Rentabilidad histórica AFAPs
  | "bps"     // Indicadores sistema previsional BPS
  | "market"; // S&P 500 / mercado (futuro)

// ── Indicator ────────────────────────────────────────────────────────────────

export interface Indicator {
  /** Identificador único. Snake-case. Ej: "fed-funds-rate", "bps-jubilacion-minima" */
  id: string;

  /** Nombre visible. Ej: "Tasa de Fondos Federales" */
  name: string;

  /** Valor del indicador. String para unidades compuestas ("4.33%"), number para cálculos */
  value: string | number;

  /** Unidad de medida. Ej: "%", "UYU/mes", "índice", "personas" */
  unit?: string;

  /** Categoría funcional */
  category: IndicatorCategory;

  /** Entidad emisora del dato. Ej: "Reserva Federal (Fed)", "BCU" */
  entity?: string;

  /** Período al que corresponde el dato. Ej: "Mayo 2025", "Q1 2025" */
  period?: string;

  /** Moneda si aplica. Ej: "USD", "UYU", "UI" */
  currency?: string;

  /** Plazo del instrumento. Ej: "30–365 días", "10 años" */
  term?: string;

  /** Nombre de la fuente. Ej: "FRED — Reserva Federal de EE.UU." */
  source: string;

  /** URL a la fuente oficial */
  sourceUrl?: string;

  /** Nombre del archivo PDF de origen (si fue extraído de un PDF) */
  sourceFile?: string;

  /** Fecha de última actualización ISO (YYYY-MM-DD) */
  lastUpdated: string;

  /** Frecuencia esperada de actualización */
  frequency: DataFrequency;

  /** Explicación educativa breve (1–2 oraciones) */
  explanation: string;

  /** Disclaimer o aclaración legal */
  disclaimer?: string;

  /** Estado del dato */
  status: IndicatorStatus;
}

// ── IndicatorGroup ───────────────────────────────────────────────────────────

export interface IndicatorGroup {
  /** ID de la sección. Usado como anchor. Ej: "bancos", "afaps" */
  id: string;

  /** Etiqueta corta. Usada en menú interno o chips */
  title: string;

  /** H2 visible en la página */
  h2: string;

  /** Párrafo descriptivo de la sección */
  description: string;

  /** Nota educativa destacada (en callout verde) */
  eduNote?: string;

  /** Disclaimer de la sección */
  disclaimer?: string;

  /** Lista de indicadores de esta sección */
  indicators: Indicator[];

  /** Cuándo se obtuvieron los datos (ISO string) */
  lastFetched?: string;

  /** Origen de los datos */
  source?: "api" | "generated" | "mock";
}

// ── IndicatorsBundle ─────────────────────────────────────────────────────────

export interface IndicatorsBundle {
  /** Grupos de indicadores organizados por categoría */
  groups: IndicatorGroup[];

  /** Cuándo se generó este bundle (ISO string) */
  lastGenerated: string;

  /** Origen predominante de los datos */
  dataSource: "api" | "generated" | "mock";
}

// ── GeneratedIndicatorsFile ──────────────────────────────────────────────────
// Estructura del archivo indicators.json generado por el script PDF

export interface PdfSource {
  fileName: string;
  type: "bcu" | "afap" | "bps" | "banks" | "unknown";
  status: "processed" | "needs_review" | "failed";
  notes?: string;
}

export interface GeneratedIndicatorsFile {
  lastGenerated: string;
  sources: PdfSource[];
  indicators: Indicator[];
}
