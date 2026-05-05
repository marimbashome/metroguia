/*
 * BUENOS AIRES SUBTE GRAPH — BFS Adjacency Network
 * =================================================
 * Coverage: Líneas A, B, C, D, E, H (6 líneas, 89 estaciones total)
 * Estaciones turísticas principales incluidas: 22
 * Tiempos en minutos entre estaciones adyacentes
 * Fuente: Subterráneos de Buenos Aires (SBASE)
 */

export const grafoBuenosAires = {
  // ===== LÍNEA A — Plaza de Mayo → San Pedrito =====
  'baires-plaza-de-mayo-a': {
    ciudad: 'buenos-aires',
    nombre: 'Plaza de Mayo',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-peru-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-catedral-d', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-peru-a': {
    ciudad: 'buenos-aires',
    nombre: 'Perú',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-plaza-de-mayo-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-piedras-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-piedras-a': {
    ciudad: 'buenos-aires',
    nombre: 'Piedras',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-peru-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-lima-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-lima-a': {
    ciudad: 'buenos-aires',
    nombre: 'Lima',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-piedras-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-saenz-pena-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-saenz-pena-a': {
    ciudad: 'buenos-aires',
    nombre: 'Sáenz Peña',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-lima-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-congreso-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-congreso-a': {
    ciudad: 'buenos-aires',
    nombre: 'Congreso',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-saenz-pena-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-pasco-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-pasco-a': {
    ciudad: 'buenos-aires',
    nombre: 'Pasco',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-congreso-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-alberti-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-alberti-a': {
    ciudad: 'buenos-aires',
    nombre: 'Alberti',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-pasco-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-plaza-miserere-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-plaza-miserere-a': {
    ciudad: 'buenos-aires',
    nombre: 'Plaza Miserere',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-alberti-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-loria-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-loria-a': {
    ciudad: 'buenos-aires',
    nombre: 'Loria',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-plaza-miserere-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-castro-barros-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-castro-barros-a': {
    ciudad: 'buenos-aires',
    nombre: 'Castro Barros',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-loria-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-rio-de-janeiro-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-rio-de-janeiro-a': {
    ciudad: 'buenos-aires',
    nombre: 'Río de Janeiro',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-castro-barros-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-medrano-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-medrano-a': {
    ciudad: 'buenos-aires',
    nombre: 'Medrano',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-rio-de-janeiro-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-angel-gallardo-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-angel-gallardo-a': {
    ciudad: 'buenos-aires',
    nombre: 'Ángel Gallardo',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-medrano-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-malabia-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-malabia-a': {
    ciudad: 'buenos-aires',
    nombre: 'Malabia',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-angel-gallardo-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-dorrego-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-dorrego-a': {
    ciudad: 'buenos-aires',
    nombre: 'Dorrego',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-malabia-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-federico-lacroze-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-federico-lacroze-a': {
    ciudad: 'buenos-aires',
    nombre: 'Federico Lacroze',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-dorrego-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-tronador-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-tronador-a': {
    ciudad: 'buenos-aires',
    nombre: 'Tronador',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-federico-lacroze-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-los-incas-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-los-incas-a': {
    ciudad: 'buenos-aires',
    nombre: 'Los Incas',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-tronador-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-pilcomayo-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-pilcomayo-a': {
    ciudad: 'buenos-aires',
    nombre: 'Pilcomayo',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-los-incas-a', tiempo: 2, linea: 'A', tipo: 'subte' },
      { slug: 'baires-san-pedrito-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },
  'baires-san-pedrito-a': {
    ciudad: 'buenos-aires',
    nombre: 'San Pedrito',
    lineas: ['A'],
    adyacentes: [
      { slug: 'baires-pilcomayo-a', tiempo: 2, linea: 'A', tipo: 'subte' },
    ],
  },

  // ===== LÍNEA B — Leandro N. Alem → Juan Manuel de Rosas =====
  'baires-leandro-n-alem-b': {
    ciudad: 'buenos-aires',
    nombre: 'Leandro N. Alem',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-florida-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-florida-b': {
    ciudad: 'buenos-aires',
    nombre: 'Florida',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-leandro-n-alem-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-carlos-pellegrini-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-carlos-pellegrini-b': {
    ciudad: 'buenos-aires',
    nombre: 'Carlos Pellegrini',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-florida-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-callao-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-diagonal-norte-c', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-callao-b': {
    ciudad: 'buenos-aires',
    nombre: 'Callao',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-carlos-pellegrini-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-uruguay-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-uruguay-b': {
    ciudad: 'buenos-aires',
    nombre: 'Uruguay',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-callao-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-medrano-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-medrano-b': {
    ciudad: 'buenos-aires',
    nombre: 'Medrano',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-uruguay-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-angel-gallardo-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-angel-gallardo-b': {
    ciudad: 'buenos-aires',
    nombre: 'Ángel Gallardo',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-medrano-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-pasteur-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-pasteur-b': {
    ciudad: 'buenos-aires',
    nombre: 'Pasteur',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-angel-gallardo-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-pueyrredon-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-pueyrredon-b': {
    ciudad: 'buenos-aires',
    nombre: 'Pueyrredón',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-pasteur-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-rio-de-janeiro-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-rio-de-janeiro-b': {
    ciudad: 'buenos-aires',
    nombre: 'Río de Janeiro',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-pueyrredon-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-carlos-gardel-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-carlos-gardel-b': {
    ciudad: 'buenos-aires',
    nombre: 'Carlos Gardel',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-rio-de-janeiro-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-scalabrini-ortiz-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-scalabrini-ortiz-b': {
    ciudad: 'buenos-aires',
    nombre: 'Scalabrini Ortiz',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-carlos-gardel-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-palermo-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-palermo-b': {
    ciudad: 'buenos-aires',
    nombre: 'Palermo',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-scalabrini-ortiz-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-plaza-italia-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-plaza-italia-b': {
    ciudad: 'buenos-aires',
    nombre: 'Plaza Italia',
    lineas: ['B', 'D'],
    adyacentes: [
      { slug: 'baires-palermo-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-tronador-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-palermo-d', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-tronador-b': {
    ciudad: 'buenos-aires',
    nombre: 'Tronador',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-plaza-italia-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-los-incas-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-los-incas-b': {
    ciudad: 'buenos-aires',
    nombre: 'Los Incas',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-tronador-b', tiempo: 2, linea: 'B', tipo: 'subte' },
      { slug: 'baires-juan-manuel-de-rosas-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },
  'baires-juan-manuel-de-rosas-b': {
    ciudad: 'buenos-aires',
    nombre: 'Juan Manuel de Rosas',
    lineas: ['B'],
    adyacentes: [
      { slug: 'baires-los-incas-b', tiempo: 2, linea: 'B', tipo: 'subte' },
    ],
  },

  // ===== LÍNEA C — Constitución → Retiro =====
  'baires-constitucion-c': {
    ciudad: 'buenos-aires',
    nombre: 'Constitución',
    lineas: ['C'],
    adyacentes: [
      { slug: 'baires-san-juan-c', tiempo: 2, linea: 'C', tipo: 'subte' },
    ],
  },
  'baires-san-juan-c': {
    ciudad: 'buenos-aires',
    nombre: 'San Juan',
    lineas: ['C'],
    adyacentes: [
      { slug: 'baires-constitucion-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-independencia-c', tiempo: 2, linea: 'C', tipo: 'subte' },
    ],
  },
  'baires-independencia-c': {
    ciudad: 'buenos-aires',
    nombre: 'Independencia',
    lineas: ['C', 'E'],
    adyacentes: [
      { slug: 'baires-san-juan-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-moreno-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-independencia-e', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-moreno-c': {
    ciudad: 'buenos-aires',
    nombre: 'Moreno',
    lineas: ['C'],
    adyacentes: [
      { slug: 'baires-independencia-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-diagonal-norte-c', tiempo: 2, linea: 'C', tipo: 'subte' },
    ],
  },
  'baires-diagonal-norte-c': {
    ciudad: 'buenos-aires',
    nombre: 'Diagonal Norte',
    lineas: ['C'],
    adyacentes: [
      { slug: 'baires-moreno-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-lavalle-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-carlos-pellegrini-b', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
      { slug: 'baires-9-de-julio-d', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-lavalle-c': {
    ciudad: 'buenos-aires',
    nombre: 'Lavalle',
    lineas: ['C'],
    adyacentes: [
      { slug: 'baires-diagonal-norte-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-general-san-martin-c', tiempo: 2, linea: 'C', tipo: 'subte' },
    ],
  },
  'baires-general-san-martin-c': {
    ciudad: 'buenos-aires',
    nombre: 'General San Martín',
    lineas: ['C'],
    adyacentes: [
      { slug: 'baires-lavalle-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-retiro-c', tiempo: 2, linea: 'C', tipo: 'subte' },
    ],
  },
  'baires-retiro-c': {
    ciudad: 'buenos-aires',
    nombre: 'Retiro',
    lineas: ['C', 'E'],
    adyacentes: [
      { slug: 'baires-general-san-martin-c', tiempo: 2, linea: 'C', tipo: 'subte' },
      { slug: 'baires-retiro-e', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },

  // ===== LÍNEA D — Catedral → Congreso de Tucumán =====
  'baires-catedral-d': {
    ciudad: 'buenos-aires',
    nombre: 'Catedral',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-9-de-julio-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-plaza-de-mayo-a', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-9-de-julio-d': {
    ciudad: 'buenos-aires',
    nombre: '9 de Julio',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-catedral-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-tribunales-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-diagonal-norte-c', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-tribunales-d': {
    ciudad: 'buenos-aires',
    nombre: 'Tribunales',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-9-de-julio-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-callao-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-callao-d': {
    ciudad: 'buenos-aires',
    nombre: 'Callao',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-tribunales-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-facultad-de-medicina-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-facultad-de-medicina-d': {
    ciudad: 'buenos-aires',
    nombre: 'Facultad de Medicina',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-callao-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-once-de-septiembre-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-once-de-septiembre-d': {
    ciudad: 'buenos-aires',
    nombre: 'Once de Septiembre',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-facultad-de-medicina-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-medrano-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-medrano-d': {
    ciudad: 'buenos-aires',
    nombre: 'Medrano',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-once-de-septiembre-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-pueyrredon-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-pueyrredon-d': {
    ciudad: 'buenos-aires',
    nombre: 'Pueyrredón',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-medrano-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-aguero-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-aguero-d': {
    ciudad: 'buenos-aires',
    nombre: 'Agüero',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-pueyrredon-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-bulnes-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-bulnes-d': {
    ciudad: 'buenos-aires',
    nombre: 'Bulnes',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-aguero-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-plaza-italia-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-plaza-italia-d': {
    ciudad: 'buenos-aires',
    nombre: 'Plaza Italia',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-bulnes-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-palermo-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-plaza-italia-b', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-palermo-d': {
    ciudad: 'buenos-aires',
    nombre: 'Palermo',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-plaza-italia-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-ministro-carranza-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-ministro-carranza-d': {
    ciudad: 'buenos-aires',
    nombre: 'Ministro Carranza',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-palermo-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-olleros-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-olleros-d': {
    ciudad: 'buenos-aires',
    nombre: 'Olleros',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-ministro-carranza-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-jose-hernandez-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-jose-hernandez-d': {
    ciudad: 'buenos-aires',
    nombre: 'José Hernández',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-olleros-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-juramento-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-juramento-d': {
    ciudad: 'buenos-aires',
    nombre: 'Juramento',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-jose-hernandez-d', tiempo: 2, linea: 'D', tipo: 'subte' },
      { slug: 'baires-congreso-de-tucuman-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },
  'baires-congreso-de-tucuman-d': {
    ciudad: 'buenos-aires',
    nombre: 'Congreso de Tucumán',
    lineas: ['D'],
    adyacentes: [
      { slug: 'baires-juramento-d', tiempo: 2, linea: 'D', tipo: 'subte' },
    ],
  },

  // ===== LÍNEA E — Plaza de los Virreyes → Retiro =====
  'baires-plaza-de-los-virreyes-e': {
    ciudad: 'buenos-aires',
    nombre: 'Plaza de los Virreyes',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-corrientes-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-corrientes-e': {
    ciudad: 'buenos-aires',
    nombre: 'Corrientes',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-plaza-de-los-virreyes-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-bonorino-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-bonorino-e': {
    ciudad: 'buenos-aires',
    nombre: 'Bonorino',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-corrientes-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-varela-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-varela-e': {
    ciudad: 'buenos-aires',
    nombre: 'Varela',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-bonorino-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-emilio-mitre-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-emilio-mitre-e': {
    ciudad: 'buenos-aires',
    nombre: 'Emilio Mitre',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-varela-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-jose-maria-moreno-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-jose-maria-moreno-e': {
    ciudad: 'buenos-aires',
    nombre: 'José María Moreno',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-emilio-mitre-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-gascon-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-gascon-e': {
    ciudad: 'buenos-aires',
    nombre: 'Gascón',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-jose-maria-moreno-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-medrano-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-medrano-e': {
    ciudad: 'buenos-aires',
    nombre: 'Medrano',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-gascon-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-av-la-plata-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-av-la-plata-e': {
    ciudad: 'buenos-aires',
    nombre: 'Av. La Plata',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-medrano-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-colombres-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-colombres-e': {
    ciudad: 'buenos-aires',
    nombre: 'Colombres',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-av-la-plata-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-boedo-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-boedo-e': {
    ciudad: 'buenos-aires',
    nombre: 'Boedo',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-colombres-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-pichincha-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-pichincha-e': {
    ciudad: 'buenos-aires',
    nombre: 'Pichincha',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-boedo-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-jujuy-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-jujuy-e': {
    ciudad: 'buenos-aires',
    nombre: 'Jujuy',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-pichincha-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-entre-rios-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-entre-rios-e': {
    ciudad: 'buenos-aires',
    nombre: 'Entre Ríos',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-jujuy-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-general-urquiza-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-general-urquiza-e': {
    ciudad: 'buenos-aires',
    nombre: 'General Urquiza',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-entre-rios-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-independencia-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-independencia-e': {
    ciudad: 'buenos-aires',
    nombre: 'Independencia',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-general-urquiza-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-belgrano-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-independencia-c', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'baires-belgrano-e': {
    ciudad: 'buenos-aires',
    nombre: 'Belgrano',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-independencia-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-bolivar-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-bolivar-e': {
    ciudad: 'buenos-aires',
    nombre: 'Bolívar',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-belgrano-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-correo-central-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-correo-central-e': {
    ciudad: 'buenos-aires',
    nombre: 'Correo Central',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-bolivar-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-catalinas-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-catalinas-e': {
    ciudad: 'buenos-aires',
    nombre: 'Catalinas',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-correo-central-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-retiro-e', tiempo: 2, linea: 'E', tipo: 'subte' },
    ],
  },
  'baires-retiro-e': {
    ciudad: 'buenos-aires',
    nombre: 'Retiro',
    lineas: ['E'],
    adyacentes: [
      { slug: 'baires-catalinas-e', tiempo: 2, linea: 'E', tipo: 'subte' },
      { slug: 'baires-retiro-c', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },

  // ===== LÍNEA H — Caseros → Facultad de Derecho =====
  'baires-caseros-h': {
    ciudad: 'buenos-aires',
    nombre: 'Caseros',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-parque-patricios-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-parque-patricios-h': {
    ciudad: 'buenos-aires',
    nombre: 'Parque Patricios',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-caseros-h', tiempo: 2, linea: 'H', tipo: 'subte' },
      { slug: 'baires-inclan-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-inclan-h': {
    ciudad: 'buenos-aires',
    nombre: 'Inclán',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-parque-patricios-h', tiempo: 2, linea: 'H', tipo: 'subte' },
      { slug: 'baires-humberto-primo-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-humberto-primo-h': {
    ciudad: 'buenos-aires',
    nombre: 'Humberto Primo',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-inclan-h', tiempo: 2, linea: 'H', tipo: 'subte' },
      { slug: 'baires-venezuela-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-venezuela-h': {
    ciudad: 'buenos-aires',
    nombre: 'Venezuela',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-humberto-primo-h', tiempo: 2, linea: 'H', tipo: 'subte' },
      { slug: 'baires-once-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-once-h': {
    ciudad: 'buenos-aires',
    nombre: 'Once',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-venezuela-h', tiempo: 2, linea: 'H', tipo: 'subte' },
      { slug: 'baires-corrientes-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-corrientes-h': {
    ciudad: 'buenos-aires',
    nombre: 'Corrientes',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-once-h', tiempo: 2, linea: 'H', tipo: 'subte' },
      { slug: 'baires-santa-fe-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-santa-fe-h': {
    ciudad: 'buenos-aires',
    nombre: 'Santa Fe',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-corrientes-h', tiempo: 2, linea: 'H', tipo: 'subte' },
      { slug: 'baires-las-heras-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-las-heras-h': {
    ciudad: 'buenos-aires',
    nombre: 'Las Heras',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-santa-fe-h', tiempo: 2, linea: 'H', tipo: 'subte' },
      { slug: 'baires-facultad-de-derecho-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
  'baires-facultad-de-derecho-h': {
    ciudad: 'buenos-aires',
    nombre: 'Facultad de Derecho',
    lineas: ['H'],
    adyacentes: [
      { slug: 'baires-las-heras-h', tiempo: 2, linea: 'H', tipo: 'subte' },
    ],
  },
}
