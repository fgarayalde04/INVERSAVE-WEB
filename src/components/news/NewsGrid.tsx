import type { NewsItem } from "@/data/news";
import { NewsCardPreview } from "./NewsCardPreview";

interface NewsGridProps {
  items: NewsItem[];
}

export function NewsGrid({ items }: NewsGridProps) {
  if (items.length === 0) {
    return (
      <p className="text-center text-t2 text-[14px] py-12">
        No hay artículos disponibles en este momento.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <NewsCardPreview key={item.id} item={item} />
      ))}
    </div>
  );
}
