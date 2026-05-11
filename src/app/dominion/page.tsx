import { Metadata } from "next";
import DominionPageHero from "@/components/sections/dominion/DominionHero";
import DominionKeyInfo from "@/components/sections/dominion/DominionKeyInfo";
import DominionPartners from "@/components/sections/dominion/DominionPartners";
import DominionProblema from "@/components/sections/dominion/DominionProblema";
import DominionQue from "@/components/sections/dominion/DominionQue";
import DominionAccountPreview from "@/components/sections/dominion/DominionAccountPreview";
import PlanInversaveSection from "@/components/sections/PlanInversave";
import DominionComparativa from "@/components/sections/dominion/DominionComparativa";
import DominionFAQ from "@/components/sections/dominion/DominionFAQ";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dominion — Tu plataforma de inversión global | INVERSAVE",
  description:
    "Dominion Capital Strategies: cuenta segregada, custodia BNY Mellon, regulada Guernsey FSC. Invertí globalmente desde Uruguay con asesor local BCU.",
};

export default function DominionPage() {
  return (
    <main>
      <DominionPageHero />
      <DominionKeyInfo />
      <GlowDivider />
      <DominionPartners />
      <GlowDivider />
      <DominionProblema />
      <GlowDivider />
      <DominionQue />
      <GlowDivider />
      <DominionAccountPreview />
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
