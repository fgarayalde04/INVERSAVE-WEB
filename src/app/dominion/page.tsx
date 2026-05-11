import { Metadata } from "next";
import PlanHero from "@/components/sections/dominion/PlanHero";
import PlanPasos from "@/components/sections/dominion/PlanPasos";
import PlanBeneficios from "@/components/sections/dominion/PlanBeneficios";
import PlanDCA from "@/components/sections/dominion/PlanDCA";
import PlanCapital from "@/components/sections/dominion/PlanCapital";
import DominionAccountPreview from "@/components/sections/dominion/DominionAccountPreview";
import RobleCapitalBlock from "@/components/sections/dominion/RobleCapitalBlock";
import DominionQue from "@/components/sections/dominion/DominionQue";
import DominionPartners from "@/components/sections/dominion/DominionPartners";
import PlanInversaveSection from "@/components/sections/PlanInversave";
import DominionComparativa from "@/components/sections/dominion/DominionComparativa";
import DominionFAQ from "@/components/sections/dominion/DominionFAQ";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "El Plan — Ahorro e inversión global desde Uruguay | INVERSAVE",
  description:
    "Un plan de ahorro mensual automatizado, invertido en mercados globales. Aportes desde USD 150/mes. Cuenta segregada BNY Mellon. Asesor regulado BCU. Dominion Capital Strategies · Guernsey FSC.",
};

export default function DominionPage() {
  return (
    <main>
      {/* 1. Hero — qué es el plan */}
      <PlanHero />

      {/* 2. Cómo funciona — 3 pasos simples */}
      <GlowDivider />
      <PlanPasos />

      {/* 3. Por qué funciona — 6 beneficios */}
      <GlowDivider />
      <PlanBeneficios />

      {/* 4. DCA + Flexibilidad + Riesgo */}
      <GlowDivider />
      <PlanDCA />

      {/* 5. Largo plazo — visual + CTA simulador */}
      <GlowDivider />
      <PlanCapital />

      {/* 6. Mockup de cuenta Dominion */}
      <GlowDivider />
      <DominionAccountPreview />

      {/* 7. Roble Capital + Dominion — respaldo institucional */}
      <GlowDivider />
      <RobleCapitalBlock />

      {/* 8. Qué es Dominion — estructura técnica */}
      <GlowDivider />
      <DominionQue />

      {/* 9. Partners — infraestructura institucional */}
      <GlowDivider />
      <DominionPartners />

      {/* 10. Perfiles de inversión + fondos */}
      <GlowDivider />
      <PlanInversaveSection hideAccountPreview />

      {/* 11. Comparativa */}
      <GlowDivider />
      <DominionComparativa />

      {/* 12. FAQ */}
      <GlowDivider />
      <DominionFAQ />

      <CTASection />
      <Footer />
    </main>
  );
}
