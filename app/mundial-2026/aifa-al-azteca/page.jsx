export const metadata = {
  title: 'Del AIFA al Estadio Azteca — Ruta en Transporte Público para el Mundial 2026 | MetroGuia',
  description: 'Cómo llegar del Aeropuerto AIFA al Estadio Azteca para el Mundial FIFA 2026: Tren Suburbano + Metro. Tiempo, costo y paso a paso.',
  keywords: 'AIFA al Azteca, aeropuerto Felipe Angeles transporte, tren suburbano AIFA, como llegar estadio azteca, mundial 2026 transporte cdmx',
  openGraph: {
    title: 'Del AIFA al Estadio Azteca — Ruta en Transporte Público para el Mundial 2026',
    description: 'Cómo llegar del Aeropuerto AIFA al Estadio Azteca para el Mundial FIFA 2026: Tren Suburbano + Metro. Tiempo, costo y paso a paso.',
    type: 'article',
    url: 'https://metroguia.mx/mundial-2026/aifa-al-azteca/',
  },
}

export default function AifaAlAztecaPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo llegar del AIFA al Estadio Azteca en transporte público',
    description: 'Ruta completa del Aeropuerto Internacional Felipe Ángeles (AIFA) al Estadio Azteca usando Tren Suburbano, Metro Línea B y Tren Ligero.',
    totalTime: 'PT100M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'MXN',
      value: '50',
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'AIFA → Lechería (Ramal AIFA)',
        text: 'Toma el Ramal AIFA del Tren Suburbano (TS-AIFA) desde la estación dentro del aeropuerto. Dirección: Lechería. Tiempo aproximado: 25 minutos. Costo: ~$17 MXN. Necesitas tarjeta Movilidad Integrada.',
        url: 'https://metroguia.mx/cdmx/tren-suburbano/estacion/aifa-ts/',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Lechería → Buenavista (Tren Suburbano)',
        text: 'En Lechería, continúa en el Tren Suburbano principal con dirección a Buenavista. Tiempo aproximado: 30 minutos. Costo: ~$18 MXN.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Buenavista → Taxqueña (Metro Línea B)',
        text: 'En la estación Buenavista (metro), toma la Línea B con destino a Ciudad Universitaria / Tasqueña. Baja en Tasqueña. Tiempo aproximado: 25 minutos. Costo: $5 MXN.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Taxqueña → Estadio Azteca (Tren Ligero)',
        text: 'En Taxqueña, busca la salida al Tren Ligero. IMPORTANTE: la tarjeta Metro NO funciona aquí — compra un boleto separado en la taquilla (~$10 MXN). Toma el tren con destino Estadio Azteca. Tiempo: 10 minutos.',
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Mundial 2026',
        item: 'https://metroguia.mx/mundial-2026/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'AIFA al Azteca',
        item: 'https://metroguia.mx/mundial-2026/aifa-al-azteca/',
      },
    ],
  }

  const pasos = [
    {
      num: 1,
      sistema: 'Tren Suburbano',
      icono: '🚆',
      titulo: 'AIFA → Lechería',
      subtitulo: 'Ramal AIFA (TS-AIFA)',
      desc: 'Desde la estación del Tren Suburbano dentro del aeropuerto, toma el ramal con destino Lechería. La estación está conectada directamente al edificio terminal.',
      tiempo: '25 min',
      costo: '~$17 MXN',
      nota: 'Requiere tarjeta Movilidad Integrada. Se compra en Buenavista-TS o en la estación.',
      borderColor: '#00A651',
      bgColor: 'rgba(0, 166, 81, 0.06)',
      badgeColor: '#00A651',
      warn: false,
    },
    {
      num: 2,
      sistema: 'Tren Suburbano',
      icono: '🚆',
      titulo: 'Lechería → Buenavista',
      subtitulo: 'Tren Suburbano (TS)',
      desc: 'En Lechería haz trasbordo al servicio principal del Tren Suburbano con destino Buenavista. Sigue las señalizaciones dentro de la estación — el andén está conectado.',
      tiempo: '30 min',
      costo: '~$18 MXN',
      nota: 'Misma tarjeta Movilidad Integrada. Guarda tu tarjeta — la necesitarás al salir.',
      borderColor: '#00A651',
      bgColor: 'rgba(0, 166, 81, 0.06)',
      badgeColor: '#00A651',
      warn: false,
    },
    {
      num: 3,
      sistema: 'Metro Línea B',
      icono: '🚇',
      titulo: 'Buenavista → Taxqueña',
      subtitulo: 'Metro Línea B (gris)',
      desc: 'En Buenavista, baja del Tren Suburbano y accede al Metro. Busca la Línea B (color gris) con dirección a Ciudad Universitaria / Tasqueña. Baja en la terminal Tasqueña.',
      tiempo: '25 min',
      costo: '$5 MXN',
      nota: 'La tarjeta Metro (azul/gris) SÍ funciona aquí. Recarga en las taquillas si necesitas saldo.',
      borderColor: '#0057A8',
      bgColor: 'rgba(0, 87, 168, 0.06)',
      badgeColor: '#0057A8',
      warn: false,
    },
    {
      num: 4,
      sistema: 'Tren Ligero',
      icono: '🚊',
      titulo: 'Taxqueña → Estadio Azteca',
      subtitulo: 'Tren Ligero (TL)',
      desc: 'En Taxqueña, sigue las señales hacia el Tren Ligero (salida hacia la calle). Dirección: Estadio Azteca / Xochimilco. La estación Estadio Azteca es la parada final en esa dirección.',
      tiempo: '10 min',
      costo: '$10 MXN',
      nota: 'ATENCIÓN: La tarjeta Metro NO funciona en el Tren Ligero. Compra boleto en la taquilla.',
      borderColor: '#F59E0B',
      bgColor: 'rgba(245, 158, 11, 0.06)',
      badgeColor: '#D97706',
      warn: true,
    },
  ]

  const alertas = [
    {
      titulo: 'La tarjeta Metro NO funciona en el Tren Ligero ni en el Tren Suburbano',
      desc: 'Son sistemas independientes con boletos separados. El Tren Ligero requiere boleto en la taquilla (~$10 MXN). El Tren Suburbano requiere tarjeta Movilidad Integrada.',
    },
    {
      titulo: 'Tarjeta Movilidad Integrada para el Tren Suburbano',
      desc: 'Cuesta $18 MXN y es recargable. Se compra en las taquillas de Buenavista-TS. Si llegas directo al AIFA, también hay punto de venta en la estación AIFA del Suburbano.',
    },
    {
      titulo: 'Días de partido: Tren Ligero con frecuencia especial cada 5 minutos',
      desc: 'El gobierno de CDMX activa servicio reforzado en el Tren Ligero los días con partidos en el Azteca. Las colas pueden ser largas — llega con anticipación a la estación Tasqueña.',
    },
    {
      titulo: 'Salir con 2.5 horas de anticipación los días de partido',
      desc: 'El trayecto AIFA → Azteca toma ~90-100 minutos en condiciones normales. En días de partido, suma 20-30 min extra por afluencia en las estaciones. Sal con 2.5 h de margen mínimo.',
    },
  ]

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2e1a 0%, #1a472a 60%, rgba(0, 166, 81, 0.15) 100%)',
        padding: '5rem 1.5rem 4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Breadcrumb */}
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            <a href="/mundial-2026/" style={{ color: '#00A651', textDecoration: 'none' }}>Mundial 2026</a>
            {' → '}
            <span style={{ color: 'var(--text-muted)' }}>AIFA al Azteca</span>
          </p>

          <h1 style={{ marginBottom: '1rem', fontSize: '2.4rem', lineHeight: '1.2', color: '#fff' }}>
            Del AIFA al Estadio Azteca
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '680px',
          }}>
            Ruta en transporte público para el Mundial FIFA 2026: Tren Suburbano + Metro + Tren Ligero. Paso a paso, tiempos y costos actualizados.
          </p>

          {/* Resumen rápido */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
            maxWidth: '560px',
          }}>
            {[
              { label: 'Tiempo total', valor: '~90–100 min' },
              { label: 'Costo total', valor: '~$50 MXN' },
              { label: 'Transbordos', valor: '3' },
              { label: 'Sin taxi', valor: '100%' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius)',
                padding: '1rem 1.25rem',
                backdropFilter: 'blur(4px)',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', margin: '0 0 0.35rem 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {item.label}
                </p>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', margin: 0 }}>
                  {item.valor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alertas clave */}
      <section style={{
        padding: '2.5rem 1.5rem',
        backgroundColor: '#fffbeb',
        borderBottom: '1px solid #fde68a',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: '#92400e' }}>
            Avisos importantes antes de salir
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {alertas.map((alerta, i) => (
              <div key={i} style={{
                backgroundColor: '#fff',
                border: '1px solid #fcd34d',
                borderLeft: '4px solid #F59E0B',
                borderRadius: 'var(--radius)',
                padding: '1rem 1.25rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>
                  {i === 0 ? '🚫' : i === 1 ? '💳' : i === 2 ? '⚡' : '⏰'}
                </span>
                <div>
                  <p style={{ fontWeight: 700, color: '#92400e', margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>
                    {alerta.titulo}
                  </p>
                  <p style={{ color: '#78350f', margin: 0, fontSize: '0.875rem', lineHeight: '1.55' }}>
                    {alerta.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos de la ruta */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Ruta paso a paso</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            4 segmentos, 3 sistemas de transporte distintos
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {pasos.map((paso) => (
              <div key={paso.num} style={{
                backgroundColor: paso.bgColor,
                borderLeft: `4px solid ${paso.borderColor}`,
                border: `1px solid ${paso.borderColor}30`,
                borderRadius: 'var(--radius)',
                padding: '1.75rem 2rem',
                position: 'relative',
              }}>
                {/* Header del paso */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div style={{
                    backgroundColor: paso.badgeColor,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}>
                    Paso {paso.num}
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h3 style={{ color: 'var(--text)', margin: '0 0 0.2rem 0', fontSize: '1.15rem' }}>
                      {paso.icono} {paso.titulo}
                    </h3>
                    <p style={{ color: paso.badgeColor, margin: 0, fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {paso.sistema} — {paso.subtitulo}
                    </p>
                  </div>
                  {/* Tiempo y costo */}
                  <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '0 0 0.15rem 0', textTransform: 'uppercase' }}>Tiempo</p>
                      <p style={{ color: 'var(--text)', fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>{paso.tiempo}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '0 0 0.15rem 0', textTransform: 'uppercase' }}>Costo</p>
                      <p style={{ color: paso.badgeColor, fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>{paso.costo}</p>
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: '0 0 0.75rem 0', fontSize: '0.95rem' }}>
                  {paso.desc}
                </p>

                {/* Nota */}
                <div style={{
                  backgroundColor: paso.warn ? '#fef3c7' : 'rgba(255,255,255,0.6)',
                  border: `1px solid ${paso.warn ? '#fcd34d' : paso.borderColor + '30'}`,
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.6rem 0.875rem',
                  fontSize: '0.85rem',
                  color: paso.warn ? '#92400e' : 'var(--text-muted)',
                  lineHeight: '1.5',
                }}>
                  {paso.warn ? '⚠️ ' : 'ℹ️ '}{paso.nota}
                </div>
              </div>
            ))}
          </div>

          {/* Flecha visual de la ruta */}
          <div style={{
            backgroundColor: 'var(--surface-hover)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            marginTop: '3rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            lineHeight: '2',
            color: 'var(--text-muted)',
          }}>
            <p style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '1rem', fontFamily: 'inherit', fontSize: '0.95rem' }}>
              Diagrama de la ruta
            </p>
            <pre style={{ overflow: 'auto', margin: 0, color: 'var(--text-muted)' }}>{`  ✈️  AIFA (Aeropuerto Felipe Ángeles)
       │
       │  Tren Suburbano — Ramal AIFA   ⏱ 25 min  💚 ~$17
       │  [Tarjeta Movilidad Integrada]
       ▼
  🚆  LECHERÍA
       │
       │  Tren Suburbano — TS principal  ⏱ 30 min  💚 ~$18
       │
       ▼
  🏙️  BUENAVISTA
       │
       │  Metro Línea B (gris)           ⏱ 25 min  🔵  $5
       │  [Tarjeta Metro regular]
       ▼
  🚇  TAXQUEÑA
       │
       │  Tren Ligero                    ⏱ 10 min  🟡 $10
       │  [Comprar boleto en taquilla ⚠️]
       ▼
  🏟️  ESTADIO AZTECA

  Total: ~90–100 min │ ~$50 MXN`}
            </pre>
          </div>
        </div>
      </section>

      {/* Tabla resumen */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Resumen de costos y tiempos</h2>

          <div className="table-responsive">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--surface-active)' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid var(--border)', whiteSpace: 'nowrap', fontWeight: 700 }}>Segmento</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid var(--border)', whiteSpace: 'nowrap', fontWeight: 700 }}>Sistema</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'center', borderBottom: '2px solid var(--border)', whiteSpace: 'nowrap', fontWeight: 700 }}>Tiempo</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'center', borderBottom: '2px solid var(--border)', whiteSpace: 'nowrap', fontWeight: 700 }}>Costo</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left', borderBottom: '2px solid var(--border)', fontWeight: 700 }}>Pago</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { segmento: 'AIFA → Lechería', sistema: 'Tren Suburbano (Ramal)', tiempo: '25 min', costo: '~$17 MXN', pago: 'Tarjeta Movilidad Integrada', color: '#00A651' },
                  { segmento: 'Lechería → Buenavista', sistema: 'Tren Suburbano', tiempo: '30 min', costo: '~$18 MXN', pago: 'Tarjeta Movilidad Integrada', color: '#00A651' },
                  { segmento: 'Buenavista → Taxqueña', sistema: 'Metro Línea B', tiempo: '25 min', costo: '$5 MXN', pago: 'Tarjeta Metro regular', color: '#0057A8' },
                  { segmento: 'Taxqueña → Estadio Azteca', sistema: 'Tren Ligero', tiempo: '10 min', costo: '$10 MXN', pago: 'Boleto en taquilla ⚠️', color: '#D97706' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)', backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'transparent' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: row.color, marginRight: '0.5rem', verticalAlign: 'middle' }} />
                      {row.segmento}
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: 'var(--text-muted)' }}>{row.sistema}</td>
                    <td style={{ padding: '0.875rem 1rem', textAlign: 'center', fontWeight: 600 }}>{row.tiempo}</td>
                    <td style={{ padding: '0.875rem 1rem', textAlign: 'center', color: row.color, fontWeight: 700 }}>{row.costo}</td>
                    <td style={{ padding: '0.875rem 1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{row.pago}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: 'var(--surface-active)', fontWeight: 700 }}>
                  <td colSpan={2} style={{ padding: '0.875rem 1rem' }}>TOTAL</td>
                  <td style={{ padding: '0.875rem 1rem', textAlign: 'center' }}>~90–100 min</td>
                  <td style={{ padding: '0.875rem 1rem', textAlign: 'center', color: 'var(--primary)' }}>~$50 MXN</td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>2 tarjetas distintas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Consejos días de partido */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Consejos para días de partido</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { icono: '⏰', titulo: 'Sal 2.5 horas antes', desc: 'El trayecto normal toma ~90 min. Los días de partido, las estaciones se congestionan — suma 30–40 min extra de margen.' },
              { icono: '💳', titulo: 'Lleva las 2 tarjetas', desc: 'Necesitas tarjeta Movilidad Integrada (TS) y tarjeta Metro por separado. También lleva efectivo para el boleto del Tren Ligero.' },
              { icono: '🎒', titulo: 'Mochila pequeña al frente', desc: 'Las estaciones en días de partido están muy llenas. Viaja ligero y lleva tu mochila al pecho para mayor seguridad.' },
              { icono: '📱', titulo: 'Descarga Google Maps offline', desc: 'Descarga el mapa de CDMX sin conexión antes de salir del AIFA. La señal puede ser irregular en algunas estaciones.' },
              { icono: '💧', titulo: 'Lleva agua y snacks', desc: 'El trayecto de ~90 min bajo el sol puede ser agotador. Las tiendas dentro del metro tienen precios razonables.' },
              { icono: '🚊', titulo: 'Post-partido: espera 30 min', desc: 'Después del partido, la estación Tren Ligero en Azteca estará colapsada. Espera media hora antes de intentar salir.' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface-hover)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
              }}>
                <p style={{ fontSize: '1.75rem', margin: '0 0 0.75rem 0' }}>{item.icono}</p>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.95rem' }}>
                  {item.titulo}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0, lineHeight: '1.55' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links relacionados */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Guías relacionadas</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}>
            {[
              {
                href: '/cdmx/tren-suburbano/estacion/aifa-ts/',
                titulo: 'Estacion AIFA del Tren Suburbano',
                desc: 'Horarios, frecuencias y como llegar a la estacion dentro del aeropuerto.',
                icono: '🚆',
              },
              {
                href: '/mundial-2026/como-llegar-estadio-azteca/',
                titulo: 'Guia general: Como llegar al Estadio Azteca',
                desc: 'Todas las opciones de transporte al Azteca para el Mundial 2026.',
                icono: '🏟️',
              },
              {
                href: '/aeropuertos/felipe-angeles-edomex/',
                titulo: 'Aeropuerto Felipe Angeles (AIFA)',
                desc: 'Transporte, terminales y conexiones del aeropuerto de Santa Lucia.',
                icono: '✈️',
              },
            ].map((link, i) => (
              <a key={i} href={link.href} style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.25rem 1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.15s',
              }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{link.icono}</span>
                <div>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, margin: '0 0 0.3rem 0', fontSize: '0.95rem' }}>
                    {link.titulo}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0, lineHeight: '1.4' }}>
                    {link.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
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
              ← Mundial 2026
            </a>
            <a href="/mundial-2026/estadio-azteca/" style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              backgroundColor: '#1a472a',
              color: '#fff',
              fontWeight: 600,
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}>
              Guia del Estadio Azteca →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
