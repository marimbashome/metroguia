export const metadata = {
  title: 'Contacto — MetroGuia.mx',
  description: 'Contacta al equipo de MetroGuia.mx para preguntas, sugerencias, colaboraciones o reportar información incorrecta sobre transporte público en México.',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)', padding: '3rem 1.5rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Contacto</h1>
          <p style={{ opacity: 0.7, fontSize: '0.875rem' }}>Estamos aquí para ayudarte</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px', lineHeight: 1.8 }}>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Escríbenos</h2>
          <p>
            Si tienes preguntas sobre el sitio, sugerencias para mejorar la información, o
            necesitas ayuda planificando tu viaje en transporte público, puedes contactarnos por
            correo electrónico:
          </p>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>
            <a href="mailto:enrique@marimbashome.com" style={{ color: 'var(--metro-orange)', fontWeight: 600 }}>
              enrique@marimbashome.com
            </a>
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Motivos de contacto</h2>
          <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Información incorrecta:</strong> Si encuentras datos desactualizados sobre
              estaciones, rutas, horarios o tarifas, avísanos para corregirlo lo antes posible.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Sugerencias:</strong> ¿Te gustaría ver una ciudad o sistema de transporte
              adicional en MetroGuia.mx? Nos encanta recibir ideas.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Colaboraciones:</strong> Si representas un medio de comunicación, blog de
              viajes, u organización relacionada con turismo o transporte, estamos abiertos a
              colaborar.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Mundial FIFA 2026:</strong> ¿Organizas viajes grupales o necesitas información
              de transporte para tu delegación? Podemos ayudarte.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Publicidad:</strong> Para consultas sobre publicidad y patrocinios en
              MetroGuia.mx, escríbenos al correo indicado arriba.
            </li>
          </ul>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Tiempo de respuesta</h2>
          <p>
            Hacemos nuestro mejor esfuerzo por responder todos los correos en un plazo de
            24 a 48 horas. Durante temporadas de alto tráfico (como eventos deportivos
            internacionales) la respuesta puede tomar un poco más.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Sobre MetroGuia.mx</h2>
          <p>
            MetroGuia.mx es un proyecto de{' '}
            <a href="https://marimbashome.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--metro-orange)' }}>
              Marimbas Home
            </a>, una empresa mexicana de hospitalidad. Conoce más sobre nosotros en nuestra{' '}
            <a href="/about/" style={{ color: 'var(--metro-orange)' }}>
              página de información
            </a>.
          </p>

        </div>
      </section>
    </div>
  )
}
