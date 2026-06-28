import { useState, useMemo } from 'react'
import type { Candidate, ProposalItem } from '../types'
import { proposalSections } from '../data/proposals'

export function useProposalSearch(candidates: Candidate[]) {
  const [search, setSearch] = useState('')
  const q = search.toLowerCase().trim()

  const searchResults = useMemo(() => {
    if (!q) return null
    return proposalSections
      .map((sec) => {
        const matches = candidates
          .map((c) => {
            const items = sec[c.id as keyof typeof sec] as ProposalItem[]
            const filtered = items.filter((item) =>
              item.text.value.toLowerCase().includes(q),
            )
            return { c, items: filtered }
          })
          .filter((m) => m.items.length > 0)
        if (matches.length === 0) return null
        return { sec, matches }
      })
      .filter(Boolean) as {
      sec: (typeof proposalSections)[number]
      matches: { c: Candidate; items: ProposalItem[] }[]
    }[]
  }, [q, candidates])

  const totalResults = searchResults
    ? searchResults.reduce((a, s) => a + s.matches.reduce((b, m) => b + m.items.length, 0), 0)
    : 0

  return { search, setSearch, searchResults, totalResults }
}
