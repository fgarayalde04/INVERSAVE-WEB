import { Metadata } from "next";
import { ProblemaSection } from "@/components/sections/Problema";
import { CTASection, Footer } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Sistema Previsional Uruguay — BPS, AFAP y el tercer pilar | INVERSAVE",
  description:
    "Analizá la situación del sistema previsional uruguayo: envejecimiento poblacional, ratio cotizantes/jubilados, tasa de sustitución del BPS y por qué necesitás un complemento privado.",
  keywords:
    "BPS Uruguay, AFAP, jubilación Uruguay, sistema previsional, retiro, envejecimiento poblacional, tercer pilar",
};

export default function SistemaPrevisionalPage() {
  return (
    <main>
      <div className="pt-4" />
      <ProblemaSection />
      <CTASection />
      <Footer />
    </main>
  );
}
