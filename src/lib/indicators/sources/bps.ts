/**
 * bps.ts — Fuente datos BPS (Banco de Previsión Social).
 *
 * DATOS MANUALES (actualizar en src/data/indicators/manual-data.ts → BPS):
 *   Estadísticas:  https://www.bps.gub.uy/1944/indicadores-de-la-seguridad-social.html
 *   Montos:        https://www.bps.gub.uy/6182/montos-y-aumentos-de-pasividades.html
 *
 * NOTA: El BPS NO es una inversión. Sus datos muestran la sostenibilidad del sistema previsional.
 */

import type { Indicator } from "../types";
import { BPS as BPS_MANUAL } from "@/data/indicators/manual-data";

const BPS_BASE        = "https://www.bps.gub.uy";
const BPS_INDICADORES = `${BPS_BASE}/1944/indicadores-de-la-seguridad-social.html`;
const BPS_MONTOS      = `${BPS_BASE}/6182/montos-y-aumentos-de-pasividades.html`;
const BPS_ESTADIST    = `${BPS_BASE}/1378/estadisticas-de-seguridad-social.html`;
const DISCLAIMER      =
  "El BPS no funciona como una inversión con tasa de rendimiento. " +
  "Es el pilar solidario del sistema previsional uruguayo. " +
  "Sus indicadores muestran la estructura y sostenibilidad del sistema.";

// ── Main export ───────────────────────────────────────────────────────────────

export async function fetchBpsIndicators(): Promise<Indicator[]> {
  const today = new Date().toISOString().slice(0, 10);

  function entry(
    key: keyof typeof BPS_MANUAL,
    format: (v: string) => string = (v) => v
  ) {
    const e        = BPS_MANUAL[key];
    const hasValue = e?.value && e.value !== "";
    return {
      value:       hasValue ? format(e.value) : "—",
      lastUpdated: e?.lastUpdated || today,
      status:      (hasValue ? (e.status ?? "updated") : "pending_review") as Indicator["status"],
      period:      e?.period || undefined,
    };
  }

  const jubMin    = entry("jubilacionMinima",       (v) => `$${Number(v).toLocaleString("es-UY")}`);
  const jubProm   = entry("jubilacionPromedio",     (v) => `$${Number(v).toLocaleString("es-UY")}`);
  const pasivos   = entry("totalPasivos",           (v) => Number(v).toLocaleString("es-UY"));
  const aportant  = entry("aportantesActivos",      (v) => Number(v).toLocaleString("es-UY"));
  const ratio     = entry("ratioAportantesPasivos", (v) => v);

  return [
    {
      id: "bps-jubilacion-minima",
      name: "Jubilación mínima BPS",
      value: jubMin.value,
      unit: "UYU/mes",
      currency: "UYU",
      category: "bps",
      entity: "BPS — Banco de Previsión Social",
      period: jubMin.period,
      source: "BPS — Montos y aumentos de pasividades",
      sourceUrl: BPS_MONTOS,
      lastUpdated: jubMin.lastUpdated,
      frequency: "monthly",
      explanation:
        "Monto mínimo de jubilación que paga el BPS. Se ajusta periódicamente según el Índice Medio de Salarios (IMS). Referencia del piso del sistema previsional solidario.",
      disclaimer: DISCLAIMER,
      status: jubMin.status,
    },
    {
      id: "bps-jubilacion-promedio",
      name: "Jubilación promedio BPS",
      value: jubProm.value,
      unit: "UYU/mes",
      currency: "UYU",
      category: "bps",
      entity: "BPS — Banco de Previsión Social",
      period: jubProm.period,
      source: "BPS — Estadísticas de seguridad social",
      sourceUrl: BPS_ESTADIST,
      lastUpdated: jubProm.lastUpdated,
      frequency: "monthly",
      explanation:
        "Monto promedio de jubilación pagada por el BPS. Permite entender el ingreso típico de quien depende únicamente del pilar solidario.",
      disclaimer: DISCLAIMER,
      status: jubProm.status,
    },
    {
      id: "bps-total-pasivos",
      name: "Pasivos activos BPS",
      value: pasivos.value,
      unit: "personas",
      category: "bps",
      entity: "BPS — Banco de Previsión Social",
      period: pasivos.period,
      source: "BPS — Indicadores de seguridad social",
      sourceUrl: BPS_INDICADORES,
      lastUpdated: pasivos.lastUpdated,
      frequency: "monthly",
      explanation:
        "Cantidad total de personas que reciben jubilaciones o pensiones del BPS. Mide la demanda sobre el sistema solidario.",
      disclaimer: DISCLAIMER,
      status: pasivos.status,
    },
    {
      id: "bps-aportantes-activos",
      name: "Trabajadores aportantes",
      value: aportant.value,
      unit: "personas",
      category: "bps",
      entity: "BPS — Banco de Previsión Social",
      period: aportant.period,
      source: "BPS — Indicadores de seguridad social",
      sourceUrl: BPS_INDICADORES,
      lastUpdated: aportant.lastUpdated,
      frequency: "monthly",
      explanation:
        "Cantidad de trabajadores activos que contribuyen al BPS. Junto con el número de pasivos, muestra la presión financiera sobre el pilar solidario.",
      disclaimer: DISCLAIMER,
      status: aportant.status,
    },
    {
      id: "bps-ratio-aportantes-pasivos",
      name: "Ratio aportantes / pasivos",
      value: ratio.value,
      unit: "aportantes por pasivo",
      category: "bps",
      entity: "BPS — Banco de Previsión Social",
      period: ratio.period,
      source: "BPS — Indicadores de seguridad social",
      sourceUrl: BPS_INDICADORES,
      lastUpdated: ratio.lastUpdated,
      frequency: "monthly",
      explanation:
        "Cuántos trabajadores activos financian a cada jubilado del BPS. Un ratio decreciente muestra mayor presión sobre el sistema. Clave para entender por qué el ahorro complementario es necesario.",
      disclaimer: DISCLAIMER,
      status: ratio.status,
    },
  ];
}
