import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import { StatsBand, ProblemaSection } from "@/components/sections/Problema";
import MentalidadSection from "@/components/sections/Mentalidad";
import InteresCompuestoSection from "@/components/sections/InteresCompuesto";
import DCASection from "@/components/sections/DCA";
import SP500Section from "@/components/sections/SP500Section";
import SimuladorSection from "@/components/sections/Simulador";
import AccountDashboard from "@/components/sections/AccountDashboard";
import PlanInversaveSection from "@/components/sections/PlanInversave";
import ExpandiblesSection from "@/components/sections/Expandibles";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBand />
      <GlowDivider />
      <ProblemaSection />
      <GlowDivider />
      <MentalidadSection />
      <GlowDivider />
      <InteresCompuestoSection />
      <GlowDivider />
      <DCASection />
      <GlowDivider />
      <SP500Section />
      <GlowDivider />
      <SimuladorSection />
      <AccountDashboard />
      <GlowDivider />
      <PlanInversaveSection />
      <GlowDivider />
      <ExpandiblesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
