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
	version: "2026-07-07T20:00:00Z",
	updatedAt: "2026-07-07T20:00:00Z",
	changes: [
		{
			emoji: "🔧",
			label: "Zema: correção fontes histórico partidos — NOVO, PR, PL (ndmais.com.br substitui Wikipedia#Primeiros_anos genérico)",
		},
	],
};
