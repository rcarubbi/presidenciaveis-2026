'use client'

import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'

interface CandidateStatsProps {
  candidate: Candidate
}

export function CandidateStats({ candidate: c }: CandidateStatsProps) {
  const color = c.party.color
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      <div className="text-center">
        <p className="text-2xl font-bold" style={{ color }}><DataLink data={c.age} /></p>
        <p className="text-xs text-gray-500">anos</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold" style={{ color }}><DataLink data={c.careerYears} /></p>
        <p className="text-xs text-gray-500">anos na política</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold" style={{ color }}>
          <DataLink data={c.patrimonio} format={(v) => (v as number) >= 1_000_000 ? `R$ ${((v as number) / 1_000_000).toFixed(1)} mi` : `R$ ${((v as number) / 1000).toFixed(0)} mil`} />
        </p>
        <p className="text-xs text-gray-500">patrimônio</p>
      </div>
    </div>
  )
}
