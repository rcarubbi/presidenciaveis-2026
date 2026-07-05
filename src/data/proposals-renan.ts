import type { ProposalItem } from '../types'
import { dv } from '@/lib/dataValue'

export const renanProposals: Record<string, ProposalItem[]> = {
  seguranca: [
    { text: dv('Endurecimento penal total', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
    { text: dv('Pena de morte p/ hediondos contra crianças', 'https://www.poder360.com.br/poder-eleicoes/presidente-da-missao-defende-discutir-prisao-perpetua-e-pena-de-morte/', '2026-06-26') },
    { text: dv('Direito Penal do Inimigo (suspensão garantias facções)', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira', '2025-12-07') },
    { text: dv('Estado de defesa em cidades dominadas', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira', '2025-12-07') },
    { text: dv('Fim progressão de regime', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
    { text: dv('Reestruturação polícia brasileira', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
  ],
  economia: [
    { text: dv('Economia de R$ 3,3 tri em 10 anos', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    { text: dv('Desindexação benefícios do salário mínimo', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    { text: dv('Desvinculação gastos saúde/educação da receita', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    { text: dv('Mutirão anti Bolsa-Família (>30% população)', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
  ],
  saude: [
    { text: dv('Ozempic-similares no SUS para tratamento de obesidade e diabetes', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-03-09') },
    { text: dv('Dedução do IR para gastos com atividade física (academia, personal trainer)', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-02') },
    { text: dv('Telemedicina integrada ao SUS com atendimento remoto especializado', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
    { text: dv('Prontuário único nacional com inteligência artificial para prevenir doenças', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-03-09') },
  ],
  educacao: [
    { text: dv('Método fônico obrigatório na alfabetização em todo o país', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-17') },
    { text: dv('Ensino técnico profissionalizante universal (modelo alemão)', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
    { text: dv('Escolas polo para os melhores alunos da rede pública', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-17') },
    { text: dv('Fim da progressão continuada com provões de critérios objetivos', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-17') },
  ],
  previdencia: [
    { text: dv('Nova reforma da Previdência', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    { text: dv('Flexibilização leis trabalhistas com limites', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
  ],
  infraestrutura: [
    { text: dv('Desfavelização (habitação + reurbanização)', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
    { text: dv('Interiorização indústria (Nordeste)', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
    { text: dv('Indústria tecnologia (semicondutores, data centers)', 'https://www.estadao.com.br/politica/renan-santos-vira-milei-brasileiro-para-disputar-a-direita-com-flavio-a-quem-chama-de-judas/', '2026-03-29') },
  ],
  'meio-ambiente': [
    { text: dv('Desenvolvimento sustentável com liberdade econômica', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Bioeconomia como oportunidade de negócio e inovação', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Exploração responsável da Amazônia com tecnologia e monitoramento', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Reforma do licenciamento ambiental para agilidade e segurança jurídica', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
  ],
  'relacoes-exteriores': [
    { text: dv('Alinhamento Milei/Bukele', 'https://www.cnnbrasil.com.br/blogs/isabel-mega/politica/sou-milei-na-forma-e-bukele-no-conteudo-diz-renan-santos-a-cnn/', '2026-06-26') },
    { text: dv('Abertura comercial bilateral', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Flexibilização Mercosul', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('China pragmática', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Aproximação EUA/OCDE', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
  ],
  'reforma-politica': [
    { text: dv('Lei de Responsabilidade Gerencial', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
    { text: dv('Fusão de municípios inviáveis', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
    { text: dv('Corte privilégios Judiciário', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-06-26') },
  ],
  costumes: [
    { text: dv('Homeschooling regulamentado como direito da família', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-05-20') },
    { text: dv('Separação de alunos autistas em salas especiais com atendimento individualizado', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-05-09') },
    { text: dv('Uso terapêutico psicodélicos (cogumelos, ayahuasca)', 'https://www.metropoles.com/colunas/paulo-cappelli/renan-santos-explica-experiencia-com-cogumelos-fica-mais-produtivo', '2026-04-18') },
    { text: dv('Fim das cotas raciais e cotas sociais nas universidades', 'https://valor.globo.com/politica/noticia/2026/05/14/escandalo-envolvendo-flavio-bolsonaro-leva-a-aumento-de-interesse-por-renan-santos-sabia-quem-e.ghtml', '2026-01-27') },
  ],
  agricultura: [
    { text: dv('Agronegócio como prioridade estratégica nacional', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Menos burocracia e regulação ambiental para produtores rurais', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Inovação e tecnologia no campo (agritech, agricultura de precisão)', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Reforma do INCRA com foco em produtividade e regularização fundiária', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
  ],
}
