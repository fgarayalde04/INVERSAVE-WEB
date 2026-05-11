import type { NewsItem } from "@/data/news";
import { NewsTag } from "./NewsTag";
import { NewsSourceBadge } from "./NewsSourceBadge";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="relative group flex flex-col bg-white border border-black/[.07] rounded-2xl p-5 hover:shadow-md transition-shadow duration-200">
      {/* Tag */}
      <div className="mb-3">
        <NewsTag label={item.tag} category={item.category} />
      </div>

      {/* Title */}
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

      {/* Summary */}
      <p className="text-[13px] text-t2 leading-relaxed mb-4 flex-1">
        {item.summary}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/[.05]">
        <NewsSourceBadge
          source={item.source}
          country={item.sourceCountry}
          date={item.date}
        />
        <span className="text-[11px] font-semibold text-g3 group-hover:underline">
          Leer →
        </span>
      </div>
    </article>
  );
}
