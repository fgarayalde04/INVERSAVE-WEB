"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "@/context/ModalContext";

type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  celular: string;
  edad: string;
  objetivo: string;
  aporte: string;
};

const INITIAL: FormData = {
  nombre: "", apellido: "", email: "", celular: "",
  edad: "", objetivo: "", aporte: "",
};

function InputField({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold text-t3 uppercase tracking-[0.08em] mb-1.5">
        {label}{required && <span className="text-warn ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full text-[14px] text-t1 bg-[#F8F6F0] border border-black/[.08] rounded-xl px-3.5 py-3 outline-none focus:border-g3 focus:ring-2 focus:ring-g3/15 transition-all placeholder:text-t3/50";

export default function LeadModal() {
  const { isOpen, closeModal, source } = useLeadModal();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showOptional, setShowOptional] = useState(false);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm(INITIAL);
      } else {
        setError("Hubo un error al enviar. Por favor intentá de nuevo.");
      }
    } catch {
      setError("Error de conexión. Por favor intentá de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => { setSuccess(false); setError(""); setShowOptional(false); }, 350);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/55 backdrop-blur-[6px] z-[100]"
            onClick={handleClose}
          />

          {/* Modal panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[101] max-w-[440px] mx-auto"
            style={{ maxHeight: "92svh", overflow: "auto" }}
          >
            <div
              className="bg-white rounded-[28px] overflow-hidden"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 8px 32px rgba(0,0,0,0.10)" }}
            >
              {/* Dark header */}
              <div
                className="px-7 pt-6 pb-5 relative"
                style={{ background: "linear-gradient(135deg,#0C1A11 0%,#0F2A1A 100%)" }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 60% 70% at 40% 50%,rgba(82,181,88,.1) 0%,transparent 70%)" }}
                />
                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/60 text-[18px] leading-none cursor-pointer z-10"
                  aria-label="Cerrar"
                >
                  ×
                </button>
                {/* Logo */}
                <div className="relative z-10 flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-g3 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1.5 9.5 L4.5 5.5 L7 8 L10 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[14px] font-bold text-white tracking-[-0.01em]">INVERSAVE</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-bold text-white leading-tight mb-1.5">
                    Hablemos de tu plan
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">
                    Dejanos tus datos y te contactamos para ayudarte a evaluar un plan acorde a tus objetivos.
                  </p>
                </div>
              </div>

              {/* Body */}
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    onSubmit={handleSubmit}
                    className="px-7 py-6"
                  >
                    {/* Required fields */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <InputField label="Nombre" required>
                        <input required type="text" value={form.nombre} onChange={set("nombre")}
                          placeholder="Juan" className={inputCls} />
                      </InputField>
                      <InputField label="Apellido" required>
                        <input required type="text" value={form.apellido} onChange={set("apellido")}
                          placeholder="García" className={inputCls} />
                      </InputField>
                    </div>
                    <div className="mb-3">
                      <InputField label="Email" required>
                        <input required type="email" value={form.email} onChange={set("email")}
                          placeholder="juan@email.com" className={inputCls} />
                      </InputField>
                    </div>
                    <div className="mb-5">
                      <InputField label="Celular" required>
                        <input required type="tel" value={form.celular} onChange={set("celular")}
                          placeholder="+598 99 000 000" className={inputCls} />
                      </InputField>
                    </div>

                    {/* Optional fields toggle */}
                    <button
                      type="button"
                      onClick={() => setShowOptional(v => !v)}
                      className="flex items-center gap-1.5 text-[12px] font-semibold text-t3 hover:text-t2 transition-colors mb-4 cursor-pointer"
                    >
                      <motion.span animate={{ rotate: showOptional ? 90 : 0 }} transition={{ duration: 0.18 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.span>
                      {showOptional ? "Ocultar datos opcionales" : "Agregar datos opcionales (nos ayuda a prepararnos)"}
                    </button>

                    <AnimatePresence>
                      {showOptional && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                          className="space-y-3 mb-5"
                        >
                          <InputField label="Edad">
                            <input type="number" min={18} max={75} value={form.edad} onChange={set("edad")}
                              placeholder="35" className={inputCls} />
                          </InputField>
                          <InputField label="Objetivo financiero">
                            <select value={form.objetivo} onChange={set("objetivo")} className={inputCls}>
                              <option value="">Seleccioná...</option>
                              <option value="retiro">Ahorro para el retiro</option>
                              <option value="patrimonio">Construir patrimonio</option>
                              <option value="familia">Objetivos familiares</option>
                              <option value="independencia">Independencia financiera</option>
                              <option value="otro">Otro objetivo</option>
                            </select>
                          </InputField>
                          <InputField label="Aporte mensual estimado">
                            <select value={form.aporte} onChange={set("aporte")} className={inputCls}>
                              <option value="">Seleccioná...</option>
                              <option value="150-200">USD 150–200</option>
                              <option value="200-500">USD 200–500</option>
                              <option value="500-1000">USD 500–1.000</option>
                              <option value="1000+">USD 1.000+</option>
                            </select>
                          </InputField>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {error && (
                      <p className="text-[13px] text-warn mb-4 bg-[#FEF0EC] rounded-xl px-4 py-3">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 bg-g3 text-white font-semibold text-[14px] rounded-full py-3.5 hover:bg-[#1A6638] transition-all disabled:opacity-60 cursor-pointer"
                      style={{ boxShadow: "0 2px 12px rgba(26,102,56,.25)" }}
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Enviando...
                        </>
                      ) : "Enviar mis datos"}
                    </button>

                    <p className="text-[11px] text-t3/55 text-center mt-3 leading-relaxed">
                      Sin compromiso · Sin costo · Tus datos son confidenciales
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="px-7 py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#EDF8E8] border border-g1/20 flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M6 14 L11.5 19.5 L22 9" stroke="#1A6638" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-[22px] font-bold text-t1 mb-2 tracking-tight">Gracias.</h4>
                    <p className="text-[15px] text-t2 leading-relaxed mb-7 max-w-[280px] mx-auto">
                      Recibimos tus datos y nos estaremos contactando contigo a la brevedad.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-g3 text-white font-semibold text-[14px] rounded-full px-8 py-3 hover:bg-[#1A6638] transition-colors cursor-pointer"
                    >
                      Cerrar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
