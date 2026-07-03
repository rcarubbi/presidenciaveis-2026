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
	version: "2026-07-03T19:00:00Z",
	updatedAt: "2026-07-03T19:00:00Z",
	changes: [{ emoji: "🎥", label: "Vídeos e entrevistas" }],
};
