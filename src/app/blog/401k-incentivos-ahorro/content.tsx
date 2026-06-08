/* eslint-disable */
export default function ArticleContent() {
  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{
        __html: `<h1>El 401(k): por qué el diseño del incentivo importa más que el producto</h1>

  <p class="bajada">El 401(k) acumula hoy más de 10 billones de dólares en activos. Pero su verdadero logro no es financiero: es haber logrado que millones de personas ahorren voluntariamente durante décadas. La pregunta es cómo.</p>

  <hr class="divider">

  <p>¿Por qué millones de personas destinan voluntariamente parte de su salario a una cuenta que no podrán tocar durante décadas?</p>

  <p>No se trata de una obligación legal. No hay una autoridad que les exija hacerlo. Y sin embargo, decenas de millones de trabajadores estadounidenses apartan mes a mes una porción de sus ingresos para invertirlos a largo plazo.</p>

  <p>La respuesta no está en la educación financiera ni en la disciplina individual. Está en el diseño del sistema.</p>

  <h2>Qué es el 401(k)</h2>

  <p>Un 401(k) es un plan de ahorro para la jubilación patrocinado por el empleador. Su nombre no es un acrónimo ni una sigla: es la referencia directa a la sección 401(k) del Internal Revenue Code de Estados Unidos, aprobada en 1978 y puesta en práctica a partir de 1981.</p>

  <p>El mecanismo básico es simple. El trabajador decide qué porcentaje de su salario desea aportar —hasta un máximo fijado por el IRS, que en 2026 es de <span class="dato">USD 24.500</span> anuales para empleados y hasta <span class="dato">USD 72.000</span> sumando el aporte del empleador—. Ese dinero se descuenta antes de calcular el impuesto a la renta, lo que significa que el trabajador no paga impuestos sobre ese monto hoy. Los paga recién cuando retire los fondos, ya jubilado.</p>

  <p>El empleador puede —y en la mayoría de los planes lo hace— agregar su propio aporte. La fórmula más común es aportar el equivalente al 50% de lo que invierte el trabajador, hasta un 6% de su salario. Es decir: si el trabajador aporta 6% de su sueldo, la empresa agrega un 3% adicional, sin costo para él.</p>

  <div class="callout">
    <p class="callout-label">Ejemplo simple</p>
    <p>Un trabajador gana <strong>USD 5.000 mensuales</strong> y aporta el 6% al 401(k): <strong>USD 300 propios</strong>. Su empleador agrega un 3% más: <strong>USD 150 adicionales</strong>. En total, ese mes se invierten <strong>USD 450</strong> — pero al trabajador le costó solo USD 300 (y menos aún, porque ese dinero no tributó este año).</p>
  </div>

  <h2>La magnitud del sistema</h2>

  <p>Hoy existen aproximadamente <span class="dato">70 millones</span> de participantes activos en planes 401(k), distribuidos en alrededor de <span class="dato">600.000</span> planes empresariales en todo Estados Unidos (ICI / DOL, 2024).</p>

  <p>Los activos acumulados superan los <span class="dato">10,1 billones de dólares</span> — solo en este tipo de plan. El total de activos en cuentas de retiro de todo tipo alcanzó los USD 49,1 billones a fines de 2025 (ICI, Q4 2025), lo que representa el 34% de todos los activos financieros de los hogares estadounidenses.</p>

  <p>Pero quizás el dato más elocuente es el de partida: en 1981, cuando el primer empleador implementó el plan, los activos eran prácticamente cero. En cuatro décadas, el sistema pasó de no existir a ser uno de los mayores repositorios de ahorro privado del mundo.</p>

  <div class="grafico-wrap">
    <p class="grafico-label">Gráfico 1</p>
    <div style="background:#ffffff;border:1px solid #d8d0c8;border-radius:10px;overflow:hidden;box-shadow:0 3px 16px rgba(0,0,0,0.09);margin:2px 0 4px;"><svg viewBox="0 0 660 400" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect width="660" height="400" fill="#ffffff"/>
<text x="330" y="36" text-anchor="middle" fill="#1a1a1a" font-size="17" font-weight="bold" font-family="Georgia, serif">Crecimiento de activos en planes 401(k)</text>
<text x="330" y="58" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">En billones de dólares (USD) · 1990–2025</text>
<line x1="80" y1="320" x2="620" y2="320" stroke="#e8e8e4" stroke-width="1"/>
<line x1="80" y1="270" x2="620" y2="270" stroke="#e8e8e4" stroke-width="1"/>
<line x1="80" y1="220" x2="620" y2="220" stroke="#e8e8e4" stroke-width="1"/>
<line x1="80" y1="170" x2="620" y2="170" stroke="#e8e8e4" stroke-width="1"/>
<line x1="80" y1="120" x2="620" y2="120" stroke="#e8e8e4" stroke-width="1"/>
<text x="70" y="324" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">0</text>
<text x="70" y="274" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">2,5T</text>
<text x="70" y="224" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">5,0T</text>
<text x="70" y="174" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">7,5T</text>
<text x="70" y="124" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">10,0T</text>
<polyline points="80,304.4 156.7,285.6 233.3,263.6 310,255.2 386.7,243.8 463.3,225.4 540,186.4 616,119.6" fill="none" stroke="#d8d0c8" stroke-width="1.5" stroke-dasharray="4,2"/>
<path d="M80,304.4 L156.7,285.6 L233.3,263.6 L310,255.2 L386.7,243.8 L463.3,225.4 L540,186.4 L616,119.6 L616,320 L80,320 Z" fill="#2d6a4f" opacity="0.08"/>
<polyline points="80,304.4 156.7,285.6 233.3,263.6 310,255.2 386.7,243.8 463.3,225.4 540,186.4 616,119.6" fill="none" stroke="#2d6a4f" stroke-width="3"/>
<circle cx="80" cy="304.4" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="156.7" cy="285.6" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="233.3" cy="263.6" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="310" cy="255.2" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="386.7" cy="243.8" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="463.3" cy="225.4" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="540" cy="186.4" r="4.5" fill="#2d6a4f" stroke="white" stroke-width="2"/>
<circle cx="616" cy="119.6" r="5.5" fill="#2d6a4f" stroke="white" stroke-width="2.5"/>
<text x="80" y="344" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">1990</text>
<text x="156.7" y="344" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">1995</text>
<text x="233.3" y="344" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">2000</text>
<text x="310" y="344" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">2005</text>
<text x="386.7" y="344" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">2010</text>
<text x="463.3" y="344" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">2015</text>
<text x="540" y="344" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">2020</text>
<text x="616" y="344" text-anchor="middle" fill="#2d6a4f" font-size="11" font-weight="bold" font-family="Georgia, serif">2025</text>
<rect x="590" y="100" width="56" height="22" fill="#2d6a4f" rx="4"/>
<text x="618" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="Georgia, serif">$10,1T</text>
<text x="330" y="375" text-anchor="middle" fill="#8a8a8a" font-size="9.5" font-family="Georgia, serif" font-style="italic">Fuentes: ICI Retirement Market Data Q4 2025 · ICI Fact Book (series histórica) · DOL</text>
</svg></div>
    <p class="grafico-caption">Los activos en planes 401(k) pasaron de aproximadamente USD 390.000 millones en 1990 a USD 10,1 billones en 2025. El crecimiento refleja tanto la acumulación de aportes como la apreciación de los mercados en el largo plazo.</p>
  </div>

  <h2>El verdadero secreto: los incentivos</h2>

  <p>El 401(k) no es un producto extraordinariamente complejo. Lo que lo hace efectivo es la estructura de incentivos que lo rodea — y cómo esa estructura hace que ahorrar sea la opción más fácil, no la más difícil.</p>

  <p><strong>Inscripción automática.</strong> Muchos empleadores inscriben automáticamente a sus empleados en el plan desde el primer día. El trabajador no tiene que tomar ninguna decisión: ya está dentro. Si quiere salir, puede hacerlo, pero la inercia trabaja a favor del ahorro. El resultado es contundente: la tasa de participación en planes con inscripción automática supera el <span class="dato">90%</span>; en planes de adhesión voluntaria, cae al entorno del <span class="dato">50%</span> (Vanguard, How America Saves, 2024).</p>

  <p><strong>El aporte del empleador como acelerador.</strong> Cuando una empresa ofrece matching contributions, cada dólar que el trabajador aporta tiene un retorno inmediato antes de que el mercado haga nada. Rechazar ese beneficio equivale a rechazar una parte del salario. Eso cambia completamente el cálculo.</p>

  <p><strong>El beneficio fiscal como socio silencioso.</strong> El Estado, al permitir que los aportes no tributen en el año en que se hacen, está subsidiando implícitamente el ahorro. Un trabajador en una franja del 22% que aporta USD 1.000 al 401(k) paga USD 220 menos de impuestos ese año. El costo real de aportar USD 1.000 es USD 780.</p>

  <p><strong>Visibilidad y propiedad.</strong> El saldo del 401(k) es del trabajador. Puede verlo crecer, sabe exactamente cuánto tiene y puede llevárselo si cambia de trabajo. Eso genera algo que los aportes al sistema público de pensiones rara vez producen: una sensación concreta de patrimonio propio.</p>

  <div class="grafico-wrap">
    <p class="grafico-label">Gráfico 2</p>
    <div style="background:#ffffff;border:1px solid #d8d0c8;border-radius:10px;overflow:hidden;box-shadow:0 3px 16px rgba(0,0,0,0.09);margin:2px 0 4px;"><svg viewBox="0 0 660 360" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect width="660" height="360" fill="#ffffff"/>
<text x="330" y="36" text-anchor="middle" fill="#1a1a1a" font-size="17" font-weight="bold" font-family="Georgia, serif">Inscripción automática vs. voluntaria</text>
<text x="330" y="58" text-anchor="middle" fill="#8a8a8a" font-size="12" font-family="Georgia, serif">Tasa de participación según tipo de adhesión al plan</text>
<line x1="130" y1="280" x2="540" y2="280" stroke="#f0f0ee" stroke-width="1"/>
<line x1="130" y1="230" x2="540" y2="230" stroke="#f0f0ee" stroke-width="1"/>
<line x1="130" y1="180" x2="540" y2="180" stroke="#f0f0ee" stroke-width="1"/>
<line x1="130" y1="130" x2="540" y2="130" stroke="#f0f0ee" stroke-width="1"/>
<line x1="130" y1="80" x2="540" y2="80" stroke="#f0f0ee" stroke-width="1"/>
<text x="120" y="284" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">0%</text>
<text x="120" y="234" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">25%</text>
<text x="120" y="184" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">50%</text>
<text x="120" y="134" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">75%</text>
<text x="120" y="84" text-anchor="end" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">100%</text>
<rect x="183" y="81" width="140" height="3" fill="rgba(0,0,0,0.05)" rx="4"/>
<rect x="180" y="78" width="140" height="202" fill="#d8d0c8" rx="6"/>
<text x="250" y="190" text-anchor="middle" fill="white" font-size="22" font-weight="bold" font-family="Georgia, serif">~50%</text>
<text x="250" y="312" text-anchor="middle" fill="#4a4a4a" font-size="13" font-family="Georgia, serif">Adhesión voluntaria</text>
<rect x="343" y="81" width="140" height="3" fill="rgba(0,0,0,0.05)" rx="4"/>
<rect x="340" y="78" width="140" height="38" fill="#2d6a4f" rx="6"/>
<rect x="340" y="116" width="140" height="164" fill="#2d6a4f" rx="0"/>
<text x="410" y="154" text-anchor="middle" fill="white" font-size="22" font-weight="bold" font-family="Georgia, serif">~90%</text>
<text x="410" y="312" text-anchor="middle" fill="#2d6a4f" font-size="13" font-weight="bold" font-family="Georgia, serif">Inscripción automática</text>
<rect x="188" y="58" width="128" height="18" fill="none" rx="4"/>
<text x="252" y="71" text-anchor="middle" fill="#8a8a8a" font-size="11" font-family="Georgia, serif">sin acción del trabajador</text>
<text x="330" y="338" text-anchor="middle" fill="#8a8a8a" font-size="9.5" font-family="Georgia, serif" font-style="italic">Fuente: Vanguard — How America Saves 2024 · estimaciones sobre planes con y sin auto-enrollment</text>
</svg></div>
    <p class="grafico-caption">La inscripción automática casi duplica la tasa de participación en los planes. La diferencia no es de educación ni de disciplina: es de diseño. Cuando el ahorro es el estado por defecto, la mayoría de las personas permanece dentro del plan.</p>
  </div>

  <h2>Lo que más me llamó la atención</h2>

  <p>Cuando se analiza el 401(k) desde afuera, es fácil pensar que su éxito se explica por los números: el beneficio fiscal, el aporte del empleador, los rendimientos históricos del mercado. Todos esos factores importan. Pero hay algo más profundo.</p>

  <p>Lo que realmente logró este sistema es <strong>alinear los intereses de tres actores que habitualmente tienen objetivos distintos</strong>: el trabajador, la empresa y el Estado.</p>

  <p>El trabajador ahorra porque tiene un incentivo inmediato y tangible: cada peso que aporta vale más que uno que no aporta. La empresa contribuye porque retener talento tiene valor, y el matching es una herramienta competitiva. El Estado renuncia a recaudar hoy porque prefiere que exista menos presión sobre el sistema público mañana.</p>

  <p>Nadie obliga a nadie. Los tres actores cooperan porque les conviene hacerlo.</p>

  <p>Y hay un detalle conductual que suele pasarse por alto: el trabajador puede ver, en tiempo real, cómo crece su cuenta. Eso no es menor. Cuando el ahorro es invisible —cuando se descuenta automáticamente hacia un sistema colectivo sin nombre ni saldo propio— cuesta más sostenerlo emocionalmente. Cuando el ahorro tiene una cifra concreta y es mía, la ecuación cambia.</p>

  <div class="grafico-wrap">
    <p class="grafico-label">Infografía</p>
    <div style="background:white;border:1px solid #d8d0c8;border-radius:10px;overflow:hidden;box-shadow:0 3px 14px rgba(0,0,0,0.08);padding:28px 32px 24px;margin:2px 0 4px;">
  <p style="font-family:'Playfair Display',Georgia,serif;font-size:15px;font-weight:bold;color:#1a1a1a;margin:0 0 6px;text-align:center;">Quién aporta en un 401(k)</p>
  <p style="font-family:Georgia,serif;font-size:11px;color:#8a8a8a;margin:0 0 24px;text-align:center;letter-spacing:0.06em;text-transform:uppercase;">Ejemplo con salario USD 5.000/mes · aporte trabajador 6%</p>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;">
    <div style="background:#f5f4f0;border:1px solid #e8e4dc;border-radius:8px;padding:18px 16px;text-align:center;">
      <p style="font-family:Georgia,serif;font-size:10px;font-weight:bold;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;margin:0 0 10px;">Trabajador</p>
      <p style="font-family:Georgia,serif;font-size:26px;font-weight:bold;color:#1d3557;margin:0 0 6px;">USD 300</p>
      <p style="font-family:Georgia,serif;font-size:12px;font-weight:300;color:#6a6a6a;line-height:1.5;margin:0;">6% del salario · se descuenta antes de impuestos</p>
    </div>
    <div style="background:#f0faf4;border:1px solid #b7e0c9;border-radius:8px;padding:18px 16px;text-align:center;">
      <p style="font-family:Georgia,serif;font-size:10px;font-weight:bold;letter-spacing:0.12em;text-transform:uppercase;color:#2d6a4f;margin:0 0 10px;">Empleador</p>
      <p style="font-family:Georgia,serif;font-size:26px;font-weight:bold;color:#2d6a4f;margin:0 0 6px;">+ USD 150</p>
      <p style="font-family:Georgia,serif;font-size:12px;font-weight:300;color:#6a6a6a;line-height:1.5;margin:0;">50% del aporte del trabajador hasta 6% del salario</p>
    </div>
    <div style="background:#eef3f8;border:1px solid #c4d4e4;border-radius:8px;padding:18px 16px;text-align:center;">
      <p style="font-family:Georgia,serif;font-size:10px;font-weight:bold;letter-spacing:0.12em;text-transform:uppercase;color:#1d3557;margin:0 0 10px;">Estado (vía tax)</p>
      <p style="font-family:Georgia,serif;font-size:26px;font-weight:bold;color:#1d3557;margin:0 0 6px;">− USD 66</p>
      <p style="font-family:Georgia,serif;font-size:12px;font-weight:300;color:#6a6a6a;line-height:1.5;margin:0;">Impuesto diferido (~22% bracket) · tributa al retirar</p>
    </div>
  </div>
  <div style="margin-top:16px;padding:14px 18px;background:#1d3557;border-radius:8px;text-align:center;">
    <p style="font-family:Georgia,serif;font-size:12px;font-weight:300;color:rgba(255,255,255,0.75);margin:0 0 4px;letter-spacing:0.04em;">Total invertido ese mes</p>
    <p style="font-family:Georgia,serif;font-size:22px;font-weight:bold;color:white;margin:0;">USD 450 <span style="font-size:14px;font-weight:300;opacity:0.8;">— con un costo real para el trabajador de USD 234</span></p>
  </div>
  <p style="font-family:Georgia,serif;font-size:11px;color:#8a8a8a;margin:16px 0 0;text-align:center;font-style:italic;">Ejemplo ilustrativo. El ahorro fiscal varía según la franja impositiva de cada persona.</p>
</div>
    <p class="grafico-caption">El triple incentivo hace que el costo real del ahorro sea menor que el monto invertido. Quien aporta USD 300 ve ingresar USD 450 a su cuenta, con un costo neto de USD 234 después del beneficio fiscal. Eso cambia la percepción del esfuerzo.</p>
  </div>

  <h2>Preguntas para reflexionar</h2>

  <p>El 401(k) es un caso de estudio en diseño de incentivos. Más allá de sus particularidades legales y fiscales —propias del sistema tributario estadounidense—, plantea preguntas que son relevantes en cualquier contexto:</p>

  <ul>
    <li>¿Cómo logramos que más personas quieran ahorrar e invertir pensando en su jubilación — no porque deban, sino porque les conviene?</li>
    <li>¿Cómo hacemos para que el ahorro de largo plazo se perciba como una inversión en el propio futuro y no como un costo o una renuncia del presente?</li>
    <li>¿Qué papel puede jugar la empresa en la construcción del ahorro de sus empleados, más allá del salario?</li>
    <li>¿Qué diseños —automáticos, visibles, tangibles— generan los mejores hábitos de ahorro sostenidos en el tiempo?</li>
    <li>¿Qué podemos aprender de los sistemas que han logrado una adopción masiva sin coerción?</li>
  </ul>

  <p>Estas preguntas no tienen una respuesta única. Pero sí tienen un denominador común: los incentivos bien diseñados hacen más de lo que la disciplina individual puede lograr por sí sola.</p>

  <h2>Conclusión</h2>

  <p>El 401(k) no es perfecto. Tiene críticas legítimas: favorece más a quienes más ganan, deja fuera a trabajadores informales o independientes, y expone el ahorro a la volatilidad del mercado sin garantías de resultado.</p>

  <p>Pero su historia enseña algo que trasciende el producto en sí: <strong>cuando las personas pueden ver cómo crece su propio patrimonio, cuando existe un incentivo compartido entre trabajador y empresa, y cuando el ahorro se vuelve algo concreto y propio, la jubilación deja de ser solo una preocupación futura</strong>.</p>

  <p>Pasa a ser algo que se construye, mes a mes, durante toda la vida laboral.</p>

  <p>Los incentivos importan. El diseño importa. La percepción importa.</p>

  <p>Y cuando todo eso se alinea bien, el resultado puede sorprender.</p>

  <div class="callout callout-neutral">
    <p class="callout-label">Dato para dimensionar</p>
    <p>En 1981, el primer plan 401(k) fue implementado por una sola empresa en Estados Unidos. Hoy, 44 años después, el sistema administra <strong>más de USD 10 billones</strong> — equivalente a varias veces el PBI de las economías más grandes de América Latina. No fue una ley que obligó a nadie. Fue un diseño que hizo que la decisión correcta fuera también la más fácil.</p>
  </div>

  <div class="fuentes">
    <h3>Fuentes</h3>
    <p><strong>IRS — Internal Revenue Service (2025).</strong> <em>401(k) Plans.</em> Descripción oficial del plan, elegibilidad, beneficios fiscales y límites de contribución.<br>
    <a href="https://www.irs.gov/retirement-plans/401k-plans" target="_blank">irs.gov →</a></p>
    <p><strong>IRS — Internal Revenue Service (2025).</strong> <em>Retirement Topics — 401(k) and Profit-Sharing Plan Contribution Limits.</em> Límites de aportes para 2026: USD 24.500 empleado, USD 72.000 total.<br>
    <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank">irs.gov →</a></p>
    <p><strong>Investment Company Institute — ICI (2025).</strong> <em>Retirement Market Data, Q4 2025.</em> Activos totales en planes 401(k): USD 10,1 billones. Activos totales en cuentas de retiro en EE.UU.: USD 49,1 billones.<br>
    <a href="https://www.ici.org/statistical-report/ret_25_q4" target="_blank">ici.org →</a></p>
    <p><strong>Vanguard (2024).</strong> <em>How America Saves 2024.</em> Tasas de participación según tipo de inscripción: ~90% con auto-enrollment vs ~50% con adhesión voluntaria. Fórmulas de matching más comunes.<br>
    <a href="https://institutional.vanguard.com/insights/article/how-america-saves-2024" target="_blank">vanguard.com →</a></p>
    <p><strong>U.S. Department of Labor — DOL (2024).</strong> <em>Private Pension Plan Bulletins.</em> Datos sobre número de planes y participantes activos en planes de contribución definida.<br>
    <a href="https://www.dol.gov/agencies/ebsa/researchers/statistics/retirement-bulletins" target="_blank">dol.gov →</a></p>
    <p class="nota-legal">Este artículo tiene fines exclusivamente educativos e informativos. No constituye asesoramiento financiero personalizado. Las características del sistema 401(k) son propias del marco legal y tributario de Estados Unidos y no son directamente extrapolables a otros países sin considerar sus contextos normativos específicos.</p>
  </div>`
      }}
    />
  );
}
