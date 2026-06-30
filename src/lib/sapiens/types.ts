export interface SapiensCandidateKPI {
  articles: number
  sentiment_avg: number | null
}

export interface SapiensCandidateDetail {
  slug: string
  name: string
  status: string
  bio: string | null
  kpis: SapiensCandidateKPI
  sentiment_distribution: Record<string, number>
  top_sources?: { source: string; count: number }[]
  top_topics?: { topic: string; count: number }[]
}

export interface SapiensArticle {
  id: number
  title: string
  url: string
  source: string | null
  source_canonical: string | null
  published_at: string | null
  fetched_at: string | null
  editorial_lean: string | null
  editorial_lean_detail: string | null
  genre: string | null
}

export interface SapiensSentimentSeries {
  candidate: string
  slug: string
  points: { date: string; articles: number; sentiment_avg: number | null }[]
}
