'use client'

interface SourceToggleProps {
  source: 'institutes' | 'tse'
  onChange: (source: 'institutes' | 'tse') => void
}

export function SourceToggle({ source, onChange }: SourceToggleProps) {
  return (
    <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
      <button
        onClick={() => onChange('institutes')}
        className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
          source === 'institutes'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        Institutos
      </button>
      <button
        onClick={() => onChange('tse')}
        className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
          source === 'tse'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        Registros TSE
      </button>
    </div>
  )
}
