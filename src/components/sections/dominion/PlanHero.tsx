"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLeadModal } from "@/context/ModalContext";

export default function PlanHero() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(160deg,#0C1A11 0%,#0F2118 50%,#0A160E 100%)",
        minHeight: "min(85svh,760px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 80%,rgba(82,181,88,.12) 0%,transparent 65%)" }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(82,181,88,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(82,181,88,.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-[12px] font-medium text-white/50 mb-8"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-g1 animate-pulse" />
          Ahorro mensual · Inversión global · Regulado BCU
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(34px,6vw,68px)] font-bold leading-[0.97] tracking-[-0.03em] mb-6"
        >
          Un plan de ahorro simple{" "}
          <br className="hidden sm:block" />
          para construir{" "}
          <span className="text-g1" style={{ textShadow: "0 0 40px rgba(82,181,88,.4)" }}>
            tu futuro.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55 }}
          className="text-[clamp(15px,2vw,18px)] text-white/50 leading-relaxed max-w-[520px] mx-auto mb-10"
        >
          Aportás mensualmente. Tu dinero se invierte en mercados globales de forma automática.
          Construís capital a largo plazo. Sin necesitar saber de finanzas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-3 flex-wrap mb-12"
        >
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link href="/simulador" className="btn-hero inline-flex items-center gap-2">
              Simulá tu futuro
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
          <button onClick={() => openModal("plan_hero")} className="btn-hero-outline">
            Hablar con un asesor
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-3 flex-wrap mb-16"
        >
          {[
            "Regulado BCU",
            "Cuenta segregada · BNY Mellon",
            "Guernsey FSC",
            "Desde USD 150/mes",
          ].map((b) => (
            <div key={b} className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0" />
              {b}
            </div>
          ))}
        </motion.div>

        {/* Video — secondary support, with controls, no autoplay */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/20 mb-3">
            S&P 500 Tracker · Pacific Asset Management · Fondo disponible en el plan
          </p>
          <div
            className="rounded-2xl overflow-hidden border border-white/[.08]"
            style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }}
          >
            <video
              controls
              playsInline
              className="w-full h-auto block"
              poster="/account-preview.png"
            >
              <source src="/dcs-sp500-tracker.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-[10px] text-white/15 mt-2 italic">
            Los rendimientos mostrados son históricos y no garantizan resultados futuros.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
