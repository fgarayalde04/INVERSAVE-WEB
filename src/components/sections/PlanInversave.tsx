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
            <span className="text-g3">una estrategia agresiva puede tener mayor sentido.</span>
          </h3>
          <p className="text-[17px] text-t2 leading-relaxed mb-5 max-w-xl">
            El modelo INVERSAVE está diseñado para maximizar el crecimiento compuesto a largo plazo.
            Los perfiles conservador y balanceado existen para quienes tienen objetivos de corto a mediano plazo
            o menor tolerancia a la volatilidad — pero no son el foco de este modelo.
          </p>
        </FadeIn>

        {/* Hero card — Perfil Agresivo */}
        <FadeIn>
          <div className="rounded-3xl p-8 relative overflow-hidden mb-6" style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 65% at 40% 50%, rgba(82,181,88,.10) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="bg-g3 text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full">Perfil recomendado · Largo plazo</span>
                <span className="bg-white/10 text-white/60 text-[10px] font-semibold px-3 py-1.5 rounded-full border border-white/10">15+ años</span>
                <span className="bg-white/10 text-white/60 text-[10px] font-semibold px-3 py-1.5 rounded-full border border-white/10">Riesgo Alto</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-g2/50 mb-2">Agresivo</p>
                  <p className="text-[clamp(32px,5vw,48px)] font-bold text-white tracking-tight leading-none mb-2">10–12%</p>
                  <p className="text-[14px] text-white/50 mb-6">retorno anual estimado</p>
                  <div className="mb-5">
                    <div className="flex h-2.5 rounded-full overflow-hidden mb-2">
                      <div className="bg-g2" style={{ width: "95%" }} />
                      <div className="bg-white/15" style={{ width: "5%" }} />
                    </div>
                    <div className="flex justify-between text-[11px] text-white/40">
                      <span>Acciones 95%</span>
                      <span>Renta fija 5%</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-white/65 leading-relaxed">
                    S&P 500, MSCI World, mercados emergentes. Máximo potencial de crecimiento compuesto.
                    Para quienes priorizan el largo plazo sobre la estabilidad anual.
                  </p>
                </div>
                <div className="bg-white/[.05] border border-white/[.08] rounded-2xl p-6">
                  <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-g2/60 mb-4">Por qué el perfil agresivo en horizontes largos</p>
                  <p className="text-[14px] text-white/70 leading-relaxed mb-4">
                    Para horizontes largos, una estrategia agresiva puede tener mayor sentido dentro de
                    un modelo de aportes periódicos. La volatilidad anual no desaparece, pero el DCA
                    permite construir posición gradualmente y reducir la dependencia de un único punto de entrada.
                  </p>
                  <p className="text-[14px] text-white/70 leading-relaxed">
                    El objetivo no es evitar toda caída, sino{" "}
                    <strong className="text-g2">capturar crecimiento compuesto en el tiempo.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Perfiles alternativos */}
        <FadeIn>
          <p className="text-[12px] font-semibold text-t3 tracking-[0.08em] uppercase mb-4">
            Perfiles alternativos — para otros objetivos y horizontes
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {PROFILES.filter(p => !p.featured).map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07}>
              <div
                className={`${p.bg} border rounded-3xl p-6 flex flex-col h-full`}
                style={{ borderColor: p.borderColor + "33", borderTop: `2px solid ${p.borderColor}` }}
              >
                <p className="text-[11px] font-bold text-t3 tracking-[0.1em] uppercase mb-3">{p.name}</p>
                <p className="text-[clamp(18px,2.5vw,24px)] font-bold text-t1 tracking-tight leading-none mb-1">{p.target}</p>
                <p className="text-[12px] text-t3 mb-4">retorno anual estimado</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className={`text-[11px] font-semibold ${p.riskColor} bg-white/60 border border-black/[.07] rounded-full px-2.5 py-1`}>
                    Riesgo {p.risk}
                  </span>
                  <span className="text-[11px] font-medium text-t3 bg-white/60 border border-black/[.07] rounded-full px-2.5 py-1">
                    {p.horizon}
                  </span>
                </div>
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

        {/* Account preview */}
        <FadeIn>
          <div className="mt-14 mb-4">
            <p className="section-label mb-1">Visualizá tu inversión</p>
            <h3 className="text-h3 font-bold mb-3">
              Seguimiento completo{" "}
              <span className="text-g3">de tu portafolio.</span>
            </h3>
            <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-8">
              Una cuenta con visibilidad completa de tu portafolio, rendimiento
              histórico y asignación de activos — accesible 24/7.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto mb-4">
            <div
              className="rounded-3xl overflow-hidden border border-black/[.08]"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/account-preview.png"
                alt="Ejemplo de cuenta de inversión Dominion"
                className="w-full h-auto block"
                onError={e => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div style="background:#0C1A11;padding:80px 40px;text-align:center;min-height:360px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <path d="M6 36 L16 22 L24 30 L33 18 L42 8" stroke="#52B558" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p style="color:rgba(255,255,255,0.5);font-size:14px;font-family:Manrope,sans-serif;max-width:340px;line-height:1.6;">
                          Coloca la imagen de la cuenta en <code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;">/public/account-preview.png</code>
                        </p>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>
          <p className="text-center text-[13px] text-t3 mb-1">Ejemplo visual de una cuenta de inversión.</p>
          <p className="text-center text-[11px] text-t3/70 italic">
            Imagen ilustrativa. Los valores mostrados pueden variar y no representan una garantía de rendimiento.
          </p>
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
