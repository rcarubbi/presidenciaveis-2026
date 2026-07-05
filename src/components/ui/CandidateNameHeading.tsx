import type { Candidate } from '@/types'

interface CandidateNameHeadingProps {
  candidates: Candidate[]
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
}

export function CandidateNameHeading({ candidates, icon: Icon, title }: CandidateNameHeadingProps) {
  return (
    <div
      className={`flex items-center gap-2 ${candidates.length > 1 ? 'text-gray-700 dark:text-gray-300' : ''}`}
      style={candidates.length === 1 ? { color: candidates[0].party.color } : undefined}
    >
      <Icon className="size-4" />
      <h3 className="text-sm font-black uppercase tracking-[0.12em]">{title}</h3>
    </div>
  )
}
