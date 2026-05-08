/**
 * Períodos móviles de 15 años — S&P 500 con dividendos.
 * Fuente: Rendimiento SPY 1928-2025, cálculo de períodos móviles de 15 años.
 *
 * Metodología: aporte mensual USD 100, aporte total USD 18.000 (15 años × 12 meses).
 * El valor final fue calculado aplicando el CAGR del período a una estrategia DCA mensual.
 * Cuando el valor final está disponible directamente en el documento fuente, se usa ese dato.
 * Si no está disponible, el campo finalValue es null.
 *
 * TOTAL 10,63%: promedio de CAGR geométrico de todos los períodos móviles
 * de 15 años registrados en el documento. Etiqueta exacta del documento fuente.
 *
 * ⚠️ Este archivo es editable. Si disponés de más períodos del documento,
 * podés agregarlos directamente en el array ROLLING_15Y.
 */

export interface RollingPeriod {
  period: string;       // Etiqueta del período (ej. "1928–1942")
  startYear: number;
  endYear: number;
  cagr: number;         // CAGR geométrico anual del período (%)
  totalReturn: number;  // Retorno total compuesto del período (%)
  monthlyContrib: number; // Aporte mensual en USD
  totalContrib: number;   // Aporte total en USD (monthlyContrib × 180 meses)
  /**
   * Valor final de la cuenta en USD.
   * Si está disponible en el documento fuente, se usa ese valor exacto.
   * Si es null, se calcula visualmente con la fórmula DCA basada en el CAGR.
   */
  finalValue: number | null;
  tag?: "best" | "worst" | "recent";
  tagLabel?: string;
}

export const ROLLING_15Y: RollingPeriod[] = [
  {
    period:        "1928–1942",
    startYear:     1928,
    endYear:       1942,
    cagr:          0.73,
    totalReturn:   11.60,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    19019.02,
  },
  {
    period:        "1929–1943",
    startYear:     1929,
    endYear:       1943,
    cagr:          -0.20,
    totalReturn:   -2.95,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    17734.53,
    tag:           "worst",
    tagLabel:      "Peor período",
  },
  {
    period:        "1930–1944",
    startYear:     1930,
    endYear:       1944,
    cagr:          1.55,
    totalReturn:   25.97,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    20234.69,
  },
  {
    period:        "1942–1956",
    startYear:     1942,
    endYear:       1956,
    cagr:          17.96,
    totalReturn:   1091.16,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    78732.46,
    tag:           "best",
    tagLabel:      "Mayor CAGR",
  },
  {
    period:        "1974–1988",
    startYear:     1974,
    endYear:       1988,
    cagr:          12.11,
    totalReturn:   455.74,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    null, // No disponible en documento fuente
  },
  {
    period:        "1985–1999",
    startYear:     1985,
    endYear:       1999,
    cagr:          18.80,
    totalReturn:   1225.14,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    84728.10,
    tag:           "best",
    tagLabel:      "Mejor período",
  },
  {
    period:        "1994–2008",
    startYear:     1994,
    endYear:       2008,
    cagr:          6.41,
    totalReturn:   154.09,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    29666.66,
  },
  {
    period:        "2000–2014",
    startYear:     2000,
    endYear:       2014,
    cagr:          4.19,
    totalReturn:   85.18,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    25304.90,
    tag:           "worst",
    tagLabel:      "Década perdida",
  },
  {
    period:        "2009–2023",
    startYear:     2009,
    endYear:       2023,
    cagr:          13.81,
    totalReturn:   596.26,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    55009.81,
    tag:           "recent",
    tagLabel:      "Reciente",
  },
  {
    period:        "2010–2024",
    startYear:     2010,
    endYear:       2024,
    cagr:          13.75,
    totalReturn:   590.40,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    54708.73,
    tag:           "recent",
    tagLabel:      "Reciente",
  },
  {
    period:        "2011–2025",
    startYear:     2011,
    endYear:       2025,
    cagr:          13.94,
    totalReturn:   607.84,
    monthlyContrib: 100,
    totalContrib:  18000,
    finalValue:    55602.80,
    tag:           "recent",
    tagLabel:      "Reciente",
  },
];

/**
 * TOTAL 10,63% — etiqueta exacta del documento fuente.
 * Promedio de CAGR geométrico de los períodos móviles de 15 años
 * registrados en Rendimiento SPY 1928-2025.
 */
export const ROLLING_15Y_TOTAL_CAGR = 10.63;
