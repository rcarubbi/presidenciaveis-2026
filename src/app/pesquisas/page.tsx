'use client'

import { Suspense } from 'react'
import { Pesquisas } from '@/components/sections/Pesquisas'
import { useSearchParams } from 'next/navigation'
import { Spinner } from '@/components/ui/Spinner'

function PesquisasContent() {
  const searchParams = useSearchParams()
  const sourceParam = searchParams.get('source')
  const initialSource = sourceParam === 'tse' ? 'tse' : 'institutes'
  return <Pesquisas initialSource={initialSource} />
}

export default function PesquisasPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20"><Spinner size={32} /></div>}>
      <PesquisasContent />
    </Suspense>
  )
}
