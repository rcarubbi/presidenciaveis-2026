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

    let cancelled = false
    setLoading(true)
    setError(null)

    Promise.all([
      fetch(`/api/sapiens/candidates/${apiSlug}`).then((r) => r.json()),
      fetch(`/api/sapiens/candidates/${apiSlug}/sentiment`).then((r) => r.json()),
      fetch(`/api/sapiens/articles?candidate=${apiSlug}&page_size=10`).then((r) => r.json()),
    ])
      .then(([detailRes, sentimentRes, articlesRes]) => {
        if (cancelled) return

        if (detailRes.error) throw new Error(detailRes.error)
        if (sentimentRes.error) throw new Error(sentimentRes.error)
        if (articlesRes.error) throw new Error(articlesRes.error)

        setData({
          detail: detailRes.data,
          sentiment: sentimentRes.data?.points?.length ? sentimentRes.data : null,
          articles: articlesRes.data ?? [],
        })
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [candidateId])

  return { data, loading, error }
}
