import type { DataValue } from '@/types'

export const dv = (value: string, source = '', updatedAt = ''): DataValue => ({ value, source, updatedAt })
export const dvn = (value: number, source = '', updatedAt = ''): DataValue<number> => ({ value, source, updatedAt })
