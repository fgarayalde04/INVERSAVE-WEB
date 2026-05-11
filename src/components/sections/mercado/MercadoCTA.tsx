import Link from "next/link";
import { FadeIn } from "@/components/ui";

const LINKS = [
  {
    href: "/simulador",
    label: "Simulador de ahorro",
    desc: "Calculá cuánto podés acumular con aportes mensuales automáticos.",
    arrow: true,
    accent: true,
  },
  {
    href: "/sistema-previsional",
    label: "Sistema previsional",
    desc: "Entendé cómo funciona el sistema de jubilaciones en Uruguay.",
    arrow: true,
    accent: false,
  },
  {
    href: "/educacion",
    label: "Educación financiera",
    desc: "Conceptos de inversión explicados en lenguaje claro.",
    arrow: true,
    accent: false,
  },
];

export default function MercadoCTA() {
  return (
    <section className="py-16 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="section-label text-center">Continuá explorando</p>
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-center text-t1 mb-2">
            Más herramientas y contexto.
          </h2>
          <p className="text-[15px] text-t2 text-center max-w-md mx-auto mb-10 leading-relaxed">
            El contexto de mercado es un punto de partida. Estas secciones te ayudan a ir un paso más.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-4">
          {LINKS.map((item, i) => (
            <FadeIn key={item.href} delay={i * 0.07}>
              <Link
                href={item.href}
                className={`block rounded-2xl p-6 border transition-shadow duration-200 hover:shadow-sm h-full ${
                  item.accent
                    ? "bg-[#EDF8E8] border-g1/25"
                    : "bg-white border-black/[.07]"
                }`}
              >
                <p className={`text-[15px] font-bold mb-1.5 leading-tight ${item.accent ? "text-g3" : "text-t1"}`}>
                  {item.label}
                  {item.arrow && (
                    <span className="ml-1.5" aria-hidden="true">→</span>
                  )}
                </p>
                <p className="text-[13px] text-t2 leading-relaxed">{item.desc}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
