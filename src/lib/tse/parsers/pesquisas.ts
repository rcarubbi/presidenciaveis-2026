export interface TseAggregate {
  pollsByInstitute: { name: string; value: number }[]
  sampleByInstitute: { name: string; value: number }[]
  totalPolls: number
  totalInstitutes: number
  lastUpdated: string
}

export function parsePesquisas(
  rows: Record<string, string>[],
): TseAggregate {
  const presidentRows = rows.filter(
    (r) =>
      r['DS_CARGO']?.toLowerCase() === 'presidente' &&
      r['SG_UE'] === 'BR',
  )

  const countMap = new Map<string, number>()
  const sampleMap = new Map<string, number>()

  for (const r of presidentRows) {
    const name = r['NM_EMPRESA']?.trim()
    if (!name) continue

    countMap.set(name, (countMap.get(name) ?? 0) + 1)

    const sample = parseInt(r['QT_ENTREVISTADO'] || '0', 10)
    sampleMap.set(name, (sampleMap.get(name) ?? 0) + sample)
  }

  const pollsByInstitute = [...countMap.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)

  const sampleByInstitute = [...sampleMap.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)

  const geracao = presidentRows.length > 0 ? presidentRows[0]['DT_GERACAO'] : ''

  return {
    pollsByInstitute,
    sampleByInstitute,
    totalPolls: presidentRows.length,
    totalInstitutes: countMap.size,
    lastUpdated: geracao,
  }
}
