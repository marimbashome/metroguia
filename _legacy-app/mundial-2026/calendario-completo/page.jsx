import CalendarioCompletoClient from './CalendarioCompletoClient';
import fixturesData from '@/data/mundial-fixtures.json';

export const metadata = {
  title: '📅 Mundial FIFA 2026 — Los 104 Partidos · Calendario Completo | MetroGuia',
  description: 'Calendario completo del Mundial FIFA 2026: 104 partidos, 16 sedes, 48 equipos. Horarios CDMX, fase, grupo y sede. Filtra por fase, ciudad o equipo.',
  keywords: 'mundial 2026 calendario, fifa 2026 todos los partidos, fixture mundial 2026, 104 partidos mundial, horario cdmx mundial',
  alternates: { canonical: 'https://metroguia.mx/mundial-2026/calendario-completo/' },
  openGraph: {
    title: 'Mundial FIFA 2026 — Calendario Completo (104 partidos)',
    description: 'Todos los partidos del Mundial 2026 con horario CDMX, fase y sede. Suscribete al feed ICS.',
    type: 'website',
    siteName: 'MetroGuia.mx',
    url: 'https://metroguia.mx/mundial-2026/calendario-completo/',
    images: [{ url: 'https://metroguia.mx/og-image.png', width: 1200, height: 630 }],
  },
};

export default function CalendarioCompletoPage() {
  // ItemList JSON-LD with 104 SportsEvent
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'FIFA World Cup 2026 — 104 Matches',
    numberOfItems: fixturesData.matches.length,
    itemListElement: fixturesData.matches.map((m, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'SportsEvent',
        name: `${m.home_team} vs ${m.away_team}`,
        startDate: m.date_utc,
        endDate: new Date(new Date(m.date_utc).getTime() + 7200000).toISOString(),
        url: `https://metroguia.mx/mundial-2026/partido/${m.slug}/`,
        location: {
          '@type': 'Place',
          name: m.stadium,
          address: { '@type': 'PostalAddress', addressLocality: m.city, addressCountry: m.country === 'Mexico' ? 'MX' : m.country === 'Canada' ? 'CA' : 'US' },
        },
        sport: 'Association football',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <CalendarioCompletoClient matches={fixturesData.matches} />
    </>
  );
}
