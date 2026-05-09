import { FadeIn } from "@/components/ui";

const ITEMS = [
  {
    problema: "El BPS no alcanza",
    solucion: "Un plan privado complementario que construís a tu ritmo, fuera del sistema estatal.",
    icon: "🏛️",
  },
  {
    problema: "Ahorrar en el banco pierde contra la inflación",
    solucion: "Inversión real en mercados globales con retorno histórico comprobado de +10% anual.",
    icon: "📉",
  },
  {
    problema: "No sé por dónde empezar",
    solucion: "Un asesor local regulado BCU te acompaña. Sin necesitar saber de finanzas.",
    icon: "🧭",
  },
];

export default function DominionProblema() {
  return (
    <section className="section-wrap">
      <div className="inner">
        <FadeIn>
          <p className="section-label">El problema</p>
          <h2 className="text-h2 font-bold mb-10">
            Tres problemas que{" "}
            <span className="text-g3">Dominion resuelve.</span>
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <FadeIn key={item.problema} delay={i * 0.08}>
              <div className="bg-white border border-black/[.07] rounded-3xl p-7 h-full">
                <div className="text-[28px] mb-4">{item.icon}</div>
                <p className="text-[13px] font-bold text-warn/80 uppercase tracking-[0.06em] mb-2">{item.problema}</p>
                <div className="h-px bg-black/[.06] mb-4"/>
                <p className="text-[15px] text-t1 leading-relaxed font-medium">{item.solucion}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
