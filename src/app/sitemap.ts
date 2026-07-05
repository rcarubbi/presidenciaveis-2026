import type { MetadataRoute } from 'next'
import { candidates } from '@/data'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://presidenciaveis-2026.vercel.app'

const SITE_VERSION = '2026-06-30'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(SITE_VERSION),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pesquisas`,
      lastModified: new Date(SITE_VERSION),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/comparar`,
      lastModified: new Date(SITE_VERSION),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const candidatePages = candidates.map((c) => ({
    url: `${BASE_URL}/candidato/${c.id}`,
    lastModified: new Date(SITE_VERSION),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }))

  return [...staticPages, ...candidatePages]
}
