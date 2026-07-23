import { notFound } from 'next/navigation'
import guides from '@/data/guides-content.json'
import AdBannerLazy from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }) {
  const g = guides.find((x) => x.slug === params.slug)
  if (!g) return {}
  const url = `https://metroguia.mx/guias-mexico/${g.slug}/`
  return {
    title: `${g.metaTitle || g.title} | MetroGuia`,
    description: g.metaDescription || g.subtitle || '',
    keywords: Array.isArray(g.tags) ? g.tags.join(', ') : '',
    alternates: { canonical: url },
    openGraph: {
      title: g.metaTitle || g.title,
      description: g.metaDescription || g.subtitle || '',
      url,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'article',
      images: g.heroImage ? [{ url: g.heroImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: g.metaTitle || g.title,
      description: g.metaDescription || g.subtitle || '',
      images: g.heroImage ? [g.heroImage] : [],
    },
  }
}

export default function GuiaPage({ params }) {
  const g = guides.find((x) => x.slug === params.slug)
  if (!g) notFound()

  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://metroguia.mx/' },
    { name: 'Guías de México', url: 'https://metroguia.mx/guias-mexico/' },
    { name: g.title, url: `https://metroguia.mx/guias-mexico/${g.slug}/` },
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.metaDescription || g.subtitle || '',
    image: g.heroImage || undefined,
    author: { '@type': 'Organization', name: 'Marimbas Home' },
    publisher: {
      '@type': 'Organization',
      name: 'MetroGuia',
      logo: { '@type': 'ImageObject', url: 'https://metroguia.mx/icon-512.png' },
    },
    datePublished: '2026-04-13',
    dateModified: '2026-04-13',
    mainEntityOfPage: `https://metroguia.mx/guias-mexico/${g.slug}/`,
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article style={{ maxWidth: 820, margin: '0 auto', padding: '1.5rem 1rem 3rem' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          <a href="/" style={{ color: 'inherit' }}>Inicio</a>
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <a href="/guias-mexico/" style={{ color: 'inherit' }}>Guías</a>
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <span>{g.title}</span>
        </nav>

        <header style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', lineHeight: 1.15, margin: 0 }}>
            {g.title}
          </h1>
          {g.subtitle && (
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}
               dangerouslySetInnerHTML={{ __html: g.subtitle }} />
          )}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span>⏱ {g.readTime} min de lectura</span>
            {Array.isArray(g.tags) && g.tags.slice(0, 4).map((t) => (
              <span key={t} style={{ padding: '0.15rem 0.55rem', background: 'var(--surface)', borderRadius: 999, border: '1px solid var(--border)' }}>
                {t}
              </span>
            ))}
          </div>
        </header>

        {g.heroImage && (
          <img
            src={g.heroImage}
            alt={g.title}
            style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: '1.5rem' }}
            loading="eager"
          />
        )}

        <AdBannerLazy slot="guia-top" />

        {g.sections && g.sections.length > 0 && (
          <nav style={{
            margin: '1.5rem 0',
            padding: '1rem 1.25rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 10,
          }}>
            <strong style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Contenido</strong>
            <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem' }}>
              {g.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} style={{ color: 'var(--primary)' }}>{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="guia-body">
          {(g.sections || []).map((s, idx) => (
            <section key={s.id} id={s.id} style={{ marginTop: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{s.title}</h2>
              <div
                style={{ lineHeight: 1.65, fontSize: '1rem' }}
                dangerouslySetInnerHTML={{ __html: s.content }}
              />
              {idx === Math.floor((g.sections.length || 0) / 2) && <AdBannerLazy slot="guia-mid" />}
            </section>
          ))}
        </div>

        <aside style={{
          marginTop: '2.5rem',
          padding: '1.25rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 12,
        }}>
          <h2 style={{ marginTop: 0, fontSize: '1.15rem' }}>¿Necesitas hospedaje?</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 1rem' }}>
            Marimbas Home opera apartamentos directos en CDMX y Chiapas desde 2015.
            Reserva sin comisiones de OTAs.
          </p>
          <a
            href={`https://book.marimbashome.com/es/guides/${g.slug}`}
            rel="noopener"
            style={{
              display: 'inline-block',
              padding: '0.6rem 1.1rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 500,
              marginRight: '0.5rem',
            }}
          >
            Ver en marimbashome.com →
          </a>
          <a
            href="/guias-mexico/"
            style={{
              display: 'inline-block',
              padding: '0.6rem 1.1rem',
              border: '1px solid var(--border)',
              borderRadius: 8,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Ver todas las guías
          </a>
        </aside>
      </article>
    </>
  )
}
