export const estacionesBerlin = [
  {
    slug: 'berlin-hbf',
    ciudad: 'berlin',
    nombre: 'Berlín Hauptbahnhof',
    linea: 'U5',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'La estación de trenes principal permanece abierta las 24 horas. Billetes: €3.50 zona AB, €9.20 billete de día.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Reichstag (Parlamento)', tipo: 'Turismo', distancia: '15 min caminando' },
      { nombre: 'Barrio Gubernamental', tipo: 'Turismo', distancia: '5 min caminando' },
      { nombre: 'Río Spree', tipo: 'Naturaleza', distancia: '3 min caminando' }
    ],
    seo_title: 'Berlín Hauptbahnhof — U-Bahn Berlín U5 | MetroGuia',
    meta_description: 'Berlín Hauptbahnhof: mayor estación ferroviaria de Europa, con acceso al Reichstag y el barrio gubernamental. Conexión AVE a Múnich, Hamburgo y Frankfurt.',
    h1: 'Berlín Hauptbahnhof — U-Bahn Berlín',
    intro: 'La mayor estación ferroviaria de Europa: el corazón de la red de trenes alemana en la capital reunificada.',
    descripcion_turistica: 'Berlin Hauptbahnhof (Estación Central de Berlín) es la intersección ferroviaria más grande de Europa, inaugurada en 2006 sobre el emplazamiento del histórico Lehrter Bahnhof. Su espectacular estructura de vidrio y acero superpone las vías S-Bahn norte-sur en los niveles inferiores, las vías de alta velocidad este-oeste en los superiores, y el metro U5 en el subsuelo, gestionando 350.000 pasajeros al día. Desde aquí parten los trenes ICE de alta velocidad a Hamburgo (1h45), Múnich (4h) y Frankfurt (3h45), además de rutas internacionales a París, Ámsterdam y Varsovia.',
    lugares_cercanos: [
      { nombre: 'Reichstag', tipo: 'Turismo', distancia: '1.0 km', descripcion: 'Sede del Parlamento alemán con la famosa cúpula de cristal. Visitas gratuitas, reserva obligatoria en bundestag.de.' },
      { nombre: 'Barrio Gubernamental (Regierungsviertel)', tipo: 'Turismo', distancia: '0.3 km', descripcion: 'Sede de la Cancillería Federal y los ministerios — paseo arquitectónico junto al Spree.' },
      { nombre: 'Hamburger Bahnhof (Museo de Arte Contemporáneo)', tipo: 'Cultura', distancia: '0.8 km', descripcion: 'Antigua estación de tren reconvertida en museo de arte contemporáneo de primer nivel.' }
    ]
  },
  {
    slug: 'potsdamer-platz',
    ciudad: 'berlin',
    nombre: 'Potsdamer Platz',
    linea: 'U2',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Billetes: €3.50 zona AB. El Sony Center es un punto de encuentro las 24 horas.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Sony Center', tipo: 'Arquitectura', distancia: '1 min caminando' },
      { nombre: 'Gemäldegalerie', tipo: 'Cultura', distancia: '8 min caminando' },
      { nombre: 'Filarmónica de Berlín', tipo: 'Cultura', distancia: '10 min caminando' }
    ],
    seo_title: 'Potsdamer Platz — U-Bahn Berlín U2 | MetroGuia',
    meta_description: 'Potsdamer Platz: el renacimiento urbano de Berlín tras la caída del Muro. Sony Center, Gemäldegalerie y Filarmónica.',
    h1: 'Potsdamer Platz — U-Bahn Berlín',
    intro: 'Donde estaba el Muro, Europa levantó su mayor obra de arquitectura contemporánea.',
    descripcion_turistica: 'Potsdamer Platz representa la transformación más dramática del Berlín posterior a la reunificación. Antes de 1989 era tierra de nadie entre el Este y el Oeste — el Muro atravesaba lo que había sido la plaza más transitada del Berlín de entreguerras. Tras la reunificación se convirtió en el mayor proyecto de construcción de Europa, surgiendo en los años 90 con el Sony Center (un espectacular complejo con techo de vidrio), el Barrio Daimler y un nuevo núcleo urbano. La zona alberga grandes museos como la Gemäldegalerie y la mundialmente reconocida Filarmónica de Berlín.',
    lugares_cercanos: [
      { nombre: 'Sony Center', tipo: 'Arquitectura', distancia: '0.1 km', descripcion: 'Complejo con techo de vidrio de Jürgen Mayer, con restaurantes y cine IMAX.' },
      { nombre: 'Gemäldegalerie', tipo: 'Cultura', distancia: '0.4 km', descripcion: 'Colección de Maestros Antiguos con Vermeer, Rembrandt y Rafael.' },
      { nombre: 'Filarmónica de Berlín', tipo: 'Cultura', distancia: '0.5 km', descripcion: 'Sala de conciertos de Hans Scharoun, sede de la Filarmónica de Berlín.' }
    ]
  },
  {
    slug: 'brandenburger-tor',
    ciudad: 'berlin',
    nombre: 'Puerta de Brandeburgo',
    linea: 'U5',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Estación nueva del U5 (inaugurada 2020). La Puerta de Brandeburgo es accesible las 24 horas.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Puerta de Brandeburgo', tipo: 'Turismo', distancia: '2 min caminando' },
      { nombre: 'Memorial del Holocausto', tipo: 'Turismo', distancia: '5 min caminando' },
      { nombre: 'Tiergarten', tipo: 'Naturaleza', distancia: '5 min caminando' }
    ],
    seo_title: 'Puerta de Brandeburgo — U-Bahn Berlín U5 | MetroGuia',
    meta_description: 'Puerta de Brandeburgo en Berlín: el monumento más icónico de Alemania y símbolo de la reunificación. Memorial del Holocausto a 5 minutos.',
    h1: 'Puerta de Brandeburgo — U-Bahn Berlín',
    intro: 'El arco que dividió una ciudad y luego la reunificó — el monumento más fotografiado de Alemania.',
    descripcion_turistica: 'La estación de la Puerta de Brandeburgo se sitúa bajo el símbolo más reconocible de Berlín: la Puerta de Brandeburgo (1791), un arco neoclásico diseñado por Carl Gotthard Langhans y coronado por la Cuadriga (una cuadriga de caballos). Durante 28 años la Puerta estuvo en tierra de nadie entre el Este y el Oeste, convirtiéndose en el símbolo más poderoso de la división de Alemania en la Guerra Fría. Cuando cayó el Muro el 9 de noviembre de 1989, la multitud la atravesó en masa. El Memorial del Holocausto, a 200 m al sur, es una de las obras conmemorativas públicas más poderosas jamás creadas.',
    lugares_cercanos: [
      { nombre: 'Puerta de Brandeburgo', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'El arco neoclásico más emblemático de Alemania — símbolo de la reunificación alemana.' },
      { nombre: 'Memorial del Holocausto', tipo: 'Turismo', distancia: '0.2 km', descripcion: '2.711 estelas de hormigón — uno de los memoriales más sobrios y emotivos del mundo. Entrada gratuita, abierto 24h.' },
      { nombre: 'Reichstag', tipo: 'Turismo', distancia: '0.5 km', descripcion: 'Reserva visita gratuita a la cúpula en bundestag.de — vistas panorámicas e historia política.' }
    ]
  },
  {
    slug: 'unter-den-linden',
    ciudad: 'berlin',
    nombre: 'Unter den Linden',
    linea: 'U5',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Estación inaugurada en 2020. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Bulevar Unter den Linden', tipo: 'Turismo', distancia: '1 min caminando' },
      { nombre: 'Foro Humboldt', tipo: 'Cultura', distancia: '5 min caminando' },
      { nombre: 'Isla de los Museos', tipo: 'Cultura', distancia: '8 min caminando' }
    ],
    seo_title: 'Unter den Linden — U-Bahn Berlín U5 | MetroGuia',
    meta_description: 'Unter den Linden: el gran bulevar histórico de Berlín, entre la Puerta de Brandeburgo y la Isla de los Museos. Foro Humboldt y Staatsoper.',
    h1: 'Unter den Linden — U-Bahn Berlín',
    intro: 'Bajo los tilos: el bulevar ceremonial de Berlín, desde la Puerta de Brandeburgo hasta la Isla de los Museos.',
    descripcion_turistica: 'La estación de Unter den Linden (inaugurada en diciembre de 2020 en la nueva extensión del U5) se sitúa bajo el bulevar histórico más famoso de Berlín — el paseo de los tilos que ha sido la espina dorsal ceremonial de la ciudad desde que la dinastía Hohenzollern lo diseñó en el siglo XVII. «Bajo los tilos» se extiende 1,5 km desde la Puerta de Brandeburgo al oeste hasta el Puente del Palacio al este, flanqueado por embajadas, la Staatsoper, la Universidad Humboldt, la Biblioteca del Estado y la Isla de los Museos — Patrimonio de la Humanidad con cinco museos de relevancia mundial.',
    lugares_cercanos: [
      { nombre: 'Isla de los Museos (Museumsinsel)', tipo: 'Cultura', distancia: '0.5 km', descripcion: 'Patrimonio de la Humanidad con 5 museos: Pérgamo, Alte Nationalgalerie, Bode y más.' },
      { nombre: 'Foro Humboldt', tipo: 'Cultura', distancia: '0.3 km', descripcion: 'Palacio de Berlín reconstruido con museo de culturas del mundo — planta baja gratuita.' },
      { nombre: 'Staatsoper', tipo: 'Cultura', distancia: '0.2 km', descripcion: 'Ópera Estatal Unter den Linden — una de las más prestigiosas de Alemania.' }
    ]
  },
  {
    slug: 'alexanderplatz',
    ciudad: 'berlin',
    nombre: 'Alexanderplatz',
    linea: 'U5',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '00:00 – 24:00',
      domingo: '00:00 – 24:00',
      notas: 'Noche continua viernes y sábado. Billetes: €3.50 zona AB, €9.20 billete de día.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Torre de Televisión (Fernsehturm)', tipo: 'Turismo', distancia: '3 min caminando' },
      { nombre: 'Reloj Mundial (Weltzeituhr)', tipo: 'Turismo', distancia: '1 min caminando' },
      { nombre: 'Karl-Marx-Allee', tipo: 'Turismo', distancia: '5 min caminando' }
    ],
    seo_title: 'Alexanderplatz — U-Bahn Berlín U5 | MetroGuia',
    meta_description: 'Alexanderplatz: el corazón del Berlín Oriental con la Torre de Televisión, el Reloj Mundial y el gran eje soviético de Karl-Marx-Allee.',
    h1: 'Alexanderplatz — U-Bahn Berlín',
    intro: 'El corazón del Berlín del Este: donde la Torre de Televisión perfora el cielo y el Reloj Mundial marca cada huso horario.',
    descripcion_turistica: 'Alexanderplatz es la plaza pública más icónica del antiguo Berlín Oriental y una de las más grandes de Europa, funcionando tanto como gran nudo de transporte como símbolo del urbanismo de la RDA. La plaza está dominada por el Fernsehturm de 368 metros (Torre de Televisión), construido en 1969 y aún la estructura más alta de Alemania, con una esfera de acero que aloja un restaurante giratorio a 207 m. En la calle, el Weltzeituhr de 1969 (Reloj Mundial) muestra la hora actual en 148 ciudades simultáneamente. A pesar de su carácter de hormigón de la era comunista, Alex —como lo llaman los berlineses— es genuinamente vivo, con mercados, artistas callejeros y locales que llenan su vasta plaza.',
    lugares_cercanos: [
      { nombre: 'Fernsehturm (Torre de Televisión)', tipo: 'Turismo', distancia: '0.2 km', descripcion: 'La estructura más alta de Alemania a 368 m — restaurante giratorio y mirador a 207 m.' },
      { nombre: 'Weltzeituhr (Reloj Mundial)', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'Reloj de 1969 que muestra la hora en 148 ciudades — punto de encuentro favorito de Berlín.' },
      { nombre: 'Karl-Marx-Allee', tipo: 'Turismo', distancia: '0.3 km', descripcion: 'Monumental bulevar socialista de 2,3 km con arquitectura estalinista — monumento protegido.' }
    ]
  },
  {
    slug: 'friedrichstrasse',
    ciudad: 'berlin',
    nombre: 'Friedrichstraße',
    linea: 'U6',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Gran nudo de intercambio con S-Bahn. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Checkpoint Charlie', tipo: 'Turismo', distancia: '10 min caminando' },
      { nombre: 'Gendarmenmarkt', tipo: 'Turismo', distancia: '8 min caminando' },
      { nombre: 'Galeries Lafayette Berlín', tipo: 'Comercio', distancia: '3 min caminando' }
    ],
    seo_title: 'Friedrichstraße — U-Bahn Berlín U6 | MetroGuia',
    meta_description: 'Friedrichstraße en Berlín: acceso a Checkpoint Charlie, Gendarmenmarkt y la zona de lujo de Mitte. Intercambio con S-Bahn.',
    h1: 'Friedrichstraße — U-Bahn Berlín',
    intro: 'La gran calle de Berlín Mitte: lujo moderno, historia de la Guerra Fría y la Galeries Lafayette.',
    descripcion_turistica: 'Friedrichstraße fue la calle más cosmopolita del Berlín de la República de Weimar, y hoy ha recuperado su vocación comercial y cultural de lujo. La estación es un gran nudo de intercambio entre el U6 y varias líneas de S-Bahn. A pocos minutos a pie se encuentra Checkpoint Charlie, el famoso paso fronterizo entre los sectores americano y soviético durante la Guerra Fría, y el Gendarmenmarkt, la plaza más elegante de Berlín, flanqueada por la Konzerthaus y las catedrales francesa y alemana. La Galeries Lafayette tiene su único establecimiento alemán aquí, con una arquitectura interior espectacular de Jean Nouvel.',
    lugares_cercanos: [
      { nombre: 'Checkpoint Charlie', tipo: 'Turismo', distancia: '0.8 km', descripcion: 'El antiguo paso fronterizo americano-soviético más célebre de la Guerra Fría.' },
      { nombre: 'Gendarmenmarkt', tipo: 'Turismo', distancia: '0.6 km', descripcion: 'La plaza más elegante de Berlín con la Konzerthaus y las catedrales gemelas.' },
      { nombre: 'Galeries Lafayette Berlín', tipo: 'Comercio', distancia: '0.3 km', descripcion: 'Único Lafayette en Alemania, con extraordinario atrio interior de Jean Nouvel.' }
    ]
  },
  {
    slug: 'museum-island',
    ciudad: 'berlin',
    nombre: 'Museumsinsel',
    linea: 'U5',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Estación del nuevo U5 (2020). Los museos abren normalmente de 10:00 a 18:00.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Museo del Pérgamo', tipo: 'Cultura', distancia: '3 min caminando' },
      { nombre: 'Alte Nationalgalerie', tipo: 'Cultura', distancia: '5 min caminando' },
      { nombre: 'Catedral de Berlín (Berliner Dom)', tipo: 'Turismo', distancia: '3 min caminando' }
    ],
    seo_title: 'Museumsinsel — U-Bahn Berlín U5 | MetroGuia',
    meta_description: 'Isla de los Museos de Berlín: 5 museos de clase mundial en una isla del Spree, Patrimonio de la Humanidad. Pérgamo, Bode y Catedral de Berlín.',
    h1: 'Museumsinsel — U-Bahn Berlín',
    intro: 'Cinco museos de clase mundial en una isla del río Spree — Patrimonio de la Humanidad de la UNESCO.',
    descripcion_turistica: 'La Isla de los Museos de Berlín es una de las concentraciones museísticas más extraordinarias del mundo: cinco grandes museos construidos en un islote del río Spree entre 1824 y 1930, reconocidos como Patrimonio de la Humanidad por la UNESCO. El Museo del Pérgamo alberga el imponente Altar de Pérgamo y la Puerta de Ishtar de Babilonia. La Alte Nationalgalerie presenta arte neoclásico y romántico alemán. El Altes Museum, el Neues Museum (con el busto de Nefertiti) y el Bode Museum completan el conjunto. La catedral de Berlín (Berliner Dom) se encuentra justo al lado, con sus espléndidas cúpulas sobre el Spree.',
    lugares_cercanos: [
      { nombre: 'Museo del Pérgamo', tipo: 'Cultura', distancia: '0.3 km', descripcion: 'Alberga el Altar de Pérgamo y la Puerta de Ishtar de Babilonia — en renovación parcial.' },
      { nombre: 'Neues Museum', tipo: 'Cultura', distancia: '0.3 km', descripcion: 'El busto de Nefertiti y las colecciones de arte egipcio y prehistórico.' },
      { nombre: 'Berliner Dom', tipo: 'Turismo', distancia: '0.3 km', descripcion: 'Majestuosa catedral protestante del siglo XIX con cripta imperial y vistas desde la cúpula.' }
    ]
  },
  {
    slug: 'kurfurstendamm',
    ciudad: 'berlin',
    nombre: 'Kurfürstendamm',
    linea: 'U9',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '00:00 – 24:00',
      domingo: '00:00 – 24:00',
      notas: 'Noche continua viernes y sábado. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Kurfürstendamm (Ku\'damm)', tipo: 'Comercio', distancia: '1 min caminando' },
      { nombre: 'Iglesia Conmemorativa Kaiser Wilhelm', tipo: 'Turismo', distancia: '5 min caminando' },
      { nombre: 'KaDeWe', tipo: 'Comercio', distancia: '8 min caminando' }
    ],
    seo_title: 'Kurfürstendamm — U-Bahn Berlín U9 | MetroGuia',
    meta_description: 'Kurfürstendamm en Berlín: el gran bulevar de compras del Berlín Occidental, la Iglesia Conmemorativa Kaiser Wilhelm y KaDeWe.',
    h1: 'Kurfürstendamm — U-Bahn Berlín',
    intro: 'El Ku\'damm: el gran bulevar de compras del Berlín Occidental, con su iglesia en ruinas como monumento antibelicista.',
    descripcion_turistica: 'El Kurfürstendamm — conocido universalmente como el Ku\'damm — fue el equivalente berlinés de los Champs-Élysées durante la Guerra Fría, el bulevar de escaparate del Berlín Occidental. Sus 3,5 km de boutiques de lujo, cafés, cines y hoteles de cinco estrellas concentraban toda la ostentación capitalista frente al telón de acero. En su extremo oriental se levanta la Gedächtniskirche (Iglesia Conmemorativa Kaiser Wilhelm), deliberadamente dejada en ruinas como memorial contra la guerra, con una nueva torre de cristal azul construida a su lado en los años 60. El KaDeWe, el segundo gran almacén de Europa tras Harrods, está a pocos minutos caminando.',
    lugares_cercanos: [
      { nombre: 'Gedächtniskirche (Iglesia Conmemorativa Kaiser Wilhelm)', tipo: 'Turismo', distancia: '0.4 km', descripcion: 'Ruinas deliberadas de la guerra, con nueva torre de cristal azul — símbolo de la memoria histórica.' },
      { nombre: 'KaDeWe', tipo: 'Comercio', distancia: '0.7 km', descripcion: 'El segundo gran almacén de Europa — el hall gastronómico del 6.º piso es una institución berlinesa.' },
      { nombre: 'Ku\'damm', tipo: 'Comercio', distancia: '0.1 km', descripcion: 'Bulevar de 3,5 km con marcas internacionales, restaurantes y cafés de terraza.' }
    ]
  },
  {
    slug: 'zoologischer-garten',
    ciudad: 'berlin',
    nombre: 'Zoologischer Garten',
    linea: 'U2',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '00:00 – 24:00',
      domingo: '00:00 – 24:00',
      notas: 'Noche continua viernes y sábado. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Jardín Zoológico de Berlín', tipo: 'Turismo', distancia: '3 min caminando' },
      { nombre: 'KaDeWe', tipo: 'Comercio', distancia: '8 min caminando' },
      { nombre: 'Kurfürstendamm', tipo: 'Comercio', distancia: '3 min caminando' }
    ],
    seo_title: 'Zoologischer Garten — U-Bahn Berlín U2 | MetroGuia',
    meta_description: 'Zoologischer Garten en Berlín: el zoo más rico en especies de Europa, el Ku\'damm y KaDeWe. El centro histórico del Berlín Occidental.',
    h1: 'Zoologischer Garten — U-Bahn Berlín',
    intro: 'El centro histórico del Berlín Occidental: el zoo más diverso de Europa, el Ku\'damm y el legendario KaDeWe.',
    descripcion_turistica: 'La estación de Zoologischer Garten (Zoo Station) fue durante décadas el nudo de transporte más importante del Berlín Occidental, la puerta de entrada simbólica a la mitad libre de la ciudad dividida. El Jardín Zoológico de Berlín —el zoo más rico en especies de Europa con más de 20.000 animales— está a escasos metros de la salida. El bulevar Kurfürstendamm se extiende desde la estación hacia el oeste, bordeado de marcas de lujo, cines, cafés y terminando en la ruinosa Iglesia Conmemorativa Kaiser Wilhelm, conservada deliberadamente sin reparar como memorial de guerra.',
    lugares_cercanos: [
      { nombre: 'Jardín Zoológico de Berlín', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'El zoo más rico en especies de Europa con más de 20.000 animales, incluidos pandas gigantes.' },
      { nombre: 'KaDeWe', tipo: 'Comercio', distancia: '0.6 km', descripcion: 'El segundo gran almacén de Europa — el hall gastronómico del 6.º piso es una institución berlinesa.' },
      { nombre: 'Kurfürstendamm', tipo: 'Comercio', distancia: '0.2 km', descripcion: 'El gran bulevar de compras del Berlín Occidental, 3,5 km de boutiques y cafés.' }
    ]
  },
  {
    slug: 'charlottenburg',
    ciudad: 'berlin',
    nombre: 'Charlottenburg',
    linea: 'U7',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Palacio de Charlottenburg', tipo: 'Turismo', distancia: '10 min caminando' },
      { nombre: 'Musée Berggruen', tipo: 'Cultura', distancia: '12 min caminando' }
    ],
    seo_title: 'Charlottenburg — U-Bahn Berlín U7 | MetroGuia',
    meta_description: 'Charlottenburg en Berlín: acceso al grandioso Palacio de Charlottenburg y el Musée Berggruen con obras de Picasso y Klee.',
    h1: 'Charlottenburg — U-Bahn Berlín',
    intro: 'Portal al palacio barroco más grande de Berlín — los jardines y el Musée Berggruen esperan.',
    descripcion_turistica: 'El barrio de Charlottenburg fue la ciudad independiente más glamurosa de los alrededores de Berlín antes de ser absorbida en 1920. Su joya es el Palacio de Charlottenburg, el palacio barroco más grande de Berlín, construido entre 1695 y 1713 para la reina Sofía Carlota de Hannover. El conjunto incluye extensos jardines formales franceses, el Pabellón Schinkel y el Mausoleo Real. Enfrente del palacio se encuentra el Musée Berggruen, que alberga una extraordinaria colección privada de Picasso, Klee, Matisse y Giacometti.',
    lugares_cercanos: [
      { nombre: 'Palacio de Charlottenburg', tipo: 'Turismo', distancia: '0.8 km', descripcion: 'El mayor palacio barroco de Berlín con jardines formales franceses y colecciones reales.' },
      { nombre: 'Musée Berggruen', tipo: 'Cultura', distancia: '0.9 km', descripcion: 'Extraordinaria colección privada de Picasso, Klee, Matisse y Giacometti.' }
    ]
  },
  {
    slug: 'nollendorfplatz',
    ciudad: 'berlin',
    nombre: 'Nollendorfplatz',
    linea: 'U1',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '00:00 – 24:00',
      domingo: '00:00 – 24:00',
      notas: 'Intercambio de 4 líneas. Noche continua viernes y sábado. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Barrio Gay de Schöneberg', tipo: 'Barrio', distancia: '1 min caminando' },
      { nombre: 'Memorial al triángulo rosa', tipo: 'Cultura', distancia: '2 min caminando' }
    ],
    seo_title: 'Nollendorfplatz — U-Bahn Berlín U1/U2/U3/U4 | MetroGuia',
    meta_description: 'Nollendorfplatz en Berlín: intercambio de 4 líneas en el histórico barrio LGBTQ+ de Schöneberg, donde vivió Christopher Isherwood.',
    h1: 'Nollendorfplatz — U-Bahn Berlín',
    intro: 'El intercambio de cuatro líneas en el histórico village gay de Berlín, donde Christopher Isherwood escribió «Adiós a Berlín».',
    descripcion_turistica: 'Nollendorfplatz es una de las plazas con más capas históricas de Berlín, sirviendo como intercambio de cuatro líneas de U-Bahn en el corazón de Schöneberg. La identidad queer del barrio se remonta a los años 20, cuando Berlín era la ciudad sexualmente más abierta del mundo — la época que Christopher Isherwood capturó en «Adiós a Berlín» (llevada al cine como «Cabaret»). Tras la persecución nazi y la Guerra Fría, la zona resurgió como centro LGBTQ+ de Berlín en los años 70 y mantiene ese carácter hoy, con una diversa escena de bares y los memoriales a las víctimas homosexuales del Holocausto.',
    lugares_cercanos: [
      { nombre: 'Barrio Gay de Schöneberg', tipo: 'Barrio', distancia: '0.1 km', descripcion: 'El histórico barrio LGBTQ+ de Berlín, con bares, cafés e historia comunitaria.' },
      { nombre: 'Nollendorfstraße 17', tipo: 'Cultura', distancia: '0.2 km', descripcion: 'Placa conmemorativa en el edificio donde vivió Christopher Isherwood, autor de «Adiós a Berlín».' }
    ]
  },
  {
    slug: 'schoneberg-rathaus',
    ciudad: 'berlin',
    nombre: 'Rathaus Schöneberg',
    linea: 'U4',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Ayuntamiento de Schöneberg (Rathaus Schöneberg)', tipo: 'Turismo', distancia: '2 min caminando' },
      { nombre: 'Winterfeldtmarkt', tipo: 'Gastronomía', distancia: '8 min caminando' }
    ],
    seo_title: 'Rathaus Schöneberg — U-Bahn Berlín U4 | MetroGuia',
    meta_description: 'Rathaus Schöneberg en Berlín: donde John F. Kennedy pronunció «Ich bin ein Berliner» en 1963. El barrio más europeo de Berlín.',
    h1: 'Rathaus Schöneberg — U-Bahn Berlín',
    intro: 'El balcón donde Kennedy dijo «Ich bin ein Berliner» — el ayuntamiento más famoso de la Guerra Fría.',
    descripcion_turistica: 'El Rathaus Schöneberg es famoso en todo el mundo por un solo discurso: el 26 de junio de 1963, el presidente John F. Kennedy pronunció aquí ante 450.000 berlineses su célebre «Ich bin ein Berliner» («Soy un berlinés»), en solidaridad con la ciudad dividida. El edificio de estilo neorrenacentista funcionó como ayuntamiento del Berlín Occidental durante la división de la ciudad. El barrio de Schöneberg que lo rodea es uno de los más agradables de Berlín, con el animado Winterfeldtmarkt (miércoles y sábados) y una excelente gastronomía independiente.',
    lugares_cercanos: [
      { nombre: 'Rathaus Schöneberg', tipo: 'Turismo', distancia: '0.2 km', descripcion: 'Donde Kennedy pronunció «Ich bin ein Berliner» en 1963 ante 450.000 berlineses.' },
      { nombre: 'Winterfeldtmarkt', tipo: 'Gastronomía', distancia: '0.7 km', descripcion: 'El mejor mercado de barrio de Berlín — miércoles y sábados, productos frescos y comida callejera.' }
    ]
  },
  {
    slug: 'kreuzberg-kottbusser-tor',
    ciudad: 'berlin',
    nombre: 'Kottbusser Tor',
    linea: 'U1',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '00:00 – 24:00',
      domingo: '00:00 – 24:00',
      notas: 'Noche continua viernes y sábado. El Kotti es activo las 24 horas. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Kreuzberg', tipo: 'Barrio', distancia: '1 min caminando' },
      { nombre: 'Mercado turco de Maybachufer', tipo: 'Turismo', distancia: '10 min caminando' }
    ],
    seo_title: 'Kottbusser Tor — U-Bahn Berlín U1/U8 | MetroGuia',
    meta_description: 'Kottbusser Tor en Berlín: el corazón de Kreuzberg, el barrio más multicultural y alternativo de Berlín. Mejor döner y ambiente nocturno.',
    h1: 'Kottbusser Tor — U-Bahn Berlín',
    intro: 'El Kotti — el corazón palpitante del barrio más alternativo y multicultural de Berlín.',
    descripcion_turistica: 'Kottbusser Tor, conocido universalmente como «Kotti», es uno de los cruces más vibrantes e icónicos de Berlín — un hub de 24 horas en el corazón de SO36, la parte culturalmente más rica de Kreuzberg. El barrio fue el barrio turco del Berlín Occidental durante la Guerra Fría, cuando trabajadores turcos llegaron para ocupar empleos que los berlineses occidentales no querían. Hoy Kreuzberg es una de las zonas urbanas más multiculturales de Europa, mezclando la comunidad turca con la subcultura alternativa, artistas y residentes de larga trayectoria. El mercado turco a orillas del canal de Maybachufer (mar. y vie.) es el mayor mercado turco al aire libre de Alemania.',
    lugares_cercanos: [
      { nombre: 'Mercado Turco de Maybachufer', tipo: 'Turismo', distancia: '0.7 km', descripcion: 'El mayor mercado turco de Alemania a orillas del canal Landwehr — mar. y vie. de 11:00 a 18:30.' },
      { nombre: 'Oranienstraße', tipo: 'Barrio', distancia: '0.3 km', descripcion: 'La calle alternativa más legendaria de Kreuzberg con clubes, galerías y döner.' }
    ]
  },
  {
    slug: 'berlin-ostbahnhof',
    ciudad: 'berlin',
    nombre: 'Ostbahnhof',
    linea: 'U1',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Importante nudo con S-Bahn y trenes regionales. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'East Side Gallery', tipo: 'Cultura', distancia: '3 min caminando' },
      { nombre: 'Mercedes-Benz Arena', tipo: 'Entretenimiento', distancia: '5 min caminando' }
    ],
    seo_title: 'Ostbahnhof — U-Bahn Berlín | MetroGuia',
    meta_description: 'Ostbahnhof en Berlín: puerta a la East Side Gallery (1,3 km del Muro original con murales) y el corazón de Friedrichshain.',
    h1: 'Ostbahnhof — U-Bahn Berlín',
    intro: 'La antigua estación principal del Berlín Oriental — hoy puerta a la East Side Gallery y al barrio de moda de Friedrichshain.',
    descripcion_turistica: 'El Ostbahnhof fue durante décadas la estación principal del Berlín Oriental, el equivalente al Hauptbahnhof del Oeste. Hoy es un importante nudo ferroviario con acceso directo a la East Side Gallery — 1,3 km de la sección original del Muro de Berlín pintados con 105 murales por artistas internacionales en 1990, incluyendo el icónico «Beso Fraternal» entre Brézhnev y Honecker. El barrio de Friedrichshain que rodea la estación es el epicentro de la legendaria escena de clubes nocturnos de Berlín.',
    lugares_cercanos: [
      { nombre: 'East Side Gallery', tipo: 'Cultura', distancia: '0.3 km', descripcion: '1,3 km del Muro de Berlín original con 105 murales de artistas internacionales — entrada gratuita, 24h.' },
      { nombre: 'Mercedes-Benz Arena', tipo: 'Entretenimiento', distancia: '0.4 km', descripcion: 'Principal recinto para conciertos y eventos deportivos de Berlín.' }
    ]
  },
  {
    slug: 'warschauer-strasse',
    ciudad: 'berlin',
    nombre: 'Warschauer Straße',
    linea: 'U1',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '00:00 – 24:00',
      domingo: '00:00 – 24:00',
      notas: 'Noche continua viernes y sábado. El RAW Gelände tiene eventos hasta el amanecer. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'East Side Gallery', tipo: 'Cultura', distancia: '8 min caminando' },
      { nombre: 'RAW Gelände', tipo: 'Entretenimiento', distancia: '3 min caminando' }
    ],
    seo_title: 'Warschauer Straße — U-Bahn Berlín U1 | MetroGuia',
    meta_description: 'Warschauer Straße en Berlín: hub de Friedrichshain, East Side Gallery y la escena de clubes más intensa de Berlín. El RAW Gelände a 3 minutos.',
    h1: 'Warschauer Straße — U-Bahn Berlín',
    intro: 'El hub de Friedrichshain: la East Side Gallery, el Muro y la escena de clubes más intensa de Berlín.',
    descripcion_turistica: 'La estación de Warschauer Straße es la puerta de entrada a Friedrichshain — el antiguo barrio del Berlín Oriental que se ha convertido en el epicentro de la legendaria escena de clubes nocturnos de Berlín. La East Side Gallery, a 400 m al oeste, es una sección de 1,3 km del Muro original pintada con 105 murales de artistas internacionales en 1990, incluyendo el icónico «Beso Fraternal» entre Brezhnev y Honecker. El RAW Gelände, a 200 m al este, es un antiguo taller ferroviario del siglo XIX reconvertido en uno de los espacios culturales más alternativos de Europa, con clubes, conciertos, skateparks y estudios.',
    lugares_cercanos: [
      { nombre: 'East Side Gallery', tipo: 'Cultura', distancia: '0.4 km', descripcion: '1,3 km del Muro de Berlín original con 105 murales de artistas internacionales — gratuita, 24h.' },
      { nombre: 'RAW Gelände', tipo: 'Entretenimiento', distancia: '0.2 km', descripcion: 'Antiguo taller ferroviario reconvertido en espacio de clubes, música y skate.' }
    ]
  },
  {
    slug: 'prenzlauer-berg-eberswalder',
    ciudad: 'berlin',
    nombre: 'Eberswalder Straße',
    linea: 'U2',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'El U2 circula en viaducto elevado aquí. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Kastanienallee', tipo: 'Barrio', distancia: '2 min caminando' },
      { nombre: 'Mauerpark', tipo: 'Turismo', distancia: '12 min caminando' }
    ],
    seo_title: 'Eberswalder Straße — U-Bahn Berlín U2 | MetroGuia',
    meta_description: 'Eberswalder Straße en Berlín: corazón de Prenzlauer Berg, el barrio más gentrificado y de moda de Berlín, con Kastanienallee y el mercadillo de Mauerpark.',
    h1: 'Eberswalder Straße — U-Bahn Berlín',
    intro: 'El corazón de Prenzlauer Berg — el mejor café, las mejores boutiques y el mercadillo dominical de Mauerpark.',
    descripcion_turistica: 'La estación de Eberswalder Straße es una estructura elevada, con las vías del U2 corriendo sobre un viaducto de hierro de 1913 que da al barrio un carácter distintivo reminiscente de Nueva York o Chicago. Bajo ella se encuentra Prenzlauer Berg, una de las transformaciones más dramáticas del Berlín posterior a la reunificación: un barrio de edificios residenciales de preguerra que se había dejado deteriorar durante la era de la RDA, rápidamente gentrificado en los 90 y 2000. Hoy es una de las zonas más codiciadas de Berlín, conocida por su cultura de café, boutiques independientes y el legendario mercadillo de Mauerpark los domingos.',
    lugares_cercanos: [
      { nombre: 'Mauerpark', tipo: 'Turismo', distancia: '0.8 km', descripcion: 'Mercadillo dominical en una franja del antiguo Muro — karaoke, comida y artículos vintage.' },
      { nombre: 'Kastanienallee', tipo: 'Barrio', distancia: '0.2 km', descripcion: 'La calle más de moda de Berlín, con cafés independientes, restaurantes y boutiques.' }
    ]
  },
  {
    slug: 'hackescher-markt',
    ciudad: 'berlin',
    nombre: 'Hackescher Markt',
    linea: 'U8',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Acceso también por S-Bahn. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Hackesche Höfe', tipo: 'Turismo', distancia: '2 min caminando' },
      { nombre: 'Spandauer Vorstadt', tipo: 'Barrio', distancia: '1 min caminando' }
    ],
    seo_title: 'Hackescher Markt — U-Bahn Berlín U8 | MetroGuia',
    meta_description: 'Hackescher Markt en Berlín: los Hackesche Höfe (patios art nouveau), la Spandauer Vorstadt y el epicentro del Berlín de moda de Mitte.',
    h1: 'Hackescher Markt — U-Bahn Berlín',
    intro: 'Los famosos patios art nouveau de las Hackesche Höfe — el epicentro del Berlín de moda en Mitte.',
    descripcion_turistica: 'Hackescher Markt es el corazón de la Spandauer Vorstadt, el barrio más de moda del Berlín de Mitte, con una mezcla de historia judía, galería de arte y restaurantes de diseño. La joya de la zona son las Hackesche Höfe — un conjunto de ocho patios interconectados de estilo art nouveau construidos en 1907, hoy llenos de boutiques de diseño, cafés, teatros pequeños y restaurantes. El Hackesche Markt en sí es una pequeña plaza animada con terrazas y el característico S-Bahn elevado de ladrillo rojo que define el paisaje urbano del centro de Berlín.',
    lugares_cercanos: [
      { nombre: 'Hackesche Höfe', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'Ocho patios interconectados de art nouveau (1907) con boutiques, cafés y teatros.' },
      { nombre: 'Neue Synagoge', tipo: 'Cultura', distancia: '0.5 km', descripcion: 'Gran sinagoga de 1866 en estilo morisco — hoy museo e institución cultural.' }
    ]
  },
  {
    slug: 'mitte-rosenthaler-platz',
    ciudad: 'berlin',
    nombre: 'Rosenthaler Platz',
    linea: 'U8',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '00:00 – 24:00',
      domingo: '00:00 – 24:00',
      notas: 'Noche continua viernes y sábado. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Spandauer Vorstadt', tipo: 'Barrio', distancia: '1 min caminando' },
      { nombre: 'Torstraße', tipo: 'Barrio', distancia: '2 min caminando' }
    ],
    seo_title: 'Rosenthaler Platz — U-Bahn Berlín U8 | MetroGuia',
    meta_description: 'Rosenthaler Platz en Berlín: cruce del hipster Berlín de Mitte con la mejor selección de bares, restaurantes y galerías de la Torstraße.',
    h1: 'Rosenthaler Platz — U-Bahn Berlín',
    intro: 'El cruce del Berlín hipster — bares de cócteles, galerías emergentes y la Torstraße más animada.',
    descripcion_turistica: 'Rosenthaler Platz es el cruce neurálgico del Berlín de moda en Mitte, donde convergen cuatro calles llenas de bares, galerías, tiendas de vintage y restaurantes de cocina del mundo. La Torstraße que parte desde aquí se ha convertido en una de las calles con más restaurantes y bares por metro cuadrado de Berlín, favorita de los berlineses creativos. El área entre Hackescher Markt y Rosenthaler Platz concentra una parte importante del Berlín de galerías de arte emergente y diseño independiente.',
    lugares_cercanos: [
      { nombre: 'Torstraße', tipo: 'Barrio', distancia: '0.1 km', descripcion: 'La calle de restaurantes y bares más densa de Berlín Mitte.' },
      { nombre: 'Spandauer Vorstadt', tipo: 'Barrio', distancia: '0.2 km', descripcion: 'El barrio más de moda de Berlín con galerías, boutiques y cafés de especialidad.' }
    ]
  },
  {
    slug: 'berlin-sudkreuz',
    ciudad: 'berlin',
    nombre: 'Südkreuz',
    linea: 'S41',
    tipo_zona: 'AB',
    horarios: {
      lunes_viernes: '04:00 – 01:00',
      sabado: '04:00 – 01:00',
      domingo: '04:00 – 01:00',
      notas: 'Estación de S-Bahn con S-Ring, S-Bahn y trenes regionales. Billetes: €3.50 zona AB.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Tempodrom', tipo: 'Entretenimiento', distancia: '10 min caminando' },
      { nombre: 'Flughafen Tempelhof', tipo: 'Turismo', distancia: '15 min caminando' }
    ],
    seo_title: 'Südkreuz — S-Bahn Berlín | MetroGuia',
    meta_description: 'Südkreuz en Berlín: importante nudo ferroviario al sur de la ciudad, puerta al antiguo aeropuerto de Tempelhof reconvertido en parque.',
    h1: 'Südkreuz — S-Bahn Berlín',
    intro: 'El cruce sur de Berlín — nudo ferroviario y puerta al parque del antiguo aeropuerto de Tempelhof.',
    descripcion_turistica: 'Südkreuz (Cruz del Sur) es uno de los nudos ferroviarios más importantes del sur de Berlín, con conexiones S-Bahn al S-Ring, el anillo circular que rodea el centro, y trenes regionales. La estación sirve como puerta de acceso al Flughafen Tempelhof, el antiguo aeropuerto de Berlín cerrado en 2008 y transformado en uno de los parques urbanos más grandes y singulares del mundo. La pista de aterrizaje original de 6 km permanece y es usada por ciclistas, kitesurfers y paseantes en un espacio de libertad única en Europa.',
    lugares_cercanos: [
      { nombre: 'Tempelhofer Feld (Parque Tempelhof)', tipo: 'Naturaleza', distancia: '1.2 km', descripcion: 'El antiguo aeropuerto de Berlín convertido en parque — 6 km de pista usada por ciclistas y kitesurf.' },
      { nombre: 'Tempodrom', tipo: 'Entretenimiento', distancia: '0.8 km', descripcion: 'Sala de conciertos y eventos con una característica carpa blanca moderna.' }
    ]
  },
  {
    slug: 'flughafen-ber',
    ciudad: 'berlin',
    nombre: 'Flughafen BER',
    linea: 'U22',
    tipo_zona: 'ABC',
    horarios: {
      lunes_viernes: '04:30 – 23:30',
      sabado: '04:30 – 23:30',
      domingo: '04:30 – 23:30',
      notas: 'Aeropuerto Internacional de Berlín Brandeburgo. Billetes: €4.00 zona ABC (incluye BER).'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Terminal 1 BER', tipo: 'Transporte', distancia: '1 min caminando' },
      { nombre: 'Terminal 2 BER', tipo: 'Transporte', distancia: '5 min caminando' }
    ],
    seo_title: 'Flughafen BER — Aeropuerto de Berlín Brandeburgo | MetroGuia',
    meta_description: 'Aeropuerto de Berlín Brandeburgo (BER): conexión directa al centro de Berlín en 30 minutos por el Airport Express (FEX) o la S-Bahn S9.',
    h1: 'Flughafen BER — Aeropuerto de Berlín Brandeburgo',
    intro: 'El aeropuerto internacional de Berlín — conectado al centro de la ciudad en 30 minutos.',
    descripcion_turistica: 'El Aeropuerto de Berlín Brandeburgo (BER), inaugurado en 2020 tras casi una década de retrasos que se convirtieron en objeto de burla internacional, es el aeropuerto principal de la capital alemana, sustituyendo a los históricos Tegel y Schönefeld. La conexión más rápida al centro es el Airport Express (FEX) que llega a Hauptbahnhof en 30 minutos. La S-Bahn S9 ofrece una alternativa más económica con paradas adicionales. El nuevo aeropuerto concentra vuelos de Ryanair, EasyJet, Lufthansa y las principales aerolíneas europeas.',
    lugares_cercanos: [
      { nombre: 'Terminal 1 BER', tipo: 'Transporte', distancia: '0.1 km', descripcion: 'Terminal principal del aeropuerto con vuelos de Lufthansa, Ryanair y las principales aerolíneas.' },
      { nombre: 'Centro Comercial BER', tipo: 'Comercio', distancia: '0.2 km', descripcion: 'Tiendas y restaurantes dentro del aeropuerto, abierto los días de vuelos.' }
    ]
  }
];
