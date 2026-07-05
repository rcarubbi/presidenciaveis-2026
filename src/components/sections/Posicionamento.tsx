import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { Grid3X3 } from 'lucide-react'
import { CandidateNameHeading } from '../ui/CandidateNameHeading'

interface PosicionamentoProps {
  candidates: Candidate[]
}

export function Posicionamento({ candidates }: PosicionamentoProps) {
  const allIssues = [...new Set(candidates.flatMap((c) => c.positions.map((p) => p.issue.value)))]

  if (allIssues.length === 0) {
    return (
      <div className="bento-card p-10 text-center">
        <p className="text-gray-500">Nenhum posicionamento registrado</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <CandidateNameHeading candidates={candidates} icon={Grid3X3} title="POSICIONAMENTO SOBRE PAUTAS POLÊMICAS" />
      <div className="bento-card overflow-x-auto">
        <table className="w-full text-sm">
          <caption className="sr-only">Posicionamento dos candidatos sobre pautas polêmicas</caption>
        <thead>
          <tr className="border-b border-gray-200/60 dark:border-gray-700/40">
            <th className="text-left py-4 pr-4 pl-5 font-medium text-gray-500 dark:text-gray-400 w-36">Pauta</th>
            {candidates.map((c) => (
              <th key={c.id} className="text-left py-4 px-4 font-semibold text-base" style={{ color: c.party.color }}>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allIssues.map((issue, i) => (
            <tr key={issue} className={i < allIssues.length - 1 ? 'border-b border-gray-100/50 dark:border-gray-800/30' : ''}>
              <td className="py-3 pr-4 pl-5 text-gray-500 dark:text-gray-400 font-medium text-sm whitespace-nowrap">{issue}</td>
              {candidates.map((c) => {
                const pos = c.positions.find((p) => p.issue.value === issue)
                return (
                  <td key={c.id} className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                    {pos ? <DataLink data={pos.position} /> : '—'}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export function PosicionamentoCell({ candidate }: { candidate: Candidate }) {
  if (candidate.positions.length === 0) {
    return (
      <div className="bento-card p-6 text-center">
        <p className="text-sm text-gray-400">Nenhum posicionamento registrado</p>
      </div>
    )
  }

  return (
    <div className="bento-card overflow-x-auto">
      <table className="w-full text-sm">
        <caption className="sr-only">Posicionamento sobre pautas polêmicas</caption>
        <tbody>
          {candidate.positions.map((p, i) => (
            <tr key={p.issue.value} className={i < candidate.positions.length - 1 ? 'border-b border-gray-100/50 dark:border-gray-800/30' : ''}>
              <td className="py-2.5 px-4 text-gray-500 dark:text-gray-400 font-medium text-sm w-44">{p.issue.value}</td>
              <td className="py-2.5 px-4 text-sm text-gray-700 dark:text-gray-300"><DataLink data={p.position} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
