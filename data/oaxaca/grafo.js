export const grafoOaxaca = {
  'oaxaca-aeropuerto': {
    ciudad: 'oaxaca',
    nombre: 'Aeropuerto',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-centro-historico', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-centro-historico': {
    ciudad: 'oaxaca',
    nombre: 'Centro Histórico',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-aeropuerto', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-santo-domingo', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-santo-domingo': {
    ciudad: 'oaxaca',
    nombre: 'Santo Domingo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-centro-historico', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-andador-macedonio', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-monte-alban': {
    ciudad: 'oaxaca',
    nombre: 'Monte Albán',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-terminal-ado', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-mitla', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-mitla': {
    ciudad: 'oaxaca',
    nombre: 'Mitla',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-monte-alban', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-hierve-el-agua', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-hierve-el-agua': {
    ciudad: 'oaxaca',
    nombre: 'Hierve el Agua',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-mitla', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-ruta-del-mezcal', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-mercado-benito-juarez': {
    ciudad: 'oaxaca',
    nombre: 'Mercado Benito Juárez',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-andador-macedonio', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-mercado-20-noviembre', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-mercado-20-noviembre': {
    ciudad: 'oaxaca',
    nombre: 'Mercado 20 de Noviembre',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-mercado-benito-juarez', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-terminal-ado', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-andador-macedonio': {
    ciudad: 'oaxaca',
    nombre: 'Andador Macedonio',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-santo-domingo', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-mercado-benito-juarez', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-terminal-ado': {
    ciudad: 'oaxaca',
    nombre: 'Terminal ADO',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-mercado-20-noviembre', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-monte-alban', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-ruta-del-mezcal': {
    ciudad: 'oaxaca',
    nombre: 'Ruta del Mezcal',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-hierve-el-agua', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'oaxaca-el-tule', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'oaxaca-el-tule': {
    ciudad: 'oaxaca',
    nombre: 'El Tule',
    lineas: ['1'],
    adyacentes: [
      { slug: 'oaxaca-ruta-del-mezcal', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  }
};
