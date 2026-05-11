"use client";
import { useState } from "react";
import { BANCOS, AFAPS, FED, INDICADORES } from "@/data/market";
import { bankIndicators } from "@/data/bank-indicators";
import type { BankIndicatorCurrency } from "@/data/bank-indicators";

// ── Helpers ──────────────────────────────────────────────────────────────────

function PendingPill() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-warn bg-[#FEF0EC] border border-warn/20 rounded-full px-2 py-0.5">
      Por actualizar
    </span>
  );
}

function SourceLink({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-g3 hover:underline"
    >
      {label}
    </a>
  );
}

// ── Tab: Tasas bancarias ─────────────────────────────────────────────────────
function TabTasas() {
  return (
    <div>
      <p className="text-[14px] text-t2 leading-relaxed mb-6 max-w-2xl">
        Tasas de depósito a plazo fijo (DPF) en bancos uruguayos. Los datos se actualizan
        periódicamente desde el{" "}
        <SourceLink
          url="https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Tasas.aspx"
          label="Banco Central del Uruguay (BCU)"
        />
        .
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-black/[.06]">
              <th className="text-left py-2.5 px-3 text-[11px] font-bold text-t3 uppercase tracking-[0.08em]">Banco</th>
              <th className="text-left py-2.5 px-3 text-[11px] font-bold text-t3 uppercase tracking-[0.08em]">Tipo</th>
              <th className="text-center py-2.5 px-3 text-[11px] font-bold text-t3 uppercase tracking-[0.08em]">USD DPF</th>
              <th className="text-center py-2.5 px-3 text-[11px] font-bold text-t3 uppercase tracking-[0.08em]">UYU DPF</th>
            </tr>
          </thead>
          <tbody>
            {BANCOS.map((banco) => {
              const usd = banco.tasas.find((t) => t.moneda === "USD");
              const uyu = banco.tasas.find((t) => t.moneda === "UYU");
              return (
                <tr key={banco.id} className="border-b border-black/[.04] hover:bg-[#F8F8F6] transition-colors">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white"
                        style={{ background: banco.tipo === "público" ? "#1A6638" : "#2C4A6E" }}>
                        {banco.abrev.slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-t1 leading-snug">{banco.nombre}</p>
                        <a href={banco.sitioWeb} target="_blank" rel="noopener noreferrer"
                          className="text-[10px] text-t3 hover:text-g3 transition-colors">
                          {banco.sitioWeb.replace("https://www.", "")}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`inline-flex items-center text-[10px] font-semibold rounded-full px-2.5 py-0.5 ${
                      banco.tipo === "público"
                        ? "bg-[#EDF8E8] text-g3"
                        : "bg-[#F0EFF8] text-[#4A3FA8]"
                    }`}>
                      {banco.tipo}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    {usd ? (
                      usd.tasaTna.estado === "pendiente" ? (
                        <PendingPill />
                      ) : (
                        <span className="font-semibold text-g3">{usd.tasaTna.valor}</span>
                      )
                    ) : (
                      <span className="text-t3 text-[11px]">—</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {uyu ? (
                      uyu.tasaTna.estado === "pendiente" ? (
                        <PendingPill />
                      ) : (
                        <span className="font-semibold text-g3">{uyu.tasaTna.valor}</span>
                      )
                    ) : (
                      <span className="text-t3 text-[11px]">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-[10px] text-t3/60 italic mt-4">
        Tasas TNA de referencia. Verificá condiciones actualizadas directamente con cada banco o en el BCU.
      </p>
    </div>
  );
}

// ── Tab: AFAPs ───────────────────────────────────────────────────────────────
function TabAFAPs() {
  return (
    <div>
      <p className="text-[14px] text-t2 leading-relaxed mb-6 max-w-2xl">
        Las AFAPs administran el segundo pilar del sistema previsional uruguayo. Los datos de
        rentabilidad y comisiones se publican trimestralmente en el{" "}
        <SourceLink
          url="https://www.bcu.gub.uy/Regulacion-y-Supervision/Paginas/Rendimientos-AFAP.aspx"
          label="BCU — Superintendencia de Servicios Financieros"
        />
        .
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {AFAPS.map((afap) => (
          <div key={afap.id} className="bg-[#F8F8F6] border border-black/[.07] rounded-2xl p-5">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <p className="text-[14px] font-bold text-t1">{afap.nombre}</p>
                <p className="text-[11px] text-t3">{afap.grupo}</p>
              </div>
              <a href={afap.sitioWeb} target="_blank" rel="noopener noreferrer"
                className="text-[10px] text-g3 font-medium hover:underline flex-shrink-0">
                sitio web →
              </a>
            </div>
            <div className="space-y-2">
              {[
                { label: "Rentabilidad real neta", dato: afap.rentabilidadReal },
                { label: "Comisión s/ salario",    dato: afap.comisionSalario },
                { label: "Participación mercado",  dato: afap.participacionMercado },
              ].map(({ label, dato }) => (
                <div key={label} className="flex items-center justify-between gap-2">
                  <span className="text-[12px] text-t2">{label}</span>
                  {dato.estado === "pendiente" ? (
                    <PendingPill />
                  ) : (
                    <span className="text-[13px] font-semibold text-g3">{dato.valor}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-t3/60 italic mt-4">
        Datos publicados por el BCU. Para comparar AFAPs usá la herramienta oficial:{" "}
        <SourceLink
          url="https://www.bcu.gub.uy/Regulacion-y-Supervision/Paginas/Rendimientos-AFAP.aspx"
          label="BCU — Rendimientos AFAP"
        />
        .
      </p>
    </div>
  );
}

// ── Tab: BPS ─────────────────────────────────────────────────────────────────
function TabBPS() {
  const PILLARS = [
    {
      label: "Pilar 1 · BPS",
      color: "#1A6638",
      bg: "#EDF8E8",
      items: [
        { k: "Aporte obrero",   v: "15% del salario" },
        { k: "Aporte patronal", v: "7,5% del salario" },
        { k: "Edad de retiro",  v: "60–65 años (variable)" },
        { k: "Tasa sustitución", v: "Consultar BPS" },
      ],
    },
    {
      label: "Pilar 2 · AFAP",
      color: "#4A3FA8",
      bg: "#F0EFF8",
      items: [
        { k: "Quiénes aportan", v: "Obligatorio > 1 BPC mensual" },
        { k: "Destino",         v: "Cuenta de ahorro individual" },
        { k: "Gestión",         v: "Regulada por BCU / SSF" },
        { k: "Rentabilidad",    v: "Variable según inversiones" },
      ],
    },
    {
      label: "Pilar 3 · Voluntario",
      color: "#6B4E2A",
      bg: "#F8F4EE",
      items: [
        { k: "Qué es",         v: "Ahorro complementario privado" },
        { k: "Requisito",      v: "Ninguno — decisión personal" },
        { k: "Ventaja",        v: "No depende del sistema público" },
        { k: "Ejemplo",        v: "Plan de inversión internacional" },
      ],
    },
  ];

  return (
    <div>
      <p className="text-[14px] text-t2 leading-relaxed mb-6 max-w-2xl">
        El sistema previsional uruguayo tiene tres pilares. BPS administra el primero (solidaridad
        intergeneracional). Las AFAPs el segundo (ahorro individual obligatorio). El tercero es
        voluntario y depende de cada persona.
      </p>
      <div className="grid sm:grid-cols-3 gap-3">
        {PILLARS.map((p) => (
          <div key={p.label} className="rounded-2xl p-5 border" style={{ background: p.bg, borderColor: `${p.color}22` }}>
            <p className="text-[12px] font-bold mb-4" style={{ color: p.color }}>{p.label}</p>
            <div className="space-y-2.5">
              {p.items.map(({ k, v }) => (
                <div key={k}>
                  <p className="text-[10px] text-t3 uppercase tracking-[0.06em]">{k}</p>
                  <p className="text-[13px] font-semibold text-t1">{v}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-t3 mt-5">
        Fuente:{" "}
        <SourceLink url="https://www.bps.gub.uy" label="BPS — Banco de Previsión Social" />
        {" · "}
        <SourceLink url="https://www.bcu.gub.uy" label="BCU — Banco Central del Uruguay" />
      </p>
    </div>
  );
}

// ── Tab: FED ─────────────────────────────────────────────────────────────────
function TabFED() {
  const ITEMS = [
    { label: "Tasa objetivo (federal funds rate)", dato: FED.tasaObjetivo },
    { label: "Próxima reunión del FOMC",           dato: FED.proximaReunion },
    { label: "Última decisión",                    dato: FED.ultimaDecision },
  ];

  const IMPACTS = [
    { title: "Tasas globales",    desc: "La tasa de la FED influye en el costo del crédito en todo el mundo." },
    { title: "Tipo de cambio",    desc: "Un dólar más caro o más barato afecta a economías emergentes como Uruguay." },
    { title: "Valoración activos", desc: "Tasas altas suelen presionar el precio de acciones y bonos." },
    { title: "Crédito local",     desc: "El costo de financiamiento en Uruguay se ve indirectamente afectado." },
  ];

  return (
    <div>
      <p className="text-[14px] text-t2 leading-relaxed mb-6 max-w-2xl">
        La Reserva Federal de EE.UU. (Fed) fija la tasa de referencia del dólar. Esta tasa
        impacta directamente en el costo del crédito global y en los mercados de capitales.
        Fuente:{" "}
        <SourceLink
          url="https://www.federalreserve.gov/monetarypolicy/openmarket.htm"
          label="Reserva Federal de EE.UU."
        />
        .
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {ITEMS.map(({ label, dato }) => (
          <div key={label} className="bg-[#F8F8F6] border border-black/[.07] rounded-2xl p-5">
            <p className="text-[11px] text-t3 mb-2 leading-snug">{label}</p>
            {dato.estado === "pendiente" ? (
              <div className="flex flex-col gap-1.5">
                <span className="text-[24px] font-bold text-t3/30">—</span>
                <PendingPill />
              </div>
            ) : (
              <p className="text-[22px] font-bold text-g3">{dato.valor}</p>
            )}
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {IMPACTS.map(({ title, desc }) => (
          <div key={title} className="flex gap-3 bg-white border border-black/[.07] rounded-xl p-4">
            <div className="w-1.5 rounded-full bg-g1 flex-shrink-0 self-stretch" />
            <div>
              <p className="text-[13px] font-semibold text-t1 mb-1">{title}</p>
              <p className="text-[12px] text-t2 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tab: Indicadores ─────────────────────────────────────────────────────────
function TabIndicadores() {
  return (
    <div>
      <p className="text-[14px] text-t2 leading-relaxed mb-6 max-w-2xl">
        Indicadores macroeconómicos de referencia. Para contexto educativo, no para tomar
        decisiones de inversión. Fuentes oficiales indicadas en cada dato.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {INDICADORES.map((ind) => (
          <div key={ind.id} className="bg-[#F8F8F6] border border-black/[.07] rounded-2xl p-5">
            <p className="text-[11px] font-bold text-t3 uppercase tracking-[0.07em] mb-1">
              {ind.label}
            </p>
            <p className="text-[10px] text-t3/60 mb-3">{ind.sublabel}</p>
            {ind.dato.estado === "pendiente" ? (
              <div className="flex flex-col gap-2">
                <span className="text-[28px] font-bold text-t3/25">—</span>
                <PendingPill />
              </div>
            ) : (
              <p className="text-[26px] font-bold text-g3">{ind.dato.valor}</p>
            )}
            <a
              href={ind.dato.fuenteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[10px] text-g3/60 hover:text-g3 transition-colors mt-3 truncate"
            >
              {ind.dato.fuente} →
            </a>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-t3/60 italic mt-4">
        Datos con fines educativos. Pueden cambiar en cualquier momento. Verificá siempre en las fuentes oficiales indicadas.
      </p>
    </div>
  );
}

// ── Tab: Plazos fijos / bancos ───────────────────────────────────────────────

const CURRENCY_FILTERS: { id: BankIndicatorCurrency | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "UYU", label: "Pesos uruguayos" },
  { id: "USD", label: "Dólares" },
];

const CURRENCY_BADGE: Record<BankIndicatorCurrency, { bg: string; text: string; label: string }> = {
  UYU: { bg: "#EDF8E8", text: "#1A6638", label: "UYU" },
  USD: { bg: "#EEF4FF", text: "#2C4A6E", label: "USD" },
};

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-UY", { day: "numeric", month: "short", year: "numeric" })
    .format(new Date(y, m - 1, d));
}

function BankCard({ item }: { item: typeof bankIndicators[number] }) {
  const badge = CURRENCY_BADGE[item.currency];
  return (
    <div className="bg-white border border-black/[.07] rounded-2xl p-5 flex flex-col gap-3 hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[12px] font-bold text-t3 uppercase tracking-[0.07em] mb-0.5">
            {item.entity}
          </p>
          <p className="text-[14px] font-semibold text-t1 leading-snug">{item.title}</p>
        </div>
        <span
          className="inline-flex items-center text-[10px] font-bold rounded-full px-2.5 py-0.5 flex-shrink-0"
          style={{ background: badge.bg, color: badge.text }}
        >
          {badge.label}
        </span>
      </div>

      {/* Rate */}
      <div className="flex items-end gap-2">
        <span className="text-[36px] font-bold text-g3 leading-none">{item.value}</span>
        <span className="text-[14px] font-semibold text-g3/70 pb-1">{item.unit}</span>
      </div>

      {/* Meta */}
      <div className="space-y-1.5 text-[12px] text-t2">
        <div className="flex gap-2">
          <span className="text-t3 w-16 flex-shrink-0">Plazo</span>
          <span className="font-medium text-t1">{item.term}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-t3 w-16 flex-shrink-0">Tipo</span>
          <span>{item.typeRate}</span>
        </div>
        {item.channel && (
          <div className="flex gap-2">
            <span className="text-t3 w-16 flex-shrink-0">Canal</span>
            <span>{item.channel}</span>
          </div>
        )}
        {item.period && (
          <div className="flex gap-2">
            <span className="text-t3 w-16 flex-shrink-0">Vigencia</span>
            <span>{item.period}</span>
          </div>
        )}
      </div>

      {/* Explanation */}
      <p className="text-[11px] text-t3 leading-relaxed border-t border-black/[.05] pt-3">
        {item.explanation}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-black/[.05] pt-3">
        <time className="text-[10px] text-t3/70" dateTime={item.lastUpdated}>
          Actualizado: {formatDate(item.lastUpdated)}
        </time>
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-g3 hover:underline"
        >
          Ver fuente →
        </a>
      </div>
    </div>
  );
}

function TabPlazos() {
  const [currency, setCurrency] = useState<BankIndicatorCurrency | "all">("all");

  const filtered = currency === "all"
    ? bankIndicators
    : bankIndicators.filter((b) => b.currency === currency);

  return (
    <div>
      {/* Intro */}
      <p className="text-[14px] text-t2 leading-relaxed mb-5 max-w-2xl">
        Tasas publicadas por bancos uruguayos para depósitos a plazo fijo. Pueden variar según
        el monto, la moneda, el plazo y el canal de contratación. Información con fines educativos:
        verificar siempre en la fuente oficial de cada institución.
      </p>

      {/* Currency filter */}
      <div className="flex gap-2 flex-wrap mb-6">
        {CURRENCY_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setCurrency(f.id)}
            className={`px-4 py-1.5 text-[12px] font-semibold rounded-full border transition-all ${
              currency === f.id
                ? "bg-g3 text-white border-g3"
                : "bg-white text-t2 border-black/[.10] hover:border-g3/50 hover:text-g3"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <BankCard key={item.id} item={item} />
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 bg-[#F8F6F0] border border-black/[.06] rounded-2xl px-5 py-4">
        <p className="text-[11px] text-t3 leading-relaxed">
          <strong className="text-t2">Aviso importante:</strong> Las tasas publicadas no constituyen
          recomendación de inversión ni asesoramiento financiero. No se presentan como ranking ni
          comparación definitiva entre bancos. Los datos son orientativos y deben verificarse
          directamente con cada institución o en la{" "}
          <a
            href="https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Tasas.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-g3 hover:underline"
          >
            tabla de tasas del BCU
          </a>
          .
        </p>
      </div>
    </div>
  );
}

// ── Dashboard principal ──────────────────────────────────────────────────────
const TABS = [
  { id: "plazos", label: "Plazos fijos" },
  { id: "afaps",  label: "AFAPs" },
  { id: "bps",    label: "BPS" },
] as const;

type TabId = typeof TABS[number]["id"];

export default function MercadoDashboard() {
  const [active, setActive] = useState<TabId>("plazos");

  return (
    <section id="dashboard" className="section-wrap-white">
      <div className="inner">
        <p className="section-label">Dashboard</p>
        <h2 className="text-h2 font-bold mb-2">
          Indicadores y datos{" "}
          <span className="text-g3">de referencia.</span>
        </h2>
        <p className="text-[16px] text-t2 leading-relaxed max-w-xl mb-8">
          Tasas bancarias, AFAPs, BPS, FED y contexto macroeconómico.
          Datos educativos con fuente visible.
        </p>

        {/* Tab bar */}
        <div className="flex gap-1 flex-wrap border-b border-black/[.07] mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2.5 text-[13px] font-semibold rounded-t-lg border-b-2 -mb-px transition-all ${
                active === tab.id
                  ? "text-g3 border-g3 bg-[#F8FDF8]"
                  : "text-t3 border-transparent hover:text-t1 hover:bg-[#F8F8F6]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="min-h-[320px]">
          {active === "plazos" && <TabPlazos />}
          {active === "afaps"  && <TabAFAPs />}
          {active === "bps"    && <TabBPS />}
        </div>
      </div>
    </section>
  );
}
