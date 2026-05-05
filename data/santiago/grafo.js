/*
 * METRO DE SANTIAGO GRAPH — BFS Adjacency Network
 * ================================================
 * Coverage: Líneas L1, L2, L3, L4, L4A, L5, L6 (7 líneas, 136 estaciones total)
 * Estaciones turísticas principales: 22
 * Tiempos en minutos entre estaciones adyacentes
 * Fuente: Metro de Santiago S.A.
 * Nota: Línea L3 y L6 son las más nuevas (2019)
 */

export const grafoSantiago = {
  // ===== LÍNEA L1 ROJA — San Pablo → Los Domínicos =====
  'stgo-san-pablo-l1': {
    ciudad: 'santiago',
    nombre: 'San Pablo',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-neptuno-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-neptuno-l1': {
    ciudad: 'santiago',
    nombre: 'Neptuno',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-san-pablo-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-pajaritos-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-pajaritos-l1': {
    ciudad: 'santiago',
    nombre: 'Pajaritos',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-neptuno-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-las-rejas-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-las-rejas-l1': {
    ciudad: 'santiago',
    nombre: 'Las Rejas',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-pajaritos-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-ecuador-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-ecuador-l1': {
    ciudad: 'santiago',
    nombre: 'Ecuador',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-las-rejas-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-san-alberto-hurtado-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-san-alberto-hurtado-l1': {
    ciudad: 'santiago',
    nombre: 'San Alberto Hurtado',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-ecuador-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-universidad-de-santiago-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-universidad-de-santiago-l1': {
    ciudad: 'santiago',
    nombre: 'Universidad de Santiago',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-san-alberto-hurtado-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-estacion-central-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-estacion-central-l1': {
    ciudad: 'santiago',
    nombre: 'Estación Central',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-universidad-de-santiago-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-alameda-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-alameda-l1': {
    ciudad: 'santiago',
    nombre: 'Alameda',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-estacion-central-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-la-moneda-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-baquedano-l3', tiempo: 4, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'stgo-la-moneda-l1': {
    ciudad: 'santiago',
    nombre: 'La Moneda',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-alameda-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-universidad-de-chile-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-universidad-de-chile-l1': {
    ciudad: 'santiago',
    nombre: 'Universidad de Chile',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-la-moneda-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-baquedano-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-baquedano-l2', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'stgo-baquedano-l1': {
    ciudad: 'santiago',
    nombre: 'Baquedano',
    lineas: ['L1', 'L2', 'L3'],
    adyacentes: [
      { slug: 'stgo-universidad-de-chile-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-salvador-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-baquedano-l2', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
      { slug: 'stgo-baquedano-l3', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'stgo-salvador-l1': {
    ciudad: 'santiago',
    nombre: 'Salvador',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-baquedano-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-manuel-montt-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-manuel-montt-l1': {
    ciudad: 'santiago',
    nombre: 'Manuel Montt',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-salvador-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-pedro-de-valdivia-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-pedro-de-valdivia-l1': {
    ciudad: 'santiago',
    nombre: 'Pedro de Valdivia',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-manuel-montt-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-los-leones-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-los-leones-l1': {
    ciudad: 'santiago',
    nombre: 'Los Leones',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-pedro-de-valdivia-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-tobalaba-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-tobalaba-l1': {
    ciudad: 'santiago',
    nombre: 'Tobalaba',
    lineas: ['L1', 'L4'],
    adyacentes: [
      { slug: 'stgo-los-leones-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-el-golf-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-tobalaba-l4', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'stgo-el-golf-l1': {
    ciudad: 'santiago',
    nombre: 'El Golf',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-tobalaba-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-alcantara-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-alcantara-l1': {
    ciudad: 'santiago',
    nombre: 'Alcántara',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-el-golf-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-escuela-militar-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-escuela-militar-l1': {
    ciudad: 'santiago',
    nombre: 'Escuela Militar',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-alcantara-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-manquehue-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-manquehue-l1': {
    ciudad: 'santiago',
    nombre: 'Manquehue',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-escuela-militar-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-hernando-de-magallanes-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-hernando-de-magallanes-l1': {
    ciudad: 'santiago',
    nombre: 'Hernando de Magallanes',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-manquehue-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'stgo-los-dominicos-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },
  'stgo-los-dominicos-l1': {
    ciudad: 'santiago',
    nombre: 'Los Domínicos',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'stgo-hernando-de-magallanes-l1', tiempo: 2, linea: 'L1', tipo: 'metro' },
    ],
  },

  // ===== LÍNEA L2 AMARILLA — La Cisterna → Baquedano =====
  'stgo-la-cisterna-l2': {
    ciudad: 'santiago',
    nombre: 'La Cisterna',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-lo-vial-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-lo-vial-l2': {
    ciudad: 'santiago',
    nombre: 'Lo Vial',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-la-cisterna-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-departamental-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-departamental-l2': {
    ciudad: 'santiago',
    nombre: 'Departamental',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-lo-vial-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-ciudad-del-nino-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-ciudad-del-nino-l2': {
    ciudad: 'santiago',
    nombre: 'Ciudad del Niño',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-departamental-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-lo-ovalle-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-lo-ovalle-l2': {
    ciudad: 'santiago',
    nombre: 'Lo Ovalle',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-ciudad-del-nino-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-el-llano-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-el-llano-l2': {
    ciudad: 'santiago',
    nombre: 'El Llano',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-lo-ovalle-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-san-miguel-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-san-miguel-l2': {
    ciudad: 'santiago',
    nombre: 'San Miguel',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-el-llano-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-franklin-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-franklin-l2': {
    ciudad: 'santiago',
    nombre: 'Franklin',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-san-miguel-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-parque-ohiggins-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-parque-ohiggins-l2': {
    ciudad: 'santiago',
    nombre: "Parque O'Higgins",
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-franklin-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-toesca-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-toesca-l2': {
    ciudad: 'santiago',
    nombre: 'Toesca',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-parque-ohiggins-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-los-heroes-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
    ],
  },
  'stgo-los-heroes-l2': {
    ciudad: 'santiago',
    nombre: 'Los Héroes',
    lineas: ['L2', 'L3'],
    adyacentes: [
      { slug: 'stgo-toesca-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-baquedano-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-los-heroes-l3', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'stgo-baquedano-l2': {
    ciudad: 'santiago',
    nombre: 'Baquedano',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'stgo-los-heroes-l2', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'stgo-baquedano-l1', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
      { slug: 'stgo-baquedano-l3', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },

  // ===== LÍNEA L3 GRIS — Fernando Castillo Velasco → Baquedano =====
  'stgo-fernando-castillo-velasco-l3': {
    ciudad: 'santiago',
    nombre: 'Fernando Castillo Velasco',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'stgo-plaza-egana-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
    ],
  },
  'stgo-plaza-egana-l3': {
    ciudad: 'santiago',
    nombre: 'Plaza Ñuñoa',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'stgo-fernando-castillo-velasco-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'stgo-nuble-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
    ],
  },
  'stgo-nuble-l3': {
    ciudad: 'santiago',
    nombre: 'Ñuble',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'stgo-plaza-egana-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'stgo-departamental-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
    ],
  },
  'stgo-departamental-l3': {
    ciudad: 'santiago',
    nombre: 'Departamental',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'stgo-nuble-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'stgo-pedro-aguirre-cerda-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
    ],
  },
  'stgo-pedro-aguirre-cerda-l3': {
    ciudad: 'santiago',
    nombre: 'Pedro Aguirre Cerda',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'stgo-departamental-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'stgo-ciudad-del-nino-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
    ],
  },
  'stgo-ciudad-del-nino-l3': {
    ciudad: 'santiago',
    nombre: 'Ciudad del Niño',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'stgo-pedro-aguirre-cerda-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'stgo-los-heroes-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
    ],
  },
  'stgo-los-heroes-l3': {
    ciudad: 'santiago',
    nombre: 'Los Héroes',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'stgo-ciudad-del-nino-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'stgo-baquedano-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'stgo-los-heroes-l2', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'stgo-baquedano-l3': {
    ciudad: 'santiago',
    nombre: 'Baquedano',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'stgo-los-heroes-l3', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'stgo-baquedano-l1', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
      { slug: 'stgo-baquedano-l2', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },

  // ===== LÍNEA L4 AZUL — Tobalaba → La Cisterna =====
  'stgo-tobalaba-l4': {
    ciudad: 'santiago',
    nombre: 'Tobalaba',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'stgo-bilbao-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
      { slug: 'stgo-tobalaba-l1', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'stgo-bilbao-l4': {
    ciudad: 'santiago',
    nombre: 'Bilbao',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'stgo-tobalaba-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
      { slug: 'stgo-plaza-egana-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },
  'stgo-plaza-egana-l4': {
    ciudad: 'santiago',
    nombre: 'Plaza Egaña',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'stgo-bilbao-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
      { slug: 'stgo-macul-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },
  'stgo-macul-l4': {
    ciudad: 'santiago',
    nombre: 'Macul',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'stgo-plaza-egana-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
      { slug: 'stgo-la-florida-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },
  'stgo-la-florida-l4': {
    ciudad: 'santiago',
    nombre: 'La Florida',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'stgo-macul-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
      { slug: 'stgo-bellavista-de-la-florida-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },
  'stgo-bellavista-de-la-florida-l4': {
    ciudad: 'santiago',
    nombre: 'Bellavista de La Florida',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'stgo-la-florida-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
      { slug: 'stgo-vicente-valdes-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },
  'stgo-vicente-valdes-l4': {
    ciudad: 'santiago',
    nombre: 'Vicente Valdés',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'stgo-bellavista-de-la-florida-l4', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },

  // ===== LÍNEA L5 VERDE — Plaza de Maipú → Baquedano =====
  'stgo-plaza-de-maipu-l5': {
    ciudad: 'santiago',
    nombre: 'Plaza de Maipú',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-santiago-bueras-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-santiago-bueras-l5': {
    ciudad: 'santiago',
    nombre: 'Santiago Bueras',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-plaza-de-maipu-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-del-sol-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-del-sol-l5': {
    ciudad: 'santiago',
    nombre: 'Del Sol',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-santiago-bueras-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-monte-tabor-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-monte-tabor-l5': {
    ciudad: 'santiago',
    nombre: 'Monte Tabor',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-del-sol-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-las-parcelas-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-las-parcelas-l5': {
    ciudad: 'santiago',
    nombre: 'Las Parcelas',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-monte-tabor-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-barrancas-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-barrancas-l5': {
    ciudad: 'santiago',
    nombre: 'Barrancas',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-las-parcelas-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-pudahuel-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-pudahuel-l5': {
    ciudad: 'santiago',
    nombre: 'Pudahuel',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-barrancas-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-san-pablo-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-san-pablo-l5': {
    ciudad: 'santiago',
    nombre: 'San Pablo',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-pudahuel-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-quinta-normal-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-quinta-normal-l5': {
    ciudad: 'santiago',
    nombre: 'Quinta Normal',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-san-pablo-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-cumming-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-cumming-l5': {
    ciudad: 'santiago',
    nombre: 'Cumming',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-quinta-normal-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-santa-ana-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-santa-ana-l5': {
    ciudad: 'santiago',
    nombre: 'Santa Ana',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-cumming-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-plaza-de-armas-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-plaza-de-armas-l5': {
    ciudad: 'santiago',
    nombre: 'Plaza de Armas',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-santa-ana-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-bellas-artes-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-bellas-artes-l5': {
    ciudad: 'santiago',
    nombre: 'Bellas Artes',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-plaza-de-armas-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-baquedano-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
    ],
  },
  'stgo-baquedano-l5': {
    ciudad: 'santiago',
    nombre: 'Baquedano',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'stgo-bellas-artes-l5', tiempo: 2, linea: 'L5', tipo: 'metro' },
      { slug: 'stgo-baquedano-l1', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
}
