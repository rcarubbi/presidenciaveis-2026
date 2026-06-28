'use client'

import { useState } from 'react'
import type { Candidate, MediaItem } from '../../types'
import { mediaData } from '../../data/media'
import { Play, ChevronDown, ChevronRight } from 'lucide-react'

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

function MediaCard({ item }: { item: MediaItem }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="aspect-video rounded-xl overflow-hidden">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative flex flex-col rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800/60 hover:ring-2 hover:ring-gray-400/40 transition-all duration-200 text-left"
    >
      <div className="relative aspect-video">
        <img
          src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
          alt={item.title.value}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play size={22} className="text-gray-900 ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
          {item.title.value}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
          {item.description.value}
        </p>
      </div>
    </button>
  )
}
