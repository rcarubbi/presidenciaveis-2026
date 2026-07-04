import type { MediaCategory } from "../types";
import { dv } from "@/lib/dataValue";

export const mediaData: Record<string, MediaCategory[]> = {
	lula: [
		{
			id: "entrevistas",
			label: "Entrevistas e Sabatinas",
			items: [
				{
					title: dv(
						"Lula na CNN Mercado — entrevista sobre tarifas e comércio internacional",
						"https://www.youtube.com/watch?v=KwUOhAlb5zc",
						"2026-06-05",
					),
					description: dv(
						"O presidente Lula afirma à CNN que o Brasil não aceitará imposições externas e debate o impacto das tarifas americanas no comércio internacional.",
						"https://www.youtube.com/watch?v=KwUOhAlb5zc",
						"2026-06-05",
					),
					youtubeId: "KwUOhAlb5zc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no EL PAÍS Brasil — entrevista completa sobre política internacional",
						"https://www.youtube.com/watch?v=HkG2J_0jxGw",
						"2026-05-15",
					),
					description: dv(
						"O presidente Lula concede entrevista exclusiva ao jornal EL PAÍS Brasil, abordando política internacional, economia e os desafios do Brasil no cenário global.",
						"https://www.youtube.com/watch?v=HkG2J_0jxGw",
						"2026-05-15",
					),
					youtubeId: "HkG2J_0jxGw",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no UOL News — entrevista com Daniela Lima sobre economia",
						"https://www.youtube.com/watch?v=01BYnHLyA2A",
						"2026-02-10",
					),
					description: dv(
						"O presidente Lula conversa com a jornalista Daniela Lima no UOL News sobre economia, reforma tributária e as perspectivas para o Brasil em 2026.",
						"https://www.youtube.com/watch?v=01BYnHLyA2A",
						"2026-02-10",
					),
					youtubeId: "01BYnHLyA2A",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula na Rede Amazônica — entrevista sobre a região Norte",
						"https://www.youtube.com/watch?v=LzlDpCTSQsg",
						"2025-11-01",
					),
					description: dv(
						"O presidente Lula concede entrevista à Rede Amazônica sobre políticas para a região Norte, desenvolvimento sustentável e integração nacional.",
						"https://www.youtube.com/watch?v=LzlDpCTSQsg",
						"2025-11-01",
					),
					youtubeId: "LzlDpCTSQsg",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no SBT Brasil — entrevista sobre economia e política",
						"https://www.youtube.com/watch?v=QBimpJ04Ouc",
						"2025-09-22",
					),
					description: dv(
						"O presidente Lula repercute temas da economia e da política nacional em entrevista ao SBT Brasil, abordando reformas e o cenário eleitoral.",
						"https://www.youtube.com/watch?v=QBimpJ04Ouc",
						"2025-09-22",
					),
					youtubeId: "QBimpJ04Ouc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula na BBC News Brasil — entrevista exclusiva sobre anistia a Bolsonaro",
						"https://www.youtube.com/watch?v=qeLaNMxdNBo",
						"2025-09-17",
					),
					description: dv(
						"O presidente Lula diz em entrevista exclusiva à BBC News Brasil que vetaria anistia a Bolsonaro e critica tratamento de Trump ao Brasil.",
						"https://www.youtube.com/watch?v=qeLaNMxdNBo",
						"2025-09-17",
					),
					youtubeId: "qeLaNMxdNBo",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no Jornal da Band — entrevista completa sobre governo",
						"https://www.youtube.com/watch?v=eBih5lMY8kU",
						"2025-09-15",
					),
					description: dv(
						"O presidente Lula concede entrevista ao Jornal da Band sobre o balanço do governo, reformas, economia e os desafios políticos do Brasil.",
						"https://www.youtube.com/watch?v=eBih5lMY8kU",
						"2025-09-15",
					),
					youtubeId: "eBih5lMY8kU",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no Estado de Minas — entrevista exclusiva ao veículo mineiro",
						"https://www.youtube.com/watch?v=HkDDTzUNGxk",
						"2025-08-01",
					),
					description: dv(
						"O presidente Lula concede entrevista exclusiva ao Estado de Minas e TV Alterosa, abordando política, economia e os desafios de governar o Brasil.",
						"https://www.youtube.com/watch?v=HkDDTzUNGxk",
						"2025-08-01",
					),
					youtubeId: "HkDDTzUNGxk",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula na CNN Amanpour — entrevista sobre tarifas e relação com Trump",
						"https://www.youtube.com/watch?v=cO9sT62pXw0",
						"2025-07-17",
					),
					description: dv(
						"O presidente Lula responde a tarifas de Trump em entrevista exclusiva à CNN com Christiane Amanpour, abordando comércio internacional e soberania nacional.",
						"https://www.youtube.com/watch?v=cO9sT62pXw0",
						"2025-07-17",
					),
					youtubeId: "cO9sT62pXw0",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no Jornal Nacional — entrevista sobre tarifas de Trump",
						"https://www.youtube.com/watch?v=MghtJZVP77g",
						"2025-07-10",
					),
					description: dv(
						"O presidente Lula concede entrevista ao Jornal Nacional sobre as tarifas anunciadas por Trump, a relação Brasil-EUA e os impactos na economia brasileira.",
						"https://www.youtube.com/watch?v=MghtJZVP77g",
						"2025-07-10",
					),
					youtubeId: "MghtJZVP77g",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no Jornal da Record — entrevista sobre economia e tarifas",
						"https://www.youtube.com/watch?v=wBEjdV3JoIo",
						"2025-07-10",
					),
					description: dv(
						"O presidente Lula concede entrevista exclusiva ao Jornal da Record sobre economia, tarifas internacionais e os rumos do governo.",
						"https://www.youtube.com/watch?v=wBEjdV3JoIo",
						"2025-07-10",
					),
					youtubeId: "wBEjdV3JoIo",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no Mano a Mano com Mano Brown — entrevista completa",
						"https://www.youtube.com/watch?v=z41gz9DuS3E",
						"2025-06-19",
					),
					description: dv(
						"O presidente Lula participa do podcast Mano a Mano com Mano Brown, abordando sua trajetória, racismo, política e cultura brasileira.",
						"https://www.youtube.com/watch?v=z41gz9DuS3E",
						"2025-06-19",
					),
					youtubeId: "z41gz9DuS3E",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula na LIVE CNN — primeira entrevista à imprensa em 2025",
						"https://www.youtube.com/watch?v=AZ1ulkgaitg",
						"2025-01-20",
					),
					description: dv(
						"O presidente Lula fala pela primeira vez à imprensa em 2025 na LIVE CNN, abordando pautas econômicas, política externa e reformas do governo.",
						"https://www.youtube.com/watch?v=AZ1ulkgaitg",
						"2025-01-20",
					),
					youtubeId: "AZ1ulkgaitg",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no Flow Podcast — entrevista histórica com 1 milhão de espectadores simultâneos",
						"https://www.youtube.com/watch?v=OAu9KJFbMhU",
						"2022-10-18",
					),
					description: dv(
						"O ex-presidente Lula conversa com Igor 3K sobre economia, política externa, educação e os desafios do Brasil. A entrevista bateu recorde de audiência no YouTube.",
						"https://www.youtube.com/watch?v=OAu9KJFbMhU",
						"2022-10-18",
					),
					youtubeId: "OAu9KJFbMhU",
					category: "entrevistas",
				},
				{
					title: dv(
						"Lula no Podpah — entrevista sobre carreira, PT e planos para o Brasil",
						"https://www.youtube.com/watch?v=r4JJh0lbYHU",
						"2021-12-02",
					),
					description: dv(
						"Lula participa do podcast Podpah e fala sobre sua trajetória política, os erros do PT e suas propostas para o país. Mais de 3,4 milhões de visualizações.",
						"https://www.youtube.com/watch?v=r4JJh0lbYHU",
						"2021-12-02",
					),
					youtubeId: "r4JJh0lbYHU",
					category: "entrevistas",
				},
			],
		},
		{
			id: "campanha",
			label: "Campanha e Discursos",
			items: [
				{
					title: dv(
						"Presidente Lula na inauguração de túnel para transposição das águas do Rio São Francisco para o RN",
						"https://www.youtube.com/watch?v=inbBmZaRgs0",
						"2026-07-02",
					),
					description: dv(
						"O presidente Lula participa da inauguração de túnel para transposição das águas do Rio São Francisco, levando água ao Rio Grande do Norte.",
						"https://www.youtube.com/watch?v=inbBmZaRgs0",
						"2026-07-02",
					),
					youtubeId: "inbBmZaRgs0",
					category: "campanha",
				},
				{
					title: dv(
						"Lula no ICL — entrevista sobre os 8 anos do golpe e o futuro do Brasil",
						"https://www.youtube.com/watch?v=rjq0ms0NQ-0",
						"2023-12-12",
					),
					description: dv(
						"O presidente Lula concede entrevista ao Instituto Conhecimento Liberta (ICL) sobre os 8 anos do processo de impeachment, a economia brasileira e os desafios do país.",
						"https://www.youtube.com/watch?v=rjq0ms0NQ-0",
						"2023-12-12",
					),
					youtubeId: "rjq0ms0NQ-0",
					category: "entrevistas",
				},
			],
		},
	],
	flavio: [
		{
			id: "entrevistas",
			label: "Entrevistas e Sabatinas",
			items: [
				{
					title: dv(
						"Direita em ascensão: Flávio Bolsonaro detalha onda azul que chega ao Brasil",
						"https://www.youtube.com/watch?v=XV-R-99WLF4",
						"2026-07-01",
					),
					description: dv(
						"Em entrevista exclusiva à Revista Oeste, o senador Flávio Bolsonaro revela os bastidores de seu encontro com o presidente argentino Javier Milei e a onda azul da direita.",
						"https://www.youtube.com/watch?v=XV-R-99WLF4",
						"2026-07-01",
					),
					youtubeId: "XV-R-99WLF4",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na Revista Oeste — entrevista exclusiva em Buenos Aires",
						"https://www.youtube.com/watch?v=Xf4itGf-Lhk",
						"2026-07-01",
					),
					description: dv(
						'O pré-candidato concede entrevista exclusiva à Revista Oeste em Buenos Aires, abordando a "onda azul" da direita nas eleições de 2026.',
						"https://www.youtube.com/watch?v=Xf4itGf-Lhk",
						"2026-07-01",
					),
					youtubeId: "Xf4itGf-Lhk",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro fala sobre Michelle, pedido a Donald Trump e critica Lula",
						"https://www.youtube.com/watch?v=jMFu6q0o5dc",
						"2026-06-30",
					),
					description: dv(
						"Em entrevista exclusiva ao jornalista Paulo Cappelli, do Correio da Manhã, Flávio Bolsonaro revela bastidores da política, relação com Michelle e críticas a Lula.",
						"https://www.youtube.com/watch?v=jMFu6q0o5dc",
						"2026-06-30",
					),
					youtubeId: "jMFu6q0o5dc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na CNN Prime Time — crise com Michelle e campanha",
						"https://www.youtube.com/watch?v=rZKXt-EmxtA",
						"2026-06-26",
					),
					description: dv(
						"O senador reage à crise com Michelle Bolsonaro e analisa o impacto na campanha em entrevista ao CNN Prime Time.",
						"https://www.youtube.com/watch?v=rZKXt-EmxtA",
						"2026-06-26",
					),
					youtubeId: "rZKXt-EmxtA",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro no Flow Podcast — propostas e reação de Igor 3K",
						"https://www.youtube.com/watch?v=GC0IC_QTvds",
						"2026-06-20",
					),
					description: dv(
						"O senador e pré-candidato apresenta suas propostas de governo no Flow Podcast, com reações do apresentador Igor 3K sobre segurança, economia e eleições.",
						"https://www.youtube.com/watch?v=GC0IC_QTvds",
						"2026-06-20",
					),
					youtubeId: "GC0IC_QTvds",
					category: "entrevistas",
				},
				{
					title: dv(
						'Flávio Bolsonaro apresenta plano "Brasil Sem Medo" — 12 propostas de segurança pública',
						"https://www.youtube.com/watch?v=6X-ezw6LcpA",
						"2026-06-18",
					),
					description: dv(
						"O senador e pré-candidato à Presidência apresenta pacote com 12 medidas de segurança, incluindo redução da maioridade penal, castração química e classificação de facções como terroristas.",
						"https://www.youtube.com/watch?v=6X-ezw6LcpA",
						"2026-06-18",
					),
					youtubeId: "6X-ezw6LcpA",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na Jovem Pan 3 em 1 — pré-candidatura e propostas",
						"https://www.youtube.com/watch?v=sj5oavybSaA",
						"2026-06-18",
					),
					description: dv(
						"O pré-candidato concede entrevista exclusiva à Jovem Pan no programa 3 em 1 sobre suas propostas de governo, segurança pública e o cenário eleitoral.",
						"https://www.youtube.com/watch?v=sj5oavybSaA",
						"2026-06-18",
					),
					youtubeId: "sj5oavybSaA",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro no PoderExpresso — pesquisas e Bolsa Família",
						"https://www.youtube.com/watch?v=p8och9-OThY",
						"2026-06-15",
					),
					description: dv(
						"O pré-candidato minimiza pesquisas eleitorais e defende manutenção do Bolsa Família em entrevista ao PoderExpresso.",
						"https://www.youtube.com/watch?v=p8och9-OThY",
						"2026-06-15",
					),
					youtubeId: "p8och9-OThY",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro no PodQuaest Genial — pesquisa eleitoral",
						"https://www.youtube.com/watch?v=FtBqhHMGZdw",
						"2026-06-10",
					),
					description: dv(
						"O senador participa do PodQuaest da Genial Investimentos para discutir pesquisa eleitoral de junho de 2026 e cenário político.",
						"https://www.youtube.com/watch?v=FtBqhHMGZdw",
						"2026-06-10",
					),
					youtubeId: "FtBqhHMGZdw",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na Revista Oeste — coletiva após encontro com Trump",
						"https://www.youtube.com/watch?v=Eeq-kTaz_Xc",
						"2026-05-26",
					),
					description: dv(
						"O pré-candidato concede coletiva à Revista Oeste após encontro com Donald Trump na Casa Branca, discutindo relações Brasil-EUA e segurança.",
						"https://www.youtube.com/watch?v=Eeq-kTaz_Xc",
						"2026-05-26",
					),
					youtubeId: "Eeq-kTaz_Xc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro no Café com Política — entrevista exclusiva ao vivo",
						"https://www.youtube.com/watch?v=5ZlB2qBdeT4",
						"2026-05-05",
					),
					description: dv(
						"O pré-candidato concede entrevista exclusiva ao vivo no programa Café com Política, em Minas Gerais, sobre campanha e propostas.",
						"https://www.youtube.com/watch?v=5ZlB2qBdeT4",
						"2026-05-05",
					),
					youtubeId: "5ZlB2qBdeT4",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na Jovem Pan 3 em 1 — resposta a Nikolas e união da direita",
						"https://www.youtube.com/watch?v=E2TtMcDgkhc",
						"2026-04-27",
					),
					description: dv(
						"O pré-candidato responde a críticas de Nikolas Ferreira e discute a união da direita em entrevista ao programa 3 em 1 da Jovem Pan.",
						"https://www.youtube.com/watch?v=E2TtMcDgkhc",
						"2026-04-27",
					),
					youtubeId: "E2TtMcDgkhc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na CNN 360° — plano A e plano B da direita",
						"https://www.youtube.com/watch?v=mSbraAy3-Dw",
						"2026-04-10",
					),
					description: dv(
						"O senador analisa na CNN 360° o cenário eleitoral: o plano A é Jair Bolsonaro, o plano B é o plano A — e discute estratégias da direita para 2026.",
						"https://www.youtube.com/watch?v=mSbraAy3-Dw",
						"2026-04-10",
					),
					youtubeId: "mSbraAy3-Dw",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na Jovem Pan — entrevista sobre pré-candidatura",
						"https://www.youtube.com/watch?v=-bM_EHOh5QY",
						"2026-03-15",
					),
					description: dv(
						"O senador concede entrevista à Jovem Pan News sobre sua pré-candidatura à Presidência, propostas e o cenário político para 2026.",
						"https://www.youtube.com/watch?v=-bM_EHOh5QY",
						"2026-03-15",
					),
					youtubeId: "-bM_EHOh5QY",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na CEO Conference 2026 — política e cenário eleitoral",
						"https://www.youtube.com/watch?v=X7ev9xPC2SY",
						"2026-02-12",
					),
					description: dv(
						"O senador debate o cenário eleitoral brasileiro, economia e reformas necessárias na CEO Conference 2026, com mediação de Amanda Klein.",
						"https://www.youtube.com/watch?v=X7ev9xPC2SY",
						"2026-02-12",
					),
					youtubeId: "X7ev9xPC2SY",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro no Pânico (Jovem Pan) — programa completo",
						"https://www.youtube.com/watch?v=T2z6wQgRG88",
						"2026-02-12",
					),
					description: dv(
						"O pré-candidato participa do programa Pânico da Jovem Pan em entrevista de mais de 2 horas sobre política, economia e eleições.",
						"https://www.youtube.com/watch?v=T2z6wQgRG88",
						"2026-02-12",
					),
					youtubeId: "T2z6wQgRG88",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro no VEJA+ Em Pauta — pré-candidatura, anistia e STF",
						"https://www.youtube.com/watch?v=DmKIZBk74gw",
						"2025-12-12",
					),
					description: dv(
						"O senador participa do programa Em Pauta da VEJA+ discutindo pré-candidatura, anistia a Bolsonaro e críticas ao STF.",
						"https://www.youtube.com/watch?v=DmKIZBk74gw",
						"2025-12-12",
					),
					youtubeId: "DmKIZBk74gw",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro no Flow News — entrevista sobre segurança pública e eleições 2026",
						"https://www.youtube.com/watch?v=sb38vcI-8cY",
						"2025-12-01",
					),
					description: dv(
						"O senador e pré-candidato à Presidência fala sobre seus planos de governo, segurança pública e o cenário político para 2026.",
						"https://www.youtube.com/watch?v=sb38vcI-8cY",
						"2025-12-01",
					),
					youtubeId: "sb38vcI-8cY",
					category: "entrevistas",
				},
				{
					title: dv(
						"Flávio Bolsonaro na Folha de S.Paulo — eventual candidatura e indulto",
						"https://www.youtube.com/watch?v=HjGhcK09gJI",
						"2025-06-20",
					),
					description: dv(
						"O senador fala à Folha de S.Paulo sobre a eventual candidatura de Jair Bolsonaro, garantia de indulto e o plano sucessório na direita.",
						"https://www.youtube.com/watch?v=HjGhcK09gJI",
						"2025-06-20",
					),
					youtubeId: "HjGhcK09gJI",
					category: "entrevistas",
				},
			],
		},
		{
			id: "debates",
			label: "Debates e Sabatinas",
			items: [
				{
					title: dv(
						"Flávio Bolsonaro diz que não irá em debates que Renan Santos comparecer",
						"https://www.youtube.com/watch?v=afJy8jAxOVo",
						"2026-06-22",
					),
					description: dv(
						"O pré-candidato afirma à Jovem Pan que não participará de debates nos quais o pré-candidato Renan Santos (Partido Missão) estiver presente, gerando polêmica no cenário eleitoral.",
						"https://www.youtube.com/watch?v=afJy8jAxOVo",
						"2026-06-22",
					),
					youtubeId: "afJy8jAxOVo",
					category: "debates",
				},
			],
		},
		{
			id: "campanha",
			label: "Campanha e Discursos",
			items: [
				{
					title: dv(
						"Flávio Bolsonaro na Marcha Para Jesus em São Paulo",
						"https://www.youtube.com/watch?v=7LYjR8TMzuA",
						"2026-06-04",
					),
					description: dv(
						"O pré-candidato participa da Marcha Para Jesus em São Paulo, evento religioso que reúne milhares de fiéis, e discursa sobre fé e política.",
						"https://www.youtube.com/watch?v=7LYjR8TMzuA",
						"2026-06-04",
					),
					youtubeId: "7LYjR8TMzuA",
					category: "campanha",
				},
				{
					title: dv(
						'Flávio Bolsonaro no Fórum da Liberdade — "Brasil tem jeito, sim"',
						"https://www.youtube.com/watch?v=RaB5hqrGX5M",
						"2026-04-10",
					),
					description: dv(
						"O pré-candidato discursa no Fórum da Liberdade afirmando que o Brasil tem jeito, apresentando suas propostas de governo e visão de país.",
						"https://www.youtube.com/watch?v=RaB5hqrGX5M",
						"2026-04-10",
					),
					youtubeId: "RaB5hqrGX5M",
					category: "campanha",
				},
			],
		},
	],
	renan: [
		{
			id: "entrevistas",
			label: "Entrevistas e Sabatinas",
			items: [
				{
					title: dv(
						"Renan Santos no SBT News — abre o jogo sobre as eleições 2026",
						"https://www.youtube.com/watch?v=1vGwMWAyhs4",
						"2026-07-03",
					),
					description: dv(
						"O pré-candidato concede entrevista ao SBT News, abordando suas propostas de governo e o cenário eleitoral de 2026.",
						"https://www.youtube.com/watch?v=1vGwMWAyhs4",
						"2026-07-03",
					),
					youtubeId: "1vGwMWAyhs4",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos anuncia Aroldo Medina como vice — coletiva de imprensa",
						"https://www.youtube.com/watch?v=SDUQEa7FAms",
						"2026-07-03",
					),
					description: dv(
						"O pré-candidato realiza coletiva de imprensa para anunciar Aroldo Medina como seu vice-presidente na chapa do Missão.",
						"https://www.youtube.com/watch?v=SDUQEa7FAms",
						"2026-07-03",
					),
					youtubeId: "SDUQEa7FAms",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos na Band Bahia — entrevista sobre propostas para o Nordeste",
						"https://www.youtube.com/watch?v=X1TdZfJnWRM",
						"2026-07-03",
					),
					description: dv(
						"O pré-candidato concede entrevista à Band Bahia, abordando soluções para os principais problemas do estado da Bahia e do Nordeste.",
						"https://www.youtube.com/watch?v=X1TdZfJnWRM",
						"2026-07-03",
					),
					youtubeId: "X1TdZfJnWRM",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Esfera Cast — entrevista com Marina Demori",
						"https://www.youtube.com/watch?v=ASThOq7zVSA",
						"2026-07-03",
					),
					description: dv(
						"O pré-candidato participa do Esfera Cast em entrevista conduzida por Marina Demori, debatendo o futuro do Brasil e as eleições de 2026.",
						"https://www.youtube.com/watch?v=ASThOq7zVSA",
						"2026-07-03",
					),
					youtubeId: "ASThOq7zVSA",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos na Rádio Arauto News — como pretende unir o Brasil",
						"https://www.youtube.com/watch?v=Ly0s8WT7FMk",
						"2026-07-03",
					),
					description: dv(
						"Em entrevista à Rádio Arauto News, o pré-candidato comenta como pretende unir o Brasil e governar sem populismo.",
						"https://www.youtube.com/watch?v=Ly0s8WT7FMk",
						"2026-07-03",
					),
					youtubeId: "Ly0s8WT7FMk",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos surpreende e revela o que faria se fosse presidente",
						"https://www.youtube.com/watch?v=96XV6Sn-HFA",
						"2026-07-03",
					),
					description: dv(
						"O pré-candidato concede entrevista abordando temas que movimentam a política brasileira, revelando planos de governo e visão para o país.",
						"https://www.youtube.com/watch?v=96XV6Sn-HFA",
						"2026-07-03",
					),
					youtubeId: "96XV6Sn-HFA",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos dá show em entrevista do Correio Brasiliense",
						"https://www.youtube.com/watch?v=lbPtcsdcAZw",
						"2026-07-02",
					),
					description: dv(
						"O pré-candidato concede entrevista ao Correio Braziliense, abordando suas propostas de governo e visão para o Brasil.",
						"https://www.youtube.com/watch?v=lbPtcsdcAZw",
						"2026-07-02",
					),
					youtubeId: "lbPtcsdcAZw",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos anuncia seu vice — Arthur do Val",
						"https://www.youtube.com/watch?v=hkNk1bFTFmk",
						"2026-07-02",
					),
					description: dv(
						"Em live do MBL, o pré-candidato anuncia Arthur do Val como seu vice-presidente na chapa do Partido Missão para as eleições de 2026.",
						"https://www.youtube.com/watch?v=hkNk1bFTFmk",
						"2026-07-02",
					),
					youtubeId: "hkNk1bFTFmk",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos analisa nova pesquisa Atlas em entrevista",
						"https://www.youtube.com/watch?v=pbE0BaIMfCI",
						"2026-07-02",
					),
					description: dv(
						"O pré-candidato analisa os números da nova pesquisa AtlasIntel/Bloomberg que mostra Renan isolado em terceiro lugar com 7,8% das intenções de voto.",
						"https://www.youtube.com/watch?v=pbE0BaIMfCI",
						"2026-07-02",
					),
					youtubeId: "pbE0BaIMfCI",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos em entrevista no Rio Grande do Sul",
						"https://www.youtube.com/watch?v=TL4OEpqo34E",
						"2026-07-02",
					),
					description: dv(
						"Em passagem pelo Rio Grande do Sul, o pré-candidato Renan Santos concede entrevista e detalha suas propostas de governo e estratégia de campanha.",
						"https://www.youtube.com/watch?v=TL4OEpqo34E",
						"2026-07-02",
					),
					youtubeId: "TL4OEpqo34E",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos na Rádio Independente — Panorama entrevista",
						"https://www.youtube.com/watch?v=CwX5WvOWB5Q",
						"2026-07-02",
					),
					description: dv(
						"O pré-candidato concede entrevista ao programa Panorama da Rádio Independente, abordando propostas de governo e o cenário eleitoral.",
						"https://www.youtube.com/watch?v=CwX5WvOWB5Q",
						"2026-07-02",
					),
					youtubeId: "CwX5WvOWB5Q",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos dá resposta genial em entrevista ao vivo no Esfera Cast",
						"https://www.youtube.com/watch?v=H1jLD18_x6E",
						"2026-07-02",
					),
					description: dv(
						"O pré-candidato participa do Esfera Cast em entrevista ao vivo, respondendo a perguntas sobre suas propostas, o cenário político e a campanha presidencial.",
						"https://www.youtube.com/watch?v=H1jLD18_x6E",
						"2026-07-02",
					),
					youtubeId: "H1jLD18_x6E",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos SEM FILTRO — entrevista completa na rádio do RS",
						"https://www.youtube.com/watch?v=ShHv6X3Bv6Y",
						"2026-07-02",
					),
					description: dv(
						"O pré-candidato participa de entrevista completa em rádio do Rio Grande do Sul, comentando propostas e o cenário político nacional.",
						"https://www.youtube.com/watch?v=ShHv6X3Bv6Y",
						"2026-07-02",
					),
					youtubeId: "ShHv6X3Bv6Y",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos na RedeTV! Notícias — entrevista completa",
						"https://www.youtube.com/watch?v=u4oYVwQflhE",
						"2026-06-26",
					),
					description: dv(
						"O pré-candidato à Presidência concede entrevista completa à RedeTV! Notícias sobre campanha, propostas e o cenário político.",
						"https://www.youtube.com/watch?v=u4oYVwQflhE",
						"2026-06-26",
					),
					youtubeId: "u4oYVwQflhE",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Band Jornal Gente — entrevista sobre campanha",
						"https://www.youtube.com/watch?v=TyxzaU0BFV8",
						"2026-06-20",
					),
					description: dv(
						"O pré-candidato concede entrevista ao Band Jornal Gente sobre os rumos da campanha presidencial e suas propostas de governo.",
						"https://www.youtube.com/watch?v=TyxzaU0BFV8",
						"2026-06-20",
					),
					youtubeId: "TyxzaU0BFV8",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Jornal Gente — entrevista sobre eleições 2026",
						"https://www.youtube.com/watch?v=qHbjr2E8Iu4",
						"2026-06-15",
					),
					description: dv(
						"O pré-candidato concede entrevista ao Jornal Gente sobre o cenário das eleições 2026, alianças políticas e propostas para o Brasil.",
						"https://www.youtube.com/watch?v=qHbjr2E8Iu4",
						"2026-06-15",
					),
					youtubeId: "qHbjr2E8Iu4",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Conexões JBFM — bastidores da pré-candidatura",
						"https://www.youtube.com/watch?v=axvXleeMlEA",
						"2026-06-10",
					),
					description: dv(
						"O pré-candidato à Presidência concede entrevista ao programa Conexões, da JBFM, sobre os bastidores da campanha e propostas de governo.",
						"https://www.youtube.com/watch?v=axvXleeMlEA",
						"2026-06-10",
					),
					youtubeId: "axvXleeMlEA",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos na Sabatina Esfera — propostas e visão de país",
						"https://www.youtube.com/watch?v=Mjrt13Iq9Gc",
						"2026-05-28",
					),
					description: dv(
						"O pré-candidato participa da Sabatina Esfera, respondendo a perguntas sobre suas propostas de governo, economia, segurança e reforma política.",
						"https://www.youtube.com/watch?v=Mjrt13Iq9Gc",
						"2026-05-28",
					),
					youtubeId: "Mjrt13Iq9Gc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Gaúcha Atualidade — pré-campanha e propostas econômicas",
						"https://www.youtube.com/watch?v=xGJaqgrxDjE",
						"2026-05-26",
					),
					description: dv(
						"O pré-candidato do Missão fala sobre taxa das blusinhas, fim da escala 6x1 e suas propostas econômicas em entrevista à Rádio Gaúcha.",
						"https://www.youtube.com/watch?v=xGJaqgrxDjE",
						"2026-05-26",
					),
					youtubeId: "xGJaqgrxDjE",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Poder360 — plano de governo e eleições 2026",
						"https://www.youtube.com/watch?v=A4-ll_eCCbM",
						"2026-05-21",
					),
					description: dv(
						"O pré-candidato detalha seu plano de governo, propostas econômicas e visão para o Brasil em entrevista ao jornal digital Poder360.",
						"https://www.youtube.com/watch?v=A4-ll_eCCbM",
						"2026-05-21",
					),
					youtubeId: "A4-ll_eCCbM",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Metrópoles Contexto — entrevista exclusiva",
						"https://www.youtube.com/watch?v=cR-PSDRMeyg",
						"2026-05-20",
					),
					description: dv(
						"O pré-candidato à Presidência concede entrevista exclusiva ao Metrópoles no programa Contexto sobre propostas e campanha.",
						"https://www.youtube.com/watch?v=cR-PSDRMeyg",
						"2026-05-20",
					),
					youtubeId: "cR-PSDRMeyg",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no BM&C Talks — guerra ao crime e eleições 2026",
						"https://www.youtube.com/watch?v=gVrW6a5e6Tc",
						"2026-05-16",
					),
					description: dv(
						"O pré-candidato promete guerra ao crime e mira 2026 em entrevista ao BM&C Talks, afirmando que vai mudar o Brasil.",
						"https://www.youtube.com/watch?v=gVrW6a5e6Tc",
						"2026-05-16",
					),
					youtubeId: "gVrW6a5e6Tc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos na RedeTV Notícias — entrevista sobre pré-campanha",
						"https://www.youtube.com/watch?v=LFlMNDvpJ_g",
						"2026-05-12",
					),
					description: dv(
						"O pré-candidato do Partido Missão concede entrevista à RedeTV Notícias sobre sua pré-campanha, propostas de governo e o cenário político.",
						"https://www.youtube.com/watch?v=LFlMNDvpJ_g",
						"2026-05-12",
					),
					youtubeId: "LFlMNDvpJ_g",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos na CNN 360 — entrevista completa sobre campanha",
						"https://www.youtube.com/watch?v=gvUpvucO8aU",
						"2026-05-01",
					),
					description: dv(
						"O pré-candidato concede entrevista completa ao programa CNN 360 sobre sua campanha presidencial, economia e reformas.",
						"https://www.youtube.com/watch?v=gvUpvucO8aU",
						"2026-05-01",
					),
					youtubeId: "gvUpvucO8aU",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Frente a Frente (Folha/UOL) — pré-candidatura e propostas",
						"https://www.youtube.com/watch?v=PeubtGxpu2k",
						"2026-04-27",
					),
					description: dv(
						"O pré-candidato do Partido Missão é entrevistado por Carla Araújo e Fábio Zanini sobre suas propostas, a reforma política e a disputa eleitoral.",
						"https://www.youtube.com/watch?v=PeubtGxpu2k",
						"2026-04-27",
					),
					youtubeId: "PeubtGxpu2k",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no uMANós Talk Show — discurso renovado e planos",
						"https://www.youtube.com/watch?v=x47zyi6-GHo",
						"2026-04-23",
					),
					description: dv(
						"O pré-candidato participa do uMANós Talk Show da 92FM Criciúma com discurso renovado e críticas ao sistema político.",
						"https://www.youtube.com/watch?v=x47zyi6-GHo",
						"2026-04-23",
					),
					youtubeId: "x47zyi6-GHo",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Direto ao Ponto (Jovem Pan) — crítica à direita e cenário eleitoral",
						"https://www.youtube.com/watch?v=lAxWovKElsg",
						"2026-04-20",
					),
					description: dv(
						"O presidente do Partido Missão afirma que a família Bolsonaro destruiu a direita e analisa o cenário eleitoral para 2026 no programa Direto ao Ponto da Jovem Pan.",
						"https://www.youtube.com/watch?v=lAxWovKElsg",
						"2026-04-20",
					),
					youtubeId: "lAxWovKElsg",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no SBT News — entrevista completa Radar News",
						"https://www.youtube.com/watch?v=5SnkxXEqSs8",
						"2026-04-17",
					),
					description: dv(
						"O pré-candidato concede entrevista completa ao SBT News no programa Radar News sobre propostas de governo e análise política.",
						"https://www.youtube.com/watch?v=5SnkxXEqSs8",
						"2026-04-17",
					),
					youtubeId: "5SnkxXEqSs8",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Podcast Entrevista Completa — carreira e planos",
						"https://www.youtube.com/watch?v=vpUJwdYDh_w",
						"2026-04-05",
					),
					description: dv(
						"O pré-candidato participa do Podcast Entrevista Completa para falar sobre sua carreira, propostas de governo e visão para o futuro do Brasil.",
						"https://www.youtube.com/watch?v=vpUJwdYDh_w",
						"2026-04-05",
					),
					youtubeId: "vpUJwdYDh_w",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Podcast Conversar — bastidores da política",
						"https://www.youtube.com/watch?v=iQ4q6wFlRvQ",
						"2026-03-20",
					),
					description: dv(
						"O presidente do Partido Missão participa do Podcast Conversar, abordando os bastidores da política nacional, reformas e a disputa eleitoral.",
						"https://www.youtube.com/watch?v=iQ4q6wFlRvQ",
						"2026-03-20",
					),
					youtubeId: "iQ4q6wFlRvQ",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Flow News #032 — pré-candidatura e plano de governo",
						"https://www.youtube.com/watch?v=YQ7E5cimEus",
						"2026-02-24",
					),
					description: dv(
						"O pré-candidato do Partido Missão participa do Flow News #032 para detalhar seu plano de governo e visão para o Brasil.",
						"https://www.youtube.com/watch?v=YQ7E5cimEus",
						"2026-02-24",
					),
					youtubeId: "YQ7E5cimEus",
					category: "entrevistas",
				},
				{
					title: dv(
						"Renan Santos no Eslen Podcast — odiado por lulistas e bolsonaristas",
						"https://www.youtube.com/watch?v=UT0QKSgzerk",
						"2026-01-15",
					),
					description: dv(
						"O pré-candidato participa do Eslen Podcast #156, discutindo por que é odiado tanto por lulistas quanto por bolsonaristas e suas propostas para o Brasil.",
						"https://www.youtube.com/watch?v=UT0QKSgzerk",
						"2026-01-15",
					),
					youtubeId: "UT0QKSgzerk",
					category: "entrevistas",
				},
			],
		},
		{
			id: "debates",
			label: "Debates e Sabatinas",
			items: [
				{
					title: dv(
						'Renan Santos no Minuto 14 — por que o MBL vai relançar "Não Vai Ter Golpe"',
						"https://www.youtube.com/watch?v=5PCwqjNg6ZA",
						"2026-06-13",
					),
					description: dv(
						"O pré-candidato explica no Minuto 14 por que o MBL vai relançar o filme Não Vai Ter Golpe e analisa o cenário político brasileiro.",
						"https://www.youtube.com/watch?v=5PCwqjNg6ZA",
						"2026-06-13",
					),
					youtubeId: "5PCwqjNg6ZA",
					category: "debates",
				},
			],
		},
	],
	caiado: [
		{
			id: "entrevistas",
			label: "Entrevistas e Sabatinas",
			items: [
				{
					title: dv(
						"Caiado concede entrevista coletiva em Marília-SP",
						"https://www.youtube.com/watch?v=37UHTPaDYQI",
						"2026-07-03",
					),
					description: dv(
						"O pré-candidato à Presidência da República concede entrevista coletiva em Marília-SP, abordando propostas de governo e o cenário eleitoral.",
						"https://www.youtube.com/watch?v=37UHTPaDYQI",
						"2026-07-03",
					),
					youtubeId: "37UHTPaDYQI",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Papo De Elite — o que pode derrotar o PT",
						"https://www.youtube.com/watch?v=RAS1vq-mqdU",
						"2026-07-02",
					),
					description: dv(
						"O pré-candidato analisa o cenário político brasileiro, explica por que acredita que pode derrotar o PT e apresenta suas propostas para o Brasil.",
						"https://www.youtube.com/watch?v=RAS1vq-mqdU",
						"2026-07-02",
					),
					youtubeId: "RAS1vq-mqdU",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado na Jovem Pan Marília — entrevista sobre pré-candidatura e alianças",
						"https://www.youtube.com/watch?v=JyooQfG4q8s",
						"2026-07-02",
					),
					description: dv(
						"O pré-candidato participa do Jornal da Manhã Marília da Jovem Pan ao lado de Gilberto Kassab e Titi Brandão para discutir a corrida presidencial.",
						"https://www.youtube.com/watch?v=JyooQfG4q8s",
						"2026-07-02",
					),
					youtubeId: "JyooQfG4q8s",
					category: "entrevistas",
				},
				{
					title: dv(
						"Entrevista com Ronaldo Caiado — PEC Brasil 2026",
						"https://www.youtube.com/watch?v=CzMHtuu-tNg",
						"2026-07-02",
					),
					description: dv(
						"O pré-candidato concede entrevista ao programa PEC Brasil 2026 do Sertão É Notícia, abordando propostas de governo e o cenário eleitoral.",
						"https://www.youtube.com/watch?v=CzMHtuu-tNg",
						"2026-07-02",
					),
					youtubeId: "CzMHtuu-tNg",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado na Jovem Pan — Morning Show entrevista 01/07",
						"https://www.youtube.com/watch?v=cm83H1ajZjc",
						"2026-07-01",
					),
					description: dv(
						"O pré-candidato afirma ser o melhor candidato para enfrentar Lula em entrevista ao programa Morning Show da Jovem Pan.",
						"https://www.youtube.com/watch?v=cm83H1ajZjc",
						"2026-07-01",
					),
					youtubeId: "cm83H1ajZjc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Direto ao Ponto (Jovem Pan) — agronegócio e desafios do setor",
						"https://www.youtube.com/watch?v=uLmPD92nmwc",
						"2026-06-16",
					),
					description: dv(
						"O pré-candidato fala sobre agronegócio no Direto ao Ponto da Jovem Pan: Estou preparado para os desafios do setor, diz Caiado sobre propostas para o campo.",
						"https://www.youtube.com/watch?v=uLmPD92nmwc",
						"2026-06-16",
					),
					youtubeId: "uLmPD92nmwc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Poder360 — entrevista sobre eleições 2026",
						"https://www.youtube.com/watch?v=u7T6xmXiVwg",
						"2026-06-16",
					),
					description: dv(
						"O pré-candidato do PSD concede entrevista ao Poder360 sobre o cenário eleitoral, alianças e propostas para as eleições de 2026.",
						"https://www.youtube.com/watch?v=u7T6xmXiVwg",
						"2026-06-16",
					),
					youtubeId: "u7T6xmXiVwg",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Direto ao Ponto (Jovem Pan) — pré-candidatura e desafios",
						"https://www.youtube.com/watch?v=nRlm9ATPVMI",
						"2026-06-15",
					),
					description: dv(
						"O pré-candidato participa do programa Direto ao Ponto da Jovem Pan para discutir sua pré-candidatura, o cenário eleitoral e os desafios do Brasil.",
						"https://www.youtube.com/watch?v=nRlm9ATPVMI",
						"2026-06-15",
					),
					youtubeId: "nRlm9ATPVMI",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no ICL Notícias — entrevista sobre economia e política",
						"https://www.youtube.com/watch?v=F_oriCHEryg",
						"2026-06-15",
					),
					description: dv(
						"O pré-candidato concede entrevista ao ICL Notícias sobre economia, política e suas propostas para o Brasil.",
						"https://www.youtube.com/watch?v=F_oriCHEryg",
						"2026-06-15",
					),
					youtubeId: "F_oriCHEryg",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no VEJA+ em Foco — pré-candidatura e planos",
						"https://www.youtube.com/watch?v=tKCEjYV69XQ",
						"2026-06-08",
					),
					description: dv(
						"O ex-governador participa do VEJA+ em Foco em entrevista de 1h02 sobre sua pré-candidatura, propostas e o cenário político nacional.",
						"https://www.youtube.com/watch?v=tKCEjYV69XQ",
						"2026-06-08",
					),
					youtubeId: "tKCEjYV69XQ",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no IronTalks — entrevista aprofundada de quase 3 horas",
						"https://www.youtube.com/watch?v=X2ygPkiz5iw",
						"2026-06-03",
					),
					description: dv(
						"O pré-candidato participa de entrevista de 2h57 no IronTalks, abordando sua carreira, segurança pública, economia e planos de governo.",
						"https://www.youtube.com/watch?v=X2ygPkiz5iw",
						"2026-06-03",
					),
					youtubeId: "X2ygPkiz5iw",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado na TBC Reportagens — O Mundo em Sua Casa",
						"https://www.youtube.com/watch?v=3wUDcbpA2XU",
						"2026-05-26",
					),
					description: dv(
						"O pré-candidato participa do programa O Mundo em Sua Casa, da TBC Reportagens, sobre política nacional e propostas.",
						"https://www.youtube.com/watch?v=3wUDcbpA2XU",
						"2026-05-26",
					),
					youtubeId: "3wUDcbpA2XU",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Grupo ND — entrevista exclusiva sobre cenário político",
						"https://www.youtube.com/watch?v=XSubhPjdsFc",
						"2026-05-20",
					),
					description: dv(
						"O ex-governador concede entrevista exclusiva ao Grupo ND sobre o cenário político nacional, economia, segurança pública e as estratégias do PSD.",
						"https://www.youtube.com/watch?v=XSubhPjdsFc",
						"2026-05-20",
					),
					youtubeId: "XSubhPjdsFc",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Política de Primeira — bastidores da política",
						"https://www.youtube.com/watch?v=F_3sxQEqp5w",
						"2026-05-18",
					),
					description: dv(
						"O pré-candidato participa do podcast Política de Primeira em entrevista de 65 minutos sobre bastidores da política e planos de governo.",
						"https://www.youtube.com/watch?v=F_3sxQEqp5w",
						"2026-05-18",
					),
					youtubeId: "F_3sxQEqp5w",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado na Rádio CBN — sobre Gilmar Mendes e Zema",
						"https://www.youtube.com/watch?v=iZ6uMf8RRmg",
						"2026-05-15",
					),
					description: dv(
						"O pré-candidato comenta sobre a relação com Zema e o ministro Gilmar Mendes em entrevista à Rádio CBN.",
						"https://www.youtube.com/watch?v=iZ6uMf8RRmg",
						"2026-05-15",
					),
					youtubeId: "iZ6uMf8RRmg",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Arena Oeste #51 — Revista Oeste",
						"https://www.youtube.com/watch?v=t7czwaVLGS4",
						"2026-05-14",
					),
					description: dv(
						"O pré-candidato do PSD é entrevistado por Adalberto Piotto no programa Arena Oeste da Revista Oeste sobre segurança, política e o Banco Master.",
						"https://www.youtube.com/watch?v=t7czwaVLGS4",
						"2026-05-14",
					),
					youtubeId: "t7czwaVLGS4",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado na Jovem Pan News — entrevista sobre cenário político",
						"https://www.youtube.com/watch?v=tj4UdFcybuY",
						"2026-05-14",
					),
					description: dv(
						"O pré-candidato concede entrevista à Jovem Pan News sobre o cenário político, alianças e propostas de governo.",
						"https://www.youtube.com/watch?v=tj4UdFcybuY",
						"2026-05-14",
					),
					youtubeId: "tj4UdFcybuY",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Frente a Frente (Folha/UOL) — segurança pública e operação policial",
						"https://www.youtube.com/watch?v=DGKqLldrf5I",
						"2026-04-06",
					),
					description: dv(
						"O pré-candidato elogia operação policial no Rio, defende presença das Forças Armadas na segurança e apresenta suas propostas para o Brasil.",
						"https://www.youtube.com/watch?v=DGKqLldrf5I",
						"2026-04-06",
					),
					youtubeId: "DGKqLldrf5I",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Flow News — pré-candidatura e planos para o Brasil",
						"https://www.youtube.com/watch?v=irsSMtI4iVM",
						"2026-03-30",
					),
					description: dv(
						"O governador de Goiás e pré-candidato à Presidência pelo PSD fala sobre sua trajetória, anistia a Bolsonaro e propostas de governo.",
						"https://www.youtube.com/watch?v=irsSMtI4iVM",
						"2026-03-30",
					),
					youtubeId: "irsSMtI4iVM",
					category: "entrevistas",
				},
				{
					title: dv(
						"Caiado no Poder360 — entrevista sobre plano de governo",
						"https://www.youtube.com/watch?v=66Db6PfkYgU",
						"2026-01-21",
					),
					description: dv(
						"O pré-candidato concede entrevista de 1h22 ao Poder360 sobre plano de governo, economia e segurança pública.",
						"https://www.youtube.com/watch?v=66Db6PfkYgU",
						"2026-01-21",
					),
					youtubeId: "66Db6PfkYgU",
					category: "entrevistas",
				},
			],
		},
		{
			id: "debates",
			label: "Debates e Sabatinas",
			items: [
				{
					title: dv(
						"Caiado na TV Band Minas — tarifaço e política internacional",
						"https://www.youtube.com/watch?v=02wIYB7zSIo",
						"2026-06-01",
					),
					description: dv(
						"O pré-candidato analisa o tarifaço americano e seus impactos no Brasil em entrevista à TV Band Minas.",
						"https://www.youtube.com/watch?v=02wIYB7zSIo",
						"2026-06-01",
					),
					youtubeId: "02wIYB7zSIo",
					category: "debates",
				},
				{
					title: dv(
						"Caiado sobre aliança com Zema e vice-presidência — bastidores da eleição 2026",
						"https://www.youtube.com/watch?v=Wwe49wMVRYI",
						"2026-04-20",
					),
					description: dv(
						"O pré-candidato declara que Kassab seria o vice-presidente ideal e comenta sobre uma possível aliança com Zema para as eleições.",
						"https://www.youtube.com/watch?v=Wwe49wMVRYI",
						"2026-04-20",
					),
					youtubeId: "Wwe49wMVRYI",
					category: "debates",
				},
			{
					title: dv(
						"Caiado no Roda Viva (TV Cultura) — sabatina com bancada de jornalistas",
						"https://www.youtube.com/watch?v=51g_wYigfag",
						"2025-06-09",
					),
					description: dv(
						"O governador de Goiás participa do Roda Viva, sabatina com bancada de cinco jornalistas do Estadão, CBN, Folha, CNN e UOL, sobre pré-candidatura e planos de governo.",
						"https://www.youtube.com/watch?v=51g_wYigfag",
						"2025-06-09",
					),
					youtubeId: "51g_wYigfag",
					category: "debates",
				},
			],
		},
		{
			id: "campanha",
			label: "Campanha e Discursos",
			items: [
				{
					title: dv(
						"Caiado no Poder360 — propostas para o Brasil",
						"https://www.youtube.com/watch?v=12bMiIXPvKA",
						"2026-06-06",
					),
					description: dv(
						"O pré-candidato apresenta suas propostas para o Brasil em entrevista ao Poder360, abordando reformas e planos de governo.",
						"https://www.youtube.com/watch?v=12bMiIXPvKA",
						"2026-06-06",
					),
					youtubeId: "12bMiIXPvKA",
					category: "campanha",
				},
				{
					title: dv(
						"Caiado no Café com Ferri — bastidores da eleição e propostas",
						"https://www.youtube.com/watch?v=D0pKrvxqnyE",
						"2026-05-22",
					),
					description: dv(
						"O pré-candidato fala sobre bastidores da campanha, alianças políticas e suas propostas para o Brasil em entrevista ao programa Café com Ferri.",
						"https://www.youtube.com/watch?v=D0pKrvxqnyE",
						"2026-05-22",
					),
					youtubeId: "D0pKrvxqnyE",
					category: "campanha",
				},
			],
		},
	],
	zema: [
		{
			id: "entrevistas",
			label: "Entrevistas e Sabatinas",
			items: [
				{
					title: dv(
						"Romeu Zema no Poder360 — entrevista completa 01/07",
						"https://www.youtube.com/watch?v=TWzMeA0MrJ0",
						"2026-07-01",
					),
					description: dv(
						"O pré-candidato do Novo concede entrevista ao Poder360 sobre propostas de governo, economia e o cenário eleitoral.",
						"https://www.youtube.com/watch?v=TWzMeA0MrJ0",
						"2026-07-01",
					),
					youtubeId: "TWzMeA0MrJ0",
					category: "entrevistas",
				},
				{
					title: dv(
						"Romeu Zema no Arena Oeste — entrevista Revista Oeste",
						"https://www.youtube.com/watch?v=xtAUQgPMR-o",
						"2026-06-30",
					),
					description: dv(
						"O pré-candidato participa do Arena Oeste da Revista Oeste, abordando propostas e o cenário político para 2026.",
						"https://www.youtube.com/watch?v=xtAUQgPMR-o",
						"2026-06-30",
					),
					youtubeId: "xtAUQgPMR-o",
					category: "entrevistas",
				},
				{
					title: dv(
						"Romeu Zema propõe tratar facções como terrorismo e criar presídios na Amazônia",
						"https://www.youtube.com/watch?v=dTajGe601w8",
						"2026-06-29",
					),
					description: dv(
						"Em entrevista ao jornal O Povo, o pré-candidato Romeu Zema afirma que pretende enquadrar facções como terroristas e criar presídios na Amazônia.",
						"https://www.youtube.com/watch?v=dTajGe601w8",
						"2026-06-29",
					),
					youtubeId: "dTajGe601w8",
					category: "entrevistas",
				},
				{
					title: dv(
						"Romeu Zema anuncia quebra de sigilo de adversários — Jovem Pan",
						"https://www.youtube.com/watch?v=HAtBraMJkK8",
						"2026-06-27",
					),
					description: dv(
						"O pré-candidato do Novo anuncia em entrevista à Jovem Pan que pretende quebrar sigilos de adversários para combater corrupção.",
						"https://www.youtube.com/watch?v=HAtBraMJkK8",
						"2026-06-27",
					),
					youtubeId: "HAtBraMJkK8",
					category: "entrevistas",
				},
				{
					title: dv(
						"Romeu Zema: 'Vou acabar com o orçamento secreto' — O POVO",
						"https://www.youtube.com/watch?v=mUMBSopR4g0",
						"2026-06-25",
					),
					description: dv(
						"O pré-candidato afirma em entrevista ao jornal O POVO que pretende acabar com o orçamento secreto e garantir transparência total nos gastos públicos.",
						"https://www.youtube.com/watch?v=mUMBSopR4g0",
						"2026-06-25",
					),
					youtubeId: "mUMBSopR4g0",
					category: "entrevistas",
				},
				{
					title: dv(
						"Romeu Zema comenta eleições 2026 e reforma tributária — O POVO",
						"https://www.youtube.com/watch?v=K2wRdgeKKJ0",
						"2026-06-24",
					),
					description: dv(
						"O pré-candidato comenta o cenário das eleições 2026 e a reforma tributária em entrevista ao jornal O POVO.",
						"https://www.youtube.com/watch?v=K2wRdgeKKJ0",
						"2026-06-24",
					),
					youtubeId: "K2wRdgeKKJ0",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema: 'Para melhorar economia, temos que cortar gastos públicos' — SBT News",
						"https://www.youtube.com/watch?v=E0bEe6C9I0g",
						"2026-06-24",
					),
					description: dv(
						"O pré-candidato defende corte de gastos públicos como medida essencial para melhorar a economia brasileira em entrevista ao SBT News.",
						"https://www.youtube.com/watch?v=E0bEe6C9I0g",
						"2026-06-24",
					),
					youtubeId: "E0bEe6C9I0g",
					category: "entrevistas",
				},
				{
					title: dv(
						"Romeu Zema no Mauá Podcast — entrevista sobre propostas de governo",
						"https://www.youtube.com/watch?v=lK6_85bwvwE",
						"2026-06-22",
					),
					description: dv(
						"O pré-candidato participa do Mauá Podcast, detalhando suas propostas de governo, visão econômica e planos para o Brasil.",
						"https://www.youtube.com/watch?v=lK6_85bwvwE",
						"2026-06-22",
					),
					youtubeId: "lK6_85bwvwE",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema dispara contra políticos que não cumprem mandato — TV Meio Norte",
						"https://www.youtube.com/watch?v=r1mAOwnMYhI",
						"2026-06-22",
					),
					description: dv(
						"O pré-candidato critica políticos que não cumprem mandato integral e defende mandato fixo em entrevista à TV Meio Norte.",
						"https://www.youtube.com/watch?v=r1mAOwnMYhI",
						"2026-06-22",
					),
					youtubeId: "r1mAOwnMYhI",
					category: "entrevistas",
				},
				{
					title: dv(
						"Código Brasília recebe Romeu Zema — entrevista sobre eleições 2026",
						"https://www.youtube.com/watch?v=kvO-P7Ho0b0",
						"2026-06-21",
					),
					description: dv(
						"O pré-candidato participa do Código Brasília, abordando o cenário eleitoral de 2026, propostas de governo e alianças.",
						"https://www.youtube.com/watch?v=kvO-P7Ho0b0",
						"2026-06-21",
					),
					youtubeId: "kvO-P7Ho0b0",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no VEJA Fórum Rumos do Brasil — debate sobre o futuro",
						"https://www.youtube.com/watch?v=j3D5_xsHkj8",
						"2026-06-15",
					),
					description: dv(
						"O pré-candidato participa do VEJA Fórum Rumos do Brasil debatendo os rumos da economia e da política nacional.",
						"https://www.youtube.com/watch?v=j3D5_xsHkj8",
						"2026-06-15",
					),
					youtubeId: "j3D5_xsHkj8",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no VEJA em Foco — entrevista sobre eleições 2026",
						"https://www.youtube.com/watch?v=7IIZZ_cF-TE",
						"2026-06-04",
					),
					description: dv(
						"O ex-governador participa do VEJA em Foco para discutir as eleições de 2026, alianças e propostas de governo.",
						"https://www.youtube.com/watch?v=7IIZZ_cF-TE",
						"2026-06-04",
					),
					youtubeId: "7IIZZ_cF-TE",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Flow News — pré-campanha e propostas para 2026",
						"https://www.youtube.com/watch?v=688n7zJ6bME",
						"2026-05-22",
					),
					description: dv(
						"O pré-candidato do Partido Novo detalha suas propostas de privatização, reforma administrativa e plano de governo para a Presidência.",
						"https://www.youtube.com/watch?v=688n7zJ6bME",
						"2026-05-22",
					),
					youtubeId: "688n7zJ6bME",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Frente a Frente (UOL/Folha) — pré-candidatura e STF",
						"https://www.youtube.com/watch?v=0gYirlZDzDs",
						"2026-05-04",
					),
					description: dv(
						"O ex-governador é entrevistado por Daniela Lima e Fabio Zanini sobre STF, pré-candidatura, polêmica do trabalho infantil e relação com Flávio Bolsonaro.",
						"https://www.youtube.com/watch?v=0gYirlZDzDs",
						"2026-05-04",
					),
					youtubeId: "0gYirlZDzDs",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Canal Livre (Band) — corrida eleitoral em 2026",
						"https://www.youtube.com/watch?v=NucxNd-J5Ow",
						"2026-05-03",
					),
					description: dv(
						"O ex-governador é entrevistado por Fernando Mitre, Eduardo Oinegue e Sheila Magalhães no Canal Livre da Band sobre a corrida eleitoral e a eleição da indignação.",
						"https://www.youtube.com/watch?v=NucxNd-J5Ow",
						"2026-05-03",
					),
					youtubeId: "NucxNd-J5Ow",
					category: "entrevistas",
				},
				{
					title: dv(
						"Romeu Zema no Inteligência Ltda. — carreira, planos e visão para o Brasil",
						"https://www.youtube.com/watch?v=o0HbJOyIyxE",
						"2026-05-01",
					),
					description: dv(
						"O ex-governador de Minas Gerais e pré-candidato do Partido Novo conversa sobre sua carreira, propostas de governo e o futuro do Brasil.",
						"https://www.youtube.com/watch?v=o0HbJOyIyxE",
						"2026-05-01",
					),
					youtubeId: "o0HbJOyIyxE",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Arena Oeste #49 (Revista Oeste) — bastidores da política",
						"https://www.youtube.com/watch?v=cUfemVeu_z4",
						"2026-04-30",
					),
					description: dv(
						"O pré-candidato participa do Arena Oeste #49 da Revista Oeste sobre bastidores da política e propostas de governo.",
						"https://www.youtube.com/watch?v=cUfemVeu_z4",
						"2026-04-30",
					),
					youtubeId: "cUfemVeu_z4",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema nos Pingos nos Is (Jovem Pan) — privatizações e reformas",
						"https://www.youtube.com/watch?v=96O8UG4qxdw",
						"2026-04-27",
					),
					description: dv(
						"O pré-candidato promete privatizar Petrobras e Banco do Brasil, cortar supersalários e mordomias em entrevista ao vivo no programa Os Pingos Nos Is.",
						"https://www.youtube.com/watch?v=96O8UG4qxdw",
						"2026-04-27",
					),
					youtubeId: "96O8UG4qxdw",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Estadão — conflito com Gilmar Mendes e pré-campanha",
						"https://www.youtube.com/watch?v=_1JaiGFqhno",
						"2026-04-23",
					),
					description: dv(
						"O ex-governador fala ao Estadão sobre o crescimento na disputa com Gilmar Mendes e os planos para a pré-campanha presidencial.",
						"https://www.youtube.com/watch?v=_1JaiGFqhno",
						"2026-04-23",
					),
					youtubeId: "_1JaiGFqhno",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Conversa com Augusto Nunes (Revista Oeste) — pré-candidatura",
						"https://www.youtube.com/watch?v=RZW-xqJyS-Y",
						"2026-04-15",
					),
					description: dv(
						"O ex-governador participa do Conversa com Augusto Nunes, da Revista Oeste, sobre pré-candidatura e visão para o Brasil.",
						"https://www.youtube.com/watch?v=RZW-xqJyS-Y",
						"2026-04-15",
					),
					youtubeId: "RZW-xqJyS-Y",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema na Gaúcha Atualidade — vice de Flávio Bolsonaro?",
						"https://www.youtube.com/watch?v=SOabQ3n6d1A",
						"2026-04-09",
					),
					description: dv(
						"O ex-governador é entrevistado pela Gaúcha Atualidade sobre a possibilidade de ser vice de Flávio Bolsonaro, alianças e candidatura própria.",
						"https://www.youtube.com/watch?v=SOabQ3n6d1A",
						"2026-04-09",
					),
					youtubeId: "SOabQ3n6d1A",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Pânico (Jovem Pan) — polarização e saída (2026)",
						"https://www.youtube.com/watch?v=HNX-cB-ZKOw",
						"2026-05-10",
					),
					description: dv(
						"O pré-candidato participa do programa Pânico da Jovem Pan discutindo a polarização entre Lula e Bolsonaro e o futuro da direita.",
						"https://www.youtube.com/watch?v=HNX-cB-ZKOw",
						"2026-05-10",
					),
					youtubeId: "HNX-cB-ZKOw",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema na Itatiaia — BRICS e política internacional",
						"https://www.youtube.com/watch?v=eYnpcCjNya8",
						"2026-03-01",
					),
					description: dv(
						"O ex-governador analisa o papel do Brasil nos BRICS e a política internacional em entrevista à Rádio Itatiaia.",
						"https://www.youtube.com/watch?v=eYnpcCjNya8",
						"2026-03-01",
					),
					youtubeId: "eYnpcCjNya8",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Morning Show (Jovem Pan) — direita e eleições",
						"https://www.youtube.com/watch?v=AATRd-y-_xQ",
						"2026-02-17",
					),
					description: dv(
						"O ex-governador participa do Morning Show da Jovem Pan sobre a direita nas eleições e o enfraquecimento da oposição.",
						"https://www.youtube.com/watch?v=AATRd-y-_xQ",
						"2026-02-17",
					),
					youtubeId: "AATRd-y-_xQ",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Papo com Editor (Estadão) — STF e pré-candidatura 2026",
						"https://www.youtube.com/watch?v=9gLbKylo93g",
						"2025-07-21",
					),
					description: dv(
						"O governador de Minas Gerais critica o STF como subserviente ao governo federal e discute sua pré-candidatura e as eleições de 2026.",
						"https://www.youtube.com/watch?v=9gLbKylo93g",
						"2025-07-21",
					),
					youtubeId: "9gLbKylo93g",
					category: "entrevistas",
				},
				{
					title: dv(
						"Zema no Pânico (Jovem Pan) — polarização e saída",
						"https://www.youtube.com/watch?v=PrSLgWdeQFQ",
						"2025-06-05",
					),
					description: dv(
						"O ex-governador participa do programa Pânico, da Jovem Pan, debatendo a saída da polarização entre Lula e Bolsonaro e o futuro da direita.",
						"https://www.youtube.com/watch?v=PrSLgWdeQFQ",
						"2025-06-05",
					),
					youtubeId: "PrSLgWdeQFQ",
					category: "entrevistas",
				},
			],
		},
		{
			id: "debates",
			label: "Debates e Sabatinas",
			items: [
				{
					title: dv(
						"Zema no Roda Viva (TV Cultura) — sabatina sobre pré-candidatura",
						"https://www.youtube.com/watch?v=mS9XkwfWvAM",
						"2025-08-11",
					),
					description: dv(
						"O governador de Minas Gerais participa do Roda Viva, sabatina com bancada de jornalistas sobre pré-candidatura e planos de governo.",
						"https://www.youtube.com/watch?v=mS9XkwfWvAM",
						"2025-08-11",
					),
					youtubeId: "mS9XkwfWvAM",
					category: "debates",
				},
			],
		},
		{
			id: "campanha",
			label: "Campanha e Discursos",
			items: [
				{
					title: dv(
						"Zema no Café com Ferri — caso Vorcaro e direita pós-Bolsonaro",
						"https://www.youtube.com/watch?v=AzQxZ9r8l08",
						"2026-05-22",
					),
					description: dv(
						"O pré-candidato fala sem rodeios sobre o escândalo Vorcaro, a direita após Bolsonaro e suas propostas econômicas para o Brasil.",
						"https://www.youtube.com/watch?v=AzQxZ9r8l08",
						"2026-05-22",
					),
					youtubeId: "AzQxZ9r8l08",
					category: "campanha",
				},
				{
					title: dv(
						"Zema e Caiado planejam aliança para 2026 — chapa única?",
						"https://www.youtube.com/watch?v=I2ALi43v__I",
						"2026-05-10",
					),
					description: dv(
						"Os governadores Romeu Zema e Ronaldo Caiado admitem conversas sobre uma possível aliança para as eleições presidenciais de 2026.",
						"https://www.youtube.com/watch?v=I2ALi43v__I",
						"2026-05-10",
					),
					youtubeId: "I2ALi43v__I",
					category: "campanha",
				},
			],
		},
	],
};
