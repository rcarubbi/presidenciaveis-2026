import type { Candidate } from "../types";
import { dv, dvn } from "@/lib/dataValue";
export const zema: Candidate = 	{
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
			logo: "/logos/novo.svg",
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
				"R$ 133,4 mi (proj. ambos turnos)",
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
	}

