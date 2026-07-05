'use client'

import type { Candidate, ProposalItem, ProposalSection } from '../../types'
import { useProposalSearch } from '../../hooks/useProposalSearch'
import { FileText, Shield, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { ProposalSearchBar } from './ProposalSearchBar'
import { ProposalSearchResults } from './ProposalSearchResults'
import { ProposalCards } from './ProposalCards'
import { CandidateNameHeading } from '../ui/CandidateNameHeading'
import { DataLink } from '../DataLink'
import { proposalSections } from '@/data'
import { sectionIcons } from '@/lib/sectionIcons'

interface PlanoGovernoProps {
  candidates: Candidate[]
}

export function PlanoGoverno({ candidates }: PlanoGovernoProps) {
  const { search, setSearch, searchResults, totalResults } = useProposalSearch(candidates)

  return (
    <div className="space-y-6">
      <CandidateNameHeading candidates={candidates} icon={FileText} title="PLANO DE GOVERNO" />
      <ProposalSearchBar value={search} onChange={setSearch} />

      {search ? (
        searchResults && searchResults.length > 0 ? (
          <ProposalSearchResults results={searchResults} totalResults={totalResults} searchQuery={search} />
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

function SingleCandidateProposals({ section, candidate }: { section: ProposalSection; candidate: Candidate }) {
  const items = section[candidate.id as keyof typeof section] as ProposalItem[] | undefined
  if (!items?.length) return null

  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: candidate.party.color }} />
          <DataLink data={item.text} />
        </li>
      ))}
    </ul>
  )
}

export function PlanoGovernoCell({ candidate }: { candidate: Candidate }) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const hasAny = proposalSections.some((sec) => {
    const items = sec[candidate.id as keyof typeof sec] as ProposalItem[] | undefined
    return items?.length && items.length > 0
  })

  if (!hasAny) {
    return <p className="text-sm text-gray-400">Nenhuma proposta registrada</p>
  }

  return (
    <div className="flex flex-wrap gap-3">
      {proposalSections.map((sec) => {
        const Icon = sectionIcons[sec.id] ?? Shield
        const items = sec[candidate.id as keyof typeof sec] as ProposalItem[] | undefined
        if (!items?.length) return null
        const isOpen = openSections.has(sec.id)

        return (
          <div key={sec.id} className="min-w-0" style={{ flex: '1 1 calc(50% - 6px)' }}>
            <div className="bento-card overflow-hidden transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
              <button
                onClick={() => toggle(sec.id)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors duration-200 hover:bg-white/40 dark:hover:bg-gray-800/40"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon size={18} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{sec.label}</span>
                </div>
                <ChevronDown size={16} className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="border-t border-gray-200/40 dark:border-gray-700/30 px-4 py-3">
                  <SingleCandidateProposals section={sec} candidate={candidate} />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
