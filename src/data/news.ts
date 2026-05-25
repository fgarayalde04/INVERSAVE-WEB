/**
 * news.ts — Artículos sobre el sistema previsional uruguayo.
 *
 * Ordenados por fecha descendente (más reciente primero).
 */

export type NewsCategory =
  | "reforma"
  | "afaps"
  | "bps"
  | "mercado"
  | "educacion"
  | "internacional";

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  sourceCountry: "UY" | "AR" | "US" | "ES";
  url: string;
  date: string; // ISO 8601: "2026-05-08"
  category: NewsCategory;
  summary: string;
  tag: string;
  image?: string;      // ruta desde /public, ej: "/news/infobae-afap.jpg"
  imageAlt?: string;
}

export const NEWS: NewsItem[] = [
  {
    id: "elpais-uy-caja-profesionales-comision-expertos-2026",
    title: "Caja de Profesionales: comisión de expertos llegó a diagnóstico consensuado sobre la crisis pero discrepa en medidas de reforma",
    source: "El País",
    sourceCountry: "UY",
    url: "https://www.elpais.com.uy/negocios/noticias/caja-de-profesionales-comision-de-expertos-llego-a-diagnostico-consensuado-sobre-crisis-pero-discrepa-en-medidas-de-reforma",
    date: "2026-05-13",
    category: "reforma",
    summary:
      "La comisión de expertos convocada para analizar la crisis de la Caja de Profesionales alcanzó un diagnóstico común sobre sus causas estructurales, pero no logró consenso en las medidas concretas de reforma para revertir su situación financiera.",
    tag: "Cajas paraestatales",
  },
  {
    id: "elpais-uy-jubilacion-anticipada-60-anos-2026",
    title: "Propuesta de jubilación anticipada a los 60 años para algunos trabajadores: a quiénes incluye",
    source: "El País",
    sourceCountry: "UY",
    url: "https://www.elpais.com.uy/negocios/noticias/propuesta-de-jubilacion-anticipada-a-los-60-anos-para-algunos-trabajadores-a-quienes-incluye",
    date: "2026-05-13",
    category: "reforma",
    summary:
      "Una propuesta busca habilitar la jubilación anticipada a partir de los 60 años para determinadas categorías de trabajadores. El artículo detalla qué sectores quedarían incluidos y cuáles son las condiciones para acceder al beneficio.",
    tag: "Jubilación anticipada",
  },
  {
    id: "elpais-uy-ceres-estado-cuentas-ahorro-2026",
    title: "Jubilaciones: CERES cuestionó que el Estado uruguayo sea capaz de gestionar las cuentas de ahorro individual",
    source: "El País",
    sourceCountry: "UY",
    url: "https://www.elpais.com.uy/negocios/noticias/jubilaciones-ceres-cuestiono-que-el-estado-uruguayo-sea-capaz-de-gestionar-las-cuentas-de-ahorro-individual",
    date: "2026-05-09",
    category: "reforma",
    summary:
      "El centro de estudios CERES cuestionó la capacidad del Estado uruguayo para administrar las cuentas de ahorro individual que hoy gestionan las AFAPs. El análisis advierte sobre los riesgos de estatizar la gestión previsional.",
    tag: "AFAPs — Estado",
  },
  {
    id: "elobservador-caja-profesionales-perdida-2025",
    title: "Caja de Profesionales perdió más de US$ 30 millones en 2025 pese a asistencia financiera del Estado y mayor aporte de jubilados",
    source: "El Observador",
    sourceCountry: "UY",
    url: "https://www.elobservador.com.uy/economia-y-empresas/caja-profesionales-perdio-mas-us-30-millones-2025-pese-asistencia-financiera-del-estado-y-mayor-aporte-jubilados-n6043665",
    date: "2026-02-28",
    category: "bps",
    summary:
      "La Caja de Profesionales Universitarios registró pérdidas superiores a los 30 millones de dólares en 2025, a pesar de recibir asistencia financiera del Estado y del mayor aporte de sus jubilados. El resultado evidencia la fragilidad de las cajas paraestatales.",
    tag: "Cajas paraestatales",
  },
  {
    id: "lanacion-reforma-jubilatoria-uy-2026",
    title: "La reforma jubilatoria uruguaya",
    source: "La Nación",
    sourceCountry: "AR",
    url: "https://www.lanacion.com.ar/editoriales/la-reforma-jubilatoria-uruguaya-nid10052026/",
    date: "2026-05-10",
    category: "reforma",
    summary:
      "Editorial sobre la reforma jubilatoria uruguaya: los cambios propuestos, el debate político y las implicancias para los trabajadores activos y futuros jubilados del país.",
    tag: "Reforma previsional",
  },
  {
    id: "infobae-riesgos-fiscales-afap-2026",
    title:
      "Uruguay: advierten por riesgos fiscales de propuestas para cambiar las AFAPs y la edad de retiro",
    source: "Infobae",
    sourceCountry: "AR",
    url: "https://www.infobae.com/america/america-latina/2026/05/08/uruguay-advierten-por-riesgos-fiscales-de-propuestas-para-cambiar-las-afap-y-cambiar-la-edad-de-retiro/",
    date: "2026-05-08",
    category: "reforma",
    summary:
      "Economistas y organismos advierten sobre los riesgos fiscales de las propuestas que buscan modificar el sistema de AFAPs y reducir la edad de retiro en Uruguay.",
    tag: "Riesgo fiscal",
  },
  {
    id: "ambito-riesgo-pais-sistema-previsional-2026",
    title:
      "Cómo reaccionó el riesgo país a los cambios planteados en el sistema previsional",
    source: "Ámbito",
    sourceCountry: "AR",
    url: "https://www.ambito.com/uruguay/como-reacciono-el-riesgo-pais-los-cambios-planteados-el-sistema-previsional-n6275456",
    date: "2026-04-20",
    category: "mercado",
    summary:
      "Los mercados reaccionaron ante las propuestas de cambio al sistema previsional uruguayo. El riesgo país registró movimientos ante la incertidumbre sobre el futuro de las AFAPs.",
    tag: "Mercado & riesgo país",
  },
  {
    id: "elpais-uy-reforma-seguridad-social-2026",
    title:
      "Reforma de la seguridad social 2026: qué cambios se proponen para la edad de jubilación y las AFAPs",
    source: "El País",
    sourceCountry: "UY",
    url: "https://www.elpais.com.uy/que-pasa/reforma-de-la-seguridad-social-2026-que-cambios-se-proponen-para-la-edad-de-jubilacion-y-las-afap",
    date: "2026-03-15",
    category: "reforma",
    summary:
      "El País Uruguay analiza las principales propuestas en debate para modificar la reforma de la seguridad social aprobada en 2023: cambios en la edad de jubilación y el rol de las AFAPs.",
    tag: "Reforma — AFAPs",
  },
  {
    id: "uypress-mtss-seguridad-social-envejecimiento-2026",
    title:
      "El MTSS advierte que Uruguay debe repensar la seguridad social ante el envejecimiento y los cambios del trabajo",
    source: "Uypress",
    sourceCountry: "UY",
    url: "https://www.uypress.net/Secciones/El-MTSS-advierte-que-Uruguay-debe-repensar-la-seguridad-social-ante-el-envejecimiento-y-los-cambios-del-tra",
    date: "2026-03-10",
    category: "bps",
    summary:
      "El Ministerio de Trabajo y Seguridad Social alerta sobre la necesidad de adaptar el sistema previsional uruguayo al envejecimiento de la población y las nuevas formas de trabajo.",
    tag: "Sostenibilidad",
  },
  {
    id: "ambito-afap-ganancias-2025-gobierno-cambios-2026",
    title:
      "Cayeron las ganancias de las AFAPs en 2025 y el gobierno analiza cambios en el sistema previsional",
    source: "Ámbito",
    sourceCountry: "AR",
    url: "https://www.ambito.com/uruguay/cayeron-las-ganancias-las-afap-2025-y-el-gobierno-analiza-cambios-el-sistema-previsional-n6256320",
    date: "2026-02-15",
    category: "afaps",
    summary:
      "Las AFAPs uruguayas registraron una caída en sus ganancias durante 2025. El gobierno evalúa ajustes al sistema previsional ante el desempeño de los fondos y las presiones por una nueva reforma.",
    tag: "AFAPs 2025",
  },
];

/** Devuelve las noticias ordenadas de más reciente a más antigua */
export function getNewsSorted(): NewsItem[] {
  return [...NEWS].sort((a, b) => b.date.localeCompare(a.date));
}

/** Devuelve noticias filtradas por categoría */
export function getNewsByCategory(category: NewsCategory): NewsItem[] {
  return getNewsSorted().filter((n) => n.category === category);
}
