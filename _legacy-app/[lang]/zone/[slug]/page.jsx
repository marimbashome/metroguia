import { zonasUSCA } from '@/data/zonas-us-ca'
import AdBannerLazy from '@/app/components/AdBannerLazy'
import ViatorToursWidget from '@/app/components/ViatorToursWidget'
import BookingWidget from '@/app/components/BookingWidget'
import { LANGUAGES, OG_LOCALES } from '@/lib/i18n'

const TRANSIT_COLORS = {
  'MTA Subway': '#0039A6', 'LA Metro': '#E3551C', 'METRO Houston': '#6C207E',
  'Metro Houston': '#6C207E', 'MARTA': '#D4A017', 'SEPTA': '#0072CE',
  'Sound Transit': '#00843D', 'Sound Transit Light Rail': '#00843D',
  'BART': '#003CA6', 'MBTA': '#DA291C', 'MBTA Subway': '#DA291C',
  'Miami-Dade Transit': '#F78F1E', 'Metrorail': '#F78F1E',
  'DART Light Rail': '#CE0037', 'DART': '#CE0037',
  'KCATA': '#0054A6', 'KC Streetcar': '#0054A6',
  'TTC': '#DA291C', 'TTC Subway': '#DA291C', 'TTC Streetcar': '#DA291C',
  'TransLink': '#0084C4', 'TransLink SkyTrain': '#0084C4',
  'CTA L': '#00A1DE', 'WMATA Metro': '#004D6F', 'RTD Light Rail': '#1D71B8',
  'UTA TRAX': '#0070C0', 'MTS Trolley': '#E31837', 'Metro Transit Light Rail': '#003DA5',
  'CATS LYNX': '#008C99', 'Valley Metro Light Rail': '#BD4A18',
  'MTA Maryland Rail': '#6A2C91', 'RTA Rapid': '#0066B3', 'NFTA Metro': '#006341',
  'RTA Streetcar': '#2D6A4F', 'MetroLink': '#0072CE', 'PRT T Red Line': '#DA291C',
  'QLine (M-1 Rail)': '#00843D', 'VTA Light Rail': '#0099D8',
  'NJ Transit Light Rail': '#F37021', 'Honolulu Rail Transit': '#FFC72C',
  'Las Vegas Monorail': '#001489', 'The Tide Light Rail': '#005DAA',
  'TECO Streetcar': '#008B43', 'Capital MetroRail': '#E31837',
  'Cincinnati Bell Connector': '#0072CE', 'El Paso Streetcar': '#B4A269',
  'Jacksonville Skyway': '#005792', 'The Hop Lakefront': '#004F2D',
  'OKC Streetcar': '#E31837', 'SunRail': '#0072CE', 'Tren Urbano': '#00843D',
  'Sun Link': '#0072CE', 'STM Métro': '#0072CE', 'Calgary CTrain': '#EE3124',
  'Edmonton LRT': '#003DA5', 'O-Train': '#DA291C', 'O-Train Confederation Line': '#DA291C',
  'ION Light Rail Transit': '#00A54F', 'Hazel McCallion Light Rail Transit': '#0072CE',
  'TriMet MAX': '#D14413', 'SacRT Light Rail': '#0072CE',
}

function getTransitColor(system) {
  return TRANSIT_COLORS[system] || '#666666'
}

const DETAIL_TRANSLATIONS = {
  es: { notFound: 'Zona no encontrada', back: 'Volver a zonas', transit: 'Transporte', nearbyStations: 'Estaciones cercanas', accessTo: 'Acceso a', whatToSee: 'Qué ver y hacer', bookTours: 'Reserva tours en', findAccommodation: 'Encuentra alojamiento', tipsTitle: 'Consejos para visitantes', fifaTitle: '⚽ Por qué visitar durante el Mundial FIFA 2026', planning: 'Planificando tu visita a', mustSee: 'es un destino imperdible durante el Mundial FIFA 2026', exploreOther: 'Explorar otros barrios →', viewStations: 'Ver todas las estaciones', viewZones: 'Ver todas las zonas en', transitLines: 'Líneas de transporte en esta zona' },
  en: { notFound: 'Zone not found', back: 'Back to zones', transit: 'Transit', nearbyStations: 'Nearby stations', accessTo: 'Access to', whatToSee: 'What to see & do', bookTours: 'Book tours in', findAccommodation: 'Find accommodation', tipsTitle: 'Tips for visitors', fifaTitle: '⚽ Why visit during FIFA 2026', planning: 'Planning your visit to', mustSee: 'is a must-see destination during FIFA 2026', exploreOther: 'Explore other neighborhoods →', viewStations: 'View all stations', viewZones: 'View all zones in', transitLines: 'Transit lines in this zone' },
  pt: { notFound: 'Zona não encontrada', back: 'Voltar às zonas', transit: 'Transporte', nearbyStations: 'Estações próximas', accessTo: 'Acesso a', whatToSee: 'O que ver e fazer', bookTours: 'Reserve passeios em', findAccommodation: 'Encontre hospedagem', tipsTitle: 'Dicas para visitantes', fifaTitle: '⚽ Por que visitar durante a Copa do Mundo FIFA 2026', planning: 'Planejando sua visita a', mustSee: 'é um destino imperdível durante a Copa FIFA 2026', exploreOther: 'Explorar outros bairros →', viewStations: 'Ver todas as estações', viewZones: 'Ver todas as zonas em', transitLines: 'Linhas de transporte nesta zona' },
  fr: { notFound: 'Zone non trouvée', back: 'Retour aux zones', transit: 'Transport', nearbyStations: 'Stations proches', accessTo: 'Accès à', whatToSee: 'À voir et à faire', bookTours: 'Réserver des visites à', findAccommodation: 'Trouver un hébergement', tipsTitle: 'Conseils pour les visiteurs', fifaTitle: '⚽ Pourquoi visiter pendant la Coupe du Monde FIFA 2026', planning: 'Planifier votre visite à', mustSee: 'est une destination incontournable pendant la FIFA 2026', exploreOther: 'Explorer d\'autres quartiers →', viewStations: 'Voir toutes les stations', viewZones: 'Voir toutes les zones de', transitLines: 'Lignes de transport dans cette zone' },
  de: { notFound: 'Zone nicht gefunden', back: 'Zurück zu Zonen', transit: 'Verkehr', nearbyStations: 'Nahegelegene Stationen', accessTo: 'Zugang zu', whatToSee: 'Sehenswürdigkeiten', bookTours: 'Touren buchen in', findAccommodation: 'Unterkunft finden', tipsTitle: 'Tipps für Besucher', fifaTitle: '⚽ Warum während der FIFA 2026 besuchen', planning: 'Planen Sie Ihren Besuch in', mustSee: 'ist ein Muss während der FIFA 2026', exploreOther: 'Andere Viertel erkunden →', viewStations: 'Alle Stationen ansehen', viewZones: 'Alle Zonen ansehen in', transitLines: 'Verkehrslinien in dieser Zone' },
  ja: { notFound: 'ゾーンが見つかりません', back: 'ゾーン一覧に戻る', transit: '交通', nearbyStations: '最寄り駅', accessTo: 'へのアクセス', whatToSee: '見どころ', bookTours: 'ツアーを予約', findAccommodation: '宿泊先を探す', tipsTitle: '訪問者へのヒント', fifaTitle: '⚽ FIFA 2026期間中に訪問すべき理由', planning: 'への訪問を計画', mustSee: 'はFIFA 2026の必見スポットです', exploreOther: '他の地域を探索 →', viewStations: 'すべての駅を見る', viewZones: 'のすべてのゾーンを見る', transitLines: 'このゾーンの交通路線' },
  ko: { notFound: '존을 찾을 수 없습니다', back: '존 목록으로 돌아가기', transit: '교통', nearbyStations: '인근 역', accessTo: '접근', whatToSee: '볼거리 & 할거리', bookTours: '투어 예약', findAccommodation: '숙소 찾기', tipsTitle: '방문자 팁', fifaTitle: '⚽ FIFA 2026 기간 방문해야 하는 이유', planning: '방문 계획', mustSee: '는 FIFA 2026 필수 방문지입니다', exploreOther: '다른 지역 탐색 →', viewStations: '모든 역 보기', viewZones: '의 모든 존 보기', transitLines: '이 존의 교통 노선' },
}

export function generateStaticParams() {
  const zones = zonasUSCA.filter(z => z && z.slug)
  const params = []
  for (const lang of LANGUAGES.filter(l => l !== 'en')) {
    for (const z of zones) {
      params.push({ lang, slug: z.slug })
    }
  }
  return params
}

export function generateMetadata({ params }) {
  const zona = zonasUSCA.find(z => z && z.slug === params.slug)
  if (!zona) return { title: 'Zone not found' }
  const lang = params.lang || 'en'
  return {
    title: zona.seo_title || `${zona.name} — ${zona.city} transit guide | MetroGuia`,
    description: zona.meta_description || zona.description?.substring(0, 160),
    openGraph: {
      title: zona.seo_title || zona.name,
      description: zona.meta_description || zona.description?.substring(0, 160),
      url: `https://metroguia.mx/${lang}/zone/${zona.slug}/`,
      siteName: 'MetroGuia',
      locale: OG_LOCALES[lang] || 'en_US',
      type: 'website',
    },
    alternates: {
      languages: Object.fromEntries(
        LANGUAGES.map(l => [l, l === 'en' ? `/zone/${zona.slug}/` : `/${l}/zone/${zona.slug}/`])
      ),
    },
  }
}

export default function ZonePageLang({ params }) {
  const zona = zonasUSCA.find(z => z && z.slug === params.slug)
  const lang = params.lang || 'en'
  const tr = DETAIL_TRANSLATIONS[lang] || DETAIL_TRANSLATIONS.en

  if (!zona) return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>{tr.notFound}</h1>
      <p><a href={`/${lang}/zone/`}>{tr.back}</a></p>
    </div>
  )

  const cityName = zona.city || zona.state || 'Unknown'
  const countryName = zona.country === 'US' ? 'USA' : (zona.country || 'USA')
  const stations = Array.isArray(zona.stations) ? zona.stations : (zona.stations ? [zona.stations] : [])
  const transitSystems = Array.isArray(zona.transit_systems) ? zona.transit_systems : (zona.transit_systems ? [zona.transit_systems] : [])
  const transitLines = Array.isArray(zona.transit_lines) ? zona.transit_lines : (zona.transit_lines ? [zona.transit_lines] : [])
  const pois = Array.isArray(zona.pois) ? zona.pois : (zona.pois ? [zona.pois] : [])
  const tipsForVisitors = Array.isArray(zona.tips_for_visitors) ? zona.tips_for_visitors : (zona.tips_for_visitors ? [zona.tips_for_visitors] : [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    name: `${zona.name} - ${cityName}, ${countryName}`,
    description: zona.meta_description || zona.description,
    url: `https://metroguia.mx/${lang}/zone/${zona.slug}/`,
    inLanguage: lang,
    isAccessibleForFree: true,
    publicAccess: true,
    address: { '@type': 'PostalAddress', addressLocality: cityName, addressRegion: cityName, addressCountry: countryName },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)' }}>
        <div className="container">
          <h1>{zona.h1 || zona.name}</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>{zona.name}</p>
          <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>{cityName}, {countryName}</p>
          {transitSystems.length > 0 && (
            <p style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.75rem' }}>{tr.transit}: {transitSystems.join(', ')}</p>
          )}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>{zona.description}</p>
        </div>
      </section>

      {stations.length > 0 && (
        <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '2rem' }}>{tr.nearbyStations}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {stations.map((station, idx) => {
                const systemColor = transitSystems[0] ? getTransitColor(transitSystems[0]) : '#666'
                return (
                  <div key={idx} className="lugar-card" style={{ border: `2px solid ${systemColor}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ backgroundColor: systemColor, color: 'white', padding: '0.375rem 0.75rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.875rem' }}>{transitSystems[0] || 'Transit'}</span>
                    </div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                      {station.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: 0 }}>{tr.accessTo} {zona.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {pois.length > 0 && (
        <section style={{ padding: '3rem 1.25rem' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>{tr.whatToSee}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {pois.map((poi, idx) => (
                <div key={idx} className="lugar-card" style={{ backgroundColor: '#f8f9fa', borderTop: '4px solid var(--metro-orange)', height: '100%' }}>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>{poi.name}</h3>
                  <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#666' }}>{poi.type}</p>
                  <p style={{ marginBottom: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--metro-orange)' }}>{poi.distance}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>{tr.bookTours} {cityName}</h3>
              <ViatorToursWidget ciudad={cityName} zona={zona.name} />
            </div>
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>{tr.findAccommodation}</h3>
              <BookingWidget ciudad={cityName} />
            </div>
          </div>
        </div>
      </section>

      {tipsForVisitors.length > 0 && (
        <section style={{ padding: '3rem 1.25rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>{tr.tipsTitle}</h2>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--metro-orange)' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {tipsForVisitors.map((tip, idx) => (
                  <li key={idx} style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--metro-orange)', fontWeight: 700 }}>✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {zona.fifa_2026_relevance && (
        <section style={{ padding: '3rem 1.25rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#856404' }}>{tr.fifaTitle}</h3>
              <p style={{ color: '#856404', margin: 0 }}>{zona.fifa_2026_relevance}</p>
            </div>
          </div>
        </section>
      )}

      <AdBannerLazy slot="4434764790" format="auto" />

      <section className="section-tips">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>{tr.planning} {cityName}?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>{zona.name} {tr.mustSee}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`/${lang}/zone/`} className="cta-btn">{tr.exploreOther}</a>
            <a href={`/${lang}/`} className="cta-btn" style={{ backgroundColor: 'var(--metro-gray)', color: 'var(--text)' }}>{tr.viewStations}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
