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
	version: "2026-07-07T23:45:00Z",
	updatedAt: "2026-07-07T23:45:00Z",
	changes: [
		{
			emoji: "🖊️",
			label:
				"Caiado: escândalo atualizado — Justiça reduz seguranças de 51 para 4 PMs (Folha 06/jul)",
		},
		{
			emoji: "📅",
			label:
				"Caiado: timeline expandida (07/jul) — Tarcísio vai à convenção PSD, Caiado ataca Flávio caso Vorcaro",
		},
		{
			emoji: "🎬",
			label:
				"Caiado: 2 novos vídeos YouTube — Metrópoles (03/jul), CNN Prime Time (02/jul)",
		},
		{
			emoji: "📅",
			label:
				"Flávio: timeline expandida (04-07/jul) — tenta agrupar mulheres (Folha 06/jul), estende agenda nos EUA após audiência USTR (CNN 07/jul)",
		},
		{
			emoji: "📅",
			label:
				"Lula: timeline — defeso eleitoral com entregas no Nordeste/Sudeste (04/jul), troca equipe de comunicação (06/jul)",
		},
		{
			emoji: "🎬",
			label:
				"Lula: 5 novos vídeos YouTube de Tier 1 (Poder360 23/jun, CNN Brasil 17/jun, TV Brasil 22/mai, UOL 07/mai, CartaCapital 23/fev)",
		},
		{
			emoji: "📅",
			label:
				"Renan: timeline expandida (24/jun-07/jul) — Flávio inviável, encontro embaixadores, vice Aroldo Medina, Zema x Renan",
		},
		{
			emoji: "🆕",
			label:
				"Renan: novo escândalo — TJ-SP nega remoção posts sobre acusação de estupro (23/jun)",
		},
		{
			emoji: "🎬",
			label:
				"Renan: 1 vídeo YouTube — EsferaCast/Katallaxis (06/jul) plano crescimento econômico",
		},
	],
};
