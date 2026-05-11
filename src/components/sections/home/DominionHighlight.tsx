"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";

const ACCOUNT_STEPS = [
  { step: "01", title: "Abrís tu cuenta", desc: "A tu nombre, custodiada en BNY Mellon." },
  { step: "02", title: "Configurás el aporte", desc: "Desde USD 150/mes. Automatizable." },
  { step: "03", title: "Invertís globalmente", desc: "S&P 500, MSCI World, bonos internacionales." },
  { step: "04", title: "Seguís el crecimiento", desc: "Panel 24/7 con tu portafolio en tiempo real." },
];

export default function DominionHighlight() {
  return (
    <section className="py-20 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div
            className="relative rounded-[32px] overflow-hidden p-10 md:p-14"
            style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 60%,#0A1F12 100%)" }}
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse 55% 60% at 30% 50%,rgba(82,181,88,.12) 0%,transparent 70%)"
            }}/>
            {/* Grid */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "linear-gradient(rgba(82,181,88,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(82,181,88,.03) 1px,transparent 1px)",
              backgroundSize: "40px 40px"
            }}/>

            <div className="relative z-10 flex flex-col gap-10">

              {/* Top — título + CTA */}
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white/40 tracking-[0.08em] uppercase mb-5"
                    style={{ background: "rgba(255,255,255,0.05)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-g1 animate-pulse"/>
                    Dominion Capital Strategies · Guernsey FSC
                  </div>
                  <h2 className="text-[clamp(24px,4vw,40px)] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4">
                    Así funciona{" "}
                    <span className="text-g1">tu cuenta.</span>
                  </h2>
                  <p className="text-[16px] text-white/50 leading-relaxed max-w-md">
                    Una cuenta de inversión a tu nombre, custodiada globalmente
                    y gestionada con un asesor local regulado por el BCU.
                  </p>
                </div>

                {/* Stats verticales */}
                <div className="flex flex-col gap-3 md:w-[220px] flex-shrink-0">
                  {[
                    { n: "USD 150/mes", l: "Aporte mínimo mensual" },
                    { n: "BNY Mellon", l: "Custodio de activos" },
                    { n: "BCU", l: "Asesor regulado localmente" },
                  ].map(s => (
                    <div key={s.l} className="border border-white/[.08] rounded-2xl px-5 py-4"
                      style={{ background: "rgba(255,255,255,0.04)" }}>
                      <p className="text-[18px] font-bold text-white tracking-tight mb-0.5">{s.n}</p>
                      <p className="text-[11px] text-white/40">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps — cómo funciona */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {ACCOUNT_STEPS.map((s) => (
                  <div
                    key={s.step}
                    className="rounded-2xl px-5 py-4 border border-white/[.07]"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <p className="text-[11px] font-bold text-g1/60 mb-2 tracking-wider">{s.step}</p>
                    <p className="text-[13px] font-semibold text-white mb-1">{s.title}</p>
                    <p className="text-[12px] text-white/40 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="inline-block">
                  <Link
                    href="/el-plan"
                    className="inline-flex items-center gap-2.5 bg-g3 text-white font-semibold text-[14px] rounded-full px-7 py-3.5 hover:bg-[#1A6638] transition-colors"
                    style={{ boxShadow: "0 2px 20px rgba(26,102,56,.4)" }}
                  >
                    Ver todos los detalles del plan
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
