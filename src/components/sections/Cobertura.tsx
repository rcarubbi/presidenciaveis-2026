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
import { SourcesBarChart } from './SourcesBarChart'
import { ExternalLink, TrendingUp, TrendingDown, Minus, Newspaper, ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react'

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

function editorialLeanBadge(lean: string): { label: string; icon: React.ReactNode; cls: string } | null {
  switch (lean) {
    case 'left':
      return {
        label: 'Esquerda',
        icon: <ArrowLeft size={10} />,
        cls: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
      }
    case 'right':
      return {
        label: 'Direita',
        icon: <ArrowRight size={10} />,
        cls: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
      }
    case 'center':
      return {
        label: 'Centro',
        icon: <Minus size={10} />,
        cls: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
      }
    default:
      return {
        label: 'Não classif.',
        icon: <HelpCircle size={10} />,
        cls: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
      }
  }
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

  const topSources = (detail.top_sources ?? [])
    .map(s => ({ source: s.source, count: Number((s as Record<string, unknown>).count ?? (s as Record<string, unknown>).articles ?? (s as Record<string, unknown>).total ?? 0) }))
    .filter(s => s.count > 0)
    .toReversed()

  return (
    <div className="space-y-6">
      <div
        className={`flex items-center gap-2 ${candidates.length > 1 ? 'text-gray-700 dark:text-gray-300' : ''}`}
        style={candidates.length === 1 ? { color: candidates[0].party.color } : undefined}
      >
        <Newspaper className="size-4" />
        <h3 className="text-sm font-black uppercase tracking-[0.12em]">COBERTURA JORNALÍSTICA</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bento-card p-5 rounded-xl">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total de Artigos</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {detail.kpis.articles.toLocaleString('pt-BR')}
          </p>
        </div>

        <div className="bento-card p-5 rounded-xl">
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

        <div className="bento-card p-5 rounded-xl">
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
        <div className="bento-card rounded-xl overflow-hidden">
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
                    {article.editorial_lean && (() => {
                      const badge = editorialLeanBadge(article.editorial_lean!)
                      if (!badge) return null
                      return (
                        <>
                          <span className="text-xs text-gray-400">·</span>
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none ${badge.cls}`}>
                            {badge.icon}
                            {badge.label}
                          </span>
                        </>
                      )
                    })()}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {sentiment && sentiment.points.length > 1 && (
        <div className="bento-card p-5 rounded-xl">
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

      {topSources.length > 0 && <SourcesBarChart sources={topSources} />}

      {detail.top_topics && detail.top_topics.length > 0 && (
        <div className="bento-card p-5 rounded-xl">
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

export function CoberturaCell({ candidate }: { candidate: Candidate }) {
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
                      {article.editorial_lean && (() => {
                        const badge = editorialLeanBadge(article.editorial_lean!)
                        if (!badge) return null
                        return (
                          <>
                            <span className="text-[10px] text-gray-400">·</span>
                            <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold leading-none ${badge.cls}`}>
                              {badge.icon}
                              {badge.label}
                            </span>
                          </>
                        )
                      })()}
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

function CoberturaSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bento-card p-5 rounded-xl">
            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
      <div className="bento-card rounded-xl overflow-hidden">
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
