'use client'

import type { DataValue } from '@/types'

export function DataLink({ data, fallback = 'N/D', format }: {
  data?: DataValue | DataValue<number> | null
  fallback?: string
  format?: (v: string | number) => string
}) {
  if (data == null) return <>{fallback}</>
  const display = format ? format(data.value) : String(data.value)
  if (!data.source) return <span>{display}</span>
  return (
    <a
      href={data.source}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 decoration-blue-400/40 hover:decoration-blue-600 transition-all duration-200"
    >
      {display}
      <span className="inline-block ml-0.5 text-blue-400/60 text-[10px]">&#8599;</span>
    </a>
  )
}
