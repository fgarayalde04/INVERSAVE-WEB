"use client";
import { motion } from "framer-motion";
import { useLeadModal } from "@/context/ModalContext";

export default function DominionPageHero() {
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
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 55% at 50% 80%,rgba(82,181,88,.12) 0%,transparent 65%)"
      }}/>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(82,181,88,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(82,181,88,.04) 1px,transparent 1px)",
        backgroundSize: "48px 48px"
      }}/>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-[12px] font-medium text-white/50 mb-8"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-g1 animate-pulse"/>
          Dominion Capital Strategies Limited · Regulado Guernsey FSC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(36px,6vw,72px)] font-bold leading-[0.97] tracking-[-0.03em] mb-6"
        >
          Tu retiro, respaldado por{" "}
          <br className="hidden sm:block"/>
          <span className="text-g1" style={{ textShadow: "0 0 40px rgba(82,181,88,.4)" }}>
            una de las plataformas más seguras del mundo.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55 }}
          className="text-[clamp(15px,2vw,18px)] text-white/50 leading-relaxed max-w-[560px] mx-auto mb-10"
        >
          Cuenta segregada a tu nombre. Custodia BNY Mellon.
          Inversión global automática. Asesor local regulado por el BCU.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-3 flex-wrap mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openModal("dominion_hero")}
            className="btn-hero"
          >
            Hablar con un asesor
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>

        {/* Video — S&P 500 Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto w-full mt-2 mb-10"
        >
          <div className="rounded-3xl overflow-hidden border border-white/10" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
              poster="/account-preview.png"
            >
              <source src="/dcs-sp500-tracker.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-center text-[11px] text-white/25 mt-3">
            S&P 500 Tracker — Pacific Asset Management · Fondo disponible en Dominion
          </p>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.52, duration: 0.5 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {["Regulado BCU", "Cuenta segregada · BNY Mellon", "Guernsey FSC", "Acceso 24/7"].map(b => (
            <div key={b} className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0"/>
              {b}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
