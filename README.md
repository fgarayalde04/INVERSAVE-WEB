# retiro-uy — Landing previsional Uruguay

Landing page educativa sobre jubilación y planificación previsional para Uruguay/LATAM.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (paleta orgánica beige/verde)
- **Framer Motion** (animaciones y scroll reveal)
- **Chart.js + react-chartjs-2** (gráficos interactivos)

## Estructura

```
src/
├── app/
│   ├── layout.tsx          ← metadata + fuentes
│   ├── page.tsx            ← página principal (ensambla secciones)
│   └── globals.css         ← Tailwind + variables CSS + componentes base
├── components/
│   ├── ui/
│   │   └── index.tsx       ← FadeIn, QuoteBlock, Alert, ExpandBlock, FAQItem, etc.
│   ├── charts/
│   │   └── Charts.tsx      ← ICChart, DCAChart, SimChart (Chart.js)
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx         ← Ilustración SVG clay-style
│       ├── Problema.tsx     ← Stats band + datos BPS/INE
│       ├── Mentalidad.tsx   ← Calculadora ahorro con sliders
│       ├── InteresCompuesto.tsx ← Ana vs Federico + IC chart
│       ├── DCA.tsx          ← DCA chart + Risk bars
│       ├── Simulador.tsx    ← Simulador interactivo completo
│       ├── Expandibles.tsx  ← 6 módulos acordeón (6 factores, disciplina, etapas, USA, plataforma, FAQ)
│       └── CTAFooter.tsx    ← CTA dark + footer con disclaimer
└── lib/
    └── utils.ts            ← fmt, calcFV, calcMonthlyRetirement, QUOTES, RISK_DATA, SIX_FACTORS, FAQ_DATA
```

## Instalación y desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Abrir en el browser
# http://localhost:3000
```

## Deploy en Vercel

```bash
# 1. Instalar Vercel CLI (opcional)
npm i -g vercel

# 2. Deploy
vercel

# O conectar el repo en vercel.com → Import Project
```

## Personalización antes del deploy

Buscá y reemplazá los siguientes placeholders:

| Placeholder | Descripción |
|---|---|
| `[NOMBRE DE LA EMPRESA]` | Nombre real de la empresa |
| `[CONTACTO]` | Email o teléfono de contacto |
| `[ASESOR RESPONSABLE]` | Nombre del asesor responsable |
| `contacto@empresa.com` | Email real para el botón CTA |

## Paleta de colores (tailwind.config.ts)

| Variable | Hex | Uso |
|---|---|---|
| `bg` | `#F4F1E8` | Fondo principal beige |
| `g1` | `#67C943` | Verde principal / botones / CTA |
| `g2` | `#A7E86B` | Verde claro / acento CTA dark |
| `g3` | `#2F6B2F` | Verde oscuro / textos / títulos |
| `g4` | `#1F4D2E` | Verde bosque / fondo CTA dark |
| `lila` | `#7B55FF` | Lila acento / Federico / DCA |
| `warn` | `#C84B28` | Naranja/rojo / sección problema |
| `t1` | `#2D2D2D` | Texto principal |
| `t2` | `#666666` | Texto secundario |
| `t3` | `#999999` | Texto terciario / placeholders |

## Contenido educativo incluido

- ✅ Datos reales BPS Uruguay (dic. 2025)
- ✅ Proyecciones demográficas INE/CEPAL
- ✅ Calculadora de ahorro mensual interactiva
- ✅ Caso Ana vs Federico (interés compuesto)
- ✅ Gráfico interés compuesto 6%/8%/10% — 40 años
- ✅ DCA con datos reales DGT Managed Fund +77,3%
- ✅ Barras de riesgo histórico S&P 500 (1929–)
- ✅ Simulador de retiro completo con Chart.js
- ✅ 6 factores clave + quotes Buffett/Munger/Graham/Markowitz
- ✅ Módulo disciplina y constancia (3 pasos)
- ✅ Porcentajes de ahorro por etapa de vida
- ✅ Comparativa sistema EE.UU. (401k, IRA)
- ✅ Plataforma Dominion Capital Strategies + trust badges
- ✅ FAQ con 7 preguntas
- ✅ Disclaimer legal completo
