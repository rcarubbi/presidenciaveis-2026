import type { PollData } from '../types'

export const polls: PollData[] = [
  {
    institute: 'AtlasIntel',
    date: '19/mai',
    firstRound: [
      { name: 'Lula', value: 47.0 },
      { name: 'Flávio', value: 34.3 },
      { name: 'Renan', value: 6.9 },
      { name: 'Zema', value: 5.2 },
      { name: 'Caiado', value: 2.7 },
    ],
    secondRound: [
      { label: 'Lula × Flávio', lula: 48.9, adversario: 41.8, adversarioNome: 'Flávio' },
      { label: 'Lula × Renan', lula: 47, adversario: 28, adversarioNome: 'Renan' },
    ],
    rejection: [
      { name: 'Lula', value: 50.6 },
      { name: 'Flávio', value: 52.0 },
      { name: 'Renan', value: 43 },
      { name: 'Zema', value: 41 },
      { name: 'Caiado', value: 39 },
    ],
    spontaneous: [
      { name: 'Lula', value: 30 },
      { name: 'Flávio', value: 17 },
      { name: 'Renan', value: 4 },
    ],
    regional: [
      { region: 'Nordeste', lula: 53, flavio: 22, renan: 5 },
      { region: 'Sudeste', lula: 34, flavio: 33, renan: 8 },
      { region: 'Sul', lula: 33, flavio: 36, renan: 7 },
      { region: 'Norte/CO', lula: 34, flavio: 37, renan: 6 },
    ],
  },
]
