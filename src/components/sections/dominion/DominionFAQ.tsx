"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui";

const FAQS = [
  {
    q: "¿Qué es Dominion Capital Strategies?",
    a: "Es una plataforma de inversión regulada por la Guernsey Financial Services Commission (Guernsey FSC). Actúa como vehículo para tu portafolio personal, con custodia de activos a través de BNY Mellon.",
  },
  {
    q: "¿Mi dinero está seguro?",
    a: "Tu cuenta es segregada — los activos están a tu nombre y separados del balance de la empresa. El custodio es BNY Mellon, uno de los bancos de custodia más grandes del mundo con más de USD 40 billones en activos bajo custodia.",
  },
  {
    q: "¿Cuánto es el aporte mínimo?",
    a: "El aporte mínimo es flexible y se define en la conversación inicial con tu asesor. El modelo está diseñado para aportes mensuales automáticos desde USD 150.",
  },
  {
    q: "¿Puedo retirar mi dinero cuando quiera?",
    a: "Sí. No existe permanencia mínima obligatoria. El modelo está diseñado para el largo plazo, pero tenés acceso a tu capital en caso de necesitarlo.",
  },
  {
    q: "¿En qué invierte exactamente mi dinero?",
    a: "Tu portafolio se invierte en un fondo de inversión que replica los principales índices globales: S&P 500, MSCI World y otros, según el perfil de riesgo que elijas. No se invierte en activos especulativos.",
  },
  {
    q: "¿Necesito saber de finanzas para empezar?",
    a: "No. Tu asesor local regulado por el BCU te guía en todo el proceso: definición de perfil, estrategia, apertura de cuenta y seguimiento. Vos solo tenés que definir cuánto querés ahorrar por mes.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[.07] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-start justify-between gap-4 w-full py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-t1">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          className="text-g3 text-[20px] font-light flex-shrink-0 mt-0.5">+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-[15px] text-t2 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DominionFAQ() {
  return (
    <section className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Preguntas frecuentes</p>
          <h2 className="text-h2 font-bold mb-10">
            Todo lo que querés saber{" "}
            <span className="text-g3">sobre Dominion.</span>
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-3xl px-8 py-2">
            {FAQS.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
