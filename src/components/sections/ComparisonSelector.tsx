'use client'

import type { Candidate } from '../../types'
import { X } from 'lucide-react'
import { hideImageOnError } from '@/lib/dom'

interface ComparisonSelectorProps {
  candidates: Candidate[]
  selectedIds: string[]
  onToggle: (id: string) => void
}

export function ComparisonSelector({ candidates, selectedIds, onToggle }: ComparisonSelectorProps) {
  return (
    <div className="bento-card p-5">
      <p className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-4">Selecione candidatos para comparar (mín. 2):</p>
      <div className="flex gap-3 flex-wrap">
        {candidates.map((c) => {
          const selected = selectedIds.includes(c.id)
          return (
            <button
              key={c.id}
              onClick={() => onToggle(c.id)}
              className={`flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${selected
                ? 'text-white shadow-sm'
                : 'border border-blue-100/80 text-slate-600 hover:bg-blue-50 hover:text-blue-950 dark:border-blue-900/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              style={selected ? { backgroundColor: c.party.color } : undefined}
            >
              <div className="size-6 shrink-0 overflow-hidden rounded-full">
                <img src={c.photo} alt="" className="size-full object-cover"
                  onError={hideImageOnError} />
              </div>
              {c.name.value}
              {selected && <X size={14} />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
