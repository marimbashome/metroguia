export const estacionesBuenosAires = [
  // === LÍNEA A ===
  {
    slug: 'baires-plaza-de-mayo-a',
    nombre: 'Plaza de Mayo',
    linea: ['A'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Casa Rosada', tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Catedral Metropolitana', tipo: 'turismo', distancia: '150 metros' },
      { nombre: 'Plaza de Mayo', tipo: 'turismo', distancia: '50 metros' },
      { nombre: 'Cabildo', tipo: 'turismo', distancia: '200 metros' }
    ],
    transferencias: ['D'],
    seo_title: 'Plaza de Mayo — Subte Buenos Aires Línea A | MetroGuia',
    meta_description: 'Estación Plaza de Mayo de la Línea A del Subte de Buenos Aires. Acceso a la Casa Rosada, Catedral Metropolitana y el Cabildo. Centro histórico de Argentina.',
    h1: 'Estación Plaza de Mayo — Subte de Buenos Aires',
    intro: 'El corazón histórico de Argentina: a metros de la Casa Rosada, la Catedral y el Cabildo fundacional de Buenos Aires.',
    tips: ['Llegar temprano para ver la Plaza sin turistas', 'La Catedral tiene misas gratuitas de lunes a sábado', 'La Casa Rosada se puede visitar gratis los fines de semana con reserva previa'],
    descripcion_turistica: 'La estación Plaza de Mayo es el punto de partida obligado para todo visitante de Buenos Aires. Al salir, te encontrás frente al icónico balcón rosado de la Casa Rosada, sede del gobierno argentino. La Plaza de Mayo, escenario de los momentos más importantes de la historia argentina, rodea el Cabildo original y la Catedral Metropolitana donde reposan los restos del General San Martín. A pocas cuadras, el Microcentro y el histórico Paseo Colón te invitan a explorar la arquitectura europea del Buenos Aires del siglo XIX.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S 08:00–22:30, D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Casa Rosada', tipo: 'Gobierno/Turismo', distancia: '100 metros', descripcion: 'Sede del Poder Ejecutivo Nacional. Visitas guiadas gratuitas los fines de semana.' },
      { nombre: 'Catedral Metropolitana', tipo: 'Religioso', distancia: '150 metros', descripcion: 'Mausoleo del General San Martín. Entrada gratuita.' },
      { nombre: 'Cabildo', tipo: 'Museo', distancia: '200 metros', descripcion: 'Museo histórico de la Revolución de Mayo.' }
    ]
  },
  {
    slug: 'baires-congreso-a',
    nombre: 'Congreso',
    linea: ['A'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Congreso Nacional', tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Avenida de Mayo', tipo: 'turismo', distancia: 'en la estación' },
      { nombre: 'Plaza del Congreso', tipo: 'turismo', distancia: '50 metros' }
    ],
    transferencias: [],
    seo_title: 'Congreso — Subte Buenos Aires Línea A | MetroGuia',
    meta_description: 'Estación Congreso de la Línea A del Subte de Buenos Aires. Acceso al Palacio del Congreso Nacional y la histórica Avenida de Mayo.',
    h1: 'Estación Congreso — Subte de Buenos Aires',
    intro: 'Frente al majestuoso Palacio del Congreso y el inicio de la Avenida de Mayo, el eje histórico que une los dos poderes del Estado.',
    tips: ['El Palacio del Congreso tiene visitas guiadas gratuitas', 'La Avenida de Mayo es perfecta para caminar y ver arquitectura Belle Époque', 'El Hotel Castelar y el Café Tortoni son hitos históricos en la avenida'],
    descripcion_turistica: 'La estación Congreso te coloca en el epicentro del poder legislativo argentino. El imponente Palacio del Congreso, con su cúpula inspirada en el Capitolio de Washington, domina la vista. Desde aquí, la histórica Avenida de Mayo te lleva caminando hasta la Plaza de Mayo y la Casa Rosada, con una sucesión de edificios art nouveau y cafés centenarios como el legendario Café Tortoni. La Plaza del Congreso con sus fuentes y el monumento a los Dos Congresos es uno de los espacios verdes más emblemáticos del centro porteño.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Palacio del Congreso', tipo: 'Gobierno/Turismo', distancia: '100 metros', descripcion: 'Sede del Poder Legislativo. Visitas guiadas gratuitas.' },
      { nombre: 'Café Tortoni', tipo: 'Gastronomía', distancia: '600 metros', descripcion: 'El café más antiguo de Buenos Aires, fundado en 1858.' },
      { nombre: 'Hotel Castelar', tipo: 'Hospedaje', distancia: '400 metros', descripcion: 'Hotel histórico donde se hospedó Federico García Lorca.' }
    ]
  },
  {
    slug: 'baires-malabia-a',
    nombre: 'Malabia',
    linea: ['A'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Palermo Soho', tipo: 'turismo', distancia: '300 metros' },
      { nombre: 'Mercado de Pulgas', tipo: 'turismo', distancia: '500 metros' },
      { nombre: 'Boutiques de diseño', tipo: 'comercio', distancia: '200 metros' }
    ],
    transferencias: [],
    seo_title: 'Malabia — Subte Buenos Aires Línea A | MetroGuia',
    meta_description: 'Estación Malabia de la Línea A en Buenos Aires. Puerta de entrada a Palermo Soho con boutiques de diseño, bares y la vida nocturna porteña.',
    h1: 'Estación Malabia — Subte de Buenos Aires',
    intro: 'La puerta de Palermo Soho: diseño de autor, bares hipster y la efervescente vida nocturna del barrio más trendy de Buenos Aires.',
    tips: ['Palermo Soho tiene los mejores restaurantes de cocina moderna argentina', 'El Mercado de Pulgas abre jueves a domingos', 'La zona es perfecta para recorrer a pie desde Malabia hasta Armenia'],
    descripcion_turistica: 'Malabia es la entrada natural a Palermo Soho, el barrio más vibrante y cosmopolita de Buenos Aires. Las calles empedradas con jacarandás en flor forman el escenario perfecto para descubrir boutiques de diseñadores locales, galerías de arte contemporáneo y una escena gastronómica que mezcla tradición argentina con influencias del mundo. Aquí nacieron algunas de las propuestas culinarias más premiadas del país. Por las noches, los bares de moda y las parrillas de autor mantienen el barrio en movimiento hasta el amanecer.',
    accesibilidad: { elevador: false, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Palermo Soho', tipo: 'Barrio', distancia: '300 metros', descripcion: 'Zona de diseño, gastronomía y vida nocturna porteña.' },
      { nombre: 'El Mercado de Pulgas', tipo: 'Mercado', distancia: '500 metros', descripcion: 'Antigüedades y artesanías de Colegiales.' },
      { nombre: 'Plaza Serrano', tipo: 'Ocio', distancia: '400 metros', descripcion: 'Epicentro de bares y restaurantes de Palermo Soho.' }
    ]
  },
  {
    slug: 'baires-san-pedrito-a',
    nombre: 'San Pedrito',
    linea: ['A'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Barrio de Flores', tipo: 'turismo', distancia: 'en la zona' },
      { nombre: 'Mercado de Flores', tipo: 'comercio', distancia: '300 metros' }
    ],
    transferencias: [],
    seo_title: 'San Pedrito — Subte Buenos Aires Línea A | MetroGuia',
    meta_description: 'Estación San Pedrito, terminal de la Línea A del Subte de Buenos Aires. Acceso al barrio de Flores, mercados y centros comerciales del oeste porteño.',
    h1: 'Estación San Pedrito — Terminal Línea A, Buenos Aires',
    intro: 'Terminal de la Línea A en el corazón del barrio de Flores, uno de los barrios más tradicionales y comerciales del oeste de Buenos Aires.',
    tips: ['El Parque Centenario está a pocas cuadras y es ideal para picnic', 'El barrio tiene las mejores casas de alfajores y dulces regionales', 'Los domingos hay feria artesanal en la zona'],
    descripcion_turistica: 'San Pedrito marca el extremo oeste de la histórica Línea A. El barrio de Flores, uno de los más tradicionales de Buenos Aires, combina arquitectura de principios del siglo XX con un intenso movimiento comercial. El Mercado de Flores ofrece frutas, verduras y flores frescas a precios populares. El tango de barrio tiene aquí una de sus cunas más auténticas, con milongas que continúan la tradición porteña. El Parque Chacabuco, a pocos minutos, es el pulmón verde de este sector de la ciudad.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Mercado de Flores', tipo: 'Mercado', distancia: '300 metros', descripcion: 'Mercado tradicional con frutas, verduras y flores.' },
      { nombre: 'Parque Rivadavia', tipo: 'Parque', distancia: '800 metros', descripcion: 'Parque con feria de libros usados y actividades culturales.' }
    ]
  },
  // === LÍNEA B ===
  {
    slug: 'baires-florida-b',
    nombre: 'Florida',
    linea: ['B'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Peatonal Florida', tipo: 'turismo', distancia: '50 metros' },
      { nombre: 'Galerías Pacífico', tipo: 'comercio', distancia: '100 metros' },
      { nombre: 'Centro Cultural Borges', tipo: 'cultura', distancia: '150 metros' }
    ],
    transferencias: [],
    seo_title: 'Florida — Subte Buenos Aires Línea B | MetroGuia',
    meta_description: 'Estación Florida de la Línea B en Buenos Aires. Acceso a la Peatonal Florida, Galerías Pacífico y el Centro Cultural Borges. Corazón comercial porteño.',
    h1: 'Estación Florida — Subte de Buenos Aires',
    intro: 'La estación más comercial del Subte: sobre la peatonal más famosa de Argentina, con shoppings y galerías de arte a la vuelta.',
    tips: ['Galerías Pacífico tiene frescos de pintores argentinos en su cúpula', 'La peatonal Florida es ideal para cambio de moneda (casas de cambio legales)', 'El Centro Cultural Borges tiene exposiciones gratuitas o de bajo costo'],
    descripcion_turistica: 'La estación Florida te deposita directamente en la arteria comercial más icónica de Buenos Aires. La Peatonal Florida, cerrada al tránsito vehicular desde los años 70, es un desfile constante de porteños y turistas de todas las latitudes. Las Galerías Pacífico, con su magnífica cúpula decorada con frescos de maestros argentinos, es un shopping de lujo dentro de un edificio patrimonial declarado Monumento Histórico Nacional. A metros, el Centro Cultural Borges ofrece exposiciones de arte y espectáculos.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Galerías Pacífico', tipo: 'Comercio/Cultura', distancia: '100 metros', descripcion: 'Shopping en edificio patrimonial con frescos de artistas argentinos.' },
      { nombre: 'Centro Cultural Borges', tipo: 'Cultura', distancia: '150 metros', descripcion: 'Arte, teatro y exposiciones en honor al escritor argentino.' },
      { nombre: 'Peatonal Florida', tipo: 'Comercio', distancia: '50 metros', descripcion: 'La calle peatonal más transitada y comercial de Argentina.' }
    ]
  },
  {
    slug: 'baires-palermo-b',
    nombre: 'Palermo',
    linea: ['B'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Palermo Hollywood', tipo: 'turismo', distancia: '400 metros' },
      { nombre: 'Parques de Palermo', tipo: 'turismo', distancia: '800 metros' },
      { nombre: 'Hipódromo Argentino', tipo: 'turismo', distancia: '1 km' }
    ],
    transferencias: [],
    seo_title: 'Palermo — Subte Buenos Aires Línea B | MetroGuia',
    meta_description: 'Estación Palermo de la Línea B en Buenos Aires. Acceso a Palermo Hollywood, barrios de moda, restaurantes y los grandes parques porteños.',
    h1: 'Estación Palermo — Subte de Buenos Aires',
    intro: 'Portal a Palermo Hollywood, la meca de la gastronomía y la vida nocturna de Buenos Aires, a metros de los grandes parques.',
    tips: ['Las productoras de cine y TV están en Palermo Hollywood, es fácil ver rodajes en la calle', 'Los parques de Palermo son perfectos para correr o andar en bici los fines de semana', 'El Hipódromo tiene carreras gratuitas para espectadores'],
    descripcion_turistica: 'Palermo es el barrio más extenso y diverso de Buenos Aires, y la estación te pone en su corazón. Palermo Hollywood, llamado así porque allí se concentran las productoras de cine y TV argentinas, ofrece la escena gastronómica más sofisticada de la ciudad. Los grandes parques —Tres de Febrero, Jardín Japonés, Jardín Botánico— forman un pulmón verde de decenas de hectáreas. El Hipódromo Argentino, uno de los más importantes de Sudamérica, completa la oferta de este barrio que nunca duerme.',
    accesibilidad: { elevador: false, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Jardín Japonés', tipo: 'Parque', distancia: '900 metros', descripcion: 'El jardín japonés más grande de Latinoamérica, con carpas y pagodas.' },
      { nombre: 'Hipódromo Argentino', tipo: 'Entretenimiento', distancia: '1 km', descripcion: 'Uno de los hipódromos más importantes de Sudamérica.' },
      { nombre: 'Jardín Botánico', tipo: 'Parque', distancia: '700 metros', descripcion: 'Jardín botánico con más de 5.000 especies vegetales.' }
    ]
  },
  {
    slug: 'baires-plaza-italia-b',
    nombre: 'Plaza Italia',
    linea: ['B', 'D'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Jardín Zoológico de Buenos Aires', tipo: 'turismo', distancia: '200 metros' },
      { nombre: 'Jardín Botánico', tipo: 'turismo', distancia: '300 metros' },
      { nombre: 'Feria de Plaza Italia', tipo: 'turismo', distancia: 'en la plaza' }
    ],
    transferencias: ['D'],
    seo_title: 'Plaza Italia — Subte Buenos Aires Líneas B y D | MetroGuia',
    meta_description: 'Estación Plaza Italia del Subte de Buenos Aires. Transbordo líneas B y D. Acceso al Zoológico, Jardín Botánico y la feria dominical de Palermo.',
    h1: 'Estación Plaza Italia — Subte de Buenos Aires',
    intro: 'Nodo de intercambio entre la Línea B y la D, en el corazón verde de Palermo con acceso al Zoológico y el Jardín Botánico.',
    tips: ['La feria de artesanías de Plaza Italia funciona los fines de semana', 'El Zoológico de Buenos Aires (hoy Ecoparque) tiene entrada arancelada con descuentos', 'Desde aquí se puede acceder a pie a Palermo Soho y Hollywood'],
    descripcion_turistica: 'Plaza Italia es uno de los nodos de transbordo más transitados del Subte, donde se cruzan la Línea B (Avenida Corrientes) y la Línea D (Avenida Santa Fe). La plaza homónima es un punto de encuentro clásico de los porteños, con el monumento ecuestre de Giuseppe Garibaldi como símbolo de la inmigración italiana. El Ecoparque (ex Zoológico) y el Jardín Botánico, ambos a pasos de la estación, forman un verde oasis en medio del hormigón palermitano. Los fines de semana, la feria de artesanías transforma la plaza en un mercado al aire libre.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Ecoparque Buenos Aires', tipo: 'Turismo', distancia: '200 metros', descripcion: 'Ex Zoológico reconvertido en ecoparque con animales rescatados.' },
      { nombre: 'Jardín Botánico', tipo: 'Parque', distancia: '300 metros', descripcion: 'Declarado Monumento Histórico Nacional con más de 5.500 plantas.' },
      { nombre: 'MALBA', tipo: 'Museo', distancia: '600 metros', descripcion: 'Museo de Arte Latinoamericano de Buenos Aires, colección de primer nivel.' }
    ]
  },
  // === LÍNEA C ===
  {
    slug: 'baires-retiro-c',
    nombre: 'Retiro',
    linea: ['C', 'E'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Terminal de Buses de Retiro', tipo: 'transporte', distancia: '300 metros' },
      { nombre: 'Estación de Tren Mitre/Belgrano', tipo: 'transporte', distancia: '100 metros' },
      { nombre: 'Puerto Madero', tipo: 'turismo', distancia: '1 km' },
      { nombre: 'Torre Monumental (ex-Torre de los Ingleses)', tipo: 'turismo', distancia: '200 metros' }
    ],
    transferencias: ['E'],
    seo_title: 'Retiro — Subte Buenos Aires Líneas C y E | MetroGuia',
    meta_description: 'Estación Retiro del Subte de Buenos Aires. Hub de transportes: metro líneas C y E, trenes nacionales y terminal de buses. Acceso a Puerto Madero.',
    h1: 'Estación Retiro — Subte de Buenos Aires',
    intro: 'El gran hub de transporte porteño: conecta el Subte (C y E) con los trenes nacionales, la terminal de buses y el acceso a Puerto Madero.',
    tips: ['La terminal de buses de Retiro conecta con toda Argentina y países limítrofes', 'Puerto Madero está a 15 minutos caminando por la costanera', 'La Torre Monumental se puede visitar con vistas panorámicas de la ciudad'],
    descripcion_turistica: 'Retiro es el gran nodo de transporte de Buenos Aires, donde convergen el Subte (líneas C y E), los trenes de superficie de larga distancia (Mitre, Belgrano y San Martín) y la terminal de buses más grande del país. La imponente estación ferroviaria de Retiro, de estilo inglés y declarada Monumento Histórico, es una de las más bellas de Sudamérica. A metros, la Torre Monumental (ex-Torre de los Ingleses) ofrece vistas panorámicas de la ciudad. Desde aquí, una caminata por la Costanera lleva al moderno barrio de Puerto Madero.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:00', cierre: '23:00', notas: 'L-V 05:00–23:00, S-D 07:00–23:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Estación Retiro (trenes)', tipo: 'Transporte', distancia: '100 metros', descripcion: 'Terminal ferroviaria histórica de estilo inglés (1915).' },
      { nombre: 'Puerto Madero', tipo: 'Barrio/Turismo', distancia: '1 km', descripcion: 'Barrio más moderno de BA con restaurantes, museos y el Puente de la Mujer.' },
      { nombre: 'Torre Monumental', tipo: 'Turismo', distancia: '200 metros', descripcion: 'Ex-Torre de los Ingleses con mirador panorámico gratuito.' }
    ]
  },
  {
    slug: 'baires-diagonal-norte-c',
    nombre: 'Diagonal Norte',
    linea: ['C'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Obelisco', tipo: 'turismo', distancia: '200 metros' },
      { nombre: 'Teatro Colón', tipo: 'turismo', distancia: '300 metros' },
      { nombre: 'Avenida 9 de Julio', tipo: 'turismo', distancia: '100 metros' }
    ],
    transferencias: ['B', 'D'],
    seo_title: 'Diagonal Norte — Subte Buenos Aires Línea C | MetroGuia',
    meta_description: 'Estación Diagonal Norte, Línea C del Subte de Buenos Aires. A pasos del Obelisco y el Teatro Colón. Nodo de transferencia con líneas B y D.',
    h1: 'Estación Diagonal Norte — Subte de Buenos Aires',
    intro: 'En el cruce de la Diagonal Norte con la 9 de Julio, a pasos del Obelisco y del Teatro Colón, los dos íconos porteños más fotografiados.',
    tips: ['El Teatro Colón tiene visitas guiadas en varios idiomas a buen precio', 'El Obelisco es el punto 0 de la avenida más ancha del mundo: la 9 de Julio', 'La Diagonal Norte es perfecta para fotografías arquitectónicas'],
    descripcion_turistica: 'La estación Diagonal Norte se sitúa en uno de los cruces más emblemáticos del microcentro porteño. A 200 metros se alza el Obelisco, símbolo indiscutido de Buenos Aires, en el medio de la imponente Avenida 9 de Julio (la más ancha del mundo). El cercano Teatro Colón, considerado uno de los cinco mejores teatros de ópera del planeta, ofrece visitas guiadas que revelan sus maravillosos interiores. La Diagonal Norte, con su perspectiva urbanística única, conecta esta zona con el Congreso Nacional.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Obelisco', tipo: 'Monumento', distancia: '200 metros', descripcion: 'El monumento más icónico de Buenos Aires, en la intersección de Corrientes y 9 de Julio.' },
      { nombre: 'Teatro Colón', tipo: 'Cultura', distancia: '300 metros', descripcion: 'Uno de los 5 mejores teatros de ópera del mundo. Visitas guiadas disponibles.' },
      { nombre: 'Av. 9 de Julio', tipo: 'Turismo', distancia: '100 metros', descripcion: 'La avenida más ancha del mundo con 140 metros de ancho.' }
    ]
  },
  // === LÍNEA D ===
  {
    slug: 'baires-catedral-d',
    nombre: 'Catedral',
    linea: ['D'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Catedral Metropolitana', tipo: 'turismo', distancia: '100 metros' },
      { nombre: 'Casa Rosada', tipo: 'turismo', distancia: '200 metros' },
      { nombre: 'Plaza de Mayo', tipo: 'turismo', distancia: '100 metros' }
    ],
    transferencias: ['A'],
    seo_title: 'Catedral — Subte Buenos Aires Línea D | MetroGuia',
    meta_description: 'Estación Catedral de la Línea D del Subte de Buenos Aires. Acceso directo a la Catedral Metropolitana, Casa Rosada y Plaza de Mayo.',
    h1: 'Estación Catedral — Subte de Buenos Aires',
    intro: 'Bajo la Catedral Metropolitana, esta estación es la puerta histórica de Buenos Aires para quienes llegan por la Línea D.',
    tips: ['La Catedral tiene entrada gratuita y el mausoleo de San Martín', 'Combinar con la Línea A para visitar el Congreso y Malabia', 'El Cabildo histórico está a 200 metros con museo de la independencia'],
    descripcion_turistica: 'La estación Catedral de la Línea D es sinónimo de historia argentina. Al salir, la imponente Catedral Metropolitana te recibe con su fachada neoclásica que guarda en su interior el mausoleo del Libertador José de San Martín, uno de los lugares más visitados del país. La Plaza de Mayo, a metros, es el escenario donde se escribieron los capítulos más importantes de la historia argentina: desde la Revolución de Mayo de 1810 hasta los cacerolazos del siglo XXI. La Casa Rosada cierra el triángulo con el Cabildo, conformando el centro cívico e histórico de la nación.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Catedral Metropolitana', tipo: 'Religioso', distancia: '100 metros', descripcion: 'Sede de la arquidiócesis y mausoleo de San Martín. Entrada gratuita.' },
      { nombre: 'Casa Rosada', tipo: 'Gobierno/Turismo', distancia: '200 metros', descripcion: 'Sede del Poder Ejecutivo, visitas guiadas gratuitas los sábados y domingos.' },
      { nombre: 'Museo del Cabildo', tipo: 'Museo', distancia: '250 metros', descripcion: 'Museo histórico en el edificio del Cabildo original de Buenos Aires.' }
    ]
  },
  {
    slug: 'baires-9-de-julio-d',
    nombre: '9 de Julio',
    linea: ['D'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Obelisco', tipo: 'turismo', distancia: '50 metros' },
      { nombre: 'Avenida 9 de Julio', tipo: 'turismo', distancia: 'en la estación' },
      { nombre: 'Av. Corrientes', tipo: 'turismo', distancia: '100 metros' }
    ],
    transferencias: [],
    seo_title: '9 de Julio — Subte Buenos Aires Línea D | MetroGuia',
    meta_description: 'Estación 9 de Julio, Línea D del Subte de Buenos Aires. Al pie del Obelisco, en la avenida más ancha del mundo y el cruce con Corrientes.',
    h1: 'Estación 9 de Julio — Subte de Buenos Aires',
    intro: 'Al pie del Obelisco, en el corazón latiente de Buenos Aires, donde se cruzan la 9 de Julio y la Corrientes teatral.',
    tips: ['El Obelisco se ilumina de diferentes colores según las efemérides nacionales', 'Corrientes nocturna: librerías, pizzerías y teatros abiertos hasta las 4 AM', 'Los fines de semana se cortan carriles de la 9 de Julio para ciclistas y peatones'],
    descripcion_turistica: 'La estación 9 de Julio te sumerge directamente en el corazón simbólico de Buenos Aires. El Obelisco, inaugurado en 1936 para conmemorar el cuarto centenario de la primera fundación de la ciudad, es el punto de referencia más reconocible del skyline porteño. La cruce con la Avenida Corrientes, la "calle que nunca duerme", activa la noche con teatros, librerías con horario nocturno y las mejores pizzerías tradicionales. Los días de partido de la selección argentina o de los grandes clásicos futboleros, esta zona se convierte en una marea de festejos espontáneos.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Obelisco', tipo: 'Monumento', distancia: '50 metros', descripcion: 'Símbolo de Buenos Aires e ícono del festejos y concentraciones populares.' },
      { nombre: 'Teatro Gran Rex', tipo: 'Cultura', distancia: '200 metros', descripcion: 'Histórico teatro de la Av. Corrientes con shows de gran formato.' },
      { nombre: 'El Cuartito', tipo: 'Gastronomía', distancia: '400 metros', descripcion: 'Pizzería clásica porteña abierta desde 1934.' }
    ]
  },
  {
    slug: 'baires-palermo-d',
    nombre: 'Palermo',
    linea: ['D'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Bosques de Palermo', tipo: 'turismo', distancia: '500 metros' },
      { nombre: 'MALBA', tipo: 'cultura', distancia: '600 metros' },
      { nombre: 'Museo de Arte Decorativo', tipo: 'cultura', distancia: '700 metros' }
    ],
    transferencias: [],
    seo_title: 'Palermo — Subte Buenos Aires Línea D | MetroGuia',
    meta_description: 'Estación Palermo de la Línea D en Buenos Aires. Cerca del MALBA, Bosques de Palermo y los mejores restaurantes de cocina moderna argentina.',
    h1: 'Estación Palermo — Línea D, Subte de Buenos Aires',
    intro: 'El epicentro cultural de Palermo chic: el MALBA, los Bosques de Palermo y la mejor escena gastronómica de Argentina a tiro de caminata.',
    tips: ['El MALBA tiene un día de entrada reducida (miércoles)', 'Los Bosques de Palermo son perfectos para alquilar bicicletas', 'La zona de Libertador tiene los mejores restaurantes de cocina de autor'],
    descripcion_turistica: 'La estación Palermo de la Línea D abre las puertas a la zona más elegante y cultural del barrio. El MALBA (Museo de Arte Latinoamericano de Buenos Aires) está a escasos minutos con una colección que incluye obras de Frida Kahlo, Diego Rivera y los grandes maestros latinoamericanos. Los Bosques de Palermo, con sus lagos, rosedales y campos deportivos, son el espacio verde más importante de la ciudad. La Avenida Libertador, bordeada de edificios nobles, lleva hasta el Hipódromo y los clubes de polo, completando el escenario del Palermo más cosmopolita.',
    accesibilidad: { elevador: false, rampa: true, piso_tactil: true },
    horarios: { apertura: '05:30', cierre: '22:30', notas: 'L-V 05:30–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'MALBA', tipo: 'Museo', distancia: '600 metros', descripcion: 'Colección de arte latinoamericano del siglo XX, incluyendo Frida Kahlo y Berni.' },
      { nombre: 'Museo de Arte Decorativo', tipo: 'Museo', distancia: '700 metros', descripcion: 'Palacete con colección de artes decorativas europeas y americanas.' },
      { nombre: 'Bosques de Palermo', tipo: 'Parque', distancia: '500 metros', descripcion: 'Los lagos y jardines más grandes de Buenos Aires.' }
    ]
  },
  // === LÍNEA H ===
  {
    slug: 'baires-once-h',
    nombre: 'Once',
    linea: ['H'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Mercado de Once', tipo: 'comercio', distancia: '200 metros' },
      { nombre: 'Estación Once (trenes)', tipo: 'transporte', distancia: '100 metros' },
      { nombre: 'Barrio coreano', tipo: 'turismo', distancia: '500 metros' }
    ],
    transferencias: ['A'],
    seo_title: 'Once — Subte Buenos Aires Línea H | MetroGuia',
    meta_description: 'Estación Once de la Línea H del Subte de Buenos Aires. Hub de transporte con trenes, colectivos y el famoso mercado textil. Conexión con Línea A.',
    h1: 'Estación Once — Subte de Buenos Aires',
    intro: 'El bullicioso corazón del Once: mercados, inmigrantes y el hub de trenes del oeste de Buenos Aires. Un barrio que nunca para.',
    tips: ['El mercado de Once tiene telas, ropa y accesorios al mejor precio de la ciudad', 'Los trenes de la línea Sarmiento salen de la estación Once hacia el Gran Buenos Aires', 'El barrio coreano de Once tiene restaurantes auténticos y supermercados asiáticos'],
    descripcion_turistica: 'La estación Once se encuentra en uno de los nodos comerciales y de transporte más activos de Buenos Aires. El barrio de Once, históricamente asociado a la comunidad judía e inmigrante, alberga el mercado textil más importante de la ciudad, donde se consiguen telas, indumentaria y artículos del hogar a precios mayoristas. La estación de trenes Once conecta con toda la zona oeste del Gran Buenos Aires. En los últimos años, el barrio se transformó también en un polo gastronómico multicultural, con cocina coreana, árabe, peruana y judía.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '22:30', notas: 'L-V 06:00–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Estación de Trenes Once', tipo: 'Transporte', distancia: '100 metros', descripcion: 'Terminal de trenes Sarmiento al oeste del Gran Buenos Aires.' },
      { nombre: 'Mercado de Once', tipo: 'Comercio', distancia: '200 metros', descripcion: 'El mercado textil y de ropa más grande de Buenos Aires.' },
      { nombre: 'Barrio coreano', tipo: 'Gastronomía/Cultura', distancia: '500 metros', descripcion: 'Supermercados, restaurantes y negocios de la comunidad coreana.' }
    ]
  },
  {
    slug: 'baires-facultad-de-derecho-h',
    nombre: 'Facultad de Derecho',
    linea: ['H'],
    sistema: 'subte',
    municipio: 'Buenos Aires',
    pois: [
      { nombre: 'Facultad de Derecho UBA', tipo: 'educacion', distancia: '100 metros' },
      { nombre: 'Cementerio de la Recoleta', tipo: 'turismo', distancia: '400 metros' },
      { nombre: 'Museo Nacional de Bellas Artes', tipo: 'cultura', distancia: '500 metros' }
    ],
    transferencias: [],
    seo_title: 'Facultad de Derecho — Subte Buenos Aires Línea H | MetroGuia',
    meta_description: 'Estación Facultad de Derecho, terminal norte de la Línea H del Subte de Buenos Aires. Acceso al Cementerio de la Recoleta y el Museo de Bellas Artes.',
    h1: 'Estación Facultad de Derecho — Subte de Buenos Aires',
    intro: 'Terminal norte de la Línea H, en el umbral de Recoleta: el barrio más elegante de Buenos Aires con el famoso cementerio y el MNBA.',
    tips: ['El Cementerio de la Recoleta es gratis y tiene la tumba de Eva Perón', 'El MNBA tiene entrada gratuita y una de las mejores colecciones de arte de Latinoamérica', 'La zona de la Recoleta tiene galerías, anticuarios y el Centro Cultural Recoleta'],
    descripcion_turistica: 'Facultad de Derecho es la terminal norte de la Línea H, ubicada en el límite entre Recoleta y Palermo. A pocas cuadras, el Cementerio de la Recoleta es uno de los cementerios más famosos del mundo, famoso por sus suntuosos mausoleos y por albergar los restos de figuras históricas argentinas, incluida Eva Perón. El Museo Nacional de Bellas Artes, con entrada gratuita, cuenta con la mayor colección de arte argentino e internacional del país. La elegante Avenida Alvear, con sus palacios y hoteles cinco estrellas, completa el paisaje de este rincón aristocrático de Buenos Aires.',
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true },
    horarios: { apertura: '06:00', cierre: '22:30', notas: 'L-V 06:00–22:30, S-D 08:00–22:00. Tarifa: ARS $270' },
    lugares_cercanos: [
      { nombre: 'Cementerio de la Recoleta', tipo: 'Turismo', distancia: '400 metros', descripcion: 'Uno de los cementerios más famosos del mundo con mausoleos de figuras históricas.' },
      { nombre: 'MNBA', tipo: 'Museo', distancia: '500 metros', descripcion: 'Museo Nacional de Bellas Artes con entrada gratuita y colección excepcional.' },
      { nombre: 'Centro Cultural Recoleta', tipo: 'Cultura', distancia: '450 metros', descripcion: 'Exposiciones de arte contemporáneo en un antiguo convento.' }
    ]
  }
];
