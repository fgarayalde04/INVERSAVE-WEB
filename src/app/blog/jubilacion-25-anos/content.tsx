/* eslint-disable */
export default function ArticleContent() {
  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{
        __html: `
<span class="tag">Sistema Previsional · Planificación</span>

<h1>La jubilación puede durar 25 años: por qué vivir más exige planificar mejor</h1>

<p class="bajada">Una mujer que se jubila hoy en Uruguay tiene, en promedio, 23 años de vida por delante. Ese horizonte define cuánto tiempo tus ingresos deben sostenerse — y cambia completamente el cálculo del retiro.</p>

<hr class="divider"/>

<p>Cuando la gente piensa en jubilarse, suele enfocarse en dos preguntas: ¿a qué edad voy a poder hacerlo? ¿cuánto voy a cobrar? Son preguntas importantes. Pero hay una tercera que pocas veces aparece, y que cambia todo el análisis: <strong>¿cuánto tiempo va a durar esa jubilación?</strong></p>

<p>En Uruguay, las Tablas de Mortalidad Generacionales del BPS (2024) muestran que una mujer que llega a los 60 años tiene, en promedio, <strong>23 años</strong> adicionales de vida. Un hombre que llega a los 65 tiene, en promedio, <strong>17 años</strong>. Son esperanzas de vida <em>condicionales a haber llegado a esa edad</em> — no desde el nacimiento — y representan un horizonte real de ingresos que el sistema previsional debe sostener.</p>

<div class="datos-grid col3">
  <div class="dato-item">
    <div class="dato-val">23</div>
    <div class="dato-label">años de retiro esperados para una mujer que se jubila a los 60</div>
    <div class="dato-fuente">BPS · tablas de mortalidad 2024</div>
  </div>
  <div class="dato-item">
    <div class="dato-val">17</div>
    <div class="dato-label">años de retiro esperados para un hombre que se jubila a los 65</div>
    <div class="dato-fuente">BPS · tablas de mortalidad 2024</div>
  </div>
  <div class="dato-item">
    <div class="dato-val">~25%</div>
    <div class="dato-label">de la población uruguaya tendrá más de 65 años en 2060, casi el doble que hoy</div>
    <div class="dato-fuente">INE · proyecciones demográficas 2023–2100</div>
  </div>
</div>

<p>El promedio encubre un riesgo real. Si la expectativa de vida promedio es de 23 años, eso significa que aproximadamente la mitad de las personas vivirán <em>más</em> que eso. Este es el llamado <strong>riesgo de longevidad</strong>: quedarse sin ingresos antes de quedarse sin vida.</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 1 — Duración esperada del retiro por sexo</span>
  <div class="grafico-frame">
<svg viewBox="0 0 660 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="660" height="240" fill="#ffffff"/>
<line x1="119.7" y1="16" x2="119.7" y2="212" stroke="#d8d0c8" stroke-width="1"/>
<text x="119.7" y="228" text-anchor="middle" font-size="10" fill="#8a8a8a">60</text>
<line x1="194.1" y1="16" x2="194.1" y2="212" stroke="#d8d0c8" stroke-width="1"/>
<text x="194.1" y="228" text-anchor="middle" font-size="10" fill="#8a8a8a">65</text>
<line x1="268.4" y1="16" x2="268.4" y2="212" stroke="#d8d0c8" stroke-width="1"/>
<text x="268.4" y="228" text-anchor="middle" font-size="10" fill="#8a8a8a">70</text>
<line x1="342.7" y1="16" x2="342.7" y2="212" stroke="#d8d0c8" stroke-width="1"/>
<text x="342.7" y="228" text-anchor="middle" font-size="10" fill="#8a8a8a">75</text>
<line x1="417.0" y1="16" x2="417.0" y2="212" stroke="#d8d0c8" stroke-width="1"/>
<text x="417.0" y="228" text-anchor="middle" font-size="10" fill="#8a8a8a">80</text>
<line x1="491.4" y1="16" x2="491.4" y2="212" stroke="#d8d0c8" stroke-width="1"/>
<text x="491.4" y="228" text-anchor="middle" font-size="10" fill="#8a8a8a">85</text>
<line x1="565.7" y1="16" x2="565.7" y2="212" stroke="#d8d0c8" stroke-width="1"/>
<text x="565.7" y="228" text-anchor="middle" font-size="10" fill="#8a8a8a">90</text>
<line x1="640.0" y1="16" x2="640.0" y2="212" stroke="#d8d0c8" stroke-width="1"/>
<text x="640.0" y="228" text-anchor="middle" font-size="10" fill="#8a8a8a">95</text>
<text x="330" y="239" text-anchor="middle" font-size="8.5" fill="#8a8a8a" letter-spacing="0.1em">EDAD</text>
<text x="82" y="85" text-anchor="end" font-size="12" fill="#4a4a4a" font-weight="300">Mujer</text>
<text x="82" y="170" text-anchor="end" font-size="12" fill="#4a4a4a" font-weight="300">Hombre</text>
<rect x="119.7" y="60" width="341.9" height="40" fill="#1d3557" rx="3"/>
<text x="290.7" y="85" text-anchor="middle" font-size="12" fill="white" font-weight="600">23 años promedio</text>
<rect x="461.6" y="64" width="133.8" height="32" fill="#1d3557" opacity="0.18" rx="2"/>
<rect x="194.1" y="145" width="252.7" height="40" fill="#1a6638" rx="3"/>
<text x="320.4" y="170" text-anchor="middle" font-size="12" fill="white" font-weight="600">17 años promedio</text>
<rect x="446.8" y="149" width="118.9" height="32" fill="#1a6638" opacity="0.18" rx="2"/>
<text x="529" y="116" text-anchor="middle" font-size="9.5" fill="#8a8a8a" font-style="italic">Escenario extendido</text>
<line x1="119.7" y1="55" x2="119.7" y2="105" stroke="#1d3557" stroke-width="1.5" stroke-dasharray="3,2"/>
<line x1="194.1" y1="140" x2="194.1" y2="190" stroke="#1a6638" stroke-width="1.5" stroke-dasharray="3,2"/>
<rect x="90" y="4" width="12" height="10" fill="#1d3557" rx="1"/>
<text x="106" y="12" font-size="10" fill="#4a4a4a">Mujer (se jubila a los 60)</text>
<rect x="275" y="4" width="12" height="10" fill="#1a6638" rx="1"/>
<text x="291" y="12" font-size="10" fill="#4a4a4a">Hombre (se jubila a los 65)</text>
<rect x="485" y="4" width="12" height="10" fill="#1d3557" opacity="0.18" rx="1"/>
<text x="501" y="12" font-size="10" fill="#4a4a4a">Escenario extendido</text>
</svg>
  </div>
  <p class="grafico-caption">Estimación basada en esperanza de vida condicional según tablas de mortalidad BPS 2024. La zona punteada muestra hasta dónde llega el cuarto más longevo de la población.</p>
</div>

<h2>Lo que el BPS paga y lo que no</h2>

<p>La prestación del BPS puede oscilar, para trabajadores con 30 o más años de servicio, entre el 44% y el 55% del Sueldo Básico Jubilatorio — el promedio de los mejores 20 años de salario nominal. Esta tasa varía según los años trabajados, la historia salarial, la edad de retiro y el nivel de ingresos; en muchos casos resulta menor al 44%. La diferencia entre lo que paga el BPS y el ingreso previo al retiro es la <strong>brecha previsional</strong>, que debe cubrirse con el ahorro acumulado en la AFAP o con ahorro complementario propio.</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 2 — Qué cubre el BPS y qué queda por cubrir</span>
  <div class="grafico-frame">
<svg viewBox="0 0 660 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="660" height="250" fill="#ffffff"/>
<text x="345" y="18" text-anchor="middle" font-size="10" fill="#8a8a8a" letter-spacing="0.1em">PORCENTAJE DEL SALARIO</text>
<line x1="345.0" y1="24" x2="345.0" y2="234" stroke="#d8d0c8" stroke-width="1" stroke-dasharray="4,3"/>
<text x="345.0" y="246" text-anchor="middle" font-size="9.5" fill="#8a8a8a">50%</text>
<text x="130" y="75" text-anchor="end" font-size="12" fill="#4a4a4a" font-weight="300">$50.000 / mes</text>
<rect x="140" y="50" width="225.5" height="40" fill="#1d3557" rx="3 0 0 3"/>
<rect x="365.5" y="50" width="184.5" height="40" fill="#d8d0c8" rx="0 3 3 0"/>
<text x="252.8" y="75" text-anchor="middle" font-size="12" fill="white" font-weight="600">55%</text>
<text x="457.8" y="75" text-anchor="middle" font-size="12" fill="#4a4a4a" font-weight="600">45%</text>
<text x="560" y="70" font-size="12" fill="#c0392b" font-weight="600">~$22.500</text>
<text x="560" y="84" font-size="9" fill="#8a8a8a">falta/mes</text>
<text x="130" y="143" text-anchor="end" font-size="12" fill="#4a4a4a" font-weight="300">$80.000 / mes</text>
<rect x="140" y="118" width="205.0" height="40" fill="#1d3557" rx="3 0 0 3"/>
<rect x="345.0" y="118" width="205.0" height="40" fill="#d8d0c8" rx="0 3 3 0"/>
<text x="242.5" y="143" text-anchor="middle" font-size="12" fill="white" font-weight="600">50%</text>
<text x="447.5" y="143" text-anchor="middle" font-size="12" fill="#4a4a4a" font-weight="600">50%</text>
<text x="560" y="138" font-size="12" fill="#c0392b" font-weight="600">~$40.000</text>
<text x="560" y="152" font-size="9" fill="#8a8a8a">falta/mes</text>
<text x="130" y="211" text-anchor="end" font-size="12" fill="#4a4a4a" font-weight="300">$120.000 / mes</text>
<rect x="140" y="186" width="180.4" height="40" fill="#1d3557" rx="3 0 0 3"/>
<rect x="320.4" y="186" width="229.6" height="40" fill="#d8d0c8" rx="0 3 3 0"/>
<text x="230.2" y="211" text-anchor="middle" font-size="12" fill="white" font-weight="600">44%</text>
<text x="435.2" y="211" text-anchor="middle" font-size="12" fill="#4a4a4a" font-weight="600">56%</text>
<text x="560" y="206" font-size="12" fill="#c0392b" font-weight="600">~$67.000</text>
<text x="560" y="220" font-size="9" fill="#8a8a8a">falta/mes</text>
<rect x="140" y="237" width="14" height="11" fill="#1d3557" rx="1"/>
<text x="158" y="246" font-size="9.5" fill="#4a4a4a">BPS cubre</text>
<rect x="240" y="237" width="14" height="11" fill="#d8d0c8" stroke="#8a8a8a" stroke-width="0.5" rx="1"/>
<text x="258" y="246" font-size="9.5" fill="#4a4a4a">Brecha a cubrir con ahorro propio</text>
<text x="520" y="246" font-size="9.5" fill="#c0392b">Monto mensual faltante (UYU estimado)</text>
</svg>
  </div>
  <p class="grafico-caption">Ejemplo simplificado. La barra azul representa lo que cubriría el BPS bajo un supuesto de tasa de sustitución del 44–55% con salario constante; el gris es la brecha orientativa. Los montos en rojo son aproximaciones: la brecha real depende de los años de servicio, la historia salarial y la modalidad de retiro elegida.</p>
</div>

<div class="callout callout-warn">
  <div class="callout-label">Atención</div>
  <p>La tasa de reemplazo real depende de los años de servicio, la historia salarial y la edad de retiro. Quienes retiran con menos años de trabajo pueden ver tasas menores al 40%. La brecha puede ser más grande de lo que muestran estos números.</p>
</div>

<h2>El dinero que vale menos cada año</h2>

<p>Incluso si la jubilación se mantiene constante en términos nominales, la inflación erosiona su poder adquisitivo con el tiempo. En Uruguay, la inflación promedio del período 2000–2024 fue de aproximadamente 7% anual (INE, IPC serie histórica). A ese ritmo, en 10 años el poder adquisitivo de un ingreso fijo cae a menos de la mitad.</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 3 — Erosión del poder adquisitivo en 25 años</span>
  <div class="grafico-frame">
<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="660" height="280" fill="#ffffff"/>
<line x1="60" y1="190.0" x2="580" y2="190.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="54" y="194.0" text-anchor="end" font-size="10" fill="#8a8a8a">20</text>
<line x1="60" y1="150.0" x2="580" y2="150.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="54" y="154.0" text-anchor="end" font-size="10" fill="#8a8a8a">40</text>
<line x1="60" y1="110.0" x2="580" y2="110.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="54" y="114.0" text-anchor="end" font-size="10" fill="#8a8a8a">60</text>
<line x1="60" y1="70.0" x2="580" y2="70.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="54" y="74.0" text-anchor="end" font-size="10" fill="#8a8a8a">80</text>
<line x1="60" y1="30.0" x2="580" y2="30.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="54" y="34.0" text-anchor="end" font-size="10" fill="#8a8a8a">100</text>
<line x1="60.0" y1="30" x2="60.0" y2="230" stroke="#d8d0c8" stroke-width="1"/>
<text x="60.0" y="244" text-anchor="middle" font-size="10" fill="#8a8a8a">Año 0</text>
<line x1="164.0" y1="30" x2="164.0" y2="230" stroke="#d8d0c8" stroke-width="1"/>
<text x="164.0" y="244" text-anchor="middle" font-size="10" fill="#8a8a8a">Año 5</text>
<line x1="268.0" y1="30" x2="268.0" y2="230" stroke="#d8d0c8" stroke-width="1"/>
<text x="268.0" y="244" text-anchor="middle" font-size="10" fill="#8a8a8a">Año 10</text>
<line x1="372.0" y1="30" x2="372.0" y2="230" stroke="#d8d0c8" stroke-width="1"/>
<text x="372.0" y="244" text-anchor="middle" font-size="10" fill="#8a8a8a">Año 15</text>
<line x1="476.0" y1="30" x2="476.0" y2="230" stroke="#d8d0c8" stroke-width="1"/>
<text x="476.0" y="244" text-anchor="middle" font-size="10" fill="#8a8a8a">Año 20</text>
<line x1="580.0" y1="30" x2="580.0" y2="230" stroke="#d8d0c8" stroke-width="1"/>
<text x="580.0" y="244" text-anchor="middle" font-size="10" fill="#8a8a8a">Año 25</text>
<polyline points="60.0,30.0 80.8,37.7 101.6,45.1 122.4,52.2 143.2,59.0 164.0,65.6 184.8,71.9 205.6,78.0 226.4,83.9 247.2,89.5 268.0,94.9 288.8,100.1 309.6,105.1 330.4,109.9 351.2,114.5 372.0,118.9 392.8,123.2 413.6,127.3 434.4,131.3 455.2,135.1 476.0,138.7 496.8,142.2 517.6,145.6 538.4,148.9 559.2,152.0 580.0,155.0" fill="none" stroke="#1d3557" stroke-width="2.5" stroke-linejoin="round"/>
<text x="586" y="159.0" font-size="11" fill="#1d3557" font-weight="600">$38</text>
<text x="586" y="171.0" font-size="9.5" fill="#1d3557">Inflación 4%</text>
<polyline points="60.0,30.0 80.8,43.1 101.6,55.3 122.4,66.7 143.2,77.4 164.0,87.4 184.8,96.7 205.6,105.5 226.4,113.6 247.2,121.2 268.0,128.3 288.8,135.0 309.6,141.2 330.4,147.0 351.2,152.4 372.0,157.5 392.8,162.3 413.6,166.7 434.4,170.8 455.2,174.7 476.0,178.3 496.8,181.7 517.6,184.9 538.4,187.8 559.2,190.6 580.0,193.2" fill="none" stroke="#c0392b" stroke-width="2.5" stroke-linejoin="round"/>
<text x="586" y="197.2" font-size="11" fill="#c0392b" font-weight="600">$18</text>
<text x="586" y="209.2" font-size="9.5" fill="#c0392b">Inflación 7%</text>
<text transform="rotate(-90)" x="-140" y="14" text-anchor="middle" font-size="9" fill="#8a8a8a" letter-spacing="0.08em">PODER ADQUISITIVO (BASE 100)</text>
</svg>
  </div>
  <p class="grafico-caption">Índice base 100 al inicio del retiro. Con inflación del 7% anual, el poder adquisitivo cae a 18 en 25 años. Un ingreso fijo de $50.000 valdría el equivalente a menos de $9.000 de hoy dentro de 25 años.</p>
</div>

<h2>¿Cuánto dura el capital según cuánto retirás?</h2>

<p>Supongamos que llegás al retiro con un capital acumulado de <strong>USD 150.000</strong> y ese capital genera un retorno del 8% anual. ¿Cuántos años te dura, según cuánto retirás cada mes?</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 4 — Años que dura USD 150.000 según el retiro mensual</span>
  <div class="grafico-frame">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="660" height="300" fill="#ffffff"/>
<line x1="55" y1="204.0" x2="640" y2="204.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="49" y="208.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">10 años</text>
<line x1="55" y1="163.0" x2="640" y2="163.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="49" y="167.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">20 años</text>
<line x1="55" y1="122.0" x2="640" y2="122.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="49" y="126.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">30 años</text>
<line x1="55" y1="81.0" x2="640" y2="81.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="49" y="85.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">40 años</text>
<line x1="55" y1="40.0" x2="640" y2="40.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="49" y="44.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">50+ años</text>
<text transform="rotate(-90)" x="-150" y="14" text-anchor="middle" font-size="9" fill="#8a8a8a" letter-spacing="0.08em">AÑOS QUE DURA EL CAPITAL</text>
<rect x="74.5" y="40.0" width="58.5" height="205.0" fill="#1d3557" rx="3" opacity="0.88"/>
<text x="103.8" y="34.0" text-anchor="middle" font-size="11" fill="#1d3557" font-weight="600">50+ años</text>
<text x="103.8" y="261.0" text-anchor="middle" font-size="11" fill="#4a4a4a">$500</text>
<text x="103.8" y="274.0" text-anchor="middle" font-size="9" fill="#8a8a8a">USD/mes</text>
<rect x="172.0" y="40.0" width="58.5" height="205.0" fill="#1d3557" rx="3" opacity="0.88"/>
<text x="201.2" y="34.0" text-anchor="middle" font-size="11" fill="#1d3557" font-weight="600">50+ años</text>
<text x="201.2" y="261.0" text-anchor="middle" font-size="11" fill="#4a4a4a">$700</text>
<text x="201.2" y="274.0" text-anchor="middle" font-size="9" fill="#8a8a8a">USD/mes</text>
<rect x="269.5" y="40.0" width="58.5" height="205.0" fill="#1d3557" rx="3" opacity="0.88"/>
<text x="298.8" y="34.0" text-anchor="middle" font-size="11" fill="#1d3557" font-weight="600">50+ años</text>
<text x="298.8" y="261.0" text-anchor="middle" font-size="11" fill="#4a4a4a">$900</text>
<text x="298.8" y="274.0" text-anchor="middle" font-size="9" fill="#8a8a8a">USD/mes</text>
<rect x="367.0" y="121.7" width="58.5" height="123.3" fill="#1d3557" rx="3" opacity="0.88"/>
<text x="396.2" y="115.7" text-anchor="middle" font-size="11" fill="#1d3557" font-weight="600">30 años</text>
<text x="396.2" y="261.0" text-anchor="middle" font-size="11" fill="#4a4a4a">$1.100</text>
<text x="396.2" y="274.0" text-anchor="middle" font-size="9" fill="#8a8a8a">USD/mes</text>
<rect x="464.5" y="180.6" width="58.5" height="64.4" fill="#c0392b" rx="3" opacity="0.88"/>
<text x="493.8" y="174.6" text-anchor="middle" font-size="11" fill="#c0392b" font-weight="600">16 años</text>
<text x="493.8" y="261.0" text-anchor="middle" font-size="11" fill="#4a4a4a">$1.400</text>
<text x="493.8" y="274.0" text-anchor="middle" font-size="9" fill="#8a8a8a">USD/mes</text>
<rect x="562.0" y="203.3" width="58.5" height="41.7" fill="#c0392b" rx="3" opacity="0.88"/>
<text x="591.2" y="197.3" text-anchor="middle" font-size="11" fill="#c0392b" font-weight="600">10 años</text>
<text x="591.2" y="261.0" text-anchor="middle" font-size="11" fill="#4a4a4a">$1.800</text>
<text x="591.2" y="274.0" text-anchor="middle" font-size="9" fill="#8a8a8a">USD/mes</text>
<text x="55" y="296" font-size="8.5" fill="#8a8a8a" font-style="italic">Ejemplo hipotético. Capital: USD 150.000 · Retorno nominal constante: 8% anual · No incluye impuestos ni costos de gestión</text>
</svg>
  </div>
  <p class="grafico-caption">Proyección hipotética con supuestos constantes: capital de USD 150.000, retorno nominal del 8% anual, sin inflación ni impuestos. Con USD 500/mes el fondo dura más de 50 años porque el rendimiento cubre casi todo el retiro. Con USD 1.800/mes se agota en 10 años. En la práctica, los retornos fluctúan y la inflación reduce el valor real de los retiros.</p>
</div>

<div class="callout">
  <div class="callout-label">La regla del 4%</div>
  <p>Desarrollada por el planificador financiero William Bengen (1994) con datos históricos del mercado estadounidense, esta referencia señala que retirar el 4% del capital inicial por año — ajustado anualmente por inflación — habría sostenido el fondo por al menos 30 años en la mayoría de los escenarios históricos analizados. Para USD 150.000, equivale a USD 500/mes (USD 6.000/año). Es un punto de referencia académico basado en mercados específicos: los resultados concretos dependen del contexto del mercado, la inflación local y el horizonte real de retiro.</p>
</div>

<h2>El impacto de cuándo empezás a ahorrar</h2>

<p>El tiempo es el factor más poderoso en la acumulación de capital. El interés compuesto actúa de forma exponencial: los retornos generan retornos sobre retornos, y esa curva cambia dramáticamente según el punto de partida.</p>

<p>Ejemplo concreto: ahorrar <strong>USD 200 mensuales</strong> con un retorno del <strong>8% anual</strong>, comenzando a distintas edades y jubilándose a los 65.</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 5 — Capital acumulado — USD 200/mes al 8% anual <em style="font-weight:400;letter-spacing:0">(proyección hipotética)</em></span>
  <div class="grafico-frame">
<svg viewBox="0 0 660 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="660" height="320" fill="#ffffff"/>
<line x1="65" y1="207.1" x2="630" y2="207.1" stroke="#d8d0c8" stroke-width="1"/>
<text x="59" y="211.1" text-anchor="end" font-size="10" fill="#8a8a8a">$100k</text>
<line x1="65" y1="169.3" x2="630" y2="169.3" stroke="#d8d0c8" stroke-width="1"/>
<text x="59" y="173.3" text-anchor="end" font-size="10" fill="#8a8a8a">$200k</text>
<line x1="65" y1="131.4" x2="630" y2="131.4" stroke="#d8d0c8" stroke-width="1"/>
<text x="59" y="135.4" text-anchor="end" font-size="10" fill="#8a8a8a">$300k</text>
<line x1="65" y1="93.5" x2="630" y2="93.5" stroke="#d8d0c8" stroke-width="1"/>
<text x="59" y="97.5" text-anchor="end" font-size="10" fill="#8a8a8a">$400k</text>
<text transform="rotate(-90)" x="-160" y="14" text-anchor="middle" font-size="9" fill="#8a8a8a" letter-spacing="0.08em">CAPITAL ACUMULADO (USD)</text>
<rect x="108.3" y="71.3" width="101.7" height="173.7" fill="#1d3557" rx="3" opacity="0.22"/>
<rect x="108.3" y="213.2" width="101.7" height="31.8" fill="#1d3557" rx="3"/>
<text x="159.2" y="62.3" text-anchor="middle" font-size="15" fill="#1d3557" font-weight="700">$459k</text>
<text x="159.2" y="263.0" text-anchor="middle" font-size="11.5" fill="#4a4a4a" font-weight="300">Empezás a los 30</text>
<text x="159.2" y="278.0" text-anchor="middle" font-size="9.5" fill="#8a8a8a">35 años ahorrando</text>
<rect x="296.6" y="173.0" width="101.7" height="72.0" fill="#c0392b" rx="3" opacity="0.22"/>
<rect x="296.6" y="222.3" width="101.7" height="22.7" fill="#c0392b" rx="3"/>
<text x="347.5" y="164.0" text-anchor="middle" font-size="15" fill="#c0392b" font-weight="700">$190k</text>
<text x="347.5" y="263.0" text-anchor="middle" font-size="11.5" fill="#4a4a4a" font-weight="300">Empezás a los 40</text>
<text x="347.5" y="278.0" text-anchor="middle" font-size="9.5" fill="#8a8a8a">25 años ahorrando</text>
<rect x="485.0" y="218.8" width="101.7" height="26.2" fill="#8a8a8a" rx="3" opacity="0.22"/>
<rect x="485.0" y="231.4" width="101.7" height="13.6" fill="#8a8a8a" rx="3"/>
<text x="535.8" y="209.8" text-anchor="middle" font-size="15" fill="#8a8a8a" font-weight="700">$69k</text>
<text x="535.8" y="263.0" text-anchor="middle" font-size="11.5" fill="#4a4a4a" font-weight="300">Empezás a los 50</text>
<text x="535.8" y="278.0" text-anchor="middle" font-size="9.5" fill="#8a8a8a">15 años ahorrando</text>
<rect x="75" y="303" width="14" height="11" fill="#1d3557" rx="1" opacity="0.22"/>
<text x="93" y="312" font-size="9.5" fill="#4a4a4a">Rendimiento acumulado</text>
<rect x="270" y="303" width="14" height="11" fill="#1d3557" rx="1"/>
<text x="288" y="312" font-size="9.5" fill="#4a4a4a">Capital aportado</text>
</svg>
  </div>
  <p class="grafico-caption">La barra sólida es el capital realmente aportado; la parte clara es el rendimiento acumulado. Quien empieza a los 30 aporta USD 84.000 y acumula USD 459.000. Quien empieza a los 50 aporta USD 36.000 y acumula USD 69.000.</p>
</div>

<p class="nota-legal">Proyección ilustrativa. Tasa del 8% anual nominal no garantizada. El rendimiento real depende del instrumento, la inflación y las condiciones del mercado. USD 200 mensuales equivalen aproximadamente a $8.000 pesos uruguayos al tipo de cambio actual.</p>

<p>La diferencia entre empezar a los 30 y empezar a los 40 no es lineal: es enorme. Empezar 10 años antes, con el mismo aporte mensual, genera un capital <strong>2,4 veces mayor</strong>. La ventana de tiempo es un recurso que no se recupera.</p>

<div class="callout">
  <div class="callout-label">En resumen</div>
  <p>Vivir más es una buena noticia. Pero implica que el retiro puede durar 20, 25 o más años — un horizonte que el sistema previsional por sí solo no siempre cubre. Entender la duración esperada del retiro, la brecha real del BPS y el efecto del tiempo en el ahorro es el primer paso para planificar con información.</p>
</div>

<hr class="divider"/>

<div class="fuentes">
  <h3>Fuentes</h3>
  <p><strong>BPS (2024).</strong> Tablas de mortalidad y esperanza de vida. Banco de Previsión Social, Uruguay.<br>
  <a href="https://www.bps.gub.uy" target="_blank">bps.gub.uy →</a></p>
  <p><strong>INE (2023).</strong> Proyecciones demográficas 2023–2100. Instituto Nacional de Estadística, Uruguay.<br>
  <a href="https://www.ine.gub.uy" target="_blank">ine.gub.uy →</a></p>
  <p><strong>BPS (2024).</strong> Estadísticas del sistema previsional uruguayo. Memorias anuales 2023–2024.<br>
  <a href="https://www.bps.gub.uy" target="_blank">bps.gub.uy →</a></p>
  <p><strong>INE (2024).</strong> Índice de Precios al Consumo. Serie histórica 2000–2024.<br>
  <a href="https://www.ine.gub.uy" target="_blank">ine.gub.uy →</a></p>
  <p><strong>Bengen, W. P. (1994).</strong> "Determining Withdrawal Rates Using Historical Data". <em>Journal of Financial Planning.</em></p>
</div>
`,
      }}
    />
  );
}
