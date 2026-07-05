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
	version: "2026-07-05T15:30:00Z",
	updatedAt: "2026-07-05T15:30:00Z",
	changes: [
		{
			emoji: "📋",
			label: "Lula: Compliance Zero — Wagner afastou-se liderança 24/06",
		},
		{
			emoji: "👤",
			label: "Lula: timeline — Teresa Leitão liderança Senado",
		},
		{
			emoji: "🎥",
			label: "Lula: vídeo — discurso 68ª Cúpula Mercosul",
		},
	],
};
