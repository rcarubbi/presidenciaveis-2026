'use client'

import type { Candidate } from '../../types'
import { useState, useMemo } from 'react'
import { Briefcase } from 'lucide-react'
import { DataLink } from '../DataLink'
import { YearRangeFilter } from './YearRangeFilter'
import { CareerTimeline } from './CareerTimeline'
import { ElectionResults } from './ElectionResults'
import { CandidateNameHeading } from '../ui/CandidateNameHeading'

interface CarreiraProps {
  candidates: Candidate[]
}

export function Carreira({ candidates }: CarreiraProps) {
  const allYears = candidates.flatMap((c) => c.timeline.map((t) => parseInt(t.year.value)))
  const minYear = Math.min(...allYears)
  const maxYear = Math.max(...allYears)
  const [yearRange, setYearRange] = useState<[number, number]>([minYear, maxYear])

  const filtered = useMemo(() => candidates.map((c) => ({
    ...c,
    timeline: c.timeline.filter((t) => {
      const y = parseInt(t.year.value)
      return y >= yearRange[0] && y <= yearRange[1]
    }),
  })), [candidates, yearRange])
  return (
    <div className="space-y-6">
      <CandidateNameHeading candidates={candidates} icon={Briefcase} title="CARREIRA POLÍTICA" />
      <YearRangeFilter minYear={minYear} maxYear={maxYear} yearRange={yearRange} onChange={setYearRange} />

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {filtered.map((c) => (
        <div key={c.id} className="bento-card p-5">
          {candidates.length > 1 && (
            <h3 className="text-base font-semibold mb-4" style={{ color: c.party.color }}>
              <DataLink data={c.name} />
            </h3>
          )}
          <CareerTimeline events={c.timeline} partyColor={c.party.color} />
          <ElectionResults results={c.electionResults} />
        </div>
      ))}
    </div>
  </div>
  )
}
