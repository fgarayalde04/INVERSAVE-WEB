"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUp, X } from "lucide-react";
import { AI_INSIGHTS } from "./data";

type Message = { id: number; role: "assistant" | "user"; text: string };

const REPLIES = [
  "Estoy revisando tus cuentas conectadas para responder eso con precisión.",
  "Según tu flujo de caja de los últimos 3 meses, eso es totalmente viable manteniendo tu ritmo de ahorro actual.",
  "Encontré movimientos relacionados. Te dejo el detalle en la sección correspondiente.",
  "Buena pregunta. Con tu patrimonio actual y tu horizonte, te conviene priorizar liquidez antes que nuevas inversiones.",
];

let idCounter = 100;

export default function AIPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(() =>
    AI_INSIGHTS.map((text, i) => ({ id: i, role: "assistant", text }))
  );
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { id: idCounter++, role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
      setMessages((m) => [...m, { id: idCounter++, role: "assistant", text: reply }]);
      setTyping(false);
    }, 1100);
  }

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.aside
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 360, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full shrink-0 flex-col overflow-hidden border-l border-black/[.06] bg-white"
        >
          <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-black/[.06] px-5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B1220]">
              <Sparkles size={13} className="text-[#635BFF]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13.5px] font-semibold text-[#0B1220]">Asistente</p>
              <p className="text-[11px] text-[#9CA3AF]">Analiza tus finanzas en tiempo real</p>
            </div>
            <button onClick={onClose} className="flex h-7 w-7 items-center justify-center rounded-full text-[#9CA3AF] hover:bg-black/[.05] hover:text-[#0B1220]">
              <X size={15} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-md bg-[#0B1220] text-white"
                      : "rounded-bl-md bg-[#F5F5F7] text-[#1F2430]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-[#F5F5F7] px-3.5 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9CA3AF]"
                      style={{ animationDelay: `${d * 0.12}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="shrink-0 border-t border-black/[.06] p-3">
            <div className="flex items-end gap-2 rounded-2xl border border-black/[.08] bg-[#FAFAFB] p-1.5 pl-3.5 focus-within:border-[#635BFF]/40 focus-within:ring-4 focus-within:ring-[#635BFF]/[.08]">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                rows={1}
                placeholder="Preguntame lo que quieras…"
                className="max-h-24 flex-1 resize-none bg-transparent py-1.5 text-[12.5px] text-[#0B1220] placeholder:text-[#9CA3AF] focus:outline-none"
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B1220] text-white transition-opacity disabled:opacity-25"
              >
                <ArrowUp size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
