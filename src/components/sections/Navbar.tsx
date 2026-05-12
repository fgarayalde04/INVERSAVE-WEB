"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "@/context/ModalContext";

// ── Types ────────────────────────────────────────────────────────────────────
type SubItem = { label: string; desc: string; href: string };
type NavItem  = { label: string; href: string; items?: SubItem[] };

// ── Navigation data ──────────────────────────────────────────────────────────
const NAV: NavItem[] = [
  {
    label: "Sistema Previsional",
    href: "/sistema-previsional",
    items: [
      { label: "Situación actual",        desc: "Cómo funciona la base del sistema.",     href: "/sistema-previsional#situacion-actual" },
      { label: "Evolución histórica",     desc: "Datos y tendencias del sistema.",         href: "/sistema-previsional#evolucion-historica" },
      { label: "Esperanza de vida",       desc: "Qué implica vivir más años.",             href: "/sistema-previsional#esperanza-de-vida" },
      { label: "Evidencia internacional", desc: "Cómo resolvieron esto en otros países.", href: "/sistema-previsional#evidencia-internacional" },
    ],
  },
  {
    label: "Ahorrar",
    href: "/ahorrar",
    items: [
      { label: "Cómo funciona",         desc: "Los principios del ahorro sostenido.",     href: "/ahorrar#como-funciona" },
      { label: "Cómo hacerlo",          desc: "Pasos concretos para empezar.",            href: "/ahorrar#como-hacerlo" },
      { label: "Costo de esperar",      desc: "Lo que cuesta cada mes de demora.",        href: "/ahorrar#costo-de-esperar" },
      { label: "Dollar Cost Averaging", desc: "Aportá todos los meses, igual resultado.", href: "/ahorrar#dollar-cost-averaging" },
    ],
  },
  {
    label: "Mercado",
    href: "/mercado",
    items: [
      { label: "Historia del mercado",    desc: "98 años del S&P 500 explicados simple.",   href: "/mercado#historia-del-mercado" },
      { label: "En dónde se invierte",    desc: "Canasta diversificada de empresas reales.", href: "/mercado#en-donde-se-invierte" },
      { label: "Rendimiento por período", desc: "Cómo se comportó en distintos horizontes.", href: "/mercado#rendimiento-por-periodo" },
      { label: "Crisis",                  desc: "Caídas, recuperaciones y el largo plazo.",  href: "/mercado#crisis" },
    ],
  },
  { label: "Simulador",   href: "/simulador" },
  { label: "Educación",   href: "/educacion" },
  { label: "Noticias",    href: "/noticias" },
  { label: "Indicadores", href: "/indicadores" },
];

// ── Dropdown panel (desktop) ─────────────────────────────────────────────────
function DropdownPanel({
  items,
  visible,
  align = "left",
  onMouseEnter,
  onMouseLeave,
}: {
  items: SubItem[];
  visible: boolean;
  align?: "left" | "right";
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.98 }}
          transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full mt-1.5 z-50 bg-white border border-black/[.08] rounded-2xl shadow-xl overflow-hidden"
          style={{
            minWidth: 260,
            ...(align === "right" ? { right: 0 } : { left: 0 }),
          }}
        >
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col gap-0.5 px-3.5 py-2.5 rounded-xl hover:bg-[#F4F4F1] transition-colors group"
              >
                <span className="text-[13px] font-semibold text-t1 group-hover:text-g3 transition-colors leading-snug">
                  {item.label}
                </span>
                <span className="text-[11.5px] text-t3 leading-snug">{item.desc}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const { openModal } = useLeadModal();
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openDD = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };
  const startCloseDD = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 160);
  };
  const cancelCloseDD = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      {/* ── Sticky bar ──────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`h-16 flex items-center justify-between px-5 sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-black/[.08] shadow-sm"
            : "bg-white border-b border-black/[.05]"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-g3 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 11L5.5 6.5 8 9 11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[15px] font-bold text-t1 tracking-[-0.02em]">INVERSAVE</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
          {NAV.map((item) => {
            const hasItems = item.items && item.items.length > 0;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasItems ? openDD(item.label) : undefined}
                onMouseLeave={() => hasItems ? startCloseDD() : undefined}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-[13.5px] px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-150 ${
                    isActive(item.href)
                      ? "bg-black/[.07] text-t1 font-bold"
                      : "text-[#3A3A3A] font-semibold hover:text-t1 hover:bg-black/[.05]"
                  }`}
                >
                  {item.label}
                  {hasItems && (
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      className="opacity-40 transition-transform duration-150"
                      style={{ transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Link>

                {hasItems && (
                  <DropdownPanel
                    items={item.items!}
                    visible={activeDropdown === item.label}
                    onMouseEnter={cancelCloseDD}
                    onMouseLeave={startCloseDD}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right: El Plan + hamburger */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/dominion"
            className="hidden sm:inline-flex items-center gap-2 text-[14px] font-bold px-6 py-2.5 rounded-full text-white transition-all duration-150 hover:opacity-90 active:scale-[.98]"
            style={{
              background: "linear-gradient(135deg,#1A6638 0%,#0C1A11 100%)",
              boxShadow: "0 2px 12px rgba(12,26,17,.28)",
            }}
          >
            El Plan
            <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[.05] transition-colors"
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <motion.line x1="0" y1="1" x2="18" y2="1" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
                animate={{ y: menuOpen ? 6 : 0, rotate: menuOpen ? 45 : 0 }}
                style={{ transformOrigin: "9px 1px" }} transition={{ duration: 0.2 }} />
              <motion.line x1="0" y1="7" x2="18" y2="7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
                animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }} />
              <motion.line x1="0" y1="13" x2="18" y2="13" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
                animate={{ y: menuOpen ? -6 : 0, rotate: menuOpen ? -45 : 0 }}
                style={{ transformOrigin: "9px 13px" }} transition={{ duration: 0.2 }} />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-black/[.07] shadow-lg xl:hidden overflow-y-auto"
            style={{ maxHeight: "calc(100svh - 64px)" }}
          >
            <div className="px-4 py-3">
              {/* El Plan — destacado */}
              <Link
                href="/dominion"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between w-full text-[15px] font-semibold text-white bg-[#0C1A11] px-4 py-3.5 rounded-xl mb-3"
              >
                El Plan
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </Link>

              {/* Nav items */}
              <div className="space-y-0.5">
                {NAV.map((item, i) => {
                  const hasItems = item.items && item.items.length > 0;
                  const expanded = mobileExpanded === item.label;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <div className="flex items-center rounded-xl overflow-hidden">
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex-1 text-[15px] px-4 py-3 transition-colors ${
                            isActive(item.href)
                              ? "bg-[#F0EFE8] text-t1 font-semibold"
                              : "text-t2 font-medium hover:bg-[#F0EFE8] hover:text-t1"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {hasItems && (
                          <button
                            onClick={() => setMobileExpanded(expanded ? null : item.label)}
                            className="px-3 py-3 text-t3 hover:bg-[#F0EFE8] transition-colors"
                            aria-label={`Ver opciones de ${item.label}`}
                            aria-expanded={expanded}
                          >
                            <motion.svg
                              width="14" height="14" viewBox="0 0 14 14" fill="none"
                              animate={{ rotate: expanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path d="M2 4.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                          </button>
                        )}
                      </div>

                      {hasItems && (
                        <AnimatePresence>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                              style={{ overflow: "hidden" }}
                            >
                              <div className="ml-4 mt-0.5 mb-1 space-y-0.5">
                                {item.items!.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex flex-col gap-0.5 px-4 py-2.5 rounded-lg hover:bg-[#F4F4F1] transition-colors"
                                  >
                                    <span className="text-[13px] font-semibold text-t1">{sub.label}</span>
                                    <span className="text-[11px] text-t3">{sub.desc}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA bottom */}
              <div className="pt-3 pb-1 border-t border-black/[.06] mt-3">
                <button
                  onClick={() => { setMenuOpen(false); openModal("navbar"); }}
                  className="w-full text-center text-[14px] font-semibold text-g3 border border-g3 rounded-xl py-3 hover:bg-[#EDF8E8] transition-colors"
                >
                  Comenzar mi plan
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
