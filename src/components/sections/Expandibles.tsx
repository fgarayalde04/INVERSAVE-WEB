"use client";
import { FadeIn, ExpandBlock, FAQItem, QuoteBlock, StepItem, Pill, TrustBadge, Alert } from "@/components/ui";
import { SIX_FACTORS, FAQ_DATA, QUOTES } from "@/lib/utils";

// ── Inline SVG icons ────────────────────────────────────────
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

export default function ExpandiblesSection() {
  return (
    <section id="faq" className="bg-white section-wrap">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Profundizá</p>
          <h2 className="text-h2 font-bold mb-5">
            Más información,{" "}
            <span className="text-g3">cuando la querés.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-10">
            Hacé click en lo que te interesa. Contenido profundo bajo demanda.
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
          subtitle="Las tres claves que separan a quienes logran su retiro de quienes no"
        >
          <p className="text-[15px] text-t2 leading-relaxed mb-5">
            La educación financiera importa. Pero sin disciplina y constancia, el mejor plan no funciona.
          </p>
          <StepItem n={1} title="Fijá un objetivo claro y concreto" desc="No es 'quiero ahorrar más'. Es 'quiero tener USD X en 20 años para retirarme con USD Y por mes'. Un número concreto cambia la mentalidad." />
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
            La regla: entre el 10% y el 30% de tu ingreso, destinado antes de gastar. La edad define el porcentaje ideal.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-5">
            {[
              { age: "20–30 años", pct: "10–15%", desc: "El tiempo trabaja por vos. El interés compuesto hace el trabajo pesado aunque el monto sea pequeño." },
              { age: "30–45 años", pct: "15–25%", desc: "La etapa de mayor acumulación. Subir el porcentaje tiene un impacto enorme en el resultado final." },
              { age: "45–60 años", pct: "20–30%", desc: "Menos tiempo, más aporte. Momento de revisar perfil hacia estrategias más conservadoras." },
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
            En EE.UU. la jubilación pública cubre una parte. El resto lo construye cada persona. Resultado: USD 48,1 billones acumulados en activos de retiro.
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
          title="¿Cómo funciona la plataforma de inversión?"
          subtitle="Regulación, seguridad y acceso digital explicados simple"
        >
          <p className="text-[15px] text-t2 leading-relaxed mb-5">
            Las soluciones son provistas por Dominion Capital Strategies, plataforma internacional regulada con cuentas segregadas, acceso digital 24/7 y custodia global.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { icon: <IconLock />, t: "Cuentas segregadas", d: "Tus activos separados por ley. Custodio: BNY Mellon — USD 55,8 billones. Guernsey FSC." },
              { icon: <IconGlobe />, t: "Plataforma digital 24/7", d: "Acceso completo al portafolio. Tecnología FNZ. Auditoría PwC. Asesor: Pacific Asset Management (FCA)." },
              { icon: <IconShield />, t: "Asesoría local · BCU", d: "Bajo licencia de Roble Capital Wealth Management, regulado por el BCU. Oficinas presenciales." },
              { icon: <IconTrending />, t: "Estrategias globales", d: "S&P 500, mercados globales, renta fija, tecnología y más. Perfil adaptado a cada persona." },
            ].map(p => (
              <div key={p.t} className="bg-[#F8F6F0] border border-black/[.07] rounded-2xl p-4">
                <div className="text-g3 mb-2">{p.icon}</div>
                <p className="text-[14px] font-semibold text-t1 mb-1">{p.t}</p>
                <p className="text-[12px] text-t2 leading-snug">{p.d}</p>
              </div>
            ))}
          </div>
          <Alert variant="green">
            Si la empresa quiebra, tus activos <strong>no pueden ser reclamados</strong> por sus acreedores. Son tuyos como beneficiario del fideicomiso.
          </Alert>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Dominion Capital Strategies · Guernsey FSC", "BNY Mellon · Custodio global", "Pacific Asset Management · FCA", "PwC · Auditoría", "FNZ · Tecnología", "Roble Capital · BCU Uruguay"].map(b => (
              <TrustBadge key={b} label={b} />
            ))}
          </div>
        </ExpandBlock>

        {/* FAQ */}
        <ExpandBlock
          icon={<IconQuestion />}
          iconVariant="w"
          title="Preguntas frecuentes"
          subtitle="Lo que más se pregunta antes de empezar"
        >
          <div>
            {FAQ_DATA.map(item => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </ExpandBlock>
      </div>
    </section>
  );
}
