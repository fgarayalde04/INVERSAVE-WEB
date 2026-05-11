export default function HomeContext() {
  return (
    <section className="py-10 px-6 bg-white border-b border-black/[.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">

          {/* Card 1 — El plan */}
          <div className="bg-[#F8F8F6] border border-black/[.07] rounded-2xl p-7">
            <p className="text-[10px] font-bold text-g3/50 tracking-[0.1em] uppercase mb-3">
              El plan
            </p>
            <h2 className="text-[17px] font-bold text-t1 mb-3 leading-snug">
              ¿De qué se trata el plan?
            </h2>
            <p className="text-[14px] text-t2 leading-relaxed">
              Es un plan de ahorro e inversión mensual. La idea es aportar de forma
              periódica, invertir con horizonte de largo plazo y construir capital con
              disciplina. El aporte puede automatizarse y adaptarse a la capacidad de
              ahorro de cada persona.
            </p>
          </div>

          {/* Card 2 — Por qué importa */}
          <div className="bg-[#F8F8F6] border border-black/[.07] rounded-2xl p-7">
            <p className="text-[10px] font-bold text-g3/50 tracking-[0.1em] uppercase mb-3">
              El contexto
            </p>
            <h2 className="text-[17px] font-bold text-t1 mb-3 leading-snug">
              ¿Por qué importa?
            </h2>
            <p className="text-[14px] text-t2 leading-relaxed">
              El sistema previsional enfrenta presión por cambios demográficos: vivimos
              más años, hay más personas en edad de retiro y el ahorro individual empieza
              a tener un rol cada vez más relevante.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
