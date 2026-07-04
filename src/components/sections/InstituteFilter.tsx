'use client'

interface InstituteFilterProps {
  institutes: string[]
  selected: string
  onSelect: (institute: string) => void
}

export function InstituteFilter({ institutes, selected, onSelect }: InstituteFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {institutes.map((inst) => (
        <button
          key={inst}
          onClick={() => onSelect(inst)}
          className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
            selected === inst
              ? 'bg-blue-800 text-white shadow-sm dark:bg-blue-500 dark:text-slate-950'
              : 'border border-blue-100/80 bg-white/70 text-slate-600 hover:bg-blue-50 hover:text-blue-950 dark:border-blue-900/50 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
          }`}
        >
          {inst}
        </button>
      ))}
    </div>
  )
}
