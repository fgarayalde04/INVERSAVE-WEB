import { FadeIn } from "@/components/ui";

export default function PlanVideoBlock() {
  return (
    <section className="py-20 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="section-label text-center">La plataforma</p>
          <h2 className="text-h2 font-bold text-center mb-3">
            Conocé cómo se ve{" "}
            <span className="text-g3">la experiencia.</span>
          </h2>
          <p className="text-[16px] text-t2 text-center max-w-lg mx-auto mb-10 leading-relaxed">
            Una vista simple de la plataforma para entender cómo se organiza la
            información y cómo podés seguir la evolución de tu cuenta.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            {/* Eyebrow label */}
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-t3 mb-3 text-center">
              S&amp;P 500 Tracker · Pacific Asset Management · Fondo disponible en el plan
            </p>

            {/* Video container */}
            <div
              className="rounded-3xl overflow-hidden border border-black/[.07] bg-white"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}
            >
              <video
                controls
                playsInline
                className="w-full h-auto block"
                poster="/account-preview.png"
                aria-label="Vista de la plataforma Dominion Capital Strategies — evolución de una cuenta de inversión"
              >
                <source src="/dcs-sp500-tracker.mp4" type="video/mp4" />
                Tu navegador no soporta reproducción de video.
              </video>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-t3 italic mt-3 text-center">
              Los rendimientos mostrados son históricos y no garantizan resultados futuros.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
