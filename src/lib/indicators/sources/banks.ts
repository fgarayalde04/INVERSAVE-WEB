/**
 * banks.ts — Fuente datos bancos uruguayos (tasas DPF individuales).
 *
 * DATOS MANUALES (actualizar en src/data/indicators/manual-data.ts → BANCOS):
 *   Sistema (BCU):  https://www.bcu.gub.uy/Servicios-Financieros-SSF/paginas/tasas-medias.aspx
 *   BROU:           https://www.brou.com.uy/personas/inversiones/plazo-fijo
 *   Itaú:           https://www.itau.com.uy/inst/inversiones.html
 *   Santander:      https://santander.com.uy/Inversiones/Deposito-a-plazo-fijo
 *   Scotiabank:     https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo
 *   BBVA:           https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html
 *   HSBC:           https://www.hsbc.com.uy/tarifas-y-cartillas/
 *   Heritage:       https://www.heritage.com.uy/Files/tarifarios/Tasas_de_interes.pdf
 *   Bandes:         https://www.bandes.com.uy/personas/ahorros/ahorros-plazo
 */

import type { Indicator } from "../types";
import { BANCOS as BANCOS_MANUAL } from "@/data/indicators/manual-data";

const DISCLAIMER =
  "Las tasas pueden variar según banco, plazo, monto y condiciones comerciales. " +
  "Verificar siempre en la fuente oficial de cada institución o en el BCU.";

interface BankDef {
  id: string;
  name: string;
  full: string;
  tipo: "público" | "privado";
  usdKey: keyof typeof BANCOS_MANUAL;
  uyuKey?: keyof typeof BANCOS_MANUAL;
  sourceUrl: string;
}

const BANK_DEFS: BankDef[] = [
  {
    id: "brou", name: "BROU", full: "Banco República (BROU)", tipo: "público",
    usdKey: "brouUsd", uyuKey: "brouUyu",
    sourceUrl: "https://www.brou.com.uy/personas/inversiones/plazo-fijo",
  },
  {
    id: "itau", name: "Itaú", full: "Itaú Uruguay", tipo: "privado",
    usdKey: "itauUsd", uyuKey: "itauUyu",
    sourceUrl: "https://www.itau.com.uy/inst/inversiones.html",
  },
  {
    id: "santander", name: "Santander", full: "Santander Uruguay", tipo: "privado",
    usdKey: "santanderUsd", uyuKey: "santanderUyu",
    sourceUrl: "https://santander.com.uy/Inversiones/Deposito-a-plazo-fijo",
  },
  {
    id: "scotiabank", name: "Scotiabank", full: "Scotiabank Uruguay", tipo: "privado",
    usdKey: "scotiabankUsd",
    sourceUrl: "https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo",
  },
  {
    id: "bbva", name: "BBVA", full: "BBVA Uruguay", tipo: "privado",
    usdKey: "bbvaUsd",
    sourceUrl: "https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html",
  },
  {
    id: "hsbc", name: "HSBC", full: "HSBC Uruguay", tipo: "privado",
    usdKey: "hsbcUsd",
    sourceUrl: "https://www.hsbc.com.uy/tarifas-y-cartillas/",
  },
  {
    id: "heritage", name: "Heritage", full: "Banque Heritage", tipo: "privado",
    usdKey: "heritageUsd",
    sourceUrl: "https://www.heritage.com.uy/Files/tarifarios/Tasas_de_interes.pdf",
  },
  {
    id: "bandes", name: "Bandes", full: "Bandes Uruguay", tipo: "público",
    usdKey: "bandesUsd",
    sourceUrl: "https://www.bandes.com.uy/personas/ahorros/ahorros-plazo",
  },
];

// ── Main export ───────────────────────────────────────────────────────────────

export async function fetchBanksIndicators(): Promise<Indicator[]> {
  const today = new Date().toISOString().slice(0, 10);
  const indicators: Indicator[] = [];

  for (const bank of BANK_DEFS) {
    // DPF USD
    const usdEntry  = BANCOS_MANUAL[bank.usdKey];
    const usdHasVal = usdEntry?.value && usdEntry.value !== "";

    indicators.push({
      id: `bank-${bank.id}-dpf-usd`,
      name: `${bank.name} — DPF USD`,
      value: usdHasVal ? `${usdEntry.value}%` : "—",
      unit: "% TNA",
      currency: "USD",
      term: "30–365 días",
      category: "banks",
      entity: bank.full,
      source: "Sitio web institucional / BCU",
      sourceUrl: bank.sourceUrl,
      lastUpdated: usdEntry?.lastUpdated || today,
      frequency: "weekly",
      explanation:
        `Tasa nominal anual de depósito a plazo fijo en dólares en ${bank.full}.`,
      disclaimer: DISCLAIMER,
      status: (usdHasVal ? (usdEntry.status ?? "updated") : "pending_review") as Indicator["status"],
    });

    // DPF UYU (solo si tiene clave)
    if (bank.uyuKey) {
      const uyuEntry  = BANCOS_MANUAL[bank.uyuKey];
      const uyuHasVal = uyuEntry?.value && uyuEntry.value !== "";

      indicators.push({
        id: `bank-${bank.id}-dpf-uyu`,
        name: `${bank.name} — DPF UYU`,
        value: uyuHasVal ? `${uyuEntry.value}%` : "—",
        unit: "% TNA",
        currency: "UYU",
        term: "30–365 días",
        category: "banks",
        entity: bank.full,
        source: "Sitio web institucional / BCU",
        sourceUrl: bank.sourceUrl,
        lastUpdated: uyuEntry?.lastUpdated || today,
        frequency: "weekly",
        explanation:
          `Tasa nominal anual de depósito a plazo fijo en pesos en ${bank.full}.`,
        disclaimer: DISCLAIMER,
        status: (uyuHasVal ? (uyuEntry.status ?? "updated") : "pending_review") as Indicator["status"],
      });
    }
  }

  return indicators;
}
