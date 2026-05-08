"use client";
import { useEffect, useRef } from "react";
import {
  Chart,
  LineController, LineElement, PointElement, LinearScale, CategoryScale,
  BarController, BarElement, Filler, Tooltip, Legend,
} from "chart.js";
import { SP500_ANNUAL_RETURNS } from "@/data/sp500AnnualReturns";

Chart.register(
  LineController, LineElement, PointElement, LinearScale, CategoryScale,
  BarController, BarElement, Filler, Tooltip, Legend
);

const GRID_COLOR = "rgba(0,0,0,0.04)";
const AXIS_COLOR = "#aaaaaa";
const TICK_FONT = { size: 10, family: "Manrope, sans-serif" };

// ── IC Chart ─────────────────────────────────────────────────
export function ICChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (chartRef.current) chartRef.current.destroy();
    const labels: string[] = [];
    const d6: number[] = [], d8: number[] = [], d10: number[] = [];
    for (let y = 1; y <= 40; y++) {
      labels.push(y % 10 === 0 || y === 1 ? `Año ${y}` : "");
      const mo = y * 12, m = 500;
      d6.push(Math.round(m * ((Math.pow(1 + 0.06 / 12, mo) - 1) / (0.06 / 12))));
      d8.push(Math.round(m * ((Math.pow(1 + 0.08 / 12, mo) - 1) / (0.08 / 12))));
      d10.push(Math.round(m * ((Math.pow(1 + 0.10 / 12, mo) - 1) / (0.10 / 12))));
    }
    chartRef.current = new Chart(ref.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "10%", data: d10,
            borderColor: "#1A6638",
            backgroundColor: "rgba(26,102,56,.07)",
            fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2.5,
          },
          {
            label: "8%", data: d8,
            borderColor: "#6B48E8",
            backgroundColor: "transparent",
            fill: false, tension: 0.4, pointRadius: 0, borderWidth: 2,
          },
          {
            label: "6%", data: d6,
            borderColor: "#aaaaaa",
            backgroundColor: "transparent",
            fill: false, tension: 0.4, pointRadius: 0, borderWidth: 1.5,
            borderDash: [5, 4],
          },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: {
          callbacks: { label: (ctx) => " USD " + Math.round(ctx.parsed.y ?? 0).toLocaleString("es-UY") },
          backgroundColor: "#fff", titleColor: "#1A1A1A", bodyColor: "#5A5A5A",
          borderColor: "rgba(0,0,0,.1)", borderWidth: 1, padding: 10,
        }},
        scales: {
          x: {
            ticks: { font: TICK_FONT, color: AXIS_COLOR, maxRotation: 0, autoSkip: false },
            grid: { display: false },
          },
          y: {
            ticks: {
              font: TICK_FONT, color: AXIS_COLOR,
              callback: (v) => "$" + Math.round(+v / 1000) + "k",
            },
            grid: { color: GRID_COLOR },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={ref} />;
}

// ── DCA Chart ─────────────────────────────────────────────────
export function DCAChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (chartRef.current) chartRef.current.destroy();
    const labels: string[] = [], fund: number[] = [], avg: number[] = [];
    const step = 77.3 / 60;
    for (let i = 0; i <= 60; i++) {
      labels.push(i === 0 ? "Jul 20" : i === 12 ? "Jul 21" : i === 24 ? "Jul 22" : i === 36 ? "Jul 23" : i === 48 ? "Jul 24" : i === 60 ? "Jul 25" : "");
      const noise = Math.sin(i * 0.9) * 8 + Math.cos(i * 0.35) * 5 + Math.sin(i * 1.6) * 4;
      fund.push(Math.max(0, Math.round((i * step + noise) * 10) / 10));
      avg.push(Math.round(i * step * 10) / 10);
    }
    chartRef.current = new Chart(ref.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Fondo +77,3%", data: fund,
            borderColor: "#1A6638",
            backgroundColor: "rgba(26,102,56,.08)",
            fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2.5,
          },
          {
            label: "Precio promedio", data: avg,
            borderColor: "#94A3B8",
            backgroundColor: "transparent",
            fill: false, tension: 0, pointRadius: 0, borderWidth: 1.5,
            borderDash: [6, 4],
          },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: {
          callbacks: { label: (ctx) => " " + (ctx.parsed.y ?? 0).toFixed(1) + "%" },
          backgroundColor: "#fff", titleColor: "#1A1A1A", bodyColor: "#5A5A5A",
          borderColor: "rgba(0,0,0,.1)", borderWidth: 1, padding: 10,
        }},
        scales: {
          x: {
            ticks: { font: TICK_FONT, color: AXIS_COLOR, maxRotation: 0, autoSkip: false },
            grid: { display: false },
          },
          y: {
            ticks: { font: TICK_FONT, color: AXIS_COLOR, callback: (v) => v + "%" },
            grid: { color: GRID_COLOR },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={ref} />;
}

// ── Sim Chart ─────────────────────────────────────────────────
interface SimChartProps { monthly: number; years: number; rate: number; }

export function SimChart({ monthly, years, rate }: SimChartProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (chartRef.current) chartRef.current.destroy();
    const labels: string[] = [], capital: number[] = [], aportado: number[] = [];
    const r = rate / 100 / 12;
    for (let y = 1; y <= years; y++) {
      labels.push(y === 1 ? "Año 1" : y === years ? `Año ${y}` : y % 5 === 0 ? `Año ${y}` : "");
      const mo = y * 12;
      const fv = r > 0 ? monthly * ((Math.pow(1 + r, mo) - 1) / r) : monthly * mo;
      capital.push(Math.round(fv));
      aportado.push(monthly * mo);
    }
    chartRef.current = new Chart(ref.current, {
      type: "bar",
      data: {
        labels,
        datasets: [
          { label: "Capital total", data: capital, backgroundColor: "rgba(143,217,154,.9)", borderRadius: 4, order: 1 },
          { label: "Total aportado", data: aportado, backgroundColor: "rgba(143,217,154,.2)", borderRadius: 4, order: 2 },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: {
          callbacks: { label: (ctx) => " USD " + Math.round(ctx.parsed.y ?? 0).toLocaleString("es-UY") },
          backgroundColor: "rgba(15,41,32,.9)", titleColor: "#fff", bodyColor: "rgba(255,255,255,.6)",
          borderColor: "rgba(255,255,255,.1)", borderWidth: 1, padding: 10,
        }},
        scales: {
          x: {
            ticks: { font: TICK_FONT, color: "rgba(255,255,255,.35)", maxRotation: 0, autoSkip: false },
            grid: { display: false },
          },
          y: {
            ticks: { font: TICK_FONT, color: "rgba(255,255,255,.35)", callback: (v) => "$" + Math.round(+v / 1000) + "k" },
            grid: { color: "rgba(255,255,255,.05)" },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, [monthly, years, rate]);

  return <canvas ref={ref} />;
}

// ── SPY Real Chart — uses live data from /api/spy-data ────────
import type { SPYDataPoint } from "@/app/api/spy-data/route";

interface SPYRealChartProps { data: SPYDataPoint[] }

export function SPYRealChart({ data }: SPYRealChartProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current || data.length === 0) return;
    if (chartRef.current) chartRef.current.destroy();

    // Show annual labels (every Jan, or every 2/5 years when range is large)
    const totalPoints = data.length;
    const step = totalPoints > 200 ? 24 : totalPoints > 60 ? 12 : 6;

    const labels = data.map((d, i) => {
      if (i % step === 0) return d.date.slice(0, 7);
      return "";
    });

    chartRef.current = new Chart(ref.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "SPY Adjusted Close",
            data: data.map(d => d.close),
            borderColor: "#1A6638",
            backgroundColor: "rgba(26,102,56,.08)",
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#1A6638",
            borderWidth: 2.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items) => data[items[0].dataIndex]?.date?.slice(0, 7) ?? "",
              label: (ctx) => {
                const d = data[ctx.dataIndex];
                return [
                  ` Precio: USD ${(ctx.parsed.y ?? 0).toFixed(2)}`,
                  ` Retorno acum.: +${d?.returnPct?.toFixed(1) ?? 0}%`,
                ];
              },
            },
            backgroundColor: "#fff",
            titleColor: "#1A1A1A",
            bodyColor: "#5A5A5A",
            borderColor: "rgba(0,0,0,.1)",
            borderWidth: 1,
            padding: 12,
          },
        },
        scales: {
          x: {
            ticks: { font: TICK_FONT, color: AXIS_COLOR, maxRotation: 0, autoSkip: false },
            grid: { display: false },
          },
          y: {
            ticks: {
              font: TICK_FONT,
              color: AXIS_COLOR,
              callback: (v) => `$${(+v).toFixed(0)}`,
            },
            grid: { color: GRID_COLOR },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, [data]);

  return <canvas ref={ref} />;
}

// ── Annual Returns Chart (S&P 500 1928–2025) ──────────────────
export function AnnualReturnsChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (chartRef.current) chartRef.current.destroy();

    const data = SP500_ANNUAL_RETURNS;
    const avgGeometric = 10.02;

    chartRef.current = new Chart(ref.current, {
      type: "bar",
      data: {
        labels: data.map(d => d.year.toString()),
        datasets: [
          {
            label: "Retorno anual S&P 500",
            data: data.map(d => d.returnPct),
            backgroundColor: data.map(d =>
              d.returnPct >= 0 ? "rgba(26,102,56,0.82)" : "rgba(181,69,30,0.82)"
            ),
            borderColor: data.map(d =>
              d.returnPct >= 0 ? "#1A6638" : "#B5451E"
            ),
            borderWidth: 0,
            borderRadius: 1.5,
            order: 1,
          },
          {
            label: `Promedio geométrico histórico (+${avgGeometric}%)`,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            type: "line" as any,
            data: data.map(() => avgGeometric),
            borderColor: "#6B48E8",
            borderWidth: 1.5,
            borderDash: [5, 4],
            pointRadius: 0,
            backgroundColor: "transparent",
            order: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              title: (items: any[]) => `Año ${items[0].label}`,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              label: (ctx: any) => {
                if (ctx.datasetIndex === 0) {
                  const v = ctx.parsed.y ?? 0;
                  return ` ${v >= 0 ? "+" : ""}${v.toFixed(2)}%`;
                }
                return ` Promedio geométrico: +${avgGeometric}%`;
              },
            },
            backgroundColor: "#fff",
            titleColor: "#1A1A1A",
            bodyColor: "#5A5A5A",
            borderColor: "rgba(0,0,0,.1)",
            borderWidth: 1,
            padding: 10,
          },
        },
        scales: {
          x: {
            ticks: {
              font: TICK_FONT,
              color: AXIS_COLOR,
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 11,
            },
            grid: { display: false },
          },
          y: {
            ticks: {
              font: TICK_FONT,
              color: AXIS_COLOR,
              callback: (v: number | string) => `${+v >= 0 ? "+" : ""}${v}%`,
            },
            grid: { color: GRID_COLOR },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={ref} />;
}

// ── SP500 Chart (legacy — kept for compatibility) ─────────────
export function SP500Chart() {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (chartRef.current) chartRef.current.destroy();

    const data = [
      { y: "1990", v: 330 }, { y: "1991", v: 417 }, { y: "1992", v: 436 },
      { y: "1993", v: 466 }, { y: "1994", v: 460 }, { y: "1995", v: 616 },
      { y: "1996", v: 741 }, { y: "1997", v: 970 }, { y: "1998", v: 1229 },
      { y: "1999", v: 1469 }, { y: "2000", v: 1321 }, { y: "2001", v: 1148 },
      { y: "2002", v: 880 },  { y: "2003", v: 1112 }, { y: "2004", v: 1212 },
      { y: "2005", v: 1248 }, { y: "2006", v: 1418 }, { y: "2007", v: 1468 },
      { y: "2008", v: 903 },  { y: "2009", v: 1115 }, { y: "2010", v: 1258 },
      { y: "2011", v: 1258 }, { y: "2012", v: 1426 }, { y: "2013", v: 1848 },
      { y: "2014", v: 2059 }, { y: "2015", v: 2044 }, { y: "2016", v: 2239 },
      { y: "2017", v: 2674 }, { y: "2018", v: 2507 }, { y: "2019", v: 3231 },
      { y: "2020", v: 3756 }, { y: "2021", v: 4766 }, { y: "2022", v: 3840 },
      { y: "2023", v: 4770 }, { y: "2024", v: 5882 }, { y: "2025", v: 5500 },
    ];

    chartRef.current = new Chart(ref.current, {
      type: "line",
      data: {
        labels: data.map(d => d.y),
        datasets: [
          {
            label: "S&P 500",
            data: data.map(d => d.v),
            borderColor: "#1A6638",
            backgroundColor: "rgba(26,102,56,.08)",
            fill: true, tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 5,
            borderWidth: 2.5,
          },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => " S&P 500: " + Math.round(ctx.parsed.y ?? 0).toLocaleString("es-UY") + " pts",
            },
            backgroundColor: "#fff",
            titleColor: "#1A1A1A",
            bodyColor: "#5A5A5A",
            borderColor: "rgba(0,0,0,.1)",
            borderWidth: 1,
            padding: 10,
          },
        },
        scales: {
          x: {
            ticks: { font: TICK_FONT, color: AXIS_COLOR, maxRotation: 0, autoSkip: true, maxTicksLimit: 9 },
            grid: { display: false },
          },
          y: {
            ticks: { font: TICK_FONT, color: AXIS_COLOR, callback: (v) => +v >= 1000 ? Math.round(+v / 1000) + "k" : String(v) },
            grid: { color: GRID_COLOR },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={ref} />;
}
