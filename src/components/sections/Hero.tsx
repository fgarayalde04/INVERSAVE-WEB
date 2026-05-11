"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const TRUST_BADGES = [
  "Regulado BCU",
  "Cuenta segregada · BNY Mellon",
  "Inversión global diversificada",
  "Asesor local",
];

const PHRASES = [
  "Ahorrar no es renunciar. Es elegir quién serás en 20 años.",
  "El mejor momento para empezar fue hace diez años. El segundo mejor es hoy.",
  "Tu jubilación no la define el BPS. La definís vos.",
  "USD 200 al mes pueden convertirse en más de USD 600.000 con el tiempo suficiente.",
  "Construir patrimonio no requiere saber de finanzas. Requiere constancia.",
  "Tu futuro financiero se construye hoy, en silencio, un mes a la vez.",
  "La diferencia entre tranquilidad e incertidumbre en el retiro se construye ahora.",
  "No se trata de timing perfecto. Se trata de tiempo en el mercado.",
  "Invertir no es para hacerse rico rápido. Es para vivir más tranquilo después.",
  "El interés compuesto no distingue entre ricos y no ricos. Solo entre quienes empezaron y quienes no.",
  "Cada mes sin invertir tiene un costo real que no se recupera.",
  "El dinero que no invertís hoy pierde poder frente a la inflación mañana.",
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
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhraseIdx(i => (i + 1) % PHRASES.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(160deg, #0C1A11 0%, #0F2118 40%, #0A160E 100%)",
        minHeight: "min(100svh, 880px)",
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
          Uruguay · Planificación patrimonial · Retiro privado
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(38px,7vw,82px)] font-bold leading-[0.96] tracking-[-0.03em] mb-6 mx-auto"
          style={{ maxWidth: 860 }}
        >
          No estás ahorrando{" "}
          <br className="hidden sm:block" />
          solo dinero. Estás construyendo{" "}
          <span
            className="text-g1"
            style={{ textShadow: "0 0 40px rgba(82,181,88,.4)" }}
          >
            tranquilidad futura.
          </span>
        </motion.h1>

        {/* Rotating phrase */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55 }}
          className="max-w-[580px] mx-auto mb-3 min-h-[60px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-[clamp(15px,2vw,18px)] text-white/55 leading-relaxed text-center italic"
            >
              {PHRASES[phraseIdx]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.55 }}
          className="text-[clamp(15px,2vw,17px)] text-white/35 leading-relaxed max-w-[480px] mx-auto mb-10"
        >
          Aportes automáticos, inversión diversificada y una estrategia simple para tu retiro.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.5 }}
          className="flex justify-center gap-3 flex-wrap mb-10"
        >
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link href="/dominion" className="btn-hero inline-flex items-center gap-2">
              Conocé el plan
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
          <Link href="/simulador" className="btn-hero-outline inline-flex items-center">
            Simulá tu futuro
          </Link>
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

      {/* Compound growth curve — aspirational, clean */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full"
        style={{ marginTop: "auto" }}
      >
        <svg
          width="100%"
          viewBox="0 0 1200 340"
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
          {[80, 140, 200, 260, 310].map((y) => (
            <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="rgba(82,181,88,.06)" strokeWidth="1" />
          ))}

          {/* Flat "no invertir" reference line */}
          <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(255,255,255,.06)" strokeWidth="1" strokeDasharray="6 5" />

          {/* Fill area */}
          <path
            d="M0 305 C100 302 180 295 260 280 C340 262 400 268 480 248 C560 226 620 235 700 210 C780 183 840 198 920 165 C1000 130 1060 148 1130 108 C1165 88 1185 72 1200 55 L1200 340 L0 340 Z"
            fill="url(#chartFill)"
          />

          {/* Main chart line */}
          <path
            d="M0 305 C100 302 180 295 260 280 C340 262 400 268 480 248 C560 226 620 235 700 210 C780 183 840 198 920 165 C1000 130 1060 148 1130 108 C1165 88 1185 72 1200 55"
            fill="none"
            stroke="url(#lineFade)"
            strokeWidth="2.5"
            filter="url(#glow)"
          />

          {/* Life milestone labels — aspirational, not crisis */}
          {[
            { x: 60,   y: 328, label: "Año 1" },
            { x: 300,  y: 328, label: "Año 10" },
            { x: 600,  y: 328, label: "Año 20" },
            { x: 900,  y: 328, label: "Año 30" },
            { x: 1160, y: 328, label: "Retiro" },
          ].map(({ x, y, label }) => (
            <text key={label} x={x} y={y} textAnchor="middle" fill="rgba(255,255,255,.18)" fontSize="10" fontFamily="Manrope,sans-serif">
              {label}
            </text>
          ))}

          {/* Milestone dots — positive milestones only */}
          {[
            { x: 480, y: 248, label: "1er hito" },
            { x: 920, y: 165, label: "Crecimiento acelerado" },
          ].map(({ x, y, label }) => (
            <g key={label}>
              <circle cx={x} cy={y} r="3.5" fill="#52B558" opacity="0.7" filter="url(#glow)" />
              <line x1={x} y1={y - 4} x2={x} y2={y - 22} stroke="rgba(82,181,88,.3)" strokeWidth="1" strokeDasharray="3 2" />
              <text x={x} y={y - 27} textAnchor="middle" fill="rgba(255,255,255,.28)" fontSize="9" fontFamily="Manrope,sans-serif">{label}</text>
            </g>
          ))}

          {/* End point — "Tu patrimonio" */}
          <circle cx="1200" cy="55" r="5" fill="#8FD99A" opacity="0.9" filter="url(#glow)" />
          <circle cx="1200" cy="55" r="14" fill="#52B558" opacity="0.12" />
          <text x="1152" y="44" textAnchor="middle" fill="rgba(143,217,154,.7)" fontSize="10" fontFamily="Manrope,sans-serif" fontWeight="600">Tu patrimonio</text>
        </svg>
      </motion.div>
    </section>
  );
}
