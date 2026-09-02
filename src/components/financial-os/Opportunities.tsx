"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import { OPPORTUNITIES } from "./data";

export default function Opportunities() {
  return (
    <div className="rounded-3xl border border-black/[.06] bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-[#0B1220]">Oportunidades para vos</h2>
        <span className="rounded-full bg-[#F2F1FF] px-2.5 py-1 text-[11px] font-semibold text-[#5147E5]">
          {OPPORTUNITIES.length} nuevas
        </span>
      </div>

      <ul className="space-y-1">
        {OPPORTUNITIES.map((op) => (
          <li key={op.text}>
            <button className="group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-colors hover:bg-[#FAFAFB]">
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#0F9D6E]" strokeWidth={2} />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] leading-snug text-[#1F2430]">{op.text}</p>
                <span className="mt-1 inline-block rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[10.5px] font-medium text-[#6B7280]">
                  {op.tag}
                </span>
              </div>
              <ChevronRight size={15} className="shrink-0 text-[#D1D5DB] transition-transform group-hover:translate-x-0.5 group-hover:text-[#9CA3AF]" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
