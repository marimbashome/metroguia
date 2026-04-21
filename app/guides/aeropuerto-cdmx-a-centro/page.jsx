import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import FAQSchema from '@/app/components/FAQSchema'

export const metadata = {
  title: 'Del Aeropuerto de la CDMX al Centro: 7 Maneras Comparadas (Costos y Tiempos) | MetroGuia',
  description: 'Metro, Metrobús, Uber, taxi de sitio y más: comparativa completa con costos reales, tiempos y recomendaciones por perfil de viajero para llegar del AICM al centro de CDMX.',
  alternates: { canonical: 'https://metroguia.mx/guides/aeropuerto-cdmx-a-centro/' },
  openGraph: {
    title: 'Del Aeropuerto de la CDMX al Centro: 7 Maneras Comparadas (Costos y Tiempos)',
    description: 'Metro, Metrobús, Uber, taxi de sitio y más: comparativa completa con costos reales, tiempos y recomendaciones por perfil de viajero para llegar del AICM al centro de CDMX.',
    url: 'https://metroguia.mx/guides/aeropuerto-cdmx-a-centro/',
    type: 'article',
  },
}

export default function AeropuertoCdmxACentroPage() {
  const faqs = [
    {
      question: '¿Cuál es la opción más barata para llegar del aeropuerto al centro de CDMX?',
      answer: 'El metro (Línea 5) es la opción más económica: $5 MXN por viaje más $50 MXN si necesitas comprar la Tarjeta MI. El Metrobús Línea 4 también es muy barato ($30 MXN con tarjeta). Ambos conectan el aeropuerto con el centro histórico de forma eficiente durante el día.'
    },
    {
      question: '¿Cuánto tarda el metro del aeropuerto al centro?',
      answer: 'Desde la estación Terminal Aérea (AICM Terminal 1, Línea 5) hasta el centro histórico (Bellas Artes) el trayecto toma aproximadamente 50-70 minutos incluyendo la caminata desde la terminal y el transbordo en Pantitlán si vas a la Línea 2. Sin transbordo, la Línea 5 llega directo a Bellas Artes en unas 8 estaciones.'
    },
    {
      question: '¿Cuánto cuesta un Uber del aeropuerto al centro de CDMX?',
      answer: 'Un Uber desde el AICM hasta el Centro Histórico, la Roma o la Condesa cuesta típicamente entre $250 y $450 MXN (unos $13-23 USD) dependiendo del tráfico y el tipo de servicio. En hora pico puede subir a $600 MXN o más. Solicítalo desde el área de salidas o en las zonas habilitadas para ridesharing.'
    },
    {
      question: '¿Es seguro el taxi del aeropuerto de CDMX?',
      answer: 'Los taxis de sitio con boleto oficial (comprado en los kioscos amarillos o morados dentro de la terminal) son seguros y tienen tarifa fija. Nunca aborden un taxi en la calle fuera de la terminal sin boleto oficial. Los "taxis piratas" que abordan pasajeros sin boleto son desaconsejados por riesgo de robo o cobro excesivo.'
    },
    {
      question: '¿Qué es el Aerotren y cómo funciona entre terminales?',
      answer: 'El Aerotren es un tren automático gratuito (para pasajeros con boarding pass) que conecta la Terminal 1 y la Terminal 2 del AICM. El trayecto toma unos 8 minutos. Si llegas a T2 y necesitas el metro (que está en T1), toma el Aerotren primero. Funciona las 24 horas.'
    },
    {
      question: '¿Dónde NO debo cambiar divisas en el aeropuerto?',
      answer: 'Los kioscos de cambio de divisas dentro del aeropuerto ofrecen tasas significativamente peores que los cajeros automáticos o las casas de cambio en el centro de la ciudad. Si necesitas pesos, usa un cajero con tu tarjeta bancaria en el aeropuerto (mejor tasa) y evita los mostradores de cambio en la terminal.'
    }
  ]

  const opciones = [
    {
      num: 1,
      nombre: 'Metro — Línea 5',
      icono: 'M',
      color: 'var(--chiapas)',
      costo: '$5 MXN',
      tiempo: '50-70 min',
      dificultad: 'Media',
      seguridad: 'Alta (de día)',
      maletas: 'Difícil en pico',
      pros: 'Baratísimo. Sin tráfico. Frecuente.',
      contras: 'Lleno en horas pico. Caminata desde T1.',
    },
    {
      num: 2,
      nombre: 'Metrobús — Línea 4',
      icono: 'MB',
      color: 'var(--info)',
      costo: '$30 MXN',
      tiempo: '50-60 min',
      dificultad: 'Baja',
      seguridad: 'Alta',
      maletas: 'Cómodo',
      pros: 'Directo. Cómodo. Fácil con maletas.',
      contras: 'Lento en hora pico. Requiere tarjeta MI.',
    },
    {
      num: 3,
      nombre: 'Uber / Didi',
      icono: 'U',
      color: 'var(--text)',
      costo: '$250-450 MXN',
      tiempo: '30-90 min',
      dificultad: 'Muy baja',
      seguridad: 'Muy alta',
      maletas: 'Excelente',
      pros: 'Puerta a puerta. Sin conexiones. Rastreable.',
      contras: 'Precio variable. Tráfico impredecible.',
    },
    {
      num: 4,
      nombre: 'Taxi de sitio oficial',
      icono: 'T',
      color: '#DDAA00',
      costo: '$300-500 MXN',
      tiempo: '30-90 min',
      dificultad: 'Muy baja',
      seguridad: 'Muy alta',
      maletas: 'Excelente',
      pros: 'Tarifa fija. Seguro. Sin app necesaria.',
      contras: 'Más caro que Uber. No hay rastreo GPS.',
    },
    {
      num: 5,
      nombre: 'Taxi pirata',
      icono: '!',
      color: 'var(--danger)',
      costo: 'Variable',
      tiempo: 'Variable',
      dificultad: '—',
      seguridad: 'NO recomendado',
      maletas: '—',
      pros: '—',
      contras: 'Riesgo de robo y cobro excesivo. Evitar siempre.',
    },
    {
      num: 6,
      nombre: 'Camión / pesero',
      icono: 'C',
      color: 'var(--text-muted)',
      costo: '$8-15 MXN',
      tiempo: '60-120 min',
      dificultad: 'Muy alta',
      seguridad: 'Media',
      maletas: 'Muy difícil',
      pros: 'Muy barato.',
      contras: 'Confuso para turistas. Rutas complejas. No recomendado con equipaje.',
    },
    {
      num: 7,
      nombre: 'Renta de auto',
      icono: 'A',
      color: 'var(--text-dim)',
      costo: '$800-1,500 MXN/día',
      tiempo: '30-120 min',
      dificultad: 'Alta',
      seguridad: 'Media',
      maletas: 'Perfecta',
      pros: 'Libertad total. Útil para salir de la ciudad.',
      contras: 'Tráfico de CDMX extremo. Estacionamiento escaso. Solo vale si sales de la ciudad.',
    },
  ]

  return (
    <div>
      <BreadcrumbSchema items={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Guías', url: '/guides' },
        { name: 'Del Aeropuerto de CDMX al Centro', url: '/guides/aeropuerto-cdmx-a-centro/' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, var(--forest) 0%, var(--chiapas) 100%)' }}>
        <div className="container">
          <p style={{ color: 'var(--amber)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Guía de viajero
          </p>
          <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '800', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.15', marginBottom: '1rem' }}>
            Del Aeropuerto de la CDMX al Centro: 7 Maneras Comparadas
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '680px', lineHeight: '1.7' }}>
            Metro, Metrobús, Uber, taxi oficial y más: costos reales, tiempos honestos y una recomendación concreta según tu perfil de viajero.
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: '4rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Intro */}
          <p style={{ fontSize: '1.15rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem', fontFamily: "'Playfair Display', Georgia, serif" }}>
            Aterrizar en el Aeropuerto Internacional Benito Juárez de la Ciudad de México es, para muchos viajeros, su primer encuentro real con la capital. El aeropuerto recibe alrededor de 50 millones de pasajeros al año, es el más transitado de América Latina y está ubicado dentro de la ciudad, a apenas 13 kilómetros del Zócalo. Esa cercanía es una ventaja enorme comparada con otros aeropuertos de la región, pero también significa que el entorno inmediato es urbano y denso, y que las opciones para llegar al centro son tantas que pueden resultar confusas.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Esta guía compara honestamente las siete opciones disponibles: desde el metro a $5 pesos hasta el taxi de sitio a $400. No todas son iguales, no todas aplican para todos los viajeros, y hay una que debes evitar por completo. Aquí encontrarás los números reales, los tiempos realistas —no los que aparecen en folletos turísticos— y la recomendación concreta según tu situación: ¿vas solo con mochila? ¿Llegas con familia y maletas? ¿Es tu primer viaje a México? Las respuestas son diferentes.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            Antes de entrar en cada opción, un dato esencial: el AICM tiene dos terminales, la Terminal 1 (la más vieja, donde operan la mayoría de las aerolíneas nacionales e internacionales) y la Terminal 2 (más nueva, donde opera principalmente Aeroméxico y algunas internacionales). Están conectadas por el Aerotren, un tren automático gratuito para pasajeros con tarjeta de embarque que tarda unos ocho minutos. Si llegas a T2 y quieres tomar el metro, que está en T1, necesitas tomar primero el Aerotren.
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* Options detail */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '2rem' }}>
            Las 7 opciones: detalle completo
          </h2>

          {/* Option 1: Metro */}
          <div style={{ backgroundColor: 'var(--linen)', border: '1px solid var(--primary-border)', borderLeft: '5px solid var(--chiapas)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: 'var(--chiapas)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>M</span>
              <h3 style={{ margin: '0', color: 'var(--forest)', fontFamily: "'Playfair Display', Georgia, serif" }}>Opción 1 — Metro Línea 5 (Terminal Aérea)</h3>
            </div>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1rem' }}>
              El metro es la opción más económica por un margen enorme. La Línea 5 (amarilla) tiene la estación "Terminal Aérea" dentro del aeropuerto, accesible desde la Terminal 1. Desde T1, la caminata hasta la estación de metro toma entre 8 y 12 minutos: hay que salir de la terminal, cruzar por un puente peatonal y bajar hasta los andenes. No es complicado, pero con maletas grandes puede ser agotador.
            </p>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1rem' }}>
              Una vez en el metro, la Línea 5 te lleva en dirección a Buenavista (al poniente y norte). Para llegar al centro histórico (Zócalo, Bellas Artes), lo más práctico es hacer transbordo en Pantitlán a la Línea 1 o tomar hasta Bellas Artes directamente —la Línea 5 no pasa exactamente por el centro histórico, pero llega a puntos desde donde el transbordo es sencillo. El trayecto total desde la estación Terminal Aérea hasta Bellas Artes puede tomar entre 50 y 70 minutos incluyendo esperas.
            </p>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '0' }}>
              El costo es de $5 MXN por viaje. Si no tienes Tarjeta MI, necesitas comprarla en la taquilla de la estación por $50 MXN adicionales (el plástico vacío) y luego recargar saldo. Esta opción es ideal para viajeros solos o en pareja con equipaje ligero que quieran ahorrar dinero y tienen tiempo flexible.
            </p>
          </div>

          {/* Option 2: Metrobús */}
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '5px solid var(--info)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: 'var(--info)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.75rem', flexShrink: 0 }}>MB</span>
              <h3 style={{ margin: '0', color: 'var(--text)', fontFamily: "'Playfair Display', Georgia, serif" }}>Opción 2 — Metrobús Línea 4</h3>
            </div>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1rem' }}>
              El Metrobús Línea 4 es la opción de transporte público que ofrece el mejor equilibrio entre comodidad, precio y practicidad para llegar al centro desde el aeropuerto. Sale directo desde el AICM (Terminal 1) y llega a la estación Buenavista, en el norte del Centro Histórico, sin necesidad de transbordos. Las unidades son autobuses modernos con aire acondicionado y espacio suficiente para equipaje de mano y maletas de tamaño moderado.
            </p>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '0' }}>
              El costo es de $30 MXN con tarjeta MI (si llegas sin tarjeta, puedes comprarla en la parada de Metrobús dentro del aeropuerto). El trayecto toma entre 50 y 60 minutos hasta Buenavista en condiciones normales, pero puede extenderse a 80 o 90 minutos en hora pico porque el Metrobús circula en superficie y está sujeto al tráfico de la ciudad. Es una opción excelente para quienes se hospedan en el Centro Histórico, Tepito o zonas al norte del Zócalo.
            </p>
          </div>

          {/* Option 3: Uber */}
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '5px solid var(--text)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: 'var(--text)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>U</span>
              <h3 style={{ margin: '0', color: 'var(--text)', fontFamily: "'Playfair Display', Georgia, serif" }}>Opción 3 — Uber o Didi</h3>
            </div>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1rem' }}>
              Uber y su competidor local Didi son las opciones más cómodas para llegar del aeropuerto al hotel sin complicaciones. Ambas apps funcionan perfectamente en CDMX y los conductores están acostumbrados a recoger pasajeros en el aeropuerto. El costo típico a destinos como el Centro Histórico, la Roma, la Condesa o Polanco oscila entre $250 y $450 MXN (entre $13 y $23 USD al tipo de cambio actual), pero puede subir considerablemente en hora pico o con tráfico intenso.
            </p>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1rem' }}>
              Para solicitar el Uber desde el aeropuerto, ve a la zona de salidas y busca las áreas señalizadas para ridesharing. El aeropuerto tiene zonas específicas designadas para la recolección de aplicaciones de transporte; no te subas al primer vehículo que se te acerque. La ventaja clave frente a los taxis: tienes el nombre del conductor, la placa del auto y el trayecto queda registrado en la app, lo que añade una capa de seguridad importante.
            </p>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '0' }}>
              Descarga ambas apps (Uber y Didi) antes de aterrizar para poder comparar precios en el momento. Didi suele ser más barato en rutas cortas y durante las promociones de bienvenida.
            </p>
          </div>

          {/* Option 4: Taxi de sitio */}
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '5px solid var(--warning)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: 'var(--warning)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>T</span>
              <h3 style={{ margin: '0', color: 'var(--text)', fontFamily: "'Playfair Display', Georgia, serif" }}>Opción 4 — Taxi de sitio oficial</h3>
            </div>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1rem' }}>
              El taxi de sitio oficial es la alternativa al Uber para quienes no quieren usar aplicaciones o llegan sin batería en el teléfono. La clave es simple: compra el boleto en los kioscos de taxis autorizados dentro de la terminal de llegadas, antes de salir al exterior. Los kioscos están señalizados y ofrecen tarifas fijas según la zona de destino —así sabes exactamente cuánto pagarás antes de subir al taxi.
            </p>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '0' }}>
              El costo para destinos en el centro de la ciudad suele estar entre $300 y $500 MXN. Es más caro que el Uber en condiciones normales, pero ofrece la ventaja de la tarifa fija y de ser completamente controlado por el sistema del aeropuerto. El conductor recibe una copia del boleto con tu destino. La desventaja es que no hay rastreo GPS, aunque los conductores de sitio del AICM tienen buena reputación en general.
            </p>
          </div>

          {/* Option 5: Taxi pirata */}
          <div style={{ backgroundColor: 'rgba(220, 38, 38, 0.05)', border: '2px solid var(--danger)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: 'var(--danger)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1rem', flexShrink: 0 }}>!</span>
              <h3 style={{ margin: '0', color: 'var(--danger)', fontFamily: "'Playfair Display', Georgia, serif" }}>Opción 5 — Taxis no autorizados: NO uses</h3>
            </div>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '0' }}>
              Al salir de las terminales, especialmente en la zona de llegadas, es común que personas se acerquen ofreciendo taxi. Estos no son taxis autorizados y representan un riesgo real: el cobro puede ser arbitrario y muy elevado, y en casos extremos han sido vinculados a robos. La regla es simple: nunca tomes un taxi de mano de alguien que te abordó en la calle fuera del aeropuerto sin boleto oficial. Usa siempre los kioscos dentro de la terminal o las apps de ridesharing desde las zonas autorizadas.
            </p>
          </div>

          {/* Option 6: Camión */}
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: 'var(--text-muted)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>C</span>
              <h3 style={{ margin: '0', color: 'var(--text)', fontFamily: "'Playfair Display', Georgia, serif" }}>Opción 6 — Camión urbano o pesero</h3>
            </div>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '0' }}>
              Existen rutas de autobuses urbanos (conocidos localmente como "camiones" o "peseros") que pasan por las inmediaciones del aeropuerto. Son muy baratos —entre $8 y $15 MXN— pero son una opción prácticamente inviable para turistas con equipaje. Las rutas son difíciles de interpretar sin conocer la ciudad, los autobuses no tienen numeración fácil de identificar para foráneos, no hay señalización en los pasillos de llegadas que los indique con claridad, y viajar con maletas en estas unidades en horas concurridas es genuinamente incómodo. Esta opción es para residentes que conocen bien las rutas, no para viajeros recién llegados.
            </p>
          </div>

          {/* Option 7: Renta */}
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: 'var(--text-dim)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>A</span>
              <h3 style={{ margin: '0', color: 'var(--text)', fontFamily: "'Playfair Display', Georgia, serif" }}>Opción 7 — Renta de auto</h3>
            </div>
            <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '0' }}>
              Las principales empresas de renta de autos tienen mostradores en el aeropuerto. Sin embargo, rentar un auto para moverse dentro de la Ciudad de México es, salvo excepciones, una mala idea. El tráfico en CDMX es legendariamente intenso, el estacionamiento en las zonas turísticas y de negocios es escaso y caro, y la sola experiencia de conducir en el Periférico o el Circuito Interior puede resultar estresante para quien no conoce la ciudad. La renta de auto tiene sentido únicamente si tu viaje incluye tramos fuera de la ciudad —Teotihuacán, Taxco, Puebla— donde el transporte público se vuelve menos conveniente. Para moverte dentro de la capital, siempre hay una opción mejor.
            </p>
          </div>

          <AdBannerLazyInArticle slot="1082410395" />

          {/* Tabla comparativa */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Tabla comparativa: las 7 opciones de un vistazo
          </h2>

          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', minWidth: '600px' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--forest)', color: '#fff' }}>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Opción</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Costo MXN</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Tiempo</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Maletas</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Seguridad</th>
                </tr>
              </thead>
              <tbody>
                {opciones.map((op, i) => (
                  <tr key={op.num} style={{ borderBottom: '1px solid var(--border)', backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--bg)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600', color: op.num === 5 ? 'var(--danger)' : 'var(--text)' }}>{op.nombre}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>{op.costo}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)' }}>{op.tiempo}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>{op.maletas}</td>
                    <td style={{ padding: '0.75rem 1rem', color: op.num === 5 ? 'var(--danger)' : 'var(--text-muted)' }}>{op.seguridad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recomendaciones por perfil */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Recomendación por perfil de viajero
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            No existe una sola respuesta correcta para todos. La mejor opción depende de cuántas personas viajan juntas, cuánto equipaje llevan, a qué hora llegan y cuánto tiempo tienen. Aquí van las recomendaciones concretas para los perfiles más comunes.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              {
                perfil: 'Mochilero solo o pareja ligera de equipaje',
                rec: 'Metro (Línea 5) o Metrobús Línea 4',
                detalle: 'Llegas barato y rápido. Carga tu Tarjeta MI desde el primer día y úsala para todos los trayectos de tu visita.',
                color: 'var(--chiapas)',
              },
              {
                perfil: 'Familia con maletas',
                rec: 'Uber o Didi',
                detalle: 'Con maletas grandes y niños, el transporte público se vuelve logísticamente complicado. El Uber puerta a puerta vale la diferencia de precio.',
                color: 'var(--info)',
              },
              {
                perfil: 'Viaje de negocios',
                rec: 'Taxi de sitio oficial o Uber Black',
                detalle: 'Tarifa previsible, vehículo cómodo, cero estrés. El taxi de sitio con boleto oficial o Uber Black son la opción ejecutiva estándar.',
                color: 'var(--warning)',
              },
              {
                perfil: 'Presupuesto muy ajustado',
                rec: 'Metro + transbordo',
                detalle: '$5 MXN es imbatible. Llega fuera de hora pico, lleva equipaje mínimo y ten paciencia con los transbordos.',
                color: 'var(--primary)',
              },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: 'var(--linen)', borderTop: `3px solid ${p.color}`, padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>{p.perfil}</div>
                <div style={{ fontWeight: '700', color: p.color, fontSize: '1rem', marginBottom: '0.75rem' }}>{p.rec}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{p.detalle}</div>
              </div>
            ))}
          </div>

          {/* Tip cambio divisas */}
          <div style={{ backgroundColor: 'rgba(220, 38, 38, 0.05)', border: '1px solid var(--danger)', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '3rem' }}>
            <h4 style={{ color: 'var(--danger)', marginTop: '0', marginBottom: '0.75rem' }}>Donde NO cambies divisas: los kioscos del aeropuerto</h4>
            <p style={{ color: 'var(--text)', margin: '0', lineHeight: '1.75', fontSize: '0.97rem' }}>
              Los mostradores de cambio de divisas en la terminal ofrecen tasas entre un 10% y un 20% peores que las del mercado. Si necesitas pesos al llegar, usa un cajero automático del aeropuerto con tu tarjeta bancaria internacional —la tasa será mucho mejor, aunque puede haber una comisión fija por retiro. Una vez instalado en tu hotel, las casas de cambio del centro ofrecen aún mejores tasas que los cajeros del aeropuerto. Nunca cambies más de lo estrictamente necesario para el primer traslado.
            </p>
          </div>

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
            background: 'linear-gradient(135deg, var(--forest) 0%, var(--chiapas) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <h3 style={{ marginTop: '0', marginBottom: '1rem', color: '#fff', fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ya estás en CDMX — ahora planea tu siguiente ruta
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
              Usa el planificador de MetroGuia para encontrar la ruta exacta de metro entre cualquier punto de la ciudad
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
                Planificar Ruta en Metro
              </button>
            </a>
            <a href="/guides/cdmx-metro-primera-vez/" style={{ textDecoration: 'none' }}>
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
                Guía Metro para Principiantes
              </button>
            </a>
          </div>

        </div>
      </article>
    </div>
  )
}
