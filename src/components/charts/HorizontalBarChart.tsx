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
import { tooltipContentStyle } from '@/lib/recharts'

interface HorizontalBarChartProps {
  data: { name: string; value: number }[]
  title: string
  color: string
  unit?: string
  domain?: [number | string, number | string]
}

export function HorizontalBarChartCard({ data, title, color,   unit = '%',
  domain }: HorizontalBarChartProps) {
  return (
    <div className="glass p-5">
      <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={data.length * 50 + 40}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 10, left: 60, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11 }} unit={unit} domain={domain ?? [0, 100]} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={80} />
          <Tooltip contentStyle={tooltipContentStyle} formatter={(v) => [`${v}${unit}`, undefined]} />
          <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default HorizontalBarChartCard
