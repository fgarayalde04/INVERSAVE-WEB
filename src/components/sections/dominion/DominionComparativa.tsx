import { FadeIn } from "@/components/ui";

const ROWS = [
  { feature: "Rendimiento histórico promedio", inversave: "+10% anual (S&P 500)", banco: "2–4% caja de ahorro", afap: "3–6% variable" },
  { feature: "Cuenta a tu nombre", inversave: "✓ Segregada", banco: "✗ Depósito bancario", afap: "✓ Individual" },
  { feature: "Exposición global", inversave: "✓ S&P 500, MSCI World", banco: "✗ Local/regional", afap: "Limitada" },
  { feature: "Liquidez", inversave: "✓ Disponible", banco: "✓ Inmediata", afap: "✗ Solo al retiro" },
  { feature: "Asesor personal", inversave: "✓ Regulado BCU", banco: "Limitado", afap: "✗ No" },
  { feature: "Voluntario", inversave: "✓", banco: "✓", afap: "✗ Obligatorio" },
];

export default function DominionComparativa() {
  return (
    <section className="section-wrap">
      <div className="inner">
        <FadeIn>
          <p className="section-label">Comparativa</p>
          <h2 className="text-h2 font-bold mb-10">
            INVERSAVE vs{" "}
            <span className="text-g3">las alternativas.</span>
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left text-[12px] font-semibold text-t3 pb-4 pr-6"></th>
                  <th className="text-center pb-4 px-4">
                    <div className="bg-g3 text-white text-[12px] font-bold px-4 py-2 rounded-full inline-block">INVERSAVE</div>
                  </th>
                  <th className="text-center text-[12px] font-semibold text-t3 pb-4 px-4">Banco tradicional</th>
                  <th className="text-center text-[12px] font-semibold text-t3 pb-4 px-4">AFAP</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-[#F8F6F0]" : "bg-white"}>
                    <td className="text-[13px] text-t2 py-4 pr-6 pl-4 rounded-l-xl font-medium">{row.feature}</td>
                    <td className="text-[13px] font-semibold text-g3 py-4 px-4 text-center">{row.inversave}</td>
                    <td className="text-[13px] text-t3 py-4 px-4 text-center">{row.banco}</td>
                    <td className="text-[13px] text-t3 py-4 px-4 text-center rounded-r-xl">{row.afap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
