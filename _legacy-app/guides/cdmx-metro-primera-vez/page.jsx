import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import FAQSchema from '@/app/components/FAQSchema'

export const metadata = {
  title: 'Metro CDMX para Primera Vez: Todo lo que Necesitas Saber Antes de Bajar | MetroGuia',
  description: 'Guía completa del Metro de la Ciudad de México para turistas: tarjeta MI, 12 líneas, horarios, vagones rosa, transbordos, seguridad y estaciones imperdibles.',
  alternates: { canonical: 'https://metroguia.mx/guides/cdmx-metro-primera-vez/' },
  openGraph: {
    title: 'Metro CDMX para Primera Vez: Todo lo que Necesitas Saber Antes de Bajar',
    description: 'Guía completa del Metro de la Ciudad de México para turistas: tarjeta MI, 12 líneas, horarios, vagones rosa, transbordos, seguridad y estaciones imperdibles.',
    url: 'https://metroguia.mx/guides/cdmx-metro-primera-vez/',
    type: 'article',
  },
}

export default function CdmxMetroPrimeraVezPage() {
  const faqs = [
    {
      question: '¿Cuánto cuesta un viaje en el metro de CDMX?',
      answer: 'Un viaje en el metro de la Ciudad de México cuesta $5 MXN sin importar la distancia recorrida ni el número de transbordos dentro de la red. Es una tarifa plana que lleva décadas siendo uno de los transportes más baratos del mundo.'
    },
    {
      question: '¿Qué es la Tarjeta MI y dónde la compro?',
      answer: 'La Tarjeta MI (antes llamada Tarjeta de Movilidad Integrada) es la tarjeta recargable del sistema de transporte público de CDMX. Se compra en las taquillas de cualquier estación de metro por $50 MXN (el costo del plástico, sin saldo incluido). Funciona en metro, Metrobús, Trolebús, Tren Ligero y Cablebús.'
    },
    {
      question: '¿A qué hora abre y cierra el metro?',
      answer: 'De lunes a viernes el metro opera de 5:00 AM a 12:00 AM (medianoche). Los sábados de 6:00 AM a 12:00 AM y los domingos de 7:00 AM a 12:00 AM. En días de eventos especiales o festividades nacionales puede haber variaciones; consulta metro.cdmx.gob.mx para actualizaciones.'
    },
    {
      question: '¿Qué son los vagones rosas y quién puede usarlos?',
      answer: 'Los vagones rosas (o exclusivos) son los primeros vagones de cada tren, reservados exclusivamente para mujeres y niños menores de 12 años. El acceso a estos vagones está marcado en el andén con señalización rosa. Esta medida existe para garantizar mayor seguridad a las mujeres, especialmente durante horas pico.'
    },
    {
      question: '¿Cuál es la hora pico y cómo afecta al viaje?',
      answer: 'Las horas pico son de 7:00 a 9:00 AM y de 6:00 a 9:00 PM de lunes a viernes. En esos horarios el metro va extremadamente lleno, los tiempos de espera aumentan y las condiciones para viajar con equipaje son muy incómodas. Si puedes evitar esas horas, tu experiencia será considerablemente más placentera.'
    },
    {
      question: '¿Cómo sé en qué dirección tomar el tren?',
      answer: 'Los trenes se identifican por el nombre de la estación terminal (la última parada en esa dirección). Busca los letreros en los andenes que indican el nombre de la terminal: si vas hacia el norte toma el tren hacia la terminal norte, y viceversa. Los mapas de la red están en todas las estaciones y son gratuitos en las taquillas.'
    }
  ]

  const lineas = [
    { num: '1', color: 'var(--linea-1)', nombre: 'Rosa', extremos: 'Pantitlán — Observatorio', desc: 'Traversa el centro en diagonal. Pasa por Zócalo, Pino Suárez, Insurgentes y Chapultepec. La ruta turística por excelencia.' },
    { num: '2', color: 'var(--linea-2)', nombre: 'Azul', extremos: 'Cuatro Caminos — Tasqueña', desc: 'Eje norte-sur del centro histórico. Conecta con Bellas Artes, Zócalo y el Tren Ligero hacia el Estadio Azteca.' },
    { num: '3', color: 'var(--linea-3)', nombre: 'Verde Oliva', extremos: 'Indios Verdes — Universidad', desc: 'Otro eje norte-sur, más al poniente. Pasa por Chapultepec, Balderas y la Ciudad Universitaria (UNAM).' },
    { num: '4', color: 'var(--linea-4)', nombre: 'Turquesa', extremos: 'Martín Carrera — Santa Anita', desc: 'Línea corta al oriente. Útil para conexiones pero raramente usada por turistas.' },
    { num: '5', color: '#DDAA00', nombre: 'Amarilla', extremos: 'Politécnico — Pantitlán', desc: 'La línea del aeropuerto. Tiene la estación "Terminal Aérea" para el AICM Terminal 1.' },
    { num: '6', color: 'var(--linea-6)', nombre: 'Roja', extremos: 'El Rosario — Martín Carrera', desc: 'Conecta el norte de la ciudad. Funciona como distribuidor hacia otras líneas.' },
    { num: '7', color: 'var(--linea-7)', nombre: 'Naranja', extremos: 'El Rosario — Barranca del Muerto', desc: 'Eje poniente, conecta zonas residenciales. Útil para llegar a San Ángel.' },
    { num: '8', color: 'var(--linea-8)', nombre: 'Verde', extremos: 'Garibaldi — Constitución de 1917', desc: 'Conecta el centro con el oriente. Pasa por la Doctores y zonas populares.' },
    { num: '9', color: 'var(--linea-9)', nombre: 'Marrón', extremos: 'Tacubaya — Pantitlán', desc: 'Conexión poniente-oriente en el sur de la ciudad. Acceso a Coyoacán.' },
    { num: 'A', color: 'var(--linea-A)', nombre: 'Morada', extremos: 'Pantitlán — La Paz', desc: 'Línea hacia el Estado de México. Tiene parada en Xochimilco (para las trajineras).' },
    { num: 'B', color: 'var(--linea-B)', nombre: 'Gris', extremos: 'Buenavista — Ciudad Azteca', desc: 'Eje norte hacia Ecatepec. Conecta con el Tren Suburbano en Buenavista.' },
    { num: '12', color: 'var(--linea-12)', nombre: 'Dorada', extremos: 'Mixcoac — Tláhuac', desc: 'La línea más reciente. Recorre el sur de la ciudad por zonas de desarrollo urbano.' },
  ]

  return (
    <div>
      <BreadcrumbSchema items={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Guías', url: '/guides' },
        { name: 'Metro CDMX para Primera Vez', url: '/guides/cdmx-metro-primera-vez/' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #1a3a2a 100%)' }}>
        <div className="container">
          <p style={{ color: 'var(--amber)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Guía para principiantes
          </p>
          <h1 style={{ color: '#fff', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '800', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.15', marginBottom: '1rem' }}>
            Metro CDMX para Primera Vez: Todo lo que Necesitas Saber Antes de Bajar
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '680px', lineHeight: '1.7' }}>
            12 líneas, 195 estaciones, nueve millones de pasajeros diarios. El metro de la Ciudad de México es uno de los sistemas más grandes del mundo —y también uno de los más baratos. Esta guía te prepara para usarlo con confianza desde el primer día.
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: '4rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Intro */}
          <p style={{ fontSize: '1.15rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem', fontFamily: "'Playfair Display', Georgia, serif" }}>
            El Metro de la Ciudad de México inauguró su primera línea el 4 de septiembre de 1969, con un tramo inicial de apenas doce estaciones entre Tlatelolco y Zaragoza. Más de cinco décadas después, el sistema es uno de los más extensos de América Latina y uno de los más transitados del mundo: 195 estaciones distribuidas en doce líneas que cubren prácticamente toda la mancha urbana de la capital. Para quien llega por primera vez, puede parecer abrumador. Para quien lo entiende, es la llave maestra de la ciudad.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Lo primero que hay que saber es que el metro de CDMX tiene una tarifa única: $5 MXN por viaje, independientemente de la distancia. Puedes viajar desde un extremo de la ciudad hasta el otro, hacer dos o tres transbordos de línea en el camino, y el costo total sigue siendo de $5 pesos. Eso equivale, en dólares estadounidenses, a algo menos de treinta centavos. Es, sin exageración, uno de los transportes más baratos del planeta para la cobertura que ofrece. Esta tarifa plana es también lo que hace que el metro sea tan democrático: lo usa el mismo señor que va a trabajar a las cinco de la mañana que la turista que quiere llegar al Zócalo el martes por la tarde.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            Usar el metro correctamente no es complicado, pero sí requiere aprender un par de cosas antes de bajar las escaleras por primera vez. Esta guía cubre todo: cómo conseguir tu tarjeta, cómo leer el mapa, cuáles son las estaciones más importantes para un visitante, qué reglas no escritas existen y qué zonas conviene conocer de noche y cuáles no. Considera este texto como la conversación que te gustaría tener con alguien que lo usa todos los días.
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* Tarjeta MI */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            La Tarjeta MI: tu primera compra en la ciudad
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Para entrar al metro necesitas una Tarjeta MI, la tarjeta de movilidad integrada del sistema de transporte público de CDMX. No aceptan dinero en efectivo directamente en los torniquetes, así que la tarjeta es indispensable. La buena noticia es que conseguirla es muy sencillo: en la taquilla de cualquier estación de metro, dices "una tarjeta MI" y pagas $50 MXN. Eso te da el plástico vacío, sin saldo. Luego recargas el saldo que quieras: mínimo $10 MXN, aunque lo más práctico es cargar entre $100 y $200 MXN desde el principio para no tener que buscar una taquilla cada vez que necesites viajar.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            También puedes recargar en las máquinas expendedoras automáticas que hay en muchas estaciones, aunque no siempre funcionan o aceptan billetes grandes. Lo más confiable es siempre la taquilla atendida por una persona. Para pagar, la mayoría de las taquillas acepta efectivo; algunas también aceptan tarjeta bancaria, aunque no todas. Lleva billetes de $50 o $100 pesos para facilitar el cambio.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La Tarjeta MI no es solo para el metro. Funciona en Metrobús ($6 MXN por viaje), Trolebús ($4 MXN), Tren Ligero ($3 MXN) y Cablebús ($7 MXN). Si planeas usar varios sistemas de transporte durante tu visita —lo cual es bastante probable si vas a moverse por distintas zonas de la ciudad— una sola tarjeta carga con todo. Es literalmente la única tarjeta que necesitas en CDMX para el transporte público.
          </p>

          {/* Horarios */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Horarios: cuándo opera y cuándo no
          </h2>

          <div style={{ backgroundColor: 'var(--linen)', border: '1px solid var(--primary-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.97rem' }}>
              <tbody>
                {[
                  { dia: 'Lunes a viernes', horario: '5:00 AM — 12:00 AM (medianoche)' },
                  { dia: 'Sábados', horario: '6:00 AM — 12:00 AM (medianoche)' },
                  { dia: 'Domingos y festivos', horario: '7:00 AM — 12:00 AM (medianoche)' },
                  { dia: 'Frecuencia hora pico', horario: 'Cada 3-5 minutos' },
                  { dia: 'Frecuencia fuera de pico', horario: 'Cada 8-12 minutos' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: '600', color: 'var(--forest)' }}>{row.dia}</td>
                    <td style={{ padding: '0.875rem 1rem', color: 'var(--text)' }}>{row.horario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            El metro no opera de madrugada. Si tienes un vuelo muy temprano o regresas tarde de una salida nocturna, el metro no es una opción —necesitarás Uber, Didi o un taxi de sitio. Las horas pico son las de mayor afluencia: de 7 a 9 de la mañana y de 6 a 9 de la noche, de lunes a viernes. En esos horarios los vagones van extremadamente llenos y viajar con maletas o mochilas grandes puede ser incómodo tanto para ti como para los demás pasajeros. Si puedes organizar tus traslados más pesados fuera de esos horarios, tu experiencia en el metro será mucho más cómoda.
          </p>

          <AdBannerLazyInArticle slot="1082410395" />

          {/* Vagón rosa */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Los vagones rosas: una medida de seguridad que hay que respetar
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Uno de los elementos más visibles del metro de CDMX para quienes lo usan por primera vez son los vagones exclusivos para mujeres, marcados con franjas rosas en el exterior y en el andén. Los primeros vagones de cada tren (generalmente los dos primeros) están reservados exclusivamente para mujeres y niños menores de 12 años. El acceso a estas secciones está demarcado en el suelo del andén con color rosa y hay señalización en las paredes.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Esta medida fue implementada en 2000 como respuesta al acoso sexual que muchas mujeres sufrían durante los traslados en horas pico. Es una disposición oficial del sistema y debe respetarse. Si eres hombre, simplemente aborda los vagones que no están marcados en rosa: los vagones centrales del tren son para uso mixto. En algunas estaciones hay personal del metro que supervisa el acceso a los vagones exclusivos durante las horas de mayor flujo.
          </p>

          {/* Las 12 líneas */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Las 12 líneas del Metro de CDMX
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            Cada línea del metro tiene un color y un número (o letra) que la identifica. El mapa de la red es el mismo que ves en cualquier sistema de metro del mundo: nodos conectados por líneas de colores. La diferencia con ciudades como París o Nueva York es que aquí, además del color, muchas estaciones tienen íconos o símbolos que las representan —un guiño histórico al hecho de que el metro fue diseñado pensando también en usuarios que no sabían leer. Esos íconos siguen siendo útiles para orientarse rápidamente en el mapa.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {lineas.map((linea) => (
              <div key={linea.num} style={{
                backgroundColor: 'var(--surface)',
                borderLeft: `4px solid ${linea.color}`,
                padding: '1.25rem',
                borderRadius: 'var(--radius)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    backgroundColor: linea.color,
                    color: ['5', '12'].includes(linea.num) ? '#1A1D2B' : '#fff',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    flexShrink: '0'
                  }}>
                    {linea.num}
                  </span>
                  <span style={{ fontWeight: '700', color: 'var(--text)', fontSize: '0.9rem' }}>Línea {linea.num} — {linea.nombre}</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>{linea.extremos}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{linea.desc}</div>
              </div>
            ))}
          </div>

          {/* Estaciones turísticas */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Estaciones imprescindibles para el turista
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            De las 195 estaciones de la red, hay un puñado que vale la pena conocer no solo como puntos de conexión sino como destinos en sí mismos o puertas de entrada a los lugares más icónicos de la ciudad. La estación <strong>Zócalo</strong> (Línea 2) es la más visitada por turistas: sube las escaleras y estarás en la plaza más grande de México, rodeado del Palacio Nacional, la Catedral Metropolitana y el Templo Mayor. La estación <strong>Bellas Artes</strong> (Líneas 2 y 8) es el otro gran nodo cultural del centro histórico, a pasos del Palacio de Bellas Artes y el Mercado de Artesanías.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            La estación <strong>Insurgentes</strong> (Línea 1) te deja en el corazón de la colonia Roma, uno de los barrios más animados de la ciudad con una oferta enorme de restaurantes, cafeterías y galerías. <strong>Chapultepec</strong> (Línea 1) es la entrada natural al Bosque de Chapultepec, el parque más grande de la ciudad y hogar del Castillo, el Zoológico y varios museos de primer nivel. Y la estación <strong>Pino Suárez</strong> (Líneas 1 y 2) tiene algo que pocas estaciones del mundo pueden presumir: dentro de sus pasillos de transbordo se conservan los restos de un templo azteca del siglo XV, descubierto durante la construcción del metro en 1967.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '2rem' }}>
            Para quienes quieren llegar a las trajineras de Xochimilco —uno de los lugares más fotografiados de la capital y Patrimonio de la Humanidad de la UNESCO— la ruta más directa combina la Línea 2 hacia Tasqueña y desde ahí el Tren Ligero hasta la estación Xochimilco. El trayecto completo desde el centro histórico toma entre 50 y 65 minutos, pero vale completamente la pena.
          </p>

          {/* Reglas no escritas */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Las reglas no escritas del metro
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Todo sistema de transporte masivo tiene sus códigos no escritos, y el metro de CDMX no es la excepción. La más importante de todas: déjate bajar antes de subir. Cuando el tren llega, no te plantes frente a las puertas; párate a los lados y espera a que los pasajeros que van a bajar lo hagan antes de intentar entrar. Es cortesía básica y también pura lógica física: nadie puede subir si los que van a bajar no tienen espacio para hacerlo.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Dentro del vagón, no se come ni se bebe (aunque muchos vendedores ambulantes ofrecen productos y sí consumen), no se usa música sin audífonos, y hay asientos preferenciales marcados cerca de las puertas para personas mayores, con discapacidad, embarazadas y personas con bebés en brazos. Si estás sentado en uno de esos asientos y ves que alguien que lo necesita se acerca, lo cortés —y lo que haría cualquier pasajero local que se respete— es ceder el asiento sin necesidad de que te lo pidan.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            En cuanto a los transbordos: algunas estaciones donde dos líneas se cruzan tienen pasillos de conexión bastante largos. La estación Pantitlán, donde confluyen las Líneas 1, 5, 9 y A, es legendariamente caótica y tiene los pasillos más extensos del sistema. Si tu ruta pasa por Pantitlán, ten paciencia y sigue la señalización de color con calma. Otra estación compleja para los transbordos es La Raza, donde se conectan las Líneas 3 y 5 con un túnel largo y curvo que suele estar muy transitado.
          </p>

          {/* Seguridad */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Seguridad: lo que nadie te dice (pero debería)
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            El metro de CDMX es, durante el día y en horas de moderada concurrencia, perfectamente seguro para el turista promedio. La policía auxiliar del metro tiene presencia en todas las estaciones y en muchos vagones. Los incidentes de seguridad existen pero son mucho menos frecuentes de lo que los mitos sobre la ciudad sugieren. Dicho eso, el sentido común siempre aplica: no exhibas joyas caras ni teléfonos de última generación de forma ostentosa, lleva la cartera en el bolsillo delantero o en una riñonera interior, y si llevas mochila, ponla al frente en espacios muy concurridos.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Hay algunas estaciones cuyas zonas exteriores son menos recomendables de noche. Pantitlán, Indios Verdes y Observatorio están en los extremos de las líneas y las áreas fuera de las estaciones pueden ser solitarias o poco iluminadas pasadas las 10 de la noche. No significa que sean peligrosas per se, pero si tu hotel no está en esa zona, es mejor llegar ahí durante el día o tomar un Uber si el horario es tardío.
          </p>

          {/* Diferencia Metrobús */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Metro vs. Metrobús: ¿cuál es la diferencia?
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Muchos visitantes confunden el metro (subterráneo) con el Metrobús (superficie). Son sistemas distintos aunque complementarios. El Metrobús es un sistema de autobús de tránsito rápido (BRT) que circula en carriles exclusivos sobre avenidas principales de la ciudad. Tiene siete líneas y sus estaciones son plataformas elevadas sobre el camellón de la avenida. El costo es de $6 MXN por viaje, también pagado con la Tarjeta MI.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            La diferencia práctica más importante es que el Metrobús va por la superficie y, por tanto, está sujeto al tráfico de la ciudad. En horas pico puede ser considerablemente más lento que el metro. Sin embargo, tiene paradas en zonas que el metro no cubre directamente —como ciertos tramos de la colonia Condesa, el eje de Reforma o el corredor de Insurgentes— lo que lo hace una opción complementaria muy útil cuando tu destino no está cerca de una estación de metro. Para más información sobre los 7 sistemas de transporte de CDMX, consulta nuestra{' '}
            <a href="/guides/cdmx-7-sistemas-transporte-explicados/" style={{ color: 'var(--chiapas)', textDecoration: 'underline', textDecorationColor: 'var(--primary-border)' }}>guía completa de los sistemas de transporte público de la ciudad</a>.
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* Qué hacer si te pierdes */}
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--forest)', marginTop: '3rem', marginBottom: '1.5rem' }}>
            Si te pierdes: qué hacer
          </h2>

          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            Perderse en el metro de CDMX es perfectamente normal, especialmente al principio. Lo primero que debes hacer es no entrar en pánico y buscar el mapa de la red, que está pegado en todas las estaciones y es gratuito en las taquillas. El sistema de color y de íconos está diseñado para que puedas orientarte sin necesidad de leer mucho texto. Si aun así no logras identificar dónde estás o hacia dónde ir, acércate a los torniquetes y pregunta al empleado que atiende la taquilla. El personal del metro, en su mayoría, está acostumbrado a dar indicaciones y lo hará con paciencia.
          </p>
          <p style={{ color: 'var(--text)', lineHeight: '1.85', marginBottom: '3rem' }}>
            Si tienes señal, MetroGuia.mx o Google Maps te dan la ruta exacta con la línea, el número de estaciones y los transbordos necesarios. Si no tienes señal —algo que puede ocurrir en las partes más profundas de algunas estaciones— los mapas físicos de la red son tu mejor aliado. Guarda siempre el nombre de la estación más cercana a tu hotel: eso basta para que cualquier taxista, Uber o persona en la calle pueda orientarte de regreso.
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
              Calcula tu ruta en el metro
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
              Ingresa tu punto de origen y destino para encontrar la ruta más rápida en el metro de CDMX
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
            <a href="/guides/aeropuerto-cdmx-a-centro/" style={{ textDecoration: 'none' }}>
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
                Del Aeropuerto al Centro
              </button>
            </a>
          </div>

        </div>
      </article>
    </div>
  )
}
