'use client'

import type { Candidate } from '../../types'
import { useState } from 'react'
import { useProposalSearch } from '../../hooks/useProposalSearch'
import { ProposalSearchBar } from './ProposalSearchBar'
import { ProposalSearchResults } from './ProposalSearchResults'
import { ProposalAccordion } from './ProposalAccordion'

interface PlanoGovernoProps {
  candidates: Candidate[]
}

export function PlanoGoverno({ candidates }: PlanoGovernoProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const { search, setSearch, searchResults, totalResults } = useProposalSearch(candidates)

  return (
    <div className="space-y-6">
      <ProposalSearchBar value={search} onChange={setSearch} />

      {search ? (
        searchResults && searchResults.length > 0 ? (
          <ProposalSearchResults results={searchResults} totalResults={totalResults} searchQuery={search} showName={candidates.length > 1} />
        ) : (
          <div className="glass p-10 text-center">
            <p className="text-sm text-gray-400">Nenhuma proposta encontrada para &ldquo;{search}&rdquo;</p>
          </div>
        )
      ) : (
        <ProposalAccordion candidates={candidates} expandedSection={expandedSection} onToggle={(id) => setExpandedSection(expandedSection === id ? null : id)} />
      )}
    </div>
  )
}
