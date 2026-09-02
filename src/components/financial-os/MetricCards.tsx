"use client";

import { ArrowUpRight, ArrowDownRight, Wallet2, Banknote, TrendingUp, TrendingDown, Landmark, PiggyBank } from "lucide-react";
import { METRICS, type MetricCard as MetricCardData } from "./data";
import { formatUSD } from "./format";

function DeltaTag({ delta, deltaTone, deltaDirection }: Pick<MetricCardData, "delta" | "deltaTone" | "deltaDirection">) {
  if (!delta) return null;
  const toneClass =
    deltaTone === "positive"
      ? "text-[#0F9D6E] bg-[#EAFBF3]"
      : deltaTone === "negative"
      ? "text-[#E0473B] bg-[#FDEEEC]"
      : "text-[#6B7280] bg-[#F3F4F6]";
  const Icon = deltaDirection === "up" ? ArrowUpRight : deltaDirection === "down" ? ArrowDownRight : null;
  return (
    <span className={`inline-flex items-center gap-0.5 rounded-full px-2 py-[3px] text-[11px] font-medium ${toneClass}`}>
      {Icon && <Icon size={11} strokeWidth={2.5} />}
      {delta}
    </span>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 120 32" className="h-8 w-full" preserveAspectRatio="none">
      <path
        d="M0 24 L15 22 L30 25 L45 16 L60 18 L75 10 L90 13 L105 6 L120 4"
        fill="none"
        stroke="#635BFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MetricCards() {
  return (
    <div className="grid grid-cols-4 gap-3.5">
      {/* Hero card: Patrimonio total */}
      <div className="col-span-2 rounded-3xl border border-black/[.06] bg-white p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[13px] font-medium text-[#6B7280]">{METRICS.patrimonio.label}</p>
            <p className="mt-2 text-[34px] font-semibold leading-none tracking-[-0.02em] text-[#0B1220]">
              {formatUSD(METRICS.patrimonio.value)}
            </p>
            <div className="mt-3">
              <DeltaTag
                delta={METRICS.patrimonio.delta}
                deltaTone={METRICS.patrimonio.deltaTone}
                deltaDirection={METRICS.patrimonio.deltaDirection}
              />
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F1FF]">
            <Wallet2 size={18} className="text-[#635BFF]" />
          </div>
        </div>
        <div className="mt-5">
          <Sparkline />
        </div>
      </div>

      <MetricCard
        icon={<Banknote size={17} className="text-[#0F9D6E]" />}
        iconBg="bg-[#EAFBF3]"
        data={METRICS.liquidez}
      />
      <MetricCard
        icon={<PiggyBank size={17} className="text-[#0B1220]" />}
        iconBg="bg-[#F3F4F6]"
        data={METRICS.cash}
      />

      <MetricCard
        icon={<TrendingUp size={17} className="text-[#0F9D6E]" />}
        iconBg="bg-[#EAFBF3]"
        data={METRICS.ingresos}
      />
      <MetricCard
        icon={<TrendingDown size={17} className="text-[#E0473B]" />}
        iconBg="bg-[#FDEEEC]"
        data={METRICS.gastos}
      />
      <MetricCard
        icon={<Landmark size={17} className="text-[#635BFF]" />}
        iconBg="bg-[#F2F1FF]"
        data={METRICS.inversiones}
      />
      <MetricCard
        icon={<TrendingDown size={17} className="text-[#E0473B]" />}
        iconBg="bg-[#FDEEEC]"
        data={METRICS.deudas}
      />
    </div>
  );
}

function MetricCard({
  icon,
  iconBg,
  data,
}: {
  icon: React.ReactNode;
  iconBg: string;
  data: MetricCardData;
}) {
  return (
    <div className="rounded-3xl border border-black/[.06] bg-white p-5">
      <div className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBg}`}>{icon}</div>
      <p className="mt-3.5 text-[13px] font-medium text-[#6B7280]">{data.label}</p>
      <p className="mt-1 text-[22px] font-semibold tracking-[-0.015em] text-[#0B1220]">{formatUSD(data.value)}</p>
      <div className="mt-2.5">
        <DeltaTag delta={data.delta} deltaTone={data.deltaTone} deltaDirection={data.deltaDirection} />
      </div>
    </div>
  );
}
