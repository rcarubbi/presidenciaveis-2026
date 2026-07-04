'use client'

import type { Candidate, ProposalItem } from '../../types'
import { DataLink } from '../DataLink'

interface ProposalItemsListProps {
  section: { id: string; label: string; lula: ProposalItem[]; flavio: ProposalItem[]; renan: ProposalItem[]; caiado: ProposalItem[]; zema: ProposalItem[] }
  candidates: Candidate[]
}

export function ProposalItemsList({ section, candidates }: ProposalItemsListProps) {
  if (candidates.length === 1) {
    return <SingleCandidateItems section={section} candidate={candidates[0]} />
  }
  return <MultiCandidateItems section={section} candidates={candidates} />
}

function SingleCandidateItems({
  section,
  candidate,
}: {
  section: { id: string; label: string; lula: ProposalItem[]; flavio: ProposalItem[]; renan: ProposalItem[]; caiado: ProposalItem[]; zema: ProposalItem[] }
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
  section: { id: string; label: string; lula: ProposalItem[]; flavio: ProposalItem[]; renan: ProposalItem[]; caiado: ProposalItem[]; zema: ProposalItem[] }
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
