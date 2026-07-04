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
	version: "2026-07-04T02:53:41Z",
	updatedAt: "2026-07-04T02:53:41Z",
	changes: [
		{ emoji: "👤", label: "Dados dos candidatos" },
	],
};
