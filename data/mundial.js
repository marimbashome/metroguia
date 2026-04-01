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
        // VALIDATED dates — do not change without verification
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
    }
  },

  // Countdown and meta
  fecha_inaugural_mexico: '2026-06-11',
  total_partidos_mexico: 13, // 5 CDMX + 4 GDL + 4 MTY

  // Fan Zones
  fanZones: [
    { ciudad: 'cdmx', nombre: 'Fan Zone Zócalo', ubicacion: 'Plaza de la Constitución, Centro Histórico', estacion_metro: 'zocalo', capacidad: 100000 },
    { ciudad: 'gdl', nombre: 'Fan Zone Plaza Liberación', ubicacion: 'Centro Histórico, Guadalajara', estacion_metro: 'gdl-juarez', capacidad: 30000 },
    { ciudad: 'mty', nombre: 'Fan Zone Macroplaza', ubicacion: 'Macroplaza, Centro de Monterrey', estacion_metro: 'mty-cuauhtemoc', capacidad: 40000 },
  ],

  // Quick routes for SEO (pre-calculated popular routes)
  rutasPopulares: [
    { origen: 'zocalo', destino: 'tren-ligero-estadio-azteca', slug: 'zocalo-a-estadio-azteca', titulo: 'Cómo llegar al Estadio Azteca desde el Zócalo' },
    { origen: 'terminal-aerea', destino: 'tren-ligero-estadio-azteca', slug: 'aeropuerto-a-estadio-azteca', titulo: 'Del Aeropuerto al Estadio Azteca' },
    { origen: 'chapultepec', destino: 'tren-ligero-estadio-azteca', slug: 'chapultepec-a-estadio-azteca', titulo: 'De Chapultepec al Estadio Azteca' },
    { origen: 'polanco', destino: 'tren-ligero-estadio-azteca', slug: 'polanco-a-estadio-azteca', titulo: 'De Polanco al Estadio Azteca' },
    { origen: 'terminal-aerea', destino: 'zocalo', slug: 'aeropuerto-a-zocalo', titulo: 'Del Aeropuerto al Centro Histórico' },
    { origen: 'terminal-aerea', destino: 'chapultepec', slug: 'aeropuerto-a-chapultepec', titulo: 'Del Aeropuerto a Chapultepec' },
    { origen: 'terminal-aerea', destino: 'polanco', slug: 'aeropuerto-a-polanco', titulo: 'Del Aeropuerto a Polanco' },
    { origen: 'zocalo', destino: 'coyoacan', slug: 'zocalo-a-coyoacan', titulo: 'Del Zócalo a Coyoacán' },
    { origen: 'bellas-artes', destino: 'coyoacan', slug: 'bellas-artes-a-coyoacan', titulo: 'De Bellas Artes a Coyoacán' },
    { origen: 'chapultepec', destino: 'la-villa-basilica', slug: 'chapultepec-a-basilica', titulo: 'De Chapultepec a la Basílica de Guadalupe' },
  ]
}
