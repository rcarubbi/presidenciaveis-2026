'use client'

import { useState } from 'react'
import type { Candidate } from '../../types'
import { mediaData } from '../../data/media'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { MediaCard } from '../MediaCard'

interface MidiaProps {
  candidates: Candidate[]
}

export function Midia({ candidates }: MidiaProps) {
  const candidate = candidates[0]
  const categories = mediaData[candidate.id]
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    categories?.[0]?.id ?? null
  )

  if (!categories || categories.length === 0) {
    return (
      <div className="glass p-10 text-center">
        <p className="text-sm text-gray-400">Nenhum vídeo disponível para este candidato</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {categories.map((cat) => {
        const isOpen = expandedCategory === cat.id
        return (
          <div key={cat.id} className="glass overflow-hidden">
            <button
              onClick={() => setExpandedCategory(isOpen ? '' : cat.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200"
              aria-expanded={isOpen}
            >
              <span>{cat.label}</span>
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-2 border-t border-gray-200/40 dark:border-gray-700/30 grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <MediaCard key={i} item={item} />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}


