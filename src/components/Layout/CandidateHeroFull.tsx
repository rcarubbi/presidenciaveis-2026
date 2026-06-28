'use client'

import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'

interface CandidateHeroFullProps {
  candidate: Candidate
}

export function CandidateHeroFull({ candidate: c }: CandidateHeroFullProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass p-6 space-y-4">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300" style={{ color: c.party.color }}>Dados Pessoais</h3>
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Nome completo:</span> <DataLink data={c.fullName} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Naturalidade:</span> <DataLink data={c.naturalidade} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Estado civil:</span> <DataLink data={c.estadoCivil} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Filhos:</span> <DataLink data={c.filhos} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Formação:</span> <DataLink data={c.formacao} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Religião:</span> <DataLink data={c.religiao} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Residência:</span> <DataLink data={c.residencia} /></p>
        </div>
      </div>
      <div className="glass p-6 space-y-4">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300" style={{ color: c.party.color }}>Posicionamento</h3>
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Ideologia:</span> <DataLink data={c.ideologicalPosition} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Partido atual:</span> <DataLink data={c.currentParty} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Histórico partidos:</span> {c.partyHistory.map((dv) => dv.value).join(', ')}</p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Cargo atual:</span> <DataLink data={c.currentPosition} /></p>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Coligação:</span>
            <ul className="mt-1 space-y-0.5">
              {c.coalition.map((co, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${co.status.value === 'confirmado' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                  <DataLink data={co.party} /> (<DataLink data={co.status} />)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
