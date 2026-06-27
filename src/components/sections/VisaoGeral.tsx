import type { Candidate } from '../../types'
import { ArrowUpRight, GitCompare } from 'lucide-react'

interface VisaoGeralProps {
  candidates: Candidate[]
  onSelectCandidate: (id: string) => void
  compareTargets: string[]
  onCompareFromCard: (id: string) => void
}

function fmtPat(v: number | null): string {
  if (v === null) return 'N/D'
  if (v >= 1_000_000) return `R$ ${(v / 1_000_000).toFixed(1)} mi`
  return `R$ ${(v / 1000).toFixed(0)} mil`
}

function photoPos(c: Candidate): string {
  return c.id === 'renan' ? 'center' : 'center top'
}

function CandidateCard({ candidate, onSelect, onCompare, isCompareTarget }: {
  candidate: Candidate
  onSelect: (id: string) => void
  onCompare: (id: string) => void
  isCompareTarget: boolean
}) {
  const c = candidate
  return (
    <div
      onClick={() => onSelect(c.id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(c.id) } }}
      role="button"
      tabIndex={0}
      className={`w-full overflow-hidden rounded-xl text-left group cursor-pointer p-0 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:outline-none ${isCompareTarget ? 'ring-2 ring-gray-400 dark:ring-gray-500' : ''}`}
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
            <img src={c.party.logo} alt={c.party.name} className="h-10 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-sm">
              {c.party.name} — {c.party.number}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">{c.fullName}</h2>
          <p className="text-sm text-white/80 mt-1 drop-shadow">{c.currentPosition}</p>
          <div className="flex gap-2 mt-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
              {c.age} anos
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
              {c.careerYears} anos pol.
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-sm">
              {fmtPat(c.patrimonio)}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 relative z-10 bg-white dark:bg-gray-950 rounded-b-xl">
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Ideologia:</span>{' '}
            {c.ideologicalPosition}
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Propostas:</span>{' '}
            {c.proposalsCoverage}/12
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Religião:</span>{' '}
            {c.religiao}
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Natural:</span>{' '}
            {c.naturalidade}
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-3">
          <button
            onClick={(e) => { e.stopPropagation(); onCompare(c.id) }}
            className={`no-print flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
              isCompareTarget
                ? 'bg-gray-800 dark:bg-white text-white dark:text-gray-900 shadow-md'
                : 'bg-gray-200/70 dark:bg-gray-700/70 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-label={`Comparar ${c.name}`}
            title="Comparar"
          >
            <GitCompare size={20} strokeWidth={2} />
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

export function VisaoGeral({ candidates, onSelectCandidate, compareTargets, onCompareFromCard }: VisaoGeralProps) {
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
        <CandidateCard key={c.id} candidate={c} onSelect={onSelectCandidate} onCompare={onCompareFromCard} isCompareTarget={compareTargets.includes(c.id)} />
      ))}
    </div>
  )
}
