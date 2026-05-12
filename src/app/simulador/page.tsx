import { Metadata } from "next";
import SimuladorSection from "@/components/sections/Simulador";
import { Footer } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Simulador de ahorro e inversión — Interés compuesto | INVERSAVE",
  description:
    "Simulador de ahorro e interés compuesto gratuito. Calculá cuánto podés acumular con aportes mensuales automáticos invertidos en mercados globales. Planificación financiera a largo plazo desde Uruguay.",
  keywords: [
    "simulador de ahorro",
    "simulador de inversión",
    "simulador de retiro",
    "simulador de interés compuesto",
    "planificación financiera",
    "ahorro mensual",
    "inversión a largo plazo",
    "calculadora de ahorro Uruguay",
  ],
};

export default function SimuladorPage() {
  return (
    <main>
      <section className="page-hero" style={{ background: "#F8F6F0" }}>
        <div className="inner text-center">
          <p className="section-label">Simulador de ahorro</p>
          <h1 className="text-[clamp(26px,3.2vw,42px)] font-bold leading-tight tracking-tight mb-3">
            Calculá el poder del{" "}
            <span className="text-g3">interés compuesto.</span>
          </h1>
          <p className="text-[16px] text-t2 max-w-2xl mx-auto leading-relaxed">
            Ingresá tu aporte mensual, tu horizonte de tiempo y tu edad. El
            simulador te muestra cuánto podés acumular invirtiendo de forma
            constante en mercados globales.
          </p>
        </div>
      </section>
      <SimuladorSection />
      <Footer />
    </main>
  );
}
