import type { IndicatorGroup } from "@/lib/indicators/types";
import { IndicatorGrid }       from "./IndicatorGrid";
import { SectionDisclaimer }   from "./IndicatorDisclaimer";

type Variant = "default" | "fed" | "bps" | "afap" | "bank";

interface Props {
  group: IndicatorGroup;
  variant?: Variant;
  cols?: 2 | 3 | 4;
  /** Se usa para el attr id del anchor de navegación */
  anchorId?: string;
}

// ── EduNote — callout educativo verde ─────────────────────────────────────────

function EduNote({ text }: { text: string }) {
  return (
    <div className="flex gap-3 bg-[#EDF8E8] border border-g1/20 rounded-xl px-4 py-3.5 mb-6">
      <span className="text-g1 flex-shrink-0 mt-0.5" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </span>
      <p className="text-[13px] text-g3 leading-relaxed">{text}</p>
    </div>
  );
}

// ── IndicatorsSection ─────────────────────────────────────────────────────────

export function IndicatorsSection({ group, variant = "default", cols = 2, anchorId }: Props) {
  return (
    <section
      id={anchorId ?? group.id}
      className="scroll-mt-24"
      aria-labelledby={`heading-${group.id}`}
    >
      {/* Section label */}
      <p className="section-label">{group.title}</p>

      {/* H2 */}
      <h2
        id={`heading-${group.id}`}
        className="text-h2 font-bold mb-4"
      >
        {group.h2}
      </h2>

      {/* Description */}
      <p className="text-[16px] text-t2 leading-relaxed max-w-2xl mb-6">
        {group.description}
      </p>

      {/* Edu note */}
      {group.eduNote && <EduNote text={group.eduNote} />}

      {/* Disclaimer importante (AFAPs, BPS) */}
      {group.disclaimer && (variant === "afap" || variant === "bps") && (
        <SectionDisclaimer text={group.disclaimer} className="mb-6" />
      )}

      {/* Cards grid */}
      <IndicatorGrid indicators={group.indicators} variant={variant} cols={cols} />

      {/* Disclaimer normal (otros) */}
      {group.disclaimer && variant !== "afap" && variant !== "bps" && (
        <p className="text-[10px] text-t3/55 italic mt-4">{group.disclaimer}</p>
      )}
    </section>
  );
}
