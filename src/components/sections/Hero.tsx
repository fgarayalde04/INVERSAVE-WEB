"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Entendés el sistema",
    desc: "Qué pasa con la jubilación, las AFAPs y el ahorro complementario.",
  },
  {
    n: "02",
    title: "Simulás tu futuro",
    desc: "Probás escenarios según edad, aporte mensual y horizonte.",
  },
  {
    n: "03",
    title: "Conocés el plan",
    desc: "Una forma de aportar mensualmente e invertir con visión de largo plazo.",
  },
];

const BADGES = ["Aportes mensuales", "Largo plazo", "Flexibilidad"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(160deg, #0C1A11 0%, #0F2118 40%, #0A160E 100%)",
        minHeight: "min(90svh, 700px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 15% 60%, rgba(82,181,88,.10) 0%, transparent 65%), radial-gradient(ellipse 40% 45% at 85% 15%, rgba(82,181,88,.06) 0%, transparent 55%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(82,181,88,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(82,181,88,.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-18">
        <div className="grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-center">

          {/* ── Columna izquierda ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[clamp(34px,5vw,62px)] font-bold leading-[1.06] tracking-[-0.03em] mb-5">
              Una forma simple de planificar{" "}
              <span
                className="text-g1"
                style={{ textShadow: "0 0 40px rgba(82,181,88,.4)" }}
              >
                tu jubilación.
              </span>
            </h1>

            <p className="text-[clamp(15px,1.7vw,18px)] text-white/55 leading-relaxed mb-3 max-w-[500px]">
              Una plataforma para entender el sistema previsional, simular
              distintos escenarios y conocer un plan de ahorro e inversión
              mensual de largo plazo.
            </p>

            <p className="text-[13px] text-white/30 leading-relaxed max-w-[440px] mb-9">
              Primero entendés el contexto. Después ves tus números. Y si tiene
              sentido para vos, podés conocer cómo funciona el plan.
            </p>

            <div className="flex gap-3 flex-wrap mb-5">
              <Link
                href="/dominion"
                className="inline-flex items-center gap-2 font-bold text-[15px] rounded-full px-7 py-3.5 text-white transition-colors"
                style={{
                  background: "#1A6638",
                  boxShadow: "0 2px 24px rgba(26,102,56,.45)",
                }}
              >
                Conocé el plan
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="/simulador"
                className="inline-flex items-center gap-2 font-bold text-[15px] rounded-full px-7 py-3.5 text-white/75 border border-white/20 hover:border-white/40 transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                Simulá tu futuro
              </Link>
            </div>

            <p className="text-[11px] text-white/22 leading-relaxed">
              La simulación es estimativa y no garantiza resultados futuros.
            </p>
          </motion.div>

          {/* ── Columna derecha — card visual ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {/* Card principal */}
            <div
              className="rounded-2xl border border-white/[.09] p-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
              }}
            >
              <p className="text-[10px] font-bold text-g1/55 tracking-[0.12em] uppercase mb-5">
                Cómo te ayuda la plataforma
              </p>

              <div className="flex flex-col gap-5">
                {STEPS.map((s) => (
                  <div key={s.n} className="flex gap-3.5 items-start">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(82,181,88,0.14)",
                        border: "1px solid rgba(82,181,88,0.28)",
                      }}
                    >
                      <span className="text-[10px] font-bold text-g1">{s.n}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white mb-1">{s.title}</p>
                      <p className="text-[12px] text-white/42 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="text-[11px] font-semibold text-white/45 border border-white/[.10] rounded-full px-4 py-1.5"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
