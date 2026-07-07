import type { ProposalItem } from '../types'
import { dv } from '@/lib/dataValue'

export const renanProposals: Record<string, ProposalItem[]> = {
  seguranca: [
    { text: dv('Endurecimento penal total', 'https://tmc.com.br/politica/renan-santos-sobre-seguranca-publica-vou-eliminar-as-ocupacoes-territoriais/', '2026-05-18') },
    { text: dv('Pena de morte p/ hediondos contra crianças', 'https://www.poder360.com.br/poder-eleicoes/presidente-da-missao-defende-discutir-prisao-perpetua-e-pena-de-morte/', '2026-06-26') },
    { text: dv('Direito Penal do Inimigo (suspensão garantias facções)', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira', '2025-12-07') },
    { text: dv('Estado de defesa em cidades dominadas', 'https://www.poder360.com.br/poder-internacional/entenda-o-plano-de-seguranca-de-el-salvador-que-inspira-direita-brasileira', '2025-12-07') },
    { text: dv('Fim progressão de regime', 'https://tmc.com.br/politica/renan-santos-sobre-seguranca-publica-vou-eliminar-as-ocupacoes-territoriais/', '2026-05-18') },
    { text: dv('Reestruturação polícia brasileira', 'https://tmc.com.br/politica/renan-santos-sobre-seguranca-publica-vou-eliminar-as-ocupacoes-territoriais/', '2026-05-18') },
  ],
  economia: [
    { text: dv('Economia de R$ 3,3 tri em 10 anos', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    { text: dv('Desindexação benefícios do salário mínimo', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    { text: dv('Desvinculação gastos saúde/educação da receita', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    { text: dv('Mutirão anti Bolsa-Família (>30% população)', 'https://www.bbc.com/portuguese/articles/cn7846447j3o', '2026-04-28') },
  ],
  saude: [
    { text: dv('Ozempic-similares no SUS para tratamento de obesidade e diabetes', 'https://revistaoeste.com/politica/pre-candidato-promete-levar-ozempic-ao-sus-e-defende-combate-a-obesidade/', '2026-02-27') },
    { text: dv('Dedução do IR para gastos com atividade física (academia, personal trainer)', 'https://diariodopoder.com.br/brasil-e-regioes/renan-santos-aposta-em-incentivo-tributario-para-combater-o-sedentarismo', '2026-06-02') },
    { text: dv('Telemedicina integrada ao SUS com atendimento remoto especializado', 'https://diariodopoder.com.br/brasil-e-regioes/renan-santos-aposta-em-incentivo-tributario-para-combater-o-sedentarismo', '2026-06-02') },
    { text: dv('Prontuário único nacional com inteligência artificial para prevenir doenças', 'https://diariodopoder.com.br/brasil-e-regioes/renan-santos-aposta-em-incentivo-tributario-para-combater-o-sedentarismo', '2026-06-02') },
  ],
  educacao: [
    { text: dv('Método fônico obrigatório na alfabetização em todo o país', 'https://www.programadorubao.com.br/pre-candidato-a-presidencia-renan-santos-propoe-metodo-fonico-obrigatorio-e-fim-do-pe-de-meia/', '2026-06-04') },
    { text: dv('Ensino técnico profissionalizante universal (modelo alemão)', 'https://www.missaoapoio.com.br/noticia/renan-santos-sao-miguel-do-oeste-propostas-partido-missao', '2026-04-21') },
    { text: dv('Escolas polo para os melhores alunos da rede pública', 'https://www.programadorubao.com.br/pre-candidato-a-presidencia-renan-santos-propoe-metodo-fonico-obrigatorio-e-fim-do-pe-de-meia/', '2026-06-04') },
    { text: dv('Fim da progressão continuada com provões de critérios objetivos', 'https://www.programadorubao.com.br/pre-candidato-a-presidencia-renan-santos-propoe-metodo-fonico-obrigatorio-e-fim-do-pe-de-meia/', '2026-06-04') },
  ],
  previdencia: [
    { text: dv('Nova reforma da Previdência', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
    { text: dv('Flexibilização leis trabalhistas com limites', 'https://exame.com/brasil/virais-regionais-e-ataques-a-flavio-a-estrategia-de-renan-santos-para-a-eleicao/', '2026-04-08') },
  ],
  infraestrutura: [
    { text: dv('Desfavelização (habitação + reurbanização)', 'https://www.cnnbrasil.com.br/blogs/isabel-mega/politica/sou-milei-na-forma-e-bukele-no-conteudo-diz-renan-santos-a-cnn/', '2026-05-22') },
    { text: dv('Interiorização indústria (Nordeste)', 'https://www.cnnbrasil.com.br/politica/renan-santos-visa-nordeste-ao-falar-em-acordo-com-eua-por-terras-raras/', '2026-05-21') },
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
    { text: dv('Lei de Responsabilidade Gerencial', 'https://www.band.com.br/noticias/canal-livre/ultimas/renan-santos-critica-voto-distrital-empoderamento-do-centrao-202604270024', '2026-04-27') },
    { text: dv('Fusão de municípios inviáveis', 'https://diariotocantinense.com.br/2026/03/19/renan-santos-propoe-fusao-de-cidades-do-tocantins-reacende-polemica-no-bico-e-esbarra-em-trava-juridica/', '2026-03-19') },
    { text: dv('Corte privilégios Judiciário', 'https://www.cnnbrasil.com.br/eleicoes/renan-santos-quer-restringir-stf-e-vetar-escritorios-ligados-a-ministros/', '2026-05-21') },
  ],
  costumes: [
    { text: dv('Homeschooling regulamentado como direito da família', 'https://www.bbc.com/portuguese/articles/cn7846447j3o', '2026-04-28') },
    { text: dv('Separação de alunos autistas em salas especiais com atendimento individualizado', 'https://www.poder360.com.br/poder-eleicoes/renan-santos-critica-quem-diz-ser-autista-para-ter-beneficios/', '2026-05-09') },
    { text: dv('Uso terapêutico psicodélicos (cogumelos, ayahuasca)', 'https://www.metropoles.com/colunas/paulo-cappelli/renan-santos-explica-experiencia-com-cogumelos-fica-mais-produtivo', '2026-04-18') },
    { text: dv('Fim das cotas raciais e cotas sociais nas universidades', 'https://www.bbc.com/portuguese/articles/cn7846447j3o', '2026-04-28') },
  ],
  agricultura: [
    { text: dv('Agronegócio como prioridade estratégica nacional', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Menos burocracia e regulação ambiental para produtores rurais', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Inovação e tecnologia no campo (agritech, agricultura de precisão)', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
    { text: dv('Reforma do INCRA com foco em produtividade e regularização fundiária', 'https://www.gazetasp.com.br/politica/quem-e-renan-santos-presidenciavel-partido-missao/', '2026-05-28') },
  ],
}
