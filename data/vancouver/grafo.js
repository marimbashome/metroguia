/**
 * Grafo de transporte público de Vancouver (TransLink) para MetroGuia.mx
 * Sistema SkyTrain (Expo, Millennium, Canada Lines) + SeaBus + West Coast Express
 * 
 * 53 nodos totales
 * Expo Line: 20 estaciones | Millennium Line: 17 estaciones | Canada Line: 16 estaciones
 * SeaBus: 1 terminal ferry | West Coast Express: 7 estaciones
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'vancouver',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('skytrain' | 'seabus' | 'commuter-rail') }]
 * }
 * 
 * REGLA CRÍTICA: Cada arista es bidireccional (si A→B existe, B→A existe)
 * Las aristas conectan SOLO a estaciones inmediatamente adyacentes (vecinos), no a distancias lejanas.
 * Waterfront NO conecta directamente a YVR-Airport (eso era un error — pasan por Bridgeport en la Canada Line).
 */

export const grafoVancouver = {
  // ============================================
  // EXPO LINE (20 estaciones)
  // ============================================
  'vancouver-waterfront': {
    ciudad: 'vancouver',
    nombre: 'Waterfront',
    lineas: ['Expo', 'Canada', 'SeaBus', 'WCE'],
    adyacentes: [
      // Expo Line
      { slug: 'vancouver-burrard', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      // Canada Line
      { slug: 'vancouver-vancouver-city-centre', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      // SeaBus
      { slug: 'vancouver-lonsdale-quay', tiempo: 12, linea: 'SeaBus', tipo: 'seabus' },
      // West Coast Express
      { slug: 'vancouver-port-moody-wce', tiempo: 35, linea: 'WCE', tipo: 'commuter-rail' }
    ]
  },
  'vancouver-burrard': {
    ciudad: 'vancouver',
    nombre: 'Burrard',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-waterfront', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-granville', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-granville': {
    ciudad: 'vancouver',
    nombre: 'Granville',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-burrard', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-stadium-chinatown', tiempo: 3, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-stadium-chinatown': {
    ciudad: 'vancouver',
    nombre: 'Stadium-Chinatown',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-granville', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-main-street-science-world', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-main-street-science-world': {
    ciudad: 'vancouver',
    nombre: 'Main Street-Science World',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-stadium-chinatown', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-commercial-broadway', tiempo: 3, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-commercial-broadway': {
    ciudad: 'vancouver',
    nombre: 'Commercial-Broadway',
    lineas: ['Expo', 'Millennium'],
    adyacentes: [
      // Expo Line neighbors
      { slug: 'vancouver-main-street-science-world', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-nanaimo', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      // Millennium Line neighbors
      { slug: 'vancouver-vcc-clark', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-renfrew', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-nanaimo': {
    ciudad: 'vancouver',
    nombre: 'Nanaimo',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-commercial-broadway', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-29th-avenue', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-29th-avenue': {
    ciudad: 'vancouver',
    nombre: '29th Avenue',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-nanaimo', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-joyce-collingwood', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-joyce-collingwood': {
    ciudad: 'vancouver',
    nombre: 'Joyce-Collingwood',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-29th-avenue', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-patterson', tiempo: 3, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-patterson': {
    ciudad: 'vancouver',
    nombre: 'Patterson',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-joyce-collingwood', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-metrotown', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-metrotown': {
    ciudad: 'vancouver',
    nombre: 'Metrotown',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-patterson', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-royal-oak', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-royal-oak': {
    ciudad: 'vancouver',
    nombre: 'Royal Oak',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-metrotown', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-edmonds', tiempo: 3, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-edmonds': {
    ciudad: 'vancouver',
    nombre: 'Edmonds',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-royal-oak', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-22nd-street', tiempo: 3, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-22nd-street': {
    ciudad: 'vancouver',
    nombre: '22nd Street',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-edmonds', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-new-westminster', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-new-westminster': {
    ciudad: 'vancouver',
    nombre: 'New Westminster',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-22nd-street', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-columbia', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-columbia': {
    ciudad: 'vancouver',
    nombre: 'Columbia',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-new-westminster', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-scott-road', tiempo: 4, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-scott-road': {
    ciudad: 'vancouver',
    nombre: 'Scott Road',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-columbia', tiempo: 4, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-gateway', tiempo: 3, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-gateway': {
    ciudad: 'vancouver',
    nombre: 'Gateway',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-scott-road', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-surrey-central', tiempo: 3, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-surrey-central': {
    ciudad: 'vancouver',
    nombre: 'Surrey Central',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-gateway', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-king-george', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },
  'vancouver-king-george': {
    ciudad: 'vancouver',
    nombre: 'King George',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-surrey-central', tiempo: 2, linea: 'Expo', tipo: 'skytrain' }
    ]
  },

  // ============================================
  // MILLENNIUM LINE (17 estaciones)
  // ============================================
  'vancouver-vcc-clark': {
    ciudad: 'vancouver',
    nombre: 'VCC-Clark',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-commercial-broadway', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-renfrew', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-renfrew': {
    ciudad: 'vancouver',
    nombre: 'Renfrew',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-vcc-clark', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-commercial-broadway', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-rupert', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-rupert': {
    ciudad: 'vancouver',
    nombre: 'Rupert',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-renfrew', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-gilmore', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-gilmore': {
    ciudad: 'vancouver',
    nombre: 'Gilmore',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-rupert', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-brentwood-town-centre', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-brentwood-town-centre': {
    ciudad: 'vancouver',
    nombre: 'Brentwood Town Centre',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-gilmore', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-holdom', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-holdom': {
    ciudad: 'vancouver',
    nombre: 'Holdom',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-brentwood-town-centre', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-sperling-burnaby-lake', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-sperling-burnaby-lake': {
    ciudad: 'vancouver',
    nombre: 'Sperling-Burnaby Lake',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-holdom', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-lake-city-way', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-lake-city-way': {
    ciudad: 'vancouver',
    nombre: 'Lake City Way',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-sperling-burnaby-lake', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-production-way-university', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-production-way-university': {
    ciudad: 'vancouver',
    nombre: 'Production Way-University',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-lake-city-way', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-lougheed-town-centre', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-lougheed-town-centre': {
    ciudad: 'vancouver',
    nombre: 'Lougheed Town Centre',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-production-way-university', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-burquitlam', tiempo: 4, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-burquitlam': {
    ciudad: 'vancouver',
    nombre: 'Burquitlam',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-lougheed-town-centre', tiempo: 4, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-moody-centre', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-moody-centre': {
    ciudad: 'vancouver',
    nombre: 'Moody Centre',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-burquitlam', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-inlet-centre', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-inlet-centre': {
    ciudad: 'vancouver',
    nombre: 'Inlet Centre',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-moody-centre', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-coquitlam-central', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-coquitlam-central': {
    ciudad: 'vancouver',
    nombre: 'Coquitlam Central',
    lineas: ['Millennium', 'WCE'],
    adyacentes: [
      // Millennium Line neighbors
      { slug: 'vancouver-inlet-centre', tiempo: 3, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-lincoln', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' },
      // West Coast Express neighbors
      { slug: 'vancouver-port-moody-wce', tiempo: 8, linea: 'WCE', tipo: 'commuter-rail' },
      { slug: 'vancouver-port-coquitlam', tiempo: 6, linea: 'WCE', tipo: 'commuter-rail' }
    ]
  },
  'vancouver-lincoln': {
    ciudad: 'vancouver',
    nombre: 'Lincoln',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-coquitlam-central', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' },
      { slug: 'vancouver-lafarge-lake-douglas', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },
  'vancouver-lafarge-lake-douglas': {
    ciudad: 'vancouver',
    nombre: 'Lafarge Lake-Douglas',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-lincoln', tiempo: 2, linea: 'Millennium', tipo: 'skytrain' }
    ]
  },

  // ============================================
  // CANADA LINE (16 estaciones)
  // ============================================
  'vancouver-vancouver-city-centre': {
    ciudad: 'vancouver',
    nombre: 'Vancouver City Centre',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-waterfront', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-yaletown-roundhouse', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-yaletown-roundhouse': {
    ciudad: 'vancouver',
    nombre: 'Yaletown-Roundhouse',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-vancouver-city-centre', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-olympic-village', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-olympic-village': {
    ciudad: 'vancouver',
    nombre: 'Olympic Village',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-yaletown-roundhouse', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-broadway-city-hall', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-broadway-city-hall': {
    ciudad: 'vancouver',
    nombre: 'Broadway-City Hall',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-olympic-village', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-king-edward', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-king-edward': {
    ciudad: 'vancouver',
    nombre: 'King Edward',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-broadway-city-hall', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-oakridge-41st-avenue', tiempo: 3, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-oakridge-41st-avenue': {
    ciudad: 'vancouver',
    nombre: 'Oakridge-41st Avenue',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-king-edward', tiempo: 3, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-langara-49th-avenue', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-langara-49th-avenue': {
    ciudad: 'vancouver',
    nombre: 'Langara-49th Avenue',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-oakridge-41st-avenue', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-marine-drive', tiempo: 3, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-marine-drive': {
    ciudad: 'vancouver',
    nombre: 'Marine Drive',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-langara-49th-avenue', tiempo: 3, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-bridgeport', tiempo: 4, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-bridgeport': {
    ciudad: 'vancouver',
    nombre: 'Bridgeport',
    lineas: ['Canada'],
    adyacentes: [
      // Main line
      { slug: 'vancouver-marine-drive', tiempo: 4, linea: 'Canada', tipo: 'skytrain' },
      // YVR Branch
      { slug: 'vancouver-templeton', tiempo: 3, linea: 'Canada', tipo: 'skytrain' },
      // Richmond Branch
      { slug: 'vancouver-aberdeen', tiempo: 3, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  // ---- YVR Branch ----
  'vancouver-templeton': {
    ciudad: 'vancouver',
    nombre: 'Templeton',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-bridgeport', tiempo: 3, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-sea-island-centre', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-sea-island-centre': {
    ciudad: 'vancouver',
    nombre: 'Sea Island Centre',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-templeton', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-yvr-airport', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-yvr-airport': {
    ciudad: 'vancouver',
    nombre: 'YVR-Airport',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-sea-island-centre', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  // ---- Richmond Branch ----
  'vancouver-aberdeen': {
    ciudad: 'vancouver',
    nombre: 'Aberdeen',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-bridgeport', tiempo: 3, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-lansdowne', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-lansdowne': {
    ciudad: 'vancouver',
    nombre: 'Lansdowne',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-aberdeen', tiempo: 2, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-richmond-brighouse', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },
  'vancouver-richmond-brighouse': {
    ciudad: 'vancouver',
    nombre: 'Richmond-Brighouse',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-lansdowne', tiempo: 2, linea: 'Canada', tipo: 'skytrain' }
    ]
  },

  // ============================================
  // SeaBUS (Ferry)
  // ============================================
  'vancouver-lonsdale-quay': {
    ciudad: 'vancouver',
    nombre: 'Lonsdale Quay',
    lineas: ['SeaBus'],
    adyacentes: [
      { slug: 'vancouver-waterfront', tiempo: 12, linea: 'SeaBus', tipo: 'seabus' }
    ]
  },

  // ============================================
  // WEST COAST EXPRESS (WCE Commuter Rail)
  // ============================================
  'vancouver-port-moody-wce': {
    ciudad: 'vancouver',
    nombre: 'Port Moody WCE',
    lineas: ['WCE'],
    adyacentes: [
      { slug: 'vancouver-waterfront', tiempo: 35, linea: 'WCE', tipo: 'commuter-rail' },
      { slug: 'vancouver-coquitlam-central', tiempo: 8, linea: 'WCE', tipo: 'commuter-rail' }
    ]
  },
  'vancouver-port-coquitlam': {
    ciudad: 'vancouver',
    nombre: 'Port Coquitlam',
    lineas: ['WCE'],
    adyacentes: [
      { slug: 'vancouver-coquitlam-central', tiempo: 6, linea: 'WCE', tipo: 'commuter-rail' },
      { slug: 'vancouver-pitt-meadows', tiempo: 8, linea: 'WCE', tipo: 'commuter-rail' }
    ]
  },
  'vancouver-pitt-meadows': {
    ciudad: 'vancouver',
    nombre: 'Pitt Meadows',
    lineas: ['WCE'],
    adyacentes: [
      { slug: 'vancouver-port-coquitlam', tiempo: 8, linea: 'WCE', tipo: 'commuter-rail' },
      { slug: 'vancouver-maple-meadows', tiempo: 5, linea: 'WCE', tipo: 'commuter-rail' }
    ]
  },
  'vancouver-maple-meadows': {
    ciudad: 'vancouver',
    nombre: 'Maple Meadows',
    lineas: ['WCE'],
    adyacentes: [
      { slug: 'vancouver-pitt-meadows', tiempo: 5, linea: 'WCE', tipo: 'commuter-rail' },
      { slug: 'vancouver-port-haney', tiempo: 5, linea: 'WCE', tipo: 'commuter-rail' }
    ]
  },
  'vancouver-port-haney': {
    ciudad: 'vancouver',
    nombre: 'Port Haney',
    lineas: ['WCE'],
    adyacentes: [
      { slug: 'vancouver-maple-meadows', tiempo: 5, linea: 'WCE', tipo: 'commuter-rail' },
      { slug: 'vancouver-mission-city', tiempo: 15, linea: 'WCE', tipo: 'commuter-rail' }
    ]
  },
  'vancouver-mission-city': {
    ciudad: 'vancouver',
    nombre: 'Mission City',
    lineas: ['WCE'],
    adyacentes: [
      { slug: 'vancouver-port-haney', tiempo: 15, linea: 'WCE', tipo: 'commuter-rail' }
    ]
  }
};
