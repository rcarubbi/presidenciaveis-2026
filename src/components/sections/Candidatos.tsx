'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Candidate } from '../../types'
import { CandidateCard } from '../CandidateCard'
import { GitCompare } from 'lucide-react'

interface CandidatosProps {
  candidates: Candidate[]
}

export function Candidatos({ candidates }: CandidatosProps) {
  const router = useRouter()
  const [cardLoading, setCardLoading] = useState<string | null>(null)
  const [compareSelection, setCompareSelection] = useState<string[]>([])

  const handleCardClick = (id: string) => {
    setCardLoading(id)
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
      <div className="bento-card p-10 text-center">
        <p className="text-gray-500 text-lg">Nenhum candidato disponível</p>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <section className="bento-panel overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <span className="civic-chip mb-4 w-fit">Eleições 2026</span>
            <h1 className="text-[clamp(1.75rem,5vw,3.25rem)] font-black tracking-tight text-slate-950 dark:text-white leading-[1.08]">
              Presidenciáveis{' '}
              <span className="bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-amber-400">2026</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Perfis completos com dados pessoais, carreira, planos de governo, escândalos, financiamento e posicionamento político de cada candidato à Presidência da República.
            </p>
          </div>
          <Link
            href="/comparar"
            className="civic-button shrink-0"
          >
            <GitCompare size={16} />
            Comparar candidatos
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fit,minmax(290px,1fr))] md:gap-8 animate-scale-in">
        {candidates.map((c) => (
          <CandidateCard
            key={c.id}
            candidate={c}
            cardLoading={cardLoading === c.id}
            isCompareSelected={compareSelection.includes(c.id)}
            onCardClick={handleCardClick}
            onCompareClick={handleCompareClick}
          >
            <CandidateCard.Photo>
              <CandidateCard.PartyBadge />
              <CandidateCard.Info />
            </CandidateCard.Photo>
          </CandidateCard>
        ))}
      </div>
    </div>
  )
}
