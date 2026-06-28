'use client'

import { GroupedBarChartCard } from '../charts/GroupedBarChart'
import { HorizontalBarChartCard } from '../charts/HorizontalBarChart'

interface InstituteChartsProps {
  firstRoundData: { name: string; [key: string]: string | number }[]
  secondRoundData: { name: string; matchup: string; [key: string]: string | number }[]
  rejectionData: { name: string; value: number }[]
  spontaneousData: { name: string; value: number }[]
  regionalData: { name: string; Lula: number; Flávio: number; Renan: number }[]
}

export function InstituteCharts({ firstRoundData, secondRoundData, rejectionData, spontaneousData, regionalData }: InstituteChartsProps) {
  const hasLulaRenan = secondRoundData.some((d) => d.matchup === 'Lula × Renan')
  const hasRejection = rejectionData.length > 0
  const hasSpontaneous = spontaneousData.length > 0
  const hasRegional = regionalData.length > 0

  return (
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
  )
}
