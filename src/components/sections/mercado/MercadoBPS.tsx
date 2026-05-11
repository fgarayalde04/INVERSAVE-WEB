import Link from "next/link";
import { FadeIn } from "@/components/ui";

const PILARES = [
  {
    n: "01",
    label: "Primer pilar — BPS",
    titulo: "Solidaridad intergeneracional",
    desc: "Los aportes de los trabajadores activos financian las jubilaciones de los pasivos. Gestionado por el Banco de Previsión Social (BPS).",
    color: "bg-[#EDF8E8] border-g1/20",
    nColor: "text-g3",
  },
  {
    n: "02",
    label: "Segundo pilar — AFAP",
    titulo: "Ahorro individual obligatorio",
    desc: "Una parte de los aportes de los trabajadores va a una cuenta individual administrada por una AFAP. El saldo acumulado forma parte de la jubilación futura.",
    color: "bg-[#F0ECFF] border-lila/20",
    nColor: "text-lila",
  },
  {
    n: "03",
    label: "Tercer pilar — Voluntario",
    titulo: "Ahorro complementario",
    desc: "Aportes voluntarios adicionales al sistema, fuera del Estado y de las AFAPs. Planes privados, seguros de retiro, inversión en mercados globales.",
    color: "bg-[#F8F6F0] border-black/[.07]",
    nColor: "text-t1",
  },
];

const DATOS_BPS = [
  {
    concepto: "Aporte obrero",
    valor: "15%",
    desc: "del salario nominal del trabajador",
    fuente: "BPS",
    fuenteUrl: "https://www.bps.gub.uy",
    nota: "Se distribuye entre BPS y AFAP según el tramo salarial.",
  },
  {
    concepto: "Aporte patronal",
    valor: "7,5%",
    desc: "del salario nominal aportado por el empleador",
    fuente: "BPS",
    fuenteUrl: "https://www.bps.gub.uy",
    nota: "Va íntegramente al BPS (pilar solidario).",
  },
  {
    concepto: "Edad de retiro",
    valor: "Consultar",
    desc: "sujeto a normativa vigente",
    fuente: "BPS — bps.gub.uy",
    fuenteUrl: "https://www.bps.gub.uy/jubilaciones",
    nota: "La normativa previsional puede cambiar. Verificar en bps.gub.uy.",
  },
];

export default function MercadoBPS() {
  return (
    <section className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Sistema previsional uruguayo</p>
          <h2 className="text-h2 font-bold mb-3">
            El BPS y los tres{" "}
            <span className="text-g3">pilares de tu retiro.</span>
          </h2>
          <p className="text-[16px] text-t2 leading-relaxed max-w-xl mb-10">
            Uruguay tiene un sistema previsional mixto basado en tres pilares. Entender cómo
            funciona cada uno ayuda a planificar mejor el futuro financiero.
          </p>
        </FadeIn>

        {/* Tres pilares */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {PILARES.map((p, i) => (
            <FadeIn key={p.n} delay={i * 0.08}>
              <div className={`border rounded-2xl p-6 h-full ${p.color}`}>
                <p className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-1 ${p.nColor}`}>
                  {p.label}
                </p>
                <h3 className="text-[15px] font-bold text-t1 mb-2 leading-tight">{p.titulo}</h3>
                <p className="text-[13px] text-t2 leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Datos clave */}
        <FadeIn>
          <h3 className="text-[18px] font-bold text-t1 mb-6">Datos del sistema</h3>
          <div className="space-y-3 mb-10">
            {DATOS_BPS.map((d) => (
              <div
                key={d.concepto}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F8F6F0] border border-black/[.06] rounded-2xl px-5 py-4"
              >
                <div>
                  <p className="text-[14px] font-semibold text-t1">{d.concepto}</p>
                  <p className="text-[12px] text-t2">{d.desc}</p>
                  {d.nota && (
                    <p className="text-[11px] text-t3 italic mt-0.5">{d.nota}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[20px] font-bold text-t1 tracking-tight">{d.valor}</span>
                  <Link
                    href={d.fuenteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-g3 hover:underline"
                  >
                    {d.fuente} ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Qué cubre el BPS */}
        <FadeIn>
          <div
            className="rounded-3xl p-8 relative overflow-hidden mb-8"
            style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(82,181,88,.07) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-g2/40 mb-4">
                Contexto educativo
              </p>
              <h3 className="text-[clamp(17px,2.5vw,22px)] font-bold text-white leading-[1.3] mb-4">
                El sistema previsional público cubre una parte. El resto depende de cada persona.
              </h3>
              <p className="text-[15px] text-white/55 leading-relaxed mb-6">
                El BPS y las AFAPs forman la base previsional obligatoria. Sin embargo, la experiencia
                internacional muestra que los sistemas de reparto enfrentan desafíos estructurales
                (envejecimiento poblacional, cambios en la relación activos/pasivos) que hacen
                aconsejable complementar el ahorro obligatorio con un tercer pilar voluntario.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/sistema-previsional"
                  className="inline-flex items-center gap-2 bg-white/[.08] border border-white/15 text-white text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-white/[.12] transition-colors"
                >
                  Ver sistema previsional completo
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/simulador"
                  className="inline-flex items-center gap-2 bg-g3 text-white text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-[#1A6638] transition-colors"
                >
                  Simulá tu ahorro complementario
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-[#F8F6F0] border border-black/[.06] rounded-2xl px-5 py-4">
            <p className="text-[12px] text-t3 leading-relaxed">
              <strong className="text-t2">Fuente:</strong>{" "}
              <Link
                href="https://www.bps.gub.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-g3 hover:underline"
              >
                bps.gub.uy ↗
              </Link>{" "}
              y{" "}
              <Link
                href="https://www.bcu.gub.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-g3 hover:underline"
              >
                bcu.gub.uy ↗
              </Link>
              . La información tiene fines educativos y no constituye asesoramiento financiero.
              Las tasas de aporte y condiciones de retiro pueden cambiar según normativa vigente.
              Consultá siempre las fuentes oficiales.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
