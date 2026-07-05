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
	version: "2026-07-05T18:00:00Z",
	updatedAt: "2026-07-05T18:00:00Z",
	changes: [
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
