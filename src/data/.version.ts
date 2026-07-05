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
	version: "2026-07-06T16:30:00Z",
	updatedAt: "2026-07-06T16:30:00Z",
	changes: [
		{
			emoji: "👤",
			label: "Flávio: timeline — crise c/ Michelle, Bia Kicis cotada vice, audiência tarifas EUA",
		},
		{
			emoji: "👤",
			label: "Flávio: posição — Tarifas EUA (crítico tarifaço Trump, foi a Washington)",
		},
		{
			emoji: "🎥",
			label: "Flávio: vídeos — Metrópoles (Michelle apelido) + Cappelli (vice) (02-03/jul)",
		},
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
