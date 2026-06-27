export interface Candidate {
  id: string
  name: string
  fullName: string
  photo: string
  party: {
    name: string
    number: number
    logo: string
    color: string
    colorLight: string
  }
  age: number
  naturalidade: string
  estadoCivil: string
  conjugesAnteriores: string
  filhos: string
  formacao: string
  profissao: string
  religiao: string
  residencia: string
  patrimonio: number
  currentParty: string
  partyHistory: string[]
  coalition: { party: string; status: string }[]
  ideologicalPosition: string
  careerYears: number
  currentPosition: string
  timeline: TimelineEvent[]
  electionResults: ElectionResult[]
  scandals: Scandal[]
  campaignFinance: CampaignFinance
  positions: { issue: string; position: string }[]
  proposalsCoverage: number
}

export interface TimelineEvent {
  year: string
  event: string
}

export interface ElectionResult {
  year: number
  cargo: string
  votos: string
  pct: string
  resultado: string
}

export interface Scandal {
  name: string
  status: 'arquivado' | 'ativo' | 'absolvido' | 'anulado' | 'rejeitado'
  description: string
  value?: string
}

export interface CampaignFinance {
  totalArrecadado: string
  totalGasto: string
  limiteGastos: string
  fontes: { name: string; value: number; color: string }[]
  comparison: { name: string; arrecadado: number; gasto: number }
}

export interface PollData {
  institute: string
  date: string
  firstRound: { name: string; value: number }[]
  secondRound?: { label: string; lula: number; adversario: number; adversarioNome: string }[]
  rejection?: { name: string; value: number }[]
  spontaneous?: { name: string; value: number }[]
  regional?: { region: string; lula: number; flavio: number; renan?: number }[]
}

export interface Tab {
  id: string
  label: string
  icon: string
}

export type CandidateSubTab = 'hero' | 'dados' | 'carreira' | 'plano' | 'escandalos' | 'financiamento' | 'posicionamento'
