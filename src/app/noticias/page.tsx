import { Metadata } from "next";
import { Footer } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Noticias — INVERSAVE",
  description: "Novedades, análisis y actualizaciones del mercado desde INVERSAVE.",
};

export default function NoticiasPage() {
  return (
    <main>
      <section className="section-wrap min-h-[60vh] flex items-center">
        <div className="inner text-center">
          <p className="section-label mb-3">Próximamente</p>
          <h1 className="text-h2 font-bold mb-4 text-t1">Noticias y análisis de mercado</h1>
          <p className="text-[17px] text-t2 leading-relaxed max-w-md mx-auto">
            Análisis, actualizaciones y novedades sobre inversión, mercados globales
            y planificación patrimonial. En construcción.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
