import Link from "next/link";
import { FadeIn } from "@/components/ui";
import { INDICADORES } from "@/data/market";
import type { EstadoDato } from "@/data/market";

function EstadoBadge({ estado }: { estado: EstadoDato }) {
  if (estado === "actualizado") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-g3 bg-[#EDF8E8] border border-g1/20 rounded-full px-2.5 py-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0" />
        Actualizado
      </span>
    );
  }
  if (estado === "pendiente") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#92600A] bg-[#FEF9EC] border border-[#F5D878]/40 rounded-full px-2.5 py-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C842] flex-shrink-0" />
        Por actualizar
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-t3 bg-[#F5F2EA] border border-black/[.06] rounded-full px-2.5 py-0.5">
      No disponible
    </span>
  );
}

export default function MercadoIndicadores() {
  return (
    <section className="section-wrap-white pb-8">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Indicadores clave</p>
          <h2 className="text-h2 font-bold mb-3">
            Contexto económico{" "}
            <span className="text-g3">en simple.</span>
          </h2>
          <p className="text-[16px] text-t2 leading-relaxed max-w-xl mb-10">
            Tasas de referencia, inflación y tipo de cambio que dan contexto a las decisiones
            de ahorro e inversión. Los datos se actualizan manualmente desde fuentes oficiales.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {INDICADORES.map((ind, i) => (
            <FadeIn key={ind.id} delay={i * 0.06}>
              <div className="bg-white border border-black/[.07] rounded-2xl p-5 h-full flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="text-[11px] font-bold text-t3 tracking-[0.08em] uppercase leading-tight">
                    {ind.label}
                  </p>
                  <EstadoBadge estado={ind.dato.estado} />
                </div>

                <p className="text-[clamp(24px,3.5vw,34px)] font-bold tracking-tight text-t1 leading-none">
                  {ind.dato.estado === "actualizado" ? ind.dato.valor : "—"}
                </p>

                <p className="text-[12px] text-t3 leading-snug">{ind.sublabel}</p>

                <div className="mt-auto pt-2 border-t border-black/[.05]">
                  <Link
                    href={ind.dato.fuenteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-g3 hover:underline leading-tight"
                  >
                    {ind.dato.fuente} ↗
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex items-start gap-3 bg-[#F8F6F0] border border-black/[.06] rounded-2xl px-5 py-4">
            <svg className="w-4 h-4 text-t3 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 7v4M8 5v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-[12px] text-t3 leading-relaxed">
              Los indicadores marcados como <strong className="text-[#92600A]">Por actualizar</strong> se cargan
              manualmente desde las fuentes oficiales indicadas. La información tiene fines educativos y no
              constituye asesoramiento financiero. Los datos pueden cambiar en cualquier momento.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
