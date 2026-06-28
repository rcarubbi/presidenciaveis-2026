'use client'

import type { Candidate } from '../types'
import { Spinner } from './ui/Spinner'
import { DataLink } from './DataLink'
import { CandidateLabels } from './CandidateLabels'
import { ArrowUpRight, GitCompare, Check } from 'lucide-react'

export function CandidateCard({
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

  return (
    <div
      onClick={() => onCardClick(c.id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCardClick(c.id) } }}
      role="button"
      tabIndex={0}
      className={`w-full rounded-2xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/30 dark:border-gray-700/40 group cursor-pointer relative text-left focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:outline-none hover-lift ${isCompareSelected ? 'ring-2 ring-gray-400 dark:ring-gray-500' : ''}`}
    >
      <div className="aspect-[3/4] relative overflow-hidden" style={{ backgroundColor: c.party.color }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(${c.photo})`,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${c.party.color} 0%, ${c.party.color}88 40%, transparent 70%)`,
          }}
        />
        <div className="absolute top-5 left-5 z-20">
          <img src={c.party.logo} alt={c.party.name.value} className="h-10 object-contain drop-shadow-lg" />
        </div>
        <span className="absolute top-5 right-5 z-20 px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-sm">
          {c.party.number}
        </span>
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg"><DataLink data={c.name} /></h2>
          <p className="text-sm text-white/80 mt-1 drop-shadow"><DataLink data={c.currentPosition} /></p>
          <CandidateLabels age={c.age} careerYears={c.careerYears} />

          <div className="mt-3 flex flex-col gap-1 text-xs text-white/70">
            <span>Ideologia: <DataLink data={c.ideologicalPosition} /></span>
            <span>Natural: <DataLink data={c.naturalidade} /></span>
          </div>

          <div className="mt-3 flex justify-center gap-3">
            <button
              onClick={(e) => onCompareClick(c.id, e)}
              className={`flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${isCompareSelected
                ? 'bg-white/80 text-gray-900'
                : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-label={`Comparar ${c.name.value}`}
              title="Comparar"
            >
              {isCompareSelected ? <Check size={18} strokeWidth={2.5} /> : <GitCompare size={18} strokeWidth={2} />}
            </button>
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${c.party.color}cc` }}
            >
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
      {cardLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/30">
          <Spinner size={28} className="text-white" />
        </div>
      )}
    </div>
  )
}
