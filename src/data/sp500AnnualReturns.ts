/**
 * Serie histórica del S&P 500 con dividendos incluidos.
 * Fuente: NYU Stern / Aswath Damodaran, Historical Returns: Stocks, Bonds & T.Bills.
 *
 * NOTA METODOLÓGICA: El S&P 500 fue creado en 1957. La serie previa (1928–1956)
 * fue completada usando índices históricos de acciones large cap, según la metodología
 * descripta en el documento NYU rendimientos. Los retornos incluyen dividendos
 * y apreciación de precio. Los rendimientos pasados no garantizan resultados futuros.
 *
 * ⚠️ Este archivo es editable. Si disponés de datos actualizados del documento NYU,
 * podés actualizar los valores directamente aquí sin modificar ningún otro archivo.
 */

export interface AnnualReturn {
  year: number;
  returnPct: number; // Retorno total anual incluyendo dividendos (%)
}

export const SP500_ANNUAL_RETURNS: AnnualReturn[] = [
  // ── 1928–1956: Serie histórica large cap (pre-S&P 500 formal) ──────────
  { year: 1928, returnPct: 43.81 },
  { year: 1929, returnPct: -8.30 },
  { year: 1930, returnPct: -25.12 },
  { year: 1931, returnPct: -43.84 },
  { year: 1932, returnPct: -8.64 },
  { year: 1933, returnPct: 49.98 },
  { year: 1934, returnPct: -1.19 },
  { year: 1935, returnPct: 46.74 },
  { year: 1936, returnPct: 31.94 },
  { year: 1937, returnPct: -35.34 },
  { year: 1938, returnPct: 29.28 },
  { year: 1939, returnPct: -1.10 },
  { year: 1940, returnPct: -10.67 },
  { year: 1941, returnPct: -12.77 },
  { year: 1942, returnPct: 19.17 },
  { year: 1943, returnPct: 25.06 },
  { year: 1944, returnPct: 19.03 },
  { year: 1945, returnPct: 35.82 },
  { year: 1946, returnPct: -8.43 },
  { year: 1947, returnPct: 5.20 },
  { year: 1948, returnPct: 5.70 },
  { year: 1949, returnPct: 18.30 },
  { year: 1950, returnPct: 30.81 },
  { year: 1951, returnPct: 23.68 },
  { year: 1952, returnPct: 18.15 },
  { year: 1953, returnPct: -1.21 },
  { year: 1954, returnPct: 52.56 },
  { year: 1955, returnPct: 31.56 },
  { year: 1956, returnPct: 6.56 },
  // ── 1957–2025: S&P 500 formal ──────────────────────────────────────────
  { year: 1957, returnPct: -10.46 },
  { year: 1958, returnPct: 43.72 },
  { year: 1959, returnPct: 11.95 },
  { year: 1960, returnPct: 0.47 },
  { year: 1961, returnPct: 26.64 },
  { year: 1962, returnPct: -8.81 },
  { year: 1963, returnPct: 22.61 },
  { year: 1964, returnPct: 16.42 },
  { year: 1965, returnPct: 12.40 },
  { year: 1966, returnPct: -9.97 },
  { year: 1967, returnPct: 23.80 },
  { year: 1968, returnPct: 10.81 },
  { year: 1969, returnPct: -8.24 },
  { year: 1970, returnPct: 3.56 },
  { year: 1971, returnPct: 14.22 },
  { year: 1972, returnPct: 18.76 },
  { year: 1973, returnPct: -14.31 },
  { year: 1974, returnPct: -25.90 },
  { year: 1975, returnPct: 37.20 },
  { year: 1976, returnPct: 23.83 },
  { year: 1977, returnPct: -7.16 },
  { year: 1978, returnPct: 6.57 },
  { year: 1979, returnPct: 18.52 },
  { year: 1980, returnPct: 31.74 },
  { year: 1981, returnPct: -4.70 },
  { year: 1982, returnPct: 20.42 },
  { year: 1983, returnPct: 22.34 },
  { year: 1984, returnPct: 6.15 },
  { year: 1985, returnPct: 31.73 },
  { year: 1986, returnPct: 18.49 },
  { year: 1987, returnPct: 5.23 },
  { year: 1988, returnPct: 16.54 },
  { year: 1989, returnPct: 31.48 },
  { year: 1990, returnPct: -3.10 },
  { year: 1991, returnPct: 30.23 },
  { year: 1992, returnPct: 7.49 },
  { year: 1993, returnPct: 9.97 },
  { year: 1994, returnPct: 1.33 },
  { year: 1995, returnPct: 37.20 },
  { year: 1996, returnPct: 22.68 },
  { year: 1997, returnPct: 33.10 },
  { year: 1998, returnPct: 28.34 },
  { year: 1999, returnPct: 20.89 },
  { year: 2000, returnPct: -9.03 },
  { year: 2001, returnPct: -11.85 },
  { year: 2002, returnPct: -21.97 },
  { year: 2003, returnPct: 28.36 },
  { year: 2004, returnPct: 10.74 },
  { year: 2005, returnPct: 4.83 },
  { year: 2006, returnPct: 15.61 },
  { year: 2007, returnPct: 5.48 },
  { year: 2008, returnPct: -36.55 },
  { year: 2009, returnPct: 25.94 },
  { year: 2010, returnPct: 14.82 },
  { year: 2011, returnPct: 2.10 },
  { year: 2012, returnPct: 15.89 },
  { year: 2013, returnPct: 32.15 },
  { year: 2014, returnPct: 13.52 },
  { year: 2015, returnPct: 1.38 },
  { year: 2016, returnPct: 11.77 },
  { year: 2017, returnPct: 21.64 },
  { year: 2018, returnPct: -4.23 },
  { year: 2019, returnPct: 31.33 },
  { year: 2020, returnPct: 18.02 },
  { year: 2021, returnPct: 28.58 },
  { year: 2022, returnPct: -18.04 },
  { year: 2023, returnPct: 26.06 },
  { year: 2024, returnPct: 24.88 },
  { year: 2025, returnPct: 17.72 },
];

/**
 * Estadísticas resumen del documento NYU rendimientos.
 * Fuente: NYU Stern / Aswath Damodaran, Historical Returns: Stocks, Bonds & T.Bills.
 *
 * El retorno geométrico es el más relevante para entender crecimiento compuesto
 * a largo plazo, ya que refleja el rendimiento real de una inversión sostenida.
 */
export const SP500_STATS = {
  /** S&P 500 1928–2025, retorno aritmético anual */
  arithmetic1928_2025: 11.85,
  /** S&P 500 1928–2025, retorno geométrico anual (CAGR) */
  geometric1928_2025: 10.02,
  /** S&P 500 1976–2025, retorno geométrico anual */
  geometric1976_2025: 11.92,
  /** S&P 500 2016–2025, retorno geométrico anual */
  geometric2016_2025: 14.68,
  /** T-Bill (Letras del Tesoro EE.UU.) 1928–2025, retorno geométrico anual */
  tbill1928_2025: 3.37,
  /** T-Bond (Bonos del Tesoro EE.UU. 10 años) 1928–2025, retorno geométrico anual */
  tbond1928_2025: 4.53,
} as const;

/** Años con retornos negativos destacados */
export const NOTABLE_NEGATIVE_YEARS = [1931, 1937, 1974, 2002, 2008, 2022];
/** Años con retornos positivos excepcionales */
export const NOTABLE_POSITIVE_YEARS = [1933, 1935, 1954, 1958, 1995];
