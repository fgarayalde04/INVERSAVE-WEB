"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";

export default function DominionHighlight() {
  return (
    <section className="py-20 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-5xl mx-auto">
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

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-10">
              {/* Left */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white/40 tracking-[0.08em] uppercase mb-6"
                  style={{ background: "rgba(255,255,255,0.05)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-g1 animate-pulse"/>
                  Dominion Capital Strategies · Guernsey FSC
                </div>
                <h2 className="text-[clamp(26px,4vw,42px)] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4">
                  Tu dinero, custodiado{" "}
                  <br className="hidden sm:block"/>
                  <span className="text-g1">globalmente.</span>
                </h2>
                <p className="text-[16px] text-white/50 leading-relaxed mb-8 max-w-md">
                  Cuenta segregada a tu nombre. Custodia BNY Mellon.
                  Inversión en los principales índices globales. Regulado en Guernsey.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Cuenta segregada", "BNY Mellon custodio", "Regulado Guernsey FSC", "Asesor local BCU"].map(b => (
                    <span key={b} className="flex items-center gap-1.5 text-[12px] font-medium text-white/50 border border-white/[.08] rounded-full px-3.5 py-1.5"
                      style={{ background: "rgba(255,255,255,0.04)" }}>
                      <span className="w-1 h-1 rounded-full bg-g1 flex-shrink-0"/>
                      {b}
                    </span>
                  ))}
                </div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/dominion"
                    className="inline-flex items-center gap-2.5 bg-g3 text-white font-semibold text-[14px] rounded-full px-7 py-3.5 hover:bg-[#1A6638] transition-colors"
                    style={{ boxShadow: "0 2px 20px rgba(26,102,56,.4)" }}
                  >
                    Explorar Dominion
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
              </div>

              {/* Right — 3 key stats */}
              <div className="flex flex-col gap-3 md:w-[260px]">
                {[
                  { n: "USD 0", l: "Gestión de activos oculta" },
                  { n: "24/7", l: "Acceso a tu portafolio" },
                  { n: "Global", l: "S&P 500 · MSCI World · Bonos" },
                ].map(s => (
                  <div key={s.l} className="border border-white/[.08] rounded-2xl px-5 py-4"
                    style={{ background: "rgba(255,255,255,0.04)" }}>
                    <p className="text-[20px] font-bold text-white tracking-tight mb-0.5">{s.n}</p>
                    <p className="text-[12px] text-white/40">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
