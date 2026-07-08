'use client'

import type { ElectionResult } from '../../types'
import { DataLink } from '../DataLink'

interface ElectionResultsProps {
  results: ElectionResult[]
}

export function ElectionResults({ results }: ElectionResultsProps) {
  return (
    <>
      <div className="block sm:hidden space-y-2 pt-4">
        {results.map((r, i) => (
          <div key={i} className="rounded-lg border border-gray-200/40 dark:border-gray-700/30 p-3 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-gray-900 dark:text-gray-100"><DataLink data={r.year} /></span>
              <span className="text-xs text-gray-700 dark:text-gray-300"><DataLink data={r.cargo} /></span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="tabular-nums"><DataLink data={r.votos} /> votos</span>
              <span><DataLink data={r.resultado} /></span>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden sm:block overflow-x-auto border-t border-gray-200/40 dark:border-gray-700/30 pt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200/60 dark:border-gray-700/40">
              <th className="text-left py-2 pr-2 text-gray-500">Ano</th>
              <th className="text-left py-2 px-2 text-gray-500">Cargo</th>
              <th className="text-right py-2 px-2 text-gray-500">Votos</th>
              <th className="text-right py-2 pl-2 text-gray-500">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i} className="border-b border-gray-100/50 dark:border-gray-800/30">
                <td className="py-2 pr-2 font-medium"><DataLink data={r.year} /></td>
                <td className="py-2 px-2"><DataLink data={r.cargo} /></td>
                <td className="py-2 px-2 text-right tabular-nums"><DataLink data={r.votos} /></td>
                <td className="py-2 pl-2 text-right"><DataLink data={r.resultado} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
