'use client'

import { useState, useMemo } from 'react'
import type { Candidate, MediaItem } from '../../types'
import { mediaData } from '@/data'
import { ChevronDown, Video } from 'lucide-react'
import { MediaCard } from '../MediaCard'
import { CandidateNameHeading } from '../ui/CandidateNameHeading'

interface MidiaProps {
  candidates: Candidate[]
}

interface DateGroup {
  id: string
  label: string
  iso: string
  items: MediaItem[]
}

function buildDateGroups(candidateId: string): DateGroup[] {
  const cats = mediaData[candidateId]
  if (!cats) return []

  return cats.map((cat) => ({
    id: cat.id,
    label: cat.label,
    iso: cat.id,
    items: cat.items,
  }))
}

export function Midia({ candidates }: MidiaProps) {
  const candidate = candidates[0]

  const groups = useMemo(() => buildDateGroups(candidate.id), [candidate.id])

  const [expanded, setExpanded] = useState<string | null>(
    groups[0]?.id ?? null
  )

  if (groups.length === 0) {
    return (
      <div className="bento-card p-10 text-center">
        <p className="text-sm text-slate-400">Nenhum vídeo disponível para este candidato</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <CandidateNameHeading candidates={candidates} icon={Video} title={`${candidate.name.value} NA MÍDIA`} />
      <div className="space-y-3">
      {groups.map((group) => {
        const isOpen = expanded === group.id
        return (
          <div key={group.id} className="bento-card overflow-hidden">
            <button
              onClick={() => setExpanded(isOpen ? null : group.id)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors duration-200 hover:bg-blue-50/50 dark:hover:bg-slate-800/50"
              aria-expanded={isOpen}
            >
              <div className="flex min-w-0 items-baseline gap-3">
                <span className="text-sm font-black tracking-tight text-slate-800 dark:text-slate-200">
                  {group.label}
                </span>
                <span className="shrink-0 rounded-full border border-blue-100/80 px-2 py-0.5 text-[11px] font-bold text-slate-400 dark:border-blue-900/50 dark:text-slate-500">
                  {group.items.length} vídeo{group.items.length > 1 ? 's' : ''}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 gap-3 border-t border-blue-100/70 px-3 pb-5 pt-4 sm:grid-cols-[repeat(auto-fill,minmax(400px,480px))] dark:border-blue-900/40">
                  {group.items.map((item, i) => (
                    <MediaCard key={i} item={item} color={candidate.party.color} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}
