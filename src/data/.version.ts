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
	version: "2026-07-07T12:00:00Z",
	updatedAt: "2026-07-07T12:00:00Z",
	changes: [
		{
			emoji: "📋",
			label: "Lula: proposal — Defesa nacional no programa de governo (26/jun)",
		},
		{
			emoji: "📊",
			label: "Lula: poll — PoderData/Aya 25/jun (Lula 40%, Flávio 36%)",
		},
	],
};
