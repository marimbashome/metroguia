import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import FAQSchema from '@/app/components/FAQSchema'

export const metadata = {
  title: 'Guía Completa del Metro para Turistas | MetroGuia',
  description: 'Guía paso a paso: tarjeta de movilidad, horarios, líneas principales, seguridad, vagones exclusivos para mujeres, y tips para moverse como local en CDMX.',
  keywords: 'metro CDMX tutorial, tarjeta de movilidad, horarios metro, linea 1 2 3 9, guía turista, cablebús',
}

export default function VisitorGuidePage() {
  const faqs = [
    {
      question: '¿Cuándo es la mejor hora para usar el metro?',
      answer: 'Las mejores horas son 10 AM - 4 PM. Evita 7-9 AM (entrada a trabajos) y 5-8 PM (salida de trabajos). En estas horas el metro está muy aglomerado.'
    },
    {
      question: '¿Qué son los vagones exclusivos para mujeres?',
      answer: 'Los primeros dos vagones de cada tren y el último vagón son exclusivos para mujeres y niños menores de 5 años. Esto aplica en horas específicas (generalmente 6-9 AM y 5-8 PM).'
    },
    {
      question: '¿Puedo llevar mochilas grandes en el metro?',
      answer: 'Sí, pero mantén la mochila al frente, especialmente en horas pico. Las mochilas grandes pueden incomodar a otros pasajeros. Mejor viajar en horas de menor afluencia.'
    },
    {
      question: '¿Funciona la tarjeta de movilidad en metrobús y trolebús?',
      answer: 'Sí, la tarjeta de movilidad integrada funciona en metro, metrobús, trolebús y algunos otros sistemas. Es la mejor inversión para turistas que viajarán múltiples veces.'
    },
    {
      question: '¿Hay aplicaciones para planificar rutas en metro?',
      answer: 'Sí: Google Maps (muestra rutas en tiempo real), la app oficial Metro CDMX (horarios y avisos), y CityGo (alternativa útil). Todas son gratuitas.'
    },
    {
      question: '¿Qué líneas son mejores para turistas?',
      answer: 'Línea 2 (Zócalo, Bellas Artes, Pino Suárez), Línea 3 (Chapultepec, Balderas), Línea 1 (Centro, Tasqueña para Tren Ligero), Línea 9 (Xochimilco). Línea A para zona sur.'
    }
  ]

  return (
    <div>
      <BreadcrumbSchema items={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Guías', url: '/guides' },
        { name: 'Guía Completa para Turistas', url: '/guides/visitor-guide/' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="hero" style={{ backgroundColor: 'var(--success)' }}>
        <div className="container">
          <h1 style={{ color: '#fff', marginBottom: '0.5rem' }}>🚇 Guía Completa del Metro para Turistas</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)' }}>
            Domina el metro de CDMX: tarjeta, horarios, líneas principales y tips de seguridad
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: '4rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Intro */}
          <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: '1.8', marginBottom: '3rem' }}>
            El metro de la Ciudad de México es uno de los sistemas de transporte más grandes del mundo: 12 líneas, 195 estaciones, y millones de pasajeros diarios. Para un turista, puede parecer abrumador. Esta guía te mostrará paso a paso cómo comprar tu tarjeta, qué líneas usar, cómo mantenerte seguro, y tips que los locales conocen. ¡Léela completa y te moverás como un chilango!
          </p>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* SECTION 1: Tarjeta de Movilidad */}
          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>1️⃣ La Tarjeta de Movilidad Integrada</h2>

          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
            <h3 style={{ marginTop: '0', marginBottom: '1rem' }}>¿Qué es y por qué la necesitas?</h3>
            <p style={{ color: 'var(--text)', marginBottom: '1rem' }}>
              La tarjeta de movilidad integrada es una tarjeta recargable que funciona en metro, metrobús, trolebús y otros sistemas de transporte integrados en CDMX. Es mucho más práctica y económica que comprar boletos individuales.
            </p>
            <div style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', border: '1px solid var(--success)', padding: '1rem', borderRadius: 'var(--radius)', marginTop: '1rem' }}>
              <strong style={{ color: 'var(--success)' }}>💡 Ahorro:</strong> Boletos individuales vs tarjeta:
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                <li>10 viajes individuales = $50 MXN</li>
                <li>10 viajes con tarjeta = $50 MXN + costo de tarjeta ($50 MXN única vez)</li>
                <li>Pero a partir del viaje 11, la tarjeta es más económica</li>
              </ul>
            </div>
          </div>

          <h3 style={{ marginBottom: '1rem' }}>Cómo Comprar tu Tarjeta de Movilidad</h3>

          <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <div style={{ fontWeight: '600', color: 'var(--info)', marginBottom: '0.5rem' }}>Paso 1: Ubica una Taquilla</div>
              <p style={{ color: 'var(--text-muted)', margin: '0', fontSize: '0.95rem' }}>
                En cualquier estación de metro encontrarás taquillas (casillas grises). Busca el símbolo de la tarjeta de movilidad o pregunta a un empleado &ldquo;¿Dónde compro tarjeta de movilidad?&rdquo;
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <div style={{ fontWeight: '600', color: 'var(--info)', marginBottom: '0.5rem' }}>Paso 2: Compra la Tarjeta</div>
              <p style={{ color: 'var(--text-muted)', margin: '0', fontSize: '0.95rem' }}>
                Paga $50 MXN por la tarjeta vacía. Solo necesitas decir &ldquo;Una tarjeta de movilidad&rdquo; (no solicitan pasaporte ni información personal).
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <div style={{ fontWeight: '600', color: 'var(--info)', marginBottom: '0.5rem' }}>Paso 3: Recarga Dinero</div>
              <p style={{ color: 'var(--text-muted)', margin: '0', fontSize: '0.95rem' }}>
                Luego, recarga la tarjeta. Recomienda hacer la recarga de $100-200 MXN para múltiples viajes. Simplemente dile al vendedor &ldquo;Recarga de $100 pesos&rdquo; y te lo hace al instante.
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid var(--info)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <div style={{ fontWeight: '600', color: 'var(--info)', marginBottom: '0.5rem' }}>Paso 4: Úsala</div>
              <p style={{ color: 'var(--text-muted)', margin: '0', fontSize: '0.95rem' }}>
                Pasa la tarjeta frente al lector en los torniquetes (que está a la altura del pecho). Escucharás un &ldquo;bip&rdquo; y se abrirá la puerta. Cada viaje consume $5 MXN.
              </p>
            </div>
          </div>

          {/* SECTION 2: Horarios */}
          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>2️⃣ Horarios y Operación del Metro</h2>

          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--primary)' }}>Lunes a Viernes</td>
                  <td style={{ padding: '1rem', color: 'var(--text)' }}>5:00 AM - 12:00 AM (medianoche)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--primary)' }}>Sábados</td>
                  <td style={{ padding: '1rem', color: 'var(--text)' }}>6:00 AM - 12:00 AM (medianoche)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--primary)' }}>Domingos</td>
                  <td style={{ padding: '1rem', color: 'var(--text)' }}>6:30 AM - 11:30 PM</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--primary)' }}>Frecuencia</td>
                  <td style={{ padding: '1rem', color: 'var(--text)' }}>Cada 3-5 minutos (horarios pico), cada 8-10 minutos (fuera de pico)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', border: '1px solid var(--warning)', padding: '1.5rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
            <strong style={{ color: 'var(--warning)' }}>⚠️ Importante para días de partido (Mundial 2026):</strong>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              En días de partidos importantes, el metro extiende horarios hasta la 1:00 AM o 2:00 AM. Verifica en metro.cdmx.gob.mx con anterioridad.
            </p>
          </div>

          <AdBannerLazyInArticle slot="1082410395" />

          {/* SECTION 3: Vagones para Mujeres */}
          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>3️⃣ Vagones Exclusivos para Mujeres y Niños</h2>

          <p style={{ color: 'var(--text)', marginBottom: '1rem' }}>
            CDMX tiene un sistema de seguridad especial: vagones exclusivos para mujeres y niños menores de 5 años.
          </p>

          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
            <h4 style={{ marginTop: '0', marginBottom: '1rem' }}>¿Cuáles son los vagones exclusivos?</h4>
            <ul style={{ color: 'var(--text)', marginLeft: '1.5rem', lineHeight: '2' }}>
              <li><strong>Primeros 2 vagones:</strong> Solo mujeres y niños (especialmente en horas pico)</li>
              <li><strong>Último vagón:</strong> Solo mujeres y niños</li>
              <li><strong>Horarios:</strong> Generalmente 6:00-9:00 AM y 5:00-8:00 PM (en algunos trenes todo el día)</li>
            </ul>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem', marginBottom: '0' }}>
              ℹ️ Si eres hombre, puedes entrar a cualquier vagón que no sea exclusivo para mujeres.
            </p>
          </div>

          {/* SECTION 4: Líneas Principales para Turistas */}
          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>4️⃣ Las Mejores Líneas para Turistas</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'var(--surface)', border: '3px solid var(--linea-1)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ color: 'var(--linea-1)', marginTop: '0', marginBottom: '0.5rem' }}>Línea 1 (Rosa)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>La ruta turística por excelencia</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                <strong>Paradas principales:</strong> Zócalo, Pino Suárez, Isabel la Católica, Bellas Artes, San Juan de Letrán. Destino final Tasqueña (transborda a Tren Ligero al Estadio Azteca).
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', border: '3px solid var(--linea-2)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ color: 'var(--linea-2)', marginTop: '0', marginBottom: '0.5rem' }}>Línea 2 (Azul)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>El corazón del centro histórico</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                <strong>Paradas principales:</strong> Bellas Artes, Pino Suárez, Zócalo, San Antonio Abad. Perfecta para recorrer el Centro Histórico.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', border: '3px solid var(--linea-3)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ color: 'var(--linea-3)', marginTop: '0', marginBottom: '0.5rem' }}>Línea 3 (Verde)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>Hacia Chapultepec y zona west</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                <strong>Paradas principales:</strong> Chapultepec, Balderas, Juárez. Acceso al Bosque de Chapultepec, museos y parques.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', border: '3px solid #9E9E9E', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ color: '#9E9E9E', marginTop: '0', marginBottom: '0.5rem' }}>Línea 9 (Marrón)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>Hacia el sur: Coyoacán y Xochimilco</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                <strong>Paradas principales:</strong> Coyoacán (zona bohemia), conexión a Línea A (Xochimilco). Barrios tradicionales y mercados.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', border: '3px solid var(--linea-5)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ color: 'var(--linea-5)', marginTop: '0', marginBottom: '0.5rem' }}>Línea 5 (Amarilla)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>Del aeropuerto al centro</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                <strong>Paradas principales:</strong> Benito Juárez (AICM), Aeropuerto, Bellas Artes. Ruta más directa desde el aeropuerto.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', border: '3px solid var(--linea-A)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ color: 'var(--linea-A)', marginTop: '0', marginBottom: '0.5rem' }}>Línea A (Púrpura)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem 0' }}>Hacia Xochimilco (trajineras)</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                <strong>Paradas principales:</strong> Xochimilco (embarcadero de trajineras), zona chiapaneca con canales. Icono de CDMX.
              </p>
            </div>
          </div>

          {/* SECTION 5: Seguridad */}
          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>5️⃣ Tips de Seguridad en el Metro</h2>

          <p style={{ color: 'var(--text)', marginBottom: '1.5rem' }}>
            El metro de CDMX es generalmente seguro, pero aquí hay tips prácticos para turistas:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', border: '1px solid var(--success)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ color: 'var(--success)', marginTop: '0', marginBottom: '0.75rem' }}>✅ Haz Esto</h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text)', marginLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Viaja en parejas o grupos</li>
                <li>Mochila al FRENTE, no atrás</li>
                <li>Viaja 10 AM - 7 PM</li>
                <li>Usa vagones con gente</li>
                <li>Dinero dividido en bolsillos</li>
                <li>Mantén cables de audífonos guardados</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '1px solid var(--danger)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
              <h4 style={{ color: 'var(--danger)', marginTop: '0', marginBottom: '0.75rem' }}>❌ No Hagas Esto</h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text)', marginLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>No muestres dinero o joyas</li>
                <li>No viajes solo después de 8 PM</li>
                <li>No duermas / desmayos en tren</li>
                <li>No uses teléfono desatendido</li>
                <li>No viajes con mochilas grandes de noche</li>
                <li>No entres a vagones vacíos</li>
              </ul>
            </div>
          </div>

          {/* SECTION 6: Cablebús */}
          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>6️⃣ Cablebús: La Atracción Turística del Metro</h2>

          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
            <h4 style={{ marginTop: '0', marginBottom: '1rem' }}>¿Qué es el Cablebús?</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              El Cablebús es un teleférico de transporte público que funciona como extension del metro. Es una experiencia única en CDMX: viajas en cabinas sobre la ciudad, con vistas increíbles.
            </p>
            <div style={{ backgroundColor: 'rgba(232, 150, 14, 0.1)', border: '1px solid var(--primary-border)', padding: '1rem', borderRadius: 'var(--radius)' }}>
              <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text)' }}>
                <strong>Línea 1 (Cablebús):</strong> Iztapalapa → La Noria (zona sur)<br/>
                <strong>Costo:</strong> $5 MXN (con tarjeta de movilidad integrada)<br/>
                <strong>Por qué turistas aman:</strong> Vistas aéreas espectaculares de CDMX, experiencia única, es gratis si ya tienes tarjeta
              </p>
            </div>
          </div>

          {/* SECTION 7: Cómo Pedir Ayuda */}
          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>7️⃣ Útiles en Caso de Confusión</h2>

          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
            <h4 style={{ marginTop: '0', marginBottom: '1.5rem' }}>Frases útiles en Español:</h4>
            <table style={{ width: '100%', fontSize: '0.9rem', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.75rem', fontWeight: '600' }}>¿A qué estación voy para...?</td>
                  <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Para preguntar línea/estación</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.75rem', fontWeight: '600' }}>¿Dónde compro tarjeta?</td>
                  <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Para encontrar taquilla</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.75rem', fontWeight: '600' }}>Está última estación llegamos juntos</td>
                  <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Los locales entienden pidiendo confirmar destino</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: '600' }}>Gracias / Disculpa</td>
                  <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Cortesía básica que los mexicanos aprecian</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AdBannerLazy slot="4434764790" format="auto" />

          {/* FAQ Section */}
          <h2 style={{ marginTop: '3rem', marginBottom: '2rem' }}>❓ Preguntas Frecuentes</h2>
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

          {/* CTA */}
          <div style={{
            backgroundColor: 'var(--surface)',
            border: '2px solid var(--success)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <h3 style={{ marginTop: '0', marginBottom: '1rem' }}>¿Listo para Comenzar tu Viaje?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Usa nuestro calculador de rutas o explora estaciones turísticas
            </p>
            <a href="/ruta/" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'var(--success)',
                color: '#fff',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem',
                marginRight: '1rem'
              }}>
                🗺️ Calcular Ruta
              </button>
            </a>
            <a href="/explorar/" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'transparent',
                color: 'var(--success)',
                padding: '1rem 2rem',
                border: '2px solid var(--success)',
                borderRadius: 'var(--radius)',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}>
                🎯 Explorar CDMX
              </button>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
