'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { Candidate } from '../../types'
import { ArrowUpRight, GitCompare, Check } from 'lucide-react'
import { Spinner } from '../ui/Spinner'
import { DataLink } from '../DataLink'

interface VisaoGeralProps {
  candidates: Candidate[]
}

function photoPos(c: Candidate): string {
  return c.id === 'renan' ? 'center' : 'center top'
}

function CandidateCard({
  candidate,
  cardLoading,
  isCompareSelected,
  onCardClick,
  onCompareClick,
}: {
  candidate: Candidate
  cardLoading: boolean
  isCompareSelected: boolean
  onCardClick: (id: string) => void
  onCompareClick: (id: string, e: React.MouseEvent) => void
}) {
  const c = candidate
  const [logoLoaded, setLogoLoaded] = useState(false)
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (logoRef.current?.complete) setLogoLoaded(true)
  }, [])

  return (
    <div
      onClick={() => onCardClick(c.id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCardClick(c.id) } }}
      role="button"
      tabIndex={0}
      className={`w-full overflow-hidden rounded-xl text-left group cursor-pointer p-0 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:outline-none relative overflow-hidden ${isCompareSelected ? 'ring-2 ring-gray-400 dark:ring-gray-500' : ''}`}
    >
      <div className="aspect-[3/4] grid grid-cols-1 grid-rows-1 overflow-hidden" style={{ backgroundColor: c.party.color }}>
        <div
          className="col-span-full row-span-full transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(${c.photo})`,
            backgroundSize: 'cover',
            backgroundPosition: photoPos(c),
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="col-span-full row-span-full relative z-10"
          style={{
            background: `linear-gradient(to top, ${c.party.color}cc 0%, ${c.party.color}88 40%, transparent 70%)`,
          }}
        />
        <div className="col-span-full row-span-full relative z-10 flex flex-col justify-end p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative h-10 w-auto min-w-[40px] flex items-center justify-center">
              {!logoLoaded && <Spinner size={18} className="text-white/60 absolute" />}
              <img ref={logoRef} src={c.party.logo} alt={c.party.name.value}
                className="h-10 object-contain"
                onLoad={() => setLogoLoaded(true)}
                onError={(e) => { setLogoLoaded(true); (e.target as HTMLImageElement).style.display = 'none' }} />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-sm">
              {c.party.name.value} — {c.party.number}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white drop-shadow-lg"><DataLink data={c.name} /></h2>
          <p className="text-sm text-white/80 mt-1 drop-shadow"><DataLink data={c.currentPosition} /></p>
          <div className="flex gap-2 mt-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
              {c.age.value} anos
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
              {c.careerYears.value} anos pol.
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
              <DataLink data={c.patrimonio} format={(v) => (v as number) >= 1_000_000 ? `R$ ${((v as number) / 1_000_000).toFixed(1)} mi` : `R$ ${((v as number) / 1000).toFixed(0)} mil`} />
            </span>
          </div>
        </div>
      </div>
      {cardLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/30 rounded-xl">
          <Spinner size={28} className="text-white" />
        </div>
      )}
      <div className="p-4 relative z-10 bg-white dark:bg-gray-950 rounded-b-xl">
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Ideologia:</span>{' '}
            <DataLink data={c.ideologicalPosition} />
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Religião:</span>{' '}
            <DataLink data={c.religiao} />
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Natural:</span>{' '}
            <DataLink data={c.naturalidade} />
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-3">
          <button
            onClick={(e) => onCompareClick(c.id, e)}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${isCompareSelected
                ? 'bg-gray-800 dark:bg-white text-white dark:text-gray-900'
                : 'bg-gray-200/70 dark:bg-gray-700/70 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            aria-label={`Comparar ${c.name.value}`}
            title="Comparar"
          >
            {isCompareSelected ? <Check size={20} strokeWidth={2.5} /> : <GitCompare size={20} strokeWidth={2} />}
          </button>
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 group-hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: c.party.color }}
          >
            <ArrowUpRight size={22} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  )
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
