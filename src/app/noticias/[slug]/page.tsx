import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getInternalNewsBySlug, INTERNAL_NEWS } from "@/data/internalNews";
import { CTASection, Footer } from "@/components/sections/CTAFooter";
import { NewsTag } from "@/components/news/NewsTag";

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return INTERNAL_NEWS.map((n) => ({ slug: n.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getInternalNewsBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | INVERTITE`,
    description: article.summary,
    alternates: { canonical: `https://invertite.com/noticias/${article.slug}` },
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const STATUS_STYLES = {
  propuesta:      { label: "Propuesta",    bg: "#FEF9EC", text: "#92620F", border: "#F6D87A" },
  "en-discusion": { label: "En discusión", bg: "#EEF2FF", text: "#4338CA", border: "#C7D2FE" },
  vigente:        { label: "Vigente",      bg: "#EDFAF0", text: "#166534", border: "#86EFAC" },
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-UY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(y, m - 1, d));
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NoticiaSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getInternalNewsBySlug(params.slug);
  if (!article) notFound();

  const status = STATUS_STYLES[article.status];

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="page-hero" style={{ paddingBottom: "2rem" }}>
        <div className="inner max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-t3 mb-6">
            <Link href="/noticias" className="hover:text-g3 transition-colors">
              ← Noticias
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <NewsTag label={article.tag} category={article.category} />
            <span
              className="inline-flex items-center text-[11px] font-bold px-2.5 py-0.5 rounded-full border"
              style={{ background: status.bg, color: status.text, borderColor: status.border }}
            >
              {status.label}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(22px,3vw,36px)] font-bold leading-tight tracking-tight text-t1 mb-3">
            {article.title}
          </h1>

          {/* Date */}
          <time className="text-[13px] text-t3" dateTime={article.date}>
            {formatDate(article.date)}
          </time>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <section className="section-wrap-white">
        <div className="inner max-w-2xl mx-auto">

          {/* Intro */}
          <div className="space-y-4 mb-10">
            {article.intro.map((p, i) => (
              <p key={i} className="text-[16px] text-t2 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* ¿Por qué importa? */}
          <div
            className="rounded-2xl px-6 py-5 mb-8"
            style={{ background: "#EDF8E8", border: "1px solid #A7F3C0" }}
          >
            <p className="text-[12px] font-bold uppercase tracking-widest text-g3 mb-2">
              ¿Por qué importa?
            </p>
            <p className="text-[15px] text-t1 leading-relaxed">
              {article.porque_importa}
            </p>
          </div>

          {/* ¿Qué debería mirar? */}
          <div className="mb-10">
            <p className="text-[12px] font-bold uppercase tracking-widest text-t3 mb-4">
              ¿Qué debería mirar?
            </p>
            <div className="space-y-3">
              {article.que_mirar.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 bg-white border border-black/[.07] rounded-xl px-4 py-3.5"
                >
                  <div
                    className="w-1.5 rounded-full flex-shrink-0 self-stretch"
                    style={{ background: "#2E8B74" }}
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-t1 mb-0.5">{item.label}</p>
                    <p className="text-[12px] text-t2 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA contextual */}
          {article.cta && (
            <div className="mb-10">
              <Link
                href={article.cta.href}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-g3 border border-g3 rounded-xl px-5 py-3 hover:bg-[#EDF8E8] transition-colors"
              >
                {article.cta.label}
              </Link>
            </div>
          )}

          {/* Fuentes */}
          <div className="border-t border-black/[.07] pt-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-t3 mb-3">
              Fuente
            </p>
            <ul className="space-y-2">
              {article.sources.map((src) => (
                <li key={src.url}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-g3 hover:underline flex items-center gap-1.5"
                  >
                    {src.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 8.5L8.5 1.5M8.5 1.5H4M8.5 1.5V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-[11px] text-t3 leading-relaxed border-t border-black/[.06] pt-4">
            La información publicada tiene fines exclusivamente educativos e informativos. No
            constituye asesoramiento financiero ni recomendación de inversión. Verificá siempre
            en las fuentes oficiales indicadas.
          </p>

          {/* Back */}
          <div className="mt-8">
            <Link
              href="/noticias"
              className="text-[13px] font-semibold text-t2 hover:text-g3 transition-colors flex items-center gap-1"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Volver a Noticias
            </Link>
          </div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
