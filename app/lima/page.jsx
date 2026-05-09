import { estacionesLima } from '@/data/lima/estaciones';
import { lineasLima } from '@/data/lima/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Subte Lima — Guía Completa Líneas y Estaciones | MetroGuia',
  description: 'Guía completa del Subte de Lima: 6 líneas (A-E y H), 90 estaciones. Casa Rosada, Palermo, Recoleta, San Telmo. Rutas, tarifas y horarios 2025.',
  openGraph: {
    title: 'Subte Lima — Guía de Metro',
    description: 'Línea 1 con 26 estaciones y Línea 2 en construcción. Red moderna que conecta el norte y sur de Lima.',
    url: 'https://metroguia.mx/lima/',
  },
  alternates: { canonical: 'https://metroguia.mx/lima/' },
};

export default function LimaPage() {
  const destacadas = estacionesLima.filter(e =>
    estacionesLima.slice(0, 6).map(e => e.slug).includes(e.slug)
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Subte Lima', item: 'https://metroguia.mx/lima/' },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #1F8B47 0%, #4DB76A 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
            🇦🇷 Subte · Lima
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, margin: '0 0 16px 0', lineHeight: 1.1 }}>
            Subte de Lima
          </h1>
          <p style={{ fontSize: 'clamp(1rem,2.5vw,1.35rem)', margin: '0 0 12px 0', opacity: 0.95 }}>
            2 líneas · ~32 estaciones · Operada por Línea 1 SA y Metro de Lima Línea 2 SA
          </p>
          <p style={{ fontSize: '1rem', margin: '0 0 32px 0', opacity: 0.85, maxWidth: 600 }}>
            Navegá el Subte porteño con confianza: guías de estaciones, mapas de líneas y tips para recorrer Lima como un local.
          </p>
          <SearchBar ciudad="buenos-aires" />
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 24 }}>
          {[
            { val: '6', label: 'Líneas' },
            { val: '~90', label: 'Estaciones' },
            { val: '1913', label: 'Inauguración' },
            { val: 'ARS $270', label: 'Tarifa base' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 900, margin: '0 0 6px 0', color: '#1E5FA6' }}>{s.val}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LINES */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 32px 0' }}>Líneas del Subte</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
          {lineasLima.map(linea => (
            <Link key={linea.id} href={`/lima/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: `2px solid ${linea.color}`, borderRadius: 'var(--radius)', padding: 24, cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1.2rem', flexShrink: 0 }}>
                    {linea.id}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '1rem', margin: '0 0 4px 0', color: 'var(--text)' }}>{linea.colorNombre}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0 }}>{linea.total} estaciones</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>{linea.inicio} → {linea.fin}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{linea.descripcion.substring(0, 120)}…</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" />

      {/* ESTACIONES DESTACADAS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 32px 0' }}>Estaciones Principales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
          {destacadas.map(e => (
            <Link key={e.slug} href={`/lima/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 20 }}>
                <p style={{ fontWeight: 700, marginBottom: 6, color: 'var(--text)' }}>{e.nombre}</p>
                <p style={{ fontSize: '0.8rem', color: '#1E5FA6', fontWeight: 600, marginBottom: 8 }}>
                  Línea {Array.isArray(e.linea) ? e.linea.join(', ') : e.linea}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{e.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INFO PRÁCTICA */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', padding: 40 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 24px 0' }}>Tarifas y Horarios</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 24 }}>
            {[
              { label: 'Tarifa única', val: 'ARS $270' },
              { label: 'Tarjeta SUBE', val: 'Obligatoria' },
              { label: 'Horario L-V', val: '05:30–22:30' },
              { label: 'Horario S-D', val: '08:00–22:00' },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', margin: '0 0 6px 0' }}>{item.label}</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E5FA6', margin: 0 }}>{item.val}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, padding: '16px', background: 'rgba(122,197,229,0.1)', borderRadius: 8, borderLeft: '4px solid #7AC5E5' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text)', margin: 0, lineHeight: 1.6 }}>
              <strong>Consejo:</strong> La tarjeta SUBE es necesaria para viajar en el Subte. Se consigue en kioscos y estaciones de tren. Con la SUBE podés combinar colectivos, trenes y subte con descuentos.
            </p>
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* BARRIOS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 32px 0' }}>Barrios por Línea</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
          {[
            { linea: 'A', color: '#7AC5E5', barrio: 'Microcentro → Flores', desc: 'Congreso, Once, Caballito, Flores. La línea más histórica.' },
            { linea: 'B', color: '#EF3A3C', barrio: 'Microcentro → Villa Urquiza', desc: 'Corrientes, Abasto, Palermo, Plaza Italia.' },
            { linea: 'C', color: '#1E5FA6', barrio: 'Retiro → Constitución', desc: 'Eje norte-sur. Microcentro y terminales ferroviarias.' },
            { linea: 'D', color: '#159748', barrio: 'Centro → Belgrano', desc: 'Santa Fe, Recoleta, Palermo, Belgrano.' },
            { linea: 'E', color: '#9B297D', barrio: 'Retiro → Flores', desc: 'San Telmo, Boedo, Parque Chacabuco.' },
            { linea: 'H', color: '#F9BC15', barrio: 'Parque Patricios → Recoleta', desc: 'Eje norte-sur oriental. Desde Distrito Tecnológico hasta Recoleta.' },
          ].map(b => (
            <div key={b.linea} style={{ background: 'var(--surface)', border: `1px solid ${b.color}`, borderRadius: 'var(--radius)', padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ width: 36, height: 36, borderRadius: '50%', background: b.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '0.95rem' }}>{b.linea}</span>
                <span style={{ fontWeight: 700, color: 'var(--text)' }}>{b.barrio}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
