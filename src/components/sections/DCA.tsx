"use client";
import { FadeIn, Alert, QuoteBlock } from "@/components/ui";
import { DCAChart } from "@/components/charts/Charts";
import { QUOTES, RISK_DATA } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLeadModal } from "@/context/ModalContext";

export default function DCASection() {
  const { openModal } = useLeadModal();
  return (
    <section className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Dollar Cost Averaging</p>
          <h2 className="text-h2 font-bold mb-5">
            Invertir todos los meses{" "}
            <br className="hidden sm:block" />
            <span className="text-g3">supera al timing perfecto.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            No importa si el mercado sube o baja. Aportar un monto fijo mensual
            permite comprar más cuando el precio está bajo y construye patrimonio
            de forma automática y sin estrés.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <FadeIn>
            <div className="card-warn" style={{ borderTop: "3px solid #B5451E" }}>
              <p className="text-[11px] font-bold text-warn tracking-[0.1em] uppercase mb-3">Sin aportes regulares</p>
              <p className="text-[15px] text-[#7A2B15] leading-relaxed">
                Invertís todo de una vez. El resultado depende del momento de entrada.
                Nadie predice el mercado de forma consistente.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card-green" style={{ borderTop: "3px solid #52B558" }}>
              <p className="text-[11px] font-bold text-g3 tracking-[0.1em] uppercase mb-3">Con aportes mensuales (DCA)</p>
              <p className="text-[15px] text-g3 leading-relaxed">
                Comprás más cuando el precio está bajo. Disciplina automática y sostenida,
                sin necesidad de adivinar el mercado.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* DCA Chart */}
        <FadeIn>
          <div className="bg-[#F9F8F4] border border-black/[.07] rounded-3xl p-7 mb-3">
            <p className="text-[15px] font-semibold text-t1 mb-1">
              DGT Managed Fund — 5 años con aportes mensuales
            </p>
            <p className="text-[13px] text-t3 mb-5">Rendimiento total: +77,3% · Jul. 2020 – Jul. 2025</p>
            <div className="relative w-full h-[200px]">
              <DCAChart />
            </div>
            <div className="flex gap-5 mt-4 flex-wrap">
              {[
                { color: "#1A6638", label: "Fondo con aportes mensuales +77,3%" },
                { color: "#94A3B8", label: "Precio promedio acumulado", dashed: true },
              ].map(c => (
                <span key={c.label} className="flex items-center gap-2 text-[12px] text-t3">
                  <span
                    className="inline-block w-5 h-0.5 rounded-full"
                    style={{ background: c.color, ...(c.dashed ? { backgroundImage: `repeating-linear-gradient(90deg,${c.color} 0,${c.color} 5px,transparent 5px,transparent 8px)`, background: "none" } : {}) }}
                  />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-t3 italic">
            Rendimientos pasados no garantizan resultados futuros. Fuente: Dominion Capital Strategies.
          </p>
        </FadeIn>

        <QuoteBlock text={QUOTES.graham.text} author={QUOTES.graham.author} variant="lila" />

        {/* Risk bars — A más plazo, menos riesgo */}
        <div className="mt-6">
          <FadeIn>
            <p className="section-label mt-8">A más plazo, menos riesgo histórico</p>
            <h3 className="text-h3 font-bold mb-3">
              El tiempo es tu mayor aliado.
            </h3>
            <p className="text-[17px] text-t2 mb-8 leading-relaxed">
              Probabilidad histórica de rendimientos negativos en el S&P 500 desde 1929.
            </p>
          </FadeIn>
          <div className="space-y-3">
            {RISK_DATA.map((d, i) => (
              <FadeIn key={d.label} delay={i * 0.06}>
                <div className="flex items-center gap-4">
                  <span className="text-[13px] text-t3 w-[100px] text-right flex-shrink-0 font-medium">{d.label}</span>
                  <div className="flex-1 h-8 bg-[#EDE9DF] rounded-xl overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                      className="h-full rounded-xl flex items-center px-3"
                      style={{ background: d.color }}
                    >
                      <span className="text-[12px] font-bold text-white">{d.pct}%</span>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-[11px] text-t3 italic mt-4">Fuente: S&P, Bloomberg, BofA US Equity & Quant Strategy.</p>
        </div>

        <FadeIn>
          <div className="mt-10 bg-[#EDF8E8] border border-g1/20 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <p className="text-[15px] font-semibold text-g4 mb-1">Automatizá tu ahorro. Dejá que el tiempo haga su parte.</p>
              <p className="text-[13px] text-t2">Aportes mensuales fijos, inversión automática, sin necesitar saber de finanzas.</p>
            </div>
            <button
              onClick={() => openModal("dca")}
              className="flex-shrink-0 bg-g3 text-white font-semibold text-[13px] rounded-full px-5 py-2.5 hover:bg-[#1A6638] transition-colors cursor-pointer"
            >
              Comenzar hoy
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
