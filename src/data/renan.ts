import type { Candidate } from "../types";
import { dv, dvn } from "@/lib/dataValue";
export const renan: Candidate = 	{
		id: "renan",
		name: dv(
			"Renan Santos",
			"https://pt.wikipedia.org/wiki/Renan_Santos",
			"2026-06-26",
		),
		fullName: dv(
			"Renan Antônio Ferreira dos Santos",
			"https://pt.wikipedia.org/wiki/Renan_Santos",
			"2026-06-26",
		),
		photo: "/renan.png",
		photoPos: "center top",
		party: {
			name: dv("Missão"),
			number: 14,
			logo: "/logos/missao.svg",
			color: "#d97706",
			colorLight: "#f59e0b",
		},
		age: dvn(42, "https://pt.wikipedia.org/wiki/Renan_Santos#Juventude", "2026-06-26"),
		birthYear: dvn(
			1984,
			"https://pt.wikipedia.org/wiki/Renan_Santos#Juventude",
			"2026-06-26",
		),
		naturalidade: dv(
			"São Paulo, SP",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Juventude",
			"2026-06-26",
		),
		estadoCivil: dv(
			"Não divulgado",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Vida_pessoal",
			"2026-06-26",
		),
		conjugesAnteriores: dv(
			"—",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Vida_pessoal",
			"2026-06-26",
		),
		filhos: dv(
			"Não divulgado",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Vida_pessoal",
			"2026-06-26",
		),
		formacao: dv(
			"Direito (USP — curso não concluído)",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Juventude",
			"2026-06-26",
		),
		profissao: dv(
			"Ativista político, empresário, músico",
			"https://pt.wikipedia.org/wiki/Renan_Santos",
			"2026-06-26",
		),
		religiao: dv(
			"Católico romano",
			"https://pt.wikipedia.org/wiki/Renan_Santos",
			"2026-06-26",
		),
		residencia: dv(
			"São Paulo, SP",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Juventude",
			"2026-06-26",
		),
		patrimonio: null,
		currentParty: dv(
			"Partido Missão (MISSÃO) — fundador e presidente desde 17/10/2023",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
			"2026-06-26",
		),
		partyHistory: [
		dv(
				"Missão (2023–presente)",
				"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
				"2026-06-26",
			),
		dv(
				"PSDB (2010–2015)",
				"https://pt.wikipedia.org/wiki/Renan_Santos#Carreira_pol%C3%ADtica",
				"2026-06-26",
			),
	],
		coalition: [
			{
				party: dv("Missão"),
				status: dv(
					"Candidatura própria",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
					"2026-06-26",
				),
			},
			{
				party: dv("Aroldo Medina (vice)"),
				status: dv(
					"Anunciado (01/07/2026)",
					"https://g1.globo.com/politica/eleicoes/2026/noticia/2026/07/02/renan-santos-anuncia-aroldo-medina-como-vice-em-chapa-a-presidencia.ghtml",
					"2026-07-02",
				),
			},
		],
		ideologicalPosition: dv(
			"Centro-direita / Liberal",
			"https://veja.abril.com.br/politica/renan-santos-mira-espaco-na-direita-e-afirma-que-bolsonarismo-se-tornou-insustentavel/",
			"2026-06-30",
		),
		careerYears: dvn(
			8,
			"https://pt.wikipedia.org/wiki/Renan_Santos#Carreira_pol%C3%ADtica",
			"2026-07-05",
		),
		currentPosition: dv(
			"Fundador e presidente do Partido Missão",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
			"2026-06-26",
		),
		timeline: [
		{
				year: dv(
					"2026",
					"https://g1.globo.com/politica/eleicoes/2026/noticia/2026/07/02/renan-santos-anuncia-aroldo-medina-como-vice-em-chapa-a-presidencia.ghtml",
					"2026-07-02",
				),
				event: dv(
					"Anuncia Aroldo Medina como vice na chapa do Missão.",
					"https://g1.globo.com/politica/eleicoes/2026/noticia/2026/07/02/renan-santos-anuncia-aroldo-medina-como-vice-em-chapa-a-presidencia.ghtml",
					"2026-07-02",
				),
			},
		{
				year: dv(
					"2026",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Pr%C3%A9-candidatura_presidencial_de_2026",
					"2026-06-26",
				),
				event: dv(
					"Pré-candidatura Presidência. 3–7% pesquisas.",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Pr%C3%A9-candidatura_presidencial_de_2026",
					"2026-06-26",
				),
			},
		{
				year: dv(
					"2025",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
					"2026-06-26",
				),
				event: dv(
					"TSE aprova registro Missão (04/11)",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
					"2026-06-26",
				),
			},
		{
				year: dv(
					"2023",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
					"2026-06-26",
				),
				event: dv(
					"Anuncia fundação Partido Missão",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
					"2026-06-26",
				),
			},
		{
				year: dv(
					"2020",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Den%C3%BAncia_por_tr%C3%A1fico_de_influ%C3%AAncia",
					"2026-06-26",
				),
				event: dv(
					"Denunciado MP-SP (tráfico influência) — rejeitada",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Den%C3%BAncia_por_tr%C3%A1fico_de_influ%C3%AAncia",
					"2026-06-26",
				),
			},
		{
				year: dv(
					"2015–2016",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Manifesta%C3%A7%C3%B5es_de_13_de_mar%C3%A7o_de_2016",
					"2026-06-26",
				),
				event: dv(
					"Lidera protestos impeachment Dilma (3,3 mi pessoas)",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Manifesta%C3%A7%C3%B5es_de_13_de_mar%C3%A7o_de_2016",
					"2026-06-26",
				),
			},
		{
				year: dv(
					"2014",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Movimento_Brasil_Livre",
					"2026-06-26",
				),
				event: dv(
					"Funda MBL com Kim Kataguiri",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Movimento_Brasil_Livre",
					"2026-06-26",
				),
			},
		{
				year: dv(
					"2013",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Manifesta%C3%A7%C3%A3o_contra_a_PEC_37_de_2013",
					"2026-06-26",
				),
				event: dv(
					"Participa Jornadas de Junho; contra PEC 37",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Manifesta%C3%A7%C3%A3o_contra_a_PEC_37_de_2013",
					"2026-06-26",
				),
			},
	],
		electionResults: [],
		scandals: [
			{
				name: dv(
					"Denúncia MP-SP (tráfico influência)",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Den%C3%BAncia_por_tr%C3%A1fico_de_influ%C3%AAncia",
					"2026-06-26",
				),
				status: dv(
					"rejeitado",
					"https://www.conjur.com.br/2020-nov-06/justica-rejeita-denuncia-renan-santos-trafico-influencia/",
					"2020-11-20",
				),
				description: dv(
					"Denúncia REJEITADA pela 1ª Vara de Crimes Tributários (2020). Confirmada pelo TJ-SP (2021).",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Den%C3%BAncia_por_tr%C3%A1fico_de_influ%C3%AAncia",
					"2026-06-26",
				),
				value: dv(
					"—",
					"https://pt.wikipedia.org/wiki/Renan_Santos#Den%C3%BAncia_por_tr%C3%A1fico_de_influ%C3%AAncia",
					"2026-06-26",
				),
			},
		],
		campaignFinance: {
			totalArrecadado: dv(
				"R$ 1,12 mi (crowdfunding)",
				"https://www.estadao.com.br/politica/renan-aposta-em-vaquinha-base-do-mbl-e-faria-lima-para-disputar-2026-sem-maquina-partidaria/",
				"2026-06-26",
			),
			totalGasto: dv(
				"R$ 1,12 mi (crowdfunding)",
				"https://www.estadao.com.br/politica/renan-aposta-em-vaquinha-base-do-mbl-e-faria-lima-para-disputar-2026-sem-maquina-partidaria/",
				"2026-06-26",
			),
			limiteGastos: dv(
				"R$ 133,4 mi (proj. ambos turnos)",
				"https://www.poder360.com.br/poder-eleicoes/tse-avalia-manter-teto-de-gastos-para-campanhas-em-2026/",
				"2026-06-20",
			),
			fontes: [
				{
					name: dv("Crowdfunding PF"),
				value: dvn(
					1.12,
					"https://www.estadao.com.br/politica/renan-aposta-em-vaquinha-base-do-mbl-e-faria-lima-para-disputar-2026-sem-maquina-partidaria/",
					"2026-07-05",
				),
					color: "#d97706",
				},
			],
			comparison: {
				name: dv(
					"Renan 2026 (est.)",
					"https://www.estadao.com.br/politica/renan-aposta-em-vaquinha-base-do-mbl-e-faria-lima-para-disputar-2026-sem-maquina-partidaria/",
					"2026-06-26",
				),
				arrecadado: dvn(1.12, "https://www.estadao.com.br/politica/renan-aposta-em-vaquinha-base-do-mbl-e-faria-lima-para-disputar-2026-sem-maquina-partidaria/", "2026-06-26"),
				gasto: dvn(1.12, "https://www.estadao.com.br/politica/renan-aposta-em-vaquinha-base-do-mbl-e-faria-lima-para-disputar-2026-sem-maquina-partidaria/", "2026-06-26"),
			},
		},
		positions: [
			{
				issue: dv(
					"Segurança Pública",
					"https://www.bbc.com/portuguese/articles/cn7846447j3o",
					"2026-04-28",
				),
				position: dv(
					'Endurecimento radical. "Prendeu, matou". Pena de morte p/ hediondos. Direito Penal do Inimigo contra facções.',
					"https://www.bbc.com/portuguese/articles/cn7846447j3o",
					"2026-04-28",
				),
			},

			{
				issue: dv(
					"Economia",
					"https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/",
					"2026-03-29",
				),
				position: dv(
					"Agenda liberal. Nova reforma da Previdência. Desindexação BPC do salário mínimo. Reforma trabalhista.",
					"https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/",
					"2026-03-29",
				),
			},
			{
				issue: dv(
					"Privatização",
					"https://sbtnews.sbt.com.br/noticia/politica/renan-santos-nega-ser-3-via-e-diz-que-vai-substituir-flavio",
					"2026-06-11",
				),
				position: dv(
					'Seletiva. Correios sim, Petrobras não, Embrapa não. BB/Caixa operações parcialmente. Crítico "liberobobismo".',
					"https://sbtnews.sbt.com.br/noticia/politica/renan-santos-nega-ser-3-via-e-diz-que-vai-substituir-flavio",
					"2026-06-11",
				),
			},

			{
				issue: dv(
					"Drogas",
					"https://www.metropoles.com/colunas/paulo-cappelli/renan-santos-explica-experiencia-com-cogumelos-fica-mais-produtivo",
					"2026-04-18",
				),
				position: dv(
					"Combate radical ao tráfico. Porém favorável ao uso medicinal de canabidiol e psilocibina. Admitiu microdosagem de cogumelo p/ produtividade.",
					"https://www.metropoles.com/colunas/paulo-cappelli/renan-santos-explica-experiencia-com-cogumelos-fica-mais-produtivo",
					"2026-04-18",
				),
			},
			{
				issue: dv(
					"Armas",
					"https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml",
					"2026-06-26",
				),
				position: dv(
					"Armamento civil. Legítima defesa. Flexibilização Estatuto Desarmamento (histórico MBL).",
					"https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Educação",
					"https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml",
					"2026-06-26",
				),
				position: dv(
					"Liberdade de ensino. Escolas cívico-militares. Meritocracia.",
					"https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Previdência",
					"https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/",
					"2026-03-29",
				),
				position: dv(
					"Nova reforma. Equiparação público/privado. Futura capitalização. Desindexar BPC do mínimo.",
					"https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/",
					"2026-03-29",
				),
			},

			{
				issue: dv(
					"Relações Exteriores",
					"https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/",
					"2026-05-28",
				),
				position: dv(
					'Alinhamento EUA (terras raras, F-35). Crítico "vassalagem à China". Abertura comercial. Milei/Bukele.',
					"https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/",
					"2026-05-28",
				),
			},
			{
				issue: dv(
					"Reforma Política",
					"https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/",
					"2026-05-28",
				),
				position: dv(
					"Anticartel partidário. Lei Responsabilidade Gerencial. Fusão municípios. Condicionar fundo partidário/emendas a desempenho.",
					"https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/",
					"2026-05-28",
				),
			},
			{
				issue: dv(
					"Infraestrutura",
					"https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/",
					"2026-03-29",
				),
				position: dv(
					"Prioridade. Estatuto Nacional da Desfavelização. Polos tecnológicos/data centers Nordeste. Zonas econômicas especiais.",
					"https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/",
					"2026-03-29",
				),
			},
			{
				issue: dv(
					"Fundo Eleitoral",
					"https://revistaoeste.com/politica/campanha-de-renan-santos-rejeita-fundo-eleitoral-e-aposta-em-vaquinha/",
					"2026-07-01",
				),
				position: dv(
					"Contra. Campanha via crowdfunding (vaquinha). Partido Missão sem fundo eleitoral consolidado. Defende financiamento voluntário.",
					"https://revistaoeste.com/politica/campanha-de-renan-santos-rejeita-fundo-eleitoral-e-aposta-em-vaquinha/",
					"2026-07-01",
				),
			},
			{
				issue: dv(
					"Cotas Raciais",
					"https://www.bbc.com/portuguese/articles/cn7846447j3o",
					"2026-04-28",
				),
				position: dv(
					"Contrário. Crítico das políticas de ação afirmativa nas universidades.",
					"https://www.bbc.com/portuguese/articles/cn7846447j3o",
					"2026-04-28",
				),
			},
			{
				issue: dv(
					"Assistência Social",
					"https://www.bbc.com/portuguese/articles/cn7846447j3o",
					"2026-04-28",
				),
				position: dv(
					'"Mutirão anti-Bolsa Família". Substituir benefício por frentes de trabalho. Homens e mulheres saudáveis devem trabalhar. Crítico do custo do BF retirado do salário de quem paga imposto.',
					"https://www.bbc.com/portuguese/articles/cn7846447j3o",
					"2026-04-28",
				),
			},
		],
	}

