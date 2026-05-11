import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import { GlowDivider } from "@/components/ui";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import HomeContext from "@/components/sections/home/HomeContext";
import DominionHighlight from "@/components/sections/home/DominionHighlight";
import HomeSimuladorCTA from "@/components/sections/home/HomeSimuladorCTA";

export const metadata: Metadata = {
  title: "Planificar la jubilación en Uruguay | Ahorro e inversión mensual | INVERSAVE",
  description:
    "Plataforma para entender el sistema previsional uruguayo, simular tu futuro financiero y conocer un plan de ahorro e inversión mensual de largo plazo.",
  alternates: { canonical: "https://inversave.com" },
  keywords: [
    "planificación jubilatoria Uruguay",
    "sistema previsional uruguayo",
    "ahorro mensual Uruguay",
    "inversión a largo plazo Uruguay",
    "simulador de jubilación",
    "plan de ahorro e inversión",
    "retiro Uruguay",
    "jubilación Uruguay",
    "planificar jubilación",
    "ahorro previsional Uruguay",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeContext />
      <GlowDivider />
      <DominionHighlight />
      <GlowDivider />
      <HomeSimuladorCTA />
      <CTASection />
      <Footer />
    </main>
  );
}
