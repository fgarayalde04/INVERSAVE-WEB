import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import LeadModal from "@/components/LeadModal";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "INVERSAVE — Planificación patrimonial y retiro en Uruguay",
  description: "Construí tu tercer pilar de retiro con INVERSAVE. Inversión global regulada, aportes automáticos, asesor local BCU. Powered by Dominion Capital Strategies.",
  keywords: "inversave, jubilación, retiro, ahorro, inversión, Uruguay, planificación financiera, ETF, largo plazo, Dominion",
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
