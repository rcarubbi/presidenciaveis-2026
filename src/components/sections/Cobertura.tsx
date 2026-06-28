'use client'

import { useCobertura } from '@/hooks/useCobertura'
import type { Candidate } from '@/types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from 'recharts'
import { ExternalLink, TrendingUp, TrendingDown, Minus, Newspaper } from 'lucide-react'

interface CoberturaProps {
  candidates: Candidate[]
}

function formatDate(iso: string | null): string {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

function sentimentBadge(val: number | null): { label: string; cls: string } {
  if (val === null) return { label: '', cls: '' }
  if (val > 0.05) return { label: `${(val * 100).toFixed(0)}%`, cls: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' }
  if (val < -0.05) return { label: `${(val * 100).toFixed(0)}%`, cls: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' }
  return { label: `${(val * 100).toFixed(0)}%`, cls: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' }
}

function sentimentIcon(val: number | null) {
  if (val === null) return null
  if (val > 0.05) return <TrendingUp size={14} className="text-green-600 dark:text-green-400" />
  if (val < -0.05) return <TrendingDown size={14} className="text-red-600 dark:text-red-400" />
  return <Minus size={14} className="text-gray-400" />
}

export function Cobertura({ candidates }: CoberturaProps) {
  const candidate = candidates[0]
  const { data, loading, error } = useCobertura(candidate.id)

  if (error) return null
  if (loading) return <CoberturaSkeleton />
  if (!data) return null

  const { detail, sentiment, articles } = data
  const dist = detail.sentiment_distribution
  const totalSentiment = Object.values(dist).reduce((a, b) => a + b, 0)
  const posPct = dist.positive ? (dist.positive / totalSentiment) * 100 : 0
  const negPct = dist.negative ? (dist.negative / totalSentiment) * 100 : 0
  const neuPct = dist.neutral ? (dist.neutral / totalSentiment) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Newspaper size={18} className="text-gray-500" />
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Cobertura Jornalística
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass p-5 rounded-xl">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total de Artigos</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {detail.kpis.articles.toLocaleString('pt-BR')}
          </p>
        </div>

        <div className="glass p-5 rounded-xl">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sentimento Médio</p>
          <div className="flex items-center gap-2">
            <p className={`text-2xl font-bold ${sentimentBadge(detail.kpis.sentiment_avg).cls || ''}`}>
              {detail.kpis.sentiment_avg !== null
                ? (detail.kpis.sentiment_avg * 100).toFixed(1) + '%'
                : '—'}
            </p>
            {sentimentIcon(detail.kpis.sentiment_avg)}
          </div>
        </div>

        <div className="glass p-5 rounded-xl">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Distribuição</p>
          <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex">
            <div
              className="bg-green-500 transition-all"
              style={{ width: `${posPct}%` }}
              title={`Positivo: ${dist.positive ?? 0}`}
            />
            <div
              className="bg-gray-400 dark:bg-gray-500 transition-all"
              style={{ width: `${neuPct}%` }}
              title={`Neutro: ${dist.neutral ?? 0}`}
            />
            <div
              className="bg-red-500 transition-all"
              style={{ width: `${negPct}%` }}
              title={`Negativo: ${dist.negative ?? 0}`}
            />
          </div>
          <div className="flex justify-between text-xs mt-1.5 text-gray-500 dark:text-gray-400">
            <span>{dist.positive?.toLocaleString('pt-BR') ?? 0} pos.</span>
            <span>{dist.neutral?.toLocaleString('pt-BR') ?? 0} neu.</span>
            <span>{dist.negative?.toLocaleString('pt-BR') ?? 0} neg.</span>
          </div>
        </div>
      </div>

      {articles.length > 0 && (
        <div className="glass rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-200/40 dark:border-gray-700/30">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Artigos Recentes
            </h3>
          </div>
          <div className="divide-y divide-gray-200/40 dark:divide-gray-700/30">
            {articles.slice(0, 5).map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 px-5 py-3 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors group"
              >
                <ExternalLink size={12} className="mt-1 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-800 dark:text-gray-200 line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    {article.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">{article.source ?? '—'}</span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-400">{formatDate(article.published_at)}</span>
                    {article.genre && (
                      <>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs capitalize text-gray-400">{article.genre}</span>
                      </>
                    )}
                    {article.editorial_lean && (
                      <>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs capitalize text-gray-400">{article.editorial_lean}</span>
                      </>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {sentiment && sentiment.points.length > 1 && (
        <div className="glass p-5 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Sentimento ao Longo do Tempo
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sentiment.points}>
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                  tickFormatter={(v) => {
                    const d = new Date(v)
                    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
                  }}
                  interval="preserveStartEnd"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[-1, 1]}
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                  tickFormatter={(v) => (v * 100).toFixed(0) + '%'}
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(255,255,255,0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                  labelFormatter={(v) => formatDate(v as string)}
                  formatter={(value) => {
                    const v = Number(value)
                    return [(v * 100).toFixed(1) + '%', 'Sentimento']
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sentiment_avg"
                  stroke={
                    (sentiment.points.at(-1)?.sentiment_avg ?? 0) > 0.05
                      ? '#22c55e'
                      : (sentiment.points.at(-1)?.sentiment_avg ?? 0) < -0.05
                        ? '#ef4444'
                        : '#9CA3AF'
                  }
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {(() => {
        const topSources = (detail.top_sources ?? [])
          .map(s => ({ source: s.source, count: Number((s as Record<string, unknown>).count ?? (s as Record<string, unknown>).articles ?? (s as Record<string, unknown>).total ?? 0) }))
          .filter(s => s.count > 0)
          .toReversed()
        if (topSources.length === 0) return null
        return (
          <div className="glass p-5 rounded-xl">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Principais Fontes
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topSources}
                  layout="vertical"
                  margin={{ left: 100, right: 20 }}
                >
                  <XAxis type="number" tick={{ fontSize: 10, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                  <YAxis
                    type="category"
                    dataKey="source"
                    tick={{ fontSize: 11, fill: '#6B7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(255,255,255,0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                    formatter={(value) => {
                      const v = Number(value)
                      return [v.toLocaleString('pt-BR'), 'Artigos']
                    }}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {topSources.map((_, i) => {
                      const isLast = i === topSources.length - 1
                      return (
                        <Cell
                          key={i}
                          fill={isLast ? '#2563eb' : '#3b82f6'}
                          fillOpacity={isLast ? 0.95 : 0.65}
                        />
                      )
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )
      })()}

      {detail.top_topics && detail.top_topics.length > 0 && (
        <div className="glass p-5 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Principais Tópicos
          </h3>
          <div className="flex flex-wrap gap-2">
            {detail.top_topics.map((t, i) => {
              const size = i < 3 ? 'text-sm' : i < 6 ? 'text-xs' : 'text-[10px]'
              const weight = i < 3 ? 'font-semibold' : 'font-medium'
              return (
                <span
                  key={t.topic}
                  className={`${size} ${weight} px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50`}
                >
                  {t.topic}
                  <span className="ml-1 text-gray-400 dark:text-gray-500 font-normal">
                    {t.count}
                  </span>
                </span>
              )
            })}
          </div>
        </div>
      )}

      <p className="text-[10px] text-gray-400 dark:text-gray-600 text-right">
        Dados: Eleições 2026 / SapiensLabs · Atualizado continuamente
      </p>
    </div>
  )
}

function CoberturaSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass p-5 rounded-xl">
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
      <div className="glass rounded-xl overflow-hidden">
        <div className="p-5 border-b border-gray-200/40 dark:border-gray-700/30">
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="px-5 py-3">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1" />
            <div className="h-3 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
