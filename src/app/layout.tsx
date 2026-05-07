import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INVERSAVE — Planificación patrimonial y retiro en Uruguay",
  description:
    "Educación financiera sobre jubilación, ahorro e inversión a largo plazo para Uruguay. Construí tu tercer pilar de retiro con estrategias globales. Powered by Roble Capital Wealth Management · BCU.",
  keywords: "inversave, jubilación, retiro, ahorro, inversión, Uruguay, planificación financiera, ETF, largo plazo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
