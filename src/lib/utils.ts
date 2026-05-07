import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function fmt(n: number): string {
  return "USD " + Math.round(n).toLocaleString("es-UY");
}

export function calcFV(monthly: number, years: number, annualRate: number): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return monthly * n;
  return monthly * ((Math.pow(1 + r, n) - 1) / r);
}

export function calcMonthlyRetirement(fv: number, years: number, annualRate: number): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return fv / n;
  return fv * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export const QUOTES = {
  buffett1: {
    text: "Alguien disfruta de la sombra hoy porque alguien plantó un árbol hace años.",
    author: "Warren Buffett",
  },
  buffett2: {
    text: "El mercado de valores es un dispositivo para transferir dinero de los impacientes a los pacientes.",
    author: "Warren Buffett",
  },
  buffett3: {
    text: "Sé temeroso cuando otros son avariciosos y avaricioso cuando otros son temerosos.",
    author: "Warren Buffett",
  },
  munger: {
    text: "Necesitás paciencia y disciplina, y la capacidad de aceptar pérdidas y adversidades sin volverte loco.",
    author: "Charlie Munger",
  },
  graham: {
    text: "Los inversores deberían comprar acciones como compran frutas y verduras, no como compran perfume.",
    author: "Benjamin Graham",
  },
  markowitz: {
    text: "La diversificación es el único almuerzo gratis en las inversiones.",
    author: "Henry Markowitz",
  },
};

export const RISK_DATA = [
  { label: "1 día", pct: 46, color: "#C84B28" },
  { label: "1 mes", pct: 38, color: "#D05A20" },
  { label: "1 trimestre", pct: 32, color: "#C87820" },
  { label: "1 año", pct: 25, color: "#B09010" },
  { label: "3 años", pct: 16, color: "#6BA030" },
  { label: "5 años", pct: 10, color: "#2E8B57" },
  { label: "10 años", pct: 6, color: "#2F6B2F" },
];

export const SIX_FACTORS = [
  {
    icon: "📈",
    name: "Rendimiento positivo",
    desc: "Las inversiones a largo plazo generan resultados positivos. El crecimiento no es lineal — hay vaivenes, pero la dirección histórica es clara.",
    quote: "Alguien disfruta de la sombra hoy porque alguien plantó un árbol hace años.",
    who: "Warren Buffett",
  },
  {
    icon: "🌊",
    name: "Tolerancia al riesgo",
    desc: "Aceptar algo de riesgo es necesario para rendimientos superiores a la inflación. El asesor te ayuda a encontrar tu nivel correcto.",
    quote: "Necesitás paciencia, disciplina y la capacidad de aceptar pérdidas sin volverte loco.",
    who: "Charlie Munger",
  },
  {
    icon: "⏳",
    name: "Plazo razonable",
    desc: "Un horizonte de 5+ años permite suavizar fluctuaciones y potenciar el interés compuesto. A más tiempo, más potencia.",
    quote: "El mercado transfiere dinero de los impacientes a los pacientes.",
    who: "Warren Buffett",
  },
  {
    icon: "🌐",
    name: "Diversificación",
    desc: "No poner todos los huevos en una canasta. Distintos sectores y regiones protegen contra eventos que afectan a un área específica.",
    quote: "La diversificación es el único almuerzo gratis en las inversiones.",
    who: "Henry Markowitz",
  },
  {
    icon: "🎯",
    name: "Disciplina",
    desc: "Mantener el foco en los objetivos y controlar las emociones. El asesor es clave para mantenerte alineado con tu estrategia.",
    quote: "Sé temeroso cuando otros son avariciosos y avaricioso cuando otros son temerosos.",
    who: "Warren Buffett",
  },
  {
    icon: "💡",
    name: "Oportunidades",
    desc: "Las caídas del mercado son oportunidades para comprar a mejores precios. Un buen asesoramiento te prepara para aprovecharlas.",
    quote: "Comprá acciones como comprás frutas y verduras, no como comprás perfume.",
    who: "Benjamin Graham",
  },
];

export const FAQ_DATA = [
  {
    q: "¿Esto reemplaza mi jubilación del BPS o AFAP?",
    a: "No. Es un complemento. Seguís aportando al BPS y tu AFAP con normalidad. Estamos hablando de construir un tercer pilar personal de ahorro e inversión que te dé más independencia en el retiro.",
  },
  {
    q: "¿Qué es una cuenta segregada?",
    a: "Tus activos están legalmente separados de los de la empresa administradora. Si la empresa quiebra, tus activos no pueden ser reclamados por sus acreedores. Son tuyos como beneficiario del fideicomiso.",
  },
  {
    q: "¿No es riesgoso invertir en mercados internacionales?",
    a: "Con 10+ años de horizonte, la probabilidad histórica de pérdida en el S&P 500 desde 1929 es del 6%. El riesgo real a largo plazo es no invertir y que la inflación erosione tu ahorro año a año.",
  },
  {
    q: "¿Puedo retirar el dinero si lo necesito?",
    a: "Sí. Las soluciones tienen liquidez. Las condiciones exactas dependen del producto elegido y se explican en detalle en la primera reunión.",
  },
  {
    q: "¿Cuándo es el mejor momento para empezar?",
    a: "El mejor momento fue hace 10 años. El segundo mejor es hoy. Cada año de espera tiene un costo real en capital futuro que ningún aumento de aporte puede compensar.",
  },
  {
    q: "¿Qué rol tiene Roble Capital Wealth Management?",
    a: "Roble Capital es una entidad regulada por el Banco Central del Uruguay. Nos brinda su licencia institucional local y sus oficinas presenciales para acompañarte como asesor financiero en Uruguay.",
  },
  {
    q: "¿Desde cuánto puedo empezar a ahorrar?",
    a: "El principio más importante no es el monto, sino el hábito. El monto mínimo para acceder a las soluciones disponibles se consulta en la primera reunión, sin costo y sin compromiso.",
  },
];
