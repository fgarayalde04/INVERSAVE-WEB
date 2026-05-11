/**
 * Mapeo de nombre de institución → ruta de logo en /public/logos/institutions/
 *
 * Para agregar una institución nueva:
 *   1. Copiá el logo a public/logos/institutions/<nombre>.png
 *   2. Agregá una entrada aquí con el nombre exacto que usa market.ts
 */
export const INSTITUTION_LOGOS: Record<string, string> = {
  // Bancos
  "Banco República (BROU)":  "/logos/institutions/brou.png",
  "BROU":                    "/logos/institutions/brou.png",
  "Itaú Uruguay":            "/logos/institutions/itau.png",
  "Itaú":                    "/logos/institutions/itau.png",
  "BBVA Uruguay":            "/logos/institutions/bbva.png",
  "BBVA":                    "/logos/institutions/bbva.png",
  "Scotiabank Uruguay":      "/logos/institutions/scotiabank.png",
  "Scotiabank":              "/logos/institutions/scotiabank.png",
  "Banque Heritage":         "/logos/institutions/heritage.png",
  "Heritage":                "/logos/institutions/heritage.png",
  "Bandes Uruguay":          "/logos/institutions/bandes.png",
  "Bandes":                  "/logos/institutions/bandes.png",

  // AFAPs
  "República AFAP":          "/logos/institutions/republica-afap.png",
  "SURA AFAP":               "/logos/institutions/sura-afap.png",
  "UniónCapital AFAP":       "/logos/institutions/unioncapital-afap.png",
  "Integración AFAP":        "/logos/institutions/integracion-afap.png",
  "AFAP Itaú":               "/logos/institutions/itau.png",

  // Reguladores (sin logo por ahora — muestran iniciales)
  // "Banco Central del Uruguay": "/logos/institutions/bcu.png",
  // "BCU":                       "/logos/institutions/bcu.png",
  // "Banco de Previsión Social":  "/logos/institutions/bps.png",
  // "BPS":                        "/logos/institutions/bps.png",
};

export function getInstitutionLogo(name: string): string | undefined {
  return INSTITUTION_LOGOS[name];
}
