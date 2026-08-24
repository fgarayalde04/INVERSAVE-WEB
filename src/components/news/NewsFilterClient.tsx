"use client";

import { useState } from "react";
import Link from "next/link";
import type { NewsItem, NewsCategory } from "@/data/news";
import type { InternalNewsItem } from "@/data/internalNews";
import { NewsTag } from "./NewsTag";
import { NewsSourceBadge } from "./NewsSourceBadge";

// ── Types ─────────────────────────────────────────────────────────────────────

export type DisplayItem =
  | { kind: "external"; item: NewsItem }
  | { kind: "internal"; item: InternalNewsItem };

// ── Filter config ─────────────────────────────────────────────────────────────

const FILTERS: { id: string; label: string; categories: NewsCategory[] }[] = [
  { id: "todas",     label: "Todas",      categories: [] },
  { id: "jubilacion",label: "Jubilación", categories: ["jubilacion", "reforma"] },
  { id: "afap",      label: "AFAP",       categories: ["afaps"] },
  { id: "bps",       label: "BPS",        categories: ["bps"] },
  { id: "tasas",     label: "Tasas",      categories: ["tasas", "mercado"] },
  { id: "ahorro",    label: "Ahorro",     categories: ["ahorro"] },
];

// ── Status badge ──────────────────────────────────────────────────────────────

const STATUS_STYLES = {
  propuesta:      { label: "Propuesta",    bg: "#FEF9EC", text: "#92620F", border: "#F6D87A" },
  "en-discusion": { label: "En discusión", bg: "#EEF2FF", text: "#4338CA", border: "#C7D2FE" },
  vigente:        { label: "Vigente",      bg: "#EDFAF0", text: "#166534", border: "#86EFAC" },
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-UY", { day: "numeric", month: "short", year: "numeric" })
    .format(new Date(y, m - 1, d));
}

// ── InternalCard ──────────────────────────────────────────────────────────────

function InternalCard({ item }: { item: InternalNewsItem }) {
  const status = STATUS_STYLES[item.status];
  return (
    <article className="relative group flex flex-col bg-white border border-black/[.07] rounded-2xl p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <NewsTag label={item.tag} category={item.category} />
        <span
          className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border"
          style={{ background: status.bg, color: status.text, borderColor: status.border }}
        >
          {status.label}
        </span>
      </div>

      <h2 className="text-[15px] font-semibold text-t1 leading-snug mb-2 group-hover:text-g3 transition-colors">
        <Link href={`/noticias/${item.slug}`} className="after:absolute after:inset-0">
          {item.title}
        </Link>
      </h2>

      <p className="text-[13px] text-t2 leading-relaxed mb-4 flex-1 line-clamp-3">
        {item.summary}
      </p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/[.05]">
        <time className="text-[12px] text-t3" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
        <span className="text-[11px] font-semibold text-g3 group-hover:underline flex items-center gap-1">
          Leer más
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </article>
  );
}

// ── ExternalCard ──────────────────────────────────────────────────────────────

function ExternalCard({ item }: { item: NewsItem }) {
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
        <NewsSourceBadge source={item.source} country={item.sourceCountry} date={item.date} />
        <span className="text-[11px] font-semibold text-g3 group-hover:underline flex items-center gap-1">
          Leer noticia
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </article>
  );
}

// ── NewsFilterClient ──────────────────────────────────────────────────────────

interface Props {
  items: DisplayItem[];
}

export function NewsFilterClient({ items }: Props) {
  const [activeFilter, setActiveFilter] = useState("todas");

  const filtered = activeFilter === "todas"
    ? items
    : items.filter((d) => {
        const cat = d.kind === "external" ? d.item.category : d.item.category;
        const f = FILTERS.find((x) => x.id === activeFilter);
        return f ? f.categories.includes(cat) : true;
      });

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 py-1.5 text-[12px] font-semibold rounded-full border transition-all ${
              activeFilter === f.id
                ? "bg-g3 text-white border-g3"
                : "bg-white text-t2 border-black/[.10] hover:border-g3/50 hover:text-g3"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-t2 text-[14px] py-12">
          No hay artículos en esta categoría aún.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d) =>
            d.kind === "internal" ? (
              <InternalCard key={d.item.id} item={d.item} />
            ) : (
              <ExternalCard key={d.item.id} item={d.item} />
            )
          )}
        </div>
      )}
    </div>
  );
}
