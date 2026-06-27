export interface ProposalSection {
  id: string
  label: string
  lula: string[]
  flavio: string[]
  renan: string[]
}

export const proposalSections: ProposalSection[] = [
  {
    id: 'seguranca',
    label: 'Segurança Pública',
    lula: [
      'Repressão qualificada (inteligência, não operações espetaculares)',
      'PEC da Segurança Pública (unificação protocolos)',
      'PL Antifaccão (tipificação organizações criminosas)',
      'Mapeamento criminal em tempo real',
      'Fortalecimento PRF e PF',
      'Retomada Estatuto do Desarmamento',
    ],
    flavio: [
      'Megapresídios federais (modelo supermax)',
      'Classificação facções como terroristas',
      'Castração química p/ pedófilos/estupradores',
      'Reconhecimento facial em massa',
      'Fim progressão regime p/ crimes hediondos',
      'Prisão em 2ª instância (PL 656/2025)',
      'Redução maioridade penal p/ 16 anos',
      'Excludente ilicitude ampliado policiais',
      'Pensão policial que matar/for morto',
    ],
    renan: [
      'Endurecimento penal total',
      'Pena de morte p/ hediondos contra crianças',
      'Direito Penal do Inimigo (suspensão garantias facções)',
      'Estado de defesa em cidades dominadas',
      'Fim progressão de regime',
      'Reestruturação polícia brasileira',
    ],
  },
  {
    id: 'economia',
    label: 'Economia e Política Fiscal',
    lula: [
      'Reforma tributária progressiva',
      'Revogação teto gastos (EC 95/2016)',
      'Reindustrialização nacional',
      'Valorização salário mínimo (inflação + PIB)',
      'Desenrola 2 (renegociação dívidas)',
    ],
    flavio: [
      'Simplificação tributária (sem progressividade)',
      'Redução carga tributária',
      'Liberdade econômica',
      'Privatização estatais não estratégicas',
    ],
    renan: [
      'Economia de R$ 3,3 tri em 10 anos',
      'Nova reforma da Previdência',
      'Desindexação benefícios do salário mínimo',
      'Corte privilégios Judiciário',
      'Desvinculação gastos saúde/educação da receita',
      'Mutirão anti Bolsa-Família (>30% população)',
    ],
  },
  {
    id: 'saude',
    label: 'Saúde',
    lula: [
      'Fortalecimento SUS (atenção primária, vigilância)',
      'Ampliação Farmácia Popular',
      'Valorização profissionais saúde',
    ],
    flavio: [],
    renan: [
      'Prontuário Eletrônico Unificado Nacional',
      'IA e machine learning no SUS',
      'Desvinculação gastos saúde da receita',
    ],
  },
  {
    id: 'educacao',
    label: 'Educação',
    lula: [
      'Retomada FUNDEB com ampliação',
      'Expansão ensino técnico federal',
      'Ampliação FIES e PROUNI',
      'Revogação Novo Ensino Médio',
      'Valorização docente',
      'Fim colégios cívico-militares',
    ],
    flavio: [
      'Homeschooling como direito',
      'Escola sem partido',
    ],
    renan: [
      'Liberdade de ensino',
      'Homeschooling',
      'Referências: Finlândia, Singapura, Japão, China',
      'Desvinculação gastos educação da receita',
    ],
  },
  {
    id: 'previdencia',
    label: 'Previdência e Trabalho',
    lula: [
      'Revisão EC 103/2019',
      'Nova legislação trabalhista (apps, autônomos)',
      'Revogação marcos reforma 2017',
      'Redução jornada sem redução salário',
    ],
    flavio: [],
    renan: [
      'Nova reforma da Previdência',
      'Crítico redução jornada sem estudos',
    ],
  },
  {
    id: 'infraestrutura',
    label: 'Infraestrutura',
    lula: [
      'PAC com foco mobilidade, saneamento, habitação',
      'Investimento energia limpa e renovável',
    ],
    flavio: [],
    renan: [
      'Desfavelização (habitação + reurbanização)',
      'Interiorização indústria (Nordeste)',
      'Indústria tecnologia (semicondutores, data centers)',
    ],
  },
  {
    id: 'meio-ambiente',
    label: 'Meio Ambiente e Clima',
    lula: [
      'Enfrentamento crise climática (COP 2025)',
      'Fortalecimento IBAMA/ICMBio',
      'Combate desmatamento ilegal',
      'Demarcação terras indígenas',
    ],
    flavio: [],
    renan: [
      'Desenvolvimento sustentável com liberdade econômica',
      'Bioeconomia como oportunidade de negócio e inovação',
      'Exploração responsável da Amazônia com tecnologia e monitoramento',
      'Reforma do licenciamento ambiental para agilidade e segurança jurídica',
    ],
  },
  {
    id: 'relacoes-exteriores',
    label: 'Relações Exteriores',
    lula: [
      'Protagonismo multilateral',
      'Cooperação Sul-Sul (Mercosul, BRICS, CPLP)',
      'Reforma ONU/FMI/OMC',
    ],
    flavio: [],
    renan: [
      'Alinhamento Milei/Bukele',
      'Abertura comercial bilateral',
      'Flexibilização Mercosul',
      'China pragmática',
      'Aproximação EUA/OCDE',
    ],
  },
  {
    id: 'reforma-politica',
    label: 'Reforma Política e Judiciário',
    lula: [
      'Reforma do Judiciário (em avaliação)',
      'Voto em listas com paridade',
      'Reforma emendas parlamentares',
      'Regulamentação mídia e redes sociais',
    ],
    flavio: [
      'Prisão em 2ª instância (PL 656/2025)',
    ],
    renan: [
      'Lei de Responsabilidade Gerencial',
      'Fusão de municípios inviáveis',
      'Corte privilégios Judiciário',
    ],
  },
  {
    id: 'costumes',
    label: 'Costumes, Família e Direitos Humanos',
    lula: [
      'Combate discriminação (racismo, LGBTfobia)',
      'Igualdade salarial mulheres',
      'Demarcação terras indígenas',
      'Cultura e Novas Economias (economia criativa)',
    ],
    flavio: [
      'Família tradicional',
      'Combate aborto em qualquer circunstância',
      'Liberdade religiosa',
    ],
    renan: [
      'Família tradicional',
      'Contra aborto',
      'Uso terapêutico psicodélicos (cogumelos, ayahuasca)',
    ],
  },
  {
    id: 'agricultura',
    label: 'Agricultura e Desenvolvimento Rural',
    lula: [
      'Fortalecimento agricultura familiar',
      'Reforma agrária',
      'Agronegócio sustentável (ABC+)',
      'Bioeconomia amazônica',
    ],
    flavio: [],
    renan: [
      'Agronegócio como prioridade estratégica nacional',
      'Menos burocracia e regulação ambiental para produtores rurais',
      'Inovação e tecnologia no campo (agritech, agricultura de precisão)',
      'Reforma do INCRA com foco em produtividade e regularização fundiária',
    ],
  },
]
