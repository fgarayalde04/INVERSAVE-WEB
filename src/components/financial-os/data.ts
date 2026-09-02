// Mock data for the Financial OS interface prototype.
// All figures are illustrative placeholders, not real user data.

export type NavKey =
  | "dashboard"
  | "cuentas"
  | "bancos"
  | "tarjetas"
  | "inversiones"
  | "prestamos"
  | "seguros"
  | "jubilacion"
  | "objetivos"
  | "documentos"
  | "reportes"
  | "configuracion";

export const NAV_ITEMS: { key: NavKey; label: string }[] = [
  { key: "dashboard", label: "Dashboard" },
  { key: "cuentas", label: "Cuentas" },
  { key: "bancos", label: "Bancos" },
  { key: "tarjetas", label: "Tarjetas" },
  { key: "inversiones", label: "Inversiones" },
  { key: "prestamos", label: "Préstamos" },
  { key: "seguros", label: "Seguros" },
  { key: "jubilacion", label: "Jubilación" },
  { key: "objetivos", label: "Objetivos" },
  { key: "documentos", label: "Documentos" },
  { key: "reportes", label: "Reportes" },
  { key: "configuracion", label: "Configuración" },
];

export type MetricCard = {
  label: string;
  value: number;
  delta?: string;
  deltaTone?: "positive" | "negative" | "neutral";
  deltaDirection?: "up" | "down";
  hint?: string;
};

export const METRICS = {
  patrimonio: { label: "Patrimonio total", value: 284650, delta: "+4.2% este mes", deltaTone: "positive", deltaDirection: "up", hint: "vs. USD 273.140 el mes pasado" } satisfies MetricCard,
  liquidez: { label: "Liquidez", value: 18420, delta: "Disponible ya", deltaTone: "neutral" } satisfies MetricCard,
  cash: { label: "Cash disponible", value: 8950, delta: "En cuentas corrientes", deltaTone: "neutral" } satisfies MetricCard,
  ingresos: { label: "Ingresos del mes", value: 6200, delta: "+2.1% vs. abril", deltaTone: "positive", deltaDirection: "up" } satisfies MetricCard,
  gastos: { label: "Gastos del mes", value: 3840, delta: "+18% vs. abril", deltaTone: "negative", deltaDirection: "up" } satisfies MetricCard,
  inversiones: { label: "Inversiones", value: 142300, delta: "+6.8% este año", deltaTone: "positive", deltaDirection: "up" } satisfies MetricCard,
  deudas: { label: "Deudas", value: 34900, delta: "2 préstamos activos", deltaTone: "negative" } satisfies MetricCard,
};

export const GOALS = [
  { label: "Comprar una casa", current: 67200, target: 120000, eta: "Nov 2028" },
  { label: "Fondo de emergencia", current: 15000, target: 15000, eta: "Completado" },
  { label: "Jubilación", current: 184300, target: 500000, eta: "2049" },
  { label: "Viaje a Japón", current: 4100, target: 6000, eta: "Mar 2027" },
];

export const ALLOCATION = [
  { label: "Acciones", value: 34, color: "#635BFF" },
  { label: "Inmuebles", value: 28, color: "#0B1220" },
  { label: "Fondos", value: 18, color: "#8B85FF" },
  { label: "Bonos", value: 10, color: "#34D399" },
  { label: "Efectivo", value: 7, color: "#D6D3FF" },
  { label: "Crypto", value: 3, color: "#F59E0B" },
];

export const UPCOMING_PAYMENTS = [
  { name: "Tarjeta Visa Platinum", category: "Tarjetas", amount: 1240, daysLeft: 3 },
  { name: "Préstamo hipotecario", category: "Préstamos", amount: 890, daysLeft: 6 },
  { name: "Seguro de auto", category: "Seguros", amount: 145, daysLeft: 9 },
  { name: "Impuesto al patrimonio", category: "Impuestos", amount: 2100, daysLeft: 14 },
];

export const OPPORTUNITIES = [
  { text: "Ahorrá USD 340 refinanciando este préstamo.", tag: "Préstamos" },
  { text: "Tenés USD 12.000 sin invertir en tu cuenta corriente.", tag: "Liquidez" },
  { text: "Hay una tarjeta con mejores beneficios para tu perfil.", tag: "Tarjetas" },
  { text: "Detecté dos inversiones muy similares en tu portafolio.", tag: "Inversiones" },
  { text: "Este mes superaste tu presupuesto en restaurantes.", tag: "Gastos" },
];

export const INSTITUTIONS = [
  { name: "Santander", type: "Banco" },
  { name: "Itaú", type: "Banco" },
  { name: "BBVA", type: "Banco" },
  { name: "Scotiabank", type: "Banco" },
  { name: "Interactive Brokers", type: "Broker" },
  { name: "Mercado Pago", type: "Billetera" },
  { name: "Visa", type: "Tarjeta" },
  { name: "Mastercard", type: "Tarjeta" },
  { name: "Dominion", type: "Gestora" },
];

export const AI_INSIGHTS = [
  "Detecté que estás pagando un préstamo con una tasa alta.",
  "Encontré un seguro equivalente más barato.",
  "Este mes gastaste 18% más que el mes pasado.",
  "Si aumentás tu ahorro USD 100 por mes llegarías a tu objetivo un año antes.",
];

export const SEARCH_EXAMPLES = [
  "¿Cuánto gasté este mes?",
  "¿Puedo comprar una casa?",
  "¿Cuánto patrimonio tengo?",
  "¿Qué pagos vencen esta semana?",
];
