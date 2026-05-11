/**
 * afaps.ts — Fuente datos AFAP.
 *
 * DATOS MANUALES (actualizar en src/data/indicators/manual-data.ts → AFAPS):
 *   Fuente BCU/SSF:  https://www.bcu.gub.uy/Servicios-Financieros-SSF/Paginas/Rentabilidad-Neta-AFAP.aspx
 *   ANAFAP:          https://www.anafap.com.uy/indicadores.php
 *
 * NOTA: Las AFAPs NO pagan tasa fija. Mostrar como rentabilidad histórica variable.
 */

import type { Indicator } from "../types";
import { AFAPS as AFAPS_MANUAL } from "@/data/indicators/manual-data";

const BCU_AFAP_URL = "https://www.bcu.gub.uy/Servicios-Financieros-SSF/Paginas/Rentabilidad-Neta-AFAP.aspx";
const DISCLAIMER   =
  "Las AFAPs no pagan una tasa fija ni garantizan un rendimiento mínimo. " +
  "La rentabilidad es histórica y varía en el tiempo según los instrumentos en los que invierten.";

const AFAP_LIST = [
  {
    key: "republica",
    name: "República AFAP",
    grupo: "Grupo BROU",
    sourceUrl: "https://www.rafap.com.uy/mvdcms/categoria/Indicadores-de-Republica-AFAP-82",
  },
  {
    key: "sura",
    name: "SURA AFAP",
    grupo: "Grupo Sura Asset Management",
    sourceUrl: "https://www.afapsura.com.uy/principales-cifras-2024/",
  },
  {
    key: "unioncapital",
    name: "UniónCapital AFAP",
    grupo: "Grupo Itaú",
    sourceUrl: "https://www.afapitau.com.uy/cifras",
  },
  {
    key: "integracion",
    name: "Integración AFAP",
    grupo: "Capital nacional",
    sourceUrl: "https://www.integracionafap.com.uy/informacion_valor.php",
  },
] as const;

// ── Main export ───────────────────────────────────────────────────────────────

export async function fetchAfapIndicators(): Promise<Indicator[]> {
  return AFAP_LIST.map((afap) => {
    const entry   = AFAPS_MANUAL[afap.key];
    const hasData = entry?.value && entry.value !== "";

    return {
      id: `afap-${afap.key}-rentabilidad`,
      name: `${afap.name} — Rentabilidad real neta`,
      value: hasData ? `${entry.value}%` : "—",
      unit: "% anual",
      category: "afaps" as const,
      entity: `${afap.name} · ${afap.grupo}`,
      period: entry?.period || undefined,
      source: "BCU — Superintendencia de Servicios Financieros",
      sourceUrl: afap.sourceUrl,
      lastUpdated: entry?.lastUpdated || new Date().toISOString().slice(0, 10),
      frequency: "monthly" as const,
      explanation:
        `Rentabilidad real neta de comisiones de ${afap.name}. ` +
        `Publicada trimestralmente por la SSF del BCU.`,
      disclaimer: DISCLAIMER,
      status: (hasData ? (entry.status ?? "updated") : "pending_review") as Indicator["status"],
    };
  });
}

export { BCU_AFAP_URL };
