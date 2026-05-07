"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "El Problema", id: "problema" },
  { label: "Educación", id: "educacion" },
  { label: "Simulador", id: "sim" },
  { label: "Plan INVERSAVE", id: "plan" },
  { label: "Mercado", id: "sp500" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`h-16 flex items-center justify-between px-6 sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/[.07] shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-lg bg-g3 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 11 L5.5 6.5 L8 9 L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[16px] font-bold text-t1 tracking-[-0.02em]">INVERSAVE</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-[13px] font-medium text-t2 px-3.5 py-2 rounded-full hover:bg-black/[.05] hover:text-t1 transition-all duration-150 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("cta")}
            className="btn-primary text-[13px] py-2 px-5 hidden sm:inline-flex"
          >
            Agendar reunión
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[.06] transition-colors"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-b border-black/[.07] shadow-xl md:hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(l.id)}
                  className="w-full text-left text-[16px] font-medium text-t1 px-3 py-3.5 rounded-xl hover:bg-[#F0F0EC] transition-colors cursor-pointer"
                >
                  {l.label}
                </motion.button>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => scrollTo("cta")}
                  className="btn-primary w-full justify-center text-[14px] py-3"
                >
                  Agendar reunión
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
