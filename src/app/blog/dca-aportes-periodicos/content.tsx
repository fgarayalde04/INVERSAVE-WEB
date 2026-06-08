/* eslint-disable */
export default function ArticleContent() {
  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{
        __html: `<h1>Dollar Cost Averaging: invertir de forma periódica sin intentar adivinar el mercado</h1>

  <p class="bajada">El DCA consiste en invertir una suma fija a intervalos regulares, independientemente del precio del mercado. No requiere adivinar el momento correcto. Requiere constancia.</p>

  <hr class="divider">

  <p>¿Conviene invertir todo de una o entrar de a poco?</p>

  <p>Es una de las preguntas que más aparece cuando el mercado está caro, volátil o incierto. La duda paraliza a muchos inversores — y esa parálisis termina siendo más costosa que cualquier decisión de entrada.</p>

  <p>El Dollar Cost Averaging es una respuesta práctica a esa pregunta. No es la respuesta perfecta. Es una forma de resolver el problema sin depender de una predicción.</p>

  <h2>Qué es el Dollar Cost Averaging</h2>

  <p>El Dollar Cost Averaging —DCA— consiste en <strong>invertir una cantidad fija de dinero a intervalos regulares</strong>, sin importar si el mercado está subiendo o bajando en ese momento.</p>

  <p>No se trata de invertir "cuando parece un buen momento". Se trata de invertir siempre, en el momento programado, con el mismo monto. Puede ser mensual, quincenal o semanal.</p>

  <p>Investopedia lo define como "una estrategia que consiste en invertir una suma fija de forma regular, independientemente del precio del activo" (Investopedia, 2024). Fidelity agrega que el objetivo es dividir la inversión en partes iguales a lo largo del tiempo, sin depender de la dirección inmediata del mercado (Fidelity, 2024).</p>

  <p>La idea no es nueva. La mayoría de quienes tienen un plan de pensiones o ahorran mes a mes ya practican alguna forma de DCA —aunque no lo llamen así.</p>

  <div class="callout">
    <p class="callout-label">Idea clave</p>
    <p>DCA = invertir <strong>una suma fija</strong>, en <strong>intervalos regulares</strong>, sin importar el precio del mercado. Sin predicciones. Sin esperar el momento perfecto.</p>
  </div>


  <h2>Cómo funciona cuando el mercado sube y baja</h2>

  <p>El mecanismo del DCA tiene una consecuencia matemática simple pero importante: <strong>cuando el precio baja, el mismo aporte compra más unidades</strong>. Cuando el precio sube, compra menos.</p>

  <p>El resultado es que, en un mercado volátil, el precio promedio de compra puede ser menor que el promedio aritmético de precios. No porque el inversor haya elegido bien los momentos, sino por efecto de la cantidad constante.</p>

  <p>Un ejemplo concreto con aporte mensual de <span class="dato">USD 200</span>:</p>

  <table class="tabla-dca">
    <thead>
      <tr>
        <th>Mes</th>
        <th>Precio por unidad</th>
        <th style="text-align:right">Unidades compradas</th>
        <th style="text-align:right">Aporte</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mes 1</td>
        <td>USD 10,00</td>
        <td class="num">20,00</td>
        <td class="num">USD 200</td>
      </tr>
      <tr>
        <td>Mes 2</td>
        <td>USD 8,00 <span style="font-size:0.8em; color:#8a8a8a">↓</span></td>
        <td class="num">25,00</td>
        <td class="num">USD 200</td>
      </tr>
      <tr>
        <td>Mes 3</td>
        <td>USD 12,00 <span style="font-size:0.8em; color:#8a8a8a">↑</span></td>
        <td class="num">16,67</td>
        <td class="num">USD 200</td>
      </tr>
      <tr class="total">
        <td><strong>Total</strong></td>
        <td>Precio promedio: <strong>USD 9,73</strong></td>
        <td class="num"><strong>61,67</strong></td>
        <td class="num"><strong>USD 600</strong></td>
      </tr>
    </tbody>
  </table>
  <p class="tabla-caption">El precio promedio ponderado por cantidad (USD 9,73) resulta menor que el promedio aritmético de los tres precios (USD 10,00), porque el mes de caída permitió comprar más unidades al precio más bajo.</p>

  
  <div class="callout callout-neutral">
    <p class="callout-label">Por qué importa el precio promedio</p>
    <p>En el ejemplo, el precio aritmético de los 3 meses es USD 10. Pero el precio promedio real de compra quedó en <strong>USD 9,73</strong> — porque el mes más barato generó más unidades que el mes más caro. Esa diferencia es el efecto matemático del DCA en mercados volátiles.</p>
  </div>

  <div class="grafico-wrap">
    <p class="grafico-label">Gráfico 1</p>
    <div style="background:#ffffff;border:1px solid #d8d0c8;border-radius:10px;overflow:hidden;box-shadow:0 3px 16px rgba(0,0,0,0.09);margin:2px 0 4px;"><svg viewBox="0 0 660 420" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect width="660" height="420" fill="#ffffff"/>
<text x="330" y="36" text-anchor="middle" fill="#1a1a1a" font-size="17" font-weight="bold" font-family="Georgia, serif">El mismo aporte compra distintas cantidades</text>
<text x="330" y="60" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">Aporte mensual fijo: USD 200 · El precio varía cada mes</text>
<line x1="62" y1="262.0" x2="624" y2="262.0" stroke="#f0f0ee" stroke-width="1"/>
<text x="52" y="266.0" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">10</text>
<line x1="62" y1="172.0" x2="624" y2="172.0" stroke="#f0f0ee" stroke-width="1"/>
<text x="52" y="176.0" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">20</text>
<line x1="62" y1="127.0" x2="624" y2="127.0" stroke="#f0f0ee" stroke-width="1"/>
<text x="52" y="131.0" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">25</text>
<text x="14" y="226" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif" transform="rotate(-90,14,226)">Unidades</text>
<rect x="92.7" y="175.0" width="78" height="180.0" fill="rgba(0,0,0,0.06)" rx="6"/>
<rect x="90.7" y="172.0" width="78" height="180.0" fill="#2d6a4f" rx="6"/>
<text x="129.7" y="146.0" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">USD 10</text>
<line x1="129.7" y1="152.0" x2="129.7" y2="165.0" stroke="#8a8a8a" stroke-width="1.2"/>
<text x="129.7" y="272.0" text-anchor="middle" fill="white" font-size="17" font-weight="bold" font-family="Georgia, serif">20</text>
<text x="129.7" y="374.0" text-anchor="middle" fill="#4a4a4a" font-size="12" font-family="Georgia, serif">Mes 1</text>
<rect x="199.3" y="130.0" width="78" height="225.0" fill="rgba(0,0,0,0.06)" rx="6"/>
<rect x="197.3" y="127.0" width="78" height="225.0" fill="#1d3557" rx="6"/>
<text x="236.3" y="101.0" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">USD 8</text>
<line x1="236.3" y1="107.0" x2="236.3" y2="120.0" stroke="#8a8a8a" stroke-width="1.2"/>
<text x="236.3" y="249.5" text-anchor="middle" fill="white" font-size="17" font-weight="bold" font-family="Georgia, serif">25</text>
<text x="236.3" y="374.0" text-anchor="middle" fill="#4a4a4a" font-size="12" font-family="Georgia, serif">Mes 2</text>
<rect x="289.3" y="131.0" width="148" height="40" fill="#1d3557" rx="6"/>
<text x="297.3" y="146.0" fill="white" font-size="11" font-weight="bold" font-family="Georgia, serif">Precio más bajo:</text>
<text x="297.3" y="162.0" fill="white" font-size="11" font-family="Georgia, serif">más unidades compradas</text>
<rect x="306.0" y="204.7" width="78" height="150.3" fill="rgba(0,0,0,0.06)" rx="6"/>
<rect x="304.0" y="201.7" width="78" height="150.3" fill="#2d6a4f" rx="6"/>
<text x="343.0" y="175.7" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">USD 12</text>
<line x1="343.0" y1="181.7" x2="343.0" y2="194.7" stroke="#8a8a8a" stroke-width="1.2"/>
<text x="343.0" y="286.9" text-anchor="middle" fill="white" font-size="17" font-weight="bold" font-family="Georgia, serif">17</text>
<text x="343.0" y="374.0" text-anchor="middle" fill="#4a4a4a" font-size="12" font-family="Georgia, serif">Mes 3</text>
<rect x="412.7" y="155.2" width="78" height="199.8" fill="rgba(0,0,0,0.06)" rx="6"/>
<rect x="410.7" y="152.2" width="78" height="199.8" fill="#2d6a4f" rx="6"/>
<text x="449.7" y="126.2" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">USD 9</text>
<line x1="449.7" y1="132.2" x2="449.7" y2="145.2" stroke="#8a8a8a" stroke-width="1.2"/>
<text x="449.7" y="262.1" text-anchor="middle" fill="white" font-size="17" font-weight="bold" font-family="Georgia, serif">22</text>
<text x="449.7" y="374.0" text-anchor="middle" fill="#4a4a4a" font-size="12" font-family="Georgia, serif">Mes 4</text>
<rect x="519.3" y="191.2" width="78" height="163.8" fill="rgba(0,0,0,0.06)" rx="6"/>
<rect x="517.3" y="188.2" width="78" height="163.8" fill="#2d6a4f" rx="6"/>
<text x="556.3" y="162.2" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">USD 11</text>
<line x1="556.3" y1="168.2" x2="556.3" y2="181.2" stroke="#8a8a8a" stroke-width="1.2"/>
<text x="556.3" y="280.1" text-anchor="middle" fill="white" font-size="17" font-weight="bold" font-family="Georgia, serif">18</text>
<text x="556.3" y="374.0" text-anchor="middle" fill="#4a4a4a" font-size="12" font-family="Georgia, serif">Mes 5</text>
<text x="343.0" y="402.0" text-anchor="middle" fill="#2d6a4f" font-size="11.5" font-family="Georgia, serif" font-style="italic">El aporte no cambia. Lo que cambia es cuántas unidades comprás según el precio del mes.</text>
</svg></div>
    <p class="grafico-caption">Con aporte fijo, la cantidad de unidades compradas varía inversamente con el precio. Los meses de caída generan más unidades; los meses de suba, menos. El precio promedio resultante tiende a ser inferior al promedio aritmético de precios.</p>
  </div>

  <h2>Por qué puede ser útil en mercados volátiles</h2>

  <p>Una de las decisiones más difíciles al invertir no es elegir en qué invertir. Es elegir <em>cuándo</em> entrar. El temor a invertir todo justo antes de una caída lleva a muchos a postergar indefinidamente.</p>

  <p>Vanguard señala que una ventaja del DCA es "reducir el riesgo de invertir una suma grande justo antes de una caída del mercado" (Vanguard, 2024).</p>

  <p>El DCA distribuye ese riesgo en el tiempo: si el mercado cae después de la primera compra, las siguientes compras se hacen a precios más bajos.</p>

  <p>Hay también un efecto conductual. Charles Schwab explica que el DCA "convierte la inversión en un proceso sistemático" (Schwab, 2024): ya no se trata de decidir cada mes si conviene o no invertir, sino de ejecutar un plan. Eso reduce los dos sesgos más comunes: el miedo a entrar en un mal momento y la euforia de entrar en uno aparentemente perfecto.</p>

  <p>Para quien genera ingresos todos los meses, el DCA también es la forma más natural de invertir: se ahorra lo que corresponde, se invierte en la fecha acordada, y se repite.</p>

  <div class="grafico-wrap">
    <p class="grafico-label">Gráfico 2</p>
    <div style="background:#ffffff;border:1px solid #d8d0c8;border-radius:10px;overflow:hidden;box-shadow:0 3px 16px rgba(0,0,0,0.09);margin:2px 0 4px;"><svg viewBox="0 0 660 420" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect width="660" height="420" fill="#ffffff"/>
<text x="330" y="34" text-anchor="middle" fill="#1a1a1a" font-size="17" font-weight="bold" font-family="Georgia, serif">Cuando el precio baja, comprás más unidades</text>
<text x="330" y="58" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">12 meses · aporte fijo USD 200 · precio variable</text>
<line x1="66" y1="306.2" x2="594" y2="306.2" stroke="#f0f0ee" stroke-width="1"/>
<line x1="66" y1="241.2" x2="594" y2="241.2" stroke="#f0f0ee" stroke-width="1"/>
<line x1="66" y1="176.2" x2="594" y2="176.2" stroke="#f0f0ee" stroke-width="1"/>
<line x1="66" y1="111.2" x2="594" y2="111.2" stroke="#f0f0ee" stroke-width="1"/>
<path d="M66.0,285.9 C82.0,273.7 98.0,264.1 114.0,249.1 C130.0,234.1 146.0,216.3 162.0,195.7 C178.0,175.1 194.0,122.7 210.0,125.5 C226.0,128.4 242.0,188.3 258.0,212.8 C274.0,237.4 290.0,256.9 306.0,272.9 C322.0,288.9 338.0,305.2 354.0,308.6 C370.0,312.0 386.0,304.2 402.0,293.2 C418.0,282.1 434.0,261.1 450.0,242.5 C466.0,223.9 482.0,179.0 498.0,181.7 C514.0,184.3 530.0,235.7 546.0,258.5 C562.0,281.3 578.0,298.5 594.0,318.5 L594.0,355.0 L66.0,355.0 Z" fill="#d8f3dc" opacity="0.9"/>
<path d="M66.0,285.9 C82.0,273.7 98.0,264.1 114.0,249.1 C130.0,234.1 146.0,216.3 162.0,195.7 C178.0,175.1 194.0,122.7 210.0,125.5 C226.0,128.4 242.0,188.3 258.0,212.8 C274.0,237.4 290.0,256.9 306.0,272.9 C322.0,288.9 338.0,305.2 354.0,308.6 C370.0,312.0 386.0,304.2 402.0,293.2 C418.0,282.1 434.0,261.1 450.0,242.5 C466.0,223.9 482.0,179.0 498.0,181.7 C514.0,184.3 530.0,235.7 546.0,258.5 C562.0,281.3 578.0,298.5 594.0,318.5" fill="none" stroke="#74c69d" stroke-width="2.5"/>
<path d="M66.0,192.5 C82.0,206.6 98.0,220.1 114.0,234.8 C130.0,249.4 146.0,265.6 162.0,280.2 C178.0,294.9 194.0,324.7 210.0,322.5 C226.0,320.3 242.0,286.2 258.0,267.2 C274.0,248.3 290.0,226.6 306.0,208.8 C322.0,190.9 338.0,164.3 354.0,160.0 C370.0,155.7 386.0,169.2 402.0,182.7 C418.0,196.3 434.0,223.4 450.0,241.2 C466.0,259.1 482.0,292.7 498.0,290.0 C514.0,287.3 530.0,249.4 546.0,225.0 C562.0,200.6 578.0,170.8 594.0,143.8" fill="none" stroke="#2d6a4f" stroke-width="3"/>
<circle cx="66.0" cy="192.5" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="114.0" cy="234.8" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="162.0" cy="280.2" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="210.0" cy="322.5" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="258.0" cy="267.2" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="306.0" cy="208.8" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="354.0" cy="160.0" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="402.0" cy="182.7" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="450.0" cy="241.2" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="498.0" cy="290.0" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="546.0" cy="225.0" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="594.0" cy="143.8" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<text x="66.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Ene</text>
<text x="114.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Feb</text>
<text x="162.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Mar</text>
<text x="210.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Abr</text>
<text x="258.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">May</text>
<text x="306.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Jun</text>
<text x="354.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Jul</text>
<text x="402.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Ago</text>
<text x="450.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Sep</text>
<text x="498.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Oct</text>
<text x="546.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Nov</text>
<text x="594.0" y="375.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Dic</text>
<text x="56" y="310.2" text-anchor="end" fill="#2d6a4f" font-size="11" font-family="Georgia, serif">7</text>
<text x="56" y="245.2" text-anchor="end" fill="#2d6a4f" font-size="11" font-family="Georgia, serif">9</text>
<text x="56" y="180.2" text-anchor="end" fill="#2d6a4f" font-size="11" font-family="Georgia, serif">11</text>
<text x="56" y="115.2" text-anchor="end" fill="#2d6a4f" font-size="11" font-family="Georgia, serif">13</text>
<text x="14" y="225" text-anchor="middle" fill="#2d6a4f" font-size="11" font-family="Georgia, serif" transform="rotate(-90,14,225)">Precio (USD)</text>
<text x="604" y="304.3" fill="#74c69d" font-size="11" font-family="Georgia, serif">18</text>
<text x="604" y="249.5" fill="#74c69d" font-size="11" font-family="Georgia, serif">22</text>
<text x="604" y="194.8" fill="#74c69d" font-size="11" font-family="Georgia, serif">26</text>
<text x="604" y="140.1" fill="#74c69d" font-size="11" font-family="Georgia, serif">30</text>
<text x="646" y="225" text-anchor="middle" fill="#74c69d" font-size="11" font-family="Georgia, serif" transform="rotate(90,646,225)">Unidades</text>
<rect x="84" y="105" width="14" height="3.5" fill="#2d6a4f" rx="1"/>
<text x="104" y="114" fill="#4a4a4a" font-size="11" font-family="Georgia, serif">Precio del activo</text>
<rect x="232" y="101" width="14" height="14" fill="#d8f3dc" stroke="#74c69d" stroke-width="1.5" rx="2"/>
<text x="252" y="112" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Unidades compradas</text>
<line x1="210.0" y1="312.5" x2="210.0" y2="135.5" stroke="#1d3557" stroke-width="1.5" stroke-dasharray="3,2"/>
<rect x="220.0" y="208.0" width="118" height="32" fill="#1d3557" rx="5"/>
<text x="226.0" y="222.0" fill="white" font-size="10.5" font-family="Georgia, serif">Precio min. →</text>
<text x="226.0" y="237.0" fill="white" font-size="10.5" font-family="Georgia, serif">unidades max.</text>
</svg></div>
    <p class="grafico-caption">Durante períodos de caída sostenida — como 2008 o 2002 — quien mantuvo aportes periódicos continuó acumulando unidades a precios bajos. La recuperación posterior amplificó el valor de esas unidades compradas en el piso.</p>
  </div>

  <h2>Lo que el DCA no hace</h2>

  <p>El DCA no es una estrategia que garantice resultados. Antes de adoptarla, conviene entender sus límites con claridad.</p>

  <ul>
    <li><strong>No garantiza rentabilidad.</strong> Si el activo pierde valor de forma permanente, el DCA sólo habrá distribuido la pérdida en el tiempo. La calidad del activo subyacente sigue siendo el factor principal.</li>
    <li><strong>No elimina el riesgo de mercado.</strong> Schwab aclara que el DCA "no garantiza ganancias ni protege contra pérdidas en mercados bajistas" (Schwab, 2024). Los aportes periódicos no cambian el comportamiento del mercado.</li>
    <li><strong>No siempre supera a invertir todo de una.</strong> Vanguard publicó un análisis que muestra que, históricamente, invertir la totalidad del capital disponible al inicio suele superar al DCA en <strong>aproximadamente dos tercios de los períodos analizados</strong> (Vanguard, Invest Now or Temporarily Hold Your Cash?, 2023). La razón es sencilla: el mercado sube la mayoría del tiempo, y quien espera para ir entrando de a poco sacrifica exposición anticipada.</li>
    <li><strong>No reemplaza una estrategia de largo plazo.</strong> El DCA es una táctica de entrada, no un plan de inversión completo. La diversificación, el horizonte de tiempo y el perfil de riesgo siguen siendo los factores que definen los resultados.</li>
  </ul>

  <h2>DCA vs. invertir todo de una</h2>

  
  <div class="callout callout-warn">
    <p class="callout-label">Límite importante</p>
    <p>El DCA <strong>no garantiza rentabilidad</strong> ni elimina el riesgo de mercado. Si el activo cae de forma permanente, el DCA distribuye la pérdida en el tiempo — no la evita. La calidad del activo subyacente sigue siendo el factor decisivo.</p>
  </div>

  <p>El debate entre DCA y lump sum (invertir toda la suma disponible de inmediato) depende fundamentalmente de la situación de cada persona.</p>

  <p><strong>Si ya se tiene todo el capital disponible:</strong> históricamente, invertir todo de una tiende a dar mejores resultados en el largo plazo. El S&amp;P 500 ha sido positivo el <span class="dato">73,5%</span> de los años desde 1928 (NYU Stern, 2025). Quien espera para entrar de a poco suele perder parte de ese avance.</p>

  <p><strong>Si se generan ingresos mes a mes:</strong> el DCA no es una elección táctica — es la única opción real. No se puede invertir todo de una lo que aún no se tiene. La pregunta deja de ser "¿DCA o lump sum?" y pasa a ser "¿invierto este mes o espero?".</p>

  <p><strong>Si la volatilidad genera parálisis:</strong> el DCA puede ser la diferencia entre empezar a invertir y no empezar nunca. Un plan que se ejecuta con resultados moderados es mejor que un plan perfecto que nunca arranca.</p>

  <div class="grafico-wrap">
    <p class="grafico-label">Gráfico 3</p>
    <div style="background:#ffffff;border:1px solid #d8d0c8;border-radius:10px;overflow:hidden;box-shadow:0 3px 16px rgba(0,0,0,0.09);margin:2px 0 4px;"><svg viewBox="0 0 660 440" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect width="660" height="440" fill="#ffffff"/>
<rect x="64" y="96" width="230.0" height="268" fill="#fff4f4" opacity="0.7"/>
<rect x="294.0" y="96" width="322.0" height="268" fill="#f0faf4" opacity="0.7"/>
<text x="78" y="118" fill="#b44" font-size="11" font-family="Georgia, serif" font-weight="bold">CAÍDA DEL MERCADO</text>
<text x="308.0" y="118" fill="#40916c" font-size="11" font-family="Georgia, serif" font-weight="bold">RECUPERACIÓN</text>
<text x="330" y="36" text-anchor="middle" fill="#1a1a1a" font-size="17" font-weight="bold" font-family="Georgia, serif">Qué pasa si el mercado cae después de empezar</text>
<text x="330" y="60" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">Aporte mensual USD 200 · 24 meses · escenario ilustrativo</text>
<line x1="294.0" y1="96" x2="294.0" y2="364" stroke="#f0f0ee" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="64" y1="330.5" x2="616" y2="330.5" stroke="#f0f0ee" stroke-width="1"/>
<text x="54" y="334.5" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">60</text>
<line x1="64" y1="274.7" x2="616" y2="274.7" stroke="#f0f0ee" stroke-width="1"/>
<text x="54" y="278.7" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">80</text>
<line x1="64" y1="218.8" x2="616" y2="218.8" stroke="#f0f0ee" stroke-width="1"/>
<text x="54" y="222.8" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">100</text>
<line x1="64" y1="163.0" x2="616" y2="163.0" stroke="#f0f0ee" stroke-width="1"/>
<text x="54" y="167.0" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">120</text>
<path d="M64.0,218.8 C71.7,221.4 79.3,223.6 87.0,226.6 C94.7,229.5 102.3,232.8 110.0,236.7 C117.7,240.6 125.3,245.3 133.0,250.2 C140.7,255.1 148.3,260.8 156.0,266.1 C163.7,271.3 171.3,276.9 179.0,281.7 C186.7,286.5 194.3,291.0 202.0,294.7 C209.7,298.5 217.3,301.6 225.0,304.4 C232.7,307.3 240.3,309.4 248.0,312.0 C255.7,314.6 263.3,316.8 271.0,319.9 C278.7,323.0 286.3,329.7 294.0,330.6 C301.7,331.4 309.3,326.6 317.0,325.0 C324.7,323.5 332.3,322.8 340.0,321.5 C347.7,320.2 355.3,319.2 363.0,317.4 C370.7,315.5 378.3,313.3 386.0,310.5 C393.7,307.6 401.3,303.9 409.0,300.2 C416.7,296.5 424.3,292.0 432.0,288.2 C439.7,284.3 447.3,280.2 455.0,276.9 C462.7,273.6 470.3,270.8 478.0,268.5 C485.7,266.3 493.3,264.8 501.0,263.4 C508.7,262.0 516.3,261.3 524.0,260.0 C531.7,258.7 539.3,257.5 547.0,255.5 C554.7,253.6 562.3,251.1 570.0,248.1 C577.7,245.1 585.3,241.3 593.0,237.5 C600.7,233.7 608.3,229.4 616.0,225.4 L616.0,364.0 L64.0,364.0 Z" fill="#2d6a4f" opacity="0.06"/>
<path d="M64.0,218.8 C71.7,221.4 79.3,223.6 87.0,226.6 C94.7,229.5 102.3,232.8 110.0,236.7 C117.7,240.6 125.3,245.3 133.0,250.2 C140.7,255.1 148.3,260.8 156.0,266.1 C163.7,271.3 171.3,276.9 179.0,281.7 C186.7,286.5 194.3,291.0 202.0,294.7 C209.7,298.5 217.3,301.6 225.0,304.4 C232.7,307.3 240.3,309.4 248.0,312.0 C255.7,314.6 263.3,316.8 271.0,319.9 C278.7,323.0 286.3,329.7 294.0,330.6 C301.7,331.4 309.3,326.6 317.0,325.0 C324.7,323.5 332.3,322.8 340.0,321.5 C347.7,320.2 355.3,319.2 363.0,317.4 C370.7,315.5 378.3,313.3 386.0,310.5 C393.7,307.6 401.3,303.9 409.0,300.2 C416.7,296.5 424.3,292.0 432.0,288.2 C439.7,284.3 447.3,280.2 455.0,276.9 C462.7,273.6 470.3,270.8 478.0,268.5 C485.7,266.3 493.3,264.8 501.0,263.4 C508.7,262.0 516.3,261.3 524.0,260.0 C531.7,258.7 539.3,257.5 547.0,255.5 C554.7,253.6 562.3,251.1 570.0,248.1 C577.7,245.1 585.3,241.3 593.0,237.5 C600.7,233.7 608.3,229.4 616.0,225.4" fill="none" stroke="#2d6a4f" stroke-width="3.2"/>
<circle cx="64.0" cy="218.8" r="6.0" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="87.0" cy="226.6" r="6.4" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="110.0" cy="236.7" r="7.0" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="133.0" cy="250.2" r="7.9" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="156.0" cy="266.1" r="9.1" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="179.0" cy="281.7" r="10.4" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="202.0" cy="294.7" r="11.6" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="225.0" cy="304.4" r="12.6" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="248.0" cy="312.0" r="13.5" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="271.0" cy="319.9" r="14.5" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="294.0" cy="330.6" r="16.0" fill="#b44" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="317.0" cy="325.0" r="15.2" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="340.0" cy="321.5" r="14.7" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="363.0" cy="317.4" r="14.2" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="386.0" cy="310.5" r="13.3" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="409.0" cy="300.2" r="12.2" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="432.0" cy="288.2" r="11.0" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="455.0" cy="276.9" r="9.9" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="478.0" cy="268.5" r="9.2" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="501.0" cy="263.4" r="8.8" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="524.0" cy="260.0" r="8.6" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="547.0" cy="255.5" r="8.3" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="570.0" cy="248.1" r="7.8" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="593.0" cy="237.5" r="7.1" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<circle cx="616.0" cy="225.4" r="6.4" fill="#40916c" opacity="0.72" stroke="white" stroke-width="1.8"/>
<text x="64.0" y="386.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Mes 1</text>
<text x="202.0" y="386.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Mes 7</text>
<text x="340.0" y="386.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Mes 13</text>
<text x="478.0" y="386.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Mes 19</text>
<text x="616.0" y="386.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Mes 25</text>
<line x1="294.0" y1="346.6" x2="294.0" y2="380.6" stroke="#1d3557" stroke-width="1.5"/>
<rect x="222.0" y="383.6" width="144" height="18" fill="#1d3557" rx="4"/>
<text x="294.0" y="396.6" text-anchor="middle" fill="white" font-size="10.5" font-family="Georgia, serif">Precio piso: máximas unidades</text>
<circle cx="76" cy="414" r="7" fill="#2d6a4f" opacity="0.72"/>
<text x="88" y="418" fill="#4a4a4a" font-size="11" font-family="Georgia, serif">Compra mensual (tamaño = unidades)</text>
<line x1="324" y1="414" x2="346" y2="414" stroke="#2d6a4f" stroke-width="3"/>
<text x="352" y="418" fill="#4a4a4a" font-size="11" font-family="Georgia, serif">Precio del activo</text>
<text x="330" y="432" text-anchor="middle" fill="#8a8a8a" font-size="9.5" font-family="Georgia, serif" font-style="italic">Ejemplo educativo. No garantiza resultados.</text>
</svg></div>
    <p class="grafico-caption">En mercados con tendencia alcista sostenida, la inversión inicial única genera mayor exposición desde el primer día. El DCA reduce esa exposición inicial pero permite construir posición gradualmente, con menor impacto emocional ante caídas tempranas.</p>
  </div>

  <h2>Qué muestran los datos históricos del S&amp;P 500</h2>

  <p>Los datos de largo plazo permiten hacer una evaluación más objetiva del DCA. Usando datos del S&amp;P 500 entre 1928 y 2025, con aportes mensuales de <span class="dato">USD 100</span>:</p>

  <ul>
    <li>En períodos de <strong>15 años</strong>, el 98,8% de los casos terminó con un valor superior al capital aportado — sólo un período (1929–1943, la Gran Depresión) generó una pérdida marginal de capital (NYU / análisis propio, 2025).</li>
    <li>En períodos de <strong>20 años</strong>, el 100% de los casos terminó positivo — en todos los casos el capital aportado de USD 24.000 terminó valiendo más (NYU / análisis propio, 2025).</li>
    <li>En períodos de <strong>30 años</strong>, el capital aportado de USD 36.000 multiplicó entre <strong>10x y 46x</strong> según el período. El resultado mediano fue de 21,7 veces el capital invertido (NYU / análisis propio, 2025).</li>
  </ul>

  <p>Hay que ser precisos: estos resultados corresponden al S&amp;P 500 en dólares, sin ajuste por inflación, y no incluyen comisiones ni impuestos. El pasado no garantiza el futuro.</p>

  <p>Pero los datos sugieren que <strong>el tiempo en el mercado, sostenido por aportes periódicos, ha sido históricamente más relevante que el momento de entrada</strong>.</p>

  <p style="font-size:0.875rem;color:#6a6a6a;background:#f5f4f0;border-left:3px solid #d8d0c8;padding:0.75rem 1rem;margin:1.2rem 0 1.8rem"><em><strong>Nota metodológica:</strong> los análisis de períodos de 15, 20 y 30 años se calcularon aplicando aportes mensuales de USD 100 a los retornos anuales históricos del S&amp;P 500 según los datos de NYU Stern / Damodaran (2025). Los retornos anuales se convirtieron a equivalente mensual. Los resultados no incluyen comisiones de corretaje, impuestos sobre ganancias ni ajuste por inflación. El S&amp;P 500 es un índice de acciones estadounidenses; los resultados pueden diferir significativamente en otros mercados o períodos. Los datos históricos no predicen resultados futuros.</em></p>

  <h2>Qué significa para quien ahorra todos los meses</h2>

  <p>La mayoría de las personas no tiene una suma grande disponible para invertir. Tiene un ingreso mensual, un porcentaje que puede destinar al ahorro, y la pregunta de qué hacer con ese dinero.</p>

  <p>Para esa persona, el DCA no es una estrategia sofisticada. Es la traducción directa del ahorro mensual en inversión periódica. La clave no es la técnica — es la constancia, el horizonte de tiempo y la diversificación del activo elegido.</p>

  <p>Invertir USD 100 o USD 200 todos los meses durante 20 o 30 años no requiere predecir nada. Requiere un plan, una plataforma, y no interrumpir el proceso cuando el mercado asusta.</p>

  <ul>
    <li>El mercado caerá en algún momento. Con DCA, esa caída compra más unidades.</li>
    <li>El mercado subirá en algún momento. Con DCA, esas unidades acumuladas valen más.</li>
    <li>Uno de los principales riesgos es vender en malos momentos o interrumpir los aportes cuando el mercado cae.</li>
  </ul>

  <p>El DCA no elimina el riesgo de invertir. Pero puede ayudar a resolver uno de los problemas más comunes del inversor: esperar eternamente el momento perfecto.</p>

  
  <div class="grafico-wrap">
    <p class="grafico-label">Gráfico 4</p>
    <div style="background:#ffffff;border:1px solid #d8d0c8;border-radius:10px;overflow:hidden;box-shadow:0 3px 16px rgba(0,0,0,0.09);margin:2px 0 4px;"><svg viewBox="0 0 660 440" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="gf5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2d6a4f" stop-opacity="0.22"/><stop offset="100%" stop-color="#2d6a4f" stop-opacity="0.02"/></linearGradient></defs>
<rect width="660" height="440" fill="#ffffff"/>
<text x="330" y="36" text-anchor="middle" fill="#1a1a1a" font-size="17" font-weight="bold" font-family="Georgia, serif">El tiempo amplifica la diferencia</text>
<text x="330" y="60" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">DCA USD 100/mes · 30 años · retorno anual hipotético 9,5% · ejemplo hipotético, no histórico</text>
<line x1="76" y1="302.6" x2="616" y2="302.6" stroke="#f0f0ee" stroke-width="1"/>
<text x="66" y="306.6" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">USD 50k</text>
<line x1="76" y1="233.2" x2="616" y2="233.2" stroke="#f0f0ee" stroke-width="1"/>
<text x="66" y="237.2" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">USD 100k</text>
<line x1="76" y1="163.7" x2="616" y2="163.7" stroke="#f0f0ee" stroke-width="1"/>
<text x="66" y="167.7" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">USD 150k</text>
<path d="M76.0,371.9 C79.0,371.6 82.0,371.3 85.0,371.0 C88.0,370.7 91.0,370.4 94.0,370.1 C97.0,369.8 100.0,369.5 103.0,369.2 C106.0,368.9 109.0,368.5 112.0,368.2 C115.0,367.9 118.0,367.5 121.0,367.2 C124.0,366.8 127.0,366.5 130.0,366.1 C133.0,365.7 136.0,365.4 139.0,365.0 C142.0,364.6 145.0,364.2 148.0,363.8 C151.0,363.4 154.0,363.0 157.0,362.6 C160.0,362.1 163.0,361.7 166.0,361.3 C169.0,360.8 172.0,360.4 175.0,359.9 C178.0,359.5 181.0,359.0 184.0,358.5 C187.0,358.0 190.0,357.6 193.0,357.0 C196.0,356.5 199.0,356.0 202.0,355.5 C205.0,355.0 208.0,354.4 211.0,353.9 C214.0,353.3 217.0,352.8 220.0,352.2 C223.0,351.6 226.0,351.0 229.0,350.4 C232.0,349.8 235.0,349.2 238.0,348.6 C241.0,348.0 244.0,347.3 247.0,346.6 C250.0,346.0 253.0,345.3 256.0,344.6 C259.0,343.9 262.0,343.2 265.0,342.5 C268.0,341.8 271.0,341.0 274.0,340.3 C277.0,339.5 280.0,338.8 283.0,338.0 C286.0,337.2 289.0,336.4 292.0,335.5 C295.0,334.7 298.0,333.9 301.0,333.0 C304.0,332.1 307.0,331.2 310.0,330.3 C313.0,329.4 316.0,328.5 319.0,327.5 C322.0,326.6 325.0,325.6 328.0,324.6 C331.0,323.6 334.0,322.6 337.0,321.6 C340.0,320.5 343.0,319.5 346.0,318.4 C349.0,317.3 352.0,316.2 355.0,315.1 C358.0,313.9 361.0,312.8 364.0,311.6 C367.0,310.4 370.0,309.2 373.0,307.9 C376.0,306.7 379.0,305.4 382.0,304.1 C385.0,302.8 388.0,301.4 391.0,300.1 C394.0,298.7 397.0,297.3 400.0,295.9 C403.0,294.5 406.0,293.0 409.0,291.5 C412.0,290.0 415.0,288.5 418.0,286.9 C421.0,285.4 424.0,283.8 427.0,282.1 C430.0,280.5 433.0,278.8 436.0,277.1 C439.0,275.4 442.0,273.6 445.0,271.9 C448.0,270.1 451.0,268.2 454.0,266.4 C457.0,264.5 460.0,262.6 463.0,260.6 C466.0,258.6 469.0,256.6 472.0,254.6 C475.0,252.5 478.0,250.4 481.0,248.3 C484.0,246.1 487.0,243.9 490.0,241.7 C493.0,239.4 496.0,237.1 499.0,234.8 C502.0,232.4 505.0,230.0 508.0,227.6 C511.0,225.1 514.0,222.6 517.0,220.0 C520.0,217.4 523.0,214.8 526.0,212.1 C529.0,209.4 532.0,206.7 535.0,203.8 C538.0,201.0 541.0,198.1 544.0,195.2 C547.0,192.2 550.0,189.2 553.0,186.1 C556.0,183.0 559.0,179.9 562.0,176.7 C565.0,173.4 568.0,170.1 571.0,166.7 C574.0,163.4 577.0,159.9 580.0,156.4 C583.0,152.8 586.0,149.2 589.0,145.5 C592.0,141.8 595.0,138.0 598.0,134.1 C601.0,130.3 604.0,126.3 607.0,122.2 C610.0,118.2 613.0,113.9 616.0,109.8 L616.0,372.0 L76.0,372.0 Z" fill="url(#gf5)"/>
<path d="M76.0,371.9 C79.0,371.6 82.0,371.3 85.0,371.0 C88.0,370.8 91.0,370.5 94.0,370.2 C97.0,369.9 100.0,369.6 103.0,369.4 C106.0,369.1 109.0,368.8 112.0,368.5 C115.0,368.3 118.0,368.0 121.0,367.7 C124.0,367.4 127.0,367.1 130.0,366.9 C133.0,366.6 136.0,366.3 139.0,366.0 C142.0,365.8 145.0,365.5 148.0,365.2 C151.0,364.9 154.0,364.6 157.0,364.4 C160.0,364.1 163.0,363.8 166.0,363.5 C169.0,363.3 172.0,363.0 175.0,362.7 C178.0,362.4 181.0,362.1 184.0,361.9 C187.0,361.6 190.0,361.3 193.0,361.0 C196.0,360.8 199.0,360.5 202.0,360.2 C205.0,359.9 208.0,359.6 211.0,359.4 C214.0,359.1 217.0,358.8 220.0,358.5 C223.0,358.3 226.0,358.0 229.0,357.7 C232.0,357.4 235.0,357.1 238.0,356.9 C241.0,356.6 244.0,356.3 247.0,356.0 C250.0,355.8 253.0,355.5 256.0,355.2 C259.0,354.9 262.0,354.6 265.0,354.4 C268.0,354.1 271.0,353.8 274.0,353.5 C277.0,353.3 280.0,353.0 283.0,352.7 C286.0,352.4 289.0,352.1 292.0,351.9 C295.0,351.6 298.0,351.3 301.0,351.0 C304.0,350.8 307.0,350.5 310.0,350.2 C313.0,349.9 316.0,349.6 319.0,349.4 C322.0,349.1 325.0,348.8 328.0,348.5 C331.0,348.3 334.0,348.0 337.0,347.7 C340.0,347.4 343.0,347.1 346.0,346.9 C349.0,346.6 352.0,346.3 355.0,346.0 C358.0,345.8 361.0,345.5 364.0,345.2 C367.0,344.9 370.0,344.6 373.0,344.4 C376.0,344.1 379.0,343.8 382.0,343.5 C385.0,343.3 388.0,343.0 391.0,342.7 C394.0,342.4 397.0,342.1 400.0,341.9 C403.0,341.6 406.0,341.3 409.0,341.0 C412.0,340.8 415.0,340.5 418.0,340.2 C421.0,339.9 424.0,339.6 427.0,339.4 C430.0,339.1 433.0,338.8 436.0,338.5 C439.0,338.3 442.0,338.0 445.0,337.7 C448.0,337.4 451.0,337.1 454.0,336.9 C457.0,336.6 460.0,336.3 463.0,336.0 C466.0,335.8 469.0,335.5 472.0,335.2 C475.0,334.9 478.0,334.6 481.0,334.4 C484.0,334.1 487.0,333.8 490.0,333.5 C493.0,333.3 496.0,333.0 499.0,332.7 C502.0,332.4 505.0,332.2 508.0,331.9 C511.0,331.6 514.0,331.3 517.0,331.0 C520.0,330.8 523.0,330.5 526.0,330.2 C529.0,329.9 532.0,329.7 535.0,329.4 C538.0,329.1 541.0,328.8 544.0,328.5 C547.0,328.3 550.0,328.0 553.0,327.7 C556.0,327.4 559.0,327.2 562.0,326.9 C565.0,326.6 568.0,326.3 571.0,326.0 C574.0,325.8 577.0,325.5 580.0,325.2 C583.0,324.9 586.0,324.7 589.0,324.4 C592.0,324.1 595.0,323.8 598.0,323.5 C601.0,323.3 604.0,323.0 607.0,322.7 C610.0,322.4 613.0,322.2 616.0,321.9 L616.0,372.0 L76.0,372.0 Z" fill="#1d3557" opacity="0.07"/>
<path d="M76.0,371.9 C79.0,371.6 82.0,371.3 85.0,371.0 C88.0,370.7 91.0,370.4 94.0,370.1 C97.0,369.8 100.0,369.5 103.0,369.2 C106.0,368.9 109.0,368.5 112.0,368.2 C115.0,367.9 118.0,367.5 121.0,367.2 C124.0,366.8 127.0,366.5 130.0,366.1 C133.0,365.7 136.0,365.4 139.0,365.0 C142.0,364.6 145.0,364.2 148.0,363.8 C151.0,363.4 154.0,363.0 157.0,362.6 C160.0,362.1 163.0,361.7 166.0,361.3 C169.0,360.8 172.0,360.4 175.0,359.9 C178.0,359.5 181.0,359.0 184.0,358.5 C187.0,358.0 190.0,357.6 193.0,357.0 C196.0,356.5 199.0,356.0 202.0,355.5 C205.0,355.0 208.0,354.4 211.0,353.9 C214.0,353.3 217.0,352.8 220.0,352.2 C223.0,351.6 226.0,351.0 229.0,350.4 C232.0,349.8 235.0,349.2 238.0,348.6 C241.0,348.0 244.0,347.3 247.0,346.6 C250.0,346.0 253.0,345.3 256.0,344.6 C259.0,343.9 262.0,343.2 265.0,342.5 C268.0,341.8 271.0,341.0 274.0,340.3 C277.0,339.5 280.0,338.8 283.0,338.0 C286.0,337.2 289.0,336.4 292.0,335.5 C295.0,334.7 298.0,333.9 301.0,333.0 C304.0,332.1 307.0,331.2 310.0,330.3 C313.0,329.4 316.0,328.5 319.0,327.5 C322.0,326.6 325.0,325.6 328.0,324.6 C331.0,323.6 334.0,322.6 337.0,321.6 C340.0,320.5 343.0,319.5 346.0,318.4 C349.0,317.3 352.0,316.2 355.0,315.1 C358.0,313.9 361.0,312.8 364.0,311.6 C367.0,310.4 370.0,309.2 373.0,307.9 C376.0,306.7 379.0,305.4 382.0,304.1 C385.0,302.8 388.0,301.4 391.0,300.1 C394.0,298.7 397.0,297.3 400.0,295.9 C403.0,294.5 406.0,293.0 409.0,291.5 C412.0,290.0 415.0,288.5 418.0,286.9 C421.0,285.4 424.0,283.8 427.0,282.1 C430.0,280.5 433.0,278.8 436.0,277.1 C439.0,275.4 442.0,273.6 445.0,271.9 C448.0,270.1 451.0,268.2 454.0,266.4 C457.0,264.5 460.0,262.6 463.0,260.6 C466.0,258.6 469.0,256.6 472.0,254.6 C475.0,252.5 478.0,250.4 481.0,248.3 C484.0,246.1 487.0,243.9 490.0,241.7 C493.0,239.4 496.0,237.1 499.0,234.8 C502.0,232.4 505.0,230.0 508.0,227.6 C511.0,225.1 514.0,222.6 517.0,220.0 C520.0,217.4 523.0,214.8 526.0,212.1 C529.0,209.4 532.0,206.7 535.0,203.8 C538.0,201.0 541.0,198.1 544.0,195.2 C547.0,192.2 550.0,189.2 553.0,186.1 C556.0,183.0 559.0,179.9 562.0,176.7 C565.0,173.4 568.0,170.1 571.0,166.7 C574.0,163.4 577.0,159.9 580.0,156.4 C583.0,152.8 586.0,149.2 589.0,145.5 C592.0,141.8 595.0,138.0 598.0,134.1 C601.0,130.3 604.0,126.3 607.0,122.2 C610.0,118.2 613.0,113.9 616.0,109.8" fill="none" stroke="#2d6a4f" stroke-width="3.2"/>
<path d="M76.0,371.9 C79.0,371.6 82.0,371.3 85.0,371.0 C88.0,370.8 91.0,370.5 94.0,370.2 C97.0,369.9 100.0,369.6 103.0,369.4 C106.0,369.1 109.0,368.8 112.0,368.5 C115.0,368.3 118.0,368.0 121.0,367.7 C124.0,367.4 127.0,367.1 130.0,366.9 C133.0,366.6 136.0,366.3 139.0,366.0 C142.0,365.8 145.0,365.5 148.0,365.2 C151.0,364.9 154.0,364.6 157.0,364.4 C160.0,364.1 163.0,363.8 166.0,363.5 C169.0,363.3 172.0,363.0 175.0,362.7 C178.0,362.4 181.0,362.1 184.0,361.9 C187.0,361.6 190.0,361.3 193.0,361.0 C196.0,360.8 199.0,360.5 202.0,360.2 C205.0,359.9 208.0,359.6 211.0,359.4 C214.0,359.1 217.0,358.8 220.0,358.5 C223.0,358.3 226.0,358.0 229.0,357.7 C232.0,357.4 235.0,357.1 238.0,356.9 C241.0,356.6 244.0,356.3 247.0,356.0 C250.0,355.8 253.0,355.5 256.0,355.2 C259.0,354.9 262.0,354.6 265.0,354.4 C268.0,354.1 271.0,353.8 274.0,353.5 C277.0,353.3 280.0,353.0 283.0,352.7 C286.0,352.4 289.0,352.1 292.0,351.9 C295.0,351.6 298.0,351.3 301.0,351.0 C304.0,350.8 307.0,350.5 310.0,350.2 C313.0,349.9 316.0,349.6 319.0,349.4 C322.0,349.1 325.0,348.8 328.0,348.5 C331.0,348.3 334.0,348.0 337.0,347.7 C340.0,347.4 343.0,347.1 346.0,346.9 C349.0,346.6 352.0,346.3 355.0,346.0 C358.0,345.8 361.0,345.5 364.0,345.2 C367.0,344.9 370.0,344.6 373.0,344.4 C376.0,344.1 379.0,343.8 382.0,343.5 C385.0,343.3 388.0,343.0 391.0,342.7 C394.0,342.4 397.0,342.1 400.0,341.9 C403.0,341.6 406.0,341.3 409.0,341.0 C412.0,340.8 415.0,340.5 418.0,340.2 C421.0,339.9 424.0,339.6 427.0,339.4 C430.0,339.1 433.0,338.8 436.0,338.5 C439.0,338.3 442.0,338.0 445.0,337.7 C448.0,337.4 451.0,337.1 454.0,336.9 C457.0,336.6 460.0,336.3 463.0,336.0 C466.0,335.8 469.0,335.5 472.0,335.2 C475.0,334.9 478.0,334.6 481.0,334.4 C484.0,334.1 487.0,333.8 490.0,333.5 C493.0,333.3 496.0,333.0 499.0,332.7 C502.0,332.4 505.0,332.2 508.0,331.9 C511.0,331.6 514.0,331.3 517.0,331.0 C520.0,330.8 523.0,330.5 526.0,330.2 C529.0,329.9 532.0,329.7 535.0,329.4 C538.0,329.1 541.0,328.8 544.0,328.5 C547.0,328.3 550.0,328.0 553.0,327.7 C556.0,327.4 559.0,327.2 562.0,326.9 C565.0,326.6 568.0,326.3 571.0,326.0 C574.0,325.8 577.0,325.5 580.0,325.2 C583.0,324.9 586.0,324.7 589.0,324.4 C592.0,324.1 595.0,323.8 598.0,323.5 C601.0,323.3 604.0,323.0 607.0,322.7 C610.0,322.4 613.0,322.2 616.0,321.9" fill="none" stroke="#1d3557" stroke-width="2.2" stroke-dasharray="7,4"/>
<text x="76.0" y="394.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Año 0</text>
<line x1="76.0" y1="372" x2="76.0" y2="378" stroke="#f0f0ee" stroke-width="1"/>
<text x="166.0" y="394.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Año 5</text>
<line x1="166.0" y1="372" x2="166.0" y2="378" stroke="#f0f0ee" stroke-width="1"/>
<text x="256.0" y="394.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Año 10</text>
<line x1="256.0" y1="372" x2="256.0" y2="378" stroke="#f0f0ee" stroke-width="1"/>
<text x="346.0" y="394.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Año 15</text>
<line x1="346.0" y1="372" x2="346.0" y2="378" stroke="#f0f0ee" stroke-width="1"/>
<text x="436.0" y="394.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Año 20</text>
<line x1="436.0" y1="372" x2="436.0" y2="378" stroke="#f0f0ee" stroke-width="1"/>
<text x="526.0" y="394.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Año 25</text>
<line x1="526.0" y1="372" x2="526.0" y2="378" stroke="#f0f0ee" stroke-width="1"/>
<text x="616.0" y="394.0" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">Año 30</text>
<line x1="616.0" y1="372" x2="616.0" y2="378" stroke="#f0f0ee" stroke-width="1"/>
<rect x="236.5" y="320.2" width="36" height="18" fill="#2d6a4f" rx="9"/>
<text x="254.5" y="334.2" text-anchor="middle" fill="white" font-size="10.5" font-weight="bold" font-family="Georgia, serif">x1.6</text>
<rect x="416.5" y="278.3" width="36" height="18" fill="#2d6a4f" rx="9"/>
<text x="434.5" y="292.3" text-anchor="middle" fill="white" font-size="10.5" font-weight="bold" font-family="Georgia, serif">x2.8</text>
<rect x="596.5" y="225.0" width="36" height="18" fill="#2d6a4f" rx="9"/>
<text x="614.5" y="239.0" text-anchor="middle" fill="white" font-size="10.5" font-weight="bold" font-family="Georgia, serif">x5.2</text>
<text x="610" y="97.8" text-anchor="end" fill="#2d6a4f" font-size="12" font-weight="bold" font-family="Georgia, serif">USD 189k</text>
<text x="610" y="309.9" text-anchor="end" fill="#1d3557" font-size="12" font-weight="bold" font-family="Georgia, serif">USD 36k</text>
<line x1="76" y1="420" x2="102" y2="420" stroke="#2d6a4f" stroke-width="3"/>
<text x="110" y="424" fill="#4a4a4a" font-size="11.5" font-family="Georgia, serif">Valor estimado de cartera</text>
<line x1="286" y1="420" x2="312" y2="420" stroke="#1d3557" stroke-width="2.2" stroke-dasharray="6,4"/>
<text x="320" y="424" fill="#4a4a4a" font-size="11.5" font-family="Georgia, serif">Capital aportado acumulado</text>
<text x="330" y="434" text-anchor="middle" fill="#8a8a8a" font-size="9.5" font-family="Georgia, serif" font-style="italic">Ejemplo hipotético. Sin inflación, impuestos ni comisiones. No garantiza rentabilidad futura.</text>
</svg></div>
    <p class="grafico-caption">La diferencia entre capital aportado y valor de cartera crece con el tiempo. Cada multiplicador (×1,6 / ×2,8 / ×5,2) representa el efecto acumulado del retorno sobre los aportes anteriores. Ejemplo hipotético con retorno del 9,5% anual. No garantiza resultados futuros.</p>
  </div>

  <div class="grafico-wrap">
    <p class="grafico-label">Infografía</p>
    <div style="background:white;border:1px solid #d8d0c8;border-radius:10px;overflow:hidden;box-shadow:0 3px 14px rgba(0,0,0,0.08);padding:28px 32px 24px;margin:2px 0 4px;">
  <p style="font-family:&#39;Playfair Display&#39;,Georgia,serif;font-size:15px;font-weight:bold;color:#1a1a1a;margin:0 0 6px;text-align:center;">El valor del DCA está en ejecutar</p>
  <p style="font-family:Georgia,serif;font-size:11px;color:#8a8a8a;margin:0 0 22px;text-align:center;letter-spacing:0.06em;text-transform:uppercase;">Disciplina vs. parálisis</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
    <div style="background:#fff5f5;border:1px solid #f5c6c6;border-radius:8px;padding:20px 18px;">
      <p style="font-family:Georgia,serif;font-size:10px;font-weight:bold;letter-spacing:0.12em;text-transform:uppercase;color:#c0392b;margin:0 0 14px;">Sin método definido</p>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="display:inline-block;width:6px;height:6px;background:#c0392b;border-radius:50%;margin-top:7px;flex-shrink:0;"></span>
          <span style="font-family:Georgia,serif;font-size:13px;font-weight:300;color:#4a4a4a;line-height:1.5;">Esperar el momento perfecto para entrar</span>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="display:inline-block;width:6px;height:6px;background:#c0392b;border-radius:50%;margin-top:7px;flex-shrink:0;"></span>
          <span style="font-family:Georgia,serif;font-size:13px;font-weight:300;color:#4a4a4a;line-height:1.5;">Frenar por miedo cuando el mercado cae</span>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="display:inline-block;width:6px;height:6px;background:#c0392b;border-radius:50%;margin-top:7px;flex-shrink:0;"></span>
          <span style="font-family:Georgia,serif;font-size:13px;font-weight:300;color:#4a4a4a;line-height:1.5;">Postergar la decisión hasta tener certeza</span>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="display:inline-block;width:6px;height:6px;background:#c0392b;border-radius:50%;margin-top:7px;flex-shrink:0;"></span>
          <span style="font-family:Georgia,serif;font-size:13px;font-weight:300;color:#4a4a4a;line-height:1.5;">Inversión reactiva según noticias del momento</span>
        </div>
      </div>
    </div>
    <div style="background:#f0faf4;border:1px solid #b7e0c9;border-radius:8px;padding:20px 18px;">
      <p style="font-family:Georgia,serif;font-size:10px;font-weight:bold;letter-spacing:0.12em;text-transform:uppercase;color:#2d6a4f;margin:0 0 14px;">Con DCA periódico</p>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="display:inline-block;width:6px;height:6px;background:#2d6a4f;border-radius:50%;margin-top:7px;flex-shrink:0;"></span>
          <span style="font-family:Georgia,serif;font-size:13px;font-weight:300;color:#4a4a4a;line-height:1.5;">Invertir la misma suma el mismo día cada mes</span>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="display:inline-block;width:6px;height:6px;background:#2d6a4f;border-radius:50%;margin-top:7px;flex-shrink:0;"></span>
          <span style="font-family:Georgia,serif;font-size:13px;font-weight:300;color:#4a4a4a;line-height:1.5;">Reducir decisiones emocionales ante la volatilidad</span>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="display:inline-block;width:6px;height:6px;background:#2d6a4f;border-radius:50%;margin-top:7px;flex-shrink:0;"></span>
          <span style="font-family:Georgia,serif;font-size:13px;font-weight:300;color:#4a4a4a;line-height:1.5;">Construir el hábito de invertir como proceso</span>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="display:inline-block;width:6px;height:6px;background:#2d6a4f;border-radius:50%;margin-top:7px;flex-shrink:0;"></span>
          <span style="font-family:Georgia,serif;font-size:13px;font-weight:300;color:#4a4a4a;line-height:1.5;">Capitalizar la caída comprando más unidades</span>
        </div>
      </div>
    </div>
  </div>
  <p style="font-family:Georgia,serif;font-size:11px;color:#8a8a8a;margin:18px 0 0;text-align:center;font-style:italic;">El DCA no garantiza mejores retornos. Su principal ventaja es convertir la inversión periódica en un proceso sistemático, independiente del ruido del mercado.</p>
</div>
    <p class="grafico-caption">Fuente: elaboración propia. No constituye asesoramiento financiero personalizado.</p>
  </div>

  <div class="fuentes">
    <h3>Fuentes</h3>
    <p><strong>Vanguard (2023).</strong> <em>Invest Now or Temporarily Hold Your Cash?</em> Análisis comparativo de lump sum vs. dollar cost averaging en mercados históricos.<br>
    <a href="https://institutional.vanguard.com/content/dam/inst/iig-transformation/insights/pdf/2023/investing-now-vs-dca.pdf" target="_blank">vanguard.com →</a></p>
    <p><strong>Charles Schwab (2024).</strong> <em>Dollar Cost Averaging.</em> Schwab explica el mecanismo del DCA y sus límites, incluyendo que no garantiza ganancias ni protege contra pérdidas en mercados bajistas.<br>
    <a href="https://www.schwab.com/learn/story/dollar-cost-averaging-good-strategy-uncertain-markets" target="_blank">schwab.com →</a></p>
    <p><strong>Fidelity (2024).</strong> <em>Dollar cost averaging.</em> Fidelity describe el DCA como una forma de dividir inversiones en partes iguales a lo largo del tiempo.<br>
    <a href="https://www.fidelity.com/learning-center/trading-investing/dollar-cost-averaging" target="_blank">fidelity.com →</a></p>
    <p><strong>Investopedia (2024).</strong> <em>Dollar-Cost Averaging (DCA) Explained With Examples and Considerations.</em><br>
    <a href="https://www.investopedia.com/terms/d/dollarcostaveraging.asp" target="_blank">investopedia.com →</a></p>
    <p><strong>NYU Stern School of Business — Aswath Damodaran (2025).</strong> <em>Annual Returns on Stock, T.Bonds and T.Bills with premium, 1928–2025.</em> Datos históricos de retornos anuales del S&amp;P 500.<br>
    <a href="https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html" target="_blank">stern.nyu.edu →</a></p>
    <p class="nota-legal">Los análisis sobre períodos de 15, 20 y 30 años con aportes mensuales de USD 100 fueron elaborados con datos de retornos anuales del S&amp;P 500 (NYU Stern, 2025). Los resultados no incluyen comisiones, impuestos ni ajuste por inflación. Los datos históricos no garantizan resultados futuros. Este artículo tiene fines exclusivamente educativos e informativos. No constituye asesoramiento financiero personalizado.</p>
  </div>`
      }}
    />
  );
}
