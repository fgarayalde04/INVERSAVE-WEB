"use client";
import { FadeIn } from "@/components/ui";

export default function DominionAccountPreview() {
  return (
    <section className="py-16 px-6 bg-[#F8F6F0]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="section-label mb-1">Tu portafolio</p>
          <h2 className="text-h2 font-bold mb-3">
            Seguimiento completo{" "}
            <span className="text-g3">de tu cuenta.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-8">
            Acceso 24/7 a tu portafolio personal: rendimiento histórico, asignación de activos y evolución de tu capital en tiempo real.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="relative max-w-4xl mx-auto">
            <div
              className="rounded-3xl overflow-hidden border border-black/[.08]"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/account-preview.png"
                alt="Ejemplo de cuenta de inversión Dominion"
                className="w-full h-auto block"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div style="background:#0C1A11;padding:80px 40px;text-align:center;min-height:380px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <path d="M6 36 L16 22 L24 30 L33 18 L42 8" stroke="#52B558" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p style="color:rgba(255,255,255,0.5);font-size:14px;font-family:Manrope,sans-serif;max-width:340px;line-height:1.6;">
                          Dashboard de tu portafolio Dominion — acceso 24/7
                        </p>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {["Rendimiento en tiempo real", "Asignación de activos", "Historial de aportes", "Acceso 24/7"].map(f => (
              <span key={f} className="flex items-center gap-1.5 text-[12px] font-medium text-t2 bg-white border border-black/[.07] rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-g3 flex-shrink-0" />
                {f}
              </span>
            ))}
          </div>
          <p className="text-center text-[11px] text-t3/70 italic mt-4">
            Imagen ilustrativa. Los valores mostrados no representan una garantía de rendimiento.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
