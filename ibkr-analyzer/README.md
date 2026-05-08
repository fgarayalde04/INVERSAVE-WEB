# IBKR Report Analyzer

Script personal que descarga reportes de Interactive Brokers via Flex Web Service, los analiza con Claude y los envía por email (y opcionalmente WhatsApp).

**Solo lectura. No realiza órdenes ni trading de ningún tipo.**

---

## Flujo

```
IBKR Flex Web Service
  → descarga reporte XML
  → parsea posiciones, trades, dividendos, P&L
  → compara con reporte anterior
  → Claude genera análisis en español
  → envía email con Resend
  → envía WhatsApp con Twilio (opcional)
  → guarda todo en /data
```

---

## Instalación

```bash
cd ibkr-analyzer
npm install
cp .env.example .env
# Editar .env con tus credenciales
```

---

## Configuración

### 1. IBKR Flex Query

La Flex Web Service API de IBKR requiere dos cosas: un **token** de acceso y el **ID** de una Flex Query configurada.

#### Crear Flex Query en IBKR

1. Ingresá a **Client Portal** → **Reports** → **Flex Queries**
2. Hacé clic en **Create** (o el ícono `+`)
3. Configurá la query:
   - **Query Name:** `PortfolioReport` (o el nombre que prefieras)
   - **Format:** XML
   - **Date Period:** Last Business Day (o el rango que uses)
   - **Sections a incluir:** (tildá todas las que necesites)
     - Account Information
     - Open Positions
     - Trades
     - Cash Transactions
     - Equity Summary (por fecha en moneda base)
     - Net Asset Value
     - Cash Report
4. Guardá la query y anotá el **Query ID** que aparece en la lista

#### Obtener el Flex Token

1. En Client Portal → **Reports** → **Flex Queries**
2. Hacé clic en el ícono de configuración (engranaje) arriba a la derecha
3. Seleccioná **Manage Flex Web Service Tokens**
4. Generá o copiá tu **Current Token**

> El token tiene una validez de ~24 horas. IBKR lo renueva automáticamente.

```env
IBKR_FLEX_TOKEN=tu_token_aqui
IBKR_FLEX_QUERY_ID=tu_query_id_aqui
```

---

### 2. Anthropic Claude API

1. Ingresá a [console.anthropic.com](https://console.anthropic.com)
2. **API Keys** → **Create Key**
3. Copiá la clave

```env
ANTHROPIC_API_KEY=sk-ant-...
```

---

### 3. Resend (email)

1. Creá cuenta en [resend.com](https://resend.com)
2. Verificá tu dominio de envío (o usá `onboarding@resend.dev` para pruebas)
3. **API Keys** → **Create API Key**

```env
RESEND_API_KEY=re_...
REPORT_EMAIL_TO=francisco@tudominio.com
REPORT_EMAIL_FROM=reportes@tudominio.com
```

> Para producción necesitás verificar el dominio del `FROM`. Para pruebas podés usar cualquier email verificado.

---

### 4. Twilio WhatsApp (opcional)

Si no querés WhatsApp, dejá las variables vacías. El script las omitirá sin errores.

#### Configurar WhatsApp Sandbox (pruebas)

1. Creá cuenta en [twilio.com](https://console.twilio.com)
2. En el menú: **Messaging** → **Try it out** → **Send a WhatsApp message**
3. Conectá tu WhatsApp al sandbox siguiendo las instrucciones (enviar código por WhatsApp)
4. Anotá:
   - **Account SID** (en el dashboard principal)
   - **Auth Token** (en el dashboard principal)
   - El número del sandbox: `whatsapp:+14155238886`

#### Para producción (número propio)

Necesitás solicitar aprobación de WhatsApp Business a través de Twilio.

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=tu_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+59899123456
```

---

## Uso

```bash
# Desde la carpeta ibkr-analyzer
npm run report
```

El script:
1. Descarga el reporte Flex de IBKR (puede tardar 30-120 segundos en generarse)
2. Parsea posiciones, trades, dividendos y P&L
3. Compara con el reporte anterior guardado en `/data`
4. Envía todo a Claude y genera el análisis en español
5. Envía email con Resend
6. Envía WhatsApp si Twilio está configurado
7. Guarda en `/data`:
   - `YYYY-MM-DD-raw.xml` — reporte bruto de IBKR
   - `YYYY-MM-DD-parsed.json` — datos estructurados
   - `YYYY-MM-DD-analysis.md` — análisis de Claude

---

## Estructura de archivos

```
ibkr-analyzer/
├── src/
│   ├── index.ts              # Punto de entrada principal
│   ├── ibkrFlex.ts           # Descarga y parseo de IBKR Flex
│   ├── compareReports.ts     # Comparación entre reportes
│   ├── analyzeWithClaude.ts  # Análisis con Claude
│   ├── sendEmail.ts          # Envío de email con Resend
│   ├── sendWhatsapp.ts       # Envío WhatsApp con Twilio
│   ├── storage.ts            # Guardado de reportes en /data
│   └── types.ts              # Tipos TypeScript
├── data/                     # Reportes históricos (ignorado en git)
├── .env                      # Variables de entorno (no commitear)
├── .env.example              # Plantilla de variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## Automatización semanal con cron

Para correr el reporte todos los lunes a las 8:00 AM (hora de Uruguay):

```bash
# Editar crontab
crontab -e
```

Agregar:

```cron
0 8 * * 1 cd /ruta/a/INVERSAVE-WEB/ibkr-analyzer && npm run report >> /var/log/ibkr-report.log 2>&1
```

Para correrlo diariamente de lunes a viernes:

```cron
0 8 * * 1-5 cd /ruta/a/INVERSAVE-WEB/ibkr-analyzer && npm run report >> /var/log/ibkr-report.log 2>&1
```

> Asegurate de que el `.env` esté en `/ruta/a/INVERSAVE-WEB/ibkr-analyzer/.env`.

---

## Solución de problemas

| Error | Causa probable | Solución |
|-------|---------------|----------|
| `IBKR_FLEX_TOKEN missing` | `.env` no configurado | Copiá `.env.example` a `.env` y completá |
| `ErrorCode 1003` | Token inválido o expirado | Renovar token en IBKR Client Portal |
| `ErrorCode 1019` | Reporte en generación | Esperar, es normal, el script reintenta |
| `ErrorCode 1010` | Query ID inválido | Verificar el ID en Flex Queries de IBKR |
| Email no llega | Dominio no verificado | Verificar dominio en Resend dashboard |
| WhatsApp silenciado | Variables vacías | Esperado, sin acción necesaria |

---

## Notas de seguridad

- El `.env` y la carpeta `/data` están en `.gitignore` y nunca se commitean
- Los tokens se leen exclusivamente desde variables de entorno
- El script es de **solo lectura**: no envía órdenes ni modifica posiciones

---

*Este reporte es informativo y no constituye asesoramiento financiero personalizado ni una recomendación de compra o venta.*
