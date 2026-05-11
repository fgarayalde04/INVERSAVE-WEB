/**
 * manual-data.ts — Datos de indicadores que se actualizan manualmente.
 * ─────────────────────────────────────────────────────────────────────
 *
 * CÓMO ACTUALIZAR UN DATO:
 *   1. Ir a la URL de la fuente (indicada en cada bloque)
 *   2. Buscar el valor actual
 *   3. Reemplazar el valor en `value`
 *   4. Cambiar `status` a "updated"
 *   5. Actualizar `lastUpdated` con la fecha de hoy (YYYY-MM-DD)
 *   6. Guardar el archivo — la web lo muestra sin rebuild
 *
 * CONVENCIÓN DE VALORES:
 *   - Tasas en % TNA:  "8.50"   (sin el símbolo %)
 *   - Montos en UYU:   "28000"  (sin puntos de miles)
 *   - Números:         "1.6"    (punto decimal, no coma)
 *   - Sin dato:        ""       (string vacío → la web muestra "—")
 */

export type ManualStatus = "updated" | "pending_review";

export interface ManualEntry {
  value: string;
  lastUpdated: string;  // "YYYY-MM-DD"
  status: ManualStatus;
  period?: string;      // Ej: "Mayo 2025", "Q1 2025"
}

// ─────────────────────────────────────────────────────────────────────────────
// BCU — Banco Central del Uruguay
// Fuente tasas:      https://www.bcu.gub.uy/Servicios-Financieros-SSF/paginas/tasas-medias.aspx
// Fuente TPM:        https://www.bcu.gub.uy/Politica-Economica-y-Mercados/Paginas/Politica-Monetaria.aspx
// Fuente IPC / INE:  https://www.ine.gub.uy/ipc-indice-de-precios-al-consumo
// ─────────────────────────────────────────────────────────────────────────────
export const BCU: Record<string, ManualEntry> = {

  tpm: {
    value: "",          // Ej: "8.50"  → buscar en BCU / Política Monetaria
    lastUpdated: "",
    status: "pending_review",
    period: "",         // Ej: "Mayo 2025"
  },

  inflacion: {
    value: "",          // Ej: "5.40"  → buscar en INE / IPC acumulado 12 meses
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },

  // Tasas medias del sistema (promedio todos los bancos, publicado por BCU)
  dpfUsdSistema: {
    value: "",          // Ej: "2.80"  → tabla BCU "tasas medias" / DPF USD
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },

  dpfUyuSistema: {
    value: "",          // Ej: "9.20"  → tabla BCU "tasas medias" / DPF UYU
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// BANCOS — Tasas DPF individuales
// Fuente primaria:  Tasas medias BCU (arriba)
// Fuente por banco: Ver URL de cada banco
//
// BROU:       https://www.brou.com.uy/personas/inversiones/plazo-fijo
// Itaú:       https://www.itau.com.uy/inst/inversiones.html
// Santander:  https://santander.com.uy/Inversiones/Deposito-a-plazo-fijo
// Scotiabank: https://www.scotiabank.com.uy/Personas/Cuentas/Productos/deposito-plazo-fijo
// BBVA:       https://www.bbva.com.uy/personas/productos/inversion/deposito-plazo-fijo.html
// HSBC:       https://www.hsbc.com.uy/tarifas-y-cartillas/
// Heritage:   https://www.heritage.com.uy/Files/tarifarios/Tasas_de_interes.pdf
// Bandes:     https://www.bandes.com.uy/personas/ahorros/ahorros-plazo
// ─────────────────────────────────────────────────────────────────────────────
export const BANCOS: Record<string, ManualEntry> = {

  brouUsd: {
    value: "",          // Ej: "3.00"  → BROU / DPF USD TNA
    lastUpdated: "",
    status: "pending_review",
  },

  brouUyu: {
    value: "",          // Ej: "9.00"  → BROU / DPF UYU TNA
    lastUpdated: "",
    status: "pending_review",
  },

  itauUsd: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },

  itauUyu: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },

  santanderUsd: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },

  santanderUyu: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },

  scotiabankUsd: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },

  bbvaUsd: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },

  hsbcUsd: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },

  heritageUsd: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },

  bandesUsd: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// AFAPs — Rentabilidad real neta
// Fuente BCU/SSF:  https://www.bcu.gub.uy/Servicios-Financieros-SSF/Paginas/Rentabilidad-Neta-AFAP.aspx
// ANAFAP:          https://www.anafap.com.uy/indicadores.php
// República AFAP:  https://www.rafap.com.uy/mvdcms/categoria/Indicadores-de-Republica-AFAP-82
// SURA AFAP:       https://www.afapsura.com.uy/principales-cifras-2024/
// Itaú AFAP:       https://www.afapitau.com.uy/cifras
// Integración:     https://www.integracionafap.com.uy/informacion_valor.php
//
// NOTA: Las AFAPs no pagan tasa fija. Este dato es rentabilidad histórica variable.
//       Buscar "rentabilidad real neta de comisiones" en las fuentes.
// ─────────────────────────────────────────────────────────────────────────────
export const AFAPS: Record<string, ManualEntry> = {

  republica: {
    value: "",          // Ej: "2.30"  → rentabilidad real neta últimos 12m
    lastUpdated: "",
    status: "pending_review",
    period: "",         // Ej: "Q1 2025" o "12 meses a marzo 2025"
  },

  sura: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },

  unioncapital: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },

  integracion: {
    value: "",
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// BPS — Sistema previsional
// Estadísticas:  https://www.bps.gub.uy/1944/indicadores-de-la-seguridad-social.html
// Montos:        https://www.bps.gub.uy/6182/montos-y-aumentos-de-pasividades.html
//
// NOTA: El BPS no es una inversión. Sus datos muestran la sostenibilidad del sistema.
// ─────────────────────────────────────────────────────────────────────────────
export const BPS: Record<string, ManualEntry> = {

  jubilacionMinima: {
    value: "",          // Ej: "28000"  → monto en UYU/mes (buscar en BPS / montos)
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },

  jubilacionPromedio: {
    value: "",          // Ej: "45000"  → promedio en UYU/mes
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },

  totalPasivos: {
    value: "",          // Ej: "410000"  → cantidad de personas
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },

  aportantesActivos: {
    value: "",          // Ej: "1350000"  → trabajadores aportando
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },

  ratioAportantesPasivos: {
    value: "",          // Ej: "1.6"  → aportantes por cada pasivo
    lastUpdated: "",
    status: "pending_review",
    period: "",
  },
};
