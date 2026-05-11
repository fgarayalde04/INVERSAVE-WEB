import { Metadata } from "next";
import PorQueFunciona from "@/components/sections/PorQueFunciona";
import MentalidadSection from "@/components/sections/Mentalidad";
import InteresCompuestoSection from "@/components/sections/InteresCompuesto";
import DCASection from "@/components/sections/DCA";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ahorrar — Interés compuesto, DCA y disciplina financiera | INVERSAVE",
  description:
    "Cómo funciona el ahorro a largo plazo, cómo hacerlo, el costo de esperar y la estrategia Dollar Cost Averaging. Conceptos clave explicados en simple.",
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
  alternates: { canonical: "https://inversave.com/ahorrar" },
};

export default function AhorrarPage() {
  return (
    <main>
      {/* H1 */}
      <section className="page-hero">
        <div className="inner text-center">
          <p className="section-label">Ahorrar</p>
          <h1 className="text-[clamp(26px,3.2vw,42px)] font-bold leading-tight tracking-tight mb-3">
            Simple, automático,{" "}
            <span className="text-g3">a largo plazo.</span>
          </h1>
          <p className="text-[16px] text-t2 max-w-2xl mx-auto leading-relaxed">
            Interés compuesto, el costo de esperar, cómo hacerlo y Dollar Cost Averaging.
            Todo lo que necesitás entender para tomar mejores decisiones de ahorro.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <div id="como-funciona" className="scroll-mt-20">
        <PorQueFunciona />
      </div>

      {/* Cómo hacerlo */}
      <GlowDivider />
      <div id="como-hacerlo" className="scroll-mt-20">
        <MentalidadSection />
      </div>

      {/* Costo de esperar */}
      <GlowDivider />
      <div id="costo-de-esperar" className="scroll-mt-20">
        <InteresCompuestoSection />
      </div>

      {/* Dollar Cost Averaging */}
      <GlowDivider />
      <div id="dollar-cost-averaging" className="scroll-mt-20">
        <DCASection />
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}
