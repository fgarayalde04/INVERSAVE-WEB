import { Metadata }           from "next";
import MercadoDashboard       from "@/components/sections/mercado/MercadoDashboard";
import { CTASection, Footer } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Indicadores financieros y previsionales en Uruguay | INVERSAVE",
  description:
    "Tasas bancarias, rentabilidad histórica de AFAPs, datos del BPS, Banco Central del Uruguay " +
    "y Fed explicados de forma simple para planificar mejor tu futuro financiero.",
  alternates: { canonical: "https://inversave.com/indicadores" },
  keywords: [
    "indicadores financieros Uruguay",
    "tasas bancarias Uruguay",
    "depósito a plazo fijo Uruguay",
    "rentabilidad AFAP Uruguay",
    "datos BPS jubilación Uruguay",
    "tasa BCU Uruguay",
    "tasa FED",
    "inflación Uruguay",
    "educación financiera Uruguay",
  ],
};

export default function IndicadoresPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="inner text-center">
          <p className="section-label">Indicadores</p>
          <h1 className="text-[clamp(26px,3.2vw,42px)] font-bold leading-tight tracking-tight mb-3">
            Datos de referencia{" "}
            <span className="text-g3">con fuente visible.</span>
          </h1>
          <p className="text-[16px] text-t2 max-w-2xl mx-auto leading-relaxed">
            Tasas bancarias, AFAPs, BPS, FED e inflación. Información educativa
            con fuente oficial indicada en cada dato. Para entender el contexto,
            no para hacer trading.
          </p>
        </div>
      </section>

      <MercadoDashboard />

      <CTASection />
      <Footer />
    </main>
  );
}
