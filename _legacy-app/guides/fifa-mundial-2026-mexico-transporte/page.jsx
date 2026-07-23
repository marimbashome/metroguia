import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import FAQSchema from '@/app/components/FAQSchema'

export const metadata = {
  title: 'Mundial FIFA 2026 en México: Guía Completa de Transporte para Aficionados | MetroGuia',
  description: 'Cómo llegar a los estadios en CDMX, Guadalajara y Monterrey en transporte público. Tarjetas, líneas, costos y tips esenciales para el Mundial 2026.',
  alternates: { canonical: 'https://metroguia.mx/guides/fifa-mundial-2026-mexico-transporte/' },
  openGraph: {
    title: 'Mundial FIFA 2026 en México: Guía Completa de Transporte para Aficionados',
    description: 'Cómo llegar a los estadios en CDMX, Guadalajara y Monterrey en transporte público. Tarjetas, líneas, costos y tips esenciales para el Mundial 2026.',
    url: 'https://metroguia.mx/guides/fifa-mundial-2026-mexico-transporte/',
    type: 'article',
  },
}

export default function FifaMundial2026TransportePage() {
  const faqs = [
    {
      question: '¿Cuántos partidos se juegan en México durante el Mundial 2026?',
      answer: 'México albergará 13 partidos: 5 en el Estadio Azteca de CDMX, 4 en el Estadio Akron de Guadalajara y 4 en el Estadio BBVA de Monterrey. Los partidos se distribuyen entre el 11 de junio y el 5 de julio de 2026.'
    },
    {
      question: '¿Cuánto cuesta el metro en CDMX?',
      answer: 'El metro de la Ciudad de México tiene tarifa única de $5 MXN por viaje, sin importar la distancia recorrida. Necesitas una Tarjeta MI (antes Tarjeta de Movilidad), que cuesta $50 MXN en cualquier taquilla de las estaciones.'
    },
    {
      question: '¿Cuál es la estación de metro más cercana al Estadio Azteca?',
      answer: 'La estación más cercana al Estadio Azteca (Estadio Banorte) es Tasqueña, en la Línea 2 (azul), desde donde puedes tomar el Tren Ligero hasta la estación Estadio Azteca. El recorrido total desde el centro histórico toma aproximadamente 45-55 minutos.'
    },
    {
      question: '¿Hay transporte público directo al Estadio Akron en Guadalajara?',
      answer: 'Sí. La Línea 3 del SITEUR (Tren Eléctrico Urbano de Guadalajara) tiene una estación cercana al Estadio Akron. Durante los días de partido se implementan servicios especiales con mayor frecuencia y capacidad.'
    },
    {
      question: '¿Funciona el metro de noche después de los partidos?',
      answer: 'Los sistemas de metro suelen operar con horario extendido durante eventos del Mundial. En CDMX, el horario regular llega hasta la medianoche; en días de partido se espera extensión hasta la 1:00 o 2:00 AM. Verifica siempre en el sitio oficial de cada sistema antes del partido.'
    },
    {
      question: '¿Qué app uso para planear rutas en las tres ciudades?',
      answer: 'Google Maps funciona bien en las tres ciudades y muestra rutas de transporte público en tiempo real. Para CDMX, MetroGuia.mx ofrece rutas optimizadas en la red de metro. Descarga los mapas offline antes de salir del hotel por si pierdes señal.'
    }
  ]

  return (
    <div>
      <BreadcrumbSchema items={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Guías', url: '/guides' },
        { name: 'Mundial FIFA 2026: Transporte en México', url: '/guides/fifa-mundial-2026-mexico-transporte/' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 60%, var(--chiapas) 100%)' }}>
        <div className="container">
          <p style={{ color: 'var(--amber)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            FIFA World Cup 2026
          </p>
          <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '800', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.15', marginBottom: '1rem' }}>
            México en el Mundial 2026: Guía Completa de Transporte para Aficionados
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '680px', lineHeight: '1.7' }}>
            Todo lo que necesitas saber para moverte en CDMX, Guadalajara y Monterrey durante el torneo: metro, tren ligero, tarjetas de transporte, costos reales y tips que los locales nunca te cuentan.
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: '4rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Intro */}
          <p style={{ fontSize: '1.15rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem', fontFamily: "'Playfair Display', Georgia, serif" }}>
            Cuando la FIFA anunció que México volvería a recibir partidos de la Copa del Mundo después de cuatro décadas, la pregunta que millones de aficionados alrededor del mundo comenzaron a hacerse fue, inevitablemente, la misma: ¿cómo me muevo en esas ciudades? La respuesta corta es que las tres sedes mexicanas —Ciudad de México, Guadalajara y Monterrey— cuentan con sistemas de transporte público funcionales, económicos y, con la información correcta, perfectamente accesibles para cualquier viajero.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La respuesta larga es esta guía. Aquí encontrarás instrucciones precisas para llegar a cada estadio en transporte público, el costo real de cada viaje, cómo conseguir las tarjetas recargables de cada ciudad y qué hacer cuando el partido termina y decenas de miles de aficionados salen al mismo tiempo a buscar un camino de regreso al hotel. No hay glamour en este tema, pero hay mucha información útil.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            Los partidos en México se distribuyen entre el 11 de junio y el 5 de julio de 2026: cinco encuentros en el Estadio Azteca (ahora conocido como Estadio Banorte), cuatro en el Estadio Akron de Guadalajara y cuatro en el Estadio BBVA de Monterrey. Son trece partidos en total, incluyendo algunos de los encuentros de la fase de grupos más anticipados del torneo. Planear con anticipación —especialmente en lo que respecta al transporte— puede ser la diferencia entre disfrutar la experiencia o recordarla como un martirio logístico.
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* CDMX Section */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Ciudad de México: El Estadio Azteca y el Metro
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Estadio Azteca —rebautizado Estadio Banorte para el Mundial— es uno de los recintos más emblemáticos del fútbol mundial. Ha sido sede de dos finales de Copa del Mundo (1970 y 1986) y tiene capacidad para más de 87,000 personas. Está ubicado en Av. Insurgentes Sur 3465, en la alcaldía Coyoacán, al sur de la ciudad. Para la mayoría de los turistas hospedados en las zonas más concurridas como el Centro Histórico, la Roma, la Condesa o Polanco, llegar ahí en transporte público requiere paciencia pero no es complicado.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La ruta más directa combina el Metro con el Tren Ligero. Desde cualquier estación del centro puedes tomar la Línea 2 (azul) en dirección a Tasqueña, la terminal sur de esa línea. Desde ahí, a pocos metros de la salida, está la estación del Tren Ligero, que lleva directo hasta la parada "Estadio Azteca". El Tren Ligero cuesta $3 MXN adicionales y el trayecto desde Tasqueña es de apenas siete u ocho minutos. Todo el recorrido desde, digamos, la estación Zócalo hasta el estadio toma entre 45 y 55 minutos dependiendo de las esperas.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Si llegas desde el norte o el poniente de la ciudad, otra opción es tomar la Línea 3 (verde) hasta la estación Universidad y desde ahí un Uber o taxi hasta el estadio, que está a unos 15 minutos en vehículo. Esta variante es útil para quienes llevan maletas o no quieren lidiar con transbordos en hora pico.
          </p>

          <div style={{ backgroundColor: 'var(--linen)', border: '1px solid var(--primary-border)', borderLeft: '4px solid var(--amber)', padding: '1.5rem 2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--forest)', marginTop: '0', marginBottom: '0.75rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Tarjeta MI (Tarjeta de Movilidad Integrada)</h4>
            <p style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '0.97rem' }}>
              La tarjeta MI es el pase universal para el transporte público de CDMX. Funciona en metro ($5 MXN), Metrobús ($6 MXN), Trolebús ($4 MXN), Tren Ligero ($3 MXN) y Cablebús ($7 MXN). Se compra en las taquillas de cualquier estación de metro por $50 MXN (la tarjeta vacía) y se recarga con el saldo que necesites. Un consejo práctico: carga al menos $200 MXN desde el primer día para no tener que buscar una taquilla antes de cada partido.
            </p>
          </div>

          <h3 style={{ color: 'var(--forest)', marginBottom: '1rem' }}>Consejos para los días de partido en CDMX</h3>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Los partidos en el Azteca serán eventos masivos: 87,000 personas que entran y salen por las mismas estaciones de metro. Si puedes, llega al estadio con dos o tres horas de anticipación, cuando las estaciones aún no están saturadas. A la salida del partido, la estación "Estadio Azteca" del Tren Ligero se convierte en un embudo humano durante al menos 40 minutos. Caminar un par de cuadras hasta la siguiente parada —o incluso hasta la estación Tasqueña— puede ahorrarte esa espera.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            La Línea 8 del metro (rosa oscuro), que pasa también por zonas del sur, tiende a saturarse más en horario postpartido. Si puedes evitarla en ese momento, mejor. El Metrobús Línea 2, que recorre Insurgentes desde el norte hasta el sur, es una alternativa razonable para quienes se hospedan en la Roma o la Condesa, aunque en días de partido la frecuencia puede ser irregular. Descarga los horarios offline en MetroGuia.mx antes de salir: la señal celular en las inmediaciones del estadio después del partido puede ser prácticamente nula por saturación de red.
          </p>

          <AdBannerLazyInArticle slot="1082410395" />

          {/* Guadalajara Section */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
            Guadalajara: El Estadio Akron y el SITEUR
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Guadalajara es, en muchos sentidos, la ciudad más amigable para el viajero de las tres sedes mexicanas. El centro histórico es compacto, hay buena señalización turística y el sistema de tren eléctrico —el SITEUR— conecta los puntos de mayor interés con relativa eficiencia. El Estadio Akron, donde juegan las Chivas del Guadalajara, está ubicado en la zona de Zapopan, en el área metropolitana, y tiene capacidad para 50,000 personas.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El SITEUR opera con tres líneas activas. La más relevante para los partidos del Mundial es la Línea 3, que recorre un trayecto diagonal desde las Arcos de Zapopan hasta la Central Camionera. Esta línea tiene una parada que facilita el acceso al Estadio Akron, y se espera que durante los días de partido el sistema opere con mayor frecuencia y horario extendido. El costo por viaje es de $9.50 MXN y se paga con la Tarjeta SITEUR, recargable en las taquillas de las estaciones. Carga mínimo $100 MXN al llegar para cubrir varios días de movilidad.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Para quienes se hospedan en el centro histórico de Guadalajara o en zonas cercanas a la Catedral, la Línea 1 del SITEUR (eje norte-sur) es la columna vertebral del trayecto. Desde la zona centro puedes trasladarte hasta conectar con la Línea 3 y de ahí acercarte al Estadio Akron. El recorrido completo puede tomar entre 35 y 50 minutos dependiendo del punto de origen. Una alternativa cómoda para grupos o familias es el Uber, que en Guadalajara funciona bien y suele costar entre $120 y $200 MXN desde el centro.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            Un detalle importante: el Aeropuerto Internacional de Guadalajara —oficialmente el Don Miguel Hidalgo y Costilla— no tiene conexión directa al sistema de tren eléctrico. Si llegas volando, la opción más práctica es un Uber o taxi desde la terminal aérea hasta tu hotel (entre $250 y $350 MXN dependiendo de la zona). Desde el hotel, ahí sí, puedes usar el SITEUR para moverte. El aeropuerto está a unos 17 kilómetros del centro y el trayecto en vehículo toma entre 20 y 40 minutos según el tráfico.
          </p>

          {/* Monterrey Section */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
            Monterrey: El Estadio BBVA y el Metrorrey
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Monterrey es la sede más norteña y, hay que decirlo con honestidad, la más dependiente del automóvil de las tres ciudades del Mundial en México. Es una ciudad diseñada en torno a las grandes avenidas y vialidades rápidas, y aunque el Metrorrey es un sistema eficiente y limpio, su cobertura no alcanza directamente al Estadio BBVA (también conocido como Estadio Banorte en algunos contextos), donde juega el Club de Fútbol Monterrey. El estadio está ubicado en Av. Pablo Livas, en Guadalupe, y tiene capacidad para más de 51,000 personas.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Metrorrey opera con tres líneas. La Línea 1 atraviesa el corazón de la ciudad de poniente a oriente y es la más útil para los turistas, ya que conecta zonas como la Macroplaza, el Barrio Antiguo y el Parque Fundidora (estación Y Griega). La Línea 2 complementa la cobertura hacia el norte. Para llegar al Estadio BBVA desde el metro, la estrategia más común es bajarse en la estación Eloy Alfaro o en la estación Estadio (Línea 2), aunque desde ahí aún hay que tomar un Uber o taxi durante unos 10-15 minutos para llegar al recinto. Durante el Mundial, es posible que se habiliten rutas especiales de autobús o servicios de transporte coordinados por la organización del evento; vale la pena verificar en el sitio oficial de la FIFA México.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El costo del Metrorrey es de $4.80 MXN por viaje sencillo. Se usa la tarjeta Feria, recargable en las taquillas de las estaciones. El sistema opera de lunes a sábado de 5:00 AM a 12:00 AM y los domingos de 6:00 AM a 11:00 PM, con posibles extensiones de horario durante el Mundial. El aeropuerto de Monterrey —el Internacional Mariano Escobedo— está a unos 24 kilómetros del centro histórico y tampoco tiene conexión directa al metro, así que el traslado inicial desde el aeropuerto también depende de Uber o taxi (entre $200 y $300 MXN).
          </p>

          <div style={{ backgroundColor: 'var(--linen)', border: '1px solid var(--primary-border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--forest)', marginTop: '0', marginBottom: '1.25rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Costos comparativos: transporte público en las tres sedes</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--forest)', color: '#fff' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Ciudad</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Sistema</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Tarifa / viaje</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Tarjeta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600', color: 'var(--cdmx)' }}>CDMX</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>Metro</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>$5 MXN</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>Tarjeta MI ($50)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'rgba(255,255,255,0.5)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600', color: 'var(--gdl)' }}>Guadalajara</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>SITEUR</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>$9.50 MXN</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>Tarjeta SITEUR</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600', color: 'var(--mty)' }}>Monterrey</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>Metrorrey</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>$4.80 MXN</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>Tarjeta Feria</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Apps and Practical Tips */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Apps, seguridad y frases útiles
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Antes de llegar a México, descarga tres aplicaciones en tu teléfono: Google Maps (con los mapas de las tres ciudades descargados para uso offline), Uber y Didi. Esta última es la alternativa local a Uber y suele ser más económica en algunas zonas. Para CDMX específicamente, MetroGuia.mx ofrece rutas optimizadas de metro que toman en cuenta las transferencias y los tiempos reales de espera en cada línea; puedes usarla desde el navegador sin necesidad de instalar nada.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            En cuanto a seguridad, el transporte público en las tres ciudades es generalmente seguro durante el día. Las precauciones de sentido común aplican: no mostrar objetos de valor, llevar la mochila al frente en espacios concurridos, evitar el transporte público después de la medianoche en zonas poco conocidas. En días de partido, la presencia policial suele ser mayor en las rutas hacia los estadios. Si tienes dudas sobre una ruta o una zona, un Uber siempre es la opción más predecible.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Una última consideración práctica: el tipo de cambio. En junio y julio de 2026, un aficionado que viaje desde Europa o Sudamérica encontrará que el transporte público mexicano es extraordinariamente barato. Incluso sumando varios días de traslados en las tres ciudades, el gasto en transporte público difícilmente supera los 200 o 300 pesos por día —menos de 15 dólares estadounidenses. Los Ubers para tramos que no cubre el metro tampoco son caros en comparación con estándares europeos. En ese sentido, México es una sede generosa para los aficionados con presupuesto ajustado.
          </p>

          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem' }}>
            <h3 style={{ marginTop: '0', marginBottom: '1.25rem', color: 'var(--forest)', fontFamily: "'Playfair Display', Georgia, serif" }}>Frases útiles para pedir indicaciones</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {[
                { es: '¿Dónde está la estación de metro?', en: 'Where is the metro station?' },
                { es: '¿Cuál es el siguiente tren?', en: 'When is the next train?' },
                { es: '¿A qué hora cierra el metro?', en: 'What time does the metro close?' },
                { es: '¿Dónde compro la tarjeta?', en: 'Where do I buy the card?' },
                { es: '¿Este tren va al estadio?', en: 'Does this train go to the stadium?' },
                { es: 'Un boleto, por favor', en: 'One ticket, please' },
              ].map((phrase, i) => (
                <div key={i} style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border-light)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--text)', marginBottom: '0.25rem' }}>{phrase.es}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>{phrase.en}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Glosario */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Glosario de términos de transporte
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El transporte público mexicano tiene su propio vocabulario que vale la pena conocer antes de llegar. Un <strong>torniquete</strong> es el torniquete o molinete de acceso a las estaciones; para atravesarlo necesitas acercar tu tarjeta al lector. Un <strong>transbordo</strong> es el cambio de una línea a otra dentro de una misma estación; en CDMX, los transbordos son gratuitos dentro de la red de metro. <strong>Terminal</strong> es la estación en los extremos de una línea, donde el tren no sigue más allá. Y un <strong>derrotero</strong> es el nombre que se usa para describir la ruta completa de una línea de un extremo al otro.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            Conocer estos términos no solo te ayuda a entender los mapas y los anuncios dentro del metro —que en CDMX se hacen en español—, sino también a comunicarte con mayor fluidez cuando necesites pedir indicaciones a algún pasajero o empleado del sistema. En México, la gente suele ser amable con los turistas que se acercan con buena disposición a preguntar. No tengas miedo de preguntar; a menudo, la mejor guía de transporte no está en ninguna app sino en la persona que está parada junto a ti esperando el mismo tren.
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* FAQ */}
          <h2 style={{ marginTop: '3rem', marginBottom: '2rem' }}>Preguntas frecuentes</h2>
          <div style={{ maxWidth: '800px' }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem',
                  marginBottom: '1rem',
                  cursor: 'pointer'
                }}
              >
                <summary style={{ fontWeight: '600', color: 'var(--text)', cursor: 'pointer', userSelect: 'none' }}>
                  {faq.question}
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <h3 style={{ marginTop: '0', marginBottom: '1rem', color: '#fff', fontFamily: "'Playfair Display', Georgia, serif" }}>
              Planea tu ruta exacta en CDMX
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
              Usa el planificador de MetroGuia para encontrar la ruta más rápida entre tu hotel y cualquier estación
            </p>
            <a href="/" style={{ textDecoration: 'none', marginRight: '1rem' }}>
              <button style={{
                backgroundColor: 'var(--amber)',
                color: 'var(--forest)',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}>
                Planificar Ruta
              </button>
            </a>
            <a href="/guides/guadalajara-monterrey-transporte-mundial/" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'transparent',
                color: '#fff',
                padding: '1rem 2rem',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: 'var(--radius)',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}>
                Guía GDL y MTY
              </button>
            </a>
          </div>

        </div>
      </article>
    </div>
  )
}
