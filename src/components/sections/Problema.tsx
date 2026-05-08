"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, AnimatedNumber } from "@/components/ui";
import { PopulationAgingChart, BPSSubsidyChart } from "@/components/charts/Charts";

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="text-[14px] font-semibold text-t1">{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-t3 flex-shrink-0"
        >
          ↓
        </motion.span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="pb-5"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

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
  return null;
}

export function ProblemaSection() {
  const [showMore, setShowMore] = useState(false);

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
          <p className="text-[17px] text-t2 leading-relaxed max-w-xl mb-8">
            El sistema de reparto funciona cuando hay muchos activos por cada jubilado.
            Esa proporción cambia cada año — y la tendencia es estructural e irreversible.
          </p>
        </FadeIn>

        {/* Stats band — integrado */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 bg-white border border-black/[.06] rounded-3xl py-8 px-6">
          {[
            { n: "78", suffix: " años", l: "Esperanza de vida Uruguay hoy", warn: false },
            { n: "2,3", suffix: "x", l: "Cotizantes por jubilado (BPS). En 2004 eran 3,5×", warn: true },
            { n: "60%", suffix: "", l: "Del salario promedio cubre la jubilación pública", warn: true },
            { n: "30", suffix: " años", l: "Puede durar tu etapa de retiro activo", warn: false },
          ].map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.08}>
              <div className="text-center">
                <div className={`stat-num mb-2 ${s.warn ? "text-warn" : "text-g3"}`}>
                  <AnimatedNumber value={s.n + s.suffix} />
                </div>
                <div className="text-[13px] text-t3 font-medium leading-snug">{s.l}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Big stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {[
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

        {/* Leer más toggle */}
        <FadeIn>
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 text-[13px] font-semibold text-warn hover:opacity-80 transition-opacity mb-4"
          >
            <motion.span animate={{ rotate: showMore ? 180 : 0 }} transition={{ duration: 0.2 }}>↓</motion.span>
            {showMore ? "Ver menos" : "Ver evolución histórica y esperanza de vida"}
          </button>
        </FadeIn>

        {/* Expandable content */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Timeline */}
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

            {/* Two charts side by side */}
            <div className="grid sm:grid-cols-2 gap-5 mt-8 mb-8">
              <FadeIn>
                <div className="bg-white border border-black/[.07] rounded-3xl p-6">
                  <p className="text-[13px] font-semibold text-t1 mb-0.5">Población 65+ en Uruguay</p>
                  <p className="text-[12px] text-t3 mb-4">Observado y proyección CEPAL (%)</p>
                  <div className="h-[180px]">
                    <PopulationAgingChart />
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.06}>
                <div className="bg-white border border-black/[.07] rounded-3xl p-6">
                  <p className="text-[13px] font-semibold text-t1 mb-0.5">Asistencia del Estado al BPS</p>
                  <p className="text-[12px] text-t3 mb-4">Miles de millones UYU (2015–2024)</p>
                  <div className="h-[180px]">
                    <BPSSubsidyChart />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Life expectancy */}
            <div className="mb-10" id="educacion">
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
                <p className="text-[11px] text-t3 italic mb-10">Fuente: CEPAL (2022) e INE Uruguay revisión 2025.</p>
              </FadeIn>
            </div>

            {/* Por qué necesitás un complemento — 3 idea cards */}
            <FadeIn>
              <p className="section-label mb-1">Por qué el retiro necesita un complemento</p>
              <h3 className="text-h3 font-bold mb-6">
                El sistema público cubre{" "}
                <span className="text-warn">solo una parte</span> de lo que necesitás.
              </h3>
            </FadeIn>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-warn">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 7 L12 12 L15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "El retiro dura más que antes",
                  body: "Con una esperanza de vida de 78 años y jubilación a los 65, tu retiro puede durar 15–25 años. El sistema público no fue diseñado para financiar ese horizonte con calidad de vida.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-warn">
                      <path d="M3 7 L8 12 L12 9 L16 14 L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 17 L21 17" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
                    </svg>
                  ),
                  title: "La tasa de sustitución cae",
                  body: "La jubilación promedio cubre menos del 60% del último salario. A medida que el ratio cotizantes/jubilado baja, ese porcentaje seguirá descendiendo en términos reales.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-warn">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 3 C12 3 9.5 7 9.5 12 C9.5 17 12 21 12 21" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 3 C12 3 14.5 7 14.5 12 C14.5 17 12 21 12 21" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 12 L21 12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  ),
                  title: "La inflación erosiona el ahorro",
                  body: "Mantener pesos inactivos pierde valor cada año. Una inversión en activos globales diversificados puede superar la inflación y crecer de forma compuesta en el largo plazo.",
                },
              ].map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.07}>
                  <div className="bg-white border border-black/[.07] rounded-3xl p-6 h-full">
                    <div className="mb-4">{c.icon}</div>
                    <p className="text-[15px] font-bold text-t1 mb-3">{c.title}</p>
                    <p className="text-[13px] text-t2 leading-relaxed">{c.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Evidencia internacional */}
            <FadeIn>
              <div className="bg-[#F5F2EA] border border-black/[.06] rounded-3xl p-7 mb-10">
                <p className="section-label mb-1">Evidencia internacional</p>
                <h3 className="text-[18px] font-bold text-t1 mb-5">
                  El ahorro complementario es la norma, no la excepción.
                </h3>
                <div className="grid sm:grid-cols-3 gap-5 mb-5">
                  {[
                    { n: "72%", l: "De los inversores globales afirman que el ahorro propio es crucial para su retiro (ICI Research Report)" },
                    { n: "87%", l: "De quienes tienen opinión formada sobre su retiro priorizan instrumentos de inversión propios sobre la pensión pública" },
                    { n: "65%", l: "De los hogares en países de la OCDE cuentan con algún tipo de ahorro privado complementario al sistema público" },
                  ].map((s, i) => (
                    <FadeIn key={i} delay={i * 0.07}>
                      <div className="bg-white border border-black/[.07] rounded-2xl p-5 text-center">
                        <p className="text-[clamp(24px,4vw,36px)] font-bold text-g3 tracking-tight leading-none mb-2">{s.n}</p>
                        <p className="text-[12px] text-t2 leading-snug">{s.l}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                <p className="text-[11px] text-t3 italic">
                  Fuente: ICI Research Report, OCDE Pensions Outlook 2023, CEPAL, BPS, CINVE y elaboración propia.
                </p>
              </div>
            </FadeIn>

            {/* Educational accordion */}
            <FadeIn>
              <p className="section-label mb-1">Entender mejor qué está pasando</p>
              <h3 className="text-[18px] font-bold text-t1 mb-5">Preguntas frecuentes sobre el sistema</h3>
              <div className="bg-white border border-black/[.07] rounded-3xl px-6 mb-8">
                <AccordionItem title="¿Qué es el sistema mixto de jubilaciones en Uruguay?">
                  <p className="text-[13px] text-t2 leading-relaxed">
                    Uruguay tiene un sistema de dos pilares. El primero es el BPS (Banco de Previsión Social),
                    que funciona por reparto: los trabajadores activos financian las jubilaciones de los actuales pasivos.
                    El segundo es el régimen de capitalización individual a través de las AFAP (Administradoras de Fondos
                    de Ahorro Previsional), donde cada trabajador acumula sus propios aportes. Ambos son obligatorios para
                    quienes ganan por encima de un umbral. Sin embargo, ninguno de los dos fue diseñado para financiar
                    solos 25–30 años de retiro activo con calidad de vida creciente.
                  </p>
                </AccordionItem>
                <AccordionItem title="¿Por qué el BPS necesita cada vez más asistencia del Estado?">
                  <p className="text-[13px] text-t2 leading-relaxed">
                    El BPS es un sistema de reparto: los ingresos provienen de los aportes de trabajadores activos,
                    y los egresos son las pasividades. A medida que la población envejece y la natalidad cae, hay menos
                    cotizantes por cada jubilado. En 1985 había 5,2 cotizantes por pasivo; hoy son 2,3. Esa brecha
                    estructural requiere que el Estado transfiera fondos al BPS para cubrir el déficit. En 2024,
                    esa asistencia superó los $8.194 millones de pesos —más del doble que en 2019.
                  </p>
                </AccordionItem>
                <AccordionItem title="¿Cuánto cubre realmente la jubilación pública?">
                  <p className="text-[13px] text-t2 leading-relaxed">
                    En promedio, la jubilación pública en Uruguay cubre entre el 45% y el 65% del último salario en
                    actividad, dependiendo de los años de cotización y el salario promedio del trabajador. Para quienes
                    tienen salarios más altos o carreras más cortas, la tasa de sustitución es aún menor. Esto implica
                    que al retirarse, la mayoría de las personas experimenta una caída significativa en su ingreso mensual.
                  </p>
                </AccordionItem>
                <AccordionItem title="¿Qué pasa si no hago nada y dependo solo del BPS y la AFAP?">
                  <p className="text-[13px] text-t2 leading-relaxed">
                    Si dependés exclusivamente de BPS + AFAP, tu jubilación cubrirá aproximadamente el 50–70% de tu
                    salario actual —en el mejor de los casos. Además, ese porcentaje podría decrecer en el tiempo si
                    el déficit del BPS se profundiza. Las proyecciones de CEPAL y CINVE indican que sin ahorro
                    complementario, muchos uruguayos deberán reducir su nivel de vida al retirarse, o postergar el
                    retiro más allá de los 65 años. El tercer pilar voluntario no reemplaza al sistema, lo complementa.
                  </p>
                </AccordionItem>
              </div>
            </FadeIn>

            <p className="text-[11px] text-t3 italic mb-8">
              Fuentes: INE Uruguay, BPS, CINVE, Estados Financieros BPS 2024, Monitor Mensual BPS,
              ICI Research Report y elaboración propia.
            </p>

            <button
              onClick={() => setShowMore(false)}
              className="flex items-center gap-2 text-[13px] font-semibold text-t3 hover:text-t1 transition-colors"
            >
              ↑ Ver menos
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
