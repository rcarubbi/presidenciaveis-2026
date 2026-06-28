import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { PieChartCard, GroupedBarChartCard } from '../charts'

interface FinanciamentoProps {
  candidates: Candidate[]
}

export function Financiamento({ candidates }: FinanciamentoProps) {
  if (candidates.length === 0) {
    return (
      <div className="glass p-10 text-center">
        <p className="text-gray-500">Nenhum dado financeiro disponível</p>
      </div>
    )
  }

  const barData = candidates.map((c) => ({
    name: c.name.value,
    Arrecadado: c.campaignFinance.comparison.arrecadado.value,
    Gasto: c.campaignFinance.comparison.gasto.value,
  }))

  const fontesData = candidates.map((c) => {
    const raw = c.campaignFinance.fontes.map((f) => ({
      name: f.name.value,
      value: f.value.value,
      color: f.color,
    }))
    const total = raw.reduce((s, f) => s + f.value, 0)
    return {
      id: c.id,
      name: c.name.value,
      fontes: raw.map((f) => ({
        ...f,
        value: total > 0 ? Math.round((f.value / total) * 100) : 0,
      })),
    }
  })

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {fontesData.map((fd) => (
          <PieChartCard
            key={fd.id}
            title={`${fd.name} — Fontes`}
            data={fd.fontes}
            unit="%"
          />
        ))}
      </div>

      <GroupedBarChartCard
        title="Arrecadado × Gasto (R$ milhões)"
        data={barData}
        bars={[
          { key: 'Arrecadado', color: '#22c55e', name: 'Arrecadado' },
          { key: 'Gasto', color: '#ef4444', name: 'Gasto' },
        ]}
        unit=" mi"
      />

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {candidates.map((c) => (
          <div key={c.id} className="glass p-5 text-sm space-y-1.5">
            <p className="text-gray-500">Total arrecadado: <span className="font-medium text-gray-700 dark:text-gray-300"><DataLink data={c.campaignFinance.totalArrecadado} /></span></p>
            <p className="text-gray-500">Total gasto: <span className="font-medium text-gray-700 dark:text-gray-300"><DataLink data={c.campaignFinance.totalGasto} /></span></p>
            <p className="text-gray-500">Limite: <span className="font-medium text-gray-700 dark:text-gray-300"><DataLink data={c.campaignFinance.limiteGastos} /></span></p>
          </div>
        ))}
      </div>
    </div>
  )
}
