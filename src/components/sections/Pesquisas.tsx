import { polls } from '../../data/polls'
import { GroupedBarChartCard } from '../charts/GroupedBarChart'
import { HorizontalBarChartCard } from '../charts/HorizontalBarChart'

export function Pesquisas() {
  const firstRoundData = polls
    .filter((p) => p.firstRound.length > 0)
    .map((p) => {
      const row: Record<string, number | string> = { name: p.institute }
      p.firstRound.forEach((c) => {
        row[c.name] = c.value
      })
      return row
    })

  const secondRoundData = polls
    .filter((p) => p.secondRound)
    .flatMap((p) =>
      p.secondRound!.map((s) => ({
        name: s.label,
        [s.adversarioNome]: s.adversario,
        Lula: s.lula,
      }))
    )

  const rejectionData = polls
    .filter((p) => p.rejection)
    .flatMap((p) => p.rejection!)
    .sort((a, b) => b.value - a.value)

  const spontaneousData = polls
    .filter((p) => p.spontaneous)
    .flatMap((p) => p.spontaneous!)
    .sort((a, b) => b.value - a.value)

  const regionalData = polls
    .filter((p) => p.regional)
    .flatMap((p) => p.regional!)
    .map((r) => ({
      name: r.region,
      Lula: r.lula,
      Flávio: r.flavio,
      Renan: r.renan ?? 0,
    }))

  return (
    <div className="space-y-6">
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
          data={secondRoundData.filter((d) => d.name === 'Lula × Flávio')}
          bars={[
            { key: 'Lula', color: '#cc2222' },
            { key: 'Flávio', color: '#1a4fa0' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GroupedBarChartCard
          title="2º Turno — Lula × Renan (%)"
          data={secondRoundData.filter((d) => d.name === 'Lula × Renan')}
          bars={[
            { key: 'Lula', color: '#cc2222' },
            { key: 'Renan', color: '#d97706' },
          ]}
        />
        <HorizontalBarChartCard
          title="Rejeição — 'Não votaria de jeito nenhum' (%)"
          data={rejectionData}
          color="#64748b"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <HorizontalBarChartCard
          title="Voto Espontâneo (%)"
          data={spontaneousData}
          color="#64748b"
        />
        <GroupedBarChartCard
          title="Cenários Regionais — 1º Turno (%)"
          data={regionalData}
          bars={[
            { key: 'Lula', color: '#cc2222' },
            { key: 'Flávio', color: '#1a4fa0' },
            { key: 'Renan', color: '#d97706' },
          ]}
        />
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
        Fonte: AtlasIntel/Bloomberg (19/mai/2026). 5.032 respondentes. Margem ±1 p.p. Registro TSE BR-06939/2026.
      </p>
    </div>
  )
}
