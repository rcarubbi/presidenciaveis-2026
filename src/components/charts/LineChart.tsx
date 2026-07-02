'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { tooltipContentStyle } from '@/lib/recharts'

interface DataPoint {
  name: string
  [key: string]: string | number
}

interface LineChartProps {
  data: DataPoint[]
  lines: { key: string; color: string; name?: string }[]
  title: string
  unit?: string
}

export function LineChartCard({ data, lines, title, unit = '%' }: LineChartProps) {
  return (
    <div className="glass p-5">
      <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} unit={unit} />
          <Tooltip contentStyle={tooltipContentStyle} formatter={(v) => [`${v}${unit}`, undefined]} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          {lines.map((l) => (
            <Line
              key={l.key}
              type="monotone"
              dataKey={l.key}
              stroke={l.color}
              name={l.name || l.key}
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 0, fill: l.color }}
              activeDot={{ r: 5, strokeWidth: 0, fill: l.color }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
