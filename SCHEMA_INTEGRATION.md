# MetroGuia Route & Station JSON-LD Schema Integration

## Overview

Three new components have been created and integrated to provide comprehensive Schema.org structured data for SEO optimization of route and station pages.

## Created Components

### 1. RouteSchema.jsx
**Path:** `/app/components/RouteSchema.jsx`

Server component that generates JSON-LD structured data for transit routes. Outputs three complementary schemas:

#### Props:
- `origen` (string): Origin station name
- `destino` (string): Destination station name
- `pasos` (array): Array of station objects with `{ nombre, slug, linea }`
- `tiempoTotal` (number): Estimated duration in minutes
- `costoTotal` (string): Cost in MXN (default: '6')
- `transbordos` (number): Number of transfers/connections
- `lineas_usadas` (array): Array of metro line IDs used
- `slug` (string): Route slug for URL generation

#### Output Schemas:
1. **Trip Schema** (@type: 'Trip')
   - Includes full itinerary with all stations
   - Cost information
   - Duration in ISO 8601 format (PT30M)
   - Provider (Metro CDMX)
   - Number of stops and transfers

2. **Route Schema** (@type: 'Route')
   - Start/end points
   - Complete stops array
   - Potential action for route planning

3. **BreadcrumbList Schema**
   - Navigation context (Inicio → Rutas → Specific Route)

#### Usage in page.jsx:
```jsx
import RouteSchema from '@/app/components/RouteSchema'

export default function RutaPage({ params }) {
  // Calculate route server-side
  const resultado = findRoute(origen, destino)
  
  return (
    <>
      {rutaSchema && (
        <RouteSchema 
          origen="Zócalo"
          destino="Estadio Azteca"
          pasos={resultado.pasos}
          tiempoTotal={45}
          costoTotal="6"
          transbordos={1}
          lineas_usadas={['2', '9']}
          slug="zocalo-a-estadio-azteca"
        />
      )}
      <RutaClient slug={params.slug} />
    </>
  )
}
```

### 2. StationSchema.jsx
**Path:** `/app/components/StationSchema.jsx`

Server component for station pages. Outputs three complementary schemas for comprehensive station information:

#### Props:
- `station` (string): Station name
- `city` (string): City name
- `sistema` (string): Transit system name (e.g., "Metro CDMX", "Metrobús")
- `slug` (string): Station slug for URL generation
- `lines` (array, optional): Array of line IDs serving this station
- `accessibility` (object, optional): Accessibility features
  - `wheelchair` (boolean): Wheelchair accessible
  - `escalators` (boolean): Has escalators
  - `elevators` (boolean): Has elevators
- `address` (string, optional): Station address

#### Output Schemas:
1. **TrainStation/BusStation Schema**
   - Correct type based on `sistema` parameter
   - Identifier and URL
   - Address information
   - Served transit lines
   - Accessibility features
   - Amenities

2. **LocalBusiness Schema**
   - Practical station information
   - Area served
   - Action for planning routes

3. **BreadcrumbList Schema**
   - Navigation context with city level

#### Usage in station pages:
```jsx
import StationSchema from '@/app/components/StationSchema'

export default function EstacionPage({ estacion }) {
  return (
    <>
      <StationSchema 
        station="Zócalo"
        city="CDMX"
        sistema="Metro CDMX"
        slug="zocalo"
        lines={['1', '2']}
        accessibility={{
          wheelchair: true,
          escalators: true,
          elevators: true
        }}
        address="Plaza de la Constitución, Centro, CDMX"
      />
      {/* Station content */}
    </>
  )
}
```

## Integration in page.jsx

The route page (`/app/ruta/[slug]/page.jsx`) has been updated to:

1. **Import necessary dependencies:**
   - `findRoute` from pathfinder library
   - `grafo` station data
   - `RouteSchema` component

2. **Calculate route server-side:**
   - Validates slug format
   - Finds optimal route using existing pathfinder logic
   - Extracts schema data without duplicating client-side calculations

3. **Render schemas before client component:**
   - Ensures JSON-LD is in `<head>` before interactive content
   - Maintains separation of concerns (server schema generation vs client interactivity)

## Schema Quality & SEO Benefits

### Trip Schema
- Google Rich Results for transit directions
- Better visibility in Google Maps and search results
- Includes estimated time, cost, and transfer count

### Route Schema
- Alternative representation for route planning
- Multiple stops with individual URLs
- Call-to-action for planning routes

### TrainStation/BusStation Schema
- Enhanced knowledge panel in search results
- Transit line information
- Accessibility details
- Local business context

### BreadcrumbList
- Improves site navigation visibility in search
- Proper URL hierarchy
- Better breadcrumb SERP display

## Data Flow

```
Route Page Load
├─ Server Component (RutaPage)
│  ├─ Validates slug format
│  ├─ Calls findRoute() with origen/destino
│  ├─ Extracts pasos, tiempoTotal, transbordos
│  └─ Renders RouteSchema with calculated data
│
└─ Client Component (RutaClient)
   ├─ Re-calculates route for interactive display
   ├─ Renders UI with SearchBar, RouteResult
   └─ May generate additional client-side schemas
```

## Notes

- **No TypeScript required:** Both components use JSX only for consistency with existing codebase
- **Server-side generation:** Schemas are generated at build/request time, not client-side
- **Reusable:** Components can be imported in any page needing schema data
- **Flexible:** Props allow customization for different routes, stations, or transit systems
- **Standards compliant:** All schemas follow Schema.org and Google Rich Results guidelines

## Testing

To verify schemas are working:

1. Navigate to any route page (e.g., `/ruta/zocalo-a-estadio-azteca/`)
2. View page source (Ctrl+U or Right-click → View Page Source)
3. Search for `<script type="application/ld+json">` blocks
4. Validate with [Google Rich Results Test](https://search.google.com/test/rich-results)

## Files Created/Modified

- ✓ Created: `/app/components/RouteSchema.jsx` (114 lines)
- ✓ Created: `/app/components/StationSchema.jsx` (152 lines)
- ✓ Modified: `/app/ruta/[slug]/page.jsx` (Added imports and server-side schema generation)
