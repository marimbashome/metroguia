export const grafoQueretaro = {
  'terminal-5-febrero': {
    ciudad: 'terminal',
    nombre: 'Terminal 5 de Febrero',
    lineas: ['Rojo', 'L119'],
    adyacentes: [
      { slug: 'centro-historico-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' },
      { slug: 'periferico-norte-qro', tiempo: 3, linea: 'L119', tipo: 'linea' }
    ],
  },
  'centro-historico-qro': {
    ciudad: 'centro',
    nombre: 'Centro Histórico',
    lineas: ['Rojo', 'L154'],
    adyacentes: [
      { slug: 'terminal-5-febrero', tiempo: 3, linea: 'Rojo', tipo: 'linea' },
      { slug: 'jardin-zenea-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' },
      { slug: 'constituyentes-l154', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'jardin-zenea-qro': {
    ciudad: 'jardin',
    nombre: 'Jardín Zenea',
    lineas: ['Rojo', 'Eléctrico'],
    adyacentes: [
      { slug: 'centro-historico-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' },
      { slug: 'santa-rosa-viterbo-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' },
      { slug: 'museo-arte-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'casa-corregidora-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'santa-rosa-viterbo-qro': {
    ciudad: 'santa',
    nombre: 'Santa Rosa de Viterbo',
    lineas: ['Rojo'],
    adyacentes: [
      { slug: 'jardin-zenea-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' },
      { slug: 'uaq-campus-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }
    ],
  },
  'uaq-campus-qro': {
    ciudad: 'uaq',
    nombre: 'Universidad Autónoma',
    lineas: ['Rojo'],
    adyacentes: [
      { slug: 'santa-rosa-viterbo-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' },
      { slug: 'estadio-corregidora-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }
    ],
  },
  'estadio-corregidora-qro': {
    ciudad: 'estadio',
    nombre: 'Estadio La Corregidora',
    lineas: ['Rojo'],
    adyacentes: [
      { slug: 'uaq-campus-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' },
      { slug: 'barrio-la-cruz-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }
    ],
  },
  'constituyentes-qro': {
    ciudad: 'constituyentes',
    nombre: 'Constituyentes',
    lineas: ['Azul', 'Verde'],
    adyacentes: [
      { slug: 'hospital-general-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'campus-aeroespacial-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'parque-industrial-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' },
      { slug: 'acueducto-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'alameda-qro': {
    ciudad: 'alameda',
    nombre: 'Alameda',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'cimatario-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'cimatario-qro': {
    ciudad: 'cimatario',
    nombre: 'Cerro de Cimatario',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'alameda-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'plaza-dorada-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'plaza-dorada-qro': {
    ciudad: 'plaza',
    nombre: 'Plaza Dorada',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'cimatario-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'hospital-general-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'hospital-general-qro': {
    ciudad: 'hospital',
    nombre: 'Hospital General',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'plaza-dorada-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'constituyentes-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'campus-aeroespacial-qro': {
    ciudad: 'campus',
    nombre: 'Campus Aeroespacial',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'constituyentes-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'tec-monterrey-qro': {
    ciudad: 'tec',
    nombre: 'Tecnológico de Monterrey',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'juriquilla-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'juriquilla-qro': {
    ciudad: 'juriquilla',
    nombre: 'Juriquilla',
    lineas: ['Verde', 'L154'],
    adyacentes: [
      { slug: 'tec-monterrey-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' },
      { slug: 'parque-industrial-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' },
      { slug: 'santa-barbara-qro', tiempo: 3, linea: 'L154', tipo: 'linea' },
      { slug: 'juriquilla-premium-qro', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'parque-industrial-qro': {
    ciudad: 'parque',
    nombre: 'Parque Industrial',
    lineas: ['Verde', 'L119'],
    adyacentes: [
      { slug: 'juriquilla-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' },
      { slug: 'constituyentes-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' },
      { slug: 'fabrica-autos-qro', tiempo: 3, linea: 'L119', tipo: 'linea' }
    ],
  },
  'acueducto-qro': {
    ciudad: 'acueducto',
    nombre: 'Acueducto',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'constituyentes-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'barrio-la-cruz-qro': {
    ciudad: 'barrio',
    nombre: 'Barrio La Cruz',
    lineas: ['Rojo'],
    adyacentes: [
      { slug: 'estadio-corregidora-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }
    ],
  },
  'constituyentes-l154': {
    ciudad: 'constituyentes',
    nombre: 'Constituyentes L154',
    lineas: ['L154'],
    adyacentes: [
      { slug: 'centro-historico-qro', tiempo: 3, linea: 'L154', tipo: 'linea' },
      { slug: 'cimatario-l154', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'cimatario-l154': {
    ciudad: 'cimatario',
    nombre: 'Cimatario L154',
    lineas: ['L154'],
    adyacentes: [
      { slug: 'constituyentes-l154', tiempo: 3, linea: 'L154', tipo: 'linea' },
      { slug: 'santa-barbara-qro', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'santa-barbara-qro': {
    ciudad: 'santa',
    nombre: 'Santa Bárbara',
    lineas: ['L154'],
    adyacentes: [
      { slug: 'cimatario-l154', tiempo: 3, linea: 'L154', tipo: 'linea' },
      { slug: 'juriquilla-qro', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'juriquilla-premium-qro': {
    ciudad: 'juriquilla',
    nombre: 'Juriquilla Premium',
    lineas: ['L154'],
    adyacentes: [
      { slug: 'juriquilla-qro', tiempo: 3, linea: 'L154', tipo: 'linea' },
      { slug: 'campus-bicentenario-qro', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'campus-bicentenario-qro': {
    ciudad: 'campus',
    nombre: 'Campus Bicentenario',
    lineas: ['L154'],
    adyacentes: [
      { slug: 'juriquilla-premium-qro', tiempo: 3, linea: 'L154', tipo: 'linea' },
      { slug: 'carretera-tequisquiapan', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'carretera-tequisquiapan': {
    ciudad: 'carretera',
    nombre: 'Carretera Tequisquiapan',
    lineas: ['L154'],
    adyacentes: [
      { slug: 'campus-bicentenario-qro', tiempo: 3, linea: 'L154', tipo: 'linea' },
      { slug: 'juriquilla-ampliacion-qro', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'juriquilla-ampliacion-qro': {
    ciudad: 'juriquilla',
    nombre: 'Juriquilla Ampliación',
    lineas: ['L154'],
    adyacentes: [
      { slug: 'carretera-tequisquiapan', tiempo: 3, linea: 'L154', tipo: 'linea' }
    ],
  },
  'periferico-norte-qro': {
    ciudad: 'periferico',
    nombre: 'Periférico Norte',
    lineas: ['L119'],
    adyacentes: [
      { slug: 'terminal-5-febrero', tiempo: 3, linea: 'L119', tipo: 'linea' },
      { slug: 'santa-rosa-industria-qro', tiempo: 3, linea: 'L119', tipo: 'linea' }
    ],
  },
  'santa-rosa-industria-qro': {
    ciudad: 'santa',
    nombre: 'Santa Rosa Industria',
    lineas: ['L119'],
    adyacentes: [
      { slug: 'periferico-norte-qro', tiempo: 3, linea: 'L119', tipo: 'linea' },
      { slug: 'el-marques-acceso-qro', tiempo: 3, linea: 'L119', tipo: 'linea' }
    ],
  },
  'el-marques-acceso-qro': {
    ciudad: 'el',
    nombre: 'El Marqués Acceso',
    lineas: ['L119'],
    adyacentes: [
      { slug: 'santa-rosa-industria-qro', tiempo: 3, linea: 'L119', tipo: 'linea' },
      { slug: 'parque-logistico-qro', tiempo: 3, linea: 'L119', tipo: 'linea' }
    ],
  },
  'parque-logistico-qro': {
    ciudad: 'parque',
    nombre: 'Parque Logístico',
    lineas: ['L119'],
    adyacentes: [
      { slug: 'el-marques-acceso-qro', tiempo: 3, linea: 'L119', tipo: 'linea' },
      { slug: 'distribucion-qro', tiempo: 3, linea: 'L119', tipo: 'linea' }
    ],
  },
  'distribucion-qro': {
    ciudad: 'distribucion',
    nombre: 'Distribución',
    lineas: ['L119'],
    adyacentes: [
      { slug: 'parque-logistico-qro', tiempo: 3, linea: 'L119', tipo: 'linea' },
      { slug: 'fabrica-autos-qro', tiempo: 3, linea: 'L119', tipo: 'linea' }
    ],
  },
  'fabrica-autos-qro': {
    ciudad: 'fabrica',
    nombre: 'Fábrica Autos',
    lineas: ['L119'],
    adyacentes: [
      { slug: 'distribucion-qro', tiempo: 3, linea: 'L119', tipo: 'linea' },
      { slug: 'parque-industrial-qro', tiempo: 3, linea: 'L119', tipo: 'linea' }
    ],
  },
  'plaza-independencia-qro': {
    ciudad: 'plaza',
    nombre: 'Plaza Independencia',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'palacio-gobierno-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'palacio-gobierno-qro': {
    ciudad: 'palacio',
    nombre: 'Palacio de Gobierno',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'plaza-independencia-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'museo-arte-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'museo-arte-qro': {
    ciudad: 'museo',
    nombre: 'Museo de Arte',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'palacio-gobierno-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'jardin-zenea-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'casa-corregidora-qro': {
    ciudad: 'casa',
    nombre: 'Casa de la Corregidora',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'jardin-zenea-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'plazuela-corregidora-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'plazuela-corregidora-qro': {
    ciudad: 'plazuela',
    nombre: 'Plazuela Corregidora',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'casa-corregidora-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'templo-santa-rosa', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'templo-santa-rosa': {
    ciudad: 'templo',
    nombre: 'Templo Santa Rosa',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'plazuela-corregidora-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'convento-san-francisco-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'convento-san-francisco-qro': {
    ciudad: 'convento',
    nombre: 'Convento San Francisco',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'templo-santa-rosa', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'mercado-escobedo-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'mercado-escobedo-qro': {
    ciudad: 'mercado',
    nombre: 'Mercado Escobedo',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'convento-san-francisco-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'iglesia-santiago-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'iglesia-santiago-qro': {
    ciudad: 'iglesia',
    nombre: 'Iglesia Santiago',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'mercado-escobedo-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'acueducto-centro-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'acueducto-centro-qro': {
    ciudad: 'acueducto',
    nombre: 'Acueducto Centro',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'iglesia-santiago-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'fuerte-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'fuerte-qro': {
    ciudad: 'fuerte',
    nombre: 'Fuerte',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'acueducto-centro-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'barrio-artista-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'barrio-artista-qro': {
    ciudad: 'barrio',
    nombre: 'Barrio Artista',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'fuerte-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'centro-convenciones-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'centro-convenciones-qro': {
    ciudad: 'centro',
    nombre: 'Centro de Convenciones',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'barrio-artista-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'plaza-grande-centro-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'plaza-grande-centro-qro': {
    ciudad: 'plaza',
    nombre: 'Plaza Grande Centro',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'centro-convenciones-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'biblioteca-publica-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'biblioteca-publica-qro': {
    ciudad: 'biblioteca',
    nombre: 'Biblioteca Pública',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'plaza-grande-centro-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'museo-historia-natural-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'museo-historia-natural-qro': {
    ciudad: 'museo',
    nombre: 'Museo Historia Natural',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'biblioteca-publica-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'teatro-republica-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'teatro-republica-qro': {
    ciudad: 'teatro',
    nombre: 'Teatro República',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'museo-historia-natural-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' },
      { slug: 'templo-santa-clara-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  },
  'templo-santa-clara-qro': {
    ciudad: 'templo',
    nombre: 'Templo Santa Clara',
    lineas: ['Eléctrico'],
    adyacentes: [
      { slug: 'teatro-republica-qro', tiempo: 3, linea: 'Eléctrico', tipo: 'linea' }
    ],
  }
};
