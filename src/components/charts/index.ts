import dynamic from 'next/dynamic'
export const PieChartCard = dynamic(() => import('./PieChartCard').then(m => m.PieChartCard), { ssr: false })

export const GroupedBarChartCard = dynamic(() => import('./GroupedBarChart').then(m => m.GroupedBarChartCard), { ssr: false })

export const HorizontalBarChartCard = dynamic(() => import('./HorizontalBarChart').then(m => m.HorizontalBarChartCard), { ssr: false })