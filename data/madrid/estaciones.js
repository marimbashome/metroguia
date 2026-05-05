export const estacionesMadrid = [
  {
    slug: "sol",
    nombre: "Sol",
    linea: "1",
    municipio: "Madrid Centro",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Puerta del Sol", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "El Oso y el Madroño (estatua)", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Kilómetro 0 de España", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Mercado de San Miguel", tipo: "alimento", distancia: "5 min caminando" }
    ],
    transferencias: ["sol"],
    seo_title: "Sol — Metro Madrid | MetroGuia",
    meta_description: "Sol, el corazón de Madrid y el kilómetro cero de España. La Puerta del Sol, el Oso y el Madroño y el mejor acceso a la Plaza Mayor.",
    h1: "Sol — Metro de Madrid",
    intro: "Sol es el epicentro de Madrid y de toda España. La Puerta del Sol es el punto kilómetrico desde donde se miden todas las distancias del país, y el lugar donde se celebra la Nochevieja más famosa de España.",
    tips: [
      "El Kilómetro 0 de España está en el suelo de la Puerta del Sol — busca la placa.",
      "Las 12 uvas de Nochevieja en Sol son una tradición nacional desde 1909.",
      "El Mercado de San Miguel, a 5 min, tiene los mejores pintxos de Madrid.",
      "Desde Sol puedes ir caminando a la Plaza Mayor, el Palacio Real y el Rastro."
    ],
    mejor_horario: "Cualquier hora, pero amanecer para las mejores fotos sin gente.",
    mundial_relevancia: "Puerta del Sol es el centro geográfico y simbólico de España — el punto kilómetro cero de todas las carreteras nacionales.",
    descripcion_turistica: "Sol fue durante siglos la puerta de entrada al Madrid del siglo XVI. La Puerta del Sol que vemos hoy fue construida en el siglo XVIII y reformada varias veces. El edificio de la Comunidad de Madrid con el reloj fue la antigua Casa de Correos, primer edificio público del Madrid ilustrado.",
    lugares_cercanos: [
      { nombre: "Plaza Mayor", tipo: "turismo", distancia: "0.3 km", descripcion: "La plaza porticada del siglo XVII, escenario de la vida pública del Madrid de los Austrias." },
      { nombre: "Mercado de San Miguel", tipo: "alimento", distancia: "0.4 km", descripcion: "El mercado gourmet más emblemático de Madrid con barras de pintxos y vinos." },
      { nombre: "Catedral de la Almudena", tipo: "turismo", distancia: "0.9 km", descripcion: "La catedral de Madrid, construida entre 1879 y 1993, junto al Palacio Real." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "El metro de Madrid funciona 24h los fines de semana de junio a septiembre (Metro Noche)."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa. Sol fue una de las primeras estaciones renovadas con ascensores."
    }
  },
  {
    slug: "gran-via",
    nombre: "Gran Vía",
    linea: "1",
    municipio: "Madrid Centro",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Gran Vía (boulevard)", tipo: "comercio", distancia: "1 min caminando" },
      { nombre: "Edificio Metrópolis", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Real Academia de Bellas Artes de San Fernando", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "El Corte Inglés", tipo: "comercio", distancia: "5 min caminando" }
    ],
    transferencias: ["gran-via"],
    seo_title: "Gran Vía — Metro Madrid | MetroGuia",
    meta_description: "Gran Vía, el boulevard central de Madrid. Teatros, grandes tiendas, el Edificio Metrópolis y la vida nocturna del centro de la capital.",
    h1: "Gran Vía — Metro de Madrid",
    intro: "Gran Vía es el gran bulevar de Madrid, inaugurado en 1910. Sus edificios modernistas y art decó, sus teatros y musicales y sus tiendas lo hacen imprescindible. El Edificio Metrópolis (1911) es el símbolo arquitectónico del barrio.",
    tips: [
      "El Edificio Metrópolis tiene la mejor fotografía nocturna de Madrid — iluminado espectacularmente.",
      "La Real Academia de Bellas Artes de San Fernando guarda Goya, Velázquez y Rubens gratuitamente.",
      "Gran Vía tiene los mejores musicales de Madrid — entradas en Taquilla.com con descuento.",
      "Las terrazas de los edificios de Gran Vía tienen vistas panorámicas — busca el Círculo de Bellas Artes."
    ],
    mejor_horario: "Noche para la iluminación. Semana para las tiendas sin saturación.",
    mundial_relevancia: "Gran Vía es la 'Broadway española' por la concentración de teatros y musicales.",
    descripcion_turistica: "La Gran Vía fue el proyecto urbanístico más ambicioso del Madrid del siglo XX: 1.3 km trazados demoliendo calles medievales para crear un bulevar comparable a los de París. Sus edificios de estilos eclécticamente mezclados (modernismo, beaux-arts, art decó) son un libro de historia de la arquitectura del siglo XX.",
    lugares_cercanos: [
      { nombre: "Edificio Metrópolis", tipo: "turismo", distancia: "0.2 km", descripcion: "El edificio más fotografiado de Madrid (1911) con su cúpula de zinc y la diosa Niké." },
      { nombre: "Real Academia de Bellas Artes de San Fernando", tipo: "museo", distancia: "0.4 km", descripcion: "Museo gratuito con obras de Goya, Zurbarán, Velázquez y Rubens." },
      { nombre: "Círculo de Bellas Artes (azotea)", tipo: "turismo", distancia: "0.3 km", descripcion: "La azotea del Círculo de Bellas Artes tiene las mejores vistas de la Gran Vía desde arriba." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 1 y 5 en esta estación."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "nuevos-ministerios",
    nombre: "Nuevos Ministerios",
    linea: "8",
    municipio: "Madrid",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Complejo de Nuevos Ministerios (edificios)", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "IFEMA (conexión Barajas)", tipo: "transporte", distancia: "20 min en metro" },
      { nombre: "Estadio Santiago Bernabéu", tipo: "turismo", distancia: "10 min en metro" }
    ],
    transferencias: ["nuevos-ministerios"],
    seo_title: "Nuevos Ministerios — Metro Madrid | MetroGuia",
    meta_description: "Nuevos Ministerios, hub de transporte del norte de Madrid. Conexión directa al aeropuerto de Barajas en 20 minutos por la línea 8.",
    h1: "Nuevos Ministerios — Metro de Madrid",
    intro: "Nuevos Ministerios es el gran hub del eje norte-sur de Madrid. La línea 8 conecta desde aquí con el aeropuerto de Barajas en 20 minutos — la forma más rápida y económica de llegar al aeropuerto.",
    tips: [
      "La línea 8 al aeropuerto desde Nuevos Ministerios cuesta €5 (suplemento aeropuerto incluido).",
      "El complejo de Nuevos Ministerios fue diseñado por Secundino Zuazo en los años 30.",
      "Desde aquí toman el metro los trabajadores de los principales ministerios — bullicioso entre semana.",
      "Conexión directa a Santiago Bernabéu en línea 10 — sin cambios."
    ],
    mejor_horario: "Horas valle para evitar saturación. Mañanas de fin de semana tranquilas.",
    mundial_relevancia: "Nuevos Ministerios es el mayor intercambiador de Madrid — conecta los ejes norte, sur y aeropuerto.",
    descripcion_turistica: "Nuevos Ministerios fue concebido por la Segunda República como un nuevo centro administrativo monumental. El conjunto arquitectónico, inconcluso por la Guerra Civil y terminado en los 40, mezcla el racionalismo republicano con el clasicismo del régimen franquista.",
    lugares_cercanos: [
      { nombre: "Complejo de Nuevos Ministerios", tipo: "turismo", distancia: "0.2 km", descripcion: "Conjunto arquitectónico modernista de Secundino Zuazo que alberga varios ministerios." },
      { nombre: "Paseo de la Castellana", tipo: "turismo", distancia: "0.2 km", descripcion: "El gran bulevar de Madrid que atraviesa la ciudad de norte a sur." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 6, 8 y 10. Conexión aeropuerto por línea 8."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Estación totalmente accesible."
    }
  },
  {
    slug: "barajas",
    nombre: "Aeropuerto T1-T2-T3",
    linea: "8",
    municipio: "Madrid",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminales 1, 2 y 3", tipo: "transporte", distancia: "5 min caminando" },
      { nombre: "Terminal 4 (Iberia)", tipo: "transporte", distancia: "15 min en autobús" }
    ],
    transferencias: [],
    seo_title: "Aeropuerto T1-T2-T3 — Metro Madrid | MetroGuia",
    meta_description: "Aeropuerto de Barajas T1-T2-T3. Conexión directa al centro de Madrid en 20 minutos por la línea 8. Hub de Iberia y mayor aeropuerto de España.",
    h1: "Aeropuerto T1-T2-T3 — Metro de Madrid",
    intro: "El aeropuerto de Madrid-Barajas es el mayor de España y hub de Iberia. La línea 8 conecta las terminales 1, 2 y 3 con el centro de Madrid (Nuevos Ministerios) en 20 minutos.",
    tips: [
      "La Terminal 4 de Iberia tiene su propia parada (Aeropuerto T4) — una parada más en la línea 8.",
      "El metro al aeropuerto tiene un suplemento de €3 — el billete total es €5 desde el centro.",
      "La Terminal 4, diseñada por Richard Rogers, es una obra arquitectónica premiada mundialmente.",
      "El AVE (alta velocidad) conecta la T4 con Barcelona en 2h30 — muy cómodo."
    ],
    mejor_horario: "05:30-08:00h para vuelos tempranos. La línea 8 empieza a las 06:00h.",
    mundial_relevancia: "Barajas es el mayor aeropuerto de España y séptimo de Europa por pasajeros.",
    descripcion_turistica: "La Terminal 4 de Barajas (2006), diseñada por Richard Rogers y Antonio Lamela, es considerada una de las terminales más bellas del mundo. Su cubierta ondulada de bambú con lucernarios que proyectan luz de colores le valió el Premio Stirling de arquitectura.",
    lugares_cercanos: [
      { nombre: "Terminal 4 (T4)", tipo: "transporte", distancia: "2.0 km", descripcion: "La terminal más premiada del mundo, con trenes AVE a Barcelona." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 8 desde esta estación hasta Nuevos Ministerios — 20 min."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Aeropuerto completamente accesible."
    }
  },
  {
    slug: "plaza-de-espana",
    nombre: "Plaza de España",
    linea: "3",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Monumento a Cervantes y el Quijote", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Torre de Madrid", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Edificio España", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Jardines de Sabatini", tipo: "parque", distancia: "8 min caminando" }
    ],
    transferencias: ["plaza-de-espana"],
    seo_title: "Plaza de España — Metro Madrid | MetroGuia",
    meta_description: "Plaza de España con el monumento al Quijote y Sancho Panza, el Edificio España y los Jardines de Sabatini junto al Palacio Real.",
    h1: "Plaza de España — Metro de Madrid",
    intro: "Plaza de España es el gran espacio monumental del centro de Madrid, dominado por la estatua de Don Quijote y Sancho Panza y los rascacielos del franquismo (Torre de Madrid y Edificio España). Puerta de acceso al Palacio Real.",
    tips: [
      "El Edificio España fue adquirido por Riu Hotels y reformado — su azotea tiene vistas espectaculares.",
      "Los Jardines de Sabatini (junto al Palacio Real) son impresionantes y gratuitos.",
      "El Gran Vía del Señor de los Anillos (musical) está a 5 min caminando.",
      "La plaza fue reformada en 2021 — ahora es peatonal y tiene una gran fuente."
    ],
    mejor_horario: "Tarde para los jardines. Noche para el Edificio España iluminado.",
    mundial_relevancia: "La estatua ecuestre de Don Quijote y Sancho Panza es el monumento literario más reproducido del mundo hispánico.",
    descripcion_turistica: "Plaza de España fue diseñada en los años 40 y 50 como símbolo del nacionalismo franquista. Sus dos rascacielos (Torre de Madrid y Edificio España) querían emular el Empire State. Hoy es un espacio cívico renovado y el punto de inicio de la visita al Madrid de los Austrias.",
    lugares_cercanos: [
      { nombre: "Palacio Real de Madrid", tipo: "turismo", distancia: "0.6 km", descripcion: "El palacio real más grande de Europa occidental en uso con 3,418 habitaciones." },
      { nombre: "Jardines de Sabatini", tipo: "parque", distancia: "0.7 km", descripcion: "Los jardines neoclásicos del Palacio Real con fuentes y estatuas de reyes." },
      { nombre: "Templo de Debod", tipo: "turismo", distancia: "0.5 km", descripcion: "El templo egipcio del siglo II a.C. regalado a España — los mejores atardeceres de Madrid." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 3 y 10 en esta estación."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "opera",
    nombre: "Ópera",
    linea: "2",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Teatro Real de Madrid", tipo: "cultura", distancia: "3 min caminando" },
      { nombre: "Palacio Real", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Plaza de Oriente", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Catedral de la Almudena", tipo: "turismo", distancia: "5 min caminando" }
    ],
    transferencias: ["opera"],
    seo_title: "Ópera — Metro Madrid | MetroGuia",
    meta_description: "Ópera, con el Teatro Real, el Palacio Real y la Plaza de Oriente. El Madrid monumental a pasos del metro.",
    h1: "Ópera — Metro de Madrid",
    intro: "Ópera da acceso al Madrid más monumental: el Palacio Real (el más grande de Europa occidental), el Teatro Real, la Plaza de Oriente y la Catedral de la Almudena. El barrio del Madrid de los Borbones.",
    tips: [
      "El Palacio Real de Madrid tiene las colecciones de armería y pinacoteca más importantes de Europa.",
      "La Plaza de Oriente tiene las mejores terrazas de café con vista al Palacio.",
      "El Teatro Real es una de las mejores óperas del mundo — entradas desde €12 en localidades altas.",
      "La Catedral de la Almudena tiene la cripta y la cúpula abiertas al público — impresionante."
    ],
    mejor_horario: "Mañanas de miércoles a lunes para el Palacio Real (cierre los martes).",
    mundial_relevancia: "El Palacio Real de Madrid es el palacio real en uso más grande de Europa con 135,000 m².",
    descripcion_turistica: "Ópera es el corazón del Madrid borbónico del siglo XVIII. Felipe V construyó el Palacio Real tras el incendio del Alcázar en 1734 y Carlos III transformó Madrid en la capital ilustrada más moderna de Europa. El Teatro Real, inaugurado en 1850, es hoy una de las mejores óperas del mundo.",
    lugares_cercanos: [
      { nombre: "Palacio Real", tipo: "turismo", distancia: "0.4 km", descripcion: "El palacio real más grande de Europa occidental, residencia oficial pero no habitual del rey." },
      { nombre: "Teatro Real", tipo: "cultura", distancia: "0.2 km", descripcion: "Una de las mejores óperas del mundo, inaugurada en 1850 y completamente renovada." },
      { nombre: "Plaza de Oriente", tipo: "turismo", distancia: "0.2 km", descripcion: "La plaza con la estatua ecuestre de Felipe IV y vistas al Palacio Real." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 2 y 5 en esta estación."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "prado-atocha",
    nombre: "Atocha",
    linea: "1",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Museo del Prado", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Museo Reina Sofía", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Museo Thyssen-Bornemisza", tipo: "museo", distancia: "10 min caminando" },
      { nombre: "Jardín Botánico", tipo: "parque", distancia: "5 min caminando" }
    ],
    transferencias: ["prado-atocha"],
    seo_title: "Atocha / Prado — Metro Madrid | MetroGuia",
    meta_description: "Atocha, puerta al Triángulo del Arte de Madrid: Prado, Reina Sofía y Thyssen-Bornemisza. La mayor concentración de arte del mundo en un kilómetro.",
    h1: "Atocha / Prado — Metro de Madrid",
    intro: "Atocha da acceso al Triángulo del Arte, la mayor concentración de museos de arte del mundo por kilómetro cuadrado. El Prado, el Reina Sofía y el Thyssen están en un radio de 15 minutos caminando.",
    tips: [
      "El Prado es gratuito de lunes a sábado de 18-20h y domingos de 17-19h.",
      "El Reina Sofía (Guernica de Picasso) es gratuito de lunes a sábado de 19-21h.",
      "La Atocha estación de tren tiene el jardín tropical más grande de España — entrada gratuita.",
      "El Paseo del Prado tiene la mayor concentración de fuentes ornamentales de Europa."
    ],
    mejor_horario: "Tarde (17-20h) para los museos con entrada gratuita. Mañana para el Prado.",
    mundial_relevancia: "El Triángulo del Arte de Madrid (Prado, Reina Sofía, Thyssen) es la mayor concentración de obras maestras del mundo.",
    descripcion_turistica: "El Paseo del Prado fue concebido por Carlos III en el siglo XVIII como un boulevard ilustrado con jardines, fuentes y museos de ciencias. Hoy alberga tres de los diez mejores museos del mundo: el Prado (Velázquez, Goya, Rubens), el Reina Sofía (Picasso, Dalí, Miró) y el Thyssen (Impresionismo, Expressionismo).",
    lugares_cercanos: [
      { nombre: "Museo del Prado", tipo: "museo", distancia: "0.4 km", descripcion: "Uno de los más grandes y ricos museos de arte del mundo con Las Meninas de Velázquez." },
      { nombre: "Museo Reina Sofía", tipo: "museo", distancia: "0.4 km", descripcion: "Museo de arte moderno y contemporáneo con el Guernica de Picasso." },
      { nombre: "Museo Thyssen-Bornemisza", tipo: "museo", distancia: "0.9 km", descripcion: "La colección privada de arte más completa del mundo, del Renacimiento al Pop Art." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 1 — conexión Atocha Renfe (AVE y cercanías)."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "atocha-renfe",
    nombre: "Atocha Renfe",
    linea: "1",
    municipio: "Madrid",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Estación de Atocha (jardín tropical)", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Museo del Prado", tipo: "museo", distancia: "8 min caminando" },
      { nombre: "Parque del Retiro (sur)", tipo: "parque", distancia: "10 min caminando" }
    ],
    transferencias: ["atocha-renfe"],
    seo_title: "Atocha Renfe — Metro Madrid | MetroGuia",
    meta_description: "Atocha Renfe, hub de trenes de alta velocidad AVE. El jardín tropical de la estación y la puerta sur al Parque del Retiro.",
    h1: "Atocha Renfe — Metro de Madrid",
    intro: "Atocha Renfe es la estación de trenes más importante de España, con AVE a Barcelona, Sevilla, Valencia y Bilbao. La antigua sala de llegadas es hoy el jardín tropical más grande de España — un pulmón verde en el corazón de Madrid.",
    tips: [
      "El jardín tropical de la sala de espera de Atocha es gratuito — 4,000 m² con tortugas y peces.",
      "El AVE a Barcelona desde Atocha tarda 2h30 — más cómodo que volar.",
      "El Parque del Retiro tiene la entrada sur en esta zona — el Palacio de Cristal está aquí.",
      "El monumento a los 191 muertos del atentado de 2004 está junto a la estación."
    ],
    mejor_horario: "Cualquier hora para el jardín tropical. Mañana para coger el AVE.",
    mundial_relevancia: "Atocha fue escenario del mayor atentado terrorista de Europa (11-M, 2004): 191 víctimas.",
    descripcion_turistica: "Atocha es la estación de ferrocarril más antigua de España en uso (1851). La monumental cubierta de hierro y vidrio de Albert de Palacio (1892) alberga hoy el jardín tropical, mientras el módulo moderno de Rafael Moneo (1992) acoge los trenes AVE.",
    lugares_cercanos: [
      { nombre: "Jardín tropical Atocha", tipo: "parque", distancia: "0.1 km", descripcion: "El jardín tropical de 4,000 m² dentro de la histórica marquesina de Atocha." },
      { nombre: "Parque del Retiro", tipo: "parque", distancia: "0.7 km", descripcion: "El gran parque de Madrid con el Palacio de Cristal y el estanque con barcas." },
      { nombre: "Memorial 11-M", tipo: "turismo", distancia: "0.1 km", descripcion: "El monumento en memoria de las 191 víctimas del atentado del 11 de marzo de 2004." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Cercanías y AVE en este punto. Transbordos a líneas de metro 1 y C."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad total en la estación de trenes y el metro."
    }
  },
  {
    slug: "sevilla",
    nombre: "Sevilla",
    linea: "2",
    municipio: "Madrid Centro",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Carrera de San Jerónimo", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Calle Alcalá", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Museo Thyssen-Bornemisza", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Círculo de Bellas Artes", tipo: "cultura", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Sevilla — Metro Madrid | MetroGuia",
    meta_description: "Sevilla, en el corazón del Madrid burgués del siglo XX. Acceso al Museo Thyssen, el Círculo de Bellas Artes y la Carrera de San Jerónimo.",
    h1: "Sevilla — Metro de Madrid",
    intro: "Sevilla es la estación del Madrid más elegante del siglo XX, en la intersección de la Carrera de San Jerónimo con Alcalá. A pasos del Thyssen y del Congreso de los Diputados.",
    tips: [
      "El Congreso de los Diputados, a 5 min, ofrece visitas gratuitas los sábados.",
      "La Carrera de San Jerónimo tiene algunos de los hoteles y restaurantes más lujosos de Madrid.",
      "El Círculo de Bellas Artes tiene la mejor azotea de Madrid para vistas y copas.",
      "El barrio de Las Letras (Huertas), a 10 min, fue el barrio de Lope de Vega y Cervantes."
    ],
    mejor_horario: "Entre semana para el Congreso de los Diputados. Tarde para el Círculo.",
    mundial_relevancia: "La Carrera de San Jerónimo es la calle del Congreso — eje del poder parlamentario español.",
    descripcion_turistica: "El entorno de la estación Sevilla es el corazón del Madrid liberal del siglo XIX. La Carrera de San Jerónimo fue el itinerario de las procesiones reales y el paseo de los aristócratas del Romanticismo. Hoy alberga el Hotel Palace y el Congreso de los Diputados.",
    lugares_cercanos: [
      { nombre: "Museo Thyssen-Bornemisza", tipo: "museo", distancia: "0.4 km", descripcion: "La mayor colección privada de arte del mundo con obras desde el Renacimiento hasta hoy." },
      { nombre: "Congreso de los Diputados", tipo: "turismo", distancia: "0.5 km", descripcion: "El parlamento español, visitable gratuitamente los sábados." },
      { nombre: "Círculo de Bellas Artes", tipo: "cultura", distancia: "0.4 km", descripcion: "El club cultural más activo de Madrid con azotea con vistas a Gran Vía." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 2 — estación céntrica."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "banco-de-espana",
    nombre: "Banco de España",
    linea: "2",
    municipio: "Madrid Centro",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Fuente de Cibeles", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "CentroCentro (Palacio Comunicaciones)", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Puerta de Alcalá", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "Museo del Ejército (Retiro)", tipo: "museo", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "Banco de España — Metro Madrid | MetroGuia",
    meta_description: "Banco de España con la Fuente de Cibeles, el Palacio de Cibeles (CentroCentro) y la Puerta de Alcalá. El eje monumental del Madrid moderno.",
    h1: "Banco de España — Metro de Madrid",
    intro: "Banco de España da acceso a la Fuente de Cibeles, símbolo del Real Madrid y de la propia ciudad. La plaza de Cibeles es el lugar donde Madrid celebra sus victorias deportivas y políticas.",
    tips: [
      "La Fuente de Cibeles es el punto de celebración del Real Madrid — el 27 de mayo de 2022 se congregaron 600,000 personas aquí.",
      "El Palacio de Cibeles (actual ayuntamiento y CentroCentro) tiene el mejor mirador gratuito de Madrid.",
      "La Puerta de Alcalá (1778) fue la primera puerta monumental de Europa.",
      "El Paseo del Arte empieza aquí — caminata de 30 min al Prado pasando por el Thyssen."
    ],
    mejor_horario: "Atardecer para las vistas desde la azotea del CentroCentro.",
    mundial_relevancia: "La Fuente de Cibeles es el símbolo de Madrid y el lugar de celebración de todos los grandes eventos de la ciudad.",
    descripcion_turistica: "La Plaza de Cibeles fue diseñada por Ventura Rodríguez en el siglo XVIII como parte del proyecto ilustrado de Carlos III. La fuente con la diosa Cibeles en su carro de leones es una de las imágenes más reconocibles de España.",
    lugares_cercanos: [
      { nombre: "Fuente de Cibeles", tipo: "turismo", distancia: "0.1 km", descripcion: "El símbolo de Madrid del siglo XVIII, lugar de celebraciones del Real Madrid." },
      { nombre: "CentroCentro", tipo: "museo", distancia: "0.2 km", descripcion: "El antiguo Palacio de Comunicaciones, hoy sede del ayuntamiento con mirador gratuito." },
      { nombre: "Puerta de Alcalá", tipo: "turismo", distancia: "0.6 km", descripcion: "La puerta monumental neoclásica de Carlos III (1778), primera de Europa de su tipo." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 2 — estación a nivel de superficie."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "alonso-martinez",
    nombre: "Alonso Martínez",
    linea: "4",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Barrio de Chueca (acceso)", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Barrio de Malasaña (acceso)", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Fundación Telefónica", tipo: "museo", distancia: "10 min caminando" }
    ],
    transferencias: ["alonso-martinez"],
    seo_title: "Alonso Martínez — Metro Madrid | MetroGuia",
    meta_description: "Alonso Martínez, el hub del Madrid alternativo. Acceso a Chueca, Malasaña y los barrios más vivos y creativos de la capital.",
    h1: "Alonso Martínez — Metro de Madrid",
    intro: "Alonso Martínez es el nudo central del Madrid más vivo y alternativo: a 5 minutos de Chueca (barrio LGBTQ+) y 10 de Malasaña (indie y vintage). El corazón del ocio nocturno de la capital.",
    tips: [
      "Chueca es el barrio más abierto y festivo de Madrid — el Pride es el más concurrido del mundo hispánico.",
      "Malasaña tiene la mejor concentración de bares de cócteles artesanales y tiendas vintage de Madrid.",
      "El barrio de Justicia, entre ambos, tiene los mejores restaurantes del Madrid actual.",
      "Alonso Martínez tiene 3 líneas de metro — perfecta para cambiar de barrio rápidamente."
    ],
    mejor_horario: "Noche de jueves a sábado para la vida nocturna. Tarde de fin de semana para el ambiente.",
    mundial_relevancia: "El Pride de Madrid (MADO) es el mayor desfile de orgullo LGBTQ+ del mundo en número de asistentes: 1.5 millones.",
    descripcion_turistica: "Alonso Martínez marca el límite entre el Madrid burgués de la derecha (Recoletos, Castellana) y el Madrid popular de izquierda (Chueca, Malasaña). En los 80 y 90, durante la Movida Madrileña, estos barrios fueron el epicentro de la revolución cultural española.",
    lugares_cercanos: [
      { nombre: "Chueca", tipo: "turismo", distancia: "0.4 km", descripcion: "El barrio LGBTQ+ más famoso de Europa con tiendas, bares y restaurantes únicos." },
      { nombre: "Malasaña", tipo: "turismo", distancia: "0.8 km", descripcion: "El barrio indie y alternativo de Madrid, cuna de la Movida Madrileña de los 80." },
      { nombre: "Fundación Telefónica", tipo: "museo", distancia: "0.7 km", descripcion: "Museo gratuito de arte y tecnología en el edificio histórico de Gran Vía 28." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 4, 5 y 10 en esta estación — gran intercambiador."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "bilbao",
    nombre: "Bilbao",
    linea: "1",
    municipio: "Madrid",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Barrio de Malasaña (centro)", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Mercado de Barceló", tipo: "alimento", distancia: "3 min caminando" },
      { nombre: "Glorieta de Bilbao", tipo: "turismo", distancia: "1 min caminando" }
    ],
    transferencias: ["bilbao"],
    seo_title: "Bilbao — Metro Madrid | MetroGuia",
    meta_description: "Bilbao, en el corazón del barrio de Malasaña. El Mercado de Barceló y el ambiente más auténtico y alternativo del Madrid de moda.",
    h1: "Bilbao — Metro de Madrid",
    intro: "Bilbao es la estación del Madrid alternativo por excelencia. El barrio de Malasaña, con sus cafés de tercera ola, tiendas de discos de vinilo y bares de cócteles artesanales, es el más de moda de la capital.",
    tips: [
      "El Mercado de Barceló tiene el mejor brunch de fin de semana del centro de Madrid.",
      "La calle Fuencarral, entre Bilbao y Tribunal, concentra las mejores tiendas independientes de moda.",
      "La Glorieta de Bilbao tiene las mejores terrazas de verano del centro.",
      "Los bares de Malasaña que quedan abiertos más tarde son en la zona de la calle San Vicente Ferrer."
    ],
    mejor_horario: "Mediodía de fin de semana para el mercado. Noche para Malasaña.",
    mundial_relevancia: "Malasaña fue la cuna de la Movida Madrileña, el movimiento cultural más importante de España en el siglo XX.",
    descripcion_turistica: "Malasaña fue el barrio obrero y marginal de Madrid durante siglos, convertido en el epicentro de la Movida de los años 80 (Almodóvar, Alaska, Radio Futura). Hoy es el barrio más creativo y de moda de la capital, con un equilibrio entre lo auténtico y lo trendy.",
    lugares_cercanos: [
      { nombre: "Mercado de Barceló", tipo: "alimento", distancia: "0.2 km", descripcion: "Mercado municipal renovado con puestos gourmet, rooftop y piscina municipal." },
      { nombre: "Calle Fuencarral", tipo: "comercio", distancia: "0.2 km", descripcion: "La calle de moda independiente de Madrid, de Tribunal a Gran Vía." },
      { nombre: "El Café de Mahón", tipo: "alimento", distancia: "0.4 km", descripcion: "Uno de los bares más históricos de Malasaña con café de especialidad." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 1 y 4 en esta estación."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "tribunal",
    nombre: "Tribunal",
    linea: "1",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Fuencarral (calle de moda)", tipo: "comercio", distancia: "1 min caminando" },
      { nombre: "Museo de Historia de Madrid", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Palacio de Justicia", tipo: "turismo", distancia: "5 min caminando" }
    ],
    transferencias: ["tribunal"],
    seo_title: "Tribunal — Metro Madrid | MetroGuia",
    meta_description: "Tribunal, entre Malasaña y Chueca. El Museo de Historia de Madrid y la calle Fuencarral, el paseo de moda de la capital.",
    h1: "Tribunal — Metro de Madrid",
    intro: "Tribunal es la estación entre los dos barrios más creativos de Madrid: Malasaña y Chueca. La calle Fuencarral, que empieza aquí, es el eje comercial independiente más importante de la ciudad.",
    tips: [
      "El Museo de Historia de Madrid (gratuito) tiene la maqueta de Madrid del siglo XVIII más detallada del mundo.",
      "Fuencarral 43 (antiguo Mercado Fuencarral) tiene las mejores tiendas de moda alternativa.",
      "La zona tiene los mejores bares de gin tonic artesanal de Madrid.",
      "La iglesia de Santa Bárbara tiene el tejado de pizarra más bello del Madrid moderno."
    ],
    mejor_horario: "Tarde para las tiendas. Noche de fin de semana para los bares.",
    mundial_relevancia: "La Movida Madrileña de los años 80 empezó en los bares de Tribunal y Malasaña — el movimiento cultural más influyente del España democrática.",
    descripcion_turistica: "Tribunal lleva el nombre del Palacio de Justicia que da a la glorieta de Bilbao. Es el punto de convergencia del Madrid más joven y creativo, donde conviven la tradición arquitectónica del siglo XIX con los negocios más innovadores del siglo XXI.",
    lugares_cercanos: [
      { nombre: "Museo de Historia de Madrid", tipo: "museo", distancia: "0.2 km", descripcion: "Museo gratuito en un convento barroco con la historia de Madrid desde el siglo XVI." },
      { nombre: "Calle Fuencarral", tipo: "comercio", distancia: "0.1 km", descripcion: "Eje comercial independiente del centro de Madrid con moda alternativa y cafés." },
      { nombre: "Chueca", tipo: "turismo", distancia: "0.5 km", descripcion: "El barrio LGBTQ+ más vibrante de España." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 1 y 10 en esta estación."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "chueca",
    nombre: "Chueca",
    linea: "5",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Plaza de Chueca", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Mercado de San Antón", tipo: "alimento", distancia: "3 min caminando" },
      { nombre: "Bares y restaurantes LGBTQ+", tipo: "alimento", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Chueca — Metro Madrid | MetroGuia",
    meta_description: "Chueca, el corazón del barrio más abierto y festivo de Madrid. Plaza de Chueca, Mercado de San Antón y la mayor concentración de vida LGBTQ+ de España.",
    h1: "Chueca — Metro de Madrid",
    intro: "Chueca es el barrio más vibrante, abierto y festivo de Madrid. El epicentro de la vida LGBTQ+ española, con la plaza de Chueca como salón de estar, el Mercado de San Antón y los mejores bares del centro.",
    tips: [
      "El Mercado de San Antón tiene un rooftop terrace perfecto para una copa al atardecer.",
      "El Pride de Madrid (MADO, junio) atrae 1.5 millones de personas — el mayor del mundo hispanohablante.",
      "Las calles Hortaleza y Fuencarral tienen las mejores tiendas de diseño independiente.",
      "La Tasca del Álamo, cerca de la plaza, tiene los mejores pinchos de Madrid."
    ],
    mejor_horario: "Cualquier momento desde el mediodía. Especialmente viernes y sábado noche.",
    mundial_relevancia: "El World Pride de Madrid 2017 reunió 3.5 millones de personas — el mayor evento LGBTQ+ de la historia.",
    descripcion_turistica: "Chueca fue el barrio más degradado del centro de Madrid en los años 80, reconvertido en símbolo de la tolerancia y la creatividad por la comunidad LGBTQ+ que lo revitalizó. Su transformación es estudiada en escuelas de urbanismo de todo el mundo como ejemplo de gentrificación positiva.",
    lugares_cercanos: [
      { nombre: "Mercado de San Antón", tipo: "alimento", distancia: "0.2 km", descripcion: "Mercado gourmet de tres plantas con terrace en la azotea para tapas y cócteles." },
      { nombre: "Plaza de Chueca", tipo: "turismo", distancia: "0.1 km", descripcion: "La plaza-salón de Madrid, animada a cualquier hora con terrazas y ambiente único." },
      { nombre: "Calle Hortaleza", tipo: "comercio", distancia: "0.2 km", descripcion: "La calle de las tiendas de diseño, moda alternativa y gastronomía de Chueca." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 5 — estación pequeña pero estratégica."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "colon",
    nombre: "Colón",
    linea: "4",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Plaza de Colón", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Torres de Colón", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Museo Arqueológico Nacional", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Jardines del Descubrimiento", tipo: "parque", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Colón — Metro Madrid | MetroGuia",
    meta_description: "Colón con la Plaza de Colón, el Museo Arqueológico Nacional y las Torres de Colón. El eje de la Castellana y el Madrid institucional.",
    h1: "Colón — Metro de Madrid",
    intro: "Colón es el centro institucional del Madrid moderno. La Plaza de Colón, con su monumento al descubridor de América y las icónicas Torres de Colón (diseñadas 'al revés', colgantes desde la cima), marca el eje de la Castellana.",
    tips: [
      "Las Torres de Colón tienen el parking más original del mundo — la estructura está colgada desde arriba.",
      "El Museo Arqueológico Nacional tiene la copia de la Dama de Elche y los Guerreros de Ibiza.",
      "La Plaza de Colón acoge el desfile militar del 12 de octubre y la celebración de la Fiesta Nacional.",
      "Los Jardines del Descubrimiento tienen la fuente más alta de Madrid — impresionante en verano."
    ],
    mejor_horario: "Mañana para el Museo Arqueológico. Tarde para la plaza.",
    mundial_relevancia: "La Plaza de Colón es el escenario del Día de la Hispanidad el 12 de octubre — la mayor parada militar de España.",
    descripcion_turistica: "La Plaza de Colón, diseñada en los años 70, unifica el monumento a Cristóbal Colón con las modernas Torres gemelas y el jardín subterráneo de las cascadas. Es el punto de inflexión entre el Madrid histórico del sur y el Madrid financiero y corporativo del norte.",
    lugares_cercanos: [
      { nombre: "Museo Arqueológico Nacional", tipo: "museo", distancia: "0.4 km", descripcion: "El museo de la historia antigua de España con la Dama de Elche y tesoros ibéricos." },
      { nombre: "Torres de Colón", tipo: "turismo", distancia: "0.1 km", descripcion: "Las icónicas torres de Antonio Lamela, construidas de arriba abajo, símbolo del diseño español." },
      { nombre: "Biblioteca Nacional", tipo: "museo", distancia: "0.4 km", descripcion: "La mayor biblioteca de España con manuscritos del Siglo de Oro y mapas únicos." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 4 — estación bien conectada al eje de la Castellana."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "retiro",
    nombre: "Retiro",
    linea: "9",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Parque del Retiro", tipo: "parque", distancia: "5 min caminando" },
      { nombre: "Palacio de Cristal", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Palacio de Velázquez", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Estanque del Retiro", tipo: "turismo", distancia: "15 min caminando" }
    ],
    transferencias: [],
    seo_title: "Retiro — Metro Madrid | MetroGuia",
    meta_description: "Retiro, puerta al Parque del Retiro, el gran pulmón verde de Madrid. Palacio de Cristal, estanque con barcas y jardines históricos.",
    h1: "Retiro — Metro de Madrid",
    intro: "Retiro da acceso al Parque del Retiro, el gran pulmón verde de Madrid y Patrimonio UNESCO desde 2021. Con 118 hectáreas, el Palacio de Cristal, el estanque con barcas y miles de árboles, es el espacio verde más querido de la capital.",
    tips: [
      "El Palacio de Cristal (1887) acoge exposiciones del Reina Sofía — gratuitas.",
      "Alquila una barca en el estanque el domingo por la mañana — experiencia clásica madrileña.",
      "El Retiro tiene 15,000 árboles y la Rosaleda con 4,000 rosas — espectacular en mayo.",
      "El bosque de recordatorio a las víctimas del 11-M está en la entrada de la calle Alcalá."
    ],
    mejor_horario: "Domingos por la mañana para el ambiente auténtico madrileño.",
    mundial_relevancia: "El Parque del Retiro es Patrimonio de la Humanidad UNESCO desde 2021 como parte del 'Paisaje de la Luz' de Madrid.",
    descripcion_turistica: "El Buen Retiro fue el jardín privado de los reyes de España hasta 1868, cuando se abrió al público. El Palacio de Cristal (hierro y cristal, 1887) y el Palacio de Velázquez (ladrillo, 1883) fueron construidos para la Exposición de Filipinas y hoy acogen exposiciones del Museo Reina Sofía.",
    lugares_cercanos: [
      { nombre: "Parque del Retiro", tipo: "parque", distancia: "0.4 km", descripcion: "El gran parque histórico de Madrid (118 ha) con jardines, estanque y palacios de exposiciones." },
      { nombre: "Palacio de Cristal", tipo: "turismo", distancia: "0.8 km", descripcion: "La joya de hierro y cristal del Retiro que acoge exposiciones gratuitas del Reina Sofía." },
      { nombre: "Puerta de Alcalá", tipo: "turismo", distancia: "0.3 km", descripcion: "La puerta neoclásica de Carlos III (1778), arco triunfal más antiguo de Madrid." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 9 — estación del barrio de Salamanca."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "ibiza",
    nombre: "Ibiza",
    linea: "9",
    municipio: "Madrid",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Barrio de Salamanca (lujo)", tipo: "comercio", distancia: "5 min caminando" },
      { nombre: "Calle Serrano (moda)", tipo: "comercio", distancia: "8 min caminando" },
      { nombre: "Jardín Botánico (sur Retiro)", tipo: "parque", distancia: "15 min caminando" }
    ],
    transferencias: [],
    seo_title: "Ibiza — Metro Madrid | MetroGuia",
    meta_description: "Ibiza, en el barrio de Salamanca. El distrito más lujoso de Madrid con la calle Serrano y el mejor comercio premium de España.",
    h1: "Ibiza — Metro de Madrid",
    intro: "Ibiza da acceso al barrio de Salamanca, el más lujoso y exclusivo de Madrid. La calle Serrano y las adyacentes son el Milla de Oro del lujo español, con las boutiques de todas las grandes firmas internacionales.",
    tips: [
      "La calle Serrano tiene el mejor window shopping de Madrid — desde Hermès hasta Loewe.",
      "El barrio tiene los mejores restaurantes de alta cocina de Madrid — reserva con semanas de antelación.",
      "El Mercado de la Paz en Serrano es el mercado gourmet del barrio — excelente calidad.",
      "La arquitectura modernista del barrio del siglo XIX es de las mejor conservadas de Madrid."
    ],
    mejor_horario: "Entre semana por la tarde para las tiendas. Fin de semana para el ambiente del barrio.",
    mundial_relevancia: "El barrio de Salamanca es el símbolo del lujo y la elegancia madrileña, comparable a Mayfair en Londres o le Marais en París.",
    descripcion_turistica: "El barrio de Salamanca fue planificado por el Marqués de Salamanca en 1860 como el primer barrio moderno de Madrid, con manzanas ortogonales y edificios unifamiliares para la burguesía. Hoy es el barrio más caro de Madrid y uno de los más exclusivos de Europa.",
    lugares_cercanos: [
      { nombre: "Calle Serrano", tipo: "comercio", distancia: "0.6 km", descripcion: "La calle del lujo de Madrid con boutiques de Hermès, Loewe, Louis Vuitton y Dior." },
      { nombre: "Mercado de la Paz", tipo: "alimento", distancia: "0.5 km", descripcion: "El mercado gourmet del barrio de Salamanca con los mejores productos premium de Madrid." },
      { nombre: "Fundación Juan March", tipo: "museo", distancia: "0.8 km", descripcion: "La fundación cultural más activa de España con exposiciones gratuitas de arte." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 9 — estación barrio de Salamanca."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "goya",
    nombre: "Goya",
    linea: "2",
    municipio: "Madrid",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Calle Goya (comercios)", tipo: "comercio", distancia: "1 min caminando" },
      { nombre: "El Corte Inglés Goya", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Mercado de Torrijos", tipo: "alimento", distancia: "8 min caminando" }
    ],
    transferencias: ["goya"],
    seo_title: "Goya — Metro Madrid | MetroGuia",
    meta_description: "Goya, en el barrio de Salamanca. El eje comercial del distrito más exclusivo de Madrid con El Corte Inglés y la calle Goya.",
    h1: "Goya — Metro de Madrid",
    intro: "Goya es la estación comercial del barrio de Salamanca. La calle Goya concentra el comercio de calidad del distrito más exclusivo de Madrid, con El Corte Inglés más grande de España y múltiples tiendas de moda.",
    tips: [
      "El Corte Inglés de Goya tiene el mejor supermercado gourmet de Madrid en el sótano.",
      "La calle Goya tiene menos turistas que Serrano pero igual nivel de calidad en las tiendas.",
      "El restaurante La Trainera (mariscos) en la zona es considerado el mejor de Madrid.",
      "Puedes caminar hasta el Retiro en 15 min por calles del barrio de Salamanca."
    ],
    mejor_horario: "Mañanas de semana para las tiendas. Mediodía de fin de semana para tapas.",
    mundial_relevancia: "El barrio de Salamanca tiene la mayor concentración de restaurantes con Estrella Michelin de España por metro cuadrado.",
    descripcion_turistica: "El entorno de la estación Goya es el corazón del consumo de lujo madrileño. El barrio de Salamanca, con sus edificios de fin de siglo XIX y principios del XX, es el más conservado arquitectónicamente del Madrid histórico fuera del casco antiguo.",
    lugares_cercanos: [
      { nombre: "El Corte Inglés Goya", tipo: "comercio", distancia: "0.2 km", descripcion: "El mayor El Corte Inglés de España con 9 plantas y supermercado gourmet." },
      { nombre: "Calle Goya", tipo: "comercio", distancia: "0.1 km", descripcion: "La calle comercial más exclusiva del barrio de Salamanca." },
      { nombre: "Parque del Retiro (norte)", tipo: "parque", distancia: "1.0 km", descripcion: "Entrada norte del Retiro, junto a la Puerta de Alcalá." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 2 y 4 en esta estación."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "velazquez",
    nombre: "Velázquez",
    linea: "4",
    municipio: "Madrid",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Calle Velázquez (lujo)", tipo: "comercio", distancia: "1 min caminando" },
      { nombre: "Calle Serrano (boutiques)", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Fundación Ramón Areces", tipo: "museo", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Velázquez — Metro Madrid | MetroGuia",
    meta_description: "Velázquez, en el corazón del barrio más exclusivo de Madrid. Calle Serrano, boutiques de lujo y el ambiente más refinado de la capital española.",
    h1: "Velázquez — Metro de Madrid",
    intro: "Velázquez es la estación más exclusiva de Madrid, en el corazón del barrio de Salamanca donde vive la aristocracia y la alta burguesía madrileña. Calle Serrano y Velázquez son el Golden Mile del lujo español.",
    tips: [
      "La calle Velázquez tiene las mejores galerías de arte del barrio.",
      "El ABC Serrano, a 5 min, es un centro comercial en un edificio art decó histórico.",
      "Las cafeterías del barrio (Mallorca, El Riojano) tienen los mejores pastelillos de Madrid.",
      "El barrio es perfecto para pasear — la arquitectura es de un nivel excepcional."
    ],
    mejor_horario: "Mañana entre semana para el ambiente tranquilo del barrio.",
    mundial_relevancia: "La calle Serrano es la calle comercial de mayor renta per cápita de España.",
    descripcion_turistica: "El entorno de Velázquez concentra mansiones palaciegas, embajadas y los apartamentos más caros de España. La arquitectura del barrio, de finales del XIX e inicios del XX, mezcla el modernismo catalán con el clasicismo madrileño en una síntesis única.",
    lugares_cercanos: [
      { nombre: "Calle Serrano (boutiques)", tipo: "comercio", distancia: "0.2 km", descripcion: "El kilómetro de oro del lujo español con Loewe, Gucci, Prada y Valentino." },
      { nombre: "ABC Serrano", tipo: "comercio", distancia: "0.5 km", descripcion: "Centro comercial de lujo en el edificio histórico del diario ABC de 1899." },
      { nombre: "Museo Lázaro Galdiano", tipo: "museo", distancia: "0.8 km", descripcion: "Museo en villa modernista con una de las mejores colecciones privadas de Europa." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 4 — barrio de Salamanca."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "cuatro-caminos",
    nombre: "Cuatro Caminos",
    linea: "1",
    municipio: "Madrid",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Glorieta de Cuatro Caminos", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Palacio de los Deportes", tipo: "turismo", distancia: "10 min caminando" }
    ],
    transferencias: ["cuatro-caminos"],
    seo_title: "Cuatro Caminos — Metro Madrid | MetroGuia",
    meta_description: "Cuatro Caminos, gran nudo de transporte del norte de Madrid y corazón del barrio de Tetuán. Hub de múltiples líneas de metro.",
    h1: "Cuatro Caminos — Metro de Madrid",
    intro: "Cuatro Caminos es uno de los principales intercambiadores del metro de Madrid, en el límite entre el Madrid histórico y los barrios del norte. Hub de cuatro líneas de metro y punto de acceso a Tetuán.",
    tips: [
      "Cuatro Caminos tiene una de las mejores concentraciones de restaurantes económicos del norte de Madrid.",
      "El barrio de Tetuán al norte tiene el mercado de El Fontán, muy popular entre los locales.",
      "Desde aquí es rápido llegar a la línea 6 circular para cruzar Madrid en todas las direcciones.",
      "La zona tiene supermercados y comercios de primera necesidad excelentes — barrio muy residencial."
    ],
    mejor_horario: "Entre semana para el ambiente de barrio auténtico.",
    mundial_relevancia: "Cuatro Caminos es el intercambiador de metro más antiguo de Madrid en uso continuo.",
    descripcion_turistica: "Cuatro Caminos debe su nombre a la confluencia de los cuatro caminos que salían hacia el norte de Madrid. Fue uno de los primeros nodos de transporte de la capital y hoy sigue siendo un importante hub de conexiones entre líneas.",
    lugares_cercanos: [
      { nombre: "Mercado de Maravillas", tipo: "alimento", distancia: "0.5 km", descripcion: "El mercado cubierto más grande de Europa con 300 puestos de alimentación." },
      { nombre: "Barrio de Tetuán", tipo: "turismo", distancia: "0.5 km", descripcion: "Barrio multicultural del norte de Madrid con la mayor comunidad marroquí de la ciudad." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 1, 2 y 6 en esta estación — gran intercambiador."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "ciudad-universitaria",
    nombre: "Ciudad Universitaria",
    linea: "6",
    municipio: "Madrid",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Universidad Complutense de Madrid", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Museo del Traje", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Parque del Oeste", tipo: "parque", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "Ciudad Universitaria — Metro Madrid | MetroGuia",
    meta_description: "Ciudad Universitaria, campus de la Complutense de Madrid. Museo del Traje y acceso al Parque del Oeste con el Templo de Debod.",
    h1: "Ciudad Universitaria — Metro de Madrid",
    intro: "Ciudad Universitaria es el campus de la Universidad Complutense, la mayor universidad de España con 90,000 estudiantes. Un mundo propio en el noroeste de Madrid con museos, parques y cafeterías universitarias.",
    tips: [
      "El Museo del Traje (gratuito) tiene la colección textil más completa de España.",
      "El Parque del Oeste con el Templo de Debod está a 15 min caminando — atardeceres mágicos.",
      "El campus de la Complutense tiene edificios racionalistas de los años 30 únicos en España.",
      "La Residencia de Estudiantes (histórica) albergó a Dalí, García Lorca y Buñuel."
    ],
    mejor_horario: "Cualquier día. Mañanas de semana para el ambiente universitario.",
    mundial_relevancia: "La Universidad Complutense fue fundada en 1508 — una de las universidades más antiguas del mundo en funcionamiento.",
    descripcion_turistica: "La Ciudad Universitaria fue diseñada en los años 20 y 30 como un campus moderno alejado del centro de Madrid. Sus edificios racionalistas fueron duramente bombardeados en la Guerra Civil — la frente de batalla estuvo aquí durante 3 años (1936-1939).",
    lugares_cercanos: [
      { nombre: "Museo del Traje", tipo: "museo", distancia: "0.4 km", descripcion: "Museo gratuito con la mayor colección de moda y textiles de España." },
      { nombre: "Templo de Debod", tipo: "turismo", distancia: "1.5 km", descripcion: "El templo egipcio del siglo II a.C. en el Parque del Oeste — los mejores atardeceres de Madrid." },
      { nombre: "Parque del Oeste", tipo: "parque", distancia: "1.2 km", descripcion: "El parque más selvático y grande del noroeste de Madrid con rosaleda y teleférico." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 6 — extremo norte del metro en esta zona."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "lago",
    nombre: "Lago",
    linea: "10",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Casa de Campo (parque)", tipo: "parque", distancia: "2 min caminando" },
      { nombre: "Teleférico de Madrid", tipo: "turismo", distancia: "15 min en metro" },
      { nombre: "Zoo Aquarium de Madrid", tipo: "turismo", distancia: "15 min caminando" },
      { nombre: "Parque de Atracciones", tipo: "turismo", distancia: "20 min caminando" }
    ],
    transferencias: [],
    seo_title: "Lago — Metro Madrid | MetroGuia",
    meta_description: "Lago, puerta a la Casa de Campo, el mayor parque urbano de Europa. Lago, Zoo y Parque de Atracciones en el pulmón verde de Madrid.",
    h1: "Lago — Metro de Madrid",
    intro: "Lago da acceso a la Casa de Campo, el parque urbano más grande de Europa con 1,700 hectáreas. El lago artificial, el Zoo Aquarium, el Parque de Atracciones y la playa urbana en verano están aquí.",
    tips: [
      "El lago de la Casa de Campo tiene alquiler de barcas y restaurantes — perfecto en verano.",
      "El Teleférico de Madrid (desde el Parque del Oeste) llega hasta la Casa de Campo — vistas espectaculares.",
      "El Zoo Aquarium de Madrid tiene el mayor acuario de España — fascinante para niños.",
      "La Casa de Campo tiene rutas de bicicleta de 15 km en el bosque — alquila en la entrada."
    ],
    mejor_horario: "Domingos y días festivos para el ambiente familiar. Semana para el silencio del bosque.",
    mundial_relevancia: "La Casa de Campo (1,722 ha) es el parque urbano más grande de Europa.",
    descripcion_turistica: "La Casa de Campo fue el coto real de caza de los reyes de España desde el siglo XVI hasta 1931, cuando la Segunda República lo abrió al público de Madrid. Hoy es el gran espacio verde de la capital con lago, bosque mediterráneo, instalaciones deportivas y zoo.",
    lugares_cercanos: [
      { nombre: "Lago de la Casa de Campo", tipo: "parque", distancia: "0.2 km", descripcion: "El lago artificial más grande de Madrid con barcas, restaurantes y zonas de baño." },
      { nombre: "Zoo Aquarium de Madrid", tipo: "turismo", distancia: "1.2 km", descripcion: "Uno de los mejores zoos de Europa con más de 6,000 animales y acuario." },
      { nombre: "Parque de Atracciones", tipo: "turismo", distancia: "1.5 km", descripcion: "El parque de atracciones más grande de Madrid con 40 atracciones." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 10 — zona suroeste de Madrid."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  },
  {
    slug: "estadio-metropolitano",
    nombre: "Estadio Metropolitano",
    linea: "7",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Estadio Cívitas Metropolitano (Atlético de Madrid)", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Museo del Atlético de Madrid", tipo: "museo", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estadio Metropolitano — Metro Madrid | MetroGuia",
    meta_description: "Estadio Metropolitano del Atlético de Madrid. El estadio más moderno de Europa (2017) y escenario de la final de la UEFA Champions League.",
    h1: "Estadio Metropolitano — Metro de Madrid",
    intro: "El Cívitas Metropolitano es el estadio más moderno de Europa, inaugurado en 2017 y sede del Atlético de Madrid. Acogió la final de la UEFA Champions League de 2019 entre Liverpool y Tottenham.",
    tips: [
      "El tour del estadio incluye el vestuario, el campo y el museo — muy completo.",
      "Los días de partido la estación está muy saturada — llega 1h antes del partido.",
      "El museo del Atlético tiene los trofeos originales de la Liga y la UEFA Europa League.",
      "El barrio de San Blas cercano tiene las mejores tapas económicas del este de Madrid."
    ],
    mejor_horario: "Días de partido del Atlético para la atmósfera. Semana para el tour sin esperas.",
    mundial_relevancia: "El Metropolitano acogió la Final de la UEFA Champions League 2019 — el mayor evento deportivo europeo del año.",
    descripcion_turistica: "El Cívitas Metropolitano (67,703 asientos) fue diseñado por el estudio Cruz y Ortiz en el solar del antiguo estadio Vicente Calderón (Manzanares). Es considerado uno de los estadios más modernos y mejor equipados del mundo, ganador de múltiples premios de arquitectura.",
    lugares_cercanos: [
      { nombre: "Cívitas Metropolitano", tipo: "turismo", distancia: "0.4 km", descripcion: "El estadio más moderno de Europa, sede del Atlético de Madrid y escenario de finales europeas." },
      { nombre: "Museo Atlético de Madrid", tipo: "museo", distancia: "0.4 km", descripcion: "Historia del Atlético de Madrid con trofeos, camisetas históricas y documentos." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "La línea 7 es la conexión directa. En días de partido el servicio se refuerza."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa. El estadio también es totalmente accesible."
    }
  },
  {
    slug: "bernabeu",
    nombre: "Santiago Bernabéu",
    linea: "10",
    municipio: "Madrid",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Estadio Santiago Bernabéu (Real Madrid)", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Museo del Real Madrid", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Paseo de la Castellana", tipo: "turismo", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Santiago Bernabéu — Metro Madrid | MetroGuia",
    meta_description: "Santiago Bernabéu, el estadio más famoso del mundo. Museo del Real Madrid, tour del estadio y el emblema del fútbol global.",
    h1: "Santiago Bernabéu — Metro de Madrid",
    intro: "El Santiago Bernabéu es el estadio más icónico del fútbol mundial, hogar del Real Madrid (el club con más Copas de Europa de la historia). Con su reciente renovación (2023), es el estadio más tecnológicamente avanzado del planeta.",
    tips: [
      "El tour del Bernabéu incluye la sala de trofeos con las 15 Copas de Europa — imprescindible.",
      "En días de partido, llega en metro — la zona es impracticable en coche.",
      "El estadio tiene un museo interactivo con hologramas y simuladores de partido.",
      "La cubierta retráctil del nuevo estadio es la primera de su tipo en Europa."
    ],
    mejor_horario: "Cualquier día para el tour. Días de Champions League para la atmósfera épica.",
    mundial_relevancia: "El Real Madrid es el club con más Copas de Europa/Champions League de la historia. El Bernabéu ha acogido 4 finales de Champions.",
    descripcion_turistica: "El Santiago Bernabéu, inaugurado en 1947 y completamente renovado entre 2019 y 2023, tiene capacidad para 81,044 espectadores. La renovación, en la que se invirtieron €800 millones, lo convirtió en el primer estadio del mundo con cubierta retráctil y terreno de juego deslizable.",
    lugares_cercanos: [
      { nombre: "Santiago Bernabéu", tipo: "turismo", distancia: "0.2 km", descripcion: "El estadio más famoso del mundo, hogar del Real Madrid y renovado por completo en 2023." },
      { nombre: "Museo del Real Madrid", tipo: "museo", distancia: "0.2 km", descripcion: "15 Copas de Europa, miles de trofeos y la historia del club más exitoso del mundo." },
      { nombre: "Paseo de la Castellana", tipo: "turismo", distancia: "0.1 km", descripcion: "El gran boulevard del Madrid moderno con rascacielos corporativos y restaurantes de calidad." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Línea 10 — la más directa al estadio. Línea 9 como alternativa."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa. El estadio renovado tiene acceso total para discapacitados."
    }
  },
  {
    slug: "callao",
    nombre: "Callao",
    linea: "3",
    municipio: "Madrid Centro",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Plaza del Callao", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Cine Callao (1927)", tipo: "cultura", distancia: "2 min caminando" },
      { nombre: "El Corte Inglés Preciados", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "FNAC (tecnología y cultura)", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: ["callao"],
    seo_title: "Callao — Metro Madrid | MetroGuia",
    meta_description: "Callao, entre Gran Vía y la Puerta del Sol. El Cine Callao, El Corte Inglés Preciados y el eje comercial más animado del centro de Madrid.",
    h1: "Callao — Metro de Madrid",
    intro: "Callao es el punto medio entre Gran Vía y Sol, en el corazón del comercio del centro de Madrid. El Cine Callao (1927), El Corte Inglés Preciados y la animada plaza hacen de este un punto de paso imprescindible.",
    tips: [
      "El Cine Callao tiene el mejor visionado en Madrid — en su restauración conservó el estilo art decó.",
      "La plaza del Callao tiene las mejores pantallas de publicidad exterior de Madrid.",
      "El Mercado de San Miguel está a 5 min caminando desde aquí.",
      "La calle Preciados, entre Callao y Sol, es la calle comercial más transitada de España."
    ],
    mejor_horario: "Cualquier hora. Noche para las pantallas iluminadas y el ambiente de Gran Vía.",
    mundial_relevancia: "La calle Preciados es la más transitada de España con 40,000 peatones por hora en los picos de Navidad.",
    descripcion_turistica: "Callao es el nexo entre el Madrid monumental (Sol, Mayor) y el Madrid moderno (Gran Vía). La plaza recibe su nombre del histórico desembarco de Callao (Perú) en 1866, una de las últimas victorias militares de España en el Pacífico.",
    lugares_cercanos: [
      { nombre: "Cine Callao", tipo: "cultura", distancia: "0.1 km", descripcion: "El cine más emblemático de Madrid (1927) restaurado con todo su esplendor art decó." },
      { nombre: "Calle Preciados", tipo: "comercio", distancia: "0.2 km", descripcion: "La calle peatonal más transitada de España, de Callao a Sol." },
      { nombre: "Mercado de San Miguel", tipo: "alimento", distancia: "0.5 km", descripcion: "El mercado gourmet del Madrid de los Austrias." }
    ],
    horarios: {
      lunes_viernes: "06:00 – 01:30",
      sabado: "06:00 – 02:00",
      domingo: "06:00 – 01:30",
      notas: "Líneas 3 y 5 en esta estación."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa."
    }
  }
];
