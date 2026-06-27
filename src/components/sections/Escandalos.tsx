import type { Candidate } from '../../types'

interface EscandalosProps {
  candidates: Candidate[]
}

const statusColor = {
  arquivado: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  absolvido: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  anulado: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  rejeitado: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  ativo: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
} as const

const statusLabel = {
  arquivado: 'Arquivado',
  absolvido: 'Absolvido',
  anulado: 'Anulado (STF)',
  rejeitado: 'Rejeitado',
  ativo: 'Em investigação',
} as const

export function Escandalos({ candidates }: EscandalosProps) {
  const counts = candidates.map((c) => ({
    name: c.name,
    color: c.party.color,
    ativos: c.scandals.filter((s) => s.status === 'ativo').length,
    resolvidos: c.scandals.filter((s) => s.status !== 'ativo').length,
  }))

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {counts.map((c) => (
          <div key={c.name} className="glass p-5 text-center">
            <p className="text-sm text-gray-500 mb-2">Casos</p>
            <div className="flex justify-center gap-5 text-base">
              <span>
                <span className="font-bold text-red-500 tabular-nums">{c.ativos}</span>{' '}
                <span className="text-gray-400">ativos</span>
              </span>
              <span>
                <span className="font-bold text-green-500 tabular-nums">{c.resolvidos}</span>{' '}
                <span className="text-gray-400">resolvidos</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {candidates.map((c) => (
          <div key={c.id} className="glass p-5">
            <h3 className="text-base font-semibold mb-4" style={{ color: c.party.color }}>
              {c.name} ({c.scandals.length})
            </h3>
            {c.scandals.length === 0 ? (
              <p className="text-sm text-gray-400 italic">Nenhum caso registrado</p>
            ) : (
            <div className="space-y-4">
              {c.scandals.map((s, i) => (
                <div key={i} className="text-sm">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{s.name}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor[s.status]}`}>
                      {statusLabel[s.status]}
                    </span>
                    {s.value && s.value !== '—' && (
                      <span className="text-gray-400 ml-auto">{s.value}</span>
                    )}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">{s.description}</p>
                </div>
              ))}
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
