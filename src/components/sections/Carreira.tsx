'use client'

import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { useState } from 'react'
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
    <div className="space-y-4">
      <YearRangeFilter minYear={minYear} maxYear={maxYear} yearRange={yearRange} onChange={setYearRange} />

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {filtered.map((c) => (
        <div key={c.id} className="glass p-5">
          <h3 className="text-base font-semibold mb-4" style={{ color: c.party.color }}>{candidates.length > 1 && <><DataLink data={c.name} /> — </>}Carreira Política</h3>

          <CareerTimeline events={c.timeline} partyColor={c.party.color} />
          <ElectionResults results={c.electionResults} />
        </div>
      ))}
    </div>
  </div>
  )
}
