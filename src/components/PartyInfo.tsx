'use client'

import { useState, useRef, useEffect } from 'react'
import { Spinner } from './ui/Spinner'

interface PartyInfoProps {
  logo: string
  logoAlt: string
  partyName: string
  partyNumber: number
}

export function PartyInfo({ logo, logoAlt, partyName, partyNumber }: PartyInfoProps) {
  const [logoLoaded, setLogoLoaded] = useState(false)
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (logoRef.current?.complete) setLogoLoaded(true)
  }, [])

  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="relative h-10 w-auto min-w-[40px] flex items-center justify-center">
        {!logoLoaded && <Spinner size={18} className="text-white/60 absolute" />}
        <img
          ref={logoRef}
          src={logo}
          alt={logoAlt}
          className="h-10 object-contain"
          onLoad={() => setLogoLoaded(true)}
          onError={(e) => { setLogoLoaded(true); (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>
      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-sm">
        {partyName} — {partyNumber}
      </span>
    </div>
  )
}
