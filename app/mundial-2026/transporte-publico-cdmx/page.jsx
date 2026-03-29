export const metadata = {
  title: 'Guía de Transporte Público CDMX para FIFA 2026 — Metro, Metrobús, Tren Ligero | MetroGuia',
  description: 'Guía completa de transporte público en Ciudad de México para visitantes del Mundial 2026. Metro, Metrobús, BRT, Tren Ligero, Cercanías y consejos.',
  keywords: 'transporte publico cdmx, metro, metrobus, fifa 2026, como llegar, estadio azteca, tarjeta transporte',
  openGraph: {
    title: 'Guía de Transporte Público CDMX para FIFA 2026',
    description: 'Todo lo que necesitas saber para moverte en CDMX durante el Mundial 2026',
    type: 'article',
    url: 'https://metroguia.mx/mundial-2026/transporte-publico-cdmx/',
  },
}

export function generateStaticParams() {
  return []
}

export default function TransportePublicoCDMXPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Mundial 2026',
        item: 'https://metroguia.mx/mundial-2026/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Transporte Público CDMX',
        item: 'https://metroguia.mx/mundial-2026/transporte-publico-cdmx/'
      }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1a472a 0%, rgba(233, 30, 140, 0.1) 100%)',
        padding: '5rem 1.5rem 4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            <a href="/mundial-2026/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Mundial 2026</a>
            {' '} → Transporte Público
          </p>
          <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', lineHeight: '1.2' }}>
            Guía de Transporte Público CDMX para el Mundial FIFA 2026
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            maxWidth: '700px',
          }}>
            Todo lo que necesitas saber para moverte por la Ciudad de México durante el torneo: opciones, horarios, precios y consejos clave.
          </p>
        </div>
      </section>

      {/* Resumen de Opciones */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Las 5 opciones de transporte en CDMX</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                nombre: 'Metro',
                icono: '🚇',
                velocidad: 'Rápido',
                costo: '$8 MXN/viaje',
                mejor: 'Distancias largas, centro',
                lineas: '12 líneas (195 estaciones)',
                horario: '5:00 AM - 00:00 (medianoche)',
                ventajas: ['Más rápido', 'Muy barato', 'Confiable']
              },
              {
                nombre: 'Metrobús (BRT)',
                icono: '🚌',
                velocidad: 'Moderado',
                costo: '$7 MXN/viaje',
                mejor: 'Avenidas principales',
                lineas: '6 líneas (carriles dedicados)',
                horario: '5:00 AM - 23:00',
                ventajas: ['Carril dedicado', 'Visible', 'Barato']
              },
              {
                nombre: 'Tren Ligero',
                icono: '🚊',
                velocidad: 'Rápido',
                costo: '$9-10 MXN/viaje',
                mejor: 'Sur (Tasqueña → Estadio)',
                lineas: '2 líneas (embarcadero, tren)',
                horario: '5:30 AM - 00:30 AM',
                ventajas: ['Sin tráfico', 'Área sur', 'Directo']
              },
              {
                nombre: 'Taxi / Uber',
                icono: '🚕',
                velocidad: 'Variable (tráfico)',
                costo: '$150-600 MXN (depende)',
                mejor: 'Emergencias, grupos',
                lineas: 'Cualquier destino',
                horario: '24/7',
                ventajas: ['Puerta a puerta', 'Flexible', '24h']
              },
              {
                nombre: 'Cercanías / Autobús',
                icono: '🚂',
                velocidad: 'Lento',
                costo: '$10-25 MXN',
                mejor: 'Afueras (Toluca, Puebla)',
                lineas: 'Hacia estados',
                horario: '5:00 AM - 22:00',
                ventajas: ['Salidas regionales', 'Intercidades']
              }
            ].map((op, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface-hover)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{op.icono}</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                  {op.nombre}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <div>
                    <p style={{ color: 'var(--text-muted)', margin: '0 0 0.25rem 0', fontSize: '0.75rem', textTransform: 'uppercase' }}>Velocidad</p>
                    <p style={{ color: 'var(--text)', fontWeight: 600, margin: 0 }}>{op.velocidad}</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', margin: '0 0 0.25rem 0', fontSize: '0.75rem', textTransform: 'uppercase' }}>Costo</p>
                    <p style={{ color: 'var(--primary)', fontWeight: 700, margin: 0 }}>{op.costo}</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', margin: '0 0 0.25rem 0', fontSize: '0.75rem', textTransform: 'uppercase' }}>Ideal para</p>
                    <p style={{ color: 'var(--text)', margin: 0 }}>{op.mejor}</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', margin: '0 0 0.25rem 0', fontSize: '0.75rem', textTransform: 'uppercase' }}>Horario</p>
                    <p style={{ color: 'var(--text)', margin: 0 }}>{op.horario}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarjeta de Transporte */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Tarjeta de Transporte — Tu aliada en CDMX</h2>

          <div style={{
            backgroundColor: 'var(--primary-glow)',
            border: '2px solid var(--primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            marginBottom: '2rem',
          }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>¿Qué es?</h3>
            <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
              Una tarjeta recargable de plástico válida en Metro, Metrobús, Tren Ligero y Cercanías. Es la forma MÁS ECONÓMICA y segura de pagar transporte en CDMX durante tu viaje al Mundial.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem',
            }}>
              {[
                { label: 'Costo inicial', valor: '$20 MXN', desc: 'Incluye $1 de saldo' },
                { label: 'Validez', valor: 'Ilimitada', desc: 'Reutilizable para siempre' },
                { label: 'Transferencias', valor: 'Libres', desc: 'Metro + Metrobús → 45 min sin costo' },
                { label: 'Ahorro por viaje', valor: '$8 MXN', desc: 'vs. $150-200 MXN en taxi' },
              ].map((item, i) => (
                <div key={i} style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '1rem',
                  borderRadius: 'var(--radius)',
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}>
                    {item.label}
                  </p>
                  <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.25rem', margin: '0.5rem 0' }}>
                    {item.valor}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <h3 style={{ marginBottom: '1.5rem' }}>¿Dónde comprarla?</h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                lugar: 'Estaciones de Metro',
                icono: '🚇',
                detalles: [
                  'Centro Histórico: Zócalo, Bellas Artes',
                  'Aeropuerto: Terminal 1 (Línea A)',
                  'Estaciones grandes tienen taquillas 24/7'
                ]
              },
              {
                lugar: 'Estaciones Metrobús',
                icono: '🚌',
                detalles: [
                  'En cualquier estación de BRT',
                  'Taquillas de 5:00 AM a 23:00',
                  'Personal puede ayudarte en inglés'
                ]
              },
              {
                lugar: 'Tiendas Oxxo / Extra',
                icono: '🏪',
                detalles: [
                  'Ubícalas en el mapa (muy comunes)',
                  'Venta de tarjetas recargadas',
                  'Disponible 24/7'
                ]
              }
            ].map((op, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
              }}>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{op.icono}</h4>
                <h5 style={{ color: 'var(--primary)', marginBottom: '1rem', fontWeight: 600 }}>{op.lugar}</h5>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {op.detalles.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rutas para Estadios */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Rutas a los Estadios del Mundial</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                estadio: 'Estadio Azteca',
                ciudad: 'Coyoacán, Sur CDMX',
                ruta: 'Metro Línea 2 (Azul) + Tren Ligero',
                pasos: [
                  '1. Ve a cualquier estación de Línea 2',
                  '2. Dirección: SUR (Tasqueña)',
                  '3. Baja en Tasqueña',
                  '4. Compra boleto Tren Ligero ($10)',
                  '5. Tren hasta Estadio Azteca'
                ],
                tiempo: '1-1.5 horas',
                desde: 'Centro Histórico',
                costo: '$28 MXN'
              },
              {
                estadio: 'Hoteles / Centro',
                ciudad: 'Zona Turística',
                ruta: 'Metro Línea 1, 2 (principales)',
                pasos: [
                  '1. Centro Histórico: Zócalo',
                  '2. Polanco: Auditorio',
                  '3. Chapultepec: Chapultepec',
                  '4. Santa Fe: Linea 5 → Linea 1',
                  '5. La Condesa: Niños Héroes'
                ],
                tiempo: '5-20 min',
                desde: 'Centro',
                costo: '$8-16 MXN'
              }
            ].map((op, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface-hover)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                  {op.estadio}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  {op.ciudad}
                </p>

                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: '1rem',
                  borderRadius: 'var(--radius)',
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid var(--primary)',
                }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '0 0 0.25rem 0', textTransform: 'uppercase' }}>Mejor ruta</p>
                  <p style={{ color: 'var(--text)', fontWeight: 600, margin: 0 }}>{op.ruta}</p>
                </div>

                <ol style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  {op.pasos.map((paso, j) => <li key={j}>{paso}</li>)}
                </ol>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '0 0 0.25rem 0', textTransform: 'uppercase' }}>Tiempo</p>
                    <p style={{ color: 'var(--text)', fontWeight: 600, margin: 0 }}>{op.tiempo}</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '0 0 0.25rem 0', textTransform: 'uppercase' }}>Costo</p>
                    <p style={{ color: 'var(--primary)', fontWeight: 600, margin: 0 }}>{op.costo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos para Visitantes */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>10 Consejos Clave para Turistas</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { num: '1️⃣', titulo: 'Compra Tarjeta Transporte', desc: 'Tu mejor inversión: $20 MXN y válida para TODA tu estancia.' },
              { num: '2️⃣', titulo: 'No viajes tarde de noche', desc: 'Metro cierra 00:30. Después, usa Uber o taxis certificados.' },
              { num: '3️⃣', titulo: 'Guarda bien tu teléfono', desc: 'Los carteristas están activos en horas pico. Mochila enfrente.' },
              { num: '4️⃣', titulo: 'Evita horas pico', desc: 'Lunes-Viernes 7-10 AM y 5-8 PM. Los fines de semana son más tranquilos.' },
              { num: '5️⃣', titulo: 'Usa Google Maps', desc: 'Descargar mapa offline. Google te dice línea exacta y cambios.' },
              { num: '6️⃣', titulo: 'Aprende frases clave', desc: '"¿Qué línea voy?", "¿Dónde bajo?" Locales son amables si pides ayuda.' },
              { num: '7️⃣', titulo: 'Viaja en grupo', desc: 'Especialmente después de partidos. Es más seguro y divertido.' },
              { num: '8️⃣', titulo: 'Lleva efectivo', desc: 'ATMs pueden tener colas largas. Retira con anticipación.' },
              { num: '9️⃣', titulo: 'No comas en vagones', desc: 'Está prohibido y es de mala educación. Espera a llegar.' },
              { num: '🔟', titulo: 'Respeta señales', desc: 'Vagones "Mujeres y niños" en horas pico. Puertas se cierran rápido.' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
              }}>
                <p style={{ fontSize: '1.75rem', margin: '0 0 0.5rem 0' }}>{item.num}</p>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
                  {item.titulo}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergencias y Contactos */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Emergencias y Contactos Útiles</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { servicio: 'Emergencias Generales', numero: '911', desc: 'Disponible 24/7. Hablan inglés.' },
              { servicio: 'Metro (Información)', numero: '+52 55 1560 0011', desc: 'Horarios, líneas, estaciones.' },
              { servicio: 'Turismo CDMX', numero: '+52 55 5658 1111', desc: 'Información turística general.' },
              { servicio: 'Policía Turística', numero: '5250-8221', desc: 'Hablan inglés, ayudan turistas.' },
              { servicio: 'Embajadas (línea de emergencia)', numero: 'Varía por país', desc: 'Consulta tu embajada antes de viajar.' },
              { servicio: 'Consultorios 24h', numero: 'App: Doctorale', desc: 'Médicos online para situaciones menores.' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface-hover)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
              }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {item.servicio}
                </h4>
                <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', margin: '0.5rem 0', fontFamily: 'monospace' }}>
                  {item.numero}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>¿Listo para explorar CDMX?</h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            fontSize: '1rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Revisa nuestras guías interactivas de estaciones, líneas y rutas para planificar tu viaje completo al Mundial.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="/cdmx/" style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              backgroundColor: 'var(--primary)',
              color: '#000',
              fontWeight: 600,
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}>
              Explorar Metro CDMX →
            </a>
            <a href="/mundial-2026/" style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              backgroundColor: 'var(--surface-hover)',
              color: 'var(--text)',
              fontWeight: 600,
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              border: '1px solid var(--border)',
            }}>
              ← Volver a Mundial 2026
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
