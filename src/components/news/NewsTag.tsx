import type { NewsCategory } from "@/data/news";

const CATEGORY_STYLES: Record<NewsCategory, string> = {
  reforma:       "bg-purple-50 text-purple-700 border-purple-200",
  afaps:         "bg-blue-50 text-blue-700 border-blue-200",
  bps:           "bg-orange-50 text-orange-700 border-orange-200",
  mercado:       "bg-emerald-50 text-emerald-700 border-emerald-200",
  educacion:     "bg-yellow-50 text-yellow-700 border-yellow-200",
  internacional: "bg-slate-50 text-slate-600 border-slate-200",
};

interface NewsTagProps {
  label: string;
  category: NewsCategory;
}

export function NewsTag({ label, category }: NewsTagProps) {
  return (
    <span
      className={`inline-block text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full border ${CATEGORY_STYLES[category]}`}
    >
      {label}
    </span>
  );
}
