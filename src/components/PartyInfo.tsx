'use client'

interface PartyInfoProps {
  partyNumber: number
}

export function PartyInfo({ partyNumber }: PartyInfoProps) {
  return (
    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-sm">
      {partyNumber}
    </span>
  )
}
