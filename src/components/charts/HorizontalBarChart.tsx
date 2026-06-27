'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface HorizontalBarChartProps {
  data: { name: string; value: number }[]
  title: string
  color: string
  unit?: string
}

export function HorizontalBarChartCard({ data, title, color, unit = '%' }: HorizontalBarChartProps) {
  return (
    <div className="glass p-5">
      <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={data.length * 50 + 40}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 10, left: 60, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11 }} unit={unit} domain={[0, 100]} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={80} />
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
          <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
