import { Metadata } from "next";
import { ProblemaSection } from "@/components/sections/Problema";
import { CTASection, Footer } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Sistema Previsional Uruguay — BPS, AFAPs y ahorro complementario",
  description:
    "Entendé el sistema previsional uruguayo: BPS, AFAPs, envejecimiento poblacional, tasa de sustitución y por qué el ahorro complementario es cada vez más relevante.",
  keywords: [
    "sistema previsional uruguayo",
    "jubilación Uruguay",
    "AFAPs Uruguay",
    "BPS jubilación",
    "reforma previsional Uruguay",
    "ahorro complementario retiro",
    "retiro en Uruguay",
    "tercer pilar previsional",
    "envejecimiento poblacional Uruguay",
    "BPS cotizantes jubilados",
  ],
  alternates: { canonical: "https://inversave.com/sistema-previsional" },
};

export default function SistemaPrevisionalPage() {
  return (
    <main>
      {/* H1 — único, indexable */}
      <section className="page-hero">
        <div className="inner text-center">
          <p className="section-label">Sistema previsional uruguayo</p>
          <h1 className="text-[clamp(26px,3.2vw,42px)] font-bold leading-tight tracking-tight mb-3">
            El retiro en Uruguay.{" "}
            <span className="text-g3">Lo que conviene entender.</span>
          </h1>
          <p className="text-[16px] text-t2 max-w-2xl mx-auto leading-relaxed mb-2">
            Un análisis objetivo del sistema previsional uruguayo: BPS, AFAPs,
            envejecimiento poblacional y la importancia del ahorro complementario.
            Sin alarmismo. Con datos.
          </p>
          <p className="text-[11px] text-t3 italic">
            La información tiene fines educativos. No constituye asesoramiento financiero personalizado.
          </p>
        </div>
      </section>

      <ProblemaSection />

      <CTASection />
      <Footer />
    </main>
  );
}
