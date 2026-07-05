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
	version: "2026-07-05T12:00:00Z",
	updatedAt: "2026-07-05T12:00:00Z",
	changes: [
		{ emoji: "🔗", label: "Validação e substituição de fontes" },
	],
};
