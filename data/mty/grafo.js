/**
 * Grafo de transporte público de Monterrey (MTY) para MetroGuia.mx
 * Sistema Metrorrey (L1, L2, L3) + Ecovía BRT
 * 
 * 83 nodos totales
 * L1: 19 estaciones | L2: 13 estaciones | L3: 9 estaciones | Ecovía: 42 estaciones
 * 
 * Transbordos:
 * - L1 ↔ L2: Cuauhtémoc
 * - L1 ↔ L3: Félix U. Gómez
 * - L2 ↔ L3: General I. Zaragoza
 * - Ecovía ↔ L1: Mitras
 * - Ecovía ↔ L2: Regina
 * - Ecovía ↔ L3: Ruiz Cortines
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'mty',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('linea' | 'brt' | 'transbordo') }]
 * }
 */

export const grafoMTY = {
  // ============================================
  // LÍNEA 1 METRORREY (Amarillo) - 19 estaciones
  // ============================================
  'talleres': {
    ciudad: 'mty',
    nombre: 'Talleres',
    lineas: ['1'],
    adyacentes: [
      { slug: 'san-bernabe', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'san-bernabe': {
    ciudad: 'mty',
    nombre: 'San Bernabé',
    lineas: ['1'],
    adyacentes: [
      { slug: 'talleres', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'unidad-modelo', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'unidad-modelo': {
    ciudad: 'mty',
    nombre: 'Unidad Modelo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'san-bernabe', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'aztlan', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'aztlan': {
    ciudad: 'mty',
    nombre: 'Aztlán',
    lineas: ['1'],
    adyacentes: [
      { slug: 'unidad-modelo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'penitenciaria', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'penitenciaria': {
    ciudad: 'mty',
    nombre: 'Penitenciaría',
    lineas: ['1'],
    adyacentes: [
      { slug: 'aztlan', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'alfonso-reyes', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'alfonso-reyes': {
    ciudad: 'mty',
    nombre: 'Alfonso Reyes',
    lineas: ['1'],
    adyacentes: [
      { slug: 'penitenciaria', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mitras', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'mitras': {
    ciudad: 'mty',
    nombre: 'Mitras',
    lineas: ['1', 'ecovia'],
    adyacentes: [
      { slug: 'alfonso-reyes', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'simon-bolivar', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mitras-ecovia', tiempo: 5, linea: 'ecovia', tipo: 'transbordo' },
    ]
  },
  'simon-bolivar': {
    ciudad: 'mty',
    nombre: 'Simón Bolívar',
    lineas: ['1'],
    adyacentes: [
      { slug: 'mitras', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'hospital', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'hospital': {
    ciudad: 'mty',
    nombre: 'Hospital',
    lineas: ['1'],
    adyacentes: [
      { slug: 'simon-bolivar', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'edison', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'edison': {
    ciudad: 'mty',
    nombre: 'Edison',
    lineas: ['1'],
    adyacentes: [
      { slug: 'hospital', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'central', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'central': {
    ciudad: 'mty',
    nombre: 'Central',
    lineas: ['1'],
    adyacentes: [
      { slug: 'edison', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mty-cuauhtemoc', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'mty-cuauhtemoc': {
    ciudad: 'mty',
    nombre: 'Cuauhtémoc',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'central', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'del-golfo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'cuauhtemoc-l2', tiempo: 5, linea: '2', tipo: 'transbordo' },
    ]
  },
  'del-golfo': {
    ciudad: 'mty',
    nombre: 'Del Golfo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'mty-cuauhtemoc', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'felix-u-gomez', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'felix-u-gomez': {
    ciudad: 'mty',
    nombre: 'Félix U. Gómez',
    lineas: ['1', '3'],
    adyacentes: [
      { slug: 'del-golfo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'parque-fundidora', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'felix-u-gomez-l3', tiempo: 5, linea: '3', tipo: 'transbordo' },
    ]
  },
  'parque-fundidora': {
    ciudad: 'mty',
    nombre: 'Parque Fundidora',
    lineas: ['1'],
    adyacentes: [
      { slug: 'felix-u-gomez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'y-griega', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'y-griega': {
    ciudad: 'mty',
    nombre: 'Y Griega',
    lineas: ['1'],
    adyacentes: [
      { slug: 'parque-fundidora', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'eloy-cavazos', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'eloy-cavazos': {
    ciudad: 'mty',
    nombre: 'Eloy Cavazos',
    lineas: ['1'],
    adyacentes: [
      { slug: 'y-griega', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'lerdo-de-tejada', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'lerdo-de-tejada': {
    ciudad: 'mty',
    nombre: 'Lerdo de Tejada',
    lineas: ['1'],
    adyacentes: [
      { slug: 'eloy-cavazos', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'exposicion', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  'exposicion': {
    ciudad: 'mty',
    nombre: 'Exposición',
    lineas: ['1'],
    adyacentes: [
      { slug: 'lerdo-de-tejada', tiempo: 2, linea: '1', tipo: 'linea' },
    ]
  },
  // ============================================
  // LÍNEA 2 METRORREY (Verde) - 13 estaciones
  // ============================================
  'sendero': {
    ciudad: 'mty',
    nombre: 'Sendero',
    lineas: ['2'],
    adyacentes: [
      { slug: 'tapia', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'tapia': {
    ciudad: 'mty',
    nombre: 'Tapia',
    lineas: ['2'],
    adyacentes: [
      { slug: 'sendero', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-nicolas', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'san-nicolas': {
    ciudad: 'mty',
    nombre: 'San Nicolás',
    lineas: ['2'],
    adyacentes: [
      { slug: 'tapia', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'anahuac', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'anahuac': {
    ciudad: 'mty',
    nombre: 'Anáhuac',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-nicolas', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'mty-universidad', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'mty-universidad': {
    ciudad: 'mty',
    nombre: 'Universidad',
    lineas: ['2'],
    adyacentes: [
      { slug: 'anahuac', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'ninos-heroes', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'ninos-heroes': {
    ciudad: 'mty',
    nombre: 'Niños Héroes',
    lineas: ['2'],
    adyacentes: [
      { slug: 'mty-universidad', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'regina', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'regina': {
    ciudad: 'mty',
    nombre: 'Regina',
    lineas: ['2', 'ecovia'],
    adyacentes: [
      { slug: 'ninos-heroes', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'general-anaya', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'regina-ecovia', tiempo: 5, linea: 'ecovia', tipo: 'transbordo' },
    ]
  },
  'general-anaya': {
    ciudad: 'mty',
    nombre: 'General Anaya',
    lineas: ['2'],
    adyacentes: [
      { slug: 'regina', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'cuauhtemoc-l2', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'cuauhtemoc-l2': {
    ciudad: 'mty',
    nombre: 'Cuauhtémoc',
    lineas: ['2', '1'],
    adyacentes: [
      { slug: 'general-anaya', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'alameda', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'mty-cuauhtemoc', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  'alameda': {
    ciudad: 'mty',
    nombre: 'Alameda',
    lineas: ['2'],
    adyacentes: [
      { slug: 'cuauhtemoc-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'fundadores', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'fundadores': {
    ciudad: 'mty',
    nombre: 'Fundadores',
    lineas: ['2'],
    adyacentes: [
      { slug: 'alameda', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'padre-mier', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'padre-mier': {
    ciudad: 'mty',
    nombre: 'Padre Mier',
    lineas: ['2'],
    adyacentes: [
      { slug: 'fundadores', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'general-i-zaragoza', tiempo: 2, linea: '2', tipo: 'linea' },
    ]
  },
  'general-i-zaragoza': {
    ciudad: 'mty',
    nombre: 'General I. Zaragoza',
    lineas: ['2', '3'],
    adyacentes: [
      { slug: 'padre-mier', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'general-i-zaragoza-l3', tiempo: 5, linea: '3', tipo: 'transbordo' },
    ]
  },
  // ============================================
  // LÍNEA 3 METRORREY (Naranja) - 9 estaciones
  // ============================================
  'hospital-metropolitano': {
    ciudad: 'mty',
    nombre: 'Hospital Metropolitano',
    lineas: ['3'],
    adyacentes: [
      { slug: 'los-angeles', tiempo: 2, linea: '3', tipo: 'linea' },
    ]
  },
  'los-angeles': {
    ciudad: 'mty',
    nombre: 'Los Ángeles',
    lineas: ['3'],
    adyacentes: [
      { slug: 'hospital-metropolitano', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'ruiz-cortines', tiempo: 2, linea: '3', tipo: 'linea' },
    ]
  },
  'ruiz-cortines': {
    ciudad: 'mty',
    nombre: 'Ruiz Cortines',
    lineas: ['3', 'ecovia'],
    adyacentes: [
      { slug: 'los-angeles', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'moderna', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'ruiz-cortines-ecovia', tiempo: 5, linea: 'ecovia', tipo: 'transbordo' },
    ]
  },
  'moderna': {
    ciudad: 'mty',
    nombre: 'Moderna',
    lineas: ['3'],
    adyacentes: [
      { slug: 'ruiz-cortines', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'metalurgicos', tiempo: 2, linea: '3', tipo: 'linea' },
    ]
  },
  'metalurgicos': {
    ciudad: 'mty',
    nombre: 'Metalúrgicos',
    lineas: ['3'],
    adyacentes: [
      { slug: 'moderna', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'felix-u-gomez-l3', tiempo: 2, linea: '3', tipo: 'linea' },
    ]
  },
  'felix-u-gomez-l3': {
    ciudad: 'mty',
    nombre: 'Félix U. Gómez',
    lineas: ['3', '1'],
    adyacentes: [
      { slug: 'metalurgicos', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'colonia-obrera', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'felix-u-gomez', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  'colonia-obrera': {
    ciudad: 'mty',
    nombre: 'Colonia Obrera',
    lineas: ['3'],
    adyacentes: [
      { slug: 'felix-u-gomez-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'santa-lucia', tiempo: 2, linea: '3', tipo: 'linea' },
    ]
  },
  'santa-lucia': {
    ciudad: 'mty',
    nombre: 'Santa Lucía',
    lineas: ['3'],
    adyacentes: [
      { slug: 'colonia-obrera', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'general-i-zaragoza-l3', tiempo: 2, linea: '3', tipo: 'linea' },
    ]
  },
  'general-i-zaragoza-l3': {
    ciudad: 'mty',
    nombre: 'General I. Zaragoza',
    lineas: ['3', '2'],
    adyacentes: [
      { slug: 'santa-lucia', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'general-i-zaragoza', tiempo: 5, linea: '2', tipo: 'transbordo' },
    ]
  },
  // ============================================
  // ECOVÍA BRT - 42 estaciones
  // ============================================
  'lincoln': {
    ciudad: 'mty',
    nombre: 'Lincoln',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'astros', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'astros': {
    ciudad: 'mty',
    nombre: 'Astros',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'lincoln', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'cumbres', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'cumbres': {
    ciudad: 'mty',
    nombre: 'Cumbres',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'astros', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'plumbago', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'plumbago': {
    ciudad: 'mty',
    nombre: 'Plumbago',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'cumbres', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'plutarco-elias-calles', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'plutarco-elias-calles': {
    ciudad: 'mty',
    nombre: 'Plutarco Elías Calles',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'plumbago', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'embotelladora', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'embotelladora': {
    ciudad: 'mty',
    nombre: 'Embotelladora',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'plutarco-elias-calles', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'panteon-municipal', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'panteon-municipal': {
    ciudad: 'mty',
    nombre: 'Panteón Municipal',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'embotelladora', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'cardenal', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'cardenal': {
    ciudad: 'mty',
    nombre: 'Cardenal',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'panteon-municipal', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'valle-verde', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'valle-verde': {
    ciudad: 'mty',
    nombre: 'Valle Verde',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'cardenal', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'cardiologia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'cardiologia': {
    ciudad: 'mty',
    nombre: 'Cardiología',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'valle-verde', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'santa-cecilia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'santa-cecilia': {
    ciudad: 'mty',
    nombre: 'Santa Cecilia',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'cardiologia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'villa-mitras', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'villa-mitras': {
    ciudad: 'mty',
    nombre: 'Villa Mitras',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'santa-cecilia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'rangel-frias', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'rangel-frias': {
    ciudad: 'mty',
    nombre: 'Rangel Frías',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'villa-mitras', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'transito', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'transito': {
    ciudad: 'mty',
    nombre: 'Tránsito',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'rangel-frias', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'laredo', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'laredo': {
    ciudad: 'mty',
    nombre: 'Laredo',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'transito', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'rodrigo-gomez', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'rodrigo-gomez': {
    ciudad: 'mty',
    nombre: 'Rodrigo Gómez',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'laredo', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'mitras-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'mitras-ecovia': {
    ciudad: 'mty',
    nombre: 'Mitras',
    lineas: ['ecovia', '1'],
    adyacentes: [
      { slug: 'rodrigo-gomez', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'celulosa', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'mitras', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  'celulosa': {
    ciudad: 'mty',
    nombre: 'Celulosa',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'mitras-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'veinte-de-noviembre', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'veinte-de-noviembre': {
    ciudad: 'mty',
    nombre: 'Veinte de Noviembre',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'celulosa', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'hidalgo-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'hidalgo-ecovia': {
    ciudad: 'mty',
    nombre: 'Hidalgo',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'veinte-de-noviembre', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'bella-vista', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'bella-vista': {
    ciudad: 'mty',
    nombre: 'Bella Vista',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'hidalgo-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'regina-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'regina-ecovia': {
    ciudad: 'mty',
    nombre: 'Regina',
    lineas: ['ecovia', '2'],
    adyacentes: [
      { slug: 'bella-vista', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'asarco', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'regina', tiempo: 5, linea: '2', tipo: 'transbordo' },
    ]
  },
  'asarco': {
    ciudad: 'mty',
    nombre: 'Asarco',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'regina-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'cementos', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'cementos': {
    ciudad: 'mty',
    nombre: 'Cementos',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'asarco', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'ruiz-cortines-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'ruiz-cortines-ecovia': {
    ciudad: 'mty',
    nombre: 'Ruiz Cortines',
    lineas: ['ecovia', '3'],
    adyacentes: [
      { slug: 'cementos', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'clinica-15', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'ruiz-cortines', tiempo: 5, linea: '3', tipo: 'transbordo' },
    ]
  },
  'clinica-15': {
    ciudad: 'mty',
    nombre: 'Clínica 15',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'ruiz-cortines-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'coyoacan-mty', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'coyoacan-mty': {
    ciudad: 'mty',
    nombre: 'Coyoacán',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'clinica-15', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'churubusco', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'churubusco': {
    ciudad: 'mty',
    nombre: 'Churubusco',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'coyoacan-mty', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'vidriera', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'vidriera': {
    ciudad: 'mty',
    nombre: 'Vidriera',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'churubusco', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'las-americas', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'las-americas': {
    ciudad: 'mty',
    nombre: 'Las Américas',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'vidriera', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'adolfo-prieto', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'adolfo-prieto': {
    ciudad: 'mty',
    nombre: 'Adolfo Prieto',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'las-americas', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'central-de-carga', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'central-de-carga': {
    ciudad: 'mty',
    nombre: 'Central de Carga',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'adolfo-prieto', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'tauro', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'tauro': {
    ciudad: 'mty',
    nombre: 'Tauro',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'central-de-carga', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'miguel-aleman', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'miguel-aleman': {
    ciudad: 'mty',
    nombre: 'Miguel Alemán',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'tauro', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'calle-nueva', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'calle-nueva': {
    ciudad: 'mty',
    nombre: 'Calle Nueva',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'miguel-aleman', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'de-la-zanja', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'de-la-zanja': {
    ciudad: 'mty',
    nombre: 'De la Zanja',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'calle-nueva', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'aceros', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'aceros': {
    ciudad: 'mty',
    nombre: 'Aceros',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'de-la-zanja', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'guadalajara-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'guadalajara-ecovia': {
    ciudad: 'mty',
    nombre: 'Guadalajara',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'aceros', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'san-miguel-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'san-miguel-ecovia': {
    ciudad: 'mty',
    nombre: 'San Miguel',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'guadalajara-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'valle-fertil', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'valle-fertil': {
    ciudad: 'mty',
    nombre: 'Valle Fértil',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'san-miguel-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'movilidad-monterrey', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'movilidad-monterrey': {
    ciudad: 'mty',
    nombre: 'Movilidad Monterrey',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'valle-fertil', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
      { slug: 'valle-soleado', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
  'valle-soleado': {
    ciudad: 'mty',
    nombre: 'Valle Soleado',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'movilidad-monterrey', tiempo: 2, linea: 'ecovia', tipo: 'brt' },
    ]
  },
};
