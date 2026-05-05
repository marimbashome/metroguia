export const lineasSantiago = [
  {
    id: 'L1',
    color: '#EF3D33',
    colorNombre: 'Línea 1',
    inicio: 'San Pablo',
    fin: 'Los Domínicos',
    total: 24,
    municipios: ['Santiago', 'Las Condes', 'Vitacura'],
    descripcion: 'La Línea 1 es la más importante del Metro de Santiago, recorriendo de oeste a este el eje de la Alameda y Avenida Providencia. Inaugurada en 1975, conecta las comunas populares del poniente con el barrio alto de Las Condes. Pasa por Universidad de Chile, Baquedano (el nodo central del metro), Tobalaba y las estaciones del barrio financiero.',
    estaciones_turisticas: ['stgo-baquedano-l1', 'stgo-universidad-de-chile-l1', 'stgo-tobalaba-l1', 'stgo-los-leones-l1'],
    estaciones: ['stgo-san-pablo-l1','stgo-neptuno-l1','stgo-pajaritos-l1','stgo-las-rejas-l1','stgo-ecuador-l1','stgo-san-alberto-hurtado-l1','stgo-universidad-de-santiago-l1','stgo-estacion-central-l1','stgo-alameda-l1','stgo-la-moneda-l1','stgo-universidad-de-chile-l1','stgo-baquedano-l1','stgo-salvador-l1','stgo-manuel-montt-l1','stgo-pedro-de-valdivia-l1','stgo-los-leones-l1','stgo-tobalaba-l1','stgo-el-golf-l1','stgo-alcantara-l1','stgo-escuela-militar-l1','stgo-manquehue-l1','stgo-hernando-de-magallanes-l1','stgo-los-dominicos-l1'],
    ruta_1_dia: {
      titulo: 'De la Alameda al barrio alto: historia y modernidad',
      paradas: [
        { estacion: 'stgo-estacion-central-l1', actividad: 'Estación Central y Terminal de Buses (09:00)' },
        { estacion: 'stgo-la-moneda-l1', actividad: 'Palacio de La Moneda y Plaza de la Constitución (10:30)' },
        { estacion: 'stgo-baquedano-l1', actividad: 'Plaza Baquedano y Barrio Bellavista (12:00)' },
        { estacion: 'stgo-los-leones-l1', actividad: 'Barrio de Providencia y El Golf (14:00)' },
        { estacion: 'stgo-tobalaba-l1', actividad: 'Conexión a Línea 4 y barrio alto (15:30)' }
      ]
    },
    seo_title: 'Línea 1 Metro Santiago: San Pablo a Los Domínicos | 24 estaciones',
    meta_description: 'Guía de la Línea 1 (roja) del Metro de Santiago de Chile. 24 estaciones de San Pablo a Los Domínicos por la Alameda, Providencia y Las Condes.',
    h1: 'Línea 1 del Metro — Santiago de Chile'
  },
  {
    id: 'L2',
    color: '#F0A115',
    colorNombre: 'Línea 2',
    inicio: 'Lo Ovalle',
    fin: 'Cerro Blanco',
    total: 24,
    municipios: ['Santiago', 'San Miguel', 'La Cisterna', 'Ñuñoa', 'Macul'],
    descripcion: 'La Línea 2 recorre el eje norte-sur de Santiago, conectando las comunas del sur (La Cisterna, San Miguel) con el centro y el sector norte (Cerro Blanco). Pasa por el Parque O\'Higgins, Baquedano y la zona de Ñuñoa. Es la segunda línea en importancia del sistema.',
    estaciones_turisticas: ['stgo-parque-ohiggins-l2', 'stgo-baquedano-l2', 'stgo-nunoa-l2', 'stgo-la-cisterna-l2'],
    estaciones: ['stgo-lo-ovalle-l2','stgo-el-parron-l2','stgo-lo-vial-l2','stgo-ciudad-del-nino-l2','stgo-lo-valledor-l2','stgo-franklin-l2','stgo-parque-ohiggins-l2','stgo-toesca-l2','stgo-baquedano-l2','stgo-parque-bustamante-l2','stgo-santa-isabel-l2','stgo-irarrazaval-l2','stgo-nunoa-l2','stgo-chile-espana-l2','stgo-macul-l2','stgo-quilin-l2','stgo-vicuna-mackenna-l2','stgo-la-cisterna-l2','stgo-lo-blanco-l2','stgo-el-parron-l2','stgo-cerro-blanco-l2'],
    ruta_1_dia: {
      titulo: 'Sur a norte: O\'Higgins, Baquedano y Ñuñoa',
      paradas: [
        { estacion: 'stgo-parque-ohiggins-l2', actividad: 'Parque O\'Higgins y Fantasilandia (09:00)' },
        { estacion: 'stgo-baquedano-l2', actividad: 'Plaza Italia y Barrio Bellavista (11:00)' },
        { estacion: 'stgo-nunoa-l2', actividad: 'Plaza Ñuñoa y gastronomía (13:00)' },
        { estacion: 'stgo-la-cisterna-l2', actividad: 'Terminal Sur y conexiones (16:00)' }
      ]
    },
    seo_title: 'Línea 2 Metro Santiago: Lo Ovalle a Cerro Blanco | Metro Chile',
    meta_description: 'Línea 2 (amarilla) del Metro de Santiago. Parque O\'Higgins, Baquedano, Ñuñoa. Eje norte-sur de la capital chilena.',
    h1: 'Línea 2 del Metro — Santiago de Chile'
  },
  {
    id: 'L3',
    color: '#856937',
    colorNombre: 'Línea 3',
    inicio: 'Quilicura',
    fin: 'Villa Macul',
    total: 22,
    municipios: ['Santiago', 'Quilicura', 'Conchalí', 'Independencia', 'Macul'],
    descripcion: 'La Línea 3 es la más nueva del Metro de Santiago, inaugurada en 2019. Recorre un eje diagonal desde el sector norponiente (Quilicura) hasta el suroriente (Villa Macul). Tiene estaciones en barrios hasta entonces desconectados del metro como Conchalí, Vivaceta y Los Libertadores.',
    estaciones_turisticas: ['stgo-baquedano-l3', 'stgo-plaza-italia-l3', 'stgo-matta-l3', 'stgo-los-libertadores-l3'],
    estaciones: ['stgo-quilicura-l3','stgo-pedreros-l3','stgo-neptuno-l3','stgo-av-la-paz-l3','stgo-parque-la-paz-l3','stgo-vivaceta-l3','stgo-conchali-l3','stgo-plaza-chacabuco-l3','stgo-los-libertadores-l3','stgo-baquedano-l3','stgo-plaza-italia-l3','stgo-matta-l3','stgo-parque-bustamante-l3','stgo-monsenor-eyzaguirre-l3','stgo-vicente-valdes-l3','stgo-plaza-egana-l3','stgo-fernando-castillo-velasco-l3','stgo-villa-macul-l3'],
    ruta_1_dia: {
      titulo: 'Quilicura a Macul por el centro',
      paradas: [
        { estacion: 'stgo-los-libertadores-l3', actividad: 'Barrio Conchali y mercados (09:00)' },
        { estacion: 'stgo-baquedano-l3', actividad: 'Plaza Baquedano e Italia (11:00)' },
        { estacion: 'stgo-matta-l3', actividad: 'Barrio Franklin y antigüedades (13:30)' },
        { estacion: 'stgo-villa-macul-l3', actividad: 'Villa Macul y conexión sur (16:00)' }
      ]
    },
    seo_title: 'Línea 3 Metro Santiago: Quilicura a Villa Macul | Inaugurada 2019',
    meta_description: 'Línea 3 (café) del Metro de Santiago, la más nueva. 22 estaciones de Quilicura a Villa Macul. Inaugurada en 2019 conecta barrios del norte y sur.',
    h1: 'Línea 3 del Metro — Santiago de Chile'
  },
  {
    id: 'L4',
    color: '#1F5BA6',
    colorNombre: 'Línea 4',
    inicio: 'Tobalaba',
    fin: 'San Bernardo',
    total: 14,
    municipios: ['Providencia', 'Las Condes', 'La Florida', 'San Ramón', 'La Cisterna', 'San Bernardo'],
    descripcion: 'La Línea 4 conecta el sector oriente de Santiago con el extremo sur. Parte de Tobalaba (nodo con Línea 1) y llega hasta San Bernardo pasando por La Florida y San Ramón. Es la línea más larga del sistema en kilómetros y sirve comunas de gran crecimiento poblacional del suroriente.',
    estaciones_turisticas: ['stgo-tobalaba-l4', 'stgo-simon-bolivar-l4', 'stgo-la-florida-l4', 'stgo-san-bernardo-l4'],
    estaciones: ['stgo-tobalaba-l4','stgo-cristobal-colon-l4','stgo-francisco-bilbao-l4','stgo-principe-de-gales-l4','stgo-simon-bolivar-l4','stgo-grecia-l4','stgo-los-orientales-l4','stgo-protectora-infancia-l4','stgo-las-torres-l4','stgo-quilin-l4','stgo-san-ramon-l4','stgo-la-cisterna-l4','stgo-trinidad-l4','stgo-hospital-el-pino-l4','stgo-san-bernardo-l4'],
    ruta_1_dia: {
      titulo: 'De Providencia a San Bernardo por el suroriente',
      paradas: [
        { estacion: 'stgo-tobalaba-l4', actividad: 'Conexión con Línea 1 (09:00)' },
        { estacion: 'stgo-simon-bolivar-l4', actividad: 'Barrio Suecia y gastronomía (11:00)' },
        { estacion: 'stgo-la-cisterna-l4', actividad: 'Terminal Bus Sur (14:00)' },
        { estacion: 'stgo-san-bernardo-l4', actividad: 'Terminal Sur San Bernardo (16:00)' }
      ]
    },
    seo_title: 'Línea 4 Metro Santiago: Tobalaba a San Bernardo | 15 estaciones',
    meta_description: 'Línea 4 (azul) del Metro de Santiago. Conecta Tobalaba (Providencia) con San Bernardo. La Florida, San Ramón y comunas del suroriente.',
    h1: 'Línea 4 del Metro — Santiago de Chile'
  },
  {
    id: 'L5',
    color: '#2AA84A',
    colorNombre: 'Línea 5',
    inicio: 'Vicente Valdés',
    fin: 'Pudahuel',
    total: 26,
    municipios: ['Santiago', 'La Florida', 'San Miguel', 'Lo Barnechea', 'Maipú', 'Pudahuel'],
    descripcion: 'La Línea 5 es una de las más extensas, conectando La Florida en el suroriente con Pudahuel en el poniente pasando por el centro. Inaugura zonas como Maipú y Pudahuel al sistema de metro. Tiene estación en San Joaquín y Pedrero, sirviendo la zona universitaria del sur.',
    estaciones_turisticas: ['stgo-vicente-valdes-l5', 'stgo-baquedano-l5', 'stgo-san-joaquin-l5', 'stgo-maipu-l5'],
    estaciones: ['stgo-la-florida-l5','stgo-san-ramon-l5','stgo-las-mercedes-l5','stgo-bellavista-la-florida-l5','stgo-vicente-valdes-l5','stgo-rojas-magallanes-l5','stgo-mirador-l5','stgo-rodrigo-de-araya-l5','stgo-carlos-valdovinos-l5','stgo-camino-agricola-l5','stgo-san-joaquin-l5','stgo-pedrero-l5','stgo-departamental-l5','stgo-union-latinoamericana-l5','stgo-belloto-l5','stgo-laguna-sur-l5','stgo-barrancas-l5','stgo-pudahuel-l5','stgo-santiago-centro-l5','stgo-maipu-l5'],
    ruta_1_dia: {
      titulo: 'Sur-poniente: universidades, arte y Maipú',
      paradas: [
        { estacion: 'stgo-san-joaquin-l5', actividad: 'Campus universitario USACH (09:00)' },
        { estacion: 'stgo-departamental-l5', actividad: 'Barrio de San Miguel y mercados (11:00)' },
        { estacion: 'stgo-union-latinoamericana-l5', actividad: 'Conexión y gastronomía (13:00)' },
        { estacion: 'stgo-maipu-l5', actividad: 'Plaza de Maipú y museo (15:00)' }
      ]
    },
    seo_title: 'Línea 5 Metro Santiago: La Florida a Pudahuel | 26 estaciones',
    meta_description: 'Línea 5 (verde) del Metro de Santiago. Conecta La Florida con Pudahuel por San Joaquín, Departamental y Maipú. 26 estaciones.',
    h1: 'Línea 5 del Metro — Santiago de Chile'
  }
];
