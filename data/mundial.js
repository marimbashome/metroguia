export const mundial2026 = {
  sedes: {
    cdmx: {
      ciudad: 'Ciudad de México',
      estadio: 'Estadio Azteca',
      capacidad: 87523,
      direccion: 'Calzada de Tlalpan 3465, Sta. Úrsula Coapa, Coyoacán, 04650 Ciudad de México',
      coordenadas: { lat: 19.3029, lng: -99.1505 },
      estacion_cercana: 'tren-ligero-estadio-azteca',
      slug_ruta: 'como-llegar-estadio-azteca',
      ruta_desde_centro: {
        origen: 'zocalo',
        destino: 'tren-ligero-estadio-azteca',
        descripcion: 'Metro L2 → Tasqueña → Tren Ligero → Estadio Azteca',
        tiempo: 45,
        costo: 15,
        pasos: [
          { instruccion: 'Toma la Línea 2 (Azul) en dirección Tasqueña', tiempo: 25, tipo: 'metro', linea: '2' },
          { instruccion: 'Baja en Tasqueña (terminal sur)', tiempo: 0, tipo: 'transbordo' },
          { instruccion: 'Camina a la estación de Tren Ligero (dentro de Tasqueña)', tiempo: 5, tipo: 'caminata' },
          { instruccion: 'Compra boleto separado para Tren Ligero ($10 MXN)', tiempo: 2, tipo: 'compra' },
          { instruccion: 'Toma el Tren Ligero dirección Xochimilco', tiempo: 10, tipo: 'tren-ligero' },
          { instruccion: 'Baja en estación Estadio Azteca', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 5 minutos al estadio', tiempo: 5, tipo: 'caminata' },
        ],
        alertas: [
          'La tarjeta Metro NO funciona en el Tren Ligero — compra boleto separado ($10 MXN)',
          'No hay metro directo al Estadio Azteca',
          'En días de partido el Tren Ligero opera con frecuencia especial cada 5 minutos',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde el Aeropuerto (AICM)',
          descripcion: 'Metro L5 → La Raza → L3 → Centro Médico → L2 → Tasqueña → Tren Ligero',
          tiempo: 70,
          costo: 15,
        },
        {
          nombre: 'Desde Polanco / Chapultepec',
          descripcion: 'Metro L1 → Pino Suárez → L2 → Tasqueña → Tren Ligero',
          tiempo: 55,
          costo: 15,
        },
        {
          nombre: 'Desde Condesa / Roma',
          descripcion: 'Metro L1 Chilpancingo → Pino Suárez → L2 → Tasqueña → Tren Ligero',
          tiempo: 50,
          costo: 15,
        },
      ],
      partidos: [
        { fecha: '2026-06-11', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Partido inaugural en México. El Estadio Azteca vibra con el primer juego mundialista.' },
        { fecha: '2026-06-17', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada de fase de grupos en el Azteca.' },
        { fecha: '2026-06-24', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Última jornada de grupos — definiciones cruciales.' },
        { fecha: '2026-06-30', hora: 'TBD', fase: 'Octavos de Final', equipos: 'TBD vs TBD', jornada: 4, descripcion: 'Primera ronda eliminatoria. La presión aumenta.' },
        { fecha: '2026-07-05', hora: 'TBD', fase: 'Cuartos de Final', equipos: 'TBD vs TBD', jornada: 5, descripcion: 'Cuartos de final — solo 8 equipos quedan.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Mercado de Comida Estadio', tipo: 'Mercado', distancia: '200m del estadio', precio: '$' },
          { nombre: 'Zona de Food Trucks Coapa', tipo: 'Street Food', distancia: '400m', precio: '$' },
          { nombre: 'Restaurantes Calzada de Tlalpan', tipo: 'Variado', distancia: '500m', precio: '$$' },
        ],
        servicios: [
          { nombre: 'Cajeros ATM — Oxxo/7-Eleven', tipo: 'ATM', distancia: '300m' },
          { nombre: 'Farmacia del Ahorro Coapa', tipo: 'Farmacia', distancia: '600m' },
          { nombre: 'OXXO Calzada de Tlalpan', tipo: 'Tienda de conveniencia', distancia: '400m' },
        ],
        hospedaje: [
          { nombre: 'Hoteles en Coyoacán', tipo: 'Hotel', rango_precio: '$800-2,500 MXN/noche' },
          { nombre: 'Airbnb Condesa / Roma (30 min)', tipo: 'Airbnb', rango_precio: '$1,200-3,000 MXN/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Estadio Azteca', tipo: 'Parking', costo: '$200-300 MXN' },
          { nombre: 'Base de Taxis Coapa', tipo: 'Taxi', nota: 'Uber difícil post-partido' },
        ],
      },
      tips: [
        'Llega mínimo 3 horas antes — el Tren Ligero se satura en días de partido',
        'Compra boleto de regreso antes de entrar al estadio',
        'No hay Uber/taxi cerca del estadio después del partido — usa transporte público',
        'Lleva efectivo: muchos comercios cerca del estadio no aceptan tarjeta',
        'El Tren Ligero opera hasta las 11 PM — verifica horario en días de partido',
        'Usa protector solar — el estadio tiene secciones al descubierto',
        'Lleva una botella de agua vacía — puedes llenarla dentro del estadio',
      ]
    },
    gdl: {
      ciudad: 'Guadalajara',
      estadio: 'Estadio Akron',
      capacidad: 49850,
      direccion: 'Av. de las Rosas 3800, Chapalita, 45040 Zapopan, Jal.',
      coordenadas: { lat: 20.6820, lng: -103.4625 },
      estacion_cercana: 'gdl-estadio-akron',
      slug_ruta: 'como-llegar-estadio-akron',
      ruta_desde_centro: {
        origen: 'gdl-juarez',
        destino: 'gdl-estadio-akron',
        descripcion: 'Línea 3 SITEUR → Estación Chivas → 20 min caminando al estadio',
        tiempo: 40,
        costo: 10,
        pasos: [
          { instruccion: 'Toma la Línea 3 del SITEUR (Mi Tren) dirección Arcos de Zapopan', tiempo: 15, tipo: 'metro', linea: '3' },
          { instruccion: 'Baja en estación Periférico Norte / Chivas', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 20 minutos por Av. de las Rosas hacia el estadio', tiempo: 20, tipo: 'caminata' },
          { instruccion: 'Sigue las señalizaciones FIFA al estadio', tiempo: 5, tipo: 'caminata' },
        ],
        alertas: [
          '20 minutos caminando desde la estación Chivas al estadio',
          'En días de partido hay servicio de autobús lanzadera desde la estación',
          'La Línea 3 opera de 5:00 AM a 11:00 PM',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde el Aeropuerto GDL',
          descripcion: 'Macrobús → Centro → Línea 3 → Chivas',
          tiempo: 75,
          costo: 15,
        },
        {
          nombre: 'Desde Tlaquepaque',
          descripcion: 'Línea 1 → Juárez → Línea 3 → Chivas',
          tiempo: 50,
          costo: 10,
        },
      ],
      partidos: [
        { fecha: '2026-06-11', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Guadalajara inaugura su participación mundialista en el Akron.' },
        { fecha: '2026-06-18', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda fecha de grupos en la Perla Tapatía.' },
        { fecha: '2026-06-23', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Cierre de fase de grupos — todo se define aquí.' },
        { fecha: '2026-06-26', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 4, descripcion: 'Última fecha de grupos en Guadalajara.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Zona gastronómica Chapalita', tipo: 'Variado', distancia: '1 km', precio: '$$' },
          { nombre: 'Andares Mall — Food Court', tipo: 'Centro Comercial', distancia: '2 km', precio: '$$' },
          { nombre: 'Food Trucks zona estadio', tipo: 'Street Food', distancia: '500m', precio: '$' },
        ],
        servicios: [
          { nombre: 'Cajeros ATM — Banorte/BBVA', tipo: 'ATM', distancia: '800m' },
          { nombre: 'Farmacia Guadalajara', tipo: 'Farmacia', distancia: '1 km' },
          { nombre: 'OXXO Periférico Norte', tipo: 'Tienda de conveniencia', distancia: '600m' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Providencia / Chapalita', tipo: 'Hotel', rango_precio: '$1,000-3,000 MXN/noche' },
          { nombre: 'Airbnb Centro Histórico GDL', tipo: 'Airbnb', rango_precio: '$800-2,000 MXN/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Estadio Akron', tipo: 'Parking', costo: '$150-250 MXN' },
          { nombre: 'Uber/DiDi disponible', tipo: 'Rideshare', nota: 'Punto de encuentro designado post-partido' },
        ],
      },
      tips: [
        'La Línea 3 es la más nueva y conecta directo a la zona del estadio',
        'Estación Chivas → 20 min caminando al estadio',
        'Taxis y Uber disponibles pero espera largas filas post-partido',
        'El calor de Guadalajara en junio es intenso — lleva agua y gorra',
        'Hay servicio de autobús lanzadera desde la estación Chivas en días de partido',
        'Llega al menos 2 horas antes para pasar los controles de seguridad',
      ]
    },
    mty: {
      ciudad: 'Monterrey',
      estadio: 'Estadio BBVA',
      capacidad: 53500,
      direccion: 'Av. Pablo Livas 2011, La Pastora, 67140 Guadalupe, N.L.',
      coordenadas: { lat: 25.6699, lng: -100.2463 },
      estacion_cercana: 'mty-estadio-bbva',
      slug_ruta: 'como-llegar-estadio-bbva',
      ruta_desde_centro: {
        origen: 'mty-cuauhtemoc',
        destino: 'mty-estadio-bbva',
        descripcion: 'Metrorrey L1 → Estación Exposición → 22 min caminando',
        tiempo: 35,
        costo: 8,
        pasos: [
          { instruccion: 'Toma Metrorrey Línea 1 dirección Exposición', tiempo: 10, tipo: 'metro', linea: '1' },
          { instruccion: 'Baja en estación Exposición (terminal)', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 22 minutos por Av. Pablo Livas hacia el estadio', tiempo: 22, tipo: 'caminata' },
          { instruccion: 'Sigue las señalizaciones FIFA', tiempo: 3, tipo: 'caminata' },
        ],
        alertas: [
          '22 minutos caminando desde la estación Exposición al estadio BBVA',
          'Llevar agua — el calor de Monterrey en junio puede superar 40°C',
          'Metrorrey opera de 5:00 AM a 12:00 AM',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde el Aeropuerto MTY',
          descripcion: 'Taxi/Uber al centro → Metrorrey L1 → Exposición',
          tiempo: 50,
          costo: 200,
        },
        {
          nombre: 'Desde San Pedro Garza García',
          descripcion: 'Ecovía → Transbordo → Metrorrey L1 → Exposición',
          tiempo: 45,
          costo: 12,
        },
      ],
      partidos: [
        { fecha: '2026-06-14', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Monterrey debuta como sede mundialista en el imponente BBVA.' },
        { fecha: '2026-06-20', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda fecha de grupos en la Sultana del Norte.' },
        { fecha: '2026-06-24', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Definiciones de grupo en Monterrey.' },
        { fecha: '2026-06-29', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 4, descripcion: 'Última fecha mundialista en Monterrey.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Zona gastronómica Barrio Antiguo', tipo: 'Variado', distancia: '4 km (centro)', precio: '$$' },
          { nombre: 'Food Trucks zona estadio', tipo: 'Street Food', distancia: '300m', precio: '$' },
          { nombre: 'Plaza Cibeles — Restaurantes', tipo: 'Centro Comercial', distancia: '1.5 km', precio: '$$' },
        ],
        servicios: [
          { nombre: 'Cajeros ATM — Banorte/HSBC', tipo: 'ATM', distancia: '500m' },
          { nombre: 'Farmacia Benavides', tipo: 'Farmacia', distancia: '800m' },
          { nombre: 'OXXO Av. Pablo Livas', tipo: 'Tienda de conveniencia', distancia: '400m' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Centro Monterrey', tipo: 'Hotel', rango_precio: '$900-2,500 MXN/noche' },
          { nombre: 'Airbnb San Pedro Garza García', tipo: 'Airbnb', rango_precio: '$1,500-4,000 MXN/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Estadio BBVA', tipo: 'Parking', costo: '$200-400 MXN' },
          { nombre: 'Uber/DiDi disponible', tipo: 'Rideshare', nota: 'Funciona bien en Monterrey' },
        ],
      },
      tips: [
        'El calor de Monterrey en junio puede superar 40°C — hidratación esencial',
        'Metrorrey funciona de 5:00 AM a 12:00 AM',
        'Zona del estadio tiene restaurantes y bares para antes/después del partido',
        'Uber funciona bien en Monterrey — alternativa al metro',
        'Lleva gorra, lentes de sol y bloqueador — la caminata de 22 min es al sol',
        'El estadio BBVA tiene techo parcial — las secciones superiores están expuestas',
      ]
    },

    metlife: {
      ciudad: 'Nueva York/New Jersey',
      estadio: 'MetLife Stadium',
      capacidad: 82500,
      direccion: '1 MetLife Stadium Drive, East Rutherford, New Jersey 07073, USA',
      coordenadas: { lat: 40.8138, lng: -74.0743 },
      estacion_cercana: 'metlife-nj-transit',
      slug_ruta: 'como-llegar-metlife-stadium',
      ruta_desde_centro: {
        origen: 'penn-station',
        destino: 'metlife-nj-transit',
        descripcion: 'NJ Transit Direct Bus 380 o Metro → Secaucus → NJ Transit',
        tiempo: 50,
        costo: 15,
        pasos: [
          { instruccion: 'Dirígete a Penn Station (Manhattan)', tiempo: 0, tipo: 'punto-partida' },
          { instruccion: 'Toma NJ Transit Direct Bus 380 a MetLife Stadium (salidas frecuentes en días de partido)', tiempo: 45, tipo: 'autobus', linea: '380' },
          { instruccion: 'Baja en MetLife Stadium Direct Drop', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 5 minutos a la entrada principal', tiempo: 5, tipo: 'caminata' },
        ],
        alertas: [
          'NJ Transit 380 es la opción más directa — verifica horarios en días de partido',
          'Estacionamiento disponible pero se llena rápido ($25-35 USD)',
          'No hay estación de metro cercana — usa bus directo o Uber',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde el Aeropuerto Newark (EWR)',
          descripcion: 'NJ Transit Bus al Stadium o Uber (30-45 min)',
          tiempo: 40,
          costo: 18,
        },
        {
          nombre: 'Desde Manhattan via Uber/Lyft',
          descripcion: 'Uber directo desde cualquier punto de NYC',
          tiempo: 35,
          costo: 45,
        },
      ],
      partidos: [
        { fecha: '2026-06-11', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'USA debuta en el MetLife — partido inaugural de la región.' },
        { fecha: '2026-06-18', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda fecha de grupos en New Jersey.' },
        { fecha: '2026-06-27', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Última jornada de grupos — MetLife a full capacity.' },
        { fecha: '2026-07-05', hora: 'TBD', fase: 'Semifinales', equipos: 'TBD vs TBD', jornada: 5, descripcion: 'Semifinal #1 — tensión máxima.' },
        { fecha: '2026-07-19', hora: 'TBD', fase: 'Final', equipos: 'TBD vs TBD', jornada: 6, descripcion: 'FINAL MUNDIAL — El evento más grande del año en MetLife.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Applebee\'s MetLife Área', tipo: 'Cadena', distancia: '500m', precio: '$' },
          { nombre: 'Zona de Food Trucks Stadium', tipo: 'Street Food', distancia: '200m', precio: '$' },
          { nombre: 'Secaucus Shopping Mall — Restaurantes', tipo: 'Centro Comercial', distancia: '2 km', precio: '$$' },
        ],
        servicios: [
          { nombre: 'ATMs — Chase/Wells Fargo', tipo: 'ATM', distancia: '400m' },
          { nombre: 'Walgreens Pharmacy', tipo: 'Farmacia', distancia: '1 km' },
          { nombre: 'Convenience Stores', tipo: 'Tienda', distancia: '500m' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Secaucus', tipo: 'Hotel', rango_precio: '$120-200 USD/noche' },
          { nombre: 'Airbnb Jersey City / Hoboken', tipo: 'Airbnb', rango_precio: '$150-300 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento MetLife Stadium', tipo: 'Parking', costo: '$25-35 USD' },
          { nombre: 'Uber/Lyft disponible', tipo: 'Rideshare', nota: 'Alto precio post-partido' },
        ],
      },
      tips: [
        'La FINAL se juega en MetLife — evento de máxima importancia',
        'NJ Transit 380 es directo desde Penn Station — ideal para fans de NYC',
        'Estacionamiento en MetLife es caro pero seguro — evita Uber congestionado',
        'Lleva identificación válida (Real ID o pasaporte para visitantes)',
        'Junio en New Jersey puede ser muy caluroso — protección solar obligatoria',
        'Sitio alternativo: entradas en Ticketmaster USA',
      ]
    },

    sofi: {
      ciudad: 'Los Angeles',
      estadio: 'SoFi Stadium',
      capacidad: 70240,
      direccion: '1001 S Stadium Drive, Inglewood, California 90301, USA',
      coordenadas: { lat: 33.9536, lng: -118.3396 },
      estacion_cercana: 'metro-sofi-transit',
      slug_ruta: 'como-llegar-sofi-stadium',
      ruta_desde_centro: {
        origen: 'downtown-la',
        destino: 'metro-sofi-transit',
        descripcion: 'Metro K Line (Crenshaw/LAX) → SoFi Station',
        tiempo: 45,
        costo: 1.75,
        pasos: [
          { instruccion: 'Toma Metro K Line (Crenshaw/LAX Line) en dirección Exposition Park o USC', tiempo: 25, tipo: 'metro', linea: 'K' },
          { instruccion: 'Baja en SoFi Stadium Station (estación nueva dedicada)', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 10 minutos por pasaje peatonal al estadio', tiempo: 10, tipo: 'caminata' },
        ],
        alertas: [
          'Metro K Line es nueva y directa al estadio',
          'En días de partido espera largas colas — llega pronto',
          'El pasaje peatonal de la estación al estadio está bien señalizado',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde el Aeropuerto LAX',
          descripcion: 'Rental car o Uber (40-60 min según tráfico)',
          tiempo: 50,
          costo: 35,
        },
        {
          nombre: 'Desde Hollywood / Midtown LA',
          descripcion: 'Uber directo (30-45 min según tráfico)',
          tiempo: 40,
          costo: 28,
        },
      ],
      partidos: [
        { fecha: '2026-06-13', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'LA debuta en el SoFi — la tecnología más avanzada del mundo.' },
        { fecha: '2026-06-21', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada de grupos en California.' },
        { fecha: '2026-06-28', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Últimos partidos de grupos en la costa oeste.' },
        { fecha: '2026-07-04', hora: 'TBD', fase: 'Cuartos de Final', equipos: 'TBD vs TBD', jornada: 4, descripcion: 'Cuartos de final en SoFi.' },
        { fecha: '2026-07-14', hora: 'TBD', fase: 'Semifinales', equipos: 'TBD vs TBD', jornada: 5, descripcion: 'Semifinal #2 en el estadio de última generación.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Forum Shops LA (Forum adjacent)', tipo: 'Variado', distancia: '800m', precio: '$$' },
          { nombre: 'SoFi Stadium Food Court', tipo: 'Comida rápida', distancia: 'Dentro', precio: '$$' },
          { nombre: 'Inglewood Local Cuisine', tipo: 'Variado', distancia: '1.5 km', precio: '$' },
        ],
        servicios: [
          { nombre: 'ATMs — BankofAmerica/Chase', tipo: 'ATM', distancia: '500m' },
          { nombre: 'CVS Pharmacy', tipo: 'Farmacia', distancia: '1 km' },
          { nombre: 'Walgreens', tipo: 'Farmacia', distancia: '800m' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Inglewood', tipo: 'Hotel', rango_precio: '$100-180 USD/noche' },
          { nombre: 'Airbnb Santa Monica / West LA', tipo: 'Airbnb', rango_precio: '$150-300 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento SoFi (Parking Lot A-G)', tipo: 'Parking', costo: '$20-30 USD' },
          { nombre: 'Metro K Line a SoFi Station', tipo: 'Transporte público', nota: 'La opción más conveniente' },
        ],
      },
      tips: [
        'Metro K Line es DIRECTO al estadio — mejor que Uber en días de partido',
        'SoFi tiene techo retráctil — ideal para partidos en calor de junio',
        'Estacionamiento en SoFi es limitado — considera Metro si vienes de LA',
        'Tráfico de LA es impredecible — sale con 1 hora extra',
        'El Forum (Lakers/Kings) está al lado — zona con historia deportiva',
        'Muchos restaurantes caros en la zona — Food Court del estadio es más barato',
      ]
    },

    att: {
      ciudad: 'Dallas/Arlington',
      estadio: 'AT&T Stadium',
      capacidad: 80000,
      direccion: '1 AT&T Way, Arlington, Texas 76010, USA',
      coordenadas: { lat: 32.7478, lng: -97.0936 },
      estacion_cercana: 'arlington-transit',
      slug_ruta: 'como-llegar-att-stadium',
      ruta_desde_centro: {
        origen: 'downtown-dallas',
        destino: 'arlington-transit',
        descripcion: 'DART Rail Red Line → Arlington Station → Uber 5 min',
        tiempo: 45,
        costo: 2.50,
        pasos: [
          { instruccion: 'Toma DART Rail Red Line hacia Fort Worth/Arlington', tiempo: 35, tipo: 'tren', linea: 'Red' },
          { instruccion: 'Baja en Arlington Station', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Usa Uber/Lyft para los últimos 2 km al AT&T Stadium', tiempo: 8, tipo: 'rideshare' },
          { instruccion: 'O camina 25 minutos si es temprano (antes de las 4 PM)', tiempo: 25, tipo: 'caminata' },
        ],
        alertas: [
          'DART Red Line no llega directo al estadio — necesitas Uber/Lyft o camina',
          'Arlington es más pequeño — transporte público es limitado',
          'En días de partido recomienda conducir o Uber desde más lejos',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde DFW Airport',
          descripcion: 'DART Rail + Uber o rental car (45-60 min)',
          tiempo: 55,
          costo: 25,
        },
        {
          nombre: 'Conducir desde Dallas',
          descripcion: 'I-30 hacia Arlington (25-40 min según tráfico)',
          tiempo: 35,
          costo: 'Gasolina + estacionamiento',
        },
      ],
      partidos: [
        { fecha: '2026-06-15', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Arlington debuta — el AT&T Stadium en gloria mundialista.' },
        { fecha: '2026-06-22', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda fecha de grupos en Texas.' },
        { fecha: '2026-06-27', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en AT&T.' },
        { fecha: '2026-07-02', hora: 'TBD', fase: 'Octavos de Final', equipos: 'TBD vs TBD', jornada: 4, descripcion: 'Round of 16 en Arlington.' },
        { fecha: '2026-07-11', hora: 'TBD', fase: 'Cuartos de Final', equipos: 'TBD vs TBD', jornada: 5, descripcion: 'Cuartos de final en Texas.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Rangers Ball Park — restaurants', tipo: 'Variado', distancia: '500m', precio: '$$' },
          { nombre: 'Six Flags food area', tipo: 'Parque temático', distancia: '2 km', precio: '$$' },
          { nombre: 'Arlington Main Street restaurants', tipo: 'Variado', distancia: '1.5 km', precio: '$' },
        ],
        servicios: [
          { nombre: 'ATMs — Wells Fargo/Chase', tipo: 'ATM', distancia: '800m' },
          { nombre: 'CVS Pharmacy', tipo: 'Farmacia', distancia: '1.2 km' },
          { nombre: 'Walmart nearby', tipo: 'Tienda', distancia: '2 km' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Arlington', tipo: 'Hotel', rango_precio: '$80-150 USD/noche' },
          { nombre: 'Airbnb Arlington / Fort Worth', tipo: 'Airbnb', rango_precio: '$100-200 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento AT&T Stadium', tipo: 'Parking', costo: '$20-25 USD' },
          { nombre: 'Uber/Lyft (recomendado)', tipo: 'Rideshare', nota: 'Más fácil que transporte público' },
        ],
      },
      tips: [
        'DART Red Line es la opción de transporte público más viable',
        'Arlington está entre Dallas y Fort Worth — buena ubicación central',
        'El calor de Texas en junio es INTENSO (35-40°C) — hidratación crítica',
        'AT&T Stadium es uno de los más modernos del mundo — espera gran experiencia',
        'La zona tiene poco transporte público — Uber es la mejor opción',
        'Estacionamiento en stadium es amplio pero congestionado post-partido',
      ]
    },

    nrg: {
      ciudad: 'Houston',
      estadio: 'NRG Stadium',
      capacidad: 72220,
      direccion: '1 NRG Parkway, Houston, Texas 77054, USA',
      coordenadas: { lat: 29.6849, lng: -95.4117 },
      estacion_cercana: 'houston-metro',
      slug_ruta: 'como-llegar-nrg-stadium',
      ruta_desde_centro: {
        origen: 'downtown-houston',
        destino: 'houston-metro',
        descripcion: 'METRO Rail + Bus / Uber (40 min)',
        tiempo: 40,
        costo: 1.25,
        pasos: [
          { instruccion: 'Toma METRO Rail Red Line hacia NRG Park', tiempo: 25, tipo: 'metro', linea: 'Red' },
          { instruccion: 'Baja en NRG Park Station', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 15 minutos al NRG Stadium', tiempo: 15, tipo: 'caminata' },
        ],
        alertas: [
          'Calor extremo de Houston — lleva mucha agua',
          'METRO Red Line opera todos los días hasta 12 AM',
          'La caminata desde la estación es al aire libre — usa sombrero',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde George Bush Intercontinental Airport (IAH)',
          descripcion: 'METRO + Bus o Uber (50-70 min)',
          tiempo: 60,
          costo: 18,
        },
        {
          nombre: 'Uber directo desde Downtown',
          descripcion: 'Uber desde cualquier punto de Houston',
          tiempo: 30,
          costo: 22,
        },
      ],
      partidos: [
        { fecha: '2026-06-12', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Houston debuta en NRG — ambiente de energía tejana.' },
        { fecha: '2026-06-19', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada de grupos en Texas.' },
        { fecha: '2026-06-25', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en Houston.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'NRG Food District', tipo: 'Variado', distancia: '500m', precio: '$$' },
          { nombre: 'Houston Astrodome area restaurants', tipo: 'Variado', distancia: '1 km', precio: '$$' },
          { nombre: 'Reliant Park Food Trucks', tipo: 'Street Food', distancia: '400m', precio: '$' },
        ],
        servicios: [
          { nombre: 'ATMs — Chase/BankofAmerica', tipo: 'ATM', distancia: '600m' },
          { nombre: 'Walgreens', tipo: 'Farmacia', distancia: '1 km' },
          { nombre: 'Convenience stores', tipo: 'Tienda', distancia: '700m' },
        ],
        hospedaje: [
          { nombre: 'Hoteles NRG Area', tipo: 'Hotel', rango_precio: '$90-160 USD/noche' },
          { nombre: 'Airbnb Houston Midtown / Montrose', tipo: 'Airbnb', rango_precio: '$120-250 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento NRG Stadium', tipo: 'Parking', costo: '$15-20 USD' },
          { nombre: 'METRO Rail (recomendado)', tipo: 'Transporte público', nota: 'Evita tráfico de Houston' },
        ],
      },
      tips: [
        'METRO Red Line es excelente — evita el tráfico legendario de Houston',
        'Houston en junio es BRUTALMENTE caluroso — hidratación máxima obligatoria',
        'NRG Park es enorme — contiene Astrodome, zoológico y más',
        'La caminata desde la estación es larga pero está bien señalizada',
        'Estacionamiento en NRG es barato y abundante comparado con otras ciudades',
        'Puedes visitar el Astrodome (icónico) el mismo día',
      ]
    },

    mbenz: {
      ciudad: 'Atlanta',
      estadio: 'Mercedes-Benz Stadium',
      capacidad: 71000,
      direccion: '1 AMB Drive NW, Atlanta, Georgia 30313, USA',
      coordenadas: { lat: 33.7555, lng: -84.4020 },
      estacion_cercana: 'atlanta-marta',
      slug_ruta: 'como-llegar-mercedes-benz-stadium',
      ruta_desde_centro: {
        origen: 'downtown-atlanta',
        destino: 'atlanta-marta',
        descripcion: 'MARTA Rail Red/Gold Line → Falcons Station',
        tiempo: 25,
        costo: 2.50,
        pasos: [
          { instruccion: 'Toma MARTA Red Line o Gold Line hacia Georgia Dome / World Congress', tiempo: 10, tipo: 'metro', linea: 'Red/Gold' },
          { instruccion: 'Baja en Falcons Station (estación dedicada al MB Stadium)', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 3 minutos a la entrada del estadio', tiempo: 3, tipo: 'caminata' },
        ],
        alertas: [
          'MARTA Falcons Station es DIRECTO — una de las mejores conexiones en USA',
          'En días de partido MARTA aumenta frecuencia',
          'Atlanta puede estar calurosa pero sin la intensidad de Houston',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde Hartsfield-Jackson Airport (ATL)',
          descripcion: 'MARTA Rail directo (45-50 min)',
          tiempo: 50,
          costo: 2.50,
        },
        {
          nombre: 'Uber desde midtown',
          descripcion: 'Uber directo (10-15 min según tráfico)',
          tiempo: 15,
          costo: 18,
        },
      ],
      partidos: [
        { fecha: '2026-06-16', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Atlanta debuta en el MB Stadium — el más moderno de USA.' },
        { fecha: '2026-06-23', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda fecha de grupos en Georgia.' },
        { fecha: '2026-06-28', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en Atlanta.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Centennial Park restaurants', tipo: 'Variado', distancia: '500m', precio: '$$' },
          { nombre: 'Georgia World Congress Center dining', tipo: 'Variado', distancia: '800m', precio: '$$' },
          { nombre: 'Downtown Atlanta restaurants', tipo: 'Variado', distancia: '2 km', precio: '$$$' },
        ],
        servicios: [
          { nombre: 'ATMs — SunTrust/Chase', tipo: 'ATM', distancia: '500m' },
          { nombre: 'CVS / Walgreens nearby', tipo: 'Farmacia', distancia: '800m' },
          { nombre: 'Whole Foods (nearby)', tipo: 'Tienda', distancia: '1 km' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Downtown Atlanta', tipo: 'Hotel', rango_precio: '$110-200 USD/noche' },
          { nombre: 'Airbnb Midtown / Virginia-Highland', tipo: 'Airbnb', rango_precio: '$120-280 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Mercedes-Benz Stadium', tipo: 'Parking', costo: '$15-20 USD' },
          { nombre: 'MARTA Rail (excelente opción)', tipo: 'Transporte público', nota: 'El mejor del este de USA' },
        ],
      },
      tips: [
        'MARTA tiene DIRECTO al estadio vía Falcons Station — mejor que cualquier otra ciudad',
        'El MB Stadium es el más nuevo (2017) — experiencia premium garantizada',
        'Atlanta es más templada que Houston — clima más agradable en junio',
        'Downtown Atlanta está cerca — puedes explorar el centro antes del partido',
        'Centennial Park es hermoso — visita antes del partido',
        'La arquitectura del MB Stadium es increíble (techo único) — llega temprano para verla',
      ]
    },

    lincoln: {
      ciudad: 'Filadelfia',
      estadio: 'Lincoln Financial Field',
      capacidad: 69596,
      direccion: '1 Lincoln Financial Field Way, Philadelphia, Pennsylvania 19148, USA',
      coordenadas: { lat: 39.9009, lng: -75.1681 },
      estacion_cercana: 'philly-sports-complex',
      slug_ruta: 'como-llegar-lincoln-financial-field',
      ruta_desde_centro: {
        origen: 'center-city-philly',
        destino: 'philly-sports-complex',
        descripcion: 'SEPTA Broad Street Line → Stadium Station (o Pattison Ave)',
        tiempo: 20,
        costo: 2.50,
        pasos: [
          { instruccion: 'Toma SEPTA Broad Street Line en dirección sur', tiempo: 15, tipo: 'metro', linea: 'Broad' },
          { instruccion: 'Baja en Pattison Station (cercana al complejo deportivo)', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 8 minutos hacia Lincoln Financial Field', tiempo: 8, tipo: 'caminata' },
        ],
        alertas: [
          'SEPTA Broad Street Line es el sistema de tren más antiguo en operación continua en USA',
          'Sports Complex tiene estadios de Eagles (NFL), Phillies (MLB), 76ers (NBA), Flyers (NHL)',
          'En días de evento el área es muy congestionada',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde Philadelphia International Airport (PHL)',
          descripcion: 'Regional Rail + SEPTA (60 min total)',
          tiempo: 60,
          costo: 8,
        },
        {
          nombre: 'Regional Rail + caminata',
          descripcion: 'Amtrak/SEPTA Regional a Center City → Broad Line',
          tiempo: 25,
          costo: 3,
        },
      ],
      partidos: [
        { fecha: '2026-06-17', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Filadelfia debuta — histórico Lincoln Financial Field.' },
        { fecha: '2026-06-24', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda fecha de grupos en Pensilvania.' },
        { fecha: '2026-06-29', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en Filadelfia.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Citizens Bank Park restaurants', tipo: 'Variado', distancia: '300m', precio: '$$' },
          { nombre: 'Philly Cheesesteak vendors (icónico)', tipo: 'Street Food', distancia: '800m', precio: '$' },
          { nombre: 'Reading Terminal Market', tipo: 'Mercado', distancia: '2 km', precio: '$$' },
        ],
        servicios: [
          { nombre: 'ATMs — PNC/TD Bank', tipo: 'ATM', distancia: '500m' },
          { nombre: 'Rite Aid Pharmacy', tipo: 'Farmacia', distancia: '1 km' },
          { nombre: 'CVS nearby', tipo: 'Tienda', distancia: '700m' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Center City', tipo: 'Hotel', rango_precio: '$100-180 USD/noche' },
          { nombre: 'Airbnb University City / Old City', tipo: 'Airbnb', rango_precio: '$110-240 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Sports Complex', tipo: 'Parking', costo: '$15-20 USD' },
          { nombre: 'SEPTA Broad Street Line', tipo: 'Transporte público', nota: 'Opción más rápida' },
        ],
      },
      tips: [
        'SEPTA es excelente y más asequible que otras ciudades',
        'El Sports Complex tiene 4 equipos profesionales — zona muy popular',
        'Filadelfia tiene historia rica — visita Independence Hall, Liberty Bell',
        'Prueba un Philly Cheesesteak genuino (Reading Terminal Market)',
        'El clima de Filadelfia en junio es variable — lleva chaqueta ligera',
        'Lincoln Financial Field es moderno (2003) pero con carácter histórico',
      ]
    },

    hardrock: {
      ciudad: 'Miami',
      estadio: 'Hard Rock Stadium',
      capacidad: 65326,
      direccion: '347 Don Shula Drive, Miami Gardens, Florida 33056, USA',
      coordenadas: { lat: 25.9580, lng: -80.2393 },
      estacion_cercana: 'miami-dolphins-station',
      slug_ruta: 'como-llegar-hard-rock-stadium',
      ruta_desde_centro: {
        origen: 'downtown-miami',
        destino: 'miami-dolphins-station',
        descripcion: 'Metrorail + Tri-Rail / Uber (40-50 min)',
        tiempo: 50,
        costo: 2.25,
        pasos: [
          { instruccion: 'Toma Metrorail hacia Tri-Rail', tiempo: 20, tipo: 'metro', linea: 'Metrorail' },
          { instruccion: 'Transbordo a Tri-Rail (Florida East Coast Railway)', tiempo: 10, tipo: 'transbordo' },
          { instruccion: 'Baja en Dolphins Station (parada dedicada)', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Uber/taxi 2 km al Hard Rock Stadium', tiempo: 8, tipo: 'rideshare' },
        ],
        alertas: [
          'Miami es de difícil acceso — Uber es frecuentemente más fácil que transporte público',
          'Calor y humedad extrema de Miami en junio (32-35°C)',
          'El Hard Rock Stadium está un poco alejado del centro',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde Miami International Airport (MIA)',
          descripcion: 'Metrorail + Tri-Rail o Uber (50-70 min)',
          tiempo: 60,
          costo: 20,
        },
        {
          nombre: 'Uber directo desde South Beach',
          descripcion: 'Uber desde cualquier punto de Miami',
          tiempo: 35,
          costo: 30,
        },
      ],
      partidos: [
        { fecha: '2026-06-19', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Miami debuta — ambiente tropical mundialista.' },
        { fecha: '2026-06-26', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada de grupos en Florida.' },
        { fecha: '2026-07-01', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en Miami.' },
        { fecha: '2026-07-03', hora: 'TBD', fase: 'Octavos de Final', equipos: 'TBD vs TBD', jornada: 4, descripcion: 'Round of 16 en el Hard Rock.' },
        { fecha: '2026-07-08', hora: 'TBD', fase: 'Cuartos de Final', equipos: 'TBD vs TBD', jornada: 5, descripcion: 'Cuartos de final en Miami.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Hard Rock Café (en el stadium)', tipo: 'Variado', distancia: '0m', precio: '$$' },
          { nombre: 'Miami Gardens local restaurants', tipo: 'Variado', distancia: '1 km', precio: '$' },
          { nombre: 'South Pointe restaurants (20 min de Uber)', tipo: 'Variado', distancia: '15 km', precio: '$$$' },
        ],
        servicios: [
          { nombre: 'ATMs — Banco Popular/Chase', tipo: 'ATM', distancia: '500m' },
          { nombre: 'CVS Pharmacy', tipo: 'Farmacia', distancia: '1.5 km' },
          { nombre: 'Walgreens', tipo: 'Farmacia', distancia: '1 km' },
        ],
        hospedaje: [
          { nombre: 'Hoteles South Pointe / South Beach', tipo: 'Hotel', rango_precio: '$120-250 USD/noche' },
          { nombre: 'Airbnb Wynwood / Coconut Grove', tipo: 'Airbnb', rango_precio: '$100-220 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Hard Rock Stadium', tipo: 'Parking', costo: '$20-25 USD' },
          { nombre: 'Uber / Lyft (más conveniente)', tipo: 'Rideshare', nota: 'Mejor opción que transporte público' },
        ],
      },
      tips: [
        'Miami es calurosa y húmeda en junio — protección solar y agua CRÍTICA',
        'El Hard Rock Stadium tiene aire acondicionado pero el exterior es BRUTAL',
        'Transporte público en Miami es limitado — Uber es más práctico',
        'South Beach está cerca — puedes combinar partido con vacaciones',
        'El estadio es moderno y bien equipado',
        'Huracanes en junio NO son raros — verifica pronóstico',
      ]
    },

    lumen: {
      ciudad: 'Seattle',
      estadio: 'Lumen Field',
      capacidad: 69000,
      direccion: '800 Occidental Avenue South, Seattle, Washington 98134, USA',
      coordenadas: { lat: 47.5951, lng: -122.3322 },
      estacion_cercana: 'seattle-transit-s-doho',
      slug_ruta: 'como-llegar-lumen-field',
      ruta_desde_centro: {
        origen: 'downtown-seattle',
        destino: 'seattle-transit-s-doho',
        descripcion: 'Sound Transit Light Rail (Central Link) directo',
        tiempo: 15,
        costo: 2.75,
        pasos: [
          { instruccion: 'Toma Sound Transit Central Link (Green / Red Line)', tiempo: 12, tipo: 'metro', linea: 'Link' },
          { instruccion: 'Baja en Stadium Station (parada en el SoDo)', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 2 minutos al Lumen Field', tiempo: 2, tipo: 'caminata' },
        ],
        alertas: [
          'Sound Transit Central Link es DIRECTO al estadio — excelente conexión',
          'Seattle en junio suele tener clima agradable',
          'El SoDo (South Downtown) es la zona de estadios',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde Seattle-Tacoma International Airport (SEA)',
          descripcion: 'Sound Transit Link Rail directo (45-50 min)',
          tiempo: 50,
          costo: 3.25,
        },
        {
          nombre: 'Monorail downtown + caminata/Uber',
          descripcion: 'Seattle Monorail histórico a Westlake',
          tiempo: 20,
          costo: 2.75,
        },
      ],
      partidos: [
        { fecha: '2026-06-20', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Seattle debuta — el noroeste en el mundial.' },
        { fecha: '2026-06-28', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada en Washington.' },
        { fecha: '2026-07-02', hora: 'TBD', fase: 'Octavos de Final', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Round of 16 en el Lumen Field.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Pike Place Market (icónico)', tipo: 'Mercado/Comida', distancia: '1.5 km', precio: '$$' },
          { nombre: 'SoDo restaurants & bars', tipo: 'Variado', distancia: '500m', precio: '$$' },
          { nombre: 'Ballard restaurants (25 min)', tipo: 'Variado', distancia: '5 km', precio: '$$$' },
        ],
        servicios: [
          { nombre: 'ATMs — Chase/Washington Mutual', tipo: 'ATM', distancia: '500m' },
          { nombre: 'Walgreens nearby', tipo: 'Farmacia', distancia: '800m' },
          { nombre: 'REI (outdoor store)', tipo: 'Tienda', distancia: '1.5 km' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Capitol Hill / Fremont', tipo: 'Hotel', rango_precio: '$110-200 USD/noche' },
          { nombre: 'Airbnb Queen Anne / Ballard', tipo: 'Airbnb', rango_precio: '$120-250 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Lumen Field', tipo: 'Parking', costo: '$15-20 USD' },
          { nombre: 'Sound Transit Central Link (mejor)', tipo: 'Transporte público', nota: 'Directo al estadio' },
        ],
      },
      tips: [
        'Sound Transit Link Rail es DIRECTO — una de las mejores opciones en USA',
        'Seattle en junio tiene clima templado (18-23°C) — muy agradable',
        'Pike Place Market es IMPRESCINDIBLE — visita antes del partido',
        'El SoDo tiene buena gastronomía — explora antes/después',
        'Seattle es muy lluviosa pero junio es seco generalmente',
        'El Monorail histórico es una atracción turística en sí misma',
      ]
    },

    levis: {
      ciudad: 'San Francisco/Santa Clara',
      estadio: 'Levi\'s Stadium',
      capacidad: 68500,
      direccion: '4900 Marie P DeBartolo Way, Santa Clara, California 95054, USA',
      coordenadas: { lat: 37.4033, lng: -121.9697 },
      estacion_cercana: 'bart-santa-clara',
      slug_ruta: 'como-llegar-levis-stadium',
      ruta_desde_centro: {
        origen: 'san-francisco-downtown',
        destino: 'bart-santa-clara',
        descripcion: 'BART (Bay Area Rapid Transit) + Local Train / Caltrain',
        tiempo: 50,
        costo: 10,
        pasos: [
          { instruccion: 'Toma BART desde SF hacia San Jose direction', tiempo: 25, tipo: 'metro', linea: 'BART' },
          { instruccion: 'O toma Caltrain desde Diridon Station a Santa Clara', tiempo: 35, tipo: 'tren', linea: 'Caltrain' },
          { instruccion: 'Baja en Santa Clara Station o Diridon', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina / shuttle bus 15 minutos al Levi\'s Stadium', tiempo: 15, tipo: 'caminata' },
        ],
        alertas: [
          'Silicon Valley está al sur de SF — no está en SF mismo',
          'Caltrain es pintoresco pero Uber puede ser más directo',
          'En días de evento hay shuttle bus desde estaciones',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde San Francisco International Airport (SFO)',
          descripcion: 'BART directo a San Jose → Caltrain a Santa Clara (60 min)',
          tiempo: 60,
          costo: 12,
        },
        {
          nombre: 'Rental car / Uber desde SF',
          descripcion: 'I-280 hacia Santa Clara (45 min según tráfico)',
          tiempo: 45,
          costo: 40,
        },
      ],
      partidos: [
        { fecha: '2026-06-21', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Silicon Valley debuta — tecnología y fútbol convergen.' },
        { fecha: '2026-06-29', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada en Santa Clara.' },
        { fecha: '2026-07-06', hora: 'TBD', fase: 'Cuartos de Final', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Cuartos de final en Levi\'s Stadium.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Santa Clara restaurant district', tipo: 'Variado', distancia: '1.5 km', precio: '$$' },
          { nombre: 'San Jose downtown (15 min)', tipo: 'Variado', distancia: '5 km', precio: '$$$' },
          { nombre: 'Stanford Shopping Center nearby', tipo: 'Centro Comercial', distancia: '3 km', precio: '$$' },
        ],
        servicios: [
          { nombre: 'ATMs — Wells Fargo/Chase', tipo: 'ATM', distancia: '1 km' },
          { nombre: 'CVS Pharmacy', tipo: 'Farmacia', distancia: '1.5 km' },
          { nombre: 'Safeway (supermarket)', tipo: 'Tienda', distancia: '1 km' },
        ],
        hospedaje: [
          { nombre: 'Hoteles San Jose / Santa Clara', tipo: 'Hotel', rango_precio: '$100-170 USD/noche' },
          { nombre: 'Airbnb Mountain View / Palo Alto', tipo: 'Airbnb', rango_precio: '$140-280 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Levi\'s Stadium', tipo: 'Parking', costo: '$20-25 USD' },
          { nombre: 'BART + Caltrain (más económico)', tipo: 'Transporte público', nota: 'Opción recomendada' },
        ],
      },
      tips: [
        'Levi\'s Stadium NO está en San Francisco — está en Santa Clara (40 km south)',
        'BART + Caltrain es la opción más económica y ecológica',
        'Silicon Valley en junio es CALUROSO — lleva agua',
        'San Jose es moderno pero sin la magia de SF — considera quedarte en SF',
        'El viaje BART + Caltrain es largo pero pintoresco',
        'Levi\'s Stadium es moderno (2014) — excelente instalación',
      ]
    },

    arrowhead: {
      ciudad: 'Kansas City',
      estadio: 'Arrowhead Stadium',
      capacidad: 76400,
      direccion: '1 Arrowhead Drive, Kansas City, Missouri 64129, USA',
      coordenadas: { lat: 39.0488, lng: -94.4846 },
      estacion_cercana: 'kc-transit-complex',
      slug_ruta: 'como-llegar-arrowhead-stadium',
      ruta_desde_centro: {
        origen: 'downtown-kc',
        destino: 'kc-transit-complex',
        descripcion: 'Taxi / Uber / Auto rental (20 min)',
        tiempo: 20,
        costo: 15,
        pasos: [
          { instruccion: 'Kansas City tiene transporte público limitado', tiempo: 0, tipo: 'nota' },
          { instruccion: 'Opción 1: Uber/Lyft directo (recomendado)', tiempo: 15, tipo: 'rideshare' },
          { instruccion: 'Opción 2: Taxi desde Downtown', tiempo: 20, tipo: 'taxi' },
          { instruccion: 'Opción 3: Rental car (si estás toda la semana)', tiempo: 15, tipo: 'auto' },
        ],
        alertas: [
          'Kansas City tiene poco transporte público — Uber es la mejor opción',
          'El Arrowhead está en las afueras del centro',
          'Estacionamiento es relativamente barato',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde Kansas City International Airport (MCI)',
          descripcion: 'Uber/Rental car (30-40 min)',
          tiempo: 35,
          costo: 35,
        },
        {
          nombre: 'Hertz / Avis rental car',
          descripcion: 'Conducir (recomendado en KC)',
          tiempo: 20,
          costo: 'Alquiler diario',
        },
      ],
      partidos: [
        { fecha: '2026-06-22', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Kansas City debuta — el corazón de USA.' },
        { fecha: '2026-06-30', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada en Missouri.' },
        { fecha: '2026-07-07', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en Kansas City.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Zona de BBQ (famosa de KC)', tipo: 'Barbecue', distancia: '2-5 km', precio: '$$' },
          { nombre: 'Westport restaurants', tipo: 'Variado', distancia: '3 km', precio: '$$' },
          { nombre: 'Power & Light District', tipo: 'Variado', distancia: '2 km', precio: '$$$' },
        ],
        servicios: [
          { nombre: 'ATMs — Commerce Bank/Chase', tipo: 'ATM', distancia: '1.5 km' },
          { nombre: 'CVS / Walgreens', tipo: 'Farmacia', distancia: '2 km' },
          { nombre: 'Convenience stores', tipo: 'Tienda', distancia: '1 km' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Crossroads / Power & Light', tipo: 'Hotel', rango_precio: '$80-150 USD/noche' },
          { nombre: 'Airbnb Westport / Midtown', tipo: 'Airbnb', rango_precio: '$80-160 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Arrowhead Stadium', tipo: 'Parking', costo: '$15 USD' },
          { nombre: 'Uber/Lyft (mejor opción)', tipo: 'Rideshare', nota: 'KC es car-centric' },
        ],
      },
      tips: [
        'Kansas City es una ciudad centrada en el automóvil — Uber es lo mejor',
        'BBQ de KC es LEGENDARIO — prueba Jack Stack o Joe\'s',
        'El Arrowhead Stadium es hermoso (1972) pero clásico',
        'Weather en junio es templado pero puede ser húmedo',
        'Power & Light District es la zona de vida nocturna',
        'KC es más económica que otras ciudades de USA',
      ]
    },

    gillette: {
      ciudad: 'Boston/Foxborough',
      estadio: 'Gillette Stadium',
      capacidad: 65878,
      direccion: '1 Patriot Place, Foxborough, Massachusetts 02035, USA',
      coordenadas: { lat: 42.0909, lng: -71.2647 },
      estacion_cercana: 'mbta-foxborough',
      slug_ruta: 'como-llegar-gillette-stadium',
      ruta_desde_centro: {
        origen: 'downtown-boston',
        destino: 'mbta-foxborough',
        descripcion: 'MBTA + Shuttle / Uber + Amtrak',
        tiempo: 60,
        costo: 8,
        pasos: [
          { instruccion: 'Toma MBTA Red Line / Orange Line towards Framingham', tiempo: 30, tipo: 'metro', linea: 'MBTA' },
          { instruccion: 'Transbordo a shuttle bus especial en días de evento', tiempo: 15, tipo: 'shuttle' },
          { instruccion: 'O Uber/taxi directo desde Boston (45 min)', tiempo: 45, tipo: 'rideshare' },
          { instruccion: 'Baja en Gillette Stadium', tiempo: 0, tipo: 'llegada' },
        ],
        alertas: [
          'Gillette está 40 km al suroeste de Boston — no está en la ciudad',
          'MBTA tiene servicio limitado a Foxborough',
          'Uber/taxi es frecuentemente la mejor opción',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde Boston Logan International Airport (BOS)',
          descripcion: 'MBTA + shuttle o Uber (90 min)',
          tiempo: 90,
          costo: 18,
        },
        {
          nombre: 'Auto rental / conducir desde Boston',
          descripcion: 'I-95 hacia Foxborough (45 min)',
          tiempo: 45,
          costo: 'Gasolina + estacionamiento',
        },
      ],
      partidos: [
        { fecha: '2026-06-23', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Boston debuta — Nueva Inglaterra en el mundial.' },
        { fecha: '2026-07-01', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada en Foxborough.' },
        { fecha: '2026-07-09', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en Gillette.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Patriot Place — Restaurants', tipo: 'Variado', distancia: '500m', precio: '$$' },
          { nombre: 'Boston restaurants (45 min)', tipo: 'Variado', distancia: '40 km', precio: '$$$' },
          { nombre: 'TGI Friday\'s (nearby)', tipo: 'Cadena', distancia: '1 km', precio: '$$' },
        ],
        servicios: [
          { nombre: 'ATMs — TD Bank/Bank of America', tipo: 'ATM', distancia: '1 km' },
          { nombre: 'CVS Pharmacy', tipo: 'Farmacia', distancia: '1.5 km' },
          { nombre: 'Walmart nearby', tipo: 'Tienda', distancia: '2 km' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Foxborough / Waltham', tipo: 'Hotel', rango_precio: '$90-150 USD/noche' },
          { nombre: 'Airbnb Cambridge / Somerville (close to Boston)', tipo: 'Airbnb', rango_precio: '$120-220 USD/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento Gillette Stadium', tipo: 'Parking', costo: '$20-25 USD' },
          { nombre: 'Uber/Lyft (mejor opción)', tipo: 'Rideshare', nota: 'MBTA es limitado' },
        ],
      },
      tips: [
        'Gillette NO está en Boston — está 40 km al sur en Foxborough',
        'MBTA tiene servicio limitado — considera Uber',
        'Patriot Place (mall) está al lado — puedes comprar souvenirs',
        'Nueva Inglaterra es fresca incluso en junio',
        'El viaje desde Boston es largo — considera hospedarte en el área',
        'Gillette es hogar de los Patriots, Revolution (MLS) y Revs (NWSL)',
      ]
    },

    bmo: {
      ciudad: 'Toronto',
      estadio: 'BMO Field',
      capacidad: 45000,
      direccion: '170 Princes Boulevard, Exhibition Place, Toronto, Ontario M6K 3C3, Canada',
      coordenadas: { lat: 43.6263, lng: -79.4178 },
      estacion_cercana: 'ttc-bathurst-station',
      slug_ruta: 'como-llegar-bmo-field',
      ruta_desde_centro: {
        origen: 'downtown-toronto',
        destino: 'ttc-bathurst-station',
        descripcion: 'TTC (Toronto Transit Commission) Streetcar + caminata',
        tiempo: 25,
        costo: 3.25,
        pasos: [
          { instruccion: 'Toma TTC Streetcar en dirección Exhibition / Bathurst', tiempo: 15, tipo: 'tranvia', linea: '9-Bathurst' },
          { instruccion: 'Baja en Exhibition Place / Bathurst', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 10 minutos hacia BMO Field en Exhibition Place', tiempo: 10, tipo: 'caminata' },
        ],
        alertas: [
          'TTC Streetcar 9-Bathurst lleva directo a Exhibition Place',
          'Toronto en junio es cálido pero templado',
          'Exhibition Place es zona histórica con parques',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde Toronto Pearson International Airport (YYZ)',
          descripcion: 'TTC + Streetcar (50-60 min)',
          tiempo: 55,
          costo: 4.25,
        },
        {
          nombre: 'Uber directo desde Downtown',
          descripcion: 'Uber desde cualquier punto de Toronto (15-20 min)',
          tiempo: 18,
          costo: 18,
        },
      ],
      partidos: [
        { fecha: '2026-06-12', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Toronto debuta — Canadá en el mundial.' },
        { fecha: '2026-06-19', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada en Toronto.' },
        { fecha: '2026-06-26', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en BMO Field.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Distillery District (25 min)', tipo: 'Variado', distancia: '3 km', precio: '$$$' },
          { nombre: 'Downtown Toronto restaurants (10 min)', tipo: 'Variado', distancia: '2 km', precio: '$$' },
          { nombre: 'Chinatown (Spadina)', tipo: 'Asiática', distancia: '1.5 km', precio: '$' },
        ],
        servicios: [
          { nombre: 'ATMs — RBC / TD Bank', tipo: 'ATM', distancia: '500m' },
          { nombre: 'Shoppers Drug Mart', tipo: 'Farmacia', distancia: '800m' },
          { nombre: 'Metro grocery', tipo: 'Tienda', distancia: '1 km' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Downtown Toronto', tipo: 'Hotel', rango_precio: 'CAD 150-250/noche' },
          { nombre: 'Airbnb Queen West / King West', tipo: 'Airbnb', rango_precio: 'CAD 120-240/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento BMO Field', tipo: 'Parking', costo: 'CAD 20-25' },
          { nombre: 'TTC Streetcar (excelente)', tipo: 'Transporte público', nota: 'Toronto tiene muy buen transporte' },
        ],
      },
      tips: [
        'TTC es excelente — Streetcar 9-Bathurst es directo y pintoresco',
        'Toronto es una ciudad muy internacional — muchas lenguas habladas',
        'Exhibition Place es histórica y hermosa',
        'Distillery District es IMPRESCINDIBLE — paseo a pie medieval',
        'Toronto en junio es agradable (20-25°C)',
        'BMO Field es moderno (2007) y pertenece a Toronto FC',
      ]
    },

    bcplace: {
      ciudad: 'Vancouver',
      estadio: 'BC Place',
      capacidad: 54500,
      direccion: '777 Pacific Boulevard, Vancouver, British Columbia V6B 4Y8, Canada',
      coordenadas: { lat: 49.2767, lng: -123.1124 },
      estacion_cercana: 'skytrain-stadium',
      slug_ruta: 'como-llegar-bc-place',
      ruta_desde_centro: {
        origen: 'downtown-vancouver',
        destino: 'skytrain-stadium',
        descripcion: 'SkyTrain Canada Line → Stadium Station (directo)',
        tiempo: 5,
        costo: 3.25,
        pasos: [
          { instruccion: 'Toma SkyTrain Canada Line en dirección Richmond', tiempo: 3, tipo: 'metro', linea: 'Canada' },
          { instruccion: 'Baja en Stadium Station (parada dedicada al BC Place)', tiempo: 0, tipo: 'llegada' },
          { instruccion: 'Camina 1 minuto a BC Place', tiempo: 1, tipo: 'caminata' },
        ],
        alertas: [
          'SkyTrain Canada Line es DIRECTO y en el corazón de Vancouver',
          'Stadium Station abre directamente al BC Place',
          'Vancouver en junio es perfecto — clima ideal',
        ]
      },
      rutas_alternativas: [
        {
          nombre: 'Desde Vancouver International Airport (YVR)',
          descripcion: 'SkyTrain Canada Line directo (25 min)',
          tiempo: 25,
          costo: 3.25,
        },
        {
          nombre: 'Uber desde cualquier punto de Vancouver',
          descripcion: 'Uber (10-15 min desde Downtown)',
          tiempo: 12,
          costo: 16,
        },
      ],
      partidos: [
        { fecha: '2026-06-13', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1, descripcion: 'Vancouver debuta — la costa oeste de Canadá.' },
        { fecha: '2026-06-20', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2, descripcion: 'Segunda jornada en BC Place.' },
        { fecha: '2026-06-27', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3, descripcion: 'Último partido de grupos en Vancouver.' },
      ],
      pois: {
        restaurantes: [
          { nombre: 'Gastown restaurants (5 min caminata)', tipo: 'Variado', distancia: '1 km', precio: '$$' },
          { nombre: 'Downtown Vancouver restaurants', tipo: 'Variado', distancia: '500m', precio: '$$$' },
          { nombre: 'Chinatown (Richmond)', tipo: 'Asiática', distancia: '3 km', precio: '$' },
        ],
        servicios: [
          { nombre: 'ATMs — RBC / TD / BMO', tipo: 'ATM', distancia: '300m' },
          { nombre: 'Shoppers Drug Mart', tipo: 'Farmacia', distancia: '500m' },
          { nombre: 'Save-on-Foods', tipo: 'Tienda', distancia: '800m' },
        ],
        hospedaje: [
          { nombre: 'Hoteles Downtown Vancouver', tipo: 'Hotel', rango_precio: 'CAD 160-280/noche' },
          { nombre: 'Airbnb Gastown / Yaletown', tipo: 'Airbnb', rango_precio: 'CAD 130-260/noche' },
        ],
        transporte: [
          { nombre: 'Estacionamiento BC Place', tipo: 'Parking', costo: 'CAD 20-30' },
          { nombre: 'SkyTrain Canada Line (excelente)', tipo: 'Transporte público', nota: 'Mejor conexión en el mundo' },
        ],
      },
      tips: [
        'SkyTrain Canada Line es UNA DE LAS MEJORES del mundo — prácticamente en el estadio',
        'Vancouver es hermosa (montañas + océano) — aprovecha antes/después',
        'Gastown es pintoresco — visita el "Steampunk Clock" iconográfico',
        'Vancouver en junio es perfecto — clima ideal (20-25°C)',
        'BC Place tiene techo retráctil — protegido del clima',
        'Vancouver es la ciudad más limpia de Norteamérica',
      ]
    }
  },

  // Countdown and meta
  fecha_inaugural_mundial: '2026-06-11',
  fecha_final_mundial: '2026-07-19',
  total_sedes: 16,
  total_partidos_mundial: 80,

  // Fan Zones
  fanZones: [
    // MEXICO
    { ciudad: 'cdmx', nombre: 'Fan Zone Zócalo', ubicacion: 'Plaza de la Constitución, Centro Histórico', estacion_metro: 'zocalo', capacidad: 100000 },
    { ciudad: 'gdl', nombre: 'Fan Zone Plaza Liberación', ubicacion: 'Centro Histórico, Guadalajara', estacion_metro: 'gdl-juarez', capacidad: 30000 },
    { ciudad: 'mty', nombre: 'Fan Zone Macroplaza', ubicacion: 'Macroplaza, Centro de Monterrey', estacion_metro: 'mty-cuauhtemoc', capacidad: 40000 },
    // USA
    { ciudad: 'metlife', nombre: 'Fan Zone MetLife', ubicacion: 'East Rutherford, New Jersey', estacion_metro: 'metlife-nj-transit', capacidad: 50000 },
    { ciudad: 'sofi', nombre: 'Fan Zone SoFi', ubicacion: 'Inglewood, California', estacion_metro: 'metro-sofi-transit', capacidad: 40000 },
    { ciudad: 'att', nombre: 'Fan Zone Arlington', ubicacion: 'Arlington Sports Complex, Texas', estacion_metro: 'arlington-transit', capacidad: 45000 },
    { ciudad: 'nrg', nombre: 'Fan Zone Houston', ubicacion: 'NRG Park, Texas', estacion_metro: 'houston-metro', capacidad: 35000 },
    { ciudad: 'mbenz', nombre: 'Fan Zone Atlanta', ubicacion: 'Downtown Atlanta, Georgia', estacion_metro: 'atlanta-marta', capacidad: 40000 },
    { ciudad: 'lincoln', nombre: 'Fan Zone Philadelphia', ubicacion: 'Sports Complex, Pennsylvania', estacion_metro: 'philly-sports-complex', capacidad: 30000 },
    { ciudad: 'hardrock', nombre: 'Fan Zone Miami', ubicacion: 'Miami Gardens, Florida', estacion_metro: 'miami-dolphins-station', capacidad: 25000 },
    { ciudad: 'lumen', nombre: 'Fan Zone Seattle', ubicacion: 'SoDo, Seattle, Washington', estacion_metro: 'seattle-transit-s-doho', capacidad: 35000 },
    { ciudad: 'levis', nombre: 'Fan Zone Silicon Valley', ubicacion: 'Santa Clara, California', estacion_metro: 'bart-santa-clara', capacidad: 30000 },
    { ciudad: 'arrowhead', nombre: 'Fan Zone Kansas City', ubicacion: 'Kansas City, Missouri', estacion_metro: 'kc-transit-complex', capacidad: 30000 },
    { ciudad: 'gillette', nombre: 'Fan Zone Boston', ubicacion: 'Foxborough, Massachusetts', estacion_metro: 'mbta-foxborough', capacidad: 25000 },
    // CANADA
    { ciudad: 'bmo', nombre: 'Fan Zone Toronto', ubicacion: 'Exhibition Place, Toronto', estacion_metro: 'ttc-bathurst-station', capacidad: 35000 },
    { ciudad: 'bcplace', nombre: 'Fan Zone Vancouver', ubicacion: 'Downtown Vancouver, British Columbia', estacion_metro: 'skytrain-stadium', capacidad: 40000 },
  ],

  // Quick routes for SEO (pre-calculated popular routes)
  rutasPopulares: [
    { origen: 'zocalo', destino: 'tren-ligero-estadio-azteca', slug: 'zocalo-a-estadio-azteca', titulo: 'Cómo llegar al Estadio Azteca desde el Zócalo' },
    { origen: 'terminal-aerea', destino: 'tren-ligero-estadio-azteca', slug: 'aeropuerto-a-estadio-azteca', titulo: 'Del Aeropuerto al Estadio Azteca' },
    { origen: 'chapultepec', destino: 'tren-ligero-estadio-azteca', slug: 'chapultepec-a-estadio-azteca', titulo: 'De Chapultepec al Estadio Azteca' },
    { origen: 'polanco', destino: 'tren-ligero-estadio-azteca', slug: 'polanco-a-estadio-azteca', titulo: 'De Polanco al Estadio Azteca' },
    { origen: 'penn-station', destino: 'metlife-nj-transit', slug: 'penn-station-a-metlife', titulo: 'De Penn Station a MetLife Stadium (Final)' },
    { origen: 'downtown-la', destino: 'metro-sofi-transit', slug: 'downtown-la-a-sofi', titulo: 'De Downtown LA a SoFi Stadium' },
    { origen: 'downtown-dallas', destino: 'arlington-transit', slug: 'dallas-a-att-stadium', titulo: 'De Dallas a AT&T Stadium' },
    { origen: 'downtown-houston', destino: 'houston-metro', slug: 'houston-a-nrg-stadium', titulo: 'De Houston a NRG Stadium' },
    { origen: 'downtown-atlanta', destino: 'atlanta-marta', slug: 'atlanta-a-mercedes-benz', titulo: 'De Atlanta a Mercedes-Benz Stadium' },
    { origen: 'downtown-toronto', destino: 'ttc-bathurst-station', slug: 'toronto-a-bmo-field', titulo: 'De Toronto a BMO Field' },
    { origen: 'downtown-vancouver', destino: 'skytrain-stadium', slug: 'vancouver-a-bc-place', titulo: 'De Vancouver a BC Place' },
  ]
}
