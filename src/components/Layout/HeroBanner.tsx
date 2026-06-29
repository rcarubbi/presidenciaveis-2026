'use client'

import { useState, useRef, useEffect } from 'react'
import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { Spinner } from '../ui/Spinner'
import { hideImageOnError } from '@/lib/dom'
import { CandidateStats } from './CandidateStats'

interface HeroBannerProps {
  candidate: Candidate
}

export function HeroBanner({ candidate: c }: HeroBannerProps) {
  const color = c.party.color
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const photoRef = useRef<HTMLImageElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (photoRef.current?.complete) setPhotoLoaded(true)
  }, [])

  useEffect(() => {
    if (logoRef.current?.complete) setLogoLoaded(true)
  }, [])

  return (
    <div className="glass overflow-hidden rounded-xl">
      <div className="aspect-[3/2] md:aspect-[2/1] relative overflow-hidden" style={{ backgroundColor: color }}>
        {!photoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Spinner size={32} className="text-white/60" />
          </div>
        )}
        <img
          ref={photoRef}
          src={c.photo}
          alt={c.fullName.value}
          className="absolute inset-0 w-full h-full object-contain"
          onLoad={() => setPhotoLoaded(true)}
          onError={(e) => { setPhotoLoaded(true); hideImageOnError(e) }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${color} 0%, ${color}88 40%, transparent 70%)`,
          }}
        />
        <div className="absolute top-5 left-5 z-20">
          <div className="relative h-10 md:h-14 w-auto min-w-[40px] flex items-center justify-center">
            {!logoLoaded && <Spinner size={20} className="text-white/60 absolute" />}
            <img
              ref={logoRef}
              src={c.party.logo}
              alt={c.party.name.value}
              className="h-10 md:h-14 max-w-24 object-contain"
              onLoad={() => setLogoLoaded(true)}
onError={(e) => { setLogoLoaded(true); hideImageOnError(e) }}
            />
          </div>
        </div>
        <span className="absolute top-5 right-5 z-20 px-3 py-1 rounded-full text-sm font-bold text-white bg-black/30 backdrop-blur-sm">
          {c.party.number}
        </span>
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"><DataLink data={c.fullName} /></h1>
          <p className="text-base md:text-lg text-white/80 mt-1 drop-shadow"><DataLink data={c.currentPosition} /></p>
        </div>
      </div>
      <CandidateStats candidate={c} />
    </div>
  )
}
