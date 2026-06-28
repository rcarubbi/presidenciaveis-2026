'use client'

import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'

interface ComparisonLegendProps {
  candidates: Candidate[]
}

export function ComparisonLegend({ candidates }: ComparisonLegendProps) {
  return (
    <div className="flex gap-4 text-xs text-gray-500">
      {candidates.map((c) => (
        <span key={c.id} className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.party.color }} />
          <DataLink data={c.name} />
        </span>
      ))}
    </div>
  )
}
