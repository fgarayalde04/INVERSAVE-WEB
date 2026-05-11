import Link from "next/link";
import { FadeIn } from "@/components/ui";

const TIMELINE = [
  { year: "Hoy", label: "Empezás el hábito", pct: 4 },
  { year: "Año 5", label: "Base construida", pct: 18 },
  { year: "Año 10", label: "Interés compuesto activo", pct: 38 },
  { year: "Año 20", label: "Aceleración visible", pct: 67 },
  { year: "Año 30", label: "Patrimonio consolidado", pct: 100 },
];

const KEY_CONCEPTS = [
  {
    n: "Constancia",
    desc: "El aporte mensual es el motor. No el tamaño del aporte, sino la regularidad en el tiempo.",
  },
  {
    n: "Tiempo",
    desc: "A más años invertido, mayor el efecto del interés compuesto sobre tu capital acumulado.",
  },
  {
    n: "Paciencia",
    desc: "El mercado tiene años difíciles. La perspectiva larga permite navegarlos sin reaccionar impulsivamente.",
  },
];

export default function PlanCapital() {
  return (
    <section className="section-wrap-white">
      <div className="inner">

        {/* Header */}
        <FadeIn>
          <p className="section-label">Largo plazo</p>
          <h2 className="text-h2 font-bold mb-4">
            El tiempo es el activo{" "}
            <span className="text-g3">más importante.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-2xl mb-12">
            El plan no está diseñado para generar resultados en meses. Está pensado para construir capital
            de forma sostenida durante décadas. Cuanto antes empezás, mayor es el efecto del
            interés compuesto.
          </p>
        </FadeIn>

        {/* Timeline + SVG */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-14">

          {/* Progress bars timeline */}
          <FadeIn>
            <div className="space-y-5">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex items-center gap-4">
                  <div className="w-14 flex-shrink-0">
                    <p className="text-[11px] font-bold text-t3">{item.year}</p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#F0EFE8] rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.pct}%`,
                          background: "linear-gradient(90deg,#1A6638,#52B558)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-40 flex-shrink-0">
                    <p className="text-[11px] text-t3 leading-snug">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-t3/50 italic mt-6">
              Ilustración conceptual del proceso. No representa proyecciones de rendimiento.
            </p>
          </FadeIn>

          {/* SVG compound growth curve */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <svg
                viewBox="0 0 400 260"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                <defs>
                  <linearGradient id="capFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#52B558" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#52B558" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="capLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#52B558" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#52B558" stopOpacity="1" />
                  </linearGradient>
                  <filter id="capGlow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Subtle grid */}
                {[60, 120, 180, 240].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(0,0,0,.05)" strokeWidth="1" />
                ))}

                {/* Fill area */}
                <path
                  d="M0 245 C50 243 90 238 140 228 C190 216 230 222 270 204 C310 183 345 196 370 160 C385 140 395 122 400 106 L400 260 L0 260 Z"
                  fill="url(#capFill)"
                />

                {/* Growth line */}
                <path
                  d="M0 245 C50 243 90 238 140 228 C190 216 230 222 270 204 C310 183 345 196 370 160 C385 140 395 122 400 106"
                  fill="none"
                  stroke="url(#capLine)"
                  strokeWidth="2.5"
                  filter="url(#capGlow)"
                />

                {/* Flat "no investing" reference */}
                <line
                  x1="0" y1="245" x2="400" y2="245"
                  stroke="rgba(0,0,0,.08)"
                  strokeWidth="1"
                  strokeDasharray="5 4"
                />

                {/* End point */}
                <circle cx="400" cy="106" r="5" fill="#52B558" opacity="0.9" filter="url(#capGlow)" />
                <circle cx="400" cy="106" r="13" fill="#52B558" opacity="0.1" />
                <text x="358" y="96" fill="#1A6638" fontSize="10" fontFamily="Manrope,sans-serif" fontWeight="600">Tu patrimonio</text>

                {/* Year axis labels */}
                {[
                  { x: 0, label: "Hoy" },
                  { x: 200, label: "Año 15" },
                  { x: 400, label: "Año 30" },
                ].map((l) => (
                  <text
                    key={l.label}
                    x={l.x}
                    y="258"
                    textAnchor="middle"
                    fill="rgba(0,0,0,.28)"
                    fontSize="10"
                    fontFamily="Manrope,sans-serif"
                  >
                    {l.label}
                  </text>
                ))}
              </svg>
            </div>
          </FadeIn>
        </div>

        {/* 3 key concepts */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {KEY_CONCEPTS.map((item, i) => (
            <FadeIn key={item.n} delay={i * 0.08}>
              <div className="bg-[#F8F6F0] border border-black/[.07] rounded-2xl p-6 text-center h-full">
                <p className="text-[18px] font-bold text-g3 mb-2">{item.n}</p>
                <p className="text-[13px] text-t2 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA to Simulador */}
        <FadeIn>
          <div
            className="rounded-3xl p-10 md:p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 55% at 50% 50%,rgba(82,181,88,.1) 0%,transparent 70%)" }}
            />
            <div className="relative z-10">
              <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-4">
                Descubrí tu potencial
              </p>
              <h3 className="text-[clamp(22px,3.5vw,36px)] font-bold text-white tracking-[-0.02em] mb-3">
                Simulá cuánto podés construir.
              </h3>
              <p className="text-[15px] text-white/50 leading-relaxed max-w-md mx-auto mb-7">
                Ingresá tu aporte mensual y horizonte de inversión. El simulador te muestra
                distintos escenarios de mercado — sin compromisos, sin datos personales.
              </p>
              <Link
                href="/simulador"
                className="inline-flex items-center gap-2.5 bg-g3 text-white font-semibold text-[14px] rounded-full px-8 py-3.5 hover:bg-[#1A6638] transition-colors"
                style={{ boxShadow: "0 2px 20px rgba(26,102,56,.35)" }}
              >
                Simulá tu futuro
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
