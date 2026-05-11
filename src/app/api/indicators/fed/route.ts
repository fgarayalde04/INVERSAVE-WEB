/**
 * GET /api/indicators/fed
 *
 * Devuelve indicadores de la Fed (FRED API):
 *   - Tasa de Fondos Federales (FEDFUNDS)
 *   - Bono del Tesoro 10 años (DGS10)
 *   - Bono del Tesoro 2 años (DGS2)
 *   - CPI EE.UU. (CPIAUCSL)
 *
 * Requiere FRED_API_KEY en .env.local.
 * Sin API key devuelve status "pending_review" sin romper la app.
 *
 * Cache: 24 horas
 */

import { NextResponse } from "next/server";
import { fetchFredIndicators } from "@/lib/indicators/sources/fred";

export const revalidate = 86400; // 24 horas

export async function GET() {
  try {
    const indicators = await fetchFredIndicators();
    return NextResponse.json(
      { indicators, source: "fred", lastFetched: new Date().toISOString() },
      {
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=172800",
        },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { error: "No se pudo obtener datos de FRED.", detail: message },
      { status: 500 }
    );
  }
}
