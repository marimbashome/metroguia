import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import FAQSchema from '@/app/components/FAQSchema'

export const metadata = {
  title: 'Cómo llegar del Aeropuerto a CDMX en Metro | MetroGuia',
  description: 'Guía paso a paso: aeropuerto AICM a metro, tarjeta de movilidad, alternativas (Metrobús, Uber), horarios, precios y tips de seguridad para turistas.',
  keywords: 'aeropuerto a metro, AICM metro línea 5, cómo llegar del aeropuerto CDMX, Tren Suburbano AIFA',
}

export default function AirportToMetroPage() {
  const faqs = [
    {
      question: '¿Cuánto cuesta ir del aeropuerto al centro en metro?',
      answer: 'Metro cuesta $5 MXN. Si necesitas comprar tarjeta de movilidad, suma $50 MXN (la tarjeta). Total inicial: $55 MXN. Luego solo pagas $5 por viaje.'
    },
    {
      question: '¿Cuánto tiempo toma llegar del aeropuerto al centro en metro?',
      answer: 'De 30 a 45 minutos hasta el Centro Histórico, dependiendo de tu destino final. La Línea 5 tiene 8 estaciones hasta Bellas Artes.'
    },
    {
      question: '¿Hay línea de metro directo desde el aeropuerto?',
      answer: 'Sí, la Línea 5 (Amarilla) conecta directo: Benito Juárez (AICM) → Bellas Artes (Centro Histórico) sin transbordos.'
    },
    {
      question: '¿Puedo usar la tarjeta de movilidad que compré en el aeropuerto en todo CDMX?',
      answer: 'Sí, funciona en metro, metrobús, trolebús y otros sistemas integrados. Excepción: Tren Ligero a Xochimilco y Tren Suburbano a AIFA tienen tarifa separada.'
    },
    {
      question: '¿A qué hora funciona el metro desde el aeropuerto?',
      answer: 'Línea 5 desde las 6:00 AM hasta las 11:30 PM todos los días. Verifica horarios en metro.cdmx.gob.mx para actualizaciones.'
    },
    {
      question: '¿Qué alternativas hay si llego tarde de noche?',
      answer: 'Si el metro cierra (después de 11:30 PM): Uber, taxis seguros, minibús de hotel, servicios de transfer. Uber es la opción más confiable (USD 15-25 CDMX).'
    },
    {
      question: '¿Es seguro el metro del aeropuerto para turistas con maletas?',
      answer: 'Sí, es seguro durante el día. Tips: mantén maleta al frente, no la dejes sola, viaja en vagones con más gente. Evita horas nocturnas (después de 8 PM).'
    },
    {
      question: '¿Puedo llevar maletas grandes en el metro?',
      answer: 'Sí, se permiten maletas. Pero en horas pico (7-9 AM, 5-8 PM) es incómodo. Mejor viajar a media mañana o tarde (10 AM-4 PM).'
    }
  ]

  return (
    <div>
      <BreadcrumbSchema items={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Guías', url: '/guides' },
        { name: 'Aeropuerto a Metro', url: '/guides/airport-to-metro/' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="hero" style={{ backgroundColor: 'var(--info)' }}>
        <div className="container">
          <h1 style={{ color: '#fff', marginBottom: '0.5rem' }}>✈️ Del Aeropuerto al Centro en Metro</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)' }}>
            Guía paso a paso: desde Benito Juárez (AICM) hasta el corazón de CDMX
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: '4rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Intro */}
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', marginTop: '0' }}>Resumen Rápido</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '0.25rem' }}>⏱️ Tiempo</div>
                <div style={{ color: 'var(--text)' }}>30-45 min</div>
              </div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '0.25rem' }}>💰 Costo</div>
                <div style={{ color: 'var(--text)' }}>$5 MXN (+$50 tarjeta inicial)</div>
              </div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '0.25rem' }}>🚇 Línea</div>
                <div style={{ color: 'var(--text)' }}>Línea 5 (Amarilla)</div>
              </div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '0.25rem' }}>🎯 Destino</div>
                <div style={{ color: 'var(--text)' }}>Bellas Artes (Centro)</div>
              </div>
            </div>
          </div>

          {/* Step by Step */}
          <h2 style={{ marginBottom: '2.5rem' }}>Paso a Paso: Aeropuerto AICM a Bellas Artes</h2>

          {/* Step 1 */}
          <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ 
                minWidth: '50px', 
                height: '50px', 
                backgroundColor: 'var(--info)', 
                color: '#fff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                fontWeight: '800',
                fontSize: '1.5rem'
              }}>
                1
              </div>
              <div style={{ flex: '1' }}>
                <h3 style={{ marginBottom: '0.75rem', marginTop: '0' }}>Llega a Terminal 1 o 2 (AICM)</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  El Aeropuerto Internacional Benito Juárez (AICM) está ubicado en la zona oriente de CDMX. Tanto Terminal 1 como Terminal 2 tienen acceso a la Línea 5.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                  📍 Benito Juárez International Airport (AICM), Miguel Hidalgo, CDMX
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ 
                minWidth: '50px', 
                height: '50px', 
                backgroundColor: 'var(--info)', 
                color: '#fff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                fontWeight: '800',
                fontSize: '1.5rem'
              }}>
                2
              </div>
              <div style={{ flex: '1' }}>
                <h3 style={{ marginBottom: '0.75rem', marginTop: '0' }}>Localiza la Estación de Metro L5 (Benito Juárez)</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Sigue señales azules de &ldquo;Metro&rdquo;. La estación está DENTRO de la terminal. Busca avisos que digan &ldquo;Línea 5&rdquo; o el símbolo amarillo.
                </p>
                <div style={{ backgroundColor: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius)', marginTop: '1rem' }}>
                  <strong style={{ color: 'var(--warning)' }}>⚠️ Importante:</strong> No confundas con Tren Suburbano (servicio de pago diferente). El metro es mucho más económico.
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ 
                minWidth: '50px', 
                height: '50px', 
                backgroundColor: 'var(--info)', 
                color: '#fff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                fontWeight: '800',
                fontSize: '1.5rem'
              }}>
                3
              </div>
              <div style={{ flex: '1' }}>
                <h3 style={{ marginBottom: '0.75rem', marginTop: '0' }}>Compra o Recarga tu Tarjeta de Movilidad</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  En la estación Benito Juárez encontrarás taquillas (casillas grises). Opciones:
                </p>
                <ul style={{ color: 'var(--text)', marginLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Tarjeta nueva:</strong> $50 MXN (tarjeta vacía) + recarga mínima $50 MXN. Total: mínimo $100 MXN</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Solo viaje:</strong> Boleto de una sola vez ($5 MXN) sin tarjeta</li>
                  <li><strong>Recomendación:</strong> Tarjeta de movilidad integrada es mejor para 10+ viajes</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                  💡 Tip: Compra recarga de $100-200 MXN para varios viajes. Funciona en metrobús también.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ 
                minWidth: '50px', 
                height: '50px', 
                backgroundColor: 'var(--info)', 
                color: '#fff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                fontWeight: '800',
                fontSize: '1.5rem'
              }}>
                4
              </div>
              <div style={{ flex: '1' }}>
                <h3 style={{ marginBottom: '0.75rem', marginTop: '0' }}>Entra al Metro — Línea 5 (Amarilla)</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Pasa tu tarjeta (o boleto) en el torniquete. Verás un lector azul — coloca tu tarjeta de frente a la altura del pecho. Escucharás un &ldquo;bip&rdquo; y podrás entrar.
                </p>
                <div style={{ backgroundColor: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius)', marginTop: '1rem' }}>
                  <strong style={{ color: 'var(--text)' }}>Recuerda tu tarjeta:</strong> No todos los torniquetes funcionan igual. Si uno no abre, intenta con otro cercano o pide ayuda.
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ 
                minWidth: '50px', 
                height: '50px', 
                backgroundColor: 'var(--info)', 
                color: '#fff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                fontWeight: '800',
                fontSize: '1.5rem'
              }}>
                5
              </div>
              <div style={{ flex: '1' }}>
                <h3 style={{ marginBottom: '0.75rem', marginTop: '0' }}>Sube al Tren hacia Bellas Artes</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Dirección: <strong>Benito Juárez → Bellas Artes</strong> (dirección &ldquo;hacia el centro&rdquo;). Los trenes vienen cada 3-5 minutos. Busca paneles informativos que indiquen la dirección.
                </p>
                <p style={{ color: 'var(--text)', marginBottom: '1rem' }}>
                  <strong>Paradas Línea 5 (orden desde el aeropuerto):</strong>
                </p>
                <ol style={{ color: 'var(--text)', marginLeft: '1.5rem', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  <li>Benito Juárez (Inicio / AICM)</li>
                  <li>Aeropuerto</li>
                  <li>Terminal Aérea</li>
                  <li>La Raza</li>
                  <li>Misterios</li>
                  <li>Valle de México</li>
                  <li>Consulado</li>
                  <li>Bellas Artes (Destino final / Centro Histórico)</li>
                </ol>
              </div>
            </div>
          </div>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* Section: Other Options */}
          <h2 style={{ marginBottom: '2rem' }}>Alternativas: Metrobús, Uber, Tren Suburbano</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--success)', marginBottom: '1rem', marginTop: '0' }}>🚌 Metrobús (Línea 4)</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Ruta: Aeropuerto → Buenavista (Centro)
              </p>
              <ul style={{ color: 'var(--text)', fontSize: '0.9rem', marginLeft: '1.5rem' }}>
                <li>Costo: $6 MXN (tarjeta integrada)</li>
                <li>Tiempo: 45-60 minutos</li>
                <li>Ventaja: Una sola parada, línea directa</li>
                <li>Desventaja: Más lento, tráfico</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--warning)', marginBottom: '1rem', marginTop: '0' }}>🚕 Uber / Didi</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Directo a tu hotel sin transbordos
              </p>
              <ul style={{ color: 'var(--text)', fontSize: '0.9rem', marginLeft: '1.5rem' }}>
                <li>Costo: $15-25 USD (~300-500 MXN)</li>
                <li>Tiempo: 30-45 minutos (sin tráfico)</li>
                <li>Ventaja: Puerta a puerta, sin maletas</li>
                <li>Desventaja: Más caro, tráfico impredecible</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--danger)', marginBottom: '1rem', marginTop: '0' }}>🚄 Tren Suburbano (AIFA)</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Si llegas a Felipe Ángeles (AIFA)
              </p>
              <ul style={{ color: 'var(--text)', fontSize: '0.9rem', marginLeft: '1.5rem' }}>
                <li>Costo: $160 MXN (caro pero rápido)</li>
                <li>Tiempo: 25 minutos a Buenavista</li>
                <li>Ventaja: Muy rápido, aire acondicionado</li>
                <li>Desventaja: Tarifa separada (no integrada)</li>
              </ul>
            </div>
          </div>

          <AdBannerLazyInArticle slot="1082410395" />

          {/* Tips de Seguridad */}
          <h2 style={{ marginBottom: '2rem' }}>🛡️ Tips de Seguridad para Turistas en el Metro</h2>

          <div style={{ backgroundColor: 'rgba(220, 38, 38, 0.05)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--danger)', marginBottom: '0.75rem' }}>✅ Haz Esto</h4>
                <ul style={{ color: 'var(--text)', fontSize: '0.9rem', marginLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Viaja en grupos o parejas</li>
                  <li>Mantén mochila al FRENTE</li>
                  <li>Viaja entre 10 AM - 7 PM</li>
                  <li>Usa vagones con más gente</li>
                  <li>Mantén dinero dividido</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--danger)', marginBottom: '0.75rem' }}>❌ No Hagas Esto</h4>
                <ul style={{ color: 'var(--text)', fontSize: '0.9rem', marginLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>No muestres dinero o joyas</li>
                  <li>No viajes con maletas grandes de noche</li>
                  <li>No duermas en el metro</li>
                  <li>No uses teléfono desatendido</li>
                  <li>No viajes solo después de 8 PM</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 style={{ marginBottom: '2rem' }}>❓ Preguntas Frecuentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.slice(0, 5).map((faq, i) => (
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
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            backgroundColor: 'var(--surface)',
            border: '2px solid var(--info)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <h3 style={{ marginBottom: '1rem', marginTop: '0' }}>¿Necesitas Ayuda Adicional?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Planifica tu ruta completa usando nuestro calculador o explora estaciones turísticas
            </p>
            <a href="/ruta/aeropuerto-a-bellas-artes/" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'var(--info)',
                color: '#fff',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}>
                🗺️ Ver Ruta Completa
              </button>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
