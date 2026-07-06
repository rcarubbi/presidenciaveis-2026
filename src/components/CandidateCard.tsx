'use client'

import { createContext, useContext } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Candidate } from '../types'
import { Spinner } from './ui/Spinner'
import { CandidateLabels } from './CandidateLabels'
import { ArrowUpRight, GitCompare, Check, Video } from 'lucide-react'

interface CandidateCardContext {
  candidate: Candidate
  isCompareSelected: boolean
  onCardClick: (id: string) => void
  onCompareClick: (id: string, e: React.MouseEvent) => void
}

const CardCtx = createContext<CandidateCardContext | null>(null)

function useCardCtx() {
  const ctx = useContext(CardCtx)
  if (!ctx) throw new Error('CandidateCard sub-components must be used within CandidateCard')
  return ctx
}

interface CandidateCardRootProps {
  candidate: Candidate
  cardLoading: boolean
  isCompareSelected: boolean
  onCardClick: (id: string) => void
  onCompareClick: (id: string, e: React.MouseEvent) => void
  children: React.ReactNode
}

export function CandidateCard({
  candidate: c,
  cardLoading,
  isCompareSelected,
  onCardClick,
  onCompareClick,
  children,
}: CandidateCardRootProps) {
  return (
    <CardCtx.Provider value={{ candidate: c, isCompareSelected, onCardClick, onCompareClick }}>
      <Link
        href={`/candidato/${c.id}`}
        prefetch
        transitionTypes={['nav-forward']}
        onClick={() => onCardClick(c.id)}
        className={`bento-card group block w-full cursor-pointer overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover-lift ${isCompareSelected ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
      >
        {children}
        {cardLoading && <CandidateCard.LoadingOverlay />}
      </Link>
    </CardCtx.Provider>
  )
}

function Photo({ children }: { children: React.ReactNode }) {
  const { candidate: c } = useCardCtx()
  return (
    <div className="relative overflow-hidden rounded-[1.75rem]" style={{ backgroundColor: c.party.color }}>
      <div className="aspect-3/4">
        <Image
          fill
          src={c.photo}
          alt={c.fullName.value}
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: c.photoPos ?? 'center top' }}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${c.party.color} 0%, ${c.party.color}cc 35%, ${c.party.color}55 65%, transparent 85%)`,
          }}
        />
      </div>
      {children}
    </div>
  )
}

function PartyBadge() {
  const { candidate: c } = useCardCtx()
  return (
    <>
      <div className="absolute left-5 top-5 z-20">
        <Image src={c.party.logo} alt={c.party.name.value} width={80} height={36} className="w-14 object-contain drop-shadow-lg sm:w-20" unoptimized />
      </div>
      <span className="absolute right-3 top-3 z-10 text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none text-white/15 select-none pointer-events-none">
        {c.party.number}
      </span>
    </>
  )
}

function Info() {
  const { candidate: c } = useCardCtx()
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-5">
      <div className="rounded-2xl bg-gradient-to-t from-black/75 via-black/45 to-transparent p-4 pt-8">
        <h2 className="text-lg font-black text-white drop-shadow-sm sm:text-2xl">{c.name.value}</h2>
        <p className="text-xs font-medium leading-tight text-white/85 sm:text-sm">{c.currentPosition.value}</p>
        <CandidateLabels age={c.age} careerYears={c.careerYears} />
        <div className="mt-3 flex items-center gap-4 text-[10px] text-white/70 sm:text-xs">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-white/40" />
            {c.ideologicalPosition.value}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-white/40" />
            {c.naturalidade.value}
          </span>
        </div>
        <div className="mt-4 flex gap-2.5">
          <CompareButton />
          <MediaButton />
          <ArrowButton />
        </div>
      </div>
    </div>
  )
}

function CompareButton() {
  const { candidate: c, isCompareSelected, onCompareClick } = useCardCtx()
  return (
    <button
      onClick={(e) => { e.preventDefault(); onCompareClick(c.id, e) }}
      className={`flex min-h-11 min-w-11 items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${isCompareSelected
        ? 'bg-white text-slate-950 shadow-md'
        : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/35'
        }`}
      aria-label={`Comparar ${c.name.value}`}
    >
      {isCompareSelected ? <Check size={18} /> : <GitCompare size={18} />}
    </button>
  )
}

function ArrowButton() {
  const { candidate: c } = useCardCtx()
  return (
    <div
      className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-white shadow-sm transition-all duration-200 group-hover:scale-105"
      style={{ backgroundColor: c.party.color }}
      aria-hidden="true"
    >
      <ArrowUpRight size={18} />
    </div>
  )
}

function MediaButton() {
  const { candidate: c } = useCardCtx()
  const router = useRouter()
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        router.push(`/candidato/${c.id}?tab=midia`)
      }}
      className="flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label={`Mídia de ${c.name.value}`}
    >
      <Video size={18} />
    </button>
  )
}

function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/30">
      <Spinner size={28} className="text-white" />
    </div>
  )
}

CandidateCard.Photo = Photo as React.FC<{ children: React.ReactNode }>
CandidateCard.PartyBadge = PartyBadge as React.FC
CandidateCard.Info = Info as React.FC
CandidateCard.LoadingOverlay = LoadingOverlay as React.FC
