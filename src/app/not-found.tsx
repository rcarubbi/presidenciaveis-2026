import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="glass p-10 max-w-md">
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Página não encontrada
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-sm font-medium rounded-xl bg-gray-800 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition-opacity"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}
