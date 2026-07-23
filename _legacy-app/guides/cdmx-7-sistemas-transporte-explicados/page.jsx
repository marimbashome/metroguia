import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import FAQSchema from '@/app/components/FAQSchema'

export const metadata = {
  title: 'Los 7 Sistemas de Transporte Público de la CDMX Explicados | MetroGuia',
  description: 'Metro, Metrobús, Tren Ligero, Trolebús, RTP, Cablebús y Mexicable: guía completa con costos, cobertura y cuándo usar cada sistema de transporte en Ciudad de México.',
  alternates: { canonical: 'https://metroguia.mx/guides/cdmx-7-sistemas-transporte-explicados/' },
  openGraph: {
    title: 'Los 7 Sistemas de Transporte Público de la CDMX Explicados (con Costos y Mapa Mental)',
    description: 'Metro, Metrobús, Tren Ligero, Trolebús, RTP, Cablebús y Mexicable: guía completa con costos, cobertura y cuándo usar cada sistema de transporte en Ciudad de México.',
    url: 'https://metroguia.mx/guides/cdmx-7-sistemas-transporte-explicados/',
    type: 'article',
  },
}

export default function Cdmx7SistemasTransportePage() {
  const faqs = [
    {
      question: '¿Por qué la Ciudad de México tiene tantos sistemas de transporte diferentes?',
      answer: 'La fragmentación del transporte público de CDMX es resultado de décadas de decisiones políticas y técnicas separadas. Cada sistema fue creado en momentos distintos, con diferentes fuentes de financiamiento y operadores: el Metro es federal y capitalino, el Metrobús fue una licitación nueva en los 2000s, los trolebuses son de la Secretaría de Movilidad, y el Cablebús es una apuesta reciente del gobierno local. La integración tarifaria a través de la Tarjeta MI es el intento más reciente de unificarlos al menos en el cobro.'
    },
    {
      question: '¿La Tarjeta MI funciona en todos los sistemas?',
      answer: 'La Tarjeta MI funciona en Metro ($5 MXN), Metrobús ($6 MXN), Trolebús ($4 MXN), Tren Ligero ($3 MXN) y Cablebús ($7 MXN). No funciona en el Mexicable (Estado de México, usa su propia tarjeta) ni en el Tren Suburbano (boleto separado). Para el uso turístico cotidiano dentro de la CDMX, la Tarjeta MI cubre prácticamente todo.'
    },
    {
      question: '¿Qué es el Cablebús y cómo llego a él?',
      answer: 'El Cablebús es un teleférico de transporte público que opera en tres líneas: Línea 1 en Cuautepec (norte), Línea 2 en Iztapalapa (oriente) y Línea 3 que conecta con la estación Chapultepec del metro. El costo es $7 MXN con Tarjeta MI. La Línea 3, inaugurada en 2024, es la más accesible para turistas y ofrece vistas panorámicas del Bosque de Chapultepec.'
    },
    {
      question: '¿Cuál es la diferencia entre el Tren Ligero y el Metro?',
      answer: 'El Tren Ligero es un tranvía que circula mayormente en superficie (al aire libre), mientras que el Metro circula principalmente en túneles subterráneos. El Tren Ligero tiene una sola línea: desde Tasqueña (Línea 2 del Metro) hasta Xochimilco, pasando por el Estadio Azteca. Cuesta $3 MXN y su entorno es más tranquilo y pintoresco que el metro.'
    },
    {
      question: '¿Para qué zonas conviene el Trolebús?',
      answer: 'El Trolebús es especialmente útil para recorrer el Eje Central (la avenida más larga de la ciudad de norte a sur) y la colonia Doctores. La línea elevada (L10) conecta el sur de la ciudad con vistas desde lo alto. A $4 MXN, es uno de los transportes más baratos y sus unidades articuladas son más espaciosas que los vagones del metro en hora pico.'
    },
    {
      question: '¿Qué app integra todos los sistemas de transporte de CDMX?',
      answer: 'Google Maps es la más completa para planear rutas integrando metro, Metrobús y otros sistemas. Citymapper también funciona bien en CDMX. MetroGuia.mx es ideal para rutas específicas de metro. Para una visita turística, Google Maps con mapas descargados offline antes de salir del hotel suele ser suficiente para el 90% de las situaciones.'
    }
  ]

  const sistemas = [
    {
      num: 1,
      nombre: 'Metro',
      tipo: 'Subterráneo / Superficie',
      lineas: '12 líneas, 195 estaciones',
      costo: '$5 MXN',
      tarjeta: 'Tarjeta MI',
      color: 'var(--forest)',
      highlight: true,
    },
    {
      num: 2,
      nombre: 'Metrobús',
      tipo: 'BRT en superficie (carril exclusivo)',
      lineas: '7 líneas',
      costo: '$6 MXN',
      tarjeta: 'Tarjeta MI',
      color: 'var(--info)',
    },
    {
      num: 3,
      nombre: 'Tren Ligero',
      tipo: 'Tranvía / superficie',
      lineas: '1 línea (Tasqueña-Xochimilco)',
      costo: '$3 MXN',
      tarjeta: 'Tarjeta MI',
      color: 'var(--linea-TL)',
    },
    {
      num: 4,
      nombre: 'Trolebús',
      tipo: 'Eléctrico en superficie',
      lineas: '11 líneas incl. línea elevada (L10)',
      costo: '$4 MXN',
      tarjeta: 'Tarjeta MI',
      color: 'var(--chiapas)',
    },
    {
      num: 5,
      nombre: 'RTP',
      tipo: 'Autobús urbano',
      lineas: 'Múltiples rutas',
      costo: '$0–$4 MXN (algunos gratuitos)',
      tarjeta: 'Efectivo / Tarjeta MI',
      color: 'var(--linea-6)',
    },
    {
      num: 6,
      nombre: 'Cablebús',
      tipo: 'Teleférico / cabina aérea',
      lineas: '3 líneas (Cuautepec, Iztapalapa, Chapultepec)',
      costo: '$7 MXN',
      tarjeta: 'Tarjeta MI',
      color: 'var(--amber)',
    },
    {
      num: 7,
      nombre: 'Mexicable',
      tipo: 'Teleférico (Estado de México)',
      lineas: '1 línea (Ecatepec)',
      costo: '$9 MXN',
      tarjeta: 'Tarjeta Mexicable (propia)',
      color: 'var(--linea-A)',
    },
  ]

  return (
    <div>
      <BreadcrumbSchema items={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Guías', url: '/guides' },
        { name: 'Los 7 Sistemas de Transporte de CDMX', url: '/guides/cdmx-7-sistemas-transporte-explicados/' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #1a3030 50%, var(--chiapas) 100%)' }}>
        <div className="container">
          <p style={{ color: 'var(--amber)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Guía de movilidad urbana
          </p>
          <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '800', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.15', marginBottom: '1rem' }}>
            Los 7 Sistemas de Transporte Público de la CDMX Explicados
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '680px', lineHeight: '1.7' }}>
            Metro, Metrobús, Tren Ligero, Trolebús, RTP, Cablebús y Mexicable: qué son, cuánto cuestan, dónde van y cuándo usar cada uno.
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: '4rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Intro */}
          <p style={{ fontSize: '1.15rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem', fontFamily: "'Playfair Display', Georgia, serif" }}>
            Quien llega a la Ciudad de México por primera vez y trata de entender cómo moverse tiene frente a sí un panorama que, a primera vista, parece confuso: hay un metro, pero también hay un Metrobús, y un trolebús, y un tren ligero, y una cosa llamada Cablebús que resulta ser un teleférico, y otra llamada RTP que son autobuses rojos. ¿Cómo se conectan? ¿Cuáles tarjetas funcionan en cuáles? ¿Hay uno solo que deba usar o varios? La respuesta corta es que son siete sistemas distintos que se complementan entre sí para cubrir una metrópoli de más de 21 millones de habitantes.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Que existan siete sistemas en lugar de uno no es un accidente ni un capricho burocrático. Es la consecuencia de décadas de crecimiento urbano desordenado, de inversiones públicas fragmentadas y de decisiones políticas tomadas en distintos momentos por distintas administraciones. El metro fue concebido en los años sesenta como la columna vertebral del transporte capitalino. El Metrobús llegó cuatro décadas después como una solución rápida y económica para las avenidas principales que el metro no cubría. El Cablebús apareció apenas en 2021 para conectar zonas de alta densidad en laderas y barrancas donde construir un metro sería imposible o demasiado caro. Y así, cada sistema tiene su historia, su lógica y su cobertura específica.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            La buena noticia es que no necesitas entenderlos todos para moverte bien en la ciudad. Necesitas entender cuál te sirve para tu trayecto específico. Esta guía explica cada sistema por separado, cómo se conectan entre sí y, lo más importante, cuándo usar cuál.
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* Tabla resumen */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Los 7 sistemas de un vistazo
          </h2>

          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', minWidth: '580px' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--forest)', color: '#fff' }}>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>#</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Sistema</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Cobertura</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Tarifa</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Tarjeta</th>
                </tr>
              </thead>
              <tbody>
                {sistemas.map((s, i) => (
                  <tr key={s.num} style={{ borderBottom: '1px solid var(--border)', backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--bg)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{ backgroundColor: s.color, color: s.nombre === 'Cablebús' ? 'var(--forest)' : '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.82rem' }}>{s.num}</span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600', color: 'var(--text)' }}>{s.nombre}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>{s.lineas}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)', fontWeight: '600' }}>{s.costo}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-dim)' }}>{s.tarjeta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sistema 1: Metro */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1rem' }}>
            Sistema 1 — Metro: la columna vertebral
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Metro de la Ciudad de México es el sistema más grande, más rápido y más utilizado de todos. Con 12 líneas, 195 estaciones y casi nueve millones de viajes diarios, es el corazón del transporte capitalino. La tarifa es de $5 MXN sin importar la distancia, pagada con la Tarjeta MI. Opera de lunes a viernes de 5:00 AM a 12:00 AM, con horarios ligeramente reducidos en fin de semana.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La mayoría de las líneas circulan en túnel subterráneo, aunque algunas secciones en las orillas de la ciudad van en superficie o elevadas. Es el sistema que debes usar para trayectos largos que cruzan la ciudad de un extremo al otro, porque no hay tráfico que lo afecte y la velocidad comercial promedio es de unos 35 km/h, mucho más que cualquier superficie. Las estaciones tienen señalización en colores y símbolos, los andenes tienen personas de servicio al cliente y hay mapas de la red disponibles gratuitamente en las taquillas. Para saber más sobre cómo usarlo desde cero, consulta nuestra{' '}
            <a href="/guides/cdmx-metro-primera-vez/" style={{ color: 'var(--chiapas)', textDecoration: 'underline', textDecorationColor: 'var(--primary-border)' }}>guía completa del metro para primera vez</a>.
          </p>

          {/* Sistema 2: Metrobús */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1rem' }}>
            Sistema 2 — Metrobús: autobuses rápidos en carril exclusivo
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Metrobús es un sistema de Bus Rapid Transit (BRT): autobuses articulados que circulan en carriles exclusivos pintados sobre las avenidas más importantes de la ciudad. No comparten carril con el tráfico normal, lo que los hace más rápidos que los camiones convencionales pero más lentos que el metro subterráneo. Tiene siete líneas y su tarifa es de $6 MXN con Tarjeta MI.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La Línea 1 recorre toda la avenida Insurgentes de norte a sur —una de las avenidas más largas del mundo— y es la más usada por turistas porque conecta zonas como Indios Verdes, La Villa, el Centro Histórico, la Zona Rosa, la Roma, el World Trade Center y Ciudad Universitaria. La Línea 7 recorre el Eje 3 Oriente y conecta con el aeropuerto (T1 y T2). El Metrobús es especialmente útil cuando tu destino está sobre una de las avenidas principales pero no tiene estación de metro directa, o cuando el metro está cerrado durante mantenimiento.
          </p>

          <AdBannerLazyInArticle slot="1082410395" />

          {/* Sistema 3: Tren Ligero */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1rem' }}>
            Sistema 3 — Tren Ligero: el camino a Xochimilco
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Tren Ligero es un tranvía moderno que circula en superficie entre la estación Tasqueña (terminal de la Línea 2 del metro, al sur del centro) y Xochimilco, el famoso barrio lacustre con sus canales y trajineras decoradas. La línea tiene 17 estaciones y el costo es de $3 MXN con Tarjeta MI. El recorrido completo dura unos 25 minutos.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Para los turistas, el Tren Ligero tiene dos paradas importantes además de Xochimilco: la estación "Estadio Azteca", desde donde se puede caminar al estadio en días de partido, y la estación "Huipulco", cerca de la Universidad Iberoamericana. El tren es más tranquilo y menos concurrido que el metro, y parte de su trayecto pasa por zonas arboladas del sur de la ciudad, lo que hace el viaje más agradable visualmente. Es también la alternativa verde al caos del metro para quienes van a Xochimilco.
          </p>

          {/* Sistema 4: Trolebús */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1rem' }}>
            Sistema 4 — Trolebús: eléctrico, silencioso y subestimado
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Trolebús es uno de los sistemas de transporte más desconocidos de CDMX entre los visitantes, pero es también uno de los más interesantes. Funciona con electricidad tomada de una red de cables tendidos sobre algunas avenidas de la ciudad —de ahí el nombre—, lo que lo hace silencioso y de cero emisiones directas. La tarifa es de $4 MXN con Tarjeta MI y opera en 11 líneas que cubren el Eje Central Lázaro Cárdenas (de norte a sur), el Eje 8 Sur y otras avenidas secundarias.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La Línea 10 del Trolebús (también llamada Trolebús Elevado o "El Turibús del pueblo") es especialmente notable: es una línea elevada sobre el Eje Troncal Metropolitano que ofrece vistas panorámicas del sur de la ciudad y conecta zonas de alta densidad como Iztapalapa con el centro sin necesidad de bajar a nivel de calle. Funciona de noche con mayor seguridad que muchos camiones urbanos y sus unidades articuladas son bastante cómodas. Si quieres explorar más allá de las zonas turísticas habituales, el Trolebús es una puerta de entrada a la CDMX menos conocida.
          </p>

          {/* Sistema 5: RTP */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1rem' }}>
            Sistema 5 — RTP: los autobuses rojos
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El RTP (Red de Transporte de Pasajeros) son los autobuses de color rojo que circulan por toda la ciudad cubriendo rutas que los otros sistemas no alcanzan. La tarifa es muy baja —entre $2 y $4 MXN, y algunos servicios son gratuitos para ciertos grupos como adultos mayores y personas con discapacidad. A diferencia del Metrobús, los autobuses RTP no tienen carril exclusivo, así que están sujetos al tráfico de la ciudad.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Para turistas, el RTP es un sistema difícil de usar sin conocer la ciudad porque las rutas no están tan bien señalizadas como el metro o el Metrobús, y los destinos de cada ruta requieren conocer los nombres de las colonias y las avenidas. Sin embargo, en situaciones específicas —como cuando necesitas llegar a una zona que no tiene cobertura de metro— puede ser la única opción de transporte público formal. Si te encuentras en esa situación, pregunta en la taquilla de la estación de metro más cercana qué ruta de RTP te lleva más cerca de tu destino.
          </p>

          {/* Sistema 6: Cablebús */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1rem' }}>
            Sistema 6 — Cablebús: teleférico urbano con vistas panorámicas
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El Cablebús es, sin duda, el sistema de transporte más fotogénico de CDMX. Se trata de cabinas de teleférico que circulan sobre cables tensados en lo alto, conectando zonas de alta densidad en laderas y barrancas donde sería muy costoso o imposible tender vías de metro. Fue inaugurado en 2021 y actualmente tiene tres líneas en operación: la Línea 1 en Cuautepec (norte), la Línea 2 en Iztapalapa (oriente) y la Línea 3 que conecta Constitución de 1917 con la estación Chapultepec del metro.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La Línea 3 del Cablebús es la más accesible para los turistas: puedes tomar el metro hasta la estación Chapultepec (Línea 1) y desde ahí subir al Cablebús para una experiencia que ofrece vistas del Bosque de Chapultepec desde lo alto. El costo es de $7 MXN con Tarjeta MI y el tiempo de espera suele ser breve. Las cabinas tienen capacidad para unas diez personas y las vistas, especialmente en días despejados, son genuinamente espectaculares. Para quienes buscan una actividad diferente y económica, el Cablebús es una de las joyas ocultas del transporte capitalino.
          </p>

          {/* Sistema 7: Mexicable */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1rem' }}>
            Sistema 7 — Mexicable: el teleférico del Estado de México
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            El Mexicable es técnicamente un sistema del Estado de México, no de la CDMX, pero está tan integrado con la red metropolitana que merece su propio lugar en esta lista. Conecta zonas de Ecatepec, uno de los municipios más populosos del país, con estaciones del metro de la ciudad. La tarifa es de $9 MXN y usa su propia tarjeta recargable —la única excepción significativa a la Tarjeta MI en la red metropolitana. Para los turistas, es raro que resulte necesario, pero si te aventuras a explorar la zona norte del área metropolitana, puede ser una forma interesante de moverse.
          </p>

          {/* Tarjeta MI y cuándo usar cuál */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            La Tarjeta MI: el hilo que conecta todo
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La Tarjeta MI (Tarjeta de Movilidad Integrada) es el denominador común de seis de los siete sistemas. Se compra en cualquier taquilla de metro por $50 MXN y se recarga con el saldo que necesites. No hay tarifa de transferencia entre sistemas: si subes al metro con $5 MXN y luego transbordes al Metrobús, ese segundo viaje cuesta los $6 MXN de su propia tarifa. No hay descuento por combinar sistemas, pero tampoco hay recargo.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            El único sistema que no acepta la Tarjeta MI es el Mexicable, que usa su propia tarjeta. El Tren Suburbano (que conecta Buenavista con AIFA) también tiene tarifa separada y no usa la Tarjeta MI. Para un turista que se mueve dentro de la Ciudad de México, la Tarjeta MI cubre prácticamente todo lo que necesitará.
          </p>

          {/* Cuándo usar cuál */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Guía rápida: cuándo usar cada sistema
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { situacion: 'Trayecto largo de norte a sur o poniente a oriente', usa: 'Metro', razon: 'Sin tráfico, frecuente, conecta toda la ciudad.', color: 'var(--forest)' },
              { situacion: 'Ir por Insurgentes, Reforma o eje de Chapultepec', usa: 'Metrobús', razon: 'Carril exclusivo sobre las avenidas más importantes.', color: 'var(--info)' },
              { situacion: 'Llegar a Xochimilco o al Estadio Azteca', usa: 'Tren Ligero', razon: 'Sale de Tasqueña (L2) y llega directo a ambos puntos.', color: 'var(--linea-TL)' },
              { situacion: 'Recorrer el centro de norte a sur sin bajarte', usa: 'Trolebús (Eje Central)', razon: 'Más barato, menos lleno, silencioso y eléctrico.', color: 'var(--chiapas)' },
              { situacion: 'Zonas sin metro ni Metrobús', usa: 'RTP', razon: 'Cobertura amplia aunque menos predecible en tiempos.', color: 'var(--linea-6)' },
              { situacion: 'Vista panorámica + llegar a Chapultepec', usa: 'Cablebús L3', razon: 'Sale del metro Chapultepec y ofrece vistas increíbles.', color: 'var(--amber)' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--linen)', borderTop: `3px solid ${item.color}`, padding: '1.25rem', borderRadius: 'var(--radius)' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '0.5rem', lineHeight: '1.5' }}>{item.situacion}</div>
                <div style={{ fontWeight: '700', color: item.color, fontSize: '1rem', marginBottom: '0.35rem' }}>Usa: {item.usa}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{item.razon}</div>
              </div>
            ))}
          </div>

          {/* Sistemas adicionales */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Sistemas adicionales: Pumabús y microbuses
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Fuera de los siete sistemas formales, existen dos opciones adicionales que vale la pena conocer aunque generalmente no son relevantes para turistas. El <strong>Pumabús</strong> es el servicio de transporte gratuito de la Universidad Nacional Autónoma de México (UNAM) que circula dentro del campus de Ciudad Universitaria. Si visitas la UNAM —que vale completamente la pena por su arquitectura declarada Patrimonio de la Humanidad de la UNESCO—, el Pumabús es la forma de moverse entre los diferentes edificios del enorme campus sin tener que caminar kilómetros bajo el sol. Solo pueden usarlo estudiantes, trabajadores y visitantes dentro del campus.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            Los <strong>microbuses urbanos</strong> —pequeños autobuses verdes y blancos o de otros colores según la concesionaria— siguen circulando por cientos de rutas en la ciudad y son la forma más económica de moverse en zonas que ningún otro sistema cubre. Sin embargo, son difíciles de interpretar para quien no conoce la ciudad: las rutas se indican en papel pegado al parabrisas con letras pequeñas, los conductores van con prisa y las paradas no siempre están señalizadas. Para un residente que conoce las rutas, son utilísimos; para un turista, son una fuente de confusión potencial. Si te encuentras en una situación donde solo hay microbuses disponibles, lo mejor es preguntarle directamente al conductor si su ruta pasa por donde necesitas ir.
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* Apps */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Apps que integran todos los sistemas
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La proliferación de sistemas de transporte hace que las apps de planificación de rutas sean especialmente valiosas en CDMX. <strong>Google Maps</strong> es la más completa: integra metro, Metrobús, Tren Ligero, Trolebús y Cablebús en sus rutas, muestra tiempos de espera aproximados y permite descargar mapas offline para usarlos sin señal. Es la recomendación principal para cualquier viajero. <strong>Citymapper</strong> también funciona bien en CDMX y tiene una interfaz muy amigable para identificar los transbordos más eficientes entre sistemas.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            <strong>MetroGuia.mx</strong> (el sitio que estás leyendo) está especializado en la red de metro y ofrece el planificador de rutas más optimizado específicamente para el sistema subterráneo. Si tu trayecto usa principalmente el metro, MetroGuia.mx te dará la ruta exacta con el número correcto de estaciones y los transbordos necesarios. Descarga los mapas offline de Google Maps para las tres ciudades antes de salir del hotel: la señal celular en el metro puede ser intermitente, especialmente en las partes más profundas de las estaciones.
          </p>

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
              Ya entiendes los sistemas — ahora planea tu ruta
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
              Usa el planificador de MetroGuia para calcular la ruta exacta entre cualquier par de estaciones del metro de CDMX
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
                Planificar en Metro
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
                Metro para Primera Vez
              </button>
            </a>
          </div>

        </div>
      </article>
    </div>
  )
}
