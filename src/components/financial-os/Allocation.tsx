"use client";

import { ALLOCATION } from "./data";

function Donut() {
  const size = 148;
  const stroke = 20;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F3F4F6" strokeWidth={stroke} />
      {ALLOCATION.map((seg) => {
        const dash = (seg.value / 100) * c;
        const circle = (
          <circle
            key={seg.label}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${c - dash}`}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
          />
        );
        offset += dash;
        return circle;
      })}
    </svg>
  );
}

export default function Allocation() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-black/[.06] bg-white p-6">
      <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-[#0B1220]">Distribución patrimonial</h2>

      <div className="mt-5 flex flex-1 items-center gap-6">
        <div className="relative shrink-0">
          <Donut />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[11px] font-medium text-[#9CA3AF]">Total</span>
            <span className="text-[15px] font-semibold text-[#0B1220]">100%</span>
          </div>
        </div>

        <ul className="flex-1 space-y-2.5">
          {ALLOCATION.map((seg) => (
            <li key={seg.label} className="flex items-center justify-between text-[12.5px]">
              <span className="flex items-center gap-2 text-[#374151]">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: seg.color }} />
                {seg.label}
              </span>
              <span className="font-semibold text-[#0B1220]">{seg.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
