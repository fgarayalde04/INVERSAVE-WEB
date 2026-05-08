"use client";
import { motion } from "framer-motion";
import { FadeIn, Alert } from "@/components/ui";

const STEPS = [
  {
    n: 1,
    title: "Definís tu perfil",
    desc: "Una conversación inicial para entender tu edad, objetivos, horizonte temporal y tolerancia al riesgo. Sin formularios eternos.",
  },
  {
    n: 2,
    title: "Elegís tu estrategia",
    desc: "Seleccionás el perfil que mejor se ajusta a tu situación. Desde conservador hasta crecimiento agresivo, todo respaldado por ETFs globales.",
  },
  {
    n: 3,
    title: "Invertís automáticamente",
    desc: "Configurás un aporte mensual fijo. El sistema invierte de forma automática, aplicando DCA mes a mes sin que tengas que hacer nada.",
  },
  {
    n: 4,
    title: "Monitoreás tu crecimiento",
    desc: "Acceso 24/7 a tu portafolio. Ves el crecimiento en tiempo real. Tu asesor te acompaña ante cualquier pregunta o cambio de vida.",
  },
];

const PROFILES = [
  {
    name: "Conservador",
    target: "4–6%",
    risk: "Bajo",
    riskColor: "text-g3",
    horizon: "5+ años",
    stocks: 30,
    bonds: 70,
    desc: "Prioriza estabilidad. Orientado a renta fija global, bonos soberanos y activos defensivos.",
    borderColor: "#52B558",
    bg: "bg-[#EDF8E8]",
    featured: false,
  },
  {
    name: "Balanceado",
    target: "6–8%",
    risk: "Moderado",
    riskColor: "text-lila",
    horizon: "7+ años",
    stocks: 60,
    bonds: 40,
    desc: "Equilibrio entre crecimiento y protección. Combina renta variable global con renta fija.",
    borderColor: "#6B48E8",
    bg: "bg-white",
  },
  {
    name: "Crecimiento",
    target: "8–10%",
    risk: "Medio-alto",
    riskColor: "text-warn",
    horizon: "10+ años",
    stocks: 80,
    bonds: 20,
    desc: "Orientado al largo plazo. Mayor exposición a mercados globales de renta variable.",
    borderColor: "#B5451E",
    bg: "bg-[#FEF0EC]",
  },
  {
    name: "Agresivo",
    target: "10–12%",
    risk: "Alto",
    riskColor: "text-warn",
    horizon: "15+ años",
    stocks: 95,
    bonds: 5,
    desc: "Máximo potencial de crecimiento compuesto. S&P 500, MSCI World, mercados emergentes. Para quienes priorizan el largo plazo sobre la estabilidad anual.",
    borderColor: "#1A6638",
    bg: "bg-[#EDF8E8]",
    featured: true,
  },
];

const FUNDS = [
  { name: "S&P 500 Tracker", region: "EE.UU.", type: "Renta variable", pct: "12,5% retorno prom. anual (1990–2024)" },
  { name: "MSCI World Index", region: "Global", type: "Renta variable", pct: "10,2% retorno prom. anual (1990–2024)" },
  { name: "Global Bond Fund", region: "Global", type: "Renta fija", pct: "Estabilidad y protección de capital" },
  { name: "Emerging Markets", region: "Asia/LatAm", type: "Renta variable", pct: "Alto potencial, alta volatilidad" },
];

export default function PlanInversaveSection() {
  return (
    <section id="plan" className="section-wrap">
      <div className="inner">
        {/* Header */}
        <FadeIn>
          <p className="section-label">Plan de Ahorro INVERSAVE</p>
          <h2 className="text-h2 font-bold mb-5">
            Tu tercer pilar{" "}
            <span className="text-g3">de retiro.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-4">
            BPS y AFAP son el primer y segundo pilar. INVERSAVE es el tercero:
            ahorro e inversión global automatizada que construís a tu ritmo, fuera del sistema estatal.
          </p>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            Sin complicaciones. Sin necesitar saber de finanzas. Con un asesor local regulado por el BCU acompañándote.
          </p>
        </FadeIn>

        {/* Tres pilares */}
        <FadeIn>
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { n: "1", label: "BPS", desc: "Jubilación pública de reparto. Obligatorio.", color: "text-t3", bg: "bg-[#F0EFE8]", border: "border-black/[.07]" },
              { n: "2", label: "AFAP", desc: "Ahorro individual capitalizado. Obligatorio.", color: "text-t3", bg: "bg-[#F0EFE8]", border: "border-black/[.07]" },
              { n: "3", label: "INVERSAVE", desc: "Tu plan personal global. Voluntario y potente.", color: "text-g3", bg: "bg-[#EDF8E8]", border: "border-g1/25", highlight: true },
            ].map(p => (
              <div key={p.n} className={`${p.bg} border ${p.border} rounded-3xl p-5 text-center`}>
                <div className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-3 ${p.color}`}>Pilar {p.n}</div>
                <p className={`text-[16px] font-bold mb-2 ${p.highlight ? "text-g3" : "text-t1"}`}>{p.label}</p>
                <p className="text-[12px] text-t3 leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Cómo funciona */}
        <FadeIn>
          <p className="section-label mb-4">Cómo funciona</p>
          <h3 className="text-h3 font-bold mb-8">Cuatro pasos, sin complicaciones.</h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {STEPS.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.07}>
              <div className="bg-white border border-black/[.07] rounded-3xl p-7">
                <div className="w-9 h-9 rounded-full bg-g3 text-white flex items-center justify-center text-[14px] font-bold mb-4">
                  {s.n}
                </div>
                <p className="text-[16px] font-bold text-t1 mb-2">{s.title}</p>
                <p className="text-[14px] text-t2 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Perfiles de riesgo */}
        <FadeIn>
          <p className="section-label mb-1">Perfiles de inversión</p>
          <h3 className="text-h3 font-bold mb-3">
            Para horizontes largos,{" "}
            <span className="text-g3">el perfil agresivo lidera.</span>
          </h3>
          <p className="text-[17px] text-t2 leading-relaxed mb-5 max-w-xl">
            Tu asesor te ayuda a definir el perfil correcto según tu edad, horizonte y tolerancia al riesgo.
            Los perfiles conservador y moderado existen para objetivos de corto a mediano plazo,
            pero el modelo INVERSAVE está diseñado para maximizar el crecimiento compuesto a largo plazo.
          </p>
          <div className="bg-[#EDF8E8] border border-g1/25 rounded-2xl px-5 py-4 mb-8 max-w-2xl">
            <p className="text-[14px] text-g4 leading-relaxed">
              Para horizontes largos, una estrategia agresiva puede tener mayor sentido dentro de
              un modelo de aportes periódicos. La volatilidad anual no desaparece, pero el DCA
              permite construir posición gradualmente y reducir la dependencia de un único punto
              de entrada. El objetivo no es evitar toda caída, sino{" "}
              <strong>capturar crecimiento compuesto en el tiempo.</strong>
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {PROFILES.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07}>
              <div
                className={`${p.bg} border rounded-3xl p-6 flex flex-col h-full relative`}
                style={{ borderColor: p.borderColor + "33", borderTop: `3px solid ${p.borderColor}` }}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-g3 text-white text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-full">Más popular</span>
                  </div>
                )}
                <p className="text-[11px] font-bold text-t3 tracking-[0.1em] uppercase mb-3">{p.name}</p>
                <p className="text-[clamp(20px,3vw,26px)] font-bold text-t1 tracking-tight leading-none mb-1">{p.target}</p>
                <p className="text-[12px] text-t3 mb-4">retorno anual estimado</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className={`text-[11px] font-semibold ${p.riskColor} bg-white/60 border border-black/[.07] rounded-full px-2.5 py-1`}>
                    Riesgo {p.risk}
                  </span>
                  <span className="text-[11px] font-medium text-t3 bg-white/60 border border-black/[.07] rounded-full px-2.5 py-1">
                    {p.horizon}
                  </span>
                </div>
                {/* Allocation bar */}
                <div className="mb-4">
                  <div className="flex h-2 rounded-full overflow-hidden mb-1.5">
                    <div className="bg-g3" style={{ width: `${p.stocks}%` }} />
                    <div className="bg-t3/30" style={{ width: `${p.bonds}%` }} />
                  </div>
                  <div className="flex justify-between text-[10px] text-t3">
                    <span>Acciones {p.stocks}%</span>
                    <span>Renta fija {p.bonds}%</span>
                  </div>
                </div>
                <p className="text-[13px] text-t2 leading-snug mt-auto">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ETF / Fondos */}
        <FadeIn>
          <p className="section-label mb-1">Estrategias globales</p>
          <h3 className="text-h3 font-bold mb-3">Fondos que mueven el mundo.</h3>
          <p className="text-[17px] text-t2 leading-relaxed mb-7">
            Tu dinero se invierte en los mercados más grandes del planeta a través de ETFs y fondos diversificados.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {FUNDS.map((f, i) => (
            <FadeIn key={f.name} delay={i * 0.07}>
              <div className="bg-white border border-black/[.07] rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#EDF8E8] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 12 L5.5 7.5 L8.5 10 L12 5" stroke="#1A6638" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 5 L12 5 L12 7" stroke="#1A6638" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-t1 mb-0.5">{f.name}</p>
                  <div className="flex gap-2 mb-1 flex-wrap">
                    <span className="text-[11px] text-t3 bg-[#F5F2EA] rounded-full px-2.5 py-0.5">{f.region}</span>
                    <span className="text-[11px] text-t3 bg-[#F5F2EA] rounded-full px-2.5 py-0.5">{f.type}</span>
                  </div>
                  <p className="text-[13px] text-t2">{f.pct}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <Alert variant="green">
            La diversificación geográfica y sectorial protege tu patrimonio ante eventos que afectan a mercados o sectores específicos.
            Tu asesor ajusta la estrategia según el ciclo de vida y cambios en tu situación personal.
          </Alert>
        </FadeIn>

        {/* Feature pills */}
        <FadeIn>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Aporte mínimo flexible",
              "Inversión mensual automática",
              "Cuenta segregada · BNY Mellon",
              "Asesor local regulado BCU",
              "Liquidez disponible",
              "Sin permanencia mínima obligatoria",
            ].map(f => (
              <motion.div
                key={f}
                whileHover={{ y: -1 }}
                className="flex items-center gap-2 bg-white border border-black/[.07] rounded-xl px-4 py-2.5 text-[13px] font-medium text-t1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0" />
                {f}
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
