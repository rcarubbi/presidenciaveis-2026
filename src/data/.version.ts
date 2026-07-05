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
	version: "2026-07-06T14:00:00Z",
	updatedAt: "2026-07-06T14:00:00Z",
	changes: [
		{
			emoji: "🎥",
			label: "Lula: vídeo — entrevista Jornal da Manhã Bahia (05/jul)",
		},
		{
			emoji: "💰",
			label: "Lula: financiamento FEFC sobe de R$ 105M para R$ 126,9M (03/jul)",
		},
		{
			emoji: "📅",
			label: "Lula: timeline — PT oficializa candidatura em 2/ago (04/jul)",
		},
		{
			emoji: "📋",
			label: "Lula: proposta — Mapa do Caminho para tarifaço EUA (02/jul)",
		},
	],
};
