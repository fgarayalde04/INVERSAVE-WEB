import type { NewsItem, NewsCategory } from "@/data/news";
import { NewsTag } from "./NewsTag";
import { NewsSourceBadge } from "./NewsSourceBadge";

const CATEGORY_PLACEHOLDER: Record<
  NewsCategory,
  { gradient: string; label: string; icon: string }
> = {
  reforma: {
    gradient: "linear-gradient(135deg,#2D1B69 0%,#5B3FA6 100%)",
    label: "Reforma previsional",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  afaps: {
    gradient: "linear-gradient(135deg,#0C2A4A 0%,#1A5276 100%)",
    label: "AFAPs",
    icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  },
  bps: {
    gradient: "linear-gradient(135deg,#4A1A00 0%,#923B0A 100%)",
    label: "BPS",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  mercado: {
    gradient: "linear-gradient(135deg,#0C3320 0%,#1A6638 100%)",
    label: "Mercado",
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
  },
  educacion: {
    gradient: "linear-gradient(135deg,#3D2B00 0%,#7A5500 100%)",
    label: "Educación financiera",
    icon: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
  },
  internacional: {
    gradient: "linear-gradient(135deg,#1A2035 0%,#2D3A5C 100%)",
    label: "Internacional",
    icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0c-1.66 2.92-2.5 5.9-2.5 10s.84 7.08 2.5 10m0-20c1.66 2.92 2.5 5.9 2.5 10s-.84 7.08-2.5 10M2 12h20",
  },
};

interface Props {
  item: NewsItem;
}

export function NewsCardPreview({ item }: Props) {
  const ph = CATEGORY_PLACEHOLDER[item.category];

  return (
    <article className="relative group flex flex-col bg-white border border-black/[.07] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200">

      {/* Visual header — category gradient */}
      <div
        className="relative w-full aspect-[16/9] flex-shrink-0 flex flex-col items-center justify-center gap-3"
        style={{ background: ph.gradient }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        >
          <path d={ph.icon} />
        </svg>
        <span className="text-[10px] font-semibold text-white/40 tracking-[0.1em] uppercase">
          {ph.label}
        </span>

        {/* Source badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.55)", color: "#fff", backdropFilter: "blur(6px)" }}
          >
            {item.source}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-3">
          <NewsTag label={item.tag} category={item.category} />
        </div>

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

        <p className="text-[13px] text-t2 leading-relaxed mb-4 flex-1 line-clamp-3">
          {item.summary}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/[.05]">
          <NewsSourceBadge
            source={item.source}
            country={item.sourceCountry}
            date={item.date}
          />
          <span className="text-[11px] font-semibold text-g3 group-hover:underline flex items-center gap-1">
            Leer noticia
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
