import type { DataValue, Candidate } from '@/types'

export const dv = (value: string, source = '', updatedAt = ''): DataValue => ({ value, source, updatedAt })
export const dvn = (value: number, source = '', updatedAt = ''): DataValue<number> => ({ value, source, updatedAt })

export function getLatestCandidateUpdate(candidate: Candidate): string {
  let max = ''
  const scan = (obj: unknown) => {
    if (!obj || typeof obj !== 'object') return
    if (Array.isArray(obj)) {
      obj.forEach(scan)
      return
    }
    const record = obj as Record<string, unknown>
    if (typeof record.updatedAt === 'string' && record.updatedAt > max) {
      max = record.updatedAt
    }
    for (const val of Object.values(record)) {
      if (typeof val === 'object' && val !== null) scan(val)
    }
  }
  scan(candidate)
  return max
}
