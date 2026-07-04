'use client'

interface SourceToggleProps {
  source: 'institutes' | 'tse'
  onChange: (source: 'institutes' | 'tse') => void
}

export function SourceToggle({ source, onChange }: SourceToggleProps) {
  return (
    <div className="flex w-fit gap-1 rounded-full border border-blue-100/80 bg-white/70 p-1 shadow-sm dark:border-blue-900/50 dark:bg-slate-900/70">
      <button
        onClick={() => onChange('institutes')}
        className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          source === 'institutes'
            ? 'bg-blue-800 text-white shadow-sm dark:bg-blue-500 dark:text-slate-950'
            : 'text-slate-600 hover:text-blue-950 dark:text-slate-300 dark:hover:text-white'
        }`}
      >
        Institutos
      </button>
      <button
        onClick={() => onChange('tse')}
        className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          source === 'tse'
            ? 'bg-blue-800 text-white shadow-sm dark:bg-blue-500 dark:text-slate-950'
            : 'text-slate-600 hover:text-blue-950 dark:text-slate-300 dark:hover:text-white'
        }`}
      >
        Registros TSE
      </button>
    </div>
  )
}
