'use client'

import type { Candidate, ProposalItem } from '../../types'
import { DataLink } from '../DataLink'
import { proposalSections } from '@/data'
import { sectionIcons } from '@/lib/sectionIcons'
import { Shield, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface ProposalCardsProps {
  candidates: Candidate[]
}

export function ProposalCards({ candidates }: ProposalCardsProps) {
  const isSingle = candidates.length === 1

  return (
    <div className="flex flex-wrap gap-3">
      {proposalSections.map((sec) => {
        const hasAny = candidates.some((c) => ((sec[c.id as keyof typeof sec] as ProposalItem[])?.length ?? 0) > 0)
        if (!hasAny) return null

        return (
          <div
            key={sec.id}
            className="min-w-0"
            style={{ flex: isSingle ? '1 1 calc(50% - 6px)' : '1 1 100%' }}
          >
            <ProposalCard section={sec} candidates={candidates} />
          </div>
        )
      })}
    </div>
  )
}

interface ProposalCardProps {
  section: (typeof proposalSections)[number]
  candidates: Candidate[]
}

function ProposalCard({ section, candidates }: ProposalCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = sectionIcons[section.id] ?? Shield

  return (
    <div className="bento-card overflow-hidden transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors duration-200 hover:bg-white/40 dark:hover:bg-gray-800/40"
      >
        <div className="flex items-center gap-3 min-w-0">
          <Icon size={18} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {section.label}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-gray-200/40 dark:border-gray-700/30 px-4 py-3">
          {candidates.length === 1 ? (
            <SingleCandidateItems section={section} candidate={candidates[0]} />
          ) : (
            <MultiCandidateItems section={section} candidates={candidates} />
          )}
        </div>
      </div>
    </div>
  )
}

function SingleCandidateItems({
  section,
  candidate,
}: {
  section: (typeof proposalSections)[number]
  candidate: Candidate
}) {
  const items = section[candidate.id as keyof typeof section] as ProposalItem[] | undefined
  if (!items?.length) return null

  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
          <span
            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: candidate.party.color }}
          />
          <DataLink data={item.text} />
        </li>
      ))}
    </ul>
  )
}

function MultiCandidateItems({
  section,
  candidates,
}: {
  section: (typeof proposalSections)[number]
  candidates: Candidate[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {candidates.map((c) => {
        const items = section[c.id as keyof typeof section] as ProposalItem[] | undefined
        if (!items?.length) return null

        return (
          <div key={c.id}>
            <p className="text-sm font-bold mb-2" style={{ color: c.party.color }}>
              <DataLink data={c.name} />
            </p>
            <ul className="space-y-1.5">
              {items.map((item, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: c.party.color }}
                  />
                  <DataLink data={item.text} />
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
