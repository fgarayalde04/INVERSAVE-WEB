import { FadeIn } from "@/components/ui";

export default function RobleCapitalBlock() {
  return (
    <section className="py-20 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <p className="section-label text-center">Respaldo institucional</p>
          <h2 className="text-h2 font-bold text-center mb-4">
            Una estructura profesional{" "}
            <span className="text-g3">detrás del plan.</span>
          </h2>
          <p className="text-[16px] text-t2 text-center max-w-xl mx-auto mb-14 leading-relaxed">
            No estás solo. Detrás del plan hay una estructura de asesoramiento patrimonial seria,
            con foco en el largo plazo y el acompañamiento del cliente.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Roble Capital */}
          <FadeIn>
            <div className="bg-white border border-black/[.07] rounded-3xl p-8 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0C1A11] flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M11 2L3 6.5v5c0 4.8 3.5 9.3 8 10.5 4.5-1.2 8-5.7 8-10.5v-5L11 2z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M8 11l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[17px] font-bold text-t1 leading-tight">Roble Capital Wealth Management</p>
                  <p className="text-[12px] text-t3 mt-0.5">Asesor regulado · Banco Central del Uruguay</p>
                </div>
              </div>

              <p className="text-[15px] text-t2 leading-relaxed mb-4">
                Empresa de asesoramiento financiero con base en Montevideo y más de 25 años de experiencia
                en gestión patrimonial. INVERSAVE es el área de planes de ahorro de Roble Capital.
              </p>
              <p className="text-[15px] text-t2 leading-relaxed mb-7">
                Su equipo tiene formación en instituciones como Merrill Lynch, Citibank y UBS, y aplica
                una filosofía de planificación a largo plazo, transparencia y acompañamiento del cliente
                en cada etapa del proceso.
              </p>

              <div className="space-y-3 mt-auto">
                {[
                  "Regulado por el Banco Central del Uruguay",
                  "Foco en planificación patrimonial de largo plazo",
                  "Asesor local con experiencia internacional",
                  "Acompañamiento personalizado durante todo el proceso",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#EDF8E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#1A6638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[13px] text-t2 leading-snug">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Dominion Capital Strategies */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-3xl p-8 h-full flex flex-col relative overflow-hidden"
              style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 60% at 30% 50%,rgba(82,181,88,.1) 0%,transparent 70%)" }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.5" />
                      <ellipse cx="11" cy="11" rx="3.5" ry="9" stroke="white" strokeWidth="1.5" />
                      <line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[17px] font-bold text-white leading-tight">Dominion Capital Strategies</p>
                    <p className="text-[12px] text-white/40 mt-0.5">Plataforma de inversión · Guernsey FSC</p>
                  </div>
                </div>

                <p className="text-[15px] text-white/60 leading-relaxed mb-4">
                  La plataforma que vehiculiza tu portafolio. Dominion actúa como el vehículo institucional
                  a través del cual se ejecutan las inversiones, con custodia en BNY Mellon y
                  tecnología de administración de FNZ.
                </p>
                <p className="text-[15px] text-white/60 leading-relaxed mb-7">
                  Regulada por la Guernsey Financial Services Commission. Tu cuenta está
                  segregada a tu nombre y separada del balance de Dominion —
                  lo que la distingue de un fondo común de inversión.
                </p>

                <div className="space-y-3 mt-auto">
                  {[
                    "Cuenta individual segregada a tu nombre",
                    "Custodia BNY Mellon · USD 59,4 billones AUC",
                    "Regulado Guernsey FSC · Reg. No. 63978",
                    "Acceso 24/7 con reportes de cartera en tiempo real",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0 mt-1.5" />
                      <p className="text-[13px] text-white/50 leading-snug">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Relationship clarifier */}
        <FadeIn delay={0.2}>
          <div className="mt-6 bg-white border border-black/[.07] rounded-2xl px-6 py-5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-t2">
              <span className="font-semibold text-t1">Vos</span>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M0 5h14M11 2l3 3-3 3" stroke="rgba(0,0,0,.2)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>asesorado por <strong className="text-t1">Roble Capital / Inversave</strong></span>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M0 5h14M11 2l3 3-3 3" stroke="rgba(0,0,0,.2)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>invertís a través de <strong className="text-t1">Dominion Capital Strategies</strong></span>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M0 5h14M11 2l3 3-3 3" stroke="rgba(0,0,0,.2)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>activos custodiados por <strong className="text-t1">BNY Mellon</strong></span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
