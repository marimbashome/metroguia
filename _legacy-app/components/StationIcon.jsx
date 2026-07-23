// =============================================================
// MetroGuia.mx — app/components/StationIcon.jsx
//
// Renderiza el ícono oficial de cada estación del Metro CDMX
// usando la icon font del proyecto open-source yorkfx/icons-metro-df
// (cargada vía CDN en app/layout.jsx)
//
// Uso:
//   <StationIcon slug="chapultepec" size={48} color="#0057A8" />
//   <StationIcon slug="bellas-artes" size={32} />
//   <StationIcon slug="tasquena" size={64} lineColor />
// =============================================================

// Mapa de slugs del proyecto → nombres de clase del repo yorkfx
// La mayoría coincide directamente; este objeto solo cubre las excepciones
const SLUG_MAP = {
  // Espacios/variaciones conocidas
  'zocalo':               'zocalo',          // confirmado en el CSS
  'tasquena':             'tasquena',
  'pino-suarez':          'pino-suarez',
  'indios-verdes':        'indios-verdes',
  'cuatro-caminos':       'cuatro-caminos',
  'el-rosario':           'el-rosario',
  'pantitlan':            'pantitlan',
  'bellas-artes':         'bellas-artes',
  'insurgentes':          'insurgentes',
  'chapultepec':          'chapultepec',
  'observatorio':         'observatorio',
  'terminal-aerea':       'terminal-aerea',
  // Línea 12
  'tlahuac':              'tlahuac',
  'periferico-oriente':   'periferico-oriente',
  'calle-11':             'calle-11',
  'lomas-estrella':       'lomas-estrella',
  'san-andres-tomatlan':  'san-andres-tomatlan',
  'culhuacan':            'culhuacan',
  'atlalilco':            'atlalilco',
  'mexicaltzingo':        'mexicaltzingo',
  'ermita':               'ermita',
  'eje-central':          'eje-central',
  'parque-de-los-venados':'parque-de-los-venados',
  'zapata':               'zapata',
  'perisur':              'perisur',
  'olivos':               'olivos',
  'ninos-heroes':         'ninos-heroes',
};

/**
 * Colores oficiales de cada línea (usados cuando lineColor=true)
 */
const LINE_COLORS = {
  '1':  '#E91E8C',
  '2':  '#0057A8',
  '3':  '#6B7A2A',
  '4':  '#00B5C8',
  '5':  '#FFCD00',
  '6':  '#DA291C',
  '7':  '#F97316',
  '8':  '#00A650',
  '9':  '#6B3A2A',
  'A':  '#7C3AED',
  'B':  '#9E9E9E',
  '12': '#C9A84C',
};

/**
 * StationIcon
 *
 * @param {string}  slug      - Slug de la estación (igual que en data/estaciones.js)
 * @param {number}  size      - Tamaño en px (default 40)
 * @param {string}  color     - Color CSS directo (default 'inherit')
 * @param {string}  linea     - Si se pasa, aplica el color de esa línea automáticamente
 * @param {boolean} block     - Si true, muestra como bloque centrado con background redondeado
 * @param {string}  bgColor   - Color de fondo cuando block=true
 */
export default function StationIcon({
  slug,
  size = 40,
  color,
  linea,
  block = false,
  bgColor,
}) {
  // Resolver la clase CSS: primero buscar en el mapa, si no usar el slug directo
  const iconClass = `estacion-${SLUG_MAP[slug] || slug}`;

  // Resolver color: prioridad → color prop > linea prop > 'inherit'
  const resolvedColor = color || (linea ? LINE_COLORS[String(linea)] : 'inherit');

  // Modo bloque (ícono con fondo circular/redondeado, ideal para heroes)
  if (block) {
    const bg = bgColor || resolvedColor || '#111';
    return (
      <span
        aria-hidden="true"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width:  size * 1.6,
          height: size * 1.6,
          borderRadius: '50%',
          background: bg,
          flexShrink: 0,
        }}
      >
        <i
          className={iconClass}
          style={{
            fontSize: size,
            color: 'white',
            lineHeight: 1,
            fontStyle: 'normal',
          }}
        />
      </span>
    );
  }

  // Modo inline (ícono solo)
  return (
    <i
      className={iconClass}
      aria-hidden="true"
      style={{
        fontSize: size,
        color: resolvedColor,
        lineHeight: 1,
        fontStyle: 'normal',
        display: 'inline-block',
        flexShrink: 0,
      }}
    />
  );
}
