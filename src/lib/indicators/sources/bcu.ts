/**
 * bcu.ts — Fuente Banco Central del Uruguay (BCU).
 *
 * DATOS AUTOMÁTICOS:
 *   Tipo de cambio USD/UYU → Yahoo Finance (en vivo, sin API key)
 *
 * DATOS MANUALES (actualizar en src/data/indicators/manual-data.ts):
 *   - Tasa de Política Monetaria (TPM)
 *   - Inflación Uruguay (IPC 12 meses)
 *   - Tasas DPF promedio sistema (USD y UYU)
 *
 * FUENTES OFICIALES:
 *   TPM:         https://www.bcu.gub.uy/Politica-Economica-y-Mercados/Paginas/Politica-Monetaria.aspx
 *   Tasas medias: https://www.bcu.gub.uy/Servicios-Financieros-SSF/paginas/tasas-medias.aspx
 *   IPC / INE:   https://www.ine.gub.uy/ipc-indice-de-precios-al-consumo
 *   Tipo cambio: https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Cotizaciones.aspx
 */

import type { Indicator } from "../types";
import { BCU as BCU_MANUAL } from "@/data/indicators/manual-data";

const BCU_TASAS = "https://www.bcu.gub.uy/Servicios-Financieros-SSF/paginas/tasas-medias.aspx";
const BCU_TPM   = "https://www.bcu.gub.uy/Politica-Economica-y-Mercados/Paginas/Politica-Monetaria.aspx";
const BCU_TC    = "https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Cotizaciones.aspx";
const INE_URL   = "https://www.ine.gub.uy/ipc-indice-de-precios-al-consumo";

// ── Yahoo Finance: tipo de cambio USD/UYU ─────────────────────────────────────

async function fetchUsdUyu(): Promise<number | null> {
  try {
    const res = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/UYU%3DX?interval=1d&range=1d",
      { headers: { "User-Agent": "Mozilla/5.0" }, next: { revalidate: 3_600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    const price = json?.chart?.result?.[0]?.meta?.regularMarketPrice;
    return typeof price === "number" ? price : null;
  } catch {
    return null;
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function manualValue(entry: { value: string; lastUpdated: string; status: string; period?: string }) {
  const hasValue = entry.value && entry.value !== "";
  return {
    value:       hasValue ? entry.value : "—",
    lastUpdated: entry.lastUpdated || new Date().toISOString().slice(0, 10),
    status:      (hasValue ? entry.status : "pending_review") as Indicator["status"],
    period:      entry.period || undefined,
  };
}

// ── Main export ───────────────────────────────────────────────────────────────

export async function fetchBcuIndicators(): Promise<Indicator[]> {
  const usdUyu = await fetchUsdUyu();
  const today  = new Date().toISOString().slice(0, 10);

  const tpm    = manualValue(BCU_MANUAL.tpm);
  const ipc    = manualValue(BCU_MANUAL.inflacion);
  const dpfUsd = manualValue(BCU_MANUAL.dpfUsdSistema);
  const dpfUyu = manualValue(BCU_MANUAL.dpfUyuSistema);

  return [
    {
      id: "bcu-tpm",
      name: "Tasa de Política Monetaria (TPM)",
      value: tpm.value !== "—" ? `${tpm.value}%` : "—",
      unit: "% anual",
      category: "macro",
      entity: "Banco Central del Uruguay (BCU)",
      period: tpm.period,
      source: "BCU — Política Monetaria",
      sourceUrl: BCU_TPM,
      lastUpdated: tpm.lastUpdated,
      frequency: "monthly",
      explanation:
        "Tasa de referencia fijada por el BCU para orientar el costo del dinero en Uruguay. Influye sobre el crédito, los depósitos bancarios y las decisiones de ahorro e inversión.",
      disclaimer:
        "Actualizar en src/data/indicators/manual-data.ts → BCU.tpm",
      status: tpm.status,
    },
    {
      id: "inflacion-uy",
      name: "Inflación Uruguay — IPC 12 meses",
      value: ipc.value !== "—" ? `${ipc.value}%` : "—",
      unit: "% anual",
      category: "macro",
      entity: "INE — Instituto Nacional de Estadística",
      period: ipc.period,
      source: "INE Uruguay",
      sourceUrl: INE_URL,
      lastUpdated: ipc.lastUpdated,
      frequency: "monthly",
      explanation:
        "Variación anual del Índice de Precios al Consumo (IPC) en Uruguay. Mide cuánto sube el costo de vida y afecta el rendimiento real de los ahorros en pesos.",
      disclaimer: "Actualizar en src/data/indicators/manual-data.ts → BCU.inflacion",
      status: ipc.status,
    },
    {
      id: "dolar-interbancario",
      name: "Dólar interbancario",
      value: usdUyu ? `$${usdUyu.toFixed(2)}` : "—",
      unit: "UYU por USD",
      currency: "USD",
      category: "macro",
      entity: "BCU / Mercado",
      source: usdUyu ? "Yahoo Finance (UYU=X)" : "BCU — Tipo de cambio",
      sourceUrl: BCU_TC,
      lastUpdated: today,
      frequency: "daily",
      explanation:
        "Tipo de cambio de referencia del dólar. Impacta en activos denominados en dólares, importaciones y planificación financiera en moneda extranjera.",
      disclaimer: usdUyu
        ? "Precio de mercado en tiempo real. Verificar tipo de cambio oficial en el BCU."
        : undefined,
      status: usdUyu ? "updated" : "pending_review",
    },
    {
      id: "bcu-dpf-usd-promedio",
      name: "DPF USD — Promedio sistema",
      value: dpfUsd.value !== "—" ? `${dpfUsd.value}%` : "—",
      unit: "% TNA",
      currency: "USD",
      term: "30–365 días",
      category: "banks",
      entity: "Sistema financiero uruguayo",
      period: dpfUsd.period,
      source: "BCU — Tasas medias del sistema financiero",
      sourceUrl: BCU_TASAS,
      lastUpdated: dpfUsd.lastUpdated,
      frequency: "weekly",
      explanation:
        "Tasa promedio del sistema para depósitos a plazo fijo en dólares. Refleja el rendimiento típico de instrumentos conservadores en moneda extranjera.",
      disclaimer:
        "Tasa promedio del sistema. Cada banco puede ofrecer condiciones distintas. Actualizar en manual-data.ts → BCU.dpfUsdSistema",
      status: dpfUsd.status,
    },
    {
      id: "bcu-dpf-uyu-promedio",
      name: "DPF UYU — Promedio sistema",
      value: dpfUyu.value !== "—" ? `${dpfUyu.value}%` : "—",
      unit: "% TNA",
      currency: "UYU",
      term: "30–365 días",
      category: "banks",
      entity: "Sistema financiero uruguayo",
      period: dpfUyu.period,
      source: "BCU — Tasas medias del sistema financiero",
      sourceUrl: BCU_TASAS,
      lastUpdated: dpfUyu.lastUpdated,
      frequency: "weekly",
      explanation:
        "Tasa promedio del sistema para depósitos a plazo fijo en pesos. Comparar siempre con la inflación para estimar el rendimiento real.",
      disclaimer:
        "Tasa promedio del sistema. Verificar con cada institución. Actualizar en manual-data.ts → BCU.dpfUyuSistema",
      status: dpfUyu.status,
    },
  ];
}
