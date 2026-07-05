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
	version: "2026-07-05T22:30:00Z",
	updatedAt: "2026-07-05T22:30:00Z",
	changes: [
		{
			emoji: "🔄",
			label:
				"Todos: reordenados arrays (timeline, elections, partyHistory, positions, scandals) — mais recente primeiro",
		},
		{
			emoji: "📋",
			label: "Renan: timeline — 1ª convenção Missão 01/ago em SP (CNN) 03/jul",
		},
		{
			emoji: "📋",
			label: "Renan: position — Zona Franca de Manaus (Estadão) 24/jun",
		},
		{
			emoji: "📋",
			label: "Flávio: Dark Horse — carta aos EUA omite envolvimento 02/07",
		},
		{
			emoji: "🎥",
			label: "Flávio: vídeo — CNN Bastidores (Michelle/Flávio) 02/07",
		},
	],
};
