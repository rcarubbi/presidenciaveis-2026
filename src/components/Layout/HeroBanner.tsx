'use client'

import { useState, useRef, useEffect } from 'react'
import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { Spinner } from '../ui/Spinner'
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
      <div className="aspect-[3/2] md:aspect-[2/1] grid grid-cols-1 grid-rows-1 overflow-hidden relative" style={{ backgroundColor: color }}>
        {!photoLoaded && (
          <div className="col-span-full row-span-full flex items-center justify-center z-20">
            <Spinner size={32} className="text-white/60" />
          </div>
        )}
        <img
          ref={photoRef}
          src={c.photo}
          alt={c.fullName.value}
          className="col-span-full row-span-full w-full h-full object-contain"
          onLoad={() => setPhotoLoaded(true)}
          onError={(e) => { setPhotoLoaded(true); (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <div
          className="col-span-full row-span-full"
          style={{
            background: `linear-gradient(to right, ${color}ee 0%, ${color}88 50%, ${color}44 100%)`,
          }}
        />
        <div className="col-span-full row-span-full flex flex-col justify-end p-6 md:p-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative h-10 md:h-14 w-auto min-w-[40px] flex items-center justify-center">
              {!logoLoaded && <Spinner size={20} className="text-white/60 absolute" />}
              <img
                ref={logoRef}
                src={c.party.logo}
                alt={c.party.name.value}
                className="h-10 md:h-14 object-contain"
                onLoad={() => setLogoLoaded(true)}
                onError={(e) => { setLogoLoaded(true); (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-bold text-white bg-black/30 backdrop-blur-sm">
              {c.party.name.value} — {c.party.number}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"><DataLink data={c.fullName} /></h1>
          <p className="text-base md:text-lg text-white/80 mt-1 drop-shadow"><DataLink data={c.currentPosition} /></p>
        </div>
      </div>
      <CandidateStats candidate={c} />
    </div>
  )
}
