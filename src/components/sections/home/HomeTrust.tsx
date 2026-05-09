import { FadeIn } from "@/components/ui";

const TRUST = [
  { n: "BCU", l: "Asesor regulado Uruguay" },
  { n: "BNY Mellon", l: "Custodia global" },
  { n: "Guernsey FSC", l: "Regulación internacional" },
  { n: "+10%", l: "CAGR S&P 500 histórico (1928–2025)" },
];

export default function HomeTrust() {
  return (
    <section className="py-14 px-6 bg-[#F8F6F0]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRUST.map((t) => (
              <div key={t.l} className="text-center">
                <p className="text-[clamp(18px,2.5vw,24px)] font-bold text-t1 tracking-tight mb-1">{t.n}</p>
                <p className="text-[12px] text-t3 leading-snug">{t.l}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
