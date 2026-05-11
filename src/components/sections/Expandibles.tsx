"use client";
import { FadeIn, ExpandBlock, FAQItem, QuoteBlock, StepItem, Pill, TrustBadge, Alert } from "@/components/ui";
import { SIX_FACTORS, FAQ_DATA, QUOTES } from "@/lib/utils";

// ── Icons used in accordions ────────────────────────────────
const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="9" cy="9" r="1" fill="currentColor"/>
  </svg>
);
const IconTrending = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 13 L6.5 8 L9.5 10.5 L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 5 L14 5 L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2 L15 4.5 L15 9 C15 12.5 12 15.5 9 16.5 C6 15.5 3 12.5 3 9 L3 4.5 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6.5 9 L8 10.5 L11.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 5.5 L9 9 L11.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 2 C9 2 7 5.5 7 9 C7 12.5 9 16 9 16" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 2 C9 2 11 5.5 11 9 C11 12.5 9 16 9 16" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 9 L16 9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2.5 5.5 L15.5 5.5M2.5 12.5 L15.5 12.5" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);
const IconLock = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="3" y="8" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5.5 8 L5.5 6 C5.5 4 7 2.5 9 2.5 C11 2.5 12.5 4 12.5 6 L12.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="12" r="1.2" fill="currentColor"/>
  </svg>
);
const IconQuestion = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 7 C7 5.9 7.9 5 9 5 C10.1 5 11 5.9 11 7 C11 8.5 9 8.8 9 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="13" r="0.8" fill="currentColor"/>
  </svg>
);
const IconSave = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 15 C2 15 4 10 9 10 C14 10 16 15 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const IconFlag = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 2 L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 3 L14 3 L11 7.5 L14 12 L4 12 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

// ── Concept card icons ───────────────────────────────────────
const icons: Record<string, () => JSX.Element> = {
  inflacion: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 16 L10 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M6 9 L10 5 L14 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 14 L16 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 2"/>
    </svg>
  ),
  compuesto: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 16 Q6 15 8 12 Q10 8 12 6 Q14 4 18 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="18" cy="3" r="1.5" fill="currentColor"/>
    </svg>
  ),
  diversificacion: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  riesgo: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2 L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 10 L5 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M18 10 L15 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="5" cy="13" r="3" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  horizonte: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 2 L6 6M14 2 L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 8 L18 8" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 12 L9 12M11 12 L14 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  liquidez: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2 C10 2 4 8 4 12 C4 15.3 6.7 18 10 18 C13.3 18 16 15.3 16 12 C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 13.5 C7.5 15 8.7 16 10.5 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  fondos: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 7 L6 5 C6 3.9 6.9 3 8 3 L12 3 C13.1 3 14 3.9 14 5 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 12 L13 12M7 14.5 L11 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  etf: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="14" width="16" height="3" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="3" y="9" width="14" height="3" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="4" y="4" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  sp500: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 14 L5.5 9.5 L8.5 11.5 L13 6 L18 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 4 L18 4 L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17 L18 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  volatilidad: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 10 L5 5 L8 14 L11 7 L14 13 L17 8 L19 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  portafolio: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 10 L10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 10 L17 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 10 L3.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  ahorro: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10 L4 16M10 7 L10 16M16 4 L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M2 16 L18 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  automatizacion: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10 C4 6.7 6.7 4 10 4 C12.5 4 14.7 5.5 15.7 7.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 10 C16 13.3 13.3 16 10 16 C7.5 16 5.3 14.5 4.3 12.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 5 L16 7.7 L18 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 15 L4.3 12.3 L2 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  largoplazo: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 3 L10 5M10 15 L10 17M3 10 L5 10M15 10 L17 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7 L10 10 L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  tasas: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6.5 13.5 L13.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="7" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="13" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  mercado: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 17 L2 9 L5 9 L5 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 17 L8 6 L11 6 L11 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 17 L14 10 L17 10 L17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 17 L19 17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M2 9 L5.5 5 L9 8 L13 4 L18 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1.5 1.5"/>
    </svg>
  ),
};

// ── Concept card data ────────────────────────────────────────
const CONCEPTS = [
  {
    key: "inflacion",
    tag: "Macroeconomía",
    title: "Inflación",
    def: "Proceso por el cual los precios suben con el tiempo, reduciendo el poder de compra del dinero. USD 100 de hoy no compran lo mismo en 10 años.",
    image: "/education/inflacion.jpg",
    imageAlt: "Precios subiendo — ilustración de inflación",
  },
  {
    key: "compuesto",
    tag: "Clave",
    title: "Interés compuesto",
    def: "Los rendimientos generan nuevos rendimientos. A medida que pasa el tiempo, el crecimiento se acelera. El efecto se vuelve más poderoso cuanto más temprano se empieza.",
    image: "/education/interes-compuesto.jpg",
    imageAlt: "Crecimiento exponencial — interés compuesto",
  },
  {
    key: "diversificacion",
    tag: "Estrategia",
    title: "Diversificación",
    def: "Distribuir el capital en distintos activos o mercados para reducir el impacto de una caída individual. No concentrar todo en una sola opción.",
    image: "/education/diversificacion.jpg",
    imageAlt: "Distintos activos — diversificación de portafolio",
  },
  {
    key: "riesgo",
    tag: "Concepto",
    title: "Riesgo vs retorno",
    def: "Mayor potencial de retorno suele ir acompañado de mayor variabilidad. Entender esta relación es fundamental para tomar decisiones financieras informadas.",
    image: "/education/riesgo-vs-retorno.jpg",
    imageAlt: "Balanza de riesgo y retorno en inversiones",
  },
  {
    key: "horizonte",
    tag: "Planificación",
    title: "Horizonte de inversión",
    def: "El período de tiempo durante el cual se mantiene una inversión. A mayor horizonte, mayor capacidad de tolerar la volatilidad del corto plazo.",
    image: "/education/horizonte.jpg",
    imageAlt: "Horizonte temporal de largo plazo en inversiones",
  },
  {
    key: "liquidez",
    tag: "Concepto",
    title: "Liquidez",
    def: "Facilidad con la que una inversión puede convertirse en dinero disponible. Un bien raíz tiene baja liquidez; una cuenta bancaria tiene alta liquidez.",
    image: "/education/liquidez.png",
    imageAlt: "Disponibilidad de dinero — concepto de liquidez",
  },
  {
    key: "fondos",
    tag: "Instrumento",
    title: "Fondos de inversión",
    def: "Vehículos que agrupan el capital de múltiples inversores para invertir en una cartera administrada de activos. Permiten acceder a diversificación con montos menores.",
    image: "/education/fondo.jpg",
    imageAlt: "Fondo de inversión colectivo",
  },
  {
    key: "etf",
    tag: "Instrumento",
    title: "ETFs",
    def: "Fondos cotizados en bolsa que suelen replicar índices o canastas de activos. Combinan la diversificación de un fondo con la facilidad de compraventa de una acción.",
    image: "/education/etf.jpg",
    imageAlt: "ETF — fondo cotizado en bolsa",
  },
  {
    key: "sp500",
    tag: "Mercado",
    title: "S&P 500",
    def: "Índice que agrupa las 500 empresas de mayor capitalización de EE.UU. Se usa globalmente como referencia del desempeño del mercado de renta variable.",
    image: "/education/sp500.jpg",
    imageAlt: "Índice S&P 500 — 500 empresas líderes de EE.UU.",
  },
  {
    key: "volatilidad",
    tag: "Riesgo",
    title: "Volatilidad",
    def: "Medida de cuánto fluctúa el valor de una inversión en el tiempo. Alta volatilidad en el corto plazo no implica mal resultado en el largo plazo.",
    image: "/education/volatilidad.jpg",
    imageAlt: "Fluctuaciones de mercado — volatilidad financiera",
  },
  {
    key: "portafolio",
    tag: "Estrategia",
    title: "Construcción de portafolio",
    def: "Proceso de combinar distintos activos según los objetivos, el horizonte y la tolerancia al riesgo de cada persona. No existe un portafolio universal.",
    image: null,
    imageAlt: "",
  },
  {
    key: "ahorro",
    tag: "Básico",
    title: "Ahorro vs inversión",
    def: "Ahorrar es guardar dinero. Invertir es hacer que ese dinero trabaje y genere rendimiento. Con inflación persistente, el dinero guardado pierde valor real con el tiempo.",
    image: "/education/ahorro-vs-inversion.jpg",
    imageAlt: "Diferencia entre ahorrar e invertir",
  },
  {
    key: "automatizacion",
    tag: "Hábito",
    title: "Automatización",
    def: "Configurar aportes periódicos automáticos elimina la necesidad de decisiones emocionales. La disciplina queda integrada en el sistema, no en la fuerza de voluntad.",
    image: "/education/automatizacion.jpg",
    imageAlt: "Ahorro automático y aportes periódicos",
  },
  {
    key: "largoplazo",
    tag: "Clave",
    title: "Largo plazo",
    def: "Horizonte de 10, 15, 20 años o más. La evidencia histórica muestra que a mayor plazo, menor la probabilidad de terminar con pérdida en mercados diversificados.",
    image: "/education/largo-plazo.jpg",
    imageAlt: "Inversión a largo plazo — horizonte temporal extendido",
  },
  {
    key: "tasas",
    tag: "Macroeconomía",
    title: "Tasas de interés",
    def: "Precio del dinero en el tiempo. Impactan en el costo de los préstamos, el rendimiento del ahorro y la valoración de activos financieros en general.",
    image: "/education/tasas-de-interes.png",
    imageAlt: "Tasas de interés y costo del dinero",
  },
  {
    key: "mercado",
    tag: "Contexto",
    title: "Mercado de capitales",
    def: "Sistema que conecta a quienes tienen capital para invertir con quienes necesitan financiamiento. Incluye acciones, bonos, fondos, ETFs y otros instrumentos.",
    image: "/education/mercado-de-capitales.jpg",
    imageAlt: "Mercado de capitales — bolsa y activos financieros",
  },
];

// ── Card component ───────────────────────────────────────────
function ConceptCard({ concept }: { concept: typeof CONCEPTS[0] }) {
  const Icon = icons[concept.key];
  return (
    <article className="bg-white border border-black/[.07] rounded-2xl overflow-hidden flex flex-col hover:shadow-sm transition-shadow duration-200">
      {/* Visual header — image or icon fallback */}
      <div className="relative w-full h-[112px] flex-shrink-0 overflow-hidden bg-white">
        {concept.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={concept.image}
            alt={concept.imageAlt}
            className="w-full h-full object-contain object-center"
            loading="lazy"
            style={{ imageRendering: "auto" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) parent.style.background = "#EDF8E8";
            }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-g3"
            style={{ background: "#EDF8E8" }}
            aria-hidden="true"
          >
            {Icon && <Icon />}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[14px] font-semibold text-t1 leading-tight">{concept.title}</h3>
          <span className="text-[10px] font-bold text-g3 bg-[#EDF8E8] border border-g1/20 rounded-full px-2.5 py-1 leading-none flex-shrink-0">
            {concept.tag}
          </span>
        </div>
        <p className="text-[12px] text-t2 leading-relaxed">{concept.def}</p>
      </div>
    </article>
  );
}

// ── Main section ─────────────────────────────────────────────
export default function ExpandiblesSection() {
  return (
    <>
      {/* ── Concept cards grid ── */}
      <section className="section-wrap-white" aria-label="Biblioteca de conceptos financieros">
        <div className="inner">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONCEPTS.map((c) => (
                <ConceptCard key={c.key} concept={c} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-[12px] text-t3 italic text-center mt-8 leading-relaxed max-w-xl mx-auto">
              El contenido es educativo y no constituye asesoramiento financiero personalizado.
              Toda inversión implica riesgo de pérdida de capital.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Deep dives (acordeones) ── */}
      <section id="profundizar" className="bg-[#F8F6F0] section-wrap" aria-label="Temas en profundidad">
        <div className="inner">
          <FadeIn>
            <p className="section-label">Profundizá</p>
            <h2 className="text-h2 font-bold mb-3">
              Más contexto,{" "}
              <span className="text-g3">cuando lo querés.</span>
            </h2>
            <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-10">
              Cada sección amplía un tema en detalle. Abrí lo que te interesa.
            </p>
          </FadeIn>

          {/* 6 Factores */}
          <ExpandBlock
            icon={<IconTarget />}
            iconVariant="g"
            title="Los 6 factores clave para invertir bien"
            subtitle="Rendimiento, riesgo, plazo, diversificación, disciplina y oportunidades"
          >
            <p className="text-[15px] text-t2 leading-relaxed mb-5">
              Antes de invertir, definir el objetivo es crucial. Debe ser realista, medible y alcanzable.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SIX_FACTORS.map(f => (
                <div key={f.name} className="bg-[#F8F6F0] border border-black/[.07] rounded-2xl p-4">
                  <p className="text-[14px] font-bold text-t1 mb-1.5">{f.name}</p>
                  <p className="text-[13px] text-t2 leading-snug mb-3">{f.desc}</p>
                  <div className="border-t border-black/[.07] pt-2.5">
                    <p className="text-[12px] text-g3 italic leading-snug">&ldquo;{f.quote}&rdquo;</p>
                    <p className="text-[11px] text-t3 font-bold mt-1">— {f.who}</p>
                  </div>
                </div>
              ))}
            </div>
          </ExpandBlock>

          {/* Disciplina */}
          <ExpandBlock
            icon={<IconTrending />}
            iconVariant="g"
            title="Disciplina, constancia y objetivos"
            subtitle="Las tres claves que separan a quienes logran sus metas de quienes no"
          >
            <p className="text-[15px] text-t2 leading-relaxed mb-5">
              La educación financiera importa. Pero sin disciplina y constancia, el mejor plan no funciona.
            </p>
            <StepItem n={1} title="Fijá un objetivo claro y concreto" desc="No es 'quiero ahorrar más'. Es 'quiero tener USD X en 20 años'. Un número concreto cambia la mentalidad." />
            <StepItem n={2} title="Automatizá el ahorro" desc="Un débito automático el día que cobrás resuelve el problema de raíz. Lo que no ves, no lo gastás. Sin fuerza de voluntad diaria." />
            <StepItem n={3} title="Sostené en las buenas y en las malas" desc="Cuando el mercado cae, el instinto dice 'pará'. Históricamente, quien sostuvo su estrategia en las crisis terminó mejor." />
            <div className="flex flex-wrap gap-2 mt-5">
              <Pill label="Empezar temprano vale más que aportar más" />
              <Pill label="Constancia mensual supera brillantez esporádica" />
              <Pill label="El largo plazo premia la paciencia" />
            </div>
            <QuoteBlock text={QUOTES.munger.text} author={QUOTES.munger.author} />
          </ExpandBlock>

          {/* Etapas de vida */}
          <ExpandBlock
            icon={<IconSave />}
            iconVariant="g"
            title="¿Cuánto ahorrar según tu etapa de vida?"
            subtitle="Distintos momentos, distintas estrategias"
          >
            <p className="text-[15px] text-t2 leading-relaxed mb-5">
              La regla general: entre el 10% y el 30% del ingreso, destinado antes de gastar. La edad orienta el porcentaje ideal.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
              {[
                { age: "20–30 años", pct: "10–15%", desc: "El tiempo trabaja por vos. El interés compuesto hace el trabajo pesado aunque el monto sea pequeño." },
                { age: "30–45 años", pct: "15–25%", desc: "La etapa de mayor acumulación. Subir el porcentaje tiene un impacto importante en el resultado final." },
                { age: "45–60 años", pct: "20–30%", desc: "Menos tiempo, más aporte. Momento de revisar el perfil hacia estrategias más conservadoras." },
              ].map(e => (
                <div key={e.age} className="bg-[#EDF8E8] border border-g1/20 rounded-2xl p-5">
                  <p className="text-[11px] font-bold text-g3 uppercase tracking-[0.1em] mb-3">{e.age}</p>
                  <p className="text-[clamp(20px,3vw,26px)] font-bold text-g3 tracking-tight leading-none mb-2">{e.pct}</p>
                  <p className="text-[13px] text-t2 leading-snug">{e.desc}</p>
                </div>
              ))}
            </div>
            <Alert variant="green">Sin importar tu edad: cada mes sin ahorrar tiene un costo real en capital futuro que no se recupera.</Alert>
          </ExpandBlock>

          {/* EE.UU. */}
          <ExpandBlock
            icon={<IconFlag />}
            iconVariant="n"
            title="¿Cómo lo hacen en Estados Unidos?"
            subtitle="El modelo de ahorro complementario que funciona hace décadas"
          >
            <p className="text-[15px] text-t2 leading-relaxed mb-5">
              En EE.UU. la jubilación pública cubre una parte. El resto lo construye cada persona con vehículos de ahorro privados. El resultado: USD 48,1 billones acumulados en activos de retiro.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { n: "70%", l: "Hogares con ahorro capitalizado (2024). Fuente: ICI." },
                { n: "$48,1T", l: "Activos totales de retiro en EE.UU. al 30/09/2025." },
                { n: "76%", l: "Confían en que sus cuentas los ayudarán a cumplir sus objetivos." },
              ].map(c => (
                <div key={c.n} className="card-lila text-center">
                  <p className="text-[clamp(18px,3vw,26px)] font-bold text-lila tracking-tight leading-none mb-2">{c.n}</p>
                  <p className="text-[12px] text-t2 leading-snug">{c.l}</p>
                </div>
              ))}
            </div>
            {[
              { title: "401(k) y 403(b):", desc: "Planes laborales con aporte automático del salario y beneficios fiscales. A veces el empleador también contribuye." },
              { title: "IRA:", desc: "Cuenta individual que cualquier persona puede abrir, con ventajas impositivas y límites de aporte anuales." },
              { title: "Ahorro automático:", desc: "El dinero se descuenta antes de llegar a la cuenta corriente. No requiere disciplina diaria — el sistema lo hace solo." },
            ].map(p => (
              <div key={p.title} className="flex gap-3 bg-[#F0ECFF] border border-lila/15 rounded-xl p-4 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lila flex-shrink-0 mt-2" />
                <p className="text-[14px] text-[#3D2D99]"><strong>{p.title}</strong> {p.desc}</p>
              </div>
            ))}
            <Alert variant="lila" className="mt-4">
              La clave del éxito no es el instrumento — es el hábito. Aporte automático, todos los meses, sin importar el mercado.
            </Alert>
          </ExpandBlock>

          {/* Plataforma */}
          <ExpandBlock
            icon={<IconLock />}
            iconVariant="v"
            title="Cómo funciona una cuenta de inversión internacional"
            subtitle="Regulación, seguridad y acceso digital explicados de forma simple"
          >
            <p className="text-[15px] text-t2 leading-relaxed mb-5">
              Las plataformas internacionales reguladas permiten invertir en mercados globales con cuentas individuales, acceso digital y custodia institucional.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { icon: <IconLock />, t: "Cuentas segregadas", d: "Los activos del cliente se mantienen separados del patrimonio de la institución. En caso de insolvencia, no pueden ser reclamados por acreedores." },
                { icon: <IconGlobe />, t: "Plataforma digital", d: "Acceso al portafolio en tiempo real, reportes de cartera y movimientos. Tecnología de administración de clase institucional." },
                { icon: <IconShield />, t: "Regulación", d: "Las plataformas reguladas en jurisdicciones reconocidas están sujetas a controles, auditorías y obligaciones de protección al cliente." },
                { icon: <IconTrending />, t: "Estrategias globales", d: "Acceso a índices y fondos internacionales, con perfil de inversión adaptado a cada objetivo y horizonte temporal." },
              ].map(p => (
                <div key={p.t} className="bg-[#F8F6F0] border border-black/[.07] rounded-2xl p-4">
                  <div className="text-g3 mb-2">{p.icon}</div>
                  <p className="text-[14px] font-semibold text-t1 mb-1">{p.t}</p>
                  <p className="text-[12px] text-t2 leading-snug">{p.d}</p>
                </div>
              ))}
            </div>
            <Alert variant="green">
              Una cuenta segregada significa que tus activos están a tu nombre y separados del balance de la institución — diferente a un depósito bancario tradicional.
            </Alert>
          </ExpandBlock>

          {/* FAQ */}
          <ExpandBlock
            icon={<IconQuestion />}
            iconVariant="w"
            title="Preguntas frecuentes"
            subtitle="Lo que más se consulta sobre inversión y ahorro a largo plazo"
          >
            <div>
              {FAQ_DATA.map(item => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </ExpandBlock>

          {/* Pequeños aportes */}
          <ExpandBlock
            icon={<IconTrending />}
            iconVariant="g"
            title="Pequeños aportes, gran impacto"
            subtitle="Cómo la constancia mensual se transforma en capital real"
          >
            <p className="text-[15px] text-t2 leading-relaxed mb-6">
              El efecto del interés compuesto con aportes sostenidos en el tiempo puede resultar
              en diferencias importantes. La constancia suele tener más impacto que el monto inicial.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { from: "USD 200/mes · 10 años · 8% anual", to: "≈ USD 36.500 acumulados" },
                { from: "USD 200/mes · 20 años · 8% anual", to: "≈ USD 118.000 acumulados" },
                { from: "USD 200/mes · 30 años · 8% anual", to: "≈ USD 297.500 acumulados" },
                { from: "USD 200/mes · 40 años · 8% anual", to: "≈ USD 698.400 acumulados" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between gap-4 bg-white border border-black/[.06] rounded-xl px-4 py-3">
                  <span className="text-[13px] text-t2">{row.from}</span>
                  <span className="text-[14px] font-bold text-g3 flex-shrink-0">{row.to}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#EDF8E8] border border-g1/20 rounded-2xl p-5">
              <p className="text-[13px] font-semibold text-g4 mb-2">La clave es la constancia, no el monto.</p>
              <p className="text-[13px] text-t2 leading-relaxed">
                Pequeños aportes mensuales sostenidos en el tiempo pueden generar diferencias
                importantes. Empezar antes, aunque sea con menos, suele superar en resultado a
                empezar después con más.
              </p>
            </div>
            <p className="text-[11px] text-t3 italic mt-3">
              Supuesto: 8% anual compuesto, capitalización mensual. Las simulaciones son ilustrativas.
              Los rendimientos pasados no garantizan resultados futuros.
            </p>
          </ExpandBlock>
        </div>
      </section>
    </>
  );
}
