import Link from "next/link";
import { FadeIn, Alert } from "@/components/ui";

// ── DCA visual data ──────────────────────────────────────────
const DCA_BARS = [
  { mes: "Ene", pct: 46, note: "mercado lateral" },
  { mes: "Feb", pct: 62, note: "mercado sube" },
  { mes: "Mar", pct: 38, note: "mercado baja" },
  { mes: "Abr", pct: 72, note: "mercado sube" },
  { mes: "May", pct: 30, note: "mercado baja" },
  { mes: "Jun", pct: 84, note: "mercado sube" },
];

const DCA_POINTS = [
  {
    title: "Cuando el mercado baja, comprás más",
    desc: "Con el mismo monto mensual, si el precio cayó, tu aporte adquiere más participaciones. Eso reduce tu costo promedio con el tiempo.",
  },
  {
    title: "Cuando sube, seguís creciendo",
    desc: "Si el mercado subió, tus participaciones anteriores valen más. El portafolio acumula valor.",
  },
  {
    title: "La clave es la constancia, no el timing",
    desc: "No necesitás predecir el mercado. Solo seguir aportando mes a mes, sin importar las noticias.",
  },
];

const FLEXIBILITY_ITEMS = [
  {
    action: "Ajustar el monto",
    desc: "Si tu situación cambia, podés aumentar o reducir tu aporte mensual cuando lo necesités.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M6 7l4-4 4 4" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    action: "Pausar aportes",
    desc: "Podés pausar tus contribuciones temporalmente sin cerrar la cuenta ni perder lo invertido.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="5" y="4" width="3.5" height="12" rx="1" stroke="#1A6638" strokeWidth="1.7" />
        <rect x="11.5" y="4" width="3.5" height="12" rx="1" stroke="#1A6638" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    action: "Retirar fondos",
    desc: "Sin permanencia mínima obligatoria. Podés acceder a tu capital cuando lo necesités.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 14V3M6 10l4 4 4-4" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17h14" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

const RISK_POINTS = [
  {
    title: "Invertir implica riesgos reales",
    desc: "El valor de tu portafolio puede subir y bajar. No existe inversión que garantice resultados.",
  },
  {
    title: "Los valores fluctúan",
    desc: "En cualquier año, tu portafolio puede caer. Eso es parte del proceso, no una señal para salir.",
  },
  {
    title: "El largo plazo ordena la perspectiva",
    desc: "Históricamente, los mercados globales han tendido a recuperarse y crecer a lo largo del tiempo. Pero el pasado no garantiza el futuro.",
  },
  {
    title: "No hay garantías de rendimiento",
    desc: "No prometemos ni proyectamos retornos específicos. Las simulaciones son ilustrativas, no compromisos.",
  },
];

export default function PlanDCA() {
  return (
    <section className="py-20 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ── Módulo DCA ── */}
        <div>
          <FadeIn>
            <p className="section-label">Aporte mensual automático</p>
            <h2 className="text-h2 font-bold mb-4">
              Aportar todos los meses{" "}
              <span className="text-g3">es la estrategia.</span>
            </h2>
            <p className="text-[17px] text-t2 leading-relaxed max-w-2xl mb-10">
              Se llama Dollar-Cost Averaging (DCA): invertir un monto fijo de forma periódica,
              sin importar si el mercado sube o baja ese mes. No buscás el momento perfecto.
              Simplemente entrás todos los meses.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bar chart visual */}
            <FadeIn>
              <div className="bg-white border border-black/[.07] rounded-3xl p-8">
                <p className="text-[12px] font-bold text-t3 uppercase tracking-[0.08em] mb-6">
                  Ejemplo: USD 200/mes · 6 meses
                </p>
                <div className="space-y-4">
                  {DCA_BARS.map((item) => (
                    <div key={item.mes} className="flex items-center gap-3">
                      <span className="text-[11px] font-bold text-t3 w-8 flex-shrink-0">{item.mes}</span>
                      <div className="flex-1 bg-[#F0EFE8] rounded-full h-2.5 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.pct}%`,
                            background: "linear-gradient(90deg,#1A6638,#52B558)",
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-t3 w-24 text-right leading-tight">{item.note}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-black/[.06] flex justify-between items-end">
                  <div>
                    <p className="text-[11px] text-t3 mb-1">Total aportado</p>
                    <p className="text-[22px] font-bold text-t1">USD 1.200</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-t3 mb-1">Precio promedio</p>
                    <p className="text-[16px] font-bold text-g3">Optimizado por DCA</p>
                  </div>
                </div>
                <p className="text-[10px] text-t3/50 italic mt-3">
                  Ilustración conceptual. No representa rendimientos reales.
                </p>
              </div>
            </FadeIn>

            {/* Points */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4 h-full">
                {DCA_POINTS.map((item, i) => (
                  <div key={i} className="bg-white border border-black/[.07] rounded-2xl p-5 flex gap-4">
                    <div className="w-1.5 rounded-full bg-g1 flex-shrink-0 self-stretch" />
                    <div>
                      <p className="text-[14px] font-bold text-t1 mb-1.5">{item.title}</p>
                      <p className="text-[13px] text-t2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Módulo Flexibilidad ── */}
        <div>
          <FadeIn>
            <p className="section-label">Flexibilidad</p>
            <h2 className="text-h2 font-bold mb-4">
              Tu vida cambia.{" "}
              <span className="text-g3">El plan también puede.</span>
            </h2>
            <p className="text-[17px] text-t2 leading-relaxed max-w-2xl mb-10">
              El plan está diseñado para el largo plazo, pero entendemos que la vida no es lineal.
              Tenés opciones en cada momento.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5">
            {FLEXIBILITY_ITEMS.map((item, i) => (
              <FadeIn key={item.action} delay={i * 0.08}>
                <div className="bg-white border border-black/[.07] rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF8E8] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <p className="text-[15px] font-bold text-t1 mb-2">{item.action}</p>
                  <p className="text-[13px] text-t2 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Módulo Riesgo ── */}
        <div>
          <FadeIn>
            <p className="section-label">Riesgo</p>
            <h2 className="text-h2 font-bold mb-4">
              Lo que necesitás saber{" "}
              <span className="text-g3">antes de empezar.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white border border-black/[.07] rounded-3xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Risk points */}
                <div className="space-y-5">
                  {RISK_POINTS.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#FEF0EC] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 3v2.5M5 7.5v.5" stroke="#B5451E" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-t1 mb-1">{item.title}</p>
                        <p className="text-[13px] text-t2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alert + simulador link */}
                <div className="flex flex-col gap-4">
                  <Alert variant="warn">
                    Toda inversión implica riesgos, incluyendo la posible pérdida del capital invertido.
                    Los rendimientos pasados no garantizan resultados futuros. Esta información tiene fines
                    educativos y no constituye asesoramiento financiero personalizado.
                  </Alert>
                  <div className="bg-[#F8F6F0] rounded-2xl p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[13px] font-bold text-t1 mb-2">
                        Entendé el riesgo de tu perfil antes de empezar
                      </p>
                      <p className="text-[13px] text-t2 leading-relaxed mb-5">
                        El simulador te muestra distintos escenarios — optimista, base y conservador —
                        según tu horizonte y aporte mensual.
                      </p>
                    </div>
                    <Link
                      href="/simulador"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-g3 hover:text-g4 transition-colors"
                    >
                      Ver simulador
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
