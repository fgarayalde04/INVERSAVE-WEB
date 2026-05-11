import { FadeIn } from "@/components/ui";

const BENEFITS = [
  {
    title: "Simple de empezar",
    desc: "Sin papeleo complejo ni decisiones difíciles. Una conversación inicial, definís tu perfil y arrancás.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="9" r="4" stroke="#1A6638" strokeWidth="1.7" />
        <path d="M3 19c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Aportes automáticos",
    desc: "Débito mensual sin esfuerzo. No necesitás recordar transferir. El sistema trabaja mientras vos no.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 11a7 7 0 0 1 12.2-4.7M18 11a7 7 0 0 1-12.2 4.7"
          stroke="#1A6638"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 6.3l-.7 3.7-3.5-.7M6 15.7l.7-3.7 3.5.7"
          stroke="#1A6638"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Inversión diversificada",
    desc: "Tu dinero se distribuye en los mercados más grandes del mundo. No apostás a un solo activo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#1A6638" strokeWidth="1.7" />
        <ellipse cx="11" cy="11" rx="3.5" ry="8" stroke="#1A6638" strokeWidth="1.7" />
        <line x1="3" y1="11" x2="19" y2="11" stroke="#1A6638" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Horizonte largo plazo",
    desc: "Diseñado para 10, 20 o 30 años. El tiempo es el activo más importante que tenés como inversor.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 15 L7 10 L11 12.5 L15 8 L19 4"
          stroke="#1A6638"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 4h2v2"
          stroke="#1A6638"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Flexibilidad total",
    desc: "Podés ajustar el monto, pausar aportes o modificar tu estrategia cuando lo necesités.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14M4 11h10M4 16h6" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="17" cy="15" r="2.5" stroke="#1A6638" strokeWidth="1.7" />
        <path d="M17 12v.5M17 17.5v.5" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Asesor personal",
    desc: "Un asesor local regulado por el BCU te acompaña durante todo el proceso. No estás solo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6L11 2z"
          stroke="#1A6638"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 11l2 2 4-4" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function PlanBeneficios() {
  return (
    <section className="section-wrap">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Por qué funciona</p>
          <h2 className="text-h2 font-bold mb-12">
            Todo lo que necesitás,{" "}
            <span className="text-g3">nada de lo que no.</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.07}>
              <div className="bg-white border border-black/[.07] rounded-2xl p-6 flex flex-col gap-4 hover:border-g1/30 transition-colors duration-200 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#EDF8E8] flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </div>
                <div>
                  <p className="text-[15px] font-bold text-t1 mb-1.5">{b.title}</p>
                  <p className="text-[13px] text-t2 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
