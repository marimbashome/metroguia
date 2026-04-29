import fixturesData from '@/data/mundial-fixtures.json';
import EmailCapture from '@/app/components/EmailCapture';
import MundialCalendarCTA from '@/app/components/MundialCalendarCTA';
import BlogGuiasWidget from '@/app/components/BlogGuiasWidget';
import { blogLinks } from '@/data/blog-links';

export const metadata = {
  title: '🇲🇽 Selección Mexicana — Mundial FIFA 2026 | MetroGuia',
  description: 'Calendario de los 3 partidos de México en el Mundial 2026: vs Sudáfrica (Azteca), vs Corea del Sur (Akron, Guadalajara) y vs Chequia (Azteca). Horarios CDMX y cómo llegar.',
  keywords: 'selección mexicana mundial 2026, méxico mundial 2026, méxico vs sudáfrica, méxico vs corea, méxico vs chequia, calendario méxico fifa',
  alternates: { canonical: 'https://metroguia.mx/mundial-2026/mexico/' },
  openGraph: {
    title: '🇲🇽 Selección Mexicana — Mundial 2026 — Calendario, horarios y cómo llegar',
    description: 'Los 3 partidos del Tri en el Mundial 2026 con horarios CDMX y guías de transporte público a Estadio Azteca y Estadio Akron.',
    type: 'website',
    url: 'https://metroguia.mx/mundial-2026/mexico/',
    siteName: 'MetroGuia.mx',
    images: [{ url: 'https://metroguia.mx/og-image.png', width: 1200, height: 630 }],
  },
};

const MEX_GREEN = '#006847';
const MEX_RED = '#ce1126';
const MEX_WHITE = '#ffffff';

function MatchCard({ match }) {
  const isMexHome = match.home_team === 'Mexico';
  const rivalName = isMexHome ? match.away_team : match.home_team;
  const rivalFlag = isMexHome ? match.away_flag : match.home_flag;
  const fechaCdmx = match.date_cdmx;
  const fecha = new Date(fechaCdmx.replace(' ', 'T') + ':00-06:00');
  const fechaStr = fecha.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' });
  const horaStr = fecha.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <article style={{
      background: 'linear-gradient(135deg, rgba(0,104,71,0.18) 0%, rgba(206,17,38,0.12) 100%)',
      border: '2px solid rgba(0,104,71,0.4)',
      borderRadius: '0.75rem',
      padding: '1.75rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <p style={{ color: MEX_GREEN, fontSize: '0.8rem', fontWeight: 700, margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {fechaStr}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
            {horaStr} CDMX (UTC-6)
          </p>
        </div>
        <span style={{
          background: 'rgba(0,104,71,0.25)', color: MEX_GREEN,
          padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700,
        }}>
          {match.phase_label} · Grupo {match.group}
        </span>
      </div>

      <h3 style={{ color: 'white', fontSize: '1.5rem', margin: '0 0 1rem 0', lineHeight: 1.3 }}>
        🇲🇽 México <span style={{ color: 'rgba(255,255,255,0.5)' }}>vs</span> {rivalName} {rivalFlag}
      </h3>

      <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Sede</p>
        <p style={{ color: 'white', fontWeight: 600, margin: '0.25rem 0' }}>{match.stadium}</p>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', margin: 0 }}>{match.city}, {match.country}</p>
      </div>

      {match.is_azteca && (
        <div style={{ background: 'rgba(233,30,140,0.12)', border: '1px solid rgba(233,30,140,0.3)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
          <p style={{ color: '#E91E8C', fontSize: '0.8rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>🚇 Cómo llegar al Azteca</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>{match.metro_tip}</p>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a href={`/mundial-2026/partido/${match.slug}/`} style={{
          background: MEX_GREEN, color: 'white', padding: '0.5rem 1rem', borderRadius: '0.35rem',
          textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
        }}>Ver detalles del partido →</a>
        {match.is_azteca && (
          <a href="/mundial-2026/como-llegar-estadio-azteca/" style={{
            background: 'transparent', color: '#E91E8C', border: '1px solid #E91E8C',
            padding: '0.5rem 1rem', borderRadius: '0.35rem', textDecoration: 'none',
            fontSize: '0.85rem', fontWeight: 600,
          }}>🏛️ Guía Azteca</a>
        )}
      </div>
    </article>
  );
}

export default function MexicoPage() {
  const mexMatches = fixturesData.matches.filter((m) => m.is_mexico_team).sort((a, b) => a.date_utc.localeCompare(b.date_utc));

  // JSON-LD schema
  const sportsTeamSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Selección Mexicana de Fútbol',
    sport: 'Association football',
    memberOf: { '@type': 'SportsOrganization', name: 'FIFA', url: 'https://www.fifa.com' },
    event: mexMatches.map((m) => ({
      '@type': 'SportsEvent',
      name: `${m.home_team} vs ${m.away_team}`,
      startDate: m.date_utc,
      location: { '@type': 'Place', name: m.stadium, address: { '@type': 'PostalAddress', addressLocality: m.city, addressCountry: 'MX' } },
      sport: 'Soccer',
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsTeamSchema) }} />

      <section style={{
        background: `linear-gradient(135deg, ${MEX_GREEN} 0%, ${MEX_WHITE} 50%, ${MEX_RED} 100%)`,
        padding: '4rem 1.5rem', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: '4rem', margin: 0 }}>🇲🇽</p>
          <h1 style={{ color: '#0A0A0F', fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0' }}>
            Selección Mexicana
          </h1>
          <p style={{ color: '#0A0A0F', fontSize: '1.2rem', margin: '0.25rem 0', fontWeight: 600 }}>
            Mundial FIFA 2026 — Grupo A
          </p>
          <p style={{ color: 'rgba(0,0,0,0.65)', fontSize: '0.95rem', margin: '0.5rem 0' }}>
            3 partidos de fase de grupos · Mexico City + Guadalajara
          </p>
        </div>
      </section>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem' }}>
        <MundialCalendarCTA variant="mexico" />

        <h2 style={{ color: '#00D4FF', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
          Los 3 partidos del Tri en grupos
        </h2>
        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
          {mexMatches.map((m) => <MatchCard key={m.id} match={m} />)}
        </div>

        <section style={{ marginBottom: '3rem', padding: '2rem', background: 'var(--surface)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
          <h2 style={{ color: '#00D4FF', fontSize: '1.5rem', marginTop: 0 }}>Si México avanza...</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>
            Por terminar primero del Grupo A, el Tri evitaría a las potencias en Round of 32. Estas son las fechas posibles:
          </p>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              { ronda: 'Round of 32', fecha: 'Sábado 27 — Lunes 29 de Junio', desc: 'Se enfrenta al 2o de Grupo F (probable Países Bajos o Japón).' },
              { ronda: 'Octavos de Final', fecha: 'Martes 30 de Junio — Jueves 2 de Julio', desc: 'Posible sede: Estadio Azteca.' },
              { ronda: 'Cuartos de Final', fecha: 'Domingo 5 de Julio', desc: 'Sede USA — SoFi LA o NRG Houston.' },
              { ronda: 'Semifinal', fecha: 'Martes 14 — Miércoles 15 de Julio', desc: 'AT&T Stadium (Dallas) o Mercedes-Benz (Atlanta).' },
              { ronda: 'Final', fecha: 'Domingo 19 de Julio', desc: 'MetLife Stadium, New Jersey.' },
            ].map((r) => (
              <div key={r.ronda} style={{ padding: '0.85rem 1rem', background: 'rgba(0,212,255,0.05)', borderLeft: '3px solid #00D4FF', borderRadius: '0.35rem' }}>
                <p style={{ color: '#00D4FF', fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>{r.ronda}</p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', margin: '0.25rem 0' }}>{r.fecha}</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <EmailCapture
            source="mundial-mexico-2026"
            title="📲 Recordatorio 2 horas antes de cada partido"
            subtitle="Te avisamos por email antes de que arranque cada partido del Tri. Sin spam, sin fútbol europeo aleatorio."
            cta="Avisarme antes de cada partido"
            tone="forest"
            context={{ filter: 'mexico', total_matches: mexMatches.length }}
          />
        </section>

        <BlogGuiasWidget guides={blogLinks.mundial} context="Selección Mexicana — Mundial 2026" />

        <p style={{ marginTop: '3rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textAlign: 'center' }}>
          Datos en vivo de football-data.org · Actualizado al desplegar el sitio. Verifica horarios oficiales en fifa.com antes del partido.
        </p>
      </main>
    </>
  );
}
