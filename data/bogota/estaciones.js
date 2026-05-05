export const estacionesBogota = [
  {
    slug: 'bog-museo-del-oro-caracas',
    nombre: 'Museo del Oro',
    linea: ['CARACAS'],
    sistema: 'transmilenio',
    municipio: 'Bogotá',
    pois: [
      { nombre: 'Museo del Oro', tipo: 'turismo', distancia: '200 metros' },
      { nombre: 'Parque Santander', tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Plaza de Bolívar', tipo: 'turismo', distancia: '400 metros' }
    ],
    transferencias: [],
    seo_title: 'Museo del Oro — TransMilenio Bogotá Troncal Caracas | MetroGuia',
    meta_description: 'Estación Museo del Oro de TransMilenio en Bogotá. Acceso al Museo del Oro del Banco de la República, Parque Santander y el centro histórico de Bogotá.',
    h1: 'Estación Museo del Oro — TransMilenio Bogotá',
    intro: 'A pasos del Museo del Oro más importante del mundo y el centro histórico de Bogotá: La Candelaria, la Plaza de Bolívar y la cultura muisca.',
    tips: ['El Museo del Oro tiene más de 55.000 piezas de orfebrería precolombina, entrada gratuita los domingos', 'La Librería Nacional y el Café Pasaje están a pocos pasos', 'Caminar hacia La Candelaria toma unos 10 minutos por la Calle 16'],
    descripcion_turistica: 'La estación Museo del Oro es la puerta de entrada al legado prehispánico de Colombia. El Museo del Oro del Banco de la República alberga la colección de orfebrería precolombina más importante del mundo, con más de 55.000 piezas de pueblos indígenas como los Muiscas, Calima, Quimbaya y Zenú. A metros, el Parque Santander es el corazón del centro financiero bogotano. Hacia el sur, La Candelaria —el barrio histórico de Bogotá— ofrece museos, universidades, bares y la arquitectura colonial que define la identidad capitalina.',
    accesibilidad: { elevador: false, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:30', cierre: '23:00', notas: 'L-V 04:30–23:00, S-D 05:00–22:00. Tarifa: COP $3.000' },
    lugares_cercanos: [
      { nombre: 'Museo del Oro', tipo: 'Museo', distancia: '200 metros', descripcion: '55.000 piezas de orfebrería precolombina. Gratis domingos.' },
      { nombre: 'Plaza de Bolívar', tipo: 'Turismo', distancia: '400 metros', descripcion: 'El corazón de Bogotá con el Capitolio y el Palacio de Justicia.' },
      { nombre: 'Museo Botero', tipo: 'Museo', distancia: '500 metros', descripcion: 'Colección donada por Fernando Botero. Entrada gratuita.' }
    ]
  },
  {
    slug: 'bog-general-santander-caracas',
    nombre: 'General Santander',
    linea: ['CARACAS'],
    sistema: 'transmilenio',
    municipio: 'Bogotá',
    pois: [
      { nombre: 'Plaza de Bolívar', tipo: 'turismo', distancia: '300 metros' },
      { nombre: 'Palacio de Nariño', tipo: 'turismo', distancia: '400 metros' },
      { nombre: 'La Candelaria', tipo: 'turismo', distancia: 'en la zona' }
    ],
    transferencias: [],
    seo_title: 'General Santander — TransMilenio Bogotá | MetroGuia',
    meta_description: 'Estación General Santander de TransMilenio Bogotá. Acceso a La Candelaria, Plaza de Bolívar, Palacio de Nariño y el barrio histórico de Bogotá.',
    h1: 'Estación General Santander — TransMilenio Bogotá',
    intro: 'En el umbral de La Candelaria, el barrio colonial más antiguo de Bogotá, con la Plaza de Bolívar y el Palacio de Nariño.',
    tips: ['La Plaza de Bolívar tiene el Congreso, la Catedral y el Capitolio Nacional visibles desde el mismo lugar', 'Los museos del Banco de la República en la Calle 11 son gratuitos', 'La Candelaria es más segura de día y en grupos'],
    descripcion_turistica: 'La estación General Santander es la más cercana al núcleo histórico de Bogotá. La Candelaria, el barrio más antiguo de la capital colombiana, conserva sus calles empedradas, edificios de la época colonial y una vibrante vida universitaria y cultural. La Plaza de Bolívar, rodeada por la Catedral Primada, el Capitolio Nacional y el Palacio de Justicia reconstruido, es el punto de partida ideal para cualquier recorrido histórico. A pocas cuadras, el Palacio de Nariño, sede de la Presidencia de la República, puede visitarse con reserva previa.',
    accesibilidad: { elevador: false, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:30', cierre: '23:00', notas: 'L-V 04:30–23:00, S-D 05:00–22:00. Tarifa: COP $3.000' },
    lugares_cercanos: [
      { nombre: 'Plaza de Bolívar', tipo: 'Turismo', distancia: '300 metros', descripcion: 'El centro histórico de Bogotá con Catedral, Capitolio y Palacio de Justicia.' },
      { nombre: 'Palacio de Nariño', tipo: 'Gobierno', distancia: '400 metros', descripcion: 'Sede de la Presidencia de Colombia. Visitas con reserva.' },
      { nombre: 'Universidad de los Andes', tipo: 'Educación', distancia: '600 metros', descripcion: 'Una de las mejores universidades de Colombia en plena Candelaria.' }
    ]
  },
  {
    slug: 'bog-portal-norte-nqs',
    nombre: 'Portal Norte',
    linea: ['NQS', 'AUTOPISTA'],
    sistema: 'transmilenio',
    municipio: 'Bogotá',
    pois: [
      { nombre: 'Terminal Portal Norte', tipo: 'transporte', distancia: 'en la estación' },
      { nombre: 'Centro Comercial Portal Norte', tipo: 'comercio', distancia: '100 metros' },
      { nombre: 'Barrio Toberín', tipo: 'turismo', distancia: '500 metros' }
    ],
    transferencias: ['AUTOPISTA'],
    seo_title: 'Portal Norte — TransMilenio Bogotá | MetroGuia',
    meta_description: 'Portal Norte de TransMilenio en Bogotá. El mayor hub de transporte del norte de la ciudad. Conexión NQS y Autopista Norte con 70.000 pasajeros diarios.',
    h1: 'Portal Norte — TransMilenio Bogotá',
    intro: 'El hub de transporte más grande del norte de Bogotá: el Portal Norte concentra rutas troncales, alimentadoras y el acceso a Chía y Usaquén.',
    tips: ['El Portal Norte conecta con buses intermunicipales a Chía, Cajicá y la Sabana de Bogotá', 'El Centro Comercial Portal Norte tiene cines, restaurantes y tiendas', 'Desde aquí salen las rutas al centro de Bogotá más rápidas'],
    descripcion_turistica: 'El Portal Norte es el terminal más grande de TransMilenio y uno de los hubs de transporte más activos de Bogotá, con más de 70.000 pasajeros al día. Integra las troncales NQS y Autopista Norte con rutas alimentadoras hacia barrios como Suba, Usaquén y los municipios del norte de la Sabana como Chía y Cajicá. El Centro Comercial Portal Norte, anexo al terminal, concentra servicios comerciales, gastronómicos y de entretenimiento para los viajeros. El área circundante es residencial de clase media-alta del norte capitalino.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:30', cierre: '23:00', notas: 'L-V 04:30–23:00, S-D 05:00–22:00. Tarifa: COP $3.000' },
    lugares_cercanos: [
      { nombre: 'CC Portal Norte', tipo: 'Comercio', distancia: '100 metros', descripcion: 'Centro comercial con cines, restaurantes y tiendas.' },
      { nombre: 'Barrio Usaquén', tipo: 'Turismo', distancia: '2 km', descripcion: 'El barrio colonial del norte de Bogotá con mercado de pulgas y restaurantes.' },
      { nombre: 'Autopista Norte', tipo: 'Transporte', distancia: 'en la zona', descripcion: 'Vía principal al norte de Colombia y conexión con La Calera.' }
    ]
  },
  {
    slug: 'bog-calle-72-caracas',
    nombre: 'Calle 72',
    linea: ['CARACAS'],
    sistema: 'transmilenio',
    municipio: 'Bogotá',
    pois: [
      { nombre: 'Zona Rosa', tipo: 'turismo', distancia: '800 metros' },
      { nombre: 'El Chicó', tipo: 'turismo', distancia: '1 km' },
      { nombre: 'Avenida 72', tipo: 'negocio', distancia: 'en la estación' }
    ],
    transferencias: [],
    seo_title: 'Calle 72 — TransMilenio Bogotá Troncal Caracas | MetroGuia',
    meta_description: 'Estación Calle 72 de TransMilenio Bogotá. Acceso a la Zona Rosa, El Chicó y los mejores restaurantes y centros comerciales del norte capitalino.',
    h1: 'Estación Calle 72 — TransMilenio Bogotá',
    intro: 'En el umbral de la Zona Rosa, el sector de moda del norte bogotano con Zona T, Andino y los mejores restaurantes de Colombia.',
    tips: ['La Zona T y el Parque 93 son los epicentros gastronómicos de Bogotá', 'El Museo El Chicó está en una hermosa mansión colonial del siglo XIX', 'Los centros comerciales Andino y El Retiro están a 10 minutos'],
    descripcion_turistica: 'La Calle 72 es el límite sur de la "zona rosa" de Bogotá, el sector del norte capitalino que concentra los mejores restaurantes, centros comerciales, hoteles de lujo y vida nocturna. La Zona T (donde se cruzan las calles 82 y 83 con las carreras 12 y 13) es un pasaje peatonal con terrazas y bares que se llena de vida al caer la tarde. El Parque 93, un pequeño parque arbolado rodeado de restaurantes de alta gastronomía, es el punto de reunión de la Bogotá más cosmopolita. Los centros comerciales Andino, El Retiro y Atlantis ofrecen opciones de moda y entretenimiento.',
    accesibilidad: { elevador: false, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:30', cierre: '23:00', notas: 'L-V 04:30–23:00, S-D 05:00–22:00. Tarifa: COP $3.000' },
    lugares_cercanos: [
      { nombre: 'Zona T', tipo: 'Turismo/Gastronomia', distancia: '1 km', descripcion: 'El pasaje peatonal más animado del norte de Bogotá.' },
      { nombre: 'CC Andino', tipo: 'Comercio', distancia: '900 metros', descripcion: 'Centro comercial de lujo con restaurantes y cine IMAX.' },
      { nombre: 'Museo El Chicó', tipo: 'Museo', distancia: '1.2 km', descripcion: 'Arte colonial y jardines en una casona del siglo XIX.' }
    ]
  },
  {
    slug: 'bog-ciudad-universitaria-nqs',
    nombre: 'Ciudad Universitaria',
    linea: ['NQS'],
    sistema: 'transmilenio',
    municipio: 'Bogotá',
    pois: [
      { nombre: 'Universidad Nacional de Colombia', tipo: 'educacion', distancia: '200 metros' },
      { nombre: 'Ciudad Universitaria', tipo: 'turismo', distancia: '200 metros' },
      { nombre: 'Museo de Arte de la UN', tipo: 'cultura', distancia: '400 metros' }
    ],
    transferencias: [],
    seo_title: 'Ciudad Universitaria — TransMilenio Bogotá NQS | MetroGuia',
    meta_description: 'Estación Ciudad Universitaria de TransMilenio. Acceso al campus de la Universidad Nacional de Colombia, el más grande del país.',
    h1: 'Estación Ciudad Universitaria — TransMilenio Bogotá',
    intro: 'La puerta del campus más grande de Colombia: la Universidad Nacional, sus museos gratuitos y la energía universitaria del corazón de Bogotá.',
    tips: ['El campus de la UN es abierto al público y tiene museos gratuitos: Arte, Ciencias Naturales y Astronomía', 'Los festivales culturales y ferias de libros del campus son abiertos', 'El Planetario de Bogotá está a 10 minutos caminando'],
    descripcion_turistica: 'La estación Ciudad Universitaria sirve al campus más grande e importante de Colombia: la Universidad Nacional. El vasto campus de 162 hectáreas alberga facultades de todas las áreas del conocimiento, jardines botánicos, observatorios astronómicos y varios museos de acceso gratuito. El Museo de Arte es uno de los más importantes de la ciudad, con colecciones de arte colombiano y latinoamericano. El campus es un espacio verde y cultural abierto al público, donde convergen estudiantes, académicos e intelectuales de todo el país.',
    accesibilidad: { elevador: false, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:30', cierre: '23:00', notas: 'L-V 04:30–23:00, S-D 05:00–22:00. Tarifa: COP $3.000' },
    lugares_cercanos: [
      { nombre: 'Universidad Nacional de Colombia', tipo: 'Educación/Cultura', distancia: '200 metros', descripcion: 'Campus abierto con museos gratuitos, jardines y arquitectura modernista.' },
      { nombre: 'Planetario de Bogotá', tipo: 'Ciencia', distancia: '700 metros', descripcion: 'Domo para observación astronómica y exposiciones científicas.' },
      { nombre: 'Museo del Chico', tipo: 'Museo', distancia: '5 km', descripcion: 'Arte colonial e historia en el norte de la ciudad.' }
    ]
  },
  {
    slug: 'bog-portal-americas',
    nombre: 'Portal Américas',
    linea: ['AMERICAS'],
    sistema: 'transmilenio',
    municipio: 'Bogotá',
    pois: [
      { nombre: 'Centro Comercial Portal Américas', tipo: 'comercio', distancia: '100 metros' },
      { nombre: 'Barrio Kennedy', tipo: 'turismo', distancia: '1 km' }
    ],
    transferencias: [],
    seo_title: 'Portal Américas — TransMilenio Bogotá | MetroGuia',
    meta_description: 'Portal Américas de TransMilenio Bogotá. Terminal de la Troncal Américas en el poniente. Acceso a Kennedy, Bosa y el occidente capitalino.',
    h1: 'Portal Américas — TransMilenio Bogotá',
    intro: 'Terminal de la Troncal Américas, hub del poniente bogotano con conexiones a los barrios de Kennedy, Bosa y el occidente de la ciudad.',
    tips: ['El Portal Américas conecta con rutas alimentadoras a toda la localidad de Kennedy', 'El CC Portal Américas tiene cine, restaurantes y tiendas de electrónica', 'Desde aquí se puede acceder a la Zona Franca de Bogotá'],
    descripcion_turistica: 'El Portal Américas es el nodo de integración más grande del poniente bogotano, sirviendo a las localidades de Kennedy, Bosa, Fontibón y partes de Puente Aranda. Junto al terminal, el Centro Comercial Portal Américas ofrece opciones de entretenimiento y comercio. La localidad de Kennedy, una de las más densamente pobladas de Bogotá, tiene una intensa vida cultural y comercial con numerosos mercados populares, parques y canchas deportivas.',
    accesibilidad: { elevador: false, rampa: true, piso_tactil: true },
    horarios: { apertura: '04:30', cierre: '23:00', notas: 'L-V 04:30–23:00, S-D 05:00–22:00. Tarifa: COP $3.000' },
    lugares_cercanos: [
      { nombre: 'CC Portal Américas', tipo: 'Comercio', distancia: '100 metros', descripcion: 'Centro comercial con cine, restaurantes y servicios.' },
      { nombre: 'Barrio Kennedy', tipo: 'Barrio', distancia: '1 km', descripcion: 'Una de las localidades más pobladas de Bogotá.' },
      { nombre: 'Zona Franca de Bogotá', tipo: 'Negocio', distancia: '2 km', descripcion: 'La mayor zona franca de Colombia con empresas exportadoras.' }
    ]
  }
];
