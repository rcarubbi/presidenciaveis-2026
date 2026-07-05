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
	version: "2026-07-05T03:20:00Z",
	updatedAt: "2026-07-05T03:20:00Z",
	changes: [
		{
			emoji: "🔗",
			label:
				"Zema: sintrajufe.org.br (Tier4) → valor.globo.com (Tier1) Previdência",
		},
		{
			emoji: "❌",
			label: "Zema: Doações PF R$15M removida — sem fonte Tier1 que comprove",
		},
		{
			emoji: "✅",
			label: "Zema: validadas 22 URLs (21 OK + 1 substituída + 1 removida)",
		},
	],
};
