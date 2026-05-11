"use client";
import { useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui";

const COMPANIES = [
  { name: "Apple",      sector: "Tecnología",      initial: "A" },
  { name: "Microsoft",  sector: "Tecnología",      initial: "M" },
  { name: "Google",     sector: "Tecnología",      initial: "G" },
  { name: "Amazon",     sector: "Consumo",         initial: "A" },
  { name: "Nvidia",     sector: "Semiconductores", initial: "N" },
  { name: "Visa",       sector: "Pagos globales",  initial: "V" },
  { name: "Coca-Cola",  sector: "Consumo masivo",  initial: "C" },
  { name: "McDonald's", sector: "Gastronomía",     initial: "M" },
];

// Duplicated for seamless infinite marquee
const TRACK = [...COMPANIES, ...COMPANIES];

function CompanyCard({ name, sector, initial }: { name: string; sector: string; initial: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 bg-white border border-black/[.07] rounded-2xl px-5 py-4"
      style={{ minWidth: 180, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
      aria-label={`${name} — ${sector}`}
    >
      {/* Avatar placeholder */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[16px] font-bold text-g3"
        style={{ background: "#EDF8E8" }}
        aria-hidden="true"
      >
        {initial}
      </div>
      <div>
        <p className="text-[14px] font-semibold text-t1 leading-tight">{name}</p>
        <p className="text-[11px] text-t3 mt-0.5">{sector}</p>
      </div>
    </div>
  );
}

export default function SP500Companies() {
  const reduced = useReducedMotion();

  return (
    <section className="section-wrap-white overflow-hidden">
      <div className="inner">
        <FadeIn>
          <p className="section-label text-center">Diversificación global</p>
          <h2 className="text-h2 font-bold text-center mb-3">
            Empresas presentes{" "}
            <span className="text-g3">en el índice.</span>
          </h2>
          <p className="text-[16px] text-t2 text-center max-w-xl mx-auto mb-10 leading-relaxed">
            Al invertir en índices globales, podés estar participando de una canasta
            diversificada de empresas líderes que forman parte de la economía real
            y que usamos todos los días.
          </p>
        </FadeIn>
      </div>

      {/* Marquee — full bleed */}
      {reduced ? (
        /* Reduced motion: static grid */
        <div className="inner">
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {COMPANIES.map((c) => (
                <CompanyCard key={c.name} {...c} />
              ))}
            </div>
          </FadeIn>
        </div>
      ) : (
        <div className="relative mb-8" aria-hidden="true">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          />

          {/* Scrolling track */}
          <div className="flex gap-3 py-1 px-3" style={{ animation: "sp500-scroll 36s linear infinite" }}>
            {TRACK.map((c, i) => (
              <CompanyCard key={`${c.name}-${i}`} {...c} />
            ))}
          </div>

          {/* CSS keyframe — scoped to this block */}
          <style>{`
            @keyframes sp500-scroll {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      )}

      <div className="inner">
        <FadeIn delay={0.15}>
          <p className="text-[12px] text-t3 text-center italic leading-relaxed max-w-xl mx-auto">
            Los ejemplos son ilustrativos y pueden variar según el instrumento o índice utilizado.
            No implican recomendación de inversión ni alianza o patrocinio de las empresas mencionadas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
