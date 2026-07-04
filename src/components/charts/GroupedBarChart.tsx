'use client'

import {
  BarChart,
  Bar,
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

interface GroupedBarChartProps {
  data: DataPoint[]
  bars: { key: string; color: string; name?: string }[]
  title: string
  unit?: string
}

export function GroupedBarChartCard({ data, bars, title, unit = '%' }: GroupedBarChartProps) {
  return (
    <div className="bento-card p-5">
      <h4 className="text-sm font-black uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400 mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} unit={unit} />
          <Tooltip contentStyle={tooltipContentStyle} formatter={(v) => [`${v}${unit}`, undefined]} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          {bars.map((b) => (
            <Bar key={b.key} dataKey={b.key} fill={b.color} name={b.name || b.key} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
