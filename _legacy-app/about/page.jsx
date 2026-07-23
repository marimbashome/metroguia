export const metadata = {
  title: 'Acerca de MetroGuia.mx — Tu guía de transporte público en México',
  description: 'MetroGuia.mx es una plataforma gratuita de información de transporte público para turistas y visitantes en México. Conoce nuestra misión, equipo y cómo funciona.',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)', padding: '3rem 1.5rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Acerca de MetroGuia.mx</h1>
          <p style={{ opacity: 0.7, fontSize: '0.875rem' }}>Tu guía de transporte público en México</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px', lineHeight: 1.8 }}>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Nuestra misión</h2>
          <p>
            MetroGuia.mx nació con una misión simple: hacer que moverse en transporte público en
            México sea fácil y accesible para todos, especialmente para turistas y visitantes que
            llegan por primera vez. Creemos que el transporte público es la mejor forma de conocer
            una ciudad — es más económico, más auténtico y más sustentable.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Qué hacemos</h2>
          <p>
            Ofrecemos información detallada y actualizada sobre los principales sistemas de transporte
            público en México, incluyendo:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Metro de la Ciudad de México (CDMX):</strong> 12 líneas, 195 estaciones y conexiones
              con Metrobús, Tren Ligero y Cablebús.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>SITEUR Guadalajara:</strong> Líneas de tren ligero y Macrobús para moverse por
              la Perla Tapatía.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Metrorrey Monterrey:</strong> Sistema de metro de la capital industrial de México.
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Nuestro <strong>trip planner</strong> te permite calcular rutas entre estaciones, ver tiempos
            estimados de viaje y encontrar la mejor combinación de transbordos — todo sin necesidad
            de conexión a internet una vez cargada la página.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Mundial FIFA 2026</h2>
          <p>
            Con México como país sede del Mundial FIFA 2026, millones de visitantes internacionales
            llegarán a Ciudad de México, Guadalajara y Monterrey. MetroGuia.mx se preparó para ser
            el recurso número uno de transporte público para fanáticos del fútbol de todo el mundo,
            con información disponible en 7 idiomas: español, inglés, portugués, francés, alemán,
            japonés y coreano.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Quiénes somos</h2>
          <p>
            MetroGuia.mx es un proyecto de{' '}
            <a href="https://marimbashome.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--metro-orange)' }}>
              Marimbas Home
            </a>, una empresa mexicana de hospitalidad con sede en la Ciudad de México. Combinamos
            nuestra experiencia recibiendo huéspedes internacionales con tecnología para crear
            herramientas útiles para viajeros.
          </p>
          <p style={{ marginTop: '1rem' }}>
            El sitio está desarrollado y mantenido por un equipo que conoce de primera mano
            los sistemas de transporte público en México — porque los usamos todos los días.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Información importante</h2>
          <p>
            MetroGuia.mx es un recurso informativo independiente. No estamos afiliados con
            el Sistema de Transporte Colectivo (Metro CDMX), SITEUR, Metrorrey ni ningún
            organismo gubernamental. Para información oficial, consulta los sitios web de
            cada sistema de transporte.
          </p>
          <p style={{ marginTop: '1rem' }}>
            ¿Tienes preguntas o sugerencias? Visita nuestra{' '}
            <a href="/contact/" style={{ color: 'var(--metro-orange)' }}>
              página de contacto
            </a>.
          </p>

        </div>
      </section>
    </div>
  )
}
