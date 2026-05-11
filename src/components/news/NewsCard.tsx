import type { NewsItem } from "@/data/news";
import { NewsTag } from "./NewsTag";
import { NewsSourceBadge } from "./NewsSourceBadge";

interface NewsCardProps {
  item: NewsItem;
}

const CATEGORY_LABELS: Record<string, string> = {
  reforma:       "Reforma previsional",
  afaps:         "AFAPs",
  bps:           "BPS",
  mercado:       "Mercado",
  educacion:     "Educación",
  internacional: "Internacional",
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="relative group flex flex-col bg-white border border-black/[.07] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200">

      {/* ── Imagen ──────────────────────────────────────────── */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F0EFE8] flex-shrink-0">
        {item.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.image}
            alt={item.imageAlt ?? item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) parent.dataset.fallback = "true";
            }}
          />
        ) : null}

        {/* Fallback: se muestra si no hay imagen o falla la carga */}
        {!item.image && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg,#0C1A11 0%,#1A3A22 100%)" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.35">
              <path d="M4 20h20M4 14h14M4 8h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-[11px] font-semibold text-white/40 tracking-[0.08em] uppercase">
              Actualidad previsional
            </span>
          </div>
        )}

        {/* Badge fuente */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.55)", color: "#fff", backdropFilter: "blur(6px)" }}
          >
            {item.source}
          </span>
        </div>
      </div>

      {/* ── Contenido ───────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tag */}
        <div className="mb-3">
          <NewsTag label={item.tag} category={item.category} />
        </div>

        {/* Título */}
        <h2 className="text-[15px] font-semibold text-t1 leading-snug mb-2 group-hover:text-g3 transition-colors">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0"
          >
            {item.title}
          </a>
        </h2>

        {/* Resumen */}
        <p className="text-[13px] text-t2 leading-relaxed mb-4 flex-1 line-clamp-3">
          {item.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/[.05]">
          <NewsSourceBadge
            source={item.source}
            country={item.sourceCountry}
            date={item.date}
          />
          <span className="text-[11px] font-semibold text-g3 group-hover:underline flex items-center gap-1">
            Leer noticia
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

    </article>
  );
}
