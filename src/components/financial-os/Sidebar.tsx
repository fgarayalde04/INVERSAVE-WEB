"use client";

import {
  LayoutGrid,
  Wallet,
  Landmark,
  CreditCard,
  TrendingUp,
  HandCoins,
  ShieldCheck,
  PalmtreeIcon,
  Target,
  FileText,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";
import type { NavKey } from "./data";
import { NAV_ITEMS } from "./data";

const ICONS: Record<NavKey, LucideIcon> = {
  dashboard: LayoutGrid,
  cuentas: Wallet,
  bancos: Landmark,
  tarjetas: CreditCard,
  inversiones: TrendingUp,
  prestamos: HandCoins,
  seguros: ShieldCheck,
  jubilacion: PalmtreeIcon,
  objetivos: Target,
  documentos: FileText,
  reportes: BarChart3,
  configuracion: Settings,
};

export default function Sidebar({
  active,
  onSelect,
}: {
  active: NavKey;
  onSelect: (key: NavKey) => void;
}) {
  return (
    <aside className="flex h-full w-[248px] shrink-0 flex-col border-r border-black/[.06] bg-white">
      {/* Brand */}
      <div className="flex h-16 shrink-0 items-center gap-2.5 px-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#0B1220]">
          <div className="h-2.5 w-2.5 rounded-[3px] bg-[#635BFF]" />
        </div>
        <span className="text-[14.5px] font-semibold tracking-[-0.01em] text-[#0B1220]">
          Financial OS
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-2">
        <ul className="space-y-[2px]">
          {NAV_ITEMS.map((item) => {
            const Icon = ICONS[item.key];
            const isActive = item.key === active;
            return (
              <li key={item.key}>
                <button
                  onClick={() => onSelect(item.key)}
                  className={`group flex w-full items-center gap-2.5 rounded-[10px] px-3 py-[9px] text-[13.5px] transition-colors ${
                    isActive
                      ? "bg-[#F2F1FF] font-semibold text-[#0B1220]"
                      : "font-medium text-[#6B7280] hover:bg-black/[.035] hover:text-[#0B1220]"
                  }`}
                >
                  <Icon
                    size={17}
                    strokeWidth={2}
                    className={isActive ? "text-[#635BFF]" : "text-[#9CA3AF] group-hover:text-[#6B7280]"}
                  />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User */}
      <div className="shrink-0 border-t border-black/[.06] p-3">
        <button className="flex w-full items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-left hover:bg-black/[.035]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1220] text-[12px] font-semibold text-white">
            FG
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-[#0B1220]">Francisco Garayalde</p>
            <p className="truncate text-[11.5px] text-[#9CA3AF]">Plan Personal</p>
          </div>
        </button>
      </div>
    </aside>
  );
}
