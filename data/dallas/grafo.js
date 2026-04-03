/**
 * Grafo de transporte público de Dallas (DFW) para MetroGuia.mx
 * 
 * Sistema de transporte integrado:
 * - RED LINE: 26 estaciones (norte a sur, Plano → Westmoreland)
 * - BLUE LINE: 23 estaciones (Rowlett/Garland → UNT Dallas)
 * - GREEN LINE: 24 estaciones (Buckner → North Carrollton/Frankford)
 * - ORANGE LINE: 31 estaciones (compartidas Red/Green + Irving → DFW)
 * - TRE: 10 estaciones (Union Station → T&P Station, Fort Worth)
 * - DALLAS STREETCAR: 6 paradas (Union Station → Bishop Arts)
 * 
 * Total de nodos únicos: 94
 * Total de conexiones: ~180+ aristas bidireccionales
 * 
 * Convenciones:
 * - Tiempo DART: 2-3 min entre estaciones
 * - Tiempo TRE: 5-12 min entre estaciones
 * - Tiempo Streetcar: 3-4 min entre paradas
 * - Transbordos en misma estación: tiempo 0, tipo 'transbordo'
 */

export const grafoDallas = {
  // ============================================================================
  // RED LINE (26 stations, Parker Road → Westmoreland)
  // ============================================================================

  'dallas-parker-road': {
    ciudad: 'Plano',
    nombre: 'Parker Road',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-downtown-plano', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-downtown-plano', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-downtown-plano': {
    ciudad: 'Plano',
    nombre: 'Downtown Plano',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-parker-road', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-parker-road', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-12th-street', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-12th-street', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-12th-street': {
    ciudad: 'Plano',
    nombre: '12th Street',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-downtown-plano', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-downtown-plano', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityline-bush', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityline-bush', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-cityline-bush': {
    ciudad: 'Richardson',
    nombre: 'CityLine/Bush',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-12th-street', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-12th-street', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-galatyn-park', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-galatyn-park', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-galatyn-park': {
    ciudad: 'Richardson',
    nombre: 'Galatyn Park',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-cityline-bush', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityline-bush', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-arapaho-center', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-arapaho-center', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-arapaho-center': {
    ciudad: 'Richardson',
    nombre: 'Arapaho Center',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-galatyn-park', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-galatyn-park', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-spring-valley', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-spring-valley', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-spring-valley': {
    ciudad: 'Dallas',
    nombre: 'Spring Valley',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-arapaho-center', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-arapaho-center', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-lbj-central', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-lbj-central', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-lbj-central': {
    ciudad: 'Dallas',
    nombre: 'LBJ/Central',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-spring-valley', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-spring-valley', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-forest-lane', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-forest-lane', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-forest-lane': {
    ciudad: 'Dallas',
    nombre: 'Forest Lane',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-lbj-central', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-lbj-central', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-walnut-hill', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-walnut-hill', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-walnut-hill': {
    ciudad: 'Dallas',
    nombre: 'Walnut Hill',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-forest-lane', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-forest-lane', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-park-lane', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-park-lane', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-park-lane': {
    ciudad: 'Dallas',
    nombre: 'Park Lane',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-walnut-hill', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-walnut-hill', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-lovers-lane', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-lovers-lane', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-lovers-lane': {
    ciudad: 'Dallas',
    nombre: 'Lovers Lane',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'dallas-park-lane', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-park-lane', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-smu-mockingbird', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-smu-mockingbird', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  // Shared stations (Red, Blue, Orange)
  'dallas-smu-mockingbird': {
    ciudad: 'Dallas',
    nombre: 'SMU/Mockingbird',
    lineas: ['Red', 'Blue', 'Orange'],
    adyacentes: [
      { slug: 'dallas-lovers-lane', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-lovers-lane', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityplace-uptown', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityplace-uptown', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-white-rock', tiempo: 3, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityplace-uptown', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      // Transbordo con Blue
      { slug: 'dallas-white-rock', tiempo: 0, linea: 'Blue', tipo: 'transbordo' },
    ],
  },

  'dallas-cityplace-uptown': {
    ciudad: 'Dallas',
    nombre: 'Cityplace/Uptown',
    lineas: ['Red', 'Blue', 'Orange'],
    adyacentes: [
      { slug: 'dallas-smu-mockingbird', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-smu-mockingbird', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-pearl-arts-district', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-pearl-arts-district', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-smu-mockingbird', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-pearl-arts-district', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  // Shared stations (all lines: Red, Blue, Green, Orange)
  'dallas-pearl-arts-district': {
    ciudad: 'Dallas',
    nombre: 'Pearl/Arts District',
    lineas: ['Red', 'Blue', 'Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-cityplace-uptown', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityplace-uptown', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-st-paul', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-st-paul', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-cityplace-uptown', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-st-paul', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-deep-ellum', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-st-paul', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-st-paul': {
    ciudad: 'Dallas',
    nombre: 'St. Paul',
    lineas: ['Red', 'Blue', 'Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-pearl-arts-district', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-pearl-arts-district', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-akard', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-akard', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-pearl-arts-district', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-akard', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-pearl-arts-district', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-akard', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-akard': {
    ciudad: 'Dallas',
    nombre: 'Akard',
    lineas: ['Red', 'Blue', 'Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-st-paul', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-st-paul', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-west-end', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-west-end', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-st-paul', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-west-end', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-st-paul', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-west-end', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-west-end': {
    ciudad: 'Dallas',
    nombre: 'West End',
    lineas: ['Red', 'Blue', 'Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-akard', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-akard', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-union-station', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-union-station', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-akard', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-union-station', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-akard', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-victory', tiempo: 3, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  // Shared stations (Red, Blue, TRE, Streetcar)
  'dallas-union-station': {
    ciudad: 'Dallas',
    nombre: 'Union Station',
    lineas: ['Red', 'Blue', 'TRE', 'Streetcar'],
    adyacentes: [
      { slug: 'dallas-west-end', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-convention-center', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-west-end', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-convention-center', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-victory', tiempo: 8, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-greenbriar', tiempo: 3, linea: 'Streetcar', tipo: 'streetcar' },
    ],
  },

  'dallas-convention-center': {
    ciudad: 'Dallas',
    nombre: 'Convention Center',
    lineas: ['Red', 'Blue'],
    adyacentes: [
      { slug: 'dallas-union-station', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-cedars', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-union-station', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-cedars', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-cedars': {
    ciudad: 'Dallas',
    nombre: 'Cedars',
    lineas: ['Red', 'Blue'],
    adyacentes: [
      { slug: 'dallas-convention-center', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-8th-corinth', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-convention-center', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-8th-corinth', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-8th-corinth': {
    ciudad: 'Dallas',
    nombre: '8th & Corinth',
    lineas: ['Red', 'Blue'],
    adyacentes: [
      { slug: 'dallas-cedars', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-dallas-zoo', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-cedars', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-morrell', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-dallas-zoo': {
    ciudad: 'Dallas',
    nombre: 'Dallas Zoo',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dallas-8th-corinth', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-tyler-vernon', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-tyler-vernon': {
    ciudad: 'Dallas',
    nombre: 'Tyler/Vernon',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dallas-dallas-zoo', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-hampton', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-hampton': {
    ciudad: 'Dallas',
    nombre: 'Hampton',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dallas-tyler-vernon', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
      { slug: 'dallas-westmoreland', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-westmoreland': {
    ciudad: 'Dallas',
    nombre: 'Westmoreland',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dallas-hampton', tiempo: 2, linea: 'Red', tipo: 'dart-light-rail' },
    ],
  },

  // ============================================================================
  // BLUE LINE (23 stations, Downtown Rowlett → UNT Dallas)
  // ============================================================================

  'dallas-downtown-rowlett': {
    ciudad: 'Rowlett',
    nombre: 'Downtown Rowlett',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-downtown-garland', tiempo: 3, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-downtown-garland': {
    ciudad: 'Garland',
    nombre: 'Downtown Garland',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-downtown-rowlett', tiempo: 3, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-forest-jupiter', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-forest-jupiter': {
    ciudad: 'Garland',
    nombre: 'Forest/Jupiter',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-downtown-garland', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-lbj-skillman', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-lbj-skillman': {
    ciudad: 'Dallas',
    nombre: 'LBJ/Skillman',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-forest-jupiter', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-lake-highlands', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-lake-highlands': {
    ciudad: 'Dallas',
    nombre: 'Lake Highlands',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-lbj-skillman', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-white-rock', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-white-rock': {
    ciudad: 'Dallas',
    nombre: 'White Rock',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-lake-highlands', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-smu-mockingbird', tiempo: 3, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-morrell': {
    ciudad: 'Dallas',
    nombre: 'Morrell',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-8th-corinth', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-illinois', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-illinois': {
    ciudad: 'Dallas',
    nombre: 'Illinois',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-morrell', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-kiest', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-kiest': {
    ciudad: 'Dallas',
    nombre: 'Kiest',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-illinois', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-va-medical-center', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-va-medical-center': {
    ciudad: 'Dallas',
    nombre: 'VA Medical Center',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-kiest', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-ledbetter', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-ledbetter': {
    ciudad: 'Dallas',
    nombre: 'Ledbetter',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-va-medical-center', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-camp-wisdom', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-camp-wisdom': {
    ciudad: 'Dallas',
    nombre: 'Camp Wisdom',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-ledbetter', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
      { slug: 'dallas-unt-dallas', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-unt-dallas': {
    ciudad: 'Dallas',
    nombre: 'UNT Dallas',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'dallas-camp-wisdom', tiempo: 2, linea: 'Blue', tipo: 'dart-light-rail' },
    ],
  },

  // ============================================================================
  // GREEN LINE (24 stations, Buckner → North Carrollton/Frankford)
  // ============================================================================

  'dallas-buckner': {
    ciudad: 'Dallas',
    nombre: 'Buckner',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-lake-june', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-lake-june': {
    ciudad: 'Dallas',
    nombre: 'Lake June',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-buckner', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-lawnview', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-lawnview': {
    ciudad: 'Dallas',
    nombre: 'Lawnview',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-lake-june', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-hatcher', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-hatcher': {
    ciudad: 'Dallas',
    nombre: 'Hatcher',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-lawnview', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-mlk-jr', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-mlk-jr': {
    ciudad: 'Dallas',
    nombre: 'MLK Jr.',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-hatcher', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-fair-park', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-fair-park': {
    ciudad: 'Dallas',
    nombre: 'Fair Park',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-mlk-jr', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-baylor-university-medical', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-baylor-university-medical': {
    ciudad: 'Dallas',
    nombre: 'Baylor University Medical Center',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-fair-park', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-deep-ellum', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-deep-ellum': {
    ciudad: 'Dallas',
    nombre: 'Deep Ellum',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-baylor-university-medical', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-pearl-arts-district', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  // Green continues from pearl-arts-district (shared)
  // After west-end, Green goes to victory (while Orange also goes to victory but then to Market Center)

  'dallas-victory': {
    ciudad: 'Dallas',
    nombre: 'Victory',
    lineas: ['Green', 'Orange', 'TRE'],
    adyacentes: [
      { slug: 'dallas-west-end', tiempo: 3, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-market-center', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-west-end', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-market-center', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-union-station', tiempo: 8, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-tre-medical-market-center', tiempo: 2, linea: 'TRE', tipo: 'tre' },
    ],
  },

  'dallas-market-center': {
    ciudad: 'Dallas',
    nombre: 'Market Center',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-victory', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-southwestern-medical', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-victory', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-southwestern-medical', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-southwestern-medical': {
    ciudad: 'Dallas',
    nombre: 'Southwestern Medical District/Parkland',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-market-center', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-inwood-love-field', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-market-center', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-inwood-love-field', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-inwood-love-field': {
    ciudad: 'Dallas',
    nombre: 'Inwood/Love Field',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-southwestern-medical', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-burbank', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-southwestern-medical', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-burbank', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-burbank': {
    ciudad: 'Dallas',
    nombre: 'Burbank',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-inwood-love-field', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-bachman', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-inwood-love-field', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-bachman', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-bachman': {
    ciudad: 'Dallas',
    nombre: 'Bachman',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'dallas-burbank', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-walnut-hill-denton', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-burbank', tiempo: 2, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-university-of-dallas', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  // After Bachman, Green and Orange split:
  // Green goes to Walnut Hill/Denton → Royal Lane → ... → North Carrollton/Frankford
  // Orange goes to University of Dallas → ... → DFW Airport Terminal A

  'dallas-walnut-hill-denton': {
    ciudad: 'Dallas',
    nombre: 'Walnut Hill/Denton',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-bachman', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-royal-lane', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-royal-lane': {
    ciudad: 'Dallas',
    nombre: 'Royal Lane',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-walnut-hill-denton', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-farmers-branch', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-farmers-branch': {
    ciudad: 'Farmers Branch',
    nombre: 'Farmers Branch',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-royal-lane', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-downtown-carrollton', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-downtown-carrollton': {
    ciudad: 'Carrollton',
    nombre: 'Downtown Carrollton',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-farmers-branch', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-trinity-mills', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-trinity-mills': {
    ciudad: 'Carrollton',
    nombre: 'Trinity Mills',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-downtown-carrollton', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
      { slug: 'dallas-north-carrollton-frankford', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-north-carrollton-frankford': {
    ciudad: 'Carrollton',
    nombre: 'North Carrollton/Frankford',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dallas-trinity-mills', tiempo: 2, linea: 'Green', tipo: 'dart-light-rail' },
    ],
  },

  // ============================================================================
  // ORANGE LINE (31 stations)
  // Shares Red from Parker Road → Lovers Lane (12 stations)
  // Shares downtown from Pearl/Arts District → West End with Red, Blue, Green
  // Shares Victory → Bachman with Green
  // Then unique Irving segment: University of Dallas → DFW Airport Terminal A
  // ============================================================================

  'dallas-university-of-dallas': {
    ciudad: 'Irving',
    nombre: 'University of Dallas',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dallas-bachman', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-las-colinas-urban-center', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-las-colinas-urban-center': {
    ciudad: 'Irving',
    nombre: 'Las Colinas Urban Center',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dallas-university-of-dallas', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-irving-convention-center', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-irving-convention-center': {
    ciudad: 'Irving',
    nombre: 'Irving Convention Center',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dallas-las-colinas-urban-center', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-hidden-ridge', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-hidden-ridge': {
    ciudad: 'Irving',
    nombre: 'Hidden Ridge',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dallas-irving-convention-center', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-dallas-college-north-lake', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-dallas-college-north-lake': {
    ciudad: 'Irving',
    nombre: 'Dallas College North Lake Campus',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dallas-hidden-ridge', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-belt-line', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-belt-line': {
    ciudad: 'Irving',
    nombre: 'Belt Line',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dallas-dallas-college-north-lake', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
      { slug: 'dallas-dfw-airport-terminal-a', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  'dallas-dfw-airport-terminal-a': {
    ciudad: 'DFW',
    nombre: 'DFW Airport Terminal A',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'dallas-belt-line', tiempo: 3, linea: 'Orange', tipo: 'dart-light-rail' },
    ],
  },

  // ============================================================================
  // TRE (Texas Regional Express, 10 stations)
  // Union Station → Victory → Medical/Market Center → DFW/Fort Worth area
  // ============================================================================

  'dallas-tre-medical-market-center': {
    ciudad: 'Dallas',
    nombre: 'Medical/Market Center',
    lineas: ['TRE'],
    adyacentes: [
      { slug: 'dallas-victory', tiempo: 2, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-downtown-irving-heritage', tiempo: 7, linea: 'TRE', tipo: 'tre' },
    ],
  },

  'dallas-downtown-irving-heritage': {
    ciudad: 'Irving',
    nombre: 'Downtown Irving/Heritage Crossing',
    lineas: ['TRE'],
    adyacentes: [
      { slug: 'dallas-tre-medical-market-center', tiempo: 7, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-west-irving', tiempo: 5, linea: 'TRE', tipo: 'tre' },
    ],
  },

  'dallas-west-irving': {
    ciudad: 'Irving',
    nombre: 'West Irving',
    lineas: ['TRE'],
    adyacentes: [
      { slug: 'dallas-downtown-irving-heritage', tiempo: 5, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-centreport-dfw', tiempo: 8, linea: 'TRE', tipo: 'tre' },
    ],
  },

  'dallas-centreport-dfw': {
    ciudad: 'Fort Worth',
    nombre: 'CentrePort/DFW Airport',
    lineas: ['TRE'],
    adyacentes: [
      { slug: 'dallas-west-irving', tiempo: 8, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-bell-station', tiempo: 8, linea: 'TRE', tipo: 'tre' },
    ],
  },

  'dallas-bell-station': {
    ciudad: 'Hurst',
    nombre: 'Bell Station',
    lineas: ['TRE'],
    adyacentes: [
      { slug: 'dallas-centreport-dfw', tiempo: 8, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-trinity-lakes', tiempo: 10, linea: 'TRE', tipo: 'tre' },
    ],
  },

  'dallas-trinity-lakes': {
    ciudad: 'Fort Worth',
    nombre: 'Trinity Lakes',
    lineas: ['TRE'],
    adyacentes: [
      { slug: 'dallas-bell-station', tiempo: 10, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-fort-worth-central-station', tiempo: 8, linea: 'TRE', tipo: 'tre' },
    ],
  },

  'dallas-fort-worth-central-station': {
    ciudad: 'Fort Worth',
    nombre: 'Fort Worth Central Station',
    lineas: ['TRE'],
    adyacentes: [
      { slug: 'dallas-trinity-lakes', tiempo: 8, linea: 'TRE', tipo: 'tre' },
      { slug: 'dallas-tp-station', tiempo: 5, linea: 'TRE', tipo: 'tre' },
    ],
  },

  'dallas-tp-station': {
    ciudad: 'Fort Worth',
    nombre: 'T&P Station',
    lineas: ['TRE'],
    adyacentes: [
      { slug: 'dallas-fort-worth-central-station', tiempo: 5, linea: 'TRE', tipo: 'tre' },
    ],
  },

  // ============================================================================
  // DALLAS STREETCAR (6 stops, Union Station → Bishop Arts)
  // ============================================================================

  'dallas-greenbriar': {
    ciudad: 'Dallas',
    nombre: 'Greenbriar',
    lineas: ['Streetcar'],
    adyacentes: [
      { slug: 'dallas-union-station', tiempo: 3, linea: 'Streetcar', tipo: 'streetcar' },
      { slug: 'dallas-oakenwald', tiempo: 4, linea: 'Streetcar', tipo: 'streetcar' },
    ],
  },

  'dallas-oakenwald': {
    ciudad: 'Dallas',
    nombre: 'Oakenwald',
    lineas: ['Streetcar'],
    adyacentes: [
      { slug: 'dallas-greenbriar', tiempo: 4, linea: 'Streetcar', tipo: 'streetcar' },
      { slug: 'dallas-beckley', tiempo: 4, linea: 'Streetcar', tipo: 'streetcar' },
    ],
  },

  'dallas-beckley': {
    ciudad: 'Dallas',
    nombre: 'Beckley',
    lineas: ['Streetcar'],
    adyacentes: [
      { slug: 'dallas-oakenwald', tiempo: 4, linea: 'Streetcar', tipo: 'streetcar' },
      { slug: 'dallas-6th-street', tiempo: 4, linea: 'Streetcar', tipo: 'streetcar' },
    ],
  },

  'dallas-6th-street': {
    ciudad: 'Dallas',
    nombre: '6th Street',
    lineas: ['Streetcar'],
    adyacentes: [
      { slug: 'dallas-beckley', tiempo: 4, linea: 'Streetcar', tipo: 'streetcar' },
      { slug: 'dallas-bishop-arts', tiempo: 3, linea: 'Streetcar', tipo: 'streetcar' },
    ],
  },

  'dallas-bishop-arts': {
    ciudad: 'Dallas',
    nombre: 'Bishop Arts',
    lineas: ['Streetcar'],
    adyacentes: [
      { slug: 'dallas-6th-street', tiempo: 3, linea: 'Streetcar', tipo: 'streetcar' },
    ],
  },
};
