import Hero from "@/components/sections/Hero";
import { GlowDivider } from "@/components/ui";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import DominionHighlight from "@/components/sections/home/DominionHighlight";
import HomeServices from "@/components/sections/home/HomeServices";
import HomeTrust from "@/components/sections/home/HomeTrust";
import HomeSimuladorCTA from "@/components/sections/home/HomeSimuladorCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <DominionHighlight />
      <GlowDivider />
      <HomeServices />
      <GlowDivider />
      <HomeTrust />
      <GlowDivider />
      <HomeSimuladorCTA />
      <CTASection />
      <Footer />
    </main>
  );
}
