'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
      <section className="relative overflow-hidden rounded-2xl mb-10 glass p-8 md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cc2222]/5 via-[#1a4fa0]/5 to-[#d97706]/5" />
        <div className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              Eleições 2026
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed max-w-lg">
              Acompanhe os presidenciáveis 2026 — perfis completos com dados pessoais, carreira, planos de governo, escândalos, financiamento e posicionamento político de cada candidato à Presidência da República.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-scale-in">
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
