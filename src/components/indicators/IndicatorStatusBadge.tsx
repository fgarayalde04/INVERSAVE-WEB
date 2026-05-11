import type { IndicatorStatus } from "@/lib/indicators/types";

const CONFIG: Record<
  IndicatorStatus,
  { label: string; dot: string; bg: string; text: string; border: string }
> = {
  updated: {
    label: "Actualizado",
    dot:   "bg-g1",
    bg:    "bg-[#EDF8E8]",
    text:  "text-g3",
    border:"border-g1/20",
  },
  pending_review: {
    label: "Pendiente",
    dot:   "bg-warn",
    bg:    "bg-[#FEF0EC]",
    text:  "text-warn",
    border:"border-warn/20",
  },
  source_unavailable: {
    label: "Sin fuente",
    dot:   "bg-t3/40",
    bg:    "bg-[#F0EFE8]",
    text:  "text-t3",
    border:"border-black/10",
  },
};

interface Props {
  status: IndicatorStatus;
  className?: string;
}

export function IndicatorStatusBadge({ status, className = "" }: Props) {
  const c = CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold rounded-full px-2.5 py-1 border ${c.bg} ${c.text} ${c.border} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
      {c.label}
    </span>
  );
}
