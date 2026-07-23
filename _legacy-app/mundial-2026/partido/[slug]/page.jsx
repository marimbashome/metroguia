import fixturesData from '@/data/mundial-fixtures.json';
import { notFound } from 'next/navigation';
import AdBannerLazy from '@/app/components/AdBannerLazy';

export function generateStaticParams() {
  return fixturesData.matches.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }) {
  const match = fixturesData.matches.find((m) => m.slug === params.slug);
  if (!match) return { title: 'Partido no encontrado · MetroGuia' };
  const title = `${match.home_team} vs ${match.away_team} · Mundial 2026 · ${match.date_cdmx.slice(0, 10)} | MetroGuia`;
  return {
    title,
    description: match.meta_description,
    keywords: `${match.home_team}, ${match.away_team}, mundial 2026, ${match.stadium}, ${match.city}, fixture, horario cdmx`,
    alternates: { canonical: `https://metroguia.mx/mundial-2026/partido/${match.slug}/` },
    openGraph: {
      title,
      description: match.meta_description,
      type: 'website',
      url: `https://metroguia.mx/mundial-2026/partido/${match.slug}/`,
      siteName: 'MetroGuia.mx',
      images: [{ url: 'https://metroguia.mx/og-image.png', width: 1200, height: 630 }],
    },
  };
}

function fmtDate(dateCdmx) {
  const [date, time] = dateCdmx.split(' ');
  const [y, m, d] = date.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return `${dias[dt.getDay()]} ${d} de ${meses[m - 1]} de ${y}`;
}

function getCountryCode(country) {
  return country === 'Mexico' ? 'MX' : country === 'Canada' ? 'CA' : 'US';
}

export default function PartidoPage({ params }) {
  const match = fixturesData.matches.find((m) => m.slug === params.slug);
  if (!match) notFound();

  const fechaStr = fmtDate(match.date_cdmx);
  const horaStr = match.date_cdmx.slice(11);
  const isFinished = match.status === 'FINISHED';
  const isLive = match.status === 'IN_PLAY' || match.status === 'PAUSED';
  const phaseColor = match.is_azteca ? '#E91E8C' : (match.is_mexico_team ? '#10b981' : '#00D4FF');

  // SportsEvent JSON-LD
  const sportsEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${match.home_team} vs ${match.away_team}`,
    description: match.meta_description,
    startDate: match.date_utc,
    endDate: new Date(new Date(match.date_utc).getTime() + 7200000).toISOString(),
    image: 'https://metroguia.mx/og-image.png',
    location: {
      '@type': 'SportsActivityLocation',
      name: match.stadium,
      address: { '@type': 'PostalAddress', addressLocality: match.city, addressCountry: getCountryCode(match.country) },
    },
    sport: 'Association football',
    eventStatus: isFinished ? 'https://schema.org/EventCompleted' : 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: [
      { '@type': 'SportsTeam', name: match.home_team },
      { '@type': 'SportsTeam', name: match.away_team },
    ],
    organizer: { '@type': 'Organization', name: 'FIFA', url: 'https://www.fifa.com' },
    offers: {
      '@type': 'Offer', url: 'https://www.fifa.com/tickets', priceCurrency: 'MXN',
      availability: 'https://schema.org/PreOrder', validFrom: match.date_utc,
    },
    url: `https://metroguia.mx/mundial-2026/partido/${match.slug}/`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://metroguia.mx/' },
      { '@type': 'ListItem', position: 2, name: 'Mundial 2026', item: 'https://metroguia.mx/mundial-2026/' },
      { '@type': 'ListItem', position: 3, name: 'Partidos', item: 'https://metroguia.mx/mundial-2026/calendario-completo/' },
      { '@type': 'ListItem', position: 4, name: `${match.home_team} vs ${match.away_team}`, item: `https://metroguia.mx/mundial-2026/partido/${match.slug}/` },
    ],
  };

  // Related matches (same group)
  const related = match.group
    ? fixturesData.matches.filter((m) => m.group === match.group && m.id !== match.id).slice(0, 6)
    : fixturesData.matches.filter((m) => m.phase === match.phase && m.id !== match.id).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{
        background: `linear-gradient(135deg, ${phaseColor}30 0%, ${phaseColor}10 100%)`,
        borderBottom: `3px solid ${phaseColor}`, padding: '3rem 1.5rem',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ color: phaseColor, fontSize: '0.85rem', fontWeight: 700, margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {match.phase_label}{match.group ? ` · Grupo ${match.group}` : ''}
          </p>
          <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 0.25rem' }}>
            {match.home_flag} {match.home_team}
            {isFinished && match.home_score != null ? (
              <span style={{ color: '#fbbf24', margin: '0 1rem' }}>
                {match.home_score} − {match.away_score}
              </span>
            ) : (
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 1rem', fontWeight: 400 }}>vs</span>
            )}
            {match.away_team} {match.away_flag}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', margin: '0.75rem 0 0.25rem' }}>
            {fechaStr} · {horaStr} CDMX (UTC−6)
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: 0 }}>
            {match.is_azteca && '🏛️ '}{match.stadium}, {match.city}, {match.country}
          </p>
          {isLive && (
            <span style={{ display: 'inline-block', marginTop: '1rem', padding: '0.35rem 0.75rem', background: '#dc2626', color: 'white', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700 }}>
              🔴 EN VIVO
            </span>
          )}
        </div>
      </section>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem' }}>
        <section style={{ marginBottom: '2.5rem', padding: '1.75rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem' }}>
          <h2 style={{ color: '#00D4FF', fontSize: '1.5rem', marginTop: 0 }}>Detalles del Partido</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '1.25rem' }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Fecha CDMX</p>
              <p style={{ color: 'white', fontWeight: 600, margin: '0.25rem 0 0', fontSize: '0.95rem' }}>{fechaStr}</p>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Hora local CDMX</p>
              <p style={{ color: 'white', fontWeight: 600, margin: '0.25rem 0 0', fontSize: '0.95rem' }}>{horaStr} (UTC−6)</p>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Hora UTC</p>
              <p style={{ color: 'white', fontWeight: 600, margin: '0.25rem 0 0', fontSize: '0.95rem' }}>{match.date_utc.slice(11, 16)} UTC</p>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Sede</p>
              <p style={{ color: 'white', fontWeight: 600, margin: '0.25rem 0 0', fontSize: '0.95rem' }}>{match.stadium}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: '0.15rem 0 0' }}>{match.city}, {match.country}</p>
            </div>
          </div>

          <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={match.is_azteca ? 'webcal://metroguia.mx/calendar/azteca-2026.ics' : (match.is_mexico_team ? 'webcal://metroguia.mx/calendar/mexico-2026.ics' : 'webcal://metroguia.mx/calendar/mundial-2026.ics')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.25rem', background: '#00D4FF', color: '#0A0A0F',
                borderRadius: '0.4rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem',
              }}
            >
              📅 Agregar al calendario {match.is_azteca ? '(feed Azteca)' : (match.is_mexico_team ? '(feed México)' : '(feed completo)')}
            </a>
            <a
              href="/mundial-2026/calendario-completo/"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.25rem', background: 'transparent', color: '#00D4FF',
                border: '1px solid #00D4FF', borderRadius: '0.4rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem',
              }}
            >
              ← Volver al calendario
            </a>
          </div>
        </section>

        {match.is_azteca && (
          <section style={{ marginBottom: '2.5rem', padding: '1.75rem', background: 'rgba(233,30,140,0.08)', border: '1px solid rgba(233,30,140,0.3)', borderRadius: '0.75rem' }}>
            <h2 style={{ color: '#E91E8C', fontSize: '1.5rem', marginTop: 0 }}>🚇 Cómo llegar al Estadio Azteca</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6, margin: '1rem 0 0' }}>
              {match.metro_tip}
            </p>
            <p style={{ marginTop: '1.25rem' }}>
              <a href="/mundial-2026/como-llegar-estadio-azteca/" style={{ color: '#E91E8C', fontWeight: 600 }}>
                Ver guía completa al Estadio Azteca →
              </a>
            </p>
          </section>
        )}

        {match.is_mexico_team && !match.is_azteca && (
          <section style={{ marginBottom: '2.5rem', padding: '1.75rem', background: 'rgba(0,104,71,0.12)', border: '1px solid rgba(0,104,71,0.4)', borderRadius: '0.75rem' }}>
            <h2 style={{ color: '#10b981', fontSize: '1.5rem', marginTop: 0 }}>🇲🇽 Selección Mexicana en {match.city}</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6 }}>
              Este partido del Tri se juega en el {match.stadium}. Llega al menos 2 horas antes del kick-off.
            </p>
            <p style={{ marginTop: '1.25rem' }}>
              <a href="/mundial-2026/mexico/" style={{ color: '#10b981', fontWeight: 600 }}>
                Ver todos los partidos de México →
              </a>
            </p>
          </section>
        )}

        <AdBannerLazy slot="div-gpt-ad-1" />

        {related.length > 0 && (
          <section style={{ marginTop: '2.5rem' }}>
            <h2 style={{ color: '#00D4FF', fontSize: '1.5rem' }}>
              Más partidos del{match.group ? ` Grupo ${match.group}` : ` ${match.phase_label}`}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              {related.map((r) => (
                <a key={r.id} href={`/mundial-2026/partido/${r.slug}/`}
                  style={{ display: 'block', padding: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                    {r.date_cdmx} CDMX
                  </p>
                  <p style={{ color: 'white', fontWeight: 600, margin: '0.4rem 0', fontSize: '0.95rem' }}>
                    {r.home_flag} {r.home_team} vs {r.away_team} {r.away_flag}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', margin: 0 }}>
                    {r.stadium}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}

        <p style={{ marginTop: '3rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textAlign: 'center' }}>
          Datos vía football-data.org · Última actualización: {fixturesData.generated_at?.slice(0, 10) || '2026-04-28'}.
          Verifica horarios oficiales en fifa.com.
        </p>
      </main>
    </>
  );
}
