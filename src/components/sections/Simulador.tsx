"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";
import { SimChart } from "@/components/charts/Charts";
import { fmt, calcFV, calcMonthlyRetirement } from "@/lib/utils";

const MAILTO = "mailto:fgarayaldearrillaga@roblecapital.net?subject=Quiero%20comenzar%20mi%20plan%20de%20ahorro";

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
  const W = 210, verde = [26, 102, 56] as [number, number, number];

  doc.setFillColor(...verde);
  doc.rect(0, 0, W, 42, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20); doc.setFont("helvetica", "bold");
  doc.text("INVERSAVE", 20, 18);
  doc.setFontSize(11); doc.setFont("helvetica", "normal");
  doc.text("Proyección personalizada de ahorro e inversión", 20, 27);
  doc.setFontSize(9);
  doc.text(`Generado: ${new Date().toLocaleDateString("es-UY")}`, 20, 35);

  doc.setTextColor(30, 30, 30);
  doc.setFontSize(13); doc.setFont("helvetica", "bold");
  doc.text("Parámetros de la simulación", 20, 56);

  const paramData = [
    ["Edad actual", `${params.edad} años`],
    ["Aporte mensual", `USD ${params.monthly.toLocaleString("es-UY")}`],
    ["Capital inicial", `USD ${params.capitalInicial.toLocaleString("es-UY")}`],
    ["Horizonte temporal", `${params.years} años`],
    ["Rentabilidad anual estimada", `${params.rate}%`],
    ["Inflación estimada", `${params.inflacion}%`],
  ];
  let y = 65;
  paramData.forEach(([label, val], i) => {
    doc.setFillColor(i % 2 === 0 ? 248 : 255, i % 2 === 0 ? 246 : 255, i % 2 === 0 ? 240 : 255);
    doc.rect(20, y, 170, 7, "F");
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(80, 80, 80);
    doc.text(label, 24, y + 4.8);
    doc.setFont("helvetica", "bold"); doc.setTextColor(30, 30, 30);
    doc.text(val, 130, y + 4.8);
    y += 7;
  });

  y += 10;
  doc.setFontSize(13); doc.setFont("helvetica", "bold"); doc.setTextColor(30, 30, 30);
  doc.text("Resultados proyectados", 20, y); y += 10;

  const resultData = [
    ["Capital acumulado proyectado", fmt(params.fvTotal), verde],
    ["Capital real (ajustado por inflación)", fmt(params.capitalReal), [80, 80, 80]],
    ["Total aportado", fmt(params.totalAportado), [80, 80, 80]],
    ["Rendimiento estimado (intereses)", fmt(params.intereses), [26, 102, 56]],
    ["Diferencia vs no invertir", fmt(params.fvTotal - params.sinInvertir), [26, 102, 56]],
  ] as [string, string, [number, number, number]][];

  resultData.forEach(([label, val, color], i) => {
    doc.setFillColor(i % 2 === 0 ? 248 : 255, i % 2 === 0 ? 246 : 255, i % 2 === 0 ? 240 : 255);
    doc.rect(20, y, 170, 9, "F");
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(80, 80, 80);
    doc.text(label, 24, y + 6);
    doc.setFont("helvetica", "bold"); doc.setTextColor(...color);
    doc.text(val, 170, y + 6, { align: "right" });
    y += 9;
  });

  y += 12;
  doc.setFillColor(237, 248, 232);
  doc.rect(20, y, 170, 22, "F");
  doc.setFontSize(9); doc.setFont("helvetica", "italic"); doc.setTextColor(26, 102, 56);
  doc.text(getInsight(params.edad, params.years), 24, y + 6, { maxWidth: 162 });

  y += 32;
  doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(130, 130, 130);
  doc.text(
    "Proyección meramente ilustrativa. No garantiza rentabilidad. Toda inversión implica riesgo de pérdida de capital.",
    20, y, { maxWidth: 170 }
  );
  doc.text("Los rendimientos pasados no garantizan resultados futuros. INVERSAVE / Roble Capital Wealth Management · BCU.", 20, y + 6, { maxWidth: 170 });

  doc.save(`inversave-proyeccion-${params.years}a.pdf`);
}

export default function SimuladorSection() {
  const [monthly, setMonthly] = useState(500);
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
                <span className="text-[20px] flex-shrink-0 mt-0.5">💡</span>
                <p className="text-[13px] text-t2 leading-relaxed italic">{insight}</p>
              </motion.div>

              {/* CTAs */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => window.open(MAILTO)}
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
