"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui";
import { SimLineChart } from "@/components/charts/Charts";
import { fmt, calcMonthlyRetirement } from "@/lib/utils";
import { useLeadModal } from "@/context/ModalContext";

// ── Insight text ─────────────────────────────────────────────
function getInsight(edad: number, years: number): string {
  if (edad <= 28)
    return "Tu mayor ventaja es el tiempo. Empezar hoy puede multiplicar cada peso que aportés.";
  if (edad <= 35)
    return "Estás en el momento ideal para construir las bases de tu patrimonio de retiro.";
  if (edad <= 42)
    return "El interés compuesto sigue de tu lado. Cada aporte ahora trabaja más fuerte de lo que imaginás.";
  if (edad <= 50)
    return `Aún tenés ${years} años de crecimiento compuesto por delante. La constancia hace la diferencia.`;
  return "La planificación importa en todas las etapas. Un asesor puede ayudarte a maximizar lo que ya construiste.";
}

// ── PDF generation (unchanged) ───────────────────────────────
async function downloadPdf(params: {
  edad: number; monthly: number; capitalInicial: number;
  years: number; rate: number; inflacion: number;
  fvTotal: number; capitalReal: number; totalAportado: number;
  intereses: number; sinInvertir: number;
}) {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210;
  const VERDE: [number, number, number] = [26, 102, 56];
  const VERDE_L: [number, number, number] = [143, 217, 154];
  const LILA: [number, number, number] = [107, 72, 232];
  const WARN: [number, number, number] = [181, 69, 30];
  const DARK: [number, number, number] = [12, 26, 17];
  const GRAY: [number, number, number] = [120, 120, 120];
  const BG: [number, number, number] = [248, 246, 240];

  doc.setFillColor(...DARK);
  doc.rect(0, 0, W, 52, "F");
  doc.setFillColor(...VERDE);
  doc.rect(0, 52, W, 2, "F");
  doc.setFillColor(...VERDE);
  doc.roundedRect(16, 14, 9, 9, 1.5, 1.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22); doc.setFont("helvetica", "bold");
  doc.text("INVERSAVE", 30, 22);
  doc.setFontSize(10); doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 220, 200);
  doc.text("Proyección personalizada de ahorro · Roble Capital Wealth Management", 30, 31);
  doc.setFontSize(8.5); doc.setTextColor(120, 160, 120);
  doc.text(`Generado el ${new Date().toLocaleDateString("es-UY", { day: "2-digit", month: "long", year: "numeric" })}`, 30, 39);
  doc.text(`Perfil: ${params.edad} años · USD ${params.monthly}/mes · ${params.years} años · ${params.rate}% anual`, 30, 46);

  let y = 62;
  const cards = [
    { label: "Capital proyectado", value: fmt(params.fvTotal), fill: [237, 248, 232] as [number, number, number], color: VERDE },
    { label: "Capital real (vs inflación)", value: fmt(params.capitalReal), fill: BG, color: DARK },
    { label: "Diferencia vs no invertir", value: "+" + fmt(params.fvTotal - params.sinInvertir), fill: BG, color: VERDE },
  ];
  const cw = 56, gap = 5, cx0 = 20;
  cards.forEach((c, i) => {
    const cx = cx0 + i * (cw + gap);
    doc.setFillColor(...c.fill);
    doc.roundedRect(cx, y, cw, 28, 3, 3, "F");
    doc.setFontSize(7.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
    doc.text(c.label, cx + 4, y + 8, { maxWidth: cw - 6 });
    doc.setFontSize(11); doc.setFont("helvetica", "bold"); doc.setTextColor(...c.color);
    doc.text(c.value, cx + 4, y + 20, { maxWidth: cw - 6 });
  });
  y += 36;

  doc.setFontSize(11); doc.setFont("helvetica", "bold"); doc.setTextColor(...DARK);
  doc.text("¿Cómo se compone tu capital?", 20, y); y += 6;
  doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
  doc.text("Aportes realizados vs rendimiento generado por el interés compuesto", 20, y); y += 8;

  const barW = 170, barH = 14;
  const aportPct = Math.min(params.totalAportado / params.fvTotal, 1);
  const rendPct = 1 - aportPct;
  doc.setFillColor(...BG); doc.roundedRect(20, y, barW, barH, 3, 3, "F");
  const aw = Math.round(barW * aportPct);
  doc.setFillColor(107, 72, 232); doc.roundedRect(20, y, aw, barH, 3, 3, "F");
  doc.setFillColor(...VERDE); doc.rect(20 + aw - 3, y, Math.max(barW * rendPct, 6), barH, "F");
  doc.roundedRect(20, y, barW, barH, 3, 3, "S");
  doc.setDrawColor(0, 0, 0, 0);
  doc.setFontSize(7.5); doc.setFont("helvetica", "bold"); doc.setTextColor(255, 255, 255);
  if (aw > 40) doc.text(`Aportado ${(aportPct * 100).toFixed(0)}%`, 24, y + 9);
  if (barW * rendPct > 40) doc.text(`Rendimiento ${(rendPct * 100).toFixed(0)}%`, 20 + aw + 4, y + 9);
  y += barH + 4;

  doc.setFillColor(107, 72, 232); doc.rect(20, y, 8, 4, "F");
  doc.setFontSize(7.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
  doc.text(`Total aportado: ${fmt(params.totalAportado)}`, 30, y + 3.5);
  doc.setFillColor(...VERDE); doc.rect(110, y, 8, 4, "F");
  doc.text(`Rendimiento: ${fmt(params.intereses)}`, 120, y + 3.5);
  y += 12;

  doc.setFontSize(11); doc.setFont("helvetica", "bold"); doc.setTextColor(...DARK);
  doc.text("Evolución del capital en el tiempo", 20, y); y += 6;

  const chartH = 42, chartW = 170, chartX = 20, chartY = y;
  doc.setFillColor(...BG); doc.roundedRect(chartX, chartY, chartW, chartH, 3, 3, "F");

  const r = params.rate / 100 / 12;
  const nPts = Math.min(params.years, 40);
  const pts: [number, number][] = [];
  let maxV = 0;
  for (let yy = 0; yy <= nPts; yy++) {
    const mo = yy * 12;
    const fvPMT = r > 0 ? params.monthly * ((Math.pow(1 + r, mo) - 1) / r) : params.monthly * mo;
    const fvCap = params.capitalInicial * Math.pow(1 + r, mo);
    const v = fvPMT + fvCap;
    pts.push([yy, v]);
    if (v > maxV) maxV = v;
  }

  const px = (yy: number) => chartX + 8 + (yy / nPts) * (chartW - 16);
  const py = (v: number) => chartY + chartH - 6 - ((v / (maxV || 1)) * (chartH - 14));

  for (let i = 0; i < pts.length - 1; i++) {
    const [y0, v0] = pts[i], [y1, v1] = pts[i + 1];
    const x0 = px(y0), x1 = px(y1), yTop = Math.min(py(v0), py(v1));
    const yBot = chartY + chartH - 6;
    doc.setFillColor(143, 217, 154);
    doc.setGState(doc.GState({ opacity: 0.15 }));
    doc.rect(x0, yTop, x1 - x0, yBot - yTop, "F");
    doc.setGState(doc.GState({ opacity: 1 }));
  }

  doc.setDrawColor(...VERDE); doc.setLineWidth(1.2);
  for (let i = 0; i < pts.length - 1; i++) {
    const [y0, v0] = pts[i], [y1, v1] = pts[i + 1];
    doc.line(px(y0), py(v0), px(y1), py(v1));
  }

  doc.setDrawColor(107, 72, 232); doc.setLineDashPattern([2, 2], 0); doc.setLineWidth(0.8);
  for (let i = 0; i < pts.length - 1; i++) {
    const [y0] = pts[i], [y1] = pts[i + 1];
    const a0 = params.monthly * y0 * 12 + params.capitalInicial;
    const a1 = params.monthly * y1 * 12 + params.capitalInicial;
    doc.line(px(y0), py(Math.min(a0, maxV)), px(y1), py(Math.min(a1, maxV)));
  }
  doc.setLineDashPattern([], 0);

  doc.setFontSize(6.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
  [0, Math.round(nPts / 4), Math.round(nPts / 2), Math.round(3 * nPts / 4), nPts].forEach(yy => {
    doc.text(`Año ${yy}`, px(yy), chartY + chartH - 1, { align: "center" });
  });
  doc.setFontSize(7); doc.setFont("helvetica", "bold"); doc.setTextColor(...VERDE);
  doc.text(fmt(params.fvTotal), chartX + chartW - 4, py(params.fvTotal) - 2, { align: "right" });

  y = chartY + chartH + 8;

  const miniCards = [
    { label: "Total aportado", value: fmt(params.totalAportado), color: LILA },
    { label: "Rendimiento generado", value: fmt(params.intereses), color: VERDE },
    { label: "Si guardás el efectivo", value: fmt(params.sinInvertir), color: WARN },
    { label: "Retiro mensual estimado", value: fmt(Math.round(params.fvTotal * (params.rate / 100 / 12))), color: VERDE },
  ];
  const mcw = 39;
  miniCards.forEach((c, i) => {
    const mx = 20 + i * (mcw + 4);
    doc.setFillColor(...BG); doc.roundedRect(mx, y, mcw, 22, 2, 2, "F");
    doc.setFontSize(6.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
    doc.text(c.label, mx + 3, y + 7, { maxWidth: mcw - 4 });
    doc.setFontSize(9); doc.setFont("helvetica", "bold"); doc.setTextColor(...c.color);
    doc.text(c.value, mx + 3, y + 17, { maxWidth: mcw - 4 });
  });
  y += 30;

  doc.setFillColor(237, 248, 232); doc.roundedRect(20, y, 170, 20, 3, 3, "F");
  doc.setFontSize(8.5); doc.setFont("helvetica", "italic"); doc.setTextColor(...VERDE);
  doc.text(getInsight(params.edad, params.years), 24, y + 8, { maxWidth: 162 });
  y += 26;

  doc.setFillColor(...BG); doc.roundedRect(20, y, 170, 20, 2, 2, "F");
  doc.setFontSize(7.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
  doc.text(
    "Las simulaciones son ilustrativas. Los rendimientos pasados no garantizan resultados futuros. La tasa estimada se utiliza únicamente como ejemplo educativo. Toda inversión implica riesgo de pérdida de capital.",
    24, y + 6, { maxWidth: 162 }
  );
  y += 26;

  doc.setFillColor(...DARK); doc.rect(0, 282, W, 15, "F");
  doc.setFontSize(7.5); doc.setFont("helvetica", "normal"); doc.setTextColor(120, 160, 120);
  doc.text("INVERSAVE · Roble Capital Wealth Management · Regulado BCU Uruguay", 20, 290);
  doc.text("Dominion Capital Strategies Limited · Guernsey FSC", W - 20, 290, { align: "right" });

  doc.save(`inversave-proyeccion-${params.years}a.pdf`);
}

// ── Slider helper ─────────────────────────────────────────────
function Slider({
  label,
  microcopy,
  value,
  display,
  min, max, step,
  onChange,
}: {
  label: string;
  microcopy: string;
  value: number;
  display: string;
  min: number; max: number; step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-[14px] font-semibold text-t1">{label}</span>
        <motion.span
          key={display}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="text-[18px] font-bold text-g3 tabular-nums"
        >
          {display}
        </motion.span>
      </div>
      <p className="text-[11px] text-t3 mb-3 leading-snug">{microcopy}</p>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={e => onChange(+e.target.value)}
        className="w-full"
      />
      <div className="flex justify-between text-[10px] text-t3/50 mt-1.5">
        <span>{min}{label === "Aporte mensual" ? "" : label.includes("años") || label.includes("Años") ? " años" : label === "Edad actual" ? " años" : ""}{label === "Aporte mensual" ? "" : ""}</span>
        <span>{max}{label === "Edad actual" ? " años" : label === "Años de inversión" ? " años" : label === "Rentabilidad estimada" ? "%" : label === "Inflación estimada" ? "%" : ""}</span>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function SimuladorSection() {
  const { openModal } = useLeadModal();
  const [monthly, setMonthly] = useState(200);
  const [years, setYears] = useState(20);
  const [edad, setEdad] = useState(30);
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [rate, setRate] = useState(8);
  const [inflacion, setInflacion] = useState(4);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // ── Core calculations ──────────────────────────────────────
  const r = rate / 100 / 12;
  const n = years * 12;
  const fvPMT = r > 0 ? monthly * ((Math.pow(1 + r, n) - 1) / r) : monthly * n;
  const fvCapital = capitalInicial * Math.pow(1 + r, n);
  const fvTotal = fvPMT + fvCapital;
  const totalAportado = monthly * n + capitalInicial;
  const intereses = fvTotal - totalAportado;
  const multiplier = fvTotal / Math.max(totalAportado, 1);
  const capitalReal = fvTotal / Math.pow(1 + inflacion / 100, years);
  const sinInvertir = totalAportado / Math.pow(1 + inflacion / 100, years);
  const ret = calcMonthlyRetirement(fvTotal, 20, rate);
  const insight = getInsight(edad, years);

  // Composition
  const aportPct = Math.min((totalAportado / Math.max(fvTotal, 1)) * 100, 100);
  const rendPct = 100 - aportPct;

  // 5-year delay comparison
  const years5 = Math.max(1, years - 5);
  const n5 = years5 * 12;
  const fvPMT5 = r > 0 ? monthly * ((Math.pow(1 + r, n5) - 1) / r) : monthly * n5;
  const fvTotal5 = fvPMT5 + capitalInicial * Math.pow(1 + r, n5);
  const diff5 = fvTotal - fvTotal5;

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadPdf({ edad, monthly, capitalInicial, years, rate, inflacion, fvTotal, capitalReal, totalAportado, intereses, sinInvertir });
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="sim" className="py-16 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-6xl mx-auto">

        {/* ── Primary sliders ── */}
        <FadeIn>
          <div className="grid sm:grid-cols-3 gap-x-10 gap-y-8 bg-white border border-black/[.07] rounded-3xl p-8 mb-4">
            <Slider
              label="Aporte mensual"
              microcopy="Lo que aportás cada mes. USD 150 es el mínimo del plan."
              value={monthly}
              display={`USD ${monthly.toLocaleString("es-UY")}`}
              min={50} max={5000} step={50}
              onChange={setMonthly}
            />
            <Slider
              label="Años de inversión"
              microcopy="Tu horizonte. A más tiempo, más potente el interés compuesto."
              value={years}
              display={`${years} años`}
              min={3} max={45} step={1}
              onChange={setYears}
            />
            <Slider
              label="Edad actual"
              microcopy="Personaliza tu proyección e insight."
              value={edad}
              display={`${edad} años`}
              min={18} max={65} step={1}
              onChange={setEdad}
            />
          </div>
        </FadeIn>

        {/* ── Advanced toggle ── */}
        <FadeIn>
          <div className="mb-8">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-[13px] font-semibold text-t3 hover:text-t1 transition-colors py-2"
            >
              <motion.svg
                animate={{ rotate: showAdvanced ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                width="14" height="14" viewBox="0 0 14 14" fill="none"
              >
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
              {showAdvanced ? "Ocultar parámetros avanzados" : "Ajustar parámetros avanzados"}
              <span className="text-[11px] font-normal text-t3/60">(capital inicial, tasa, inflación)</span>
            </button>

            <AnimatePresence>
              {showAdvanced && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="grid sm:grid-cols-3 gap-x-10 gap-y-8 bg-white border border-black/[.07] rounded-3xl p-8 mt-3">
                    <Slider
                      label="Capital inicial"
                      microcopy="Si ya tenés ahorros para invertir desde el primer día."
                      value={capitalInicial}
                      display={`USD ${capitalInicial.toLocaleString("es-UY")}`}
                      min={0} max={50000} step={500}
                      onChange={setCapitalInicial}
                    />
                    <Slider
                      label="Rentabilidad estimada"
                      microcopy="8% es la referencia histórica del S&P 500 ajustada a largo plazo."
                      value={rate}
                      display={`${rate}%`}
                      min={2} max={15} step={0.5}
                      onChange={setRate}
                    />
                    <Slider
                      label="Inflación estimada"
                      microcopy="Para calcular el poder real de compra de tu capital futuro."
                      value={inflacion}
                      display={`${inflacion}%`}
                      min={1} max={10} step={0.5}
                      onChange={setInflacion}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* ── Results + Chart ── */}
        <div className="grid lg:grid-cols-[5fr_6fr] gap-6 mb-6">

          {/* LEFT: KPI cards */}
          <FadeIn>
            <div className="flex flex-col gap-4 h-full">

              {/* Main KPI — dark card */}
              <div className="bg-g4 rounded-3xl p-7 flex-shrink-0">
                <p className="text-[10px] text-white/30 tracking-[0.12em] font-bold uppercase mb-5">
                  Tu proyección estimada
                </p>

                <div className="text-center mb-6 pb-6 border-b border-white/[.07]">
                  <p className="text-[12px] text-white/40 mb-2">Capital acumulado</p>
                  <motion.p
                    key={`${fvTotal}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[clamp(30px,5vw,50px)] font-bold text-g2 tracking-tight leading-none"
                  >
                    {fmt(fvTotal)}
                  </motion.p>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-g1/15 border border-g1/20 rounded-full px-4 py-1.5">
                    <motion.span key={multiplier.toFixed(1)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] font-bold text-g2">
                      {multiplier.toFixed(1)}× lo aportado
                    </motion.span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Total aportado", value: fmt(totalAportado), color: "text-white/65" },
                    { label: "Rendimiento generado", value: fmt(intereses), color: "text-g2" },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span className="text-[13px] text-white/40">{row.label}</span>
                      <motion.span key={row.value} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-[14px] font-semibold ${row.color}`}>
                        {row.value}
                      </motion.span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 border-t border-white/[.07]">
                    <div>
                      <span className="text-[12px] text-white/40 block">Retiro mensual estimado</span>
                      <span className="text-[10px] text-white/20">A 20 años de retiro</span>
                    </div>
                    <motion.span key={`${ret}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[20px] font-bold text-g2 tracking-tight">
                      {fmt(ret)}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Composition bar */}
              <div className="bg-white border border-black/[.07] rounded-2xl p-5">
                <p className="text-[11px] font-bold text-t3 uppercase tracking-[0.09em] mb-4">
                  Composición del capital
                </p>
                <div className="h-4 rounded-full overflow-hidden flex mb-3">
                  <motion.div
                    className="h-full"
                    animate={{ width: `${aportPct}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ background: "#6B48E8" }}
                  />
                  <motion.div
                    className="h-full"
                    animate={{ width: `${rendPct}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ background: "#52B558" }}
                  />
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: "#6B48E8" }} />
                    <span className="text-t2">Aportado <strong>{aportPct.toFixed(0)}%</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-t2">Rendimiento <strong>{rendPct.toFixed(0)}%</strong></span>
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: "#52B558" }} />
                  </div>
                </div>
                <p className="text-[10px] text-t3/50 mt-2 italic leading-snug">
                  A mayor horizonte, el rendimiento compuesto representa una proporción mayor del capital total.
                </p>
              </div>

              {/* Real vs sin invertir */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#EDF8E8] border border-g1/15 rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-bold text-g3 uppercase tracking-[0.08em] mb-2">
                    Capital real
                  </p>
                  <motion.p key={`${capitalReal}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[16px] font-bold text-g3 tracking-tight">
                    {fmt(capitalReal)}
                  </motion.p>
                  <p className="text-[10px] text-t3 mt-1">Poder adquisitivo hoy</p>
                </div>
                <div className="bg-[#FEF0EC] border border-warn/15 rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-bold text-warn uppercase tracking-[0.08em] mb-2">
                    Sin invertir
                  </p>
                  <motion.p key={`${sinInvertir}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[16px] font-bold text-warn tracking-tight">
                    {fmt(sinInvertir)}
                  </motion.p>
                  <p className="text-[10px] text-t3 mt-1">Si guardás el efectivo</p>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* RIGHT: Line chart */}
          <FadeIn delay={0.1}>
            <div className="bg-white border border-black/[.07] rounded-3xl p-6 h-full flex flex-col">
              <div className="mb-5">
                <p className="text-[11px] font-bold text-t3 uppercase tracking-[0.09em] mb-1">
                  Evolución del capital
                </p>
                <div className="flex items-center gap-5 text-[12px] text-t3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-0.5 rounded-full" style={{ background: "#52B558" }} />
                    <span>Capital total</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-0.5 rounded-full" style={{ background: "#6B48E8", opacity: 0.5 }} />
                    <span>Solo aportes</span>
                  </div>
                </div>
              </div>
              <div className="flex-1" style={{ minHeight: 260 }}>
                <SimLineChart
                  monthly={monthly}
                  years={years}
                  rate={rate}
                  capitalInicial={capitalInicial}
                />
              </div>
              <p className="text-[10px] text-t3/50 italic mt-3 text-center">
                El área entre las dos curvas es el rendimiento generado por el interés compuesto.
              </p>
            </div>
          </FadeIn>

        </div>

        {/* ── Comparison: start now vs 5 years later ── */}
        <FadeIn delay={0.15}>
          <div className="bg-white border border-black/[.07] rounded-3xl p-8 mb-6">
            <p className="section-label-muted mb-1">El valor del tiempo</p>
            <h3 className="text-[clamp(18px,2.5vw,26px)] font-bold text-t1 mb-2">
              ¿Qué pasa si esperás 5 años para empezar?
            </h3>
            <p className="text-[14px] text-t2 mb-7 max-w-xl leading-relaxed">
              Con el mismo aporte mensual, mismo horizonte y misma tasa — la única diferencia es cuándo empezás.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-[#EDF8E8] border border-g1/15 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-g3" />
                  <p className="text-[12px] font-bold text-g3 uppercase tracking-[0.08em]">Si empezás hoy</p>
                </div>
                <p className="text-[12px] text-t3 mb-3">{years} años de inversión · USD {monthly}/mes</p>
                <motion.p key={`${fvTotal}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[clamp(22px,3vw,32px)] font-bold text-g3 tracking-tight">
                  {fmt(fvTotal)}
                </motion.p>
              </div>
              <div className="bg-[#FEF0EC] border border-warn/15 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-warn" />
                  <p className="text-[12px] font-bold text-warn uppercase tracking-[0.08em]">Si esperás 5 años</p>
                </div>
                <p className="text-[12px] text-t3 mb-3">{years5} años de inversión · USD {monthly}/mes</p>
                <motion.p key={`${fvTotal5}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[clamp(22px,3vw,32px)] font-bold text-warn tracking-tight">
                  {fmt(fvTotal5)}
                </motion.p>
              </div>
            </div>

            <div className="bg-[#F8F6F0] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-[12px] text-t3 mb-1">Costo de esperar 5 años</p>
                <motion.p key={`${diff5}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[clamp(20px,3vw,28px)] font-bold text-warn tracking-tight">
                  -{fmt(diff5)}
                </motion.p>
              </div>
              <p className="text-[13px] text-t2 max-w-xs leading-relaxed text-right">
                El interés compuesto trabaja exponencialmente.
                Cada año de espera tiene un costo real que no se recupera.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Insight ── */}
        <FadeIn delay={0.18}>
          <motion.div
            key={insight}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 bg-[#EDF8E8] border border-g1/15 rounded-2xl px-6 py-4 mb-6"
          >
            <svg className="flex-shrink-0 mt-0.5 text-g3" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6.5 12.5L11.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7.5 14.5L10.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9 4L9 5M5.8 5.8L6.5 6.5M12.2 5.8L11.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="text-[13px] text-g4 leading-relaxed italic">{insight}</p>
          </motion.div>
        </FadeIn>

        {/* ── CTAs ── */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <Link
              href="/dominion"
              className="btn-primary flex-1 justify-center text-[15px] py-4"
            >
              Conocé el plan
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex-1 flex items-center justify-center gap-2 text-[14px] font-semibold text-t2 border border-black/[.12] rounded-full py-4 hover:bg-white hover:border-black/[.22] transition-all cursor-pointer disabled:opacity-50 bg-white"
            >
              {downloading ? (
                <>
                  <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="18 8" />
                  </svg>
                  Generando PDF...
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v7M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Descargar proyección PDF
                </>
              )}
            </button>
            <button
              onClick={() => openModal("simulador")}
              className="sm:flex-none flex items-center justify-center gap-2 text-[14px] font-semibold text-t2 border border-black/[.12] rounded-full px-6 py-4 hover:bg-white hover:border-black/[.22] transition-all cursor-pointer bg-white"
            >
              Hablar con un asesor
            </button>
          </div>
        </FadeIn>

        {/* ── Disclaimer ── */}
        <FadeIn delay={0.22}>
          <div className="border border-black/[.06] rounded-2xl px-6 py-5 bg-white">
            <p className="text-[11px] font-bold text-t3 uppercase tracking-[0.09em] mb-2">
              Aviso importante
            </p>
            <p className="text-[11px] text-t3/70 leading-relaxed">
              La simulación es estimativa e ilustrativa. No garantiza resultados futuros. Los rendimientos pueden variar significativamente.
              Toda inversión implica riesgos, incluyendo la posible pérdida del capital invertido.
              Los rendimientos pasados no son garantía de rendimientos futuros.
              Esta información tiene fines exclusivamente educativos y no constituye asesoramiento financiero personalizado ni recomendación de inversión.
              La tasa de rendimiento utilizada como referencia es una estimación basada en datos históricos y puede no reflejar el rendimiento real de ningún instrumento financiero.
              Consultá con un asesor regulado antes de tomar decisiones de inversión.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
