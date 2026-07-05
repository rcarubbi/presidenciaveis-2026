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
	version: "2026-07-05T19:00:00Z",
	updatedAt: "2026-07-05T19:00:00Z",
	changes: [
		{ emoji: "🔗", label: "Renan: URL quebrada Estadão crowdfunding → Estadão vaquinha (OK)" },
		{ emoji: "⬆️", label: "Renan: Tier4 aonpelavida → Tier1 Revista Oeste (Fundo Eleitoral)" },
		{ emoji: "✅", label: "Renan: validadas 31 URLs (30 OK)" },
	],
};
