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
	version: "2026-07-05T03:10:00Z",
	updatedAt: "2026-07-05T03:10:00Z",
	changes: [
		{
			emoji: "🔗",
			label: "Caiado: brasilnocentro quebrada → G1 (Fraude Fundeb R$ 465 mil)",
		},
		{
			emoji: "🔗",
			label:
				"Caiado: #Posições_políticas inexistente → Senado PDL 175/2017 (Armas)",
		},
		{
			emoji: "✅",
			label: "Caiado: validadas 38 URLs (36 OK + 2 corrigidas)",
		},
	],
};
