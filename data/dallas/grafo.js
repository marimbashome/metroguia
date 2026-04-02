/**
 * Grafo de transporte público de Dallas (DFW) para MetroGuia.mx
 * Sistema DART: Red Line (20 est) + Blue Line (18 est) + Green Line (18 est) + Orange Line (16 est) + TRE (6 est)
 *
 * 54 nodos totales (incluyendo conexiones TRE)
 * Red: 20 estaciones | Blue: 18 estaciones | Green: 18 estaciones | Orange: 16 estaciones
 * Trinity Railway Express (TRE): 6 paradas principales
 *
 * Estructura de nodo:
 * {
 *   ciudad: 'dallas',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('dart-light-rail' | 'tre' | 'transbordo') }]
 * }
 */

export const grafoDallas = {
  // ============================================
  // RED LINE (Roja) - 20 estaciones
  // ============================================
  'dallas-parker-road': {
    ciudad: 'dallas',
    nombre: 'Parker Road',
    lineas: ['red', 'orange'],
    adyacentes: [
      { slug: 'dalworthington-gardens', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'arlington-center', tiempo: 3, linea: 'orange', tipo: 'transbordo' },
    ]
  },
  'dalworthington-gardens': {
    ciudad: 'dallas',
    nombre: 'Dalworthington Gardens',
    lineas: ['red'],
    adyacentes: [
      { slug: 'dallas-parker-road', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'vitruvian-park', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'vitruvian-park': {
    ciudad: 'dallas',
    nombre: 'Vitruvian Park',
    lineas: ['red'],
    adyacentes: [
      { slug: 'dalworthington-gardens', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'addison', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'addison': {
    ciudad: 'dallas',
    nombre: 'Addison',
    lineas: ['red'],
    adyacentes: [
      { slug: 'vitruvian-park', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'valley-view', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'valley-view': {
    ciudad: 'dallas',
    nombre: 'Valley View',
    lineas: ['red'],
    adyacentes: [
      { slug: 'addison', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityplace-uptown', tiempo: 4, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'dallas-cityplace-uptown': {
    ciudad: 'dallas',
    nombre: 'Cityplace/Uptown',
    lineas: ['red', 'green'],
    adyacentes: [
      { slug: 'valley-view', tiempo: 4, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'mckinney', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'gowan', tiempo: 5, linea: 'green', tipo: 'transbordo' },
    ]
  },
  'mckinney': {
    ciudad: 'dallas',
    nombre: 'McKinney',
    lineas: ['red'],
    adyacentes: [
      { slug: 'dallas-cityplace-uptown', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'pearl-arts-district', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'pearl-arts-district': {
    ciudad: 'dallas',
    nombre: 'Pearl/Arts District',
    lineas: ['red', 'blue'],
    adyacentes: [
      { slug: 'mckinney', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'downtown-dallas', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'st-paul', tiempo: 2, linea: 'blue', tipo: 'transbordo' },
    ]
  },
  'downtown-dallas': {
    ciudad: 'dallas',
    nombre: 'Downtown Dallas',
    lineas: ['red', 'blue'],
    adyacentes: [
      { slug: 'pearl-arts-district', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'dallas-union-station', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'akard', tiempo: 2, linea: 'blue', tipo: 'transbordo' },
    ]
  },
  'dallas-union-station': {
    ciudad: 'dallas',
    nombre: 'Union Station',
    lineas: ['red', 'blue', 'tre'],
    adyacentes: [
      { slug: 'downtown-dallas', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'east-12th', tiempo: 4, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'dallas-west-end', tiempo: 3, linea: 'blue', tipo: 'transbordo' },
      { slug: 'ebj-union-station', tiempo: 0, linea: 'tre', tipo: 'transbordo' },
      { slug: 'centreport-dfw', tiempo: 30, linea: 'tre', tipo: 'tre' },
    ]
  },
  'east-12th': {
    ciudad: 'dallas',
    nombre: 'East 12th',
    lineas: ['red'],
    adyacentes: [
      { slug: 'dallas-union-station', tiempo: 4, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'oak-cliff', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'oak-cliff': {
    ciudad: 'dallas',
    nombre: 'Oak Cliff',
    lineas: ['red'],
    adyacentes: [
      { slug: 'east-12th', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
      { slug: '12th-corinth', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  '12th-corinth': {
    ciudad: 'dallas',
    nombre: '12th Corinth',
    lineas: ['red'],
    adyacentes: [
      { slug: 'oak-cliff', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'continental', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'continental': {
    ciudad: 'dallas',
    nombre: 'Continental',
    lineas: ['red'],
    adyacentes: [
      { slug: '12th-corinth', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'marsalis', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'marsalis': {
    ciudad: 'dallas',
    nombre: 'Marsalis',
    lineas: ['red'],
    adyacentes: [
      { slug: 'continental', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'buckner', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'buckner': {
    ciudad: 'dallas',
    nombre: 'Buckner',
    lineas: ['red', 'green'],
    adyacentes: [
      { slug: 'marsalis', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'forest-lane', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'lake-june', tiempo: 2, linea: 'green', tipo: 'transbordo' },
    ]
  },
  'forest-lane': {
    ciudad: 'dallas',
    nombre: 'Forest Lane',
    lineas: ['red'],
    adyacentes: [
      { slug: 'buckner', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'lake-june', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'lake-june': {
    ciudad: 'dallas',
    nombre: 'Lake June',
    lineas: ['red', 'green'],
    adyacentes: [
      { slug: 'forest-lane', tiempo: 3, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'westmoreland-station', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'buckner', tiempo: 2, linea: 'green', tipo: 'transbordo' },
    ]
  },
  'westmoreland-station': {
    ciudad: 'dallas',
    nombre: 'Westmoreland Station',
    lineas: ['red'],
    adyacentes: [
      { slug: 'lake-june', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
      { slug: 'westmoreland', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },
  'westmoreland': {
    ciudad: 'dallas',
    nombre: 'Westmoreland',
    lineas: ['red'],
    adyacentes: [
      { slug: 'westmoreland-station', tiempo: 2, linea: 'red', tipo: 'dart-light-rail' },
    ]
  },

  // ============================================
  // BLUE LINE (Azul) - 18 estaciones
  // ============================================
  'downtown-rowlett': {
    ciudad: 'dallas',
    nombre: 'Downtown Rowlett',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'rowlett-lakepoint', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'rowlett-lakepoint': {
    ciudad: 'dallas',
    nombre: 'Rowlett Lakepoint',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'downtown-rowlett', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'rowlett-lake', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'rowlett-lake': {
    ciudad: 'dallas',
    nombre: 'Rowlett Lake',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'rowlett-lakepoint', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'eastfield-college', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'eastfield-college': {
    ciudad: 'dallas',
    nombre: 'Eastfield College',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'rowlett-lake', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'lakewood', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'lakewood': {
    ciudad: 'dallas',
    nombre: 'Lakewood',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'eastfield-college', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'white-rock', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'white-rock': {
    ciudad: 'dallas',
    nombre: 'White Rock',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'lakewood', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'deep-ellum', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'deep-ellum': {
    ciudad: 'dallas',
    nombre: 'Deep Ellum',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'white-rock', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'fair-park', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'fair-park': {
    ciudad: 'dallas',
    nombre: 'Fair Park',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'deep-ellum', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'pearl-arts-district', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'st-paul': {
    ciudad: 'dallas',
    nombre: 'St. Paul',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'pearl-arts-district', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'akard', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'akard': {
    ciudad: 'dallas',
    nombre: 'Akard',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'st-paul', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-west-end', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'dallas-west-end': {
    ciudad: 'dallas',
    nombre: 'West End',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'akard', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'ebj-union-station', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'ebj-union-station': {
    ciudad: 'dallas',
    nombre: 'EBJ Union Station',
    lineas: ['blue', 'tre'],
    adyacentes: [
      { slug: 'dallas-west-end', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'high-school', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-union-station', tiempo: 0, linea: 'tre', tipo: 'transbordo' },
    ]
  },
  'high-school': {
    ciudad: 'dallas',
    nombre: 'High School',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'ebj-union-station', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'plaza', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'plaza': {
    ciudad: 'dallas',
    nombre: 'Plaza',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'high-school', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'unt-dallas', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'unt-dallas': {
    ciudad: 'dallas',
    nombre: 'UNT Dallas',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'plaza', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'market-center', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'market-center': {
    ciudad: 'dallas',
    nombre: 'Market Center',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'unt-dallas', tiempo: 3, linea: 'blue', tipo: 'dart-light-rail' },
      { slug: 'lamar-street', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },
  'lamar-street': {
    ciudad: 'dallas',
    nombre: 'Lamar Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'market-center', tiempo: 2, linea: 'blue', tipo: 'dart-light-rail' },
    ]
  },

  // ============================================
  // GREEN LINE (Verde) - 18 estaciones
  // ============================================
  'north-carrollton-frankford': {
    ciudad: 'dallas',
    nombre: 'North Carrollton/Frankford',
    lineas: ['green'],
    adyacentes: [
      { slug: 'frankford', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'frankford': {
    ciudad: 'dallas',
    nombre: 'Frankford',
    lineas: ['green', 'red'],
    adyacentes: [
      { slug: 'north-carrollton-frankford', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'forest-lane', tiempo: 3, linea: 'red', tipo: 'transbordo' },
      { slug: 'farmers-branch', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'farmers-branch': {
    ciudad: 'dallas',
    nombre: 'Farmers Branch',
    lineas: ['green'],
    adyacentes: [
      { slug: 'frankford', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'carrollton', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'carrollton': {
    ciudad: 'dallas',
    nombre: 'Carrollton',
    lineas: ['green'],
    adyacentes: [
      { slug: 'farmers-branch', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'downtown-carrollton', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'downtown-carrollton': {
    ciudad: 'dallas',
    nombre: 'Downtown Carrollton',
    lineas: ['green'],
    adyacentes: [
      { slug: 'carrollton', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'inwood', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'inwood': {
    ciudad: 'dallas',
    nombre: 'Inwood',
    lineas: ['green'],
    adyacentes: [
      { slug: 'downtown-carrollton', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'bachman', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'bachman': {
    ciudad: 'dallas',
    nombre: 'Bachman',
    lineas: ['green'],
    adyacentes: [
      { slug: 'inwood', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'park-lane', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'park-lane': {
    ciudad: 'dallas',
    nombre: 'Park Lane',
    lineas: ['green'],
    adyacentes: [
      { slug: 'bachman', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'ledbetter', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'ledbetter': {
    ciudad: 'dallas',
    nombre: 'Ledbetter',
    lineas: ['green'],
    adyacentes: [
      { slug: 'park-lane', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityplace-uptown', tiempo: 5, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'gowan': {
    ciudad: 'dallas',
    nombre: 'Gowan',
    lineas: ['green'],
    adyacentes: [
      { slug: 'dallas-cityplace-uptown', tiempo: 5, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'abrams', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'abrams': {
    ciudad: 'dallas',
    nombre: 'Abrams',
    lineas: ['green'],
    adyacentes: [
      { slug: 'gowan', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'pleasant-grove', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'pleasant-grove': {
    ciudad: 'dallas',
    nombre: 'Pleasant Grove',
    lineas: ['green'],
    adyacentes: [
      { slug: 'abrams', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'south-hines', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },
  'south-hines': {
    ciudad: 'dallas',
    nombre: 'South Hines',
    lineas: ['green'],
    adyacentes: [
      { slug: 'pleasant-grove', tiempo: 3, linea: 'green', tipo: 'dart-light-rail' },
      { slug: 'buckner', tiempo: 2, linea: 'green', tipo: 'dart-light-rail' },
    ]
  },

  // ============================================
  // ORANGE LINE (Naranja) - 16 estaciones
  // ============================================
  'dallas-dfw-airport': {
    ciudad: 'dallas',
    nombre: 'DFW Airport',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'dfw-airport-terminal-c', tiempo: 2, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'dfw-airport-terminal-c': {
    ciudad: 'dallas',
    nombre: 'DFW Airport Terminal C',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'dallas-dfw-airport', tiempo: 2, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'dfw-airport-terminal-e', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'dfw-airport-terminal-e': {
    ciudad: 'dallas',
    nombre: 'DFW Airport Terminal E',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'dfw-airport-terminal-c', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'irving-convention-center', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'irving-convention-center': {
    ciudad: 'dallas',
    nombre: 'Irving Convention Center',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'dfw-airport-terminal-e', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'irving-beltline', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'irving-beltline': {
    ciudad: 'dallas',
    nombre: 'Irving Beltline',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'irving-convention-center', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'beltline', tiempo: 2, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'beltline': {
    ciudad: 'dallas',
    nombre: 'Beltline',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'irving-beltline', tiempo: 2, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'coppell', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'coppell': {
    ciudad: 'dallas',
    nombre: 'Coppell',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'beltline', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'las-colinas', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'las-colinas': {
    ciudad: 'dallas',
    nombre: 'Las Colinas',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'coppell', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'irving-mall', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'irving-mall': {
    ciudad: 'dallas',
    nombre: 'Irving Mall',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'las-colinas', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'centreport-dfw', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'centreport-dfw': {
    ciudad: 'dallas',
    nombre: 'CentrePort/DFW',
    lineas: ['orange', 'tre'],
    adyacentes: [
      { slug: 'irving-mall', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'irving-downtown', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-union-station', tiempo: 30, linea: 'tre', tipo: 'tre' },
    ]
  },
  'irving-downtown': {
    ciudad: 'dallas',
    nombre: 'Irving Downtown',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'centreport-dfw', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'irving-heritage', tiempo: 2, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'irving-heritage': {
    ciudad: 'dallas',
    nombre: 'Irving Heritage',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'irving-downtown', tiempo: 2, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'irving-walnut-hill', tiempo: 2, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'irving-walnut-hill': {
    ciudad: 'dallas',
    nombre: 'Irving Walnut Hill',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'irving-heritage', tiempo: 2, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'arlington-center', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },
  'arlington-center': {
    ciudad: 'dallas',
    nombre: 'Arlington Center',
    lineas: ['orange'],
    adyacentes: [
      { slug: 'irving-walnut-hill', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-parker-road', tiempo: 3, linea: 'orange', tipo: 'dart-light-rail' },
    ]
  },

  // ============================================
  // TRINITY RAILWAY EXPRESS (TRE) - 6 paradas
  // ============================================
  'fort-worth-central-station': {
    ciudad: 'dallas',
    nombre: 'Fort Worth Central Station',
    lineas: ['tre'],
    adyacentes: [
      { slug: 'centreport-dfw', tiempo: 30, linea: 'tre', tipo: 'tre' },
    ]
  }
};