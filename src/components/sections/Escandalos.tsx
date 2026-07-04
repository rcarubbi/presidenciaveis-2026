import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { Shield } from 'lucide-react'

interface EscandalosProps {
  candidates: Candidate[]
}

const statusColor: Record<string, string> = {
  arquivado: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  absolvido: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  anulado: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  rejeitado: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  ativo: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

const statusLabel: Record<string, string> = {
  arquivado: 'Arquivado',
  absolvido: 'Absolvido',
  anulado: 'Anulado (STF)',
  rejeitado: 'Rejeitado',
  ativo: 'Em investigação',
}

export function Escandalos({ candidates }: EscandalosProps) {
  const activeStatuses = new Set(['ativo'])
  const resolvedStatuses = new Set(['rejeitado', 'absolvido', 'arquivado'])
  const annulledStatuses = new Set(['anulado'])

  const counts = candidates.map((c) => ({
    name: c.name.value,
    color: c.party.color,
    ativos: c.scandals.filter((s) => activeStatuses.has(s.status.value)).length,
    resolvidos: c.scandals.filter((s) => resolvedStatuses.has(s.status.value)).length,
    anulados: c.scandals.filter((s) => annulledStatuses.has(s.status.value)).length,
  }))

  return (
    <div className="space-y-6">
      <div
        className={`flex items-center gap-2 ${candidates.length > 1 ? 'text-gray-700 dark:text-gray-300' : ''}`}
        style={candidates.length === 1 ? { color: candidates[0].party.color } : undefined}
      >
        <Shield className="size-4" />
        <h3 className="text-sm font-black uppercase tracking-[0.12em]">ESCÂNDALOS DE CORRUPÇÃO</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {counts.map((c) => (
          <div key={c.name} className="bento-card p-5 text-center">
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
              <span>
                <span className="font-bold text-orange-500 tabular-nums">{c.anulados}</span>{' '}
                <span className="text-gray-400">anulados</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {candidates.map((c) => (
          <div key={c.id} className="bento-card p-5">
            <h3 className="text-base font-semibold mb-4" style={{ color: c.party.color }}>
              {candidates.length > 1 && <><DataLink data={c.name} /> </>}({c.scandals.length})
            </h3>
            {c.scandals.length === 0 ? (
              <p className="text-sm text-gray-400 italic">Nenhum caso registrado</p>
            ) : (
            <div className="space-y-4">
              {c.scandals.map((s, i) => (
                <div key={i} className="text-sm">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold text-gray-700 dark:text-gray-300"><DataLink data={s.name} /></span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor[s.status.value]}`}>
                      {statusLabel[s.status.value]}
                    </span>
                    {s.value && s.value.value && s.value.value !== '—' && (
                      <span className="text-gray-400 ml-auto"><DataLink data={s.value} /></span>
                    )}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400"><DataLink data={s.description} /></p>
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
