import EnVivoClient from './EnVivoClient';
import wcData from '@/data/mundial-wc.json';

export const metadata = {
  title: 'Mundial 2026 EN VIVO — Resultados, Tablas, Bracket y Goleadores | MetroGuia',
  description:
    'Centro del Mundial FIFA 2026 en vivo: resultados al momento, tablas de los 12 grupos, bracket que se llena solo, tabla de goleadores y plantillas de las 48 selecciones. Horarios en hora de CDMX.',
  alternates: { canonical: 'https://metroguia.mx/mundial-2026/en-vivo/' },
  openGraph: {
    title: 'Mundial 2026 EN VIVO — Resultados, Tablas, Bracket y Goleadores',
    description:
      'Resultados en vivo, las 12 tablas de grupos, el bracket que se actualiza solo, goleadores y plantillas de las 48 selecciones del Mundial FIFA 2026.',
    url: 'https://metroguia.mx/mundial-2026/en-vivo/',
    type: 'website',
  },
};

export default function EnVivoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'Copa Mundial de la FIFA 2026',
    sport: 'Soccer',
    startDate: '2026-06-11',
    endDate: '2026-07-19',
    eventStatus: 'https://schema.org/EventScheduled',
    location: [
      { '@type': 'Country', name: 'México' },
      { '@type': 'Country', name: 'Estados Unidos' },
      { '@type': 'Country', name: 'Canadá' },
    ],
    description:
      'Resultados en vivo, tablas de grupos, bracket, goleadores y plantillas del Mundial FIFA 2026.',
    url: 'https://metroguia.mx/mundial-2026/en-vivo/',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section
        style={{
          background: 'linear-gradient(135deg, #1F3A2E 0%, #2A4B3C 60%, #365A3A 100%)',
          padding: '3.25rem 1.25rem 2.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(220,38,38,0.18)', color: '#fff',
              padding: '0.3rem 0.85rem', borderRadius: 999, fontWeight: 700, fontSize: '0.78rem',
              border: '1px solid rgba(255,255,255,0.25)', marginBottom: '1rem',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#dc2626', display: 'inline-block' }} /> EN VIVO
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#fff', fontSize: '2.4rem', fontWeight: 800, margin: '0 0 0.6rem', lineHeight: 1.1 }}>
            Centro del Mundial 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.08rem', margin: '0 auto', maxWidth: 600 }}>
            Resultados al momento, las 12 tablas de grupos, el bracket que se llena solo, goleadores y las plantillas de las 48 selecciones.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.85rem' }}>
            11 Junio — 19 Julio 2026 · México · EE.&nbsp;UU. · Canadá · horarios en hora CDMX
          </p>
        </div>
      </section>

      <EnVivoClient initialWc={wcData} />
    </>
  );
}
