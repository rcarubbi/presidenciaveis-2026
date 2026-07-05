import type { Candidate } from '@/types'
import { hideImageOnError } from '@/lib/dom'

interface CandidateSectionBlockProps {
  candidate: Candidate
  children: React.ReactNode
}

export function CandidateSectionBlock({ candidate, children }: CandidateSectionBlockProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
          <img src={candidate.photo} alt="" className="w-full h-full object-cover" onError={hideImageOnError} />
        </div>
        <h3 className="text-sm font-black uppercase tracking-[0.12em]" style={{ color: candidate.party.color }}>
          {candidate.name.value}
        </h3>
      </div>
      {children}
    </div>
  )
}
