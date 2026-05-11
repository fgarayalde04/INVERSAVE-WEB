import Link from "next/link";
import { FadeIn } from "@/components/ui";
import { InstitutionLogoLabel } from "@/components/ui/InstitutionLogoLabel";
import { AFAPS } from "@/data/market";

export default function MercadoAFAPs() {
  return (
    <section className="py-20 px-6" style={{ background: "#F8F6F0" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="section-label">Sistema previsional — Segundo pilar</p>
          <h2 className="text-h2 font-bold mb-3">
            AFAPs en Uruguay.{" "}
            <span className="text-g3">Cómo funcionan.</span>
          </h2>
          <p className="text-[16px] text-t2 leading-relaxed max-w-xl mb-6">
            Las AFAPs (Administradoras de Fondos de Ahorro Previsional) gestionan el ahorro
            individual del segundo pilar del sistema previsional uruguayo. Están reguladas por
            el Banco Central del Uruguay (BCU).
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-black/[.07] rounded-xl px-4 py-2 mb-10">
            <span className="text-[12px] text-t2">
              Datos oficiales:{" "}
              <Link
                href="https://www.bcu.gub.uy/Regulacion-y-Supervision/Paginas/Rendimientos-AFAP.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-g3 underline underline-offset-2 hover:text-g2"
              >
                BCU → Rendimientos AFAP ↗
              </Link>
            </span>
          </div>
        </FadeIn>

        {/* Qué es una AFAP */}
        <FadeIn>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                n: "01",
                titulo: "Cuenta individual",
                desc: "Cada trabajador tiene una cuenta propia donde se acumula su ahorro previsional. El dinero es del afiliado.",
              },
              {
                n: "02",
                titulo: "Gestión regulada",
                desc: "Las AFAP invierten el ahorro en carteras reguladas por el BCU. Primariamente en bonos del Estado y otros instrumentos.",
              },
              {
                n: "03",
                titulo: "Comisión sobre salario",
                desc: "Las AFAP cobran una comisión sobre el salario nominal del afiliado, no sobre los rendimientos obtenidos.",
              },
            ].map((item) => (
              <div key={item.n} className="bg-white border border-black/[.07] rounded-2xl p-5">
                <p className="text-[11px] font-bold text-g3 tracking-[0.1em] mb-2">{item.n}</p>
                <p className="text-[14px] font-semibold text-t1 mb-1.5 leading-tight">{item.titulo}</p>
                <p className="text-[13px] text-t2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* AFAP cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {AFAPS.map((afap, i) => (
            <FadeIn key={afap.id} delay={i * 0.06}>
              <article className="bg-white border border-black/[.07] rounded-2xl p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-[15px] font-bold text-t1 leading-tight">
                      <InstitutionLogoLabel name={afap.nombre} />
                    </h3>
                    <p className="text-[11px] text-t3 pl-12">{afap.grupo}</p>
                  </div>
                  <Link
                    href={afap.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-g3 hover:underline flex-shrink-0"
                  >
                    Web ↗
                  </Link>
                </div>

                <p className="text-[13px] text-t2 leading-relaxed mb-5">{afap.descripcion}</p>

                {/* Datos clave */}
                <div className="space-y-2 mt-auto">
                  {[
                    { label: "Rentabilidad real neta", dato: afap.rentabilidadReal },
                    { label: "Comisión sobre salario", dato: afap.comisionSalario },
                    { label: "Participación de mercado", dato: afap.participacionMercado },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 bg-[#F8F6F0] rounded-xl px-4 py-2.5"
                    >
                      <span className="text-[12px] text-t2">{item.label}</span>
                      {item.dato.estado === "actualizado" ? (
                        <span className="text-[13px] font-bold text-g3">{item.dato.valor}</span>
                      ) : (
                        <span className="text-[11px] text-[#92600A] bg-[#FEF9EC] border border-[#F5D878]/40 rounded-full px-2 py-0.5">
                          Por actualizar
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-black/[.05]">
                  <Link
                    href="https://www.bcu.gub.uy/Regulacion-y-Supervision/Paginas/Rendimientos-AFAP.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-g3 hover:underline"
                  >
                    Ver datos en BCU ↗
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-2xl px-5 py-4">
            <p className="text-[12px] text-t3 leading-relaxed">
              <strong className="text-t2">Fuente:</strong> Banco Central del Uruguay (BCU) ·
              Superintendencia de Servicios Financieros ·{" "}
              <Link
                href="https://www.bcu.gub.uy/Regulacion-y-Supervision/Paginas/Rendimientos-AFAP.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-g3 hover:underline"
              >
                Rendimientos AFAP ↗
              </Link>
              . Los datos de rentabilidad y comisiones se actualizan manualmente desde la fuente oficial.
              La información tiene fines educativos y no constituye asesoramiento financiero personalizado.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
