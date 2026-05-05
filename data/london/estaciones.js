export const estacionesLondon = [
  {
    slug: "king-s-cross-st-pancras",
    nombre: "King's Cross St. Pancras",
    linea: "Piccadilly",
    municipio: "Camden",
    tipo_zona: "turistica",
    pois: [
      { nombre: "British Library", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Platform 9¾ (Harry Potter)", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "St. Pancras International", tipo: "transporte", distancia: "1 min caminando" },
      { nombre: "Granary Square", tipo: "parque", distancia: "10 min caminando" }
    ],
    transferencias: ["king-s-cross-st-pancras"],
    seo_title: "King's Cross St. Pancras — Metro Londres | MetroGuia",
    meta_description: "Estación King's Cross St. Pancras en el metro de Londres. Hub central con 6 líneas, acceso a Eurostar, Harry Potter Platform 9¾ y la British Library.",
    h1: "King's Cross St. Pancras — Underground Londres",
    intro: "King's Cross St. Pancras es el mayor nudo de transporte del norte de Londres, con acceso a 6 líneas del metro, trenes nacionales e internacionales (Eurostar a París y Bruselas). Icónica por el andén 9¾ de Harry Potter.",
    tips: [
      "El andén 9¾ de Harry Potter está en la estación principal — hay fila para la foto pero vale la pena.",
      "St. Pancras International tiene el mejor pub de estación de Londres: The Betjeman Arms.",
      "La British Library tiene entrada gratuita y exposiciones temporales fascinantes.",
      "Desde aquí salen trenes directos a Edimburgo, Leeds y York."
    ],
    mejor_horario: "Evita las 8-9h y 17-19h entre semana. Mañanas de fin de semana son ideales.",
    mundial_relevancia: "Hub Eurostar hacia París y Bruselas. Estación más concurrida del Reino Unido.",
    descripcion_turistica: "King's Cross es una de las estaciones más transformadas de Londres. El área, antes industrial y deteriorada, es ahora un vibrante barrio cultural con restaurantes, galerías y el Campus de Google. La renovada sala principal con su icónica cubierta blanca diseñada por John McAslan es una obra de arte arquitectónica.",
    lugares_cercanos: [
      { nombre: "British Library", tipo: "museo", distancia: "0.3 km", descripcion: "La biblioteca nacional del Reino Unido con la Magna Carta y textos originales de Shakespeare." },
      { nombre: "Platform 9¾", tipo: "turismo", distancia: "0.1 km", descripcion: "El mítico andén de Harry Potter con tienda oficial y carrito fotográfico." },
      { nombre: "Granary Square", tipo: "comercio", distancia: "0.7 km", descripcion: "Animado espacio junto al canal de Regent con terrazas y fuentes interactivas." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Night Tube en líneas Victoria y Piccadilly los fines de semana."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Step-Free desde calle hasta andenes en todas las líneas. Asistencia disponible 24h."
    }
  },
  {
    slug: "victoria",
    nombre: "Victoria",
    linea: "Victoria",
    municipio: "Westminster",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Palacio de Buckingham", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Tate Britain", tipo: "museo", distancia: "15 min caminando" },
      { nombre: "Victoria Coach Station", tipo: "transporte", distancia: "5 min caminando" },
      { nombre: "St. James's Park", tipo: "parque", distancia: "8 min caminando" }
    ],
    transferencias: ["victoria"],
    seo_title: "Victoria — Metro Londres | MetroGuia",
    meta_description: "Estación Victoria en Londres. Acceso a Buckingham Palace, Tate Britain y conexiones con Gatwick Express. Una de las estaciones más concurridas del sistema.",
    h1: "Victoria — Underground Londres",
    intro: "Victoria es el gran hub del sur de Londres, con conexiones a Gatwick Airport, trenes nacionales y la línea de autobuses más extensa. A pasos del Palacio de Buckingham.",
    tips: [
      "El Gatwick Express sale desde la estación nacional de Victoria, no del metro.",
      "St. James's Park es perfecto para un picnic entre Buckingham y el metro.",
      "La Victoria Line es una de las más rápidas — directa hasta Oxford Circus en 3 minutos.",
      "Evita la salida hacia Buckingham Palace Road en hora punta."
    ],
    mejor_horario: "Madrugada (07-09h) en fin de semana para ver el cambio de guardia con menos gente.",
    mundial_relevancia: "Puerta de entrada al Palacio de Buckingham y sede de la guardia real.",
    descripcion_turistica: "Victoria combina la grandeza imperial del entorno real con la practicidad de un hub de transporte moderno. La zona alberga teatros del West End, hoteles históricos y el acceso más directo al palacio oficial de la monarquía británica.",
    lugares_cercanos: [
      { nombre: "Palacio de Buckingham", tipo: "turismo", distancia: "0.8 km", descripcion: "Residencia oficial de la familia real. El cambio de guardia ocurre a las 11:00h." },
      { nombre: "Tate Britain", tipo: "museo", distancia: "0.9 km", descripcion: "El museo nacional de arte británico desde el siglo XVI hasta la actualidad." },
      { nombre: "St. James's Park", tipo: "parque", distancia: "0.6 km", descripcion: "El parque real más antiguo de Londres con vistas al Palacio." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Night Tube operativo fines de semana en la línea Victoria."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Step-Free Access completo desde calle hasta andén."
    }
  },
  {
    slug: "oxford-circus",
    nombre: "Oxford Circus",
    linea: "Victoria",
    municipio: "Westminster",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Oxford Street", tipo: "comercio", distancia: "1 min caminando" },
      { nombre: "Regent Street", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Liberty London", tipo: "comercio", distancia: "5 min caminando" },
      { nombre: "Carnaby Street", tipo: "comercio", distancia: "4 min caminando" }
    ],
    transferencias: ["oxford-circus"],
    seo_title: "Oxford Circus — Metro Londres | MetroGuia",
    meta_description: "Oxford Circus, la estación más concurrida de Londres. Centro del shopping con Oxford Street, Regent Street y Liberty. Conecta líneas Central, Bakerloo y Victoria.",
    h1: "Oxford Circus — Underground Londres",
    intro: "Oxford Circus es el epicentro del comercio londinense. En la intersección de Oxford Street y Regent Street, es la estación más transitada de todo el metro de Londres.",
    tips: [
      "Oxford Street tiene 300 tiendas en 2 km — empieza por el extremo de Marble Arch para mayor variedad.",
      "Liberty London tiene arquitectura Tudor impresionante y productos únicos de diseño.",
      "Evita los sábados entre 13-16h: es el momento de máxima saturación del año.",
      "Carnaby Street es más cool y menos masificada que Oxford Street."
    ],
    mejor_horario: "Mañanas de lunes a jueves antes de las 11h para disfrutar sin multitudes.",
    mundial_relevancia: "Estación más visitada del sistema London Underground. Corazón del shopping londinense.",
    descripcion_turistica: "Oxford Circus es sinónimo de Londres moderno y cosmopolita. La zona concentra flagship stores de marcas globales, boutiques independientes y los restaurantes más variados en las calles adyacentes de Soho.",
    lugares_cercanos: [
      { nombre: "Oxford Street", tipo: "comercio", distancia: "0.1 km", descripcion: "La calle comercial más famosa del mundo con más de 300 tiendas en 2 km." },
      { nombre: "Liberty London", tipo: "comercio", distancia: "0.3 km", descripcion: "Gran almacén histórico con arquitectura Tudor y diseño exclusivo." },
      { nombre: "Regent Street", tipo: "comercio", distancia: "0.1 km", descripcion: "Elegante bulevar con tiendas premium y arquitectura georgiana." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Night Tube en líneas Victoria y Central los fines de semana."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin ascensores. Usar Bond Street (Step-Free) como alternativa accesible."
    }
  },
  {
    slug: "covent-garden",
    nombre: "Covent Garden",
    linea: "Piccadilly",
    municipio: "Westminster",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Covent Garden Market", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Royal Opera House", tipo: "cultura", distancia: "3 min caminando" },
      { nombre: "London Transport Museum", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Piazza y artistas callejeros", tipo: "turismo", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Covent Garden — Metro Londres | MetroGuia",
    meta_description: "Covent Garden, el barrio más pintoresco de Londres. Market, Royal Opera House, artistas callejeros y el London Transport Museum a pasos del metro.",
    h1: "Covent Garden — Underground Londres",
    intro: "Covent Garden es el corazón bohemio de Londres, famoso por su mercado victoriano, artistas callejeros de clase mundial y la Royal Opera House.",
    tips: [
      "Los artistas callejeros de la piazza son auditados y seleccionados — son profesionales reales.",
      "El London Transport Museum es más fascinante de lo que parece: perfecto para niños y adultos.",
      "La espera para el ascensor puede ser larga — con menos de 5 plantas, considera las escaleras.",
      "Llega antes de las 11h para ver el mercado antes de la masificación turística."
    ],
    mejor_horario: "Mañanas de martes a jueves. Evita fines de semana por la tarde.",
    mundial_relevancia: "Uno de los mercados victorianos mejor conservados de Europa.",
    descripcion_turistica: "El antiguo mercado de frutas y verduras del Londres victoriano se ha transformado en uno de los espacios públicos más animados de Europa. Con tiendas de diseñadores emergentes, restaurantes de múltiples cocinas y actuaciones en vivo constantes, Covent Garden captura el espíritu creativo de Londres.",
    lugares_cercanos: [
      { nombre: "Royal Opera House", tipo: "cultura", distancia: "0.2 km", descripcion: "Uno de los teatros de ópera y ballet más prestigiosos del mundo." },
      { nombre: "London Transport Museum", tipo: "museo", distancia: "0.2 km", descripcion: "Historia fascinante del metro y transporte londinense desde el siglo XIX." },
      { nombre: "Neal's Yard", tipo: "comercio", distancia: "0.3 km", descripcion: "Callejón colorido con tiendas orgánicas y cafés alternativos." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 00:30",
      sabado: "06:00 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "La estación es pequeña y puede cerrarse temporalmente en momentos de máxima afluencia."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: true,
      rampas: false,
      banos_accesibles: false,
      notas: "Elevadores disponibles pero no todas las salidas son completamente accesibles."
    }
  },
  {
    slug: "westminster",
    nombre: "Westminster",
    linea: "Jubilee",
    municipio: "Westminster",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Palacio de Westminster (Parlamento)", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Big Ben", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Westminster Abbey", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Millennium Bridge", tipo: "turismo", distancia: "10 min caminando" }
    ],
    transferencias: ["westminster"],
    seo_title: "Westminster — Metro Londres | MetroGuia",
    meta_description: "Estación Westminster frente al Parlamento y Big Ben. Acceso a Westminster Abbey, St. James's Park y Downing Street. El corazón político de Londres.",
    h1: "Westminster — Underground Londres",
    intro: "Westminster es la estación más histórica del metro de Londres, ubicada frente al Parlamento Británico, Big Ben y Westminster Abbey. La arquitectura de la estación Jubilee es extraordinaria.",
    tips: [
      "La estación Jubilee en Westminster fue diseñada por Hopkins Architects — mira hacia arriba al bajar.",
      "Big Ben está en restauración parcial pero las vistas desde el puente de Westminster son espectaculares.",
      "Westminster Abbey requiere reserva anticipada — colas de 2h sin reserva.",
      "La vista del Parlamento desde el puente al amanecer es de las mejores postales de Londres."
    ],
    mejor_horario: "Amanecer para la fotografía del Parlamento. Evita mediodía en verano.",
    mundial_relevancia: "Centro del gobierno del Reino Unido y símbolo político mundial.",
    descripcion_turistica: "Westminster concentra más historia por metro cuadrado que cualquier otro lugar de Londres. Aquí se toman las decisiones que afectan a millones de personas en todo el mundo, y aquí descansan reyes, reinas y figuras históricas desde el año 1066.",
    lugares_cercanos: [
      { nombre: "Westminster Abbey", tipo: "museo", distancia: "0.3 km", descripcion: "La abadía gótica donde se coronan los reyes y descansan los grandes de la historia." },
      { nombre: "Parlamento y Big Ben", tipo: "turismo", distancia: "0.2 km", descripcion: "El Palacio de Westminster, sede del Parlamento desde 1547." },
      { nombre: "Downing Street", tipo: "turismo", distancia: "0.5 km", descripcion: "Residencia oficial del Primer Ministro, visible desde la calle." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:30",
      sabado: "05:30 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "Puede estar saturada durante visitas de Estado o debates parlamentarios."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Step-Free Access completo. Una de las estaciones más accesibles del sistema."
    }
  },
  {
    slug: "london-bridge",
    nombre: "London Bridge",
    linea: "Jubilee",
    municipio: "Southwark",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Borough Market", tipo: "alimento", distancia: "5 min caminando" },
      { nombre: "The Shard", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Tower Bridge", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Tate Modern", tipo: "museo", distancia: "15 min caminando" }
    ],
    transferencias: ["london-bridge"],
    seo_title: "London Bridge — Metro Londres | MetroGuia",
    meta_description: "London Bridge con acceso a Borough Market, The Shard, Tower Bridge y Tate Modern. El barrio de Southwark, el más gastronómico de Londres.",
    h1: "London Bridge — Underground Londres",
    intro: "London Bridge es la puerta al Southwark más gastronómico y cultural. Borough Market, el mejor mercado de comida según muchos, está a 5 minutos, junto al rascacielos más alto de Europa occidental: The Shard.",
    tips: [
      "Borough Market: llega antes de las 10h el sábado para evitar la avalancha de turistas.",
      "El mirador de The Shard (£32) tiene las mejores vistas de Londres.",
      "Desde aquí puedes caminar por la Bankside hasta la Tate Modern en 15 min.",
      "El Mercado Bermondsey (viernes 6-12h) es el favorito secreto de los londinenses."
    ],
    mejor_horario: "Sábados por la mañana para Borough Market. Entre semana para The Shard.",
    mundial_relevancia: "Borough Market existe desde 1014 — el mercado de comida más antiguo de Londres.",
    descripcion_turistica: "El South Bank es la ribera cultural de Londres. Desde London Bridge puedes caminar hasta Shakespeare's Globe, la Tate Modern, la Royal Festival Hall y el Golden Hinde sin alejarte más de un kilómetro del río.",
    lugares_cercanos: [
      { nombre: "Borough Market", tipo: "alimento", distancia: "0.4 km", descripcion: "El mercado gourmet más antiguo de Londres con productores artesanos de todo el UK." },
      { nombre: "The Shard", tipo: "turismo", distancia: "0.2 km", descripcion: "El edificio más alto de Europa occidental con mirador en el piso 72." },
      { nombre: "Tower Bridge", tipo: "turismo", distancia: "0.7 km", descripcion: "El puente bascúlico victoriano más fotogénico del mundo." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:30",
      sabado: "05:30 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "Night Tube en Jubilee Line los fines de semana."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa Step-Free en ambas líneas."
    }
  },
  {
    slug: "tower-hill",
    nombre: "Tower Hill",
    linea: "District",
    municipio: "Tower Hamlets",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Tower of London", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Tower Bridge", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "HMS Belfast", tipo: "museo", distancia: "15 min caminando" },
      { nombre: "Muro romano de Londinium", tipo: "turismo", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Tower Hill — Metro Londres | MetroGuia",
    meta_description: "Tower Hill con acceso directo a la Torre de Londres y Tower Bridge. Historia de 1,000 años a pasos del metro. Los Joyeles de la Corona están aquí.",
    h1: "Tower Hill — Underground Londres",
    intro: "Tower Hill es la estación de los grandes símbolos del Londres milenario. La Torre de Londres con los Joyeles de la Corona y Tower Bridge están a minutos caminando.",
    tips: [
      "Compra las entradas a la Torre de Londres online — ahorras £5 y evitas colas.",
      "El Ceremony of the Keys en la Torre ocurre a las 21:53h — reserva gratuita con meses de antelación.",
      "Tower Bridge se abre para barcos altos varias veces por semana — consulta el calendario en la web.",
      "El jardín romano junto a la estación muestra restos del muro original de Londinium."
    ],
    mejor_horario: "Primera hora de la mañana (09:00h) para entrar a la Torre antes de los grupos.",
    mundial_relevancia: "La Torre de Londres es Patrimonio UNESCO y custodia los Joyeles de la Corona.",
    descripcion_turistica: "Tower Hill concentra 2,000 años de historia en 500 metros. Aquí estaba la puerta este del muro romano de Londinium (43 AD), luego la fortaleza normanda de Guillermo el Conquistador (1078) y finalmente el puente victoriano más famoso del mundo (1894).",
    lugares_cercanos: [
      { nombre: "Torre de Londres", tipo: "museo", distancia: "0.2 km", descripcion: "Fortaleza milenaria con los Joyeles de la Corona, los Beefeaters y oscura historia real." },
      { nombre: "Tower Bridge", tipo: "turismo", distancia: "0.4 km", descripcion: "El puente bascúlico victoriano con museo interior y paso peatonal en altura." },
      { nombre: "St. Katharine Docks", tipo: "turismo", distancia: "0.5 km", descripcion: "Puerto victoriano convertido en marina de yates con restaurantes y tiendas." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 00:30",
      sabado: "06:00 – 00:30",
      domingo: "07:30 – 23:30",
      notas: "Estación exterior — afectada por condiciones climáticas."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso de superficie sin escalones. Sin ascensores al ser estación al aire libre."
    }
  },
  {
    slug: "canary-wharf",
    nombre: "Canary Wharf",
    linea: "Jubilee",
    municipio: "Tower Hamlets",
    tipo_zona: "financiero",
    pois: [
      { nombre: "Museum of London Docklands", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Canary Wharf Shopping", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Crossrail Place Roof Garden", tipo: "parque", distancia: "3 min caminando" },
      { nombre: "Skyline Docklands", tipo: "turismo", distancia: "5 min caminando" }
    ],
    transferencias: ["canary-wharf"],
    seo_title: "Canary Wharf — Metro Londres | MetroGuia",
    meta_description: "Canary Wharf, el distrito financiero de Londres. Arquitectura espectacular, museos de los Docklands y el jardín en altura del Crossrail Place.",
    h1: "Canary Wharf — Underground Londres",
    intro: "Canary Wharf es el Manhattan londinense: rascacielos de cristal de HSBC, Barclays y Citibank, junto a una estación Jubilee diseñada por Norman Foster que es obra maestra del diseño industrial.",
    tips: [
      "La estación de Canary Wharf (Jubilee) fue votada como la mejor arquitectura de metro del mundo.",
      "El jardín tropical en el techo del edificio Crossrail Place es gratuito y sorprendente.",
      "Museum of London Docklands cuenta la historia del comercio colonial — impactante.",
      "El fin de semana está mucho más tranquilo — sin los 100,000 trabajadores de la semana."
    ],
    mejor_horario: "Entre semana a mediodía para ver el distrito en plena actividad. Fin de semana para tranquilidad.",
    mundial_relevancia: "Segundo distrito financiero de Europa. Sede de los mayores bancos del mundo.",
    descripcion_turistica: "Canary Wharf es la transformación más dramática de Londres. En los años 80 era un puerto en decadencia; hoy es un skyline futurista. La estación Jubilee, con sus cavernas de hormigón y acero, es una experiencia arquitectónica única.",
    lugares_cercanos: [
      { nombre: "Museum of London Docklands", tipo: "museo", distancia: "0.4 km", descripcion: "Historia del puerto más importante del Imperio Británico." },
      { nombre: "Crossrail Place Roof Garden", tipo: "parque", distancia: "0.2 km", descripcion: "Jardín tropical de 1,000 m² encima de la estación Elizabeth Line." },
      { nombre: "Thames Clipper", tipo: "transporte", distancia: "0.3 km", descripcion: "Ferry fluvial al centro de Londres — la forma más panorámica de moverse." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:30",
      sabado: "05:30 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "Night Tube en Jubilee Line fines de semana."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad total. Diseñada desde origen con Step-Free Access en todas las salidas."
    }
  },
  {
    slug: "heathrow-terminal-2-3",
    nombre: "Heathrow Terminals 2 & 3",
    linea: "Piccadilly",
    municipio: "Hillingdon",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal 2 (The Queen's Terminal)", tipo: "transporte", distancia: "0 min caminando" },
      { nombre: "Terminal 3", tipo: "transporte", distancia: "5 min caminando" },
      { nombre: "Shopping duty-free", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["heathrow-terminal-2-3"],
    seo_title: "Heathrow Terminals 2 & 3 — Metro Londres | MetroGuia",
    meta_description: "Heathrow Terminals 2 & 3 en la Piccadilly Line. Conexión directa desde el aeropuerto más concurrido de Europa al centro de Londres en 50 minutos.",
    h1: "Heathrow Terminals 2 & 3 — Underground Londres",
    intro: "Heathrow es el aeropuerto más transitado de Europa. La Piccadilly Line ofrece la conexión más económica al centro de Londres: 50 minutos hasta Piccadilly Circus por £6.70.",
    tips: [
      "La Piccadilly Line es la opción más barata al aeropuerto — el Heathrow Express es 3 veces más caro.",
      "Añade tiempo extra: la línea hace 14 paradas desde Heathrow hasta el centro.",
      "El equipaje grande puede ser incómodo en horas punta — viaja temprano o tarde.",
      "Tap-in con tarjeta bancaria sin contacto — no necesitas tarjeta Oyster."
    ],
    mejor_horario: "06:00-08:00h para evitar la saturación de viajeros con maletas.",
    mundial_relevancia: "Heathrow es el aeropuerto más conectado de Europa con 200+ destinos mundiales.",
    descripcion_turistica: "Heathrow Terminal 2 (The Queen's Terminal) fue inaugurada por la Reina Isabel II en 2014 y es considerada una de las terminales más modernas del mundo.",
    lugares_cercanos: [
      { nombre: "Terminal 2 (Star Alliance)", tipo: "transporte", distancia: "0.1 km", descripcion: "Terminal hogar de United, Lufthansa y Air Canada." },
      { nombre: "Terminal 3 (OneWorld)", tipo: "transporte", distancia: "0.4 km", descripcion: "Vuelos de British Airways, Iberia y American Airlines." },
      { nombre: "Terminal 5 (British Airways)", tipo: "transporte", distancia: "2.0 km", descripcion: "La terminal más grande de Heathrow, exclusiva de British Airways." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:00",
      sabado: "05:00 – 00:00",
      domingo: "06:00 – 23:30",
      notas: "Los trenes al aeropuerto empiezan antes que la mayoría de líneas."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa. Asistencia para pasajeros disponible en el aeropuerto."
    }
  },
  {
    slug: "paddington",
    nombre: "Paddington",
    linea: "Circle",
    municipio: "Westminster",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Paddington Bear Statue", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Heathrow Express Terminal", tipo: "transporte", distancia: "2 min caminando" },
      { nombre: "Hyde Park (Entrada norte)", tipo: "parque", distancia: "10 min caminando" },
      { nombre: "Little Venice Canal", tipo: "turismo", distancia: "10 min caminando" }
    ],
    transferencias: ["paddington"],
    seo_title: "Paddington — Metro Londres | MetroGuia",
    meta_description: "Paddington, hub del Great Western Railway y Heathrow Express. Acceso a Hyde Park, Little Venice y la estatua del famoso oso de los libros infantiles.",
    h1: "Paddington — Underground Londres",
    intro: "Paddington es el gran cruce de trenes del oeste de Londres, con el Heathrow Express (15 min al aeropuerto), trenes a Gales y el suroeste de Inglaterra. Inmortalizado por el oso Paddington.",
    tips: [
      "La estatua de Paddington Bear en la estación es el punto de encuentro favorito de los londinienses.",
      "Little Venice, a 10 minutos, es el secreto mejor guardado del oeste de Londres.",
      "El Heathrow Express (£25) lleva al aeropuerto en 15 min.",
      "La Gran Sala victoriana diseñada por Brunel es una obra de ingeniería del siglo XIX."
    ],
    mejor_horario: "Fin de semana por la mañana para explorar el mercado de Portobello Road cercano.",
    mundial_relevancia: "Paddington Bear (1958) es el personaje literario más famoso del mundo salido de una estación.",
    descripcion_turistica: "La Gran Sala de Paddington, con su cubierta de hierro y cristal victoriana diseñada por Isambard Kingdom Brunel (1854), es una de las obras de ingeniería más bellas de Londres. El barrio de Bayswater y Notting Hill están a minutos.",
    lugares_cercanos: [
      { nombre: "Little Venice", tipo: "turismo", distancia: "0.7 km", descripcion: "Barrio de canales con barcas pintadas y cafés flotantes." },
      { nombre: "Hyde Park (norte)", tipo: "parque", distancia: "0.8 km", descripcion: "El parque real más grande de Londres con el Speakers' Corner y el lago Serpentine." },
      { nombre: "Portobello Road Market", tipo: "comercio", distancia: "1.5 km", descripcion: "El mercado de antigüedades más famoso del mundo los sábados." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:30",
      sabado: "05:30 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "Hub muy concurrido en horarios de salidas de trenes nacionales."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Step-Free Access en la mayoría de líneas."
    }
  },
  {
    slug: "bond-street",
    nombre: "Bond Street",
    linea: "Central",
    municipio: "Westminster",
    tipo_zona: "comercial",
    pois: [
      { nombre: "New Bond Street (lujo)", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Selfridges", tipo: "comercio", distancia: "5 min caminando" },
      { nombre: "Wallace Collection (museo gratuito)", tipo: "museo", distancia: "8 min caminando" },
      { nombre: "Grosvenor Square", tipo: "parque", distancia: "5 min caminando" }
    ],
    transferencias: ["bond-street"],
    seo_title: "Bond Street — Metro Londres | MetroGuia",
    meta_description: "Bond Street, la calle del lujo londinense. Cartier, Gucci, Tiffany y Selfridges. La Wallace Collection (gratuita) guarda obras de Rembrandt y Velázquez.",
    h1: "Bond Street — Underground Londres",
    intro: "Bond Street es sinónimo de lujo en Londres. New Bond Street alberga las mayores firmas de moda, joyería y arte. A cinco minutos, Selfridges es el segundo gran almacén más grande del mundo.",
    tips: [
      "La Wallace Collection es uno de los museos más subestimados de Londres — gratuita y magnífica.",
      "Si no puedes permitirte comprar en Bond Street, el window shopping es un espectáculo.",
      "Selfridges tiene el mejor food hall de Londres para picotear.",
      "El barrio de Marylebone, a 10 min, tiene los mejores cafés independientes del West End."
    ],
    mejor_horario: "Entre semana por la mañana para Bond Street. Fines de semana para Selfridges.",
    mundial_relevancia: "New Bond Street es la calle más cara de Europa por metro cuadrado de alquiler comercial.",
    descripcion_turistica: "Bond Street divide el lujo en dos extremos: New Bond Street para haute couture y joyería fina, y Oxford Street para el consumo masivo. El barrio de Mayfair preserva algunas de las arquitecturas georgianas más elegantes de la capital.",
    lugares_cercanos: [
      { nombre: "Wallace Collection", tipo: "museo", distancia: "0.5 km", descripcion: "Museo gratuito en mansión georgiana con obras de Rembrandt, Hals y Velázquez." },
      { nombre: "Selfridges", tipo: "comercio", distancia: "0.4 km", descripcion: "El gran almacén más innovador de Londres con food hall legendario." },
      { nombre: "Grosvenor Square", tipo: "parque", distancia: "0.4 km", descripcion: "Elegante plaza georgiana en el corazón de Mayfair." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Night Tube disponible en línea Central los fines de semana."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Step-Free Access completo desde calle hasta andenes."
    }
  },
  {
    slug: "baker-street",
    nombre: "Baker Street",
    linea: "Jubilee",
    municipio: "Westminster",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Sherlock Holmes Museum", tipo: "museo", distancia: "2 min caminando" },
      { nombre: "Madame Tussauds", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "Regent's Park", tipo: "parque", distancia: "10 min caminando" },
      { nombre: "London Zoo", tipo: "turismo", distancia: "20 min caminando" }
    ],
    transferencias: ["baker-street"],
    seo_title: "Baker Street — Metro Londres | MetroGuia",
    meta_description: "Baker Street, donde vivía Sherlock Holmes. Museo del detective más famoso del mundo, Madame Tussauds y acceso a Regent's Park y London Zoo.",
    h1: "Baker Street — Underground Londres",
    intro: "Baker Street es quizás la dirección más famosa de la ficción: el 221B de Sherlock Holmes. La estación, diseñada en 1863, fue una de las primeras del metro más antiguo del mundo.",
    tips: [
      "El Sherlock Holmes Museum ocupa el 221B real — las habitaciones recrean perfectamente los libros.",
      "Madame Tussauds: compra online, las colas sin reserva son de 90 minutos.",
      "Regent's Park es el mejor parque de Londres para deporte — pistas de tenis y jardín de rosas.",
      "La estación tiene murales victorianos de azulejos representando al detective — fotografíalos."
    ],
    mejor_horario: "Primera hora para el museo de Holmes. Mediodía de fines de semana para Regent's Park.",
    mundial_relevancia: "Baker Street 221B es la dirección ficticia más visitada de la literatura universal.",
    descripcion_turistica: "Baker Street y Marylebone son el lado más sereno y elegante del West End. Aquí conviven mansiones victorianas convertidas en museos con el pub inglés típico y tiendas de antigüedades que parecen salidas de una novela de Conan Doyle.",
    lugares_cercanos: [
      { nombre: "Sherlock Holmes Museum", tipo: "museo", distancia: "0.1 km", descripcion: "El hogar del detective más famoso del mundo recreado en el 221B de Baker Street." },
      { nombre: "Madame Tussauds", tipo: "turismo", distancia: "0.6 km", descripcion: "El museo de figuras de cera más famoso del mundo con más de 300 personajes." },
      { nombre: "Regent's Park", tipo: "parque", distancia: "0.8 km", descripcion: "El más elegante de los parques reales con jardín de rosas y teatro al aire libre." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:30",
      sabado: "05:30 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "5 líneas pasan por aquí — verifica el andén correcto antes de bajar."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso limitado. Sin ascensores en la mayoría de salidas."
    }
  },
  {
    slug: "bank-monument",
    nombre: "Bank / Monument",
    linea: "Central",
    municipio: "City of London",
    tipo_zona: "financiero",
    pois: [
      { nombre: "Bank of England Museum", tipo: "museo", distancia: "2 min caminando" },
      { nombre: "The Monument (Gran Incendio)", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Leadenhall Market", tipo: "comercio", distancia: "8 min caminando" },
      { nombre: "St. Paul's Cathedral", tipo: "turismo", distancia: "10 min caminando" }
    ],
    transferencias: ["bank-monument"],
    seo_title: "Bank / Monument — Metro Londres | MetroGuia",
    meta_description: "Bank y Monument, el corazón de la City de Londres. Banco de Inglaterra, Leadenhall Market (escenario de Harry Potter) y el Monumento al Gran Incendio de 1666.",
    h1: "Bank / Monument — Underground Londres",
    intro: "Bank es el corazón financiero del mundo anglosajón. El Banco de Inglaterra, la Bolsa de Londres y cientos de instituciones financieras se concentran en estos 1.2 km² llamados 'the Square Mile'.",
    tips: [
      "El Bank of England Museum es gratuito y fascinante — puedes tocar un lingote de oro real.",
      "Leadenhall Market fue el escenario de Diagon Alley en Harry Potter — reconocerás la arquitectura.",
      "El Monument tiene 311 escalones — la misma altura que su distancia al origen del Gran Incendio.",
      "Los viernes al mediodía, los trabajadores de la City inundan los pubs — atmósfera única."
    ],
    mejor_horario: "Entre semana por la mañana para museos. Viernes mediodía para la atmósfera de la City.",
    mundial_relevancia: "La City maneja el 40% de las transacciones de divisas mundiales diariamente.",
    descripcion_turistica: "La City (con mayúscula) es la original Londinium romana y hoy el distrito financiero más importante de Europa. En apenas 2.6 km² conviven 2,000 años de historia con los edificios corporativos más futuristas del continente.",
    lugares_cercanos: [
      { nombre: "Bank of England Museum", tipo: "museo", distancia: "0.1 km", descripcion: "Historia del banco central más antiguo del mundo (1694) con lingotes de oro reales." },
      { nombre: "Leadenhall Market", tipo: "comercio", distancia: "0.5 km", descripcion: "Mercado victoriano de hierro y vidrio que sirvió de escenario en Harry Potter." },
      { nombre: "The Monument", tipo: "turismo", distancia: "0.4 km", descripcion: "Columna dórica que conmemora el Gran Incendio de Londres de 1666." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:30",
      sabado: "05:30 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "La zona está mucho menos concurrida los fines de semana."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: false,
      banos_accesibles: false,
      notas: "Estación sin accesibilidad completa. Usar la salida Walbrook que tiene menos escalones."
    }
  },
  {
    slug: "piccadilly-circus",
    nombre: "Piccadilly Circus",
    linea: "Piccadilly",
    municipio: "Westminster",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Estatua de Eros (Shaftesbury Memorial)", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Carnaby Street", tipo: "comercio", distancia: "5 min caminando" },
      { nombre: "Theatreland (West End)", tipo: "cultura", distancia: "5 min caminando" },
      { nombre: "Chinatown", tipo: "alimento", distancia: "8 min caminando" }
    ],
    transferencias: ["piccadilly-circus"],
    seo_title: "Piccadilly Circus — Metro Londres | MetroGuia",
    meta_description: "Piccadilly Circus, el Times Square londinense. La estatua de Eros, pantallas gigantes, el West End teatral y acceso a Soho y Chinatown.",
    h1: "Piccadilly Circus — Underground Londres",
    intro: "Piccadilly Circus es el cruce más icónico de Londres. Las pantallas luminosas, la estatua de Eros y el flujo constante de personas de todo el mundo lo convierten en uno de los lugares más fotografiados de Europa.",
    tips: [
      "La estatua dorada no es Eros — es Anteros, el dios del amor correspondido.",
      "El West End tiene los mejores musicales del mundo — reserva con meses de antelación.",
      "Chinatown está a 8 minutos — el mejor dim sum de Londres está en New World Restaurant.",
      "Piccadilly Circus de noche, con las pantallas encendidas, es mágico."
    ],
    mejor_horario: "Noche para la experiencia visual completa. Mañana temprano para fotos sin gente.",
    mundial_relevancia: "El cruce más conocido del mundo anglosajón, símbolo del Londres moderno.",
    descripcion_turistica: "Piccadilly Circus es la convergencia de cinco grandes calles en el corazón del West End. Aquí se concentra la mayor densidad teatral del mundo (más de 40 teatros en 15 minutos) y la vida nocturna más diversa de Londres.",
    lugares_cercanos: [
      { nombre: "Shaftesbury Memorial (Eros)", tipo: "turismo", distancia: "0.1 km", descripcion: "Fuente victoriana con la famosa estatua dorada alada, símbolo de Londres." },
      { nombre: "West End Theatres", tipo: "cultura", distancia: "0.3 km", descripcion: "El mayor distrito teatral del mundo con 40+ teatros activos." },
      { nombre: "Chinatown", tipo: "alimento", distancia: "0.6 km", descripcion: "Barrio chino con restaurantes auténticos de dim sum, pato Pekín y más." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Night Tube disponible en la Piccadilly Line los fines de semana."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: true,
      rampas: false,
      banos_accesibles: true,
      notas: "Ascensores disponibles pero no todas las salidas son accesibles en silla de ruedas."
    }
  },
  {
    slug: "leicester-square",
    nombre: "Leicester Square",
    linea: "Piccadilly",
    municipio: "Westminster",
    tipo_zona: "turistica",
    pois: [
      { nombre: "National Portrait Gallery", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "National Gallery", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Trafalgar Square", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "TKTS Booth (entradas teatro)", tipo: "cultura", distancia: "1 min caminando" }
    ],
    transferencias: ["leicester-square"],
    seo_title: "Leicester Square — Metro Londres | MetroGuia",
    meta_description: "Leicester Square, el corazón del entretenimiento londinense. Cines, National Gallery, Trafalgar Square y la taquilla TKTS para teatro con descuento.",
    h1: "Leicester Square — Underground Londres",
    intro: "Leicester Square es el centro del entretenimiento de Londres: cines de estreno, el TKTS para conseguir entradas de teatro con hasta 50% de descuento, y la puerta a la National Gallery.",
    tips: [
      "TKTS en la plaza vende entradas de teatro con descuento el mismo día — llega a las 10h.",
      "La National Gallery es gratuita y una de las mejores colecciones del mundo.",
      "Trafalgar Square tiene los mejores eventos gratuitos de Londres (Año Nuevo, Carnaval).",
      "El Chinatown más auténtico está a 5 minutos a pie."
    ],
    mejor_horario: "Mañana para museos. Noche de martes o miércoles para teatro con entradas más baratas.",
    mundial_relevancia: "Trafalgar Square ha sido escenario de las celebraciones y protestas más importantes de la historia del Reino Unido.",
    descripcion_turistica: "Leicester Square y Trafalgar Square forman el corazón cultural y cívico de Londres. La National Gallery (gratuita) conserva 2,300 obras de los maestros europeos. La Columna de Nelson (58m) domina la plaza de la victoria en Trafalgar (1805).",
    lugares_cercanos: [
      { nombre: "National Gallery", tipo: "museo", distancia: "0.4 km", descripcion: "Museo gratuito con 2,300 obras maestras desde el siglo XIII hasta el XIX." },
      { nombre: "Trafalgar Square", tipo: "turismo", distancia: "0.6 km", descripcion: "La plaza más importante de Londres con la Columna de Nelson." },
      { nombre: "TKTS Theatre Booth", tipo: "cultura", distancia: "0.1 km", descripcion: "Taquilla oficial con descuentos del 25-50% en espectáculos del West End." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Muy concurrida los viernes y sábados por la noche."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: true,
      rampas: false,
      banos_accesibles: false,
      notas: "Ascensores disponibles en algunas salidas. Sin acceso completo en silla de ruedas."
    }
  },
  {
    slug: "green-park",
    nombre: "Green Park",
    linea: "Victoria",
    municipio: "Westminster",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Green Park (el parque)", tipo: "parque", distancia: "1 min caminando" },
      { nombre: "Buckingham Palace", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "The Ritz Hotel", tipo: "alimento", distancia: "3 min caminando" },
      { nombre: "Jermyn Street (camiserías reales)", tipo: "comercio", distancia: "5 min caminando" }
    ],
    transferencias: ["green-park"],
    seo_title: "Green Park — Metro Londres | MetroGuia",
    meta_description: "Green Park con acceso al parque homónimo, Buckingham Palace, The Ritz y el Mayfair más elegante. La esquina más aristocrática de Londres.",
    h1: "Green Park — Underground Londres",
    intro: "Green Park es la estación más elegante de Londres, rodeada de parques reales, embajadas y hoteles de lujo. El parque de Green Park (solo árboles y césped, sin flores) es la escapada perfecta del centro.",
    tips: [
      "Green Park no tiene flores — la leyenda dice que Carlos II lo prohibió tras una discusión.",
      "The Ritz ofrece el afternoon tea más famoso del mundo — reserva con 3 meses de antelación.",
      "Las calles de Mayfair (Mount Street, Bruton Street) tienen las galerías de arte más importantes.",
      "El 'Royal Walk': Green Park → St. James's Park → Buckingham Palace en 20 min."
    ],
    mejor_horario: "Mañanas de primavera para el parque. Cualquier día para Mayfair.",
    mundial_relevancia: "Mayfair es el barrio más exclusivo de Europa, con algunas de las casas de mayor valor del mundo.",
    descripcion_turistica: "Green Park es el nodo de los tres parques reales centrales de Londres. En 15 minutos puedes pasear desde Hyde Park hasta St. James's Park sin salir de los jardines reales. Mayfair, al norte, es un barrio de arte, diplomacia y lujo discreto.",
    lugares_cercanos: [
      { nombre: "Green Park", tipo: "parque", distancia: "0.1 km", descripcion: "El más tranquilo de los parques reales — prados con árboles centenarios y sin flores." },
      { nombre: "The Ritz London", tipo: "alimento", distancia: "0.2 km", descripcion: "El hotel más icónico de Londres abierto en 1906. Afternoon tea desde £65." },
      { nombre: "Mayfair Gallery District", tipo: "cultura", distancia: "0.4 km", descripcion: "Concentración de galerías de arte contemporáneo de fama mundial." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Tres líneas en esta estación — verificar andén correcto (Victoria / Jubilee / Piccadilly)."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Step-Free Access completo en todas las líneas."
    }
  },
  {
    slug: "earls-court",
    nombre: "Earl's Court",
    linea: "District",
    municipio: "Kensington y Chelsea",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Earl's Court Exhibition Centre", tipo: "cultura", distancia: "5 min caminando" },
      { nombre: "Brompton Cemetery", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Bares de Coleherne Road", tipo: "alimento", distancia: "5 min caminando" }
    ],
    transferencias: ["earls-court"],
    seo_title: "Earl's Court — Metro Londres | MetroGuia",
    meta_description: "Earl's Court, barrio histórico del SW5 londinense. Punto de conexión de líneas District y Piccadilly, con acceso al Exhibition Centre y la zona de Kensington.",
    h1: "Earl's Court — Underground Londres",
    intro: "Earl's Court es el gran cruce del suroeste de Londres, donde se bifurcan las líneas District y Piccadilly. Barrio histórico con fuerte comunidad australiana y acceso a Kensington.",
    tips: [
      "Earl's Court es el punto de inicio de muchos mochileros australianos en Londres.",
      "El Brompton Cemetery victoriano es uno de los cementerios más bellos del mundo.",
      "Desde aquí puedes llegar a South Kensington (museos) en 2 paradas.",
      "La zona tiene los bares más animados del oeste de Londres."
    ],
    mejor_horario: "Tardes de fin de semana para la vida de barrio.",
    mundial_relevancia: "El Earl's Court Exhibition Centre fue sede de conciertos de Queen, Led Zeppelin y los Rolling Stones.",
    descripcion_turistica: "Earl's Court es un barrio de transición entre el lujoso Royal Borough de Chelsea y Kensington y las zonas más asequibles del oeste de Londres. Su diversidad social y su historia como centro de entretenimiento le dan carácter único.",
    lugares_cercanos: [
      { nombre: "Brompton Cemetery", tipo: "turismo", distancia: "0.7 km", descripcion: "Cementerio victoriano catalogado con tumbas de figuras históricas del Imperio." },
      { nombre: "South Kensington Museums", tipo: "museo", distancia: "1.2 km", descripcion: "V&A, Natural History Museum y Science Museum en el 'museum mile'." },
      { nombre: "Stamford Bridge (Chelsea FC)", tipo: "turismo", distancia: "1.5 km", descripcion: "El estadio del Chelsea Football Club con tours disponibles." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:30",
      sabado: "05:30 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "Punto de bifurcación de la District Line — verifica el destino antes de subir."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso limitado. Escalones en algunos andenes. Sin ascensores."
    }
  },
  {
    slug: "notting-hill-gate",
    nombre: "Notting Hill Gate",
    linea: "Central",
    municipio: "Kensington y Chelsea",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Portobello Road Market", tipo: "comercio", distancia: "5 min caminando" },
      { nombre: "The Travel Bookshop (inspiró la peli)", tipo: "comercio", distancia: "8 min caminando" },
      { nombre: "Electric Cinema (1911)", tipo: "cultura", distancia: "5 min caminando" },
      { nombre: "Holland Park", tipo: "parque", distancia: "10 min caminando" }
    ],
    transferencias: ["notting-hill-gate"],
    seo_title: "Notting Hill Gate — Metro Londres | MetroGuia",
    meta_description: "Notting Hill Gate con acceso al mercado Portobello Road y el barrio más colorido de Londres. El Carnaval de Notting Hill es el mayor evento de calle de Europa.",
    h1: "Notting Hill Gate — Underground Londres",
    intro: "Notting Hill es el barrio más colorido y bohemio de Londres. Las casas pastel, el mercado de Portobello Road y el Carnaval anual (el mayor de Europa) lo han convertido en icono mundial.",
    tips: [
      "Portobello Road Market: antigüedades los sábados (06-18h), frutas y verduras entre semana.",
      "El Notting Hill Bookshop real (Portobello Road) se llama The Travel Bookshop — sigue siendo librería.",
      "El Carnaval de Notting Hill (último fin de semana de agosto) es el mayor de Europa: 2 millones de personas.",
      "Las casas de colores (pastel houses) están en Lansdowne Road y Elgin Crescent."
    ],
    mejor_horario: "Sábados para Portobello Market. Agosto para el Carnaval.",
    mundial_relevancia: "El Carnaval de Notting Hill es la segunda mayor celebración de calle del mundo.",
    descripcion_turistica: "Notting Hill es la síntesis del Londres multicultural y creativo. Del origen jamaicano del Carnaval a las mansiones victorianas de millones, pasando por tiendas vintage y galeristas emergentes. La película de 1999 inmortalizó el espíritu de este barrio único.",
    lugares_cercanos: [
      { nombre: "Portobello Road Market", tipo: "comercio", distancia: "0.4 km", descripcion: "El mercado de antigüedades más famoso del mundo los sábados." },
      { nombre: "The Travel Bookshop", tipo: "comercio", distancia: "0.6 km", descripcion: "La librería real que inspiró la de la película 'Notting Hill' (1999)." },
      { nombre: "Holland Park", tipo: "parque", distancia: "0.8 km", descripcion: "Jardín japonés Kyoto Garden en un parque boscoso." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Durante el Carnaval de Notting Hill la estación puede saturarse y cerrarse temporalmente."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin acceso en silla de ruedas completo. Escalones en andenes de la Central Line."
    }
  },
  {
    slug: "camden-town",
    nombre: "Camden Town",
    linea: "Northern",
    municipio: "Camden",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Camden Market", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Regent's Canal", tipo: "parque", distancia: "3 min caminando" },
      { nombre: "Roundhouse (teatro/conciertos)", tipo: "cultura", distancia: "10 min caminando" },
      { nombre: "Amy Winehouse Statue", tipo: "turismo", distancia: "8 min caminando" }
    ],
    transferencias: [],
    seo_title: "Camden Town — Metro Londres | MetroGuia",
    meta_description: "Camden Town, el barrio alternativo de Londres. Camden Market, Regent's Canal, la estatua de Amy Winehouse y la mejor escena musical independiente de la ciudad.",
    h1: "Camden Town — Underground Londres",
    intro: "Camden Town es el corazón alternativo de Londres: tatuajes, ropa vintage, música en vivo y el mercado más ecléctico de la ciudad junto al canal de Regent. El barrio de Amy Winehouse.",
    tips: [
      "El mercado de Camden es más grande de lo que parece — está dividido en varios espacios distintos.",
      "El paseo por el Regent's Canal hasta Little Venice (2h) es uno de los mejores de Londres.",
      "La Roundhouse fue una rotonda de locomotoras victorianas — ahora es el mejor venue alternativo.",
      "La estatua de bronce de Amy Winehouse está en Stables Market desde 2014."
    ],
    mejor_horario: "Fin de semana mediodía para el máximo ambiente.",
    mundial_relevancia: "Camden fue la cuna del punk londinense en los 70 y el indie británico en los 90.",
    descripcion_turistica: "Camden Town es uno de los pocos barrios de Londres que ha resistido la gentrificación total. Su identidad alternativa, nacida en los años 70 con el punk y el ska, sigue viva en sus mercados, venues de música y la cultura de la calle.",
    lugares_cercanos: [
      { nombre: "Camden Market", tipo: "comercio", distancia: "0.1 km", descripcion: "Mercado alternativo con 1,000 puestos de ropa vintage, comida del mundo y artesanía." },
      { nombre: "Amy Winehouse Statue", tipo: "turismo", distancia: "0.6 km", descripcion: "Estatua de bronce de la cantante más influyente del siglo XXI en Camden." },
      { nombre: "Roundhouse", tipo: "cultura", distancia: "0.7 km", descripcion: "Venue musical histórico en una antigua rotonda de trenes de 1847." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 00:30",
      sabado: "06:00 – 00:30",
      domingo: "07:30 – 00:00",
      notas: "La estación puede cerrarse a la entrada (solo salida) cuando está llena los fines de semana."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin acceso completo en silla de ruedas. Escalones en andenes."
    }
  },
  {
    slug: "waterloo",
    nombre: "Waterloo",
    linea: "Jubilee",
    municipio: "Lambeth",
    tipo_zona: "turistica",
    pois: [
      { nombre: "South Bank (paseo fluvial)", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Tate Modern", tipo: "museo", distancia: "20 min caminando" },
      { nombre: "London Eye", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "BFI (British Film Institute)", tipo: "cultura", distancia: "5 min caminando" }
    ],
    transferencias: ["waterloo"],
    seo_title: "Waterloo — Metro Londres | MetroGuia",
    meta_description: "Waterloo con el South Bank, London Eye, Tate Modern y el BFI. El kilómetro cultural más denso de Londres a orillas del Támesis.",
    h1: "Waterloo — Underground Londres",
    intro: "Waterloo es la puerta al South Bank, la ribera cultural más animada de Londres. Desde aquí puedes caminar hasta el London Eye, la Tate Modern, el Globe Theatre y el Borough Market sin subir al metro.",
    tips: [
      "El London Eye tiene largas colas — reserva online o ve a primera hora de la mañana.",
      "El paseo del South Bank de Westminster Bridge hasta Tower Bridge (5 km) es el mejor de Londres.",
      "La BFI tiene proyecciones de cine clásico y el mejor pub de cine de Londres.",
      "El Golden Jubilee Bridge tiene las mejores vistas al Parlamento al anochecer."
    ],
    mejor_horario: "Atardecer para el South Bank. Mañana entre semana para museos sin colas.",
    mundial_relevancia: "Waterloo es la estación más grande del Reino Unido con 100 millones de pasajeros al año.",
    descripcion_turistica: "El South Bank es la transformación cultural más exitosa de Europa. Lo que eran almacenes en el lado 'pobre' del Támesis es hoy el mayor corredor cultural del mundo: Tate Modern (gratuita), Globe Theatre, National Theatre, BFI y docenas de galerías.",
    lugares_cercanos: [
      { nombre: "London Eye", tipo: "turismo", distancia: "0.6 km", descripcion: "La noria más grande de Europa con cápsulas transparentes y vistas a 40 km." },
      { nombre: "Tate Modern", tipo: "museo", distancia: "1.5 km", descripcion: "El museo de arte moderno más visitado del mundo (gratuito) en una antigua central eléctrica." },
      { nombre: "South Bank Centre", tipo: "cultura", distancia: "0.5 km", descripcion: "Complejo cultural con conciertos, festival de libros y restaurantes de diseño." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:30",
      sabado: "05:30 – 00:30",
      domingo: "07:00 – 23:30",
      notas: "5 líneas en Waterloo — es el mayor intercambiador del sur de Londres."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Step-Free Access en la mayoría de salidas."
    }
  },
  {
    slug: "london-fields",
    nombre: "London Fields",
    linea: "Overground",
    municipio: "Hackney",
    tipo_zona: "residencial",
    pois: [
      { nombre: "London Fields Park y Lido", tipo: "parque", distancia: "5 min caminando" },
      { nombre: "Broadway Market", tipo: "comercio", distancia: "8 min caminando" },
      { nombre: "Cat & Mutton (pub histórico)", tipo: "alimento", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "London Fields — Metro Londres | MetroGuia",
    meta_description: "London Fields en Hackney, el East End creativo de Londres. Broadway Market, la piscina al aire libre más icónica y la escena cultural más emergente de la ciudad.",
    h1: "London Fields — Overground Londres",
    intro: "London Fields es el barrio más de moda del East End londinense. Artistas, creativos y profesionales han convertido esta zona de Hackney en la más efervescente culturalmente de la ciudad.",
    tips: [
      "El Broadway Market los sábados (09-17h) es el mercado más foodie de Londres.",
      "El London Fields Lido (piscina al aire libre) es icónico — abre todo el año, incluso en invierno.",
      "La zona entre Hackney y Shoreditch tiene la mayor concentración de galerías emergentes de Londres.",
      "Reserva mesa en los restaurantes de Netil Market — los mejores de Hackney."
    ],
    mejor_horario: "Sábados para Broadway Market. Cualquier día de verano para el Lido.",
    mundial_relevancia: "Hackney alberga la mayor concentración de artistas residentes de Europa.",
    descripcion_turistica: "London Fields y Hackney son el laboratorio creativo de Londres. Aquí se cocina la siguiente tendencia gastronómica, musical y artística antes de llegar al resto de la ciudad.",
    lugares_cercanos: [
      { nombre: "Broadway Market", tipo: "comercio", distancia: "0.6 km", descripcion: "Mercado de productores locales los sábados — el más 'foodie' de Londres." },
      { nombre: "London Fields Lido", tipo: "turismo", distancia: "0.4 km", descripcion: "Piscina al aire libre de agua templada abierta todo el año desde 1932." },
      { nombre: "Netil Market", tipo: "alimento", distancia: "0.8 km", descripcion: "Mercado de comida artesanal con productores locales y food trucks." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 00:00",
      sabado: "06:30 – 00:00",
      domingo: "08:00 – 23:00",
      notas: "London Overground con frecuencia reducida los domingos."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Acceso de nivel en el andén. Sin ascensores pero rampas disponibles."
    }
  },
  {
    slug: "shoreditch-high-street",
    nombre: "Shoreditch High Street",
    linea: "Overground",
    municipio: "Tower Hamlets",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Brick Lane (curry y vintage)", tipo: "alimento", distancia: "5 min caminando" },
      { nombre: "Boxpark (pop-up)", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Spitalfields Market", tipo: "comercio", distancia: "10 min caminando" },
      { nombre: "Street Art (Banksy y otros)", tipo: "turismo", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Shoreditch High Street — Metro Londres | MetroGuia",
    meta_description: "Shoreditch, el barrio más cool de Londres. Brick Lane, arte callejero de Banksy, Boxpark y la mejor escena de bares y restaurantes del East End.",
    h1: "Shoreditch High Street — Overground Londres",
    intro: "Shoreditch es el barrio más creativo de Londres. Arte urbano de Banksy, restaurantes de 50 cocinas del mundo en Brick Lane y una vida nocturna que empieza el jueves y acaba el domingo.",
    tips: [
      "Brick Lane: domingos es mercado de comida y vintage. Los bagels del Bagel Bake (abierto 24h) son legendarios.",
      "El Shoreditch Street Art Tour (gratis, autoguiado) empieza aquí — busca el mapa online.",
      "Boxpark fue el primer mall de contenedores del mundo con el mejor street food de Londres.",
      "Evita los bares de Shoreditch el jueves: saturados de profesionales del City."
    ],
    mejor_horario: "Domingos para el mercado de Brick Lane. Viernes noche para bares.",
    mundial_relevancia: "Shoreditch es el epicentro del movimiento de arte urbano mundial — aquí comenzó el legado de Banksy.",
    descripcion_turistica: "Shoreditch es el ejemplo más exitoso de transformación creativa en Europa. De barrio obrero a hub tecnológico y artístico en 20 años. Silicon Roundabout concentra más startups por km² que Silicon Valley, mientras Brick Lane mantiene su alma bangladesí.",
    lugares_cercanos: [
      { nombre: "Brick Lane", tipo: "alimento", distancia: "0.4 km", descripcion: "La calle del curry y del vintage en el corazón de la comunidad bangladesí de Londres." },
      { nombre: "Spitalfields Market", tipo: "comercio", distancia: "0.7 km", descripcion: "Mercado cubierto victoriano con diseñadores independientes todos los días." },
      { nombre: "Boxpark Shoreditch", tipo: "comercio", distancia: "0.2 km", descripcion: "El primer centro comercial de contenedores del mundo con 60 puestos." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 00:00",
      sabado: "06:30 – 00:00",
      domingo: "08:00 – 23:00",
      notas: "London Overground — frecuencia cada 15 min los domingos."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Nivel de plataforma accesible. Sin ascensores."
    }
  },
  {
    slug: "stratford",
    nombre: "Stratford",
    linea: "Central",
    municipio: "Newham",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Queen Elizabeth Olympic Park", tipo: "parque", distancia: "10 min caminando" },
      { nombre: "London Stadium (West Ham)", tipo: "turismo", distancia: "15 min caminando" },
      { nombre: "Westfield Stratford City", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "ArcelorMittal Orbit (Anish Kapoor)", tipo: "turismo", distancia: "15 min caminando" }
    ],
    transferencias: ["stratford"],
    seo_title: "Stratford — Metro Londres | MetroGuia",
    meta_description: "Stratford, legado olímpico de Londres 2012. Queen Elizabeth Olympic Park, el London Stadium y Westfield, el mayor centro comercial de Europa.",
    h1: "Stratford — Underground Londres",
    intro: "Stratford es el legado vivo de los Juegos Olímpicos de Londres 2012. El Queen Elizabeth Olympic Park, el London Stadium y el ArcelorMittal Orbit de Anish Kapoor han transformado el East End.",
    tips: [
      "El Queen Elizabeth Olympic Park es gratuito — perfecto para correr, pasear en bici o picnic.",
      "El ArcelorMittal Orbit tiene la tobogán más larga de Europa — 900m enrollada alrededor de la torre.",
      "Westfield Stratford es el mayor centro comercial de Europa.",
      "El London Stadium (West Ham) ofrece tours los días sin partido."
    ],
    mejor_horario: "Semana sin partido para el estadio. Fin de semana para el parque.",
    mundial_relevancia: "Escenario de los Juegos Olímpicos de Londres 2012 y los Paralímpicos.",
    descripcion_turistica: "La transformación de Stratford es el proyecto urbanístico más ambicioso de Europa en el siglo XXI. En 10 años pasó de zona industrial degradada a nuevo barrio con el parque olímpico y el mayor mall del continente.",
    lugares_cercanos: [
      { nombre: "Queen Elizabeth Olympic Park", tipo: "parque", distancia: "0.8 km", descripcion: "El parque olímpico de 227 hectáreas con instalaciones deportivas abiertas al público." },
      { nombre: "ArcelorMittal Orbit", tipo: "turismo", distancia: "1.2 km", descripcion: "Escultura-torre de Anish Kapoor con tobogán de 900m y mirador a 114m." },
      { nombre: "Westfield Stratford City", tipo: "comercio", distancia: "0.2 km", descripcion: "El mayor centro comercial de Europa con 250 tiendas, 70 restaurantes y 17 cines." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 01:00",
      sabado: "05:30 – 01:00",
      domingo: "07:00 – 23:30",
      notas: "Hub de múltiples líneas (Central, Jubilee, DLR, Overground, Elizabeth Line)."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad total. Diseñado para los Juegos Paralímpicos de 2012."
    }
  },
  {
    slug: "greenwich",
    nombre: "Greenwich",
    linea: "DLR",
    municipio: "Royal Borough of Greenwich",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Royal Observatory Greenwich", tipo: "museo", distancia: "15 min caminando" },
      { nombre: "Meridiano de Greenwich (GMT 0)", tipo: "turismo", distancia: "15 min caminando" },
      { nombre: "Cutty Sark (clipper victoriano)", tipo: "museo", distancia: "8 min caminando" },
      { nombre: "Greenwich Market", tipo: "comercio", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Greenwich — Metro Londres | MetroGuia",
    meta_description: "Greenwich con el Observatorio Real, el Meridiano de Greenwich (GMT 0) y el Cutty Sark. Patrimonio UNESCO y el lugar donde nació el tiempo universal.",
    h1: "Greenwich — DLR Londres",
    intro: "Greenwich es donde nació el tiempo: el Meridiano de Greenwich (longitud 0°) divide el mundo en este y oeste y define la hora GMT. El Observatorio Real y el Cutty Sark son joyas del patrimonio marítimo mundial.",
    tips: [
      "Puedes pararte exactamente sobre el Meridiano (longitud 0°) con un pie en cada hemisferio.",
      "El Cutty Sark es el único clipper victoriano conservado en el mundo.",
      "La colina del Observatorio tiene las mejores vistas del skyline de Canary Wharf.",
      "Greenwich Market los fines de semana tiene el mejor brunch artesano del sureste de Londres."
    ],
    mejor_horario: "Mañana de fin de semana para el mercado y luego el Observatorio.",
    mundial_relevancia: "Greenwich define el Meridiano 0° y el tiempo universal GMT — donde nació la hora estándar mundial.",
    descripcion_turistica: "Greenwich es Patrimonio UNESCO y uno de los lugares más significativos de la historia de la navegación. Desde el Observatorio Real (1675), los astrónomos establecieron el sistema de coordenadas que permite la navegación global.",
    lugares_cercanos: [
      { nombre: "Royal Observatory", tipo: "museo", distancia: "1.0 km", descripcion: "El observatorio donde se definió el tiempo universal GMT desde 1675." },
      { nombre: "Cutty Sark", tipo: "museo", distancia: "0.6 km", descripcion: "El único clipper de té victoriano conservado, el barco más rápido de su época." },
      { nombre: "National Maritime Museum", tipo: "museo", distancia: "0.8 km", descripcion: "Museo gratuito sobre la historia naval británica y la exploración oceánica." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 00:30",
      sabado: "06:00 – 00:30",
      domingo: "08:00 – 23:30",
      notas: "DLR — sin conductor, servicio automático. Siéntate al frente para las mejores vistas."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Acceso a nivel en el DLR. La colina del Observatorio tiene pendiente — acceso alternativo disponible."
    }
  },
  {
    slug: "stansted-airport",
    nombre: "Stansted Airport",
    linea: "Stansted Express",
    municipio: "Essex",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal de Stansted", tipo: "transporte", distancia: "0 min caminando" },
      { nombre: "Shopping duty-free (World Duty Free)", tipo: "comercio", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Stansted Airport — Metro Londres | MetroGuia",
    meta_description: "Stansted Airport, aeropuerto de bajo coste de Londres. Conexión con Liverpool Street en 47 minutos. Hub de Ryanair y easyJet.",
    h1: "Stansted Airport — Stansted Express Londres",
    intro: "Stansted es el aeropuerto de las aerolíneas de bajo coste (Ryanair, easyJet) en el noreste de Londres. El Stansted Express conecta con Liverpool Street Station en el centro en 47 minutos.",
    tips: [
      "El Stansted Express cuesta £19.40 (reserva online para descuentos del 20%).",
      "Stansted tiene el único terminal en el UK con los gates en subterráneo — transporte automático a los aviones.",
      "Llega con 2.5h de antelación — los controles de seguridad pueden ser lentos en temporada alta.",
      "La terminal fue diseñada por Norman Foster — una de las más elegantes del mundo."
    ],
    mejor_horario: "Madrugada (04:00-06:00h) para vuelos tempranos con mínima afluencia.",
    mundial_relevancia: "Stansted es el aeropuerto de mayor tráfico de Ryanair en el mundo.",
    descripcion_turistica: "El aeropuerto de Stansted, diseñado por Norman Foster en 1991, es considerado uno de los aeropuertos más elegantes del mundo. Su diseño de terminal única con techos abovedados y iluminación natural revolucionó la arquitectura aeroportuaria.",
    lugares_cercanos: [
      { nombre: "Terminal Stansted", tipo: "transporte", distancia: "0.1 km", descripcion: "Terminal única de Norman Foster, una de las más elegantes del mundo." },
      { nombre: "Hatfield Forest", tipo: "parque", distancia: "5.0 km", descripcion: "Bosque medieval protegido por el National Trust a pocos km del aeropuerto." }
    ],
    horarios: {
      lunes_viernes: "04:00 – 00:30",
      sabado: "04:00 – 00:30",
      domingo: "05:00 – 00:00",
      notas: "Stansted Express cada 15-30 minutos. Verificar horarios en nationalrail.co.uk."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Aeropuerto completamente accesible. Asistencia disponible — solicitar al reservar el vuelo."
    }
  }
];
