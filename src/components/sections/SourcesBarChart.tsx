'use client'

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface SourcesBarChartProps {
  sources: { source: string; count: number }[]
}

export function SourcesBarChart({ sources }: SourcesBarChartProps) {
  if (sources.length === 0) return null
  return (
    <div className="glass p-5 rounded-xl">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Principais Fontes
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sources}
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
              {sources.map((_, i) => {
                const isLast = i === sources.length - 1
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
}
