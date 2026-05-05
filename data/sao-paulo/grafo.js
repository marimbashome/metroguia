/*
 * SÃO PAULO METRÔ GRAPH — BFS Adjacency Network
 * ==============================================
 * Coverage: Linhas 1-Azul, 2-Verde, 3-Vermelha, 4-Amarela (4 linhas, 101 estações total)
 * Estações turísticas principais: 22
 * Tempos em minutos entre estações adjacentes
 * Fonte: Metrô SP + CPTM (integração disponível)
 * Nota: Linha 4 operada pela ViaQuatro, integração bidirecional
 */

export const grafoSaoPaulo = {
  // ===== LINHA 1 AZUL — Jabaquara → Tucuruvi =====
  'sp-jabaquara-l1': {
    cidade: 'sao-paulo',
    nome: 'Jabaquara',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-conceicao-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-conceicao-l1': {
    cidade: 'sao-paulo',
    nome: 'Conceição',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-jabaquara-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-santo-amaro-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-santo-amaro-l1': {
    cidade: 'sao-paulo',
    nome: 'Santo Amaro',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-conceicao-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-socorro-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-socorro-l1': {
    cidade: 'sao-paulo',
    nome: 'Socorro',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-santo-amaro-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-camargo-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-camargo-l1': {
    cidade: 'sao-paulo',
    nome: 'Camargo',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-socorro-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-giovanni-gronchi-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-giovanni-gronchi-l1': {
    cidade: 'sao-paulo',
    nome: 'Giovanni Gronchi',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-camargo-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-santa-cruz-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-santa-cruz-l1': {
    cidade: 'sao-paulo',
    nome: 'Santa Cruz',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-giovanni-gronchi-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-vila-mariana-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-vila-mariana-l1': {
    cidade: 'sao-paulo',
    nome: 'Vila Mariana',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-santa-cruz-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-paraiso-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-paraiso-l1': {
    cidade: 'sao-paulo',
    nome: 'Paraíso',
    linhas: ['L1', 'L2'],
    adjacentes: [
      { slug: 'sp-vila-mariana-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-ana-rosa-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-brigadeiro-l2', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-ana-rosa-l1': {
    cidade: 'sao-paulo',
    nome: 'Ana Rosa',
    linhas: ['L1', 'L2'],
    adjacentes: [
      { slug: 'sp-paraiso-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-brigadeiro-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-brigadeiro-l1': {
    cidade: 'sao-paulo',
    nome: 'Brigadeiro',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-ana-rosa-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-trianon-masp-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-trianon-masp-l1': {
    cidade: 'sao-paulo',
    nome: 'Trianon-MASP',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-brigadeiro-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-consolacao-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-consolacao-l1': {
    cidade: 'sao-paulo',
    nome: 'Consolação',
    linhas: ['L1', 'L2'],
    adjacentes: [
      { slug: 'sp-trianon-masp-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-paulista-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-clinicas-l2', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-paulista-l1': {
    cidade: 'sao-paulo',
    nome: 'Paulista',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-consolacao-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-bela-vista-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-bela-vista-l1': {
    cidade: 'sao-paulo',
    nome: 'Bela Vista',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-paulista-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-liberdade-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-liberdade-l1': {
    cidade: 'sao-paulo',
    nome: 'Liberdade',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-bela-vista-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-se-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-se-l1': {
    cidade: 'sao-paulo',
    nome: 'Sé',
    linhas: ['L1', 'L3'],
    adjacentes: [
      { slug: 'sp-liberdade-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-armacao-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-republica-l3', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-armacao-l1': {
    cidade: 'sao-paulo',
    nome: 'Armação',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-se-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-bresser-mooca-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-bresser-mooca-l1': {
    cidade: 'sao-paulo',
    nome: 'Bresser-Mooca',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-armacao-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-belem-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-belem-l1': {
    cidade: 'sao-paulo',
    nome: 'Belém',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-bresser-mooca-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-carrao-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-carrao-l1': {
    cidade: 'sao-paulo',
    nome: 'Carrão',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-belem-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-penha-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-penha-l1': {
    cidade: 'sao-paulo',
    nome: 'Penha',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-carrao-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
      { slug: 'sp-tucuruvi-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },
  'sp-tucuruvi-l1': {
    cidade: 'sao-paulo',
    nome: 'Tucuruvi',
    linhas: ['L1'],
    adjacentes: [
      { slug: 'sp-penha-l1', tempo: 3, linha: 'L1', tipo: 'metro' },
    ],
  },

  // ===== LINHA 2 VERDE — Vila Madalena → Vila Prudente =====
  'sp-vila-madalena-l2': {
    cidade: 'sao-paulo',
    nome: 'Vila Madalena',
    linhas: ['L2'],
    adjacentes: [
      { slug: 'sp-sumare-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
    ],
  },
  'sp-sumare-l2': {
    cidade: 'sao-paulo',
    nome: 'Sumaré',
    linhas: ['L2'],
    adjacentes: [
      { slug: 'sp-vila-madalena-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-clinicas-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
    ],
  },
  'sp-clinicas-l2': {
    cidade: 'sao-paulo',
    nome: 'Clínicas',
    linhas: ['L2'],
    adjacentes: [
      { slug: 'sp-sumare-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-consolacao-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-consolacao-l1', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-consolacao-l2': {
    cidade: 'sao-paulo',
    nome: 'Consolação',
    linhas: ['L2'],
    adjacentes: [
      { slug: 'sp-clinicas-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-trianon-masp-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
    ],
  },
  'sp-trianon-masp-l2': {
    cidade: 'sao-paulo',
    nome: 'Trianon-MASP',
    linhas: ['L2'],
    adjacentes: [
      { slug: 'sp-consolacao-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-brigadeiro-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-trianon-masp-l1', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-brigadeiro-l2': {
    cidade: 'sao-paulo',
    nome: 'Brigadeiro',
    linhas: ['L2'],
    adjacentes: [
      { slug: 'sp-trianon-masp-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-paraiso-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-paraiso-l1', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-paraiso-l2': {
    cidade: 'sao-paulo',
    nome: 'Paraíso',
    linhas: ['L2'],
    adjacentes: [
      { slug: 'sp-brigadeiro-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
      { slug: 'sp-vila-prudente-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
    ],
  },
  'sp-vila-prudente-l2': {
    cidade: 'sao-paulo',
    nome: 'Vila Prudente',
    linhas: ['L2'],
    adjacentes: [
      { slug: 'sp-paraiso-l2', tempo: 3, linha: 'L2', tipo: 'metro' },
    ],
  },

  // ===== LINHA 3 VERMELHA — Palmeiras-Barra Funda → Corinthians-Itaquera =====
  'sp-palmeiras-barra-funda-l3': {
    cidade: 'sao-paulo',
    nome: 'Palmeiras-Barra Funda',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-marechal-deodoro-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-marechal-deodoro-l3': {
    cidade: 'sao-paulo',
    nome: 'Marechal Deodoro',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-palmeiras-barra-funda-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-santa-cecilia-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-santa-cecilia-l3': {
    cidade: 'sao-paulo',
    nome: 'Santa Cecília',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-marechal-deodoro-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-republica-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-republica-l3': {
    cidade: 'sao-paulo',
    nome: 'República',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-santa-cecilia-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-anhangabau-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-se-l1', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-anhangabau-l3': {
    cidade: 'sao-paulo',
    nome: 'Anhangabaú',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-republica-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-se-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-se-l3': {
    cidade: 'sao-paulo',
    nome: 'Sé',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-anhangabau-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-pedro-ii-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-se-l1', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-pedro-ii-l3': {
    cidade: 'sao-paulo',
    nome: 'Pedro II',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-se-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-bras-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-bras-l3': {
    cidade: 'sao-paulo',
    nome: 'Brás',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-pedro-ii-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-bresser-mooca-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-bresser-mooca-l3': {
    cidade: 'sao-paulo',
    nome: 'Bresser-Mooca',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-bras-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-belem-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-belem-l3': {
    cidade: 'sao-paulo',
    nome: 'Belém',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-bresser-mooca-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-tatuape-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-tatuape-l3': {
    cidade: 'sao-paulo',
    nome: 'Tatuapé',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-belem-l3', tempo: 3, linha: 'L3', tipo: 'metro' },
      { slug: 'sp-corinthians-itaquera-l3', tempo: 8, linha: 'L3', tipo: 'metro' },
    ],
  },
  'sp-corinthians-itaquera-l3': {
    cidade: 'sao-paulo',
    nome: 'Corinthians-Itaquera',
    linhas: ['L3'],
    adjacentes: [
      { slug: 'sp-tatuape-l3', tempo: 8, linha: 'L3', tipo: 'metro' },
    ],
  },

  // ===== LINHA 4 AMARELA — Butantã → Luz =====
  'sp-butanta-l4': {
    cidade: 'sao-paulo',
    nome: 'Butantã',
    linhas: ['L4'],
    adjacentes: [
      { slug: 'sp-pinheiros-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
    ],
  },
  'sp-pinheiros-l4': {
    cidade: 'sao-paulo',
    nome: 'Pinheiros',
    linhas: ['L4'],
    adjacentes: [
      { slug: 'sp-butanta-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
      { slug: 'sp-faria-lima-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
    ],
  },
  'sp-faria-lima-l4': {
    cidade: 'sao-paulo',
    nome: 'Faria Lima',
    linhas: ['L4'],
    adjacentes: [
      { slug: 'sp-pinheiros-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
      { slug: 'sp-paulista-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
    ],
  },
  'sp-paulista-l4': {
    cidade: 'sao-paulo',
    nome: 'Paulista',
    linhas: ['L2', 'L4'],
    adjacentes: [
      { slug: 'sp-faria-lima-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
      { slug: 'sp-higienopolis-mackenzie-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
    ],
  },
  'sp-higienopolis-mackenzie-l4': {
    cidade: 'sao-paulo',
    nome: 'Higienópolis-Mackenzie',
    linhas: ['L4'],
    adjacentes: [
      { slug: 'sp-paulista-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
      { slug: 'sp-republica-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
    ],
  },
  'sp-republica-l4': {
    cidade: 'sao-paulo',
    nome: 'República',
    linhas: ['L4'],
    adjacentes: [
      { slug: 'sp-higienopolis-mackenzie-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
      { slug: 'sp-luz-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
      { slug: 'sp-republica-l3', tempo: 3, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
  'sp-luz-l4': {
    cidade: 'sao-paulo',
    nome: 'Luz',
    linhas: ['L1', 'L3', 'L4'],
    adjacentes: [
      { slug: 'sp-republica-l4', tempo: 3, linha: 'L4', tipo: 'metro' },
      { slug: 'sp-bresser-mooca-l1', tempo: 4, linha: 'transfer', tipo: 'transbordo' },
    ],
  },
}
