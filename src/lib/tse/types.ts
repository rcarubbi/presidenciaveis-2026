export interface TsePesquisaRow {
  DT_GERACAO: string
  SG_UE: string
  NR_UE: string
  NM_UE: string
  DS_CARGO: string
  NR_ORDEM_PESQUISA: string
  NM_CANDIDATO: string
  NR_CANDIDATO: string
  NM_PARTIDO: string
  QT_INTENCAO_VOTO: string
  VR_PERCENTUAL_INTENCAO_VOTO: string
}

export interface TseContratanteRow {
  NR_ORDEM_PESQUISA: string
  NM_CONTRATANTE: string
  NR_CNPJ_CONTRATANTE: string
}

export interface TseCandidateRow {
  NM_CANDIDATO: string
  NR_CANDIDATO: string
  NM_PARTIDO: string
}

export interface TsePesquisaNormalized {
  ordem: string
  institute: string
  ue: string
  cargo: string
  dataPesquisa?: string
  candidates: TseCandidateRow[]
  percentuais: Record<string, string>
}
