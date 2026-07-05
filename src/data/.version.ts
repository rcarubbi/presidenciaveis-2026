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
	version: "2026-07-05T23:45:00Z",
	updatedAt: "2026-07-05T23:45:00Z",
	changes: [
		{
			emoji: "🔄",
			label:
				"Todos: reordenados arrays (timeline, elections, partyHistory, positions, scandals) — mais recente primeiro",
		},
		{
			emoji: "📋",
			label: "Renan: timeline — 1ª convenção Missão 01/ago em SP (CNN) 03/jul",
		},
		{
			emoji: "📋",
			label: "Renan: position — Zona Franca de Manaus (Estadão) 24/jun",
		},
		{
			emoji: "📋",
			label: "Flávio: Dark Horse — carta aos EUA omite envolvimento 02/07",
		},
		{
			emoji: "🎥",
			label: "Flávio: vídeo — CNN Bastidores (Michelle/Flávio) 02/07",
		},
		{
			emoji: "👤",
			label: "Caiado: scandal — MP investiga uso de PMs como seguranças (Folha) 27/jun",
		},
		{
			emoji: "👤",
			label: "Caiado: timeline — PSD marca convenção 26/jul em SP 24/jun",
		},
		{
			emoji: "👤",
			label: "Caiado: positions — Reforma STF (Metrópoles 22/jun) + Reforma Tributária 23/jun",
		},
		{
			emoji: "📋",
			label: "Caiado: proposal — projeto reforma STF (Metrópoles) 22/jun",
		},
		{
			emoji: "🎥",
			label: "Caiado: videos — BandNews FM, TMC News Br, CNN HORA H (Kassab vice) 01-02/jul",
		},
		{
			emoji: "👤",
			label: "Zema: scandal — Isenção fiscal R$2,28mi para Eletrozema (empresa família) 25/jun",
		},
		{
			emoji: "👤",
			label: "Zema: timeline — Apoio ACM Neto (BA) 02/jul + Apoio Girão (CE) 04/jul + nega alianças 25/jun",
		},
		{
			emoji: "👤",
			label: "Zema: positions — Bolsa Família/'geração imprestáveis' 22/jun + STF/Gilmar 26/jun + Apoios regionais 02/jul",
		},
		{
			emoji: "🎥",
			label: "Zema: videos — Poder360 04/jul + BandNews FM 02/jul",
		},
	],
};
