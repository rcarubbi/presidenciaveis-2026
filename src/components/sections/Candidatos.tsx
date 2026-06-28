'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Users } from 'lucide-react'
import type { Candidate } from '../../types'
import { CandidateCard } from '../CandidateCard'

interface CandidatosProps {
  candidates: Candidate[]
}

export function Candidatos({ candidates }: CandidatosProps) {
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
    <>
      <div className="glass rounded-xl p-6 mb-8 space-y-3 border-l-4 border-gray-300 dark:border-gray-600">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <Users size={18} className="text-gray-500" />
          Eleições 2026
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Acompanhe os presidenciáveis 2026. Navegue pelos perfis dos candidatos à Presidência da República — dados pessoais, carreira, planos de governo, escândalos, financiamento de campanha e posicionamento político. Compare candidatos lado a lado.
        </p>
      </div>
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
    </>
  )
}
