import { FadeIn } from "@/components/ui";

const CRISES = [
  { year: "2000–2002", name: "Crisis Dotcom",     drop: "−49%", recover: "5 años para recuperar" },
  { year: "2008–2009", name: "Crisis Financiera", drop: "−56%", recover: "4 años para recuperar" },
  { year: "2020",      name: "Pandemia COVID-19", drop: "−34%", recover: "5 meses para recuperar" },
  { year: "2022",      name: "Inflación / Fed",   drop: "−25%", recover: "2 años para recuperar" },
];

export default function MercadoCrisis() {
  return (
    <section id="crisis" className="section-wrap scroll-mt-20" style={{ background: "#F8F6F0" }}>
      <div className="inner">
        <FadeIn>
          <p className="section-label">Las grandes crisis</p>
          <h2 className="text-h2 font-bold mb-3">
            Cada caída fue seguida{" "}
            <span className="text-g3">por una recuperación.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-12">
            El pánico vende titulares. La paciencia construye patrimonio.
            El S&P 500 cayó muchas veces — y en todos los casos de largo plazo, tendió a recuperarse.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {CRISES.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.07}>
              <div className="bg-white border border-black/[.07] rounded-2xl p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-[11px] font-bold text-t3 tracking-[0.1em] uppercase mb-1">{c.year}</p>
                    <p className="text-[16px] font-bold text-t1">{c.name}</p>
                  </div>
                  <div className="text-[clamp(20px,3vw,26px)] font-bold text-warn tracking-tight flex-shrink-0">{c.drop}</div>
                </div>
                <div className="flex items-center gap-2 bg-[#EDF8E8] border border-g1/20 rounded-xl px-4 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0" />
                  <span className="text-[13px] font-medium text-g3">{c.recover}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="rounded-3xl p-8 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%,rgba(82,181,88,.1) 0%,transparent 70%)" }} />
            <div className="relative z-10">
              <p className="text-[13px] font-bold tracking-[0.1em] uppercase text-g2/50 mb-4">La lección del largo plazo</p>
              <p className="text-[clamp(18px,3vw,26px)] font-bold text-white leading-[1.2] mb-3">
                &ldquo;El tiempo en el mercado siempre supera el timing del mercado.&rdquo;
              </p>
              <p className="text-[15px] text-white/50">
                La evidencia histórica muestra que el S&P 500 generó retorno compuesto positivo
                en prácticamente todos los períodos de 15+ años desde 1928.
              </p>
            </div>
          </div>
        </FadeIn>

        <p className="text-[11px] text-t3/60 italic mt-6">
          Los rendimientos pasados no garantizan resultados futuros. Toda inversión implica riesgo de pérdida de capital.
        </p>
      </div>
    </section>
  );
}
