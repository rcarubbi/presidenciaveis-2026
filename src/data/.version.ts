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
		{ emoji: "🔗", label: "Validação e substituição de fontes" },
		{ emoji: "🎯", label: "Fontes específicas p/ 20 propostas de Renan" },
		{ emoji: "🔧", label: "9 links quebrados substituídos (Zema, Caiado, Lula)" },
		{ emoji: "📊", label: "Zema timeline 2018: 58,07% → 71,80%" },
		{ emoji: "👤", label: "Renan careerYears: 12 → 8" },
		{ emoji: "🔗", label: "Renan fonte crowdfunding: Poder360 → Estadão" },
		{ emoji: "📋", label: "Dado global limiteGastos unificado (Poder360)" },
	],
};
