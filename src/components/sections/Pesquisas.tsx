'use client'

import { useState, useEffect } from 'react'
import { polls } from '../../data/polls'
import { GroupedBarChartCard } from '../charts/GroupedBarChart'
import { HorizontalBarChartCard } from '../charts/HorizontalBarChart'
import { Spinner } from '../ui/Spinner'

const institutes = ['AtlasIntel', 'Datafolha', 'Quaest', 'Real Time Big Data']

function sortDate(a: string, b: string) {
  const parse = (s: string) => {
    const [d, m] = s.split('/').map(Number)
    return new Date(2026, m - 1, d).getTime()
  }
  return parse(b) - parse(a)
}

export function Pesquisas() {
  const [source, setSource] = useState<'institutes' | 'tse'>('institutes')
  const [selected, setSelected] = useState('AtlasIntel')
  const [tseData, setTseData] = useState<{
    pollsByInstitute: { name: string; value: number }[]
    sampleByInstitute: { name: string; value: number }[]
    totalPolls: number
    totalInstitutes: number
    lastUpdated: string
  } | null>(null)
  const [tseLoading, setTseLoading] = useState(false)
  const [tseError, setTseError] = useState('')

  useEffect(() => {
    if (source !== 'tse') return
    setTseLoading(true)
    setTseError('')
    fetch('/api/tse/pesquisas')
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error)
        setTseData(json.data)
      })
      .catch((err) => setTseError(err.message))
      .finally(() => setTseLoading(false))
  }, [source])

  const filtered = polls.filter((p) => p.institute === selected)

  const firstRoundData = filtered
    .filter((p) => p.firstRound.length > 0)
    .map((p) => {
      const row: { name: string; [key: string]: string | number } = { name: filtered.length > 1 ? p.date : p.institute }
      p.firstRound.forEach((c) => { row[c.name] = c.value })
      return row
    })

  const secondRoundData = source === 'institutes'
    ? filtered
        .filter((p) => p.secondRound)
        .flatMap((p) =>
          p.secondRound!.map((s) => ({
            name: filtered.length > 1 ? p.date : s.label,
            matchup: s.label,
            [s.adversarioNome]: s.adversario,
            Lula: s.lula,
          }))
        )
    : []

  const rejectionData = source === 'institutes'
    ? filtered
        .filter((p) => p.rejection)
        .toSorted((a, b) => sortDate(a.date, b.date))
        .at(0)?.rejection
        ?.toSorted((a, b) => b.value - a.value) ?? []
    : []

  const spontaneousData = source === 'institutes'
    ? filtered
        .filter((p) => p.spontaneous)
        .toSorted((a, b) => sortDate(a.date, b.date))
        .at(0)?.spontaneous
        ?.toSorted((a, b) => b.value - a.value) ?? []
    : []

  const regionalData = source === 'institutes'
    ? filtered
        .filter((p) => p.regional)
        .toSorted((a, b) => sortDate(a.date, b.date))
        .at(0)?.regional
        ?.map((r) => ({
          name: r.region,
          Lula: r.lula,
          Flávio: r.flavio,
          Renan: r.renan ?? 0,
        })) ?? []
    : []

  const dates = filtered.map((p) => p.date).join(', ')
  const hasLulaRenan = secondRoundData.some((d) => d.matchup === 'Lula × Renan')
  const hasRejection = rejectionData.length > 0
  const hasSpontaneous = spontaneousData.length > 0
  const hasRegional = regionalData.length > 0

  const Toggle = () => (
    <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
      <button
        onClick={() => setSource('institutes')}
        className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
          source === 'institutes'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        Institutos
      </button>
      <button
        onClick={() => setSource('tse')}
        className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
          source === 'tse'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        Registros TSE
      </button>
    </div>
  )

  const noData = source === 'institutes' ? filtered.length === 0 : (!tseData || tseData.totalPolls === 0)

  if (noData && source === 'institutes') {
    return (
      <div className="space-y-6">
        <Toggle />
        <div className="flex flex-wrap gap-2">
          {institutes.map((inst) => (
            <button
              key={inst}
              onClick={() => setSelected(inst)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                selected === inst
                  ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900 shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              {inst}
            </button>
          ))}
        </div>
        <div className="glass p-10 text-center">
          <p className="text-gray-500">Nenhuma pesquisa disponível para {selected}</p>
        </div>
      </div>
    )
  }

  if (source === 'tse' && tseLoading) {
    return (
      <div className="space-y-6">
        <Toggle />
        <div className="glass p-10 text-center flex justify-center">
          <Spinner size={32} />
        </div>
      </div>
    )
  }

  if (source === 'tse' && tseError) {
    return (
      <div className="space-y-6">
        <Toggle />
        <div className="glass p-10 text-center">
          <p className="text-red-500">Erro ao carregar dados do TSE: {tseError}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Toggle />

      {source === 'institutes' && (
        <div className="flex flex-wrap gap-2">
          {institutes.map((inst) => (
            <button
              key={inst}
              onClick={() => setSelected(inst)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                selected === inst
                  ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900 shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              {inst}
            </button>
          ))}
        </div>
      )}

      {source === 'institutes' && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <GroupedBarChartCard
              title="1º Turno — Intenção de Voto (%)"
              data={firstRoundData}
              bars={[
                { key: 'Lula', color: '#cc2222' },
                { key: 'Flávio', color: '#1a4fa0' },
                { key: 'Renan', color: '#d97706' },
                { key: 'Zema', color: '#6b7280' },
                { key: 'Caiado', color: '#9ca3af' },
              ]}
            />
            <GroupedBarChartCard
              title="2º Turno — Lula × Flávio (%)"
              data={secondRoundData.filter((d) => d.matchup === 'Lula × Flávio')}
              bars={[
                { key: 'Lula', color: '#cc2222' },
                { key: 'Flávio', color: '#1a4fa0' },
              ]}
            />
          </div>

          {(hasLulaRenan || hasRejection) && (
            <div className={`grid grid-cols-1 ${hasLulaRenan && hasRejection ? 'lg:grid-cols-2' : ''} gap-4`}>
              {hasLulaRenan && (
                <GroupedBarChartCard
                  title="2º Turno — Lula × Renan (%)"
                  data={secondRoundData.filter((d) => d.matchup === 'Lula × Renan')}
                  bars={[
                    { key: 'Lula', color: '#cc2222' },
                    { key: 'Renan', color: '#d97706' },
                  ]}
                />
              )}
              {hasRejection && (
                <HorizontalBarChartCard
                  title="Rejeição — 'Não votaria de jeito nenhum' (%)"
                  data={rejectionData}
                  color="#64748b"
                />
              )}
            </div>
          )}

          {(hasSpontaneous || hasRegional) && (
            <div className={`grid grid-cols-1 ${hasSpontaneous && hasRegional ? 'lg:grid-cols-2' : ''} gap-4`}>
              {hasSpontaneous && (
                <HorizontalBarChartCard
                  title="Voto Espontâneo (%)"
                  data={spontaneousData}
                  color="#64748b"
                />
              )}
              {hasRegional && (
                <GroupedBarChartCard
                  title="Cenários Regionais — 1º Turno (%)"
                  data={regionalData}
                  bars={[
                    { key: 'Lula', color: '#cc2222' },
                    { key: 'Flávio', color: '#1a4fa0' },
                    { key: 'Renan', color: '#d97706' },
                  ]}
                />
              )}
            </div>
          )}
        </>
      )}

      {source === 'tse' && tseData && (
        <>
          {(() => {
            const pollsChart = tseData.pollsByInstitute.map((item, i) => ({
              name: `#${i + 1}`,
              value: item.value,
            }))
            const sampleChart = tseData.sampleByInstitute.map((item, i) => ({
              name: `#${i + 1}`,
              value: item.value,
            }))
            return (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <HorizontalBarChartCard
                    title="Pesquisas Registradas (Presidente)"
                    data={pollsChart}
                    color="#64748b"
                    unit=""
                    domain={['auto', 'auto']}
                  />
                  <div className="mt-2 text-xs text-gray-500 space-y-0.5">
                    {tseData.pollsByInstitute.map((item, i) => (
                      <div key={item.name} className="flex gap-2">
                        <span className="font-mono text-gray-400 w-6 shrink-0">#{i + 1}</span>
                        <span className="truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <HorizontalBarChartCard
                    title="Total de Entrevistados (Presidente)"
                    data={sampleChart}
                    color="#1a4fa0"
                    unit=""
                    domain={['auto', 'auto']}
                  />
                  <div className="mt-2 text-xs text-gray-500 space-y-0.5">
                    {tseData.sampleByInstitute.map((item, i) => (
                      <div key={item.name} className="flex gap-2">
                        <span className="font-mono text-gray-400 w-6 shrink-0">#{i + 1}</span>
                        <span className="truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
            {tseData.totalPolls} pesquisas registradas, {tseData.totalInstitutes} institutos.
            {tseData.lastUpdated && ` Dados de ${tseData.lastUpdated}.`}
          </p>
        </>
      )}

      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
        {source === 'institutes'
          ? `Fonte: ${selected} (${dates}).`
          : `Fonte: Tribunal Superior Eleitoral — Pesquisas Eleitorais 2026. Dados oficiais registrados no TSE.`
        }
      </p>
    </div>
  )
}
