"use client";
import Link from "next/link";
import { FadeIn } from "@/components/ui";

export default function HomeSimuladorCTA() {
  return (
    <section className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="section-label">Simulador</p>
              <h2 className="text-h2 font-bold mb-4">
                ¿Cuánto tendrías{" "}
                <span className="text-g3">si empezaras hoy?</span>
              </h2>
              <p className="text-[17px] text-t2 leading-relaxed mb-8 max-w-md">
                Con USD 200 al mes durante 30 años, al 8% anual: más de USD 270.000.
                Calculá tu escenario exacto.
              </p>
              <Link
                href="/simulador"
                className="inline-flex items-center gap-2 bg-g3 text-white font-semibold text-[14px] rounded-full px-7 py-3.5 hover:bg-[#1A6638] transition-colors"
              >
                Abrir simulador
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            {/* Mini visual */}
            <div className="flex-shrink-0 flex flex-col gap-3">
              {[
                { years: "10 años", amount: "USD 36.500", color: "#52B558" },
                { years: "20 años", amount: "USD 117.800", color: "#1A6638" },
                { years: "30 años", amount: "USD 270.000", color: "#0C1A11" },
              ].map((row) => (
                <div key={row.years} className="flex items-center gap-4">
                  <span className="text-[12px] text-t3 w-16 flex-shrink-0">{row.years}</span>
                  <div className="h-2 rounded-full flex-1 min-w-[120px]" style={{
                    background: `linear-gradient(90deg, ${row.color} ${row.years === "10 años" ? "35%" : row.years === "20 años" ? "65%" : "100%"}, #E5E3DB 0%)`
                  }}/>
                  <span className="text-[13px] font-bold text-t1 flex-shrink-0">{row.amount}</span>
                </div>
              ))}
              <p className="text-[11px] text-t3 mt-1">USD 200/mes · 8% anual estimado</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
