import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import LeadModal from "@/components/LeadModal";
import Navbar from "@/components/sections/Navbar";

const BASE_URL = "https://inversave.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "INVERSAVE — Ahorro e inversión a largo plazo en Uruguay",
    template: "%s | INVERSAVE",
  },
  description:
    "Plataforma para entender el sistema previsional uruguayo, simular tu futuro financiero y conocer un plan de ahorro e inversión mensual de largo plazo.",
  keywords: [
    "inversave",
    "ahorro a largo plazo Uruguay",
    "inversión a largo plazo",
    "planificación financiera Uruguay",
    "retiro Uruguay",
    "jubilación Uruguay",
    "interés compuesto",
    "ETF",
    "S&P 500",
    "Dominion Capital Strategies",
    "Roble Capital",
    "sistema previsional uruguayo",
    "AFAP Uruguay",
    "BPS jubilación",
    "simulador de ahorro",
    "ahorro mensual",
  ],
  authors: [{ name: "INVERSAVE / Roble Capital Wealth Management" }],
  creator: "INVERSAVE",
  publisher: "INVERSAVE",
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: BASE_URL,
    siteName: "INVERSAVE",
    title: "INVERSAVE — Ahorro e inversión a largo plazo en Uruguay",
    description:
      "Plan de ahorro mensual automático invertido en mercados globales. Regulado BCU. Cuenta segregada BNY Mellon. Desde USD 150/mes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "INVERSAVE — Ahorro e inversión a largo plazo en Uruguay",
    description:
      "Plan de ahorro mensual automático invertido en mercados globales. Regulado BCU. Desde USD 150/mes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ModalProvider>
          <Navbar />
          {children}
          <LeadModal />
        </ModalProvider>
      </body>
    </html>
  );
}
