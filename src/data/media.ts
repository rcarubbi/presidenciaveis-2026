import type { MediaCategory } from '../types'
import { dv } from '@/lib/dataValue'

export const mediaData: Record<string, MediaCategory[]> = {
  lula: [
    {
      id: 'entrevistas',
      label: 'Entrevistas e Sabatinas',
      items: [
        { title: dv('Lula no Flow Podcast — entrevista histórica com 1 milhão de espectadores simultâneos', 'https://www.youtube.com/watch?v=OAu9KJFbMhU', '2022-10-18'), description: dv('O ex-presidente Lula conversa com Igor 3K sobre economia, política externa, educação e os desafios do Brasil. A entrevista bateu recorde de audiência no YouTube.', 'https://www.youtube.com/watch?v=OAu9KJFbMhU', '2022-10-18'), youtubeId: 'OAu9KJFbMhU', category: 'entrevistas' },
        { title: dv('Lula no Podpah — entrevista sobre carreira, PT e planos para o Brasil', 'https://www.youtube.com/watch?v=r4JJh0lbYHU', '2021-12-02'), description: dv('Lula participa do podcast Podpah e fala sobre sua trajetória política, os erros do PT e suas propostas para o país. Mais de 3,4 milhões de visualizações.', 'https://www.youtube.com/watch?v=r4JJh0lbYHU', '2021-12-02'), youtubeId: 'r4JJh0lbYHU', category: 'entrevistas' },
        { title: dv('Lula no EL PAÍS Brasil — entrevista completa sobre política internacional', 'https://www.youtube.com/watch?v=HkG2J_0jxGw', '2026-05-15'), description: dv('O presidente Lula concede entrevista exclusiva ao jornal EL PAÍS Brasil, abordando política internacional, economia e os desafios do Brasil no cenário global.', 'https://www.youtube.com/watch?v=HkG2J_0jxGw', '2026-05-15'), youtubeId: 'HkG2J_0jxGw', category: 'entrevistas' },
        { title: dv('Lula no UOL News — entrevista com Daniela Lima sobre economia', 'https://www.youtube.com/watch?v=01BYnHLyA2A', '2026-02-10'), description: dv('O presidente Lula conversa com a jornalista Daniela Lima no UOL News sobre economia, reforma tributária e as perspectivas para o Brasil em 2026.', 'https://www.youtube.com/watch?v=01BYnHLyA2A', '2026-02-10'), youtubeId: '01BYnHLyA2A', category: 'entrevistas' },
        { title: dv('Lula na CNN Mercado — entrevista sobre tarifas e comércio internacional', 'https://www.youtube.com/watch?v=KwUOhAlb5zc', '2026-06-05'), description: dv('O presidente Lula afirma à CNN que o Brasil não aceitará imposições externas e debate o impacto das tarifas americanas no comércio internacional.', 'https://www.youtube.com/watch?v=KwUOhAlb5zc', '2026-06-05'), youtubeId: 'KwUOhAlb5zc', category: 'entrevistas' },
        { title: dv('Lula no Jornal Nacional — entrevista sobre tarifas de Trump', 'https://www.youtube.com/watch?v=MghtJZVP77g', '2025-07-10'), description: dv('O presidente Lula concede entrevista ao Jornal Nacional sobre as tarifas anunciadas por Trump, a relação Brasil-EUA e os impactos na economia brasileira.', 'https://www.youtube.com/watch?v=MghtJZVP77g', '2025-07-10'), youtubeId: 'MghtJZVP77g', category: 'entrevistas' },
        { title: dv('Lula na LIVE CNN — primeira entrevista à imprensa em 2025', 'https://www.youtube.com/watch?v=AZ1ulkgaitg', '2025-01-20'), description: dv('O presidente Lula fala pela primeira vez à imprensa em 2025 na LIVE CNN, abordando pautas econômicas, política externa e reformas do governo.', 'https://www.youtube.com/watch?v=AZ1ulkgaitg', '2025-01-20'), youtubeId: 'AZ1ulkgaitg', category: 'entrevistas' },
        { title: dv('Lula no Jornal da Band — entrevista completa sobre governo', 'https://www.youtube.com/watch?v=eBih5lMY8kU', '2025-09-15'), description: dv('O presidente Lula concede entrevista ao Jornal da Band sobre o balanço do governo, reformas, economia e os desafios políticos do Brasil.', 'https://www.youtube.com/watch?v=eBih5lMY8kU', '2025-09-15'), youtubeId: 'eBih5lMY8kU', category: 'entrevistas' },
        { title: dv('Lula no SBT Brasil — entrevista sobre economia e política', 'https://www.youtube.com/watch?v=QBimpJ04Ouc', '2025-09-22'), description: dv('O presidente Lula repercute temas da economia e da política nacional em entrevista ao SBT Brasil, abordando reformas e o cenário eleitoral.', 'https://www.youtube.com/watch?v=QBimpJ04Ouc', '2025-09-22'), youtubeId: 'QBimpJ04Ouc', category: 'entrevistas' },
      ],
    },
    {
      id: 'campanha',
      label: 'Campanha e Discursos',
      items: [
        { title: dv('Lula no ICL — entrevista sobre os 8 anos do golpe e o futuro do Brasil', 'https://www.youtube.com/watch?v=rjq0ms0NQ-0', '2023-12-12'), description: dv('O presidente Lula concede entrevista ao Instituto Conhecimento Liberta (ICL) sobre os 8 anos do processo de impeachment, a economia brasileira e os desafios do país.', 'https://www.youtube.com/watch?v=rjq0ms0NQ-0', '2023-12-12'), youtubeId: 'rjq0ms0NQ-0', category: 'entrevistas' },
      ],
    },
  ],
  flavio: [
    {
      id: 'entrevistas',
      label: 'Entrevistas e Sabatinas',
      items: [
        { title: dv('Flávio Bolsonaro no Flow News — entrevista sobre segurança pública e eleições 2026', 'https://www.youtube.com/watch?v=sb38vcI-8cY', '2025-12-01'), description: dv('O senador e pré-candidato à Presidência fala sobre seus planos de governo, segurança pública e o cenário político para 2026.', 'https://www.youtube.com/watch?v=sb38vcI-8cY', '2025-12-01'), youtubeId: 'sb38vcI-8cY', category: 'entrevistas' },
        { title: dv('Flávio Bolsonaro na CEO Conference 2026 — política e cenário eleitoral', 'https://www.youtube.com/watch?v=X7ev9xPC2SY', '2026-02-12'), description: dv('O senador debate o cenário eleitoral brasileiro, economia e reformas necessárias na CEO Conference 2026, com mediação de Amanda Klein.', 'https://www.youtube.com/watch?v=X7ev9xPC2SY', '2026-02-12'), youtubeId: 'X7ev9xPC2SY', category: 'entrevistas' },
        { title: dv('Flávio Bolsonaro apresenta plano "Brasil Sem Medo" — 12 propostas de segurança pública', 'https://www.youtube.com/watch?v=6X-ezw6LcpA', '2026-06-18'), description: dv('O senador e pré-candidato à Presidência apresenta pacote com 12 medidas de segurança, incluindo redução da maioridade penal, castração química e classificação de facções como terroristas.', 'https://www.youtube.com/watch?v=6X-ezw6LcpA', '2026-06-18'), youtubeId: '6X-ezw6LcpA', category: 'entrevistas' },
        { title: dv('Flávio Bolsonaro no Flow Podcast — propostas e reação de Igor 3K', 'https://www.youtube.com/watch?v=GC0IC_QTvds', '2026-06-20'), description: dv('O senador e pré-candidato apresenta suas propostas de governo no Flow Podcast, com reações do apresentador Igor 3K sobre segurança, economia e eleições.', 'https://www.youtube.com/watch?v=GC0IC_QTvds', '2026-06-20'), youtubeId: 'GC0IC_QTvds', category: 'entrevistas' },
        { title: dv('Flávio Bolsonaro na Jovem Pan — entrevista exclusiva "3 em 1"', 'https://www.youtube.com/watch?v=DmlGUYaANdY', '2026-06-18'), description: dv('O pré-candidato concede entrevista exclusiva à Jovem Pan News no programa "3 em 1", abordando segurança pública, economia e propostas de governo.', 'https://www.youtube.com/watch?v=DmlGUYaANdY', '2026-06-18'), youtubeId: 'DmlGUYaANdY', category: 'entrevistas' },
        { title: dv('Flávio Bolsonaro na Jovem Pan — entrevista sobre pré-candidatura', 'https://www.youtube.com/watch?v=-bM_EHOh5QY', '2026-03-15'), description: dv('O senador concede entrevista à Jovem Pan News sobre sua pré-candidatura à Presidência, propostas e o cenário político para 2026.', 'https://www.youtube.com/watch?v=-bM_EHOh5QY', '2026-03-15'), youtubeId: '-bM_EHOh5QY', category: 'entrevistas' },
        { title: dv('Flávio Bolsonaro na Folha de S.Paulo — eventual candidatura e indulto', 'https://www.youtube.com/watch?v=HjGhcK09gJI', '2025-06-20'), description: dv('O senador fala à Folha de S.Paulo sobre a eventual candidatura de Jair Bolsonaro, garantia de indulto e o plano sucessório na direita.', 'https://www.youtube.com/watch?v=HjGhcK09gJI', '2025-06-20'), youtubeId: 'HjGhcK09gJI', category: 'entrevistas' },
        { title: dv('Flávio Bolsonaro na CNN 360° — plano A e plano B da direita', 'https://www.youtube.com/watch?v=mSbraAy3-Dw', '2026-04-10'), description: dv('O senador analisa na CNN 360° o cenário eleitoral: o plano A é Jair Bolsonaro, o plano B é o plano A — e discute estratégias da direita para 2026.', 'https://www.youtube.com/watch?v=mSbraAy3-Dw', '2026-04-10'), youtubeId: 'mSbraAy3-Dw', category: 'entrevistas' },
        { title: dv('Flávio Bolsonaro no Café com Política — entrevista exclusiva ao vivo', 'https://www.youtube.com/watch?v=5ZlB2qBdeT4', '2026-05-05'), description: dv('O pré-candidato concede entrevista exclusiva ao vivo no programa Café com Política, em Minas Gerais, sobre campanha e propostas.', 'https://www.youtube.com/watch?v=5ZlB2qBdeT4', '2026-05-05'), youtubeId: '5ZlB2qBdeT4', category: 'entrevistas' },
      ],
    },
    {
      id: 'debates',
      label: 'Debates e Sabatinas',
      items: [
        { title: dv('Flávio Bolsonaro diz que não irá em debates que Renan Santos comparecer', 'https://www.youtube.com/watch?v=afJy8jAxOVo', '2026-06-22'), description: dv('O pré-candidato afirma à Jovem Pan que não participará de debates nos quais o pré-candidato Renan Santos (Partido Missão) estiver presente, gerando polêmica no cenário eleitoral.', 'https://www.youtube.com/watch?v=afJy8jAxOVo', '2026-06-22'), youtubeId: 'afJy8jAxOVo', category: 'debates' },
      ],
    },
  ],
  renan: [
    {
      id: 'entrevistas',
      label: 'Entrevistas e Sabatinas',
      items: [
        { title: dv('Renan Santos no Frente a Frente (Folha/UOL) — pré-candidatura e propostas', 'https://www.youtube.com/watch?v=PeubtGxpu2k', '2026-04-27'), description: dv('O pré-candidato do Partido Missão é entrevistado por Carla Araújo e Fábio Zanini sobre suas propostas, a reforma política e a disputa eleitoral.', 'https://www.youtube.com/watch?v=PeubtGxpu2k', '2026-04-27'), youtubeId: 'PeubtGxpu2k', category: 'entrevistas' },
        { title: dv('Renan Santos no Poder360 — plano de governo e eleições 2026', 'https://www.youtube.com/watch?v=A4-ll_eCCbM', '2026-05-21'), description: dv('O pré-candidato detalha seu plano de governo, propostas econômicas e visão para o Brasil em entrevista ao jornal digital Poder360.', 'https://www.youtube.com/watch?v=A4-ll_eCCbM', '2026-05-21'), youtubeId: 'A4-ll_eCCbM', category: 'entrevistas' },
        { title: dv('Renan Santos no Gaúcha Atualidade — pré-campanha e propostas econômicas', 'https://www.youtube.com/watch?v=xGJaqgrxDjE', '2026-05-26'), description: dv('O pré-candidato do Missão fala sobre taxa das blusinhas, fim da escala 6x1 e suas propostas econômicas em entrevista à Rádio Gaúcha.', 'https://www.youtube.com/watch?v=xGJaqgrxDjE', '2026-05-26'), youtubeId: 'xGJaqgrxDjE', category: 'entrevistas' },
        { title: dv('Renan Santos no Direto ao Ponto (Jovem Pan) — crítica à direita e cenário eleitoral', 'https://www.youtube.com/watch?v=lAxWovKElsg', '2026-04-20'), description: dv('O presidente do Partido Missão afirma que a família Bolsonaro destruiu a direita e analisa o cenário eleitoral para 2026 no programa Direto ao Ponto da Jovem Pan.', 'https://www.youtube.com/watch?v=lAxWovKElsg', '2026-04-20'), youtubeId: 'lAxWovKElsg', category: 'entrevistas' },
        { title: dv('Renan Santos no Conexões JBFM — bastidores da pré-candidatura', 'https://www.youtube.com/watch?v=axvXleeMlEA', '2026-06-10'), description: dv('O pré-candidato à Presidência concede entrevista ao programa Conexões, da JBFM, sobre os bastidores da campanha e propostas de governo.', 'https://www.youtube.com/watch?v=axvXleeMlEA', '2026-06-10'), youtubeId: 'axvXleeMlEA', category: 'entrevistas' },
        { title: dv('Renan Santos na RedeTV Notícias — entrevista sobre pré-campanha', 'https://www.youtube.com/watch?v=LFlMNDvpJ_g', '2026-05-12'), description: dv('O pré-candidato do Partido Missão concede entrevista à RedeTV Notícias sobre sua pré-campanha, propostas de governo e o cenário político.', 'https://www.youtube.com/watch?v=LFlMNDvpJ_g', '2026-05-12'), youtubeId: 'LFlMNDvpJ_g', category: 'entrevistas' },
        { title: dv('Renan Santos no Podcast Entrevista Completa — carreira e planos', 'https://www.youtube.com/watch?v=vpUJwdYDh_w', '2026-04-05'), description: dv('O pré-candidato participa do Podcast Entrevista Completa para falar sobre sua carreira, propostas de governo e visão para o futuro do Brasil.', 'https://www.youtube.com/watch?v=vpUJwdYDh_w', '2026-04-05'), youtubeId: 'vpUJwdYDh_w', category: 'entrevistas' },
        { title: dv('Renan Santos no Podcast Conversar — bastidores da política', 'https://www.youtube.com/watch?v=iQ4q6wFlRvQ', '2026-03-20'), description: dv('O presidente do Partido Missão participa do Podcast Conversar, abordando os bastidores da política nacional, reformas e a disputa eleitoral.', 'https://www.youtube.com/watch?v=iQ4q6wFlRvQ', '2026-03-20'), youtubeId: 'iQ4q6wFlRvQ', category: 'entrevistas' },
        { title: dv('Renan Santos na Sabatina Esfera — propostas e visão de país', 'https://www.youtube.com/watch?v=Mjrt13Iq9Gc', '2026-05-28'), description: dv('O pré-candidato participa da Sabatina Esfera, respondendo a perguntas sobre suas propostas de governo, economia, segurança e reforma política.', 'https://www.youtube.com/watch?v=Mjrt13Iq9Gc', '2026-05-28'), youtubeId: 'Mjrt13Iq9Gc', category: 'entrevistas' },
        { title: dv('Renan Santos no Jornal Gente — entrevista sobre eleições 2026', 'https://www.youtube.com/watch?v=qHbjr2E8Iu4', '2026-06-15'), description: dv('O pré-candidato concede entrevista ao Jornal Gente sobre o cenário das eleições 2026, alianças políticas e propostas para o Brasil.', 'https://www.youtube.com/watch?v=qHbjr2E8Iu4', '2026-06-15'), youtubeId: 'qHbjr2E8Iu4', category: 'entrevistas' },
      ],
    },
  ],
  caiado: [
    {
      id: 'entrevistas',
      label: 'Entrevistas e Sabatinas',
      items: [
        { title: dv('Caiado no Flow News — pré-candidatura e planos para o Brasil', 'https://www.youtube.com/watch?v=irsSMtI4iVM', '2026-03-30'), description: dv('O governador de Goiás e pré-candidato à Presidência pelo PSD fala sobre sua trajetória, anistia a Bolsonaro e propostas de governo.', 'https://www.youtube.com/watch?v=irsSMtI4iVM', '2026-03-30'), youtubeId: 'irsSMtI4iVM', category: 'entrevistas' },
        { title: dv('Caiado no Frente a Frente (Folha/UOL) — segurança pública e operação policial', 'https://www.youtube.com/watch?v=DGKqLldrf5I', '2026-04-06'), description: dv('O pré-candidato elogia operação policial no Rio, defende presença das Forças Armadas na segurança e apresenta suas propostas para o Brasil.', 'https://www.youtube.com/watch?v=DGKqLldrf5I', '2026-04-06'), youtubeId: 'DGKqLldrf5I', category: 'entrevistas' },
        { title: dv('Caiado no IronTalks — entrevista aprofundada de quase 3 horas', 'https://www.youtube.com/watch?v=X2ygPkiz5iw', '2026-06-03'), description: dv('O pré-candidato participa de entrevista de 2h57 no IronTalks, abordando sua carreira, segurança pública, economia e planos de governo.', 'https://www.youtube.com/watch?v=X2ygPkiz5iw', '2026-06-03'), youtubeId: 'X2ygPkiz5iw', category: 'entrevistas' },
        { title: dv('Caiado no Arena Oeste #51 — Revista Oeste', 'https://www.youtube.com/watch?v=t7czwaVLGS4', '2026-05-14'), description: dv('O pré-candidato do PSD é entrevistado por Adalberto Piotto no programa Arena Oeste da Revista Oeste sobre segurança, política e o Banco Master.', 'https://www.youtube.com/watch?v=t7czwaVLGS4', '2026-05-14'), youtubeId: 't7czwaVLGS4', category: 'entrevistas' },
        { title: dv('Caiado no Grupo ND — entrevista exclusiva sobre cenário político', 'https://www.youtube.com/watch?v=XSubhPjdsFc', '2026-05-20'), description: dv('O ex-governador concede entrevista exclusiva ao Grupo ND sobre o cenário político nacional, economia, segurança pública e as estratégias do PSD.', 'https://www.youtube.com/watch?v=XSubhPjdsFc', '2026-05-20'), youtubeId: 'XSubhPjdsFc', category: 'entrevistas' },
        { title: dv('Caiado no Direto ao Ponto (Jovem Pan) — pré-candidatura e desafios', 'https://www.youtube.com/watch?v=nRlm9ATPVMI', '2026-06-15'), description: dv('O pré-candidato participa do programa Direto ao Ponto da Jovem Pan para discutir sua pré-candidatura, o cenário eleitoral e os desafios do Brasil.', 'https://www.youtube.com/watch?v=nRlm9ATPVMI', '2026-06-15'), youtubeId: 'nRlm9ATPVMI', category: 'entrevistas' },
        { title: dv('Caiado no Direto ao Ponto (Jovem Pan) — agronegócio e desafios do setor', 'https://www.youtube.com/watch?v=uLmPD92nmwc', '2026-06-16'), description: dv('O pré-candidato fala sobre agronegócio no Direto ao Ponto da Jovem Pan: Estou preparado para os desafios do setor, diz Caiado sobre propostas para o campo.', 'https://www.youtube.com/watch?v=uLmPD92nmwc', '2026-06-16'), youtubeId: 'uLmPD92nmwc', category: 'entrevistas' },
      ],
    },
    {
      id: 'debates',
      label: 'Debates e Sabatinas',
      items: [
        { title: dv('Caiado sobre aliança com Zema e vice-presidência — bastidores da eleição 2026', 'https://www.youtube.com/watch?v=Wwe49wMVRYI', '2026-04-20'), description: dv('O pré-candidato declara que Kassab seria o vice-presidente ideal e comenta sobre uma possível aliança com Zema para as eleições.', 'https://www.youtube.com/watch?v=Wwe49wMVRYI', '2026-04-20'), youtubeId: 'Wwe49wMVRYI', category: 'debates' },
        { title: dv('Caiado no Roda Viva (TV Cultura) — sabatina com bancada de jornalistas', 'https://www.youtube.com/watch?v=51g_wYigfag', '2025-06-09'), description: dv('O governador de Goiás participa do Roda Viva, sabatina com bancada de cinco jornalistas do Estadão, CBN, Folha, CNN e UOL, sobre pré-candidatura e planos de governo.', 'https://www.youtube.com/watch?v=51g_wYigfag', '2025-06-09'), youtubeId: '51g_wYigfag', category: 'debates' },
      ],
    },
    {
      id: 'campanha',
      label: 'Campanha e Discursos',
      items: [
        { title: dv('Caiado no Café com Ferri — bastidores da eleição e propostas', 'https://www.youtube.com/watch?v=D0pKrvxqnyE', '2026-05-22'), description: dv('O pré-candidato fala sobre bastidores da campanha, alianças políticas e suas propostas para o Brasil em entrevista ao programa Café com Ferri.', 'https://www.youtube.com/watch?v=D0pKrvxqnyE', '2026-05-22'), youtubeId: 'D0pKrvxqnyE', category: 'campanha' },
      ],
    },
  ],
  zema: [
    {
      id: 'entrevistas',
      label: 'Entrevistas e Sabatinas',
      items: [
        { title: dv('Romeu Zema no Inteligência Ltda. — carreira, planos e visão para o Brasil', 'https://www.youtube.com/watch?v=o0HbJOyIyxE', '2026-05-01'), description: dv('O ex-governador de Minas Gerais e pré-candidato do Partido Novo conversa sobre sua carreira, propostas de governo e o futuro do Brasil.', 'https://www.youtube.com/watch?v=o0HbJOyIyxE', '2026-05-01'), youtubeId: 'o0HbJOyIyxE', category: 'entrevistas' },
        { title: dv('Zema no Flow News — pré-campanha e propostas para 2026', 'https://www.youtube.com/watch?v=688n7zJ6bME', '2026-05-22'), description: dv('O pré-candidato do Partido Novo detalha suas propostas de privatização, reforma administrativa e plano de governo para a Presidência.', 'https://www.youtube.com/watch?v=688n7zJ6bME', '2026-05-22'), youtubeId: '688n7zJ6bME', category: 'entrevistas' },
        { title: dv('Zema no Frente a Frente (UOL/Folha) — pré-candidatura e STF', 'https://www.youtube.com/watch?v=0gYirlZDzDs', '2026-05-04'), description: dv('O ex-governador é entrevistado por Daniela Lima e Fabio Zanini sobre STF, pré-candidatura, polêmica do trabalho infantil e relação com Flávio Bolsonaro.', 'https://www.youtube.com/watch?v=0gYirlZDzDs', '2026-05-04'), youtubeId: '0gYirlZDzDs', category: 'entrevistas' },
        { title: dv('Zema na Gaúcha Atualidade — vice de Flávio Bolsonaro?', 'https://www.youtube.com/watch?v=SOabQ3n6d1A', '2026-04-09'), description: dv('O ex-governador é entrevistado pela Gaúcha Atualidade sobre a possibilidade de ser vice de Flávio Bolsonaro, alianças e candidatura própria.', 'https://www.youtube.com/watch?v=SOabQ3n6d1A', '2026-04-09'), youtubeId: 'SOabQ3n6d1A', category: 'entrevistas' },
        { title: dv('Zema no Canal Livre (Band) — corrida eleitoral em 2026', 'https://www.youtube.com/watch?v=NucxNd-J5Ow', '2026-05-03'), description: dv('O ex-governador é entrevistado por Fernando Mitre, Eduardo Oinegue e Sheila Magalhães no Canal Livre da Band sobre a corrida eleitoral e a eleição da indignação.', 'https://www.youtube.com/watch?v=NucxNd-J5Ow', '2026-05-03'), youtubeId: 'NucxNd-J5Ow', category: 'entrevistas' },
        { title: dv('Zema no Papo com Editor (Estadão) — STF e pré-candidatura 2026', 'https://www.youtube.com/watch?v=9gLbKylo93g', '2025-07-21'), description: dv('O governador de Minas Gerais critica o STF como subserviente ao governo federal e discute sua pré-candidatura e as eleições de 2026.', 'https://www.youtube.com/watch?v=9gLbKylo93g', '2025-07-21'), youtubeId: '9gLbKylo93g', category: 'entrevistas' },
        { title: dv('Zema nos Pingos nos Is (Jovem Pan) — privatizações e reformas', 'https://www.youtube.com/watch?v=96O8UG4qxdw', '2026-04-27'), description: dv('O pré-candidato promete privatizar Petrobras e Banco do Brasil, cortar supersalários e mordomias em entrevista ao vivo no programa Os Pingos Nos Is.', 'https://www.youtube.com/watch?v=96O8UG4qxdw', '2026-04-27'), youtubeId: '96O8UG4qxdw', category: 'entrevistas' },
        { title: dv('Zema no Pânico (Jovem Pan) — polarização e saída', 'https://www.youtube.com/watch?v=PrSLgWdeQFQ', '2025-06-05'), description: dv('O ex-governador participa do programa Pânico, da Jovem Pan, debatendo a saída da polarização entre Lula e Bolsonaro e o futuro da direita.', 'https://www.youtube.com/watch?v=PrSLgWdeQFQ', '2025-06-05'), youtubeId: 'PrSLgWdeQFQ', category: 'entrevistas' },
      ],
    },
    {
      id: 'campanha',
      label: 'Campanha e Discursos',
      items: [
        { title: dv('Zema no Café com Ferri — caso Vorcaro e direita pós-Bolsonaro', 'https://www.youtube.com/watch?v=AzQxZ9r8l08', '2026-05-22'), description: dv('O pré-candidato fala sem rodeios sobre o escândalo Vorcaro, a direita após Bolsonaro e suas propostas econômicas para o Brasil.', 'https://www.youtube.com/watch?v=AzQxZ9r8l08', '2026-05-22'), youtubeId: 'AzQxZ9r8l08', category: 'campanha' },
        { title: dv('Zema e Caiado planejam aliança para 2026 — chapa única?', 'https://www.youtube.com/watch?v=I2ALi43v__I', '2026-05-10'), description: dv('Os governadores Romeu Zema e Ronaldo Caiado admitem conversas sobre uma possível aliança para as eleições presidenciais de 2026.', 'https://www.youtube.com/watch?v=I2ALi43v__I', '2026-05-10'), youtubeId: 'I2ALi43v__I', category: 'campanha' },
      ],
    },
  ],
}
