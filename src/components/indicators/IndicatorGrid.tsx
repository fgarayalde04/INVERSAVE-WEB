import type { Indicator } from "@/lib/indicators/types";
import { IndicatorCard }  from "./IndicatorCard";

type CardVariant = "default" | "fed" | "bps" | "afap" | "bank";

interface Props {
  indicators: Indicator[];
  variant?: CardVariant;
  /** Columnas en desktop. Por defecto: 2 */
  cols?: 2 | 3 | 4;
  className?: string;
}

const COLS_CLASS: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function IndicatorGrid({
  indicators,
  variant = "default",
  cols = 2,
  className = "",
}: Props) {
  if (indicators.length === 0) {
    return (
      <div className="rounded-2xl border border-black/[.07] bg-[#F8F8F6] p-8 text-center">
        <p className="text-[13px] text-t3">No hay indicadores disponibles para esta sección.</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 ${COLS_CLASS[cols]} gap-4 ${className}`}
      role="list"
      aria-label="Lista de indicadores"
    >
      {indicators.map((ind) => (
        <div key={ind.id} role="listitem">
          <IndicatorCard indicator={ind} variant={variant} />
        </div>
      ))}
    </div>
  );
}
