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
