"use client";

import { Home, ShieldCheck, PalmtreeIcon, Plane } from "lucide-react";
import { GOALS } from "./data";
import { formatUSD } from "./format";

const ICONS = [Home, ShieldCheck, PalmtreeIcon, Plane];

export default function Goals() {
  return (
    <div className="rounded-3xl border border-black/[.06] bg-white p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-[#0B1220]">Objetivos</h2>
        <button className="text-[12.5px] font-medium text-[#635BFF] hover:text-[#4F46E5]">Ver todos</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {GOALS.map((goal, i) => {
          const Icon = ICONS[i];
          const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
          const done = pct >= 100;
          return (
            <div key={goal.label} className="rounded-2xl bg-[#FAFAFB] p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-black/[.05]">
                <Icon size={15} className="text-[#0B1220]" />
              </div>
              <p className="mt-3 text-[13px] font-semibold text-[#0B1220]">{goal.label}</p>
              <p className="mt-0.5 text-[11.5px] text-[#9CA3AF]">
                {formatUSD(goal.current)} de {formatUSD(goal.target)}
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/[.06]">
                <div
                  className={`h-full rounded-full ${done ? "bg-[#0F9D6E]" : "bg-[#635BFF]"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#9CA3AF]">{goal.eta}</span>
                <span className={`text-[11px] font-semibold ${done ? "text-[#0F9D6E]" : "text-[#0B1220]"}`}>{pct}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
