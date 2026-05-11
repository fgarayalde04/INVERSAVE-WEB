"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui";

const ITEMS = [
  {
    id: "aportes",
    title: "Aportes mensuales",
    content:
      "Elegís un monto fijo desde USD 150 por mes. No hay una cifra perfecta: lo que importa es la constancia. Con el mismo monto mensual, cuando el mercado baja adquirís más participaciones y cuando sube tu portafolio crece. Podés aumentar o reducir tu aporte cuando lo necesités.",
  },
  {
    id: "debito",
    title: "Débito automático",
    content:
      "El sistema debita tu aporte mensualmente de forma automática. No tenés que recordar transferir ni tomar decisiones de mercado. El proceso funciona sin que hagas nada: una vez que arrancás, el plan trabaja solo. Podés pausar aportes temporalmente si tu situación cambia, sin cerrar la cuenta.",
  },
  {
    id: "largoplazo",
    title: "Inversión a largo plazo",
    content:
      "Tu dinero se invierte en mercados globales diversificados — índices como el S&P 500 y MSCI World. La estrategia está diseñada para horizontes de 10, 20 o 30 años. No buscamos el timing perfecto: el tiempo en el mercado, no el timing del mercado, es la ventaja. Toda inversión implica riesgos, incluyendo la posible pérdida del capital.",
  },
  {
    id: "plataforma",
    title: "Seguimiento desde la plataforma",
    content:
      "Accedés 24/7 a tu cuenta personal: rendimiento histórico, asignación de activos y evolución de tu capital en tiempo real. Un asesor local regulado por el BCU está disponible cuando lo necesités. No estás solo en el proceso.",
  },
];

export default function PlanComoFunciona() {
  const [open, setOpen] = useState<string | null>("aportes");

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="section-label text-center">Cómo funciona en detalle</p>
          <h2 className="text-h2 font-bold text-center mb-10">
            Cuatro pilares{" "}
            <span className="text-g3">del plan.</span>
          </h2>
        </FadeIn>

        <div className="space-y-2">
          {ITEMS.map((item, i) => {
            const isOpen = open === item.id;
            return (
              <FadeIn key={item.id} delay={i * 0.06}>
                <div
                  className="border rounded-2xl overflow-hidden transition-colors duration-200"
                  style={{
                    borderColor: isOpen ? "rgba(26,102,56,0.25)" : "rgba(0,0,0,0.07)",
                    background: isOpen ? "#FAFFF9" : "#ffffff",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-[16px] font-semibold transition-colors"
                      style={{ color: isOpen ? "#1A6638" : "#111" }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ background: isOpen ? "#EDF8E8" : "rgba(0,0,0,0.04)" }}
                    >
                      <svg
                        width="14" height="14" viewBox="0 0 14 14" fill="none"
                        className="transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        <path
                          d="M7 2v10M2 7h10"
                          stroke={isOpen ? "#1A6638" : "#555"}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="px-6 pb-5 text-[14px] text-t2 leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
