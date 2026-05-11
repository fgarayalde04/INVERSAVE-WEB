"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "@/context/ModalContext";

const NAV_LINKS = [
  { label: "Home",                  href: "/" },
  { label: "Sistema Previsional",   href: "/sistema-previsional" },
  { label: "Cómo Funciona",         href: "/como-funciona" },
  { label: "Mercado",               href: "/mercado" },
  { label: "Simulador",             href: "/simulador" },
  { label: "Educación",             href: "/educacion" },
  { label: "Noticias",              href: "/noticias" },
];

export default function Navbar() {
  const { openModal } = useLeadModal();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
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
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <div className="w-7 h-7 rounded-lg bg-g3 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 11 L5.5 6.5 L8 9 L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[15px] font-bold text-t1 tracking-[-0.02em]">INVERSAVE</span>
        </Link>

        {/* ── Desktop nav — centro ── */}
        <div className="hidden xl:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[12.5px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-150 ${
                isActive(l.href)
                  ? "bg-black/[.06] text-t1 font-semibold"
                  : "text-t3 hover:text-t1 hover:bg-black/[.04]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* ── Right: CTA + hamburger ── */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* "El Plan" — CTA principal desktop */}
          <Link
            href="/dominion"
            className={`hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-150 ${
              pathname === "/dominion"
                ? "bg-[#0C1A11] text-white"
                : "bg-[#0C1A11] text-white hover:bg-g3"
            }`}
            style={{ boxShadow: "0 1px 8px rgba(12,26,17,.18)" }}
          >
            El Plan
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>

          {/* Hamburger — md y abajo */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[.05] transition-colors"
            aria-label="Menú"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <motion.line
                x1="0" y1="1" x2="18" y2="1"
                stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
                animate={{ y: menuOpen ? 6 : 0, rotate: menuOpen ? 45 : 0 }}
                style={{ transformOrigin: "9px 1px" }}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="0" y1="7" x2="18" y2="7"
                stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.line
                x1="0" y1="13" x2="18" y2="13"
                stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
                animate={{ y: menuOpen ? -6 : 0, rotate: menuOpen ? -45 : 0 }}
                style={{ transformOrigin: "9px 13px" }}
                transition={{ duration: 0.2 }}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile / tablet menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-black/[.07] shadow-lg xl:hidden"
          >
            <div className="px-5 py-4 space-y-0.5">

              {/* El Plan — destacado arriba */}
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

              {/* Nav links */}
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-[15px] px-4 py-3 rounded-xl transition-colors ${
                      isActive(l.href)
                        ? "bg-[#F0EFE8] text-t1 font-semibold"
                        : "text-t2 font-medium hover:bg-[#F0EFE8] hover:text-t1"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              {/* Contacto */}
              <div className="pt-3 pb-1">
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
