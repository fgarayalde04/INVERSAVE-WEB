import { Metadata } from "next";
import ExpandiblesSection from "@/components/sections/Expandibles";
import { CTASection, Footer } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Educación financiera — Conceptos de inversión en simple | INVERSAVE",
  description:
    "Qué es inflación, interés compuesto, diversificación, ETFs, S&P 500, volatilidad, liquidez y más. Una biblioteca de conceptos financieros clave explicados en lenguaje claro.",
  alternates: { canonical: "https://inversave.com/educacion" },
  keywords: [
    "qué es inflación",
    "qué es interés compuesto",
    "qué es diversificación",
    "qué es riesgo y retorno",
    "qué es horizonte de inversión",
    "qué es liquidez",
    "qué es un ETF",
    "qué es el S&P 500",
    "qué es volatilidad",
    "diferencia entre ahorro e inversión",
    "cómo construir un portafolio",
    "qué son las tasas de interés",
    "qué es el mercado de capitales",
    "educación financiera Uruguay",
    "inversión a largo plazo",
    "planificación financiera",
  ],
};

export default function EducacionPage() {
  return (
    <main>
      {/* Page header — H1 único, indexable, con enlaces internos */}
      <section className="page-hero">
        <div className="inner text-center">
          <p className="section-label">Educación financiera</p>
          <h1 className="text-[clamp(26px,3.2vw,42px)] font-bold leading-tight tracking-tight mb-3">
            Aprendé conceptos clave{" "}
            <span className="text-g3">en simple.</span>
          </h1>
          <p className="text-[16px] text-t2 max-w-2xl mx-auto leading-relaxed">
            Una biblioteca de conceptos financieros fundamentales, explicados sin
            jerga y con ejemplos concretos. Para entender mejor las decisiones
            de ahorro e inversión a largo plazo.
          </p>
        </div>
      </section>

      <ExpandiblesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
