import OfflineClient from './OfflineClient'

export const metadata = {
  title: 'Sin conexión — MetroGuia.mx',
  description: 'Estás viendo una página en caché. Algunas funciones pueden no estar disponibles sin internet.',
}

export default function OfflinePage() {
  return <OfflineClient />
}
