import { getInstitutionLogo } from "@/lib/institutionLogos";

interface Props {
  name: string;
  size?: "sm" | "md";
}

export function InstitutionLogoLabel({ name, size = "md" }: Props) {
  const logo = getInstitutionLogo(name);
  const dim = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const imgDim = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${dim} rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-[#F8F8F8] border border-black/[.06]`}
      >
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={name}
            className={`${imgDim} object-contain`}
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<span style="font-size:11px;font-weight:700;color:#1A6638">${initials}</span>`;
              }
            }}
          />
        ) : (
          <span className="text-[11px] font-bold text-g3">{initials}</span>
        )}
      </div>
      <span>{name}</span>
    </div>
  );
}
