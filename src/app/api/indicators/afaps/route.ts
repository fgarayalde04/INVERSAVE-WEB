/**
 * GET /api/indicators/afaps
 *
 * Devuelve rentabilidad histórica de las 4 AFAPs uruguayas:
 *   - República AFAP
 *   - SURA AFAP
 *   - UniónCapital AFAP
 *   - Integración AFAP
 *
 * Datos: generados desde PDFs o fallback pendiente.
 * Actualizar con: npm run update:indicators
 *
 * IMPORTANTE: Las AFAPs no ofrecen tasa fija.
 * Mostrar siempre con disclaimer de rentabilidad variable.
 *
 * Cache: 7 días (datos trimestrales)
 */

import { NextResponse } from "next/server";
import { fetchAfapIndicators } from "@/lib/indicators/sources/afaps";

export const revalidate = 604800; // 7 días

export async function GET() {
  try {
    const indicators = await fetchAfapIndicators();
    return NextResponse.json(
      { indicators, source: "afaps", lastFetched: new Date().toISOString() },
      {
        headers: {
          "Cache-Control": "public, s-maxage=604800, stale-while-revalidate=1209600",
        },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { error: "No se pudo obtener datos de AFAPs.", detail: message },
      { status: 500 }
    );
  }
}
