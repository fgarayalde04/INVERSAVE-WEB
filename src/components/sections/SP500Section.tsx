"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";
import { SPYRealChart } from "@/components/charts/Charts";
import type { SPYDataPoint } from "@/app/api/spy-data/route";
import { useLeadModal } from "@/context/ModalContext";

const CRISES = [
  { year: "2000–2002", name: "Crisis Dotcom",      drop: "−49%", recover: "5 años para recuperar" },
  { year: "2008–2009", name: "Crisis Financiera",  drop: "−56%", recover: "4 años para recuperar" },
  { year: "2020",      name: "Pandemia COVID-19",  drop: "−34%", recover: "5 meses para recuperar" },
  { year: "2022",      name: "Inflación / Fed",    drop: "−25%", recover: "2 años para recuperar" },
];

const RANGES = ["1y", "5y", "10y", "max"] as const;
type Range = typeof RANGES[number];
const RANGE_LABELS: Record<Range, string> = { "1y": "1A", "5y": "5A", "10y": "10A", "max": "Máx" };

const STATS = [
  { n: "+10,02%", l: "CAGR geométrico S&P 500 (1928–2025)" },
  { n: "+11,92%", l: "CAGR geométrico S&P 500 últimos 50 años (1976–2025)" },
  { n: "71/98",   l: "Años con retorno positivo en el S&P 500 (1928–2025)" },
  { n: "~6%",     l: "Probabilidad histórica de pérdida con 10+ años de horizonte" },
];

export default function SP500Section() {
  const { openModal } = useLeadModal();
  const [range,    setRange]    = useState<Range>("max");
  const [data,     setData]     = useState<SPYDataPoint[]>([]);
  const [meta,     setMeta]     = useState<{ totalReturn: number; firstDate: string; lastDate: string; lastClose: number } | null>(null);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/spy-data?range=${range}`)
      .then(r => r.json())
      .then(json => {
        if (json.error) throw new Error(json.error);
        setData(json.data);
        setMeta(json.meta);
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [range]);

  const cagr = meta && range === "max"
    ? (() => {
        const years = (new Date(meta.lastDate).getTime() - new Date(meta.firstDate).getTime()) / (365.25 * 24 * 3600 * 1000);
        return (Math.pow(1 + meta.totalReturn / 100, 1 / years) - 1) * 100;
      })()
    : null;

  return (
    <section id="sp500" className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Historia del mercado</p>
          <h2 className="text-h2 font-bold mb-5">
            La historia del S&P 500 es{" "}
            <span className="text-g3">una historia de crecimiento.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            Crisis, guerras, pandemias, recesiones. El índice cayó muchas veces.
            Pero a largo plazo, la tendencia siempre fue alcista.
          </p>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {STATS.map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.07}>
              <div className="card-green text-center">
                <p className="text-[clamp(20px,3vw,30px)] font-bold text-g3 tracking-tight leading-none mb-2">{s.n}</p>
                <p className="text-[12px] text-t2 leading-snug">{s.l}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* S&P 500 Chart */}
        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-3xl p-7 mb-4">
            <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
              <div>
                <p className="text-[15px] font-semibold text-t1">S&P 500 — Rendimiento histórico</p>
                <p className="text-[13px] text-t3 mt-0.5">
                  {loading
                    ? "Cargando datos…"
                    : meta
                    ? `${meta.firstDate.slice(0, 7)} → ${meta.lastDate.slice(0, 7)} · Adjusted Close · ${data.length} puntos`
                    : "Datos del índice S&P 500"}
                </p>
              </div>
              <div className="flex gap-1">
                {RANGES.map(r => (
                  <button
                    key={r}
                    onClick={() => setRange(r)}
                    className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-150 ${
                      range === r
                        ? "bg-g3 text-white"
                        : "text-t3 hover:bg-[#F0EFE8] hover:text-t1"
                    }`}
                  >
                    {RANGE_LABELS[r]}
                  </button>
                ))}
              </div>
            </div>

            {cagr !== null && !loading && (
              <div className="flex gap-3 mb-5 flex-wrap">
                <div className="inline-flex items-center gap-2 bg-[#EDF8E8] border border-g1/20 rounded-xl px-4 py-2">
                  <span className="text-[12px] font-bold text-g3">CAGR S&P 500 (1993–hoy): +{cagr.toFixed(2)}% anual</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#EDF8E8] border border-g1/20 rounded-xl px-4 py-2">
                  <span className="text-[12px] font-bold text-g3">Retorno total: +{meta?.totalReturn?.toFixed(1)}%</span>
                </div>
              </div>
            )}

            <div className="relative w-full h-[280px]">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-3 text-t3 text-[14px]">
                    <svg className="animate-spin w-5 h-5 text-g3" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    Cargando datos del S&P 500…
                  </div>
                </div>
              )}
              {error && (
                <div className="absolute inset-0 flex items-center justify-center text-warn text-[14px]">
                  Error al cargar: {error}
                </div>
              )}
              {!loading && !error && data.length > 0 && (
                <SPYRealChart data={data} />
              )}
            </div>

            <div className="flex gap-5 mt-4 flex-wrap">
              <span className="flex items-center gap-2 text-[12px] text-t3">
                <span className="inline-block w-5 h-0.5 rounded-full bg-g3"/>
                S&P 500 Adjusted Close (ajustado por dividendos y splits)
              </span>
            </div>
          </div>
          <p className="text-[11px] text-t3 italic mb-4">
            Datos del índice S&P 500 vía ETF SPY (Adjusted Close) — Fuente: Yahoo Finance / S&P Global.
            Los rendimientos pasados no garantizan resultados futuros.
          </p>
        </FadeIn>

        {/* Leer más toggle */}
        <FadeIn>
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 text-[13px] font-semibold text-g3 hover:text-g4 transition-colors mt-2 mb-4"
          >
            <motion.span animate={{ rotate: showMore ? 180 : 0 }} transition={{ duration: 0.2 }}>
              ↓
            </motion.span>
            {showMore ? "Ver menos" : "Ver las grandes crisis y más contexto histórico"}
          </button>
        </FadeIn>

        {/* Expandable: crisis cards + quote */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <FadeIn>
              <p className="section-label mb-1">Las grandes crisis</p>
              <h3 className="text-h3 font-bold mb-3">
                Cada caída fue seguida por{" "}
                <span className="text-g3">una recuperación.</span>
              </h3>
              <p className="text-[17px] text-t2 leading-relaxed mb-8">
                El pánico vende. La paciencia construye patrimonio.
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
                      <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0"/>
                      <span className="text-[13px] font-medium text-g3">{c.recover}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="rounded-3xl p-8 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%,rgba(82,181,88,.1) 0%,transparent 70%)" }}/>
                <div className="relative z-10">
                  <p className="text-[13px] font-bold tracking-[0.1em] uppercase text-g2/50 mb-4">La lección del largo plazo</p>
                  <p className="text-[clamp(18px,3vw,26px)] font-bold text-white leading-[1.2] mb-3">
                    &ldquo;El tiempo en el mercado siempre supera el timing del mercado.&rdquo;
                  </p>
                  <p className="text-[15px] text-white/50">
                    La evidencia histórica muestra que el S&P 500 generó retorno compuesto positivo
                    en prácticamente todos los períodos de 15+ años desde 1928.
                  </p>
                </div>
              </div>
            </FadeIn>

            <button
              onClick={() => setShowMore(false)}
              className="flex items-center gap-2 text-[13px] font-semibold text-t3 hover:text-t1 transition-colors mt-6"
            >
              ↑ Ver menos
            </button>
          </motion.div>
        )}

        {/* Section CTA */}
        <FadeIn>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-black/[.07] rounded-2xl px-6 py-5">
            <p className="text-[15px] font-semibold text-t1">
              El tiempo en el mercado suele superar al intento de adivinar el mercado.
            </p>
            <button
              onClick={() => openModal("sp500")}
              className="flex-shrink-0 bg-g3 text-white font-semibold text-[13px] rounded-full px-5 py-2.5 hover:bg-[#1A6638] transition-colors cursor-pointer"
            >
              Agendá una reunión
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
