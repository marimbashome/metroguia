import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import FAQSchema from '@/app/components/FAQSchema'

export const metadata = {
  title: 'Guadalajara y Monterrey en el Mundial 2026: Guía de Transporte Público | MetroGuia',
  description: 'Cómo llegar al Estadio Akron en Guadalajara y al Estadio BBVA en Monterrey en transporte público. SITEUR, Metrorrey, tarjetas, costos y tips para el Mundial 2026.',
  alternates: { canonical: 'https://metroguia.mx/guides/guadalajara-monterrey-transporte-mundial/' },
  openGraph: {
    title: 'Guadalajara y Monterrey en el Mundial 2026: Tu Guía de Transporte Público',
    description: 'Cómo llegar al Estadio Akron en Guadalajara y al Estadio BBVA en Monterrey en transporte público. SITEUR, Metrorrey, tarjetas, costos y tips para el Mundial 2026.',
    url: 'https://metroguia.mx/guides/guadalajara-monterrey-transporte-mundial/',
    type: 'article',
  },
}

export default function GuadalajaraMonterreyTransporteMundialPage() {
  const faqs = [
    {
      question: '¿Cómo llego al Estadio Akron de Guadalajara en transporte público?',
      answer: 'La Línea 3 del SITEUR (Tren Eléctrico Urbano) es la opción más directa. Sube en el centro histórico hacia Arcos de Zapopan y bájate en la parada más cercana al estadio. En días de partido el sistema suele aumentar la frecuencia. El costo es $9.50 MXN con Tarjeta SITEUR.'
    },
    {
      question: '¿Hay metro cerca del Estadio BBVA en Monterrey?',
      answer: 'No hay estación de metro con acceso directo al Estadio BBVA. Las estaciones más cercanas del Metrorrey (como Estadio o Eloy Alfaro en la Línea 2) quedan a varios kilómetros del recinto. La combinación más práctica es bajarse en la estación más cercana y completar el trayecto en Uber o en servicio de transporte especial habilitado para días de partido.'
    },
    {
      question: '¿Cuánto cuesta el transporte público en Guadalajara?',
      answer: 'El SITEUR (tren eléctrico) cuesta $9.50 MXN por viaje. El Mi Macro Periférico (BRT) también usa la Tarjeta SITEUR. La tarjeta se compra en las taquillas de las estaciones y es recargable. Es recomendable cargar al menos $100 MXN al llegar para cubrir varios días de movilidad.'
    },
    {
      question: '¿Cuánto cuesta el metro de Monterrey?',
      answer: 'El Metrorrey tiene una tarifa de $4.80 MXN por viaje sencillo y $9.60 MXN ida y vuelta en el día. Se paga con la tarjeta Feria, recargable en las taquillas de todas las estaciones. Es uno de los metros más económicos del país.'
    },
    {
      question: '¿Cómo llego del aeropuerto de Guadalajara al centro en transporte público?',
      answer: 'El aeropuerto de Guadalajara no tiene conexión directa al SITEUR. La opción más práctica es Uber o taxi de sitio desde la terminal, con un costo de $250-350 MXN al centro histórico. El trayecto toma entre 20 y 40 minutos dependiendo del tráfico.'
    },
    {
      question: '¿Cuál ciudad es más fácil de recorrer en transporte público: Guadalajara o Monterrey?',
      answer: 'Guadalajara es considerablemente más amigable para el transporte público que Monterrey. El SITEUR tiene mayor cobertura de zonas turísticas y el centro histórico es compacto y peatonal. Monterrey es más dependiente del automóvil y el Metrorrey, aunque eficiente, no llega a todos los puntos de interés para los aficionados del Mundial.'
    }
  ]

  return (
    <div>
      <BreadcrumbSchema items={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Guías', url: '/guides' },
        { name: 'Guadalajara y Monterrey — Mundial 2026', url: '/guides/guadalajara-monterrey-transporte-mundial/' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #1e2d40 50%, var(--forest-soft) 100%)' }}>
        <div className="container">
          <p style={{ color: 'var(--amber)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            FIFA World Cup 2026
          </p>
          <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '800', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.15', marginBottom: '1rem' }}>
            Guadalajara y Monterrey en el Mundial 2026: Tu Guía de Transporte Público
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '680px', lineHeight: '1.7' }}>
            Cuatro partidos en el Estadio Akron, cuatro en el Estadio BBVA: cómo llegar, qué tarjeta usar, qué esperar del SITEUR y el Metrorrey, y cómo navegar dos ciudades muy distintas entre sí.
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: '4rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Intro */}
          <p style={{ fontSize: '1.15rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem', fontFamily: "'Playfair Display', Georgia, serif" }}>
            El Mundial 2026 lleva el fútbol a tres ciudades mexicanas muy distintas entre sí. Si la Ciudad de México es una metrópoli de escala casi imposible de abarcar, Guadalajara y Monterrey representan dos caracteres urbanos completamente diferentes: la primera es una ciudad colonial de vocación cultural, con un centro histórico denso y un sistema de transporte que intenta acompañar esa compacidad; la segunda es una ciudad industrial del norte, moderna y ancha, donde el automóvil ha sido históricamente el rey del transporte y donde el metro, aunque eficiente, tiene limitaciones de cobertura que el aficionado extranjero debe conocer antes de llegar.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Esta guía está dividida en dos secciones: Guadalajara primero, Monterrey después. En cada una encontrarás cómo funciona el sistema de transporte local, cómo llegar al estadio sede desde el centro y desde el aeropuerto, qué tarjeta necesitas, los costos reales de cada trayecto y algunos tips prácticos sobre los atractivos turísticos accesibles en transporte público. Al final, una comparación directa entre ambas ciudades que te ayuda a calibrar las expectativas si vas a visitar las dos.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            Si también planeas ver algún partido en la Ciudad de México, consulta nuestra{' '}
            <a href="/guides/fifa-mundial-2026-mexico-transporte/" style={{ color: 'var(--chiapas)', textDecoration: 'underline', textDecorationColor: 'var(--primary-border)' }}>guía completa de transporte para el Mundial en México</a>, que cubre los tres estadios en un solo documento.
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* Separador Guadalajara */}
          <div style={{ backgroundColor: 'var(--gdl)', height: '4px', borderRadius: 'var(--radius-full)', marginBottom: '3rem' }} />

          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.5rem' }}>
            Guadalajara
          </h2>
          <p style={{ color: 'var(--gdl)', fontWeight: '600', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Estadio Akron · 4 partidos · Línea 3 SITEUR
          </p>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Guadalajara —o "Guanato" como la llaman cariñosamente sus habitantes en el habla coloquial— es la capital del estado de Jalisco y la segunda ciudad más importante de México. Con alrededor de cinco millones de habitantes en su área metropolitana, tiene una escala humana que contrasta favorablemente con la abrumadora extensión de la CDMX. El centro histórico es genuinamente bello: el conjunto que forman la Catedral, el Palacio de Gobierno, el Instituto Cultural Cabañas y el Mercado San Juan de Dios es de los más fotogénicos del país y puede recorrerse cómodamente a pie en un día.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El sistema de transporte público de Guadalajara se llama SITEUR: Sistema de Tren Eléctrico Urbano. Tiene actualmente tres líneas en operación, con una cuarta en construcción. La Línea 1 recorre el eje norte-sur, atravesando el centro histórico y conectando Periférico Norte con Periférico Sur. La Línea 2 va de oriente a poniente, pasando por Plaza Patria y áreas comerciales del norte. La Línea 3 —la más nueva y relevante para el Mundial— traza un recorrido diagonal desde la zona de Arcos de Zapopan hacia el centro y luego hacia la Central Camionera (terminal de autobuses foráneos).
          </p>

          <h3 style={{ color: 'var(--forest)', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>El Estadio Akron y la Línea 3</h3>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Estadio Akron, donde juegan las Chivas del Guadalajara y donde se disputarán los cuatro partidos del Mundial, está ubicado en el municipio de Zapopan, en el área metropolitana. Su acceso más conveniente en transporte público es a través de la Línea 3 del SITEUR, que tiene estaciones en la zona de Zapopan. En días de partido el SITEUR suele aumentar la frecuencia de trenes y extender el horario de servicio, especialmente en la Línea 3, para absorber el flujo de aficionados. Es recomendable verificar con anticipación en el sitio oficial del SITEUR los servicios especiales programados para cada fecha de partido.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Desde el centro histórico, el trayecto en SITEUR hacia el Estadio Akron toma entre 35 y 50 minutos dependiendo del punto de partida dentro de la red. El costo es de $9.50 MXN por viaje con Tarjeta SITEUR. La tarjeta se compra en las taquillas de cualquier estación del sistema y se recarga con el saldo que necesites; es completamente anónima y no requiere registro de datos personales. Para tu estancia en Guadalajara, carga al menos $100 MXN al llegar: cubrirá varios días de movilidad urbana.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Para los días de partido, el consejo más práctico es el mismo que en cualquier sede del Mundial: llega con tiempo suficiente para absorber los imprevistos. La saturación del sistema de transporte antes de un partido importante en un estadio de 50,000 personas puede hacer que los tiempos estimados se alarguen. Salir con tres horas de anticipación desde tu hotel es una buena práctica, especialmente si tu hotel está en el centro histórico y necesitas hacer transbordo entre líneas del SITEUR.
          </p>

          {/* Complementos GDL */}
          <h3 style={{ color: 'var(--forest)', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Mi Macro Periférico y Mi Macro Calzada</h3>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Además del SITEUR, Guadalajara tiene dos sistemas BRT (autobuses en carril exclusivo) que complementan la cobertura del tren: el Mi Macro Periférico, que recorre el Anillo Periférico —la vía rápida que bordea la ciudad— y el Mi Macro Calzada, que circula por la calzada Independencia. Ambos usan la misma Tarjeta SITEUR con la misma tarifa de $9.50 MXN. Para los aficionados que se hospedan en hoteles fuera del centro histórico pero cerca de alguno de estos corredores, los sistemas Macro pueden ser una alternativa eficiente para conectar con el SITEUR antes de llegar al estadio.
          </p>

          {/* Aeropuerto GDL */}
          <h3 style={{ color: 'var(--forest)', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Del aeropuerto al centro en Guadalajara</h3>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Aeropuerto Internacional de Guadalajara —oficialmente llamado Miguel Hidalgo y Costilla— está a unos 17 kilómetros al sur del centro histórico. A diferencia del aeropuerto de la CDMX, el de Guadalajara no tiene conexión directa al SITEUR: no hay estación de tren eléctrico dentro ni a pasos del aeropuerto. La opción más práctica para llegar al centro al llegar a Guadalajara es un Uber o un taxi de sitio.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Un Uber desde el aeropuerto al centro histórico de Guadalajara cuesta típicamente entre $250 y $350 MXN y el trayecto toma entre 25 y 45 minutos dependiendo del tráfico. Los taxis de sitio autorizados tienen kioscos dentro de la terminal de llegadas y ofrecen tarifas fijas similares o ligeramente superiores. Al igual que en la CDMX, nunca tomes un taxi de mano de alguien que te aborde fuera de los kioscos oficiales.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            Una vez en tu hotel en el centro histórico o en zonas como Tlaquepaque o Tonalá, el SITEUR se vuelve el medio más conveniente para moverte. Guadalajara también tiene una oferta de bicicletas públicas (MiBici) con estaciones cerca de las principales líneas del SITEUR, lo que puede ser una forma agradable de recorrer distancias cortas en los días que no hay partido.
          </p>

          {/* Turismo GDL */}
          <h3 style={{ color: 'var(--forest)', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Atractivos accesibles en SITEUR</h3>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            El centro histórico de Guadalajara es perfectamente accesible desde la Línea 1 del SITEUR. La estación Juárez te deja a pasos de la Catedral y del Instituto Cultural Cabañas, declarado Patrimonio de la Humanidad por la UNESCO y uno de los edificios más impresionantes de México. El Mercado San Juan de Dios —el mercado techado más grande de América Latina, según afirman sus promotores— está a tres minutos a pie de la estación Independencia de la Línea 1. El Parque Agua Azul, uno de los parques urbanos más importantes de la ciudad, tiene también acceso cómodo desde el SITEUR. Si extiendes tu visita a Tlaquepaque, el barrio artesanal y gastronómico más famoso de la ciudad, puedes combinar una ruta en SITEUR con un trayecto corto en Uber para llegar ahí directamente.
          </p>

          <AdBannerLazyInArticle slot="1082410395" />

          {/* Separador Monterrey */}
          <div style={{ backgroundColor: 'var(--mty)', height: '4px', borderRadius: 'var(--radius-full)', marginBottom: '3rem', marginTop: '2rem' }} />

          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.5rem' }}>
            Monterrey
          </h2>
          <p style={{ color: 'var(--mty)', fontWeight: '600', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Estadio BBVA · 4 partidos · Metrorrey + Uber
          </p>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Monterrey es la capital del estado de Nuevo León y el principal centro económico e industrial del norte de México. Con una población metropolitana de más de cuatro millones de habitantes, es una ciudad moderna y dinámica que en las últimas dos décadas ha experimentado un crecimiento espectacular impulsado por la industria manufacturera y, más recientemente, por el nearshoring de empresas internacionales. Es también una ciudad que, para bien y para mal, fue diseñada alrededor del automóvil: las avenidas son anchas, las distancias entre puntos de interés son grandes y el transporte público, aunque funcional, tiene limitaciones que el viajero debe conocer.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El sistema de metro de Monterrey se llama Metrorrey y tiene tres líneas activas. La Línea 1 es la más larga y recorre el eje poniente-oriente de la ciudad, pasando por la Macroplaza (el centro cívico más grande del país), el Barrio Antiguo y zonas comerciales. La Línea 2 corre de norte a sur, conectando zonas residenciales con el centro. La Línea 3, la más reciente, extiende la cobertura hacia el sur. El sistema es limpio, eficiente y puntual para los estándares mexicanos, pero su cobertura no alcanza a todos los puntos que los aficionados del Mundial necesitarán.
          </p>

          <h3 style={{ color: 'var(--forest)', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>El Estadio BBVA y el desafío del transporte</h3>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Estadio BBVA —también conocido como Estadio Banorte en algunos contextos, y sede del Club de Fútbol Monterrey— es uno de los estadios más modernos de México. Tiene capacidad para más de 51,000 personas y está ubicado en el municipio de Guadalupe, en la zona oriente del área metropolitana. Su acceso en transporte público es el principal desafío logístico del Mundial en Monterrey: no hay una estación de metro con acceso directo al estadio.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La estrategia más práctica que usan los aficionados locales es combinar el Metrorrey con un Uber o taxi para completar el trayecto. Las estaciones de la Línea 2 que quedan más cerca del área del estadio son puntos de salida razonables, desde donde un Uber tarda entre 10 y 20 minutos en llegar al recinto. Es probable que para el Mundial se habiliten servicios de transporte especiales —rutas de autobús, servicios de shuttle— organizados por la FIFA o por el gobierno de Nuevo León; está pendiente verificar en los canales oficiales del evento con anticipación al partido.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Una consideración importante para los días de partido en Monterrey: Uber y Didi pueden tener tiempos de espera muy largos en los alrededores del estadio inmediatamente después del partido. La saturación de solicitudes puede hacer que los precios suban (tarifa dinámica) y que los conductores tarden 15 o 20 minutos en llegar. Una estrategia efectiva es alejarse a pie unas cuatro o cinco cuadras del estadio antes de solicitar el viaje: lejos de la zona de mayor densidad de solicitudes, la espera suele ser considerablemente menor.
          </p>

          {/* Tarifa Metrorrey */}
          <div style={{ backgroundColor: 'var(--linen)', border: '1px solid var(--primary-border)', borderLeft: '4px solid var(--mty)', padding: '1.5rem 2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--forest)', marginTop: '0', marginBottom: '0.75rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Tarjeta Feria y tarifas del Metrorrey</h4>
            <p style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '0.97rem' }}>
              La tarjeta Feria es la tarjeta recargable del Metrorrey. Se compra en las taquillas de las estaciones. La tarifa es de $4.80 MXN por viaje sencillo. El Metrorrey opera de lunes a viernes de 5:00 AM a 12:00 AM y los domingos de 6:00 AM a 11:00 PM, con posibles extensiones de horario durante el Mundial. Con $100 MXN cargados en la tarjeta tienes para más de 20 viajes, suficiente para varios días de movilidad urbana en la ciudad.
            </p>
          </div>

          {/* Aeropuerto MTY */}
          <h3 style={{ color: 'var(--forest)', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Del aeropuerto de Monterrey al centro</h3>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Aeropuerto Internacional General Mariano Escobedo de Monterrey está a unos 24 kilómetros del centro histórico y, al igual que el aeropuerto de Guadalajara, no tiene conexión directa al sistema de metro. El Metrorrey más cercano al aeropuerto está en la zona de San Bernabé (Línea 2), pero aun así requiere un tramo previo en taxi o Uber para llegar a la estación. En la práctica, el traslado aeropuerto-centro en Monterrey se hace casi siempre en Uber o taxi de sitio.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            Un Uber desde el aeropuerto al centro de Monterrey (Macroplaza, Barrio Antiguo) cuesta típicamente entre $200 y $300 MXN y el trayecto toma entre 25 y 45 minutos dependiendo del tráfico. Los taxis de sitio autorizados tienen mostradores dentro de la terminal con tarifas similares. La misma advertencia que en los otros aeropuertos aplica aquí: compra el boleto dentro de la terminal o usa la app, nunca aceptes taxis de personas que te abordan fuera de los canales oficiales.
          </p>

          {/* Turismo MTY */}
          <h3 style={{ color: 'var(--forest)', marginBottom: '1rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Atractivos accesibles en Metrorrey</h3>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            A pesar de sus limitaciones de cobertura, el Metrorrey sí conecta con varios de los atractivos más visitados de la ciudad. La estación Macroplaza de la Línea 1 te deja a pasos del centro cívico homónimo, donde se concentran el Palacio de Gobierno, el Museo de Arte Contemporáneo de Monterrey (MARCO) y el Obispado —un cerro con ruinas de una fortaleza del siglo XVIII que ofrece una vista panorámica espectacular de la ciudad y de la Sierra Madre Oriental al fondo. La estación Niños Héroes (Línea 1) da acceso al Barrio Antiguo, el barrio histórico con mayor concentración de restaurantes, bares y vida nocturna de la ciudad. Y la estación Y Griega (confluencia de Líneas 1 y 2) te deja cerca del Parque Fundidora, donde las instalaciones de una antigua fundidora de acero se transformaron en un parque urbano con museos y espacios culturales que es uno de los ejemplos de reutilización patrimonial más exitosos de México.
          </p>

          {/* Comparativa */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Guadalajara vs. Monterrey: comparación directa para el aficionado
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Si tienes la posibilidad de elegir cuánto tiempo pasas en cada ciudad, aquí va una valoración honesta desde la perspectiva del aficionado que viaja en transporte público. Guadalajara es la ciudad más amigable de las dos para el viajero sin auto: el centro histórico es compacto, el SITEUR tiene buena cobertura de las zonas turísticas, y la Línea 3 acerca bastante a los viajeros al Estadio Akron. La curva de aprendizaje del sistema es suave y la ciudad recompensa al que se mueve a pie: hay mucho que ver y comer en un radio de dos kilómetros alrededor de la Catedral.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Monterrey exige más planificación logística. El hecho de que el Estadio BBVA no tenga acceso directo en metro significa que cualquier estrategia de transporte para los días de partido involucra al menos una etapa en Uber o taxi. Eso no es un problema insuperable —Uber funciona bien en Monterrey—, pero sí conviene tenerlo presente en la planificación, especialmente si el partido es en horario nocturno y la demanda de autos de aplicación será alta. La ciudad en sí es atractiva para el viajero que llega por primera vez: la combinación de modernidad, gastronomía norteña y naturaleza serrana (las montañas son literalmente el telón de fondo de la ciudad) la hace una experiencia memorable.
          </p>

          {/* Recomendación final */}
          <div style={{ backgroundColor: 'var(--linen)', border: '1px solid var(--primary-border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--forest)', marginTop: '0', marginBottom: '1.25rem', fontFamily: "'Playfair Display', Georgia, serif" }}>Checklist final antes del partido</h3>
            <ul style={{ color: 'var(--text)', lineHeight: '2', paddingLeft: '1.5rem' }}>
              <li>Compra y carga la tarjeta de transporte de la ciudad al llegar (SITEUR en GDL, Feria en MTY) — mínimo $100 MXN</li>
              <li>Descarga Google Maps con mapas offline de la ciudad antes de salir del hotel</li>
              <li>Ten instaladas tanto Uber como Didi para comparar precios en el momento</li>
              <li>Planea llegar al estadio con 2-3 horas de anticipación, especialmente si usas transporte público</li>
              <li>A la salida del partido, aléjate a pie unas cuadras antes de pedir Uber si el estadio está muy saturado</li>
              <li>Verifica en sitios oficiales si hay servicios especiales de transporte para días de partido</li>
            </ul>
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
            background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <h3 style={{ marginTop: '0', marginBottom: '1rem', color: '#fff', fontFamily: "'Playfair Display', Georgia, serif" }}>
              ¿También vas a CDMX para el Mundial?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
              Lee la guía completa de transporte para el Estadio Azteca y el metro de la Ciudad de México
            </p>
            <a href="/guides/fifa-mundial-2026-mexico-transporte/" style={{ textDecoration: 'none', marginRight: '1rem' }}>
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
                Guía CDMX y Azteca
              </button>
            </a>
            <a href="/" style={{ textDecoration: 'none' }}>
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
                Planificar en Metro CDMX
              </button>
            </a>
          </div>

        </div>
      </article>
    </div>
  )
}
