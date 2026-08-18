"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui";
import { InstitutionLogoLabel } from "@/components/ui/InstitutionLogoLabel";
import {
  BANK_DEPOSIT_RATES,
  DPF_TERM_LABELS,
  getBestRateBankId,
  type BankDPFData,
  type DPFCurrency,
  type DPFTermKey,
} from "@/data/bankDepositRates";

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatRate(rate: number): string {
  return rate.toFixed(2).replace(".", ",") + "%";
}

function formatDate(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-UY", { month: "long", year: "numeric" })
    .format(new Date(y, m - 1, 1));
}

// ── BankCard ──────────────────────────────────────────────────────────────────

interface BankCardProps {
  bank: BankDPFData;
  currency: DPFCurrency;
  term: DPFTermKey;
  isBest: boolean;
}

function BankCard({ bank, currency, term, isBest }: BankCardProps) {
  const [showTiers, setShowTiers] = useState(false);
  const entry = bank.rates[currency]?.[term];
  const hasRate = entry && entry.rate !== null;
  const hasTiers = entry?.tiers && entry.tiers.length > 1;

  return (
    <div className={`bg-white border rounded-2xl p-5 flex flex-col gap-4 transition-shadow hover:shadow-sm ${
      isBest && hasRate ? "border-g1/40 ring-1 ring-g1/20" : "border-black/[.07]"
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1 min-w-0">
          <InstitutionLogoLabel name={bank.name} size="sm" />
          {bank.channel && (
            <p className="text-[10px] text-t3 pl-10">{bank.channel}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            bank.type === "público"
              ? "bg-[#EDF8E8] text-g3"
              : "bg-[#F0EFF8] text-[#4A3FA8]"
          }`}>
            {bank.type}
          </span>
          {isBest && hasRate && (
            <span className="text-[9px] font-bold text-g3 bg-[#EDF8E8] border border-g1/30 rounded-full px-2 py-0.5 tracking-wide">
              Mejor tasa
            </span>
          )}
        </div>
      </div>

      {/* Rate */}
      {hasRate ? (
        <div>
          <div className="flex items-end gap-2">
            <span className="text-[38px] font-bold text-g3 leading-none">
              {formatRate(entry!.rate!)}
            </span>
            <span className="text-[13px] text-t3 pb-1.5">{bank.rateType}</span>
          </div>
          {entry?.termRange && (
            <p className="text-[10px] text-t3 mt-0.5">{entry.termRange}</p>
          )}
        </div>
      ) : bank.consultNote ? (
        <div className="flex flex-col gap-1.5">
          <p className="text-[16px] font-semibold text-t2">Consultar tasa</p>
          <p className="text-[11px] text-t3 leading-relaxed">{bank.consultNote}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-semibold text-t2">No disponible</p>
          <p className="text-[11px] text-t3">Este banco no ofrece este plazo en {currency}.</p>
        </div>
      )}

      {/* Tiers (BBVA / expandable) */}
      {hasRate && hasTiers && (
        <div>
          <button
            onClick={() => setShowTiers(!showTiers)}
            className="text-[11px] font-semibold text-g3 hover:underline flex items-center gap-1"
          >
            {showTiers ? "Ocultar tramos" : "Ver tramos por monto"}
            <svg
              width="10" height="10" viewBox="0 0 10 10" fill="none"
              className={`transition-transform ${showTiers ? "rotate-180" : ""}`}
            >
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {showTiers && (
            <div className="mt-2 bg-[#F8F6F0] rounded-xl px-3 py-2.5 space-y-1.5">
              {entry!.tiers!.map((tier) => (
                <div key={tier.amountLabel} className="flex items-center justify-between gap-2">
                  <span className="text-[11px] text-t2">{tier.amountLabel}</span>
                  <span className="text-[12px] font-semibold text-t1">{formatRate(tier.rate)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Amount note (Scotiabank) */}
      {hasRate && !hasTiers && bank.amountNote && (
        <p className="text-[10px] text-t3/80 italic">{bank.amountNote}</p>
      )}

      {/* Meta */}
      <div className="mt-auto pt-3 border-t border-black/[.05] space-y-1.5">
        {bank.minAmount?.[currency] && (
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] text-t3">Monto mínimo</span>
            <span className="text-[10px] font-medium text-t2">{bank.minAmount[currency]}</span>
          </div>
        )}
        <div className="flex items-center justify-between gap-2">
          <time className="text-[10px] text-t3/70" dateTime={bank.lastUpdated}>
            {formatDate(bank.lastUpdated)}
          </time>
          <Link
            href={bank.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-semibold text-g3 hover:underline"
          >
            Ver fuente →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── RendimientosDepositos ──────────────────────────────────────────────────────

const CURRENCIES: { id: DPFCurrency; label: string }[] = [
  { id: "UYU", label: "Pesos uruguayos" },
  { id: "USD", label: "Dólares" },
];

const TERMS: DPFTermKey[] = ["30d", "90d", "180d", "365d"];

export default function RendimientosDepositos() {
  const [currency, setCurrency] = useState<DPFCurrency>("UYU");
  const [term, setTerm]         = useState<DPFTermKey>("90d");

  const bestId = getBestRateBankId(currency, term);

  return (
    <section className="section-wrap" style={{ background: "#F8F6F0" }}>
      <div className="inner">
        <FadeIn>
          {/* Header */}
          <p className="section-label">Depósitos a plazo fijo</p>
          <h2 className="text-h2 font-bold mb-3">
            Rendimientos de{" "}
            <span className="text-g3">depósitos bancarios.</span>
          </h2>
          <p className="text-[16px] text-t2 leading-relaxed max-w-xl mb-8">
            Compará las tasas de los depósitos a plazo fijo ofrecidos por los
            principales bancos de Uruguay. Datos informativos con fuente oficial indicada.
          </p>
        </FadeIn>

        <FadeIn>
          {/* Selector de moneda */}
          <div className="flex gap-1 p-1 bg-white border border-black/[.07] rounded-2xl w-fit mb-5">
            {CURRENCIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCurrency(c.id)}
                className={`px-5 py-2 text-[13px] font-semibold rounded-xl transition-all ${
                  currency === c.id
                    ? "bg-[#1d3557] text-white shadow-sm"
                    : "text-t2 hover:text-t1"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Selector de plazo */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TERMS.map((t) => (
              <button
                key={t}
                onClick={() => setTerm(t)}
                className={`px-4 py-1.5 text-[12px] font-semibold rounded-full border transition-all ${
                  term === t
                    ? "bg-g3 text-white border-g3"
                    : "bg-white text-t2 border-black/[.10] hover:border-g3/50 hover:text-g3"
                }`}
              >
                {DPF_TERM_LABELS[t]}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid de bancos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {BANK_DEPOSIT_RATES.map((bank, i) => (
            <FadeIn key={bank.id} delay={i * 0.05}>
              <BankCard
                bank={bank}
                currency={currency}
                term={term}
                isBest={bank.id === bestId}
              />
            </FadeIn>
          ))}
        </div>

        {/* Nota de actualización + leyenda */}
        <FadeIn>
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold text-g3 bg-[#EDF8E8] border border-g1/30 rounded-full px-2 py-0.5 tracking-wide">
                Mejor tasa
              </span>
              <span className="text-[11px] text-t3">= tasa más alta para la selección actual</span>
            </div>
            <p className="text-[11px] text-t3">
              Última actualización: <strong className="text-t2">agosto 2026</strong>
            </p>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <FadeIn>
          <div className="bg-white border border-black/[.06] rounded-2xl px-5 py-4">
            <p className="text-[11px] text-t3 leading-relaxed">
              Las tasas son informativas y pueden variar según monto, plazo, canal y condiciones
              particulares de cada institución. Consultá las condiciones vigentes directamente con
              el banco antes de contratar un depósito. No constituye recomendación de inversión ni
              ranking definitivo.{" "}
              <strong className="text-t2">Fuente:</strong>{" "}
              <Link
                href="https://www.bcu.gub.uy/Servicios-Financieros-SSF/Paginas/Tasas-Medias.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-g3 hover:underline"
              >
                Banco Central del Uruguay (BCU)
              </Link>{" "}
              y sitios oficiales de las instituciones financieras.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
