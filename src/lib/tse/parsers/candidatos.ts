import type { Candidate } from '@/types'

export function parseCandidatos(
  _rows: Record<string, string>[],
): Partial<Candidate>[] {
  console.warn(
    '[tse] candidatos-2026 dataset not yet available. ' +
      'Parser will return empty array until TSE publishes 2026 candidate data.',
  )
  return []
}
