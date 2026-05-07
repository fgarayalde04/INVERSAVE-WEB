"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui";
import { SimChart } from "@/components/charts/Charts";
import { fmt, calcFV, calcMonthlyRetirement } from "@/lib/utils";

export default function SimuladorSection() {
  const [monthly, setMonthly] = useState(500);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8);

  const fv = calcFV(monthly, years, rate);
  const total = monthly * years * 12;
  const interest = fv - total;
  const ret = calcMonthlyRetirement(fv, 20, rate);

  const multiplier = fv / total;

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
            Ajustá los valores y mirá cómo crece tu patrimonio año a año. El tiempo
            realmente cambia todo — los números hablan solos.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          {/* Sliders */}
          <FadeIn>
            <div className="space-y-7">
              {/* Monthly */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Aporte mensual</span>
                  <motion.span key={monthly} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    USD {monthly.toLocaleString("es-UY")}
                  </motion.span>
                </div>
                <input
                  type="range" min={50} max={10000} step={50}
                  value={monthly} onChange={e => setMonthly(+e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-t3 mt-2">
                  <span>USD 50</span><span>USD 10.000</span>
                </div>
              </div>

              {/* Years */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Años de inversión</span>
                  <motion.span key={years} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    {years} años
                  </motion.span>
                </div>
                <input
                  type="range" min={3} max={45} step={1}
                  value={years} onChange={e => setYears(+e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-t3 mt-2">
                  <span>3 años</span><span>45 años</span>
                </div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span className="font-medium">Rentabilidad anual estimada</span>
                  <motion.span key={rate} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-t1">
                    {rate}%
                  </motion.span>
                </div>
                <input
                  type="range" min={2} max={15} step={0.5}
                  value={rate} onChange={e => setRate(+e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-t3 mt-2">
                  <span>2%</span><span>15%</span>
                </div>
              </div>

              {/* Mini chart */}
              <div className="relative w-full h-[160px] mt-2">
                <SimChart monthly={monthly} years={years} rate={rate} />
              </div>
            </div>
          </FadeIn>

          {/* Results panel */}
          <FadeIn delay={0.1}>
            <div className="bg-g4 rounded-[22px] p-7">
              <p className="text-[11px] text-white/35 tracking-[0.1em] font-semibold uppercase mb-6">Tu proyección</p>

              {/* Multiplier highlight */}
              <div className="text-center mb-7 pb-6 border-b border-white/[.08]">
                <p className="text-[12px] text-white/40 mb-2">Capital acumulado</p>
                <motion.p
                  key={`${fv}`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[clamp(28px,5vw,44px)] font-bold text-g2 tracking-tight leading-none"
                >
                  {fmt(fv)}
                </motion.p>
                <div className="mt-3 inline-flex items-center gap-1.5 bg-g1/20 border border-g1/30 rounded-full px-3 py-1">
                  <span className="text-[12px] font-bold text-g2">{multiplier.toFixed(1)}× lo aportado</span>
                </div>
              </div>

              {[
                { label: "Total aportado", value: fmt(total), big: false },
                { label: "Intereses generados", value: fmt(interest), big: false },
                { label: "Retiro mensual estimado", value: fmt(ret), big: true },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-baseline py-3 border-b border-white/[.06] last:border-none">
                  <span className="text-[13px] text-white/45">{row.label}</span>
                  <motion.span
                    key={row.value}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={row.big ? "text-[20px] font-bold text-g2 tracking-tight" : "text-[15px] font-semibold text-white/80"}
                  >
                    {row.value}
                  </motion.span>
                </div>
              ))}

              <p className="text-[11px] text-white/25 mt-5 leading-relaxed italic">
                Meramente ilustrativo. No garantiza rentabilidad. Toda inversión implica riesgos.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
