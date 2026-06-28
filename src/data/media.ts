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
      ],
    },
    {
      id: 'debates',
      label: 'Debates e Sabatinas',
      items: [
        { title: dv('Caiado sobre aliança com Zema e vice-presidência — bastidores da eleição 2026', 'https://www.youtube.com/watch?v=Wwe49wMVRYI', '2026-04-20'), description: dv('O pré-candidato declara que Kassab seria o vice-presidente ideal e comenta sobre uma possível aliança com Zema para as eleições.', 'https://www.youtube.com/watch?v=Wwe49wMVRYI', '2026-04-20'), youtubeId: 'Wwe49wMVRYI', category: 'debates' },
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
