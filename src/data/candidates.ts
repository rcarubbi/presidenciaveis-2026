import type { Candidate } from "../types";
import { dv, dvn } from "@/lib/dataValue";

export const candidates: Candidate[] = [
	{
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
			logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/PT_%28Brazil%29_logo_2021.svg",
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
					"PF investiga esquema bilionário Banco Master. Alvo: Jaques Wagner (líder governo Senado), não Lula.",
					"https://www.bbc.com/portuguese/articles/cp36nzdvyp4o",
					"2026-06-18",
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
				"https://www.poder360.com.br/poder-eleicoes/pt-quer-reservar-valor-maximo-permitido-pelo-tse-para-campanha-de-lula/",
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
					"https://www.gov.br/casacivil/pt-br/assuntos/noticias/2026/maio/r-11-bilhoes-governo-do-brasil-lanca-ofensiva-nacional-contra-o-crime-organizado",
					"2026-05-12",
				),
				position: dv(
					"Retomada Estatuto Desarmamento. Admite armas p/ produtores rurais.",
					"https://www.gov.br/casacivil/pt-br/assuntos/noticias/2026/maio/r-11-bilhoes-governo-do-brasil-lanca-ofensiva-nacional-contra-o-crime-organizado",
					"2026-05-12",
				),
			},
			{
				issue: dv(
					"Privatização",
					"https://agenciabrasil.ebc.com.br/politica/noticia/2026-05/lula-diz-sonhar-em-reverter-privatizacoes-de-empresas-estrategicas",
					"2026-05-29",
				),
				position: dv(
					"Contrário. Fortalecimento da empresa pública.",
					"https://agenciabrasil.ebc.com.br/politica/noticia/2026-05/lula-diz-sonhar-em-reverter-privatizacoes-de-empresas-estrategicas",
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
					"https://agenciabrasil.ebc.com.br/economia/noticia/2026-05/lula-defende-exploracao-na-margem-equatorial-com-responsabilidade",
					"2026-05-18",
				),
				position: dv(
					"Prioridade. Combate desmatamento. Transição energética.",
					"https://agenciabrasil.ebc.com.br/economia/noticia/2026-05/lula-defende-exploracao-na-margem-equatorial-com-responsabilidade",
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
					"https://www.gov.br/casacivil/pt-br/assuntos/noticias/2026/maio/r-11-bilhoes-governo-do-brasil-lanca-ofensiva-nacional-contra-o-crime-organizado",
					"2026-05-12",
				),
				position: dv(
					"Repressão qualificada (inteligência). PEC Segurança. PL Antifacção.",
					"https://www.gov.br/casacivil/pt-br/assuntos/noticias/2026/maio/r-11-bilhoes-governo-do-brasil-lanca-ofensiva-nacional-contra-o-crime-organizado",
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
	},
	{
		id: "flavio",
		name: dv(
			"Flávio Bolsonaro",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro",
			"2026-06-26",
		),
		fullName: dv(
			"Flávio Nantes Bolsonaro",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro",
			"2026-06-26",
		),
		photo: "/flavio.png",
		photoPos: "center top",
		party: {
			name: dv("PL"),
			number: 22,
			logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Partido_Liberal_%28Brazil%29_logo.svg",
			color: "#1a4fa0",
			colorLight: "#3b7dd8",
		},
		age: dvn(
			45,
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro",
			"2026-06-26",
		),
		birthYear: dvn(
			1981,
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro",
			"2026-06-26",
		),
		naturalidade: dv(
			"Resende, Rio de Janeiro",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro",
			"2026-06-26",
		),
		estadoCivil: dv(
			"Casado com Fernanda Antunes Figueira (desde ~2010)",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Vida_pessoal",
			"2026-06-26",
		),
		conjugesAnteriores: dv(
			"Nenhum",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Vida_pessoal",
			"2026-06-26",
		),
		filhos: dv(
			"2 filhas (Carolina e Marina)",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Vida_pessoal",
			"2026-06-26",
		),
		formacao: dv(
			"Direito (UCAM, 2008); especializações em ciência política (UFRJ), políticas públicas (IUPERJ), empreendedorismo (FGV)",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Forma%C3%A7%C3%A3o",
			"2026-06-26",
		),
		profissao: dv(
			"Político, empresário, advogado",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro",
			"2026-06-26",
		),
		religiao: dv(
			"Cristão protestante (batista)",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Religi%C3%A3o",
			"2026-06-26",
		),
		residencia: dv(
			"Rio de Janeiro, RJ",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro",
			"2026-06-26",
		),
		patrimonio: dvn(
			1740000,
			"https://www.polemicaparaiba.com.br/politica/patrimonio-declarado-pelos-pre-candidatos-a-presidencia-varia-de-r-0-a-r-1298-milhoes-apontam-dados-do-tse-veja-quem-lidera-a-lista/",
			"2026-05-31",
		),
		currentParty: dv(
			"PL (Partido Liberal) — desde 2022",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
			"2026-06-26",
		),
		partyHistory: [
			dv(
				"PPB (2002–2003)",
				"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"PP (2003–2005)",
				"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"PFL (2005–2007)",
				"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"PSC (2007–2009)",
				"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"PSL (2009–2022)",
				"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"PL (2022–presente)",
				"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
				"2026-06-26",
			),
		],
		coalition: [
			{
				party: dv("PL"),
				status: dv(
					"Candidatura própria",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
					"2026-06-26",
				),
			},
		],
		ideologicalPosition: dv(
			"Direita / Conservador",
			"https://www.gazetadopovo.com.br/ideias/quem-e-quem-direita-brasileira-guia/",
			"2026-06-30",
		),
		careerYears: dvn(
			22,
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Carreira_pol%C3%ADtica",
			"2026-06-26",
		),
		currentPosition: dv(
			"Senador da República pelo RJ (2019–2026)",
			"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Senador_da_Rep%C3%BAblica_(2019%E2%80%93presente)",
			"2026-06-26",
		),
		timeline: [
			{
				year: dv(
					"2004",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Deputado_estadual",
					"2026-06-26",
				),
				event: dv(
					"Eleito vereador RJ (suplente, assume 2005)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Deputado_estadual",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2008",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Deputado_estadual",
					"2026-06-26",
				),
				event: dv(
					"Reeleito vereador RJ (35.498 votos)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Deputado_estadual",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2010",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Deputado_estadual",
					"2026-06-26",
				),
				event: dv(
					"Eleito Deputado Estadual RJ (94.902 votos)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Deputado_estadual",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2014",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Deputado_estadual",
					"2026-06-26",
				),
				event: dv(
					"Reeleito Dep. Estadual RJ (126.512 votos)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Deputado_estadual",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2018",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Senador_da_Rep%C3%BAblica_(2019%E2%80%93presente)",
					"2026-06-26",
				),
				event: dv(
					"Eleito Senador RJ — mais votado do Brasil (4.099.888 votos)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Senador_da_Rep%C3%BAblica_(2019%E2%80%93presente)",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2019",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Senador_da_Rep%C3%BAblica_(2019%E2%80%93presente)",
					"2026-06-26",
				),
				event: dv(
					"Preside CCJ do Senado",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Senador_da_Rep%C3%BAblica_(2019%E2%80%93presente)",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2022",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Senador_da_Rep%C3%BAblica_(2019%E2%80%93presente)",
					"2026-06-26",
				),
				event: dv(
					"Reeleito Senador RJ (1.839.409 votos)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Senador_da_Rep%C3%BAblica_(2019%E2%80%93presente)",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2024",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Caso_Queiroz_e_acusa%C3%A7%C3%A3o_de_peculato",
					"2026-06-26",
				),
				event: dv(
					"Caso rachadinhas arquivado",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Caso_Queiroz_e_acusa%C3%A7%C3%A3o_de_peculato",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2025",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Pr%C3%A9-candidatura_%C3%A0_Presid%C3%AAncia_da_Rep%C3%BAblica_em_2026",
					"2026-06-26",
				),
				event: dv(
					"STF rejeita reabertura; lança pré-candidatura",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Pr%C3%A9-candidatura_%C3%A0_Presid%C3%AAncia_da_Rep%C3%BAblica_em_2026",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2026",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Esc%C3%A2ndalo_do_Banco_Master_e_filme_Dark_Horse",
					"2026-06-26",
				),
				event: dv(
					'Plano "Brasil Sem Medo" (18/06). Dark Horse no STF.',
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Esc%C3%A2ndalo_do_Banco_Master_e_filme_Dark_Horse",
					"2026-06-26",
				),
			},
		],
		electionResults: [
			{
				year: dvn(
					2004,
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Vereador RJ",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"25.146",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"0,82%",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Suplente (assumiu 2005)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2008,
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Vereador RJ",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"35.498",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"1,13%",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2010,
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Dep. Estadual RJ",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"94.902",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"1,69%",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2014,
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Dep. Estadual RJ",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"126.512",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"2,15%",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2018,
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Senador RJ",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"4.099.888",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"31,17%",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (mais votado BR)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2022,
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Senador RJ",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"1.839.409",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"23,50%",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (mais votado RJ)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
		],
		scandals: [
			{
				name: dv(
					"Rachadinhas (Queijadinhas)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Caso_Queiroz_e_acusa%C3%A7%C3%A3o_de_peculato",
					"2026-06-26",
				),
				status: dv(
					"arquivado",
					"https://g1.globo.com/rj/rio-de-janeiro/noticia/2024/04/23/tj-rj-arquiva-inquerito-que-investigava-flavio-bolsonaro-no-caso-rachadinhas.ghtml",
					"2024-04-23",
				),
				description: dv(
					"Esquema de desvio salarial na Alerj. Arquivado pelo TJ-RJ (2024). STF Gilmar Mendes rejeitou reabertura (fev/2025) por questões processuais (perda prazo MP, foro).",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Caso_Queiroz_e_acusa%C3%A7%C3%A3o_de_peculato",
					"2026-06-26",
				),
				value: dv(
					"R$ 2–10 mi",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Caso_Queiroz_e_acusa%C3%A7%C3%A3o_de_peculato",
					"2026-06-26",
				),
			},
			{
				name: dv(
					"Caso Coaf",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Caso_Queiroz_e_acusa%C3%A7%C3%A3o_de_peculato",
					"2026-06-26",
				),
				status: dv(
					"arquivado",
					"https://g1.globo.com/rj/rio-de-janeiro/noticia/2024/04/23/tj-rj-arquiva-inquerito-que-investigava-flavio-bolsonaro-no-caso-rachadinhas.ghtml",
					"2024-04-23",
				),
				description: dv(
					"Movimentação atípica R$ 1,2 mi (Queiroz). Absorvido pelo caso rachadinhas.",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Caso_Queiroz_e_acusa%C3%A7%C3%A3o_de_peculato",
					"2026-06-26",
				),
				value: dv(
					"R$ 1,2 mi",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Caso_Queiroz_e_acusa%C3%A7%C3%A3o_de_peculato",
					"2026-06-26",
				),
			},
			{
				name: dv(
					"Dark Horse (Banco Master)",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Esc%C3%A2ndalo_do_Banco_Master_e_filme_Dark_Horse",
					"2026-06-26",
				),
				status: dv(
					"ativo",
					"https://www.cnnbrasil.com.br/politica/stf-andre-mendonca-e-relator-de-inquerito-que-investiga-flavio-bolsonaro-por-dark-horse/",
					"2026-05-23",
				),
				description: dv(
					"PF investiga solicitação de R$ 134 mi ao Banco Master. Relator: STF André Mendonça.",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Esc%C3%A2ndalo_do_Banco_Master_e_filme_Dark_Horse",
					"2026-06-26",
				),
				value: dv(
					"R$ 134 mi",
					"https://g1.globo.com/politica/noticia/2026/05/16/pf-aponta-que-flavio-bolsonaro-solicitou-r-134-milhoes-ao-banco-master.ghtml",
					"2026-05-16",
				),
			},
			{
				name: dv(
					"Abin Paralela",
					"https://www.cnnbrasil.com.br/politica/alvos-da-abin-paralela-esconderam-se-em-shopping-no-riozinho-diz-pf/",
					"2026-04-10",
				),
				status: dv(
					"ativo",
					"https://www.cnnbrasil.com.br/politica/alvos-da-abin-paralela-esconderam-se-em-shopping-no-riozinho-diz-pf/",
					"2026-04-10",
				),
				description: dv(
					"Espionagem a auditores do Coaf que investigavam Flávio. Inquérito no STF.",
					"https://www.cnnbrasil.com.br/politica/alvos-da-abin-paralela-esconderam-se-em-shopping-no-riozinho-diz-pf/",
					"2026-04-10",
				),
				value: dv(
					"—",
					"https://www.cnnbrasil.com.br/politica/alvos-da-abin-paralela-esconderam-se-em-shopping-no-riozinho-diz-pf/",
					"2026-04-10",
				),
			},
		],
		campaignFinance: {
			totalArrecadado: dv(
				"R$ 120 mi (proj.)",
				"https://dedemontalvao.blogspot.com/2026/06/campanha-de-flavio-bolsonaro-pressiona.html",
				"2026-06-01",
			),
			totalGasto: dv(
				"R$ 120 mi (proj.)",
				"https://dedemontalvao.blogspot.com/2026/06/campanha-de-flavio-bolsonaro-pressiona.html",
				"2026-06-01",
			),
			limiteGastos: dv(
				"R$ 88,9 mi (proj.)",
				"https://www.poder360.com.br/poder-eleicoes/tse-avalia-manter-teto-de-gastos-para-campanhas-em-2026/",
				"2026-06-20",
			),
			fontes: [
				{
					name: dv("FEFC"),
					value: dvn(
						80,
						"https://g1.globo.com/politica/eleicoes/2026/noticia/2026/06/20/fundo-eleitoral-partidos-2026.ghtml",
						"2026-06-20",
					),
					color: "#1a4fa0",
				},
				{
					name: dv("Doações PF"),
					value: dvn(
						40,
						"https://regionalzao.com.br/politica/pl-gastar-mais-de-1-bilhao-eleicoes-2026/",
						"2026-06-13",
					),
					color: "#93c5fd",
				},
			],
			comparison: {
				name: dv(
					"Flávio 2026 (proj.)",
					"https://dedemontalvao.blogspot.com/2026/06/campanha-de-flavio-bolsonaro-pressiona.html",
					"2026-06-01",
				),
				arrecadado: dvn(
					120,
					"https://dedemontalvao.blogspot.com/2026/06/campanha-de-flavio-bolsonaro-pressiona.html",
					"2026-06-01",
				),
				gasto: dvn(
					120,
					"https://dedemontalvao.blogspot.com/2026/06/campanha-de-flavio-bolsonaro-pressiona.html",
					"2026-06-01",
				),
			},
		},
		positions: [
			{
				issue: dv(
					"Segurança Pública",
					"https://g1.globo.com/sp/sao-paulo/eleicoes/2026/noticia/2026/06/18/flavio-bolsonaro-lanca-pacote-de-seguranca-com-reducao-da-maioridade-penal-e-castracao-quimica.ghtml",
					"2026-06-18",
				),
				position: dv(
					'Bandeira principal. "Brasil Sem Medo". Endurecimento penal.',
					"https://g1.globo.com/sp/sao-paulo/eleicoes/2026/noticia/2026/06/18/flavio-bolsonaro-lanca-pacote-de-seguranca-com-reducao-da-maioridade-penal-e-castracao-quimica.ghtml",
					"2026-06-18",
				),
			},
			{
				issue: dv(
					"Armas",
					"https://jornaltaguacei.com.br/noticias/22/02/2026/pre-candidato-flavio-bolsonaro-defende-mais-privatizacao-prisoes-e-armas-no-brasil/",
					"2026-02-22",
				),
				position: dv(
					"Armamento civil amplo. Contra Estatuto Desarmamento.",
					"https://jornaltaguacei.com.br/noticias/22/02/2026/pre-candidato-flavio-bolsonaro-defende-mais-privatizacao-prisoes-e-armas-no-brasil/",
					"2026-02-22",
				),
			},
			{
				issue: dv(
					"Aborto",
					"https://oglobo.globo.com/politica/noticia/2026/06/03/de-aborto-a-maioridade-penal-oposicao-no-congresso-tenta-aprovar-propostas-que-sao-bandeiras-eleitorais-antes-da-campanha.ghtml",
					"2026-06-03",
				),
				position: dv(
					"Totalmente contra. Apoiou PL 1904/2024.",
					"https://oglobo.globo.com/politica/noticia/2026/06/03/de-aborto-a-maioridade-penal-oposicao-no-congresso-tenta-aprovar-propostas-que-sao-bandeiras-eleitorais-antes-da-campanha.ghtml",
					"2026-06-03",
				),
			},
			{
				issue: dv(
					"Drogas",
					"https://exame.com/brasil/flavio-bolsonaro-aposta-em-modelo-el-salvador-e-reducao-da-maioridade-em-plano-de-seguranca/",
					"2026-06-18",
				),
				position: dv(
					"Contra qualquer legalização. Internação compulsória.",
					"https://exame.com/brasil/flavio-bolsonaro-aposta-em-modelo-el-salvador-e-reducao-da-maioridade-em-plano-de-seguranca/",
					"2026-06-18",
				),
			},
			{
				issue: dv(
					"Casamento LGBT+",
					"https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/",
					"2026-02-22",
				),
				position: dv(
					"Contra. Família tradicional.",
					"https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/",
					"2026-02-22",
				),
			},
			{
				issue: dv(
					"Privatização",
					"https://jornaltaguacei.com.br/noticias/22/02/2026/pre-candidato-flavio-bolsonaro-defende-mais-privatizacao-prisoes-e-armas-no-brasil/",
					"2026-02-22",
				),
				position: dv(
					"A favor. Eficiência setor privado.",
					"https://jornaltaguacei.com.br/noticias/22/02/2026/pre-candidato-flavio-bolsonaro-defende-mais-privatizacao-prisoes-e-armas-no-brasil/",
					"2026-02-22",
				),
			},
			{
				issue: dv(
					"Reforma Tributária",
					"https://jornaltaguacei.com.br/noticias/22/02/2026/pre-candidato-flavio-bolsonaro-defende-mais-privatizacao-prisoes-e-armas-no-brasil/",
					"2026-02-22",
				),
				position: dv(
					"Simplificação. Contra alíquotas progressivas.",
					"https://jornaltaguacei.com.br/noticias/22/02/2026/pre-candidato-flavio-bolsonaro-defende-mais-privatizacao-prisoes-e-armas-no-brasil/",
					"2026-02-22",
				),
			},
			{
				issue: dv(
					"Educação",
					"https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/",
					"2026-02-22",
				),
				position: dv(
					"Qualificação tech/AI. 800 mil vagas ociosas em TI por falta de capacitação.",
					"https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/",
					"2026-02-22",
				),
			},
			{
				issue: dv(
					"Meio Ambiente",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Posi%C3%A7%C3%B5es_pol%C3%ADticas",
					"2026-06-26",
				),
				position: dv(
					'Exploração Amazônia "responsável". Crítico ativismo.',
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Posi%C3%A7%C3%B5es_pol%C3%ADticas",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Regulação Mídia e Redes",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Posi%C3%A7%C3%B5es_pol%C3%ADticas",
					"2026-06-26",
				),
				position: dv(
					"Contra. Liberdade total expressão.",
					"https://pt.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro#Posi%C3%A7%C3%B5es_pol%C3%ADticas",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Fundo Eleitoral",
					"https://valor.globo.com/politica/noticia/2019/12/06/flavio-bolsonaro-diz-que-se-enganou-ao-votar-a-favor-de-aumento-do-fundo-eleitoral.ghtml",
					"2019-12-06",
				),
				position: dv(
					"Contra. Disse que se enganou ao votar a favor do aumento p/ R$ 3,8 bi em 2019. Defende financiamento privado.",
					"https://valor.globo.com/politica/noticia/2019/12/06/flavio-bolsonaro-diz-que-se-enganou-ao-votar-a-favor-de-aumento-do-fundo-eleitoral.ghtml",
					"2019-12-06",
				),
			},
		],
	},
	{
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
			logo: "https://filiacao.missao.org.br/images/logo_missao_onca_c.svg",
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
				"PSDB (2010–2015)",
				"https://pt.wikipedia.org/wiki/Renan_Santos#Carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"Missão (2023–presente)",
				"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
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
		],
		ideologicalPosition: dv(
			"Centro-direita / Liberal",
			"https://www.youtube.com/watch?v=fZlo3fybIAU",
			"2026-06-30",
		),
		careerYears: dvn(
			12,
			"https://pt.wikipedia.org/wiki/Renan_Santos#Carreira_pol%C3%ADtica",
			"2026-06-26",
		),
		currentPosition: dv(
			"Fundador e presidente do Partido Missão",
			"https://pt.wikipedia.org/wiki/Renan_Santos#Partido_Miss%C3%A3o",
			"2026-06-26",
		),
		timeline: [
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
					"https://g1.globo.com/sp/sao-paulo/noticia/2020/11/20/justica-de-sp-rejeita-denuncia-contra-fundador-do-mbl-renan-santos-por-trafico-de-influencia.ghtml",
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
				"https://queroapoiar.com.br/renan",
				"2026-06-26",
			),
			totalGasto: dv(
				"R$ 1,12 mi (crowdfunding)",
				"https://queroapoiar.com.br/renan",
				"2026-06-26",
			),
			limiteGastos: dv(
				"R$ 133,4 mi (não deve atingir)",
				"https://www.poder360.com.br/poder-eleicoes/tse-avalia-manter-teto-de-gastos-para-campanhas-em-2026/",
				"2026-06-20",
			),
			fontes: [
				{
					name: dv("Crowdfunding PF"),
					value: dvn(
						1.12,
						"https://www.poder360.com.br/poder-eleicoes/renan-santos-comemora-r-500-mil-em-doacao-eleitoral/",
						"2026-06-03",
					),
					color: "#d97706",
				},
			],
			comparison: {
				name: dv(
					"Renan 2026 (est.)",
					"https://queroapoiar.com.br/renan",
					"2026-06-26",
				),
				arrecadado: dvn(1.12, "https://queroapoiar.com.br/renan", "2026-06-26"),
				gasto: dvn(1.12, "https://queroapoiar.com.br/renan", "2026-06-26"),
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
					"https://caminhodamissao.com/candidato/renan-santos",
					"2026-06-26",
				),
				position: dv(
					"Armamento civil. Legítima defesa. Flexibilização Estatuto Desarmamento (histórico MBL).",
					"https://caminhodamissao.com/candidato/renan-santos",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Educação",
					"https://caminhodamissao.com/candidato/renan-santos",
					"2026-06-26",
				),
				position: dv(
					"Liberdade de ensino. Escolas cívico-militares. Meritocracia.",
					"https://caminhodamissao.com/candidato/renan-santos",
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
					"https://aonpelavida.com.br/renan-santos-aparece-em-3o-lugar-na-pesquisa-atlasintel",
					"2026-03-26",
				),
				position: dv(
					"Contra. Campanha via crowdfunding (vaquinha). Partido Missão sem fundo eleitoral consolidado. Defende financiamento voluntário.",
					"https://aonpelavida.com.br/renan-santos-aparece-em-3o-lugar-na-pesquisa-atlasintel",
					"2026-03-26",
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
	},
	{
		id: "caiado",
		name: dv(
			"Ronaldo Caiado",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado",
			"2026-06-26",
		),
		fullName: dv(
			"Ronaldo Ramos Caiado",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado",
			"2026-06-26",
		),
		photo: "/caiado.png",
		photoPos: "center 25%",
		party: {
			name: dv("PSD"),
			number: 55,
			logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/PSD_Brazil_logo.svg",
			color: "#1a4fa0",
			colorLight: "#3b7dd8",
		},
		age: dvn(
			76,
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado",
			"2026-06-26",
		),
		birthYear: dvn(
			1949,
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado",
			"2026-06-26",
		),
		naturalidade: dv(
			"Anápolis, Goiás",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Primeiros_anos",
			"2026-06-26",
		),
		estadoCivil: dv(
			"Casado com Gracinha Caiado (desde 2008)",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Vida_pessoal",
			"2026-06-26",
		),
		conjugesAnteriores: dv(
			"Sônia (até 2007, divorciada)",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Vida_pessoal",
			"2026-06-26",
		),
		filhos: dv(
			"3: Ronaldo Júnior, Marcella, Yngrid",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Vida_pessoal",
			"2026-06-26",
		),
		formacao: dv(
			"Medicina (Universidade Federal de Goiás, 1975)",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Percurso_acad%C3%AAmico_e_carreira_m%C3%A9dica",
			"2026-06-26",
		),
		profissao: dv(
			"Médico, político, fazendeiro",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Percurso_acad%C3%AAmico_e_carreira_m%C3%A9dica",
			"2026-06-26",
		),
		religiao: dv(
			"Católico",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Vida_pessoal",
			"2026-06-26",
		),
		residencia: dv(
			"Goiânia, GO",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Vida_pessoal",
			"2026-06-26",
		),
		patrimonio: dvn(
			24874436,
			"https://g1.globo.com/go/goias/noticia/2023/07/12/caiado-e-o-4o-governador-mais-rico-do-brasil-com-patrimonio-de-r-248-milhoes.ghtml",
			"2026-06-28",
		),
		currentParty: dv(
			"PSD (Partido Social Democrático) — desde 2022",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
			"2026-06-26",
		),
		partyHistory: [
			dv(
				"PDS (1980–1985)",
				"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"PFL (1985–2007)",
				"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"DEM (2007–2022)",
				"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
				"2026-06-26",
			),
			dv(
				"PSD (2022–presente)",
				"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
				"2026-06-26",
			),
		],
		coalition: [
			{
				party: dv("PSD"),
				status: dv(
					"Candidatura própria",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Pr%C3%A9-candidatura_%C3%A0_Presid%C3%AAncia_em_2026",
					"2026-06-26",
				),
			},
		],
		ideologicalPosition: dv(
			"Centro-direita / Conservador",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado",
			"2026-06-26",
		),
		careerYears: dvn(
			38,
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
			"2026-06-26",
		),
		currentPosition: dv(
			"Governador de Goiás (2019–2026)",
			"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
			"2026-06-26",
		),
		timeline: [
			{
				year: dv(
					"1987",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#C%C3%A2mara_dos_Deputados",
					"2026-06-26",
				),
				event: dv(
					"Eleito Deputado Federal GO (PFL)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#C%C3%A2mara_dos_Deputados",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"1988",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
					"2026-06-26",
				),
				event: dv(
					"Presidente da UDR (União Democrática Ruralista)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"1989",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Candidato_%C3%A0_Presid%C3%AAncia_da_Rep%C3%BAblica",
					"2026-06-26",
				),
				event: dv(
					"Candidato à Presidência (PSD) — 0,68% votos",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Candidato_%C3%A0_Presid%C3%AAncia_da_Rep%C3%BAblica",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2018",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
				event: dv(
					"Eleito Governador GO (1ºT, 59,73%)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2022",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
				event: dv(
					"Reeleito Governador GO (1ºT, 51,81%)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2026",
					"https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/27/caiado-oficializa-pre-candidatura-a-presidencia-pelo-psd.ghtml",
					"2026-03-27",
				),
				event: dv(
					"Pré-candidatura Presidência. Sai UNIÃO p/ PSD. Governador licenciado.",
					"https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/27/caiado-oficializa-pre-candidatura-a-presidencia-pelo-psd.ghtml",
					"2026-03-27",
				),
			},
		],
		electionResults: [
			{
				year: dvn(
					1989,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Presidente",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"488.872",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"0,68%",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Não eleito (10º lugar)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					1990,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Dep. Federal GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"98.256",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"—",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (mais votado GO)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					1994,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Governador GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"364.767",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"23,18%",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Não eleito (3º lugar)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					1998,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Dep. Federal GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"100.446",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"—",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (2ª maior votação GO)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2002,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Dep. Federal GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"114.728",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"—",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2006,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Dep. Federal GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"152.895",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"—",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (2º mais votado GO)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2010,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Dep. Federal GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"167.591",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"—",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (3º mais votado GO)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2014,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Senador GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"1.283.665",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"47,57%",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2018,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Governador GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"1.842.139 (1T)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"59,73% (1T)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (1º turno)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2022,
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Governador GO",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"1.806.892 (1T)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"51,81% (1T)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (1º turno)",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
		],
		scandals: [
			{
				name: dv(
					"Operação Obra Simulada",
					"https://g1.globo.com/go/goias/noticia/2025/01/15/governo-de-goias-e-alvo-de-operacao-da-pf-por-desvio-de-r-27-milhoes.ghtml",
					"2026-06-28",
				),
				status: dv(
					"ativo",
					"https://g1.globo.com/go/goias/noticia/2025/01/15/governo-de-goias-e-alvo-de-operacao-da-pf-por-desvio-de-r-27-milhoes.ghtml",
					"2026-06-28",
				),
				description: dv(
					"PF prendeu Lucas Vissotto, ex-presidente da Goinfra e aliado de Caiado, por desvio de R$ 27 mi em contratos fraudulentos de pavimentação. Superfaturamento e direcionamento de licitações.",
					"https://g1.globo.com/go/goias/noticia/2025/01/15/governo-de-goias-e-alvo-de-operacao-da-pf-por-desvio-de-r-27-milhoes.ghtml",
					"2026-06-28",
				),
				value: dv(
					"R$ 27 milhões",
					"https://g1.globo.com/go/goias/noticia/2025/01/15/governo-de-goias-e-alvo-de-operacao-da-pf-por-desvio-de-r-27-milhoes.ghtml",
					"2026-06-28",
				),
			},
			{
				name: dv(
					"Fraude no Fundeb",
					"https://g1.globo.com/go/goias/noticia/2025/08/20/pf-investiga-esquema-de-corrupcao-na-educacao-de-goias.ghtml",
					"2026-06-28",
				),
				status: dv(
					"ativo",
					"https://g1.globo.com/go/goias/noticia/2025/08/20/pf-investiga-esquema-de-corrupcao-na-educacao-de-goias.ghtml",
					"2026-06-28",
				),
				description: dv(
					"PF investiga fraudes em contratos do Fundeb na 1ª gestão Caiado. Empresários pagaram R$ 465 mil em propina a servidores por vantagens em licitações da educação.",
					"https://g1.globo.com/go/goias/noticia/2025/08/20/pf-investiga-esquema-de-corrupcao-na-educacao-de-goias.ghtml",
					"2026-06-28",
				),
				value: dv(
					"R$ 465 mil",
					"https://g1.globo.com/go/goias/noticia/2025/08/20/pf-investiga-esquema-de-corrupcao-na-educacao-de-goias.ghtml",
					"2026-06-28",
				),
			},
			{
				name: dv(
					"Contrato sem licitação",
					"https://g1.globo.com/goias/noticia/2019/07/10/governo-de-goias-e-alvo-de-denuncia-por-contratar-escritorio-de-advocacia-sem-licitacao.ghtml",
					"2026-06-28",
				),
				status: dv(
					"arquivado",
					"https://g1.globo.com/goias/noticia/2019/07/10/governo-de-goias-e-alvo-de-denuncia-por-contratar-escritorio-de-advocacia-sem-licitacao.ghtml",
					"2026-06-28",
				),
				description: dv(
					"Governo de Goiás contratou escritório de advocacia sem licitação por R$ 402 mil. TCE apontou irregularidades. Caiado demorou a exonerar servidores envolvidos.",
					"https://g1.globo.com/goias/noticia/2019/07/10/governo-de-goias-e-alvo-de-denuncia-por-contratar-escritorio-de-advocacia-sem-licitacao.ghtml",
					"2026-06-28",
				),
				value: dv(
					"R$ 402 mil",
					"https://g1.globo.com/goias/noticia/2019/07/10/governo-de-goias-e-alvo-de-denuncia-por-contratar-escritorio-de-advocacia-sem-licitacao.ghtml",
					"2026-06-28",
				),
			},
		],
		campaignFinance: {
			totalArrecadado: dv(
				"R$ 133,4 mi (limite)",
				"https://www12.senado.leg.br/noticias/audios/2026/05/tse-aprova-limite-de-gastos-para-campanhas-de-2026",
				"2026-06-28",
			),
			totalGasto: dv(
				"Não divulgado",
				"https://www12.senado.leg.br/noticias/audios/2026/05/tse-aprova-limite-de-gastos-para-campanhas-de-2026",
				"2026-06-28",
			),
			limiteGastos: dv(
				"R$ 133,4 mi (1º turno)",
				"https://www12.senado.leg.br/noticias/audios/2026/05/tse-aprova-limite-de-gastos-para-campanhas-de-2026",
				"2026-06-28",
			),
			fontes: [
				{
					name: dv(
						"FEFC (cota PSD)",
						"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
						"2026-06-28",
					),
					value: dvn(
						421,
						"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
						"2026-06-28",
					),
					color: "#1a4fa0",
				},
				{
					name: dv(
						"Fundo Partidário",
						"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
						"2026-06-28",
					),
					value: dvn(
						30,
						"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
						"2026-06-28",
					),
					color: "#2e7d32",
				},
			],
			comparison: {
				name: dv(
					"Caiado 2026 (FEFC PSD)",
					"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
					"2026-06-28",
				),
				arrecadado: dvn(
					421,
					"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
					"2026-06-28",
				),
				gasto: dvn(
					0,
					"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
					"2026-06-28",
				),
			},
		},
		positions: [
			{
				issue: dv(
					"Agronegócio",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
					"2026-06-26",
				),
				position: dv(
					"Defesa do agronegócio. Ex-presidente da UDR. Crítico de demarcações indígenas.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Segurança Pública",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
				position: dv(
					"Mão dura. Goiás tem menor taxa de homicídios do Centro-Oeste. Reconhecimento facial.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Reforma Agrária / Indígenas",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
					"2026-06-26",
				),
				position: dv(
					"Ex-presidente da UDR. Crítico de demarcações indígenas. Defesa histórica dos grandes proprietários rurais.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Trajet%C3%B3ria_e_carreira_pol%C3%ADtica",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Armas",
					"https://g1.globo.com/go/goias/noticia/2022/09/29/caiado-defende-porte-de-armas-para-cidadaos-de-bem.ghtml",
					"2026-06-28",
				),
				position: dv(
					"Favorável ao porte de armas para 'cidadãos de bem'. Defende flexibilização do Estatuto do Desarmamento.",
					"https://g1.globo.com/go/goias/noticia/2022/09/29/caiado-defende-porte-de-armas-para-cidadaos-de-bem.ghtml",
					"2026-06-28",
				),
			},
			{
				issue: dv(
					"Educação",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
				position: dv(
					"Goiás tem melhor IDEB do Centro-Oeste. Escolas em tempo integral. Investimento em tecnologia educacional.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Saúde",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
				position: dv(
					"Goiás referência no enfrentamento à COVID-19. Ampliação de hospitais regionais. Médico de formação.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Privatização",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
				position: dv(
					"Privatizou Saneago (parcial) e concessões rodoviárias. Defende redução do Estado e parcerias público-privadas.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Governador_de_Goi%C3%A1s",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Impeachment Dilma",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Impeachment_de_Dilma_Rousseff",
					"2026-06-26",
				),
				position: dv(
					"Um dos principais articuladores do impeachment de Dilma Rousseff. Votou pela perda do mandato. Rompeu com MDB após absolvição parcial.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Impeachment_de_Dilma_Rousseff",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Reforma Trabalhista",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Impeachment_de_Dilma_Rousseff",
					"2026-06-26",
				),
				position: dv(
					"Votou a favor da reforma trabalhista de 2017. Defende maior flexibilização das leis trabalhistas e modernização da CLT.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Impeachment_de_Dilma_Rousseff",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"PEC do Teto",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Impeachment_de_Dilma_Rousseff",
					"2026-06-26",
				),
				position: dv(
					"Votou a favor da PEC do Teto dos Gastos Públicos (2016). Defende responsabilidade fiscal e limite para gastos públicos.",
					"https://pt.wikipedia.org/wiki/Ronaldo_Caiado#Impeachment_de_Dilma_Rousseff",
					"2026-06-26",
				),
			},
		],
	},
	{
		id: "zema",
		name: dv(
			"Romeu Zema",
			"https://pt.wikipedia.org/wiki/Romeu_Zema",
			"2026-06-26",
		),
		fullName: dv(
			"Romeu Zema Neto",
			"https://pt.wikipedia.org/wiki/Romeu_Zema",
			"2026-06-26",
		),
		photo: "/zema.png",
		photoPos: "center 25%",
		party: {
			name: dv("NOVO"),
			number: 30,
			logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Partido_Novo_logo_%282020%29.svg",
			color: "#f15a24",
			colorLight: "#f8a37d",
		},
		age: dvn(
			61,
			"https://pt.wikipedia.org/wiki/Romeu_Zema",
			"2026-06-26",
		),
		birthYear: dvn(
			1964,
			"https://pt.wikipedia.org/wiki/Romeu_Zema",
			"2026-06-26",
		),
		naturalidade: dv(
			"Araxá, Minas Gerais",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		estadoCivil: dv(
			"Casado com Lana Zema (desde 2016)",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		conjugesAnteriores: dv(
			"Ana Paula (até 2014, divorciada)",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		filhos: dv(
			"3: Luiza, Marina, Lucas",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		formacao: dv(
			"Administração de Empresas (Centro Universitário Newton Paiva)",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		profissao: dv(
			"Empresário, político",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		religiao: dv(
			"Católico",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		residencia: dv(
			"Belo Horizonte, MG",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		patrimonio: dvn(
			129800000,
			"https://divulgacandcontas.tse.jus.br/divulga/#/candidato/2022/2040602022/MG/130001701690/bens",
			"2026-06-28",
		),
		currentParty: dv(
			"Partido Novo (NOVO) — desde 2017",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		partyHistory: [
			dv(
				"PL (1999–2006)",
				"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
				"2026-06-26",
			),
			dv(
				"PR (2006–2018)",
				"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
				"2026-06-26",
			),
			dv(
				"NOVO (2018–presente)",
				"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
				"2026-06-26",
			),
		],
		coalition: [
			{
				party: dv("NOVO"),
				status: dv(
					"Candidatura própria",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Pré-candidatura_à_Presidência_da_República",
					"2026-06-26",
				),
			},
		],
		ideologicalPosition: dv(
			"Direita liberal / Liberalismo econômico",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
			"2026-06-26",
		),
		careerYears: dvn(
			8,
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
			"2026-06-26",
		),
		currentPosition: dv(
			"Governador de Minas Gerais (2019–2026) — renunciou 22/03/2026",
			"https://pt.wikipedia.org/wiki/Romeu_Zema#Pré-candidatura_à_Presidência_da_República",
			"2026-06-26",
		),
		timeline: [
			{
				year: dv(
					"2017",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
					"2026-06-26",
				),
				event: dv(
					"Filia-se ao Partido Novo",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Primeiros_anos",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2018",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Eleição_de_2018_e_primeiro_mandato_como_governador",
					"2026-06-26",
				),
				event: dv(
					"Eleito Governador MG (2ºT, 58,07%) — surpresa nacional",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Eleição_de_2018_e_primeiro_mandato_como_governador",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2022",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Releição_em_2022_e_segundo_mandato_como_governador",
					"2026-06-26",
				),
				event: dv(
					"Reeleito Governador MG (1ºT, 56,18%)",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Releição_em_2022_e_segundo_mandato_como_governador",
					"2026-06-26",
				),
			},
			{
				year: dv(
					"2026",
					"https://g1.globo.com/politica/noticia/2026/03/22/zema-renuncia-governo-mg-para-disputar-presidencia.ghtml",
					"2026-03-22",
				),
				event: dv(
					"Renuncia governo MG. Pré-candidato Presidência (NOVO).",
					"https://g1.globo.com/politica/noticia/2026/03/22/zema-renuncia-governo-mg-para-disputar-presidencia.ghtml",
					"2026-03-22",
				),
			},
		],
		electionResults: [
			{
				year: dvn(
					2018,
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Governador MG",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"4.138.967 (1T) / 6.963.806 (2T)",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"42,73% (1T) / 71,80% (2T)",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (2º turno)",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
			{
				year: dvn(
					2022,
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
				cargo: dv(
					"Governador MG",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
				votos: dv(
					"6.094.136 (1T)",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
				pct: dv(
					"56,18% (1T)",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
				resultado: dv(
					"Eleito (1º turno)",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Desempenho_eleitoral",
					"2026-06-26",
				),
			},
		],
		scandals: [
			{
				name: dv(
					"Operação Rejeito",
					"https://g1.globo.com/mg/minas-gerais/noticia/2025/09/18/pf-deflagra-operacao-rejeito-contra-corrupcao-no-licenciamento-ambiental-de-mg.ghtml",
					"2026-06-28",
				),
				status: dv(
					"ativo",
					"https://g1.globo.com/mg/minas-gerais/noticia/2025/09/18/pf-deflagra-operacao-rejeito-contra-corrupcao-no-licenciamento-ambiental-de-mg.ghtml",
					"2026-06-28",
				),
				description: dv(
					"Maior escândalo de corrupção da história de MG. PF investiga captura de órgãos ambientais por mineradoras. Alta cúpula da ANM e Feam presa. Esquema envolvia licenciamento fraudulento em troca de propina.",
					"https://g1.globo.com/mg/minas-gerais/noticia/2025/09/18/pf-deflagra-operacao-rejeito-contra-corrupcao-no-licenciamento-ambiental-de-mg.ghtml",
					"2026-06-28",
				),
			},
			{
				name: dv(
					"Serra do Curral",
					"https://www.otempo.com.br/politica/2025/10/22/serra-do-curral-mp-apura-licenciamento-ambiental-irregular",
					"2026-06-28",
				),
				status: dv(
					"ativo",
					"https://www.otempo.com.br/politica/2025/10/22/serra-do-curral-mp-apura-licenciamento-ambiental-irregular",
					"2026-06-28",
				),
				description: dv(
					"Licenciamento ambiental irregular para mineradoras na Serra do Curral, patrimônio histórico de BH. Ex-superintendente da Supram exonerado após denúncias. MP apura favorecimento a empresas.",
					"https://www.otempo.com.br/politica/2025/10/22/serra-do-curral-mp-apura-licenciamento-ambiental-irregular",
					"2026-06-28",
				),
			},
			{
				name: dv(
					"Privatização da Copasa",
					"https://www.otempo.com.br/politica/2025/12/05/cpi-da-copasa-aprova-relatorio-com-pedido-de-indiciamento-de-zema",
					"2026-06-28",
				),
				status: dv(
					"arquivado",
					"https://www.otempo.com.br/politica/2025/12/05/cpi-da-copasa-aprova-relatorio-com-pedido-de-indiciamento-de-zema",
					"2026-06-28",
				),
				description: dv(
					"CPI da Copasa na ALMG aprovou relatório pedindo indiciamento de Zema por irregularidades no processo de privatização da companhia de saneamento. Denúncias de subfaturamento e conflito de interesses.",
					"https://www.otempo.com.br/politica/2025/12/05/cpi-da-copasa-aprova-relatorio-com-pedido-de-indiciamento-de-zema",
					"2026-06-28",
				),
			},
		],
		campaignFinance: {
			totalArrecadado: dv(
				"R$ 133,4 mi (limite)",
				"https://www12.senado.leg.br/noticias/audios/2026/05/tse-aprova-limite-de-gastos-para-campanhas-de-2026",
				"2026-06-28",
			),
			totalGasto: dv(
				"Não divulgado",
				"https://www12.senado.leg.br/noticias/audios/2026/05/tse-aprova-limite-de-gastos-para-campanhas-de-2026",
				"2026-06-28",
			),
			limiteGastos: dv(
				"R$ 133,4 mi (1º turno)",
				"https://www12.senado.leg.br/noticias/audios/2026/05/tse-aprova-limite-de-gastos-para-campanhas-de-2026",
				"2026-06-28",
			),
			fontes: [
				{
					name: dv(
						"FEFC (cota NOVO)",
						"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
						"2026-06-28",
					),
					value: dvn(
						37,
						"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
						"2026-06-28",
					),
					color: "#f15a24",
				},
				{
					name: dv(
						"Doações PF",
						"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
						"2026-06-28",
					),
					value: dvn(
						15,
						"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
						"2026-06-28",
					),
					color: "#ff9800",
				},
			],
			comparison: {
				name: dv(
					"Zema 2026 (FEFC NOVO)",
					"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
					"2026-06-28",
				),
				arrecadado: dvn(
					37,
					"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
					"2026-06-28",
				),
				gasto: dvn(
					0,
					"https://www.camara.leg.br/noticias/1054870-fundo-eleitoral-para-2026-sera-de-r-52-bilhoes",
					"2026-06-28",
				),
			},
		},
		positions: [
			{
				issue: dv(
					"Economia",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
				position: dv(
					"Austeridade fiscal. Reforma administrativa. Privatizações. MG pagou salários em dia após Regime Recuperação Fiscal.",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Educação",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
				position: dv(
					"Escolas em tempo integral. Ensino técnico. MG tem maior rede de tempo integral do país.",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Armas",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
				position: dv(
					"Favorável ao porte de arma. 'Cada indivíduo faça a opção que achar por bem.'",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Privatização",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
				position: dv(
					"Cogitou privatizar CEMIG, COPASA e CODEMIG para recuperação fiscal. Defende redução do Estado.",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Segurança Pública",
					"https://g1.globo.com/mg/minas-gerais/noticia/2026/05/26/zema-defende-encarceramento-em-massa-nos-moldes-de-el-salvador.ghtml",
					"2026-06-28",
				),
				position: dv(
					"Defende encarceramento em massa nos moldes de El Salvador. Classificar facções como terroristas. Endurecimento de penas.",
					"https://g1.globo.com/mg/minas-gerais/noticia/2026/05/26/zema-defende-encarceramento-em-massa-nos-moldes-de-el-salvador.ghtml",
					"2026-06-28",
				),
			},
			{
				issue: dv(
					"Reforma Tributária",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
				position: dv(
					"Apoia simplificação tributária. Defende redução da carga e autonomia estadual.",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Previdência",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Histórico_do_governo",
					"2026-06-26",
				),
				position: dv(
					"Aprovou reforma da previdência estadual em MG: idade mínima 65h/62m. Defende regras nacionais mais rígidas.",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Histórico_do_governo",
					"2026-06-26",
				),
			},
			{
				issue: dv(
					"Trabalho Infantil",
					"https://g1.globo.com/politica/noticia/2026/01/15/zema-defende-trabalho-infantil-e-repercute-negativamente.ghtml",
					"2026-06-28",
				),
				position: dv(
					"Declarou-se favorável ao trabalho infantil nos moldes dos EUA (entregar jornal). Gerou forte repercussão negativa.",
					"https://g1.globo.com/politica/noticia/2026/01/15/zema-defende-trabalho-infantil-e-repercute-negativamente.ghtml",
					"2026-06-28",
				),
			},
			{
				issue: dv(
					"Separatismo Sul-Sudeste",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
				position: dv(
					"Criou o Consórcio Sul-Sudeste (Cossud). Gerou debate sobre conotações separatistas entre regiões.",
					"https://pt.wikipedia.org/wiki/Romeu_Zema#Posicionamentos",
					"2026-06-26",
				),
			},
		],
	},
];
