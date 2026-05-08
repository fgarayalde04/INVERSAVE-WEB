"use client";
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";
import { calcFV } from "@/lib/utils";

// ── Types ───────────────────────────────────────────────────
interface ChartPoint {
  year: number;
  contributed: number;
  total: number;
  growth: number;
  growthPct: number;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  point: ChartPoint | null;
}

// ── Generate projection data ────────────────────────────────
function buildProjection(monthly: number, years: number, rate: number): ChartPoint[] {
  const points: ChartPoint[] = [];
  for (let y = 0; y <= years; y++) {
    const contributed = monthly * y * 12;
    const total = y === 0 ? 0 : calcFV(monthly, y, rate);
    const growth = total - contributed;
    const growthPct = contributed > 0 ? (growth / contributed) * 100 : 0;
    points.push({ year: y, contributed, total, growth, growthPct });
  }
  return points;
}

// ── SVG Interactive Chart ───────────────────────────────────
function AccountChart({
  data,
  onHover,
}: {
  data: ChartPoint[];
  onHover: (p: ChartPoint | null, x: number, y: number) => void;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const W = 800, H = 260, PAD = { top: 16, right: 24, bottom: 32, left: 56 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const maxVal = Math.max(...data.map(d => d.total));
  const scaleX = (i: number) => PAD.left + (i / (data.length - 1)) * chartW;
  const scaleY = (v: number) => PAD.top + chartH - (v / maxVal) * chartH;

  const totalPath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(d.total)}`).join(" ");
  const contribPath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(d.contributed)}`).join(" ");
  const fillPath = `${totalPath} L ${scaleX(data.length - 1)} ${scaleY(0)} L ${scaleX(0)} ${scaleY(0)} Z`;
  const fillContrib = `${contribPath} L ${scaleX(data.length - 1)} ${scaleY(0)} L ${scaleX(0)} ${scaleY(0)} Z`;

  const [hoverX, setHoverX] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleRatio = W / rect.width;
    const svgX = (e.clientX - rect.left) * scaleRatio;
    const relX = svgX - PAD.left;
    const idx = Math.round((relX / chartW) * (data.length - 1));
    const clamped = Math.max(0, Math.min(data.length - 1, idx));
    setHoverX(scaleX(clamped));
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;
    onHover(data[clamped], screenX, screenY);
  }, [data, onHover, chartW, scaleX, W, PAD.left]);

  const handleMouseLeave = useCallback(() => {
    setHoverX(null);
    onHover(null, 0, 0);
  }, [onHover]);

  // Y-axis ticks
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(p => ({
    v: maxVal * p,
    y: scaleY(maxVal * p),
    label: maxVal * p >= 1000 ? `$${Math.round(maxVal * p / 1000)}k` : `$${Math.round(maxVal * p)}`,
  }));

  // X-axis ticks (years)
  const xTicks = data.filter((_, i) => i % 5 === 0);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-full cursor-crosshair select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <defs>
        <linearGradient id="gradTotal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#52B558" stopOpacity="0.28"/>
          <stop offset="100%" stopColor="#52B558" stopOpacity="0.02"/>
        </linearGradient>
        <linearGradient id="gradContrib" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B48E8" stopOpacity="0.16"/>
          <stop offset="100%" stopColor="#6B48E8" stopOpacity="0.02"/>
        </linearGradient>
      </defs>

      {/* Y-axis grid & labels */}
      {yTicks.map(t => (
        <g key={t.v}>
          <line x1={PAD.left} y1={t.y} x2={W - PAD.right} y2={t.y} stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
          <text x={PAD.left - 6} y={t.y + 4} textAnchor="end" fontSize="9" fill="rgba(255,255,255,.3)" fontFamily="Manrope,sans-serif">{t.label}</text>
        </g>
      ))}

      {/* X-axis labels */}
      {xTicks.map(d => (
        <text key={d.year} x={scaleX(d.year)} y={H - 8} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.3)" fontFamily="Manrope,sans-serif">
          {`Año ${d.year}`}
        </text>
      ))}

      {/* Fill areas */}
      <path d={fillContrib} fill="url(#gradContrib)"/>
      <path d={fillPath} fill="url(#gradTotal)"/>

      {/* Lines */}
      <path d={contribPath} fill="none" stroke="#6B48E8" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7"/>
      <path d={totalPath} fill="none" stroke="#52B558" strokeWidth="2.5"/>

      {/* Hover line */}
      {hoverX !== null && (
        <line x1={hoverX} y1={PAD.top} x2={hoverX} y2={H - PAD.bottom} stroke="rgba(255,255,255,.2)" strokeWidth="1" strokeDasharray="3 2"/>
      )}
    </svg>
  );
}

// ── Allocation bar ──────────────────────────────────────────
function AllocBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-[12px] mb-1.5">
        <span className="text-white/60">{label}</span>
        <span className="text-white font-semibold">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[.08]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

// ── Format ──────────────────────────────────────────────────
function fmtUSD(n: number) {
  if (n >= 1_000_000) return `USD ${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000)     return `USD ${Math.round(n / 1000)}k`;
  return `USD ${Math.round(n)}`;
}

// ── Main component ──────────────────────────────────────────
export default function AccountDashboard() {
  const [monthly, setMonthly] = useState(500);
  const [years,   setYears]   = useState(25);
  const [rate,    setRate]     = useState(8);
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, x: 0, y: 0, point: null });

  const data = buildProjection(monthly, years, rate);
  const lastPoint = data[data.length - 1];

  const handleHover = useCallback((p: ChartPoint | null, x: number, y: number) => {
    setTooltip(p ? { visible: true, x, y, point: p } : { visible: false, x: 0, y: 0, point: null });
  }, []);

  return (
    <section id="cuenta" className="py-24 px-6" style={{ background: "linear-gradient(160deg,#0C1A11 0%,#0F2118 60%,#0A160E 100%)" }}>
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="section-label-lt mb-3">Vista de cuenta</p>
          <h2 className="text-h2 font-bold text-white mb-4">
            Así luce tu cuenta{" "}
            <span className="text-g2">en el tiempo.</span>
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-xl mb-12">
            Ajustá los parámetros y observá cómo crece tu patrimonio mes a mes.
            Pasá el cursor sobre el gráfico para ver cada año en detalle.
          </p>
        </FadeIn>

        {/* Main dashboard card */}
        <FadeIn>
          <div className="rounded-3xl border border-white/[.08] overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
            {/* Top bar */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-white/[.06]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-g3 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 9.5 L4.5 5.5 L7 8 L10 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[14px] font-bold text-white tracking-[-0.01em]">INVERSAVE</span>
                <span className="text-[11px] text-white/30 border border-white/[.12] rounded-full px-2.5 py-0.5">Cuenta personal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-g1 animate-pulse"/>
                <span className="text-[12px] text-white/40">Activa</span>
              </div>
            </div>

            {/* Sliders row */}
            <div className="grid grid-cols-3 gap-6 px-7 py-5 border-b border-white/[.06]">
              {[
                { label: "Aporte mensual", val: monthly, set: setMonthly, min: 100, max: 5000, step: 50, fmt: (v: number) => `USD ${v.toLocaleString("es-UY")}` },
                { label: "Horizonte", val: years, set: setYears, min: 5, max: 40, step: 1, fmt: (v: number) => `${v} años` },
                { label: "Rendimiento anual", val: rate, set: setRate, min: 4, max: 12, step: 0.5, fmt: (v: number) => `${v}%` },
              ].map(s => (
                <div key={s.label}>
                  <div className="flex justify-between text-[11px] mb-2">
                    <span className="text-white/40">{s.label}</span>
                    <motion.span key={s.val} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white font-semibold">
                      {s.fmt(s.val)}
                    </motion.span>
                  </div>
                  <input
                    type="range" min={s.min} max={s.max} step={s.step} value={s.val}
                    onChange={e => s.set(+e.target.value)}
                    className="w-full" style={{ accentColor: "#52B558" }}
                  />
                </div>
              ))}
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border-b border-white/[.06]" style={{ background: "rgba(255,255,255,.06)" }}>
              {[
                { label: "Valor estimado", value: fmtUSD(lastPoint.total), accent: true },
                { label: "Total aportado", value: fmtUSD(lastPoint.contributed), accent: false },
                { label: "Ganancia generada", value: fmtUSD(lastPoint.growth), accent: false },
                { label: "Multiplicador", value: `×${(lastPoint.total / Math.max(lastPoint.contributed, 1)).toFixed(1)}`, accent: true },
              ].map(k => (
                <div key={k.label} className="px-5 py-5" style={{ background: "#0C1A11" }}>
                  <p className="text-[11px] text-white/35 mb-1.5">{k.label}</p>
                  <motion.p key={k.value} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-[clamp(16px,2.5vw,22px)] font-bold tracking-tight ${k.accent ? "text-g2" : "text-white/80"}`}>
                    {k.value}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="relative px-7 py-6">
              {/* Legend */}
              <div className="flex gap-5 mb-4">
                {[
                  { color: "#52B558", label: "Capital total", dashed: false },
                  { color: "#6B48E8", label: "Total aportado", dashed: true },
                ].map(l => (
                  <span key={l.label} className="flex items-center gap-1.5 text-[11px] text-white/40">
                    <span className="inline-block w-5 h-px" style={{ background: l.color, ...(l.dashed ? { backgroundImage: `repeating-linear-gradient(90deg,${l.color} 0,${l.color} 5px,transparent 5px,transparent 8px)`, background: "none" } : {}) }}/>
                    {l.label}
                  </span>
                ))}
              </div>

              <div className="relative h-[200px] sm:h-[260px]">
                <AccountChart data={data} onHover={handleHover} />

                {/* Tooltip */}
                {tooltip.visible && tooltip.point && (
                  <div
                    className="absolute z-20 pointer-events-none"
                    style={{
                      left: Math.min(tooltip.x + 14, 260),
                      top: Math.max(tooltip.y - 80, 0),
                    }}
                  >
                    <div className="bg-white rounded-2xl px-4 py-3 shadow-xl border border-black/[.07] min-w-[160px]">
                      <p className="text-[11px] font-bold text-t3 tracking-[0.08em] uppercase mb-2">Año {tooltip.point.year}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between gap-4">
                          <span className="text-[12px] text-t3">Aportado</span>
                          <span className="text-[12px] font-semibold text-t1">{fmtUSD(tooltip.point.contributed)}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-[12px] text-t3">Capital</span>
                          <span className="text-[12px] font-bold text-g3">{fmtUSD(tooltip.point.total)}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-[12px] text-t3">Ganancia</span>
                          <span className="text-[12px] font-semibold text-g3">+{fmtUSD(tooltip.point.growth)}</span>
                        </div>
                        <div className="border-t border-black/[.07] pt-1 mt-1 flex justify-between gap-4">
                          <span className="text-[12px] text-t3">Crecimiento</span>
                          <span className="text-[12px] font-bold text-g3">+{Math.round(tooltip.point.growthPct)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom: allocation + stats */}
            <div className="grid sm:grid-cols-2 gap-px border-t border-white/[.06]" style={{ background: "rgba(255,255,255,.06)" }}>
              {/* Allocation */}
              <div className="px-7 py-6" style={{ background: "#0C1A11" }}>
                <p className="text-[11px] text-white/35 tracking-[0.1em] uppercase mb-5">Asignación</p>
                <AllocBar label="Renta variable global (ETFs)" pct={80} color="#52B558"/>
                <AllocBar label="Renta fija / Bonos" pct={15} color="#6B48E8"/>
                <AllocBar label="Liquidez" pct={5} color="rgba(255,255,255,.3)"/>
              </div>
              {/* Stats */}
              <div className="px-7 py-6" style={{ background: "#0C1A11" }}>
                <p className="text-[11px] text-white/35 tracking-[0.1em] uppercase mb-5">Detalles</p>
                {[
                  { label: "Retiro mensual estimado", value: fmtUSD(lastPoint.total * (rate / 100 / 12)) },
                  { label: "Aporte total en el período", value: fmtUSD(lastPoint.contributed) },
                  { label: "Retorno sobre aportado", value: `+${Math.round(lastPoint.growthPct)}%` },
                ].map(s => (
                  <div key={s.label} className="flex justify-between items-baseline py-2.5 border-b border-white/[.06] last:border-none">
                    <span className="text-[13px] text-white/40">{s.label}</span>
                    <motion.span key={s.value} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[14px] font-semibold text-white">
                      {s.value}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="px-7 py-4 border-t border-white/[.06]">
              <p className="text-[11px] text-white/20 italic">
                Proyección ilustrativa basada en tasa fija y aporte constante. Los rendimientos pasados no garantizan resultados futuros. Toda inversión implica riesgos.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
