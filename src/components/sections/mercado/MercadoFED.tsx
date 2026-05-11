import Link from "next/link";
import { FadeIn } from "@/components/ui";
import { FED } from "@/data/market";

const IMPACTOS = [
  {
    titulo: "Tasas de ahorro e inversión",
    desc: "Cuando la FED sube su tasa, los instrumentos de renta fija globales suelen ofrecer mejores retornos. Cuando la baja, el atractivo relativo de las acciones aumenta.",
  },
  {
    titulo: "Tipo de cambio",
    desc: "Cambios en la tasa de la FED afectan el dólar frente a otras monedas, incluyendo el peso uruguayo. Un dólar más fuerte puede impactar en las reservas y el tipo de cambio local.",
  },
  {
    titulo: "Crédito global",
    desc: "La tasa de la FED influye en el costo del crédito internacional. Tasas más altas encarecen el financiamiento en mercados emergentes como Uruguay.",
  },
  {
    titulo: "Valoración de activos",
    desc: "Tasas más altas reducen el valor presente de flujos futuros. Esto puede presionar a la baja los precios de bonos y acciones en el corto plazo.",
  },
];

export default function MercadoFED() {
  return (
    <section className="py-20 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="section-label">Reserva Federal de EE.UU.</p>
          <h2 className="text-h2 font-bold mb-3">
            La FED y por qué{" "}
            <span className="text-g3">te afecta.</span>
          </h2>
          <p className="text-[16px] text-t2 leading-relaxed max-w-xl mb-10">
            La Reserva Federal de Estados Unidos es el banco central más influyente del mundo.
            Sus decisiones sobre la tasa de interés afectan mercados, tipos de cambio y condiciones
            financieras globales — incluyendo Uruguay.
          </p>
        </FadeIn>

        {/* Tasa actual */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Tasa objetivo FOMC", dato: FED.tasaObjetivo },
            { label: "Próxima reunión FOMC", dato: FED.proximaReunion },
            { label: "Última decisión", dato: FED.ultimaDecision },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.07}>
              <div className="bg-white border border-black/[.07] rounded-2xl p-5">
                <p className="text-[11px] font-bold text-t3 tracking-[0.08em] uppercase mb-3">
                  {item.label}
                </p>
                <p className={`text-[clamp(20px,3vw,28px)] font-bold tracking-tight leading-none mb-2 ${
                  item.dato.estado === "actualizado" ? "text-t1" : "text-t3"
                }`}>
                  {item.dato.estado === "actualizado" ? item.dato.valor : "—"}
                </p>
                {item.dato.estado === "pendiente" && (
                  <p className="text-[11px] text-[#92600A] mb-2">Por actualizar</p>
                )}
                <Link
                  href={item.dato.fuenteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-g3 hover:underline"
                >
                  {item.dato.fuente} ↗
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Explicación */}
        <FadeIn>
          <div
            className="rounded-3xl p-8 mb-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 55% 55% at 20% 50%, rgba(82,181,88,.08) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-g2/40 mb-4">
                Qué es la FED
              </p>
              <h3 className="text-[clamp(18px,2.5vw,24px)] font-bold text-white leading-[1.3] mb-4">
                La FED fija el precio del dinero en EE.UU. — y eso impacta en todo el mundo.
              </h3>
              <p className="text-[15px] text-white/55 leading-relaxed">
                El Comité Federal de Mercado Abierto (FOMC) se reúne 8 veces por año para decidir
                el rango objetivo de la tasa de fondos federales. Esta tasa determina cuánto cobran
                los bancos entre sí por préstamos a muy corto plazo, y sirve como ancla para toda la
                estructura de tasas de interés de EE.UU. — y en gran medida del mundo.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Impactos */}
        <FadeIn>
          <h3 className="text-[18px] font-bold text-t1 mb-6">
            ¿Cómo impacta la tasa de la FED en Uruguay?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {IMPACTOS.map((item, i) => (
              <div
                key={item.titulo}
                className="bg-white border border-black/[.07] rounded-2xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EDF8E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-g3">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-t1 mb-1">{item.titulo}</p>
                    <p className="text-[13px] text-t2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-6 flex items-start gap-3 bg-white border border-black/[.07] rounded-2xl px-5 py-4">
            <svg className="w-4 h-4 text-t3 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 7v4M8 5v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-[12px] text-t3 leading-relaxed">
              Fuente:{" "}
              <Link
                href="https://www.federalreserve.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-g3 hover:underline"
              >
                federalreserve.gov
              </Link>
              . La información tiene fines educativos y no constituye asesoramiento financiero.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
