import { CITIES_CONFIG } from '@/data/cities-config';
import { lineasDetalleChicago } from '@/data/chicago/lineas-detalle';
import { estacionesChicago } from '@/data/chicago/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export const metadata = {
  title: 'CTA L Train Guide — Chicago Rail Transit | MetroGuia',
  description: 'CTA L Train guide: 139 stations, 8 lines in Chicago metro. Red/Blue lines 24h service. CTA Ventra card. Complete trip planner, schedule & fares.',
  keywords: 'CTA, L Train, Chicago transit, Ventra card, Chicago Loop, O\'Hare',
  openGraph: {
    title: 'CTA L Train — Chicago Express Transit',
    description: 'Discover Chicago\'s L Train system. Direct access to O\'Hare Airport, downtown Loop, and citywide connections.',
    url: 'https://metroguia.mx/chicago',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesChicago.filter(e =>
  ['chi-ohare', 'chi-loop', 'chi-midway', 'chi-wrigley', 'chi-lake'].includes(e.slug)
);

export default function ChicagoPage() {
  const cityConfig = CITIES_CONFIG.chicago;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Chicago', item: 'https://metroguia.mx/chicago/' }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #00A1DE 0%, #0079B5 100%)',
        color: '#FFFFFF',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            margin: '0 0 16px 0',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
          }}>
            CTA L Train
          </h1>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            margin: '0 0 24px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: '0.95',
            lineHeight: '1.4',
          }}>
            Rapid Transit · 8 Lines · 139 Stations
          </p>
          <p style={{
            fontSize: '1.125rem',
            fontWeight: '400',
            margin: '0',
            opacity: '0.9',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Chicago's extensive elevated rapid transit network. Direct access to O'Hare and Midway airports, downtown Loop, and neighborhoods across the city. Red and Blue lines run 24 hours.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        backgroundColor: 'var(--surface)',
        padding: '48px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          textAlign: 'center',
        }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00A1DE', margin: '0 0 8px 0' }}>
              139
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00A1DE', margin: '0 0 8px 0' }}>
              8
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Active Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00A1DE', margin: '0 0 8px 0' }}>
              24h
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Red & Blue Lines
            </p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '60px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            marginBottom: '12px',
            textAlign: 'center',
            color: 'var(--text)',
          }}>
            Plan Your Route in Chicago
          </h2>
          <p style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '24px',
            color: 'var(--text-muted)',
          }}>
            Calculate the best route between CTA L stations
          </p>
          <SearchBar ciudad="chicago" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* TRANSIT INFO */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            margin: '0 0 16px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            Chicago Transportation
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            margin: '0 0 48px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            The CTA L Train is Chicago's elevated rapid transit backbone, connecting O'Hare International Airport, downtown's historic Loop, and neighborhoods throughout the city.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                ✈️ Airport Access
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                The Blue Line runs 24 hours to O'Hare. Red Line connects to Midway Airport south of downtown.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🌃 The Loop & Downtown
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Historic elevated core in downtown Chicago</li>
                <li>All lines pass through or near the Loop</li>
                <li>Access to museums, theaters, and attractions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT & CARDS */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            💳 Ventra Card
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="💳"
              titulo="Ventra Card"
              descripcion="Reloadable card for all CTA and Pace transit. Works on L, buses, and regional rail."
              precio="$5 (card) + passes"
              enlace="https://www.ventrachicago.com/"
            />

            <AffiliateTransportCard
              icon="📱"
              titulo="Mobile Ticket"
              descripcion="Buy single rides or passes via Ventra app."
              precio="$2.50"
              enlace="https://www.transitchicago.com/"
            />

            <AffiliateTransportCard
              icon="🎫"
              titulo="1-Day Pass"
              descripcion="Unlimited L and bus travel for 24 hours."
              precio="$13"
              enlace="https://www.transitchicago.com/"
            />
          </div>
        </div>
      </section>

      {/* FEATURED STATIONS */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            ⭐ Featured Stations
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {estacionesDestacadas.map((estacion, idx) => (
              <Link href={`/chicago/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#00A1DE' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    {Array.isArray(estacion.linea) ? estacion.linea.join(', ') : estacion.linea} Line
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LINES */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            CTA L Lines
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {lineasDetalleChicago.map((linea, idx) => (
              <Link href={`/chicago/line/${linea.id}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  borderLeft: `5px solid ${linea.color}`,
                  border: `1px solid var(--border)`,
                  borderLeft: `5px solid ${linea.color}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: linea.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                    }}>
                      {linea.id[0]}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {linea.colorNombre} Line
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                        {linea.total} stations · {linea.inicio} to {linea.fin}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
