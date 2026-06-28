import type { MetadataRoute } from 'next'
import { candidates } from '@/data/candidates'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://presidenciaveis-2026.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pesquisas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/comparar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const candidatePages = candidates.map((c) => ({
    url: `${BASE_URL}/candidato/${c.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...candidatePages]
}
