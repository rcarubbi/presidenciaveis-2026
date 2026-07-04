'use client'

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { tooltipContentStyle } from '@/lib/recharts'

interface PieChartCardProps {
  data: { name: string; value: number; color: string }[]
  title: string
  unit?: string
}

export function PieChartCard({ data, title, unit = 'R$ mi' }: PieChartCardProps) {
  return (
    <div className="bento-card p-5">
      <h4 className="text-sm font-black uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400 mb-4">{title}</h4>
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
          <Tooltip contentStyle={tooltipContentStyle} formatter={(v) => [`${v}${unit}`, undefined]} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
