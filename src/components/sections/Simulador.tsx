"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";
import { SimChart } from "@/components/charts/Charts";
import { fmt, calcFV, calcMonthlyRetirement } from "@/lib/utils";
import { useLeadModal } from "@/context/ModalContext";

function getInsight(edad: number, years: number): string {
  if (edad <= 28) return "Tu mayor ventaja es el tiempo. Empezar hoy puede multiplicar cada peso que aportés.";
  if (edad <= 35) return "Estás en el momento ideal para construir las bases de tu patrimonio de retiro.";
  if (edad <= 42) return "El interés compuesto sigue de tu lado. Cada aporte ahora trabaja más fuerte de lo que imaginás.";
  if (edad <= 50) return `Aún tenés ${years} años de crecimiento compuesto por delante. La constancia hace la diferencia.`;
  return "La planificación importa en todas las etapas. Un asesor puede ayudarte a maximizar lo que ya construiste.";
}

async function downloadPdf(params: {
  edad: number; monthly: number; capitalInicial: number;
  years: number; rate: number; inflacion: number;
  fvTotal: number; capitalReal: number; totalAportado: number;
  intereses: number; sinInvertir: number;
}) {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210;
  const VERDE: [number,number,number] = [26, 102, 56];
  const VERDE_L: [number,number,number] = [143, 217, 154];
  const LILA: [number,number,number] = [107, 72, 232];
  const WARN: [number,number,number] = [181, 69, 30];
  const DARK: [number,number,number] = [12, 26, 17];
  const GRAY: [number,number,number] = [120, 120, 120];
  const BG: [number,number,number] = [248, 246, 240];

  // ── Header ─────────────────────────────────────────────
  doc.setFillColor(...DARK);
  doc.rect(0, 0, W, 52, "F");
  // Glow accent line
  doc.setFillColor(...VERDE);
  doc.rect(0, 52, W, 2, "F");
  // Logo mark
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

  // ── 3 KPI cards ────────────────────────────────────────
  let y = 62;
  const cards = [
    { label: "Capital proyectado", value: fmt(params.fvTotal), fill: [237,248,232] as [number,number,number], color: VERDE },
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

  // ── Aportes vs Rendimiento bar ─────────────────────────
  doc.setFontSize(11); doc.setFont("helvetica", "bold"); doc.setTextColor(...DARK);
  doc.text("¿Cómo se compone tu capital?", 20, y); y += 6;
  doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
  doc.text("Aportes realizados vs rendimiento generado por el interés compuesto", 20, y); y += 8;

  const barW = 170, barH = 14;
  const aportPct = Math.min(params.totalAportado / params.fvTotal, 1);
  const rendPct = 1 - aportPct;
  // Background
  doc.setFillColor(...BG); doc.roundedRect(20, y, barW, barH, 3, 3, "F");
  // Aportes segment
  const aw = Math.round(barW * aportPct);
  doc.setFillColor(107, 72, 232); doc.roundedRect(20, y, aw, barH, 3, 3, "F");
  // Rendimiento segment
  doc.setFillColor(...VERDE); doc.rect(20 + aw - 3, y, Math.max(barW * rendPct, 6), barH, "F");
  doc.roundedRect(20, y, barW, barH, 3, 3, "S"); // stroke
  doc.setDrawColor(0,0,0,0);
  // Labels
  doc.setFontSize(7.5); doc.setFont("helvetica", "bold"); doc.setTextColor(255,255,255);
  if (aw > 40) doc.text(`Aportado ${(aportPct * 100).toFixed(0)}%`, 24, y + 9);
  if (barW * rendPct > 40) doc.text(`Rendimiento ${(rendPct * 100).toFixed(0)}%`, 20 + aw + 4, y + 9);
  y += barH + 4;

  // Legend
  doc.setFillColor(107,72,232); doc.rect(20, y, 8, 4, "F");
  doc.setFontSize(7.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
  doc.text(`Total aportado: ${fmt(params.totalAportado)}`, 30, y + 3.5);
  doc.setFillColor(...VERDE); doc.rect(110, y, 8, 4, "F");
  doc.text(`Rendimiento: ${fmt(params.intereses)}`, 120, y + 3.5);
  y += 12;

  // ── Mini growth chart ──────────────────────────────────
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

  // Fill area
  doc.setFillColor(143, 217, 154, 0.3);
  const polyPts: number[] = [];
  pts.forEach(([yy, v]) => { polyPts.push(px(yy), py(v)); });
  polyPts.push(px(nPts), chartY + chartH - 6, px(0), chartY + chartH - 6);
  // Approximate fill with solid rect slices
  for (let i = 0; i < pts.length - 1; i++) {
    const [y0, v0] = pts[i], [y1, v1] = pts[i + 1];
    const x0 = px(y0), x1 = px(y1), yTop = Math.min(py(v0), py(v1));
    const yBot = chartY + chartH - 6;
    doc.setFillColor(143, 217, 154);
    doc.setGState(doc.GState({ opacity: 0.15 }));
    doc.rect(x0, yTop, x1 - x0, yBot - yTop, "F");
    doc.setGState(doc.GState({ opacity: 1 }));
  }

  // Line
  doc.setDrawColor(...VERDE); doc.setLineWidth(1.2);
  for (let i = 0; i < pts.length - 1; i++) {
    const [y0, v0] = pts[i], [y1, v1] = pts[i + 1];
    doc.line(px(y0), py(v0), px(y1), py(v1));
  }

  // Aportes dashed line
  doc.setDrawColor(107,72,232); doc.setLineDashPattern([2,2], 0); doc.setLineWidth(0.8);
  for (let i = 0; i < pts.length - 1; i++) {
    const [y0] = pts[i], [y1] = pts[i + 1];
    const a0 = params.monthly * y0 * 12 + params.capitalInicial;
    const a1 = params.monthly * y1 * 12 + params.capitalInicial;
    doc.line(px(y0), py(Math.min(a0, maxV)), px(y1), py(Math.min(a1, maxV)));
  }
  doc.setLineDashPattern([], 0);

  // X axis labels
  doc.setFontSize(6.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
  [0, Math.round(nPts / 4), Math.round(nPts / 2), Math.round(3 * nPts / 4), nPts].forEach(yy => {
    doc.text(`Año ${yy}`, px(yy), chartY + chartH - 1, { align: "center" });
  });
  // Y end value
  doc.setFontSize(7); doc.setFont("helvetica", "bold"); doc.setTextColor(...VERDE);
  doc.text(fmt(params.fvTotal), chartX + chartW - 4, py(params.fvTotal) - 2, { align: "right" });

  y = chartY + chartH + 8;

  // ── Side-by-side stats ─────────────────────────────────
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

  // ── Insight ────────────────────────────────────────────
  doc.setFillColor(237, 248, 232); doc.roundedRect(20, y, 170, 20, 3, 3, "F");
  doc.setFontSize(8.5); doc.setFont("helvetica", "italic"); doc.setTextColor(...VERDE);
  doc.text(getInsight(params.edad, params.years), 24, y + 8, { maxWidth: 162 });
  y += 26;

  // ── Disclaimer ─────────────────────────────────────────
  doc.setFillColor(...BG); doc.roundedRect(20, y, 170, 20, 2, 2, "F");
  doc.setFontSize(7.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...GRAY);
  doc.text(
    "Las simulaciones son ilustrativas. Los rendimientos pasados no garantizan resultados futuros. La tasa estimada del 8% anual se utiliza únicamente como ejemplo educativo. Toda inversión implica riesgo de pérdida de capital.",
    24, y + 6, { maxWidth: 162 }
  );
  y += 26;

  // ── Footer ─────────────────────────────────────────────
  doc.setFillColor(...DARK); doc.rect(0, 282, W, 15, "F");
  doc.setFontSize(7.5); doc.setFont("helvetica", "normal"); doc.setTextColor(120,160,120);
  doc.text("INVERSAVE · Roble Capital Wealth Management · Regulado BCU Uruguay", 20, 290);
  doc.text("Dominion Capital Strategies Limited · Guernsey FSC", W - 20, 290, { align: "right" });

  doc.save(`inversave-proyeccion-${params.years}a.pdf`);
}

export default function SimuladorSection() {
  const { openModal } = useLeadModal();
  const [monthly, setMonthly] = useState(200);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8);
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [inflacion, setInflacion] = useState(4);
  const [edad, setEdad] = useState(30);
  const [downloading, setDownloading] = useState(false);

  // Core calculations
  const r = rate / 100 / 12;
  const n = years * 12;
  const fvPMT = r > 0 ? monthly * ((Math.pow(1 + r, n) - 1) / r) : monthly * n;
  const fvCapital = capitalInicial * Math.pow(1 + r, n);
  const fvTotal = fvPMT + fvCapital;

  const totalAportado = monthly * n + capitalInicial;
  const intereses = fvTotal - totalAportado;
  const multiplier = fvTotal / Math.max(totalAportado, 1);

  // Inflation-adjusted
  const capitalReal = fvTotal / Math.pow(1 + inflacion / 100, years);

  // "Sin invertir" — dinero estático, erosionado por inflación
  const sinInvertir = totalAportado / Math.pow(1 + inflacion / 100, years);

  const ret = calcMonthlyRetirement(fvTotal, 20, rate);
  const insight = getInsight(edad, years);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadPdf({ edad, monthly, capitalInicial, years, rate, inflacion, fvTotal, capitalReal, totalAportado, intereses, sinInvertir });
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="sim" className="section-wrap">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Simulador interactivo</p>
          <h2 className="text-h2 font-bold mb-5">
            Visualizá{" "}
            <span className="text-g3">tu futuro financiero.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            Ajustá los valores y mirá cómo crece tu patrimonio. El tiempo cambia todo
            — los números hablan solos.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          {/* ── Inputs ── */}
          <FadeIn>
            <div className="space-y-6">

              {/* Edad */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Edad actual</span>
                  <motion.span key={edad} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    {edad} años
                  </motion.span>
                </div>
                <input type="range" min={20} max={65} step={1} value={edad} onChange={e => setEdad(+e.target.value)} className="w-full" />
                <div className="flex justify-between text-[11px] text-t3 mt-2"><span>20</span><span>65</span></div>
              </div>

              {/* Monthly */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Aporte mensual</span>
                  <motion.span key={monthly} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    USD {monthly.toLocaleString("es-UY")}
                  </motion.span>
                </div>
                <input type="range" min={50} max={10000} step={50} value={monthly} onChange={e => setMonthly(+e.target.value)} className="w-full" />
                <div className="flex justify-between text-[11px] text-t3 mt-2"><span>USD 50</span><span>USD 10.000</span></div>
              </div>

              {/* Capital inicial */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Capital inicial</span>
                  <motion.span key={capitalInicial} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    USD {capitalInicial.toLocaleString("es-UY")}
                  </motion.span>
                </div>
                <input type="range" min={0} max={50000} step={500} value={capitalInicial} onChange={e => setCapitalInicial(+e.target.value)} className="w-full" />
                <div className="flex justify-between text-[11px] text-t3 mt-2"><span>USD 0</span><span>USD 50.000</span></div>
              </div>

              {/* Years */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Años de inversión</span>
                  <motion.span key={years} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    {years} años
                  </motion.span>
                </div>
                <input type="range" min={3} max={45} step={1} value={years} onChange={e => setYears(+e.target.value)} className="w-full" />
                <div className="flex justify-between text-[11px] text-t3 mt-2"><span>3 años</span><span>45 años</span></div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Rentabilidad anual estimada</span>
                  <motion.span key={rate} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    {rate}%
                  </motion.span>
                </div>
                <input type="range" min={2} max={15} step={0.5} value={rate} onChange={e => setRate(+e.target.value)} className="w-full" />
                <div className="flex justify-between text-[11px] text-t3 mt-2"><span>2%</span><span>15%</span></div>
              </div>

              {/* Inflación */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Inflación anual estimada</span>
                  <motion.span key={inflacion} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    {inflacion}%
                  </motion.span>
                </div>
                <input type="range" min={1} max={10} step={0.5} value={inflacion} onChange={e => setInflacion(+e.target.value)} className="w-full" />
                <div className="flex justify-between text-[11px] text-t3 mt-2"><span>1%</span><span>10%</span></div>
              </div>

              {/* Mini chart */}
              <div className="relative w-full h-[140px] mt-1">
                <SimChart monthly={monthly} years={years} rate={rate} />
              </div>
            </div>
          </FadeIn>

          {/* ── Results ── */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {/* Main result card */}
              <div className="bg-g4 rounded-[22px] p-7">
                <p className="text-[11px] text-white/35 tracking-[0.1em] font-semibold uppercase mb-6">Tu proyección</p>

                <div className="text-center mb-6 pb-5 border-b border-white/[.08]">
                  <p className="text-[12px] text-white/40 mb-2">Capital acumulado proyectado</p>
                  <motion.p
                    key={`${fvTotal}`}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[clamp(28px,5vw,44px)] font-bold text-g2 tracking-tight leading-none"
                  >
                    {fmt(fvTotal)}
                  </motion.p>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-g1/20 border border-g1/30 rounded-full px-3 py-1">
                    <span className="text-[12px] font-bold text-g2">{multiplier.toFixed(1)}× lo aportado</span>
                  </div>
                </div>

                {[
                  { label: "Total aportado", value: fmt(totalAportado) },
                  { label: "Rendimiento (intereses)", value: fmt(intereses) },
                  { label: "Retiro mensual estimado", value: fmt(ret), big: true },
                ].map(row => (
                  <div key={row.label} className="flex justify-between items-baseline py-2.5 border-b border-white/[.06] last:border-none">
                    <span className="text-[13px] text-white/45">{row.label}</span>
                    <motion.span
                      key={row.value}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={row.big ? "text-[20px] font-bold text-g2 tracking-tight" : "text-[14px] font-semibold text-white/80"}
                    >
                      {row.value}
                    </motion.span>
                  </div>
                ))}
              </div>

              {/* Inflation-adjusted comparison */}
              <div className="bg-white border border-black/[.07] rounded-[18px] p-5">
                <p className="text-[11px] font-bold text-t3 tracking-[0.1em] uppercase mb-4">Efecto de la inflación ({inflacion}% anual)</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#EDF8E8] border border-g1/15 rounded-xl p-4 text-center">
                    <p className="text-[10px] text-g3 font-semibold uppercase tracking-[0.08em] mb-2">Capital real</p>
                    <motion.p key={capitalReal} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[16px] font-bold text-g3 tracking-tight">
                      {fmt(capitalReal)}
                    </motion.p>
                    <p className="text-[10px] text-t3 mt-1">Poder adquisitivo hoy</p>
                  </div>
                  <div className="bg-[#FEF0EC] border border-warn/15 rounded-xl p-4 text-center">
                    <p className="text-[10px] text-warn font-semibold uppercase tracking-[0.08em] mb-2">Sin invertir</p>
                    <motion.p key={sinInvertir} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[16px] font-bold text-warn tracking-tight">
                      {fmt(sinInvertir)}
                    </motion.p>
                    <p className="text-[10px] text-t3 mt-1">Real si guardás el efectivo</p>
                  </div>
                </div>
                <div className="mt-3 bg-[#EDF8E8] border border-g1/15 rounded-xl px-4 py-3 text-center">
                  <p className="text-[11px] text-t3 mb-0.5">Diferencia vs no invertir</p>
                  <motion.p key={fvTotal - sinInvertir} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[18px] font-bold text-g3">
                    +{fmt(fvTotal - sinInvertir)}
                  </motion.p>
                </div>
              </div>

              {/* Insight dinámico */}
              <motion.div
                key={insight}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#F5F2EA] border border-black/[.06] rounded-[16px] px-5 py-4 flex gap-3"
              >
                <svg className="flex-shrink-0 mt-0.5 text-g3" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.5 12.5 L11.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7.5 14.5 L10.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9 4 L9 5M5.8 5.8 L6.5 6.5M12.2 5.8 L11.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <p className="text-[13px] text-t2 leading-relaxed italic">{insight}</p>
              </motion.div>

              {/* CTAs */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => openModal("simulador")}
                  className="btn-primary w-full justify-center text-[14px] py-3.5"
                >
                  Comenzar mi plan de ahorro
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="w-full flex items-center justify-center gap-2 text-[13px] font-semibold text-t2 border border-black/[.1] rounded-full py-3 hover:bg-white hover:border-black/[.2] transition-all cursor-pointer disabled:opacity-50"
                >
                  {downloading ? "Generando PDF..." : "↓ Descargar proyección en PDF"}
                </button>
              </div>

              <p className="text-[11px] text-t3/70 italic text-center">
                Meramente ilustrativo. No garantiza rentabilidad. Toda inversión implica riesgos.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
