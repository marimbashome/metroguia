/**
 * Tren Ligero Xochimilco — MetroGuia.mx
 * Sistema de transporte que conecta Tasqueña con Xochimilco
 * 18 estaciones, 13 km, operado por STE
 */

export const trenLigeroData = {
  sistema: 'Tren Ligero',
  ciudad: 'cdmx',
  slug: 'tren-ligero',
  color: '#FFD700',
  colorNombre: 'Dorado',
  icono: '🚊',
  costo: { min: 3, max: 3, moneda: 'MXN', nota: 'Tarifa única. Acepta Tarjeta de Movilidad Integrada.' },
  horario: { apertura: '05:00', cierre: '00:00', frecuencia: '5-10 min' },
  descripcion: 'El Tren Ligero conecta la estación Tasqueña del Metro con Xochimilco, recorriendo 13 km al sur de la ciudad. Es la ruta principal para visitar las trajineras de Xochimilco y llegar al Estadio Azteca.',
  lineas: {
    'TL': {
      id: 'TL',
      nombre: 'Tren Ligero',
      color: '#FFD700',
      colorNombre: 'Dorado',
      inicio: 'Tasqueña',
      fin: 'Xochimilco',
      total: 18,
      zonas: ['Coyoacán', 'Tlalpan', 'Xochimilco'],
      descripcion: 'Línea única del Tren Ligero que recorre el sur de CDMX desde la terminal del Metro en Tasqueña hasta Xochimilco. Pasa por el Estadio Azteca, sede del Mundial FIFA 2026.',
      estaciones_turisticas: ['tasquena-tl', 'estadio-azteca-tl', 'xochimilco-tl'],
      estaciones: [
        { slug: 'tasquena-tl', nombre: 'Tasqueña' },
        { slug: 'las-torres-tl', nombre: 'Las Torres' },
        { slug: 'ciudad-jardin-tl', nombre: 'Ciudad Jardín' },
        { slug: 'la-virgen-tl', nombre: 'La Virgen' },
        { slug: 'xotepingo-tl', nombre: 'Xotepingo' },
        { slug: 'nezahualpilli-tl', nombre: 'Nezahualpilli' },
        { slug: 'registro-federal-tl', nombre: 'Registro Federal' },
        { slug: 'textitlan-tl', nombre: 'Textitlán' },
        { slug: 'el-vergel-tl', nombre: 'El Vergel' },
        { slug: 'estadio-azteca-tl', nombre: 'Estadio Azteca' },
        { slug: 'huipulco-tl', nombre: 'Huipulco' },
        { slug: 'xomali-tl', nombre: 'Xomali' },
        { slug: 'periferico-tl', nombre: 'Periférico' },
        { slug: 'tepepan-tl', nombre: 'Tepepan' },
        { slug: 'la-noria-tl', nombre: 'La Noria' },
        { slug: 'huichapan-tl', nombre: 'Huichapan' },
        { slug: 'francisco-goitia-tl', nombre: 'Francisco Goitia' },
        { slug: 'xochimilco-tl', nombre: 'Xochimilco' }
      ],
      ruta_1_dia: {
        titulo: 'Un día en el Tren Ligero: de Tasqueña a Xochimilco',
        paradas: [
          { estacion: 'Tasqueña', actividad: 'Transbordo desde Metro L2. Inicio del recorrido', duracion: '10 min' },
          { estacion: 'Estadio Azteca', actividad: 'Visitar el Estadio Azteca y el Museo del Fútbol', duracion: '2 horas' },
          { estacion: 'Xochimilco', actividad: 'Paseo en trajineras por los canales de Xochimilco', duracion: '3 horas' }
        ]
      },
      seo_title: 'Tren Ligero Xochimilco — Estaciones, Ruta al Estadio Azteca | MetroGuia',
      meta_description: 'Guía del Tren Ligero Xochimilco: 18 estaciones desde Tasqueña. Cómo llegar al Estadio Azteca, trajineras de Xochimilco, horarios y tarifas.',
      h1: 'Tren Ligero Xochimilco — Guía completa'
    }
  },
  estaciones: [
    { slug: 'tasquena-tl', nombre: 'Tasqueña', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3441, lng: -99.1412, conexiones_metro: ['taxquena'], descripcion_turistica: 'Terminal norte del Tren Ligero. Conexión directa con Metro Línea 2 (estación Tasqueña). Principal punto de acceso al Tren Ligero desde el resto de la red de Metro.' },
    { slug: 'las-torres-tl', nombre: 'Las Torres', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3380, lng: -99.1412, conexiones_metro: [], descripcion_turistica: 'Estación residencial en la zona sur de Coyoacán.' },
    { slug: 'ciudad-jardin-tl', nombre: 'Ciudad Jardín', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3320, lng: -99.1412, conexiones_metro: [], descripcion_turistica: 'Zona residencial con jardines y parques cercanos.' },
    { slug: 'la-virgen-tl', nombre: 'La Virgen', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3260, lng: -99.1416, conexiones_metro: [], descripcion_turistica: 'Estación cercana al barrio de La Virgen en Coyoacán sur.' },
    { slug: 'xotepingo-tl', nombre: 'Xotepingo', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3210, lng: -99.1416, conexiones_metro: [], descripcion_turistica: 'Zona residencial de Xotepingo, cercana al Parque Ecológico Huayamilpas.' },
    { slug: 'nezahualpilli-tl', nombre: 'Nezahualpilli', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3160, lng: -99.1416, conexiones_metro: [], descripcion_turistica: 'Estación en zona residencial, nombrada por el tlatoani de Texcoco.' },
    { slug: 'registro-federal-tl', nombre: 'Registro Federal', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3110, lng: -99.1420, conexiones_metro: [], descripcion_turistica: 'Cercana a oficinas del Registro Federal de Electores.' },
    { slug: 'textitlan-tl', nombre: 'Textitlán', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3060, lng: -99.1420, conexiones_metro: [], descripcion_turistica: 'Zona residencial y comercial del sur de Coyoacán.' },
    { slug: 'el-vergel-tl', nombre: 'El Vergel', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Tlalpan', lat: 19.3006, lng: -99.1420, conexiones_metro: [], descripcion_turistica: 'Entrada a la zona de El Vergel, con mercados y comercio local.' },
    { slug: 'estadio-azteca-tl', nombre: 'Estadio Azteca', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Coyoacán', lat: 19.3029, lng: -99.1506, conexiones_metro: [], descripcion_turistica: 'Estación más cercana al Estadio Azteca, sede del Mundial FIFA 2026. El estadio está a 10 min caminando. Ruta: Metro L2 → Tasqueña → Tren Ligero → esta estación.' },
    { slug: 'huipulco-tl', nombre: 'Huipulco', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Tlalpan', lat: 19.2950, lng: -99.1520, conexiones_metro: [], descripcion_turistica: 'Cercana al Hospital General de Zona y la zona de Huipulco.' },
    { slug: 'xomali-tl', nombre: 'Xomali', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Tlalpan', lat: 19.2895, lng: -99.1530, conexiones_metro: [], descripcion_turistica: 'Zona residencial del sur de Tlalpan.' },
    { slug: 'periferico-tl', nombre: 'Periférico', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Tlalpan', lat: 19.2840, lng: -99.1540, conexiones_metro: [], descripcion_turistica: 'Estación en el cruce con Anillo Periférico Sur. Acceso a zona comercial.' },
    { slug: 'tepepan-tl', nombre: 'Tepepan', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Xochimilco', lat: 19.2780, lng: -99.1543, conexiones_metro: [], descripcion_turistica: 'Primera estación en Xochimilco. Cercana al Museo Dolores Olmedo, con obras de Diego Rivera y Frida Kahlo.' },
    { slug: 'la-noria-tl', nombre: 'La Noria', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Xochimilco', lat: 19.2720, lng: -99.1546, conexiones_metro: [], descripcion_turistica: 'Acceso a la zona de La Noria, con embarcaderos alternativos menos turísticos.' },
    { slug: 'huichapan-tl', nombre: 'Huichapan', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Xochimilco', lat: 19.2670, lng: -99.1546, conexiones_metro: [], descripcion_turistica: 'Zona residencial de Xochimilco, cercana a chinampas tradicionales.' },
    { slug: 'francisco-goitia-tl', nombre: 'Francisco Goitia', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Xochimilco', lat: 19.2630, lng: -99.1560, conexiones_metro: [], descripcion_turistica: 'Nombrada por el pintor mexicano. Cercana al centro de Xochimilco.' },
    { slug: 'xochimilco-tl', nombre: 'Xochimilco', linea: 'TL', sistema: 'tren-ligero', alcaldia: 'Xochimilco', lat: 19.2597, lng: -99.1058, conexiones_metro: [], descripcion_turistica: 'Terminal del Tren Ligero. A 10 min caminando de los embarcaderos de Xochimilco. Las trajineras son Patrimonio de la Humanidad UNESCO.' }
  ]
};