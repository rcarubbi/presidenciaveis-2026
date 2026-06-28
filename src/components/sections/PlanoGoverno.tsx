'use client'

import type { Candidate, ProposalItem } from '../../types'
import { DataLink } from '../DataLink'
import { proposalSections } from '../../data/proposals'
import { useState, useMemo } from 'react'
import { ChevronDown, ChevronRight, Search, X } from 'lucide-react'

interface PlanoGovernoProps {
  candidates: Candidate[]
}

export function PlanoGoverno({ candidates }: PlanoGovernoProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
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

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar propostas..."
          className="w-full pl-9 pr-8 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {search ? (
        searchResults && searchResults.length > 0 ? (
          <div className="space-y-2">
            <p className="text-xs text-gray-400">{totalResults} proposta{totalResults !== 1 ? 's' : ''} encontrada{totalResults !== 1 ? 's' : ''}</p>
            {searchResults.map(({ sec, matches }) => (
              <div key={sec.id} className="glass overflow-hidden">
                <div className="px-5 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200/40 dark:border-gray-700/30">
                  {sec.label}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-5 py-3">
                  {matches.map(({ c, items }) => (
                    <div key={c.id}>
                      <p className="text-sm font-bold mb-2" style={{ color: c.party.color }}>
                        <DataLink data={c.name} />
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
        ) : (
          <div className="glass p-10 text-center">
            <p className="text-sm text-gray-400">Nenhuma proposta encontrada para &ldquo;{search}&rdquo;</p>
          </div>
        )
      ) : (
        <div className="space-y-2">
          {proposalSections.map((sec) => {
            const isOpen = expandedSection === sec.id
            const hasAll = sec.lula.length > 0 || sec.flavio.length > 0 || sec.renan.length > 0
            if (!hasAll) return null

            return (
              <div key={sec.id} className="glass overflow-hidden">
                <button
                  onClick={() => setExpandedSection(isOpen ? null : sec.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200"
                  aria-expanded={isOpen}
                >
                  <span>{sec.label}</span>
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {isOpen && (
                  <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 px-5 pb-5 pt-2 border-t border-gray-200/40 dark:border-gray-700/30">
                    {candidates.map((c) => {
                      const items = sec[c.id as keyof typeof sec] as ProposalItem[]
                      return (
                        <div key={c.id}>
                          <p className="text-sm font-bold mb-3" style={{ color: c.party.color }}><DataLink data={c.name} /></p>
                          {items.length === 0 ? (
                            <p className="text-sm text-gray-400 italic">Nenhuma proposta específica</p>
                          ) : (
                            <ul className="space-y-2">
                              {items.map((item, i) => (
                                <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.party.color }} />
                                    <DataLink data={item.text} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
