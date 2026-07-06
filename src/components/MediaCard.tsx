'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { MediaItem } from '../types'
import { Play, X, Check } from 'lucide-react'
import { getVideoProgress, saveVideoProgress } from '@/lib/videoProgress'
import type { VideoProgress } from '@/lib/videoProgress'

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void
    YT?: {
      Player: {
        new(
          elementId: string | HTMLElement,
          opts: {
            host?: string
            videoId?: string
            height?: string | number
            width?: string | number
            playerVars?: Record<string, string | number>
            events?: {
              onReady?: (event: { target: YTPlayer }) => void
              onStateChange?: (event: { data: number }) => void
            }
          }
        ): YTPlayer
      }
      PlayerState: { ENDED: number }
    }
  }
}

interface YTPlayer {
  getCurrentTime(): number
  getDuration(): number
  seekTo(seconds: number, allowSeekAhead: boolean): void
  destroy(): void
}

interface MediaCardProps {
  item: MediaItem
  color: string
}

function loadYouTubeAPI(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window.YT !== 'undefined' && typeof window.YT.Player !== 'undefined') {
      resolve()
      return
    }
    window.onYouTubeIframeAPIReady = resolve
    if (!document.querySelector('script[src*="iframe_api"]')) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }
  })
}

const categoryColors: Record<string, string> = {
  'entrevistas': '#0ea5e9',
  'entrevista': '#0ea5e9',
  'campanha': '#10b981',
  'debates': '#f59e0b',
  'debate': '#f59e0b',
  'podcasts': '#8b5cf6',
  'podcast': '#8b5cf6',
  'opiniao': '#f43f5e',
  'discurso': '#06b6d4',
  'ao-vivo': '#ef4444',
}

function formatCategory(cat: string): string {
  const map: Record<string, string> = {
    'entrevistas': 'Entrevista',
    'campanha': 'Campanha',
    'debates': 'Debate',
    'podcasts': 'Podcast',
    'opiniao': 'Opinião',
    'discurso': 'Discurso',
    'ao-vivo': 'Ao Vivo',
    'entrevista': 'Entrevista',
    'debate': 'Debate',
    'podcast': 'Podcast',
  }
  return map[cat] || cat.charAt(0).toUpperCase() + cat.slice(1)
}

function getCategoryColor(cat: string): string {
  return categoryColors[cat] || '#6b7280'
}

function formatDateBadge(iso: string): string {
  const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  const [, m, d] = iso.split('-')
  return `${parseInt(d)}/${months[parseInt(m) - 1]}`
}

export function MediaCard({ item, color }: MediaCardProps) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const playerRef = useRef<YTPlayer | null>(null)
  const intervalRef = useRef<number | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)

  const [saved, setSaved] = useState<VideoProgress | null>(null)

  useEffect(() => {
    setSaved(getVideoProgress(item.youtubeId))
  }, [item.youtubeId, refreshKey])

  const isWatched = saved !== null && saved.d > 0 && saved.t / saved.d > 0.95
  const totalDuration = saved?.d ?? 0
  const watchPosition = saved?.t ?? 0
  const progressPct = totalDuration > 0 ? Math.min(watchPosition / totalDuration * 100, 100) : 0

  const open = useCallback(() => {
    setMounted(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
  }, [])

  const close = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setMounted(false)
      setRefreshKey((k) => k + 1)
    }, 250)
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

  useEffect(() => {
    if (!visible || !containerRef.current) return

    let destroyed = false

    loadYouTubeAPI().then(() => {
      if (destroyed || !containerRef.current) return

      const YT = window.YT!
      const player = new YT.Player(containerRef.current, {
        host: 'https://www.youtube-nocookie.com',
        videoId: item.youtubeId,
        height: '100%',
        width: '100%',
        playerVars: { autoplay: 1, enablejsapi: 1 },
        events: {
          onReady: () => {
            if (destroyed) return
            const p = getVideoProgress(item.youtubeId)
            if (p && p.t > 0) player.seekTo(p.t, true)

            intervalRef.current = window.setInterval(() => {
              if (destroyed) return
              try {
                const t = player.getCurrentTime()
                const d = player.getDuration()
                if (t > 0) saveVideoProgress(item.youtubeId, { t, d })
              } catch { }
            }, 5000)
          },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.ENDED) {
              const d = player.getDuration()
              if (d > 0) saveVideoProgress(item.youtubeId, { t: d, d })
            }
          },
        },
      })
      playerRef.current = player
    })

    return () => {
      destroyed = true
      clearInterval(intervalRef.current)
      if (playerRef.current) {
        try {
          const t = playerRef.current.getCurrentTime()
          const d = playerRef.current.getDuration()
          if (t > 0) saveVideoProgress(item.youtubeId, { t, d })
        } catch { }
        try { playerRef.current.destroy() } catch { }
        playerRef.current = null
      }
    }
  }, [visible, item.youtubeId, refreshKey])

  return (
    <>
      <button
        onClick={open}
        className="group relative flex flex-col rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800/60 hover:ring-2 hover:ring-gray-400/40 transition-all duration-200 text-left max-w-[480px] place-self-center"
      >
        <div className="aspect-[3/2] relative overflow-hidden">
          <img
            src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
            alt={item.title.value}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 z-10 px-2.5 py-1 rounded-full text-white text-[10px] font-medium shadow-sm backdrop-blur-sm" style={{ backgroundColor: getCategoryColor(item.category) }}>
            {formatCategory(item.category)} · {formatDateBadge(item.title.updatedAt)}
          </div>
          {isWatched && (
            <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-white text-[10px] font-semibold flex items-center gap-1 shadow-sm" style={{ backgroundColor: color }}>
              <Check size={10} /> Visto
            </div>
          )}
          {!isWatched && progressPct > 0 && (
            <>
              <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-white text-[10px] font-semibold flex items-center gap-1 shadow-sm" style={{ backgroundColor: color }}>
                <Play size={10} className="fill-white text-white" /> Assistindo
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/40">
                <div className="h-full" style={{ width: `${progressPct}%`, backgroundColor: color }} />
              </div>
            </>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: color }}>
              <Play size={22} className="text-white ml-0.5" />
            </div>
          </div>
        </div>
        <div className="p-3 min-h-[86px]">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
            {item.title.value}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
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
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
              <div ref={containerRef} className="w-full h-full" />
            </div>
            <button
              onClick={close}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg hover:brightness-125 transition-all duration-200"
              aria-label="Fechar"
              style={{ backgroundColor: color }}
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
