/* eslint-disable */
export default function ArticleContent() {
  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{
        __html: `
<span class="tag">Sistema Previsional</span>

<h1>Qué parte de tu jubilación controlás y qué parte no</h1>

<p class="bajada">Uruguay tiene un sistema mixto de jubilaciones desde 1996: una parte funciona como reparto colectivo (BPS) y otra como ahorro individual (AFAP). Entender cómo funciona cada pilar — y qué variables están en tus manos — es lo que define el margen real que tenés para planificar.</p>

<hr class="divider"/>

<p>La mayoría de los trabajadores uruguayos aporta al sistema previsional todos los meses sin saber exactamente qué determina cuánto van a cobrar. Saben que existe el BPS y que tienen una AFAP, pero la mecánica concreta — cómo se calcula la jubilación, qué hace la AFAP con los aportes, qué podés hacer vos y qué no — queda en la opacidad.</p>

<p>Este artículo explica los dos pilares del sistema, separando en cada uno qué controlás y qué no.</p>

<div class="grafico-wrap">
  <div class="grafico-frame">
    <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="720" height="220" fill="#ffffff"/>
<rect x="28" y="75" width="145" height="70" fill="#1d3557" rx="8" opacity="0.9"/>
<text x="100" y="101" text-anchor="middle" font-size="11.5" fill="white" font-weight="700">Tu salario</text>
<text x="100" y="117" text-anchor="middle" font-size="11.5" fill="white" font-weight="700">bruto</text>
<text x="100" y="135" text-anchor="middle" font-size="10" fill="white" opacity="0.8">100%</text>
<line x1="173" y1="110.0" x2="213" y2="110.0" stroke="#1d3557" stroke-width="2" opacity="0.5"/>
<line x1="213" y1="110.0" x2="213" y2="84.0" stroke="#1d3557" stroke-width="2" opacity="0.5"/>
<line x1="213" y1="84.0" x2="293" y2="84.0" stroke="#1d3557" stroke-width="2" opacity="0.5"/>
<polygon points="293,79.0 301,84.0 293,89.0" fill="#1d3557" opacity="0.5"/>
<rect x="301" y="50" width="165" height="68" fill="#eef2f8" rx="8" stroke="#1d3557" stroke-width="1.2" stroke-opacity="0.4"/>
<text x="384" y="72" text-anchor="middle" font-size="12" fill="#1d3557" font-weight="700">BPS — Reparto</text>
<text x="384" y="88" text-anchor="middle" font-size="10" fill="#4a4a4a">Fondo colectivo · solidario</text>
<text x="384" y="104" text-anchor="middle" font-size="10" fill="#8a8a8a">Activos financian a pasivos</text>
<line x1="466" y1="84.0" x2="478" y2="84.0" stroke="#1d3557" stroke-width="2" stroke-dasharray="5,4" opacity="0.5"/>
<rect x="478" y="62.0" width="130" height="44" fill="#1d3557" rx="6" opacity="0.85"/>
<text x="543" y="80.0" text-anchor="middle" font-size="10.5" fill="white" font-weight="600">Jubilación</text>
<text x="543" y="95.0" text-anchor="middle" font-size="10.5" fill="white" font-weight="600">BPS</text>
<line x1="213" y1="110.0" x2="213" y2="172.0" stroke="#1a6638" stroke-width="2" opacity="0.5"/>
<line x1="213" y1="172.0" x2="293" y2="172.0" stroke="#1a6638" stroke-width="2" opacity="0.5"/>
<polygon points="293,167.0 301,172.0 293,177.0" fill="#1a6638" opacity="0.5"/>
<rect x="301" y="138" width="165" height="68" fill="#eef7f3" rx="8" stroke="#1a6638" stroke-width="1.2" stroke-opacity="0.4"/>
<text x="384" y="160" text-anchor="middle" font-size="12" fill="#1a6638" font-weight="700">AFAP — Ahorro</text>
<text x="384" y="176" text-anchor="middle" font-size="10" fill="#4a4a4a">Cuenta individual · propia</text>
<text x="384" y="192" text-anchor="middle" font-size="10" fill="#8a8a8a">Genera rendimientos propios</text>
<line x1="466" y1="172.0" x2="478" y2="172.0" stroke="#1a6638" stroke-width="2" stroke-dasharray="5,4" opacity="0.5"/>
<rect x="478" y="150.0" width="130" height="44" fill="#1a6638" rx="6" opacity="0.85"/>
<text x="543" y="168.0" text-anchor="middle" font-size="10.5" fill="white" font-weight="600">Renta</text>
<text x="543" y="183.0" text-anchor="middle" font-size="10.5" fill="white" font-weight="600">AFAP</text>
</svg>
    <p class="grafico-caption">El sistema mixto uruguayo (Ley 16.713, 1996) divide los aportes entre dos mecanismos con lógicas completamente distintas: reparto solidario en el BPS y ahorro individual en la AFAP.</p>
  </div>
</div>

<h2>Pilar 1: BPS — el reparto solidario</h2>

<p>El BPS funciona como un sistema de reparto: los trabajadores activos de hoy financian las jubilaciones de los pasivos de hoy. No hay una cuenta tuya que crece: los aportes que hacés este mes pagan la jubilación de alguien que ya se retiró.</p>

<p>Lo que el BPS te promete a cambio es una jubilación calculada según una fórmula que toma en cuenta dos variables principales: el <strong>Sueldo Básico Jubilatorio</strong> (SBJ) y la <strong>tasa de sustitución</strong>.</p>

<ul>
  <li><strong>Sueldo Básico Jubilatorio:</strong> es el promedio actualizado de tus mejores 20 años de salario. No importa lo que ganabas en tu último año activo: el sistema promedia los mejores dos décadas de tu vida laboral, ajustados por el Índice Medio de Salarios.</li>
  <li><strong>Tasa de sustitución:</strong> es el porcentaje del SBJ que recibís como jubilación. Con 30 años de aportes — el mínimo para la causal común — arranca en el 45%. A partir de ahí la escala sube <strong>1 punto porcentual</strong> por cada año adicional entre el año 31 y el 35, y <strong>0,5 puntos</strong> por cada año entre el 36 y el 40 (según Ley 16.713, Art. 30).</li>
</ul>

<p>El resultado: tu jubilación BPS = SBJ × tasa de sustitución. Con 30 años de aportes y un SBJ de $60.000, la jubilación es de $27.000. Con 35 años, es de $30.000. Con 40 años, es de $31.500.</p>

<div class="grafico-wrap">
  <div class="grafico-frame">
    <svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="720" height="300" fill="#ffffff"/>
<line x1="70" y1="183.8" x2="610" y2="183.8" stroke="#d8d0c8" stroke-width="1"/>
<text x="62" y="187.8" text-anchor="end" font-size="10" fill="#8a8a8a">10%</text>
<line x1="70" y1="152.7" x2="610" y2="152.7" stroke="#d8d0c8" stroke-width="1"/>
<text x="62" y="156.7" text-anchor="end" font-size="10" fill="#8a8a8a">20%</text>
<line x1="70" y1="121.5" x2="610" y2="121.5" stroke="#d8d0c8" stroke-width="1"/>
<text x="62" y="125.5" text-anchor="end" font-size="10" fill="#8a8a8a">30%</text>
<line x1="70" y1="90.3" x2="610" y2="90.3" stroke="#d8d0c8" stroke-width="1"/>
<text x="62" y="94.3" text-anchor="end" font-size="10" fill="#8a8a8a">40%</text>
<line x1="70" y1="59.2" x2="610" y2="59.2" stroke="#d8d0c8" stroke-width="1"/>
<text x="62" y="63.2" text-anchor="end" font-size="10" fill="#8a8a8a">50%</text>
<line x1="70" y1="28.0" x2="610" y2="28.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="62" y="32.0" text-anchor="end" font-size="10" fill="#8a8a8a">60%</text>
<line x1="70" y1="74.8" x2="610" y2="74.8" stroke="#c47a1e" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="616" y="78.8" font-size="10" fill="#c47a1e" font-weight="600">Piso 45%</text>
<rect x="82.0" y="200.0" width="54" height="15.0" fill="#b0b0b0" rx="3" opacity="0.4"/>
<text x="109" y="192.0" text-anchor="middle" font-size="10" fill="#b0b0b0">—</text>
<text x="109" y="231" text-anchor="middle" font-size="10.5" fill="#4a4a4a">20 años</text>
<text x="109" y="245" text-anchor="middle" font-size="9" fill="#8a8a8a" font-style="italic">No configura</text>
<text x="109" y="258" text-anchor="middle" font-size="9" fill="#8a8a8a" font-style="italic">causal común</text>
<rect x="148.0" y="200.0" width="54" height="15.0" fill="#b0b0b0" rx="3" opacity="0.4"/>
<text x="175" y="192.0" text-anchor="middle" font-size="10" fill="#b0b0b0">—</text>
<text x="175" y="231" text-anchor="middle" font-size="10.5" fill="#4a4a4a">25 años</text>
<text x="175" y="245" text-anchor="middle" font-size="9" fill="#8a8a8a" font-style="italic">No configura</text>
<text x="175" y="258" text-anchor="middle" font-size="9" fill="#8a8a8a" font-style="italic">causal común</text>
<rect x="214.0" y="74.8" width="54" height="140.2" fill="#b5372a" rx="3" opacity="0.85"/>
<text x="241" y="66.8" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="700">45%</text>
<text x="241" y="231" text-anchor="middle" font-size="10.5" fill="#4a4a4a">30 años</text>
<text x="241" y="245" text-anchor="middle" font-size="9" fill="#b5372a" font-style="italic">Mínimo legal</text>
<rect x="280.0" y="65.4" width="54" height="149.6" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="307" y="57.4" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="700">48%</text>
<text x="307" y="231" text-anchor="middle" font-size="10.5" fill="#4a4a4a">33 años</text>
<rect x="346.0" y="59.2" width="54" height="155.8" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="373" y="51.2" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="700">50%</text>
<text x="373" y="231" text-anchor="middle" font-size="10.5" fill="#4a4a4a">35 años</text>
<rect x="412.0" y="56.1" width="54" height="158.9" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="439" y="48.1" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="700">51%</text>
<text x="439" y="231" text-anchor="middle" font-size="10.5" fill="#4a4a4a">37 años</text>
<rect x="478.0" y="51.4" width="54" height="163.6" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="505" y="43.4" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="700">52,5%</text>
<text x="505" y="231" text-anchor="middle" font-size="10.5" fill="#4a4a4a">40 años</text>
<rect x="544.0" y="43.6" width="54" height="171.4" fill="#1d3557" rx="3" opacity="0.85"/>
<text x="571" y="35.6" text-anchor="middle" font-size="11" fill="#4a4a4a" font-weight="700">55%</text>
<text x="571" y="231" text-anchor="middle" font-size="10.5" fill="#4a4a4a">45 años</text>
<text x="360" y="295" text-anchor="middle" font-size="9" fill="#8a8a8a">Escala BPS: 45% a 30 años; +1%/año entre 31–35; +0,5%/año entre 36–40 · Fuente: Ley 16.713, Art. 30</text>
</svg>
    <p class="grafico-caption">La tasa de sustitución del BPS arranca en 45% con el mínimo legal de 30 años. La escala sube más rápido entre los años 31 y 35 (+1% anual) y más despacio entre los años 36 y 40 (+0,5% anual). Los tramos de 20 y 25 años no configuran la causal común de jubilación, aunque pueden habilitar otras causales o regímenes especiales.</p>
  </div>
</div>

<div class="datos-grid col2">
  <div class="dato-item">
    <div class="dato-val">$36.767</div>
    <div class="dato-label">jubilación promedio BPS en octubre 2025</div>
    <div class="dato-fuente">BPS · Observatorio de Seguridad Social · oct. 2025</div>
  </div>
  <div class="dato-item">
    <div class="dato-val">2,31</div>
    <div class="dato-label">aportantes activos por cada jubilado (oct. 2025)</div>
    <div class="dato-fuente">BPS · Observatorio de Seguridad Social · oct. 2025</div>
  </div>
</div>

<h3>En el BPS, no controlás</h3>
<ul>
  <li>La fórmula de cálculo — el SBJ y la tasa de sustitución los define la ley, no vos</li>
  <li>El mecanismo de ajuste — las jubilaciones se actualizan anualmente por el Índice Medio de Salarios (IMS), que refleja la variación de los salarios nominales; esto no garantiza que el poder adquisitivo se mantenga si los salarios suben menos que la inflación</li>
  <li>La ratio activos/pasivos — hoy es 2,31 pero lleva décadas cayendo; esa presión termina en reformas que cambian las reglas</li>
  <li>Las reformas — la Ley de 2023 subió la edad de retiro a 65 años para quienes nacieron a partir de 1977; en el futuro puede haber más cambios</li>
</ul>

<h3>En el BPS, sí controlás</h3>
<ul>
  <li><strong>Cuántos años efectivos de aportes acumulás</strong> — las lagunas (períodos sin aporte formal) reducen directamente la tasa de sustitución</li>
  <li><strong>Si trabajás formal o informal</strong> — el trabajo informal no computa años de aporte; los períodos en negro no existen para el BPS</li>
  <li><strong>Si comprás años fictos</strong> — la normativa permite, en ciertos casos, completar períodos de aporte mediante un pago</li>
</ul>

<div class="callout">
  <p><strong>Para tener en cuenta:</strong> una proporción significativa de los trabajadores formales no llega a completar los 30 años de aportes que habilitan la causal común. Períodos de trabajo informal, lagunas contributivas o empleos con aportes irregulares pueden reducir la tasa de sustitución efectiva — o directamente impedir el acceso a la jubilación ordinaria.</p>
</div>

<h2>Pilar 2: AFAP — el ahorro individual</h2>

<p>A diferencia del BPS, la AFAP sí administra una cuenta a tu nombre. Una parte de tus aportes al sistema (definida por ley según tu nivel de salario) va a esa cuenta individual, que se invierte en instrumentos financieros y acumula rendimientos.</p>

<p>Al momento del retiro, el saldo acumulado se convierte en una renta vitalicia —un pago mensual de por vida calculado por una aseguradora— o en retiros programados. Lo que recibís depende de cuánto se acumuló y de cuánto tiempo de vida se estima que tendrás.</p>

<p>En Uruguay operan <strong>cuatro AFAPs</strong>: República AFAP (estatal, con cerca del 70% del mercado), AFAP Sura, Unión Capital e Integración. Todas invierten principalmente en bonos ajustados por inflación (UI) y, en menor proporción, en renta variable.</p>

<div class="grafico-wrap">
  <div class="grafico-frame">
    <svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="720" height="240" fill="#ffffff"/>
<line x1="140" y1="166.9" x2="670" y2="166.9" stroke="#d8d0c8" stroke-width="1"/>
<text x="132" y="170.9" text-anchor="end" font-size="10" fill="#8a8a8a">1%</text>
<line x1="140" y1="143.7" x2="670" y2="143.7" stroke="#d8d0c8" stroke-width="1"/>
<text x="132" y="147.7" text-anchor="end" font-size="10" fill="#8a8a8a">2%</text>
<line x1="140" y1="120.6" x2="670" y2="120.6" stroke="#d8d0c8" stroke-width="1"/>
<text x="132" y="124.6" text-anchor="end" font-size="10" fill="#8a8a8a">3%</text>
<line x1="140" y1="97.4" x2="670" y2="97.4" stroke="#d8d0c8" stroke-width="1"/>
<text x="132" y="101.4" text-anchor="end" font-size="10" fill="#8a8a8a">4%</text>
<line x1="140" y1="74.3" x2="670" y2="74.3" stroke="#d8d0c8" stroke-width="1"/>
<text x="132" y="78.3" text-anchor="end" font-size="10" fill="#8a8a8a">5%</text>
<line x1="140" y1="51.1" x2="670" y2="51.1" stroke="#d8d0c8" stroke-width="1"/>
<text x="132" y="55.1" text-anchor="end" font-size="10" fill="#8a8a8a">6%</text>
<line x1="140" y1="28.0" x2="670" y2="28.0" stroke="#d8d0c8" stroke-width="1"/>
<text x="132" y="32.0" text-anchor="end" font-size="10" fill="#8a8a8a">7%</text>
<rect x="174.0" y="64.6" width="90" height="125.4" fill="#1d3557" rx="4" opacity="0.85"/>
<text x="219" y="56.6" text-anchor="middle" font-size="13" fill="#4a4a4a" font-weight="700">5.42%</text>
<text x="219" y="206" text-anchor="middle" font-size="10.5" fill="#4a4a4a" font-weight="600">República AFAP</text>
<text x="219" y="220" text-anchor="middle" font-size="9.5" fill="#8a8a8a">Estado · ~70% del mercado</text>
<rect x="298.0" y="74.7" width="90" height="115.3" fill="#2e6da4" rx="4" opacity="0.85"/>
<text x="343" y="66.7" text-anchor="middle" font-size="13" fill="#4a4a4a" font-weight="700">4.98%</text>
<text x="343" y="206" text-anchor="middle" font-size="10.5" fill="#4a4a4a" font-weight="600">AFAP Integración</text>
<text x="343" y="220" text-anchor="middle" font-size="9.5" fill="#8a8a8a">Grupo Suramericana</text>
<rect x="422.0" y="72.0" width="90" height="118.0" fill="#2a7f6e" rx="4" opacity="0.85"/>
<text x="467" y="64.0" text-anchor="middle" font-size="13" fill="#4a4a4a" font-weight="700">5.10%</text>
<text x="467" y="206" text-anchor="middle" font-size="10.5" fill="#4a4a4a" font-weight="600">Unión Capital</text>
<text x="467" y="220" text-anchor="middle" font-size="9.5" fill="#8a8a8a">Grupo Banred</text>
<rect x="546.0" y="69.4" width="90" height="120.6" fill="#4a7a9b" rx="4" opacity="0.85"/>
<text x="591" y="61.4" text-anchor="middle" font-size="13" fill="#4a4a4a" font-weight="700">5.21%</text>
<text x="591" y="206" text-anchor="middle" font-size="10.5" fill="#4a4a4a" font-weight="600">AFAP Sura</text>
<text x="591" y="220" text-anchor="middle" font-size="9.5" fill="#8a8a8a">Grupo Sura</text>
<text x="360" y="234" text-anchor="middle" font-size="9" fill="#8a8a8a" font-style="italic">Datos orientativos. Rentabilidad anual acumulada en UR desde inicio de cada fondo · Fuente: memorias AFAPs / BCU · Valores aproximados, sujetos a actualización</text>
</svg>
    <p class="grafico-caption">Datos orientativos de rentabilidad anual acumulada en Unidades Reajustables (UR) desde el inicio de operaciones de cada AFAP. Para valores oficiales actualizados, consultá <strong>bcu.gub.uy</strong>. Diferencias sostenidas de rendimiento generan impactos significativos en el capital acumulado a 30 años.</p>
  </div>
</div>

<h3>Los subfondos: cómo cambia el riesgo con la edad</h3>

<p>Las AFAPs no invierten todo igual. El sistema divide los afiliados en tres <strong>subfondos</strong> según la edad, con composiciones de cartera distintas. A mayor edad, mayor proporción de activos conservadores y menor exposición a renta variable.</p>

<div class="grafico-wrap">
  <div class="grafico-frame">
    <svg viewBox="0 0 720 274" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
<rect width="720" height="274" fill="#ffffff"/>
<text x="140" y="44" text-anchor="end" font-size="11" fill="#4a4a4a" font-weight="600" font-style="normal">Acumulación</text>
<text x="140" y="58" text-anchor="end" font-size="11" fill="#4a4a4a" font-weight="600" font-style="italic">(menores de 55)</text>
<rect x="148.0" y="30" width="114.6" height="42" fill="#c47a1e" rx="4" opacity="0.85"/>
<rect x="262.6" y="30" width="267.4" height="42" fill="#1d3557" rx="0" opacity="0.85"/>
<text x="205" y="56.0" text-anchor="middle" font-size="12" fill="white" font-weight="700">30%</text>
<text x="396" y="56.0" text-anchor="middle" font-size="12" fill="white" font-weight="700">70%</text>
<text x="540" y="56.0" font-size="10.5" fill="#8a8a8a">Te asigna la AFAP</text>
<text x="540" y="70.0" font-size="10.5" fill="#8a8a8a">según tu edad</text>
<text x="140" y="106" text-anchor="end" font-size="11" fill="#4a4a4a" font-weight="600" font-style="normal">Intermedio</text>
<text x="140" y="120" text-anchor="end" font-size="11" fill="#4a4a4a" font-weight="600" font-style="italic">(55 a 59 años)</text>
<rect x="148.0" y="92" width="57.3" height="42" fill="#c47a1e" rx="4" opacity="0.85"/>
<rect x="205.3" y="92" width="324.7" height="42" fill="#1d3557" rx="0" opacity="0.85"/>
<text x="177" y="118.0" text-anchor="middle" font-size="12" fill="white" font-weight="700">15%</text>
<text x="368" y="118.0" text-anchor="middle" font-size="12" fill="white" font-weight="700">85%</text>
<text x="540" y="118.0" font-size="10.5" fill="#8a8a8a">Te asigna la AFAP</text>
<text x="540" y="132.0" font-size="10.5" fill="#8a8a8a">según tu edad</text>
<text x="140" y="168" text-anchor="end" font-size="11" fill="#4a4a4a" font-weight="600" font-style="normal">Retiro</text>
<text x="140" y="182" text-anchor="end" font-size="11" fill="#4a4a4a" font-weight="600" font-style="italic">(60 años o más)</text>
<rect x="148.0" y="154" width="19.1" height="42" fill="#c47a1e" rx="4" opacity="0.85"/>
<rect x="167.1" y="154" width="362.9" height="42" fill="#1d3557" rx="0" opacity="0.85"/>
<text x="181" y="180.0" font-size="11" fill="#c47a1e" font-weight="700" opacity="0.95">5%</text>
<text x="349" y="180.0" text-anchor="middle" font-size="12" fill="white" font-weight="700">95%</text>
<text x="540" y="180.0" font-size="10.5" fill="#8a8a8a">Te asigna la AFAP</text>
<text x="540" y="194.0" font-size="10.5" fill="#8a8a8a">según tu edad</text>
<rect x="148" y="222" width="12" height="12" fill="#c47a1e" opacity="0.85" rx="2"/>
<text x="166" y="232" font-size="11" fill="#4a4a4a">Renta variable (acciones)</text>
<rect x="348" y="222" width="12" height="12" fill="#1d3557" opacity="0.85" rx="2"/>
<text x="366" y="232" font-size="11" fill="#4a4a4a">Bonos UI y deuda pública</text>
<text x="360" y="248" text-anchor="middle" font-size="9" fill="#8a8a8a" font-style="italic">Composición aproximada por subfondo · Fuente: Banco Central del Uruguay / AFAPs</text>
</svg>
    <p class="grafico-caption">Composición orientativa por subfondo según parámetros regulatorios del BCU — la asignación exacta varía por AFAP y condiciones de mercado. El cambio entre subfondos es automático según la edad del afiliado; no podés elegir mantener mayor exposición a renta variable una vez alcanzados los umbrales de edad.</p>
  </div>
</div>

<h3>En la AFAP, no controlás</h3>
<ul>
  <li>La rentabilidad del fondo — depende del mercado de bonos uruguayos y de las decisiones de inversión de cada AFAP</li>
  <li>El subfondo asignado — la AFAP te pasa automáticamente de Acumulación a Intermedio a Retiro según tu edad; no podés elegir mantener más riesgo</li>
  <li>Las comisiones — cada AFAP cobra una comisión sobre el salario aportado (entre 0,7% y 1,4% del salario bruto, aproximadamente); no es negociable</li>
  <li>La tasa actuarial al retiro — cuando convertís el capital acumulado en renta vitalicia, la tasa la fija el mercado asegurador</li>
</ul>

<h3>En la AFAP, sí controlás</h3>
<ul>
  <li><strong>Qué AFAP elegís</strong> — la diferencia de rentabilidad entre AFAPs, sostenida durante 30 años, puede representar miles de dólares de diferencia en el capital final</li>
  <li><strong>Si hacés aportes voluntarios</strong> — podés realizar depósitos adicionales a tu cuenta AFAP que se invierten y acumulan en la misma lógica que los obligatorios</li>
  <li><strong>Si cambiás de AFAP</strong> — podés solicitar el traspaso entre AFAPs una vez por año; en períodos de diferencias de rendimiento sostenidas, tiene sentido evaluarlo</li>
</ul>

<h2>El margen real</h2>

<p>Combinados, BPS y AFAP están diseñados para reemplazar una parte del ingreso activo — no todo. La tasa de sustitución efectiva del sistema ronda el 54% del salario en promedio, pero esa cifra supone que se completaron todos los años de aporte. Para quien tiene lagunas o períodos informales, puede ser mucho menos.</p>

<p>Lo que el sistema no reemplaza — ni puede reemplazar dada su estructura — es lo que define la necesidad de ahorro propio. Pero ese es tema de otro artículo.</p>

<p>Lo que importa acá: dentro de cada pilar, el margen de acción existe. No es neutro qué AFAP elegís, si completás los años de aporte, si tenés lagunas o si hacés aportes voluntarios. Son decisiones concretas que afectan el resultado final — y que la mayoría de las personas nunca toma activamente porque no entiende cómo funciona el sistema que les descuenta todos los meses.</p>

<div class="fuentes">
  <h3>Fuentes</h3>
  <p><strong>BPS / Observatorio de Seguridad Social (oct. 2025).</strong> Relación activo/pasivo, jubilación promedio y jubilación mínima.<br>
  <a href="https://www.bps.gub.uy" target="_blank">bps.gub.uy →</a></p>
  <p><strong>Banco Central del Uruguay (2025).</strong> Rentabilidad y composición de subfondos AFAP. Regulación del sistema previsional mixto.<br>
  <a href="https://www.bcu.gub.uy" target="_blank">bcu.gub.uy →</a></p>
  <p><strong>República AFAP (2025).</strong> Memoria Anual 2025. Rentabilidad histórica en Unidades Reajustables desde inicio del fondo.<br>
  <a href="https://www.republicaafap.com.uy" target="_blank">republicaafap.com.uy →</a></p>
  <p><strong>Ley 16.713 (1996) / Reforma previsional 2023.</strong> Marco normativo del sistema mixto de jubilaciones. Parlamento del Uruguay.<br>
  <a href="https://www.parlamento.gub.uy" target="_blank">parlamento.gub.uy →</a></p>
  <p><strong>CEPAL (2023).</strong> Panorama Social de América Latina. Cobertura previsional y densidad de cotización en Uruguay.<br>
  <a href="https://www.cepal.org" target="_blank">cepal.org →</a></p>
  <p><strong>INE (2025).</strong> Proyecciones demográficas. Instituto Nacional de Estadística, Uruguay.<br>
  <a href="https://www.ine.gub.uy" target="_blank">ine.gub.uy →</a></p>
</div>

`
      }}
    />
  );
}
