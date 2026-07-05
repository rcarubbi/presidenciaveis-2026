import type { ProposalItem } from '../types'
import { dv } from '@/lib/dataValue'

export const lulaProposals: Record<string, ProposalItem[]> = {
  seguranca: [
    { text: dv('Repressão qualificada (inteligência, não operações espetaculares)', 'https://oglobo.globo.com/politica/noticia/2026/05/29/em-minuta-de-plano-de-governo-de-lula-pt-propoe-e-repressao-qualificada-para-combater-crime-organizado.ghtml', '2026-05-29') },
    { text: dv('PEC da Segurança Pública (unificação protocolos)', 'https://jnewscast.com.br/governo-lula-chega-a-2026-com-medidas-eleitorais-pendentes-no-congresso/', '2026-01-05') },
    { text: dv('PL Antifaccão (tipificação organizações criminosas)', 'https://jnewscast.com.br/governo-lula-chega-a-2026-com-medidas-eleitorais-pendentes-no-congresso/', '2026-01-05') },
    { text: dv('Mapeamento criminal em tempo real', 'https://oglobo.globo.com/politica/noticia/2026/05/29/em-minuta-de-plano-de-governo-de-lula-pt-propoe-e-repressao-qualificada-para-combater-crime-organizado.ghtml', '2026-05-29') },
    { text: dv('Fortalecimento PRF e PF', 'https://oglobo.globo.com/politica/noticia/2026/05/29/em-minuta-de-plano-de-governo-de-lula-pt-propoe-e-repressao-qualificada-para-combater-crime-organizado.ghtml', '2026-05-29') },
    { text: dv('Retomada Estatuto do Desarmamento', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
  ],
  economia: [
    { text: dv('Reforma tributária progressiva', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Revogação teto gastos (EC 95/2016)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Reindustrialização nacional', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Valorização salário mínimo (inflação + PIB)', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Desenrola 2 (renegociação dívidas)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Mapa do Caminho para contornar tarifaço dos EUA (negociação Section 301, exceto Pix)', 'https://valor.globo.com/brasil/noticia/2026/07/02/governo-propoe-aos-eua-mapa-do-caminho-para-contornar-tarifa-de-25percent-mas-pix-e-inegociavel.ghtml', '2026-07-02') },
  ],
  saude: [
    { text: dv('Fortalecimento SUS (atenção primária, vigilância)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Ampliação Farmácia Popular', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Valorização profissionais saúde', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
  ],
  educacao: [
    { text: dv('Retomada FUNDEB com ampliação', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Expansão ensino técnico federal', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Ampliação FIES e PROUNI', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Revogação Novo Ensino Médio', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Valorização docente', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Fim colégios cívico-militares', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
  ],
  previdencia: [
    { text: dv('Revisão EC 103/2019', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Regulamentação trabalho plataformas digitais (apps)', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Revogação marcos reforma 2017', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Redução jornada semanal (fim escala 6x1)', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
  ],
  infraestrutura: [
    { text: dv('PAC com foco mobilidade, saneamento, habitação', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Transição energética e economia verde', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
  ],
  'meio-ambiente': [
    { text: dv('Enfrentamento crise climática', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
    { text: dv('Fortalecimento IBAMA/ICMBio', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Combate desmatamento ilegal', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Demarcação terras indígenas', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
  ],
  'relacoes-exteriores': [
    { text: dv('Protagonismo multilateral', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Cooperação Sul-Sul (Mercosul, BRICS, CPLP)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Reforma ONU/FMI/OMC', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
  ],
  'reforma-politica': [
    { text: dv('Reforma do Judiciário (em avaliação)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Voto em listas com paridade', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Reforma emendas parlamentares', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Regulamentação mídia e redes sociais', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
  ],
  costumes: [
    { text: dv('Combate discriminação (racismo, LGBTfobia)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Igualdade salarial mulheres', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Cultura e Novas Economias (economia criativa)', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
  ],
  agricultura: [
    { text: dv('Fortalecimento agricultura familiar', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Reforma agrária', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Agronegócio sustentável (ABC+)', 'https://pt.org.br/com-olhar-para-o-futuro-programa-de-governo-de-lula-tera-construcao-coletiva/', '2026-05-30') },
    { text: dv('Bioeconomia amazônica', 'https://contee.org.br/lula-lanca-plano-participativo-e-abre-construcao-do-programa-de-governo-para-2027-2030/', '2026-06-05') },
  ],
}
