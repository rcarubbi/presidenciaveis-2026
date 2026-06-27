'use client'

import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { useState } from 'react'

interface CarreiraProps {
  candidates: Candidate[]
}

export function Carreira({ candidates }: CarreiraProps) {
  const allYears = candidates.flatMap((c) => c.timeline.map((t) => parseInt(t.year.value)))
  const minYear = Math.min(...allYears)
  const maxYear = Math.max(...allYears)
  const [yearRange, setYearRange] = useState<[number, number]>([minYear, maxYear])

  const filtered = candidates.map((c) => ({
    ...c,
    timeline: c.timeline.filter((t) => {
      const y = parseInt(t.year.value)
      return y >= yearRange[0] && y <= yearRange[1]
    }),
  }))
  return (
    <div className="space-y-4">
      <div className="glass p-4 flex items-center gap-4 flex-wrap">
        <span className="text-xs font-medium text-gray-500">Filtrar ano:</span>
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <span className="text-xs text-gray-400 tabular-nums w-10 text-right">{yearRange[0]}</span>
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={yearRange[0]}
            onChange={(e) => setYearRange([Math.min(parseInt(e.target.value), yearRange[1] - 1), yearRange[1]])}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700 accent-gray-500"
          />
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={yearRange[1]}
            onChange={(e) => setYearRange([yearRange[0], Math.max(parseInt(e.target.value), yearRange[0] + 1)])}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700 accent-gray-500"
          />
          <span className="text-xs text-gray-400 tabular-nums w-10">{yearRange[1]}</span>
        </div>
        <button
          onClick={() => setYearRange([minYear, maxYear])}
          className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Resetar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {filtered.map((c) => (
        <div key={c.id} className="glass p-5">
          <h3 className="text-base font-semibold mb-4" style={{ color: c.party.color }}><DataLink data={c.name} /> — Carreira Política</h3>

          {c.timeline.length === 0 ? (
            <p className="text-sm text-gray-400 italic mb-4">Nenhum evento registrado</p>
          ) : (
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
                  <p className="text-sm font-bold" style={{ color: c.party.color }}><DataLink data={t.year} /></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><DataLink data={t.event} /></p>
                </div>
              </div>
            ))}
          </div>
          )}

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
                    <td className="py-2 pr-2 font-medium"><DataLink data={r.year} /></td>
                    <td className="py-2 px-2"><DataLink data={r.cargo} /></td>
                    <td className="py-2 px-2 text-right tabular-nums"><DataLink data={r.votos} /></td>
                    <td className="py-2 pl-2 text-right"><DataLink data={r.resultado} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
