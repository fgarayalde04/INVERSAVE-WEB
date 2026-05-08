"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, QuoteBlock } from "@/components/ui";
import { fmt, QUOTES } from "@/lib/utils";
import { useLeadModal } from "@/context/ModalContext";

export default function MentalidadSection() {
  const { openModal } = useLeadModal();
  const [ingreso, setIngreso] = useState(2000);
  const [pct, setPct] = useState(20);
  const ahorro = Math.round(ingreso * pct / 100);
  const gasto = ingreso - ahorro;

  return (
    <section className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <p className="section-label">El cambio más importante</p>
          <h2 className="text-h2 font-bold mb-5">
            Guardá primero.{" "}
            <span className="text-g3">Gastá lo que queda.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            La mayoría gasta primero y ahorra lo que sobra. Casi nunca sobra nada.
            Separar entre el 10% y el 30% antes de gastar cambia todo.
          </p>
        </FadeIn>

        {/* Visual bars */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          <FadeIn>
            <div className="card-warn">
              <p className="text-[11px] font-bold text-warn tracking-[0.1em] uppercase mb-4">Lo habitual — no funciona</p>
              <div className="flex h-12 rounded-xl overflow-hidden mb-4">
                <div className="flex items-center justify-center text-[13px] font-bold text-white" style={{ width: "85%", background: "#B5451E" }}>Gastos 85%</div>
                <div className="flex items-center justify-center text-[12px] font-bold" style={{ width: "15%", background: "#E8B0A0", color: "#7A2B15" }}>?</div>
              </div>
              <p className="text-[15px] text-[#7A2B15] leading-relaxed">Gastás primero, ahorrás las sobras. Casi nunca alcanza para construir patrimonio.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card-green">
              <p className="text-[11px] font-bold text-g3 tracking-[0.1em] uppercase mb-4">Lo que construye patrimonio</p>
              <div className="flex h-12 rounded-xl overflow-hidden mb-4">
                <div className="flex items-center justify-center text-[13px] font-bold" style={{ width: "20%", background: "#1A6638", color: "#8FD99A" }}>20%</div>
                <div className="flex items-center justify-center text-[13px] font-bold" style={{ width: "80%", background: "rgba(82,181,88,.18)", color: "#1A6638" }}>Para gastar 80%</div>
              </div>
              <p className="text-[15px] text-g3 leading-relaxed">Separás el ahorro primero. El resto es tuyo para gastar. Simple, automático, efectivo.</p>
            </div>
          </FadeIn>
        </div>

        {/* Calculator */}
        <FadeIn>
          <p className="text-[16px] font-semibold text-t1 mb-6">Calculá tu ahorro mensual</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-8">
          <FadeIn>
            <div>
              <div className="mb-7">
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span>Ingreso mensual</span>
                  <span className="font-bold text-t1">USD {ingreso.toLocaleString("es-UY")}</span>
                </div>
                <input
                  type="range" min={200} max={20000} step={100}
                  value={ingreso} onChange={e => setIngreso(+e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-t3 mt-1.5">
                  <span>USD 200</span><span>USD 20.000</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[14px] text-t2 mb-3">
                  <span>Porcentaje que guardás</span>
                  <span className="font-bold text-t1">{pct}%</span>
                </div>
                <input
                  type="range" min={5} max={60} step={1}
                  value={pct} onChange={e => setPct(+e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-t3 mt-1.5">
                  <span>5%</span><span>60%</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Ahorro mensual", value: fmt(ahorro), color: "text-g3" },
                { label: "Para gastar", value: fmt(gasto), color: "text-t1" },
              ].map(c => (
                <div key={c.label} className="bg-[#F5F2EA] border border-black/[.06] rounded-2xl p-5 text-center">
                  <p className="text-[11px] text-t3 uppercase tracking-[0.1em] mb-2">{c.label}</p>
                  <p className={`text-[20px] font-bold tracking-tight ${c.color}`}>{c.value}</p>
                </div>
              ))}
              <div className="col-span-2 bg-[#EDF8E8] border border-g1/20 rounded-2xl p-5 text-center">
                <p className="text-[11px] text-t3 uppercase tracking-[0.1em] mb-2">Ahorro anual</p>
                <motion.p
                  key={ahorro}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-[24px] font-bold tracking-tight text-g3"
                >
                  {fmt(ahorro * 12)}
                </motion.p>
              </div>
            </div>
          </FadeIn>
        </div>

        <QuoteBlock text={QUOTES.buffett1.text} author={QUOTES.buffett1.author} />

        <FadeIn>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openModal("mentalidad")}
              className="btn-primary text-[14px]"
            >
              Comenzar mi plan
            </button>
            <button
              onClick={() => document.getElementById("sim")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline text-[14px]"
            >
              Simulá tu futuro
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
