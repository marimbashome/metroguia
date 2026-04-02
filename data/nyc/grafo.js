/**
 * Grafo de transporte público de New York City (NYC) para MetroGuia.mx
 * Sistema MTA Subway: 27 líneas de servicio (numbered 1-7, lettered A-Z except I, O, X, Y)
 * + Staten Island Railway (SIR) + NJ Transit (regional)
 *
 * 80 nodos principales (estaciones más importantes y turísticas)
 * Líneas numeradas (IRT): 1, 2, 3, 4, 5, 6, 7
 * Líneas letradas (IND): A, B, C, D, E, F, G, J, L, M, N, Q, R, S, W, Z
 * Sistema regional: SIR (Staten Island Railway), NJ Transit (Meadowlands)
 *
 * Estructura de nodo:
 * {
 *   ciudad: 'nyc',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('subway' | 'regional' | 'transbordo') }]
 * }
 *
 * Tiempos promedio:
 * - Entre estaciones de la misma línea: 2-3 minutos
 * - Transferencias entre líneas: 3-5 minutos (en estaciones grandes, 5-8)
 * - Conexiones regionales: variable según ruta
 */

export const grafoNYC = {
  // ============================================
  // LÍNEA 1 (Roja) - Times Square y Financial District
  // ============================================
  'nyc-times-square-42nd-street': {
    ciudad: 'nyc',
    nombre: 'Times Square–42nd St',
    lineas: ['1', '2', '3', 'S'],
    adyacentes: [
      { slug: 'nyc-penn-station', tiempo: 4, linea: '1', tipo: 'transbordo' },
      { slug: 'nyc-grand-central', tiempo: 2, linea: 'S', tipo: 'transbordo' },
      { slug: '42nd-street-port-authority', tiempo: 3, linea: '1', tipo: 'subway' },
    ]
  },
  '42nd-street-port-authority': {
    ciudad: 'nyc',
    nombre: '42nd St–Port Authority',
    lineas: ['1', '2', '3', 'A', 'C', 'E'],
    adyacentes: [
      { slug: 'nyc-times-square-42nd-street', tiempo: 3, linea: '1', tipo: 'subway' },
      { slug: '34th-street-hudson', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: 'nyc-penn-station', tiempo: 5, linea: 'A', tipo: 'transbordo' },
    ]
  },
  '34th-street-hudson': {
    ciudad: 'nyc',
    nombre: '34th St–Hudson Yards',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: '42nd-street-port-authority', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: 'nyc-penn-station', tiempo: 3, linea: '1', tipo: 'transbordo' },
      { slug: '23rd-street-lex', tiempo: 4, linea: '1', tipo: 'subway' },
    ]
  },
  'nyc-penn-station': {
    ciudad: 'nyc',
    nombre: '34th St–Penn Station',
    lineas: ['A', 'C', 'E', '1', '2', '3'],
    adyacentes: [
      { slug: '34th-street-hudson', tiempo: 3, linea: '1', tipo: 'subway' },
      { slug: 'nyc-herald-square', tiempo: 4, linea: 'A', tipo: 'transbordo' },
      { slug: '33rd-street-lex', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  '23rd-street-lex': {
    ciudad: 'nyc',
    nombre: '23rd St (Lex)',
    lineas: ['4', '5', '6', 'N', 'Q', 'R', 'W'],
    adyacentes: [
      { slug: 'nyc-23rd-street', tiempo: 5, linea: '1', tipo: 'transbordo' },
      { slug: 'union-square', tiempo: 4, linea: '4', tipo: 'subway' },
      { slug: '14th-street-lex', tiempo: 3, linea: '4', tipo: 'subway' },
    ]
  },
  'nyc-23rd-street': {
    ciudad: 'nyc',
    nombre: '23rd St',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: '34th-street-hudson', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: '14th-street-penn', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: '23rd-street-lex', tiempo: 5, linea: 'L', tipo: 'transbordo' },
    ]
  },
  'union-square': {
    ciudad: 'nyc',
    nombre: 'Union Square',
    lineas: ['4', '5', '6', 'L', 'N', 'Q', 'R', 'W'],
    adyacentes: [
      { slug: '23rd-street-lex', tiempo: 4, linea: '4', tipo: 'subway' },
      { slug: '14th-street-penn', tiempo: 4, linea: 'L', tipo: 'transbordo' },
      { slug: 'brooklyn-ny-4-5-6', tiempo: 5, linea: '4', tipo: 'subway' },
    ]
  },
  '14th-street-penn': {
    ciudad: 'nyc',
    nombre: '14th St',
    lineas: ['1', '2', '3', 'L'],
    adyacentes: [
      { slug: 'nyc-23rd-street', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: 'christopher-street', tiempo: 3, linea: '1', tipo: 'subway' },
      { slug: 'union-square', tiempo: 4, linea: 'L', tipo: 'transbordo' },
    ]
  },
  'christopher-street': {
    ciudad: 'nyc',
    nombre: 'Christopher St–Sheridan Sq',
    lineas: ['1'],
    adyacentes: [
      { slug: '14th-street-penn', tiempo: 3, linea: '1', tipo: 'subway' },
      { slug: 'canal-street-1', tiempo: 4, linea: '1', tipo: 'subway' },
    ]
  },
  'canal-street-1': {
    ciudad: 'nyc',
    nombre: 'Canal St (Línea 1)',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: 'christopher-street', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: 'nyc-wall-street', tiempo: 4, linea: '2', tipo: 'subway' },
      { slug: 'fulton-street-complex', tiempo: 5, linea: '1', tipo: 'subway' },
    ]
  },
  'nyc-wall-street': {
    ciudad: 'nyc',
    nombre: 'Wall St',
    lineas: ['2', '3', '4', '5'],
    adyacentes: [
      { slug: 'canal-street-1', tiempo: 4, linea: '2', tipo: 'subway' },
      { slug: 'fulfon-street-complex', tiempo: 2, linea: '2', tipo: 'transbordo' },
      { slug: 'bowling-green', tiempo: 3, linea: '4', tipo: 'subway' },
    ]
  },
  'fulton-street-complex': {
    ciudad: 'nyc',
    nombre: 'Fulton St',
    lineas: ['2', '3', '4', '5', 'A', 'C', 'J', 'Z'],
    adyacentes: [
      { slug: 'canal-street-1', tiempo: 5, linea: '1', tipo: 'transbordo' },
      { slug: 'nyc-wall-street', tiempo: 2, linea: '2', tipo: 'transbordo' },
      { slug: 'nyc-brooklyn-bridge', tiempo: 3, linea: '4', tipo: 'transbordo' },
    ]
  },
  'bowling-green': {
    ciudad: 'nyc',
    nombre: 'Bowling Green',
    lineas: ['4', '5'],
    adyacentes: [
      { slug: 'nyc-wall-street', tiempo: 3, linea: '4', tipo: 'subway' },
      { slug: 'whitehall-terminal', tiempo: 2, linea: '4', tipo: 'subway' },
    ]
  },
  'whitehall-terminal': {
    ciudad: 'nyc',
    nombre: 'Whitehall Terminal',
    lineas: ['4', '5', 'R', 'W'],
    adyacentes: [
      { slug: 'bowling-green', tiempo: 2, linea: '4', tipo: 'subway' },
      { slug: 'nyc-brooklyn-bridge', tiempo: 4, linea: '4', tipo: 'transbordo' },
    ]
  },
  'nyc-brooklyn-bridge': {
    ciudad: 'nyc',
    nombre: 'Brooklyn Bridge–City Hall',
    lineas: ['4', '5', '6'],
    adyacentes: [
      { slug: 'fulton-street-complex', tiempo: 3, linea: '4', tipo: 'transbordo' },
      { slug: 'whitehall-terminal', tiempo: 4, linea: '4', tipo: 'transbordo' },
      { slug: 'brooklyn-ny-4-5-6', tiempo: 3, linea: '4', tipo: 'subway' },
    ]
  },

  // ============================================
  // LÍNEA 2 Y 3 BRONX/BROOKLYN
  // ============================================
  'brooklyn-ny-4-5-6': {
    ciudad: 'nyc',
    nombre: 'Brooklyn Heights Promenade (Línea 4/5)',
    lineas: ['4', '5', '6'],
    adyacentes: [
      { slug: 'nyc-brooklyn-bridge', tiempo: 3, linea: '4', tipo: 'subway' },
      { slug: 'brooklyn-ny-n-r-w', tiempo: 5, linea: 'N', tipo: 'transbordo' },
    ]
  },
  'brooklyn-ny-n-r-w': {
    ciudad: 'nyc',
    nombre: 'Brooklyn Heights (Línea N/R/W)',
    lineas: ['N', 'R', 'W'],
    adyacentes: [
      { slug: 'brooklyn-ny-4-5-6', tiempo: 5, linea: 'N', tipo: 'transbordo' },
      { slug: 'downtown-brooklyn', tiempo: 3, linea: 'N', tipo: 'subway' },
    ]
  },

  // ============================================
  // GRAND CENTRAL Y LÍNEAS LEXINGTON
  // ============================================
  'nyc-grand-central': {
    ciudad: 'nyc',
    nombre: 'Grand Central–42nd St',
    lineas: ['4', '5', '6', '7', 'S'],
    adyacentes: [
      { slug: 'nyc-times-square-42nd-street', tiempo: 2, linea: 'S', tipo: 'transbordo' },
      { slug: '33rd-street-lex', tiempo: 4, linea: '4', tipo: 'subway' },
      { slug: 'hydeparkcorner', tiempo: 4, linea: '6', tipo: 'subway' },
    ]
  },
  '33rd-street-lex': {
    ciudad: 'nyc',
    nombre: '33rd St',
    lineas: ['4', '5', '6'],
    adyacentes: [
      { slug: 'nyc-grand-central', tiempo: 4, linea: '4', tipo: 'subway' },
      { slug: '23rd-street-lex', tiempo: 3, linea: '4', tipo: 'subway' },
      { slug: 'nyc-penn-station', tiempo: 5, linea: '4', tipo: 'transbordo' },
    ]
  },
  '14th-street-lex': {
    ciudad: 'nyc',
    nombre: '14th St (Lex)',
    lineas: ['4', '5', '6', 'L'],
    adyacentes: [
      { slug: '23rd-street-lex', tiempo: 3, linea: '4', tipo: 'subway' },
      { slug: 'union-square', tiempo: 2, linea: '4', tipo: 'transbordo' },
      { slug: 'bowery-station', tiempo: 3, linea: '4', tipo: 'subway' },
    ]
  },
  'bowery-station': {
    ciudad: 'nyc',
    nombre: 'Bowery',
    lineas: ['4', '5', '6', 'J', 'Z'],
    adyacentes: [
      { slug: '14th-street-lex', tiempo: 3, linea: '4', tipo: 'subway' },
      { slug: 'brooklyn-bridge-lex-line', tiempo: 4, linea: '4', tipo: 'subway' },
    ]
  },
  'brooklyn-bridge-lex-line': {
    ciudad: 'nyc',
    nombre: 'Brooklyn Bridge–City Hall (Lex)',
    lineas: ['4', '5', '6'],
    adyacentes: [
      { slug: 'bowery-station', tiempo: 4, linea: '4', tipo: 'subway' },
      { slug: 'nyc-wall-street', tiempo: 2, linea: '4', tipo: 'transbordo' },
    ]
  },
  'hydeparkcorner': {
    ciudad: 'nyc',
    nombre: 'Hunter College',
    lineas: ['6'],
    adyacentes: [
      { slug: 'nyc-grand-central', tiempo: 4, linea: '6', tipo: 'subway' },
      { slug: 'astor-place', tiempo: 5, linea: '6', tipo: 'subway' },
    ]
  },
  'astor-place': {
    ciudad: 'nyc',
    nombre: 'Astor Pl',
    lineas: ['6'],
    adyacentes: [
      { slug: 'hydeparkcorner', tiempo: 5, linea: '6', tipo: 'subway' },
      { slug: 'brooklyn-bridge-lex-line', tiempo: 4, linea: '6', tipo: 'subway' },
    ]
  },

  // ============================================
  // HERALD SQUARE Y LÍNEA B/D/F/M/N/Q/R/W
  // ============================================
  'nyc-herald-square': {
    ciudad: 'nyc',
    nombre: 'Herald Square',
    lineas: ['B', 'D', 'F', 'M', 'N', 'Q', 'R', 'W'],
    adyacentes: [
      { slug: '42nd-street-bwy', tiempo: 4, linea: 'B', tipo: 'subway' },
      { slug: '28th-street-bwy', tiempo: 3, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-penn-station', tiempo: 4, linea: 'B', tipo: 'transbordo' },
    ]
  },
  '42nd-street-bwy': {
    ciudad: 'nyc',
    nombre: '42nd St–Times Sq (Broadway)',
    lineas: ['A', 'C', 'E', 'N', 'Q', 'R', 'W', '1', '2', '3', 'S'],
    adyacentes: [
      { slug: 'nyc-herald-square', tiempo: 4, linea: 'B', tipo: 'transbordo' },
      { slug: 'nyc-times-square-42nd-street', tiempo: 5, linea: 'A', tipo: 'transbordo' },
      { slug: '42nd-street-port-authority', tiempo: 3, linea: 'A', tipo: 'transbordo' },
    ]
  },
  '28th-street-bwy': {
    ciudad: 'nyc',
    nombre: '28th St',
    lineas: ['1', '2', '3', 'B', 'D', 'F', 'M'],
    adyacentes: [
      { slug: 'nyc-herald-square', tiempo: 3, linea: 'B', tipo: 'subway' },
      { slug: '34th-street-6av', tiempo: 4, linea: 'B', tipo: 'subway' },
    ]
  },
  '34th-street-6av': {
    ciudad: 'nyc',
    nombre: '34th St (Sixth Ave)',
    lineas: ['B', 'D', 'F', 'M'],
    adyacentes: [
      { slug: '28th-street-bwy', tiempo: 4, linea: 'B', tipo: 'subway' },
      { slug: '42nd-street-6av', tiempo: 4, linea: 'B', tipo: 'subway' },
    ]
  },
  '42nd-street-6av': {
    ciudad: 'nyc',
    nombre: '42nd St–Bryant Park',
    lineas: ['B', 'D', 'F', 'M'],
    adyacentes: [
      { slug: '34th-street-6av', tiempo: 4, linea: 'B', tipo: 'subway' },
      { slug: '47th-50th-rockefeller', tiempo: 3, linea: 'B', tipo: 'subway' },
    ]
  },
  '47th-50th-rockefeller': {
    ciudad: 'nyc',
    nombre: '47–50 Sts–Rockefeller Ctr',
    lineas: ['B', 'D', 'F', 'M'],
    adyacentes: [
      { slug: '42nd-street-6av', tiempo: 3, linea: 'B', tipo: 'subway' },
      { slug: '59th-street-6av', tiempo: 4, linea: 'B', tipo: 'subway' },
    ]
  },

  // ============================================
  // COLUMBUS CIRCLE Y LÍNEA A/C/D
  // ============================================
  'nyc-columbus-circle': {
    ciudad: 'nyc',
    nombre: 'Columbus Circle',
    lineas: ['A', 'B', 'C', 'D', '1', '2', '3'],
    adyacentes: [
      { slug: '59th-street-6av', tiempo: 4, linea: 'A', tipo: 'transbordo' },
      { slug: 'nyc-59th-street-central-park', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: '72nd-street-central-park', tiempo: 4, linea: '1', tipo: 'subway' },
    ]
  },
  'nyc-59th-street-central-park': {
    ciudad: 'nyc',
    nombre: '59th St–Columbus Circle',
    lineas: ['A', 'B', 'C', 'D'],
    adyacentes: [
      { slug: 'nyc-columbus-circle', tiempo: 2, linea: 'A', tipo: 'subway' },
      { slug: '42nd-street-port-authority', tiempo: 6, linea: 'A', tipo: 'subway' },
      { slug: '59th-street-6av', tiempo: 4, linea: 'B', tipo: 'transbordo' },
    ]
  },
  '59th-street-6av': {
    ciudad: 'nyc',
    nombre: '59th St (Sixth Ave)',
    lineas: ['B', 'D', 'F', 'M'],
    adyacentes: [
      { slug: '47th-50th-rockefeller', tiempo: 4, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-59th-street-central-park', tiempo: 4, linea: 'B', tipo: 'transbordo' },
    ]
  },
  '72nd-street-central-park': {
    ciudad: 'nyc',
    nombre: '72nd St',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: 'nyc-columbus-circle', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: '79th-street-natural-history', tiempo: 4, linea: '1', tipo: 'subway' },
    ]
  },
  '79th-street-natural-history': {
    ciudad: 'nyc',
    nombre: '79th St',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: '72nd-street-central-park', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: '86th-street', tiempo: 4, linea: '1', tipo: 'subway' },
    ]
  },
  '86th-street': {
    ciudad: 'nyc',
    nombre: '86th St',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: '79th-street-natural-history', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: '96th-street', tiempo: 4, linea: '1', tipo: 'subway' },
    ]
  },
  '96th-street': {
    ciudad: 'nyc',
    nombre: '96th St',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: '86th-street', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: '125th-street-1', tiempo: 6, linea: '1', tipo: 'subway' },
    ]
  },

  // ============================================
  // HARLEM Y LÍNEA 1/A/B/C/D Y 125TH ST
  // ============================================
  '125th-street-1': {
    ciudad: 'nyc',
    nombre: '125th St (Línea 1)',
    lineas: ['1'],
    adyacentes: [
      { slug: '96th-street', tiempo: 6, linea: '1', tipo: 'subway' },
      { slug: '135th-street-1', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: 'nyc-125th-street-harlem', tiempo: 3, linea: 'B', tipo: 'transbordo' },
    ]
  },
  'nyc-125th-street-harlem': {
    ciudad: 'nyc',
    nombre: '125th St',
    lineas: ['1', 'A', 'B', 'C', 'D'],
    adyacentes: [
      { slug: '125th-street-1', tiempo: 3, linea: '1', tipo: 'transbordo' },
      { slug: '145th-street-a', tiempo: 5, linea: 'A', tipo: 'subway' },
      { slug: '145th-street-b', tiempo: 5, linea: 'B', tipo: 'subway' },
    ]
  },
  '135th-street-1': {
    ciudad: 'nyc',
    nombre: '135th St',
    lineas: ['1'],
    adyacentes: [
      { slug: '125th-street-1', tiempo: 4, linea: '1', tipo: 'subway' },
      { slug: '145th-street-1', tiempo: 3, linea: '1', tipo: 'subway' },
    ]
  },
  '145th-street-1': {
    ciudad: 'nyc',
    nombre: '145th St (Línea 1)',
    lineas: ['1'],
    adyacentes: [
      { slug: '135th-street-1', tiempo: 3, linea: '1', tipo: 'subway' },
      { slug: '168th-street-1', tiempo: 5, linea: '1', tipo: 'subway' },
    ]
  },
  '145th-street-a': {
    ciudad: 'nyc',
    nombre: '145th St (Línea A)',
    lineas: ['A', 'C'],
    adyacentes: [
      { slug: 'nyc-125th-street-harlem', tiempo: 5, linea: 'A', tipo: 'subway' },
      { slug: '168th-street-a', tiempo: 5, linea: 'A', tipo: 'subway' },
    ]
  },
  '145th-street-b': {
    ciudad: 'nyc',
    nombre: '145th St (Línea B)',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: 'nyc-125th-street-harlem', tiempo: 5, linea: 'B', tipo: 'subway' },
      { slug: 'yankee-stadium-b-d', tiempo: 4, linea: 'B', tipo: 'subway' },
    ]
  },

  // ============================================
  // YANKEE STADIUM Y BRONX
  // ============================================
  'nyc-yankee-stadium': {
    ciudad: 'nyc',
    nombre: '161st St–Yankee Stadium',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: 'yankee-stadium-b-d', tiempo: 1, linea: 'B', tipo: 'subway' },
      { slug: '155th-street-b-d', tiempo: 3, linea: 'B', tipo: 'subway' },
    ]
  },
  'yankee-stadium-b-d': {
    ciudad: 'nyc',
    nombre: '161st St (Yankee Stadium Interchange)',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: '145th-street-b', tiempo: 4, linea: 'B', tipo: 'subway' },
      { slug: 'nyc-yankee-stadium', tiempo: 1, linea: 'B', tipo: 'transbordo' },
      { slug: '155th-street-b-d', tiempo: 3, linea: 'B', tipo: 'subway' },
    ]
  },
  '155th-street-b-d': {
    ciudad: 'nyc',
    nombre: '155th St',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: 'yankee-stadium-b-d', tiempo: 3, linea: 'B', tipo: 'subway' },
      { slug: '168th-street-b-d', tiempo: 3, linea: 'B', tipo: 'subway' },
    ]
  },
  '168th-street-b-d': {
    ciudad: 'nyc',
    nombre: '168th St (Bronx)',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: '155th-street-b-d', tiempo: 3, linea: 'B', tipo: 'subway' },
      { slug: '205th-street-b-d', tiempo: 6, linea: 'B', tipo: 'subway' },
    ]
  },
  '168th-street-1': {
    ciudad: 'nyc',
    nombre: '168th St (Línea 1)',
    lineas: ['1'],
    adyacentes: [
      { slug: '145th-street-1', tiempo: 5, linea: '1', tipo: 'subway' },
      { slug: 'dyckman-street', tiempo: 6, linea: '1', tipo: 'subway' },
    ]
  },
  '168th-street-a': {
    ciudad: 'nyc',
    nombre: '168th St (Línea A)',
    lineas: ['A', 'C'],
    adyacentes: [
      { slug: '145th-street-a', tiempo: 5, linea: 'A', tipo: 'subway' },
      { slug: '181st-street-a', tiempo: 4, linea: 'A', tipo: 'subway' },
    ]
  },

  // ============================================
  // CONEY ISLAND Y BROOKLYN
  // ============================================
  'nyc-atlantic-avenue-barclays': {
    ciudad: 'nyc',
    nombre: 'Atlantic Av–Barclays',
    lineas: ['2', '3', '4', '5', 'B', 'D', 'N', 'Q', 'R', 'W'],
    adyacentes: [
      { slug: 'downtown-brooklyn', tiempo: 4, linea: '2', tipo: 'subway' },
      { slug: 'flatbush-avenue', tiempo: 3, linea: '2', tipo: 'subway' },
      { slug: 'prospect-heights', tiempo: 5, linea: 'B', tipo: 'subway' },
    ]
  },
  'downtown-brooklyn': {
    ciudad: 'nyc',
    nombre: 'Downtown Brooklyn',
    lineas: ['2', '3', '4', '5', 'A', 'C', 'F', 'R'],
    adyacentes: [
      { slug: 'brooklyn-ny-4-5-6', tiempo: 4, linea: '2', tipo: 'subway' },
      { slug: 'nyc-atlantic-avenue-barclays', tiempo: 4, linea: '2', tipo: 'subway' },
    ]
  },
  'flatbush-avenue': {
    ciudad: 'nyc',
    nombre: 'Flatbush Av–Brooklyn College',
    lineas: ['2', '5'],
    adyacentes: [
      { slug: 'nyc-atlantic-avenue-barclays', tiempo: 3, linea: '2', tipo: 'subway' },
      { slug: 'prospect-park-sw', tiempo: 6, linea: '2', tipo: 'subway' },
    ]
  },
  'prospect-heights': {
    ciudad: 'nyc',
    nombre: 'Prospect Heights',
    lineas: ['B', 'S', 'Q'],
    adyacentes: [
      { slug: 'nyc-atlantic-avenue-barclays', tiempo: 5, linea: 'B', tipo: 'subway' },
      { slug: 'prospect-park', tiempo: 3, linea: 'Q', tipo: 'subway' },
    ]
  },
  'prospect-park': {
    ciudad: 'nyc',
    nombre: 'Prospect Park',
    lineas: ['Q'],
    adyacentes: [
      { slug: 'prospect-heights', tiempo: 3, linea: 'Q', tipo: 'subway' },
      { slug: 'nyc-coney-island', tiempo: 8, linea: 'Q', tipo: 'subway' },
    ]
  },
  'nyc-coney-island': {
    ciudad: 'nyc',
    nombre: 'Coney Island–Stillwell Av',
    lineas: ['F', 'N', 'Q'],
    adyacentes: [
      { slug: 'prospect-park', tiempo: 8, linea: 'Q', tipo: 'subway' },
      { slug: 'brighton-beach', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'astoria-ditmars', tiempo: 12, linea: 'N', tipo: 'subway' },
    ]
  },
  'brighton-beach': {
    ciudad: 'nyc',
    nombre: 'Brighton Beach',
    lineas: ['Q'],
    adyacentes: [
      { slug: 'nyc-coney-island', tiempo: 2, linea: 'Q', tipo: 'subway' },
      { slug: 'sheepshead-bay', tiempo: 3, linea: 'Q', tipo: 'subway' },
    ]
  },

  // ============================================
  // FLUSHING Y QUEENS
  // ============================================
  'nyc-flushing-main-street': {
    ciudad: 'nyc',
    nombre: 'Flushing–Main St',
    lineas: ['7'],
    adyacentes: [
      { slug: 'corona-elmhurst', tiempo: 5, linea: '7', tipo: 'subway' },
      { slug: 'astoria-ditmars', tiempo: 10, linea: 'N', tipo: 'transbordo' },
    ]
  },
  'astoria-ditmars': {
    ciudad: 'nyc',
    nombre: 'Astoria–Ditmars Blvd',
    lineas: ['N', 'W'],
    adyacentes: [
      { slug: 'nyc-jackson-heights', tiempo: 4, linea: 'N', tipo: 'subway' },
      { slug: 'nyc-flushing-main-street', tiempo: 10, linea: 'N', tipo: 'transbordo' },
      { slug: '42nd-street-bwy', tiempo: 12, linea: 'N', tipo: 'subway' },
    ]
  },
  'nyc-jackson-heights': {
    ciudad: 'nyc',
    nombre: 'Jackson Heights–Roosevelt Av',
    lineas: ['E', 'F', 'M', 'R'],
    adyacentes: [
      { slug: 'astoria-ditmars', tiempo: 4, linea: 'N', tipo: 'transbordo' },
      { slug: '74th-street-jackson', tiempo: 5, linea: 'F', tipo: 'subway' },
    ]
  },
  'corona-elmhurst': {
    ciudad: 'nyc',
    nombre: 'Corona–Elmhurst',
    lineas: ['7'],
    adyacentes: [
      { slug: 'nyc-flushing-main-street', tiempo: 5, linea: '7', tipo: 'subway' },
      { slug: 'woodside', tiempo: 4, linea: '7', tipo: 'subway' },
    ]
  },

  // ============================================
  // SECAUCUS Y NJ TRANSIT (FIFA)
  // ============================================
  'nyc-secaucus-junction-nj': {
    ciudad: 'nyc',
    nombre: 'Secaucus Junction',
    lineas: ['NJT'],
    adyacentes: [
      { slug: 'nyc-penn-station', tiempo: 35, linea: 'NJT', tipo: 'regional' },
      { slug: 'meadowlands-stadium', tiempo: 10, linea: 'NJT', tipo: 'regional' },
    ]
  },
  'meadowlands-stadium': {
    ciudad: 'nyc',
    nombre: 'Meadowlands Stadium (FIFA 2026)',
    lineas: ['NJT'],
    adyacentes: [
      { slug: 'nyc-secaucus-junction-nj', tiempo: 10, linea: 'NJT', tipo: 'regional' },
    ]
  },

  // ============================================
  // ESTACIONES ADICIONALES TURÍSTICAS
  // ============================================
  'prospect-park-sw': {
    ciudad: 'nyc',
    nombre: 'Prospect Park SW',
    lineas: ['2', '5'],
    adyacentes: [
      { slug: 'flatbush-avenue', tiempo: 6, linea: '2', tipo: 'subway' },
    ]
  },
  'sheepshead-bay': {
    ciudad: 'nyc',
    nombre: 'Sheepshead Bay',
    lineas: ['Q'],
    adyacentes: [
      { slug: 'brighton-beach', tiempo: 3, linea: 'Q', tipo: 'subway' },
    ]
  },
  '74th-street-jackson': {
    ciudad: 'nyc',
    nombre: '74th St–Broadway',
    lineas: ['F'],
    adyacentes: [
      { slug: 'nyc-jackson-heights', tiempo: 5, linea: 'F', tipo: 'subway' },
      { slug: '82nd-street-jackson', tiempo: 4, linea: 'F', tipo: 'subway' },
    ]
  },
  '82nd-street-jackson': {
    ciudad: 'nyc',
    nombre: '82nd St',
    lineas: ['F'],
    adyacentes: [
      { slug: '74th-street-jackson', tiempo: 4, linea: 'F', tipo: 'subway' },
    ]
  },
  'dyckman-street': {
    ciudad: 'nyc',
    nombre: 'Dyckman St',
    lineas: ['1'],
    adyacentes: [
      { slug: '168th-street-1', tiempo: 6, linea: '1', tipo: 'subway' },
      { slug: 'van-cortlandt-park', tiempo: 6, linea: '1', tipo: 'subway' },
    ]
  },
  '181st-street-a': {
    ciudad: 'nyc',
    nombre: '181st St',
    lineas: ['A', 'C'],
    adyacentes: [
      { slug: '168th-street-a', tiempo: 4, linea: 'A', tipo: 'subway' },
      { slug: '190th-street-a', tiempo: 4, linea: 'A', tipo: 'subway' },
    ]
  },
  '190th-street-a': {
    ciudad: 'nyc',
    nombre: '190th St',
    lineas: ['A', 'C'],
    adyacentes: [
      { slug: '181st-street-a', tiempo: 4, linea: 'A', tipo: 'subway' },
      { slug: '207th-street-a', tiempo: 5, linea: 'A', tipo: 'subway' },
    ]
  },
  '205th-street-b-d': {
    ciudad: 'nyc',
    nombre: '205th St',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: '168th-street-b-d', tiempo: 6, linea: 'B', tipo: 'subway' },
    ]
  },
  '207th-street-a': {
    ciudad: 'nyc',
    nombre: '207th St–Inwood',
    lineas: ['A', 'C'],
    adyacentes: [
      { slug: '190th-street-a', tiempo: 5, linea: 'A', tipo: 'subway' },
      { slug: 'van-cortlandt-park', tiempo: 4, linea: 'A', tipo: 'subway' },
    ]
  },
  'van-cortlandt-park': {
    ciudad: 'nyc',
    nombre: 'Van Cortlandt Park–242 St',
    lineas: ['1'],
    adyacentes: [
      { slug: 'dyckman-street', tiempo: 6, linea: '1', tipo: 'subway' },
    ]
  },
  'woodside': {
    ciudad: 'nyc',
    nombre: 'Woodside',
    lineas: ['7'],
    adyacentes: [
      { slug: 'corona-elmhurst', tiempo: 4, linea: '7', tipo: 'subway' },
    ]
  }
};
