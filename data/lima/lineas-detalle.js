export const lineasLima = [
  {
    id: 'L1',
    color: '#EF3D33',
    colorNombre: 'Línea 1',
    inicio: 'Villa El Salvador',
    fin: 'Bayóvar',
    total: 26,
    municipios: ['Lima', 'San Juan de Lurigancho', 'Villa El Salvador', 'Villa María del Triunfo'],
    descripcion: 'La Línea 1 del Metro de Lima es la primera y más importante del sistema, inaugurada en 1990 como el primer metro de Perú. Recorre de sur a norte conectando Villa El Salvador (extremo sur) con Bayóvar (San Juan de Lurigancho). Pasa por el centro histórico de Lima, la Cultura (donde cruza con la futura Línea 2) y barrios de San Juan de Lurigancho, uno de los distritos más poblados de América Latina.',
    estaciones_turisticas: ['lima-la-cultura-l1', 'lima-gamarra-l1', 'lima-miguel-grau-l1', 'lima-bayovar-l1'],
    estaciones: ['lima-villa-el-salvador-l1','lima-parque-industrial-l1','lima-via-expresa-l1','lima-pumacahua-l1','lima-av-ejercito-l1','lima-atocongo-l1','lima-san-juan-l1','lima-ayacucho-l1','lima-jorge-chavez-l1','lima-cabitos-l1','lima-san-francisco-l1','lima-daniel-a-carrion-l1','lima-miguel-grau-l1','lima-gamarra-l1','lima-la-cultura-l1','lima-angamos-l1','lima-arriola-l1','lima-naranjal-l1','lima-los-jardines-l1','lima-bayovar-l1'],
    ruta_1_dia: {
      titulo: 'Del sur a San Juan de Lurigancho por Lima',
      paradas: [
        { estacion: 'lima-gamarra-l1', actividad: 'Gamarra, el hub textil más grande de Perú (09:00)' },
        { estacion: 'lima-la-cultura-l1', actividad: 'Av. La Cultura, Parque Kennedy y Miraflores (11:00)' },
        { estacion: 'lima-angamos-l1', actividad: 'Surquillo y mercado gastronómico (13:00)' },
        { estacion: 'lima-bayovar-l1', actividad: 'San Juan de Lurigancho (16:00)' }
      ]
    },
    seo_title: 'Línea 1 Metro de Lima: Villa El Salvador a Bayóvar | 26 estaciones',
    meta_description: 'Guía completa de la Línea 1 del Metro de Lima. 26 estaciones de Villa El Salvador a Bayóvar. Gamarra, La Cultura, Miraflores y San Juan de Lurigancho.',
    h1: 'Línea 1 del Metro — Lima, Perú'
  },
  {
    id: 'L2',
    color: '#1B4FA6',
    colorNombre: 'Línea 2',
    inicio: 'Santa Anita',
    fin: 'Callao',
    total: 27,
    municipios: ['Lima', 'Callao', 'Santa Anita', 'Ate', 'Miraflores', 'Magdalena del Mar'],
    descripcion: 'La Línea 2 del Metro de Lima se encuentra en construcción parcial, siendo el proyecto de infraestructura más importante del Perú. Conectará el distrito de Ate (este) con el Callao (oeste), cruzando Lima de un extremo al otro. Pasará por Miraflores, Magdalena, Lima Centro y el aeropuerto. Es el mayor proyecto de transporte subterráneo del Perú, con apertura parcial estimada para 2026.',
    estaciones_turisticas: ['lima-dos-de-mayo-l2', 'lima-quilca-l2', 'lima-la-cultura-l2', 'lima-miraflores-centro-l2'],
    estaciones: ['lima-santa-anita-l2','lima-la-cultura-l2','lima-evitamiento-l2','lima-nicolas-arriola-l2','lima-morales-duarez-l2','lima-dos-de-mayo-l2','lima-quilca-l2','lima-brasil-l2','lima-benavides-l2','lima-miraflores-centro-l2','lima-angamos-l2','lima-reducto-l2','lima-la-marina-l2','lima-tomas-valle-l2','lima-naranjal-l2','lima-izaguirre-l2','lima-colonial-l2','lima-habich-l2','lima-rosa-navarro-l2','lima-hospital-sabogal-l2','lima-santa-rosa-l2','lima-gambetta-l2'],
    ruta_1_dia: {
      titulo: 'De Ate a Callao: Lima de costa a costa',
      paradas: [
        { estacion: 'lima-santa-anita-l2', actividad: 'Santa Anita, terminal este (09:00)' },
        { estacion: 'lima-dos-de-mayo-l2', actividad: 'Hospital Dos de Mayo y centro histórico (10:00)' },
        { estacion: 'lima-quilca-l2', actividad: 'Jirón de la Unión y Plaza Mayor (11:30)' },
        { estacion: 'lima-miraflores-centro-l2', actividad: 'Miraflores, Larcomar y el Pacífico (14:00)' },
        { estacion: 'lima-gambetta-l2', actividad: 'Callao y Puerto del Pacífico (17:00)' }
      ]
    },
    seo_title: 'Línea 2 Metro de Lima: Santa Anita a Callao | En construcción',
    meta_description: 'Línea 2 del Metro de Lima, en construcción. Conectará Ate con el Callao pasando por Miraflores y el centro histórico. El mayor proyecto de metro del Perú.',
    h1: 'Línea 2 del Metro — Lima (en construcción)'
  }
];
