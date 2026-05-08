"use client";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  isOpen: boolean;
  source: string;
  openModal: (source?: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  source: "",
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("");

  return (
    <ModalContext.Provider value={{
      isOpen,
      source,
      openModal: (s = "") => { setSource(s); setIsOpen(true); },
      closeModal: () => setIsOpen(false),
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useLeadModal() {
  return useContext(ModalContext);
}
