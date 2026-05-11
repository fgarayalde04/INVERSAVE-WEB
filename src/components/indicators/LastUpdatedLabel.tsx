interface Props {
  date: string; // ISO "YYYY-MM-DD" o string libre
  frequency?: string;
  className?: string;
}

export function LastUpdatedLabel({ date, frequency, className = "" }: Props) {
  // Intentar formatear como fecha ISO
  let display = date;
  try {
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      display = new Date(date + "T12:00:00Z").toLocaleDateString("es-UY", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
  } catch {
    // mantener string original
  }

  return (
    <span className={`text-[10px] text-t3/50 ${className}`}>
      {display}
      {frequency && (
        <span className="ml-1 opacity-60">· {frequency}</span>
      )}
    </span>
  );
}
