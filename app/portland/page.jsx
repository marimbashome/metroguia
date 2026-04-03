import { lineasPortland } from '@/data/portland/lineas-detalle';
import { estacionesPortland } from '@/data/portland/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export const metadata = {
  title: 'TriMet MAX Light Rail & Portland Streetcar Guide — Portland Transit | MetroGuia',
  description: 'Complete Portland transit guide: TriMet MAX Light Rail 5 lines, Portland Streetcar 3 lines, 85+ stations. Direct Moda Center access for Trail Blazers. TRIMET Hop Card. Full transit planning.',
  keywords: 'TriMet MAX, Portland Streetcar, Portland transit, Moda Center, Trail Blazers, MAX Light Rail, Hop Card',
  openGraph: {
    title: 'TriMet MAX Light Rail — Portland Express Transit',
    description: 'Discover Portland\'s complete transit network: MAX Light Rail and Portland Streetcar. Access Moda Center, Rose Quarter, airports, and neighborhoods.',
    url: 'https://metroguia.mx/portland',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesPortland.filter(e =>
  ['portland-pioneer-courthouse', 'portland-rose-quarter-transit-center', 'portland-washington-park', 'portland-pdx-airport', 'portland-south-waterfront-moody'].includes(e.slug)
);

export default function PortlandPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Portland', item: 'https://metroguia.mx/portland/' }
    ]
  }

  const transitSystemSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitSystem',
    name: 'TriMet MAX Light Rail & Portland Streetcar',
    areaServed: 'Portland, Oregon Metropolitan Area',
    operator: 'TriMet',
    url: 'https://metroguia.mx/portland',
    numberOfLines: 8,
    numberOfStations: 85
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitSystemSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0054A4 0%, #D37520 100%)',
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
            TriMet MAX & Streetcar
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
            Light Rail · Streetcar · 8 Lines · 85+ Stations
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
            Portland's complete transit network: MAX Light Rail (5 lines), Portland Streetcar (3 lines), airport access, and neighborhoods
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <SearchBar />
      </section>

      {/* STATS */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: 600 }}>Light Rail Lines</p>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0', color: '#0054A4' }}>5</p>
          </div>
          <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: 600 }}>Streetcar Lines</p>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0', color: '#84BD00' }}>3</p>
          </div>
          <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: 600 }}>Total Stations</p>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0' }}>85+</p>
          </div>
          <div style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: 600 }}>Operating Hours</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>4:30 AM – 1:00 AM</p>
          </div>
        </div>
      </section>

      {/* FEATURED STATIONS */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          Featured Stations
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {estacionesDestacadas.map((estacion) => (
            <Link key={estacion.slug} href={`/portland/station/${estacion.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '24px',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0054A4';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,84,164,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ marginBottom: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {estacion.linea.slice(0, 3).map((linea) => {
                    const colors = {
                      'blue': '#0054A4',
                      'red': '#D81526',
                      'orange': '#D37520',
                      'yellow': '#FFC72C',
                      'green': '#00843D',
                      'a-loop': '#84BD00',
                      'b-loop': '#84BD00',
                      'ns-line': '#84BD00',
                    };
                    return (
                      <span key={linea} style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        backgroundColor: colors[linea],
                        color: linea === 'yellow' ? '#000' : '#fff',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                      }}>
                        {linea === 'a-loop' ? 'A' : linea === 'b-loop' ? 'B' : linea === 'ns-line' ? 'NS' : linea[0]}
                      </span>
                    );
                  })}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0', lineHeight: '1.5' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LINES GRID */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          All Lines
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {lineasPortland.map((linea) => (
            <Link key={linea.id} href={`/portland/line/${linea.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '24px',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                border: `2px solid ${linea.color}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 12px ${linea.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: linea.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: linea.id === 'yellow' ? '#000' : '#fff',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                  }}>
                    {linea.id === 'a-loop' ? 'A' : linea.id === 'b-loop' ? 'B' : linea.id === 'ns-line' ? 'NS' : linea.id[0].toUpperCase()}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: 600 }}>
                      {linea.sistema === 'streetcar' ? 'Streetcar' : 'MAX Light Rail'}
                    </p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: linea.color }}>
                      {linea.colorNombre}
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0 0 12px 0' }}>
                  {linea.inicio} → {linea.fin}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', margin: '0' }}>
                  {linea.total} stations
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'grid', gap: '24px' }}>
          {[
            {
              q: 'How do I use TriMet MAX Light Rail?',
              a: 'Download the TriMet Hop app or purchase a Hop Card at ticket machines. Tap to board all MAX lines and Streetcars. Single rides cost $2.50-3.00. Monthly passes available.'
            },
            {
              q: 'Which line goes to Moda Center for Trail Blazers games?',
              a: 'The Rose Quarter Transit Center (served by Blue, Red, and Yellow lines) is adjacent to Moda Center. Take any of these lines to reach the stadium.'
            },
            {
              q: 'How do I get to the airport from downtown?',
              a: 'Take the Red Line directly from downtown Pioneer Courthouse or Convention Center to Portland International Airport (PDX). About 35-40 minutes to the airport.'
            },
            {
              q: 'Are there wheelchair-accessible stations?',
              a: 'All MAX stations have elevators and are fully ADA accessible. Portland Streetcar stops are street-level with ramps. Service animals welcome.'
            },
            {
              q: 'What are the operating hours?',
              a: 'TriMet MAX Light Rail operates 4:30 AM to 1:00 AM daily. Portland Streetcar operates 6:00 AM to 11:00 PM. Frequency ranges from 6-15 minutes depending on the line and time.'
            },
            {
              q: 'Can I use Portland Streetcar with my Hop Card?',
              a: 'Yes! The Hop Card works on all TriMet services: MAX Light Rail, Portland Streetcar, and buses. Same fares apply.'
            }
          ].map((faq, idx) => (
            <div key={idx} style={{ padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                {faq.q}
              </h3>
              <p style={{ fontSize: '1rem', margin: '0', color: 'var(--text-dim)', lineHeight: '1.6' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AD */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <AdBannerLazy />
      </section>
    </main>
  );
}
