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
          className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
            selected === inst
              ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900 shadow-sm'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
          }`}
        >
          {inst}
        </button>
      ))}
    </div>
  )
}
