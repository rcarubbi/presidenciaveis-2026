'use client'

import type { Candidate, ProposalItem } from '../../types'
import { DataLink } from '../DataLink'
import { ProgressBar } from '../charts/ProgressBar'
import { proposalSections } from '../../data/proposals'
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface PlanoGovernoProps {
  candidates: Candidate[]
}

export function PlanoGoverno({ candidates }: PlanoGovernoProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {candidates.map((c) => (
          <div key={c.id} className="glass p-5">
            <p className="text-sm font-medium text-gray-500 mb-3">Cobertura do Plano</p>
            <ProgressBar
              value={c.proposalsCoverage.value}
              max={12}
              label="Seções com propostas"
              color={c.party.color}
            />
          </div>
        ))}
      </div>

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
    </div>
  )
}
