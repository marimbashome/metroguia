export const grafoChihuahua = {
  'chihuahua-central': {
    ciudad: 'chihuahua',
    nombre: 'Estación Chihuahua Central',
    lineas: ['1'],
    adyacentes: [
      { slug: 'cuauhtemoc', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'cuauhtemoc': {
    ciudad: 'chihuahua',
    nombre: 'Cuauhtémoc',
    lineas: ['1'],
    adyacentes: [
      { slug: 'chihuahua-central', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'creel', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'creel': {
    ciudad: 'chihuahua',
    nombre: 'Creel',
    lineas: ['1'],
    adyacentes: [
      { slug: 'cuauhtemoc', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'divisadero', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'divisadero': {
    ciudad: 'chihuahua',
    nombre: 'Divisadero',
    lineas: ['1'],
    adyacentes: [
      { slug: 'creel', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'posada-barrancas', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'posada-barrancas': {
    ciudad: 'chihuahua',
    nombre: 'Posada Barrancas',
    lineas: ['1'],
    adyacentes: [
      { slug: 'divisadero', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'bahuichivo', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'bahuichivo': {
    ciudad: 'chihuahua',
    nombre: 'Bahuichivo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'posada-barrancas', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'el-fuerte', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'el-fuerte': {
    ciudad: 'chihuahua',
    nombre: 'El Fuerte',
    lineas: ['1'],
    adyacentes: [
      { slug: 'bahuichivo', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'los-mochis', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'los-mochis': {
    ciudad: 'chihuahua',
    nombre: 'Los Mochis',
    lineas: ['1'],
    adyacentes: [
      { slug: 'el-fuerte', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'centro-chihuahua': {
    ciudad: 'chihuahua',
    nombre: 'Centro Histórico',
    lineas: ['2'],
    adyacentes: [
      { slug: 'palacio-gobierno', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'palacio-gobierno': {
    ciudad: 'chihuahua',
    nombre: 'Palacio de Gobierno',
    lineas: ['2'],
    adyacentes: [
      { slug: 'centro-chihuahua', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'catedral-chihuahua', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'catedral-chihuahua': {
    ciudad: 'chihuahua',
    nombre: 'Catedral Metropolitana',
    lineas: ['2'],
    adyacentes: [
      { slug: 'palacio-gobierno', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'zona-dorada-chi', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'zona-dorada-chi': {
    ciudad: 'chihuahua',
    nombre: 'Zona Dorada',
    lineas: ['2'],
    adyacentes: [
      { slug: 'catedral-chihuahua', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'uach', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'uach': {
    ciudad: 'chihuahua',
    nombre: 'UACH (Universidad Autónoma de Chihuahua)',
    lineas: ['2'],
    adyacentes: [
      { slug: 'zona-dorada-chi', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'museo-quinta-gameros', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'museo-quinta-gameros': {
    ciudad: 'chihuahua',
    nombre: 'Museo Quinta Gameros',
    lineas: ['2'],
    adyacentes: [
      { slug: 'uach', tiempo: 3, linea: '2', tipo: 'linea' },
      { slug: 'pancho-villa-museo', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'pancho-villa-museo': {
    ciudad: 'chihuahua',
    nombre: 'Museo de la Revolución (Hacienda de Villa)',
    lineas: ['2'],
    adyacentes: [
      { slug: 'museo-quinta-gameros', tiempo: 3, linea: '2', tipo: 'linea' }
    ],
  },
  'terminal-norte-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Terminal Norte Bowí',
    lineas: ['3'],
    adyacentes: [
      { slug: 'periferico-norte', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'periferico-norte': {
    ciudad: 'chihuahua',
    nombre: 'Periférico Norte',
    lineas: ['3'],
    adyacentes: [
      { slug: 'terminal-norte-bowi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'universidad-chihuahua', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'universidad-chihuahua': {
    ciudad: 'chihuahua',
    nombre: 'Universidad de Chihuahua',
    lineas: ['3'],
    adyacentes: [
      { slug: 'periferico-norte', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'tecnologico-chihuahua', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'tecnologico-chihuahua': {
    ciudad: 'chihuahua',
    nombre: 'Tecnológico de Chihuahua',
    lineas: ['3'],
    adyacentes: [
      { slug: 'universidad-chihuahua', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'vialidad-sacramento', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'ninos-heroes-chi': {
    ciudad: 'chihuahua',
    nombre: 'Niños Héroes',
    lineas: ['3'],
    adyacentes: [
      { slug: 'vialidad-sacramento', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'centro-bowi', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'centro-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Centro Bowí',
    lineas: ['3'],
    adyacentes: [
      { slug: 'ninos-heroes-chi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'independencia-chi', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'independencia-chi': {
    ciudad: 'chihuahua',
    nombre: 'Independencia',
    lineas: ['3'],
    adyacentes: [
      { slug: 'centro-bowi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'americas-chi', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'americas-chi': {
    ciudad: 'chihuahua',
    nombre: 'Américas',
    lineas: ['3'],
    adyacentes: [
      { slug: 'independencia-chi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'altavista-chi', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'altavista-chi': {
    ciudad: 'chihuahua',
    nombre: 'Altavista',
    lineas: ['3'],
    adyacentes: [
      { slug: 'americas-chi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'cantera-chi', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'cantera-chi': {
    ciudad: 'chihuahua',
    nombre: 'Cantera',
    lineas: ['3'],
    adyacentes: [
      { slug: 'altavista-chi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'campestre-chi', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'campestre-chi': {
    ciudad: 'chihuahua',
    nombre: 'Campestre',
    lineas: ['3'],
    adyacentes: [
      { slug: 'cantera-chi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'vialidad-sacramento', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'vialidad-sacramento': {
    ciudad: 'chihuahua',
    nombre: 'Vialidad Sacramento',
    lineas: ['3'],
    adyacentes: [
      { slug: 'tecnologico-chihuahua', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'ninos-heroes-chi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'campestre-chi', tiempo: 4, linea: '3', tipo: 'linea' },
      { slug: 'terminal-sur-bowi', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  },
  'terminal-sur-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Terminal Sur Bowí',
    lineas: ['3'],
    adyacentes: [
      { slug: 'vialidad-sacramento', tiempo: 4, linea: '3', tipo: 'linea' }
    ],
  }
};
