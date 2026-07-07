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
	version: "2026-07-07T17:00:00Z",
	updatedAt: "2026-07-07T17:00:00Z",
	changes: [
		{
			emoji: "📋",
			label: "Lula: proposal — Defesa nacional no programa de governo (26/jun)",
		},
		{
			emoji: "📊",
			label: "Lula: poll — PoderData/Aya 25/jun (Lula 40%, Flávio 36%)",
		},
		{
			emoji: "📋",
			label:
				"Flávio: proposal — Bolsa Família direito adquirido, pacto contra fome, zerar creche (20/jun)",
		},
		{
			emoji: "📅",
			label:
				"Flávio: timeline — atualizada até 6/jul (fogo amigo, PGR, convenção 25/jul, USTR, Michelle PL Mulher)",
		},
		{
			emoji: "📌",
			label: "Flávio: position — Bolsa Família preenchida (antes vazia)",
		},
		{
			emoji: "📅",
			label:
				"Renan: timeline — congresso MBL BH (4/jul), recusa ser outsider, mira Flávio",
		},
		{
			emoji: "📌",
			label:
				"Renan: position — Previdência atualizada com gatilho automático idade (24/jun)",
		},
		{
			emoji: "🎬",
			label:
				"Caiado: media — +2 videos 6/jul (Kassab entrevistas Jovem Pan, Metrópoles)",
		},
		{
			emoji: "📅",
			label:
				"Caiado: timeline — PSD lança chapa Caiado-Kassab (NC News, 4/jul)",
		},
		{
			emoji: "📌",
			label:
				"Caiado: position — Economia preenchida (Custo Brasil, reformas estruturantes, 23/jun)",
		},
		{
			emoji: "📅",
			label:
				"Zema: timeline — +3 entries (26/jun sondagem vice, 30/jun Podemos, 1/jul vice indefinido)",
		},
		{
			emoji: "📌",
			label:
				"Zema: position — Relações Exteriores preenchida (embaixadores VEJA, 23/jun)",
		},
		{
			emoji: "📌",
			label:
				"Zema: position — Assistência Social preenchida (rever programas sociais, 1/jul)",
		},
	],
};
