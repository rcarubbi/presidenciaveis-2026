'use client'

import type { Candidate } from '../../types'
import { useState } from 'react'
import { Briefcase } from 'lucide-react'
import { YearRangeFilter } from './YearRangeFilter'
import { CareerTimeline } from './CareerTimeline'
import { ElectionResults } from './ElectionResults'

interface CarreiraProps {
  candidates: Candidate[]
}

export function Carreira({ candidates }: CarreiraProps) {
  const allYears = candidates.flatMap((c) => c.timeline.map((t) => parseInt(t.year.value)))
  const minYear = Math.min(...allYears)
  const maxYear = Math.max(...allYears)
  const [yearRange, setYearRange] = useState<[number, number]>([minYear, maxYear])

  const filtered = candidates.map((c) => ({
    ...c,
    timeline: c.timeline.filter((t) => {
      const y = parseInt(t.year.value)
      return y >= yearRange[0] && y <= yearRange[1]
    }),
  }))
  return (
    <div className="space-y-6">
      <div
        className={`flex items-center gap-2 ${candidates.length > 1 ? 'text-gray-700 dark:text-gray-300' : ''}`}
        style={candidates.length === 1 ? { color: candidates[0].party.color } : undefined}
      >
        <Briefcase className="size-4" />
        <h3 className="text-sm font-black uppercase tracking-[0.12em]">CARREIRA POLÍTICA</h3>
      </div>
      <YearRangeFilter minYear={minYear} maxYear={maxYear} yearRange={yearRange} onChange={setYearRange} />

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {filtered.map((c) => (
        <div key={c.id} className="bento-card p-5">
          <CareerTimeline events={c.timeline} partyColor={c.party.color} />
          <ElectionResults results={c.electionResults} />
        </div>
      ))}
    </div>
  </div>
  )
}
