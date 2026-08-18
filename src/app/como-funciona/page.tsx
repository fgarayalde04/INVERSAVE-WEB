import { Metadata } from "next";
import PorQueFunciona from "@/components/sections/PorQueFunciona";
import MentalidadSection from "@/components/sections/Mentalidad";
import InteresCompuestoSection from "@/components/sections/InteresCompuesto";
import DCASection from "@/components/sections/DCA";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cómo funciona el ahorro — Interés compuesto y disciplina financiera",
  description:
    "Cómo ahorrar mejor, qué es el interés compuesto, diferencia entre ahorrar e invertir, automatización del ahorro, inflación y largo plazo. Conceptos clave explicados en simple.",
  keywords: [
    "cómo ahorrar mejor",
    "interés compuesto",
    "ahorro mensual",
    "automatización del ahorro",
    "diferencia entre ahorrar e invertir",
    "inflación y ahorro",
    "inversión a largo plazo",
    "disciplina financiera",
    "DCA Dollar Cost Averaging",
    "ahorro automático",
    "planificación financiera",
    "costo de esperar en inversión",
  ],
  alternates: { canonical: "https://invertite.com/como-funciona" },
};

export default function ComoFuncionaPage() {
  return (
    <main>
      {/* H1 — único, indexable */}
      <section className="page-hero">
        <div className="inner text-center">
          <p className="section-label">Cómo funciona el ahorro</p>
          <h1 className="text-[clamp(26px,3.2vw,42px)] font-bold leading-tight tracking-tight mb-3">
            Simple, automático,{" "}
            <span className="text-g3">a largo plazo.</span>
          </h1>
          <p className="text-[16px] text-t2 max-w-2xl mx-auto leading-relaxed">
            Interés compuesto, el costo de esperar, automatización, inflación y disciplina
            financiera. Todo lo que necesitás entender para tomar mejores decisiones de ahorro.
          </p>
        </div>
      </section>

      <PorQueFunciona />
      <GlowDivider />
      <MentalidadSection />
      <GlowDivider />
      <InteresCompuestoSection />
      <GlowDivider />
      <DCASection />

      <CTASection />
      <Footer />
    </main>
  );
}
