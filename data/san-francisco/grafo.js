/**
 * GRAFO DE TRANSPORTE - SAN FRANCISCO BAY AREA
 * 
 * Grafo BFS para MetroGuia.mx - Plataforma de pathfinding de movilidad urbana
 * 
 * ESTADÍSTICAS:
 * - Total de nodos: 111
 * - Sistemas cubiertos: BART (50), Muni Metro (25), Caltrain (30), Cable Car (6)
 * - Transferencias inter-sistema (transbordo): 11
 * 
 * ESTRUCTURA DE NODOS:
 * Cada nodo contiene:
 * - ciudad: Código de ciudad ('sf', 'oakland', etc)
 * - nombre: Nombre legible de la estación
 * - lineas: Array de líneas que sirven la estación
 * - adyacentes: Array de conexiones directas
 *   - slug: ID único de estación destino
 *   - tiempo: Minutos entre estaciones (incluye transbordo si aplica)
 *   - linea: Nombre/número de la línea usada
 *   - tipo: 'bart' | 'muni' | 'caltrain' | 'cable-car' | 'transbordo'
 * 
 * CONVENCIONES DE SLUG:
 * - BART: "bart-{name-en-kebab}"
 * - Muni Metro: "sf-muni-{name-en-kebab}"
 * - Caltrain: "caltrain-{name-en-kebab}"
 * - Cable Car: "cable-{route-name-en-kebab}"
 * 
 * REGLA CRÍTICA: TODAS las conexiones son BIDIRECCIONALES
 * Si existe A→B, DEBE existir B→A con mismo tiempo de tránsito
 */

export const grafoSF = {
  // ============================================================================
  // BART STATIONS (50 nodos)
  // ============================================================================
  
  // Market Street Trunk (shared by Red, Yellow, Green, Blue)
  'bart-embarcadero': {
    ciudad: 'sf',
    nombre: 'Embarcadero',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-montgomery', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-west-oakland', tiempo: 8, linea: 'Red', tipo: 'bart' },
      { slug: 'sf-muni-embarcadero', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
      { slug: 'cable-california-market', tiempo: 5, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'bart-montgomery': {
    ciudad: 'sf',
    nombre: 'Montgomery St',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-embarcadero', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-powell', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'sf-muni-montgomery', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'bart-powell': {
    ciudad: 'sf',
    nombre: 'Powell St',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-montgomery', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-civic-center', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'sf-muni-powell', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
      { slug: 'cable-powell-market', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'bart-civic-center': {
    ciudad: 'sf',
    nombre: 'Civic Center',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-powell', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-16th-st-mission', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'sf-muni-civic-center', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'bart-16th-st-mission': {
    ciudad: 'sf',
    nombre: '16th St Mission',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-civic-center', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-24th-st-mission', tiempo: 3, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-24th-st-mission': {
    ciudad: 'sf',
    nombre: '24th St Mission',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-16th-st-mission', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-glen-park', tiempo: 2, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-glen-park': {
    ciudad: 'sf',
    nombre: 'Glen Park',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-24th-st-mission', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-balboa-park', tiempo: 3, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-balboa-park': {
    ciudad: 'sf',
    nombre: 'Balboa Park',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-glen-park', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-daly-city', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'sf-muni-balboa-park', tiempo: 5, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'bart-daly-city': {
    ciudad: 'sf',
    nombre: 'Daly City',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-balboa-park', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-colma', tiempo: 4, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  // South Peninsula Branch (Red/Yellow)
  'bart-colma': {
    ciudad: 'sf',
    nombre: 'Colma',
    lineas: ['Red', 'Yellow'],
    adyacentes: [
      { slug: 'bart-daly-city', tiempo: 4, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-south-sf', tiempo: 4, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-south-sf': {
    ciudad: 'sf',
    nombre: 'South San Francisco',
    lineas: ['Red', 'Yellow'],
    adyacentes: [
      { slug: 'bart-colma', tiempo: 4, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-san-bruno', tiempo: 4, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-san-bruno': {
    ciudad: 'sf',
    nombre: 'San Bruno',
    lineas: ['Red', 'Yellow'],
    adyacentes: [
      { slug: 'bart-south-sf', tiempo: 4, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-sfo-airport', tiempo: 5, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-sfo-airport': {
    ciudad: 'sf',
    nombre: 'SFO Airport',
    lineas: ['Red', 'Yellow'],
    adyacentes: [
      { slug: 'bart-san-bruno', tiempo: 5, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-millbrae', tiempo: 5, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-millbrae': {
    ciudad: 'sf',
    nombre: 'Millbrae',
    lineas: ['Red', 'Yellow'],
    adyacentes: [
      { slug: 'bart-sfo-airport', tiempo: 5, linea: 'Red', tipo: 'bart' },
      { slug: 'caltrain-millbrae', tiempo: 5, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  // Transbay Tube
  'bart-west-oakland': {
    ciudad: 'oakland',
    nombre: 'West Oakland',
    lineas: ['Red', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-embarcadero', tiempo: 8, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-12th-st-oakland', tiempo: 5, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  // Oakland Trunk (Red, Orange, Yellow share)
  'bart-richmond': {
    ciudad: 'richmond',
    nombre: 'Richmond',
    lineas: ['Red', 'Orange', 'Yellow'],
    adyacentes: [
      { slug: 'bart-el-cerrito-del-norte', tiempo: 4, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-el-cerrito-del-norte': {
    ciudad: 'elcerrito',
    nombre: 'El Cerrito del Norte',
    lineas: ['Red', 'Orange', 'Yellow'],
    adyacentes: [
      { slug: 'bart-richmond', tiempo: 4, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-el-cerrito-plaza', tiempo: 3, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-el-cerrito-plaza': {
    ciudad: 'elcerrito',
    nombre: 'El Cerrito Plaza',
    lineas: ['Red', 'Orange', 'Yellow'],
    adyacentes: [
      { slug: 'bart-el-cerrito-del-norte', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-north-berkeley', tiempo: 3, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-north-berkeley': {
    ciudad: 'berkeley',
    nombre: 'North Berkeley',
    lineas: ['Red', 'Orange', 'Yellow'],
    adyacentes: [
      { slug: 'bart-el-cerrito-plaza', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-downtown-berkeley', tiempo: 3, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-downtown-berkeley': {
    ciudad: 'berkeley',
    nombre: 'Downtown Berkeley',
    lineas: ['Red', 'Orange', 'Yellow'],
    adyacentes: [
      { slug: 'bart-north-berkeley', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-ashby', tiempo: 2, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-ashby': {
    ciudad: 'berkeley',
    nombre: 'Ashby',
    lineas: ['Red', 'Orange', 'Yellow'],
    adyacentes: [
      { slug: 'bart-downtown-berkeley', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-macarthur', tiempo: 4, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-macarthur': {
    ciudad: 'oakland',
    nombre: 'MacArthur',
    lineas: ['Red', 'Orange', 'Yellow'],
    adyacentes: [
      { slug: 'bart-ashby', tiempo: 4, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-19th-st-oakland', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-rockridge', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-19th-st-oakland': {
    ciudad: 'oakland',
    nombre: '19th St Oakland',
    lineas: ['Red', 'Orange', 'Yellow'],
    adyacentes: [
      { slug: 'bart-macarthur', tiempo: 3, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-12th-st-oakland', tiempo: 2, linea: 'Red', tipo: 'bart' },
    ]
  },
  
  'bart-12th-st-oakland': {
    ciudad: 'oakland',
    nombre: '12th St Oakland City Center',
    lineas: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-19th-st-oakland', tiempo: 2, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-west-oakland', tiempo: 5, linea: 'Red', tipo: 'bart' },
      { slug: 'bart-lake-merritt', tiempo: 3, linea: 'Orange', tipo: 'bart' },
    ]
  },
  
  // Lake Merritt to Fremont (Orange, Green, Blue share parts)
  'bart-lake-merritt': {
    ciudad: 'oakland',
    nombre: 'Lake Merritt',
    lineas: ['Orange', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-12th-st-oakland', tiempo: 3, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-fruitvale', tiempo: 4, linea: 'Orange', tipo: 'bart' },
    ]
  },
  
  'bart-fruitvale': {
    ciudad: 'oakland',
    nombre: 'Fruitvale',
    lineas: ['Orange', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-lake-merritt', tiempo: 4, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-coliseum', tiempo: 3, linea: 'Orange', tipo: 'bart' },
    ]
  },
  
  'bart-coliseum': {
    ciudad: 'oakland',
    nombre: 'Coliseum',
    lineas: ['Orange', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-fruitvale', tiempo: 3, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-san-leandro', tiempo: 5, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-oakland-airport', tiempo: 8, linea: 'Beige', tipo: 'bart' },
    ]
  },
  
  'bart-oakland-airport': {
    ciudad: 'oakland',
    nombre: 'Oakland Airport',
    lineas: ['Beige'],
    adyacentes: [
      { slug: 'bart-coliseum', tiempo: 8, linea: 'Beige', tipo: 'bart' },
    ]
  },
  
  'bart-san-leandro': {
    ciudad: 'sanleandro',
    nombre: 'San Leandro',
    lineas: ['Orange', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-coliseum', tiempo: 5, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-bay-fair', tiempo: 3, linea: 'Orange', tipo: 'bart' },
    ]
  },
  
  'bart-bay-fair': {
    ciudad: 'sanleandro',
    nombre: 'Bay Fair',
    lineas: ['Orange', 'Green', 'Blue'],
    adyacentes: [
      { slug: 'bart-san-leandro', tiempo: 3, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-hayward', tiempo: 5, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-castro-valley', tiempo: 5, linea: 'Blue', tipo: 'bart' },
    ]
  },
  
  // Orange/Green continue south
  'bart-hayward': {
    ciudad: 'hayward',
    nombre: 'Hayward',
    lineas: ['Orange', 'Green'],
    adyacentes: [
      { slug: 'bart-bay-fair', tiempo: 5, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-south-hayward', tiempo: 3, linea: 'Orange', tipo: 'bart' },
    ]
  },
  
  'bart-south-hayward': {
    ciudad: 'hayward',
    nombre: 'South Hayward',
    lineas: ['Orange', 'Green'],
    adyacentes: [
      { slug: 'bart-hayward', tiempo: 3, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-union-city', tiempo: 5, linea: 'Orange', tipo: 'bart' },
    ]
  },
  
  'bart-union-city': {
    ciudad: 'unioncity',
    nombre: 'Union City',
    lineas: ['Orange', 'Green'],
    adyacentes: [
      { slug: 'bart-south-hayward', tiempo: 5, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-fremont', tiempo: 5, linea: 'Orange', tipo: 'bart' },
    ]
  },
  
  'bart-fremont': {
    ciudad: 'fremont',
    nombre: 'Fremont',
    lineas: ['Orange', 'Green'],
    adyacentes: [
      { slug: 'bart-union-city', tiempo: 5, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-warm-springs', tiempo: 4, linea: 'Orange', tipo: 'bart' },
    ]
  },
  
  'bart-warm-springs': {
    ciudad: 'fremont',
    nombre: 'Warm Springs',
    lineas: ['Orange', 'Green'],
    adyacentes: [
      { slug: 'bart-fremont', tiempo: 4, linea: 'Orange', tipo: 'bart' },
      { slug: 'bart-milpitas', tiempo: 8, linea: 'Green', tipo: 'bart' },
    ]
  },
  
  'bart-milpitas': {
    ciudad: 'milpitas',
    nombre: 'Milpitas',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'bart-warm-springs', tiempo: 8, linea: 'Green', tipo: 'bart' },
      { slug: 'bart-berryessa', tiempo: 4, linea: 'Green', tipo: 'bart' },
    ]
  },
  
  'bart-berryessa': {
    ciudad: 'sanjose',
    nombre: 'Berryessa',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'bart-milpitas', tiempo: 4, linea: 'Green', tipo: 'bart' },
    ]
  },
  
  // Blue branch from Bay Fair
  'bart-castro-valley': {
    ciudad: 'castroválley',
    nombre: 'Castro Valley',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'bart-bay-fair', tiempo: 5, linea: 'Blue', tipo: 'bart' },
      { slug: 'bart-west-dublin-pleasanton', tiempo: 8, linea: 'Blue', tipo: 'bart' },
    ]
  },
  
  'bart-west-dublin-pleasanton': {
    ciudad: 'dublin',
    nombre: 'West Dublin/Pleasanton',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'bart-castro-valley', tiempo: 8, linea: 'Blue', tipo: 'bart' },
      { slug: 'bart-dublin-pleasanton', tiempo: 3, linea: 'Blue', tipo: 'bart' },
    ]
  },
  
  'bart-dublin-pleasanton': {
    ciudad: 'pleasanton',
    nombre: 'Dublin/Pleasanton',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'bart-west-dublin-pleasanton', tiempo: 3, linea: 'Blue', tipo: 'bart' },
    ]
  },
  
  // Yellow Contra Costa branch from MacArthur
  'bart-rockridge': {
    ciudad: 'oakland',
    nombre: 'Rockridge',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-macarthur', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-orinda', tiempo: 5, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-orinda': {
    ciudad: 'orinda',
    nombre: 'Orinda',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-rockridge', tiempo: 5, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-lafayette', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-lafayette': {
    ciudad: 'lafayette',
    nombre: 'Lafayette',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-orinda', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-walnut-creek', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-walnut-creek': {
    ciudad: 'walnutcreek',
    nombre: 'Walnut Creek',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-lafayette', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-pleasant-hill', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-pleasant-hill': {
    ciudad: 'pleasanthill',
    nombre: 'Pleasant Hill',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-walnut-creek', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-concord', tiempo: 5, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-concord': {
    ciudad: 'concord',
    nombre: 'Concord',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-pleasant-hill', tiempo: 5, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-north-concord-martinez', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-north-concord-martinez': {
    ciudad: 'martinez',
    nombre: 'North Concord/Martinez',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-concord', tiempo: 4, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-pittsburg-bay-point', tiempo: 5, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-pittsburg-bay-point': {
    ciudad: 'pittsburg',
    nombre: 'Pittsburg/Bay Point',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-north-concord-martinez', tiempo: 5, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-pittsburg-center', tiempo: 6, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-pittsburg-center': {
    ciudad: 'pittsburg',
    nombre: 'Pittsburg Center',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-pittsburg-bay-point', tiempo: 6, linea: 'Yellow', tipo: 'bart' },
      { slug: 'bart-antioch', tiempo: 6, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  'bart-antioch': {
    ciudad: 'antioch',
    nombre: 'Antioch',
    lineas: ['Yellow'],
    adyacentes: [
      { slug: 'bart-pittsburg-center', tiempo: 6, linea: 'Yellow', tipo: 'bart' },
    ]
  },
  
  // ============================================================================
  // MUNI METRO STATIONS (25 nodos)
  // ============================================================================
  
  // Market Street subway (JKLMN)
  'sf-muni-embarcadero': {
    ciudad: 'sf',
    nombre: 'Embarcadero',
    lineas: ['J', 'K', 'L', 'M', 'N'],
    adyacentes: [
      { slug: 'sf-muni-montgomery', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'bart-embarcadero', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
      { slug: 'cable-california-market', tiempo: 5, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'sf-muni-montgomery': {
    ciudad: 'sf',
    nombre: 'Montgomery',
    lineas: ['J', 'K', 'L', 'M', 'N'],
    adyacentes: [
      { slug: 'sf-muni-embarcadero', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'sf-muni-powell', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'bart-montgomery', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'sf-muni-powell': {
    ciudad: 'sf',
    nombre: 'Powell',
    lineas: ['J', 'K', 'L', 'M', 'N'],
    adyacentes: [
      { slug: 'sf-muni-montgomery', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'sf-muni-civic-center', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'bart-powell', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
      { slug: 'cable-powell-market', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'sf-muni-civic-center': {
    ciudad: 'sf',
    nombre: 'Civic Center',
    lineas: ['J', 'K', 'L', 'M', 'N'],
    adyacentes: [
      { slug: 'sf-muni-powell', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'sf-muni-van-ness', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'bart-civic-center', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'sf-muni-van-ness': {
    ciudad: 'sf',
    nombre: 'Van Ness',
    lineas: ['J', 'K', 'L', 'M', 'N'],
    adyacentes: [
      { slug: 'sf-muni-civic-center', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'sf-muni-church', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
    ]
  },
  
  'sf-muni-church': {
    ciudad: 'sf',
    nombre: 'Church',
    lineas: ['J', 'K', 'L', 'M', 'N'],
    adyacentes: [
      { slug: 'sf-muni-van-ness', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'sf-muni-duboce-church', tiempo: 2, linea: 'JKLMN', tipo: 'muni' },
      { slug: 'sf-muni-castro', tiempo: 2, linea: 'KLM', tipo: 'muni' },
    ]
  },
  
  // J branch from Church
  'sf-muni-duboce-church': {
    ciudad: 'sf',
    nombre: 'Duboce & Church',
    lineas: ['J', 'N'],
    adyacentes: [
      { slug: 'sf-muni-church', tiempo: 2, linea: 'J', tipo: 'muni' },
      { slug: 'sf-muni-church-18th', tiempo: 3, linea: 'J', tipo: 'muni' },
      { slug: 'sf-muni-carl-cole', tiempo: 3, linea: 'N', tipo: 'muni' },
    ]
  },
  
  'sf-muni-church-18th': {
    ciudad: 'sf',
    nombre: 'Church & 18th',
    lineas: ['J'],
    adyacentes: [
      { slug: 'sf-muni-duboce-church', tiempo: 3, linea: 'J', tipo: 'muni' },
      { slug: 'sf-muni-church-24th', tiempo: 3, linea: 'J', tipo: 'muni' },
    ]
  },
  
  'sf-muni-church-24th': {
    ciudad: 'sf',
    nombre: 'Church & 24th',
    lineas: ['J'],
    adyacentes: [
      { slug: 'sf-muni-church-18th', tiempo: 3, linea: 'J', tipo: 'muni' },
      { slug: 'sf-muni-church-30th', tiempo: 3, linea: 'J', tipo: 'muni' },
    ]
  },
  
  'sf-muni-church-30th': {
    ciudad: 'sf',
    nombre: 'Church & 30th',
    lineas: ['J'],
    adyacentes: [
      { slug: 'sf-muni-church-24th', tiempo: 3, linea: 'J', tipo: 'muni' },
      { slug: 'sf-muni-balboa-park', tiempo: 5, linea: 'J', tipo: 'muni' },
    ]
  },
  
  'sf-muni-balboa-park': {
    ciudad: 'sf',
    nombre: 'Balboa Park',
    lineas: ['J', 'K'],
    adyacentes: [
      { slug: 'sf-muni-church-30th', tiempo: 5, linea: 'J', tipo: 'muni' },
      { slug: 'sf-muni-st-francis', tiempo: 3, linea: 'K', tipo: 'muni' },
      { slug: 'bart-balboa-park', tiempo: 5, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  // K/L/M branch from Church
  'sf-muni-castro': {
    ciudad: 'sf',
    nombre: 'Castro',
    lineas: ['K', 'L', 'M'],
    adyacentes: [
      { slug: 'sf-muni-church', tiempo: 2, linea: 'KLM', tipo: 'muni' },
      { slug: 'sf-muni-forest-hill', tiempo: 3, linea: 'KLM', tipo: 'muni' },
    ]
  },
  
  'sf-muni-forest-hill': {
    ciudad: 'sf',
    nombre: 'Forest Hill',
    lineas: ['K', 'L', 'M'],
    adyacentes: [
      { slug: 'sf-muni-castro', tiempo: 3, linea: 'KLM', tipo: 'muni' },
      { slug: 'sf-muni-west-portal', tiempo: 3, linea: 'KLM', tipo: 'muni' },
    ]
  },
  
  'sf-muni-west-portal': {
    ciudad: 'sf',
    nombre: 'West Portal',
    lineas: ['K', 'L', 'M'],
    adyacentes: [
      { slug: 'sf-muni-forest-hill', tiempo: 3, linea: 'KLM', tipo: 'muni' },
      { slug: 'sf-muni-st-francis', tiempo: 3, linea: 'K', tipo: 'muni' },
      { slug: 'sf-muni-taraval-46th', tiempo: 15, linea: 'L', tipo: 'muni' },
    ]
  },
  
  // K branch continuation from West Portal
  'sf-muni-st-francis': {
    ciudad: 'sf',
    nombre: 'St. Francis Wood',
    lineas: ['K'],
    adyacentes: [
      { slug: 'sf-muni-west-portal', tiempo: 3, linea: 'K', tipo: 'muni' },
      { slug: 'sf-muni-city-college', tiempo: 5, linea: 'K', tipo: 'muni' },
    ]
  },
  
  'sf-muni-city-college': {
    ciudad: 'sf',
    nombre: 'City College',
    lineas: ['K'],
    adyacentes: [
      { slug: 'sf-muni-st-francis', tiempo: 5, linea: 'K', tipo: 'muni' },
      { slug: 'sf-muni-balboa-park', tiempo: 3, linea: 'K', tipo: 'muni' },
    ]
  },
  
  // L branch from West Portal
  'sf-muni-taraval-46th': {
    ciudad: 'sf',
    nombre: 'Taraval & 46th',
    lineas: ['L'],
    adyacentes: [
      { slug: 'sf-muni-west-portal', tiempo: 15, linea: 'L', tipo: 'muni' },
    ]
  },
  
  // N branch from Church
  'sf-muni-carl-cole': {
    ciudad: 'sf',
    nombre: 'Carl & Cole',
    lineas: ['N'],
    adyacentes: [
      { slug: 'sf-muni-duboce-church', tiempo: 3, linea: 'N', tipo: 'muni' },
      { slug: 'sf-muni-ucsf-parnassus', tiempo: 3, linea: 'N', tipo: 'muni' },
    ]
  },
  
  'sf-muni-ucsf-parnassus': {
    ciudad: 'sf',
    nombre: 'UCSF Parnassus',
    lineas: ['N'],
    adyacentes: [
      { slug: 'sf-muni-carl-cole', tiempo: 3, linea: 'N', tipo: 'muni' },
      { slug: 'sf-muni-judah-9th', tiempo: 3, linea: 'N', tipo: 'muni' },
    ]
  },
  
  'sf-muni-judah-9th': {
    ciudad: 'sf',
    nombre: 'Judah & 9th',
    lineas: ['N'],
    adyacentes: [
      { slug: 'sf-muni-ucsf-parnassus', tiempo: 3, linea: 'N', tipo: 'muni' },
      { slug: 'sf-muni-judah-19th', tiempo: 5, linea: 'N', tipo: 'muni' },
    ]
  },
  
  'sf-muni-judah-19th': {
    ciudad: 'sf',
    nombre: 'Judah & 19th',
    lineas: ['N'],
    adyacentes: [
      { slug: 'sf-muni-judah-9th', tiempo: 5, linea: 'N', tipo: 'muni' },
      { slug: 'sf-muni-ocean-beach', tiempo: 8, linea: 'N', tipo: 'muni' },
    ]
  },
  
  'sf-muni-ocean-beach': {
    ciudad: 'sf',
    nombre: 'Ocean Beach',
    lineas: ['N'],
    adyacentes: [
      { slug: 'sf-muni-judah-19th', tiempo: 8, linea: 'N', tipo: 'muni' },
    ]
  },
  
  // T-Third Street line
  'sf-muni-chinatown': {
    ciudad: 'sf',
    nombre: 'Chinatown',
    lineas: ['T'],
    adyacentes: [
      { slug: 'sf-muni-union-square', tiempo: 3, linea: 'T', tipo: 'muni' },
    ]
  },
  
  'sf-muni-union-square': {
    ciudad: 'sf',
    nombre: 'Union Square',
    lineas: ['T'],
    adyacentes: [
      { slug: 'sf-muni-chinatown', tiempo: 3, linea: 'T', tipo: 'muni' },
      { slug: 'sf-muni-yerba-buena', tiempo: 2, linea: 'T', tipo: 'muni' },
    ]
  },
  
  'sf-muni-yerba-buena': {
    ciudad: 'sf',
    nombre: 'Yerba Buena',
    lineas: ['T'],
    adyacentes: [
      { slug: 'sf-muni-union-square', tiempo: 2, linea: 'T', tipo: 'muni' },
      { slug: 'sf-muni-4th-brannan', tiempo: 2, linea: 'T', tipo: 'muni' },
    ]
  },
  
  'sf-muni-4th-brannan': {
    ciudad: 'sf',
    nombre: '4th & Brannan',
    lineas: ['T'],
    adyacentes: [
      { slug: 'sf-muni-yerba-buena', tiempo: 2, linea: 'T', tipo: 'muni' },
      { slug: 'sf-muni-4th-king', tiempo: 2, linea: 'T', tipo: 'muni' },
    ]
  },
  
  'sf-muni-4th-king': {
    ciudad: 'sf',
    nombre: '4th & King',
    lineas: ['N', 'T'],
    adyacentes: [
      { slug: 'sf-muni-4th-brannan', tiempo: 2, linea: 'T', tipo: 'muni' },
      { slug: 'sf-muni-ucsf-mission-bay', tiempo: 3, linea: 'T', tipo: 'muni' },
      { slug: 'caltrain-sf', tiempo: 2, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'sf-muni-ucsf-mission-bay': {
    ciudad: 'sf',
    nombre: 'UCSF Mission Bay',
    lineas: ['T'],
    adyacentes: [
      { slug: 'sf-muni-4th-king', tiempo: 3, linea: 'T', tipo: 'muni' },
      { slug: 'sf-muni-3rd-mariposa', tiempo: 3, linea: 'T', tipo: 'muni' },
    ]
  },
  
  'sf-muni-3rd-mariposa': {
    ciudad: 'sf',
    nombre: '3rd & Mariposa',
    lineas: ['T'],
    adyacentes: [
      { slug: 'sf-muni-ucsf-mission-bay', tiempo: 3, linea: 'T', tipo: 'muni' },
      { slug: 'sf-muni-3rd-20th', tiempo: 3, linea: 'T', tipo: 'muni' },
    ]
  },
  
  'sf-muni-3rd-20th': {
    ciudad: 'sf',
    nombre: '3rd & 20th',
    lineas: ['T'],
    adyacentes: [
      { slug: 'sf-muni-3rd-mariposa', tiempo: 3, linea: 'T', tipo: 'muni' },
      { slug: 'sf-muni-bayshore-sunnydale', tiempo: 10, linea: 'T', tipo: 'muni' },
    ]
  },
  
  'sf-muni-bayshore-sunnydale': {
    ciudad: 'sf',
    nombre: 'Bayshore/Sunnydale',
    lineas: ['T'],
    adyacentes: [
      { slug: 'sf-muni-3rd-20th', tiempo: 10, linea: 'T', tipo: 'muni' },
    ]
  },
  
  // ============================================================================
  // CALTRAIN STATIONS (30 nodos)
  // ============================================================================
  
  'caltrain-sf': {
    ciudad: 'sf',
    nombre: 'San Francisco',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-22nd-st', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'sf-muni-4th-king', tiempo: 2, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'caltrain-22nd-st': {
    ciudad: 'sf',
    nombre: '22nd St',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-sf', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-bayshore', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-bayshore': {
    ciudad: 'sf',
    nombre: 'Bayshore',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-22nd-st', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-south-sf', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-south-sf': {
    ciudad: 'southsf',
    nombre: 'South San Francisco',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-bayshore', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-san-bruno', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-san-bruno': {
    ciudad: 'sanbruno',
    nombre: 'San Bruno',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-south-sf', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-millbrae', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-millbrae': {
    ciudad: 'millbrae',
    nombre: 'Millbrae',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-san-bruno', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-broadway', tiempo: 3, linea: 'Limited', tipo: 'caltrain' },
      { slug: 'bart-millbrae', tiempo: 5, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'caltrain-broadway': {
    ciudad: 'burlingame',
    nombre: 'Broadway',
    lineas: ['Limited'],
    adyacentes: [
      { slug: 'caltrain-millbrae', tiempo: 3, linea: 'Limited', tipo: 'caltrain' },
      { slug: 'caltrain-burlingame', tiempo: 3, linea: 'Limited', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-burlingame': {
    ciudad: 'burlingame',
    nombre: 'Burlingame',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-broadway', tiempo: 3, linea: 'Limited', tipo: 'caltrain' },
      { slug: 'caltrain-san-mateo', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-san-mateo': {
    ciudad: 'sanmateo',
    nombre: 'San Mateo',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-burlingame', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-hayward-park', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-hayward-park': {
    ciudad: 'sanmateo',
    nombre: 'Hayward Park',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-san-mateo', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-hillsdale', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-hillsdale': {
    ciudad: 'sanmateo',
    nombre: 'Hillsdale',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-hayward-park', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-belmont', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-belmont': {
    ciudad: 'sanmateo',
    nombre: 'Belmont',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-hillsdale', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-san-carlos', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-san-carlos': {
    ciudad: 'sancarlos',
    nombre: 'San Carlos',
    lineas: ['Local', 'Limited'],
    adyacentes: [
      { slug: 'caltrain-belmont', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-redwood-city', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-redwood-city': {
    ciudad: 'redwoodcity',
    nombre: 'Redwood City',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-san-carlos', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-menlo-park', tiempo: 3, linea: 'Limited', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-menlo-park': {
    ciudad: 'menlopark',
    nombre: 'Menlo Park',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-redwood-city', tiempo: 3, linea: 'Limited', tipo: 'caltrain' },
      { slug: 'caltrain-palo-alto', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-palo-alto': {
    ciudad: 'paloalto',
    nombre: 'Palo Alto',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-menlo-park', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-california-ave', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-california-ave': {
    ciudad: 'paloalto',
    nombre: 'California Ave',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-palo-alto', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-san-antonio', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-san-antonio': {
    ciudad: 'mountainview',
    nombre: 'San Antonio',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-california-ave', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-mountain-view', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-mountain-view': {
    ciudad: 'mountainview',
    nombre: 'Mountain View',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-san-antonio', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-sunnyvale', tiempo: 4, linea: 'Limited', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-sunnyvale': {
    ciudad: 'sunnyvale',
    nombre: 'Sunnyvale',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-mountain-view', tiempo: 4, linea: 'Limited', tipo: 'caltrain' },
      { slug: 'caltrain-lawrence', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-lawrence': {
    ciudad: 'sunnyvale',
    nombre: 'Lawrence',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-sunnyvale', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-santa-clara', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-santa-clara': {
    ciudad: 'santaclara',
    nombre: 'Santa Clara',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-lawrence', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-college-park', tiempo: 3, linea: 'Limited', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-college-park': {
    ciudad: 'sanjose',
    nombre: 'College Park',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-santa-clara', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-san-jose-diridon', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-san-jose-diridon': {
    ciudad: 'sanjose',
    nombre: 'San Jose Diridon',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-college-park', tiempo: 3, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-tamien', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-tamien': {
    ciudad: 'sanjose',
    nombre: 'Tamien',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-san-jose-diridon', tiempo: 4, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-capitol', tiempo: 6, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-capitol': {
    ciudad: 'sanjose',
    nombre: 'Capitol',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-tamien', tiempo: 6, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-blossom-hill', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-blossom-hill': {
    ciudad: 'sanjose',
    nombre: 'Blossom Hill',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-capitol', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-morgan-hill', tiempo: 10, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-morgan-hill': {
    ciudad: 'morganhill',
    nombre: 'Morgan Hill',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-blossom-hill', tiempo: 10, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-san-martin', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-san-martin': {
    ciudad: 'sanmartin',
    nombre: 'San Martin',
    lineas: ['Local'],
    adyacentes: [
      { slug: 'caltrain-morgan-hill', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
      { slug: 'caltrain-gilroy', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  'caltrain-gilroy': {
    ciudad: 'gilroy',
    nombre: 'Gilroy',
    lineas: ['Local', 'Limited', 'Bullet'],
    adyacentes: [
      { slug: 'caltrain-san-martin', tiempo: 5, linea: 'Local', tipo: 'caltrain' },
    ]
  },
  
  // ============================================================================
  // CABLE CAR STATIONS (6 nodos)
  // ============================================================================
  
  'cable-powell-market': {
    ciudad: 'sf',
    nombre: 'Powell & Market',
    lineas: ['Powell-Market', 'Powell-Hyde'],
    adyacentes: [
      { slug: 'cable-nob-hill', tiempo: 8, linea: 'Powell-Market', tipo: 'cable-car' },
      { slug: 'bart-powell', tiempo: 3, linea: 'Transbordo', tipo: 'transbordo' },
      { slug: 'cable-california-market', tiempo: 2, linea: 'Cable-Car', tipo: 'cable-car' },
    ]
  },
  
  'cable-california-market': {
    ciudad: 'sf',
    nombre: 'California & Market',
    lineas: ['California Street'],
    adyacentes: [
      { slug: 'cable-california-van-ness', tiempo: 16, linea: 'California', tipo: 'cable-car' },
      { slug: 'cable-powell-market', tiempo: 2, linea: 'Cable-Car', tipo: 'cable-car' },
      { slug: 'bart-embarcadero', tiempo: 5, linea: 'Transbordo', tipo: 'transbordo' },
      { slug: 'sf-muni-embarcadero', tiempo: 5, linea: 'Transbordo', tipo: 'transbordo' },
    ]
  },
  
  'cable-california-van-ness': {
    ciudad: 'sf',
    nombre: 'California & Van Ness',
    lineas: ['California Street'],
    adyacentes: [
      { slug: 'cable-california-market', tiempo: 16, linea: 'California', tipo: 'cable-car' },
    ]
  },
  
  'cable-nob-hill': {
    ciudad: 'sf',
    nombre: 'Nob Hill',
    lineas: ['Powell-Market', 'Powell-Hyde'],
    adyacentes: [
      { slug: 'cable-powell-market', tiempo: 8, linea: 'Powell', tipo: 'cable-car' },
      { slug: 'cable-hyde-beach', tiempo: 12, linea: 'Powell-Hyde', tipo: 'cable-car' },
      { slug: 'cable-bay-taylor', tiempo: 12, linea: 'Powell-Market', tipo: 'cable-car' },
    ]
  },
  
  'cable-hyde-beach': {
    ciudad: 'sf',
    nombre: 'Hyde & Beach',
    lineas: ['Powell-Hyde'],
    adyacentes: [
      { slug: 'cable-nob-hill', tiempo: 12, linea: 'Powell-Hyde', tipo: 'cable-car' },
    ]
  },
  
  'cable-bay-taylor': {
    ciudad: 'sf',
    nombre: 'Bay & Taylor',
    lineas: ['Powell-Market'],
    adyacentes: [
      { slug: 'cable-nob-hill', tiempo: 12, linea: 'Powell-Market', tipo: 'cable-car' },
    ]
  },
};
