import { useState } from 'react'
import { polls } from '../../data/polls'
import { GroupedBarChartCard } from '../charts/GroupedBarChart'
import { HorizontalBarChartCard } from '../charts/HorizontalBarChart'

const institutes = ['AtlasIntel', 'Datafolha', 'Quaest', 'Real Time Big Data']

function sortDate(a: string, b: string) {
  const parse = (s: string) => {
    const [d, m] = s.split('/').map(Number)
    return new Date(2026, m - 1, d).getTime()
  }
  return parse(b) - parse(a)
}

export function Pesquisas() {
  const [selected, setSelected] = useState('AtlasIntel')
  const filtered = polls.filter((p) => p.institute === selected)

  const firstRoundData = filtered
    .filter((p) => p.firstRound.length > 0)
    .map((p) => {
      const row: { name: string; [key: string]: string | number } = { name: filtered.length > 1 ? p.date : p.institute }
      p.firstRound.forEach((c) => {
        row[c.name] = c.value
      })
      return row
    })

  const secondRoundData = filtered
    .filter((p) => p.secondRound)
    .flatMap((p) =>
      p.secondRound!.map((s) => ({
        name: filtered.length > 1 ? p.date : s.label,
        matchup: s.label,
        [s.adversarioNome]: s.adversario,
        Lula: s.lula,
      }))
    )

  const rejectionData = filtered
    .filter((p) => p.rejection)
    .toSorted((a, b) => sortDate(a.date, b.date))
    .at(0)?.rejection
    ?.toSorted((a, b) => b.value - a.value) ?? []

  const spontaneousData = filtered
    .filter((p) => p.spontaneous)
    .toSorted((a, b) => sortDate(a.date, b.date))
    .at(0)?.spontaneous
    ?.toSorted((a, b) => b.value - a.value) ?? []

  const regionalData = filtered
    .filter((p) => p.regional)
    .toSorted((a, b) => sortDate(a.date, b.date))
    .at(0)?.regional
    ?.map((r) => ({
      name: r.region,
      Lula: r.lula,
      Flávio: r.flavio,
      Renan: r.renan ?? 0,
    })) ?? []

  const dates = filtered.map((p) => p.date).join(', ')
  const hasLulaRenan = secondRoundData.some((d) => d.matchup === 'Lula × Renan')
  const hasRejection = rejectionData.length > 0
  const hasSpontaneous = spontaneousData.length > 0
  const hasRegional = regionalData.length > 0

  return (
    <div className="space-y-6">
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

      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
        Fonte: {selected} ({dates}). Registro TSE disponível no instituto.
      </p>
    </div>
  )
}
