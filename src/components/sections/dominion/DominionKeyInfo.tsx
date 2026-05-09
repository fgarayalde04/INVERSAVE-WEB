"use client";
import { FadeIn } from "@/components/ui";

const INFO = [
  {
    label: "Aporte mínimo",
    value: "USD 150/mes",
    sub: "Aportes automáticos mensuales desde USD 150",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 16L8 10L12 13L17 6" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 6h3v3" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Custodia",
    value: "BNY Mellon",
    sub: "USD 59,4 billones bajo custodia · 38 países",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6L11 2z" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Fondo principal",
    value: "S&P 500 Tracker",
    sub: "Pacific Asset Management · USD 22.400M AUM",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="12" width="3" height="7" rx="1" stroke="#1A6638" strokeWidth="1.7"/>
        <rect x="9.5" y="8" width="3" height="11" rx="1" stroke="#1A6638" strokeWidth="1.7"/>
        <rect x="16" y="4" width="3" height="15" rx="1" stroke="#1A6638" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    label: "Liquidez",
    value: "Disponible",
    sub: "Sin permanencia mínima obligatoria",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#1A6638" strokeWidth="1.7"/>
        <path d="M11 7v4l2.5 2.5" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Regulación",
    value: "Guernsey FSC",
    sub: "Calificación AA- · Dependencia de la Corona Británica",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 6H20l-5.3 3.9 2 6.1L11 14.6 5.3 18 7.3 12 2 8h6.5L11 2z" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Acceso",
    value: "24/7 online",
    sub: "Reportes de cartera en tiempo real · Dashboard personal",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="13" rx="2" stroke="#1A6638" strokeWidth="1.7"/>
        <path d="M8 20h6M11 17v3" stroke="#1A6638" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M6 9l3 3 2-2 3 3" stroke="#1A6638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function DominionKeyInfo() {
  return (
    <section style={{ background: "#F8F6F0" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="section-label text-center">La plataforma</p>
          <h2 className="text-h2 font-bold text-center mb-3">
            Todo lo que necesitás saber{" "}
            <span className="text-g3">de un vistazo.</span>
          </h2>
          <p className="text-[16px] text-t2 text-center max-w-xl mx-auto mb-12 leading-relaxed">
            Dominion es flexible, transparente y eficiente en costos. Con información en línea las 24 horas, los 7 días de la semana.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INFO.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.07}>
              <div className="bg-white border border-black/[.07] rounded-2xl p-6 h-full flex flex-col gap-4 hover:border-g1/30 transition-colors duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#EDF8E8] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.09em] uppercase text-t3 mb-1">{item.label}</p>
                  <p className="text-[22px] font-bold text-g3 leading-tight mb-1">{item.value}</p>
                  <p className="text-[13px] text-t2 leading-snug">{item.sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
