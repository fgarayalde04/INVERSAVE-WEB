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

const TRACK = [...COMPANIES, ...COMPANIES];

function CompanyCard({ name, sector, initial }: { name: string; sector: string; initial: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 bg-white border border-black/[.07] rounded-2xl px-5 py-4"
      style={{ minWidth: 172, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
      aria-label={`${name} — ${sector}`}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[14px] font-bold text-g3"
        style={{ background: "#EDF8E8" }}
        aria-hidden="true"
      >
        {initial}
      </div>
      <div>
        <p className="text-[13px] font-semibold text-t1 leading-tight">{name}</p>
        <p className="text-[11px] text-t3 mt-0.5">{sector}</p>
      </div>
    </div>
  );
}

export default function PlanVideoAndSP500() {
  const reduced = useReducedMotion();

  return (
    <section className="py-16 px-6 overflow-hidden" style={{ background: "#F8F6F0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-start">

          {/* ── Left: Video ───────────────────────────────────── */}
          <FadeIn>
            <div>
              <p className="section-label mb-3">La plataforma</p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-bold leading-tight tracking-tight mb-2">
                Conocé cómo se ve{" "}
                <span className="text-g3">la experiencia.</span>
              </h2>
              <p className="text-[15px] text-t2 leading-relaxed mb-6">
                Una vista simple de la plataforma para entender cómo se organiza
                la información y cómo podés seguir tu cuenta.
              </p>

              <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-t3 mb-2">
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
                  poster="/account-preview.png"
                  aria-label="Vista de la plataforma Dominion Capital Strategies — evolución de una cuenta de inversión"
                >
                  <source src="/dcs-sp500-tracker.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>

              <p className="text-[11px] text-t3 italic mt-3">
                Los rendimientos mostrados son históricos y no garantizan resultados futuros.
              </p>
            </div>
          </FadeIn>

          {/* ── Right: Companies marquee ──────────────────────── */}
          <FadeIn delay={0.12}>
            <div>
              <p className="section-label mb-3">Diversificación global</p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-bold leading-tight tracking-tight mb-2">
                Empresas presentes{" "}
                <span className="text-g3">en el índice.</span>
              </h2>
              <p className="text-[15px] text-t2 leading-relaxed mb-8">
                Al invertir en índices globales, podés estar participando de una canasta
                diversificada de empresas líderes que forman parte de la economía real
                y que usamos todos los días.
              </p>

              {/* Marquee — constrained to this column */}
              {reduced ? (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {COMPANIES.map((c) => (
                    <CompanyCard key={c.name} {...c} />
                  ))}
                </div>
              ) : (
                <div className="relative mb-4 overflow-hidden" aria-hidden="true">
                  {/* Fade edges */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right,#F8F6F0,transparent)" }}
                  />
                  <div
                    className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left,#F8F6F0,transparent)" }}
                  />

                  {/* Row 1 */}
                  <div className="flex gap-3 mb-3 py-0.5" style={{ animation: "sp500-scroll-a 28s linear infinite" }}>
                    {TRACK.map((c, i) => (
                      <CompanyCard key={`a-${c.name}-${i}`} {...c} />
                    ))}
                  </div>

                  {/* Row 2 — reversed */}
                  <div className="flex gap-3 py-0.5" style={{ animation: "sp500-scroll-b 32s linear infinite" }}>
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

              <p className="text-[11px] text-t3 italic leading-relaxed">
                Los ejemplos son ilustrativos. No implican recomendación de inversión ni alianza
                con las empresas mencionadas.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
