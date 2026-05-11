/**
 * GET /api/indicators
 *
 * Devuelve el bundle completo de indicadores (todos los grupos).
 *
 * Respuesta:
 *   { groups: IndicatorGroup[], lastGenerated: string, dataSource: string }
 *
 * Cache: 1 hora (Next.js revalidate)
 */

import { NextResponse } from "next/server";
import { getAllIndicators } from "@/lib/indicators";

export const revalidate = 3600; // 1 hora

export async function GET() {
  try {
    const bundle = await getAllIndicators();
    return NextResponse.json(bundle, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { error: "No se pudo obtener los indicadores.", detail: message },
      { status: 500 }
    );
  }
}
