'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import type { MediaItem } from '../types'
import { Play, X } from 'lucide-react'

interface MediaCardProps {
  item: MediaItem
}

export function MediaCard({ item }: MediaCardProps) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  const open = useCallback(() => {
    setMounted(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
  }, [])

  const close = useCallback(() => {
    setVisible(false)
    setTimeout(() => setMounted(false), 250)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.body.style.overflow = 'hidden'
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', esc)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', esc)
    }
  }, [mounted, close])

  return (
    <>
      <button
        onClick={open}
        className="group relative flex flex-col rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800/60 hover:ring-2 hover:ring-gray-400/40 transition-all duration-200 text-left aspect-[3/2] max-w-[480px] place-self-center"
      >
        <div className="flex-1 relative overflow-hidden">
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
        <div className="p-2.5">
          <h3 className="text-xs font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
            {item.title.value}
          </h3>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
            {item.description.value}
          </p>
        </div>
      </button>

      {mounted && createPortal(
        <div
          className={`fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm transition-all duration-250 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div className={`relative w-[95vw] sm:w-[90vw] max-w-5xl max-h-[85vh] transition-all duration-250 ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <button
              onClick={close}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
