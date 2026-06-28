'use client'

import type { Candidate, ProposalItem } from '../../types'
import { DataLink } from '../DataLink'

interface ProposalSearchResultsProps {
  results: {
    sec: { id: string; label: string }
    matches: { c: Candidate; items: ProposalItem[] }[]
  }[]
  totalResults: number
  searchQuery: string
  showName?: boolean
}

export function ProposalSearchResults({ results, totalResults, searchQuery }: ProposalSearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="glass p-10 text-center">
        <p className="text-sm text-gray-400">Nenhuma proposta encontrada para &ldquo;{searchQuery}&rdquo;</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-400">{totalResults} proposta{totalResults !== 1 ? 's' : ''} encontrada{totalResults !== 1 ? 's' : ''}</p>
      {results.map(({ sec, matches }) => (
        <div key={sec.id} className="glass overflow-hidden">
          <div className="px-5 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200/40 dark:border-gray-700/30">
            {sec.label}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-5 py-3">
            {matches.map(({ c, items }) => (
              <div key={c.id}>
                <p className="text-sm font-bold mb-2" style={{ color: c.party.color }}>
                  {showName && <DataLink data={c.name} />}
                </p>
                <ul className="space-y-1.5">
                  {items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.party.color }} />
                      <DataLink data={item.text} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
