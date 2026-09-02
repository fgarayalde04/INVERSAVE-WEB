"use client";

import { INSTITUTIONS } from "./data";

const PALETTE = ["#EC4899", "#F97316", "#3B82F6", "#EF4444", "#0EA5A4", "#00A3E0", "#635BFF", "#EB001B", "#0B1220"];

export default function Institutions() {
  return (
    <div className="rounded-3xl border border-black/[.06] bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-[#0B1220]">Instituciones conectadas</h2>
        <button className="text-[12.5px] font-medium text-[#635BFF] hover:text-[#4F46E5]">Agregar cuenta</button>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {INSTITUTIONS.map((inst, i) => (
          <div
            key={inst.name}
            className="flex items-center gap-2.5 rounded-full border border-black/[.06] bg-[#FAFAFB] py-1.5 pl-1.5 pr-3.5"
          >
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: PALETTE[i % PALETTE.length] }}
            >
              {inst.name.charAt(0)}
            </div>
            <span className="text-[12.5px] font-medium text-[#374151]">{inst.name}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#0F9D6E]" />
          </div>
        ))}
      </div>
    </div>
  );
}
