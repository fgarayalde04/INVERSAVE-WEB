"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";

export function CTASection() {
  return (
    <section id="cta" className="py-28 px-6 text-center relative overflow-hidden" style={{ background: "#0C1A11" }}>
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(82,181,88,.1) 0%, transparent 70%)" }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(82,181,88,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(82,181,88,.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-lg mx-auto relative z-10">
        <FadeIn>
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-g2/50 mb-5">Primer paso</p>
          <h2 className="text-[clamp(30px,5vw,52px)] font-bold tracking-[-0.025em] text-white leading-[1.06] mb-4">
            La planificación{" "}
            <span className="text-g2">empieza hoy.</span>
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed mb-10">
            Sin compromiso, sin costo. Una conversación para entender tu situación y
            mostrarte exactamente qué opciones tenés.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-dark"
            onClick={() => window.open("mailto:fgarayaldearrillaga@roblecapital.net")}
          >
            Agendar reunión gratuita
          </motion.button>
          <p className="text-[12px] text-white/20 mt-5">
            Sin compromiso · Sin costo · Asesoría bajo licencia BCU · Dominion Capital Strategies · Guernsey FSC
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/[.07] px-6 py-9">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-between gap-6 mb-6 pb-6 border-b border-black/[.07]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-g3 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1.5 9.5 L4.5 5.5 L7 8 L10 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[15px] font-bold text-t1 tracking-[-0.02em]">INVERSAVE</span>
            </div>
            <p className="text-[12px] text-t3 leading-relaxed">Powered by Roble Capital Wealth Management · Regulado BCU Uruguay</p>
            <p className="text-[12px] text-t3 leading-relaxed">Plataforma: Dominion Capital Strategies Limited · Guernsey FSC</p>
          </div>
          <div className="text-right">
            <p className="text-[12px] text-t3">fgarayaldearrillaga@roblecapital.net</p>
          </div>
        </div>
        <p className="text-[11px] text-t3 leading-relaxed">
          La información tiene fines exclusivamente educativos y no constituye asesoramiento financiero ni
          recomendación de inversión. Toda inversión implica riesgos, incluyendo pérdida de capital. Los
          rendimientos pasados no garantizan resultados futuros. Las simulaciones son meramente ilustrativas.
          Dominion Capital Strategies Limited está regulada por la Guernsey Financial Services Commission.
          INVERSAVE actúa como asesor bajo la estructura de Roble Capital Wealth Management,
          entidad regulada por el Banco Central del Uruguay.
        </p>
      </div>
    </footer>
  );
}
