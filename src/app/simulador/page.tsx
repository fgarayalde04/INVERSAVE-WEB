import { Metadata } from "next";
import SimuladorSection from "@/components/sections/Simulador";
import { Footer } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Simulador de retiro — Calculá tu futuro financiero | INVERSAVE",
  description: "Calculá cuánto acumularías con aportes mensuales automáticos. Simulador de interés compuesto para tu plan de retiro.",
};

export default function SimuladorPage() {
  return (
    <main>
      <div className="pt-4" />
      <SimuladorSection />
      <Footer />
    </main>
  );
}
