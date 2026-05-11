import type { NewsItem } from "@/data/news";
import { NewsTag } from "./NewsTag";
import { NewsSourceBadge } from "./NewsSourceBadge";

interface Props {
  item: NewsItem;
}

export function NewsCardPreview({ item }: Props) {
  return (
    <article className="relative group flex flex-col bg-white border border-black/[.07] rounded-2xl p-5 hover:shadow-md transition-shadow duration-200">
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
    </article>
  );
}
