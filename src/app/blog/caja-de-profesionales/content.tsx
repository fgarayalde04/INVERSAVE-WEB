/* eslint-disable */
export default function ArticleContent() {
  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{
        __html: `
<h1>Caja de Profesionales: cómo funciona y por qué está en discusión</h1>

<p class="bajada">La Caja de Jubilaciones y Pensiones de Profesionales Universitarios del Uruguay cubre a más de 63.000 profesionales activos. Entender cómo funciona, cómo se financia y dónde está parada hoy cambia la forma en que cualquier profesional proyecta su retiro.</p>

<hr class="divider"/>

<p>¿Cuántos profesionales saben realmente cómo funciona la Caja a la que aportan cada mes?</p>

<p>La respuesta, probablemente, es que pocos. La Caja de Jubilaciones y Pensiones de Profesionales Universitarios del Uruguay —conocida simplemente como "la Caja de Profesionales"— opera en paralelo al BPS, financia las jubilaciones de médicos, abogados, contadores, arquitectos e ingenieros, y atraviesa hoy una de las transformaciones más importantes de su historia. En julio de 2025, el Parlamento aprobó la <strong>Ley 20.410</strong>, una reforma que busca extender la sostenibilidad del sistema en el mediano plazo.</p>

<p>Este artículo recorre cómo funciona el sistema, qué prestaciones paga, por qué entró en déficit y qué implica todo esto para quien aporta hoy.</p>

<h2>Qué es la Caja de Profesionales</h2>

<p>La CJPPU es una institución paraestatal autónoma creada en 1954. No es el BPS ni depende de él: tiene su propio directorio elegido por los afiliados, sus propios fondos, su propio mecanismo de cálculo de jubilaciones y sus propias reglas de aporte.</p>

<p>Cubre a todos los profesionales universitarios que ejercen en forma <strong>independiente</strong> en Uruguay: médicos, abogados, contadores, arquitectos, ingenieros, odontólogos, psicólogos, entre otros. Desde octubre de 2023, la incorporación de 16 nuevos títulos profesionales amplió el padrón. En total, la institución declara más de <strong>184.000 afiliados</strong> entre activos y en declaración de no ejercicio.</p>

<p>La diferencia con el BPS es estructural: quien trabaja en relación de dependencia aporta al BPS. Quien ejerce de forma independiente —consultorio, estudio, actividad liberal— aporta a la Caja. En la práctica, un profesional puede aportar a ambos si tiene actividades mixtas.</p>

<div class="datos-grid col3">
  <div class="dato-item">
    <div class="dato-val">63.601</div>
    <div class="dato-label">afiliados activos en ejercicio al cierre de 2024</div>
    <div class="dato-fuente">CJPPU · Memoria Anual 2024</div>
  </div>
  <div class="dato-item">
    <div class="dato-val">15.692</div>
    <div class="dato-label">jubilados al cierre de 2024, un 5,4% más que en 2023</div>
    <div class="dato-fuente">CJPPU · Memoria Anual 2024</div>
  </div>
  <div class="dato-item">
    <div class="dato-val">109.719</div>
    <div class="dato-label">profesionales en declaración de no ejercicio (DJNE) en 2024</div>
    <div class="dato-fuente">CJPPU · Memoria Anual 2024</div>
  </div>
</div>

<p>El dato de las declaraciones de no ejercicio (DJNE) es uno de los más reveladores del sistema. Significa que hay <strong>109.000 profesionales universitarios</strong> que, estando inscriptos, no aportan porque declaran no ejercer independientemente. Muchos de ellos trabajan en relación de dependencia y aportan al BPS en su lugar. Este fenómeno —jóvenes profesionales que eligen el empleo formal sobre el ejercicio independiente— es una de las causas estructurales del desequilibrio financiero de la Caja.</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 1 — Afiliados activos y jubilados 2012–2024</span>
  <div class="grafico-frame">
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="680" height="300" fill="#ffffff"/>
<line x1="60" y1="214.3" x2="660" y2="214.3" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="218.3" text-anchor="end" font-size="10" fill="#8a8a8a">10k</text>
<line x1="60" y1="183.6" x2="660" y2="183.6" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="187.6" text-anchor="end" font-size="10" fill="#8a8a8a">20k</text>
<line x1="60" y1="152.9" x2="660" y2="152.9" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="156.9" text-anchor="end" font-size="10" fill="#8a8a8a">30k</text>
<line x1="60" y1="122.1" x2="660" y2="122.1" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="126.1" text-anchor="end" font-size="10" fill="#8a8a8a">40k</text>
<line x1="60" y1="91.4" x2="660" y2="91.4" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="95.4" text-anchor="end" font-size="10" fill="#8a8a8a">50k</text>
<line x1="60" y1="60.7" x2="660" y2="60.7" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="64.7" text-anchor="end" font-size="10" fill="#8a8a8a">60k</text>
<rect x="71.0" y="86.3" width="38.0" height="158.7" fill="#1d3557" rx="2" opacity="0.88"/>
<rect x="111.0" y="224.7" width="38.0" height="20.3" fill="#c0392b" rx="2" opacity="0.82"/>
<text x="110.0" y="260.0" text-anchor="middle" font-size="10.5" fill="#4a4a4a">2012</text>
<text x="90.0" y="81.3" text-anchor="middle" font-size="9" fill="#1d3557" font-weight="600">51k</text>
<text x="130.0" y="219.7" text-anchor="middle" font-size="9" fill="#c0392b" font-weight="600">~6k</text>
<rect x="171.0" y="63.2" width="38.0" height="181.8" fill="#1d3557" rx="2" opacity="0.88"/>
<rect x="211.0" y="217.4" width="38.0" height="27.6" fill="#c0392b" rx="2" opacity="0.82"/>
<text x="210.0" y="260.0" text-anchor="middle" font-size="10.5" fill="#4a4a4a">2017</text>
<text x="190.0" y="58.2" text-anchor="middle" font-size="9" fill="#1d3557" font-weight="600">59k</text>
<text x="230.0" y="212.4" text-anchor="middle" font-size="9" fill="#c0392b" font-weight="600">~9k</text>
<rect x="271.0" y="52.4" width="38.0" height="192.6" fill="#1d3557" rx="2" opacity="0.88"/>
<rect x="311.0" y="208.1" width="38.0" height="36.9" fill="#c0392b" rx="2" opacity="0.82"/>
<text x="310.0" y="260.0" text-anchor="middle" font-size="10.5" fill="#4a4a4a">2021</text>
<text x="290.0" y="47.4" text-anchor="middle" font-size="9" fill="#1d3557" font-weight="600">62k</text>
<text x="330.0" y="203.1" text-anchor="middle" font-size="9" fill="#c0392b" font-weight="600">~12k</text>
<rect x="371.0" y="52.2" width="38.0" height="192.8" fill="#1d3557" rx="2" opacity="0.88"/>
<rect x="411.0" y="205.1" width="38.0" height="39.9" fill="#c0392b" rx="2" opacity="0.82"/>
<text x="410.0" y="260.0" text-anchor="middle" font-size="10.5" fill="#4a4a4a">2022</text>
<text x="390.0" y="47.2" text-anchor="middle" font-size="9" fill="#1d3557" font-weight="600">62k</text>
<text x="430.0" y="200.1" text-anchor="middle" font-size="9" fill="#c0392b" font-weight="600">~13k</text>
<rect x="471.0" y="47.4" width="38.0" height="197.6" fill="#1d3557" rx="2" opacity="0.88"/>
<rect x="511.0" y="199.3" width="38.0" height="45.7" fill="#c0392b" rx="2" opacity="0.82"/>
<text x="510.0" y="260.0" text-anchor="middle" font-size="10.5" fill="#4a4a4a">2023</text>
<text x="490.0" y="42.4" text-anchor="middle" font-size="9" fill="#1d3557" font-weight="600">64k</text>
<text x="530.0" y="194.3" text-anchor="middle" font-size="9" fill="#c0392b" font-weight="600">14884</text>
<rect x="571.0" y="49.7" width="38.0" height="195.3" fill="#1d3557" rx="2" opacity="0.88"/>
<rect x="611.0" y="196.8" width="38.0" height="48.2" fill="#c0392b" rx="2" opacity="0.82"/>
<text x="610.0" y="260.0" text-anchor="middle" font-size="10.5" fill="#4a4a4a">2024</text>
<text x="590.0" y="44.7" text-anchor="middle" font-size="9" fill="#1d3557" font-weight="600">63k</text>
<text x="630.0" y="191.8" text-anchor="middle" font-size="9" fill="#c0392b" font-weight="600">15692</text>
<rect x="60" y="283" width="13" height="11" fill="#1d3557" rx="1" opacity="0.88"/>
<text x="77" y="292" font-size="10" fill="#4a4a4a">Afiliados activos</text>
<rect x="220" y="283" width="13" height="11" fill="#c0392b" rx="1" opacity="0.82"/>
<text x="237" y="292" font-size="10" fill="#4a4a4a">Jubilados</text>
<text x="330" y="292" font-size="9" fill="#8a8a8a" font-style="italic">* 2012–2022: estimaciones basadas en Pension Policy International</text>
</svg>
  </div>
  <p class="grafico-caption">Fuentes: CJPPU, Memoria Anual 2024 (datos 2023–2024); Pension Policy International (estimaciones 2012–2022). Los datos 2012–2022 son estimaciones basadas en reportes externos — para datos exactos de esos años, consultar los estados financieros de la CJPPU. Entre 2012 y 2022 los afiliados activos crecieron un 21,5% mientras los jubilados crecieron un 95,9%.</p>
</div>

<h2>Cómo se aporta: sueldo ficto y categorías</h2>

<p>El mecanismo de aporte de la Caja no funciona sobre el ingreso real del profesional, sino sobre un <strong>sueldo ficto</strong>: un valor teórico asignado a cada categoría. La cuota mensual se calcula aplicando la tasa de aporte sobre ese ficto.</p>

<p><strong>Escala 2025 (vigente):</strong> tiene <strong>10 categorías</strong>. Los afiliados ingresan en la primera y avanzan progresivamente cada 3 años de aporte (criterio histórico). Esta es la escala que rige para quienes ya están afiliados al cierre de 2025.</p>

<p><strong>Escala 2026 (nuevos afiliados):</strong> a partir de enero de 2026, quienes se incorporen por primera vez acceden a una nueva escala de <strong>15 categorías</strong> con avance cada 2 años, diseñada para una carrera completa de 30 años. Los fictos de esta escala están definidos en la Ley 20.410 y su decreto reglamentario — antes de usar los valores exactos, conviene verificarlos en cjppu.org.uy, ya que se actualizan por IPC.</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 4 — Sueldo ficto y cuota mensual por categoría — escala 2025</span>
  <div class="grafico-frame">
<svg viewBox="0 0 740 450" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="740" height="450" fill="#ffffff"/>
<line x1="614" y1="16" x2="614" y2="404" stroke="#d8d0c8" stroke-width="1"/>
<text x="674" y="14" text-anchor="middle" font-size="9" fill="#8a8a8a" letter-spacing="0.08em">CUOTA / MES</text>
<line x1="205.0" y1="20" x2="205.0" y2="400" stroke="#d8d0c8" stroke-width="1"/>
<text x="205.0" y="414" text-anchor="middle" font-size="9.5" fill="#8a8a8a">$50k</text>
<line x1="340.0" y1="20" x2="340.0" y2="400" stroke="#d8d0c8" stroke-width="1"/>
<text x="340.0" y="414" text-anchor="middle" font-size="9.5" fill="#8a8a8a">$100k</text>
<line x1="475.0" y1="20" x2="475.0" y2="400" stroke="#d8d0c8" stroke-width="1"/>
<text x="475.0" y="414" text-anchor="middle" font-size="9.5" fill="#8a8a8a">$150k</text>
<line x1="610.0" y1="20" x2="610.0" y2="400" stroke="#d8d0c8" stroke-width="1"/>
<text x="610.0" y="414" text-anchor="middle" font-size="9.5" fill="#8a8a8a">$200k</text>
<text x="340" y="428" text-anchor="middle" font-size="8.5" fill="#8a8a8a" letter-spacing="0.08em">SUELDO FICTO (UYU)</text>
<text x="70" y="428" font-size="8.5" fill="#8a8a8a" font-style="italic">Fuente: CJPPU · Escala 2025</text>
<rect x="70" y="20" width="93.6" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="39" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 1ª</text>
<text x="155.6" y="38" text-anchor="end" font-size="10" fill="white" font-weight="500">$34.660</text>
<text x="674" y="39" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$3.241</text>
<rect x="70" y="58" width="177.0" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="77" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 2ª</text>
<text x="239.0" y="76" text-anchor="end" font-size="10" fill="white" font-weight="500">$65.565</text>
<text x="674" y="77" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$12.196</text>
<rect x="70" y="96" width="250.9" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="115" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 3ª</text>
<text x="312.9" y="114" text-anchor="end" font-size="10" fill="white" font-weight="500">$92.916</text>
<text x="674" y="115" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$17.282</text>
<rect x="70" y="134" width="314.7" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="153" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 4ª</text>
<text x="376.7" y="152" text-anchor="end" font-size="10" fill="white" font-weight="500">$116.552</text>
<text x="674" y="153" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$21.679</text>
<rect x="70" y="172" width="368.5" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="191" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 5ª</text>
<text x="430.5" y="190" text-anchor="end" font-size="10" fill="white" font-weight="500">$136.470</text>
<text x="674" y="191" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$25.383</text>
<rect x="70" y="210" width="412.8" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="229" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 6ª</text>
<text x="474.8" y="228" text-anchor="end" font-size="10" fill="white" font-weight="500">$152.872</text>
<text x="674" y="229" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$28.434</text>
<rect x="70" y="248" width="447.4" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="267" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 7ª</text>
<text x="509.4" y="266" text-anchor="end" font-size="10" fill="white" font-weight="500">$165.708</text>
<text x="674" y="267" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$30.822</text>
<rect x="70" y="286" width="471.9" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="305" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 8ª</text>
<text x="533.9" y="304" text-anchor="end" font-size="10" fill="white" font-weight="500">$174.761</text>
<text x="674" y="305" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$32.506</text>
<rect x="70" y="324" width="486.7" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="343" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 9ª</text>
<text x="548.7" y="342" text-anchor="end" font-size="10" fill="white" font-weight="500">$180.255</text>
<text x="674" y="343" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$33.527</text>
<rect x="70" y="362" width="491.4" height="28" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="63" y="381" text-anchor="end" font-size="11" fill="#4a4a4a">Cat. 10ª</text>
<text x="553.4" y="380" text-anchor="end" font-size="10" fill="white" font-weight="500">$182.018</text>
<text x="674" y="381" text-anchor="middle" font-size="11" fill="#1a6638" font-weight="600">$33.855</text>
</svg>
  </div>
  <p class="grafico-caption">Escala vigente en 2025 (10 categorías). La cuota mensual resulta de aplicar la tasa de aporte (18,5% en 2025) al sueldo ficto de cada categoría. A partir de enero de 2026, los nuevos afiliados ingresan a una escala diferente de 15 categorías según Ley 20.410. Fuente: CJPPU · tabla de fictos y cuotas 2025 (verificable en cjppu.org.uy).</p>
</div>

<p>La <strong>tasa de aporte</strong> es el porcentaje que se aplica sobre el sueldo ficto de cada categoría para determinar la cuota mensual obligatoria. Históricamente estuvo en 16,5%. En 2024 se subió a 18,5%, manteniéndose igual en 2025. Con la Ley 20.410 se establece un cronograma de aumentos graduales desde 2026 hasta llegar al 22,5% en 2028 —la misma tasa que aplica el BPS para trabajadores independientes (Decreto 244/025).</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 3 — Hoja de ruta de la tasa de aporte 2024–2028</span>
  <div class="grafico-frame">
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="680" height="240" fill="#ffffff"/>
<line x1="60" y1="154.0" x2="650" y2="154.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="158.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">5%</text>
<line x1="60" y1="123.0" x2="650" y2="123.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="127.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">10%</text>
<line x1="60" y1="92.0" x2="650" y2="92.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="96.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">15%</text>
<line x1="60" y1="61.0" x2="650" y2="61.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="65.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">20%</text>
<line x1="60" y1="45.5" x2="650" y2="45.5" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="49.5" text-anchor="end" font-size="9.5" fill="#8a8a8a">22.5%</text>
<line x1="60" y1="30.0" x2="650" y2="30.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="55" y="34.0" text-anchor="end" font-size="9.5" fill="#8a8a8a">25%</text>
<line x1="60" y1="45.5" x2="650" y2="45.5" stroke="#1d3557" stroke-width="1" stroke-dasharray="5,3" opacity="0.5"/>
<text x="653" y="49.5" font-size="9" fill="#1d3557" opacity="0.7">BPS</text>
<rect x="93.2" y="70.3" width="81.1" height="114.7" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="133.8" y="62.3" text-anchor="middle" font-size="14" fill="#1d3557" font-weight="700">18.5%</text>
<text x="133.8" y="201.0" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="300">2024</text>
<text x="133.8" y="214.0" text-anchor="middle" font-size="9.5" fill="#8a8a8a" font-style="italic">Vigente</text>
<rect x="240.7" y="57.9" width="81.1" height="127.1" fill="#1a6638" rx="3" opacity="0.85"/>
<text x="281.2" y="49.9" text-anchor="middle" font-size="14" fill="#1a6638" font-weight="700">20.5%</text>
<text x="281.2" y="201.0" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="300">2026</text>
<text x="281.2" y="214.0" text-anchor="middle" font-size="9.5" fill="#8a8a8a" font-style="italic">Ley 20.410</text>
<rect x="388.2" y="51.7" width="81.1" height="133.3" fill="#1a6638" rx="3" opacity="0.85"/>
<text x="428.8" y="43.7" text-anchor="middle" font-size="14" fill="#1a6638" font-weight="700">21.5%</text>
<text x="428.8" y="201.0" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="300">2027</text>
<text x="428.8" y="214.0" text-anchor="middle" font-size="9.5" fill="#8a8a8a" font-style="italic">Ley 20.410</text>
<rect x="535.7" y="45.5" width="81.1" height="139.5" fill="#1a6638" rx="3" opacity="0.85"/>
<text x="576.2" y="37.5" text-anchor="middle" font-size="14" fill="#1a6638" font-weight="700">22.5%</text>
<text x="576.2" y="201.0" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="300">2028</text>
<text x="576.2" y="214.0" text-anchor="middle" font-size="9.5" fill="#8a8a8a" font-style="italic">= BPS</text>
<text transform="rotate(-90)" x="-120" y="14" text-anchor="middle" font-size="9" fill="#8a8a8a" letter-spacing="0.08em">TASA DE APORTE</text>
<text x="60" y="237" font-size="8.5" fill="#8a8a8a" font-style="italic">Fuente: Ley 20.410 / Decreto 244/025</text>
</svg>
  </div>
  <p class="grafico-caption">Cronograma de aumentos de tasa de aporte según Ley 20.410. La tasa de 18,5% se mantiene tanto en 2024 como en 2025; el primer incremento a 20,5% se aplica desde enero de 2026. En 2028 converge con la tasa del BPS para trabajadores independientes. Fuente: Ley 20.410 / Decreto 244/025 (IMPO · impo.com.uy).</p>
</div>

<div class="callout">
  <div class="callout-label">Una tensión estructural del sistema</div>
  <p>Una de las discusiones centrales del debate parlamentario señaló la diferencia entre las trayectorias de aporte —muchos profesionales permanecen en categorías bajas durante gran parte de su carrera— y los beneficios calculados sobre la categoría más alta alcanzada al momento de jubilarse. Esta asimetría es una de las razones por las que el cambio al <strong>promedio de los 20 mejores años</strong> (en lugar del promedio de los últimos 3) fue una de las medidas centrales de la Ley 20.410.</p>
</div>

<h2>Qué prestaciones paga</h2>

<p>La CJPPU otorga principalmente tres tipos de prestaciones:</p>

<ul>
  <li><strong>Jubilación ordinaria:</strong> requiere haber cumplido los años de aporte y la edad mínima. El monto se calcula como un porcentaje del sueldo básico jubilatorio (SBJ), que históricamente era el promedio de los últimos 3 años de ficto. Con la Ley 20.410, para los nuevos casos se aplicará gradualmente el promedio de los <strong>20 mejores años</strong> de la carrera, implementación que se completará en 2039.</li>
  <li><strong>Jubilación por edad avanzada:</strong> para quienes tienen 70 años o más con al menos 15 años de aporte.</li>
  <li><strong>Pensión de sobrevivencia:</strong> para cónyuge o concubino del afiliado fallecido. Las pensiones representan aproximadamente el 17% del total de prestaciones pagadas.</li>
</ul>

<p>Los requisitos de edad cambian según la generación. Para nacidos <strong>hasta 1969</strong>, la edad mínima de jubilación ordinaria es <strong>60 años</strong> con 30 años de aporte. Para nacidos <strong>desde 1974</strong>, la edad sube a <strong>65 años</strong>, convergiendo con la reforma general del BPS. Existe una transición gradual para las generaciones intermedias (1970–1973).</p>

<p>En cuanto a los montos, el rango es amplio. El resultado depende directamente de la categoría al momento del retiro, los años de aporte y la tasa de sustitución aplicada. A modo <em>puramente ilustrativo</em>: aplicando el 50% de tasa de sustitución sobre el ficto de la categoría 1ª ($34.660 en 2025) el resultado es inferior a $17.500; sobre el ficto de la categoría 10ª ($182.018) superaría los $90.000. Los montos reales varían según la historia de aportes individual y la tasa de sustitución correspondiente — la CJPPU puede proporcionar una estimación personalizada.</p>

<div class="callout callout-neutral">
  <div class="callout-label">Cómo se calcula la jubilación</div>
  <p>El monto de la jubilación ordinaria parte del SBJ: el promedio del sueldo ficto de los años considerados. Sobre ese SBJ se aplica un porcentaje que va del 50% (con 30 años de aporte) hasta el 82,5% (con el máximo de años y edad), más adicionales por cónyuge a cargo. Cada categoría tiene su propio ficto, por eso la categoría al momento de la jubilación es tan determinante.</p>
</div>

<h2>Por qué está en discusión</h2>

<p>La CJPPU pasó de superávit a déficit entre 2019 y 2020, y desde entonces el desequilibrio no hizo más que crecer. En 2023, el resultado operativo fue negativo en <strong>$2.180 millones de pesos</strong>, casi el doble que en 2022. En 2024, el resultado operativo negativo alcanzó los <strong>$2.248 millones de pesos</strong> (equivalente a aproximadamente US$50–55 millones según el tipo de cambio de referencia utilizado). El déficit operativo acumulado entre 2020 y 2024 fue de <strong>US$189 millones</strong> según datos difundidos por la institución. Fuente: CJPPU / El Observador, enero 2026.</p>

<div class="grafico-wrap">
  <span class="grafico-label">Gráfico 2 — Resultado operativo CJPPU 2017–2024</span>
  <div class="grafico-frame">
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="680" height="300" fill="#ffffff"/>
<line x1="65" y1="236.2" x2="660" y2="236.2" stroke="#d8d0c8" stroke-width="1"/>
<text x="60" y="240.2" text-anchor="end" font-size="9.5" fill="#8a8a8a">-2,000M</text>
<line x1="65" y1="189.4" x2="660" y2="189.4" stroke="#d8d0c8" stroke-width="1"/>
<text x="60" y="193.4" text-anchor="end" font-size="9.5" fill="#8a8a8a">-1,000M</text>
<line x1="65" y1="142.5" x2="660" y2="142.5" stroke="#d8d0c8" stroke-width="1"/>
<text x="60" y="146.5" text-anchor="end" font-size="9.5" fill="#8a8a8a">0</text>
<line x1="65" y1="95.6" x2="660" y2="95.6" stroke="#d8d0c8" stroke-width="1"/>
<text x="60" y="99.6" text-anchor="end" font-size="9.5" fill="#8a8a8a">+1,000M</text>
<line x1="65" y1="142.5" x2="660" y2="142.5" stroke="#4a4a4a" stroke-width="1.5"/>
<rect x="79.1" y="99.3" width="46.1" height="43.2" fill="#1a6638" rx="2" opacity="0.85"/>
<text x="102.2" y="94.3" text-anchor="middle" font-size="9.5" fill="#1a6638" font-weight="600">+921M</text>
<text x="102.2" y="269" text-anchor="middle" font-size="10" fill="#4a4a4a">2017</text>
<rect x="153.5" y="137.6" width="46.1" height="4.9" fill="#1a6638" rx="2" opacity="0.85"/>
<text x="176.6" y="132.6" text-anchor="middle" font-size="9.5" fill="#1a6638" font-weight="600">+105M</text>
<text x="176.6" y="269" text-anchor="middle" font-size="10" fill="#4a4a4a">2018</text>
<rect x="227.9" y="130.2" width="46.1" height="12.3" fill="#1a6638" rx="2" opacity="0.85"/>
<text x="250.9" y="125.2" text-anchor="middle" font-size="9.5" fill="#1a6638" font-weight="600">+263M</text>
<text x="250.9" y="269" text-anchor="middle" font-size="10" fill="#4a4a4a">2019</text>
<rect x="302.3" y="142.5" width="46.1" height="43.5" fill="#c0392b" rx="2" opacity="0.85"/>
<text x="325.3" y="199.0" text-anchor="middle" font-size="9.5" fill="#c0392b" font-weight="600">-929M</text>
<text x="325.3" y="269" text-anchor="middle" font-size="10" fill="#4a4a4a">2020</text>
<rect x="376.6" y="142.5" width="46.1" height="40.6" fill="#c0392b" rx="2" opacity="0.85"/>
<text x="399.7" y="196.1" text-anchor="middle" font-size="9.5" fill="#c0392b" font-weight="600">-866M</text>
<text x="399.7" y="269" text-anchor="middle" font-size="10" fill="#4a4a4a">2021</text>
<rect x="451.0" y="142.5" width="46.1" height="52.4" fill="#c0392b" rx="2" opacity="0.85"/>
<text x="474.1" y="207.9" text-anchor="middle" font-size="9.5" fill="#c0392b" font-weight="600">-1117M</text>
<text x="474.1" y="269" text-anchor="middle" font-size="10" fill="#4a4a4a">2022</text>
<rect x="525.4" y="142.5" width="46.1" height="102.2" fill="#c0392b" rx="2" opacity="0.85"/>
<text x="548.4" y="257.7" text-anchor="middle" font-size="9.5" fill="#c0392b" font-weight="600">-2180M</text>
<text x="548.4" y="269" text-anchor="middle" font-size="10" fill="#4a4a4a">2023</text>
<rect x="599.8" y="142.5" width="46.1" height="105.4" fill="#c0392b" rx="2" opacity="0.85"/>
<text x="622.8" y="260.9" text-anchor="middle" font-size="9.5" fill="#c0392b" font-weight="600">-2248M</text>
<text x="622.8" y="269" text-anchor="middle" font-size="10" fill="#4a4a4a">2024</text>
<text transform="rotate(-90)" x="-150" y="14" text-anchor="middle" font-size="9" fill="#8a8a8a" letter-spacing="0.08em">MILLONES UYU (VALORES CONSTANTES)</text>
<text x="65" y="297" font-size="8.5" fill="#8a8a8a" font-style="italic">Fuente: El Observador / CJPPU. Valores constantes.</text>
</svg>
  </div>
  <p class="grafico-caption">Resultado operativo anual de la CJPPU en millones de pesos uruguayos (valores constantes). Los datos 2017–2019 y 2020–2022 son aproximaciones basadas en cobertura periodística; los datos 2023–2024 provienen de reportes CJPPU. La transición al déficit se produjo en 2020 y se profundizó año a año. Fuente: CJPPU / El Observador, 2024–2026.</p>
</div>

<p>Las causas son múltiples y se refuerzan mutuamente:</p>

<ul>
  <li><strong>Cambio en el perfil laboral.</strong> Los profesionales jóvenes acceden cada vez más al mercado vía relación de dependencia, aportando al BPS en lugar de a la Caja. Esto reduce la base de aportantes sin reducir los futuros beneficiarios.</li>
  <li><strong>Envejecimiento del padrón.</strong> Entre 2012 y 2022, los afiliados activos crecieron 21,5% mientras los jubilados crecieron 95,9%. Con 63.601 activos y 15.692 jubilados al cierre de 2024, la relación activo/pasivo es de aproximadamente <strong>4 aportantes por cada jubilado</strong>. Distintos análisis señalan que esta relación resulta insuficiente para sostener el esquema sin ajustes, dadas las reglas actuales de beneficios y aportes.</li>
  <li><strong>Subvaloración histórica de los timbres.</strong> Los timbres profesionales son gravámenes asociados a determinados actos profesionales —consultas médicas, escrituras notariales, presentaciones ante organismos— que funcionan como una fuente adicional de financiamiento de la Caja, complementaria a las cuotas mensuales. Históricamente representaban el 48–50% de los ingresos de la institución; hoy representan menos del 30%, en parte porque sus valores no se actualizaron en proporción al crecimiento de salarios e inflación. Se estima que dos tercios de los timbres provienen del sector salud. (Dato referenciado en el debate parlamentario de la Ley 20.410; para datos oficiales exactos, ver memorias CJPPU.)</li>
  <li><strong>Asimetría de categorías.</strong> Como se explicó, la mayoría aporta en categorías bajas pero se jubila sobre la categoría más alta alcanzada, generando un diferencial que la Caja no puede sostener con los ingresos corrientes.</li>
  <li><strong>Proyección sin reforma.</strong> Sin intervención, los proyectos técnicos estimaban pérdidas de <strong>US$100 millones anuales</strong> y riesgo de cesación de pagos en el mediano plazo.</li>
</ul>

<div class="callout callout-warn">
  <div class="callout-label">Dato clave</div>
  <p>En 2024, el flujo mensual de la Caja era de aproximadamente US$39–40 millones en ingresos versus US$42 millones en egresos: un déficit mensual de US$2–3 millones. Las prestaciones (jubilaciones y pensiones) representaron aproximadamente el 93% de los egresos totales. (Dato referenciado en cobertura periodística; para cifras exactas, consultar estados financieros CJPPU en cjppu.org.uy.) Fuente: El Observador, 2025.</p>
</div>

<h2>La reforma: Ley 20.410</h2>

<p>En julio de 2025, el Senado aprobó con amplio respaldo —incluyendo acuerdo entre oficialismo y oposición— la Ley 20.410, la reforma más importante de la CJPPU en décadas. El Decreto 244/025 publicado en noviembre de 2025 reglamentó su implementación.</p>

<p>Las principales medidas de la reforma:</p>

<ul>
  <li><strong>Aumento gradual de la tasa de aporte</strong> del 18,5% al 22,5% entre 2026 y 2028.</li>
  <li><strong>Nueva escala de 15 categorías</strong> para nuevos afiliados desde enero de 2026, con avance cada 2 años en lugar de 3.</li>
  <li><strong>Cambio en el cálculo del SBJ</strong>: se pasa del promedio de los últimos 3 años al promedio de los 20 mejores años, implementado en forma gradual hasta 2039.</li>
  <li><strong>Aporte del Estado</strong> a través de Rentas Generales: <em>aporte permanente</em> de $218 millones de pesos mensuales (aproximadamente $2.600 millones anuales), más <em>aportes extraordinarios</em> de $665 millones en 2025, $665 millones en 2026 y $332 millones en 2027. Es la primera vez en la historia que el Estado contribuye de forma permanente a la CJPPU. Fuente: Ley 20.410 (IMPO).</li>
  <li><strong>Contribución de los pasivos</strong> según escala de ingresos: exentos hasta $39.456 pesos; 2% entre $39.456 y $65.760; 5% por encima de $65.760.</li>
  <li><strong>Reducción del directorio</strong> de 7 a 5 miembros; tope de gastos administrativos de máximo 4% del ingreso bruto.</li>
  <li><strong>Horizonte de sostenibilidad extendido:</strong> según las estimaciones técnicas difundidas durante el proceso legislativo, el conjunto de medidas busca extender la sostenibilidad del sistema hacia mediados de la década de 2040 — frente a un horizonte de corto plazo sin reforma. (Las proyecciones actuariales son estimaciones sujetas a supuestos; para metodología, ver CJPPU.)</li>
</ul>

<div class="datos-grid col2">
  <div class="dato-item">
    <div class="dato-val">US$189M</div>
    <div class="dato-label">déficit acumulado de la CJPPU entre 2020 y 2024</div>
    <div class="dato-fuente">El Observador, enero 2026</div>
  </div>
  <div class="dato-item">
    <div class="dato-val">~2045</div>
    <div class="dato-label">horizonte de sostenibilidad estimado con la Ley 20.410 según proyecciones técnicas del proceso legislativo</div>
    <div class="dato-fuente">Estimaciones técnicas / CJPPU · Ley 20.410</div>
  </div>
  <div class="dato-item">
    <div class="dato-val">$218M</div>
    <div class="dato-label">pesos mensuales que aportará el Estado a partir de la reforma</div>
    <div class="dato-fuente">Ley 20.410 / SAU</div>
  </div>
  <div class="dato-item">
    <div class="dato-val">22,5%</div>
    <div class="dato-label">tasa de aporte que se alcanzará en 2028, igual a la del BPS</div>
    <div class="dato-fuente">Decreto 244/025</div>
  </div>
</div>

<h2>Qué significa para un profesional</h2>

<p>Más allá de la reforma, hay información concreta que cualquier profesional debería tener en cuenta para planificar su retiro:</p>

<ul>
  <li><strong>Conocer tu categoría actual.</strong> El sueldo ficto en el que estás encuadrado determina cuánto pagás hoy y, en parte, cuánto vas a cobrar. Vale la pena consultar en la Caja si tu categoría es la correcta y cuándo corresponde avanzar.</li>
  <li><strong>Revisar tu historial de aportes.</strong> La CJPPU permite consultar el historial de categorías y períodos aportados. El SBJ se calculará sobre los mejores años (con la nueva fórmula), por lo que los años en categorías más altas pesan más.</li>
  <li><strong>Entender la brecha.</strong> Con la relación activo/pasivo actual y las proyecciones demográficas, la prestación de la Caja no puede asumir que será equivalente al ingreso activo. La tasa de reemplazo varía mucho según la carrera de aportes.</li>
  <li><strong>No depender de una sola fuente.</strong> Como en cualquier sistema previsional, la Caja cubre una parte del retiro. Proyectar el resto —a través de ahorro complementario, inversiones o fondos de retiro— es la diferencia entre un retiro planificado y uno improvisado.</li>
  <li><strong>Seguir la reforma.</strong> Los cambios introducidos por la Ley 20.410 son graduales y afectan de forma diferente según la edad. Conviene revisar en qué régimen transitorio se encuadra cada caso.</li>
</ul>

<div class="callout">
  <div class="callout-label">Para seguir de cerca</div>
  <p>La CJPPU publica anualmente sus estados financieros, portafolio de inversiones y estadísticas en <strong>cjppu.org.uy</strong>. Las memorias anuales y el informe de inversiones son documentos técnicos pero accesibles, con los datos sobre evolución del padrón, ingresos, egresos y resultado operativo.</p>
</div>

<hr class="divider"/>

<p>El punto no es solo aportar, sino entender qué se está construyendo con ese aporte y qué parte del retiro conviene planificar por cuenta propia. La Caja de Profesionales atraviesa un momento de reforma profunda: conocer sus reglas, su situación financiera y sus proyecciones es el primer paso para tomar decisiones informadas.</p>

<div class="fuentes">
  <h3>Fuentes</h3>
  <p><strong>CJPPU (2024–2025).</strong> Memoria Anual 2024, estados financieros, tabla de fictos y cuotas vigentes. Caja de Jubilaciones y Pensiones de Profesionales Universitarios del Uruguay.<br>
  <a href="https://www.cjppu.org.uy" target="_blank">cjppu.org.uy →</a></p>
  <p><strong>IMPO — Ley 20.410 (2025).</strong> Texto completo de la reforma de la CJPPU, cronograma de aportes y nuevas disposiciones. Decreto 244/025.<br>
  <a href="https://www.impo.com.uy" target="_blank">impo.com.uy →</a></p>
  <p><strong>El Observador (2024–2026).</strong> Cobertura periodística de la reforma, datos de afiliados y resultados financieros de la CJPPU.<br>
  <a href="https://www.elobservador.com.uy" target="_blank">elobservador.com.uy →</a></p>
  <p><strong>Pension Policy International.</strong> <em>Uruguay — CJPPU Data.</em> Estimaciones de evolución de afiliados 2012–2022.<br>
  <a href="https://www.pensionpolicyinternational.com" target="_blank">pensionpolicyinternational.com →</a></p>
  <p><strong>SAU — Sociedad de Arquitectos del Uruguay (2025).</strong> Resumen de la Ley 20.410 y sus implicancias para profesionales.<br>
  <a href="https://www.sau.org.uy" target="_blank">sau.org.uy →</a></p>
  <p><strong>Fernández Secco (enero 2026).</strong> Análisis de la reforma CJPPU y Decreto 244/025. Estudio jurídico-contable.<br>
  <a href="https://fernandezsecco.com" target="_blank">fernandezsecco.com →</a></p>
  <p><strong>GRO.com.uy (2025).</strong> Verificación de tabla de fictos y cuotas 2025. Complemento periodístico.<br>
  <a href="https://www.gro.com.uy" target="_blank">gro.com.uy →</a></p>
</div>
`,
      }}
    />
  );
}
