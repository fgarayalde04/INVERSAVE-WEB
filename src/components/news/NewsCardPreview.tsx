"use client";

import { useState, useEffect } from "react";
import type { NewsItem } from "@/data/news";
import { NewsTag } from "./NewsTag";
import { NewsSourceBadge } from "./NewsSourceBadge";

interface Props {
  item: NewsItem;
}

export function NewsCardPreview({ item }: Props) {
  const [image, setImage] = useState<string | null>(item.image ?? null);
  const [imgReady, setImgReady] = useState(false);

  useEffect(() => {
    if (item.image) return;

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `/api/news-preview?url=${encodeURIComponent(item.url)}`
        );
        if (!res.ok || cancelled) return;
        const data = await res.json();
        if (!cancelled && data.success && data.image) {
          setImage(data.image);
        }
      } catch {
        // silently fallback to placeholder
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [item.url, item.image]);

  return (
    <article className="relative group flex flex-col bg-white border border-black/[.07] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200">

      {/* Image slot — fixed 16:9 */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0C1A11] flex-shrink-0">

        {image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image}
            alt={item.imageAlt ?? item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] ${
              imgReady ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setImgReady(true)}
            onError={() => {
              setImage(null);
              setImgReady(false);
            }}
          />
        )}

        {/* Placeholder — always present, fades out when image is ready */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-500 ${
            image && imgReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{
            background: "linear-gradient(135deg,#0C1A11 0%,#1A3A22 100%)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.35">
            <path
              d="M4 20h20M4 14h14M4 8h8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[11px] font-semibold text-white/40 tracking-[0.08em] uppercase">
            Actualidad previsional
          </span>
        </div>

        {/* Source badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              backdropFilter: "blur(6px)",
            }}
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
