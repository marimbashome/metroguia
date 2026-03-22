export const mundial2026 = {
  sedes: {
    cdmx: {
      ciudad: 'Ciudad de México',
      estadio: 'Estadio Azteca',
      capacidad: 87523,
      estacion_cercana: 'tren-ligero-estadio-azteca', // slug in grafo.js
      ruta_desde_centro: {
        origen: 'zocalo',
        destino: 'tren-ligero-estadio-azteca',
        descripcion: 'Metro L2 → Tasqueña → Tren Ligero → Estadio Azteca',
        tiempo: 45,
        costo: 15,
        alertas: ['La tarjeta Metro NO funciona en el Tren Ligero — compra boleto separado ($10 MXN)', 'No hay metro directo al Estadio Azteca']
      },
      partidos: [
        // VALIDATED dates — do not change without verification
        { fecha: '2026-06-11', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1 },
        { fecha: '2026-06-17', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2 },
        { fecha: '2026-06-24', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3 },
        { fecha: '2026-06-30', hora: 'TBD', fase: 'Octavos de Final', equipos: 'TBD vs TBD', jornada: 4 },
        { fecha: '2026-07-05', hora: 'TBD', fase: 'Cuartos de Final', equipos: 'TBD vs TBD', jornada: 5 },
      ],
      tips: [
        'Llega mínimo 3 horas antes — el Tren Ligero se satura en días de partido',
        'Compra boleto de regreso antes de entrar al estadio',
        'No hay Uber/taxi cerca del estadio después del partido — usa transporte público',
        'Lleva efectivo: muchos comercios cerca del estadio no aceptan tarjeta',
        'El Tren Ligero opera hasta las 11 PM — verifica horario en días de partido',
      ]
    },
    gdl: {
      ciudad: 'Guadalajara',
      estadio: 'Estadio Akron',
      capacidad: 49850,
      estacion_cercana: 'gdl-estadio-akron', // virtual node in graph
      ruta_desde_centro: {
        origen: 'gdl-juarez', // Centro Histórico GDL
        destino: 'gdl-estadio-akron',
        descripcion: 'Línea 3 SITEUR → Estación Chivas → 20 min caminando al estadio',
        tiempo: 40,
        costo: 10,
        alertas: ['20 minutos caminando desde la estación Chivas al estadio']
      },
      partidos: [
        { fecha: '2026-06-11', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1 },
        { fecha: '2026-06-18', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2 },
        { fecha: '2026-06-23', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3 },
        { fecha: '2026-06-26', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 4 },
      ],
      tips: [
        'La Línea 3 es la más nueva y conecta directo a la zona del estadio',
        'Estación Chivas → 20 min caminando al estadio',
        'Taxis y Uber disponibles pero espera largas filas post-partido',
        'El calor de Guadalajara en junio es intenso — lleva agua y gorra',
      ]
    },
    mty: {
      ciudad: 'Monterrey',
      estadio: 'Estadio BBVA',
      capacidad: 53500,
      estacion_cercana: 'mty-estadio-bbva', // virtual node in graph
      ruta_desde_centro: {
        origen: 'mty-cuauhtemoc', // Centro MTY (Macroplaza)
        destino: 'mty-estadio-bbva',
        descripcion: 'Metrorrey L1 → Estación Exposición → 22 min caminando',
        tiempo: 35,
        costo: 8,
        alertas: ['22 minutos caminando desde la estación Exposición al estadio BBVA']
      },
      partidos: [
        { fecha: '2026-06-14', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 1 },
        { fecha: '2026-06-20', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 2 },
        { fecha: '2026-06-24', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 3 },
        { fecha: '2026-06-29', hora: 'TBD', fase: 'Fase de Grupos', equipos: 'TBD vs TBD', jornada: 4 },
      ],
      tips: [
        'El calor de Monterrey en junio puede superar 40°C — hidratación esencial',
        'Metrorrey funciona de 5:00 AM a 12:00 AM',
        'Zona del estadio tiene restaurantes y bares para antes/después del partido',
        'Uber funciona bien en Monterrey — alternativa al metro',
      ]
    }
  },
  
  // Countdown and meta
  fecha_inaugural_mexico: '2026-06-11',
  total_partidos_mexico: 13, // 5 CDMX + 4 GDL + 4 MTY
  
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
