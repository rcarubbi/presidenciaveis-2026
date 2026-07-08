export interface DataChange {
	emoji: string;
	label: string;
}

export interface DataVersionInfo {
	version: string;
	updatedAt: string;
	changes: DataChange[];
}

export const dataVersion: DataVersionInfo = {
	version: "2026-07-08T00:00:00Z",
	updatedAt: "2026-07-08T00:00:00Z",
	changes: [
		{
			emoji: "📊",
			label: "Caiado: 2 novas pesquisas — Gerp/Aesp 4% (03-07/jul) + Meio/Ideia 4% (03-06/jul)",
		},
		{
			emoji: "📜",
			label: "Caiado: 2 eventos timeline (06/jul agenda SP c/ Zema; 08/jul critica Flávio tarifaço no CNC + traição à pátria)",
		},
		{
			emoji: "📋",
			label: "Caiado: nova posição e proposta — ampliar crime de traição à pátria (08/jul)",
		},
		{
			emoji: "🎬",
			label:
				"Lula: 7 novos vídeos YouTube Tier 1 (CNN Brasil 08/jul, Poder360 08/jul, Poder360 07/jul, Canal Lula 07/jul, Estadão 04/jul, Record News 03/jul, Record News 30/jun)",
		},
		{
			emoji: "🔎",
			label: "Flávio: atualiza descrição escândalo Dark Horse — Mendonça 'não vai aliviar' (Folha/Goiás246 07/jul)",
		},
		{
			emoji: "🎬",
			label: "Flávio: 3 novos vídeos YouTube — CNN Brasil (Tier 1) + VEJA+ e O Antagonista (Tier 2) — audiência USTR tarifaço 08/jul",
		},
		{
			emoji: "🎬",
			label: "Renan: novo vídeo YouTube — Análises Renais responde a ataques (canal oficial 07/jul)",
		},
		{
			emoji: "📜",
			label: "Zema: 2 eventos timeline 06/jul — crítica Renan Santos + defende rejulgamento de Bolsonaro",
		},
		{
			emoji: "🎬",
			label: "Zema: novo vídeo YouTube — sabatina No Osso (Derrubando Muros) 06/jul",
		},
	],
};
