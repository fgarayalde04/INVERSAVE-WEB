import Link from "next/link";
import { FadeIn } from "@/components/ui";
import { BANCOS } from "@/data/market";
import type { EstadoDato, PlazoDPF } from "@/data/market";

const PLAZOS: PlazoDPF[] = ["30d", "60d", "90d", "180d", "365d"];
const PLAZO_LABEL: Record<PlazoDPF, string> = {
  "30d": "30 días",
  "60d": "60 días",
  "90d": "90 días",
  "180d": "180 días",
  "365d": "1 año",
};

function RateCell({ valor, estado }: { valor: string; estado: EstadoDato }) {
  if (estado === "actualizado") {
    return (
      <span className="text-[14px] font-semibold text-[#2d6a4f]">{valor}</span>
    );
  }
  return (
    <span className="text-[12px] text-[#a89070] bg-[#F8F6F0] rounded-md px-2 py-0.5 font-medium">
      —
    </span>
  );
}

type MonedaType = "USD" | "UYU";

function RatesTable({ moneda, title, note }: { moneda: MonedaType; title: string; note?: string }) {
  // Only include banks that have at least one entry for this moneda
  const bancosConMoneda = BANCOS.filter((b) =>
    b.tasas.some((t) => t.moneda === moneda)
  );

  return (
    <div className="mb-10">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{
            background: moneda === "USD" ? "#EDF8E8" : "#EEF2FF",
            color: moneda === "USD" ? "#2d6a4f" : "#3730a3",
          }}
        >
          {title}
        </span>
        <div className="h-px flex-1 bg-black/[.06]" />
      </div>

      {/* Table — scrollable on mobile */}
      <div className="overflow-x-auto rounded-2xl border border-black/[.07]">
        <table className="w-full text-left min-w-[500px]">
          <thead>
            <tr className="bg-[#F8F6F0] border-b border-black/[.07]">
              <th className="px-5 py-3 text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-wider w-[160px]">
                Banco
              </th>
              {PLAZOS.map((p) => (
                <th
                  key={p}
                  className="px-4 py-3 text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-wider text-right"
                >
                  {PLAZO_LABEL[p]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[.04]">
            {bancosConMoneda.map((banco) => (
              <tr key={banco.id} className="bg-white hover:bg-[#FAFAF8] transition-colors">
                <td className="px-5 py-3.5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-[#1a1a1a] leading-tight">
                      {banco.abrev}
                    </span>
                    <span className="text-[10px] text-[#8a8a8a] capitalize">{banco.tipo}</span>
                  </div>
                </td>
                {PLAZOS.map((plazo) => {
                  const tasa = banco.tasas.find(
                    (t) => t.moneda === moneda && t.plazo === plazo
                  );
                  return (
                    <td key={plazo} className="px-4 py-3.5 text-right">
                      {tasa ? (
                        <RateCell valor={tasa.tasaTna.valor} estado={tasa.tasaTna.estado} />
                      ) : (
                        <span className="text-[12px] text-[#c0b8a8]">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && (
        <p className="text-[11px] text-[#8a8a8a] mt-2 px-1">{note}</p>
      )}
    </div>
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
            Las tasas se expresan como TNA (Tasa Nominal Anual) y varían según el banco, el monto y el plazo.
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

        {/* ¿Qué es un DPF? */}
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

        {/* Tablas por moneda */}
        <FadeIn>
          <RatesTable
            moneda="USD"
            title="Dólares (USD)"
            note="Scotiabank: tasas verificadas para el tramo $2.000–$50.000 USD (junio 2026). El resto de bancos están pendientes de actualización."
          />
        </FadeIn>

        <FadeIn>
          <RatesTable
            moneda="UYU"
            title="Pesos uruguayos (UYU)"
          />
        </FadeIn>

        {/* Leyenda de estados */}
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-[#2d6a4f]">1,50% TNA</span>
              <span className="text-[11px] text-[#6b6b6b]">= tasa verificada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-[#a89070] bg-[#F8F6F0] rounded-md px-2 py-0.5 font-medium">—</span>
              <span className="text-[11px] text-[#6b6b6b]">= pendiente de actualización</span>
            </div>
          </div>
        </FadeIn>

        {/* Nota legal */}
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
