'use client'

import { HorizontalBarChartCard } from '../charts/HorizontalBarChart'

interface TseDataSectionProps {
  pollsByInstitute: { name: string; value: number }[]
  sampleByInstitute: { name: string; value: number }[]
  totalPolls: number
  totalInstitutes: number
  lastUpdated: string
}

export function TseDataSection({ pollsByInstitute, sampleByInstitute, totalPolls, totalInstitutes, lastUpdated }: TseDataSectionProps) {
  const pollsChart = pollsByInstitute.map((item, i) => ({
    name: `#${i + 1}`,
    value: item.value,
  }))
  const sampleChart = sampleByInstitute.map((item, i) => ({
    name: `#${i + 1}`,
    value: item.value,
  }))

  return (
    <>
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
            {pollsByInstitute.map((item, i) => (
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
            {sampleByInstitute.map((item, i) => (
              <div key={item.name} className="flex gap-2">
                <span className="font-mono text-gray-400 w-6 shrink-0">#{i + 1}</span>
                <span className="truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
        {totalPolls} pesquisas registradas, {totalInstitutes} institutos.
        {lastUpdated && ` Dados de ${lastUpdated}.`}
      </p>
    </>
  )
}
