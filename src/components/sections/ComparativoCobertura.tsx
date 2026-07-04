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
} from 'recharts'
import { ExternalLink, TrendingUp, TrendingDown, Minus, Newspaper } from 'lucide-react'
import { hideImageOnError } from '@/lib/dom'

interface ComparativoCoberturaProps {
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

function CoberturaCell({ candidate }: { candidate: Candidate }) {
  const { data, loading, error } = useCobertura(candidate.id)

  if (error) return (
    <div className="bento-card p-5 rounded-xl text-center">
      <p className="text-xs text-gray-400">Dados indisponíveis</p>
    </div>
  )

  if (loading || !data) return (
    <div className="bento-card p-5 rounded-xl space-y-3 animate-pulse">
      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="grid grid-cols-3 gap-2">
        <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded" />
    </div>
  )

  const { detail, sentiment, articles } = data
  const dist = detail.sentiment_distribution
  const totalSentiment = Object.values(dist).reduce((a, b) => a + b, 0)
  const posPct = dist.positive ? (dist.positive / totalSentiment) * 100 : 0
  const negPct = dist.negative ? (dist.negative / totalSentiment) * 100 : 0
  const neuPct = dist.neutral ? (dist.neutral / totalSentiment) * 100 : 0

  return (
    <div className="bento-card rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200/40 dark:border-gray-700/30 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
          <img src={candidate.photo} alt="" className="w-full h-full object-cover" onError={hideImageOnError} />
        </div>
        <span className="text-sm font-semibold" style={{ color: candidate.party.color }}>
          {candidate.name.value}
        </span>
      </div>

      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-2.5 rounded-lg">
            <p className="text-[10px] text-gray-500 dark:text-gray-400">Artigos</p>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {detail.kpis.articles.toLocaleString('pt-BR')}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-2.5 rounded-lg">
            <p className="text-[10px] text-gray-500 dark:text-gray-400">Sentimento</p>
            <div className="flex items-center gap-1">
              <p className={`text-lg font-bold ${sentimentBadge(detail.kpis.sentiment_avg).cls || 'text-gray-900 dark:text-gray-100'}`}>
                {detail.kpis.sentiment_avg !== null
                  ? (detail.kpis.sentiment_avg * 100).toFixed(0) + '%'
                  : '—'}
              </p>
              {sentimentIcon(detail.kpis.sentiment_avg)}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-2.5 rounded-lg">
            <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">Distrib.</p>
            <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex">
              <div className="bg-green-500" style={{ width: `${posPct}%` }} />
              <div className="bg-gray-400 dark:bg-gray-500" style={{ width: `${neuPct}%` }} />
              <div className="bg-red-500" style={{ width: `${negPct}%` }} />
            </div>
            <div className="flex justify-between text-[9px] mt-0.5 text-gray-400">
              <span>{dist.positive?.toLocaleString('pt-BR') ?? 0}</span>
              <span>{dist.neutral?.toLocaleString('pt-BR') ?? 0}</span>
              <span>{dist.negative?.toLocaleString('pt-BR') ?? 0}</span>
            </div>
          </div>
        </div>

        {articles.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Newspaper size={12} className="text-gray-400" />
              <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Artigos Recentes</p>
            </div>
            <div className="space-y-1.5">
              {articles.slice(0, 4).map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors group"
                >
                  <ExternalLink size={10} className="mt-0.5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-800 dark:text-gray-200 line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                      {article.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] text-gray-400">{article.source ?? '—'}</span>
                      <span className="text-[10px] text-gray-400">·</span>
                      <span className="text-[10px] text-gray-400">{formatDate(article.published_at)}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {detail.top_topics && detail.top_topics.length > 0 && (
          <div>
            <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Tópicos</p>
            <div className="flex flex-wrap gap-1">
              {detail.top_topics.slice(0, 6).map((t) => (
                <span
                  key={t.topic}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50"
                >
                  {t.topic}
                  <span className="ml-0.5 text-gray-400 dark:text-gray-500 font-normal">{t.count}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {sentiment && sentiment.points.length > 1 && (
          <div className="pt-3 border-t border-gray-200/40 dark:border-gray-700/30">
            <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Sentimento ao Longo do Tempo
            </p>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sentiment.points}>
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 9, fill: '#9CA3AF' }}
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
                    tick={{ fontSize: 9, fill: '#9CA3AF' }}
                    tickFormatter={(v) => (v * 100).toFixed(0) + '%'}
                    axisLine={false}
                    tickLine={false}
                    width={28}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(255,255,255,0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontSize: '11px',
                      padding: '4px 8px',
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
                    strokeWidth={1.5}
                    dot={false}
                    activeDot={{ r: 2.5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function ComparativoCobertura({ candidates }: ComparativoCoberturaProps) {
  if (candidates.length === 0) return <div className="bento-card p-10 text-center"><p className="text-sm text-gray-400">Selecione candidatos para comparar a cobertura jornalística</p></div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {candidates.map((c) => (
        <CoberturaCell key={c.id} candidate={c} />
      ))}
    </div>
  )
}
