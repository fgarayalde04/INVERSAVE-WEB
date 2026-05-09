import { Metadata } from "next";
import PorQueFunciona from "@/components/sections/PorQueFunciona";
import MentalidadSection from "@/components/sections/Mentalidad";
import InteresCompuestoSection from "@/components/sections/InteresCompuesto";
import DCASection from "@/components/sections/DCA";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cómo funciona INVERSAVE — Interés compuesto y estrategia",
  description: "Descubrí por qué el interés compuesto, el DCA y el largo plazo son la base de cualquier plan de retiro exitoso.",
};

export default function ComoFuncionaPage() {
  return (
    <main>
      <div className="pt-4" />
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
