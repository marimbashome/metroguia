export const estacionesBarcelona = [
  {
    slug: 'passeig-de-gracia',
    ciudad: 'barcelona',
    nombre: 'Passeig de Gràcia',
    linea: 'L2',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Viernes noche hasta las 2:00 h, sábados servicio 24 horas. Billetes: T-Casual 10 viajes €11.35, billete sencillo €2.55.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Casa Batlló (Gaudí)', tipo: 'Turismo', distancia: '2 min caminando' },
      { nombre: 'Casa Milà — La Pedrera (Gaudí)', tipo: 'Turismo', distancia: '5 min caminando' },
      { nombre: 'Manzana de la Discordia', tipo: 'Turismo', distancia: '1 min caminando' }
    ],
    seo_title: 'Passeig de Gràcia — Metro Barcelona L2/L3/L4 | MetroGuia',
    meta_description: 'Passeig de Gràcia: la parada de metro más modernista de Barcelona. Casa Batlló, La Pedrera y la Manzana de la Discordia a pocos pasos.',
    h1: 'Passeig de Gràcia — Metro de Barcelona',
    intro: 'El triángulo de oro del Modernismo: tres líneas, tres obras maestras en 300 metros.',
    descripcion_turistica: 'La estación de Passeig de Gràcia sirve tres líneas de metro y emerge en lo que es, sin duda, el tramo de arquitectura modernista más concentrado del mundo. La Manzana de la Discordia —bautizada así porque tres arquitectos rivales compitieron en el mismo bloque— contiene la Casa Batlló (Gaudí), la Casa Amatller (Puig i Cadafalch) y la Casa Lleó Morera (Domènech i Montaner) en la misma manzana. A 300 m al norte está la Casa Milà, conocida como La Pedrera, el edificio de apartamentos de Gaudí de 1906 con su famosa azotea de chimeneas esculturales.',
    lugares_cercanos: [
      { nombre: 'Casa Batlló', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'La casa del dragón de Gaudí — una de las fachadas más fotografiadas de Barcelona.' },
      { nombre: 'Casa Milà (La Pedrera)', tipo: 'Turismo', distancia: '0.3 km', descripcion: 'El edificio de apartamentos surrealista de Gaudí con la famosa azotea de guerreros-chimenea.' },
      { nombre: 'Manzana de la Discordia', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'Tres obras maestras Modernistas en competencia en una sola manzana del Eixample.' }
    ]
  },
  {
    slug: 'sagrada-familia',
    ciudad: 'barcelona',
    nombre: 'Sagrada Família',
    linea: 'L2',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Viernes noche hasta las 2:00 h, sábados 24 horas. La Basílica abre de 9:00 a 20:00 (varía según temporada).'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Basílica de la Sagrada Família', tipo: 'Turismo', distancia: '2 min caminando' },
      { nombre: 'Avinguda de Gaudí', tipo: 'Turismo', distancia: '1 min caminando' },
      { nombre: 'Hospital de Sant Pau', tipo: 'Cultura', distancia: '10 min caminando' }
    ],
    seo_title: 'Sagrada Família — Metro Barcelona L2/L5 | MetroGuia',
    meta_description: 'Sagrada Família: parada directa al monumento más visitado de España, la obra maestra inacabada de Antoni Gaudí. Reserva entradas con antelación.',
    h1: 'Sagrada Família — Metro de Barcelona',
    intro: 'Sal del metro y mira arriba: la basílica inacabada de Gaudí se eleva sobre la salida de la estación.',
    descripcion_turistica: 'La estación de la Sagrada Família proporciona acceso directo al edificio más notable de España: la Basílica de la Sagrada Família de Antoni Gaudí. En construcción desde 1882, este Patrimonio de la Humanidad fusiona la arquitectura gótica con el Art Nouveau en algo completamente único. Sus 18 torres planificadas crean un perfil urbano sin igual en el mundo. El interior —completado en 2010— es un bosque de columnas de piedra ramificadas que filtran la luz solar a través de vidrieras en colores deslumbrantes. Reserva tus entradas con semanas de antelación: las colas sin reserva pueden ser de más de 2 horas.',
    lugares_cercanos: [
      { nombre: 'Basílica de la Sagrada Família', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'La obra maestra magna de Gaudí — el monumento más visitado de España. Reserva obligatoria.' },
      { nombre: 'Hospital de Sant Pau', tipo: 'Cultura', distancia: '0.6 km', descripcion: 'Extraordinario complejo Modernista de Domènech i Montaner, Patrimonio UNESCO. Menos masificado que la Sagrada Família.' },
      { nombre: 'Avinguda de Gaudí', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'Paseo arbolado que conecta la Sagrada Família con el Hospital de Sant Pau.' }
    ]
  },
  {
    slug: 'la-sagrera',
    ciudad: 'barcelona',
    nombre: 'La Sagrera',
    linea: 'L1',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Gran hub de trenes AVE y Rodalies en desarrollo. Billetes: billete sencillo €2.55.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Parque de la Pegaso', tipo: 'Naturaleza', distancia: '5 min caminando' },
      { nombre: 'Barrio de Sant Andreu', tipo: 'Barrio', distancia: '10 min caminando' }
    ],
    seo_title: 'La Sagrera — Metro Barcelona L1/L5/L9/L10 | MetroGuia',
    meta_description: 'La Sagrera en Barcelona: futuro gran hub ferroviario del nordeste de la ciudad, con conexión AVE y metro. Barrio de Sant Andreu.',
    h1: 'La Sagrera — Metro de Barcelona',
    intro: 'El futuro hub ferroviario del nordeste de Barcelona, donde se transformará el corazón industrial de la ciudad.',
    descripcion_turistica: 'La Sagrera es el eje de la mayor transformación urbanística de Barcelona en el siglo XXI: el proyecto de la estación de La Sagrera convertirá este nudo ferroviario en la mayor infraestructura de alta velocidad de España, con cuatro líneas de metro, Rodalies, el Tren de Alta Velocidad (AVE) y el futuro Corredor Mediterráneo. El parque de La Sagrera que se construye sobre las vías soterradas tendrá 40 hectáreas — el parque urbano más grande de Barcelona. El barrio de Sant Andreu que rodea la estación es uno de los más auténticos y menos turísticos de la ciudad.',
    lugares_cercanos: [
      { nombre: 'Barrio de Sant Andreu', tipo: 'Barrio', distancia: '0.8 km', descripcion: 'El barrio más auténtico del nordeste de Barcelona, con mercado propio y plazas animadas.' },
      { nombre: 'Parque de La Sagrera (en construcción)', tipo: 'Naturaleza', distancia: '0.3 km', descripcion: 'Futuro parque de 40 hectáreas sobre las vías soterradas — el mayor de Barcelona.' }
    ]
  },
  {
    slug: 'placa-espanya',
    ciudad: 'barcelona',
    nombre: 'Plaça Espanya',
    linea: 'L1',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Acceso a FGC (Ferrocarrils de la Generalitat) y tranvía T3. El Funicular de Montjuïc sale desde aquí.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'MNAC (Museu Nacional d\'Art de Catalunya)', tipo: 'Cultura', distancia: '10 min caminando' },
      { nombre: 'Pavelló Mies van der Rohe', tipo: 'Cultura', distancia: '8 min caminando' },
      { nombre: 'Fonts Màgiques de Montjuïc', tipo: 'Turismo', distancia: '5 min caminando' }
    ],
    seo_title: 'Plaça Espanya — Metro Barcelona L1/L3 | MetroGuia',
    meta_description: 'Plaça Espanya en Barcelona: puerta a Montjuïc, el MNAC, el Pavelló Mies van der Rohe y las Fonts Màgiques. Gran nudo de transporte.',
    h1: 'Plaça Espanya — Metro de Barcelona',
    intro: 'La puerta a Montjuïc: museos, el Pavelló de Mies van der Rohe y el espectáculo de las Fonts Màgiques.',
    descripcion_turistica: 'La estación de Plaça Espanya es la lanzadera de la colina más culturalmente rica de Barcelona: Montjuïc. Desde la gran Plaça d\'Espanya, con sus torres gemelas venecianas y las fuentes monumentales, un sistema de escaleras mecánicas asciende por los terrenos de la Exposición Internacional de 1929 hacia el MNAC (Museu Nacional d\'Art de Catalunya) — alojado en un espectacular palacio abovedado con la mejor colección de arte románico del mundo. Junto a él se encuentra el Pavelló Mies van der Rohe, el Pabellón Alemán reconstruido que revolucionó la arquitectura moderna en 1929 con su uso radical del espacio, el vidrio y el mármol.',
    lugares_cercanos: [
      { nombre: 'MNAC — Museu Nacional d\'Art de Catalunya', tipo: 'Cultura', distancia: '0.7 km', descripcion: 'La mejor colección de arte románico del mundo en un espectacular palacio hilltop.' },
      { nombre: 'Pavelló Mies van der Rohe', tipo: 'Cultura', distancia: '0.5 km', descripcion: 'El Pabellón Alemán de 1929 que cambió la arquitectura moderna para siempre.' },
      { nombre: 'Fonts Màgiques de Montjuïc', tipo: 'Turismo', distancia: '0.3 km', descripcion: 'Espectáculo nocturno de fuentes con luz y música los fines de semana.' }
    ]
  },
  {
    slug: 'barceloneta',
    ciudad: 'barcelona',
    nombre: 'Barceloneta',
    linea: 'L4',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'La playa es gratuita y está abierta todo el año. En verano, enorme afluencia de turistas.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Playa de la Barceloneta', tipo: 'Naturaleza', distancia: '5 min caminando' },
      { nombre: 'Barrio de la Barceloneta', tipo: 'Barrio', distancia: '2 min caminando' },
      { nombre: 'Port Olímpic', tipo: 'Turismo', distancia: '15 min caminando' }
    ],
    seo_title: 'Barceloneta — Metro Barcelona L4 | MetroGuia',
    meta_description: 'Barceloneta en Barcelona: la playa mediterránea más famosa de la ciudad, el barrio marinero del siglo XVIII y el Port Vell.',
    h1: 'Barceloneta — Metro de Barcelona',
    intro: 'El barrio de la playa de Barcelona — donde la ciudad se funde con el Mediterráneo.',
    descripcion_turistica: 'La estación de Barceloneta es la puerta marítima de Barcelona — una transformación que comenzó con los Juegos Olímpicos de 1992, que abrieron la ciudad al Mediterráneo tras siglos de aislamiento industrial. El barrio de la Barceloneta es un fascinante distrito de pescadores del siglo XVIII con una retícula de calles estrechas, hoy llenas de restaurantes de mariscos y pequeños apartamentos. A 300 metros de la salida de la estación se extiende la amplia playa de arena, respaldada por el Hotel Arts y el Port Olímpic. El paseo marítimo se prolonga durante kilómetros en ambas direcciones.',
    lugares_cercanos: [
      { nombre: 'Playa de la Barceloneta', tipo: 'Naturaleza', distancia: '0.3 km', descripcion: 'La principal playa urbana de Barcelona, 1,1 km de arena dorada en el Mediterráneo.' },
      { nombre: 'Port Vell', tipo: 'Turismo', distancia: '0.4 km', descripcion: 'El puerto antiguo con la Rambla del Mar y el Aquarium de Barcelona.' },
      { nombre: 'Passeig Marítim', tipo: 'Naturaleza', distancia: '0.2 km', descripcion: 'Paseo marítimo de 4,5 km desde Barceloneta hasta el Fórum — ideal para bicicleta.' }
    ]
  },
  {
    slug: 'ciutadella-vila-olimpica',
    ciudad: 'barcelona',
    nombre: 'Ciutadella / Vila Olímpica',
    linea: 'L4',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'El Parque de la Ciutadella cierra al anochecer (varía según temporada). Billetes: €2.55 sencillo.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Parque de la Ciutadella', tipo: 'Naturaleza', distancia: '3 min caminando' },
      { nombre: 'Zoológico de Barcelona', tipo: 'Turismo', distancia: '8 min caminando' },
      { nombre: 'Parlamento de Cataluña', tipo: 'Turismo', distancia: '10 min caminando' }
    ],
    seo_title: 'Ciutadella / Vila Olímpica — Metro Barcelona L4 | MetroGuia',
    meta_description: 'Ciutadella / Vila Olímpica en Barcelona: el parque más querido de la ciudad, el zoo y el Parlamento de Cataluña. La Villa Olímpica de 1992.',
    h1: 'Ciutadella / Vila Olímpica — Metro de Barcelona',
    intro: 'El parque más querido de Barcelona, donde la Cascada de Gaudí joven refleja las palmeras.',
    descripcion_turistica: 'La estación de Ciutadella / Vila Olímpica da acceso al Parque de la Ciutadella, el parque más grande de Barcelona y antigua sede de la Exposición Universal de 1888. Hoy alberga el Zoológico de Barcelona, un invernadero espectacular de hierro y vidrio, el Parlamento de Cataluña, una romántica cascada monumental (La Cascada, parcialmente diseñada por el joven Gaudí) y un lago con barcas de alquiler. La Vila Olímpica vecina fue construida para los Juegos Olímpicos de 1992 y hoy es un barrio residencial con acceso directo al Port Olímpic y la playa.',
    lugares_cercanos: [
      { nombre: 'Parque de la Ciutadella', tipo: 'Naturaleza', distancia: '0.3 km', descripcion: 'El mayor parque de Barcelona con lago, zoo y Parlamento de Cataluña.' },
      { nombre: 'La Cascada', tipo: 'Turismo', distancia: '0.5 km', descripcion: 'Monumental cascada del parque, parcialmente diseñada por el joven Antoni Gaudí.' }
    ]
  },
  {
    slug: 'arc-de-triomf',
    ciudad: 'barcelona',
    nombre: 'Arc de Triomf',
    linea: 'L1',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'El arco está iluminado por la noche. El Parque de la Ciutadella cierra al anochecer.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Arc de Triomf', tipo: 'Turismo', distancia: '2 min caminando' },
      { nombre: 'Parque de la Ciutadella', tipo: 'Naturaleza', distancia: '8 min caminando' },
      { nombre: 'Parlamento de Cataluña', tipo: 'Turismo', distancia: '12 min caminando' }
    ],
    seo_title: 'Arc de Triomf — Metro Barcelona L1 | MetroGuia',
    meta_description: 'Arc de Triomf en Barcelona: bajo el arco triunfal de ladrillo rojo de 1888, puerta al Parque de la Ciutadella y el Parlamento de Cataluña.',
    h1: 'Arc de Triomf — Metro de Barcelona',
    intro: 'Bajo el arco triunfal de ladrillo rojo de Barcelona, puerta al Parque de la Ciutadella.',
    descripcion_turistica: 'La estación de Arc de Triomf se encuentra al pie del Passeig de Lluís Companys, un grandioso paseo arbolado que lleva al arco triunfal de ladrillo rojo de Barcelona — construido como puerta de entrada a la Exposición Universal de 1888. Al otro extremo del paseo se encuentra el Parque de la Ciutadella, el mayor parque de Barcelona y antigua sede de la exposición, con el Zoológico de Barcelona, un espectacular invernadero de hierro y vidrio, el Parlamento de Cataluña, la romántica Cascada (parcialmente diseñada por el joven Gaudí) y un lago de barcas.',
    lugares_cercanos: [
      { nombre: 'Arc de Triomf', tipo: 'Turismo', distancia: '0.2 km', descripcion: 'El arco triunfal de ladrillo rojo de Barcelona, construido para la Exposición Universal de 1888.' },
      { nombre: 'Parque de la Ciutadella', tipo: 'Naturaleza', distancia: '0.5 km', descripcion: 'El mayor parque urbano de Barcelona con lago, zoo y Parlamento de Cataluña.' }
    ]
  },
  {
    slug: 'urquinaona',
    ciudad: 'barcelona',
    nombre: 'Urquinaona',
    linea: 'L1',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Intercambio L1 y L4. Billete sencillo €2.55.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Palau de la Música Catalana', tipo: 'Cultura', distancia: '5 min caminando' },
      { nombre: 'El Born', tipo: 'Barrio', distancia: '10 min caminando' }
    ],
    seo_title: 'Urquinaona — Metro Barcelona L1/L4 | MetroGuia',
    meta_description: 'Urquinaona en Barcelona: entre el Eixample y la ciudad vieja, con el Palau de la Música Catalana (UNESCO) y el barrio del Born a pie.',
    h1: 'Urquinaona — Metro de Barcelona',
    intro: 'Entre el Eixample y la ciudad vieja — perfecta para el joyero Palau de la Música Catalana.',
    descripcion_turistica: 'La estación de Urquinaona está idealmente situada entre la retícula del Eixample del siglo XIX y las calles medievales de la ciudad vieja. Su atracción estrella es el Palau de la Música Catalana, a 300 m — una sala de conciertos Patrimonio de la Humanidad de Lluís Domènech i Montaner (1908) que es uno de los edificios Modernistas más bellos del mundo. Su extraordinario interior, con un techo de vidrieras que funciona como una lámpara de araña durante el día, debe verse en persona. La estación también da acceso al animado barrio del Born con sus galerías de arte.',
    lugares_cercanos: [
      { nombre: 'Palau de la Música Catalana', tipo: 'Cultura', distancia: '0.3 km', descripcion: 'Sala de conciertos Patrimonio UNESCO — uno de los interiores más bellos de Europa.' },
      { nombre: 'Barrio del Born', tipo: 'Barrio', distancia: '0.5 km', descripcion: 'El barrio más de moda de Barcelona con galerías, restaurantes y el Museo Picasso.' }
    ]
  },
  {
    slug: 'placa-de-catalunya',
    ciudad: 'barcelona',
    nombre: 'Plaça de Catalunya',
    linea: 'L1',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'El mayor nudo de transporte de Barcelona: metro L1/L3, FGC y Rodalies. Autobuses aeropuerto.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Plaça de Catalunya', tipo: 'Turismo', distancia: '1 min caminando' },
      { nombre: 'La Rambla', tipo: 'Turismo', distancia: '1 min caminando' },
      { nombre: 'El Corte Inglés (terraza con vistas)', tipo: 'Comercio', distancia: '2 min caminando' }
    ],
    seo_title: 'Plaça de Catalunya — Metro Barcelona L1/L3 | MetroGuia',
    meta_description: 'Plaça de Catalunya: el corazón de Barcelona, donde comienza La Rambla. L1, L3, FGC y Rodalies. El punto de encuentro de la ciudad.',
    h1: 'Plaça de Catalunya — Metro de Barcelona',
    intro: 'El corazón geográfico y simbólico de Barcelona — cada ruta turística comienza y termina aquí.',
    descripcion_turistica: 'La estación de Plaça de Catalunya es el hub absoluto de Barcelona, situada bajo la Plaça de Catalunya — el centro geométrico y simbólico de la ciudad, donde la ciudad vieja se encuentra con la expansión del Eixample del siglo XIX. Desde aquí, Las Ramblas se extiende 1,2 km hacia el sur en dirección al mar, bordeada de puestos de flores, estatuas humanas y el famoso Mercado de la Boqueria. La estación conecta las líneas de metro L1 y L3 con el ferrocarril FGC (hacia Tibidabo y Vallvidrera) y los trenes de Rodalies de cercanías, convirtiéndola en el nodo de transporte más conectado de la ciudad.',
    lugares_cercanos: [
      { nombre: 'Plaça de Catalunya', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'La plaza central de Barcelona con fuentes, palomas y el corazón simbólico de la ciudad.' },
      { nombre: 'La Rambla', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'El famoso bulevar peatonal de Barcelona, 1,2 km desde aquí hasta el mar.' },
      { nombre: 'Mercat de la Boqueria', tipo: 'Gastronomía', distancia: '0.5 km', descripcion: 'El mercado cubierto más icónico de Barcelona — mejor antes de las 11:00 h.' }
    ]
  },
  {
    slug: 'universitat',
    ciudad: 'barcelona',
    nombre: 'Universitat',
    linea: 'L1',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Intercambio L1 y L2. Billetes: T-Casual 10 viajes €11.35.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Universitat de Barcelona (edificio histórico)', tipo: 'Turismo', distancia: '2 min caminando' },
      { nombre: 'Rambla del Poblenou', tipo: 'Barrio', distancia: '20 min metro' }
    ],
    seo_title: 'Universitat — Metro Barcelona L1/L2 | MetroGuia',
    meta_description: 'Universitat en Barcelona: intercambio L1/L2, junto al majestuoso edificio histórico de la Universitat de Barcelona y el Eixample universitario.',
    h1: 'Universitat — Metro de Barcelona',
    intro: 'En el corazón universitario del Eixample, junto al majestuoso edificio neorrenacentista de la Universitat de Barcelona.',
    descripcion_turistica: 'La estación de Universitat es un importante intercambio entre las líneas L1 y L2, situada en la Ronda de la Universitat, junto al majestuoso edificio histórico de la Universitat de Barcelona — un edificio neorrenacentista de 1874 con patios interiores que pueden visitarse libremente. El barrio que rodea la estación, conocido popularmente como el «Eixample universitario», es un área muy animada con librerías, cafeterías de estudiantes y la vida cultural del Ensanche barcelonés.',
    lugares_cercanos: [
      { nombre: 'Universitat de Barcelona (edificio histórico)', tipo: 'Cultura', distancia: '0.2 km', descripcion: 'Majestuoso edificio neorrenacentista de 1874 con patios visitables libremente.' },
      { nombre: 'Ronda Sant Antoni', tipo: 'Barrio', distancia: '0.3 km', descripcion: 'Calle con el mejor mercado de cómics y libros de viejo de Barcelona los domingos.' }
    ]
  },
  {
    slug: 'diagonal',
    ciudad: 'barcelona',
    nombre: 'Diagonal',
    linea: 'L3',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Intercambio L3 y L5. Acceso FGC en superficie hacia Gràcia y Sarrià.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Casa Milà — La Pedrera (Gaudí)', tipo: 'Turismo', distancia: '3 min caminando' },
      { nombre: 'Barrio de Gràcia', tipo: 'Barrio', distancia: '10 min caminando' },
      { nombre: 'Avinguda Diagonal (shopping de lujo)', tipo: 'Comercio', distancia: '1 min caminando' }
    ],
    seo_title: 'Diagonal — Metro Barcelona L3/L5 | MetroGuia',
    meta_description: 'Diagonal en Barcelona: La Pedrera a 3 minutos, Avinguda Diagonal y acceso al barrio de Gràcia. El Eixample más elegante.',
    h1: 'Diagonal — Metro de Barcelona',
    intro: 'En la gran Avinguda Diagonal, la columna vertebral del Eixample alto de Barcelona.',
    descripcion_turistica: 'La estación de Diagonal se sitúa en la intersección de las dos grandes arterias de Barcelona: la Avinguda Diagonal y el Passeig de Gràcia. La Avinguda Diagonal cruza la famosa retícula octogonal del Eixample de Ildefons Cerdà creando el bulevar diagonal que da nombre a la estación. Esta es la zona más elegante del Eixample barcelonés, con boutiques de diseñador, hoteles de cinco estrellas y los mejores ejemplos de edificios de apartamentos Modernistas fuera de las áreas inmediatamente turísticas. La Pedrera de Gaudí está a solo 3 minutos a pie.',
    lugares_cercanos: [
      { nombre: 'Casa Milà (La Pedrera)', tipo: 'Turismo', distancia: '0.2 km', descripcion: 'El extraordinario edificio de apartamentos de Gaudí, ahora centro cultural con azotea famosa.' },
      { nombre: 'Avinguda Diagonal', tipo: 'Comercio', distancia: '0.1 km', descripcion: 'El gran bulevar diagonal de Barcelona con shopping de lujo.' }
    ]
  },
  {
    slug: 'verdaguer',
    ciudad: 'barcelona',
    nombre: 'Verdaguer',
    linea: 'L4',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Intercambio L4 y L5. Billetes: billete sencillo €2.55.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Basílica de la Sagrada Família', tipo: 'Turismo', distancia: '8 min caminando' },
      { nombre: 'Avinguda Diagonal', tipo: 'Comercio', distancia: '3 min caminando' }
    ],
    seo_title: 'Verdaguer — Metro Barcelona L4/L5 | MetroGuia',
    meta_description: 'Verdaguer en Barcelona: intercambio L4/L5 en el Eixample, a 8 minutos caminando de la Sagrada Família.',
    h1: 'Verdaguer — Metro de Barcelona',
    intro: 'Intercambio L4/L5 en pleno Eixample, a una caminata de la Sagrada Família.',
    descripcion_turistica: 'La estación de Verdaguer es un intercambio entre las líneas L4 y L5 en el corazón del Eixample barcelonés, muy cerca de la Avinguda Diagonal. Desde aquí, la Sagrada Família está a solo 8-10 minutos caminando por la Avinguda de Gaudí, el paseo arbolado que une la basílica con el Hospital de Sant Pau de Domènech i Montaner. Es una alternativa para llegar a la Sagrada Família cuando la estación homónima está muy concurrida.',
    lugares_cercanos: [
      { nombre: 'Basílica de la Sagrada Família', tipo: 'Turismo', distancia: '0.7 km', descripcion: 'La obra maestra de Gaudí — también accesible caminando por la Avinguda de Gaudí.' },
      { nombre: 'Hospital de Sant Pau', tipo: 'Cultura', distancia: '0.5 km', descripcion: 'El extraordinario complejo Modernista de Domènech i Montaner, menos masificado que la Sagrada Família.' }
    ]
  },
  {
    slug: 'hospital-clinic',
    ciudad: 'barcelona',
    nombre: 'Hospital Clínic',
    linea: 'L5',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Acceso al Hospital Clínic de Barcelona. Billetes: billete sencillo €2.55.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Hospital Clínic de Barcelona', tipo: 'Servicios', distancia: '2 min caminando' },
      { nombre: 'Mercado del Ninot', tipo: 'Gastronomía', distancia: '5 min caminando' }
    ],
    seo_title: 'Hospital Clínic — Metro Barcelona L5 | MetroGuia',
    meta_description: 'Hospital Clínic en Barcelona: acceso al gran hospital universitario del Eixample y al animado Mercado del Ninot.',
    h1: 'Hospital Clínic — Metro de Barcelona',
    intro: 'En el Eixample izquierdo, junto al gran hospital universitario y el mercado de barrio del Ninot.',
    descripcion_turistica: 'La estación de Hospital Clínic sirve al gran Hospital Clínic de Barcelona y al barrio residencial del Eixample Esquerra (Eixample Izquierdo). El Mercat del Ninot, a 5 minutos, es uno de los mercados de barrio más animados del Eixample, recientemente renovado con una propuesta gastronómica actualizada que combina productos frescos con puestos de comida preparada.',
    lugares_cercanos: [
      { nombre: 'Mercat del Ninot', tipo: 'Gastronomía', distancia: '0.4 km', descripcion: 'Mercado de barrio renovado con productos frescos y gastronomía preparada.' }
    ]
  },
  {
    slug: 'lesseps',
    ciudad: 'barcelona',
    nombre: 'Lesseps',
    linea: 'L3',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Acceso al Parque Güell por la calle Olot. Billetes: billete sencillo €2.55.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Parque Güell (Gaudí)', tipo: 'Turismo', distancia: '20 min caminando' },
      { nombre: 'Barrio de Gràcia', tipo: 'Barrio', distancia: '5 min caminando' }
    ],
    seo_title: 'Lesseps — Metro Barcelona L3 | MetroGuia',
    meta_description: 'Lesseps en Barcelona: la parada de metro más cercana al Parque Güell de Gaudí (20 minutos caminando o bus 116).',
    h1: 'Lesseps — Metro de Barcelona',
    intro: 'La puerta a Gràcia y al Parque Güell — la creación fantástica de Gaudí en lo alto de la colina.',
    descripcion_turistica: 'La estación de Lesseps es la puerta de entrada al barrio de Gràcia y al Parque Güell — la obra pública más extraordinaria de Antoni Gaudí, declarada Patrimonio de la Humanidad. El parque está a 20 minutos caminando cuesta arriba (o en bus 116), con acceso gratuito a la mayor parte y entrada de pago a la zona monumental central (terrazas de mosaicos, la sala hipóstila y la Casa Museu Gaudí). El barrio de Gràcia, al pie de la colina, es el más animado de Barcelona, con plazas llenas de terrazas hasta altas horas de la noche.',
    lugares_cercanos: [
      { nombre: 'Parque Güell (Gaudí)', tipo: 'Turismo', distancia: '1.5 km', descripcion: 'El parque fantasía de Gaudí con mosaicos y dragones — Patrimonio UNESCO. Reserva la zona monumental.' },
      { nombre: 'Barrio de Gràcia', tipo: 'Barrio', distancia: '0.3 km', descripcion: 'El barrio más animado de Barcelona con plazas y terrrazas.' }
    ]
  },
  {
    slug: 'vallcarca',
    ciudad: 'barcelona',
    nombre: 'Vallcarca',
    linea: 'L3',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Alternativa más cercana al Parque Güell (acceso por el Carmel). Billetes: €2.55 sencillo.'
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Parque Güell (acceso Carmel)', tipo: 'Turismo', distancia: '15 min caminando' },
      { nombre: 'Viaducto de Vallcarca', tipo: 'Turismo', distancia: '2 min caminando' }
    ],
    seo_title: 'Vallcarca — Metro Barcelona L3 | MetroGuia',
    meta_description: 'Vallcarca en Barcelona: acceso alternativo al Parque Güell (15 min caminando) y el pintoresco viaducto del siglo XIX.',
    h1: 'Vallcarca — Metro de Barcelona',
    intro: 'La alternativa tranquila al Parque Güell — sin las multitudes del acceso principal de Lesseps.',
    descripcion_turistica: 'La estación de Vallcarca ofrece un acceso alternativo al Parque Güell de Gaudí, con menos turistas que el acceso principal por Lesseps. El camino de subida desde Vallcarca pasa junto al pintoresco Viaducto de Vallcarca, una estructura de ladrillo rojo del siglo XIX que contrasta con el verde del cerro. El entorno es tranquilo y residencial — uno de los barrios de Barcelona con más personalidad propia, con escaleras mecánicas públicas que facilitan la subida a la colina.',
    lugares_cercanos: [
      { nombre: 'Parque Güell (acceso Carmel)', tipo: 'Turismo', distancia: '1.0 km', descripcion: 'Acceso menos masificado al Parque Güell de Gaudí — mejor para evitar las aglomeraciones.' },
      { nombre: 'Viaducto de Vallcarca', tipo: 'Turismo', distancia: '0.1 km', descripcion: 'Pintoresco viaducto de ladrillo rojo del siglo XIX en el barrio más tranquilo de la colina.' }
    ]
  },
  {
    slug: 'camp-nou-badal',
    ciudad: 'barcelona',
    nombre: 'Badal (Camp Nou)',
    linea: 'L5',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'En días de partido del FC Barcelona: servicios reforzados, aglomeración máxima al finalizar.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Camp Nou (FC Barcelona)', tipo: 'Turismo', distancia: '15 min caminando' },
      { nombre: 'Museu del FC Barcelona', tipo: 'Cultura', distancia: '15 min caminando' }
    ],
    seo_title: 'Badal (Camp Nou) — Metro Barcelona L5 | MetroGuia',
    meta_description: 'Badal en Barcelona: la parada de metro más cercana al Camp Nou del FC Barcelona. El estadio más grande de Europa (95.000 plazas).',
    h1: 'Badal (Camp Nou) — Metro de Barcelona',
    intro: 'La puerta al Camp Nou, el estadio más grande de Europa y la catedral del fútbol mundial.',
    descripcion_turistica: 'La estación de Badal es la más práctica para acceder al Camp Nou —el estadio del FC Barcelona y el mayor de Europa con capacidad para 95.000 espectadores— aunque también puede llegarse desde la estación de Collblanc (L5). El Museu del FC Barcelona es el museo de deporte más visitado de Europa, con el Trofeo de la UEFA Champions League, las camisetas históricas y la experiencia interactiva del vestuario. En días de partido, los servicios de metro se refuerzan notablemente.',
    lugares_cercanos: [
      { nombre: 'Camp Nou (FC Barcelona)', tipo: 'Turismo', distancia: '1.2 km', descripcion: 'El mayor estadio de Europa con 95.000 plazas — tours disponibles todos los días.' },
      { nombre: 'Museu del FC Barcelona', tipo: 'Cultura', distancia: '1.2 km', descripcion: 'El museo de deporte más visitado de Europa, con historia del Barça y trofeos.' }
    ]
  },
  {
    slug: 'aeroportl1',
    ciudad: 'barcelona',
    nombre: 'Aeroport T1',
    linea: 'L9 Sud',
    tipo_zona: '3',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '05:00 – 00:00',
      domingo: '05:00 – 00:00',
      notas: 'La L9 al aeropuerto NO acepta tarjeta T-Casual estándar — requiere suplemento de aeropuerto (€5.15 billete+suplemento). Billete aeropuerto directo: €5.15.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Terminal 1 del Aeropuerto de Barcelona', tipo: 'Transporte', distancia: '1 min caminando' }
    ],
    seo_title: 'Aeroport T1 — Metro Barcelona L9 Sud | MetroGuia',
    meta_description: 'Aeroport T1 en Barcelona: acceso directo a la Terminal 1 del Aeropuerto El Prat por la Línea 9 Sur. Tiempo desde el centro: 35 minutos.',
    h1: 'Aeroport T1 — Metro de Barcelona',
    intro: 'Conexión directa por metro a la Terminal 1 del aeropuerto de Barcelona — sin cambios desde el centro.',
    descripcion_turistica: 'La estación Aeroport T1 es el acceso por metro a la Terminal 1 del Aeropuerto Internacional de Barcelona-El Prat, el segundo aeropuerto más activo de España con más de 50 millones de pasajeros anuales. La línea L9 Sur conecta la T1 y la T2 del aeropuerto directamente con el centro de Barcelona (Zona Universitària y el intercambiador de la Fira). Importante: el billete del aeropuerto requiere un suplemento especial — no basta con la tarjeta T-Casual estándar.',
    lugares_cercanos: [
      { nombre: 'Terminal 1 — Aeropuerto El Prat', tipo: 'Transporte', distancia: '0.1 km', descripcion: 'El terminal principal del aeropuerto de Barcelona con vuelos de Iberia, Vueling y grandes aerolíneas.' }
    ]
  },
  {
    slug: 'aeroportl2',
    ciudad: 'barcelona',
    nombre: 'Aeroport T2',
    linea: 'L9 Sud',
    tipo_zona: '3',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '05:00 – 00:00',
      domingo: '05:00 – 00:00',
      notas: 'La L9 al aeropuerto NO acepta T-Casual estándar — requiere billete con suplemento aeropuerto (€5.15). También acceso por tren de Rodalies R2 (€4.10) desde Passeig de Gràcia.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true
    },
    pois: [
      { nombre: 'Terminal 2 del Aeropuerto de Barcelona', tipo: 'Transporte', distancia: '1 min caminando' }
    ],
    seo_title: 'Aeroport T2 — Metro Barcelona L9 Sud | MetroGuia',
    meta_description: 'Aeroport T2 en Barcelona: acceso a la Terminal 2 del Aeropuerto El Prat por la L9 Sur. También acceso por tren de Rodalies R2.',
    h1: 'Aeroport T2 — Metro de Barcelona',
    intro: 'Acceso a la Terminal 2 del aeropuerto por metro o por el tren de Rodalies R2.',
    descripcion_turistica: 'La estación Aeroport T2 conecta la Terminal 2 del Aeropuerto de Barcelona-El Prat con la red de metro de la ciudad. La T2 alberga principalmente a Ryanair y otras aerolíneas de bajo coste. Además del metro L9 Sur, el acceso por el tren de Rodalies R2 desde Passeig de Gràcia es una opción popular y más económica (€4.10 vs €5.15 con suplemento de metro), aunque con más paradas.',
    lugares_cercanos: [
      { nombre: 'Terminal 2 — Aeropuerto El Prat', tipo: 'Transporte', distancia: '0.1 km', descripcion: 'Terminal de aerolíneas de bajo coste como Ryanair y otras. Conectada por bus interno con la T1.' }
    ]
  },
  {
    slug: 'collblanc',
    ciudad: 'barcelona',
    nombre: 'Collblanc',
    linea: 'L5',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'Intercambio L5 y L9. Acceso alternativo al Camp Nou. Billetes: €2.55 sencillo.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Camp Nou (FC Barcelona)', tipo: 'Turismo', distancia: '10 min caminando' }
    ],
    seo_title: 'Collblanc — Metro Barcelona L5/L9 | MetroGuia',
    meta_description: 'Collblanc en Barcelona: intercambio L5/L9 y acceso alternativo al Camp Nou. Entre l\'Hospitalet y la zona del estadio del FC Barcelona.',
    h1: 'Collblanc — Metro de Barcelona',
    intro: 'Intercambio entre la L5 y la L9, con acceso alternativo al Camp Nou del FC Barcelona.',
    descripcion_turistica: 'La estación de Collblanc está en la frontera entre Barcelona y l\'Hospitalet de Llobregat, sirviendo como intercambio entre las líneas L5 y L9. Es una alternativa para acceder al Camp Nou del FC Barcelona, especialmente en días de partido cuando la estación de Badal (también en la L5) puede estar más congestionada. El barrio de Collblanc es un área residencial obrera tradicional con un fuerte sentido de identidad local.',
    lugares_cercanos: [
      { nombre: 'Camp Nou (FC Barcelona)', tipo: 'Turismo', distancia: '0.8 km', descripcion: 'El mayor estadio de Europa con 95.000 plazas — acceso alternativo al de Badal.' }
    ]
  },
  {
    slug: 'sant-andreu-arenal',
    ciudad: 'barcelona',
    nombre: 'Sant Andreu',
    linea: 'L1',
    tipo_zona: '1',
    horarios: {
      lunes_viernes: '05:00 – 00:00',
      sabado: '00:00 – 24:00',
      domingo: '05:00 – 00:00',
      notas: 'El barrio de Sant Andreu tiene mercado tradicional propio. Billetes: €2.55 sencillo.'
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: false
    },
    pois: [
      { nombre: 'Barrio de Sant Andreu', tipo: 'Barrio', distancia: '2 min caminando' },
      { nombre: 'Mercat de Sant Andreu', tipo: 'Gastronomía', distancia: '5 min caminando' }
    ],
    seo_title: 'Sant Andreu — Metro Barcelona L1 | MetroGuia',
    meta_description: 'Sant Andreu en Barcelona: el barrio más auténtico del nordeste de Barcelona, con su mercado propio y ambiente de pueblo dentro de la ciudad.',
    h1: 'Sant Andreu — Metro de Barcelona',
    intro: 'El barrio más auténtico del nordeste de Barcelona — ambiente de pueblo con mercado y plazas propias.',
    descripcion_turistica: 'La estación de Sant Andreu da acceso al barrio homónimo, uno de los más auténticos de Barcelona y con mayor identidad local propia. Sant Andreu fue un municipio independiente hasta 1897 y conserva su espíritu de pueblo dentro de la gran ciudad, con el Mercat de Sant Andreu, la Plaça del Comerç y la Rambla del Poblenou cercana. Es el barrio del nordeste de Barcelona que mejor mantiene su vida de barrio tradicional, alejado de las masificaciones turísticas del centro.',
    lugares_cercanos: [
      { nombre: 'Mercat de Sant Andreu', tipo: 'Gastronomía', distancia: '0.4 km', descripcion: 'El mercado de barrio tradicional de Sant Andreu con productos frescos locales.' },
      { nombre: 'Plaça del Comerç', tipo: 'Barrio', distancia: '0.3 km', descripcion: 'La plaza animada del barrio con terrazas y la vida social de Sant Andreu.' }
    ]
  }
];
