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
      { text: dv('Repressão qualificada (inteligência, não operações espetaculares)') },
      { text: dv('PEC da Segurança Pública (unificação protocolos)') },
      { text: dv('PL Antifaccão (tipificação organizações criminosas)') },
      { text: dv('Mapeamento criminal em tempo real') },
      { text: dv('Fortalecimento PRF e PF') },
      { text: dv('Retomada Estatuto do Desarmamento') },
    ],
    flavio: [
      { text: dv('Megapresídios federais (modelo supermax)') },
      { text: dv('Classificação facções como terroristas') },
      { text: dv('Castração química p/ pedófilos/estupradores') },
      { text: dv('Reconhecimento facial em massa') },
      { text: dv('Fim progressão regime p/ crimes hediondos') },
      { text: dv('Prisão em 2ª instância (PL 656/2025)') },
      { text: dv('Redução maioridade penal p/ 16 anos') },
      { text: dv('Excludente ilicitude ampliado policiais') },
      { text: dv('Pensão policial que matar/for morto') },
    ],
    renan: [
      { text: dv('Endurecimento penal total') },
      { text: dv('Pena de morte p/ hediondos contra crianças', 'https://prendeumatou.com.br') },
      { text: dv('Direito Penal do Inimigo (suspensão garantias facções)', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira') },
      { text: dv('Estado de defesa em cidades dominadas', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira') },
      { text: dv('Fim progressão de regime') },
      { text: dv('Reestruturação polícia brasileira') },
    ],
  },
  {
    id: 'economia',
    label: 'Economia e Política Fiscal',
    lula: [
      { text: dv('Reforma tributária progressiva') },
      { text: dv('Revogação teto gastos (EC 95/2016)') },
      { text: dv('Reindustrialização nacional') },
      { text: dv('Valorização salário mínimo (inflação + PIB)') },
      { text: dv('Desenrola 2 (renegociação dívidas)') },
    ],
    flavio: [
      { text: dv('Simplificação tributária (sem progressividade)') },
      { text: dv('Redução carga tributária') },
      { text: dv('Liberdade econômica') },
      { text: dv('Privatização estatais não estratégicas') },
    ],
    renan: [
      { text: dv('Economia de R$ 3,3 tri em 10 anos') },
      { text: dv('Nova reforma da Previdência') },
      { text: dv('Desindexação benefícios do salário mínimo') },
      { text: dv('Corte privilégios Judiciário') },
      { text: dv('Desvinculação gastos saúde/educação da receita') },
      { text: dv('Mutirão anti Bolsa-Família (>30% população)') },
    ],
  },
  {
    id: 'saude',
    label: 'Saúde',
    lula: [
      { text: dv('Fortalecimento SUS (atenção primária, vigilância)') },
      { text: dv('Ampliação Farmácia Popular') },
      { text: dv('Valorização profissionais saúde') },
    ],
    flavio: [
      { text: dv('Desvinculação do piso constitucional (correção só pela inflação, não 15% RCL)', 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml') },
      { text: dv('Eficiência de gasto, sem ampliação da máquina pública') },
      { text: dv('Parcerias privadas na gestão hospitalar') },
    ],
    renan: [
      { text: dv('Prontuário Eletrônico Unificado Nacional') },
      { text: dv('IA e machine learning no SUS') },
      { text: dv('Desvinculação gastos saúde da receita') },
    ],
  },
  {
    id: 'educacao',
    label: 'Educação',
    lula: [
      { text: dv('Retomada FUNDEB com ampliação') },
      { text: dv('Expansão ensino técnico federal') },
      { text: dv('Ampliação FIES e PROUNI') },
      { text: dv('Revogação Novo Ensino Médio') },
      { text: dv('Valorização docente') },
      { text: dv('Fim colégios cívico-militares') },
    ],
    flavio: [
      { text: dv('Homeschooling como direito') },
      { text: dv('Escola sem partido') },
      { text: dv('Desvinculação do piso constitucional (correção só pela inflação, não 18% RLI)') },
      { text: dv('Meritocracia e avaliação de desempenho docente') },
    ],
    renan: [
      { text: dv('Liberdade de ensino') },
      { text: dv('Homeschooling') },
      { text: dv('Referências: Finlândia, Singapura, Japão, China') },
      { text: dv('Desvinculação gastos educação da receita') },
    ],
  },
  {
    id: 'previdencia',
    label: 'Previdência e Trabalho',
    lula: [
      { text: dv('Revisão EC 103/2019') },
      { text: dv('Nova legislação trabalhista (apps, autônomos)') },
      { text: dv('Revogação marcos reforma 2017') },
      { text: dv('Redução jornada sem redução salário') },
    ],
    flavio: [
      { text: dv('Separação reajuste salário mínimo de benefícios INSS/BPC', 'https://www.otempo.com.br/politica/2026/6/2/maioridade-penal-ia-e-corte-de-gastos-flavio-bolsonaro-revela-prioridades-e-propostas-de-campanha') },
      { text: dv('Correção aposentadorias e BPC só pela inflação') },
      { text: dv('Nova reforma da Previdência (regime capitalização)') },
      { text: dv('Salário mínimo por hora trabalhada (jornada flexível)') },
    ],
    renan: [
      { text: dv('Nova reforma da Previdência') },
      { text: dv('Crítico redução jornada sem estudos') },
    ],
  },
  {
    id: 'infraestrutura',
    label: 'Infraestrutura',
    lula: [
      { text: dv('PAC com foco mobilidade, saneamento, habitação') },
      { text: dv('Investimento energia limpa e renovável') },
    ],
    flavio: [
      { text: dv('Saneamento básico para municípios pequenos') },
    ],
    renan: [
      { text: dv('Desfavelização (habitação + reurbanização)') },
      { text: dv('Interiorização indústria (Nordeste)') },
      { text: dv('Indústria tecnologia (semicondutores, data centers)') },
    ],
  },
  {
    id: 'meio-ambiente',
    label: 'Meio Ambiente e Clima',
    lula: [
      { text: dv('Enfrentamento crise climática (COP 2025)') },
      { text: dv('Fortalecimento IBAMA/ICMBio') },
      { text: dv('Combate desmatamento ilegal') },
      { text: dv('Demarcação terras indígenas') },
    ],
    flavio: [
      { text: dv('Novo marco do licenciamento ambiental (relatoria no Senado)', 'https://valor.globo.com/politica/noticia/2025/05/20/comissao-de-meio-ambiente-do-senado-aprova-marco-do-licenciamento-ambiental.ghtml') },
      { text: dv('Marco temporal para demarcações indígenas', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml') },
      { text: dv('Autonomia econômica indígena (gado, mineração em terras)') },
    ],
    renan: [
      { text: dv('Desenvolvimento sustentável com liberdade econômica') },
      { text: dv('Bioeconomia como oportunidade de negócio e inovação') },
      { text: dv('Exploração responsável da Amazônia com tecnologia e monitoramento') },
      { text: dv('Reforma do licenciamento ambiental para agilidade e segurança jurídica') },
    ],
  },
  {
    id: 'relacoes-exteriores',
    label: 'Relações Exteriores',
    lula: [
      { text: dv('Protagonismo multilateral') },
      { text: dv('Cooperação Sul-Sul (Mercosul, BRICS, CPLP)') },
      { text: dv('Reforma ONU/FMI/OMC') },
    ],
    flavio: [
      { text: dv('Alinhamento prioritário com EUA (Trump)') },
      { text: dv('Classificação PCC e CV como organizações terroristas', 'https://g1.globo.com/mundo/noticia/2026/05/29/pcc-e-cv-entram-na-lista-do-governo-dos-eua-para-organizacao-terrorista.ghtml') },
      { text: dv('Defesa de brasileiros no exterior e cooperação jurídica internacional') },
    ],
    renan: [
      { text: dv('Alinhamento Milei/Bukele', 'https://www.cnnbrasil.com.br/blogs/isabel-mega/politica/sou-milei-na-forma-e-bukele-no-conteudo-diz-renan-santos-a-cnn/') },
      { text: dv('Abertura comercial bilateral') },
      { text: dv('Flexibilização Mercosul') },
      { text: dv('China pragmática') },
      { text: dv('Aproximação EUA/OCDE') },
    ],
  },
  {
    id: 'reforma-politica',
    label: 'Reforma Política e Judiciário',
    lula: [
      { text: dv('Reforma do Judiciário (em avaliação)') },
      { text: dv('Voto em listas com paridade') },
      { text: dv('Reforma emendas parlamentares') },
      { text: dv('Regulamentação mídia e redes sociais') },
    ],
    flavio: [
      { text: dv('Prisão em 2ª instância (PL 656/2025)') },
    ],
    renan: [
      { text: dv('Lei de Responsabilidade Gerencial') },
      { text: dv('Fusão de municípios inviáveis') },
      { text: dv('Corte privilégios Judiciário') },
    ],
  },
  {
    id: 'costumes',
    label: 'Costumes, Família e Direitos Humanos',
    lula: [
      { text: dv('Combate discriminação (racismo, LGBTfobia)') },
      { text: dv('Igualdade salarial mulheres') },
      { text: dv('Demarcação terras indígenas') },
      { text: dv('Cultura e Novas Economias (economia criativa)') },
    ],
    flavio: [
      { text: dv('Família tradicional') },
      { text: dv('Combate aborto em qualquer circunstância') },
      { text: dv('Liberdade religiosa') },
      { text: dv('Combate ideologia de gênero nas escolas') },
    ],
    renan: [
      { text: dv('Família tradicional') },
      { text: dv('Contra aborto') },
      { text: dv('Uso terapêutico psicodélicos (cogumelos, ayahuasca)') },
    ],
  },
  {
    id: 'agricultura',
    label: 'Agricultura e Desenvolvimento Rural',
    lula: [
      { text: dv('Fortalecimento agricultura familiar') },
      { text: dv('Reforma agrária') },
      { text: dv('Agronegócio sustentável (ABC+)') },
      { text: dv('Bioeconomia amazônica') },
    ],
    flavio: [
      { text: dv('Marco temporal como segurança jurídica ao produtor', 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml') },
      { text: dv('Defesa do agronegócio como motor econômico') },
      { text: dv('Autonomia indígena para exploração econômica em suas terras') },
      { text: dv('Crítico a demarcações e regulação ambiental excessiva') },
    ],
    renan: [
      { text: dv('Agronegócio como prioridade estratégica nacional') },
      { text: dv('Menos burocracia e regulação ambiental para produtores rurais') },
      { text: dv('Inovação e tecnologia no campo (agritech, agricultura de precisão)') },
      { text: dv('Reforma do INCRA com foco em produtividade e regularização fundiária') },
    ],
  },
]
