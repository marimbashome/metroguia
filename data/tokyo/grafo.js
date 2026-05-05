/*
 * TOKYO METRO + TOEI SUBWAY GRAPH — BFS Adjacency Network
 * =========================================================
 * Coverage: Tokyo Metro (Ginza G, Hibiya H, Marunouchi M, Chiyoda C, Tozai T, Hanzomon Z, Fukutoshin F)
 *           + Toei Subway (Oedo, Asakusa) + JR lines (Yamanote, Chuo, Sobu)
 *           + Yurikamome + Tokyu lines
 * Total tourist stations: 25
 * Fares: ¥180-¥320 per journey, IC Card (Suica/Pasmo) recommended
 * Graph structure: flat slugs with full adjacency for BFS pathfinding
 * Key interchange hubs: Shibuya (G/H/F/Z/JR), Shinjuku (M/E/JR), Ginza (G/H/M)
 */

export const grafoTokyo = {

  // ===== GINZA LINE (G) — Shibuya to Asakusa =====
  'tokyo-shibuya': {
    ciudad: 'tokyo',
    nombre: 'Shibuya',
    lineas: ['G', 'Z', 'F', 'JR-Yamanote', 'Tokyu-Toyoko'],
    adyacentes: [
      { slug: 'tokyo-omotesando', tiempo: 3, linea: 'G', tipo: 'metro' },
      { slug: 'tokyo-daikanyama', tiempo: 3, linea: 'Tokyu-Toyoko', tipo: 'tokyu' },
      { slug: 'tokyo-nakameguro', tiempo: 5, linea: 'Tokyu-Toyoko', tipo: 'tokyu' },
      { slug: 'tokyo-shinjuku', tiempo: 4, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-harajuku', tiempo: 2, linea: 'JR-Yamanote', tipo: 'jr' },
    ],
  },

  'tokyo-omotesando': {
    ciudad: 'tokyo',
    nombre: 'Omotesando',
    lineas: ['G', 'C', 'Z'],
    adyacentes: [
      { slug: 'tokyo-shibuya', tiempo: 3, linea: 'G', tipo: 'metro' },
      { slug: 'tokyo-ginza', tiempo: 6, linea: 'G', tipo: 'metro' },
      { slug: 'tokyo-harajuku', tiempo: 5, linea: 'walk', tipo: 'walk' },
    ],
  },

  'tokyo-ginza': {
    ciudad: 'tokyo',
    nombre: 'Ginza',
    lineas: ['G', 'H', 'M'],
    adyacentes: [
      { slug: 'tokyo-omotesando', tiempo: 6, linea: 'G', tipo: 'metro' },
      { slug: 'tokyo-ueno', tiempo: 8, linea: 'G', tipo: 'metro' },
      { slug: 'tokyo-roppongi', tiempo: 4, linea: 'H', tipo: 'metro' },
      { slug: 'tokyo-akihabara', tiempo: 4, linea: 'H', tipo: 'metro' },
      { slug: 'tokyo-tokyo-station', tiempo: 5, linea: 'M', tipo: 'metro' },
      { slug: 'tokyo-tsukiji-shijo', tiempo: 5, linea: 'walk', tipo: 'walk' },
    ],
  },

  'tokyo-ueno': {
    ciudad: 'tokyo',
    nombre: 'Ueno',
    lineas: ['G', 'H', 'JR-Yamanote'],
    adyacentes: [
      { slug: 'tokyo-ginza', tiempo: 8, linea: 'G', tipo: 'metro' },
      { slug: 'tokyo-asakusa', tiempo: 4, linea: 'G', tipo: 'metro' },
      { slug: 'tokyo-akihabara', tiempo: 3, linea: 'H', tipo: 'metro' },
      { slug: 'tokyo-ryogoku', tiempo: 5, linea: 'JR-Sobu', tipo: 'jr' },
    ],
  },

  'tokyo-asakusa': {
    ciudad: 'tokyo',
    nombre: 'Asakusa',
    lineas: ['G', 'Toei-Asakusa'],
    adyacentes: [
      { slug: 'tokyo-ueno', tiempo: 4, linea: 'G', tipo: 'metro' },
      { slug: 'tokyo-ryogoku', tiempo: 8, linea: 'walk', tipo: 'walk' },
    ],
  },

  // ===== MARUNOUCHI LINE (M) =====
  'tokyo-shinjuku': {
    ciudad: 'tokyo',
    nombre: 'Shinjuku',
    lineas: ['M', 'Oedo', 'JR-Yamanote', 'JR-Chuo', 'Odakyu', 'Keio'],
    adyacentes: [
      { slug: 'tokyo-tokyo-station', tiempo: 10, linea: 'M', tipo: 'metro' },
      { slug: 'tokyo-ikebukuro', tiempo: 8, linea: 'M', tipo: 'metro' },
      { slug: 'tokyo-shibuya', tiempo: 4, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-harajuku', tiempo: 6, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-koenji', tiempo: 6, linea: 'JR-Chuo', tipo: 'jr' },
      { slug: 'tokyo-shimokitazawa', tiempo: 8, linea: 'Odakyu', tipo: 'odakyu' },
    ],
  },

  'tokyo-tokyo-station': {
    ciudad: 'tokyo',
    nombre: 'Tokyo Station',
    lineas: ['M', 'JR-Yamanote', 'JR-Chuo', 'Shinkansen'],
    adyacentes: [
      { slug: 'tokyo-ginza', tiempo: 5, linea: 'M', tipo: 'metro' },
      { slug: 'tokyo-shinjuku', tiempo: 10, linea: 'M', tipo: 'metro' },
      { slug: 'tokyo-ueno', tiempo: 4, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-akihabara', tiempo: 3, linea: 'JR-Yamanote', tipo: 'jr' },
    ],
  },

  // ===== HIBIYA LINE (H) =====
  'tokyo-roppongi': {
    ciudad: 'tokyo',
    nombre: 'Roppongi',
    lineas: ['H', 'Oedo'],
    adyacentes: [
      { slug: 'tokyo-ginza', tiempo: 4, linea: 'H', tipo: 'metro' },
      { slug: 'tokyo-akihabara', tiempo: 10, linea: 'H', tipo: 'metro' },
      { slug: 'tokyo-hamamatsucho', tiempo: 6, linea: 'walk', tipo: 'walk' },
    ],
  },

  'tokyo-akihabara': {
    ciudad: 'tokyo',
    nombre: 'Akihabara',
    lineas: ['H', 'JR-Yamanote', 'JR-Sobu'],
    adyacentes: [
      { slug: 'tokyo-ueno', tiempo: 3, linea: 'H', tipo: 'metro' },
      { slug: 'tokyo-ginza', tiempo: 4, linea: 'H', tipo: 'metro' },
      { slug: 'tokyo-tokyo-station', tiempo: 3, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-ryogoku', tiempo: 4, linea: 'JR-Sobu', tipo: 'jr' },
      { slug: 'tokyo-asakusabashi', tiempo: 2, linea: 'JR-Sobu', tipo: 'jr' },
    ],
  },

  'tokyo-nakameguro': {
    ciudad: 'tokyo',
    nombre: 'Nakameguro',
    lineas: ['H', 'Tokyu-Toyoko'],
    adyacentes: [
      { slug: 'tokyo-roppongi', tiempo: 8, linea: 'H', tipo: 'metro' },
      { slug: 'tokyo-shibuya', tiempo: 5, linea: 'Tokyu-Toyoko', tipo: 'tokyu' },
      { slug: 'tokyo-daikanyama', tiempo: 3, linea: 'Tokyu-Toyoko', tipo: 'tokyu' },
    ],
  },

  // ===== TOEI OEDO LINE =====
  'tokyo-tsukiji-shijo': {
    ciudad: 'tokyo',
    nombre: 'Tsukiji-shijo',
    lineas: ['Oedo'],
    adyacentes: [
      { slug: 'tokyo-ginza', tiempo: 5, linea: 'walk', tipo: 'walk' },
      { slug: 'tokyo-roppongi', tiempo: 8, linea: 'Oedo', tipo: 'toei' },
      { slug: 'tokyo-ryogoku', tiempo: 12, linea: 'Oedo', tipo: 'toei' },
    ],
  },

  'tokyo-ryogoku': {
    ciudad: 'tokyo',
    nombre: 'Ryogoku',
    lineas: ['Oedo', 'JR-Sobu'],
    adyacentes: [
      { slug: 'tokyo-tsukiji-shijo', tiempo: 12, linea: 'Oedo', tipo: 'toei' },
      { slug: 'tokyo-akihabara', tiempo: 4, linea: 'JR-Sobu', tipo: 'jr' },
      { slug: 'tokyo-asakusa', tiempo: 8, linea: 'walk', tipo: 'walk' },
    ],
  },

  // ===== JR LINES =====
  'tokyo-harajuku': {
    ciudad: 'tokyo',
    nombre: 'Harajuku',
    lineas: ['JR-Yamanote'],
    adyacentes: [
      { slug: 'tokyo-shibuya', tiempo: 2, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-shinjuku', tiempo: 6, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-omotesando', tiempo: 8, linea: 'walk', tipo: 'walk' },
    ],
  },

  'tokyo-ikebukuro': {
    ciudad: 'tokyo',
    nombre: 'Ikebukuro',
    lineas: ['M', 'Yurakucho', 'Fukutoshin', 'JR-Yamanote', 'Seibu-Ikebukuro'],
    adyacentes: [
      { slug: 'tokyo-shinjuku', tiempo: 8, linea: 'M', tipo: 'metro' },
      { slug: 'tokyo-koenji', tiempo: 10, linea: 'JR-Yamanote', tipo: 'jr' },
    ],
  },

  'tokyo-hamamatsucho': {
    ciudad: 'tokyo',
    nombre: 'Hamamatsucho',
    lineas: ['JR-Yamanote', 'JR-Keihin', 'Monorail'],
    adyacentes: [
      { slug: 'tokyo-tokyo-station', tiempo: 5, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-shibuya', tiempo: 12, linea: 'JR-Yamanote', tipo: 'jr' },
      { slug: 'tokyo-haneda-kokusai-airport', tiempo: 25, linea: 'Monorail', tipo: 'monorail' },
      { slug: 'tokyo-roppongi', tiempo: 6, linea: 'walk', tipo: 'walk' },
    ],
  },

  'tokyo-koenji': {
    ciudad: 'tokyo',
    nombre: 'Koenji',
    lineas: ['JR-Chuo'],
    adyacentes: [
      { slug: 'tokyo-shinjuku', tiempo: 6, linea: 'JR-Chuo', tipo: 'jr' },
      { slug: 'tokyo-kichijoji', tiempo: 10, linea: 'JR-Chuo', tipo: 'jr' },
      { slug: 'tokyo-ikebukuro', tiempo: 10, linea: 'JR-Yamanote', tipo: 'jr' },
    ],
  },

  'tokyo-kichijoji': {
    ciudad: 'tokyo',
    nombre: 'Kichijoji',
    lineas: ['JR-Chuo', 'Keio-Inokashira'],
    adyacentes: [
      { slug: 'tokyo-koenji', tiempo: 10, linea: 'JR-Chuo', tipo: 'jr' },
      { slug: 'tokyo-shinjuku', tiempo: 14, linea: 'JR-Chuo', tipo: 'jr' },
      { slug: 'tokyo-shimokitazawa', tiempo: 8, linea: 'Keio-Inokashira', tipo: 'keio' },
    ],
  },

  'tokyo-shimokitazawa': {
    ciudad: 'tokyo',
    nombre: 'Shimokitazawa',
    lineas: ['Odakyu', 'Keio-Inokashira'],
    adyacentes: [
      { slug: 'tokyo-shinjuku', tiempo: 8, linea: 'Odakyu', tipo: 'odakyu' },
      { slug: 'tokyo-kichijoji', tiempo: 8, linea: 'Keio-Inokashira', tipo: 'keio' },
      { slug: 'tokyo-shibuya', tiempo: 10, linea: 'Keio-Inokashira', tipo: 'keio' },
    ],
  },

  'tokyo-daikanyama': {
    ciudad: 'tokyo',
    nombre: 'Daikanyama',
    lineas: ['Tokyu-Toyoko'],
    adyacentes: [
      { slug: 'tokyo-shibuya', tiempo: 3, linea: 'Tokyu-Toyoko', tipo: 'tokyu' },
      { slug: 'tokyo-nakameguro', tiempo: 3, linea: 'Tokyu-Toyoko', tipo: 'tokyu' },
    ],
  },

  // ===== YURIKAMOME =====
  'tokyo-odaiba-kaihinkoen': {
    ciudad: 'tokyo',
    nombre: 'Odaiba-Kaihinkoen',
    lineas: ['Yurikamome'],
    adyacentes: [
      { slug: 'tokyo-asakusabashi', tiempo: 25, linea: 'Yurikamome', tipo: 'yurikamome' },
      { slug: 'tokyo-hamamatsucho', tiempo: 20, linea: 'walk-ferry', tipo: 'ferry' },
    ],
  },

  'tokyo-asakusabashi': {
    ciudad: 'tokyo',
    nombre: 'Asakusabashi',
    lineas: ['JR-Sobu'],
    adyacentes: [
      { slug: 'tokyo-akihabara', tiempo: 2, linea: 'JR-Sobu', tipo: 'jr' },
      { slug: 'tokyo-ryogoku', tiempo: 3, linea: 'JR-Sobu', tipo: 'jr' },
    ],
  },

  // ===== AIRPORTS =====
  'tokyo-haneda-kokusai-airport': {
    ciudad: 'tokyo',
    nombre: 'Haneda International Airport',
    lineas: ['Monorail', 'Keikyu'],
    adyacentes: [
      { slug: 'tokyo-hamamatsucho', tiempo: 25, linea: 'Monorail', tipo: 'monorail' },
      { slug: 'tokyo-tokyo-station', tiempo: 35, linea: 'Keikyu', tipo: 'keikyu' },
    ],
  },

  'tokyo-narita-airport': {
    ciudad: 'tokyo',
    nombre: 'Narita International Airport',
    lineas: ['NEX', 'Keisei-Skyliner'],
    adyacentes: [
      { slug: 'tokyo-tokyo-station', tiempo: 55, linea: 'NEX', tipo: 'jr' },
      { slug: 'tokyo-ueno', tiempo: 40, linea: 'Keisei-Skyliner', tipo: 'keisei' },
    ],
  },

}
