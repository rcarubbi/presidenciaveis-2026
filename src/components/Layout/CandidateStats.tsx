'use client'

import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'

interface CandidateStatsProps {
  candidate: Candidate
}

export function CandidateStats({ candidate: c }: CandidateStatsProps) {
  const color = c.party.color
  return (
    <div className="grid grid-cols-2 divide-x divide-blue-100/80 dark:divide-blue-900/40 md:grid-cols-3">
      {[
        { label: 'idade', value: c.age, fmt: (v: number) => `${v} anos` },
        { label: 'carreira política', value: c.careerYears, fmt: (v: number) => `${v} anos` },
        { label: 'patrimônio', value: c.patrimonio, fmt: (v: number) => v >= 1_000_000 ? `R$ ${(v / 1_000_000).toFixed(1)} mi` : `R$ ${(v / 1000).toFixed(0)} mil` },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center justify-center px-4 py-5">
          <span className="text-xl font-black tracking-tight md:text-2xl" style={{ color }}>
            <DataLink data={item.value} format={(v) => { const n = v as number; return item.fmt(n) }} />
          </span>
          <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
