import { Metadata } from "next";
import Link from "next/link";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { NewsGrid } from "@/components/news/NewsGrid";
import { getNewsSorted } from "@/data/news";

export const metadata: Metadata = {
  title: "Noticias del sistema previsional uruguayo | INVERSAVE",
  description:
    "Seguimos los principales cambios y debates del sistema previsional uruguayo: reforma jubilatoria, AFAPs, BPS, tasas y mercado financiero. Información educativa con fuente visible.",
  keywords: [
    "noticias sistema previsional Uruguay",
    "reforma jubilatoria Uruguay",
    "noticias AFAPs Uruguay",
    "jubilación BPS 2024",
    "tasas financieras Uruguay",
    "ahorro previsional complementario Uruguay",
    "educación financiera Uruguay",
  ],
  alternates: { canonical: "https://inversave.com/noticias" },
};

export default function NoticiasPage() {
  const news = getNewsSorted();

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="inner text-center">
          <p className="section-label">Noticias</p>
          <h1 className="text-[clamp(26px,3.2vw,42px)] font-bold leading-tight tracking-tight mb-3">
            El sistema previsional,{" "}
            <span className="text-g3">en contexto.</span>
          </h1>
          <p className="text-[16px] text-t2 max-w-2xl mx-auto leading-relaxed">
            Seguimos los principales cambios y debates del sistema previsional uruguayo:
            reforma jubilatoria, AFAPs, BPS y mercado financiero.
            Información educativa con fuente oficial indicada en cada artículo.
          </p>
        </div>
      </section>

      {/* News grid */}
      <section className="section-wrap-white">
        <div className="inner">
          <NewsGrid items={news} />

          {/* Disclaimer */}
          <p className="mt-10 text-center text-[12px] text-t3 max-w-lg mx-auto leading-relaxed">
            Los artículos enlazan a fuentes externas. INVERSAVE no produce ni edita
            el contenido de terceros. Esta sección es exclusivamente educativa e
            informativa, no constituye asesoramiento financiero.
          </p>
        </div>
      </section>

      {/* Internal links */}
      <section className="section-wrap bg-[#F9FAFB]">
        <div className="inner">
          <p className="text-center text-[13px] font-semibold text-t2 uppercase tracking-wider mb-6">
            Seguí explorando
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link
              href="/el-plan"
              className="block bg-white border border-black/[.07] rounded-2xl p-4 hover:shadow-sm transition-shadow text-center"
            >
              <p className="text-[13px] font-bold text-t1 mb-1">El Plan →</p>
              <p className="text-[11px] text-t2">Construí tu estrategia de ahorro.</p>
            </Link>
            <Link
              href="/simulador"
              className="block bg-white border border-black/[.07] rounded-2xl p-4 hover:shadow-sm transition-shadow text-center"
            >
              <p className="text-[13px] font-bold text-t1 mb-1">Simulador →</p>
              <p className="text-[11px] text-t2">Calculá cuánto podés acumular.</p>
            </Link>
            <Link
              href="/sistema-previsional"
              className="block bg-white border border-black/[.07] rounded-2xl p-4 hover:shadow-sm transition-shadow text-center"
            >
              <p className="text-[13px] font-bold text-t1 mb-1">Sistema previsional →</p>
              <p className="text-[11px] text-t2">BPS, AFAPs y cómo funciona.</p>
            </Link>
            <Link
              href="/indicadores"
              className="block bg-white border border-black/[.07] rounded-2xl p-4 hover:shadow-sm transition-shadow text-center"
            >
              <p className="text-[13px] font-bold text-t1 mb-1">Indicadores →</p>
              <p className="text-[11px] text-t2">Tasas, inflación y datos del BCU.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
