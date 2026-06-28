import { Spinner } from '@/components/ui/Spinner'

export default function CandidateLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Spinner size={40} />
    </div>
  )
}
