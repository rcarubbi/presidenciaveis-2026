'use client'

import type { Candidate } from '../types'
import { DataLink } from './DataLink'
import { ArrowUpRight, GitCompare, Check } from 'lucide-react'

interface CandidateCardFooterProps {
  candidate: Candidate
  isCompareSelected: boolean
  onCompareClick: (id: string, e: React.MouseEvent) => void
}

export function CandidateCardFooter({ candidate: c, isCompareSelected, onCompareClick }: CandidateCardFooterProps) {
  return (
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
  )
}
