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

export default function PlanVideoAndSP500() {
  const reduced = useReducedMotion();

  return (
    <section className="py-16 px-6 overflow-hidden" style={{ background: "#F8F6F0" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <p className="section-label text-center">Diversificación global</p>
          <h2 className="text-[clamp(22px,2.8vw,34px)] font-bold leading-tight tracking-tight text-center mb-3">
            Empresas presentes{" "}
            <span className="text-g3">en el índice.</span>
          </h2>
          <p className="text-[15px] text-t2 text-center leading-relaxed max-w-xl mx-auto mb-8">
            Al invertir en índices globales, podés estar participando de una canasta
            diversificada de empresas líderes que forman parte de la economía real
            y que usamos todos los días.
          </p>
        </FadeIn>

        {/* Video */}
        <FadeIn delay={0.08}>
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-t3 mb-2 text-center">
              S&amp;P 500 Tracker · Pacific Asset Management · Fondo disponible en el plan
            </p>
            <div
              className="rounded-2xl overflow-hidden border border-black/[.07] bg-white"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}
            >
              <video
                controls
                playsInline
                className="w-full h-auto block"
                aria-label="Vista de la plataforma Dominion Capital Strategies — evolución de una cuenta de inversión"
              >
                <source src="/dcs-sp500-tracker.mp4" type="video/mp4" />
                Tu navegador no soporta reproducción de video.
              </video>
            </div>
            <p className="text-[11px] text-t3 italic mt-2 text-center">
              Los rendimientos mostrados son históricos y no garantizan resultados futuros.
            </p>
          </div>
        </FadeIn>

        {/* Marquee */}
        <FadeIn delay={0.14}>
          {reduced ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {COMPANIES.map((c) => (
                <CompanyCard key={c.name} {...c} />
              ))}
            </div>
          ) : (
            <div className="relative mb-6 overflow-hidden" aria-hidden="true">
              <div
                className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right,#F8F6F0,transparent)" }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left,#F8F6F0,transparent)" }}
              />
              <div className="flex gap-3 mb-3 py-0.5" style={{ animation: "sp500-scroll-a 30s linear infinite" }}>
                {TRACK.map((c, i) => (
                  <CompanyCard key={`a-${c.name}-${i}`} {...c} />
                ))}
              </div>
              <div className="flex gap-3 py-0.5" style={{ animation: "sp500-scroll-b 34s linear infinite" }}>
                {[...TRACK].reverse().map((c, i) => (
                  <CompanyCard key={`b-${c.name}-${i}`} {...c} />
                ))}
              </div>
              <style>{`
                @keyframes sp500-scroll-a {
                  from { transform: translateX(0); }
                  to   { transform: translateX(-50%); }
                }
                @keyframes sp500-scroll-b {
                  from { transform: translateX(-50%); }
                  to   { transform: translateX(0); }
                }
              `}</style>
            </div>
          )}
          <p className="text-[11px] text-t3 italic text-center leading-relaxed">
            Los ejemplos son ilustrativos. No implican recomendación de inversión ni alianza
            con las empresas mencionadas.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
