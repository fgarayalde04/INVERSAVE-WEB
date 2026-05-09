import { FadeIn } from "@/components/ui";

const PARTNERS = [
  {
    name: "BNY Mellon",
    role: "Custodio global de activos",
    stats: [
      "USD 59,4 billones bajo custodia",
      "Presencia en 38 países",
      "87% del Fortune Global 500",
    ],
    detail:
      "Uno de los bancos custodios más grandes del mundo. Tus activos están registrados a tu nombre y en poder de BNY Mellon, no de Dominion. En caso de insolvencia de cualquier parte, tus activos siguen siendo tuyos.",
    accent: "#52B558",
  },
  {
    name: "FNZ",
    role: "Plataforma tecnológica y administración",
    stats: [
      "20M+ cuentas de clientes",
      "USD 1,5+ billones AUA",
      "Operaciones en 30 países",
    ],
    detail:
      "Infraestructura tecnológica de clase mundial que potencia la administración de cuentas, reportes y operaciones de la plataforma. Más de 7.000 empleados a nivel global.",
    accent: "#8FD99A",
  },
  {
    name: "Pacific Asset Management",
    role: "Gestora de fondos",
    stats: [
      "USD 22.400 millones AUM",
      "10 estrategias de inversión",
      "S&P 500 Tracker · Global Equities",
    ],
    detail:
      "Gestiona los fondos en los que se invierte tu portafolio. El S&P 500 Tracker es el fondo principal disponible en Inversave, junto con Global Infrastructure, Emerging Markets, Global Credit y más.",
    accent: "#52B558",
  },
  {
    name: "Guernsey FSC",
    role: "Regulador y jurisdicción",
    stats: [
      "Calificación crediticia AA-",
      "Dependencia de la Corona Británica",
      "Centro financiero de primer nivel",
    ],
    detail:
      "Dominion está regulado bajo Protection of Investors (Bailiwick of Guernsey) Law, 2020. Guernsey es reconocida internacionalmente como una de las jurisdicciones financieras más serias y transparentes del mundo.",
    accent: "#8FD99A",
  },
  {
    name: "dLocal",
    role: "Procesador de pagos",
    stats: [
      "300+ métodos de pago",
      "126 divisas aceptadas",
      "Cotiza en Nasdaq",
    ],
    detail:
      "Permite recibir aportes desde Uruguay y otros mercados emergentes con 110 millones de transacciones diarias. Integración fluida para pagos mensuales automáticos en USD.",
    accent: "#52B558",
  },
];

export default function DominionPartners() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "linear-gradient(160deg,#0C1A11 0%,#0F2118 60%,#0A160E 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-g2/50 mb-3">
            Infraestructura
          </p>
          <h2
            className="text-[clamp(28px,4vw,44px)] font-bold leading-tight tracking-[-0.02em] text-white mb-4"
          >
            Construido sobre los{" "}
            <span className="text-g1">pilares institucionales más sólidos.</span>
          </h2>
          <p className="text-[16px] text-white/40 max-w-2xl leading-relaxed mb-14">
            Cada capa del sistema — custodia, tecnología, gestión, regulación y pagos — está operada por líderes globales de clase institucional.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {PARTNERS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div
                className="rounded-2xl p-6 h-full flex flex-col gap-5 border border-white/[.08] hover:border-white/[.14] transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-1 self-stretch rounded-full flex-shrink-0"
                    style={{ background: p.accent }}
                  />
                  <div>
                    <p className="text-[17px] font-bold text-white leading-tight">{p.name}</p>
                    <p className="text-[12px] text-white/40 mt-0.5">{p.role}</p>
                  </div>
                </div>

                {/* Stats pills */}
                <div className="flex flex-wrap gap-2">
                  {p.stats.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium text-white/60 border border-white/[.1]"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Detail */}
                <p className="text-[13px] text-white/35 leading-relaxed">{p.detail}</p>
              </div>
            </FadeIn>
          ))}

          {/* PwC auditor note */}
          <FadeIn delay={PARTNERS.length * 0.08}>
            <div
              className="rounded-2xl p-6 h-full flex flex-col justify-center border border-white/[.06]"
              style={{ background: "rgba(82,181,88,0.06)" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: "#52B558" }}/>
                <div>
                  <p className="text-[17px] font-bold text-white leading-tight">PwC</p>
                  <p className="text-[12px] text-white/40 mt-0.5">Auditor independiente</p>
                </div>
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed">
                PricewaterhouseCoopers actúa como auditor independiente de la plataforma, garantizando la transparencia contable y el cumplimiento normativo bajo los estándares internacionales más exigentes.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Regulatory footer */}
        <FadeIn delay={0.5}>
          <div className="mt-10 border-t border-white/[.06] pt-8">
            <p className="text-[11px] text-white/20 leading-relaxed max-w-3xl">
              Dominion Capital Strategies Limited. Incorporada en Guernsey bajo Company Registration No. 63978.
              Regulada y licenciada por la Guernsey Financial Services Commission bajo Protection of Investors (Bailiwick of Guernsey) Law, 2020.
              First Floor, Mill Court, La Charroterie, St Peter Port, Guernsey GY1 1EJ.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
