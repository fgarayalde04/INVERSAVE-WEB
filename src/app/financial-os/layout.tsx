import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial OS — Tu vida financiera, en un solo lugar",
  description:
    "Prototipo de interfaz: un sistema operativo financiero personal con patrimonio, objetivos e inversiones en un solo lugar, y un agente de inteligencia artificial siempre disponible.",
  robots: { index: false, follow: false },
};

export default function FinancialOSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
