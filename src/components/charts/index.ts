import dynamic from 'next/dynamic'

export const PieChartCard = dynamic(() => import('./PieChartCard'), { ssr: false })
export const GroupedBarChartCard = dynamic(() => import('./GroupedBarChart'), { ssr: false })
export const HorizontalBarChartCard = dynamic(() => import('./HorizontalBarChart'), { ssr: false })
