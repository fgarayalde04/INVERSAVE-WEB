"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui";

const FAQS = [
  {
    q: "¿Qué es Dominion Capital Strategies?",
    a: "Dominion Capital Strategies Limited es una plataforma de inversión regulada por la Guernsey Financial Services Commission (Registro No. 63978) bajo la Protection of Investors Law 2020. Actúa como vehículo institucional para tu portafolio personal, con custodia a través de BNY Mellon y administración vía FNZ.",
  },
  {
    q: "¿Quién custodia mis activos?",
    a: "BNY Mellon, uno de los bancos custodios más grandes del mundo con USD 59,4 billones en activos bajo custodia en 38 países. Tus activos se mantienen en una cuenta segregada a tu nombre, separada del balance de Dominion. En caso de insolvencia de cualquier parte, tus activos están protegidos.",
  },
  {
    q: "¿En qué se invierte mi dinero?",
    a: "Tu portafolio se invierte principalmente en el S&P 500 Tracker de Pacific Asset Management, una gestora con USD 22.400 millones bajo administración. Según el perfil de riesgo elegido, se combina con otros fondos de Pacific AM: Global Equities, Global Infrastructure, G10 Rates, Emerging Markets y otros.",
  },
  {
    q: "¿Cuál es el aporte mínimo?",
    a: "El aporte mínimo es de USD 150 por mes. Los aportes son automáticos y se procesan mensualmente. No existe un mínimo de permanencia obligatoria — podés modificar o suspender tus aportes en cualquier momento.",
  },
  {
    q: "¿Puedo retirar mi dinero cuando quiera?",
    a: "Sí. Dominion ofrece liquidez disponible sin períodos mínimos de permanencia obligatorios. El modelo está diseñado para el largo plazo, pero accedés a tu capital cuando lo necesitás. Los plazos de liquidación son los estándar del mercado para fondos internacionales.",
  },
  {
    q: "¿Cómo está regulada la plataforma?",
    a: "Dominion Capital Strategies Limited está regulada por la Guernsey Financial Services Commission bajo Protection of Investors Law 2020. Guernsey tiene calificación crediticia AA- y es una Dependencia de la Corona Británica reconocida como uno de los centros financieros más serios del mundo. En Uruguay, el asesoramiento es provisto por Roble Capital, regulado por el Banco Central del Uruguay (BCU).",
  },
  {
    q: "¿Tengo acceso a información sobre mi inversión?",
    a: "Sí. La plataforma ofrece acceso en línea 24/7 con reportes de cartera en tiempo real. Dominion se destaca por ser el primero de su clase en informes de cartera, con transparencia completa sobre composición, rendimiento y movimientos de tu portafolio.",
  },
  {
    q: "¿Qué es una cuenta segregada?",
    a: "Una cuenta segregada significa que tus activos están registrados a tu nombre y separados del balance general de Dominion y de cualquier otro cliente. Esto es diferente a depositar dinero en un banco (donde el banco usa tu depósito). Con una cuenta segregada, si Dominion cerrara mañana, tus activos siguen siendo tuyos.",
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
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-g3 text-[20px] font-light flex-shrink-0 mt-0.5"
        >
          +
        </motion.span>
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
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
