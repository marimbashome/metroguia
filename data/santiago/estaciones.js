export const estacionesSantiago = [
  {
    slug: 'stgo-baquedano-l1',
    nombre: 'Baquedano',
    linea: ['L1', 'L2', 'L3'],
    sistema: 'metro',
    municipio: 'Santiago',
    pois: [
      { nombre: 'Plaza Italia / Plaza Baquedano', tipo: 'turismo', distancia: '50 metros' },
      { nombre: 'Barrio Bellavista', tipo: 'turismo', distancia: '200 metros' },
      { nombre: 'Cerro San Cristóbal', tipo: 'turismo', distancia: '1.5 km' }
    ],
    transferencias: ['L2', 'L3'],
    seo_title: 'Baquedano — Metro Santiago Líneas 1, 2, 3 | MetroGuia',
    meta_description: 'Estación Baquedano del Metro de Santiago, nodo de 3 líneas. Plaza Italia, Barrio Bellavista y el Cerro San Cristóbal. El corazón geográfico de Santiago.',
    h1: 'Estación Baquedano — Metro de Santiago',
    intro: 'El nodo central del Metro de Santiago: tres líneas convergen en la Plaza Italia, puerta de entrada al bohemio Barrio Bellavista y el Cerro San Cristóbal.',
    tips: ['La Plaza Italia es el punto de festejo por excelencia de los santiaguinos', 'Bellavista tiene los mejores restaurantes y vida nocturna de Santiago', 'El funicular del Cerro San Cristóbal sale a 15 minutos caminando'],
    descripcion_turistica: 'Baquedano es el nodo más importante del Metro de Santiago, donde convergen las líneas 1, 2 y 3. La Plaza Italia —popularmente llamada "La Rotonda"— es el punto de concentración de los santiaguinos en cualquier celebración nacional. Al norte del Mapocho, el Barrio Bellavista desborda de restaurantes de cocina chilena e internacional, galerías de arte y bares de los más variados estilos. La Chascona, casa-museo de Pablo Neruda, está aquí. El Cerro San Cristóbal, accesible en funicular o teleférico desde aquí, ofrece las mejores vistas panorámicas de Santiago con la cordillera de fondo.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '23:00', notas: 'L-V 06:00–23:00, S 06:30–23:00, D 08:00–22:30. Tarifa: CLP $870' },
    lugares_cercanos: [
      { nombre: 'Barrio Bellavista', tipo: 'Barrio/Turismo', distancia: '200 metros', descripcion: 'El barrio más bohemio de Santiago con restaurantes, bares y galerías.' },
      { nombre: 'La Chascona (casa de Neruda)', tipo: 'Museo', distancia: '700 metros', descripcion: 'Una de las casas del poeta Pablo Neruda, declarada Monumento Nacional.' },
      { nombre: 'Cerro San Cristóbal', tipo: 'Naturaleza', distancia: '1.5 km', descripcion: 'Con funicular, teleférico y la Virgen con vistas a Santiago y la Cordillera.' }
    ]
  },
  {
    slug: 'stgo-la-moneda-l1',
    nombre: 'La Moneda',
    linea: ['L1'],
    sistema: 'metro',
    municipio: 'Santiago',
    pois: [
      { nombre: 'Palacio de La Moneda', tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Plaza de la Constitución', tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Centro Cultural La Moneda', tipo: 'cultura', distancia: '150 metros' }
    ],
    transferencias: [],
    seo_title: 'La Moneda — Metro Santiago Línea 1 | MetroGuia',
    meta_description: 'Estación La Moneda del Metro de Santiago. Acceso al Palacio de La Moneda, sede del gobierno chileno, y el Centro Cultural La Moneda.',
    h1: 'Estación La Moneda — Metro de Santiago',
    intro: 'Bajo el corazón del poder político chileno: el Palacio de La Moneda y la Plaza de la Constitución, escenario de la historia de Chile.',
    tips: ['El Palacio tiene visitas guiadas gratuitas en días específicos', 'El CCPLM tiene exposiciones de arte y gastronomía, con subterráneos históricos', 'El cambio de guardia frente a La Moneda es los días martes y viernes'],
    descripcion_turistica: 'La estación La Moneda te ubica al pie del símbolo del poder ejecutivo chileno. El Palacio de La Moneda, sede de la Presidencia de la República, es un edificio neoclásico del siglo XVIII declarado Monumento Histórico. Célebre por los bombardeos del 11 de septiembre de 1973, hoy es un símbolo de la democracia chilena recuperada. El Centro Cultural Palacio de La Moneda (CCPLM), ubicado en los subterráneos de la Plaza de la Constitución, alberga exposiciones de arte y fotografía de primer nivel, una cinemateca y un centro de documentación de acceso gratuito.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '23:00', notas: 'L-V 06:00–23:00, S 06:30–23:00, D 08:00–22:30. Tarifa: CLP $870' },
    lugares_cercanos: [
      { nombre: 'Palacio de La Moneda', tipo: 'Gobierno/Turismo', distancia: '100 metros', descripcion: 'Sede de la Presidencia de Chile. Visitas gratuitas con reserva previa.' },
      { nombre: 'Centro Cultural La Moneda', tipo: 'Cultura', distancia: '150 metros', descripcion: 'Exposiciones de arte y cinemateca en subterráneos de la plaza.' },
      { nombre: 'Paseo Ahumada', tipo: 'Comercio', distancia: '200 metros', descripcion: 'La principal calle peatonal comercial del centro de Santiago.' }
    ]
  },
  {
    slug: 'stgo-universidad-de-chile-l1',
    nombre: 'Universidad de Chile',
    linea: ['L1'],
    sistema: 'metro',
    municipio: 'Santiago',
    pois: [
      { nombre: 'Barrio Lastarria', tipo: 'turismo', distancia: '300 metros' },
      { nombre: 'Museo de Bellas Artes', tipo: 'cultura', distancia: '500 metros' },
      { nombre: 'Universidad de Chile', tipo: 'educacion', distancia: '200 metros' }
    ],
    transferencias: [],
    seo_title: 'Universidad de Chile — Metro Santiago Línea 1 | MetroGuia',
    meta_description: 'Estación Universidad de Chile del Metro de Santiago. Acceso al Barrio Lastarria, Museo de Bellas Artes y el epicentro cultural del centro capitalino.',
    h1: 'Estación Universidad de Chile — Metro de Santiago',
    intro: 'Junto a la Casa Central de la U de Chile y el elegante Barrio Lastarria, el corazón cultural del centro histórico de Santiago.',
    tips: ['Barrio Lastarria tiene las mejores cafeterías y restoranes de diseño del centro', 'El Museo de Bellas Artes es de acceso gratuito', 'La Facultad de Derecho y el Congreso Nacional están a 5 minutos'],
    descripcion_turistica: 'La estación Universidad de Chile se sitúa en el corazón del Santiago histórico y cultural. La Casa Central de la Universidad de Chile, fundada en 1842, es un edificio neoclásico de importancia histórica. El cercano Barrio Lastarria —el barrio más elegante del centro capitalino— reúne galerías de arte, librerías de segunda mano, restaurantes de autor y terrazas animadas. El Museo Nacional de Bellas Artes, con su arquitectura beaux-arts inspirada en el Petit Palais de París, tiene acceso gratuito y alberga la mayor colección de arte chileno.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '23:00', notas: 'L-V 06:00–23:00, S 06:30–23:00, D 08:00–22:30. Tarifa: CLP $870' },
    lugares_cercanos: [
      { nombre: 'Barrio Lastarria', tipo: 'Barrio/Turismo', distancia: '300 metros', descripcion: 'Barrio cultural con galerías, cafeterías y arquitectura patrimonial.' },
      { nombre: 'Museo Nacional de Bellas Artes', tipo: 'Museo', distancia: '500 metros', descripcion: 'Mayor colección de arte chileno. Entrada gratuita.' },
      { nombre: 'Cerro Santa Lucía', tipo: 'Naturaleza', distancia: '400 metros', descripcion: 'Cerro histórico con jardines y miradores en pleno centro de Santiago.' }
    ]
  },
  {
    slug: 'stgo-tobalaba-l1',
    nombre: 'Tobalaba',
    linea: ['L1', 'L4'],
    sistema: 'metro',
    municipio: 'Providencia',
    pois: [
      { nombre: 'Barrio El Golf', tipo: 'negocio', distancia: '300 metros' },
      { nombre: 'Parque Bustamante', tipo: 'turismo', distancia: '800 metros' },
      { nombre: 'Paseo Orrego Luco', tipo: 'turismo', distancia: '200 metros' }
    ],
    transferencias: ['L4'],
    seo_title: 'Tobalaba — Metro Santiago Líneas 1 y 4 | MetroGuia',
    meta_description: 'Estación Tobalaba del Metro de Santiago. Transbordo Líneas 1 y 4. Barrio El Golf, Providencia y acceso al sector financiero de Las Condes.',
    h1: 'Estación Tobalaba — Metro de Santiago',
    intro: 'Nodo estratégico entre Providencia y Las Condes: el transbordo entre la Línea 1 y la Línea 4 para acceder al barrio alto santiaguino.',
    tips: ['Desde Tobalaba se puede tomar la Línea 4 directamente a La Florida', 'El Barrio El Golf concentra embajadas y empresas multinacionales', 'Paseo Orrego Luco en Providencia tiene excelentes restaurantes'],
    descripcion_turistica: 'Tobalaba es el nodo de transbordo entre la Línea 1 (eje este-oeste) y la Línea 4 (hacia el suroriente), siendo uno de los puntos estratégicos del Metro de Santiago. La estación se encuentra en la frontera entre Providencia y Las Condes, dos de las comunas más desarrolladas del Gran Santiago. El cercano Barrio El Golf, sede de embajadas y grandes empresas internacionales, contrasta con el animado Paseo Orrego Luco, donde restaurantes y bares atraen a una clientela cosmopolita. El Parque Bustamante, a minutos caminando, ofrece un remanso verde en medio del bullicio urbano.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '23:00', notas: 'L-V 06:00–23:00, S 06:30–23:00, D 08:00–22:30. Tarifa: CLP $870' },
    lugares_cercanos: [
      { nombre: 'Barrio El Golf', tipo: 'Negocio', distancia: '300 metros', descripcion: 'Polo de negocios y embajadas de Las Condes.' },
      { nombre: 'Paseo Orrego Luco', tipo: 'Gastronomía', distancia: '200 metros', descripcion: 'Calle peatonal con terrazas y restaurantes variados.' },
      { nombre: 'Parque Bustamante', tipo: 'Parque', distancia: '800 metros', descripcion: 'Parque lineal en plena Providencia con áreas deportivas.' }
    ]
  },
  {
    slug: 'stgo-los-leones-l1',
    nombre: 'Los Leones',
    linea: ['L1'],
    sistema: 'metro',
    municipio: 'Providencia',
    pois: [
      { nombre: 'Barrio de Providencia', tipo: 'turismo', distancia: '200 metros' },
      { nombre: 'Avenida Providencia', tipo: 'comercio', distancia: '100 metros' },
      { nombre: 'Isidora Goyenechea', tipo: 'gastronomia', distancia: '500 metros' }
    ],
    transferencias: [],
    seo_title: 'Los Leones — Metro Santiago Línea 1 | MetroGuia',
    meta_description: 'Estación Los Leones del Metro de Santiago. En el corazón de Providencia, el barrio más cosmopolita de Santiago con restaurantes, bares y boutiques.',
    h1: 'Estación Los Leones — Metro de Santiago',
    intro: 'El centro neurálgico de Providencia: cafeterías, restaurantes internacionales y vida nocturna en el barrio más cosmopolita de Santiago.',
    tips: ['Avenida Providencia concentra restaurantes de todas las cocinas del mundo', 'Isidora Goyenechea es la calle de los bares y discoteques de Las Condes', 'El Mall Costanera Center está a 2 estaciones de aquí'],
    descripcion_turistica: 'La estación Los Leones está en el corazón de Providencia, la comuna más dinámica y cosmopolita del Gran Santiago. La Avenida Providencia, con sus galerías comerciales, cafeterías de autor y restaurantes de todas las latitudes, es el eje de este barrio que concentra a la clase media-alta santiaguina. El barrio tiene una arquitectura ecléctica con casas de principios del siglo XX conviviendo con modernas torres de departamentos. Por las noches, las calles paralelas a Providencia —Manuel Montt y Suecia— se llenan de terrazas animadas y locales de comida hasta la madrugada.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '23:00', notas: 'L-V 06:00–23:00, S 06:30–23:00, D 08:00–22:30. Tarifa: CLP $870' },
    lugares_cercanos: [
      { nombre: 'Av. Providencia', tipo: 'Comercio/Gastronomia', distancia: '100 metros', descripcion: 'La avenida más animada de Santiago con restaurantes y tiendas.' },
      { nombre: 'Barrio Suecia', tipo: 'Entretenimiento', distancia: '300 metros', descripcion: 'Calle con bares, discoteques y vida nocturna del barrio alto.' },
      { nombre: 'Parque de las Esculturas', tipo: 'Arte', distancia: '1.2 km', descripcion: 'Parque al aire libre con esculturas de artistas chilenos junto al Mapocho.' }
    ]
  },
  {
    slug: 'stgo-parque-ohiggins-l2',
    nombre: "Parque O'Higgins",
    linea: ['L2'],
    sistema: 'metro',
    municipio: 'Santiago',
    pois: [
      { nombre: "Parque O'Higgins", tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Fantasilandia', tipo: 'entretenimiento', distancia: '200 metros' },
      { nombre: 'Estadio Nacional Julio Martínez', tipo: 'deporte', distancia: '1.5 km' }
    ],
    transferencias: [],
    seo_title: "Parque O'Higgins — Metro Santiago Línea 2 | MetroGuia",
    meta_description: "Estación Parque O'Higgins del Metro de Santiago. Acceso al gran parque, Fantasilandia y la Feria del 18 de Septiembre. Eventos nacionales y Fiestas Patrias.",
    h1: "Estación Parque O'Higgins — Metro de Santiago",
    intro: "La puerta al parque más grande de Santiago: el Parque O'Higgins con Fantasilandia, el Museo del Huaso y el escenario de las Fiestas Patrias.",
    tips: ['En septiembre el parque alberga las fondas de Fiestas Patrias, experiencia única chilena', 'Fantasilandia es el parque de diversiones más grande de Chile', 'El Estadio Nacional, sede de la Copa América y conciertos, está a 15 minutos'],
    descripcion_turistica: "El Parque O'Higgins, con sus 76 hectáreas, es el pulmón verde más grande del centro de Santiago. La estación homónima del Metro te deposita directamente en este espacio que acoge a miles de familias santiaguinas los fines de semana. Fantasilandia, el parque de diversiones más grande de Chile, ocupa un sector del predio con decenas de atracciones. Cada 18 de septiembre, el parque se transforma con fondas de celebración de la Independencia chilena, en una experiencia que resume el alma y las tradiciones del país. El Museo del Huaso y del Rodeo Chileno documenta la cultura campesina del país.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '23:00', notas: 'L-V 06:00–23:00, S 06:30–23:00, D 08:00–22:30. Tarifa: CLP $870' },
    lugares_cercanos: [
      { nombre: "Parque O'Higgins", tipo: 'Parque', distancia: '100 metros', descripcion: 'El parque más grande del centro de Santiago con 76 hectáreas.' },
      { nombre: 'Fantasilandia', tipo: 'Entretenimiento', distancia: '200 metros', descripcion: 'El parque de diversiones más grande de Chile.' },
      { nombre: 'Museo del Huaso', tipo: 'Museo', distancia: '300 metros', descripcion: 'Cultura y tradiciones del campo chileno y el rodeo criollo.' }
    ]
  },
  {
    slug: 'stgo-estacion-central-l1',
    nombre: 'Estación Central',
    linea: ['L1'],
    sistema: 'metro',
    municipio: 'Santiago',
    pois: [
      { nombre: 'Estación Central (trenes)', tipo: 'transporte', distancia: '100 metros' },
      { nombre: 'Terminal Alameda (buses)', tipo: 'transporte', distancia: '200 metros' },
      { nombre: 'Barrio Brasil', tipo: 'turismo', distancia: '800 metros' }
    ],
    transferencias: [],
    seo_title: 'Estación Central — Metro Santiago Línea 1 | MetroGuia',
    meta_description: 'Estación Central del Metro de Santiago. Hub de trenes y buses: Terminal Alameda y Estación Central de trenes a todo Chile.',
    h1: 'Estación Central — Metro de Santiago',
    intro: 'El gran nodo de transporte de Santiago: trenes a todo Chile, terminal de buses y la histórica Estación Central de Ferrocarriles.',
    tips: ['La Estación Central es un patrimonio histórico con estructura metálica francesa del siglo XIX', 'Terminal Alameda conecta con Mendoza (Argentina) y todas las ciudades de Chile', 'El Barrio Brasil tiene gastronomía bohemia y arquitectura patrimonial'],
    descripcion_turistica: 'La estación Estación Central del Metro se sitúa junto a los dos principales nodos de transporte de Santiago. La Estación Central de Ferrocarriles, declarada Monumento Nacional, es una obra maestra del hierro forjado diseñada por Gustave Eiffel a fines del siglo XIX. Su estructura metálica de 300 metros de largo alberga los trenes de larga distancia a todo Chile. El Terminal Alameda, pegado al metro, conecta con ciudades argentinas y con toda la red de buses interurbanos. El cercano Barrio Brasil, con su arquitectura republicana y gastronomía creativa, es una de las zonas más auténticas del Santiago popular.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '23:00', notas: 'L-V 06:00–23:00, S 06:30–23:00, D 08:00–22:30. Tarifa: CLP $870' },
    lugares_cercanos: [
      { nombre: 'Estación Central (trenes)', tipo: 'Transporte', distancia: '100 metros', descripcion: 'Trenes de larga distancia a todo Chile. Monumento Nacional.' },
      { nombre: 'Terminal Alameda', tipo: 'Transporte', distancia: '200 metros', descripcion: 'Buses a Argentina y todo Chile, incluyendo bus-cama a Mendoza.' },
      { nombre: 'Barrio Brasil', tipo: 'Barrio', distancia: '800 metros', descripcion: 'Barrio patrimonial con gastronomía bohemia y arquitectura republicana.' }
    ]
  }
];
