import type { ProposalItem } from '../types'
import { dv } from '@/lib/dataValue'

export interface ProposalSection {
  id: string
  label: string
  lula: ProposalItem[]
  flavio: ProposalItem[]
  renan: ProposalItem[]
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
      { text: dv('Prisão em 2ª instância (PL 656/2025)', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Redução maioridade penal p/ 16 anos', 'https://oglobo.globo.com/politica/noticia/2026/06/18/flavio-propoe-castracao-quimica-de-estupradores-reducao-de-maioridade-penal-e-presidios-inspirados-em-el-salvador.ghtml', '2026-06-18') },
      { text: dv('Excludente ilicitude ampliado policiais', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Pensão policial que matar/for morto', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
    ],
    renan: [
      { text: dv('Endurecimento penal total', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Pena de morte p/ hediondos contra crianças', 'https://prendeumatou.com.br', '2026-06-26') },
      { text: dv('Direito Penal do Inimigo (suspensão garantias facções)', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira', '2025-12-07') },
      { text: dv('Estado de defesa em cidades dominadas', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira', '2025-12-07') },
      { text: dv('Fim progressão de regime', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Reestruturação polícia brasileira', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
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
      { text: dv('Privatização estatais não estratégicas', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
    ],
    renan: [
      { text: dv('Economia de R$ 3,3 tri em 10 anos', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Nova reforma da Previdência', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Desindexação benefícios do salário mínimo', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Corte privilégios Judiciário', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Desvinculação gastos saúde/educação da receita', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Mutirão anti Bolsa-Família (>30% população)', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
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
      { text: dv('Eficiência de gasto, sem ampliação da máquina pública', 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml', '2026-04-28') },
      { text: dv('Parcerias privadas na gestão hospitalar', 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml', '2026-04-28') },
    ],
    renan: [
      { text: dv('Ozempic-similares no SUS para tratamento de obesidade e diabetes', 'https://renansantos.wiki/posicoes/Propostas-para-Sa%C3%BAde', '2026-03-09') },
      { text: dv('Dedução do IR para gastos com atividade física (academia, personal trainer)', 'https://renansantos.wiki/posicoes/Propostas-para-Sa%C3%BAde', '2026-06-02') },
      { text: dv('Telemedicina integrada ao SUS com atendimento remoto especializado', 'https://renansantospropostas.com.br/sus-digital', '2026-06-26') },
      { text: dv('Prontuário único nacional com inteligência artificial para prevenir doenças', 'https://renansantos.wiki/posicoes/Propostas-para-Sa%C3%BAde', '2026-03-09') },
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
      { text: dv('Homeschooling como direito', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Escola sem partido', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Desvinculação do piso constitucional (correção só pela inflação, não 18% RLI)', 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml', '2026-04-28') },
      { text: dv('Meritocracia e avaliação de desempenho docente', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
    ],
    renan: [
      { text: dv('Método fônico obrigatório na alfabetização em todo o país', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-06-17') },
      { text: dv('Ensino técnico profissionalizante universal (modelo alemão)', 'https://renansantospropostas.com.br/educacao', '2026-06-26') },
      { text: dv('Escolas polo para os melhores alunos da rede pública', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-06-17') },
      { text: dv('Fim da progressão continuada com provões de critérios objetivos', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-06-17') },
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
      { text: dv('Separação reajuste salário mínimo de benefícios INSS/BPC', 'https://www.otempo.com.br/politica/2026/6/2/maioridade-penal-ia-e-corte-de-gastos-flavio-bolsonaro-revela-prioridades-e-propostas-de-campanha', '2026-06-02') },
      { text: dv('Correção aposentadorias e BPC só pela inflação', 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml', '2026-04-28') },
      { text: dv('Nova reforma da Previdência (regime capitalização)', 'https://www.otempo.com.br/politica/2026/6/2/maioridade-penal-ia-e-corte-de-gastos-flavio-bolsonaro-revela-prioridades-e-propostas-de-campanha', '2026-06-02') },
      { text: dv('Salário mínimo por hora trabalhada (jornada flexível)', 'https://www.otempo.com.br/politica/2026/6/2/maioridade-penal-ia-e-corte-de-gastos-flavio-bolsonaro-revela-prioridades-e-propostas-de-campanha', '2026-06-02') },
    ],
    renan: [
      { text: dv('Nova reforma da Previdência', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
      { text: dv('Flexibilização leis trabalhistas com limites', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
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
      { text: dv('Saneamento básico para municípios pequenos', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
    ],
    renan: [
      { text: dv('Desfavelização (habitação + reurbanização)', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Interiorização indústria (Nordeste)', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Indústria tecnologia (semicondutores, data centers)', 'https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/', '2026-03-29') },
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
      { text: dv('Novo marco do licenciamento ambiental (relatoria no Senado)', 'https://valor.globo.com/politica/noticia/2025/05/20/comissao-de-meio-ambiente-do-senado-aprova-marco-do-licenciamento-ambiental.ghtml', '2025-05-20') },
      { text: dv('Marco temporal para demarcações indígenas', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml', '2026-04-10') },
      { text: dv('Autonomia econômica indígena (gado, mineração em terras)', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml', '2026-04-10') },
    ],
    renan: [
      { text: dv('Desenvolvimento sustentável com liberdade econômica', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Bioeconomia como oportunidade de negócio e inovação', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Exploração responsável da Amazônia com tecnologia e monitoramento', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Reforma do licenciamento ambiental para agilidade e segurança jurídica', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
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
      { text: dv('Alinhamento prioritário com EUA', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Classificação PCC e CV como organizações terroristas', 'https://g1.globo.com/mundo/noticia/2026/05/29/pcc-e-cv-entram-na-lista-do-governo-dos-eua-para-organizacao-terrorista.ghtml', '2026-05-29') },
      { text: dv('Defesa de brasileiros no exterior e cooperação jurídica internacional', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
    ],
    renan: [
      { text: dv('Alinhamento Milei/Bukele', 'https://www.cnnbrasil.com.br/blogs/isabel-mega/politica/sou-milei-na-forma-e-bukele-no-conteudo-diz-renan-santos-a-cnn/', '2026-06-26') },
      { text: dv('Abertura comercial bilateral', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Flexibilização Mercosul', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('China pragmática', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Aproximação EUA/OCDE', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
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
      { text: dv('Prisão em 2ª instância (PL 656/2025)', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
    ],
    renan: [
      { text: dv('Lei de Responsabilidade Gerencial', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Fusão de municípios inviáveis', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
      { text: dv('Corte privilégios Judiciário', 'https://caminhodamissao.com/candidato/renan-santos', '2026-06-26') },
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
      { text: dv('Família tradicional', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Combate aborto em qualquer circunstância', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Liberdade religiosa', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Combate ideologia de gênero nas escolas', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
    ],
    renan: [
      { text: dv('Homeschooling regulamentado como direito da família', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-05-20') },
      { text: dv('Separação de alunos autistas em salas especiais com atendimento individualizado', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-05-09') },
      { text: dv('Uso terapêutico psicodélicos (cogumelos, ayahuasca)', 'https://www.metropoles.com/colunas/paulo-cappelli/renan-santos-explica-experiencia-com-cogumelos-fica-mais-produtivo', '2026-04-18') },
      { text: dv('Fim das cotas raciais e cotas sociais nas universidades', 'https://renansantos.wiki/posicoes/Propostas-para-Educa%C3%A7%C3%A3o', '2026-01-27') },
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
      { text: dv('Defesa do agronegócio como motor econômico', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
      { text: dv('Autonomia econômica para exploração em terras indígenas', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml', '2026-04-10') },
      { text: dv('Crítico a demarcações e regulação ambiental excessiva', 'https://www.estadao.com.br/politica/privatizacoes-ferrovias-e-presidios-o-que-flavio-bolsonaro-ja-propos-em-8-areas/', '2026-02-22') },
    ],
    renan: [
      { text: dv('Agronegócio como prioridade estratégica nacional', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Menos burocracia e regulação ambiental para produtores rurais', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Inovação e tecnologia no campo (agritech, agricultura de precisão)', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
      { text: dv('Reforma do INCRA com foco em produtividade e regularização fundiária', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    ],
  },
]
