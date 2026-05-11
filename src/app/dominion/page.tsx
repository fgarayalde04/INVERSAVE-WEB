import { Metadata } from "next";
import Link from "next/link";
import PlanHero from "@/components/sections/dominion/PlanHero";
import DominionAccountPreview from "@/components/sections/dominion/DominionAccountPreview";
import PlanPasos from "@/components/sections/dominion/PlanPasos";
import PlanComoFunciona from "@/components/sections/dominion/PlanComoFunciona";
import PlanVideoAndSP500 from "@/components/sections/dominion/PlanVideoAndSP500";
import PlanCapital from "@/components/sections/dominion/PlanCapital";
import RobleCapitalBlock from "@/components/sections/dominion/RobleCapitalBlock";
import DominionQue from "@/components/sections/dominion/DominionQue";
import DominionPartners from "@/components/sections/dominion/DominionPartners";
import DominionFAQ from "@/components/sections/dominion/DominionFAQ";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { GlowDivider } from "@/components/ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "El Plan — Ahorro e inversión global desde Uruguay | INVERSAVE",
  description:
    "Un plan de ahorro mensual automatizado, invertido en mercados globales. Aportes desde USD 150/mes. Cuenta segregada BNY Mellon. Asesor regulado BCU. Dominion Capital Strategies · Guernsey FSC.",
};

// ── Navegación interna ───────────────────────────────────────────────────────
function PlanInternalNav() {
  const LINKS = [
    { label: "Cómo funciona",        href: "#como-funciona" },
    { label: "Cómo se ve la cuenta", href: "#como-se-ve-una-cuenta" },
    { label: "Instituciones",        href: "#instituciones" },
    { label: "Preguntas frecuentes", href: "#flexibilidad-riesgos" },
  ];

  return (
    <nav
      aria-label="Secciones de El Plan"
      className="px-5 py-3 bg-white border-b border-black/[.06] overflow-x-auto"
    >
      <div className="flex items-center gap-2 max-w-5xl mx-auto min-w-max">
        <span className="text-[11px] font-semibold text-t3 uppercase tracking-[0.08em] flex-shrink-0 mr-1">
          En esta página:
        </span>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="flex-shrink-0 text-[13px] font-medium text-t2 bg-[#F4F4F1] hover:bg-[#EDF8E8] hover:text-g3 rounded-full px-4 py-1.5 transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DominionPage() {
  return (
    <main>
      {/* Hero */}
      <PlanHero />

      {/* Navegación interna — debajo del hero */}
      <PlanInternalNav />

      {/* Cómo se ve la cuenta — mockup arriba */}
      <div id="como-se-ve-una-cuenta" className="scroll-mt-20">
        <DominionAccountPreview />
      </div>

      {/* Cómo funciona */}
      <GlowDivider />
      <div id="como-funciona" className="scroll-mt-20">
        <PlanPasos />
        <PlanComoFunciona />
      </div>

      {/* Video + empresas del índice */}
      <GlowDivider />
      <PlanVideoAndSP500 />
      <GlowDivider />
      <PlanCapital />

      {/* Instituciones */}
      <GlowDivider />
      <div id="instituciones" className="scroll-mt-20">
        <RobleCapitalBlock />
        <GlowDivider />
        <DominionQue />
        <GlowDivider />
        <DominionPartners />
      </div>

      {/* Preguntas frecuentes */}
      <GlowDivider />
      <div id="flexibilidad-riesgos" className="scroll-mt-20">
        <DominionFAQ />
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}
