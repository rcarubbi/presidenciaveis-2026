import type { ProposalItem } from '../types'
import { dv } from '@/lib/dataValue'

export interface ProposalSection {
  id: string
  label: string
  lula: ProposalItem[]
  flavio: ProposalItem[]
  renan: ProposalItem[]
  caiado: ProposalItem[]
  zema: ProposalItem[]
}

export const proposalSections: ProposalSection[] = [
  {
    id: 'seguranca',
    label: 'Segurança Pública',
    lula: [
      { text: dv('Repressão qualificada (inteligência, não operações espetaculares)', 'https://oglobo.globo.com/politica/noticia/2026/05/29/em-minuta-de-plano-de-governo-de-lula-pt-propoe-e-repressao-qualificada-para-combater-crime-organizado.ghtml', '2026-05-29') },
      { text: dv('PEC da Segurança Pública (unificação protocolos)', 'https://jnewscast.com.br/governo-lula-chega-a-2026-com-medidas-eleitorais-pendentes-no-congresso/', '2026-01-05') },
      { text: dv('PL Antifaccão (tipificação organizações criminosas)', 'https://jnewscast.com.br/governo-lula-chega-a-2026-com-medidas-eleitorais-pendentes-no-congresso/', '2026-01-05') },
      { text: dv('Mapeamento criminal em tempo real', 'https://oglobo.globo.com/politica/noticia/2026/05/29/em-minuta-de-plano-de-governo-de-lula-pt-propoe-e-repressao-qualificada-para-combater-crime-organizado.ghtml', '2026-05-29') },
      { text: dv('Fortalecimento PRF e PF', 'https://oglobo.globo.com/politica/noticia/2026/05/29/em-minuta-de-plano-de-governo-de-lula-pt-propoe-e-repressao-qualificada-para-combater-crime-organizado.ghtml', '2026-05-29') },
      { text: dv('Retomada Estatuto do Desarmamento', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    ],
    flavio: [
      { text: dv('Megapresídios federais (modelo supermax)', 'https://exame.com/brasil/flavio-bolsonaro-aposta-em-modelo-el-salvador-e-reducao-da-maioridade-em-plano-de-seguranca/', '2026-06-18') },
      { text: dv('Classificação facções como terroristas', 'https://veja.abril.com.br/brasil/castracao-quimica-e-repressao-ao-crime-entenda-as-12-metas-de-flavio-na-seguranca/', '2026-06-18') },
      { text: dv('Castração química p/ pedófilos/estupradores', 'https://g1.globo.com/sp/sao-paulo/eleicoes/2026/noticia/2026/06/18/flavio-bolsonaro-lanca-pacote-de-seguranca-com-reducao-da-maioridade-penal-e-castracao-quimica.ghtml', '2026-06-18') },
      { text: dv('Reconhecimento facial em massa', 'https://g1.globo.com/sp/sao-paulo/eleicoes/2026/noticia/2026/06/18/flavio-bolsonaro-lanca-pacote-de-seguranca-com-reducao-da-maioridade-penal-e-castracao-quimica.ghtml', '2026-06-18') },
      { text: dv('Fim progressão regime p/ crimes hediondos', 'https://veja.abril.com.br/brasil/castracao-quimica-e-repressao-ao-crime-entenda-as-12-metas-de-flavio-na-seguranca/', '2026-06-18') },
      { text: dv('Prisão em 2ª instância', 'https://www.metropoles.com/chapelaria/2a-instancia-flavio-bolsonaro-nao-assina-carta-a-favor-de-prisao', '2019-11-08') },
      { text: dv('Redução maioridade penal p/ 16 anos', 'https://oglobo.globo.com/politica/noticia/2026/06/18/flavio-propoe-castracao-quimica-de-estupradores-reducao-de-maioridade-penal-e-presidios-inspirados-em-el-salvador.ghtml', '2026-06-18') },
      { text: dv('Excludente ilicitude ampliado policiais', 'https://www25.senado.leg.br/web/atividade/materias/-/materia/138227', '2019-08-20') },
      { text: dv('Pensão policial que matar/for morto', 'https://www12.senado.leg.br/noticias/materias/2025/07/15/csp-aprova-indenizacao-para-familia-de-policiais-mortos-em-servico', '2025-07-15') },
    ],
    renan: [
      { text: dv('Endurecimento penal total', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Pena de morte p/ hediondos contra crianças', 'https://prendeumatou.com.br', '2026-06-26') },
      { text: dv('Direito Penal do Inimigo (suspensão garantias facções)', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira', '2025-12-07') },
      { text: dv('Estado de defesa em cidades dominadas', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira', '2025-12-07') },
      { text: dv('Fim progressão de regime', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Reestruturação polícia brasileira', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
    ],
    caiado: [
      { text: dv('Recriação do Ministério da Segurança Pública', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Uso de inteligência artificial e software contra o crime organizado', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Controle total dos presídios (modelo Goiás)', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Integração Polícias Estaduais com PF e PRF', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
      { text: dv('Contrário ao uso de câmeras corporais em policiais militares', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
    ],
    zema: [
      { text: dv('Classificação de facções criminosas como terroristas — pena mínima 25 anos', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
      { text: dv('Redução da maioridade penal — "crime de adulto, pena de adulto"', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
      { text: dv('Fim das saidinhas para integrantes de facções', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
    ],
  },
  {
    id: 'economia',
    label: 'Economia e Política Fiscal',
    lula: [
      { text: dv('Reforma tributária progressiva', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Revogação teto gastos (EC 95/2016)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Reindustrialização nacional', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Valorização salário mínimo (inflação + PIB)', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Desenrola 2 (renegociação dívidas)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    ],
    flavio: [
      { text: dv('Simplificação tributária (sem progressividade)', 'https://exame.com/brasil/flavio-defende-suspender-reforma-tributaria-e-e-questionado-em-evento-da-cni/', '2026-06-22') },
      { text: dv('Redução carga tributária', 'https://valor.globo.com/politica/noticia/2026/06/15/flavio-bolsonaro-promete-tesouraco-e-defende-bolsa-familia.ghtml', '2026-06-15') },
      { text: dv('Revisão da reforma tributária', 'https://exame.com/brasil/flavio-defende-suspender-reforma-tributaria-e-e-questionado-em-evento-da-cni/', '2026-06-22') },
      { text: dv('Privatização estatais não estratégicas', 'https://exame.com/brasil/tesouraco-e-privatizacoes-os-sinais-de-flavio-sobre-a-economia/', '2026-02-14') },
    ],
    renan: [
      { text: dv('Economia de R$ 3,3 tri em 10 anos', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Nova reforma da Previdência', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Desindexação benefícios do salário mínimo', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Corte privilégios Judiciário', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Desvinculação gastos saúde/educação da receita', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Mutirão anti Bolsa-Família (>30% população)', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
    ],
    caiado: [
      { text: dv('Exploração e processamento de terras raras com parceria EUA/Japão', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Contrário a aumento de impostos para ricos ("populismo fiscal")', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
      { text: dv('Política industrial focada em mineração, agronegócio e tecnologia', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
      { text: dv('Redução da taxa Selic para um dígito via ajuste fiscal e reformas estruturais', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
    ],
    zema: [
      { text: dv('Privatização total das estatais federais (Petrobras, Caixa, BB, Correios)', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
      { text: dv('CLT paralela — alternativa opcional à CLT com negociação direta', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
      { text: dv('Redução de 30% dos cargos comissionados federais e fusão de ministérios', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
      { text: dv('Retomada do teto de gastos como regra fiscal e revisão de despesas obrigatórias', 'https://valor.globo.com/politica/noticia/2026/04/16/zema-lanca-propostas-de-governo-e-repete-que-ira-ate-o-fim-como-candidato-a-presidente.ghtml', '2026-04-16') },
    ],
  },
  {
    id: 'saude',
    label: 'Saúde',
    lula: [
      { text: dv('Fortalecimento SUS (atenção primária, vigilância)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Ampliação Farmácia Popular', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Valorização profissionais saúde', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    ],
    flavio: [
      { text: dv('Desvinculação do piso constitucional (correção só pela inflação, não 15% RCL)', 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml', '2026-04-28') },
    ],
    renan: [
      { text: dv('Ozempic-similares no SUS para tratamento de obesidade e diabetes', 'https://renansantos.wiki/posicoes/Propostas-para-Sa%C3%BAde', '2026-03-09') },
      { text: dv('Dedução do IR para gastos com atividade física (academia, personal trainer)', 'https://renansantos.wiki/posicoes/Propostas-para-Sa%C3%BAde', '2026-06-02') },
      { text: dv('Telemedicina integrada ao SUS com atendimento remoto especializado', 'https://renansantospropostas.com.br/sus-digital', '2026-06-26') },
      { text: dv('Prontuário único nacional com inteligência artificial para prevenir doenças', 'https://renansantos.wiki/posicoes/Propostas-para-Sa%C3%BAde', '2026-03-09') },
    ],
    caiado: [
      { text: dv('Ampliação da rede hospitalar com foco em leitos de UTI (modelo Goiás pandemia)', 'https://portal.al.go.leg.br/noticias/163534/caiado-faz-balanco-da-gestao', '2026-03-31') },
      { text: dv('Telemedicina integrada para atendimento remoto especializado', 'https://portal.al.go.leg.br/noticias/163534/caiado-faz-balanco-da-gestao', '2026-03-31') },
    ],
    zema: [
      { text: dv('PPPs para gestão hospitalar e redução de filas no SUS — modelo aplicado em MG', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
      { text: dv('Telemedicina integrada como ferramenta de ampliação do acesso à saúde', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
    ],
  },
  {
    id: 'educacao',
    label: 'Educação',
    lula: [
      { text: dv('Retomada FUNDEB com ampliação', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Expansão ensino técnico federal', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Ampliação FIES e PROUNI', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Revogação Novo Ensino Médio', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Valorização docente', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Fim colégios cívico-militares', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    ],
    flavio: [
      { text: dv('Homeschooling como direito', 'https://www12.senado.leg.br/noticias/materias/2023/05/02/grupo-quer-retirar-homeschooling-da-regulacao-de-escolas-comunitarias', '2023-05-02') },
      { text: dv('Escola sem partido', 'https://www.epsjv.fiocruz.br/noticias/reportagem/por-tras-do-escola-sem-partido', '2018-07-04') },
      { text: dv('Desvinculação do piso constitucional (correção só pela inflação, não 18% RLI)', 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml', '2026-04-28') },
      { text: dv('Meritocracia e avaliação de desempenho docente', 'https://parlamentobrasil.org/audio/educacao-e-respeito-a-proposta-de-flavio-bolsonaro-para-valorizar-os-professores-do-brasil', '2026-02-11') },
    ],
    renan: [
      { text: dv('Método fônico obrigatório na alfabetização em todo o país', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-06-17') },
      { text: dv('Ensino técnico profissionalizante universal (modelo alemão)', 'https://renansantospropostas.com.br/educacao', '2026-06-26') },
      { text: dv('Escolas polo para os melhores alunos da rede pública', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-06-17') },
      { text: dv('Fim da progressão continuada com provões de critérios objetivos', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-06-17') },
    ],
    caiado: [
      { text: dv('Exportar modelo educacional goiano (1º lugar no Ideb) para todo o país', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Escola em tempo integral com foco em protagonismo juvenil', 'https://portal.al.go.leg.br/noticias/163534/caiado-faz-balanco-da-gestao', '2026-03-31') },
      { text: dv('Meritocracia e avaliação de desempenho docente', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
    ],
    zema: [
      { text: dv('Escola em tempo integral — MG tem a maior rede do país', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
      { text: dv('Ensino técnico profissionalizante como prioridade nacional', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
      { text: dv('Escolas cívico-militares como modelo nacional de disciplina e ensino', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
    ],
  },
  {
    id: 'previdencia',
    label: 'Previdência e Trabalho',
    lula: [
      { text: dv('Revisão EC 103/2019', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Regulamentação trabalho plataformas digitais (apps)', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Revogação marcos reforma 2017', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Redução jornada semanal (fim escala 6x1)', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    ],
    flavio: [
      { text: dv('Correção aposentadorias e BPC só pela inflação', 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml', '2026-04-28') },
    ],
    renan: [
      { text: dv('Nova reforma da Previdência', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Flexibilização leis trabalhistas com limites', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    ],
    caiado: [
      { text: dv('Jornada de trabalho flexível com contratação por hora e redução de encargos', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Reforma administrativa com corte de cargos comissionados e revisão de privilégios', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Estabilização da dívida pública com regra de ouro e controle de gastos obrigatórios', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
    ],
    zema: [
      { text: dv('Reforma definitiva da Previdência com gatilho automático por expectativa de vida', 'https://sintrajufe.org.br/plano-de-governo-de-zema-pre-candidato-do-partido-novo-preve-jornada-de-trabalho-sem-limite-de-horario-privatizacao-total-e-reforma-definitiva-da-previdencia/', '2026-04-16') },
      { text: dv('CLT paralela com jornada flexível negociada entre patrão e empregado', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
      { text: dv('Idade mínima dinâmica vinculada à evolução da expectativa de vida', 'https://valor.globo.com/politica/noticia/2026/04/16/zema-lanca-propostas-de-governo-e-repete-que-ira-ate-o-fim-como-candidato-a-presidente.ghtml', '2026-04-16') },
    ],
  },
  {
    id: 'infraestrutura',
    label: 'Infraestrutura',
    lula: [
      { text: dv('PAC com foco mobilidade, saneamento, habitação', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Transição energética e economia verde', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    ],
    flavio: [
      { text: dv('Saneamento básico para municípios pequenos', 'https://acessepolitica.com.br/noticia/176307/flavio-bolsonaro-e-aplaudido-e-recebe-apoio-de-prefeitos-durante-marcha-em-brasilia', '2026-05-19') },
    ],
    renan: [
      { text: dv('Desfavelização (habitação + reurbanização)', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Interiorização indústria (Nordeste)', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Indústria tecnologia (semicondutores, data centers)', 'https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/', '2026-03-29') },
    ],
    caiado: [
      { text: dv('Indústria de processamento de terras raras com agregação de valor nacional', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Redução da dependência externa de fertilizantes com incentivo à produção nacional de insumos', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
    ],
    zema: [
      { text: dv('Privatização de infraestrutura através de concessões e PPPs', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    ],
  },
  {
    id: 'meio-ambiente',
    label: 'Meio Ambiente e Clima',
    lula: [
      { text: dv('Enfrentamento crise climática', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
      { text: dv('Fortalecimento IBAMA/ICMBio', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Combate desmatamento ilegal', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Demarcação terras indígenas', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    ],
    flavio: [
      { text: dv('Marco temporal para demarcações indígenas', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml', '2026-04-10') },
      { text: dv('Autonomia econômica indígena (gado, mineração em terras)', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml', '2026-04-10') },
    ],
    renan: [
      { text: dv('Desenvolvimento sustentável com liberdade econômica', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Bioeconomia como oportunidade de negócio e inovação', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Exploração responsável da Amazônia com tecnologia e monitoramento', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Reforma do licenciamento ambiental para agilidade e segurança jurídica', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    ],
    caiado: [
      { text: dv('Marco temporal para demarcações indígenas como segurança jurídica ao produtor', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
      { text: dv('Exploração de terras raras com monitoramento ambiental via inteligência artificial', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
    ],
    zema: [
      { text: dv('Licenciamento ambiental mais ágil e seguro jurídico para investimentos', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
      { text: dv('Incentivo à economia verde com mercado de carbono e créditos ambientais', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    ],
  },
  {
    id: 'relacoes-exteriores',
    label: 'Relações Exteriores',
    lula: [
      { text: dv('Protagonismo multilateral', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Cooperação Sul-Sul (Mercosul, BRICS, CPLP)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Reforma ONU/FMI/OMC', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    ],
    flavio: [
      { text: dv('Alinhamento prioritário com EUA', 'https://g1.globo.com/mundo/noticia/2026/05/27/flavio-bolsonaro-se-encontra-com-marco-rubio.ghtml', '2026-05-27') },
      { text: dv('Classificação PCC e CV como organizações terroristas', 'https://g1.globo.com/mundo/noticia/2026/05/29/pcc-e-cv-entram-na-lista-do-governo-dos-eua-para-organizacao-terrorista.ghtml', '2026-05-29') },
    ],
    renan: [
      { text: dv('Alinhamento Milei/Bukele', 'https://www.cnnbrasil.com.br/blogs/isabel-mega/politica/sou-milei-na-forma-e-bukele-no-conteudo-diz-renan-santos-a-cnn/', '2026-06-26') },
      { text: dv('Abertura comercial bilateral', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Flexibilização Mercosul', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('China pragmática', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Aproximação EUA/OCDE', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    ],
    caiado: [
      { text: dv('Parceria estratégica com EUA e Japão para processamento de terras raras', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Soberania nacional na exploração de minerais críticos e terras raras', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
    ],
    zema: [
      { text: dv('Abertura comercial com redução de tarifas e acordos bilaterais de livre comércio', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
      { text: dv('Alinhamento estratégico com países da OCDE e defesa do livre comércio global', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    ],
  },
  {
    id: 'reforma-politica',
    label: 'Reforma Política e Judiciário',
    lula: [
      { text: dv('Reforma do Judiciário (em avaliação)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Voto em listas com paridade', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Reforma emendas parlamentares', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Regulamentação mídia e redes sociais', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    ],
    flavio: [
      { text: dv('Prisão em 2ª instância', 'https://www.metropoles.com/chapelaria/2a-instancia-flavio-bolsonaro-nao-assina-carta-a-favor-de-prisao', '2019-11-08') },
    ],
    renan: [
      { text: dv('Lei de Responsabilidade Gerencial', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Fusão de municípios inviáveis', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Corte privilégios Judiciário', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
    ],
    caiado: [
      { text: dv('Anistia ampla, geral e irrestrita para condenados do 8 de janeiro', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Voto distrital como prioridade da reforma política', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Critérios técnicos para nomeação de ministros do STF com mandato determinado', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
    ],
    zema: [
      { text: dv('Novo STF: mandato de 15 anos, idade mínima de 60 anos, parentes sem negócios jurídicos', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
      { text: dv('Anistia para condenados pelos atos golpistas de 8 de janeiro', 'https://g1.globo.com/jornal-nacional/noticia/2026/04/16/novo-apresenta-diretrizes-do-plano-de-governo-de-romeu-zema-pre-candidato-do-partido-a-presidencia-da-republica.ghtml', '2026-04-16') },
      { text: dv('Transparência total do Judiciário com prestação de contas obrigatória', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
    ],
  },
  {
    id: 'costumes',
    label: 'Costumes, Família e Direitos Humanos',
    lula: [
      { text: dv('Combate discriminação (racismo, LGBTfobia)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Igualdade salarial mulheres', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Demarcação terras indígenas', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Cultura e Novas Economias (economia criativa)', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    ],
    flavio: [
      { text: dv('Família tradicional', 'https://www.gazetadopovo.com.br/republica/alegoria-de-familias-em-lata-de-conserva-gera-reacao-de-flavio-tse/', '2026-02-16') },
      { text: dv('Combate aborto em qualquer circunstância', 'https://www25.senado.leg.br/web/atividade/pronunciamentos/-/p/pronunciamento/506928', '2024-06-18') },
      { text: dv('Liberdade religiosa', 'https://www.congressoemfoco.com.br/noticia/114115/flavio-bolsonaro-acusa-moraes-de-perseguicao-religiosa', '2025-11-22') },
      { text: dv('Combate ideologia de gênero nas escolas', 'https://24horasmt.com.br/politica-mt/flavio-bolsonaro-critica-pautas-de-genero-nas-escolas-e-diz-que-nao-permitira-influencia-ideologica/', '2026-04-23') },
    ],
    renan: [
      { text: dv('Homeschooling regulamentado como direito da família', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-05-20') },
      { text: dv('Separação de alunos autistas em salas especiais com atendimento individualizado', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-05-09') },
      { text: dv('Uso terapêutico psicodélicos (cogumelos, ayahuasca)', 'https://www.metropoles.com/colunas/paulo-cappelli/renan-santos-explica-experiencia-com-cogumelos-fica-mais-produtivo', '2026-04-18') },
      { text: dv('Fim das cotas raciais e cotas sociais nas universidades', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-01-27') },
    ],
    caiado: [
      { text: dv('Defesa da família tradicional e contra a ideologia de gênero nas escolas', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
      { text: dv('Emancipação social — transição do assistencialismo para autonomia financeira', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
    ],
    zema: [
      { text: dv('Bolsa Família condicionado à aceitação de ofertas de emprego ("fim dos marmanjões")', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
      { text: dv('Fim do Bolsa Família sem contrapartida de emprego ou capacitação', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
    ],
  },
  {
    id: 'agricultura',
    label: 'Agricultura e Desenvolvimento Rural',
    lula: [
      { text: dv('Fortalecimento agricultura familiar', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Reforma agrária', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Agronegócio sustentável (ABC+)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
      { text: dv('Bioeconomia amazônica', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    ],
    flavio: [
      { text: dv('Marco temporal como segurança jurídica ao produtor', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml', '2026-04-10') },
      { text: dv('Defesa do agronegócio como motor econômico', 'https://www.correiobraziliense.com.br/politica/2026/04/7406998-flavio-diz-que-agro-e-tratado-como-lixo-e-vilao-pelo-atual-governo.html', '2026-04-27') },
      { text: dv('Autonomia econômica para exploração em terras indígenas', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml', '2026-04-10') },
      { text: dv('Crítico a demarcações e regulação ambiental excessiva', 'https://cbn.globo.com/politica/noticia/2026/04/22/se-depender-de-mim-nao-havera-nenhuma-demarcacao-indigena-diz-flavio-bolsonaro.ghtml', '2026-04-22') },
    ],
    renan: [
      { text: dv('Agronegócio como prioridade estratégica nacional', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Menos burocracia e regulação ambiental para produtores rurais', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Inovação e tecnologia no campo (agritech, agricultura de precisão)', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Reforma do INCRA com foco em produtividade e regularização fundiária', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    ],
    caiado: [
      { text: dv('Defesa do agronegócio e do direito de propriedade rural', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
      { text: dv('Contra demarcações de terras indígenas que afetem a produção rural', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
      { text: dv('Regularização fundiária como prioridade para segurança jurídica no campo', 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/03/30/anistia-a-bolsonaro-terras-raras-combate-ao-crime-as-propostas-de-caiado-no-1o-discurso.ghtml', '2026-03-30') },
      { text: dv('Agritech e agricultura de precisão como política de estado para aumentar produtividade', 'https://www.correiobraziliense.com.br/mundo/2026/03/7387104-a-segunda-disputa-de-ronaldo-caiado-pela-presidencia.html', '2026-03-30') },
    ],
    zema: [
      { text: dv('Marco temporal e regularização fundiária como prioridades para o campo', 'https://oglobo.globo.com/politica/noticia/2026/04/16/zema-propoe-mandato-para-o-stf-privatizacao-de-100percent-das-estatais-e-fim-dos-beneficios-para-marmanjoes.ghtml', '2026-04-16') },
      { text: dv('Agronegócio como motor do desenvolvimento econômico nacional', 'https://www.otempo.com.br/politica/2026/4/16/plano-de-governo-de-zema-preve-novo-supremo-programa-de-moralizacao-do-judiciario', '2026-04-16') },
    ],
  },
]
