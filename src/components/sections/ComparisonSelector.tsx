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
    <div className="glass p-4">
      <p className="text-sm font-medium text-gray-500 mb-3">Selecione candidatos para comparar (mín. 2):</p>
      <div className="flex gap-3 flex-wrap">
        {candidates.map((c) => {
          const selected = selectedIds.includes(c.id)
          return (
            <button
              key={c.id}
              onClick={() => onToggle(c.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${selected
                ? 'text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 bg-gray-100/50 dark:bg-gray-800/50'
                }`}
              style={selected ? { backgroundColor: c.party.color } : undefined}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                <img src={c.photo} alt="" className="w-full h-full object-cover"
                  onError={hideImageOnError} />
              </div>
              {c.name.value}
              {selected && <X size={12} />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
