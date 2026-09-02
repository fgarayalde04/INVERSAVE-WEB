"use client";

import { useState } from "react";
import Sidebar from "@/components/financial-os/Sidebar";
import Header from "@/components/financial-os/Header";
import AIPanel from "@/components/financial-os/AIPanel";
import Dashboard from "@/components/financial-os/Dashboard";
import SectionPlaceholder from "@/components/financial-os/SectionPlaceholder";
import { NAV_ITEMS, type NavKey } from "@/components/financial-os/data";

export default function FinancialOSPage() {
  const [active, setActive] = useState<NavKey>("dashboard");
  const [aiOpen, setAiOpen] = useState(true);

  const activeLabel = NAV_ITEMS.find((n) => n.key === active)?.label ?? "";

  return (
    <div
      className="fixed inset-0 z-[60] flex bg-[#FAFAFB] text-[#0B1220]"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Inter, Roboto, sans-serif' }}
    >
      <Sidebar active={active} onSelect={setActive} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header aiOpen={aiOpen} onToggleAI={() => setAiOpen((v) => !v)} />
        <main className="flex-1 overflow-y-auto px-8 py-7">
          {active === "dashboard" ? (
            <Dashboard />
          ) : (
            <SectionPlaceholder label={activeLabel} section={active} />
          )}
        </main>
      </div>

      <AIPanel open={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
}
