import Link from "next/link";
import { FadeIn } from "@/components/ui";
import { InstitutionLogoLabel } from "@/components/ui/InstitutionLogoLabel";
import { BANCOS } from "@/data/market";
import type { EstadoDato } from "@/data/market";

function PendientePill({ estado }: { estado: EstadoDato }) {
  if (estado === "actualizado") return null;
  if (estado === "no-disponible") {
    return (
      <span className="text-[10px] text-t3 bg-[#F5F2EA] border border-black/[.06] rounded-full px-2 py-0.5">
        No disponible
      </span>
    );
  }
  return (
    <span className="text-[10px] text-[#92600A] bg-[#FEF9EC] border border-[#F5D878]/40 rounded-full px-2 py-0.5">
      Por actualizar
    </span>
  );
}

export default function MercadoBancos() {
  return (
    <section className="section-wrap-white">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Bancos en Uruguay</p>
          <h2 className="text-h2 font-bold mb-3">
            Tasas de depósito{" "}
            <span className="text-g3">en Uruguay.</span>
          </h2>
          <p className="text-[16px] text-t2 leading-relaxed max-w-xl mb-4">
            Los bancos que operan en Uruguay ofrecen depósitos a plazo fijo (DPF) en pesos y dólares.
            El Banco Central del Uruguay (BCU) publica diariamente las tasas vigentes de cada institución.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#EDF8E8] border border-g1/20 rounded-xl px-4 py-2 mb-10">
            <span className="text-[12px] font-semibold text-g3">
              Tasas oficiales:{" "}
              <Link
                href="https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Tasas.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-g2"
              >
                bcu.gub.uy → Estadísticas → Tasas ↗
              </Link>
            </span>
          </div>
        </FadeIn>

        {/* Qué es un DPF */}
        <FadeIn>
          <div className="bg-[#F8F6F0] border border-black/[.06] rounded-2xl px-6 py-5 mb-10">
            <p className="text-[13px] font-semibold text-t1 mb-2">¿Qué es un depósito a plazo fijo (DPF)?</p>
            <p className="text-[13px] text-t2 leading-relaxed">
              Un DPF es un instrumento bancario donde el cliente deposita dinero por un plazo determinado
              (30, 60, 90, 180 o 365 días) y el banco le paga una tasa de interés acordada al inicio.
              A diferencia de la caja de ahorro, el dinero no está disponible hasta el vencimiento del plazo.
              Las tasas se expresan como TNA (Tasa Nominal Anual).
            </p>
          </div>
        </FadeIn>

        {/* Tabla de bancos */}
        <div className="space-y-3 mb-8">
          {BANCOS.map((banco, i) => (
            <FadeIn key={banco.id} delay={i * 0.04}>
              <div className="bg-white border border-black/[.07] rounded-2xl overflow-hidden">
                {/* Header del banco */}
                <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-black/[.05]">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[14px] font-semibold text-t1 leading-tight">
                      <InstitutionLogoLabel name={banco.nombre} />
                    </p>
                    <p className="text-[11px] text-t3 capitalize pl-12">{banco.tipo}</p>
                  </div>
                  <Link
                    href={banco.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-g3 hover:underline flex-shrink-0"
                  >
                    Sitio web ↗
                  </Link>
                </div>

                {/* Tasas */}
                <div className="divide-y divide-black/[.04]">
                  {banco.tasas.map((tasa, j) => (
                    <div
                      key={`${banco.id}-${tasa.moneda}-${j}`}
                      className="flex items-center justify-between gap-4 px-5 py-3 flex-wrap"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-bold text-t3 bg-[#F5F2EA] rounded-lg px-2 py-1">
                          {tasa.moneda}
                        </span>
                        <span className="text-[12px] text-t2">DPF · {tasa.plazo}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap justify-end">
                        {tasa.tasaTna.estado === "actualizado" ? (
                          <span className="text-[16px] font-bold text-g3">
                            {tasa.tasaTna.valor} TNA
                          </span>
                        ) : (
                          <span className="text-[15px] font-semibold text-t3">—</span>
                        )}
                        <PendientePill estado={tasa.tasaTna.estado} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bg-[#F8F6F0] border border-black/[.06] rounded-2xl px-5 py-4">
            <p className="text-[12px] text-t3 leading-relaxed">
              <strong className="text-t2">Fuente:</strong> Banco Central del Uruguay (BCU) ·{" "}
              <Link
                href="https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Tasas.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-g3 hover:underline"
              >
                bcu.gub.uy ↗
              </Link>
              . Las tasas mostradas son orientativas y se actualizan manualmente.
              Para obtener la tasa vigente exacta de cada banco, consultá la tabla diaria del BCU
              o contactá directamente a la institución. No constituye recomendación de inversión.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
