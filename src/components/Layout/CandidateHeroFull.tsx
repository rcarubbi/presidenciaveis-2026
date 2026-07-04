'use client'

import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'

interface CandidateHeroFullProps {
  candidate: Candidate
}

export function CandidateHeroFull({ candidate: c }: CandidateHeroFullProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="bento-card space-y-4 p-6">
        <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em]" style={{ color: c.party.color }}>Dados Pessoais</h3>
        <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Nome completo:</span> <DataLink data={c.fullName} /></p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Naturalidade:</span> <DataLink data={c.naturalidade} /></p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Estado civil:</span> <DataLink data={c.estadoCivil} /></p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Filhos:</span> <DataLink data={c.filhos} /></p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Formação:</span> <DataLink data={c.formacao} /></p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Religião:</span> <DataLink data={c.religiao} /></p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Residência:</span> <DataLink data={c.residencia} /></p>
        </div>
      </div>
      <div className="bento-card space-y-4 p-6">
        <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em]" style={{ color: c.party.color }}>Posicionamento</h3>
        <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Ideologia:</span> <DataLink data={c.ideologicalPosition} /></p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Partido atual:</span> <DataLink data={c.currentParty} /></p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Histórico partidos:</span> {c.partyHistory.map((dv) => dv.value).join(', ')}</p>
          <p><span className="font-bold text-slate-800 dark:text-slate-200">Cargo atual:</span> <DataLink data={c.currentPosition} /></p>
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200">Coligação:</span>
            <ul className="mt-1.5 space-y-1">
              {c.coalition.map((co, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${co.status.value === 'confirmado' ? 'bg-green-400' : 'bg-amber-400'}`} />
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
