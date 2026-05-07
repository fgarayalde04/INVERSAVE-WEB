"use client";
import { motion } from "framer-motion";
import { FadeIn, AnimatedNumber } from "@/components/ui";

function TimelineBar({ label, pct, color, year }: { label: string; pct: number; color: string; year: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mb-3">
        <div className="w-16 text-right flex-shrink-0">
          <span className="text-[12px] font-semibold text-t2">{year}</span>
        </div>
        <div className="flex-1 h-8 bg-black/[.05] rounded-lg overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="h-full rounded-lg flex items-center px-3"
            style={{ background: color }}
          >
            <span className="text-[12px] font-bold text-white">{label}</span>
          </motion.div>
        </div>
      </div>
    </FadeIn>
  );
}

export function StatsBand() {
  const stats = [
    { n: "78", suffix: " años", l: "Esperanza de vida Uruguay hoy", warn: false },
    { n: "2,3", suffix: "x", l: "Cotizantes por jubilado (BPS). En 2004 eran 3,5×", warn: true },
    { n: "60%", suffix: "", l: "Del salario promedio cubre la jubilación pública", warn: true },
    { n: "30", suffix: " años", l: "Puede durar tu etapa de retiro activo", warn: false },
  ];
  return (
    <div className="bg-white border-t border-b border-black/[.06] py-10">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <FadeIn key={s.l} delay={i * 0.08}>
            <div className={`stat-num mb-2 ${s.warn ? "text-warn" : "text-g3"}`}>
              <AnimatedNumber value={s.n + s.suffix} />
            </div>
            <div className="text-[13px] text-t3 font-medium leading-snug">{s.l}</div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export function ProblemaSection() {
  return (
    <section id="problema" className="section-wrap">
      <div className="inner">
        {/* Header */}
        <FadeIn>
          <p className="section-label-warn">Situación Previsional en Uruguay</p>
          <h2 className="text-h2 font-bold mb-5">
            Más jubilados,{" "}
            <span className="text-warn">menos trabajadores.</span>
          </h2>
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-14">
            El sistema de reparto funciona cuando hay muchos activos por cada jubilado.
            Esa proporción cambia cada año — y la tendencia es estructural e irreversible.
          </p>
        </FadeIn>

        {/* Big stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { n: "2,3", l: "Cotizantes/jubilado hoy (BPS dic. 2025). En 2004 eran 3,5.", color: "text-warn", bg: "card-warn" },
            { n: "1,27", l: "Hijos por mujer en Uruguay. El mínimo de reemplazo es 2,1.", color: "text-warn", bg: "card-warn" },
            { n: "32,5%", l: "De uruguayos tendrá más de 65 años en 2070. Hoy son el 15,8%.", color: "text-warn", bg: "card-warn" },
            { n: "$8.194M", l: "Asistencia del Estado al BPS en 2024. Más del doble que en 2019.", color: "text-warn", bg: "card-warn" },
          ].map((c, i) => (
            <FadeIn key={c.n} delay={i * 0.07}>
              <div className={c.bg}>
                <div className={`stat-num-sm ${c.color} mb-2`}>
                  <AnimatedNumber value={c.n} />
                </div>
                <p className="text-[13px] text-t2 leading-snug">{c.l}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Cotizantes/jubilado timeline */}
        <FadeIn>
          <div className="bg-white border border-black/[.07] rounded-3xl p-7 mb-8">
            <p className="section-label-warn mb-1">Relación cotizantes / jubilado — BPS</p>
            <p className="text-[14px] text-t2 mb-6">La base que sostiene el sistema se estrecha cada año.</p>
            <TimelineBar year="1985" label="5,2 cotizantes" pct={88} color="#3D9A3D" />
            <TimelineBar year="2000" label="4,1 cotizantes" pct={70} color="#7AAA3A" />
            <TimelineBar year="2010" label="3,1 cotizantes" pct={53} color="#B89020" />
            <TimelineBar year="2020" label="2,5 cotizantes" pct={42} color="#C86020" />
            <TimelineBar year="2025" label="2,3 cotizantes" pct={38} color="#C84B28" />
            <TimelineBar year="2045 (proy.)" label="1,7 cotizantes" pct={28} color="#A83020" />
            <p className="text-[11px] text-t3 italic mt-4">Fuente: BPS, Banco Mundial, CEPAL.</p>
          </div>
        </FadeIn>

        {/* Alert */}
        <FadeIn>
          <div className="alert-warn">
            El Estado deberá destinar el{" "}
            <strong>2,80% del PBI</strong> para sostener el BPS en 2075 —
            más del doble que hoy. La jubilación pública sola no alcanzará.
          </div>
        </FadeIn>

        {/* Life expectancy comparison */}
        <div className="mt-12" id="educacion">
          <FadeIn>
            <p className="section-label">Esperanza de vida: sube sin parar</p>
            <h3 className="text-h3 font-bold mb-3">
              Quien se retira a los 65 puede tener{" "}
              <span className="text-g3">25 años activos</span> por delante.
            </h3>
            <p className="text-[17px] text-t2 leading-relaxed mb-7">
              Tu ahorro tiene que durar tanto como vos. El sistema público no fue diseñado para financiar 25–30 años de retiro.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[
                { yr: "1950", num: "66", sub: "años — Uruguay", bg: "bg-[#F5F2EA]", numColor: "text-t2", badge: "" },
                { yr: "2025", num: "78", sub: "años — Uruguay", bg: "bg-white border border-black/[.07]", numColor: "text-t1", badge: "" },
                { yr: "2100 proy.", num: "88", sub: "años — CEPAL", bg: "bg-[#EDF8E8] border border-g1/20", numColor: "text-g3", badge: "text-g3" },
              ].map((col, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className={`${col.bg} rounded-3xl py-7 px-4 text-center`}>
                    <p className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-3 ${col.badge || "text-t3"}`}>{col.yr}</p>
                    <p className={`text-[clamp(28px,5vw,44px)] font-bold tracking-tight mb-1 ${col.numColor}`}>{col.num}</p>
                    <p className="text-[12px] text-t3 leading-snug">{col.sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="text-[11px] text-t3 italic">Fuente: CEPAL (2022) e INE Uruguay revisión 2025.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
