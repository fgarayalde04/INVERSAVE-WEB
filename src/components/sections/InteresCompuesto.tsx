"use client";
import { FadeIn, Alert, QuoteBlock } from "@/components/ui";
import { ICChart } from "@/components/charts/Charts";
import { QUOTES } from "@/lib/utils";

export default function InteresCompuestoSection() {
  return (
    <section className="section-wrap">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Interés compuesto</p>
          <h2 className="text-h2 font-bold mb-5">
            Empezar 5 años antes{" "}
            <br className="hidden sm:block" />
            <span className="text-g3">vale USD 124.695 más.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            Ana y Federico aportan exactamente lo mismo. La única diferencia es cuándo
            empezaron. Ese detalle cambia el resultado de forma que ningún ingreso
            extra puede compensar.
          </p>
        </FadeIn>

        {/* Ana vs Federico */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <FadeIn>
            <div className="bg-[#EDF8E8] border border-g1/25 rounded-3xl p-7" style={{ borderTop: "3px solid #52B558" }}>
              <p className="text-[11px] font-bold text-g3 tracking-[0.1em] uppercase mb-4">Ana — empieza a los 25</p>
              <p className="text-[clamp(28px,4.5vw,42px)] font-bold text-g3 tracking-tight leading-none mb-2">USD 1.286.980</p>
              <p className="text-[14px] text-t2 leading-snug mb-5">USD 500/mes · 40 años · 8% anual · Total aportado: USD 240.000</p>
              <div className="h-1.5 bg-black/[.07] rounded-full overflow-hidden mb-2">
                <div className="h-full bg-g1 rounded-full" style={{ width: "100%" }} />
              </div>
              <p className="text-[12px] text-t3">100% — Capital máximo posible</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card-base" style={{ borderTop: "3px solid #6B48E8" }}>
              <p className="text-[11px] font-bold text-lila tracking-[0.1em] uppercase mb-4">Federico — empieza a los 30</p>
              <p className="text-[clamp(28px,4.5vw,42px)] font-bold text-lila tracking-tight leading-none mb-2">USD 1.162.285</p>
              <p className="text-[14px] text-t2 leading-snug mb-5">USD 500/mes · 35 años · 8% anual · Total aportado: USD 210.000</p>
              <div className="h-1.5 bg-black/[.07] rounded-full overflow-hidden mb-2">
                <div className="h-full bg-lila rounded-full" style={{ width: "90%" }} />
              </div>
              <p className="text-[12px] text-t3">90% del capital de Ana — 5 años menos</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <Alert variant="green">
            Empezar 5 años antes genera{" "}
            <strong>USD 124.695 más</strong> sin aportar un peso extra. El tiempo
            tiene un valor financiero concreto e irreemplazable.
          </Alert>
        </FadeIn>

        {/* Chart */}
        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-3xl p-7 mb-3 mt-8">
            <p className="text-[14px] font-semibold text-t2 mb-1">
              Crecimiento de USD 500/mes — 40 años
            </p>
            <p className="text-[13px] text-t3 mb-5">A distintas tasas de rentabilidad anual estimada</p>
            <div className="relative w-full h-[220px]">
              <ICChart />
            </div>
            <div className="flex gap-5 mt-4 flex-wrap">
              {[
                { color: "#1A6638", label: "10% anual" },
                { color: "#6B48E8", label: "8% anual" },
                { color: "#aaa", label: "6% anual (ref.)" },
              ].map(c => (
                <span key={c.label} className="flex items-center gap-2 text-[12px] text-t3">
                  <span className="inline-block w-5 h-0.5 rounded-full" style={{ background: c.color }} />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-t3 italic">
            USD 500/mes con tasa fija y aporte constante. Meramente ilustrativo. Fuente: Dominion Capital Strategies.
          </p>
        </FadeIn>

        <QuoteBlock text={QUOTES.buffett2.text} author={QUOTES.buffett2.author} />
      </div>
    </section>
  );
}
