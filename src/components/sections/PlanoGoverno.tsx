'use client'

import type { Candidate } from '../../types'
import { useProposalSearch } from '../../hooks/useProposalSearch'
import { FileText } from 'lucide-react'
import { ProposalSearchBar } from './ProposalSearchBar'
import { ProposalSearchResults } from './ProposalSearchResults'
import { ProposalCards } from './ProposalCards'

interface PlanoGovernoProps {
  candidates: Candidate[]
}

export function PlanoGoverno({ candidates }: PlanoGovernoProps) {
  const { search, setSearch, searchResults, totalResults } = useProposalSearch(candidates)

  return (
    <div className="space-y-6">
      <div
        className={`flex items-center gap-2 ${candidates.length > 1 ? 'text-gray-700 dark:text-gray-300' : ''}`}
        style={candidates.length === 1 ? { color: candidates[0].party.color } : undefined}
      >
        <FileText className="size-4" />
        <h3 className="text-sm font-black uppercase tracking-[0.12em]">PLANO DE GOVERNO</h3>
      </div>
      <ProposalSearchBar value={search} onChange={setSearch} />

      {search ? (
        searchResults && searchResults.length > 0 ? (
          <ProposalSearchResults results={searchResults} totalResults={totalResults} searchQuery={search} showName={candidates.length > 1} />
        ) : (
          <div className="bento-card p-10 text-center">
            <p className="text-sm text-gray-400">Nenhuma proposta encontrada para &ldquo;{search}&rdquo;</p>
          </div>
        )
      ) : (
        <ProposalCards candidates={candidates} />
      )}
    </div>
  )
}
