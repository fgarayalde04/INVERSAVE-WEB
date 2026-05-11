import type { NewsItem } from "@/data/news";

const FLAG: Record<NewsItem["sourceCountry"], string> = {
  UY: "🇺🇾",
  AR: "🇦🇷",
  US: "🇺🇸",
  ES: "🇪🇸",
};

interface NewsSourceBadgeProps {
  source: string;
  country: NewsItem["sourceCountry"];
  date: string; // ISO: "2024-07-01"
}

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-UY", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function NewsSourceBadge({ source, country, date }: NewsSourceBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-[12px] text-t3">
      <span>{FLAG[country]}</span>
      <span className="font-medium text-t2">{source}</span>
      <span className="text-t3/60">·</span>
      <time dateTime={date}>{formatDate(date)}</time>
    </div>
  );
}
