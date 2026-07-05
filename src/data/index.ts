import type { Candidate, ProposalSection, MediaCategory } from '../types'
import { lula } from './lula'
import { flavio } from './flavio'
import { renan } from './renan'
import { caiado } from './caiado'
import { zema } from './zema'
import { lulaProposals } from './proposals-lula'
import { flavioProposals } from './proposals-flavio'
import { renanProposals } from './proposals-renan'
import { caiadoProposals } from './proposals-caiado'
import { zemaProposals } from './proposals-zema'
import { lulaMedia } from './media-lula'
import { flavioMedia } from './media-flavio'
import { renanMedia } from './media-renan'
import { caiadoMedia } from './media-caiado'
import { zemaMedia } from './media-zema'

export const candidates: Candidate[] = [lula, flavio, renan, caiado, zema]

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

export const mediaData: Record<string, MediaCategory[]> = {
	lula: lulaMedia,
	flavio: flavioMedia,
	renan: renanMedia,
	caiado: caiadoMedia,
	zema: zemaMedia,
}
