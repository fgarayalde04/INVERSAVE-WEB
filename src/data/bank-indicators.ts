/**
 * bank-indicators.ts — Tasas de depósito a plazo fijo publicadas por bancos uruguayos.
 *
 * DATOS ESTÁTICOS — actualizar manualmente cuando cambian las tasas.
 *
 * Para agregar un banco nuevo:   agregar un objeto al array bankIndicators.
 * Para cambiar una tasa:         modificar el campo `value`.
 * Para cambiar la fuente/URL:    modificar `source` y `sourceUrl`.
 * Para cambiar la fecha:         modificar `lastUpdated` (formato YYYY-MM-DD).
 *
 * FUENTES OFICIALES:
 *   BROU:       https://www.brou.com.uy/documents/20182/112235/tasas-pf-personas.pdf
 *   Itaú:       https://www.itau.com.uy/inst/aci/docs/Tasas%20de%20DPF.pdf
 *   BBVA:       https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html
 *   Scotiabank: https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo
 *   Heritage:   https://www.heritage.com.uy/Files/tarifarios/Tasas_de_interes.pdf
 *   Bandes:     https://www.bandes.com.uy/personas/ahorros/ahorros-plazo
 */

export type BankIndicatorCurrency = "UYU" | "USD";

export type BankIndicator = {
  id: string;
  title: string;
  value: string;         // Número como string, ej: "5,00"
  unit: string;          // "%"
  category: string;
  entity: string;        // Nombre del banco
  currency: BankIndicatorCurrency;
  currencyLabel: string; // "Pesos uruguayos" | "Dólares estadounidenses"
  term: string;          // "60 a 90 días"
  typeRate: string;      // "Tasa efectiva anual"
  channel?: string;      // Canal de contratación, opcional
  period?: string;       // Período de vigencia, opcional
  source: string;        // Nombre de la fuente
  sourceUrl: string;     // URL directa a la fuente oficial
  lastUpdated: string;   // ISO: "2026-03-01"
  explanation: string;
  disclaimer: string;
};

const DISCLAIMER =
  "Las tasas pueden variar según moneda, plazo, canal, monto y condiciones del banco. Verificar siempre en la fuente oficial.";

export const bankIndicators: BankIndicator[] = [
  // ── BROU ────────────────────────────────────────────────────────────────────
  {
    id: "brou-pf-uyu-ebrou-60-90",
    title: "Plazo fijo BROU en pesos",
    value: "5,00",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "BROU",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "60 a 90 días",
    typeRate: "Tasa efectiva anual",
    channel: "E-BROU",
    period: "Vigente desde 01/03/2026",
    source: "BROU — Tasas de Plazo Fijo Personas",
    sourceUrl: "https://www.brou.com.uy/documents/20182/112235/tasas-pf-personas.pdf",
    lastUpdated: "2026-03-01",
    explanation:
      "Tasa publicada por BROU para depósitos a plazo fijo en pesos uruguayos constituidos por canales E-BROU.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "brou-pf-uyu-ebrou-91-180",
    title: "Plazo fijo BROU en pesos",
    value: "5,50",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "BROU",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "91 a 180 días",
    typeRate: "Tasa efectiva anual",
    channel: "E-BROU",
    period: "Vigente desde 01/03/2026",
    source: "BROU — Tasas de Plazo Fijo Personas",
    sourceUrl: "https://www.brou.com.uy/documents/20182/112235/tasas-pf-personas.pdf",
    lastUpdated: "2026-03-01",
    explanation:
      "Tasa publicada por BROU para depósitos a plazo fijo en pesos uruguayos constituidos por canales E-BROU.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "brou-pf-usd-ebrou-181-366",
    title: "Plazo fijo BROU en dólares",
    value: "3,00",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "BROU",
    currency: "USD",
    currencyLabel: "Dólares estadounidenses",
    term: "181 a 366 días",
    typeRate: "Tasa efectiva anual",
    channel: "E-BROU",
    period: "Vigente desde 01/01/2026",
    source: "BROU — Tasas de Plazo Fijo Personas",
    sourceUrl: "https://www.brou.com.uy/documents/20182/112235/tasas-pf-personas.pdf",
    lastUpdated: "2026-01-01",
    explanation:
      "Tasa publicada por BROU para depósitos a plazo fijo en dólares constituidos por canales E-BROU.",
    disclaimer: DISCLAIMER,
  },

  // ── Itaú ────────────────────────────────────────────────────────────────────
  {
    id: "itau-pf-uyu-30",
    title: "Plazo fijo Itaú en pesos",
    value: "2,50",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Itaú Uruguay",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "30 días",
    typeRate: "Tasa efectiva anual",
    channel: "Itaú Link / Agencias",
    period: "Versión marzo 2026",
    source: "Itaú — Tasas de DPF",
    sourceUrl: "https://www.itau.com.uy/inst/aci/docs/Tasas%20de%20DPF.pdf",
    lastUpdated: "2026-03-01",
    explanation: "Tasa publicada por Itaú para depósitos a plazo fijo en pesos uruguayos.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "itau-pf-uyu-181",
    title: "Plazo fijo Itaú en pesos",
    value: "4,50",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Itaú Uruguay",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "181 días",
    typeRate: "Tasa efectiva anual",
    channel: "Itaú Link / Agencias",
    period: "Versión marzo 2026",
    source: "Itaú — Tasas de DPF",
    sourceUrl: "https://www.itau.com.uy/inst/aci/docs/Tasas%20de%20DPF.pdf",
    lastUpdated: "2026-03-01",
    explanation: "Tasa publicada por Itaú para depósitos a plazo fijo en pesos uruguayos.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "itau-pf-usd-181",
    title: "Plazo fijo Itaú en dólares",
    value: "2,50",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Itaú Uruguay",
    currency: "USD",
    currencyLabel: "Dólares estadounidenses",
    term: "181 días",
    typeRate: "Tasa efectiva anual",
    channel: "Itaú Link / Agencias",
    period: "Versión marzo 2026",
    source: "Itaú — Tasas de DPF",
    sourceUrl: "https://www.itau.com.uy/inst/aci/docs/Tasas%20de%20DPF.pdf",
    lastUpdated: "2026-03-01",
    explanation: "Tasa publicada por Itaú para depósitos a plazo fijo en dólares.",
    disclaimer: DISCLAIMER,
  },

  // ── BBVA ────────────────────────────────────────────────────────────────────
  {
    id: "bbva-pf-uyu-online-91",
    title: "Plazo fijo BBVA en pesos",
    value: "4,00",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "BBVA Uruguay",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "91 días",
    typeRate: "Tasa efectiva anual",
    channel: "Online — importes > $150.000",
    period: "Vigente desde 02/03/2026",
    source: "BBVA — Depósito Plazo Fijo",
    sourceUrl: "https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html",
    lastUpdated: "2026-03-02",
    explanation:
      "Tasa online publicada por BBVA para depósitos a plazo fijo en pesos uruguayos.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "bbva-pf-uyu-online-181",
    title: "Plazo fijo BBVA en pesos",
    value: "4,50",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "BBVA Uruguay",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "181 días",
    typeRate: "Tasa efectiva anual",
    channel: "Online — importes > $150.000",
    period: "Vigente desde 02/03/2026",
    source: "BBVA — Depósito Plazo Fijo",
    sourceUrl: "https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html",
    lastUpdated: "2026-03-02",
    explanation:
      "Tasa online publicada por BBVA para depósitos a plazo fijo en pesos uruguayos.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "bbva-pf-usd-online-91",
    title: "Plazo fijo BBVA en dólares",
    value: "2,50",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "BBVA Uruguay",
    currency: "USD",
    currencyLabel: "Dólares estadounidenses",
    term: "91 días",
    typeRate: "Tasa efectiva anual",
    channel: "Online — importes > USD 100.000",
    period: "Vigente desde 02/03/2026",
    source: "BBVA — Depósito Plazo Fijo",
    sourceUrl: "https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html",
    lastUpdated: "2026-03-02",
    explanation:
      "Tasa online publicada por BBVA para depósitos a plazo fijo en dólares.",
    disclaimer: DISCLAIMER,
  },

  // ── Scotiabank ──────────────────────────────────────────────────────────────
  {
    id: "scotia-pf-uyu-181-366",
    title: "Plazo fijo Scotiabank en pesos",
    value: "4,10",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Scotiabank Uruguay",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "181 a 366 días",
    typeRate: "Tasa efectiva anual",
    channel: "Digital",
    period: "Consulta web vigente",
    source: "Scotiabank — Depósito a Plazo Fijo",
    sourceUrl:
      "https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo",
    lastUpdated: "2026-05-11",
    explanation:
      "Tasa publicada por Scotiabank para depósitos en pesos dentro del tramo de $2.000.001 a $5.000.000.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "scotia-pf-uyu-367-999",
    title: "Plazo fijo Scotiabank en pesos",
    value: "5,00",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Scotiabank Uruguay",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "367 a 999 días",
    typeRate: "Tasa efectiva anual",
    channel: "Digital",
    period: "Consulta web vigente",
    source: "Scotiabank — Depósito a Plazo Fijo",
    sourceUrl:
      "https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo",
    lastUpdated: "2026-05-11",
    explanation:
      "Tasa publicada por Scotiabank para depósitos en pesos de más de $5.000.001.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "scotia-pf-usd-181-366",
    title: "Plazo fijo Scotiabank en dólares",
    value: "2,60",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Scotiabank Uruguay",
    currency: "USD",
    currencyLabel: "Dólares estadounidenses",
    term: "181 a 366 días",
    typeRate: "Tasa efectiva anual",
    channel: "Digital",
    period: "Consulta web vigente",
    source: "Scotiabank — Depósito a Plazo Fijo",
    sourceUrl:
      "https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo",
    lastUpdated: "2026-05-11",
    explanation:
      "Tasa publicada por Scotiabank para depósitos en dólares de más de USD 500.001.",
    disclaimer: DISCLAIMER,
  },

  // ── Heritage ────────────────────────────────────────────────────────────────
  {
    id: "heritage-pf-uyu-181",
    title: "Plazo fijo Heritage en pesos",
    value: "4,00",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Banque Heritage Uruguay",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "181 días",
    typeRate: "Tasa efectiva anual",
    channel: "Pizarra",
    period: "Febrero 2026",
    source: "Heritage — Tasas de interés para depósitos a plazo fijo",
    sourceUrl: "https://www.heritage.com.uy/Files/tarifarios/Tasas_de_interes.pdf",
    lastUpdated: "2026-02-01",
    explanation:
      "Tasa publicada por Heritage para depósitos a plazo fijo en pesos mayores a $500.000.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "heritage-pf-usd-367",
    title: "Plazo fijo Heritage en dólares",
    value: "2,50",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Banque Heritage Uruguay",
    currency: "USD",
    currencyLabel: "Dólares estadounidenses",
    term: "367 días",
    typeRate: "Tasa efectiva anual",
    channel: "Pizarra",
    period: "Febrero 2026",
    source: "Heritage — Tasas de interés para depósitos a plazo fijo",
    sourceUrl: "https://www.heritage.com.uy/Files/tarifarios/Tasas_de_interes.pdf",
    lastUpdated: "2026-02-01",
    explanation:
      "Tasa publicada por Heritage para depósitos a plazo fijo en dólares mayores a USD 20.000.",
    disclaimer: DISCLAIMER,
  },

  // ── Bandes ──────────────────────────────────────────────────────────────────
  {
    id: "bandes-pf-uyu-370",
    title: "Plazo fijo Bandes en pesos",
    value: "7,00",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Bandes Uruguay",
    currency: "UYU",
    currencyLabel: "Pesos uruguayos",
    term: "370 días",
    typeRate: "Tasa efectiva anual",
    channel: "Web",
    period: "Consulta web vigente",
    source: "Bandes — Ahorros a Plazo",
    sourceUrl: "https://www.bandes.com.uy/personas/ahorros/ahorros-plazo",
    lastUpdated: "2026-05-11",
    explanation:
      "Tasa publicada por Bandes para depósitos a plazo fijo en pesos de más de $500.000.",
    disclaimer: DISCLAIMER,
  },
  {
    id: "bandes-pf-usd-720",
    title: "Plazo fijo Bandes en dólares",
    value: "0,75",
    unit: "%",
    category: "Plazos fijos / bancos",
    entity: "Bandes Uruguay",
    currency: "USD",
    currencyLabel: "Dólares estadounidenses",
    term: "720 días",
    typeRate: "Tasa efectiva anual",
    channel: "Web",
    period: "Consulta web vigente",
    source: "Bandes — Ahorros a Plazo",
    sourceUrl: "https://www.bandes.com.uy/personas/ahorros/ahorros-plazo",
    lastUpdated: "2026-05-11",
    explanation:
      "Tasa publicada por Bandes para depósitos a plazo fijo en dólares de más de USD 500.000.",
    disclaimer: DISCLAIMER,
  },
];
