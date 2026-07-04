import type { ProposalItem } from '../types'
import { lulaProposals } from './proposals-lula'
import { flavioProposals } from './proposals-flavio'
import { renanProposals } from './proposals-renan'
import { caiadoProposals } from './proposals-caiado'
import { zemaProposals } from './proposals-zema'

export interface ProposalSection {
  id: string
  label: string
  lula: ProposalItem[]
  flavio: ProposalItem[]
  renan: ProposalItem[]
  caiado: ProposalItem[]
  zema: ProposalItem[]
}

const sections: { id: string; label: string }[] = [
  { id: 'seguranca', label: 'Segurança Pública' },
  { id: 'economia', label: 'Economia e Política Fiscal' },
  { id: 'saude', label: 'Saúde' },
  { id: 'educacao', label: 'Educação' },
  { id: 'previdencia', label: 'Previdência e Trabalho' },
  { id: 'infraestrutura', label: 'Infraestrutura' },
  { id: 'meio-ambiente', label: 'Meio Ambiente e Clima' },
  { id: 'relacoes-exteriores', label: 'Relações Exteriores' },
  { id: 'reforma-politica', label: 'Reforma Política e Judiciário' },
  { id: 'costumes', label: 'Costumes, Família e Direitos Humanos' },
  { id: 'agricultura', label: 'Agricultura e Desenvolvimento Rural' },
]

export const proposalSections: ProposalSection[] = sections.map((s) => ({
  ...s,
  lula: lulaProposals[s.id] || [],
  flavio: flavioProposals[s.id] || [],
  renan: renanProposals[s.id] || [],
  caiado: caiadoProposals[s.id] || [],
  zema: zemaProposals[s.id] || [],
}))
