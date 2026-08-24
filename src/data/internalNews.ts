import type { NewsCategory } from "./news";

export type NewsStatus = "propuesta" | "en-discusion" | "vigente";

export interface WhatToWatch {
  label: string;
  detail: string;
}

export interface InternalNewsSource {
  label: string;
  url: string;
}

export interface InternalNewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  tag: string;
  status: NewsStatus;
  summary: string;
  intro: string[];
  porque_importa: string;
  que_mirar: WhatToWatch[];
  cta?: { label: string; href: string };
  sources: InternalNewsSource[];
}

export const INTERNAL_NEWS: InternalNewsItem[] = [
  {
    id: "jubilacion-anticipada-60-anos-2026",
    slug: "jubilacion-anticipada-60-anos",
    title: "Gobierno propone una nueva opción de jubilación anticipada desde los 60 años",
    date: "2026-08-20",
    category: "jubilacion",
    tag: "Jubilación anticipada",
    status: "propuesta",
    summary:
      "El Poder Ejecutivo anunció que enviará al Parlamento un proyecto que permitiría jubilarse desde los 60 años con al menos 30 años de servicios. Quienes se retiren antes recibirían una prestación menor.",
    intro: [
      "El Poder Ejecutivo anunció que enviará al Parlamento un proyecto de ley que habilitaría la jubilación anticipada a partir de los 60 años para trabajadores que acrediten al menos 30 años de actividad cotizada.",
      "La edad normal de jubilación seguiría siendo de 65 años. Quienes opten por retirarse antes recibirían una prestación reducida, proporcional al mayor período que se estima cobrarán la jubilación. Esto significa: más años de cobro, pero menos por mes.",
      "Es importante aclarar que esta es una propuesta del Ejecutivo. Todavía no es una norma vigente: debe ser debatida y aprobada por el Parlamento antes de entrar en efecto.",
    ],
    porque_importa:
      "Si esta propuesta se convierte en ley, las personas con 60 años o más y 30 años de aportes tendrán una nueva opción: retirarse antes y cobrar una jubilación más baja, o esperar hasta los 65 y cobrar más. La decisión dependerá de la salud, las necesidades económicas y el ahorro acumulado de cada persona. Cuanto mayor sea el ahorro personal complementario, más libertad habrá para elegir cuándo retirarse.",
    que_mirar: [
      { label: "Tu edad actual", detail: "¿Cuántos años te faltan para llegar a los 60 o a los 65?" },
      { label: "Años de aportes acumulados", detail: "¿Ya tenés 30 años de servicios cotizados, o estás en camino?" },
      { label: "Diferencia entre jubilarte a los 60 vs. los 65", detail: "Una jubilación anticipada implica cobrar menos por mes durante más tiempo." },
      { label: "Ahorro personal complementario", detail: "Un plan de ahorro propio puede compensar una jubilación más baja si elegís retirarte antes." },
    ],
    cta: { label: "Simulá cuánto podrías necesitar para complementar tu jubilación →", href: "/simulador" },
    sources: [
      { label: "El País UY — Propuesta de jubilación anticipada a los 60 años", url: "https://www.elpais.com.uy/negocios/noticias/propuesta-de-jubilacion-anticipada-a-los-60-anos-para-algunos-trabajadores-a-quienes-incluye" },
      { label: "Presidencia de la República — OPP", url: "https://www.opp.gub.uy" },
    ],
  },
  {
    id: "cambios-afap-reducir-costos-2026",
    slug: "cambios-afap-reducir-costos",
    title: "El Gobierno prepara cambios en las AFAP para reducir costos y mejorar el ahorro jubilatorio",
    date: "2026-08-18",
    category: "afaps",
    tag: "AFAPs",
    status: "en-discusion",
    summary:
      "El Gobierno anunció varias líneas de trabajo para modificar el sistema de ahorro individual: menos comisiones, mayor competencia entre AFAPs, mejor información y posibilidad de vincular parte de las comisiones al rendimiento obtenido.",
    intro: [
      "El Gobierno presentó un conjunto de medidas en estudio para mejorar el funcionamiento del sistema de ahorro previsional individual administrado por las AFAPs.",
      "Entre los cambios planteados se destacan: reducción de costos asociados a seguros y comisiones, mayor competencia entre administradoras, asignación de nuevos afiliados considerando tanto las comisiones como la rentabilidad, posibilidad de vincular parte de las comisiones al rendimiento obtenido, mayor diversificación de las inversiones, y mejoras en la información disponible para que cada persona pueda ver conjuntamente su jubilación del BPS y su ahorro en AFAP.",
      "Varias de estas medidas requieren cambios regulatorios o legislativos. Ninguna está vigente aún: se encuentran en etapa de discusión y diseño.",
    ],
    porque_importa:
      "Las comisiones y los costos de seguros dentro del sistema AFAP reducen el monto que acumulás al jubilarte. Aunque el porcentaje parece pequeño, a lo largo de 30 o 40 años de aportes el impacto en el saldo final puede ser muy significativo. Si los cambios propuestos se implementan, podrías terminar con más ahorro al momento del retiro sin necesidad de aportar más.",
    que_mirar: [
      { label: "Comisión de tu AFAP", detail: "¿Cuánto cobra tu AFAP sobre tu salario? Podés compararlo en el sitio del BCU." },
      { label: "Rentabilidad histórica", detail: "¿Cómo se comparó el rendimiento de tu AFAP con las demás en los últimos años?" },
      { label: "Saldo acumulado en tu cuenta", detail: "¿Cuánto tenés ahorrado en tu cuenta individual? BPS puede informártelo." },
      { label: "Impacto de las comisiones a largo plazo", detail: "Diferencias pequeñas en comisión generan diferencias grandes en el saldo final tras décadas de aportes." },
    ],
    cta: { label: "Entendé cómo funciona el sistema previsional uruguayo →", href: "/sistema-previsional" },
    sources: [
      { label: "BCU — Rendimientos y comisiones AFAP", url: "https://www.bcu.gub.uy/Regulacion-y-Supervision/Paginas/Rendimientos-AFAP.aspx" },
      { label: "El País UY — Reforma 2026: cambios propuestos en AFAPs y edad de jubilación", url: "https://www.elpais.com.uy/que-pasa/reforma-de-la-seguridad-social-2026-que-cambios-se-proponen-para-la-edad-de-jubilacion-y-las-afap" },
      { label: "Infobae — Riesgos fiscales de los cambios propuestos", url: "https://www.infobae.com/america/america-latina/2026/05/08/uruguay-advierten-por-riesgos-fiscales-de-propuestas-para-cambiar-las-afap-y-cambiar-la-edad-de-retiro/" },
    ],
  },
  {
    id: "bcu-tasa-politica-monetaria-5-75-2026",
    slug: "bcu-tasa-politica-monetaria-5-75",
    title: "El Banco Central mantiene la tasa de interés en 5,75%",
    date: "2026-08-15",
    category: "tasas",
    tag: "Tasas BCU",
    status: "vigente",
    summary:
      "El BCU decidió mantener la Tasa de Política Monetaria en 5,75%. La inflación se acerca al objetivo y las tasas han bajado respecto a 2025. Esto puede impactar lo que pagan los bancos en depósitos y plazos fijos.",
    intro: [
      "El Banco Central del Uruguay (BCU) decidió mantener la Tasa de Política Monetaria (TPM) en 5,75%. La decisión refleja que la inflación se encuentra cerca del objetivo establecido por la autoridad monetaria.",
      "Las tasas en Uruguay bajaron considerablemente respecto a los niveles de 2025, cuando estaban más altas para contener la inflación. Hoy el contexto es diferente: con la inflación más controlada, el BCU puede sostener o reducir su tasa de referencia sin poner en riesgo los objetivos de estabilidad de precios.",
    ],
    porque_importa:
      "Cuando el BCU baja su tasa de referencia, con el tiempo los bancos también tienden a bajar las tasas que ofrecen en plazos fijos y cajas de ahorro. Esto significa que el rendimiento de tus ahorros bancarios puede ir cayendo. En ese contexto, vale la pena comparar todas las opciones disponibles: depósitos en distintos bancos, plazos más largos, y alternativas de ahorro a largo plazo que puedan ofrecer mejores retornos.",
    que_mirar: [
      { label: "Tasa de tus depósitos actuales", detail: "¿A qué tasa tenés tus ahorros en el banco? ¿Sigue siendo competitiva frente a la inflación?" },
      { label: "Plazo de tus depósitos", detail: "Los depósitos a plazos más largos suelen ofrecer tasas algo mejores." },
      { label: "Inflación actual", detail: "Una tasa de depósito que no supera la inflación implica una pérdida de poder adquisitivo real." },
      { label: "Alternativas de ahorro", detail: "¿Estás comparando los depósitos bancarios con otras opciones de inversión a largo plazo?" },
    ],
    cta: { label: "Compará las tasas de depósito disponibles en Uruguay →", href: "/indicadores" },
    sources: [
      { label: "Banco Central del Uruguay — Política Monetaria", url: "https://www.bcu.gub.uy/Politica-Economica-y-Mercados/Paginas/Politica-Monetaria.aspx" },
      { label: "BCU — Tasas medias de interés", url: "https://www.bcu.gub.uy/Servicios-Financieros-SSF/Paginas/Tasas-Medias.aspx" },
    ],
  },
  {
    id: "aumento-jubilaciones-minimas-julio-2026",
    slug: "aumento-jubilaciones-minimas-julio-2026",
    title: "Aumentan las jubilaciones mínimas en Uruguay",
    date: "2026-07-01",
    category: "bps",
    tag: "Jubilaciones BPS",
    status: "vigente",
    summary:
      "Desde julio se aplicó un incremento adicional de aproximadamente 2,5% para alrededor de 120.000 jubilados y pensionistas de menores ingresos. El ajuste se suma al aumento anual ya aplicado anteriormente.",
    intro: [
      "Desde julio de 2026 comenzó a aplicarse un incremento adicional de aproximadamente 2,5% para determinados jubilados y pensionistas que perciben los ingresos más bajos del sistema previsional.",
      "La medida alcanza a alrededor de 120.000 personas y se suma al incremento anual que ya se había aplicado a comienzos de año. El objetivo es mejorar el poder adquisitivo de quienes reciben las jubilaciones más bajas dentro del sistema del BPS.",
    ],
    porque_importa:
      "Para quienes dependen exclusivamente de la jubilación del BPS, este tipo de ajuste tiene un impacto directo en su calidad de vida. Sin embargo, las jubilaciones mínimas en Uruguay siguen siendo bajas en términos absolutos. Complementar la jubilación del Estado con ahorro personal es fundamental para mantener un nivel de vida adecuado durante el retiro.",
    que_mirar: [
      { label: "Monto de jubilación mínima actual", detail: "¿Cuánto representa en relación a tu salario de hoy? La diferencia es lo que necesitás cubrir." },
      { label: "Tasa de sustitución esperada", detail: "¿Qué porcentaje de tu sueldo recibirás cuando te jubiles por el BPS?" },
      { label: "Años que te quedan antes de jubilarte", detail: "Cuanto antes empieces a ahorrar, menor será el esfuerzo necesario cada mes." },
      { label: "Ahorro complementario", detail: "¿Tenés un plan de ahorro que pueda complementar la jubilación del BPS y tu AFAP?" },
    ],
    cta: { label: "Simulá cuánto podrías acumular aportando mensualmente →", href: "/simulador" },
    sources: [
      { label: "BPS — Banco de Previsión Social", url: "https://www.bps.gub.uy" },
      { label: "Ministerio de Economía y Finanzas", url: "https://www.mef.gub.uy" },
    ],
  },
];

export function getInternalNewsSorted(): InternalNewsItem[] {
  return [...INTERNAL_NEWS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getInternalNewsBySlug(slug: string): InternalNewsItem | undefined {
  return INTERNAL_NEWS.find((n) => n.slug === slug);
}
