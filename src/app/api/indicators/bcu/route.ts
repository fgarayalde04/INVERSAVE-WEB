/**
 * GET /api/indicators/bcu
 *
 * Devuelve indicadores del Banco Central del Uruguay:
 *   - Tasa de Política Monetaria (TPM)
 *   - Inflación Uruguay (IPC 12 meses)
 *   - Dólar interbancario
 *   - Tasas pasivas promedio USD y UYU
 *
 * Datos: generados desde PDFs (src/data/indicators/generated/indicators.json)
 *        o fallback pendiente de actualización.
 *
 * Cache: 24 horas
 */

import { NextResponse } from "next/server";
import { fetchBcuIndicators } from "@/lib/indicators/sources/bcu";

export const revalidate = 86400; // 24 horas

export async function GET() {
  try {
    const indicators = await fetchBcuIndicators();
    return NextResponse.json(
      { indicators, source: "bcu", lastFetched: new Date().toISOString() },
      {
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=172800",
        },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { error: "No se pudo obtener datos del BCU.", detail: message },
      { status: 500 }
    );
  }
}
