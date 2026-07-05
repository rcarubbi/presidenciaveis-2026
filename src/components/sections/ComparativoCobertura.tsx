'use client'

import type { Candidate } from '@/types'
import { CoberturaCell } from './Cobertura'
import { CandidateSectionBlock } from '../ui/CandidateSectionBlock'

interface ComparativoCoberturaProps {
  candidates: Candidate[]
}

export function ComparativoCobertura({ candidates }: ComparativoCoberturaProps) {
  if (candidates.length === 0) return <div className="bento-card p-10 text-center"><p className="text-sm text-gray-400">Selecione candidatos para comparar a cobertura jornalística</p></div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {candidates.map((c) => (
        <CandidateSectionBlock key={c.id} candidate={c}>
          <CoberturaCell candidate={c} />
        </CandidateSectionBlock>
      ))}
    </div>
  )
}
