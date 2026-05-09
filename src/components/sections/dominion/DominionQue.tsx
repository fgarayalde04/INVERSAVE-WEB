import { FadeIn } from "@/components/ui";

export default function DominionQue() {
  return (
    <section className="section-wrap-white">
      <div className="inner">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="section-label">Qué es Dominion</p>
            <h2 className="text-h2 font-bold mb-5">
              No es un fondo.{" "}
              <span className="text-g3">Es tu cuenta.</span>
            </h2>

            {/* Tim Nelson quote */}
            <blockquote className="border-l-2 border-g1 bg-[#EDF8E8] rounded-r-2xl px-5 py-4 mb-6">
              <p className="text-[15px] text-t1 leading-relaxed italic mb-2">
                &ldquo;Traducir el complicado lenguaje financiero en productos sencillos que cualquiera pueda entender.&rdquo;
              </p>
              <cite className="text-[12px] font-bold text-g3 not-italic">
                — Tim Nelson, Managing Director, Dominion Capital Strategies
              </cite>
            </blockquote>

            <p className="text-[17px] text-t2 leading-relaxed mb-6">
              Dominion Capital Strategies Limited es la plataforma de inversión regulada en Guernsey
              que actúa como vehículo institucional para tu portafolio personal. A diferencia de un
              fondo común, tu cuenta está <strong className="text-t1">segregada a tu nombre</strong>.
            </p>
            <p className="text-[17px] text-t2 leading-relaxed mb-8">
              Los activos son tuyos — custodiados por BNY Mellon (USD 59,4 billones bajo custodia),
              con tecnología de FNZ e inversión gestionada por Pacific Asset Management.
            </p>
            <div className="space-y-3">
              {[
                "Cuenta individual segregada — no es un fondo común",
                "Custodia BNY Mellon — banco custodio global top-tier",
                "Regulado por Guernsey Financial Services Commission (Reg. No. 63978)",
                "Asesor local regulado por el Banco Central del Uruguay",
                "Liquidez disponible — no hay permanencia mínima obligatoria",
                "Acceso 24/7 con reportes de cartera en tiempo real",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EDF8E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#1A6638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[14px] text-t1 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {/* Structure card */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(82,181,88,.1) 0%,transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-g2/40 mb-6">
                  Estructura de tu cuenta
                </p>
                {[
                  { label: "Vos", sub: "Titular de la cuenta", color: "#52B558" },
                  {
                    label: "Roble Capital / Inversave",
                    sub: "Asesor regulado BCU — área de planes de ahorro",
                    color: "#8FD99A",
                  },
                  {
                    label: "Dominion Capital Strategies",
                    sub: "Plataforma · Regulada Guernsey FSC",
                    color: "#52B558",
                  },
                  {
                    label: "FNZ",
                    sub: "Administración tecnológica · 20M+ cuentas",
                    color: "#8FD99A",
                  },
                  {
                    label: "BNY Mellon",
                    sub: "Custodio global · USD 59,4 billones AUC",
                    color: "#52B558",
                  },
                  {
                    label: "Pacific Asset Management",
                    sub: "Gestora de fondos · S&P 500 Tracker y otros",
                    color: "#8FD99A",
                  },
                ].map((item, i, arr) => (
                  <div key={item.label}>
                    <div className="flex items-start gap-3 py-3">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: item.color }}
                      />
                      <div>
                        <p className="text-[14px] font-semibold text-white">{item.label}</p>
                        <p className="text-[12px] text-white/40">{item.sub}</p>
                      </div>
                    </div>
                    {i < arr.length - 1 && <div className="ml-4 w-px h-3 bg-white/10" />}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
