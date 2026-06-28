'use client'

import type { Candidate } from '../types'
import { Spinner } from './ui/Spinner'
import { DataLink } from './DataLink'
import { PartyInfo } from './PartyInfo'
import { CandidateLabels } from './CandidateLabels'
import { CandidateCardFooter } from './CandidateCardFooter'

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
      className={`w-full overflow-hidden rounded-xl text-left group cursor-pointer p-0 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:outline-none relative overflow-hidden ${isCompareSelected ? 'ring-2 ring-gray-400 dark:ring-gray-500' : ''}`}
    >
      <div className="aspect-[3/4] grid grid-cols-1 grid-rows-1 overflow-hidden" style={{ backgroundColor: c.party.color }}>
        <div
          className="col-span-full row-span-full transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(${c.photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
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
          <PartyInfo
            logo={c.party.logo}
            logoAlt={c.party.name.value}
            partyName={c.party.name.value}
            partyNumber={c.party.number}
          />
          <h2 className="text-2xl font-bold text-white drop-shadow-lg"><DataLink data={c.name} /></h2>
          <p className="text-sm text-white/80 mt-1 drop-shadow"><DataLink data={c.currentPosition} /></p>
          <CandidateLabels age={c.age} careerYears={c.careerYears} patrimonio={c.patrimonio} />
        </div>
      </div>
      {cardLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/30 rounded-xl">
          <Spinner size={28} className="text-white" />
        </div>
      )}
      <CandidateCardFooter candidate={c} isCompareSelected={isCompareSelected} onCompareClick={onCompareClick} />
    </div>
  )
}
