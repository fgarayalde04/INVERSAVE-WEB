import { FadeIn } from "@/components/ui";
import SP500Companies from "@/components/sections/dominion/SP500Companies";
import PlanVideoBlock from "@/components/sections/dominion/PlanVideoBlock";

export default function MercadoEnDonde() {
  return (
    <div id="en-donde-se-invierte" className="scroll-mt-20">
      {/* Explicación */}
      <section className="section-wrap-white">
        <div className="inner">
          <FadeIn>
            <p className="section-label">En dónde se invierte</p>
            <h2 className="text-h2 font-bold mb-4">
              Una canasta de empresas{" "}
              <span className="text-g3">que ya conocés.</span>
            </h2>
            <p className="text-[17px] text-t2 leading-relaxed max-w-2xl mb-6">
              Al invertir en índices globales como el S&P 500, el capital se distribuye
              entre cientos de empresas reales que forman parte de la economía cotidiana.
              No es apostar a una sola empresa — es participar de una canasta diversificada
              de las compañías más grandes del mundo.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3 text-[13px]">
              {[
                "No apostás a una empresa",
                "Diversificación automática",
                "Empresas de múltiples sectores",
                "Economía real, no especulación",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-[#EDF8E8] border border-g1/20 rounded-full px-4 py-1.5 font-medium text-g3">
                  <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-t3/60 italic mt-4">
              Los ejemplos son ilustrativos y pueden variar según el instrumento o índice utilizado.
              No constituyen recomendación de inversión.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Empresas marquee */}
      <SP500Companies />

      {/* Video de la plataforma */}
      <PlanVideoBlock />
    </div>
  );
}
