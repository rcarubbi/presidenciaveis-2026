'use client'

interface YearRangeFilterProps {
  minYear: number
  maxYear: number
  yearRange: [number, number]
  onChange: (range: [number, number]) => void
}

export function YearRangeFilter({ minYear, maxYear, yearRange, onChange }: YearRangeFilterProps) {
  return (
    <div className="glass p-4 flex items-center gap-4 flex-wrap">
      <span className="text-xs font-medium text-gray-500">Filtrar ano:</span>
      <div className="flex items-center gap-2 flex-1 min-w-[200px]">
        <span className="text-xs text-gray-400 tabular-nums w-10 text-right">{yearRange[0]}</span>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={yearRange[0]}
          onChange={(e) => onChange([Math.min(parseInt(e.target.value), yearRange[1] - 1), yearRange[1]])}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700 accent-gray-500"
        />
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={yearRange[1]}
          onChange={(e) => onChange([yearRange[0], Math.max(parseInt(e.target.value), yearRange[0] + 1)])}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700 accent-gray-500"
        />
        <span className="text-xs text-gray-400 tabular-nums w-10">{yearRange[1]}</span>
      </div>
      <button
        onClick={() => onChange([minYear, maxYear])}
        className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        Resetar
      </button>
    </div>
  )
}
