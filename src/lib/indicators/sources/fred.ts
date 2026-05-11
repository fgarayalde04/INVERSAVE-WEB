/**
 * fred.ts — Fuente internacional: Fed, Tesoro y tipo de cambio.
 *
 * FUENTE PRIMARIA (sin API key, automático):
 *   Yahoo Finance — misma fuente que usa /api/spy-data, sin clave requerida.
 *   Datos en tiempo real de tasas del Tesoro, T-bill y tipo de cambio USD/UYU.
 *
 * FUENTE SECUNDARIA (con FRED_API_KEY, más exacto):
 *   FRED — Federal Reserve Economic Data
 *   Registrarse gratis en https://fred.stlouisfed.org/docs/api/api_key.html
 *   Agregar al .env.local: FRED_API_KEY=tu_clave
 *
 * Tickers Yahoo Finance utilizados:
 *   ^IRX  — T-Bill 13 semanas (proxy Fed Funds Rate)
 *   ^TNX  — Bono del Tesoro 10 años
 *   ^FVX  — Bono del Tesoro 5 años
 *   ^TYX  — Bono del Tesoro 30 años
 *   UYU=X — Tipo de cambio USD/UYU
 */

import type { Indicator } from "../types";
import * as cache from "../cache";

const YAHOO_BASE = "https://query1.finance.yahoo.com/v8/finance/chart";
const FRED_BASE  = "https://api.stlouisfed.org/fred/series/observations";
const CACHE_KEY  = "fred:all";
const TODAY      = () => new Date().toISOString().slice(0, 10);

// ── Yahoo Finance fetch ────────────────────────────────────────────────────────

async function fetchYahoo(ticker: string): Promise<number | null> {
  try {
    const encoded = encodeURIComponent(ticker);
    const url = `${YAHOO_BASE}/${encoded}?interval=1d&range=1d`;
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 3_600 }, // cache 1h en Next.js
    });
    if (!res.ok) return null;
    const json = await res.json();
    const price = json?.chart?.result?.[0]?.meta?.regularMarketPrice;
    return typeof price === "number" ? price : null;
  } catch {
    return null;
  }
}

// ── FRED fetch (con API key) ──────────────────────────────────────────────────

interface FredResponse {
  observations: { date: string; value: string }[];
}

async function fetchFred(
  seriesId: string,
  apiKey: string
): Promise<{ date: string; value: number } | null> {
  try {
    const url = new URL(FRED_BASE);
    url.searchParams.set("series_id",  seriesId);
    url.searchParams.set("api_key",    apiKey);
    url.searchParams.set("file_type",  "json");
    url.searchParams.set("sort_order", "desc");
    url.searchParams.set("limit",      "1");
    const res = await fetch(url.toString(), { next: { revalidate: 86_400 } });
    if (!res.ok) return null;
    const json: FredResponse = await res.json();
    const obs = json.observations?.[0];
    if (!obs || obs.value === ".") return null;
    return { date: obs.date, value: parseFloat(obs.value) };
  } catch {
    return null;
  }
}

function fmt(v: number, decimals = 2): string {
  return `${v.toFixed(decimals)}%`;
}

// ── Main export ───────────────────────────────────────────────────────────────

export async function fetchFredIndicators(): Promise<Indicator[]> {
  const cached = cache.get<Indicator[]>(CACHE_KEY);
  if (cached) return cached;

  const apiKey = process.env.FRED_API_KEY;

  // Intentar Yahoo Finance primero (no requiere API key)
  const [irx, tnx, fvx, tyx] = await Promise.all([
    fetchYahoo("^IRX"), // T-Bill 13W — proxy Fed Funds
    fetchYahoo("^TNX"), // Treasury 10Y
    fetchYahoo("^FVX"), // Treasury 5Y
    fetchYahoo("^TYX"), // Treasury 30Y
  ]);

  // Si hay FRED API key, intentar obtener Fed Funds Rate oficial
  let fedFundsOfficial: { date: string; value: number } | null = null;
  if (apiKey) {
    fedFundsOfficial = await fetchFred("FEDFUNDS", apiKey);
  }

  const today = TODAY();

  const indicators: Indicator[] = [
    // ── Fed Funds Rate ────────────────────────────────────────────────────────
    {
      id: "fed-funds-rate",
      name: "T-Bill 13 semanas (ref. Fed)",
      value: fedFundsOfficial
        ? fmt(fedFundsOfficial.value)
        : irx
        ? fmt(irx)
        : "—",
      unit: "%",
      category: "fed",
      entity: "Reserva Federal de EE.UU. (Fed)",
      period: fedFundsOfficial
        ? new Date(fedFundsOfficial.date + "T12:00:00Z").toLocaleDateString("es-UY", { month: "long", year: "numeric" })
        : undefined,
      source: fedFundsOfficial
        ? "FRED — Federal Reserve"
        : "Yahoo Finance (^IRX)",
      sourceUrl: "https://fred.stlouisfed.org/series/FEDFUNDS",
      lastUpdated: fedFundsOfficial?.date ?? today,
      frequency: "daily",
      explanation:
        "Tasa de referencia a corto plazo de EE.UU. El T-Bill de 13 semanas es un proxy de la tasa de fondos federales de la Fed. Influye en el costo del crédito global y los mercados de capitales.",
      disclaimer: "Dato informativo. No implica recomendación de inversión.",
      status: irx || fedFundsOfficial ? "updated" : "pending_review",
    },

    // ── Treasury 10Y ──────────────────────────────────────────────────────────
    {
      id: "treasury-10y",
      name: "Bono del Tesoro — 10 años",
      value: tnx ? fmt(tnx) : "—",
      unit: "%",
      category: "fed",
      entity: "Tesoro de EE.UU.",
      term: "10 años",
      source: "Yahoo Finance (^TNX)",
      sourceUrl: "https://fred.stlouisfed.org/series/DGS10",
      lastUpdated: today,
      frequency: "daily",
      explanation:
        "Rendimiento del bono soberano de EE.UU. a 10 años. Es la referencia global para tasas de largo plazo y valuación de activos financieros en todo el mundo.",
      disclaimer: "Dato informativo. No implica recomendación de inversión.",
      status: tnx ? "updated" : "pending_review",
    },

    // ── Treasury 5Y ───────────────────────────────────────────────────────────
    {
      id: "treasury-5y",
      name: "Bono del Tesoro — 5 años",
      value: fvx ? fmt(fvx) : "—",
      unit: "%",
      category: "fed",
      entity: "Tesoro de EE.UU.",
      term: "5 años",
      source: "Yahoo Finance (^FVX)",
      sourceUrl: "https://fred.stlouisfed.org/series/DGS5",
      lastUpdated: today,
      frequency: "daily",
      explanation:
        "Rendimiento del bono soberano de EE.UU. a 5 años. Refleja las expectativas de mediano plazo sobre la política monetaria y el crecimiento económico.",
      disclaimer: "Dato informativo. No implica recomendación de inversión.",
      status: fvx ? "updated" : "pending_review",
    },

    // ── Treasury 30Y ──────────────────────────────────────────────────────────
    {
      id: "treasury-30y",
      name: "Bono del Tesoro — 30 años",
      value: tyx ? fmt(tyx) : "—",
      unit: "%",
      category: "fed",
      entity: "Tesoro de EE.UU.",
      term: "30 años",
      source: "Yahoo Finance (^TYX)",
      sourceUrl: "https://fred.stlouisfed.org/series/DGS30",
      lastUpdated: today,
      frequency: "daily",
      explanation:
        "Rendimiento del bono soberano de EE.UU. a 30 años. Referencia para el costo del capital a largo plazo y valuación de activos de renta fija global.",
      disclaimer: "Dato informativo. No implica recomendación de inversión.",
      status: tyx ? "updated" : "pending_review",
    },
  ];

  // Cachear 1 hora
  cache.set(CACHE_KEY, indicators, 60 * 60 * 1_000);
  return indicators;
}
