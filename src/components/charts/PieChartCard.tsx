'use client'

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface PieChartCardProps {
  data: { name: string; value: number; color: string }[]
  title: string
  unit?: string
}

export function PieChartCard({ data, title, unit = 'R$ mi' }: PieChartCardProps) {
  return (
    <div className="glass p-5">
      <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--recharts-tooltip-bg)',
              border: '1px solid var(--recharts-tooltip-border)',
              borderRadius: '8px',
              color: 'var(--recharts-tooltip-color)',
              fontSize: '12px',
            }}
            formatter={(v) => [`${v}${unit}`, undefined]}
          />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
