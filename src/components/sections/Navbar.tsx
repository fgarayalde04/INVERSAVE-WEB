"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "@/context/ModalContext";

const NAV_LINKS = [
  { label: "Cómo funciona", href: "/como-funciona" },
  { label: "Mercado", href: "/mercado" },
  { label: "Simulador", href: "/simulador" },
  { label: "Educación", href: "/educacion" },
];

export default function Navbar() {
  const { openModal } = useLeadModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`h-16 flex items-center justify-between px-6 sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-black/[.07] shadow-sm" : "bg-white border-b border-black/[.06] shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-7 h-7 rounded-lg bg-g3 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 11 L5.5 6.5 L8 9 L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[16px] font-bold text-t1 tracking-[-0.02em]">INVERSAVE</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium px-3.5 py-2 rounded-full transition-all duration-150 ${
                pathname === l.href
                  ? "bg-black/[.06] text-t1 font-semibold"
                  : "text-t2 hover:bg-black/[.05] hover:text-t1"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + Dominion + hamburger */}
        <div className="flex items-center gap-2">
          {/* Dominion — destacado */}
          <Link
            href="/dominion"
            className={`hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${
              pathname === "/dominion"
                ? "bg-g3 text-white border-g3"
                : "border-g3 text-g3 hover:bg-g3 hover:text-white"
            }`}
          >
            Explorar Dominion
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
          <button
            onClick={() => openModal("navbar")}
            className="btn-primary text-[13px] py-2 px-5 hidden lg:inline-flex"
          >
            Comenzar mi plan
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[.06] transition-colors"
            aria-label="Menú"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-black/[.07] shadow-xl md:hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {/* Dominion primero en mobile */}
              <Link
                href="/dominion"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between w-full text-[16px] font-semibold text-g3 px-3 py-3.5 rounded-xl bg-[#EDF8E8] mb-2"
              >
                Explorar Dominion
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </Link>
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-[16px] font-medium px-3 py-3.5 rounded-xl transition-colors ${
                      pathname === l.href ? "bg-[#F0F0EC] text-t1 font-semibold" : "text-t1 hover:bg-[#F0F0EC]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => { setMenuOpen(false); openModal("navbar"); }}
                  className="btn-primary w-full justify-center text-[14px] py-3"
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
