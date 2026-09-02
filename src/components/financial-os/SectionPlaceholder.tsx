"use client";

import { Sparkles } from "lucide-react";
import type { NavKey } from "./data";

const COPY: Record<Exclude<NavKey, "dashboard">, string> = {
  cuentas: "Todas tus cuentas bancarias, en un solo lugar, actualizadas en tiempo real.",
  bancos: "Gestioná la conexión con cada banco y controlá qué información compartís.",
  tarjetas: "Límites, consumos y beneficios de todas tus tarjetas, sin entrar a cada app.",
  inversiones: "Tu portafolio completo — acciones, bonos y fondos — con una sola mirada.",
  prestamos: "Cuotas, tasas y saldos de cada préstamo activo, comparados entre sí.",
  seguros: "Pólizas vigentes, coberturas y vencimientos de todos tus seguros.",
  jubilacion: "Proyección de tu jubilación según tu ahorro y aportes actuales.",
  objetivos: "Definí metas financieras y seguí su progreso automáticamente.",
  documentos: "Contratos, resúmenes y comprobantes, organizados y buscables.",
  reportes: "Reportes a medida sobre tu patrimonio, gasto e inversión.",
  configuracion: "Preferencias de cuenta, seguridad y conexiones con instituciones.",
};

export default function SectionPlaceholder({ label, section }: { label: string; section: Exclude<NavKey, "dashboard"> }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-black/[.1] bg-white px-6 py-24 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F1FF]">
        <Sparkles size={20} className="text-[#635BFF]" />
      </div>
      <h2 className="mt-4 text-[17px] font-semibold tracking-[-0.01em] text-[#0B1220]">{label}</h2>
      <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-[#6B7280]">{COPY[section]}</p>
      <span className="mt-5 rounded-full bg-[#F3F4F6] px-3 py-1.5 text-[11.5px] font-medium text-[#6B7280]">
        Próximamente
      </span>
    </div>
  );
}
