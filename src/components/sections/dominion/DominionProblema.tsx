import { FadeIn } from "@/components/ui";

const ITEMS = [
  {
    problema: "El BPS no alcanza",
    solucion: "Un plan privado complementario que construís a tu ritmo, fuera del sistema estatal.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 18h18M4 18V9m4 9V9m4 9V9m4 9V9M11 3L2 9h18L11 3Z" stroke="#B5451E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    problema: "Ahorrar en el banco pierde contra la inflación",
    solucion: "Inversión real en mercados globales con retorno histórico comprobado de +10% anual.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 8L8 13L12 9.5L16 14L19 11" stroke="#B5451E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 18L19 18" stroke="#B5451E" strokeWidth="1" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    problema: "No sé por dónde empezar",
    solucion: "Un asesor local regulado BCU te acompaña. Sin necesitar saber de finanzas.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#B5451E" strokeWidth="1.6"/>
        <path d="M11 6v5.5l3.5 2" stroke="#B5451E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
                <div className="w-10 h-10 rounded-xl bg-[#FEF0EC] flex items-center justify-center mb-5">
                  {item.icon}
                </div>
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
