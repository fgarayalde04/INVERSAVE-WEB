"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";

const MAILTO = "mailto:fgarayaldearrillaga@roblecapital.net?subject=Quiero%20comenzar%20mi%20plan%20de%20ahorro";

const STEPS = [
  {
    n: "01",
    title: "Aportes automáticos",
    desc: "Un monto fijo se invierte cada mes, de forma automática. Sin esfuerzo, sin recordatorios, sin decisiones emocionales.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11 C4 11 6 6 11 6 C16 6 18 11 18 11" stroke="#52B558" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M18 11 C18 11 16 16 11 16 C6 16 4 11 4 11" stroke="#8FD99A" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2"/>
        <circle cx="11" cy="11" r="2.5" fill="#52B558"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Interés compuesto",
    desc: "Cada rendimiento se reinvierte y genera más rendimiento. Al principio parece lento — con los años, se vuelve exponencial.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17 C5 15 7 13 9 11 C11 9 13 10 15 8 C17 6 18 5 19 4" stroke="#52B558" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 4 L19 4 L19 8" stroke="#52B558" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Tiempo",
    desc: "El activo más valioso en finanzas no tiene precio. A más horizonte, más potente el efecto compuesto. No se puede comprar después.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#52B558" strokeWidth="1.8"/>
        <path d="M11 7 L11 11 L14 13.5" stroke="#52B558" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: "04",
    title: "Crecimiento exponencial",
    desc: "La curva de patrimonio no sube en línea recta — se curva hacia arriba. Los últimos años de la inversión generan más que los primeros.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 18 Q7 16 9 13 Q12 9 15 7 Q17 5 19 4" stroke="#52B558" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M3 18 Q7 16 9 13 Q12 9 15 7 Q17 5 19 4 L19 18 Z" fill="rgba(82,181,88,.12)"/>
      </svg>
    ),
  },
  {
    n: "05",
    title: "Patrimonio acumulado",
    desc: "Con constancia y tiempo, la suma de pequeñas decisiones mensuales se transforma en libertad financiera real al momento de retirarte.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3 L13.5 8 L19 8.8 L15 12.7 L16 18 L11 15.3 L6 18 L7 12.7 L3 8.8 L8.5 8 Z" stroke="#52B558" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(82,181,88,.12)"/>
      </svg>
    ),
  },
];

export default function PorQueFunciona() {
  return (
    <section className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Cómo funciona de verdad</p>
          <h2 className="text-h2 font-bold mb-5">
            No se trata de hacer trading.{" "}
            <br className="hidden sm:block" />
            <span className="text-g3">Se trata de construir con disciplina.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            Invertir no es adivinar el mercado. Es construir un hábito simple que trabaja
            solo, mes a mes, durante años. El mecanismo es claro.
          </p>
        </FadeIn>

        {/* 5-step visual */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden sm:block absolute top-[28px] left-[28px] right-[28px] h-px bg-gradient-to-r from-transparent via-g1/30 to-transparent pointer-events-none" />

          <div className="grid sm:grid-cols-5 gap-5 mb-14">
            {STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.1}>
                <div className="flex flex-col items-start sm:items-center sm:text-center gap-3">
                  {/* Icon circle */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-[#EDF8E8] border border-g1/20 flex items-center justify-center flex-shrink-0">
                      {s.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-g3 text-white text-[9px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-t1 mb-1.5">{s.title}</p>
                    <p className="text-[12px] text-t2 leading-snug">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Dark quote block */}
        <FadeIn>
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%,rgba(82,181,88,.1) 0%,transparent 70%)" }}
            />
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <p className="text-[clamp(16px,2.5vw,22px)] font-bold text-white leading-[1.3] mb-6">
                &ldquo;La disciplina pequeña de hoy puede convertirse en libertad mañana.
                Automatizá tu ahorro. Dejá que el tiempo haga su parte.&rdquo;
              </p>

              {/* Simple 3-point differentiator */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { no: "Trading diario", yes: "Ahorro automático" },
                  { no: "Especulación", yes: "Inversión disciplinada" },
                  { no: "Riqueza rápida", yes: "Patrimonio a largo plazo" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    className="bg-white/[.05] border border-white/[.08] rounded-2xl p-4 text-center"
                  >
                    <p className="text-[11px] text-white/35 line-through mb-1.5">{item.no}</p>
                    <p className="text-[13px] font-semibold text-g2">{item.yes}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open(MAILTO)}
                className="btn-dark"
              >
                Construir tranquilidad financiera
              </motion.button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
