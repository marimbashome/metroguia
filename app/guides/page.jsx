import AdBannerLazy from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import FAQSchema from '@/app/components/FAQSchema'

export const metadata = {
  title: 'Guías de Turista para Metro CDMX | MetroGuia',
  description: 'Guías completas para turistas: cómo llegar del aeropuerto, uso de tarjeta de movilidad, seguridad en metro y tips para el Mundial FIFA 2026.',
  keywords: 'guía turista metro CDMX, aeropuerto a metro, tarjeta de movilidad, seguridad metro, mundial 2026',
  openGraph: {
    title: 'Guías de Turista para Metro CDMX | MetroGuia',
    description: 'Guías prácticas para turistas que usan el metro en Ciudad de México.',
  }
}

export default function GuidesPage() {
  const guides = [
    {
      slug: 'airport-to-metro',
      title: 'Aeropuerto a Centro en Metro',
      emoji: '✈️',
      description: 'Cómo llegar del Aeropuerto Internacional Benito Juárez (AICM) y Felipe Ángeles (AIFA) al centro de CDMX usando metro y tren.',
      readTime: '8 min',
      difficulty: 'Principiante',
      color: 'var(--info)'
    },
    {
      slug: 'visitor-guide',
      title: 'Guía Completa para Turistas',
      emoji: '🚇',
      description: 'Todo lo que necesitas saber: compra de tarjeta de movilidad, horarios, seguridad, líneas recomendadas y tips de movilidad.',
      readTime: '12 min',
      difficulty: 'Principiante',
      color: 'var(--success)'
    },
    {
      slug: 'fifa-2026-transport',
      title: 'Transporte para Mundial FIFA 2026',
      emoji: '⚽',
      description: 'Guía especializada: cómo llegar al Estadio Azteca, horarios en días de partido, alternativas y tips de seguridad para turistas.',
      readTime: '10 min',
      difficulty: 'Intermedio',
      color: 'var(--primary)'
    }
  ]

  const faqs = [
    {
      question: '¿Cuál es el costo del metro en CDMX?',
      answer: 'El metro cuesta $5 MXN por viaje. Puedes comprar una tarjeta de movilidad integrada recargable en cualquier estación.'
    },
    {
      question: '¿Qué es la tarjeta de movilidad integrada?',
      answer: 'Es una tarjeta recargable que funciona en metro, metrobús, trolebús y otros sistemas. Se compra por $50 MXN y se recarga con el dinero que quieras gastar.'
    },
    {
      question: '¿Es seguro el metro de CDMX para turistas?',
      answer: 'Sí, el metro es generalmente seguro. Evita viajar a horas pico, no muestres dinero, mantén mochilas cerradas y viaja en grupos cuando sea posible.'
    },
    {
      question: '¿Cuáles son las líneas más útiles para turistas?',
      answer: 'Las líneas 1, 2, 3 y 9 conectan con los puntos turísticos principales: Bellas Artes, Zócalo, Chapultepec, Coyoacán. La línea A llega a Xochimilco.'
    },
    {
      question: '¿Hay horarios especiales en días de partido del Mundial?',
      answer: 'Sí, el metro extiende horarios en días de partidos importantes. Verifica directamente en https://www.metro.cdmx.gob.mx/ para horarios actualizados.'
    }
  ]

  return (
    <div>
      <BreadcrumbSchema items={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Guías', url: '/guides' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="hero" style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>
        <div className="container">
          <h1 style={{ color: '#fff', marginBottom: '1rem' }}>📚 Guías Prácticas para Turistas</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '0', color: 'rgba(255,255,255,0.95)' }}>
            Todo lo que necesitas saber para moverte en metro durante tu viaje a CDMX
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* Intro */}
          <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: '1.7' }}>
              ¿Es tu primera vez en la Ciudad de México? Aquí encontrarás guías completas y prácticas para usar el metro como un local. 
              Desde cómo llegar del aeropuerto hasta tips de seguridad y líneas recomendadas.
            </p>
          </div>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* Guides Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {guides.map((guide) => (
              <a 
                key={guide.slug}
                href={`/guides/${guide.slug}/`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div 
                  style={{ 
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  className="hover-lift"
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{guide.emoji}</div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text)' }}>
                    {guide.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', flex: '1' }}>
                    {guide.description}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                    <span>⏱️ {guide.readTime}</span>
                    <span>📊 {guide.difficulty}</span>
                  </div>
                  <div style={{ marginTop: '1rem', color: guide.color, fontWeight: '600', fontSize: '0.9rem' }}>
                    Leer guía →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Features */}
          <h2 style={{ marginBottom: '3rem', textAlign: 'center', fontSize: '2rem' }}>¿Qué Aprenderás?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: '✈️', title: 'Llegar del Aeropuerto', text: 'Paso a paso desde terminales 1 y 2 hasta el centro' },
              { icon: '🎫', title: 'Tarjeta de Movilidad', text: 'Cómo comprar y recargar tu tarjeta integrada' },
              { icon: '🚇', title: 'Líneas Principales', text: 'Las 12 líneas y cuáles son mejores para turistas' },
              { icon: '👩‍👧‍👦', title: 'Seguridad', text: 'Tips prácticos y zonas seguras para turistas' },
              { icon: '⚽', title: 'Mundial 2026', text: 'Horarios especiales y rutas para partidos' },
              { icon: '💰', title: 'Costos y Horarios', text: 'Precios actuales y horarios extendidos' },
            ].map((feature, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--text)' }}>{feature.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{feature.text}</p>
              </div>
            ))}
          </div>

          <AdBannerLazy slot="1082410395" format="auto" />

          {/* Quick Tips */}
          <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '2rem' }}>🎯 Tips Rápidos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { title: '💳 Tarjeta vs Boleto', tip: 'La tarjeta de movilidad es más práctica y económica. Se compra en cualquier estación.' },
              { title: '⏰ Mejor Hora para Viajar', tip: 'Evita 7-9 AM y 5-8 PM. Viaja entre 10 AM-4 PM para menos aglomeración.' },
              { title: '👩‍🦰 Vagones para Mujeres', tip: 'Los primeros 2 vagones y el último son exclusivos para mujeres y niños hasta 5 años.' },
              { title: '🎒 Mochilas y Bolsas', tip: 'Mantén mochilas cerradas y al frente. No lleves bolsas grandes en horas pico.' },
              { title: '📍 Aplicación Útil', tip: 'Descarga la app del Metro CDMX para mapas, horarios y actualizaciones en tiempo real.' },
              { title: '🧭 Estaciones Turísticas', tip: 'Bellas Artes, Zócalo, Chapultepec, Hidalgo son las más visitadas por turistas.' },
            ].map((item, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'rgba(232, 150, 14, 0.08)',
                  border: '1px solid var(--primary-border)',
                  borderLeft: '4px solid var(--primary)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem'
                }}
              >
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', margin: '0' }}>{item.tip}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ 
            backgroundColor: 'var(--surface)',
            border: '2px solid var(--primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>¿Listo para moverte como un local?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Elige una guía y comienza a planificar tu viaje en metro por CDMX
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/guides/airport-to-metro/" style={{ textDecoration: 'none' }}>
                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s'
                }}>
                  ✈️ Guía Aeropuerto
                </button>
              </a>
              <a href="/guides/visitor-guide/" style={{ textDecoration: 'none' }}>
                <button style={{
                  backgroundColor: 'transparent',
                  color: 'var(--primary)',
                  padding: '1rem 2rem',
                  border: '2px solid var(--primary)',
                  borderRadius: 'var(--radius)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s'
                }}>
                  🚇 Guía Completa
                </button>
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '2rem' }}>❓ Preguntas Frecuentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* Resources */}
          <h2 style={{ marginTop: '4rem', marginBottom: '2rem', textAlign: 'center', fontSize: '2rem' }}>📚 Recursos Útiles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <a 
              href="https://www.metro.cdmx.gob.mx/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                transition: 'all 0.3s'
              }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>🚇 Sitio Oficial Metro CDMX</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Horarios, mapas, tarifas y avisos oficiales</p>
              </div>
            </a>
            <a 
              href="/ruta/" 
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                transition: 'all 0.3s'
              }}>
                <h4 style={{ color: 'var(--info)', marginBottom: '0.5rem' }}>🗺️ Calculador de Rutas</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Planifica tu viaje de punto A a punto B</p>
              </div>
            </a>
            <a 
              href="/explorar/" 
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                transition: 'all 0.3s'
              }}>
                <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>🎯 Explorar CDMX</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Descubre zonas, estaciones y atracciones</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
