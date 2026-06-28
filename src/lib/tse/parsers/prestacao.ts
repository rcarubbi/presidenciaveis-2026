import type { CampaignFinance } from '@/types'

export function parsePrestacao(
  _rows: Record<string, string>[],
): Partial<CampaignFinance>[] {
  console.warn(
    '[tse] prestacao-de-contas-eleitorais-2026 dataset not yet available. ' +
      'Parser will return empty array until TSE publishes 2026 campaign finance data.',
  )
  return []
}
