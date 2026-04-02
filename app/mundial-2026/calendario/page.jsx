import { mundial2026 } from '@/data/mundial';

export const metadata = {
  title: 'Calendario FIFA 2026 México — Todos los Partidos por Fecha | MetroGuia',
  description: 'Calendario completo de los 13 partidos del Mundial FIFA 2026 en México. Fechas, horarios, estadios y cómo llegar en transporte público a CDMX, Guadalajara y Monterrey.',
  keywords: 'calendario mundial 2026 méxico, fechas partidos mundial 2026, cdmx guadalajara monterrey, copa mundial 2026 sedes',
  openGraph: {
    title: 'Calendario FIFA 2026 en México',
    description: '13 partidos en 3 ciudades: Ciudad de México, Guadalajara y Monterrey. Junio a julio 2026.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.metroguia.mx/mundial-2026/calendario/',
  },
};

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).replace(/^\w/, c => c.toUpperCase());
}

function getCityColor(ciudadKey) {
  const colors = { cdmx: '#E91E8C', gdl: '#06B6D4', mty: '#EC4899' };
  return colors[ciudadKey] || '#00D4FF';
}

function getCityEmoji(ciudadKey) {
  const emojis = { cdmx: '🏛️', gdl: '🌺', mty: '🏔️' };
  return emojis[ciudadKey] || '⚽';
}

function getRouteHref(ciudadKey, slugRuta) {
  if (ciudadKey === 'cdmx') return `/mundial-2026/${slugRuta}/`;
  return `/${ciudadKey}/mundial-2026/${slugRuta}/`;
}

export default function CalendarioPage() {
  const { sedes } = mundial2026;

  // Build all matches with city info
  const allMatches = [];
  Object.entries(sedes).forEach(([ciudadKey, sede]) => {
    sede.partidos.forEach((partido) => {
      allMatches.push({
        ...partido,
        ciudad: sede.ciudad,
        ciudadKey,
        estadio: sede.estadio,
        capacidad: sede.capacidad,
        slug_ruta: sede.slug_ruta,
      });
    });
  });

  // Sort by date
  allMatches.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  // Group by date
  const matchesByDate = {};
  allMatches.forEach((match) => {
    if (!matchesByDate[match.fecha]) matchesByDate[match.fecha] = [];
    matchesByDate[match.fecha].push(match);
  });
  const sortedDates = Object.keys(matchesByDate).sort();

  // Phase stats
  const phases = [
    { name: 'Fase de Grupos', emoji: '🏆', dates: '11 – 26 junio', count: allMatches.filter(m => m.fase === 'Fase de Grupos').length },
    { name: 'Octavos de Final', emoji: '⚔️', dates: '30 junio', count: allMatches.filter(m => m.fase === 'Octavos de Final').length },
    { name: 'Cuartos de Final', emoji: '🔥', dates: '5 julio', count: allMatches.filter(m => m.fase === 'Cuartos de Final').length },
  ];

  // Stadium data
  const stadiums = Object.entries(sedes).map(([key, sede]) => ({
    ciudadKey: key,
    ciudad: sede.ciudad,
    estadio: sede.estadio,
    capacidad: sede.capacidad.toLocaleString('es-MX'),
    tiempo: sede.ruta_desde_centro.tiempo,
    costo: sede.ruta_desde_centro.costo,
    slug_ruta: sede.slug_ruta,
    partidos: sede.partidos.length,
  }));

  // JSON-LD schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.metroguia.mx/' },
      { '@type': 'ListItem', position: 2, name: 'Mundial 2026', item: 'https://www.metroguia.mx/mundial-2026/' },
      { '@type': 'ListItem', position: 3, name: 'Calendario', item: 'https://www.metroguia.mx/mundial-2026/calendario/' },
    ],
  };

  const eventsSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'FIFA World Cup 2026 — Partidos en México',
    description: 'Los 13 partidos del Mundial FIFA 2026 celebrados en México',
    organizer: { '@type': 'Organization', name: 'FIFA', url: 'https://www.fifa.com' },
    event: allMatches.map((m) => ({
      '@type': 'SportsEvent',
      name: `${m.fase} — ${m.equipos}`,
      description: m.descripcion,
      startDate: m.fecha,
      location: {
        '@type': 'Place',
        name: m.estadio,
        address: { '@type': 'PostalAddress', addressLocality: m.ciudad, addressCountry: 'MX' },
      },
      eventStatus: 'https://schema.org/EventScheduled',
      sport: 'Soccer',
    })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 50%, #16213e 100%)',
        padding: '4rem 1.25rem',
        textAlign: 'center',
        borderBottom: '3px solid #00D4FF',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>📅</p>
          <h1 style={{ color: '#00D4FF', fontSize: '2.5rem', fontWeight: '700', margin: '0 0 0.75rem 0' }}>
            Calendario FIFA 2026 en México
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>
            {mundial2026.total_partidos_mexico} partidos en 3 ciudades
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', margin: '0' }}>
            11 de junio — 5 de julio 2026
          </p>
        </div>
      </section>

      {/* Phase Breakdown */}
      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#00D4FF', fontSize: '1.5rem', marginBottom: '2rem' }}>Desglose por Fase</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {phases.map((phase) => (
              <div key={phase.name} style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>{phase.emoji}</p>
                <h3 style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>{phase.name}</h3>
                <p style={{ color: '#00D4FF', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 0.25rem 0' }}>{phase.count} {phase.count === 1 ? 'partido' : 'partidos'}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: '0' }}>{phase.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline by Date */}
      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#00D4FF', fontSize: '1.5rem', marginBottom: '2.5rem' }}>Cronograma de Partidos</h2>

          {sortedDates.map((fecha, dateIdx) => {
            const matches = matchesByDate[fecha];
            return (
              <div key={fecha} style={{ marginBottom: '3rem' }}>
                {/* Date heading */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    backgroundColor: '#00D4FF', color: '#0A0A0F',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700', fontSize: '0.9rem', flexShrink: 0,
                  }}>
                    {dateIdx + 1}
                  </div>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', margin: '0', textTransform: 'capitalize' }}>
                      {formatDate(fecha)}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>
                      {matches.length} {matches.length === 1 ? 'partido' : 'partidos'}
                    </p>
                  </div>
                </div>

                {/* Match cards */}
                <div style={{ display: 'grid', gap: '1rem', paddingLeft: '56px' }}>
                  {matches.map((match, idx) => {
                    const color = getCityColor(match.ciudadKey);
                    const emoji = getCityEmoji(match.ciudadKey);
                    const routeHref = getRouteHref(match.ciudadKey, match.slug_ruta);

                    return (
                      <div key={idx} style={{
                        backgroundColor: 'var(--surface)',
                        border: `1px solid ${color}40`,
                        borderLeft: `4px solid ${color}`,
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                      }}>
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                          <div>
                            <p style={{ color, fontSize: '0.85rem', fontWeight: '600', margin: '0 0 0.25rem 0' }}>
                              {emoji} {match.ciudad}
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', fontWeight: '600', margin: '0' }}>
                              {match.estadio}
                            </p>
                          </div>
                          <span style={{
                            backgroundColor: `${color}20`,
                            color,
                            padding: '0.25rem 0.75rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            whiteSpace: 'nowrap',
                          }}>
                            {match.fase}
                          </span>
                        </div>

                        {/* Teams */}
                        <div style={{
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          padding: '1rem',
                          borderRadius: '0.35rem',
                          textAlign: 'center',
                          marginBottom: '1rem',
                        }}>
                          <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '700', fontSize: '1.05rem', margin: '0' }}>
                            {match.equipos}
                          </p>
                          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>
                            {match.hora === 'TBD' ? 'Hora por confirmarse' : match.hora}
                          </p>
                        </div>

                        {/* Description */}
                        {match.descripcion && (
                          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', fontStyle: 'italic', margin: '0 0 1rem 0' }}>
                            {match.descripcion}
                          </p>
                        )}

                        {/* Links */}
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                          <a href={`/mundial-2026/partidos/${match.ciudadKey}-${match.fecha}/`} style={{
                            display: 'inline-block',
                            backgroundColor: color,
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                          }}>
                            Ver detalles
                          </a>
                          <a href={routeHref} style={{
                            display: 'inline-block',
                            backgroundColor: 'transparent',
                            color,
                            border: `1px solid ${color}`,
                            padding: '0.5rem 1rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                          }}>
                            Cómo llegar
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stadium Comparison */}
      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#00D4FF', fontSize: '1.5rem', marginBottom: '2rem' }}>Comparación de Estadios</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  {['Ciudad', 'Estadio', 'Capacidad', 'Tiempo transporte', 'Costo', 'Partidos'].map((h) => (
                    <th key={h} style={{
                      padding: '1rem 0.75rem',
                      textAlign: 'left',
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: '600',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stadiums.map((s) => (
                  <tr key={s.ciudadKey} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '1rem 0.75rem', color: getCityColor(s.ciudadKey), fontWeight: '600', fontSize: '0.95rem' }}>
                      {getCityEmoji(s.ciudadKey)} {s.ciudad}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>{s.estadio}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{s.capacidad}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>~{s.tiempo} min</td>
                    <td style={{ padding: '1rem 0.75rem', color: '#00D4FF', fontWeight: '600', fontSize: '0.95rem' }}>${s.costo} MXN</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{s.partidos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#00D4FF', fontSize: '1.5rem', marginBottom: '2rem' }}>Rutas rápidas a cada estadio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {stadiums.map((s) => {
              const color = getCityColor(s.ciudadKey);
              const href = getRouteHref(s.ciudadKey, s.slug_ruta);
              return (
                <a key={s.ciudadKey} href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    backgroundColor: 'var(--surface)',
                    border: `2px solid ${color}40`,
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    transition: 'all 0.3s',
                  }} className="hover-lift">
                    <p style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{getCityEmoji(s.ciudadKey)}</p>
                    <h3 style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>{s.ciudad}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', margin: '0 0 0.75rem 0' }}>
                      {s.estadio} • {s.partidos} partidos • {s.capacidad}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <span style={{ color: '#00D4FF', fontSize: '0.85rem', fontWeight: '600' }}>~{s.tiempo} min</span>
                      <span style={{ color: '#00D4FF', fontSize: '0.85rem', fontWeight: '600' }}>${s.costo} MXN</span>
                    </div>
                    <p style={{ color, fontSize: '0.85rem', fontWeight: '600', margin: '1rem 0 0 0' }}>
                      Ver ruta al estadio →
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '3rem 1.25rem',
        backgroundColor: 'rgba(0, 212, 255, 0.05)',
        borderTop: '1px solid rgba(0, 212, 255, 0.2)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>📱</p>
          <h2 style={{ color: '#00D4FF', fontSize: '1.3rem', margin: '0 0 0.75rem 0' }}>Descarga MetroGuia como app</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: '0 0 1.5rem 0' }}>
            Instala MetroGuia en tu teléfono para tener rutas a los estadios disponibles sin conexión. Perfecto para días de partido.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/mundial-2026/" style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid #00D4FF',
              color: '#00D4FF',
              borderRadius: '0.35rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9rem',
            }}>
              Volver al hub Mundial 2026
            </a>
            <a href="/mundial-2026/partidos/" style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#00D4FF',
              color: '#0A0A0F',
              borderRadius: '0.35rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9rem',
            }}>
              Ver todos los partidos
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: '1.5rem 1.25rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: '0' }}>
          Las fechas y horarios pueden cambiar. Verifica en fifa.com antes de tu viaje.
        </p>
      </section>
    </div>
  );
}
