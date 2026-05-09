import { Metadata } from "next";
import DominionPageHero from "@/components/sections/dominion/DominionHero";
import DominionAccountPreview from "@/components/sections/dominion/DominionAccountPreview";
import DominionProblema from "@/components/sections/dominion/DominionProblema";
import DominionQue from "@/components/sections/dominion/DominionQue";
import PlanInversaveSection from "@/components/sections/PlanInversave";
import DominionComparativa from "@/components/sections/dominion/DominionComparativa";
import DominionFAQ from "@/components/sections/dominion/DominionFAQ";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Dominion — Tu plataforma de inversión global | INVERSAVE",
  description: "Dominion Capital Strategies: cuenta segregada, custodia BNY Mellon, regulada Guernsey FSC. Invertí globalmente desde Uruguay con asesor local BCU.",
};

export default function DominionPage() {
  return (
    <main>
      <DominionPageHero />
      <DominionAccountPreview />
      <GlowDivider />
      <DominionProblema />
      <GlowDivider />
      <DominionQue />
      <GlowDivider />
      <PlanInversaveSection hideAccountPreview />
      <GlowDivider />
      <DominionComparativa />
      <GlowDivider />
      <DominionFAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
