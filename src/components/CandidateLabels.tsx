'use client'

import type { DataValue } from '../types'

interface CandidateLabelsProps {
  age: DataValue<number>
  careerYears: DataValue<number>
}

export function CandidateLabels({ age, careerYears }: CandidateLabelsProps) {
  return (
    <div className="flex gap-2 mt-3">
      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
        {age.value} anos
      </span>
      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
        {careerYears.value} anos pol.
      </span>
    </div>
  )
}
