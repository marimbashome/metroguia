import AdBannerLazy from '@/app/components/AdBannerLazy'
import { LANGUAGES, t } from '@/lib/i18n'
import { rutasPopulares, getRelatedRoutes } from '@/data/rutas-populares'
import { STATION_DISPLAY_NAMES, cdmxStationSet } from '@/data/rutas-engine'

// ISR: allow any route slug in any language
export const dynamicParams = true
export const revalidate = false

function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function parseSlug(slug) {
  if (!slug) return null
  const parts = slug.split('-a-')
  if (parts.length < 2) return null
  const origen = parts[0]
  const destino = parts.slice(1).join('-a-')
  if (!cdmxStationSet.has(origen) || !cdmxStationSet.has(destino)) return null
  return { origen, destino }
}

// Pre-build top 50 routes x 6 languages at build time
// All other combos generated on-demand via ISR
export function generateStaticParams() {
  const params = []
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    rutasPopulares.slice(0, 50).forEach(ruta => {
      params.push({ lang, slug: `${ruta.origen}-a-${ruta.destino}` })
    })
  })
  return params
}

export async function generateMetadata({ params }) {
  const parsed = parseSlug(params.slug)
  if (!parsed) {
    return { title: 'Route not found — MetroGuia' }
  }

  const origen = getStationName(parsed.origen)
  const destino = getStationName(parsed.destino)
  const lang = params.lang

  const titles = {
    en: `How to get from ${origen} to ${destino} by metro | MetroGuia.mx`,
    pt: `Como chegar de ${origen} a ${destino} de metrô | MetroGuia.mx`,
    fr: `Comment aller de ${origen} à ${destino} en métro | MetroGuia.mx`,
    de: `So kommen Sie von ${origen} nach ${destino} mit der Metro | MetroGuia.mx`,
    ja: `${origen}から${destino}へのメトロでの行き方 | MetroGuia.mx`,
    ko: `${origen}에서 ${destino}까지 지하철로 가는 법 | MetroGuia.mx`,
  }

  const descriptions = {
    en: `Metro route from ${origen} to ${destino} in Mexico City. Transfers, estimated time, lines, cost and alternatives.`,
    pt: `Rota de metrô de ${origen} a ${destino} na Cidade do México. Transferências, tempo estimado e custo.`,
    fr: `Trajet en métro de ${origen} à ${destino} à Mexico. Correspondances, durée estimée et coût.`,
    de: `Metro-Route von ${origen} nach ${destino} in Mexiko-Stadt. Umsteigemöglichkeiten und geschätzte Fahrzeit.`,
    ja: `メキシコシティの${origen}から${destino}までの地下鉄ルート。乗り換え、所要時間、料金。`,
    ko: `멕시코시티 ${origen}에서 ${destino}까지 지하철 노선. 환승, 소요시간, 요금.`,
  }

  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    alternates: {
      canonical: `https://metroguia.mx/${lang}/ruta/${params.slug}/`,
      languages: {
        es: `https://metroguia.mx/ruta/${params.slug}/`,
        ...Object.fromEntries(
          LANGUAGES.filter(l => l !== 'es' && l !== lang).map(l => [
            l, `https://metroguia.mx/${l}/ruta/${params.slug}/`
          ])
        ),
      },
    },
  }
}

export default async function RutaPageLang({ params }) {
  const lang = params.lang
  const translations = {} // fallback: t() uses defaults
  const parsed = parseSlug(params.slug)

  if (!parsed) {
    return (
      <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <h1>{t(translations, 'home.planRoute')}</h1>
        <p style={{ color: 'var(--text-muted)' }}>Route not found</p>
      </div>
    )
  }

  const origenName = getStationName(parsed.origen)
  const destinoName = getStationName(parsed.destino)
  const related = getRelatedRoutes(parsed.origen, parsed.destino, 6)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Rutas', item: `https://metroguia.mx/${lang}/` },
      { '@type': 'ListItem', position: 3, name: `${origenName} → ${destinoName}`, item: `https://metroguia.mx/${lang}/ruta/${params.slug}/` }
    ]
  }

  const colorPrimary = '#F5A623'

  const labels = {
    en: { time: 'Estimated time', cost: 'Cost', tipCost: 'Cost: $5 MXN per trip. Buy your Mobility Card at any station.', tipHours: 'Operating hours: 5:00 AM to 12:30 AM daily.', tipAccess: 'Many stations have elevators and accessibility ramps.', findRoute: 'This route uses the CDMX Metro system. The BFS pathfinder calculates the optimal route automatically.', relatedTitle: 'Related routes', searchAnother: 'Search another route' },
    pt: { time: 'Tempo estimado', cost: 'Custo', tipCost: 'Custo: $5 MXN por viagem. Compre seu Cartão de Mobilidade em qualquer estação.', tipHours: 'Horário: 5:00 às 00:30 diariamente.', tipAccess: 'Muitas estações têm elevadores e rampas de acessibilidade.', findRoute: 'Esta rota usa o sistema de Metrô da CDMX. O pathfinder BFS calcula a rota ideal automaticamente.', relatedTitle: 'Rotas relacionadas', searchAnother: 'Buscar outra rota' },
    fr: { time: 'Temps estimé', cost: 'Coût', tipCost: 'Coût: 5 MXN par trajet. Achetez votre carte de mobilité dans n\'importe quelle station.', tipHours: 'Horaires: 5h00 à 00h30 quotidiennement.', tipAccess: 'De nombreuses stations disposent d\'ascenseurs et de rampes d\'accessibilité.', findRoute: 'Cet itinéraire utilise le métro de CDMX. Le calculateur BFS trouve l\'itinéraire optimal automatiquement.', relatedTitle: 'Itinéraires similaires', searchAnother: 'Chercher un autre itinéraire' },
    de: { time: 'Geschätzte Zeit', cost: 'Kosten', tipCost: 'Kosten: 5 MXN pro Fahrt. Kaufen Sie Ihre Mobilitätskarte an jeder Station.', tipHours: 'Betriebszeiten: 5:00 bis 00:30 täglich.', tipAccess: 'Viele Stationen verfügen über Aufzüge und Barrierefreiheit.', findRoute: 'Diese Route nutzt das CDMX Metro-System. Der BFS-Algorithmus berechnet die optimale Route automatisch.', relatedTitle: 'Ähnliche Routen', searchAnother: 'Andere Route suchen' },
    ja: { time: '所要時間', cost: '料金', tipCost: '料金：1回5 MXN。駅でモビリティカードを購入できます。', tipHours: '運行時間：毎日5:00〜0:30。', tipAccess: '多くの駅にエレベーターとバリアフリー設備があります。', findRoute: 'このルートはCDMXメトロシステムを使用しています。BFSパスファインダーが最適なルートを自動計算します。', relatedTitle: '関連ルート', searchAnother: '別のルートを検索' },
    ko: { time: '예상 시간', cost: '비용', tipCost: '비용: 1회 5 MXN. 역에서 모빌리티 카드를 구매하세요.', tipHours: '운행 시간: 매일 05:00~00:30.', tipAccess: '많은 역에 엘리베이터와 접근성 시설이 있습니다.', findRoute: '이 노선은 CDMX 메트로 시스템을 사용합니다. BFS 경로 탐색기가 최적의 경로를 자동으로 계산합니다.', relatedTitle: '관련 노선', searchAnother: '다른 노선 검색' },
  }

  const l = labels[lang] || labels.en

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section style={{
        background: `linear-gradient(135deg, var(--surface) 0%, ${colorPrimary}15 100%)`,
        paddingTop: '4rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            {origenName}
            <span style={{ color: colorPrimary, margin: '0 0.5rem' }}>→</span>
            {destinoName}
          </h1>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', fontWeight: 600 }}>{l.time}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: colorPrimary }}>~5-40 min</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', fontWeight: 600 }}>{l.cost}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: colorPrimary }}>$5 MXN</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 1rem' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{l.findRoute}</p>
          <a href={`/ruta/${params.slug}`} style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: colorPrimary, color: '#000', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
            {origenName} → {destinoName} (Español)
          </a>
        </div>
      </section>

      <div style={{ padding: '1rem', borderTop: '1px solid var(--border)' }}>
        <div className="container"><AdBannerLazy slot="4434764790" /></div>
      </div>

      <section style={{ padding: '3rem 1rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{t(translations, 'station.tips')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[l.tipCost, l.tipHours, l.tipAccess].map((tip, idx) => (
              <div key={idx} className="card" style={{ padding: '1rem' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ padding: '3rem 1rem', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{l.relatedTitle}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {related.map((r, idx) => (
                <a key={idx} href={`/${lang}/ruta/${r.origen}-a-${r.destino}`} style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)', color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>
                  {getStationName(r.origen)} → {getStationName(r.destino)}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
