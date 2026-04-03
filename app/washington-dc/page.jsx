import { estacionesDC } from '@/data/washington-dc/estaciones';
import { lineasDC } from '@/data/washington-dc/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import SearchBar from '@/app/components/SearchBar';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Washington, D.C. Metro Transit Guide — WMATA 6 Lines + 98 Stations | MetroGuia',
  description: 'Explore Washington DC WMATA with interactive maps, real-time info, and travel guides. Find stations, lines, and connections across the National Mall, Smithsonian, Capitol, and Pentagon.',
  openGraph: {
    title: 'Washington, D.C. Metro Transit Guide',
    description: 'Complete guide to Washington DC WMATA stations, lines, and routes',
    url: 'https://metroguia.mx/washington-dc',
  },
};

export default function WashingtonDCPage() {
  const lineasOrdenadas = lineasDC.sort((a, b) => a.colorNombre.localeCompare(b.colorNombre));

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #BF0D3E 0%, #a00b33 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', margin: '0 0 16px 0', lineHeight: '1.1', color: '#fff' }}>
            Washington, D.C. Metro
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', margin: '0 0 24px 0', opacity: '0.95', fontWeight: '500', color: '#fff' }}>
            6 Lines · 98 Stations · ~129 Miles of Track
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.9', maxWidth: '600px', color: '#fff' }}>
            Navigate Washington DC's WMATA system with real-time information, detailed maps, and travel guides for commuters and visitors exploring the nation's capital.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#BF0D3E' }}>
                98
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Stations
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#BF0D3E' }}>
                6
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Lines
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#BF0D3E' }}>
                $2.25–$6.00
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Fares (Peak/Off-Peak)
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#BF0D3E' }}>
                Mon–Thu
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                5 AM–11:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section style={{ maxWidth: '1200px', margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <SearchBar ciudad="washington-dc" />
      </section>

      {/* CAPITAL ATTRACTIONS */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: 'linear-gradient(135deg, #1a3a52 0%, #2d5a7f 100%)', backgroundImage: 'linear-gradient(135deg, #1a3a52 0%, #2d5a7f 100%)', borderRadius: 'var(--radius)', padding: '40px 24px', color: '#fff' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 16px 0' }}>
            Explore Washington's Historic Capital
          </h2>
          <p style={{ fontSize: '1rem', margin: '0 0 20px 0', opacity: '0.95', maxWidth: '600px', lineHeight: '1.6' }}>
            Washington DC is a gateway city to America's most important monuments and museums. Use WMATA to discover the National Mall, Smithsonian museums, Capitol Hill, Pentagon, and more.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#FFD700', fontWeight: '700', margin: '0' }}>
            National Mall · Smithsonian Museums · Capitol Building · Pentagon · Arlington Cemetery · Reagan National Airport
          </p>
        </div>
      </section>

      {/* DC CIRCULATOR */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '32px', borderLeft: '4px solid #00B140' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            DC Circulator
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
            The DC Circulator is a free bus service within downtown Washington DC. It connects major downtown attractions, making it easy to navigate the city center without WMATA fares. Perfect for tourists exploring the National Mall and downtown districts.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
            Routes: National Mall Loop · Georgetown Loop · Woodley Park Loop · Union Station Loop
          </p>
        </div>
      </section>

      {/* LINES */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          All WMATA Lines
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {lineasOrdenadas.map((linea) => (
            <Link href={`/washington-dc/line/${linea.id}`} key={linea.id}>
              <div style={{ backgroundColor: 'var(--surface)', border: `2px solid ${linea.color}`, borderRadius: 'var(--radius)', padding: '24px', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ width: '50px', height: '50px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '900', flexShrink: 0 }}>
                    {linea.id.charAt(0).toUpperCase()}
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
                  {linea.boroughs.slice(0, 3).map((region, idx) => (
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
          {estacionesDC.filter((_, i) => [0, 1, 2, 3, 4, 5].includes(i)).map((estacion) => (
            <Link href={`/washington-dc/station/${estacion.slug}`} key={estacion.slug}>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '20px', cursor: 'pointer', border: '1px solid var(--border)', transition: 'all 0.2s ease' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0 0 8px 0', fontWeight: '500' }}>
                  {estacion.borough}
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
                Off-Peak Fare
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#BF0D3E', margin: '0' }}>
                $2.25 USD
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Peak Fare
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#BF0D3E', margin: '0' }}>
                $6.00 USD
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Payment Method
              </p>
              <p style={{ fontSize: '1rem', fontWeight: '600', margin: '0' }}>
                SmarTrip Card, Contactless
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Hours
              </p>
              <p style={{ fontSize: '1rem', fontWeight: '600', margin: '0' }}>
                Mon–Thu 5 AM–11:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* LODGING */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          Where to Stay in Washington, DC
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              National Mall & Downtown
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Museums, monuments, shopping. Smithsonian and Metro Center stations nearby.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#BF0D3E', fontWeight: '700' }}>
              Hotels: $150–$320/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Dupont Circle
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Trendy neighborhood with galleries, cafés, nightlife, and restaurants.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#BF0D3E', fontWeight: '700' }}>
              Hotels: $120–$250/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Georgetown
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Historic neighborhood with upscale shopping, dining, and waterfront.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#BF0D3E', fontWeight: '700' }}>
              Hotels: $140–$300/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Arlington, VA
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Pentagon, Arlington Cemetery, more affordable options across the Potomac.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#BF0D3E', fontWeight: '700' }}>
              Hotels: $100–$200/night
            </p>
          </div>
        </div>
      </section>

      {/* AFFILIATE */}
      <section style={{ maxWidth: '800px', margin: '60px auto', padding: '0 24px' }}>
        <AffiliateTransportCard ciudad="Washington DC" estacion={null} fechas={null} />
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
          Plan your Washington DC WMATA journey today with our interactive maps and station guides.
        </p>
      </section>
    </main>
  );
}
