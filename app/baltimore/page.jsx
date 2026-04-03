import { CITIES_CONFIG } from '@/data/cities-config';
import { lineasDetalleBaltimore } from '@/data/baltimore/lineas-detalle';
import { estacionesBaltimore } from '@/data/baltimore/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export const metadata = {
  title: 'MTA Maryland Metro — Baltimore Transit | MetroGuia',
  description: 'MTA Maryland Metro guide: 2 lines, 47 stations in Baltimore. Subway and Light Rail lines serving downtown, BWI Airport, and neighborhoods. Complete transit guide with fares and schedules.',
  keywords: 'MTA Maryland, Baltimore Metro, Light Rail, Subway, Baltimore transit, Maryland',
  openGraph: {
    title: 'MTA Maryland Metro — Baltimore Express Transit',
    description: 'Discover Baltimore MTA Maryland Metro. Fast transit across Subway and Light Rail lines connecting downtown, BWI Airport, and neighborhoods.',
    url: 'https://metroguia.mx/baltimore',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesBaltimore.filter(e =>
  ['bal-downtown', 'bal-bwi-airport', 'bal-national-aquarium', 'bal-federal-hill', 'bal-penn-station'].includes(e.slug)
);

export default function BaltimorePagePage() {
  const cityConfig = CITIES_CONFIG.baltimore;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Baltimore', item: 'https://metroguia.mx/baltimore/' }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #00529B 0%, #003D7A 100%)',
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
            MTA Maryland Metro
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
            Rapid Transit · 2 Lines · 47 Stations
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
            Baltimore's integrated Metro system with Subway and Light Rail lines connecting downtown, BWI Airport, and neighborhoods throughout the region.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00529B', margin: '0 0 8px 0' }}>
              47
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00529B', margin: '0 0 8px 0' }}>
              2
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Active Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00529B', margin: '0 0 8px 0' }}>
              5–10 min
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Frequency
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
            Plan Your Route in Baltimore
          </h2>
          <p style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '24px',
            color: 'var(--text-muted)',
          }}>
            Calculate the best route between Metro stations
          </p>
          <SearchBar ciudad="baltimore" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* TRANSIT CARDS */}
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
            Payment & Cards
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="🎫"
              titulo="CharmCard"
              descripcion="Reloadable card for Baltimore MTA Metro, buses, and local transit."
              precio="$5 (card) + value"
              enlace="https://www.mta.maryland.gov/"
            />

            <AffiliateTransportCard
              icon="📱"
              titulo="Mobile Ticket"
              descripcion="Buy single rides or passes via MTA app or online."
              precio="$2.00"
              enlace="https://www.mta.maryland.gov/"
            />

            <AffiliateTransportCard
              icon="🎟️"
              titulo="Day Pass"
              descripcion="Unlimited Metro travel for 24 hours."
              precio="$8.50"
              enlace="https://www.mta.maryland.gov/"
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
              <Link href={`/baltimore/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#00529B' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    Line {Array.isArray(estacion.linea) ? estacion.linea[0] : estacion.linea}
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
            Metro Lines
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {lineasDetalleBaltimore.map((linea, idx) => (
              <Link href={`/baltimore/line/${linea.id}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
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
                      color: linea.color === '#FFB81C' ? '#000' : '#fff',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                    }}>
                      {linea.id}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {linea.inicio} → {linea.fin}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                        {linea.total} stations
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
