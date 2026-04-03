import { estacionesHOU } from '@/data/houston/estaciones';
import { lineasHOU } from '@/data/houston/lineas-detalle';
import { CITIES_CONFIG } from '@/data/cities-config';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import SearchBar from '@/app/components/SearchBar';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Houston Metro Rail Guide | Stations, Lines & Routes',
  description: 'Explore Houston Metro Rail with interactive maps, real-time info, and travel guides. Find stations, lines, and connections across Harris County.',
  openGraph: {
    title: 'Houston Metro Rail Guide',
    description: 'Complete guide to Houston Metro Rail stations, lines, and routes',
    url: 'https://metroguia.mx/houston',
  },
};

export default function HoustonPage() {
  const cityConfig = CITIES_CONFIG.houston;
  const lineasOrdenadas = lineasHOU.sort((a, b) => a.colorNombre.localeCompare(b.colorNombre));

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #FF6600 0%, #FF6600cc 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', margin: '0 0 16px 0', lineHeight: '1.1' }}>
            Houston Metro Rail
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', margin: '0 0 24px 0', opacity: '0.95', fontWeight: '500' }}>
            3 Lines · 30+ Stations · Connecting Harris County
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.9', maxWidth: '600px' }}>
            Navigate Houston's growing rapid transit network with real-time information, detailed maps, and travel guides for commuters and tourists.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#FF6600' }}>
                30+
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Stations
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#FF6600' }}>
                3
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Lines
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#FF6600' }}>
                $1.50
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Base Fare
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#FF6600' }}>
                5 AM–Midnight
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Operating Hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section style={{ maxWidth: '1200px', margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <SearchBar ciudad="houston" />
      </section>

      {/* FIFA 2026 */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)', backgroundImage: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)', borderRadius: 'var(--radius)', padding: '40px 24px', color: '#fff' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 16px 0' }}>
            ⚽ FIFA 2026: {cityConfig.stadium}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '24px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.8rem', color: '#FFD700', textTransform: 'uppercase', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '0.05em' }}>
                Stadium
              </p>
              <p style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0', color: '#fff' }}>
                {cityConfig.stadium}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', margin: '4px 0 0 0' }}>
                Capacity: {cityConfig.stadiumCapacity?.toLocaleString() || 'TBA'}
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.8rem', color: '#FFD700', textTransform: 'uppercase', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '0.05em' }}>
                Round
              </p>
              <p style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0', color: '#fff' }}>
                {cityConfig.fifaRound}
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.8rem', color: '#FFD700', textTransform: 'uppercase', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '0.05em' }}>
                Transit
              </p>
              <p style={{ fontSize: '0.9rem', margin: '0', color: '#fff' }}>
                {cityConfig.transitToStadium}
              </p>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link href={`/houston/mundial-2026/`} style={{ textDecoration: 'none' }}>
              <span style={{ display: 'inline-block', backgroundColor: '#FFD700', color: '#1a472a', padding: '12px 24px', borderRadius: '6px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
                View Houston FIFA 2026 Guide →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* LINES */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          All Metro Rail Lines
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {lineasOrdenadas.map((linea) => (
            <Link href={`/houston/line/${linea.id}`} key={linea.id}>
              <div style={{ backgroundColor: 'var(--surface)', border: `2px solid ${linea.color}`, borderRadius: 'var(--radius)', padding: '24px', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ width: '50px', height: '50px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '900', flexShrink: 0 }}>
                    {linea.id.charAt(0)}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '0', color: 'var(--text)' }}>
                    {linea.colorNombre}
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', margin: '0 0 12px 0', fontWeight: '500' }}>
                  {linea.inicio} → {linea.fin}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 16px 0', lineHeight: '1.4' }}>
                  {linea.total} stations
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {linea.municipios.slice(0, 3).map((region, idx) => (
                    <span key={idx} style={{ padding: '2px 8px', backgroundColor: `${linea.color}20`, color: linea.color, borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '600' }}>
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" />

      {/* FEATURED STATIONS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          Popular Stations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
          {estacionesHOU.filter((_, i) => [0, 2, 5, 8, 10, 15].includes(i)).map((estacion) => (
            <Link href={`/houston/station/${estacion.slug}`} key={estacion.slug}>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '20px', cursor: 'pointer', border: '1px solid var(--border)', transition: 'all 0.2s ease' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0 0 8px 0', fontWeight: '500' }}>
                  {estacion.county}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.4' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRANSIT INFO */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 24px 0', color: 'var(--text)' }}>
            Fares & Payment
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Single Ride
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FF6600', margin: '0' }}>
                $1.50 USD
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Day Pass
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FF6600', margin: '0' }}>
                $3.50 USD
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Accepted Payment
              </p>
              <p style={{ fontSize: '1rem', fontWeight: '600', margin: '0' }}>
                METRO Q Card, Cash
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Hours
              </p>
              <p style={{ fontSize: '1rem', fontWeight: '600', margin: '0' }}>
                5:00 AM – Midnight
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* LODGING */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          Where to Stay in Houston
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Downtown Houston
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Business district, museums, theaters. Red Line and Light Rail access.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#FF6600', fontWeight: '700' }}>
              Hotels: $120–$250/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Midtown
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Arts, dining, nightlife, galleries. Red Line and Rail access.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#FF6600', fontWeight: '700' }}>
              Hotels: $100–$200/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Hermann Park Area
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Museums, parks, gardens. Red Line station access to downtown.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#FF6600', fontWeight: '700' }}>
              Hotels: $90–$180/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Uptown
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Shopping, dining, mixed-use. Red Line and Metro access.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#FF6600', fontWeight: '700' }}>
              Hotels: $110–$220/night
            </p>
          </div>
        </div>
      </section>

      {/* AFFILIATE */}
      <section style={{ maxWidth: '800px', margin: '60px auto', padding: '0 24px' }}>
        <AffiliateTransportCard ciudad="Houston" estacion={null} fechas={null} />
      </section>

      {/* MUNDIAL */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <AffiliateMundial />
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
          Ready to Explore?
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Plan your Houston Metro Rail journey today with our interactive maps and station guides.
        </p>
      </section>
    </main>
  );
}
