import { candidates } from '@/data/candidates'
import { notFound } from 'next/navigation'
import { CandidateLayout } from '@/components/Layout/CandidateLayout'

export default async function CandidatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const candidate = candidates.find((c) => c.id === id)
  if (!candidate) notFound()

  return <CandidateLayout candidate={candidate} />
}
