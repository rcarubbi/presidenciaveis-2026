'use client'

import { Search, X } from 'lucide-react'

interface ProposalSearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function ProposalSearchBar({ value, onChange }: ProposalSearchBarProps) {
  return (
    <div className="relative">
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar propostas..."
        className="w-full pl-9 pr-8 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}
