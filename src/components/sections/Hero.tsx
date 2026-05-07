"use client";
import { motion } from "framer-motion";

const TRUST_BADGES = [
  "Regulado BCU",
  "Cuenta segregada",
  "Inversión global",
  "Largo plazo",
];

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full bg-g1"
      style={{ animation: "float-up 6s ease-in-out infinite", ...style }}
    />
  );
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(160deg, #0C1A11 0%, #0F2118 40%, #0A160E 100%)",
        minHeight: "min(100svh, 860px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 85%, rgba(82,181,88,.13) 0%, transparent 65%), radial-gradient(ellipse 45% 35% at 75% 20%, rgba(82,181,88,.07) 0%, transparent 55%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(82,181,88,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(82,181,88,.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating particles */}
      {[
        { width: 3, height: 3, left: "15%", bottom: "30%", opacity: 0.4, animationDelay: "0s", animationDuration: "7s" },
        { width: 2, height: 2, left: "28%", bottom: "20%", opacity: 0.3, animationDelay: "1.5s", animationDuration: "9s" },
        { width: 4, height: 4, left: "45%", bottom: "15%", opacity: 0.25, animationDelay: "3s", animationDuration: "8s" },
        { width: 2, height: 2, left: "62%", bottom: "25%", opacity: 0.35, animationDelay: "0.8s", animationDuration: "6.5s" },
        { width: 3, height: 3, left: "78%", bottom: "18%", opacity: 0.3, animationDelay: "2.2s", animationDuration: "7.5s" },
        { width: 2, height: 2, left: "88%", bottom: "35%", opacity: 0.25, animationDelay: "4s", animationDuration: "8.5s" },
      ].map((p, i) => (
        <Particle key={i} style={p as React.CSSProperties} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-0 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-[12px] font-medium text-white/60 mb-8"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-g1 animate-pulse" />
          Uruguay · Educación financiera · Planificación patrimonial
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(44px,8vw,92px)] font-bold leading-[0.96] tracking-[-0.03em] mb-6 mx-auto"
          style={{ maxWidth: 820 }}
        >
          Tu retiro puede durar{" "}
          <span
            className="text-g1"
            style={{ textShadow: "0 0 40px rgba(82,181,88,.4)" }}
          >
            30 años.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55 }}
          className="text-[clamp(16px,2.2vw,20px)] text-white/55 leading-relaxed max-w-[520px] mx-auto mb-10"
        >
          Los sistemas previsionales están bajo presión. La inflación erosiona el ahorro.
          El tiempo corre más rápido de lo que parece.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.5 }}
          className="flex justify-center gap-3 flex-wrap mb-10"
        >
          <button onClick={() => scrollTo("problema")} className="btn-hero">
            Ver el problema
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => scrollTo("sim")} className="btn-hero-outline">
            Simulá tu retiro
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.56, duration: 0.5 }}
          className="flex justify-center gap-2 flex-wrap mb-12"
        >
          {TRUST_BADGES.map((b) => (
            <div key={b} className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0" />
              {b}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Abstract chart visual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full"
        style={{ marginTop: "auto" }}
      >
        <svg
          width="100%"
          viewBox="0 0 1200 320"
          preserveAspectRatio="xMidYMax meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#52B558" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#52B558" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#52B558" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#52B558" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8FD99A" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Horizontal grid lines */}
          {[80, 130, 180, 230, 280].map((y) => (
            <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="rgba(82,181,88,.07)" strokeWidth="1" />
          ))}

          {/* Fill area */}
          <path
            d="M0 295 C80 290 120 270 180 250 C240 230 280 240 340 220 C400 200 430 210 490 185 C550 160 580 170 640 145 C700 120 730 140 790 110 C850 80 880 100 940 72 C1000 44 1040 60 1100 38 C1140 22 1170 28 1200 18 L1200 320 L0 320 Z"
            fill="url(#chartFill)"
          />

          {/* Main chart line */}
          <path
            d="M0 295 C80 290 120 270 180 250 C240 230 280 240 340 220 C400 200 430 210 490 185 C550 160 580 170 640 145 C700 120 730 140 790 110 C850 80 880 100 940 72 C1000 44 1040 60 1100 38 C1140 22 1170 28 1200 18"
            fill="none"
            stroke="url(#lineFade)"
            strokeWidth="2.5"
            filter="url(#glow)"
          />

          {/* Year labels */}
          {[
            { x: 60, y: 308, label: "1990" },
            { x: 295, y: 308, label: "2000" },
            { x: 535, y: 308, label: "2008" },
            { x: 775, y: 308, label: "2015" },
            { x: 1020, y: 308, label: "2020" },
            { x: 1160, y: 308, label: "2025" },
          ].map(({ x, y, label }) => (
            <text key={label} x={x} y={y} textAnchor="middle" fill="rgba(255,255,255,.2)" fontSize="10" fontFamily="Manrope,sans-serif">
              {label}
            </text>
          ))}

          {/* Crisis dip annotations */}
          {[
            { x: 490, y: 185, label: "Crisis 2008" },
            { x: 940, y: 72, label: "COVID 2020" },
          ].map(({ x, y, label }) => (
            <g key={label}>
              <circle cx={x} cy={y} r="4" fill="#52B558" opacity="0.8" filter="url(#glow)" />
              <line x1={x} y1={y - 5} x2={x} y2={y - 25} stroke="rgba(255,255,255,.2)" strokeWidth="1" strokeDasharray="3 2" />
              <text x={x} y={y - 30} textAnchor="middle" fill="rgba(255,255,255,.3)" fontSize="9" fontFamily="Manrope,sans-serif">{label}</text>
            </g>
          ))}

          {/* End point glow */}
          <circle cx="1200" cy="18" r="5" fill="#8FD99A" opacity="0.9" filter="url(#glow)" />
          <circle cx="1200" cy="18" r="12" fill="#52B558" opacity="0.15" />
        </svg>
      </motion.div>
    </section>
  );
}
