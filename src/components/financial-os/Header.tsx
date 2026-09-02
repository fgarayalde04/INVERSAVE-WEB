"use client";

import { useRef, useState } from "react";
import { Search, Sparkles, Bell, PanelRight } from "lucide-react";
import { SEARCH_EXAMPLES } from "./data";

export default function Header({
  aiOpen,
  onToggleAI,
}: {
  aiOpen: boolean;
  onToggleAI: () => void;
}) {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <header className="relative z-20 flex h-16 shrink-0 items-center gap-4 border-b border-black/[.06] bg-white/90 px-6 backdrop-blur">
      <div className="relative w-full max-w-[520px]">
        <div
          className={`flex items-center gap-2.5 rounded-full border bg-[#F7F7F9] px-4 py-2.5 transition-all ${
            focused ? "border-[#635BFF]/40 bg-white ring-4 ring-[#635BFF]/[.08]" : "border-transparent"
          }`}
        >
          <Search size={16} strokeWidth={2} className="shrink-0 text-[#9CA3AF]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 120)}
            placeholder="Preguntale cualquier cosa sobre tus finanzas…"
            className="w-full bg-transparent text-[13.5px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none"
          />
          <kbd className="hidden shrink-0 rounded-md border border-black/[.08] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-[#9CA3AF] sm:block">
            ⌘K
          </kbd>
        </div>

        {focused && (
          <div className="absolute left-0 top-[calc(100%+8px)] w-full rounded-2xl border border-black/[.07] bg-white p-2 shadow-xl">
            <p className="px-2.5 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Preguntas frecuentes
            </p>
            {SEARCH_EXAMPLES.map((ex) => (
              <button
                key={ex}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setQuery(ex)}
                className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-[13px] text-[#374151] hover:bg-[#F7F7F9]"
              >
                <Sparkles size={13} className="shrink-0 text-[#635BFF]" />
                {ex}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-full text-[#6B7280] hover:bg-black/[.045]">
          <Bell size={17} strokeWidth={2} />
        </button>
        <button
          onClick={onToggleAI}
          className={`flex h-9 items-center gap-2 rounded-full px-3.5 text-[13px] font-semibold transition-colors ${
            aiOpen
              ? "bg-[#0B1220] text-white"
              : "bg-[#F2F1FF] text-[#5147E5] hover:bg-[#E7E5FF]"
          }`}
        >
          <Sparkles size={14} strokeWidth={2.2} />
          Asistente
          <PanelRight size={14} strokeWidth={2} className="opacity-60" />
        </button>
      </div>
    </header>
  );
}
