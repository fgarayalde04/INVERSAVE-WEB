interface Props {
  source: string;
  sourceUrl?: string;
  className?: string;
}

export function SourceBadge({ source, sourceUrl, className = "" }: Props) {
  const content = (
    <span className="flex items-center gap-1 text-[10px] text-t3/60 hover:text-g3 transition-colors">
      <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <path
          d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7M8 1h3m0 0v3m0-3L5.5 6.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="truncate max-w-[180px]">{source}</span>
    </span>
  );

  if (sourceUrl) {
    return (
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${className}`}
        aria-label={`Fuente: ${source} (abre en nueva pestaña)`}
      >
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}
