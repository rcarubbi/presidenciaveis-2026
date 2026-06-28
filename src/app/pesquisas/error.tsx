'use client'

export default function PollsError({ error: _error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <p className="text-sm text-gray-500">Erro ao carregar pesquisas</p>
      <button onClick={reset} className="px-4 py-2 text-sm font-medium rounded-xl bg-gray-800 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition-opacity">
        Tentar novamente
      </button>
    </div>
  )
}
