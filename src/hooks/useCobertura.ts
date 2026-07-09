'use client'

import { useState, useEffect } from 'react'
import { SAPIENS_SLUG_MAP } from '@/lib/sapiens/slugs'
import type {
  SapiensCandidateDetail,
  SapiensSentimentSeries,
  SapiensArticle,
} from '@/lib/sapiens/types'

export interface CoberturaData {
  detail: SapiensCandidateDetail
  sentiment: SapiensSentimentSeries | null
  articles: SapiensArticle[]
}

// ---- client cache (module-level, survives re-renders and component unmounts) ----

const CACHE_TTL = 4 * 60 * 1000

interface CacheEntry {
  data: CoberturaData
  timestamp: number
}

const cache = new Map<string, CacheEntry>()

async function fetchCoberturaData(apiSlug: string, signal?: AbortSignal): Promise<CoberturaData> {
  const opts = signal ? { signal } : {}
  const [detailRes, sentimentRes, articlesRes] = await Promise.all([
    fetch(`/api/sapiens/candidates/${apiSlug}`, opts).then((r) => r.json()),
    fetch(`/api/sapiens/candidates/${apiSlug}/sentiment`, opts).then((r) => r.json()),
    fetch(`/api/sapiens/articles?candidate=${apiSlug}&page_size=10`, opts).then((r) => r.json()),
  ])

  if (detailRes.error) throw new Error(detailRes.error)
  if (sentimentRes.error) throw new Error(sentimentRes.error)
  if (articlesRes.error) throw new Error(articlesRes.error)

  return {
    detail: detailRes.data,
    sentiment: sentimentRes.data?.points?.length ? sentimentRes.data : null,
    articles: articlesRes.data ?? [],
  }
}

function getCached(key: string): { data: CoberturaData; fresh: boolean } | null {
  const entry = cache.get(key)
  if (!entry) return null
  return {
    data: entry.data,
    fresh: Date.now() - entry.timestamp < CACHE_TTL,
  }
}

function setCache(key: string, data: CoberturaData) {
  cache.set(key, { data, timestamp: Date.now() })
}

export function useCobertura(candidateId: string) {
  const [data, setData] = useState<CoberturaData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const apiSlug = SAPIENS_SLUG_MAP[candidateId]
    if (!apiSlug) {
      setLoading(false)
      setError('Candidato não encontrado na API de cobertura')
      return
    }

    const controller = new AbortController()
    const key = candidateId
    let cancelled = false

    setError(null)

    const cached = getCached(key)

    if (cached) {
      if (cached.fresh) {
        setData(cached.data)
        setLoading(false)
        return
      }
      setData(cached.data)
      setLoading(true)
    }

    ;(async () => {
      try {
        const result = await fetchCoberturaData(apiSlug, controller.signal)
        setCache(key, result)
        if (!cancelled) {
          setData(result)
          setLoading(false)
          setError(null)
        }
      } catch (err) {
        if ((err as Error).name === 'AbortError') return
        if (!cancelled) {
          if (!cached) {
            setError((err as Error).message)
            setLoading(false)
          } else {
            setLoading(false)
          }
        }
      }
    })()

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [candidateId])

  return { data, loading, error }
}
