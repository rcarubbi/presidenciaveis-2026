import type { Candidate } from "../types";
import { dv, dvn } from "@/lib/dataValue";
export const lula: Candidate = 	{
		id: "lula",
		name: dv(
			"Lula",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
			"2026-06-26",
		),
		fullName: dv(
			"Luiz Inácio Lula da Silva",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
			"2026-06-26",
		),
		photo: "/lula.png",
		photoPos: "center top",
		party: {
			name: dv("PT"),
			number: 13,
			logo: "/logos/pt.svg",
			color: "#cc2222",
			colorLight: "#e85555",
		},
		age: dvn(
			80,
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
			"2026-06-26",
		),
		birthYear: dvn(
			1945,
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
			"2026-06-26",
		),
		naturalidade: dv(
			"Caetés (Garanhuns), Pernambuco",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Origens_e_inf%C3%A2ncia",
			"2026-06-26",
		),
		estadoCivil: dv(
			'Casado com Rosângela Silva "Janja" (desde 2022)',
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Casamentos_e_filhos",
			"2026-06-26",
		),
		conjugesAnteriores: dv(
			"Maria de Lourdes (c.1969–1971, falecida); Marisa Letícia (c.1974–2017, falecida)",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Casamentos_e_filhos",
			"2026-06-26",
		),
		filhos: dv(
			"5: Marcos Cláudio, Lurian, Fábio Luís, Sandro Luís, Luís Cláudio",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Casamentos_e_filhos",
			"2026-06-26",
		),
		formacao: dv(
			"Torneiro mecânico (SENAI, 1963); primário até 5ª série",
			"https://www.gov.br/planalto/pt-br/conheca-a-presidencia/biografia-do-presidente/biografia-do-39o-presidente-da-republica",
			"2022-01-01",
		),
		profissao: dv(
			"Metalúrgico, sindicalista, político",
			"https://www.gov.br/planalto/pt-br/conheca-a-presidencia/biografia-do-presidente/biografia-do-39o-presidente-da-republica",
			"2022-01-01",
		),
		religiao: dv(
			"Católico",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Vida_pessoal",
			"2026-06-26",
		),
		residencia: dv(
			"Palácio da Alvorada, Brasília/DF",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
			"2026-06-26",
		),
		patrimonio: dvn(
			7414850.41,
			"https://g1.globo.com/politica/eleicoes/2022/noticia/2022/08/07/eleicoes-2022-lula-declara-patrimonio-de-r-74-milhoes-ao-tse.ghtml",
			"2022-08-07",
		),
		currentParty: dv(
			"PT (Partido dos Trabalhadores) — fundador desde 10/02/1980",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#In%C3%ADcio_da_carreira_pol%C3%ADtica_e_cria%C3%A7%C3%A3o_do_Partido_dos_Trabalhadores",
			"2026-06-26",
		),
		partyHistory: [
			dv(
				"PT (1980–presente)",
				"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#In%C3%ADcio_da_carreira_pol%C3%ADtica_e_cria%C3%A7%C3%A3o_do_Partido_dos_Trabalhadores",
				"2026-06-26",
			),
		],
		coalition: [
			{
				party: dv("PT"),
				status: dv(
					"Candidatura própria",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
					"2026-06-26",
				),
			},
			{
				party: dv("PSB (Alckmin vice)"),
				status: dv(
					"Confirmado (31/03/2026)",
					"https://www.cartacapital.com.br/politica/sem-acordo-com-o-centrao-lula-mantem-alckmin-e-repete-coligacao-de-2022/",
					"2026-03-31",
				),
			},
			{
				party: dv("PDT"),
				status: dv(
					"Acordo nacional (18/03/2026)",
					"https://revistaforum.com.br/politica/o-xadrez-de-2026-pt-psb-e-pdt-fecham-acordo-nacional-para-reeleicao-de-lula/",
					"2026-03-18",
				),
			},
			{
				party: dv("PCdoB"),
				status: dv(
					"Federação Brasil da Esperança",
					"https://pt.org.br/nossa-historia/",
					"2026-06-26",
				),
			},
			{
				party: dv("PV"),
				status: dv(
					"Federação Brasil da Esperança",
					"https://pt.org.br/nossa-historia/",
					"2026-06-26",
				),
			},
			{
				party: dv("PSOL"),
				status: dv(
					"Apoio",
					"https://www.cnnbrasil.com.br/eleicoes/psol-rejeita-federacao-com-pt-e-mantem-alianca-com-a-rede/",
					"2026-03-07",
				),
			},
			{
				party: dv("Rede"),
				status: dv(
					"Apoio",
					"https://www.cnnbrasil.com.br/eleicoes/psol-rejeita-federacao-com-pt-e-mantem-alianca-com-a-rede/",
					"2026-03-07",
				),
			},
		],
		ideologicalPosition: dv(
			"Centro-esquerda / Social-democrata",
			"https://www.nexojornal.com.br/expresso/2024/04/28/governo-lula-esquerda-ou-direita",
			"2026-06-30",
		),
		careerYears: dvn(
			40,
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
			"2026-06-26",
		),
		currentPosition: dv(
			"Presidente da República (2023–2026)",
			"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
			"2026-06-26",
		),
		timeline: [
			{
				year: dv(
					"1975",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Sindicalismo",
					"2026-06-26",
				),
				event: dv(
					"Presidente Sindicato Metalúrgicos ABC (92% votos)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Sindicalismo",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"1980",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#In%C3%ADcio_da_carreira_pol%C3%ADtica_e_cria%C3%A7%C3%A3o_do_Partido_dos_Trabalhadores",
					"2026-06-26",
				),
				event: dv(
					"Funda o PT; preso 31 dias (Lei Segurança Nacional)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#In%C3%ADcio_da_carreira_pol%C3%ADtica_e_cria%C3%A7%C3%A3o_do_Partido_dos_Trabalhadores",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"1986",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#In%C3%ADcio_da_carreira_pol%C3%ADtica_e_cria%C3%A7%C3%A3o_do_Partido_dos_Trabalhadores",
					"2026-06-26",
				),
				event: dv(
					"Deputado Federal Constituinte mais votado (650 mil votos)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#In%C3%ADcio_da_carreira_pol%C3%ADtica_e_cria%C3%A7%C3%A3o_do_Partido_dos_Trabalhadores",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"1989",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Candidatura_%C3%A0_Presid%C3%AAncia_da_Rep%C3%BAblica_em_1989",
					"2026-06-26",
				),
				event: dv(
					"1ª candidatura Presidência (perde 2ºT para Collor)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Candidatura_%C3%A0_Presid%C3%AAncia_da_Rep%C3%BAblica_em_1989",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2002",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Vit%C3%B3ria_em_2002",
					"2026-06-26",
				),
				event: dv(
					"Eleito Presidente (61,27% × José Serra)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Vit%C3%B3ria_em_2002",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2006",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Reelei%C3%A7%C3%A3o_em_2006",
					"2026-06-26",
				),
				event: dv(
					"Reeleito (60,83% × Geraldo Alckmin)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Reelei%C3%A7%C3%A3o_em_2006",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2010",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
					"2026-06-26",
				),
				event: dv(
					"Encerra mandato com 83% aprovação",
					"https://datafolha.folha.uol.com.br/opiniaopublica/2010/12/acima-das-expectativas-lula-encerra-mandato-com-melhor-avaliacao-da-historia.shtml",
					"2010-12-20",
				),
			},
			{
				year: dv(
					"2017",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				event: dv(
					"Condenado por Moro no caso tríplex",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2018",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Candidatura_presidencial_em_2018",
					"2026-06-26",
				),
				event: dv(
					"Preso 580 dias; candidatura barrada",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Candidatura_presidencial_em_2018",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2021",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				event: dv(
					"STF anula condenações; recupera direitos",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2022",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Campanha_presidencial_de_2022",
					"2026-06-26",
				),
				event: dv(
					"Eleito presidente 3ª vez (50,83% × Bolsonaro)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Campanha_presidencial_de_2022",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2026",
					"https://g1.globo.com/politica/noticia/2026/04/26/sem-lula-pt-aprova-manifesto-para-2026-com-foco-em-reeleicao-do-presidente.ghtml",
					"2026-04-26",
				),
				event: dv(
					'PT aprova manifesto "Construindo o Futuro" foco reeleição. Pré-candidato.',
					"https://g1.globo.com/politica/noticia/2026/04/26/sem-lula-pt-aprova-manifesto-para-2026-com-foco-em-reeleicao-do-presidente.ghtml",
					"2026-04-26",
				),
			},
			{
				year: dv(
					"2026",
					"https://g1.globo.com/politica/noticia/2026/06/24/jaques-wagner-pede-licenca-da-lideranca-do-governo-do-senado-apos-operacao-da-pf.ghtml",
					"2026-06-24",
				),
				event: dv(
					"Lula designa Teresa Leitão líder do governo no Senado após Wagner se afastar por investigação da PF",
					"https://g1.globo.com/politica/noticia/2026/06/24/jaques-wagner-pede-licenca-da-lideranca-do-governo-do-senado-apos-operacao-da-pf.ghtml",
					"2026-06-24",
				),
			},
		],
		electionResults: [
			{
				year: dvn(
					1986,
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Dep. Federal SP",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"650.134",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"—",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (mais votado)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					1989,
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Presidente",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"11.622.673 (1T)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"17,19%",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"2º turno (derrotado)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					1994,
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Presidente",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"17.122.127",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"27,04%",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Não eleito (1ºT)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					1998,
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Presidente",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"21.475.218",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"31,71%",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Não eleito (1ºT)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2002,
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Presidente",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"52.793.364 (2T)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"61,27%",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2006,
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Presidente",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"58.295.042 (2T)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"60,83%",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2022,
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Presidente",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"60.345.999 (2T)",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"50,83%",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Hist%C3%B3rico_eleitoral",
					"2026-06-26",
				),
			},
		],
		scandals: [
			{
				name: dv(
					"Mensalão",
					"https://pt.wikipedia.org/wiki/Mensal%C3%A3o",
					"2026-06-26",
				),
				status: dv(
					"arquivado",
					"https://pt.wikipedia.org/wiki/Mensal%C3%A3o",
					"2026-06-26",
				),
				description: dv(
					"Compra de votos no Congresso (2005). Lula não foi acusado. 25 condenados.",
					"https://pt.wikipedia.org/wiki/Mensal%C3%A3o",
					"2026-06-26",
				),
				value: dv(
					"R$ 101,6 mi",
					"https://pt.wikipedia.org/wiki/Mensal%C3%A3o",
					"2026-06-26",
				),
			},
			{
				name: dv(
					"Caso Tríplex",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				status: dv(
					"anulado",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				description: dv(
					"STF anulou por incompetência territorial da 13ª Vara. Sem julgamento de mérito. Processos reiniciados no DF.",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				value: dv(
					"R$ 3,7 mi",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
			},
			{
				name: dv(
					"Caso Sítio Atibaia",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				status: dv(
					"anulado",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				description: dv(
					"STF anulou por incompetência territorial (conexão Caso Tríplex). Sem julgamento de mérito. Processos reiniciados no DF.",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				value: dv(
					"R$ 1 mi",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
			},
			{
				name: dv(
					"Instituto Lula",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				status: dv(
					"anulado",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				description: dv(
					"Ações anuladas pelo STF (incompetência territorial). Sem julgamento de mérito.",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
				value: dv(
					"—",
					"https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva#Opera%C3%A7%C3%A3o_Lava_Jato",
					"2026-06-26",
				),
			},
			{
				name: dv(
					"Op. Sem Desconto",
					"https://www1.folha.uol.com.br/amp/poder/2026/05/investigadores-racham-sobre-envolvimento-de-lulinha-no-inss-e-grupo-quer-focar-fraudes.shtml",
					"2026-05-19",
				),
				status: dv(
					"ativo",
					"https://www1.folha.uol.com.br/amp/poder/2026/05/investigadores-racham-sobre-envolvimento-de-lulinha-no-inss-e-grupo-quer-focar-fraudes.shtml",
					"2026-05-19",
				),
				description: dv(
					'PF investiga fraudes em descontos do INSS com suspeitas sobre Fábio Luís "Lulinha". Sem indiciamento de Lula.',
					"https://www1.folha.uol.com.br/amp/poder/2026/05/investigadores-racham-sobre-envolvimento-de-lulinha-no-inss-e-grupo-quer-focar-fraudes.shtml",
					"2026-05-19",
				),
				value: dv(
					"—",
					"https://www1.folha.uol.com.br/amp/poder/2026/05/investigadores-racham-sobre-envolvimento-de-lulinha-no-inss-e-grupo-quer-focar-fraudes.shtml",
					"2026-05-19",
				),
			},
			{
				name: dv(
					"Op. Compliance Zero",
					"https://www.bbc.com/portuguese/articles/cp36nzdvyp4o",
					"2026-06-18",
				),
				status: dv(
					"ativo",
					"https://www.bbc.com/portuguese/articles/cp36nzdvyp4o",
					"2026-06-18",
				),
				description: dv(
					"PF investiga esquema bilionário Banco Master. Alvo: Jaques Wagner (ex-líder governo Senado, afastou-se 24/06), não Lula.",
					"https://g1.globo.com/politica/noticia/2026/06/24/jaques-wagner-pede-licenca-da-lideranca-do-governo-do-senado-apos-operacao-da-pf.ghtml",
					"2026-06-24",
				),
				value: dv(
					"—",
					"https://www.bbc.com/portuguese/articles/cp36nzdvyp4o",
					"2026-06-18",
				),
			},
		],
		campaignFinance: {
			totalArrecadado: dv(
				"R$ 105 mi (proj. 1º turno)",
				"https://oglobo.globo.com/politica/noticia/2026/06/17/pt-deve-reservar-r-105-milhoes-para-campanha-de-lula-gastar-no-primeiro-turno.ghtml",
				"2026-06-17",
			),
			totalGasto: dv(
				"R$ 105 mi (proj. 1º turno)",
				"https://oglobo.globo.com/politica/noticia/2026/06/17/pt-deve-reservar-r-105-milhoes-para-campanha-de-lula-gastar-no-primeiro-turno.ghtml",
				"2026-06-17",
			),
			limiteGastos: dv(
				"R$ 133,4 mi (proj. ambos turnos)",
				"https://www.poder360.com.br/poder-eleicoes/tse-avalia-manter-teto-de-gastos-para-campanhas-em-2026/",
				"2026-06-19",
			),
			fontes: [
				{
					name: dv("FEFC"),
					value: dvn(
						105,
						"https://oglobo.globo.com/politica/noticia/2026/06/17/pt-deve-reservar-r-105-milhoes-para-campanha-de-lula-gastar-no-primeiro-turno.ghtml",
						"2026-06-17",
					),
					color: "#cc2222",
				},
			],
			comparison: {
				name: dv(
					"Lula 2026 (proj.)",
					"https://oglobo.globo.com/politica/noticia/2026/06/17/pt-deve-reservar-r-105-milhoes-para-campanha-de-lula-gastar-no-primeiro-turno.ghtml",
					"2026-06-17",
				),
				arrecadado: dvn(
					105,
					"https://oglobo.globo.com/politica/noticia/2026/06/17/pt-deve-reservar-r-105-milhoes-para-campanha-de-lula-gastar-no-primeiro-turno.ghtml",
					"2026-06-17",
				),
				gasto: dvn(
					105,
					"https://oglobo.globo.com/politica/noticia/2026/06/17/pt-deve-reservar-r-105-milhoes-para-campanha-de-lula-gastar-no-primeiro-turno.ghtml",
					"2026-06-17",
				),
			},
		},
		positions: [
			{
				issue: dv(
					"Aborto",
					"https://www.bbc.com/portuguese/articles/c888dj7y7elo",
					"2024-06-15",
				),
				position: dv(
					"Pessoalmente contra. Saúde pública. Contra PL 1904/2024.",
					"https://www.bbc.com/portuguese/articles/c888dj7y7elo",
					"2024-06-15",
				),
			},
			{
				issue: dv(
					"Drogas",
					"https://valor.globo.com/politica/noticia/2024/06/26/apos-stf-julgar-porte-de-maconha-lula-diz-que-e-equivoco-tratar-uso-das-drogas-pelo-codigo-penal.ghtml",
					"2024-06-26",
				),
				position: dv(
					"Redução de danos, prevenção. Não apoia legalização recreativa.",
					"https://valor.globo.com/politica/noticia/2024/06/26/apos-stf-julgar-porte-de-maconha-lula-diz-que-e-equivoco-tratar-uso-das-drogas-pelo-codigo-penal.ghtml",
					"2024-06-26",
				),
			},
			{
				issue: dv(
					"Armas",
					"https://g1.globo.com/politica/noticia/2026/05/12/governo-federal-lanca-plano-de-combate-ao-crime-organizado-veja-acoes.ghtml",
					"2026-05-12",
				),
				position: dv(
					"Retomada Estatuto Desarmamento. Admite armas p/ produtores rurais.",
					"https://g1.globo.com/politica/noticia/2026/05/12/governo-federal-lanca-plano-de-combate-ao-crime-organizado-veja-acoes.ghtml",
					"2026-05-12",
				),
			},
			{
				issue: dv(
					"Privatização",
					"https://g1.globo.com/se/sergipe/noticia/2026/05/29/lula-em-sergipe.ghtml",
					"2026-05-29",
				),
				position: dv(
					"Contrário. Fortalecimento da empresa pública.",
					"https://g1.globo.com/se/sergipe/noticia/2026/05/29/lula-em-sergipe.ghtml",
					"2026-05-29",
				),
			},
			{
				issue: dv(
					"Reforma Tributária",
					"https://g1.globo.com/economia/noticia/2025/03/18/mudancas-no-ir-imposto-para-super-rico-comeca-em-25percent-a-partir-de-r-600-mil-por-ano-e-busca-arrecadar-r-25-bilhoes-em-2026.ghtml",
					"2025-03-18",
				),
				position: dv(
					'Progressiva. "Ricos pagarem IR". Tributação dividendos.',
					"https://g1.globo.com/economia/noticia/2025/03/18/mudancas-no-ir-imposto-para-super-rico-comeca-em-25percent-a-partir-de-r-600-mil-por-ano-e-busca-arrecadar-r-25-bilhoes-em-2026.ghtml",
					"2025-03-18",
				),
			},
			{
				issue: dv(
					"Previdência",
					"https://horadopovo.com.br/centrais-levam-pauta-a-lula-que-critica-reformas-e-convoca-mobilizacao-para-avanco-em-direitos-trabalhistas/",
					"2026-04-16",
				),
				position: dv(
					"Revisão EC 103/2019. Ampliar cobertura.",
					"https://horadopovo.com.br/centrais-levam-pauta-a-lula-que-critica-reformas-e-convoca-mobilizacao-para-avanco-em-direitos-trabalhistas/",
					"2026-04-16",
				),
			},
			{
				issue: dv(
					"Trabalhista",
					"https://www.estadao.com.br/politica/lula-critica-reforma-trabalhista-e-chama-bolsonaro-de-a-coisa-que-veio-depois-do-temer-nprp/",
					"2026-04-16",
				),
				position: dv(
					"Revogar marcos reforma 2017. Proteção apps. Apoio fim 6x1.",
					"https://www.estadao.com.br/politica/lula-critica-reforma-trabalhista-e-chama-bolsonaro-de-a-coisa-que-veio-depois-do-temer-nprp/",
					"2026-04-16",
				),
			},
			{
				issue: dv(
					"Casamento LGBT+",
					"https://www.voxms.com.br/politica/governo-lula-lanca-campanha-de-visibilidade-e-defesa-dos-direitos-lgbtqia",
					"2026-06-05",
				),
				position: dv(
					'Apoio união civil homoafetiva. "Brasil sem Homofobia".',
					"https://www.voxms.com.br/politica/governo-lula-lanca-campanha-de-visibilidade-e-defesa-dos-direitos-lgbtqia",
					"2026-06-05",
				),
			},
			{
				issue: dv(
					"Regulação Mídia e Redes",
					"https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/",
					"2026-05-30",
				),
				position: dv(
					"Regular sem censura. Combate desinformação.",
					"https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/",
					"2026-05-30",
				),
			},
			{
				issue: dv(
					"Meio Ambiente",
					"https://g1.globo.com/politica/noticia/2026/05/18/lula-cita-possivel-interesse-de-trump-e-defende-exploracao-da-margem-equatorial-pela-petrobras-garantir-para-o-nosso-pais.ghtml",
					"2026-05-18",
				),
				position: dv(
					"Prioridade. Combate desmatamento. Transição energética.",
					"https://g1.globo.com/politica/noticia/2026/05/18/lula-cita-possivel-interesse-de-trump-e-defende-exploracao-da-margem-equatorial-pela-petrobras-garantir-para-o-nosso-pais.ghtml",
					"2026-05-18",
				),
			},
			{
				issue: dv(
					"Mobilidade Urbana",
					"https://www.cnnbrasil.com.br/eleicoes/lula-vai-propor-sus-do-transporte-com-tarifa-zero-em-plano-de-governo/",
					"2026-02-23",
				),
				position: dv(
					"Tarifa zero no transporte público. Sistema Nacional de Mobilidade Urbana.",
					"https://www.cnnbrasil.com.br/eleicoes/lula-vai-propor-sus-do-transporte-com-tarifa-zero-em-plano-de-governo/",
					"2026-02-23",
				),
			},
			{
				issue: dv(
					"Segurança Pública",
					"https://g1.globo.com/politica/noticia/2026/05/12/governo-federal-lanca-plano-de-combate-ao-crime-organizado-veja-acoes.ghtml",
					"2026-05-12",
				),
				position: dv(
					"Repressão qualificada (inteligência). PEC Segurança. PL Antifacção.",
					"https://g1.globo.com/politica/noticia/2026/05/12/governo-federal-lanca-plano-de-combate-ao-crime-organizado-veja-acoes.ghtml",
					"2026-05-12",
				),
			},
			{
				issue: dv(
					"Fundo Eleitoral",
					"https://www1.folha.uol.com.br/poder/2024/02/lula-critica-pt-e-diz-que-fundo-eleitoral-e-cooptado-por-deputados-com-mandato.shtml",
					"2024-02-02",
				),
				position: dv(
					"Crítico. Fundo cooptado por deputados com mandato. Defende distribuição mais equilibrada.",
					"https://www1.folha.uol.com.br/poder/2024/02/lula-critica-pt-e-diz-que-fundo-eleitoral-e-cooptado-por-deputados-com-mandato.shtml",
					"2024-02-02",
				),
			},
		],
	}

