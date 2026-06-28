'use client'

import type { DataValue } from '../types'
import { DataLink } from './DataLink'

interface CandidateLabelsProps {
  age: DataValue<number>
  careerYears: DataValue<number>
  patrimonio: DataValue<number> | null
}

export function CandidateLabels({ age, careerYears, patrimonio }: CandidateLabelsProps) {
  return (
    <div className="flex gap-2 mt-3">
      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
        {age.value} anos
      </span>
      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
        {careerYears.value} anos pol.
      </span>
      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
        <DataLink data={patrimonio} format={(v) => (v as number) >= 1_000_000 ? `R$ ${((v as number) / 1_000_000).toFixed(1)} mi` : `R$ ${((v as number) / 1000).toFixed(0)} mil`} />
      </span>
    </div>
  )
}
