interface Props {
  text: string;
  className?: string;
}

export function IndicatorDisclaimer({ text, className = "" }: Props) {
  return (
    <p
      className={`text-[10px] text-t3/55 italic leading-relaxed ${className}`}
      role="note"
    >
      {text}
    </p>
  );
}

// ── Section disclaimer (más visible) ─────────────────────────────────────────

interface SectionDisclaimerProps {
  text: string;
  className?: string;
}

export function SectionDisclaimer({ text, className = "" }: SectionDisclaimerProps) {
  return (
    <div
      className={`flex gap-2.5 bg-[#FEF0EC] border border-warn/15 rounded-xl px-4 py-3 ${className}`}
      role="note"
      aria-label="Aclaración importante"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="flex-shrink-0 mt-0.5 text-warn"
      >
        <path
          d="M8 5v4M8 11h.01M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-[11px] text-warn leading-relaxed">{text}</p>
    </div>
  );
}
