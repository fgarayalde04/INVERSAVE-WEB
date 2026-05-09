import { Metadata } from "next";
import SP500Section from "@/components/sections/SP500Section";
import EvidenciaHistorica from "@/components/sections/EvidenciaHistorica";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Historia del S&P 500 — 98 años de evidencia | INVERSAVE",
  description: "Datos históricos del S&P 500 desde 1928. Crisis, recuperaciones y el poder del tiempo en el mercado.",
};

export default function MercadoPage() {
  return (
    <main>
      <div className="pt-4" />
      <SP500Section />
      <GlowDivider />
      <EvidenciaHistorica />
      <CTASection />
      <Footer />
    </main>
  );
}
