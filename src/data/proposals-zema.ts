import type { ProposalItem } from '../types'
import { dv } from '@/lib/dataValue'

export const zemaProposals: Record<string, ProposalItem[]> = {
  seguranca: [
    { text: dv('Classificação de facções criminosas como terroristas — pena mínima 25 anos', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
    { text: dv('Redução da maioridade penal — "crime de adulto, pena de adulto"', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
    { text: dv('Fim das saidinhas para integrantes de facções', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
  ],
  economia: [
    { text: dv('Privatização total das estatais federais (Petrobras, Caixa, BB, Correios)', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    { text: dv('CLT paralela — alternativa opcional à CLT com negociação direta', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
    { text: dv('Redução de 30% dos cargos comissionados federais e fusão de ministérios', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    { text: dv('Retomada do teto de gastos como regra fiscal e revisão de despesas obrigatórias', 'https://valor.globo.com/politica/noticia/2026/04/16/zema-lanca-propostas-de-governo-e-repete-que-ira-ate-o-fim-como-candidato-a-presidente.ghtml', '2026-04-16') },
  ],
  saude: [
    { text: dv('PPPs para gestão hospitalar e redução de filas no SUS — modelo aplicado em MG', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
    { text: dv('Telemedicina integrada como ferramenta de ampliação do acesso à saúde', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
  ],
  educacao: [
    { text: dv('Escola em tempo integral — MG tem a maior rede do país', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
    { text: dv('Ensino técnico profissionalizante como prioridade nacional', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
    { text: dv('Escolas cívico-militares como modelo nacional de disciplina e ensino', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
  ],
  previdencia: [
    { text: dv('Reforma definitiva da Previdência com gatilho automático por expectativa de vida', 'https://sintrajufe.org.br/plano-de-governo-de-zema-pre-candidato-do-partido-novo-preve-jornada-de-trabalho-sem-limite-de-horario-privatizacao-total-e-reforma-definitiva-da-previdencia/', '2026-04-16') },
    { text: dv('CLT paralela com jornada flexível negociada entre patrão e empregado', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
    { text: dv('Idade mínima dinâmica vinculada à evolução da expectativa de vida', 'https://valor.globo.com/politica/noticia/2026/04/16/zema-lanca-propostas-de-governo-e-repete-que-ira-ate-o-fim-como-candidato-a-presidente.ghtml', '2026-04-16') },
  ],
  infraestrutura: [
    { text: dv('Privatização de infraestrutura através de concessões e PPPs', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
  ],
  'meio-ambiente': [
    { text: dv('Licenciamento ambiental mais ágil e seguro jurídico para investimentos', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
    { text: dv('Incentivo à economia verde com mercado de carbono e créditos ambientais', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
  ],
  'relacoes-exteriores': [
    { text: dv('Abertura comercial com redução de tarifas e acordos bilaterais de livre comércio', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    { text: dv('Alinhamento estratégico com países da OCDE e defesa do livre comércio global', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
  ],
  'reforma-politica': [
    { text: dv('Novo STF: mandato de 15 anos, idade mínima de 60 anos, parentes sem negócios jurídicos', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
    { text: dv('Anistia para condenados pelos atos golpistas de 8 de janeiro', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
    { text: dv('Transparência total do Judiciário com prestação de contas obrigatória', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
  ],
  costumes: [
    { text: dv('Bolsa Família condicionado à aceitação de ofertas de emprego ("fim dos marmanjões")', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    { text: dv('Fim do Bolsa Família sem contrapartida de emprego ou capacitação', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
  ],
  agricultura: [
    { text: dv('Marco temporal e regularização fundiária como prioridades para o campo', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    { text: dv('Agronegócio como motor do desenvolvimento econômico nacional', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
  ],
}
