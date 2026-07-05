export interface DataValue<T = string> {
	value: T;
	source: string;
	updatedAt: string;
}

export interface Candidate {
	id: string;
	name: DataValue;
	fullName: DataValue;
	photo: string;
	photoPos?: string;
	party: {
		name: DataValue;
		number: number;
		logo: string;
		color: string;
		colorLight: string;
	};
	age: DataValue<number>;
	birthYear: DataValue<number>;
	naturalidade: DataValue;
	estadoCivil: DataValue;
	conjugesAnteriores: DataValue;
	filhos: DataValue;
	formacao: DataValue;
	profissao: DataValue;
	religiao: DataValue;
	residencia: DataValue;
	patrimonio: DataValue<number> | null;
	currentParty: DataValue;
	partyHistory: DataValue[];
	coalition: { party: DataValue; status: DataValue }[];
	ideologicalPosition: DataValue;
	careerYears: DataValue<number>;
	currentPosition: DataValue;
	timeline: TimelineEvent[];
	electionResults: ElectionResult[];
	scandals: Scandal[];
	campaignFinance: CampaignFinance;
	positions: { issue: DataValue; position: DataValue }[];
}

export interface TimelineEvent {
	year: DataValue;
	event: DataValue;
}

export interface ElectionResult {
	year: DataValue<number>;
	cargo: DataValue;
	votos: DataValue;
	pct: DataValue;
	resultado: DataValue;
}

export interface Scandal {
	name: DataValue;
	status: DataValue;
	description: DataValue;
	value?: DataValue;
}

export interface CampaignFinance {
	totalArrecadado: DataValue;
	totalGasto: DataValue;
	limiteGastos: DataValue;
	fontes: { name: DataValue; value: DataValue<number>; color: string }[];
	comparison: {
		name: DataValue;
		arrecadado: DataValue<number>;
		gasto: DataValue<number>;
	};
}

export interface PollData {
	institute: string;
	date: string;
	firstRound: { name: string; value: number }[];
	secondRound?: {
		label: string;
		lula: number;
		adversario: number;
		adversarioNome: string;
	}[];
	rejection?: { name: string; value: number }[];
	spontaneous?: { name: string; value: number }[];
	regional?: { region: string; lula: number; flavio: number; renan?: number }[];
}

export interface ProposalItem {
	text: DataValue;
}

export interface ProposalSection {
	id: string
	label: string
	lula: ProposalItem[]
	flavio: ProposalItem[]
	renan: ProposalItem[]
	caiado: ProposalItem[]
	zema: ProposalItem[]
}

export interface MediaItem {
	title: DataValue;
	description: DataValue;
	youtubeId: string;
	category: string;
}

export interface MediaCategory {
	id: string;
	label: string;
	items: MediaItem[];
}

export type CandidateSubTab =
	| "hero"
	| "dados"
	| "carreira"
	| "plano"
	| "escandalos"
	| "financiamento"
	| "posicionamento"
	| "midia"
	| "cobertura";
