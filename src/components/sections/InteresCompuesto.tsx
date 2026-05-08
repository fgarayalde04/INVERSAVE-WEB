"use client";
import { FadeIn, Alert, QuoteBlock } from "@/components/ui";
import { ICChart, PersonaABChart } from "@/components/charts/Charts";
import { QUOTES } from "@/lib/utils";
import { useLeadModal } from "@/context/ModalContext";

export default function InteresCompuestoSection() {
  const { openModal } = useLeadModal();
  return (
    <section className="section-wrap">
      <div className="inner">
        <FadeIn>
          <p className="section-label">El costo de esperar</p>
          <h2 className="text-h2 font-bold mb-5">
            Empezar 10 años antes{" "}
            <br className="hidden sm:block" />
            <span className="text-g3">vale más de USD 400.000.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            Persona A y Persona B aportan exactamente lo mismo por mes.
            La única diferencia: cuándo empezaron. Ese solo detalle cambia el resultado
            de una forma que ningún aumento de aporte puede compensar.
          </p>
        </FadeIn>

        {/* Persona A vs Persona B — $200/mes, 25 vs 35, 8% anual */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <FadeIn>
            <div className="bg-[#EDF8E8] border border-g1/25 rounded-3xl p-7" style={{ borderTop: "3px solid #52B558" }}>
              <p className="text-[11px] font-bold text-g3 tracking-[0.1em] uppercase mb-4">Persona A — empieza a los 25</p>
              <p className="text-[clamp(28px,4.5vw,42px)] font-bold text-g3 tracking-tight leading-none mb-2">USD 698.400</p>
              <p className="text-[14px] text-t2 leading-snug mb-5">USD 200/mes · 40 años · 8% anual · Total aportado: USD 96.000</p>
              <div className="h-2 bg-black/[.07] rounded-full overflow-hidden mb-2">
                <div className="h-full bg-g1 rounded-full" style={{ width: "100%" }} />
              </div>
              <p className="text-[12px] text-t3">100% — Capital máximo posible</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card-base" style={{ borderTop: "3px solid #6B48E8" }}>
              <p className="text-[11px] font-bold text-lila tracking-[0.1em] uppercase mb-4">Persona B — empieza a los 35</p>
              <p className="text-[clamp(28px,4.5vw,42px)] font-bold text-lila tracking-tight leading-none mb-2">USD 297.500</p>
              <p className="text-[14px] text-t2 leading-snug mb-5">USD 200/mes · 30 años · 8% anual · Total aportado: USD 72.000</p>
              <div className="h-2 bg-black/[.07] rounded-full overflow-hidden mb-2">
                <div className="h-full bg-lila rounded-full" style={{ width: "43%" }} />
              </div>
              <p className="text-[12px] text-t3">43% del capital de A — 10 años menos</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="bg-[#EDF8E8] border border-g1/20 rounded-2xl px-5 py-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-[15px] text-g4 leading-relaxed">
              Empezar 10 años antes genera{" "}
              <strong>USD 400.000+ más</strong> aportando el mismo monto mensual.{" "}
              <span className="italic text-g3">El tiempo no solo suma — multiplica.</span>
            </p>
            <button
              onClick={() => openModal("interes_compuesto")}
              className="flex-shrink-0 bg-g3 text-white font-semibold text-[13px] rounded-full px-5 py-2.5 hover:bg-[#1A6638] transition-colors cursor-pointer"
            >
              Empezar hoy
            </button>
          </div>
        </FadeIn>

        {/* Persona A vs B Chart */}
        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-3xl p-7 mb-3 mt-8">
            <p className="text-[14px] font-semibold text-t2 mb-1">
              Crecimiento acumulado — Persona A vs Persona B · USD 200/mes · 8% anual
            </p>
            <p className="text-[13px] text-t3 mb-5">Persona B empieza plana los primeros 10 años</p>
            <div className="relative w-full h-[280px]">
              <PersonaABChart />
            </div>
            <div className="flex gap-5 mt-4 flex-wrap">
              {[
                { color: "#1A6638", label: "Persona A — empieza a los 25" },
                { color: "#6B48E8", label: "Persona B — empieza a los 35" },
                { color: "#1A6638", label: "Aportes A", dashed: true },
                { color: "#6B48E8", label: "Aportes B", dashed: true },
              ].map(c => (
                <span key={c.label} className="flex items-center gap-2 text-[12px] text-t3">
                  <span
                    className="inline-block w-5 h-0.5 rounded-full"
                    style={{
                      background: c.dashed ? "none" : c.color,
                      backgroundImage: c.dashed ? `repeating-linear-gradient(90deg,${c.color} 0,${c.color} 4px,transparent 4px,transparent 7px)` : undefined,
                    }}
                  />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-t3 italic">
            Las simulaciones son ilustrativas. Los rendimientos pasados no garantizan resultados futuros. La tasa estimada del 8% anual se utiliza únicamente como ejemplo educativo.
          </p>
        </FadeIn>

        {/* ICChart — secondary, 3 rates */}
        <FadeIn>
          <div className="bg-[#F8F6F0] border border-black/[.06] rounded-3xl p-7 mb-3 mt-6">
            <p className="text-[14px] font-semibold text-t2 mb-1">
              Crecimiento de USD 200/mes a distintas tasas — 40 años
            </p>
            <p className="text-[13px] text-t3 mb-5">Cómo varía el resultado según la rentabilidad anual</p>
            <div className="relative w-full h-[200px]">
              <ICChart />
            </div>
            <div className="flex gap-5 mt-4 flex-wrap">
              {[
                { color: "#1A6638", label: "10% anual" },
                { color: "#6B48E8", label: "8% anual" },
                { color: "#aaa", label: "6% anual (ref.)", dashed: true },
              ].map(c => (
                <span key={c.label} className="flex items-center gap-2 text-[12px] text-t3">
                  <span className="inline-block w-5 h-0.5 rounded-full" style={{ background: c.color }} />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <QuoteBlock text={QUOTES.buffett2.text} author={QUOTES.buffett2.author} />
      </div>
    </section>
  );
}
