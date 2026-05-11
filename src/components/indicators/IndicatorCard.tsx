import type { Indicator } from "@/lib/indicators/types";
import { IndicatorStatusBadge } from "./IndicatorStatusBadge";
import { SourceBadge }          from "./SourceBadge";
import { LastUpdatedLabel }      from "./LastUpdatedLabel";

// ── Helpers ───────────────────────────────────────────────────────────────────

function isPending(value: string | number): boolean {
  return value === "—" || value === "" || value === null || value === undefined;
}

const FREQ_LABEL: Record<string, string> = {
  daily:   "diario",
  weekly:  "semanal",
  monthly: "mensual",
  manual:  "manual",
};

// ── IndicatorCard ─────────────────────────────────────────────────────────────

interface Props {
  indicator: Indicator;
  variant?: "default" | "fed" | "bps" | "afap" | "bank";
}

const ACCENT: Record<string, { badge: string; value: string }> = {
  default: { badge: "bg-[#EDF8E8] text-g3",           value: "text-t1" },
  fed:     { badge: "bg-[#EFF3FF] text-[#3B5BDB]",    value: "text-[#3B5BDB]" },
  bps:     { badge: "bg-[#FFF4E5] text-[#D97706]",    value: "text-[#D97706]" },
  afap:    { badge: "bg-[#EFF4FA] text-[#2C4A6E]",    value: "text-[#2C4A6E]" },
  bank:    { badge: "bg-[#EDF8E8] text-g3",            value: "text-t1" },
};

export function IndicatorCard({ indicator: ind, variant = "default" }: Props) {
  const pending = isPending(ind.value);
  const accent  = ACCENT[variant] ?? ACCENT.default;

  return (
    <article
      className="bg-white border border-black/[.07] rounded-2xl p-5 flex flex-col gap-3 hover:border-black/[.14] hover:shadow-sm transition-all duration-200"
      aria-label={`Indicador: ${ind.name}`}
    >
      {/* Header: entidad + status */}
      <div className="flex items-start justify-between gap-2 min-h-[24px]">
        {ind.entity && (
          <span className={`text-[10px] font-semibold rounded-full px-2.5 py-0.5 leading-tight truncate max-w-[65%] ${accent.badge}`}>
            {ind.entity}
          </span>
        )}
        <IndicatorStatusBadge status={ind.status} className="flex-shrink-0 ml-auto" />
      </div>

      {/* Nombre */}
      <div>
        <h3 className="text-[13px] font-semibold text-t1 leading-snug">{ind.name}</h3>
        {(ind.currency || ind.term || ind.period) && (
          <p className="text-[10px] text-t3 mt-0.5">
            {[ind.currency, ind.term, ind.period].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>

      {/* Valor principal */}
      {pending ? (
        // ── Estado pendiente: muestra instrucciones en lugar de "—" ──────────
        <div className="flex flex-col gap-2 py-1">
          <p className="text-[11px] text-t3 leading-relaxed">
            Actualizar desde la fuente oficial:
          </p>
          {ind.sourceUrl && (
            <a
              href={ind.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-g3 hover:underline"
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7M8 1h3m0 0v3m0-3L5.5 6.5"
                  stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ver en {ind.source.split("—")[0].trim()}
            </a>
          )}
          {ind.sourceFile ? (
            <p className="text-[10px] text-t3/60">PDF: {ind.sourceFile}</p>
          ) : (
            <p className="text-[10px] text-t3/50 italic">
              {ind.category === "afaps" || ind.category === "bps"
                ? "Colocar PDF en src/data-sources/pdfs/ y ejecutar npm run update:indicators"
                : ind.category === "banks"
                ? "Actualizable via PDF o src/data/market.ts"
                : "Verificar en la fuente oficial indicada"}
            </p>
          )}
        </div>
      ) : (
        // ── Valor real ────────────────────────────────────────────────────────
        <div className="flex items-baseline gap-1.5">
          <span className={`text-[clamp(28px,5vw,36px)] font-bold leading-none ${accent.value}`}>
            {ind.value}
          </span>
          {ind.unit && !String(ind.value).includes("%") && !String(ind.value).includes("$") && (
            <span className="text-[11px] text-t3 leading-none mb-1">{ind.unit}</span>
          )}
        </div>
      )}

      {/* Explicación */}
      <p className="text-[12px] text-t2 leading-relaxed flex-1">{ind.explanation}</p>

      {/* Footer: fuente + fecha */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-black/[.05]">
        <SourceBadge source={ind.source} sourceUrl={ind.sourceUrl} />
        <LastUpdatedLabel
          date={ind.lastUpdated}
          frequency={FREQ_LABEL[ind.frequency] ?? ind.frequency}
        />
      </div>
    </article>
  );
}

// ── SimpleComparisonCard ──────────────────────────────────────────────────────

interface ComparisonProps {
  label: string;
  leftLabel: string;
  leftValue: string | number;
  rightLabel: string;
  rightValue: string | number;
  note?: string;
  sourceUrl?: string;
}

export function SimpleComparisonCard({
  label, leftLabel, leftValue, rightLabel, rightValue, note, sourceUrl,
}: ComparisonProps) {
  return (
    <div className="bg-white border border-black/[.07] rounded-2xl p-5">
      <p className="text-[11px] font-bold text-t3 uppercase tracking-[0.08em] mb-4">{label}</p>
      <div className="grid grid-cols-2 divide-x divide-black/[.06]">
        <div className="pr-4">
          <p className="text-[10px] text-t3 mb-1">{leftLabel}</p>
          <p className="text-[22px] font-bold text-t1 leading-none">{leftValue}</p>
        </div>
        <div className="pl-4">
          <p className="text-[10px] text-t3 mb-1">{rightLabel}</p>
          <p className="text-[22px] font-bold text-t1 leading-none">{rightValue}</p>
        </div>
      </div>
      {note && <p className="text-[10px] text-t3/55 mt-3">{note}</p>}
      {sourceUrl && (
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer"
          className="text-[10px] text-g3/60 hover:text-g3 transition-colors mt-1 block">
          Ver fuente →
        </a>
      )}
    </div>
  );
}
