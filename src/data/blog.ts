export type BlogCategory =
  | 'sistema-previsional'
  | 'mercado'
  | 'ahorro-inversion'
  | 'educacion-financiera';

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'sistema-previsional': 'Sistema Previsional',
  'mercado': 'Mercado',
  'ahorro-inversion': 'Ahorro & Inversión',
  'educacion-financiera': 'Educación Financiera',
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string;       // ISO 8601, e.g. "2025-05-01"
  readingTime: number; // minutes
  coverImage?: string;
  seo: {
    title: string;
    description: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '401k-incentivos-ahorro',
    title: 'El 401(k): por qué el diseño del incentivo importa más que el producto',
    excerpt:
      'El 401(k) acumula hoy más de 10 billones de dólares en activos. Pero su verdadero logro no es financiero: es haber logrado que millones de personas ahorren voluntariamente durante décadas. La pregunta es cómo.',
    category: 'educacion-financiera',
    categoryLabel: 'Mercado · Educación Financiera',
    date: '2026-05-07',
    readingTime: 9,
    seo: {
      title: 'El 401(k): diseño de incentivos para el ahorro | Inversave',
      description:
        'Por qué el 401(k) de EE.UU. acumula USD 10 billones: inscripción automática, matching del empleador y beneficio fiscal. Qué aprendizajes deja para fomentar el ahorro de largo plazo.',
    },
  },
  {
    slug: 'dca-aportes-periodicos',
    title: 'Dollar Cost Averaging: invertir de forma periódica sin intentar adivinar el mercado',
    excerpt:
      'El DCA consiste en invertir una suma fija a intervalos regulares, independientemente del precio del mercado. No requiere adivinar el momento correcto. Requiere constancia.',
    category: 'mercado',
    categoryLabel: 'Mercado · Biblioteca',
    date: '2026-05-20',
    readingTime: 12,
    seo: {
      title: 'Dollar Cost Averaging: invertir periódicamente | Inversave',
      description:
        'Qué es el DCA, cómo funciona en mercados volátiles y qué muestran los datos históricos del S&P 500. Guía práctica para ahorradores de largo plazo.',
    },
  },
  {
    slug: 'menos-aportantes-por-jubilado',
    title: 'Menos aportantes por cada jubilado: el dato que explica la presión del sistema previsional',
    excerpt:
      'En 2024 hay 2,50 aportantes por cada jubilado en Uruguay. En 2100 el BPS proyecta que esa cifra caerá a 1,23. Ese número explica, mejor que cualquier otro, la presión estructural que enfrenta el sistema previsional.',
    category: 'sistema-previsional',
    categoryLabel: 'Sistema Previsional',
    date: '2026-05-08',
    readingTime: 6,
    seo: {
      title: 'Menos aportantes por jubilado: la presión del sistema previsional | Inversave',
      description:
        'La relación activo-pasivo del BPS cae de 2,50 a 1,23 según proyecciones al 2100. Qué significa ese dato para la sostenibilidad del sistema previsional uruguayo.',
    },
  },
  {
    slug: 'caja-de-profesionales',
    title: 'Caja de Profesionales: cómo funciona y por qué está en discusión',
    excerpt:
      'La Caja cubre a más de 63.000 profesionales activos y acumuló un déficit de US$189 millones entre 2020 y 2024. En 2025 se aprobó la reforma más importante de su historia. Esto es lo que necesitás saber.',
    category: 'sistema-previsional',
    categoryLabel: 'Sistema Previsional',
    date: '2026-05-26',
    readingTime: 10,
    seo: {
      title: 'Caja de Profesionales Uruguay: cómo funciona y la reforma 2025 | Inversave',
      description:
        'Guía completa sobre la CJPPU: categorías, sueldo ficto, tasa de aporte, déficit operativo y los cambios de la Ley 20.410. Con datos, gráficos y análisis.',
    },
  },
  {
    slug: 'que-controlas-en-tu-jubilacion',
    title: 'Qué parte de tu jubilación controlás y qué parte no',
    excerpt:
      'La demografía, la inflación y cuánto tiempo vivirás son variables que ningún ahorrador puede manejar. Pero hay otras —cuándo empezás, cuánto ahorrás, dónde invertís— que dependen exclusivamente de vos. Entender la diferencia cambia cómo planificás.',
    category: 'sistema-previsional',
    categoryLabel: 'Sistema Previsional · Planificación',
    date: '2026-05-22',
    readingTime: 8,
    seo: {
      title: 'Qué parte de tu jubilación controlás y qué parte no | Inversave',
      description:
        'Demografía, inflación y longevidad son variables fuera de tu control. Cuándo empezar, cuánto ahorrar y dónde invertir sí dependen de vos. Análisis con datos de BPS, INE y CEPAL.',
    },
  },
  {
    slug: 'jubilacion-25-anos',
    title: 'La jubilación puede durar 25 años: por qué vivir más exige planificar mejor',
    excerpt:
      'Una mujer que se jubila hoy en Uruguay tiene, en promedio, 23 años de vida por delante. Ese horizonte define cuánto tiempo tus ingresos deben sostenerse — y cambia completamente el cálculo del retiro.',
    category: 'sistema-previsional',
    categoryLabel: 'Sistema Previsional · Planificación',
    date: '2026-05-14',
    readingTime: 7,
    seo: {
      title: 'La jubilación puede durar 25 años: planificar el retiro largo | Inversave',
      description:
        'Con 17 a 23 años de retiro esperados, el ingreso debe sostenerse mucho más tiempo. Riesgo de longevidad, brecha del BPS y ahorro complementario explicados.',
    },
  },
];
