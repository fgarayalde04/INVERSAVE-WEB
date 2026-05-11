/**
 * GET /api/indicators/banks
 *
 * Devuelve tasas de depósito a plazo fijo de bancos uruguayos:
 *   BROU, Itaú, Santander, Scotiabank, BBVA, HSBC, Heritage, Bandes
 *
 * Datos: generados desde PDFs o fallback pendiente.
 * Actualizar con: npm run update:indicators
 *
 * FUENTE PRIMARIA: BCU — Tasas medias del sistema financiero
 * FUENTE SECUNDARIA: PDFs tarifarios de cada banco
 *
 * Cache: 7 días
 */

import { NextResponse } from "next/server";
import { fetchBanksIndicators } from "@/lib/indicators/sources/banks";

export const revalidate = 604800; // 7 días

export async function GET() {
  try {
    const indicators = await fetchBanksIndicators();
    return NextResponse.json(
      { indicators, source: "banks", lastFetched: new Date().toISOString() },
      {
        headers: {
          "Cache-Control": "public, s-maxage=604800, stale-while-revalidate=1209600",
        },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { error: "No se pudo obtener datos bancarios.", detail: message },
      { status: 500 }
    );
  }
}
