"use client";

import { CreditCard, HandCoins, ShieldCheck, Receipt, type LucideIcon } from "lucide-react";
import { UPCOMING_PAYMENTS } from "./data";
import { formatUSD } from "./format";

const ICONS: Record<string, LucideIcon> = {
  Tarjetas: CreditCard,
  Préstamos: HandCoins,
  Seguros: ShieldCheck,
  Impuestos: Receipt,
};

export default function UpcomingPayments() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-black/[.06] bg-white p-6">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-[#0B1220]">Próximos vencimientos</h2>
        <button className="text-[12.5px] font-medium text-[#635BFF] hover:text-[#4F46E5]">Ver todos</button>
      </div>

      <ul className="mt-3 flex-1 divide-y divide-black/[.05]">
        {UPCOMING_PAYMENTS.map((p) => {
          const Icon = ICONS[p.category];
          const urgent = p.daysLeft <= 5;
          return (
            <li key={p.name} className="flex items-center gap-3 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6]">
                <Icon size={15} className="text-[#374151]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-[#0B1220]">{p.name}</p>
                <p className="text-[11.5px] text-[#9CA3AF]">{p.category}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-[13px] font-semibold text-[#0B1220]">{formatUSD(p.amount)}</p>
                <p className={`text-[11px] font-medium ${urgent ? "text-[#E0473B]" : "text-[#9CA3AF]"}`}>
                  {p.daysLeft} días
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
