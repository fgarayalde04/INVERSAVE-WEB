/**
 * GET /api/indicators/bps
 *
 * Devuelve indicadores del sistema previsional BPS:
 *   - Jubilación mínima
 *   - Jubilación promedio
 *   - Total de pasivos activos
 *   - Trabajadores aportantes activos
 *   - Ratio aportantes / pasivos
 *
 * Datos: generados desde PDFs o fallback pendiente.
 * Actualizar con: npm run update:indicators
 *
 * Cache: 30 días (datos mensuales/anuales)
 */

import { NextResponse } from "next/server";
import { fetchBpsIndicators } from "@/lib/indicators/sources/bps";

export const revalidate = 2592000; // 30 días

export async function GET() {
  try {
    const indicators = await fetchBpsIndicators();
    return NextResponse.json(
      { indicators, source: "bps", lastFetched: new Date().toISOString() },
      {
        headers: {
          "Cache-Control": "public, s-maxage=2592000, stale-while-revalidate=5184000",
        },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { error: "No se pudo obtener datos del BPS.", detail: message },
      { status: 500 }
    );
  }
}
