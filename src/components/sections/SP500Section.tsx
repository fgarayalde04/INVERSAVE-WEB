"use client";
import { FadeIn } from "@/components/ui";
import { SP500Chart } from "@/components/charts/Charts";

const CRISES = [
  { year: "2000–2002", name: "Crisis Dotcom", drop: "−49%", recover: "5 años para recuperar" },
  { year: "2008–2009", name: "Crisis Financiera", drop: "−56%", recover: "4 años para recuperar" },
  { year: "2020", name: "Pandemia COVID-19", drop: "−34%", recover: "5 meses para recuperar" },
  { year: "2022", name: "Inflación / Fed", drop: "−25%", recover: "2 años para recuperar" },
];

const STATS = [
  { n: "+10,7%", l: "Retorno anual promedio del S&P 500 (1957–2024)" },
  { n: "35", l: "Años de retornos positivos en los últimos 45 años (1980–2024)" },
  { n: "6%", l: "Probabilidad histórica de pérdida con 10+ años de horizonte" },
  { n: "×57", l: "Multiplicador de capital invertido en el S&P 500 (1990–2024)" },
];

export default function SP500Section() {
  return (
    <section id="sp500" className="section-wrap-white">
      <div className="inner">
        {/* Header */}
        <FadeIn>
          <p className="section-label">Historia del mercado</p>
          <h2 className="text-h2 font-bold mb-5">
            La historia del mercado es{" "}
            <span className="text-g3">una historia de crecimiento.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            Crisis, guerras, pandemias, recesiones. El mercado cayó muchas veces.
            Pero a largo plazo, la tendencia siempre fue alcista. Los datos no mienten.
          </p>
        </FadeIn>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {STATS.map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.07}>
              <div className="card-green text-center">
                <p className="text-[clamp(22px,3.5vw,32px)] font-bold text-g3 tracking-tight leading-none mb-2">{s.n}</p>
                <p className="text-[13px] text-t2 leading-snug">{s.l}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Chart */}
        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-3xl p-7 mb-4">
            <div className="flex items-center justify-between mb-1 flex-wrap gap-3">
              <div>
                <p className="text-[15px] font-semibold text-t1">S&P 500 — Índice histórico</p>
                <p className="text-[13px] text-t3">1990 – 2025 · Precio de cierre anual</p>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-t3">
                <span className="inline-block w-4 h-0.5 rounded-full bg-g3" />
                S&P 500
              </div>
            </div>
            <div className="relative w-full h-[260px] mt-5">
              <SP500Chart />
            </div>
          </div>
          <p className="text-[11px] text-t3 italic">
            Datos históricos aproximados. Rendimientos pasados no garantizan resultados futuros. Fuente: S&P Global, Bloomberg.
          </p>
        </FadeIn>

        {/* Crisis cards */}
        <div className="mt-12">
          <FadeIn>
            <p className="section-label mb-1">Las grandes crisis</p>
            <h3 className="text-h3 font-bold mb-3">
              Cada caída fue seguida por{" "}
              <span className="text-g3">una recuperación.</span>
            </h3>
            <p className="text-[17px] text-t2 leading-relaxed mb-8">
              El pánico vende. La paciencia construye patrimonio. Quienes mantuvieron su estrategia siempre salieron adelante.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {CRISES.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.07}>
                <div className="bg-white border border-black/[.07] rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-[11px] font-bold text-t3 tracking-[0.1em] uppercase mb-1">{c.year}</p>
                      <p className="text-[16px] font-bold text-t1">{c.name}</p>
                    </div>
                    <div className="text-[clamp(20px,3vw,26px)] font-bold text-warn tracking-tight flex-shrink-0">{c.drop}</div>
                  </div>
                  <div className="flex items-center gap-2 bg-[#EDF8E8] border border-g1/20 rounded-xl px-4 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0" />
                    <span className="text-[13px] font-medium text-g3">{c.recover}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* The big message */}
          <FadeIn>
            <div
              className="rounded-3xl p-8 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0C1A11 0%, #0F2A1A 100%)" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(82,181,88,.1) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <p className="text-[13px] font-bold tracking-[0.1em] uppercase text-g2/50 mb-4">La lección de 100 años</p>
                <p className="text-[clamp(18px,3vw,26px)] font-bold text-white leading-[1.2] mb-3">
                  &ldquo;El tiempo en el mercado siempre supera el timing del mercado.&rdquo;
                </p>
                <p className="text-[15px] text-white/50">
                  Un inversor que mantuvo su estrategia durante todas las crisis salió adelante. Siempre.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
