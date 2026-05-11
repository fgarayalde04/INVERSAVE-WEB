/**
 * generated-reader.ts — Lector del JSON generado por el script PDF.
 *
 * Lee src/data/indicators/generated/indicators.json cuando existe.
 * Devuelve null si el archivo no existe, no es legible o está malformado.
 *
 * Usado por las fuentes (bcu.ts, afaps.ts, bps.ts, banks.ts) como
 * primera opción antes del fallback mock.
 */

import * as fs   from "fs";
import * as path from "path";
import type { GeneratedIndicatorsFile } from "./types";

export async function readGeneratedIndicators(): Promise<GeneratedIndicatorsFile | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "indicators",
      "generated",
      "indicators.json"
    );

    if (!fs.existsSync(filePath)) return null;

    const raw  = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw) as GeneratedIndicatorsFile;

    if (!data.indicators || !Array.isArray(data.indicators) || data.indicators.length === 0) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}
