import type { Candidate } from '../../types'

interface CarreiraProps {
  candidates: Candidate[]
}

export function Carreira({ candidates }: CarreiraProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      {candidates.map((c) => (
        <div key={c.id} className="glass p-5">
          <h3 className="text-base font-semibold mb-4" style={{ color: c.party.color }}>{c.name} — Carreira Política</h3>

          <div className="space-y-0 mb-6">
            {c.timeline.map((t, i) => (
              <div key={i} className="flex gap-3 relative">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 z-10"
                    style={{ backgroundColor: c.party.color }} />
                  {i < c.timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-300 dark:bg-gray-600" />
                  )}
                </div>
                <div className="pb-5 flex-1">
                  <p className="text-sm font-bold" style={{ color: c.party.color }}>{t.year}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.event}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto border-t border-gray-200/40 dark:border-gray-700/30 pt-4">
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
                {c.electionResults.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100/50 dark:border-gray-800/30">
                    <td className="py-2 pr-2 font-medium">{r.year}</td>
                    <td className="py-2 px-2">{r.cargo}</td>
                    <td className="py-2 px-2 text-right tabular-nums">{r.votos}</td>
                    <td className="py-2 pl-2 text-right">{r.resultado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}
