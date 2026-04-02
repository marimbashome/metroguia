/**
 * grafo.js - Los Angeles Metro Graph
 * Complete adjacency graph for BFS pathfinding
 * 
 * Generated automatically with all LA Metro lines:
 * A (Red), B (Red/Purple), C (Silver), D (Purple), E (Silver), K (Silver/Expo)
 */

export const grafoLA = {
  'la-103rd-street-watts-towers': {
    ciudad: 'la',
    nombre: '103rd Street/Watts Towers',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-firestone', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-willowbrook-rosa-parks', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-17th-street-smc': {
    ciudad: 'la',
    nombre: '17th Street/SMC',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-26th-street-bergamot', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-downtown-santa-monica', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-1st-street': {
    ciudad: 'la',
    nombre: '1st Street',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-5th-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-downtown-long-beach', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-26th-street-bergamot': {
    ciudad: 'la',
    nombre: '26th Street/Bergamot',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-17th-street-smc', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-expo-bundy', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-5th-street': {
    ciudad: 'la',
    nombre: '5th Street',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-1st-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-anaheim-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-7th-street-metro-center': {
    ciudad: 'la',
    nombre: '7th Street/Metro Center',
    lineas: ['A', 'B', 'D', 'E'],
    adyacentes: [
      { slug: 'la-grand-avenue-arts-bunker-hill', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-grand-avenue-arts-bunker-hill', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-pershing-square', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-pershing-square', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-pico', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-pico', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-westlake-macarthur-park', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-westlake-macarthur-park', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
  'la-allen': {
    ciudad: 'la',
    nombre: 'Allen',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-lake', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-sierra-madre-villa', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-anaheim-street': {
    ciudad: 'la',
    nombre: 'Anaheim Street',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-5th-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-pacific-coast-highway', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-apu-citrus-college': {
    ciudad: 'la',
    nombre: 'APU/Citrus College',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-azusa-downtown', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-glendora', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-arcadia': {
    ciudad: 'la',
    nombre: 'Arcadia',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-monrovia', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-sierra-madre-villa', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-artesia': {
    ciudad: 'la',
    nombre: 'Artesia',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-compton', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-del-amo', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-atlantic': {
    ciudad: 'la',
    nombre: 'Atlantic',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-east-la-civic-center', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-avalon': {
    ciudad: 'la',
    nombre: 'Avalon',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-harbor-freeway', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-willowbrook-rosa-parks', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-aviation-century': {
    ciudad: 'la',
    nombre: 'Aviation/Century',
    lineas: ['C', 'K'],
    adyacentes: [
      { slug: 'la-aviation-imperial', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-lax-metro-transit-center', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-lax-metro-transit-center', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-mariposa', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-aviation-imperial': {
    ciudad: 'la',
    nombre: 'Aviation/Imperial',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-aviation-century', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-hawthorne-lennox', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-azusa-downtown': {
    ciudad: 'la',
    nombre: 'Azusa Downtown',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-apu-citrus-college', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-irwindale', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-chinatown': {
    ciudad: 'la',
    nombre: 'Chinatown',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-lincoln-cypress', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-union-station', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-civic-center-grand-park': {
    ciudad: 'la',
    nombre: 'Civic Center/Grand Park',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: 'la-pershing-square', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-pershing-square', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-union-station', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-union-station', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
  'la-compton': {
    ciudad: 'la',
    nombre: 'Compton',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-artesia', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-willowbrook-rosa-parks', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-crenshaw': {
    ciudad: 'la',
    nombre: 'Crenshaw',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-hawthorne-lennox', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-vermont-athens', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-culver-city': {
    ciudad: 'la',
    nombre: 'Culver City',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-la-cienega-jefferson', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-palms', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-del-amo': {
    ciudad: 'la',
    nombre: 'Del Amo',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-artesia', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-wardlow', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-del-mar': {
    ciudad: 'la',
    nombre: 'Del Mar',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-fillmore', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-memorial-park', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-douglas': {
    ciudad: 'la',
    nombre: 'Douglas',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-el-segundo', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-redondo-beach', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-downtown-inglewood': {
    ciudad: 'la',
    nombre: 'Downtown Inglewood',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-fairview-heights', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-westchester-veterans', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-downtown-long-beach': {
    ciudad: 'la',
    nombre: 'Downtown Long Beach',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-1st-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-pacific-avenue', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-downtown-santa-monica': {
    ciudad: 'la',
    nombre: 'Downtown Santa Monica',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-17th-street-smc', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-duarte-city-of-hope': {
    ciudad: 'la',
    nombre: 'Duarte/City of Hope',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-irwindale', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-monrovia', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-east-la-civic-center': {
    ciudad: 'la',
    nombre: 'East LA Civic Center',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-atlantic', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-maravilla', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-el-segundo': {
    ciudad: 'la',
    nombre: 'El Segundo',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-douglas', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-mariposa', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-expo-bundy': {
    ciudad: 'la',
    nombre: 'Expo/Bundy',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-26th-street-bergamot', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-expo-sepulveda', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-expo-crenshaw': {
    ciudad: 'la',
    nombre: 'Expo/Crenshaw',
    lineas: ['E', 'K'],
    adyacentes: [
      { slug: 'la-expo-western', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-farmdale', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-martin-luther-king-jr', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-expo-la-brea': {
    ciudad: 'la',
    nombre: 'Expo/La Brea',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-farmdale', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-la-cienega-jefferson', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-expo-park-usc': {
    ciudad: 'la',
    nombre: 'Expo Park/USC',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-expo-vermont', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-jefferson-usc', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-expo-sepulveda': {
    ciudad: 'la',
    nombre: 'Expo/Sepulveda',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-expo-bundy', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-westwood-rancho-park', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-expo-vermont': {
    ciudad: 'la',
    nombre: 'Expo/Vermont',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-expo-park-usc', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-expo-western', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-expo-western': {
    ciudad: 'la',
    nombre: 'Expo/Western',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-expo-crenshaw', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-expo-vermont', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-fairview-heights': {
    ciudad: 'la',
    nombre: 'Fairview Heights',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-downtown-inglewood', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-hyde-park', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-farmdale': {
    ciudad: 'la',
    nombre: 'Farmdale',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-expo-crenshaw', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-expo-la-brea', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-fillmore': {
    ciudad: 'la',
    nombre: 'Fillmore',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-del-mar', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-south-pasadena', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-firestone': {
    ciudad: 'la',
    nombre: 'Firestone',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-103rd-street-watts-towers', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-florence', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-florence': {
    ciudad: 'la',
    nombre: 'Florence',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-firestone', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-slauson', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-glendora': {
    ciudad: 'la',
    nombre: 'Glendora',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-apu-citrus-college', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-san-dimas', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-grand-avenue-arts-bunker-hill': {
    ciudad: 'la',
    nombre: 'Grand Avenue Arts/Bunker Hill',
    lineas: ['A', 'E'],
    adyacentes: [
      { slug: 'la-7th-street-metro-center', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-7th-street-metro-center', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-historic-broadway', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-historic-broadway', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-grand-lattc': {
    ciudad: 'la',
    nombre: 'Grand/LATTC',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-pico', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-san-pedro-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-harbor-freeway': {
    ciudad: 'la',
    nombre: 'Harbor Freeway',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-avalon', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-vermont-athens', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-hawthorne-lennox': {
    ciudad: 'la',
    nombre: 'Hawthorne/Lennox',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-aviation-imperial', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-crenshaw', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-heritage-square': {
    ciudad: 'la',
    nombre: 'Heritage Square',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-lincoln-cypress', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-southwest-museum', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-highland-park': {
    ciudad: 'la',
    nombre: 'Highland Park',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-south-pasadena', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-southwest-museum', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-historic-broadway': {
    ciudad: 'la',
    nombre: 'Historic Broadway',
    lineas: ['A', 'E'],
    adyacentes: [
      { slug: 'la-grand-avenue-arts-bunker-hill', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-grand-avenue-arts-bunker-hill', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-little-tokyo-arts-district', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-little-tokyo-arts-district', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-hollywood-highland': {
    ciudad: 'la',
    nombre: 'Hollywood/Highland',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-hollywood-vine', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-universal-city-studio-city', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
    ]
  },
  'la-hollywood-vine': {
    ciudad: 'la',
    nombre: 'Hollywood/Vine',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-hollywood-highland', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-hollywood-western', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
    ]
  },
  'la-hollywood-western': {
    ciudad: 'la',
    nombre: 'Hollywood/Western',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-hollywood-vine', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-vermont-sunset', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
    ]
  },
  'la-hyde-park': {
    ciudad: 'la',
    nombre: 'Hyde Park',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-fairview-heights', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-leimert-park', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-indiana': {
    ciudad: 'la',
    nombre: 'Indiana',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-maravilla', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-soto', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-irwindale': {
    ciudad: 'la',
    nombre: 'Irwindale',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-azusa-downtown', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-duarte-city-of-hope', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-jefferson-usc': {
    ciudad: 'la',
    nombre: 'Jefferson/USC',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-expo-park-usc', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-lattc-ortho-institute', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-la-cienega-jefferson': {
    ciudad: 'la',
    nombre: 'La Cienega/Jefferson',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-culver-city', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-expo-la-brea', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-la-verne-fairplex': {
    ciudad: 'la',
    nombre: 'La Verne/Fairplex',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-pomona-north', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-san-dimas', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-lake': {
    ciudad: 'la',
    nombre: 'Lake',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-allen', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-memorial-park', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-lakewood-boulevard': {
    ciudad: 'la',
    nombre: 'Lakewood Boulevard',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-lynwood', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-norwalk', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-lattc-ortho-institute': {
    ciudad: 'la',
    nombre: 'LATTC/Ortho Institute',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-jefferson-usc', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-pico', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-lax-metro-transit-center': {
    ciudad: 'la',
    nombre: 'LAX/Metro Transit Center',
    lineas: ['C', 'K'],
    adyacentes: [
      { slug: 'la-aviation-century', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-aviation-century', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-westchester-veterans', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-leimert-park': {
    ciudad: 'la',
    nombre: 'Leimert Park',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-hyde-park', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-martin-luther-king-jr', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-lincoln-cypress': {
    ciudad: 'la',
    nombre: 'Lincoln/Cypress',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-chinatown', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-heritage-square', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-little-tokyo-arts-district': {
    ciudad: 'la',
    nombre: 'Little Tokyo/Arts District',
    lineas: ['A', 'E'],
    adyacentes: [
      { slug: 'la-historic-broadway', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-historic-broadway', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-pico-aliso', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-union-station', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-lynwood': {
    ciudad: 'la',
    nombre: 'Lynwood',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-lakewood-boulevard', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-willowbrook-rosa-parks', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-maravilla': {
    ciudad: 'la',
    nombre: 'Maravilla',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-east-la-civic-center', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-indiana', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-mariachi-plaza': {
    ciudad: 'la',
    nombre: 'Mariachi Plaza',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-pico-aliso', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-soto', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-mariposa': {
    ciudad: 'la',
    nombre: 'Mariposa',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-aviation-century', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-el-segundo', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-martin-luther-king-jr': {
    ciudad: 'la',
    nombre: 'Martin Luther King Jr.',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-expo-crenshaw', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-leimert-park', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-memorial-park': {
    ciudad: 'la',
    nombre: 'Memorial Park',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-del-mar', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-lake', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-monrovia': {
    ciudad: 'la',
    nombre: 'Monrovia',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-arcadia', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-duarte-city-of-hope', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-north-hollywood': {
    ciudad: 'la',
    nombre: 'North Hollywood',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-universal-city-studio-city', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
    ]
  },
  'la-norwalk': {
    ciudad: 'la',
    nombre: 'Norwalk',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-lakewood-boulevard', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-pacific-avenue': {
    ciudad: 'la',
    nombre: 'Pacific Avenue',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-downtown-long-beach', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-pacific-coast-highway': {
    ciudad: 'la',
    nombre: 'Pacific Coast Highway',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-anaheim-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-willow-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-palms': {
    ciudad: 'la',
    nombre: 'Palms',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-culver-city', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-westwood-rancho-park', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-pershing-square': {
    ciudad: 'la',
    nombre: 'Pershing Square',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: 'la-7th-street-metro-center', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-7th-street-metro-center', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-civic-center-grand-park', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-civic-center-grand-park', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
  'la-pico': {
    ciudad: 'la',
    nombre: 'Pico',
    lineas: ['A', 'E'],
    adyacentes: [
      { slug: 'la-7th-street-metro-center', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-7th-street-metro-center', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-grand-lattc', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-lattc-ortho-institute', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-pico-aliso': {
    ciudad: 'la',
    nombre: 'Pico/Aliso',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-little-tokyo-arts-district', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-mariachi-plaza', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-pomona-north': {
    ciudad: 'la',
    nombre: 'Pomona North',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-la-verne-fairplex', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-redondo-beach': {
    ciudad: 'la',
    nombre: 'Redondo Beach',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-douglas', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-san-dimas': {
    ciudad: 'la',
    nombre: 'San Dimas',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-glendora', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-la-verne-fairplex', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-san-pedro-street': {
    ciudad: 'la',
    nombre: 'San Pedro Street',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-grand-lattc', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-washington', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-sierra-madre-villa': {
    ciudad: 'la',
    nombre: 'Sierra Madre Villa',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-allen', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-arcadia', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-slauson': {
    ciudad: 'la',
    nombre: 'Slauson',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-florence', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-vernon', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-soto': {
    ciudad: 'la',
    nombre: 'Soto',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-indiana', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-mariachi-plaza', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-south-pasadena': {
    ciudad: 'la',
    nombre: 'South Pasadena',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-fillmore', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-highland-park', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-southwest-museum': {
    ciudad: 'la',
    nombre: 'Southwest Museum',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-heritage-square', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-highland-park', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-union-station': {
    ciudad: 'la',
    nombre: 'Union Station',
    lineas: ['A', 'B', 'D'],
    adyacentes: [
      { slug: 'la-chinatown', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-civic-center-grand-park', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-civic-center-grand-park', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-little-tokyo-arts-district', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-universal-city-studio-city': {
    ciudad: 'la',
    nombre: 'Universal City/Studio City',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-hollywood-highland', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-north-hollywood', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
    ]
  },
  'la-vermont-athens': {
    ciudad: 'la',
    nombre: 'Vermont/Athens',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-crenshaw', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-harbor-freeway', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-vermont-beverly': {
    ciudad: 'la',
    nombre: 'Vermont/Beverly',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-vermont-santa-monica', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-wilshire-vermont', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
    ]
  },
  'la-vermont-santa-monica': {
    ciudad: 'la',
    nombre: 'Vermont/Santa Monica',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-vermont-beverly', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-vermont-sunset', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
    ]
  },
  'la-vermont-sunset': {
    ciudad: 'la',
    nombre: 'Vermont/Sunset',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-hollywood-western', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-vermont-santa-monica', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
    ]
  },
  'la-vernon': {
    ciudad: 'la',
    nombre: 'Vernon',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-slauson', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-washington', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-wardlow': {
    ciudad: 'la',
    nombre: 'Wardlow',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-del-amo', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-willow-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-washington': {
    ciudad: 'la',
    nombre: 'Washington',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-san-pedro-street', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-vernon', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-westchester-veterans': {
    ciudad: 'la',
    nombre: 'Westchester/Veterans',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-downtown-inglewood', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-lax-metro-transit-center', tiempo: 3, linea: 'K', tipo: 'metro-rail' },
    ]
  },
  'la-westlake-macarthur-park': {
    ciudad: 'la',
    nombre: 'Westlake/MacArthur Park',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: 'la-7th-street-metro-center', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-7th-street-metro-center', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-wilshire-vermont', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-wilshire-vermont', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
  'la-westwood-rancho-park': {
    ciudad: 'la',
    nombre: 'Westwood/Rancho Park',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-expo-sepulveda', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-palms', tiempo: 3, linea: 'E', tipo: 'metro-rail' },
    ]
  },
  'la-willow-street': {
    ciudad: 'la',
    nombre: 'Willow Street',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-pacific-coast-highway', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-wardlow', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
    ]
  },
  'la-willowbrook-rosa-parks': {
    ciudad: 'la',
    nombre: 'Willowbrook/Rosa Parks',
    lineas: ['A', 'C'],
    adyacentes: [
      { slug: 'la-103rd-street-watts-towers', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-avalon', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-compton', tiempo: 3, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-lynwood', tiempo: 3, linea: 'C', tipo: 'metro-rail' },
    ]
  },
  'la-wilshire-la-brea': {
    ciudad: 'la',
    nombre: 'Wilshire/La Brea',
    lineas: ['D'],
    adyacentes: [
      { slug: 'la-wilshire-la-cienega', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-wilshire-western', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
  'la-wilshire-la-cienega': {
    ciudad: 'la',
    nombre: 'Wilshire/La Cienega',
    lineas: ['D'],
    adyacentes: [
      { slug: 'la-wilshire-la-brea', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
  'la-wilshire-normandie': {
    ciudad: 'la',
    nombre: 'Wilshire/Normandie',
    lineas: ['D'],
    adyacentes: [
      { slug: 'la-wilshire-vermont', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-wilshire-western', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
  'la-wilshire-vermont': {
    ciudad: 'la',
    nombre: 'Wilshire/Vermont',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: 'la-vermont-beverly', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-westlake-macarthur-park', tiempo: 2, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-westlake-macarthur-park', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-wilshire-normandie', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
  'la-wilshire-western': {
    ciudad: 'la',
    nombre: 'Wilshire/Western',
    lineas: ['D'],
    adyacentes: [
      { slug: 'la-wilshire-la-brea', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-wilshire-normandie', tiempo: 2, linea: 'D', tipo: 'metro-rail' },
    ]
  },
}
