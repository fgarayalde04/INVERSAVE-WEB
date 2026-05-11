import { FadeIn } from "@/components/ui";

const STEPS = [
  {
    n: "01",
    title: "Definís un aporte mensual",
    desc: "Elegís cuánto querés aportar cada mes, desde USD 150. No hay una cifra correcta: lo importante es ser constante con lo que es sostenible para vos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#52B558" strokeWidth="1.5" />
        <path
          d="M14 8v12M10.5 11c0-1.7 1.6-3 3.5-3s3.5 1.3 3.5 3c0 1.7-1.6 2.5-3.5 2.5s-3.5 .8-3.5 2.5 1.6 3 3.5 3 3.5-1.3 3.5-3"
          stroke="#52B558"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    n: "02",
    title: "El sistema invierte automáticamente",
    desc: "Cada mes, tu aporte se destina a mercados globales de forma automática. No necesitás hacer nada, tomar decisiones de mercado ni seguir precios.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M6 14a8 8 0 0 1 14-5.4M22 14a8 8 0 0 1-14 5.4"
          stroke="#52B558"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 8.5l-1.5 5-5-1.5M8 19.5l1.5-5 5 1.5"
          stroke="#52B558"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Construís capital a largo plazo",
    desc: "Con el tiempo y la constancia, tu portafolio crece. El objetivo no es un resultado inmediato, sino construir patrimonio real a lo largo de los años.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 21 L9 15 L13 18 L19 11 L24 6"
          stroke="#52B558"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 6h3v3"
          stroke="#52B558"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function PlanPasos() {
  return (
    <section className="py-20 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="section-label text-center">Cómo funciona</p>
          <h2 className="text-h2 font-bold text-center mb-3">
            Tres pasos.{" "}
            <span className="text-g3">Sin complicaciones.</span>
          </h2>
          <p className="text-[16px] text-t2 text-center max-w-lg mx-auto mb-14 leading-relaxed">
            No necesitás saber de finanzas, seguir el mercado ni tomar decisiones
            complejas. Solo elegís un monto y ser constante.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.1}>
              <div className="relative bg-white border border-black/[.07] rounded-3xl p-8 h-full flex flex-col">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF8E8] flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-[44px] font-bold text-black/[.04] leading-none select-none">
                    {step.n}
                  </span>
                </div>

                <p className="text-[17px] font-bold text-t1 mb-3 leading-snug">{step.title}</p>
                <p className="text-[14px] text-t2 leading-relaxed flex-1">{step.desc}</p>

                {/* Connector arrow (hidden on last) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:flex absolute top-10 -right-4 z-10 items-center">
                    <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                      <path
                        d="M0 8h24M20 4l4 4-4 4"
                        stroke="rgba(82,181,88,0.28)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
