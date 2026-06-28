'use client'

import { Suspense } from 'react'
import { Comparativo } from '@/components/sections/Comparativo'
import { candidates } from '@/data/candidates'
import { useSearchParams } from 'next/navigation'
import { Spinner } from '@/components/ui/Spinner'

function CompararContent() {
  const searchParams = useSearchParams()
  const idsParam = searchParams.get('ids')
  const tabParam = searchParams.get('tab')
  const initialIds = idsParam ? idsParam.split(',') : undefined

  return <Comparativo candidates={candidates} initialIds={initialIds} initialTab={tabParam ?? undefined} />
}

export default function CompararPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20"><Spinner size={32} /></div>}>
      <CompararContent />
    </Suspense>
  )
}
