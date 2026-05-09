import Link from "next/link";
import { FadeIn } from "@/components/ui";

const SERVICES = [
  {
    href: "/como-funciona",
    label: "Cómo funciona",
    desc: "Interés compuesto, DCA y por qué el largo plazo gana siempre.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 15 L7 9.5 L10.5 12.5 L14 7 L17 4" stroke="#1A6638" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/mercado",
    label: "Historia del mercado",
    desc: "98 años del S&P 500. Crisis, recuperaciones, y el poder del tiempo.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="11" width="3" height="6" rx="1" fill="#1A6638" opacity="0.4"/>
        <rect x="8.5" y="7" width="3" height="10" rx="1" fill="#1A6638" opacity="0.6"/>
        <rect x="14" y="3" width="3" height="14" rx="1" fill="#1A6638"/>
      </svg>
    ),
  },
  {
    href: "/simulador",
    label: "Simulador",
    desc: "Calculá cuánto acumularías según tu aporte mensual y horizonte.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="#1A6638" strokeWidth="1.8"/>
        <path d="M7 10h6M10 7v6" stroke="#1A6638" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HomeServices() {
  return (
    <section className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Explorá</p>
          <h2 className="text-h2 font-bold mb-10">
            Todo lo que necesitás{" "}
            <span className="text-g3">para decidir con información.</span>
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.href} delay={i * 0.08}>
              <Link
                href={s.href}
                className="group block bg-white border border-black/[.07] rounded-3xl p-7 hover:border-g1/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EDF8E8] flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <p className="text-[16px] font-bold text-t1 mb-2 group-hover:text-g3 transition-colors">{s.label}</p>
                <p className="text-[13px] text-t2 leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-1.5 mt-5 text-[12px] font-semibold text-g3">
                  Ver más
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
