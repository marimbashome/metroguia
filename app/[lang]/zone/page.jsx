import { zonasUSCA } from '@/data/zonas-us-ca'
import AdBannerLazy from '@/app/components/AdBannerLazy'
import { LANGUAGES } from '@/lib/i18n'

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

const ZONE_TRANSLATIONS = {
  es: { title: 'Guías de barrios — Ciudades de EE.UU. y Canadá', desc: 'Explora guías de barrios para las principales ciudades de EE.UU. y Canadá. Cómo moverte en metro y transporte público durante el Mundial FIFA 2026.', heroTitle: 'Explora barrios de EE.UU. y Canadá', heroDesc: 'Descubre los mejores barrios y cómo llegar en transporte público en las principales ciudades de Norteamérica', intro: 'Explora barrios vibrantes en Estados Unidos y Canadá. Cada barrio tiene su propio carácter, historia y atractivos. Esta guía te ayuda a descubrir las mejores zonas y cómo llegar en transporte público — perfecto para planificar tu visita durante el Mundial FIFA 2026.', explore: 'Explorar barrio →', features: 'Qué encontrarás en cada guía', stations: 'Estaciones cercanas', stationsDesc: 'Estaciones y líneas de transporte que sirven al barrio', whatToSee: 'Qué ver', whatToSeeDesc: 'Museos, monumentos, parques y atracciones', tips: 'Consejos locales', tipsDesc: 'Consejos de expertos para aprovechar tu visita', stay: 'Dónde quedarte', stayDesc: 'Alojamiento y enlaces de reserva', ready: '¿Listo para explorar?', pick: 'Elige una ciudad arriba o consulta nuestras otras guías', zonasCDMX: 'Zonas de CDMX →', back: 'Volver a MetroGuia' },
  en: { title: 'Neighborhood transit guides — US & Canada cities', desc: 'Explore neighborhood guides for major US and Canadian cities. How to get around by subway, transit, and public transportation during FIFA 2026 and beyond.', heroTitle: 'Explore neighborhoods in US & Canada', heroDesc: 'Discover the best neighborhoods and how to get around by transit in major North American cities', intro: 'Explore vibrant neighborhoods across the United States and Canada. Each neighborhood has its own character, history, and attractions. This guide helps you discover the best areas and how to reach them by transit — perfect for planning your visit during FIFA 2026 or any time.', explore: 'Explore neighborhood →', features: 'What you will find in each guide', stations: 'Nearby stations', stationsDesc: 'Transit stations and lines serving the neighborhood', whatToSee: 'What to see', whatToSeeDesc: 'Museums, landmarks, parks, and attractions', tips: 'Local tips', tipsDesc: 'Insider advice for getting the most from your visit', stay: 'Where to stay', stayDesc: 'Accommodation and booking links', ready: 'Ready to explore?', pick: 'Pick a city above or check out our other guides', zonasCDMX: 'CDMX Zones →', back: 'Back to MetroGuia' },
  pt: { title: 'Guias de bairros — Cidades dos EUA e Canadá', desc: 'Explore guias de bairros das principais cidades dos EUA e Canadá. Como se locomover de metrô e transporte público durante a Copa do Mundo FIFA 2026.', heroTitle: 'Explore bairros nos EUA e Canadá', heroDesc: 'Descubra os melhores bairros e como chegar de transporte público nas principais cidades da América do Norte', intro: 'Explore bairros vibrantes nos Estados Unidos e Canadá. Cada bairro tem seu próprio caráter, história e atrações. Este guia ajuda você a descobrir as melhores áreas e como chegar de transporte público — perfeito para planejar sua visita durante a Copa do Mundo FIFA 2026.', explore: 'Explorar bairro →', features: 'O que você encontrará em cada guia', stations: 'Estações próximas', stationsDesc: 'Estações e linhas de transporte que atendem o bairro', whatToSee: 'O que ver', whatToSeeDesc: 'Museus, marcos, parques e atrações', tips: 'Dicas locais', tipsDesc: 'Conselhos de especialistas para aproveitar sua visita', stay: 'Onde ficar', stayDesc: 'Acomodação e links de reserva', ready: 'Pronto para explorar?', pick: 'Escolha uma cidade acima ou confira nossos outros guias', zonasCDMX: 'Zonas CDMX →', back: 'Voltar ao MetroGuia' },
  fr: { title: 'Guides de quartiers — Villes des États-Unis et du Canada', desc: 'Explorez les guides de quartiers des grandes villes des États-Unis et du Canada. Comment se déplacer en métro et transports en commun pendant la Coupe du Monde FIFA 2026.', heroTitle: 'Explorez les quartiers aux États-Unis et au Canada', heroDesc: 'Découvrez les meilleurs quartiers et comment vous déplacer en transport en commun dans les grandes villes nord-américaines', intro: 'Explorez des quartiers vibrants aux États-Unis et au Canada. Chaque quartier a son propre caractère, son histoire et ses attractions. Ce guide vous aide à découvrir les meilleures zones et comment les atteindre en transport en commun.', explore: 'Explorer le quartier →', features: 'Ce que vous trouverez dans chaque guide', stations: 'Stations proches', stationsDesc: 'Stations et lignes de transport desservant le quartier', whatToSee: 'À voir', whatToSeeDesc: 'Musées, monuments, parcs et attractions', tips: 'Conseils locaux', tipsDesc: 'Conseils d\'experts pour profiter de votre visite', stay: 'Où séjourner', stayDesc: 'Hébergement et liens de réservation', ready: 'Prêt à explorer?', pick: 'Choisissez une ville ci-dessus ou consultez nos autres guides', zonasCDMX: 'Zones CDMX →', back: 'Retour à MetroGuia' },
  de: { title: 'Stadtviertel-Guides — Städte in den USA und Kanada', desc: 'Entdecken Sie Stadtviertel-Guides für die wichtigsten Städte der USA und Kanadas.', heroTitle: 'Stadtviertel in den USA & Kanada erkunden', heroDesc: 'Entdecken Sie die besten Stadtviertel und wie Sie mit öffentlichen Verkehrsmitteln dorthin gelangen', intro: 'Entdecken Sie lebendige Stadtviertel in den USA und Kanada. Jedes Viertel hat seinen eigenen Charakter, seine Geschichte und Attraktionen. Dieser Guide hilft Ihnen, die besten Gegenden zu entdecken und wie Sie sie mit öffentlichen Verkehrsmitteln erreichen.', explore: 'Viertel erkunden →', features: 'Was Sie in jedem Guide finden', stations: 'Nahegelegene Stationen', stationsDesc: 'ÖPNV-Stationen und Linien im Viertel', whatToSee: 'Sehenswürdigkeiten', whatToSeeDesc: 'Museen, Wahrzeichen, Parks und Attraktionen', tips: 'Lokale Tipps', tipsDesc: 'Insidertipps für Ihren Besuch', stay: 'Unterkünfte', stayDesc: 'Unterkunft und Buchungslinks', ready: 'Bereit zu erkunden?', pick: 'Wählen Sie oben eine Stadt oder sehen Sie sich unsere anderen Guides an', zonasCDMX: 'CDMX-Zonen →', back: 'Zurück zu MetroGuia' },
  ja: { title: '地域ガイド — アメリカ・カナダの都市', desc: 'アメリカとカナダの主要都市の地域ガイドを探索。FIFA 2026ワールドカップ期間中の公共交通機関での移動方法。', heroTitle: 'アメリカ・カナダの地域を探索', heroDesc: '北米主要都市の最高の地域と公共交通機関でのアクセス方法を発見', intro: 'アメリカとカナダの活気ある地域を探索しましょう。各地域にはそれぞれの個性、歴史、アトラクションがあります。このガイドでは、最高のエリアと公共交通機関でのアクセス方法をご紹介します。', explore: '地域を探索 →', features: '各ガイドの内容', stations: '最寄り駅', stationsDesc: '地域にアクセスできる駅と路線', whatToSee: '見どころ', whatToSeeDesc: '博物館、ランドマーク、公園、アトラクション', tips: '現地のヒント', tipsDesc: '訪問を最大限に楽しむためのインサイダーアドバイス', stay: '宿泊先', stayDesc: '宿泊施設と予約リンク', ready: '探索の準備はできましたか？', pick: '上の都市を選択するか、他のガイドをチェック', zonasCDMX: 'CDMXゾーン →', back: 'MetroGuiaに戻る' },
  ko: { title: '지역 가이드 — 미국 및 캐나다 도시', desc: '미국과 캐나다 주요 도시의 지역 가이드를 탐색하세요. FIFA 2026 월드컵 기간 대중교통 이용 방법.', heroTitle: '미국 & 캐나다 지역 탐색', heroDesc: '북미 주요 도시의 최고 지역과 대중교통 이용법을 알아보세요', intro: '미국과 캐나다의 활기찬 지역을 탐색하세요. 각 지역마다 고유한 특성, 역사, 명소가 있습니다. 이 가이드는 최고의 지역과 대중교통으로 가는 방법을 알려드립니다.', explore: '지역 탐색 →', features: '각 가이드에서 찾을 수 있는 것', stations: '인근 역', stationsDesc: '지역에 접근 가능한 역과 노선', whatToSee: '볼거리', whatToSeeDesc: '박물관, 랜드마크, 공원, 명소', tips: '현지 팁', tipsDesc: '방문을 최대한 즐기기 위한 인사이더 조언', stay: '숙소', stayDesc: '숙박 및 예약 링크', ready: '탐색 준비 되셨나요?', pick: '위에서 도시를 선택하거나 다른 가이드를 확인하세요', zonasCDMX: 'CDMX 존 →', back: 'MetroGuia로 돌아가기' },
}

export function generateStaticParams() {
  // Zone index is English by default, generate for other languages
  return LANGUAGES.filter(l => l !== 'en').map(lang => ({ lang }))
}

export async function generateMetadata({ params }) {
  const lang = params.lang || 'en'
  const tr = ZONE_TRANSLATIONS[lang] || ZONE_TRANSLATIONS.en
  return {
    title: tr.title + ' | MetroGuia',
    description: tr.desc,
    openGraph: {
      title: tr.title,
      description: tr.desc,
      url: `https://metroguia.mx/${lang}/zone/`,
      siteName: 'MetroGuia',
      locale: lang === 'es' ? 'es_MX' : lang === 'en' ? 'en_US' : lang + '_' + lang.toUpperCase(),
      type: 'website',
    },
    alternates: {
      languages: Object.fromEntries(
        LANGUAGES.map(l => [l, l === 'en' ? '/zone/' : `/${l}/zone/`])
      ),
    },
  }
}

export default function ZonesPageLang({ params }) {
  const lang = params.lang || 'en'
  const tr = ZONE_TRANSLATIONS[lang] || ZONE_TRANSLATIONS.en

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: tr.title,
    description: tr.desc,
    url: `https://metroguia.mx/${lang}/zone/`,
    inLanguage: lang,
  }

  const zonesByCity = {}
  zonasUSCA.filter(Boolean).forEach(zone => {
    const cityKey = zone.city || zone.state || 'Other'
    if (!zonesByCity[cityKey]) zonesByCity[cityKey] = []
    zonesByCity[cityKey].push(zone)
  })

  const cities = Object.keys(zonesByCity).sort()

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)' }}>
        <div className="container">
          <h1>{tr.heroTitle}</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '0' }}>{tr.heroDesc}</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>{tr.intro}</p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {cities.map((city, cityIdx) => (
        <section key={city} style={{ padding: '3rem 1.25rem', backgroundColor: cityIdx % 2 === 1 ? 'var(--metro-gray)' : 'transparent' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid var(--metro-orange)' }}>{city}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {zonesByCity[city].map((zona) => {
                const transitColor = zona.transit_systems && zona.transit_systems[0] ? getTransitColor(zona.transit_systems[0]) : '#999'
                return (
                  <div key={zona.slug} className="lugar-card" style={{ backgroundColor: '#f8f9fa', borderTop: `4px solid ${transitColor}`, cursor: 'pointer', transition: 'all 0.3s ease', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                      <a href={`/${lang}/zone/${zona.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>{zona.name}</a>
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', flex: 1 }}>{zona.description.substring(0, 140)}...</p>
                    {zona.transit_systems && zona.transit_systems.length > 0 && (
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        {zona.transit_systems.map((system, idx) => (
                          <span key={idx} style={{ backgroundColor: getTransitColor(system), color: 'white', padding: '0.25rem 0.75rem', borderRadius: '3px', fontSize: '0.75rem', fontWeight: 600 }}>{system}</span>
                        ))}
                      </div>
                    )}
                    {zona.fifa_2026_relevance && (
                      <div style={{ backgroundColor: '#fff3cd', padding: '0.5rem 0.75rem', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.75rem', color: '#856404' }}>
                        <strong>⚽ FIFA 2026</strong>
                      </div>
                    )}
                    <a href={`/${lang}/zone/${zona.slug}/`} style={{ color: 'var(--metro-orange)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: 'auto' }}>{tr.explore}</a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <AdBannerLazy slot="4434764790" format="auto" />

      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--metro-gray)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>{tr.features}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📍</div><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tr.stations}</h3><p style={{ fontSize: '0.95rem', color: '#666' }}>{tr.stationsDesc}</p></div>
            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tr.whatToSee}</h3><p style={{ fontSize: '0.95rem', color: '#666' }}>{tr.whatToSeeDesc}</p></div>
            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💡</div><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tr.tips}</h3><p style={{ fontSize: '0.95rem', color: '#666' }}>{tr.tipsDesc}</p></div>
            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🏨</div><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tr.stay}</h3><p style={{ fontSize: '0.95rem', color: '#666' }}>{tr.stayDesc}</p></div>
          </div>
        </div>
      </section>

      <section className="section-tips">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>{tr.ready}</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>{tr.pick}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`/${lang}/zona/`} className="cta-btn">{tr.zonasCDMX}</a>
            <a href={`/${lang}/`} className="cta-btn" style={{ backgroundColor: 'var(--metro-gray)', color: 'var(--text)' }}>{tr.back}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
