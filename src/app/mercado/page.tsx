import { Metadata } from "next";
import { GlowDivider } from "@/components/ui";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import SP500Section from "@/components/sections/SP500Section";
import EvidenciaHistorica from "@/components/sections/EvidenciaHistorica";
import MercadoEnDonde from "@/components/sections/mercado/MercadoEnDonde";
import MercadoCrisis from "@/components/sections/mercado/MercadoCrisis";

export const metadata: Metadata = {
  title: "Mercado — Historia del S&P 500, dónde se invierte y crisis | INVERSAVE",
  description:
    "Historia del S&P 500, en dónde se invierte, rendimiento por período y grandes crisis del mercado. Contexto educativo, sin promesas de rendimiento.",
  alternates: { canonical: "https://inversave.com/mercado" },
  keywords: [
    "historia S&P 500",
    "qué es el S&P 500",
    "invertir en índices",
    "crisis bursátiles históricas",
    "rendimiento S&P 500 por período",
    "educación financiera Uruguay",
    "inversión largo plazo",
    "canasta diversificada empresas",
  ],
};

export default function MercadoPage() {
  return (
    <main>
      {/* H1 */}
      <section className="page-hero">
        <div className="inner text-center">
          <p className="section-label">Mercado</p>
          <h1 className="text-[clamp(26px,3.2vw,42px)] font-bold leading-tight tracking-tight mb-3">
            El mercado explicado{" "}
            <span className="text-g3">en simple.</span>
          </h1>
          <p className="text-[16px] text-t2 max-w-2xl mx-auto leading-relaxed">
            Historia del S&P 500, dónde se invierte, cómo se comportó en cada período
            y qué pasó en las grandes crisis. Sin trading, sin jerga.
          </p>
        </div>
      </section>

      {/* 1. Historia del mercado */}
      <GlowDivider />
      <div id="historia-del-mercado" className="scroll-mt-20">
        <SP500Section />
      </div>

      {/* 2. En dónde se invierte */}
      <GlowDivider />
      <MercadoEnDonde />

      {/* 3. Rendimiento por período */}
      <GlowDivider />
      <div id="rendimiento-por-periodo" className="scroll-mt-20">
        <EvidenciaHistorica />
      </div>

      {/* 4. Crisis */}
      <GlowDivider />
      <MercadoCrisis />

      <CTASection />
      <Footer />
    </main>
  );
}
