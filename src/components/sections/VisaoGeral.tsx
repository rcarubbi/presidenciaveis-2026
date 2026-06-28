'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Candidate } from '../../types'
import { CandidateCard } from '../CandidateCard'

interface VisaoGeralProps {
  candidates: Candidate[]
}

export function VisaoGeral({ candidates }: VisaoGeralProps) {
  const router = useRouter()
  const [cardLoading, setCardLoading] = useState<string | null>(null)
  const [compareSelection, setCompareSelection] = useState<string[]>([])

  const handleCardClick = (id: string) => {
    setCardLoading(id)
    router.push(`/candidato/${id}`)
  }

  const handleCompareClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (compareSelection.includes(id)) return
    const next = [...compareSelection, id]
    if (next.length === 2) {
      setCompareSelection([])
      router.push(`/comparar?ids=${next[0]},${next[1]}`)
    } else {
      setCompareSelection(next)
    }
  }

  if (candidates.length === 0) {
    return (
      <div className="glass p-10 text-center">
        <p className="text-gray-500 text-lg">Nenhum candidato disponível</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
      {candidates.map((c) => (
        <CandidateCard
          key={c.id}
          candidate={c}
          cardLoading={cardLoading === c.id}
          isCompareSelected={compareSelection.includes(c.id)}
          onCardClick={handleCardClick}
          onCompareClick={handleCompareClick}
        />
      ))}
    </div>
  )
}
