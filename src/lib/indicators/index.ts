/**
 * index.ts — Orquestador principal de indicadores.
 *
 * Agrega todas las fuentes en grupos semánticos y devuelve
 * un IndicatorsBundle listo para consumir desde la UI o la API.
 *
 * Uso en Server Components (Next.js App Router):
 *
 *   import { getAllIndicators } from "@/lib/indicators";
 *   const bundle = await getAllIndicators();
 *
 * Uso en API Routes:
 *
 *   import { getGroupById } from "@/lib/indicators";
 *   const group = await getGroupById("afaps");
 *
 * ── Cómo agregar una nueva fuente ────────────────────────────────────────────
 *   1. Crear src/lib/indicators/sources/nueva-fuente.ts
 *   2. Exportar fetchNuevaFuenteIndicators(): Promise<Indicator[]>
 *   3. Importar y agregar en Promise.allSettled() abajo
 *   4. Crear el grupo correspondiente en buildGroups()
 *   5. Agregar la API route en src/app/api/indicators/nueva-fuente/route.ts
 */

import type { IndicatorGroup, IndicatorsBundle } from "./types";
import { fetchFredIndicators }  from "./sources/fred";
import { fetchBcuIndicators }   from "./sources/bcu";
import { fetchAfapIndicators }  from "./sources/afaps";
import { fetchBpsIndicators }   from "./sources/bps";
import { fetchBanksIndicators } from "./sources/banks";

// ── Main orchestrator ─────────────────────────────────────────────────────────

export async function getAllIndicators(): Promise<IndicatorsBundle> {
  // Fetch de todas las fuentes en paralelo — cada una maneja sus propios errores
  const [fredRes, bcuRes, afapRes, bpsRes, banksRes] = await Promise.allSettled([
    fetchFredIndicators(),
    fetchBcuIndicators(),
    fetchAfapIndicators(),
    fetchBpsIndicators(),
    fetchBanksIndicators(),
  ]);

  const fred  = fredRes.status  === "fulfilled" ? fredRes.value  : [];
  const bcu   = bcuRes.status   === "fulfilled" ? bcuRes.value   : [];
  const afaps = afapRes.status  === "fulfilled" ? afapRes.value  : [];
  const bps   = bpsRes.status   === "fulfilled" ? bpsRes.value   : [];
  const banks = banksRes.status === "fulfilled" ? banksRes.value : [];

  // Separar BCU macro de BCU banks (ambos viven en la misma fuente)
  const macro   = bcu.filter((i) => i.category === "macro");
  const bcuBank = bcu.filter((i) => i.category === "banks");

  const hasFredApi = !!process.env.FRED_API_KEY;

  const groups: IndicatorGroup[] = [
    // ── 1. Internacional (Fed + Tesoro) ────────────────────────────────────
    {
      id: "internacional",
      title: "Internacional",
      h2: "Contexto internacional — Fed y mercados EE.UU.",
      description:
        "La tasa de la Fed funciona como referencia internacional clave para los mercados globales. " +
        "Impacta en el tipo de cambio, el flujo de capitales y el rendimiento de activos en todo el mundo.",
      eduNote:
        "Una tasa Fed alta hace al dólar más atractivo para inversores globales. " +
        "Esto puede presionar a economías emergentes como Uruguay a través del tipo de cambio " +
        "y el costo del financiamiento externo.",
      disclaimer:
        "Datos obtenidos automáticamente desde FRED (Federal Reserve Economic Data). " +
        "Para activar la integración en vivo, configurar FRED_API_KEY en .env.local.",
      indicators: fred,
      lastFetched: new Date().toISOString(),
      source: hasFredApi ? "api" : "mock",
    },

    // ── 2. BCU — Macro Uruguay ──────────────────────────────────────────────
    {
      id: "bcu",
      title: "BCU",
      h2: "Banco Central del Uruguay — Tasas y macro",
      description:
        "La tasa de referencia del BCU influye sobre el costo del dinero, el crédito, " +
        "los depósitos y las decisiones de ahorro e inversión. " +
        "El BCU también publica el tipo de cambio oficial e índices de inflación.",
      eduNote:
        "Cuando el BCU sube su tasa de referencia, generalmente los depósitos bancarios " +
        "también ofrecen más rendimiento. Cuando la baja, ocurre lo contrario. " +
        "La tasa del BCU es la referencia para todo el sistema financiero uruguayo.",
      indicators: macro,
      lastFetched: new Date().toISOString(),
      source: "mock",
    },

    // ── 3. Tasas bancarias / DPF ────────────────────────────────────────────
    {
      id: "bancos",
      title: "Plazos fijos",
      h2: "Tasas bancarias — Depósitos a plazo fijo",
      description:
        "Los bancos pueden ofrecer tasas por depósitos a plazo fijo (DPF). " +
        "Estas tasas dependen de la moneda, el plazo, el banco y el contexto de mercado. " +
        "Los promedios del sistema provienen del BCU.",
      eduNote:
        "Un plazo fijo es un instrumento conservador que ofrece certeza de corto plazo. " +
        "En dólares protege del riesgo cambiario. En pesos, hay que comparar con la inflación " +
        "para saber si el rendimiento es real. Ninguno escala como una inversión de largo plazo.",
      disclaimer:
        "Las tasas son orientativas y pueden cambiar en cualquier momento. " +
        "Verificar condiciones actualizadas directamente con cada institución o en el BCU.",
      indicators: [...bcuBank, ...banks],
      lastFetched: new Date().toISOString(),
      source: "mock",
    },

    // ── 4. AFAPs ────────────────────────────────────────────────────────────
    {
      id: "afaps",
      title: "AFAPs",
      h2: "AFAPs — Rentabilidad histórica del pilar 2",
      description:
        "Las AFAPs administran el segundo pilar del sistema previsional uruguayo. " +
        "No pagan una tasa fija — la rentabilidad varía en el tiempo según los " +
        "instrumentos en los que invierten. Los datos se publican trimestralmente por el BCU.",
      eduNote:
        "Las AFAPs invierten principalmente en títulos públicos uruguayos, bonos internacionales " +
        "y otros activos regulados. La rentabilidad es variable y no garantizada. " +
        "Comparar AFAPs usando la herramienta oficial del BCU o de ANAFAP.",
      disclaimer:
        "Las AFAPs no ofrecen una tasa fija ni garantizan un rendimiento mínimo. " +
        "La rentabilidad histórica no garantiza resultados futuros. " +
        "Datos publicados trimestralmente por la Superintendencia de Servicios Financieros (SSF) del BCU.",
      indicators: afaps,
      lastFetched: new Date().toISOString(),
      source: "mock",
    },

    // ── 5. BPS ──────────────────────────────────────────────────────────────
    {
      id: "bps",
      title: "BPS",
      h2: "BPS — Sistema previsional uruguayo",
      description:
        "El BPS no es una inversión financiera. Es el pilar solidario del sistema previsional uruguayo. " +
        "Sus indicadores ayudan a entender la sostenibilidad del sistema y la situación " +
        "de los jubilados y trabajadores activos.",
      eduNote:
        "El pilar solidario (BPS) se financia con aportes de trabajadores activos. " +
        "La relación entre aportantes y pasivos es el indicador clave de sostenibilidad. " +
        "Un ratio decreciente es una de las razones por las que planificar el ahorro " +
        "complementario es cada vez más importante.",
      disclaimer:
        "El BPS no funciona como una inversión con tasa de rendimiento. " +
        "Sus indicadores muestran la estructura del sistema previsional. " +
        "Datos publicados por el Banco de Previsión Social.",
      indicators: bps,
      lastFetched: new Date().toISOString(),
      source: "mock",
    },
  ];

  // Determinar fuente predominante
  const dataSource = hasFredApi ? "api" : "mock";

  return {
    groups,
    lastGenerated: new Date().toISOString(),
    dataSource,
  };
}

// ── Helpers por grupo ─────────────────────────────────────────────────────────

export async function getGroupById(id: string): Promise<IndicatorGroup | null> {
  const bundle = await getAllIndicators();
  return bundle.groups.find((g) => g.id === id) ?? null;
}

export async function getIndicatorById(indicatorId: string) {
  const bundle = await getAllIndicators();
  for (const group of bundle.groups) {
    const found = group.indicators.find((i) => i.id === indicatorId);
    if (found) return found;
  }
  return null;
}

// Re-exportar tipos para conveniencia
export type { Indicator, IndicatorGroup, IndicatorsBundle } from "./types";
