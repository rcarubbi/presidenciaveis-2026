'use client'

import { GroupedBarChartCard, HorizontalBarChartCard, LineChartCard } from '../charts'

interface InstituteChartsProps {
  firstRoundData: { name: string; [key: string]: string | number }[]
  secondRoundData: { name: string; matchup: string; [key: string]: string | number }[]
  rejectionData: { name: string; value: number }[]
  spontaneousData: { name: string; value: number }[]
  regionalData: { name: string; Lula: number; Flávio: number; Renan: number }[]
}

const bars1T = [
  { key: 'Lula', color: '#cc2222' },
  { key: 'Flávio', color: '#1a4fa0' },
  { key: 'Renan', color: '#d97706' },
  { key: 'Zema', color: '#f15a24' },
  { key: 'Caiado', color: '#3b7dd8' },
]

const barsLulaFlavio = [
  { key: 'Lula', color: '#cc2222' },
  { key: 'Flávio', color: '#1a4fa0' },
]

const barsLulaRenan = [
  { key: 'Lula', color: '#cc2222' },
  { key: 'Renan', color: '#d97706' },
]

const barsRegional = [
  { key: 'Lula', color: '#cc2222' },
  { key: 'Flávio', color: '#1a4fa0' },
  { key: 'Renan', color: '#d97706' },
]

export function InstituteCharts({ firstRoundData, secondRoundData, rejectionData, spontaneousData, regionalData }: InstituteChartsProps) {
  const hasLulaRenan = secondRoundData.some((d) => d.matchup === 'Lula × Renan')
  const hasRejection = rejectionData.length > 0
  const hasSpontaneous = spontaneousData.length > 0
  const hasRegional = regionalData.length > 0

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <GroupedBarChartCard
            title="1º Turno — Intenção de Voto (%)"
            data={firstRoundData}
            bars={bars1T}
          />
          <LineChartCard
            title="1º Turno — Evolução (%)"
            data={firstRoundData}
            lines={bars1T}
          />
        </div>
        <div className="space-y-4">
          <GroupedBarChartCard
            title="2º Turno — Lula × Flávio (%)"
            data={secondRoundData.filter((d) => d.matchup === 'Lula × Flávio')}
            bars={barsLulaFlavio}
          />
          <LineChartCard
            title="2º Turno — Lula × Flávio — Evolução (%)"
            data={secondRoundData.filter((d) => d.matchup === 'Lula × Flávio')}
            lines={barsLulaFlavio}
          />
        </div>
      </div>

      {(hasLulaRenan || hasRejection) && (
        <div className={`grid grid-cols-1 ${hasLulaRenan && hasRejection ? 'lg:grid-cols-2' : ''} gap-4`}>
          {hasLulaRenan && (
            <div className="space-y-4">
              <GroupedBarChartCard
                title="2º Turno — Lula × Renan (%)"
                data={secondRoundData.filter((d) => d.matchup === 'Lula × Renan')}
                bars={barsLulaRenan}
              />
              <LineChartCard
                title="2º Turno — Lula × Renan — Evolução (%)"
                data={secondRoundData.filter((d) => d.matchup === 'Lula × Renan')}
                lines={barsLulaRenan}
              />
            </div>
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
              bars={barsRegional}
            />
          )}
        </div>
      )}
    </>
  )
}
