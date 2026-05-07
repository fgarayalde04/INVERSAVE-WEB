"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

// ── FadeIn wrapper ──────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}
export function FadeIn({ children, delay = 0, className, y = 24 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── AnimatedNumber ──────────────────────────────────────────
export function AnimatedNumber({ value }: { value: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "backOut" }}
    >
      {value}
    </motion.span>
  );
}

// ── QuoteBlock ──────────────────────────────────────────────
interface QuoteBlockProps {
  text: string;
  author: string;
  variant?: "green" | "lila";
}
export function QuoteBlock({ text, author, variant = "green" }: QuoteBlockProps) {
  return (
    <FadeIn>
      <blockquote
        className={cn(
          "border-l-2 rounded-r-2xl px-6 py-5 my-7",
          variant === "green"
            ? "border-g1 bg-[#EDF8E8]"
            : "border-lila bg-[#F0ECFF]"
        )}
      >
        <p className="text-[16px] font-normal text-t1 leading-relaxed italic mb-2">
          &ldquo;{text}&rdquo;
        </p>
        <cite
          className={cn(
            "text-[12px] font-bold not-italic",
            variant === "green" ? "text-g3" : "text-lila"
          )}
        >
          — {author}
        </cite>
      </blockquote>
    </FadeIn>
  );
}

// ── Alert ───────────────────────────────────────────────────
interface AlertProps {
  children: React.ReactNode;
  variant?: "green" | "warn" | "lila";
  className?: string;
}
export function Alert({ children, variant = "green", className }: AlertProps) {
  const styles = {
    green: "bg-[#EDF8E8] border-l-2 border-g1 text-g4",
    warn:  "bg-[#FEF0EC] border-l-2 border-warn text-[#7A2B15]",
    lila:  "bg-[#F0ECFF] border-l-2 border-lila text-[#3D2D99]",
  };
  return (
    <div className={cn("rounded-r-2xl px-5 py-4 text-[15px] leading-relaxed mb-4", styles[variant], className)}>
      {children}
    </div>
  );
}

// ── SectionWrapper ─────────────────────────────────────────
interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-24 px-6", className)}>
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}

// ── GlowDivider ────────────────────────────────────────────
export function GlowDivider() {
  return (
    <div
      className="h-px w-full"
      style={{ background: "linear-gradient(90deg,transparent,rgba(82,181,88,.35),transparent)" }}
    />
  );
}

// ── StatCard ────────────────────────────────────────────────
interface StatCardProps {
  number: string;
  label: string;
  variant?: "warn" | "green";
}
export function StatCard({ number, label, variant = "warn" }: StatCardProps) {
  return (
    <FadeIn>
      <div className={cn("rounded-3xl p-6", variant === "warn" ? "card-warn" : "card-green")}>
        <div className={cn("stat-num-sm mb-2", variant === "warn" ? "text-warn" : "text-g3")}>
          <AnimatedNumber value={number} />
        </div>
        <p className="text-[13px] text-t2 leading-snug">{label}</p>
      </div>
    </FadeIn>
  );
}

// ── ExpandBlock ─────────────────────────────────────────────
interface ExpandBlockProps {
  icon: React.ReactNode;
  iconVariant?: "g" | "v" | "w" | "n";
  title: string;
  subtitle: string;
  children: React.ReactNode;
}
export function ExpandBlock({ icon, iconVariant = "g", title, subtitle, children }: ExpandBlockProps) {
  const [open, setOpen] = useState(false);
  const iconBg = {
    g: "bg-[#EDF8E8] text-g3",
    v: "bg-[#F0ECFF] text-lila",
    w: "bg-[#FEF0EC] text-warn",
    n: "bg-[#F0EFE8] text-t2",
  }[iconVariant];

  return (
    <div className={cn("bg-white border rounded-2xl overflow-hidden mb-2.5 transition-colors duration-200", open ? "border-g1/40" : "border-black/[.07]")}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-5 cursor-pointer hover:bg-[#F8F6F0] transition-colors duration-150 text-left"
      >
        <div className="flex items-center gap-4">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", iconBg)}>
            {icon}
          </div>
          <div>
            <p className="text-[15px] font-semibold text-t1">{title}</p>
            <p className="text-[12px] text-t3 mt-0.5">{subtitle}</p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn("text-[18px] flex-shrink-0 ml-3", open ? "text-g3" : "text-t3")}
        >
          ⌄
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-5 pb-6 pt-5 border-t border-black/[.06]">{children}</div>
      </motion.div>
    </div>
  );
}

// ── FAQItem ─────────────────────────────────────────────────
export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[.07] py-4 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex justify-between items-start gap-4">
        <p className="text-[15px] font-semibold text-t1">{q}</p>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn("text-[18px] flex-shrink-0 mt-0.5", open ? "text-g1" : "text-t3")}
        >
          +
        </motion.span>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="text-[15px] text-t2 leading-relaxed mt-3 pb-1">{a}</p>
      </motion.div>
    </div>
  );
}

// ── Chip ────────────────────────────────────────────────────
export function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="chip">
      <span className="text-g1">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

// ── TrustBadge ──────────────────────────────────────────────
export function TrustBadge({ label }: { label: string }) {
  return (
    <div className="badge bg-[#F0EFE8] border-black/[.07] text-t2 text-[11px] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-g1 flex-shrink-0" />
      {label}
    </div>
  );
}

// ── StepItem ────────────────────────────────────────────────
export function StepItem({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <FadeIn delay={n * 0.08}>
      <div className="flex gap-4 items-start mb-5">
        <div className="w-8 h-8 rounded-full bg-g3 text-white flex items-center justify-center text-[13px] font-bold flex-shrink-0 mt-0.5">
          {n}
        </div>
        <div>
          <p className="text-[15px] font-semibold text-t1 mb-1">{title}</p>
          <p className="text-[14px] text-t2 leading-relaxed">{desc}</p>
        </div>
      </div>
    </FadeIn>
  );
}

// ── Pill ────────────────────────────────────────────────────
export function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#EDF8E8] border border-g1/20 rounded-lg px-3.5 py-2 text-[13px] text-g3">
      {label}
    </span>
  );
}
