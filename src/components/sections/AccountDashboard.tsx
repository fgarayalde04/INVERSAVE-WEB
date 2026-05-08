"use client";
import { FadeIn } from "@/components/ui";

export default function AccountDashboard() {
  return (
    <section id="cuenta" className="py-24 px-6 bg-[#F5F2EA]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="section-label">Ejemplo de cuenta</p>
          <h2 className="text-h2 font-bold mb-4">
            Así luce una cuenta{" "}
            <span className="text-g3">real en Dominion.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-10">
            Una cuenta de inversión global con visibilidad completa de tu portafolio,
            rendimiento histórico y asignación de activos — accesible 24/7.
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
                onError={e => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div style="background:#0C1A11;padding:80px 40px;text-align:center;min-height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <path d="M6 36 L16 22 L24 30 L33 18 L42 8" stroke="#52B558" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p style="color:rgba(255,255,255,0.5);font-size:14px;font-family:Manrope,sans-serif;max-width:340px;line-height:1.6;">
                          Coloca la imagen de la cuenta en <code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;">/public/account-preview.png</code>
                        </p>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>
          <p className="text-center text-[13px] text-t3 mt-5">
            Ejemplo visual de una cuenta de inversión.
          </p>
          <p className="text-center text-[11px] text-t3/70 mt-1.5 italic">
            Imagen ilustrativa. Los valores mostrados pueden variar y no representan una garantía de rendimiento.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
