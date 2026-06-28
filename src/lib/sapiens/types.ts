export interface SapiensEnvelope<T> {
  data: T
  meta?: SapiensMeta
}

export interface SapiensPaginated<T> {
  data: T[]
  meta: SapiensMeta
}

export interface SapiensMeta {
  total?: number | null
  page?: number | null
  page_size?: number | null
  pages?: number | null
  note?: string | null
}

export interface SapiensCandidate {
  slug: string
  name: string
  status: string
  bio: string | null
  kpis: SapiensCandidateKPI
}

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

export interface SapiensSentimentPoint {
  date: string
  articles: number
  sentiment_avg: number | null
}

export interface SapiensSentimentSeries {
  candidate: string
  slug: string
  points: SapiensSentimentPoint[]
}

export interface SapiensStats {
  total_articles: number
  total_candidates: number
  total_sources: number
  articles_today: number
  last_fetch_at: string | null
  cutoff_date: string
}
