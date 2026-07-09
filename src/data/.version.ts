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
	version: "2026-07-09T19:30:00Z",
	updatedAt: "2026-07-09T19:30:00Z",
	changes: [
		{
			emoji: "📜",
			label:
				"Zema: 6 novos eventos timeline — acusa Gilmar/CBF 09/jul (VEJA), critica PF/Bolsonaro 08/jul (Estadão), CNC '3 choques' 08/jul (G1), convenção 27/jul 08/jul (Poder360), Rufino vice 08/jul (CNN), Tarcísio 'viável' 07/jul (G1)",
		},
		{
			emoji: "🎬",
			label:
				"Zema: 1 novo vídeo YouTube — CNN Brasil 'ministros STF querem calar' 08/jul (-1pANmoHPNs)",
		},
		{
			emoji: "📜",
			label:
				"Renan: timeline — político Nordeste 'parasitas' 30/jun (G1), MyNews entrevista 09/jul",
		},
		{
			emoji: "🎬",
			label:
				"Renan: 1 novo vídeo YouTube — MyNews entrevista 'não sou terceira via' 09/jul (o3txKu4pKxM)",
		},
		{
			emoji: "📊",
			label:
				"Renan: polls Meio/Ideia 06/jul — adicionado 2º turno Lula x Renan (45% x 33%)",
		},
		{
			emoji: "📜",
			label:
				"Flávio: 2 novos eventos timeline — fogo amigo aliados Eduardo 08/jul (O Globo), Valdemar reaproximação Flávio/Michelle 08/jul (Valor)",
		},
		{
			emoji: "📋",
			label:
				"Flávio: nova posição Acordo Comercial EUA — AFTA proposta (O Globo 08/jul)",
		},
		{
			emoji: "🎬",
			label:
				"Flávio: 1 novo vídeo YouTube — audiência USTR Washington 07/jul (THDrFjrIWnA)",
		},
		{
			emoji: "📜",
			label:
				"Lula: 4 novos eventos timeline — reunião pré-campanha 08/jul (O Globo), Desenrola Adimplentes 29/jun (G1), lançamento fragata SC 26/jun (Correio Braziliense), Haddad/França SP 25/jun (Metrópoles)",
		},
		{
			emoji: "📜",
			label:
				"Caiado: 2 novos eventos timeline — Flow Podcast critica Bolsonaro/Flávio 08/jul (G1/Poder360), agenda Rio Cibem/ACRJ 09/jul (Correio Diário)",
		},
		{
			emoji: "📋",
			label:
				"Caiado: nova posição Relações Exteriores — soberania nacional, crítica Lula/Flávio tarifaço (G1 08/jul)",
		},
		{
			emoji: "🎬",
			label:
				"Caiado: 1 novo vídeo YouTube — Flow News #055 Flow Podcast 08/jul (HzVDn5oAKpQ)",
		},
		{
			emoji: "💡",
			label:
				"Caiado: nova proposta infraestrutura — investimentos em energia e fertilizantes (Estadão 08/jul)",
		},
		{
			emoji: "📋",
			label:
				"Lula: 5 novas posições com fonte Tier 1 — Bolsa Família (Poder360), Educação (Estadão), Economia (O Globo), Reforma Agrária (Planalto), Saúde (O Povo)",
		},
		{
			emoji: "🎬",
			label:
				"Lula: 9 novos vídeos YouTube — Poder360 Transnordestina 02/jul, Poder360 Transposição 02/jul, Record News 03/jul, Estadão 04/jul, Poder360 ProUni 07/jul, Canal Lula 07/jul, CNN Brasil 08/jul, Poder360 Mandioca 08/jul, Record News Mercosul 30/jun",
		},
	],
};
