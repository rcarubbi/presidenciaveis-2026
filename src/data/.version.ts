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
	version: "2026-07-05T20:04:00Z",
	updatedAt: "2026-07-05T20:04:00Z",
	changes: [
		{
			emoji: "🔗",
			label: "Renan: Estadão crowdfunding quebrada → Estadão vaquinha (OK)",
		},
		{
			emoji: "⬆️",
			label: "Renan: Tier4 aonpelavida → Tier1 Revista Oeste (Fundo Eleitoral)",
		},
		{ emoji: "✅", label: "Renan: validadas 31 URLs (30 OK)" },
		{ emoji: "🔗", label: "Flávio: UOL rachadinhas bloqueada → Wikipédia" },
		{ emoji: "🔗", label: "Flávio: Fiocruz bloqueada → Wikipédia" },
		{ emoji: "🔗", label: "Flávio: AcessePolítica bloqueada → Wikipédia" },
		{
			emoji: "✅",
			label: "Flávio: validadas 38 URLs (35 OK + 3 migradas p/ Wikipédia)",
		},
	],
};
