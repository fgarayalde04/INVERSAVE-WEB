import Link from "next/link";

const CARDS = [
  {
    emoji: "📖",
    title: "Entendé",
    description:
      "Aprendé cómo funciona el sistema previsional, la inflación, las tasas y el mercado.",
    href: "/educacion",
    linkLabel: "Ir a Educación",
  },
  {
    emoji: "📊",
    title: "Proyectá",
    description:
      "Visualizá cuánto podrías construir con aportes mensuales y largo plazo.",
    href: "/simulador",
    linkLabel: "Abrir Simulador",
    highlight: true,
  },
  {
    emoji: "🌱",
    title: "Empezá",
    description:
      "Conocé un plan de ahorro e inversión mensual, automatizado y flexible.",
    href: "/dominion",
    linkLabel: "Ver el Plan",
    highlight: true,
  },
  {
    emoji: "🗞️",
    title: "Informate",
    description:
      "Seguí noticias e indicadores clave para tomar mejores decisiones.",
    href: "/noticias",
    linkLabel: "Ver Noticias",
  },
];

export default function HomeFeatureCards() {
  return (
    <section className="section-wrap-white pb-8">
      <div className="inner">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group flex flex-col gap-3 rounded-2xl p-5 border transition-shadow hover:shadow-md ${
                card.highlight
                  ? "bg-[#EDF8E8] border-g1/20 hover:border-g1/40"
                  : "bg-white border-black/[.07] hover:border-black/[.12]"
              }`}
            >
              <span className="text-2xl">{card.emoji}</span>
              <div>
                <p className={`text-[15px] font-bold mb-1 ${card.highlight ? "text-g3" : "text-t1"}`}>
                  {card.title}
                </p>
                <p className="text-[13px] text-t2 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <p className={`text-[12px] font-semibold mt-auto group-hover:underline ${card.highlight ? "text-g3" : "text-t2"}`}>
                {card.linkLabel} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
