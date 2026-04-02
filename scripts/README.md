# Scripts — MetroGuia.mx

## generate-pages.js

Script Node.js para enriquecer automáticamente las estaciones de metro de CDMX, GDL y MTY con Claude API.

### Qué enriquece

El script genera automáticamente:
- **Descripción turística**: texto de 2-3 líneas sobre la importancia y atractivos de la estación
- **Lugares cercanos**: lista de POIs con distancia a pie y descripción breve
- **Horarios**: horarios de apertura/cierre por día de la semana
- **Accesibilidad**: información sobre silla de ruedas, elevadores, rampas, baños accesibles

### Características

✅ **Multi-ciudad**: procesa CDMX, Guadalajara (GDL) y Monterrey (MTY)  
✅ **Rate limiting**: máx 10 requests/min (6 segundos entre requests)  
✅ **Resume**: salta estaciones que ya tienen descripción (permite retomar después de interrupciones)  
✅ **Manejo de errores**: reporta problemas sin detener el flujo  
✅ **Persistencia**: escribe resultados directamente a los archivos data/

### Instalación

1. Instalar dependencias:
```bash
npm install
```

### Uso

```bash
# Procesar todas las ciudades
node scripts/generate-pages.js

# Procesar solo CDMX
node scripts/generate-pages.js cdmx

# Procesar solo Guadalajara
node scripts/generate-pages.js gdl

# Procesar solo Monterrey
node scripts/generate-pages.js mty

# Procesar múltiples ciudades
node scripts/generate-pages.js cdmx gdl mty
```

### Ejemplo de ejecución

```
═══════════════════════════════════════════════════════════
🚇 MetroGuia.mx — Enriquecimiento de estaciones con Claude
═══════════════════════════════════════════════════════════
⚙️  Modelo: claude-3-5-sonnet-20241022
⏱️  Rate limit: 6s entre requests (max 10 req/min)
🔄 Resume: salta estaciones ya enriquecidas

📍 CIUDAD DE MÉXICO
   Leyendo: data/estaciones.js
   📊 Total estaciones: 195
   ⏳ Estaciones para enriquecer: 42
  [1/195] 🤖 Observatorio — enriqueciendo...
  [1/195] ✅ Observatorio — completado
  [2/195] ⏭️  Juanacatlán — ya enriquecido, saltando
  ...
   💾 Escribiendo 42 estaciones enriquecidas...
   ✅ Guardado: data/estaciones.js

═══════════════════════════════════════════════════════════
✅ Enriquecimiento completado
═══════════════════════════════════════════════════════════
```

### Variables de entorno

Se requiere la API key de Anthropic. Configurarla:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

O crear `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-...
```

### Cómo funciona

1. **Lee el archivo de datos** de cada ciudad
2. **Itera sobre estaciones** saltando las que ya tengan `descripcion_turistica`
3. **Genera prompt contextual** con info de la estación (nombre, línea, zona, POIs existentes)
4. **Llama Claude API** con el modelo Sonnet 3.5 (rápido, confiable)
5. **Extrae JSON** de la respuesta
6. **Merge de datos** enriquecidos en la estación
7. **Escribe archivo actualizado** manteniendo la estructura original

### Rate limiting

Para no exceder los limits de API:
- **6 segundos entre requests** (máx 10 requests/min)
- El script respeta esto automáticamente
- Ejemplo: 42 estaciones ≈ 4-5 minutos

### Resume capability

Si el script se interrumpe (Ctrl+C, error de API, etc.):
1. Vuelve a ejecutar el mismo comando
2. El script saltará estaciones que ya tienen `descripcion_turistica`
3. Solo procesará las que faltan

Esto permite retomar sin duplicar trabajo.

### Manejo de errores

- Si hay error en una estación, se reporta y continúa con la siguiente
- Los errores se loguean con contexto: `[index/total] ❌ nombre — error: descripción`
- El script NO se detiene por un error individual

### Estructura de datos enriquecidos

La estación final incluye:

```javascript
{
  slug: "observatorio",
  nombre: "Observatorio",
  linea: "1",
  alcaldia: "Álvaro Obregón",
  tipo_zona: "residencial",
  pois: [...],
  // NUEVO: enriquecimiento
  descripcion_turistica: "...",
  lugares_cercanos: [
    { nombre: "...", tipo: "...", distancia: "...", descripcion: "..." }
  ],
  horarios: {
    lunes_viernes: "05:30 - 23:00",
    sabado: "06:00 - 23:30",
    domingo: "07:00 - 22:00",
    notas: "..."
  },
  accesibilidad: {
    silla_ruedas: true,
    elevadores: true,
    rampas: false,
    banos_accesibles: true,
    notas: "..."
  },
  // RESTO: campos originales
  seo_title: "...",
  meta_description: "...",
  h1: "...",
  intro: "...",
  tips: [...]
}
```

### Modelo y configuración

- **Modelo**: `claude-3-5-sonnet-20241022` (rápido, económico, buena calidad)
- **Max tokens**: 500 (suficiente para el JSON de respuesta)
- **Temperature**: default (0.5 para balance)

### Troubleshooting

**Error: "No se encontró export estacionesGDL"**
- Revisar que el archivo data/gdl/estaciones.js exista
- Revisar que tenga `export const estacionesGDL = [...]`

**Error: "ANTHROPIC_API_KEY not set"**
- Exportar la variable: `export ANTHROPIC_API_KEY="sk-ant-..."`
- O crear `.env.local` con la clave

**Error: "No JSON found in response"**
- La respuesta de Claude no contiene JSON válido
- Revisión en logs, intenta nuevamente (a veces es un timeout)

**El script avanza muy lentamente**
- Es normal: 6 segundos entre requests por rate limiting
- 195 estaciones × 6s ≈ 19 minutos (pero si la mayoría ya están enriquecidas, menos)

### Próximos pasos

- Extender enriquecimiento con más campos (fotos, videos, horarios de eventos)
- Integrar con caching para no re-procesar innecesariamente
- Agregar validación de datos enriquecidos (formato, completitud)
- Soporte para más ciudades (León, Mérida, Puebla, Querétaro, Tijuana, Toluca, Chihuahua)

---

## gtfs-to-metroguia.js

Script Node.js para convertir automáticamente feeds GTFS públicos de transporte en archivos de datos MetroGuia.

### Qué genera

El script convierte datos GTFS en 3 archivos MetroGuia:
- **estaciones.js** — Estaciones con slugs, nombres, líneas y coordenadas
- **lineas-detalle.js** — Líneas con colores, listas de estaciones y conteos
- **grafo.js** — Grafo de adyacencia BFS con tiempos de viaje

### Características

✅ **Multi-fuente**: descarga de URL o archivo local
✅ **Parsing GTFS completo**: stops, routes, trips, stop_times, transfers
✅ **Slugificación automática**: `{city}-{station-normalized}`
✅ **Cálculo de tiempos**: desde stop_times.txt (diferencias entre paradas consecutivas)
✅ **Detección de transbordo**: desde transfers.txt o paradas en misma ubicación
✅ **Validación**: sin nodos huérfanos, edges bidireccionales verificadas
✅ **Estadísticas**: resumen de estaciones, líneas, conexiones, tiempo promedio
✅ **Manejo de errores**: malformaciones GTFS reportadas sin detener el flujo

### Instalación

No requiere dependencias externas. Solo usa módulos built-in de Node.js y `unzip` del sistema (disponible en todos los sistemas Unix/Linux/macOS).

```bash
# Verificar que unzip está disponible
which unzip

# En Ubuntu/Debian (si es necesario)
sudo apt-get install unzip

# En macOS (ya viene incluido)
unzip -v
```

### Uso

```bash
# Descargar desde URL
node scripts/gtfs-to-metroguia.js --url https://example.com/gtfs.zip --city nyc --country US

# Usar archivo local
node scripts/gtfs-to-metroguia.js --file local/gtfs.zip --city boston --country US
```

### Ejemplo de ejecución

```
═══════════════════════════════════════════════════════════
🚇 MetroGuia GTFS Converter
═══════════════════════════════════════════════════════════
🏙️  City: NYC (US)

⬇️  Downloading from https://...
  ✅ Downloaded to /tmp/gtfs-nyc-...

📦 Extracting...
  ✅ Extracted to /tmp/gtfs-nyc-.../gtfs

📍 Parsing GTFS files...
  ✅ stops.txt: 472 records
  ✅ routes.txt: 16 records
  ✅ trips.txt: 8,234 records
  ✅ stop_times.txt: 645,980 records
  ✅ transfers.txt: 487 records

🚉 Building station data...
  ✅ Indexed 472 stops
  ✅ Indexed 16 routes

🚌 Building line data...
  ✅ Prepared 16 lines

🔗 Building adjacency graph...
  ✅ Graph: 472 nodes, 1,847 edges

💾 Writing estaciones.js...
  ✅ Wrote 472 stations to data/nyc/estaciones.js

💾 Writing lineas-detalle.js...
  ✅ Wrote 16 lines to data/nyc/lineas-detalle.js

💾 Writing grafo.js...
  ✅ Wrote grafo to data/nyc/grafo.js

✓ Validating graph...
  ✅ Graph validation complete

═══════════════════════════════════════════════════════════
✅ GTFS CONVERSION COMPLETE
═══════════════════════════════════════════════════════════
📊 Stations: 472
🚌 Lines: 16
🔗 Graph nodes: 472
   Edges: 1,847
   Avg travel time: 3.2 min
═══════════════════════════════════════════════════════════

🧹 Cleaning up temporary files...
  ✅ Cleanup complete
```

### Archivos GTFS parseados

| Archivo | Campos extraídos | Uso |
|---------|------------------|-----|
| `stops.txt` | stop_id, stop_name, stop_lat, stop_lon | Data de estaciones |
| `routes.txt` | route_id, route_short_name, route_long_name, route_color | Metadata de líneas |
| `trips.txt` | trip_id, route_id | Patrón de viajes |
| `stop_times.txt` | trip_id, stop_id, stop_sequence, arrival_time | Secuencia y tiempos |
| `transfers.txt` | from_stop_id, to_stop_id, min_transfer_time | Transbordos |

### GTFS Sources

Ver `gtfs-sources.json` para URLs de feeds de 13 ciudades US/Canada:
- NYC (MTA), Los Angeles (Metro), Chicago (CTA), Boston (MBTA)
- Washington DC (WMATA), Denver (RTD), Philadelphia (SEPTA), Houston (Metro)
- Seattle (Sound Transit), Atlanta (MARTA), Miami (Miami-Dade Transit)
- Toronto (TTC), Vancouver (TransLink), Montreal (STM)

**Estructura de gtfs-sources.json:**
```json
{
  "nyc": {
    "name": "New York City",
    "feed_url": "...",
    "agency": "MTA New York City Transit",
    "country": "US",
    "system": "Subway & Bus",
    "notes": "..."
  }
}
```

### Integración con pipeline MetroGuia

Para automatizar conversión de ciudades nuevas:

```bash
# 1. Agregar entrada a gtfs-sources.json
# 2. Ejecutar conversión
node scripts/gtfs-to-metroguia.js --url $(node -e "console.log(require('./gtfs-sources.json').nyc.feed_url)") --city nyc --country US

# 3. Enriquecer estaciones con Claude
node scripts/generate-pages.js nyc

# 4. Verificar grafo y validar
npm test  # (si hay tests)
```

### Formato de datos generados

**estaciones.js:**
```javascript
export const estacionesNyc = [
  {
    slug: "nyc-grand-central-terminal",
    nombre: "Grand Central Terminal",
    linea: ["4", "5", "6"],  // líneas GTFS
    lat: 40.7527,
    lon: -73.9772,
    tipo_zona: "transporte",
    pois: []
  }
];
```

**lineas-detalle.js:**
```javascript
export const lineasNyc = [
  {
    id: "4",
    color: "#00933C",
    colorNombre: "Verde",
    inicio: "Bowling Green",
    fin: "Woodlawn",
    total: 23,
    municipios: ["Manhattan", "Bronx"],
    descripcion: "Línea 4. Lexington Avenue Line",
    estaciones: ["nyc-bowling-green", ...],
    estaciones_turisticas: [...]
  }
];
```

**grafo.js:**
```javascript
export const grafoNyc = {
  'nyc-grand-central': {
    ciudad: 'nyc',
    nombre: 'Grand Central Terminal',
    lineas: ['4', '5', '6'],
    adyacentes: [
      { slug: 'nyc-33rd-street', tiempo: 3, linea: '4', tipo: 'transporte' },
      { slug: 'nyc-times-square', tiempo: 2, linea: 'transfer', tipo: 'transbordo' }
    ]
  }
};
```

### Algoritmo de construcción de grafo

1. **Indexación de paradas**: map stop_id → slug, nombre, lat/lon
2. **Ordenamiento**: agrupar stop_times por trip_id, ordenar por stop_sequence
3. **Cálculo de tiempos**: diferencia de arrival_time entre paradas consecutivas
4. **Deduplicación de edges**: mantener tiempo más corto si existen duplicados
5. **Transbordos**: agregar desde transfers.txt con min_transfer_time convertido a minutos
6. **Validación**: no nodos huérfanos, referencias válidas, warnings para edges unidireccionales

### Validación

El script verifica automáticamente:
- ✅ No hay nodos en grafo sin estaciones (orphans)
- ✅ Todas las referencias en adyacentes apuntan a nodos existentes
- ℹ️ Reporta edges unidireccionales (info, no error)

### Troubleshooting

**Error: "HTTP 404: Not Found"**
- Verificar que feed_url en gtfs-sources.json sea correcto
- Algunos feeds requieren autenticación o parámetros adicionales

**Error: "GTFS file format invalid"**
- El ZIP no contiene los archivos GTFS esperados
- Verificar estructura: stops.txt, routes.txt, trips.txt, stop_times.txt

**Grafo con muchos one-way edges**
- Normal en algunas agencias
- Si > 10% de edges: revisar si feeds de distintos proveedores (bus vs rail)

**Slug duplicados**
- Si dos estaciones tienen mismo nombre normalizado
- Script hace único agregando sufijo (manual review recomendado)

### Performance

| Tamaño | Tiempo esperado |
|--------|-----------------|
| ~200 stops | < 5 seg |
| ~500 stops | 10-30 seg |
| ~1000 stops | 1-3 min |
| ~2000+ stops | 5+ min |

La mayoría del tiempo está en parsing CSV y construcción de grafo.

### Próximos pasos

- Soporte para GTFS-Realtime (arrivals en vivo)
- Aggregación de múltiples feeds por ciudad (ej: subway + bus)
- Validación GTFS más robusta (check fields, formatos de hora)
- Export a otros formatos (GeoJSON, GraphQL schema)
- Integración con propietarios de datos para URLs versionadas
