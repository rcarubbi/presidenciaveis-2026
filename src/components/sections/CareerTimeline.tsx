'use client'

import type { TimelineEvent } from '../../types'
import { DataLink } from '../DataLink'

interface CareerTimelineProps {
  events: TimelineEvent[]
  partyColor: string
}

export function CareerTimeline({ events, partyColor }: CareerTimelineProps) {
  if (events.length === 0) {
    return <p className="text-sm text-gray-400 italic mb-4">Nenhum evento registrado</p>
  }

  return (
    <div className="space-y-0 mb-6">
      {events.map((t, i) => (
        <div key={i} className="flex gap-3 relative">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 z-10"
              style={{ backgroundColor: partyColor }} />
            {i < events.length - 1 && (
              <div className="w-0.5 flex-1 bg-gray-300 dark:bg-gray-600" />
            )}
          </div>
          <div className="pb-5 flex-1">
            <p className="text-sm font-bold" style={{ color: partyColor }}><DataLink data={t.year} /></p>
            <p className="text-sm text-gray-600 dark:text-gray-400"><DataLink data={t.event} /></p>
          </div>
        </div>
      ))}
    </div>
  )
}
