"use client";
import { useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui";

const COMPANIES = [
  { name: "Apple",      logo: "/logos/companies/apple.svg"     },
  { name: "Microsoft",  logo: "/logos/companies/microsoft.png" },
  { name: "Google",     logo: "/logos/companies/google.jpeg"   },
  { name: "Amazon",     logo: "/logos/companies/amazon.png"    },
  { name: "Coca-Cola",  logo: "/logos/companies/coca-cola.png" },
  { name: "Visa",       logo: "/logos/companies/visa.png"      },
  { name: "Nvidia",     logo: "/logos/companies/nvidia.png"    },
  { name: "McDonald's", logo: "/logos/companies/mcdonalds.jpeg"},
];

const TRACK = [...COMPANIES, ...COMPANIES];

function CompanyCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 bg-white border border-black/[.07] rounded-2xl px-4 py-3"
      style={{ minWidth: 160, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
      aria-label={name}
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#F8F8F8] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={name}
          className="w-6 h-6 object-contain"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span style="font-size:13px;font-weight:700;color:#1A6638">${name[0]}</span>`;
            }
          }}
        />
      </div>
      <p className="text-[13px] font-semibold text-t1 leading-tight whitespace-nowrap">{name}</p>
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

      {reduced ? (
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
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          />
          <div className="flex gap-3 py-1 px-3" style={{ animation: "sp500-scroll 36s linear infinite" }}>
            {TRACK.map((c, i) => (
              <CompanyCard key={`${c.name}-${i}`} {...c} />
            ))}
          </div>
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
