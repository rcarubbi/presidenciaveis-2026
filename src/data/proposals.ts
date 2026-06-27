import type { ProposalItem } from '../types'

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
      { text: 'Repressão qualificada (inteligência, não operações espetaculares)' },
      { text: 'PEC da Segurança Pública (unificação protocolos)' },
      { text: 'PL Antifaccão (tipificação organizações criminosas)' },
      { text: 'Mapeamento criminal em tempo real' },
      { text: 'Fortalecimento PRF e PF' },
      { text: 'Retomada Estatuto do Desarmamento' },
    ],
    flavio: [
      { text: 'Megapresídios federais (modelo supermax)' },
      { text: 'Classificação facções como terroristas' },
      { text: 'Castração química p/ pedófilos/estupradores' },
      { text: 'Reconhecimento facial em massa' },
      { text: 'Fim progressão regime p/ crimes hediondos' },
      { text: 'Prisão em 2ª instância (PL 656/2025)' },
      { text: 'Redução maioridade penal p/ 16 anos' },
      { text: 'Excludente ilicitude ampliado policiais' },
      { text: 'Pensão policial que matar/for morto' },
    ],
    renan: [
      { text: 'Endurecimento penal total' },
      { text: 'Pena de morte p/ hediondos contra crianças', source: 'https://prendeumatou.com.br' },
      { text: 'Direito Penal do Inimigo (suspensão garantias facções)', source: 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira' },
      { text: 'Estado de defesa em cidades dominadas', source: 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira' },
      { text: 'Fim progressão de regime' },
      { text: 'Reestruturação polícia brasileira' },
    ],
  },
  {
    id: 'economia',
    label: 'Economia e Política Fiscal',
    lula: [
      { text: 'Reforma tributária progressiva' },
      { text: 'Revogação teto gastos (EC 95/2016)' },
      { text: 'Reindustrialização nacional' },
      { text: 'Valorização salário mínimo (inflação + PIB)' },
      { text: 'Desenrola 2 (renegociação dívidas)' },
    ],
    flavio: [
      { text: 'Simplificação tributária (sem progressividade)' },
      { text: 'Redução carga tributária' },
      { text: 'Liberdade econômica' },
      { text: 'Privatização estatais não estratégicas' },
    ],
    renan: [
      { text: 'Economia de R$ 3,3 tri em 10 anos' },
      { text: 'Nova reforma da Previdência' },
      { text: 'Desindexação benefícios do salário mínimo' },
      { text: 'Corte privilégios Judiciário' },
      { text: 'Desvinculação gastos saúde/educação da receita' },
      { text: 'Mutirão anti Bolsa-Família (>30% população)' },
    ],
  },
  {
    id: 'saude',
    label: 'Saúde',
    lula: [
      { text: 'Fortalecimento SUS (atenção primária, vigilância)' },
      { text: 'Ampliação Farmácia Popular' },
      { text: 'Valorização profissionais saúde' },
    ],
    flavio: [
      { text: 'Desvinculação do piso constitucional (correção só pela inflação, não 15% RCL)', source: 'https://www1.folha.uol.com.br/mercado/2026/04/flavio-planeja-reajustar-aposentadorias-e-despesas-com-saude-e-educacao-so-pela-inflacao.shtml' },
      { text: 'Eficiência de gasto, sem ampliação da máquina pública' },
      { text: 'Parcerias privadas na gestão hospitalar' },
    ],
    renan: [
      { text: 'Prontuário Eletrônico Unificado Nacional' },
      { text: 'IA e machine learning no SUS' },
      { text: 'Desvinculação gastos saúde da receita' },
    ],
  },
  {
    id: 'educacao',
    label: 'Educação',
    lula: [
      { text: 'Retomada FUNDEB com ampliação' },
      { text: 'Expansão ensino técnico federal' },
      { text: 'Ampliação FIES e PROUNI' },
      { text: 'Revogação Novo Ensino Médio' },
      { text: 'Valorização docente' },
      { text: 'Fim colégios cívico-militares' },
    ],
    flavio: [
      { text: 'Homeschooling como direito' },
      { text: 'Escola sem partido' },
      { text: 'Desvinculação do piso constitucional (correção só pela inflação, não 18% RLI)' },
      { text: 'Meritocracia e avaliação de desempenho docente' },
    ],
    renan: [
      { text: 'Liberdade de ensino' },
      { text: 'Homeschooling' },
      { text: 'Referências: Finlândia, Singapura, Japão, China' },
      { text: 'Desvinculação gastos educação da receita' },
    ],
  },
  {
    id: 'previdencia',
    label: 'Previdência e Trabalho',
    lula: [
      { text: 'Revisão EC 103/2019' },
      { text: 'Nova legislação trabalhista (apps, autônomos)' },
      { text: 'Revogação marcos reforma 2017' },
      { text: 'Redução jornada sem redução salário' },
    ],
    flavio: [
      { text: 'Separação reajuste salário mínimo de benefícios INSS/BPC', source: 'https://www.otempo.com.br/politica/2026/6/2/maioridade-penal-ia-e-corte-de-gastos-flavio-bolsonaro-revela-prioridades-e-propostas-de-campanha' },
      { text: 'Correção aposentadorias e BPC só pela inflação' },
      { text: 'Nova reforma da Previdência (regime capitalização)' },
      { text: 'Salário mínimo por hora trabalhada (jornada flexível)' },
    ],
    renan: [
      { text: 'Nova reforma da Previdência' },
      { text: 'Crítico redução jornada sem estudos' },
    ],
  },
  {
    id: 'infraestrutura',
    label: 'Infraestrutura',
    lula: [
      { text: 'PAC com foco mobilidade, saneamento, habitação' },
      { text: 'Investimento energia limpa e renovável' },
    ],
    flavio: [
      { text: 'Saneamento básico para municípios pequenos' },
    ],
    renan: [
      { text: 'Desfavelização (habitação + reurbanização)' },
      { text: 'Interiorização indústria (Nordeste)' },
      { text: 'Indústria tecnologia (semicondutores, data centers)' },
    ],
  },
  {
    id: 'meio-ambiente',
    label: 'Meio Ambiente e Clima',
    lula: [
      { text: 'Enfrentamento crise climática (COP 2025)' },
      { text: 'Fortalecimento IBAMA/ICMBio' },
      { text: 'Combate desmatamento ilegal' },
      { text: 'Demarcação terras indígenas' },
    ],
    flavio: [
      { text: 'Novo marco do licenciamento ambiental (relatoria no Senado)', source: 'https://valor.globo.com/politica/noticia/2025/05/20/comissao-de-meio-ambiente-do-senado-aprova-marco-do-licenciamento-ambiental.ghtml' },
      { text: 'Marco temporal para demarcações indígenas', source: 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml' },
      { text: 'Autonomia econômica indígena (gado, mineração em terras)' },
    ],
    renan: [
      { text: 'Desenvolvimento sustentável com liberdade econômica' },
      { text: 'Bioeconomia como oportunidade de negócio e inovação' },
      { text: 'Exploração responsável da Amazônia com tecnologia e monitoramento' },
      { text: 'Reforma do licenciamento ambiental para agilidade e segurança jurídica' },
    ],
  },
  {
    id: 'relacoes-exteriores',
    label: 'Relações Exteriores',
    lula: [
      { text: 'Protagonismo multilateral' },
      { text: 'Cooperação Sul-Sul (Mercosul, BRICS, CPLP)' },
      { text: 'Reforma ONU/FMI/OMC' },
    ],
    flavio: [
      { text: 'Alinhamento prioritário com EUA (Trump)' },
      { text: 'Classificação PCC e CV como organizações terroristas', source: 'https://g1.globo.com/mundo/noticia/2026/05/29/pcc-e-cv-entram-na-lista-do-governo-dos-eua-para-organizacao-terrorista.ghtml' },
      { text: 'Defesa de brasileiros no exterior e cooperação jurídica internacional' },
    ],
    renan: [
      { text: 'Alinhamento Milei/Bukele', source: 'https://www.cnnbrasil.com.br/blogs/isabel-mega/politica/sou-milei-na-forma-e-bukele-no-conteudo-diz-renan-santos-a-cnn/' },
      { text: 'Abertura comercial bilateral' },
      { text: 'Flexibilização Mercosul' },
      { text: 'China pragmática' },
      { text: 'Aproximação EUA/OCDE' },
    ],
  },
  {
    id: 'reforma-politica',
    label: 'Reforma Política e Judiciário',
    lula: [
      { text: 'Reforma do Judiciário (em avaliação)' },
      { text: 'Voto em listas com paridade' },
      { text: 'Reforma emendas parlamentares' },
      { text: 'Regulamentação mídia e redes sociais' },
    ],
    flavio: [
      { text: 'Prisão em 2ª instância (PL 656/2025)' },
    ],
    renan: [
      { text: 'Lei de Responsabilidade Gerencial' },
      { text: 'Fusão de municípios inviáveis' },
      { text: 'Corte privilégios Judiciário' },
    ],
  },
  {
    id: 'costumes',
    label: 'Costumes, Família e Direitos Humanos',
    lula: [
      { text: 'Combate discriminação (racismo, LGBTfobia)' },
      { text: 'Igualdade salarial mulheres' },
      { text: 'Demarcação terras indígenas' },
      { text: 'Cultura e Novas Economias (economia criativa)' },
    ],
    flavio: [
      { text: 'Família tradicional' },
      { text: 'Combate aborto em qualquer circunstância' },
      { text: 'Liberdade religiosa' },
      { text: 'Combate ideologia de gênero nas escolas' },
    ],
    renan: [
      { text: 'Família tradicional' },
      { text: 'Contra aborto' },
      { text: 'Uso terapêutico psicodélicos (cogumelos, ayahuasca)' },
    ],
  },
  {
    id: 'agricultura',
    label: 'Agricultura e Desenvolvimento Rural',
    lula: [
      { text: 'Fortalecimento agricultura familiar' },
      { text: 'Reforma agrária' },
      { text: 'Agronegócio sustentável (ABC+)' },
      { text: 'Bioeconomia amazônica' },
    ],
    flavio: [
      { text: 'Marco temporal como segurança jurídica ao produtor', source: 'https://oglobo.globo.com/politica/noticia/2026/04/10/flavio-bolsonaro-acena-ao-agro-defende-marco-temporal-e-sugere-que-indigenas-possam-criar-gado-e-explorar-minerio-em-terras.ghtml' },
      { text: 'Defesa do agronegócio como motor econômico' },
      { text: 'Autonomia indígena para exploração econômica em suas terras' },
      { text: 'Crítico a demarcações e regulação ambiental excessiva' },
    ],
    renan: [
      { text: 'Agronegócio como prioridade estratégica nacional' },
      { text: 'Menos burocracia e regulação ambiental para produtores rurais' },
      { text: 'Inovação e tecnologia no campo (agritech, agricultura de precisão)' },
      { text: 'Reforma do INCRA com foco em produtividade e regularização fundiária' },
    ],
  },
]
