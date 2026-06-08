/**
 * market.ts — Datos de contexto financiero para la sección Mercado.
 *
 * CÓMO ACTUALIZAR:
 *   - Las tasas bancarias se publican diariamente en:
 *     https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Tasas.aspx
 *   - Las rentabilidades de AFAPs se publican trimestralmente en:
 *     https://www.bcu.gub.uy/Regulacion-y-Supervision/Paginas/Rendimientos-AFAP.aspx
 *   - La tasa de la FED se actualiza en cada reunión del FOMC:
 *     https://www.federalreserve.gov/monetarypolicy/openmarket.htm
 *
 *   Para cada campo actualizado: cambiar `estado` a "actualizado",
 *   completar `valor` y actualizar `fechaConsulta`.
 */

// ── Tipos ────────────────────────────────────────────────────

export type EstadoDato = "actualizado" | "pendiente" | "no-disponible"

export interface Dato {
  valor: string
  estado: EstadoDato
  fuente: string
  fuenteUrl: string
  fechaConsulta: string // "Ej: Mayo 2026"
  nota?: string
}

// ── Helpers ──────────────────────────────────────────────────

const PENDIENTE = (fuente: string, fuenteUrl: string, nota?: string): Dato => ({
  valor: "—",
  estado: "pendiente",
  fuente,
  fuenteUrl,
  fechaConsulta: "Pendiente",
  nota: nota ?? "Actualizar desde la fuente oficial indicada.",
})

const ACTUALIZADO = (valor: string, fuente: string, fuenteUrl: string, fechaConsulta: string, nota?: string): Dato => ({
  valor,
  estado: "actualizado",
  fuente,
  fuenteUrl,
  fechaConsulta,
  nota,
})

const BCU_TASAS_URL = "https://www.bcu.gub.uy/Servicios-Financieros-SSF/Paginas/Tasas-Medias.aspx"
const BCU_AFAP_URL  = "https://www.bcu.gub.uy/Servicios-Financieros-SSF/paginas/memoria-afap.aspx"
const BCU_AFAP_RENT_URL = "https://www.bcu.gub.uy/Servicios-Financieros-SSF/AFAPRentabilidades/cocf02d0526.pdf"
const FED_URL       = "https://www.federalreserve.gov/monetarypolicy/openmarket.htm"
const INE_URL       = "https://www.ine.gub.uy/ipc-indice-de-precios-al-consumo"

// ── Indicadores macro ────────────────────────────────────────

export interface IndicadorMacro {
  id: string
  label: string
  sublabel: string
  dato: Dato
}

export const INDICADORES: IndicadorMacro[] = [
  {
    id: "fed",
    label: "Tasa FED",
    sublabel: "Fondos federales EE.UU.",
    dato: PENDIENTE("Reserva Federal (Fed)", FED_URL, "Tasa objetivo del FOMC. Actualizar tras cada reunión."),
  },
  {
    id: "inflacion-uy",
    label: "Inflación UY",
    sublabel: "Variación anual IPC",
    dato: PENDIENTE("INE — Instituto Nacional de Estadística", INE_URL, "IPC acumulado 12 meses."),
  },
  {
    id: "tasa-ref-bcu",
    label: "Tasa BCU",
    sublabel: "Tasa de política monetaria",
    dato: PENDIENTE("Banco Central del Uruguay (BCU)", "https://www.bcu.gub.uy/Politica-Economica-y-Mercados/Paginas/Politica-Monetaria.aspx", "Tasa de referencia del BCU."),
  },
  {
    id: "dolar",
    label: "Dólar interbancario",
    sublabel: "USD/UYU — tipo de cambio",
    dato: PENDIENTE("Banco Central del Uruguay (BCU)", BCU_TASAS_URL, "Tipo de cambio de referencia publicado por el BCU."),
  },
]

// ── Bancos uruguayos ─────────────────────────────────────────

export type PlazoDPF = "30d" | "60d" | "90d" | "180d" | "365d"

export interface TasaBanco {
  moneda: "USD" | "UYU" | "UI"
  plazo: PlazoDPF
  tasaTna: Dato
}

export interface Banco {
  id: string
  nombre: string
  abrev: string
  tipo: "público" | "privado"
  sitioWeb: string
  descripcion: string
  tasas: TasaBanco[]
}

// Helpers por moneda para no repetir fuentes
const tasaUSD = (plazo: PlazoDPF, fuente: string, url: string, nota?: string): TasaBanco => ({
  moneda: "USD",
  plazo,
  tasaTna: PENDIENTE(fuente, url, nota),
})

const tasaUYU = (plazo: PlazoDPF, fuente: string, url: string, nota?: string): TasaBanco => ({
  moneda: "UYU",
  plazo,
  tasaTna: PENDIENTE(fuente, url, nota),
})

const PLAZOS_STD: PlazoDPF[] = ["30d", "60d", "90d", "180d", "365d"]

// Scotiabank USD confirmado (tramo $2.000–$50.000) — mayo 2026
const scotiaUSD: TasaBanco[] = [
  { moneda: "USD", plazo: "30d",  tasaTna: ACTUALIZADO("0,10% TNA", "Scotiabank Uruguay", "https://www.scotiabank.com.uy/tasas", "Jun 2026", "Tramo $2.000–$50.000 USD. Tasas superiores para montos mayores.") },
  { moneda: "USD", plazo: "60d",  tasaTna: ACTUALIZADO("0,90% TNA", "Scotiabank Uruguay", "https://www.scotiabank.com.uy/tasas", "Jun 2026", "Tramo $2.000–$50.000 USD.") },
  { moneda: "USD", plazo: "90d",  tasaTna: ACTUALIZADO("1,15% TNA", "Scotiabank Uruguay", "https://www.scotiabank.com.uy/tasas", "Jun 2026", "Tramo $2.000–$50.000 USD.") },
  { moneda: "USD", plazo: "180d", tasaTna: ACTUALIZADO("1,50% TNA", "Scotiabank Uruguay", "https://www.scotiabank.com.uy/tasas", "Jun 2026", "Tramo $2.000–$50.000 USD.") },
  { moneda: "USD", plazo: "365d", tasaTna: ACTUALIZADO("1,90% TNA", "Scotiabank Uruguay", "https://www.scotiabank.com.uy/tasas", "Jun 2026", "Tramo $2.000–$50.000 USD.") },
]

export const BANCOS: Banco[] = [
  {
    id: "brou",
    nombre: "Banco República (BROU)",
    abrev: "BROU",
    tipo: "público",
    sitioWeb: "https://www.brou.com.uy",
    descripcion: "Banco estatal, el más grande de Uruguay. Amplia red de sucursales y cajeros en todo el país.",
    tasas: [
      ...PLAZOS_STD.map(p => tasaUSD(p, "BROU / BCU", BCU_TASAS_URL, "Depósito a plazo fijo en dólares.")),
      ...PLAZOS_STD.map(p => tasaUYU(p, "BROU / BCU", BCU_TASAS_URL, "Depósito a plazo fijo en pesos.")),
    ],
  },
  {
    id: "itau",
    nombre: "Itaú Uruguay",
    abrev: "Itaú",
    tipo: "privado",
    sitioWeb: "https://www.itau.com.uy",
    descripcion: "Filial del grupo brasileño Itaú Unibanco. Uno de los principales bancos privados del país.",
    tasas: [
      ...PLAZOS_STD.map(p => tasaUSD(p, "Itaú / BCU", BCU_TASAS_URL)),
      ...PLAZOS_STD.map(p => tasaUYU(p, "Itaú / BCU", BCU_TASAS_URL)),
    ],
  },
  {
    id: "santander",
    nombre: "Santander Uruguay",
    abrev: "Santander",
    tipo: "privado",
    sitioWeb: "https://www.santander.com.uy",
    descripcion: "Filial del grupo español Santander. Amplia presencia en banca personal y empresas.",
    tasas: [
      ...PLAZOS_STD.map(p => tasaUSD(p, "Santander / BCU", BCU_TASAS_URL)),
      ...PLAZOS_STD.map(p => tasaUYU(p, "Santander / BCU", BCU_TASAS_URL)),
    ],
  },
  {
    id: "scotiabank",
    nombre: "Scotiabank Uruguay",
    abrev: "Scotiabank",
    tipo: "privado",
    sitioWeb: "https://www.scotiabank.com.uy",
    descripcion: "Filial del grupo canadiense Bank of Nova Scotia. Presente en Uruguay desde 2011.",
    tasas: [
      ...scotiaUSD,
      ...PLAZOS_STD.map(p => tasaUYU(p, "Scotiabank / BCU", BCU_TASAS_URL)),
    ],
  },
  {
    id: "bbva",
    nombre: "BBVA Uruguay",
    abrev: "BBVA",
    tipo: "privado",
    sitioWeb: "https://www.bbva.com.uy",
    descripcion: "Filial del grupo español BBVA. Banca personal y productos de ahorro e inversión.",
    tasas: [
      ...PLAZOS_STD.map(p => tasaUSD(p, "BBVA / BCU", BCU_TASAS_URL)),
      ...PLAZOS_STD.map(p => tasaUYU(p, "BBVA / BCU", BCU_TASAS_URL)),
    ],
  },
  {
    id: "heritage",
    nombre: "Banque Heritage",
    abrev: "Heritage",
    tipo: "privado",
    sitioWeb: "https://www.heritage.com.uy",
    descripcion: "Banco privado especializado en banca patrimonial y clientes de alto valor neto en Uruguay.",
    tasas: [
      ...PLAZOS_STD.map(p => tasaUSD(p, "Banque Heritage / BCU", BCU_TASAS_URL, "Banco patrimonial. Consultar directamente para tasas vigentes.")),
    ],
  },
  {
    id: "bandes",
    nombre: "Bandes Uruguay",
    abrev: "Bandes",
    tipo: "público",
    sitioWeb: "https://www.bandes.com.uy",
    descripcion: "Banco de desarrollo con capital venezolano, regulado por el BCU. Opera en Uruguay.",
    tasas: [
      ...PLAZOS_STD.map(p => tasaUSD(p, "Bandes / BCU", BCU_TASAS_URL)),
    ],
  },
]

// ── AFAPs ────────────────────────────────────────────────────

export interface AFAP {
  id: string
  nombre: string
  acronimo: string
  grupo: string
  descripcion: string
  sitioWeb: string
  rentabilidadReal: Dato  // rentabilidad real neta de comisión (últimos 12m o último trimestre)
  comisionSalario: Dato   // % del salario nominal cobrado como comisión de administración
  participacionMercado: Dato
}

export const AFAPS: AFAP[] = [
  {
    id: "republica",
    nombre: "República AFAP",
    acronimo: "República",
    grupo: "Grupo BROU",
    descripcion: "La AFAP más grande de Uruguay por número de afiliados. Administrada por el Banco República (BROU). Cobertura nacional.",
    sitioWeb: "https://www.rafap.com.uy",
    rentabilidadReal: ACTUALIZADO(
      "+0,67% (may 2026)",
      "BCU — SSF / Rentabilidades por Administradora",
      BCU_AFAP_RENT_URL,
      "May 2026",
      "Rentabilidad neta agregada del FAP — mayo 2026. Publicada mensualmente por la SSF del BCU."
    ),
    comisionSalario: ACTUALIZADO(
      "0,00%",
      "BCU — SSF",
      BCU_AFAP_URL,
      "2026",
      "República AFAP no cobra comisión sobre el salario desde 2022."
    ),
    participacionMercado: ACTUALIZADO(
      "38,6% afiliados",
      "BCU — SSF / Memoria AFAP Q1 2026",
      BCU_AFAP_URL,
      "Mar 2026"
    ),
  },
  {
    id: "sura",
    nombre: "SURA AFAP",
    acronimo: "SURA",
    grupo: "Grupo Sura Asset Management",
    descripcion: "Filial del grupo latinoamericano Sura Asset Management. Segunda AFAP por número de afiliados en Uruguay.",
    sitioWeb: "https://www.afapsura.com.uy",
    rentabilidadReal: ACTUALIZADO(
      "+0,15% (may 2026)",
      "BCU — SSF / Rentabilidades por Administradora",
      BCU_AFAP_RENT_URL,
      "May 2026",
      "Rentabilidad neta agregada del FAP — mayo 2026. Publicada mensualmente por la SSF del BCU."
    ),
    comisionSalario: ACTUALIZADO(
      "1,35% s/ salario",
      "BCU — SSF",
      BCU_AFAP_URL,
      "2026"
    ),
    participacionMercado: ACTUALIZADO(
      "22,7% afiliados",
      "BCU — SSF / Memoria AFAP Q1 2026",
      BCU_AFAP_URL,
      "Mar 2026"
    ),
  },
  {
    id: "unioncapital",
    nombre: "AFAP Itaú",
    acronimo: "AFAP Itaú",
    grupo: "Grupo Itaú",
    descripcion: "Vinculada al grupo Itaú Uruguay (ex UniónCapital AFAP). Segunda AFAP por número de afiliados en Uruguay.",
    sitioWeb: "https://www.afapitau.com.uy",
    rentabilidadReal: ACTUALIZADO(
      "+0,23% (may 2026)",
      "BCU — SSF / Rentabilidades por Administradora",
      BCU_AFAP_RENT_URL,
      "May 2026",
      "Rentabilidad neta agregada del FAP — mayo 2026. Publicada mensualmente por la SSF del BCU."
    ),
    comisionSalario: ACTUALIZADO(
      "1,45% s/ salario",
      "BCU — SSF",
      BCU_AFAP_URL,
      "2026"
    ),
    participacionMercado: ACTUALIZADO(
      "23,3% afiliados",
      "BCU — SSF / Memoria AFAP Q1 2026",
      BCU_AFAP_URL,
      "Mar 2026"
    ),
  },
  {
    id: "integracion",
    nombre: "Integración AFAP",
    acronimo: "Integración",
    grupo: "Capital nacional",
    descripcion: "La AFAP de menor tamaño por número de afiliados. De capital nacional, regulada por el BCU.",
    sitioWeb: "https://www.integracionafap.com.uy",
    rentabilidadReal: ACTUALIZADO(
      "-0,63% (may 2026)",
      "BCU — SSF / Rentabilidades por Administradora",
      BCU_AFAP_RENT_URL,
      "May 2026",
      "Rentabilidad neta agregada del FAP — mayo 2026. Publicada mensualmente por la SSF del BCU."
    ),
    comisionSalario: ACTUALIZADO(
      "1,50% s/ salario",
      "BCU — SSF",
      BCU_AFAP_URL,
      "2026"
    ),
    participacionMercado: ACTUALIZADO(
      "15,3% afiliados",
      "BCU — SSF / Memoria AFAP Q1 2026",
      BCU_AFAP_URL,
      "Mar 2026"
    ),
  },
]

// ── FED ──────────────────────────────────────────────────────

export const FED = {
  tasaObjetivo: PENDIENTE(
    "Reserva Federal de EE.UU. (Fed)",
    FED_URL,
    "Rango objetivo de la tasa de fondos federales aprobada por el FOMC. Actualizar tras cada reunión."
  ),
  proximaReunion: PENDIENTE(
    "Reserva Federal de EE.UU. (Fed)",
    "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    "Fecha de la próxima reunión del FOMC."
  ),
  ultimaDecision: PENDIENTE(
    "Reserva Federal de EE.UU. (Fed)",
    FED_URL,
    "Última decisión de política monetaria del FOMC."
  ),
}
