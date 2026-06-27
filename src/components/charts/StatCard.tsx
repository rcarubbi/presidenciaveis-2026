interface StatCardProps {
  label: string
  value: string
  sub?: string
  color?: string
}

export function StatCard({ label, value, sub, color }: StatCardProps) {
  return (
    <div className="glass p-4 text-center transition-all duration-200 hover:scale-[1.02]">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p
        className="text-2xl font-bold tabular-nums"
        style={color ? { color } : undefined}
      >
        {value}
      </p>
      {sub && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{sub}</p>
      )}
    </div>
  )
}
