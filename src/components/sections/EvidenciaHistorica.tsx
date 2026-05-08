"use client";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui";
import { AnnualReturnsChart } from "@/components/charts/Charts";
import { SP500_STATS } from "@/data/sp500AnnualReturns";
import { ROLLING_15Y, ROLLING_15Y_TOTAL_CAGR, type RollingPeriod } from "@/data/sp500Rolling15Years";

// ─────────────────────────────────────────────────────────────────────────────
// Stat cards data
// ─────────────────────────────────────────────────────────────────────────────
const STATS = [
  {
    value:  `+${SP500_STATS.geometric1928_2025}%`,
    label:  "S&P 500 · CAGR geométrico 1928–2025",
    sub:    "Retorno geométrico anual",
    highlight: true,
  },
  {
    value:  `+${SP500_STATS.arithmetic1928_2025}%`,
    label:  "S&P 500 · Retorno aritmético anual 1928–2025",
    sub:    "Retorno aritmético anual",
    highlight: false,
  },
  {
    value:  `+${SP500_STATS.geometric1976_2025}%`,
    label:  "S&P 500 · CAGR geométrico 1976–2025",
    sub:    "Últimos 50 años",
    highlight: false,
  },
  {
    value:  `+${SP500_STATS.geometric2016_2025}%`,
    label:  "S&P 500 · CAGR geométrico 2016–2025",
    sub:    "Última década",
    highlight: false,
  },
  {
    value:  `+${SP500_STATS.tbill1928_2025}%`,
    label:  "T-Bill EE.UU. · CAGR geométrico 1928–2025",
    sub:    "Letras del Tesoro",
    highlight: false,
  },
  {
    value:  `+${SP500_STATS.tbond1928_2025}%`,
    label:  "T-Bond EE.UU. 10 años · CAGR geométrico 1928–2025",
    sub:    "Bonos del Tesoro",
    highlight: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DCA growth curve — SVG chart for rolling period module
// ─────────────────────────────────────────────────────────────────────────────
interface DCAPoint { month: number; capital: number; aportado: number; }

function buildDCACurve(cagrPct: number, monthlyContrib: number, months: number): DCAPoint[] {
  const r = Math.pow(1 + cagrPct / 100, 1 / 12) - 1;
  return Array.from({ length: months + 1 }, (_, m) => {
    const capital = m === 0
      ? 0
      : Math.abs(r) < 1e-8
        ? monthlyContrib * m
        : monthlyContrib * ((Math.pow(1 + r, m) - 1) / r);
    return { month: m, capital: Math.round(capital * 100) / 100, aportado: monthlyContrib * m };
  });
}

interface SVGDCAChartProps {
  period: RollingPeriod;
}

function SVGDCAChart({ period }: SVGDCAChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: DCAPoint } | null>(null);

  const curve  = buildDCACurve(period.cagr, period.monthlyContrib, 180);
  const maxVal = Math.max(...curve.map(d => d.capital), period.totalContrib * 1.05);
  const minVal = Math.min(0, ...curve.map(d => d.capital));
  const range  = maxVal - minVal;

  const W = 800; const H = 200;
  const PAD = { top: 16, right: 20, bottom: 32, left: 56 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;

  const toX = (m: number) => PAD.left + (m / 180) * plotW;
  const toY = (v: number) => PAD.top + plotH - ((v - minVal) / range) * plotH;

  const capitalPath = curve.map((d, i) =>
    `${i === 0 ? "M" : "L"}${toX(d.month).toFixed(1)},${toY(d.capital).toFixed(1)}`
  ).join(" ");

  const aportadoPath = curve.map((d, i) =>
    `${i === 0 ? "M" : "L"}${toX(d.month).toFixed(1)},${toY(d.aportado).toFixed(1)}`
  ).join(" ");

  const fillPath = `${capitalPath} L${toX(180).toFixed(1)},${toY(minVal).toFixed(1)} L${toX(0).toFixed(1)},${toY(minVal).toFixed(1)} Z`;

  const yAxisTicks = [0, Math.round(maxVal * 0.25), Math.round(maxVal * 0.5), Math.round(maxVal * 0.75), Math.round(maxVal)];
  const xAxisTicks = [0, 36, 72, 108, 144, 180];
  const xLabels    = ["Año 1", "Año 3", "Año 6", "Año 9", "Año 12", "Año 15"];

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = W / rect.width;
    const relX = (e.clientX - rect.left) * scaleX;
    const month = Math.round(Math.max(0, Math.min(180, ((relX - PAD.left) / plotW) * 180)));
    const data = curve[month];
    if (!data) return;
    const x = rect.left + (toX(month) / W) * rect.width;
    const y = rect.top + (toY(data.capital) / H) * rect.height;
    setTooltip({ x, y, data });
  }, [curve]); // eslint-disable-line react-hooks/exhaustive-deps

  const isNegativeCagr = period.cagr < 0;

  return (
    <div className="relative w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ height: 200 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTooltip(null)}
      >
        {/* Grid lines */}
        {yAxisTicks.map(v => (
          <g key={v}>
            <line
              x1={PAD.left} x2={W - PAD.right}
              y1={toY(v)} y2={toY(v)}
              stroke="rgba(0,0,0,0.06)" strokeWidth="1"
            />
            <text
              x={PAD.left - 6} y={toY(v) + 3}
              textAnchor="end" fontSize="9" fill="#aaa"
            >
              ${v >= 1000 ? `${Math.round(v / 1000)}k` : v}
            </text>
          </g>
        ))}

        {/* X axis labels */}
        {xAxisTicks.map((m, i) => (
          <text
            key={m} x={toX(m)} y={H - 6}
            textAnchor="middle" fontSize="9" fill="#aaa"
          >
            {xLabels[i]}
          </text>
        ))}

        {/* Zero line (only if negative CAGR makes values dip below 0) */}
        {isNegativeCagr && (
          <line
            x1={PAD.left} x2={W - PAD.right}
            y1={toY(0)} y2={toY(0)}
            stroke="rgba(181,69,30,0.3)" strokeWidth="1" strokeDasharray="4 3"
          />
        )}

        {/* Capital fill */}
        <path d={fillPath} fill="rgba(26,102,56,0.08)" />

        {/* Aportado line (what you put in) */}
        <path
          d={aportadoPath}
          fill="none"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />

        {/* Capital line */}
        <path
          d={capitalPath}
          fill="none"
          stroke={isNegativeCagr ? "#B5451E" : "#1A6638"}
          strokeWidth="2.5"
        />

        {/* End point dot */}
        <circle
          cx={toX(180)}
          cy={toY(curve[180].capital)}
          r="4"
          fill={isNegativeCagr ? "#B5451E" : "#1A6638"}
        />

        {/* Hover crosshair */}
        {tooltip && (() => {
          if (!svgRef.current) return null;
          const rect = svgRef.current.getBoundingClientRect();
          const m = tooltip.data.month;
          const svgX = toX(m);
          const svgY = toY(tooltip.data.capital);
          return (
            <g>
              <line x1={svgX} x2={svgX} y1={PAD.top} y2={H - PAD.bottom}
                stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
              <circle cx={svgX} cy={svgY} r="4"
                fill={isNegativeCagr ? "#B5451E" : "#1A6638"} />
            </g>
          );
        })()}
      </svg>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{ left: tooltip.x + 12, top: tooltip.y - 60 }}
        >
          <div className="bg-white border border-black/[.1] rounded-xl shadow-lg px-3 py-2.5 text-[12px] min-w-[160px]">
            <p className="font-semibold text-t1 mb-1">
              Mes {tooltip.data.month} · Año {Math.ceil(tooltip.data.month / 12) || 1}
            </p>
            <p className="text-t2">
              <span className="inline-block w-2 h-2 rounded-full bg-g3 mr-1.5" />
              Capital: <span className="font-semibold text-g3">${tooltip.data.capital.toLocaleString("es-UY", { maximumFractionDigits: 0 })}</span>
            </p>
            <p className="text-t2">
              <span className="inline-block w-2 h-2 rounded-full bg-black/20 mr-1.5" />
              Aportado: <span className="font-medium">${tooltip.data.aportado.toLocaleString("es-UY")}</span>
            </p>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex gap-4 mt-2 flex-wrap">
        <span className="flex items-center gap-1.5 text-[11px] text-t3">
          <span className="inline-block w-4 h-0.5 rounded-full bg-g3" />
          Capital estimado (DCA CAGR {period.cagr >= 0 ? "+" : ""}{period.cagr}% anual)
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-t3">
          <span className="inline-block w-4 border-t border-dashed border-black/30" />
          Total aportado (USD 100/mes)
        </span>
      </div>
      <p className="text-[10px] text-t3/70 mt-1 italic">
        Curva de crecimiento estimada por interpolación DCA mensual basada en el CAGR del período. No refleja trayectoria real mes a mes.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Period Selector Module
// ─────────────────────────────────────────────────────────────────────────────
const TAG_STYLES: Record<string, string> = {
  best:   "bg-[#EDF8E8] text-g3 border border-g1/30",
  worst:  "bg-[#FEF0EC] text-warn border border-warn/30",
  recent: "bg-[#EEF1F8] text-[#3D5A99] border border-[#3D5A99]/25",
};

function PeriodSelectorModule() {
  const [selected, setSelected] = useState<RollingPeriod>(ROLLING_15Y[5]); // 1985-1999 default

  const fv = selected.finalValue
    ? selected.finalValue
    : (() => {
        // Calculate from DCA formula if finalValue not in document
        const r = Math.pow(1 + selected.cagr / 100, 1 / 12) - 1;
        const fvCalc = Math.abs(r) < 1e-8
          ? selected.monthlyContrib * 180
          : selected.monthlyContrib * ((Math.pow(1 + r, 180) - 1) / r);
        return Math.round(fvCalc);
      })();

  const gain = fv - selected.totalContrib;
  const multiple = (fv / selected.totalContrib).toFixed(2);
  const hasFinalValueFromDoc = selected.finalValue !== null;

  return (
    <div>
      {/* Period buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ROLLING_15Y.map(p => (
          <button
            key={p.period}
            onClick={() => setSelected(p)}
            className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all duration-150 border ${
              selected.period === p.period
                ? "bg-g3 text-white border-g3"
                : "bg-white text-t2 border-black/[.08] hover:border-g3/40 hover:text-g3"
            }`}
          >
            {p.period}
            {p.tag && (
              <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                selected.period === p.period ? "bg-white/20 text-white" : TAG_STYLES[p.tag]
              }`}>
                {p.tagLabel}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* KPI row */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.period}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-white border border-black/[.07] rounded-2xl p-4">
              <p className="text-[10px] font-bold text-t3 tracking-[0.08em] uppercase mb-1">CAGR del período</p>
              <p className={`text-[clamp(18px,3vw,24px)] font-bold tracking-tight ${selected.cagr >= 0 ? "text-g3" : "text-warn"}`}>
                {selected.cagr >= 0 ? "+" : ""}{selected.cagr.toFixed(2)}%
              </p>
              <p className="text-[11px] text-t3">Geométrico anual</p>
            </div>
            <div className="bg-white border border-black/[.07] rounded-2xl p-4">
              <p className="text-[10px] font-bold text-t3 tracking-[0.08em] uppercase mb-1">Retorno total</p>
              <p className={`text-[clamp(18px,3vw,24px)] font-bold tracking-tight ${selected.totalReturn >= 0 ? "text-g3" : "text-warn"}`}>
                {selected.totalReturn >= 0 ? "+" : ""}{selected.totalReturn.toFixed(2)}%
              </p>
              <p className="text-[11px] text-t3">15 años compuesto</p>
            </div>
            <div className="bg-white border border-black/[.07] rounded-2xl p-4">
              <p className="text-[10px] font-bold text-t3 tracking-[0.08em] uppercase mb-1">Valor final</p>
              <p className="text-[clamp(18px,3vw,24px)] font-bold tracking-tight text-t1">
                ${fv.toLocaleString("es-UY", { maximumFractionDigits: 0 })}
              </p>
              <p className="text-[11px] text-t3">
                {hasFinalValueFromDoc ? "Dato del documento" : "Estimado por DCA CAGR"}
              </p>
            </div>
            <div className="bg-white border border-black/[.07] rounded-2xl p-4">
              <p className="text-[10px] font-bold text-t3 tracking-[0.08em] uppercase mb-1">Ganancia generada</p>
              <p className={`text-[clamp(18px,3vw,24px)] font-bold tracking-tight ${gain >= 0 ? "text-g3" : "text-warn"}`}>
                {gain >= 0 ? "+" : ""}${Math.abs(gain).toLocaleString("es-UY", { maximumFractionDigits: 0 })}
              </p>
              <p className="text-[11px] text-t3">×{multiple} lo aportado</p>
            </div>
          </div>

          {/* Summary line */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-[#F5F2EA] border border-black/[.07] rounded-xl px-4 py-2">
              <span className="text-[12px] text-t2">Período:</span>
              <span className="text-[12px] font-bold text-t1">{selected.period}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#F5F2EA] border border-black/[.07] rounded-xl px-4 py-2">
              <span className="text-[12px] text-t2">Aporte mensual:</span>
              <span className="text-[12px] font-bold text-t1">USD {selected.monthlyContrib}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#F5F2EA] border border-black/[.07] rounded-xl px-4 py-2">
              <span className="text-[12px] text-t2">Total aportado:</span>
              <span className="text-[12px] font-bold text-t1">USD {selected.totalContrib.toLocaleString("es-UY")}</span>
            </div>
          </div>

          {/* Growth chart */}
          <SVGDCAChart key={selected.period} period={selected} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Accordion item
// ─────────────────────────────────────────────────────────────────────────────
function AccordionItem({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden mb-2 transition-colors duration-200 ${open ? "border-g1/40" : "border-black/[.07]"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F8F6F0] transition-colors duration-150"
      >
        <span className="text-[14px] font-semibold text-t1">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`text-[18px] flex-shrink-0 ml-4 ${open ? "text-g3" : "text-t3"}`}
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-5 pb-5 pt-4 border-t border-black/[.06] text-[14px] text-t2 leading-relaxed space-y-2">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────
export default function EvidenciaHistorica() {
  return (
    <section id="evidencia-historica" className="section-wrap-white">
      <div className="inner">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <FadeIn>
          <p className="section-label">Evidencia histórica del largo plazo</p>
          <h2 className="text-h2 font-bold mb-5">
            97 años de datos.<br />
            <span className="text-g3">Una sola dirección.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-2xl mb-4">
            Crisis, guerras, inflación, recesiones. El mercado cayó muchas veces y de forma severa.
            Pero el inversor que mantuvo la disciplina a largo plazo, capturó un crecimiento compuesto
            que ningún otro activo tradicional logró igualar.
          </p>
          <div className="inline-flex items-start gap-3 bg-[#F5F2EA] border border-black/[.07] rounded-2xl px-5 py-4 mb-12 max-w-2xl">
            <svg className="w-4 h-4 text-t3 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 7v4M8 5v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="text-[12px] text-t3 leading-relaxed">
              <strong>Nota metodológica:</strong> Serie histórica del S&P 500 con dividendos incluidos.
              El S&P 500 fue creado en 1957 y la serie previa fue completada con índices históricos
              de acciones large cap. Los rendimientos pasados no garantizan resultados futuros.
            </p>
          </div>
        </FadeIn>

        {/* ── Stat cards ───────────────────────────────────────────────── */}
        <FadeIn>
          <p className="section-label mb-4">Retornos históricos</p>
          <h3 className="text-h3 font-bold mb-2">
            El retorno geométrico es{" "}
            <span className="text-g3">el que importa.</span>
          </h3>
          <p className="text-[15px] text-t2 leading-relaxed mb-7 max-w-xl">
            El retorno aritmético sobreestima el crecimiento real. El retorno geométrico (CAGR)
            refleja con precisión lo que realmente ocurre cuando reinvertís durante años.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className={`rounded-2xl p-5 border h-full ${s.highlight ? "bg-[#EDF8E8] border-g1/25" : "bg-white border-black/[.07]"}`}>
                <p className={`text-[clamp(22px,3vw,30px)] font-bold tracking-tight leading-none mb-2 ${s.highlight ? "text-g3" : "text-t1"}`}>
                  {s.value}
                </p>
                <p className="text-[12px] text-t2 leading-snug mb-1">{s.label}</p>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${s.highlight ? "bg-g3/10 text-g3" : "bg-[#F0EFE8] text-t3"}`}>
                  {s.sub}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="text-[11px] text-t3 italic mb-14">
            Fuente: NYU Stern / Aswath Damodaran, Historical Returns: Stocks, Bonds &amp; T.Bills.
            Los rendimientos pasados no garantizan resultados futuros.
          </p>
        </FadeIn>

        {/* ── Annual returns chart ──────────────────────────────────────── */}
        <FadeIn>
          <p className="section-label mb-1">Retornos anuales 1928–2025</p>
          <h3 className="text-h3 font-bold mb-3">
            La volatilidad anual es{" "}
            <span className="text-g3">real e inevitable.</span>
          </h3>
          <p className="text-[15px] text-t2 leading-relaxed mb-7 max-w-xl">
            Cada barra representa un año. El caos a corto plazo es evidente.
            La tendencia a largo plazo, también. La línea punteada muestra
            el promedio geométrico histórico de <strong>+10,02% anual</strong>.
          </p>
          <div className="bg-white border border-black/[.07] rounded-3xl p-6 mb-4">
            <div className="flex items-center gap-5 mb-5 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-sm bg-g3/80" />
                <span className="text-[12px] text-t3">Año positivo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-sm bg-warn/80" />
                <span className="text-[12px] text-t3">Año negativo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 border-t-2 border-dashed border-lila" />
                <span className="text-[12px] text-t3">Promedio geométrico (+10,02%)</span>
              </div>
            </div>
            <div className="relative w-full h-[260px]">
              <AnnualReturnsChart />
            </div>
          </div>
          <p className="text-[11px] text-t3 italic mb-14">
            Fuente: NYU Stern / Aswath Damodaran, Historical Returns: Stocks, Bonds &amp; T.Bills.
            Serie histórica del S&P 500 con dividendos. Años 1928–1956 completados con índices large cap históricos.
          </p>
        </FadeIn>

        {/* ── Rolling 15Y module ───────────────────────────────────────── */}
        <FadeIn>
          <p className="section-label mb-1">Períodos móviles de 15 años</p>
          <h3 className="text-h3 font-bold mb-3">
            ¿Qué habría pasado si invertías{" "}
            <span className="text-g3">USD 100 por mes?</span>
          </h3>
          <p className="text-[15px] text-t2 leading-relaxed mb-4 max-w-xl">
            Seleccioná un período histórico de 15 años y ve qué resultado habría dado
            una estrategia DCA de USD 100 mensuales, aplicando el CAGR real de ese período.
            Incluso en los peores momentos, el DCA redujo el impacto de la volatilidad.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#EDF8E8] border border-g1/20 rounded-xl px-4 py-2 mb-8">
            <span className="text-[12px] font-bold text-g3">
              TOTAL · Promedio histórico períodos móviles 15 años: {ROLLING_15Y_TOTAL_CAGR}%
            </span>
            <span className="text-[11px] text-g3/60">· Rendimiento SPY 1928-2025</span>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-3xl p-6 mb-4">
            <PeriodSelectorModule />
          </div>
          <p className="text-[11px] text-t3 italic mb-14">
            Fuente: Rendimiento SPY 1928-2025, cálculo de períodos móviles de 15 años.
            El valor final corresponde al dato del documento cuando está disponible;
            en caso contrario, se calcula por interpolación DCA mensual basada en el CAGR del período.
            Los rendimientos pasados no garantizan resultados futuros.
          </p>
        </FadeIn>

        {/* ── DCA + Agresivo message ────────────────────────────────────── */}
        <FadeIn>
          <div className="rounded-3xl p-8 relative overflow-hidden mb-14" style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 60% at 40% 50%, rgba(82,181,88,.09) 0%, transparent 70%)" }} />
            <div className="relative z-10 max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-g2/50 mb-4">
                Estrategia de largo plazo
              </p>
              <h3 className="text-[clamp(20px,3vw,28px)] font-bold text-white leading-[1.2] mb-5">
                Para horizontes largos, una estrategia agresiva puede{" "}
                <span className="text-g2">tener mayor sentido.</span>
              </h3>
              <p className="text-[15px] text-white/65 leading-relaxed mb-6">
                La volatilidad anual no desaparece, pero el DCA permite construir posición gradualmente
                y reducir la dependencia de un único punto de entrada. El objetivo no es evitar toda caída,
                sino <strong className="text-white/80">capturar crecimiento compuesto en el tiempo.</strong>
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { n: "10,02%", l: "CAGR geométrico 97 años" },
                  { n: "71/98",  l: "Años con retorno positivo" },
                  { n: "~6%",    l: "Prob. histórica de pérdida a 10+ años" },
                ].map(s => (
                  <div key={s.l} className="bg-white/[.05] border border-white/[.08] rounded-2xl p-4">
                    <p className="text-[22px] font-bold text-g2 tracking-tight mb-1">{s.n}</p>
                    <p className="text-[12px] text-white/50 leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Accordion ────────────────────────────────────────────────── */}
        <FadeIn>
          <p className="section-label mb-1">Más información</p>
          <h3 className="text-h3 font-bold mb-6">
            Conceptos clave de{" "}
            <span className="text-g3">esta evidencia.</span>
          </h3>
          <div className="mb-14">
            <AccordionItem q="¿Qué es el CAGR y por qué importa?">
              <p>
                CAGR (Compound Annual Growth Rate) es la tasa de crecimiento anual compuesto. Refleja
                el rendimiento anualizado de una inversión considerando la reinversión de ganancias a lo largo del tiempo.
              </p>
              <p>
                A diferencia del promedio simple, el CAGR captura el efecto del interés compuesto.
                Si una inversión sube 100% un año y cae 50% el siguiente, el promedio aritmético
                es 25%, pero el CAGR es 0% — lo que realmente ocurrió.
              </p>
            </AccordionItem>
            <AccordionItem q="¿Cuál es la diferencia entre retorno aritmético y retorno geométrico?">
              <p>
                El <strong>retorno aritmético</strong> es el promedio simple de los retornos anuales.
                Sobreestima el crecimiento real porque ignora el efecto de las pérdidas sobre el capital.
              </p>
              <p>
                El <strong>retorno geométrico</strong> (CAGR) es el rendimiento real compuesto.
                Para el S&P 500 1928–2025: aritmético 11,85%, geométrico 10,02%.
                La diferencia de ~1,8% se explica por la varianza de los retornos anuales.
                El retorno geométrico es el que usás para planificar.
              </p>
            </AccordionItem>
            <AccordionItem q="¿Qué es el DCA (Dollar Cost Averaging)?">
              <p>
                El DCA consiste en invertir un monto fijo a intervalos regulares, independientemente
                del precio del mercado. Al hacerlo, comprás más unidades cuando los precios bajan
                y menos cuando suben — reduciendo el precio promedio de adquisición en el tiempo.
              </p>
              <p>
                Su principal ventaja no es maximizar rendimientos en cada período, sino eliminar
                la necesidad de acertar el momento de entrada. La disciplina reemplaza al timing.
              </p>
            </AccordionItem>
            <AccordionItem q="¿Por qué se muestran períodos de 15 años?">
              <p>
                Los períodos de 15 años representan un horizonte mínimo razonable para
                una estrategia de inversión a largo plazo orientada al retiro. Con ese horizonte,
                la probabilidad histórica de obtener retorno positivo en el S&P 500 es
                considerablemente alta.
              </p>
              <p>
                Los períodos móviles (1928–1942, 1929–1943, etc.) permiten ver que incluso
                en diferentes condiciones de mercado, el resultado final varía significativamente
                según el punto de entrada — reforzando la importancia del DCA sistemático.
              </p>
            </AccordionItem>
            <AccordionItem q="Fuentes de datos y disclaimers">
              <p><strong>Retornos anuales del S&P 500:</strong> NYU Stern / Aswath Damodaran,
              Historical Returns: Stocks, Bonds &amp; T.Bills (damodaran.com). Serie histórica
              con dividendos incluidos. Años 1928–1956 completados con índices large cap históricos.</p>
              <p><strong>Períodos móviles de 15 años:</strong> Documento &ldquo;Rendimiento SPY 1928-2025&rdquo;,
              cálculo propio de períodos móviles con DCA mensual de USD 100.</p>
              <p><strong>Disclaimer:</strong> La información presentada tiene fines exclusivamente
              educativos y no constituye asesoramiento financiero personalizado. Los rendimientos
              pasados no garantizan resultados futuros. Toda inversión en mercados de valores
              implica riesgo de pérdida de capital.</p>
            </AccordionItem>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
