import { Metadata } from "next";
import ExpandiblesSection from "@/components/sections/Expandibles";
import { CTASection, Footer } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Educación financiera — 14 conceptos clave | INVERSAVE",
  description: "Interés compuesto, DCA, ETFs, diversificación y más. Todo lo que necesitás saber para invertir con confianza.",
};

export default function EducacionPage() {
  return (
    <main>
      <div className="pt-4" />
      <ExpandiblesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
