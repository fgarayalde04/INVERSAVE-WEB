/**
 * bankDepositRates.ts — Tasas de depósito a plazo fijo por banco, moneda y plazo.
 *
 * CÓMO ACTUALIZAR:
 *   Modificar únicamente los campos `rate` (número) y `lastUpdated` (formato YYYY-MM-DD).
 *   Si un banco no publica su tasa, dejar `rate: null`.
 *
 * FUENTES:
 *   BROU:        https://www.brou.com.uy/documents/20182/112235/tasas-pf-personas.pdf
 *   Itaú:        https://www.itau.com.uy/inst/aci/docs/Tasas%20de%20DPF.pdf
 *   BBVA:        https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html
 *   Scotiabank:  https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo
 *   Santander:   No publica tasas online.
 */

export type DPFCurrency = "UYU" | "USD"
export type DPFTermKey  = "30d" | "90d" | "180d" | "365d"

export const DPF_TERM_LABELS: Record<DPFTermKey, string> = {
  "30d":  "30 días",
  "90d":  "90 días",
  "180d": "180 días",
  "365d": "1 año",
}

/** Un tramo de monto dentro de la tasa de un banco */
export interface DPFAmountTier {
  amountLabel: string  // "hasta $ 150.000"
  rate: number         // 2.00 → representa 2,00 %
}

/** Tasa para un banco + moneda + plazo específico */
export interface DPFRateEntry {
  /** Tasa principal (primer tramo o tasa única). null = no disponible / consultar. */
  rate: number | null
  /** Tramos por monto, si aplica. El primero es el tramo principal. */
  tiers?: DPFAmountTier[]
  /** Nota sobre el plazo exacto que corresponde (ej. "60–90 días en BROU") */
  termRange?: string
}

/** Datos de DPF de un banco */
export interface BankDPFData {
  id:          string
  name:        string
  abrev:       string
  type:        "público" | "privado"
  website:     string
  source:      string
  sourceUrl:   string
  lastUpdated: string       // YYYY-MM-DD — puede ser por banco; actualizar aquí
  rateType:    string       // "TEA" | "TNA"
  channel?:    string       // "eBROU" | "Itaú Link" | etc.
  minAmount?:  Partial<Record<DPFCurrency, string>>
  amountNote?: string       // "La tasa puede aumentar para montos superiores"
  consultNote?: string      // Texto para bancos que no publican tasas
  rates: Partial<Record<DPFCurrency, Partial<Record<DPFTermKey, DPFRateEntry>>>>
}

export const BANK_DEPOSIT_RATES: BankDPFData[] = [
  // ── BROU ─────────────────────────────────────────────────────────────────────
  {
    id:          "brou",
    name:        "Banco República",
    abrev:       "BROU",
    type:        "público",
    website:     "https://www.brou.com.uy",
    source:      "BROU — Tasas de Plazo Fijo Personas",
    sourceUrl:   "https://www.brou.com.uy/documents/20182/112235/tasas-pf-personas.pdf",
    lastUpdated: "2026-08-01",
    rateType:    "TEA",
    channel:     "eBROU",
    minAmount: {
      UYU: "$ 5.000",
      USD: "USD 500",
    },
    rates: {
      UYU: {
        "30d":  { rate: 4.50, termRange: "30–59 días" },
        "90d":  { rate: 5.00, termRange: "60–90 días" },
        "180d": { rate: 5.20, termRange: "91–180 días" },
        "365d": { rate: 5.40, termRange: "181–366 días" },
      },
      USD: {
        "30d":  { rate: 1.50, termRange: "30–59 días" },
        "90d":  { rate: 2.50, termRange: "91–180 días" },
        "180d": { rate: 2.60, termRange: "181–366 días" },
        "365d": { rate: 2.80, termRange: "367–546 días" },
      },
    },
  },

  // ── Itaú ─────────────────────────────────────────────────────────────────────
  {
    id:          "itau",
    name:        "Itaú Uruguay",
    abrev:       "Itaú",
    type:        "privado",
    website:     "https://www.itau.com.uy",
    source:      "Itaú — Tasas de DPF",
    sourceUrl:   "https://www.itau.com.uy/inst/aci/docs/Tasas%20de%20DPF.pdf",
    lastUpdated: "2026-08-01",
    rateType:    "TEA",
    channel:     "Itaú Link",
    minAmount: {
      UYU: "$ 10.000",
      USD: "USD 1.000",
    },
    rates: {
      UYU: {
        "30d":  { rate: 2.50 },
        "90d":  { rate: 3.50, termRange: "91 días" },
        "180d": { rate: 4.50, termRange: "181 días" },
        "365d": { rate: 4.50, termRange: "367 días" },
      },
      USD: {
        "30d":  { rate: null },   // No disponible en 30 días
        "90d":  { rate: 2.25, termRange: "90 días" },
        "180d": { rate: 2.50, termRange: "181 días" },
        "365d": { rate: 2.50, termRange: "367 días" },
      },
    },
  },

  // ── BBVA ─────────────────────────────────────────────────────────────────────
  {
    id:          "bbva",
    name:        "BBVA Uruguay",
    abrev:       "BBVA",
    type:        "privado",
    website:     "https://www.bbva.com.uy",
    source:      "BBVA — Depósito Plazo Fijo",
    sourceUrl:   "https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html",
    lastUpdated: "2026-08-01",
    rateType:    "TEA",
    channel:     "Online",
    amountNote:  "La tasa mejora para importes superiores al tramo indicado.",
    rates: {
      UYU: {
        "30d": {
          rate: 2.00,
          tiers: [
            { amountLabel: "hasta $ 150.000",    rate: 2.00 },
            { amountLabel: "más de $ 150.000",   rate: 3.00 },
          ],
        },
        "90d": {
          rate: 3.00,
          tiers: [
            { amountLabel: "hasta $ 150.000",    rate: 3.00 },
            { amountLabel: "más de $ 150.000",   rate: 4.00 },
          ],
        },
        "180d": {
          rate: 4.00,
          tiers: [
            { amountLabel: "hasta $ 150.000",    rate: 4.00 },
            { amountLabel: "más de $ 150.000",   rate: 4.50 },
          ],
        },
        "365d": {
          rate: 4.00,
          tiers: [
            { amountLabel: "hasta $ 150.000",    rate: 4.00 },
            { amountLabel: "más de $ 150.000",   rate: 4.50 },
          ],
        },
      },
      USD: {
        "30d": {
          rate: 1.00,
          tiers: [
            { amountLabel: "hasta USD 100.000",  rate: 1.00 },
            { amountLabel: "más de USD 100.000", rate: 2.00 },
          ],
        },
        "90d": {
          rate: 1.75,
          tiers: [
            { amountLabel: "hasta USD 100.000",  rate: 1.75 },
            { amountLabel: "más de USD 100.000", rate: 2.00 },
          ],
        },
        "180d": {
          rate: 1.75,
          tiers: [
            { amountLabel: "hasta USD 100.000",  rate: 1.75 },
            { amountLabel: "más de USD 100.000", rate: 2.00 },
          ],
        },
        "365d": {
          rate: 1.75,
          tiers: [
            { amountLabel: "hasta USD 100.000",  rate: 1.75 },
            { amountLabel: "más de USD 100.000", rate: 2.00 },
          ],
        },
      },
    },
  },

  // ── Scotiabank ───────────────────────────────────────────────────────────────
  {
    id:          "scotiabank",
    name:        "Scotiabank Uruguay",
    abrev:       "Scotiabank",
    type:        "privado",
    website:     "https://www.scotiabank.com.uy",
    source:      "Scotiabank — Depósito a Plazo Fijo",
    sourceUrl:   "https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo",
    lastUpdated: "2026-08-01",
    rateType:    "TEA",
    amountNote:  "La tasa puede aumentar para montos superiores.",
    rates: {
      UYU: {
        // Tramo de referencia: $ 25.000 a $ 250.000
        "30d":  { rate: 0.15, termRange: "0–30 días" },
        "90d":  { rate: 0.75, termRange: "61–90 días" },
        "180d": { rate: 1.40, termRange: "91–180 días" },
        "365d": { rate: 1.60, termRange: "181–366 días" },
      },
      USD: {
        // Tramo de referencia: USD 2.000 a USD 50.000
        "30d":  { rate: 0.10, termRange: "0–30 días" },
        "90d":  { rate: 1.15, termRange: "61–90 días" },
        "180d": { rate: 1.50, termRange: "91–180 días" },
        "365d": { rate: 1.90, termRange: "181–366 días" },
      },
    },
  },

  // ── Santander ────────────────────────────────────────────────────────────────
  {
    id:          "santander",
    name:        "Santander Uruguay",
    abrev:       "Santander",
    type:        "privado",
    website:     "https://www.santander.com.uy",
    source:      "Santander — información no publicada online",
    sourceUrl:   "https://www.santander.com.uy",
    lastUpdated: "2026-08-01",
    rateType:    "TEA",
    consultNote: "Santander informa las tasas vigentes a través de sucursales, Centro Select o Private Banking.",
    rates: {
      UYU: {
        "30d":  { rate: null },
        "90d":  { rate: null },
        "180d": { rate: null },
        "365d": { rate: null },
      },
      USD: {
        "30d":  { rate: null },
        "90d":  { rate: null },
        "180d": { rate: null },
        "365d": { rate: null },
      },
    },
  },
]

/** Retorna el id del banco con la tasa principal más alta para una moneda+plazo dados. */
export function getBestRateBankId(currency: DPFCurrency, term: DPFTermKey): string | null {
  let best: number | null = null
  let bestId: string | null = null

  for (const bank of BANK_DEPOSIT_RATES) {
    const entry = bank.rates[currency]?.[term]
    if (entry && entry.rate !== null && (best === null || entry.rate > best)) {
      best = entry.rate
      bestId = bank.id
    }
  }

  return bestId
}
