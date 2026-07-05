'use client'

import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { CandidateStats } from './CandidateStats'

interface HeroBannerProps {
  candidate: Candidate
}

export function HeroBanner({ candidate: c }: HeroBannerProps) {
  const color = c.party.color

  return (
    <div className="bento-card overflow-hidden">
      <div className="relative" style={{ backgroundColor: color }}>
        <div className="relative h-[624px] overflow-hidden">
          <div className="absolute inset-0 animate-slide-from-right">
            <img
              src={c.photo}
              alt={c.fullName.value}
              className="size-full object-cover md:object-contain"
              style={{ objectPosition: c.photoPos ?? 'center top' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${color} 0%, ${color}cc 35%, ${color}55 65%, transparent 85%)`,
              }}
            />
            <span className="absolute right-6 top-5 z-10 -translate-y-[20%] max-sm:text-[clamp(3rem,8vw,5rem)] sm:text-[clamp(7rem,18vw,38rem)] font-black leading-none text-white/10 select-none pointer-events-none">
              {c.party.number}
            </span>
          </div>
          <div className="animate-slide-from-left absolute inset-0 overflow-hidden" style={{ animationDelay: '400ms' }}>
            <div className="absolute left-5 top-5 z-20">
              <img
                src={c.party.logo}
                alt={c.party.name.value}
                className="h-12 md:h-16 max-w-24 md:max-w-36 object-contain drop-shadow-lg"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <h1 className="text-3xl font-black text-white drop-shadow-sm md:text-5xl">
                <DataLink data={c.fullName} />
              </h1>
              <p className="mt-1 text-base font-medium leading-tight text-white/85 md:text-lg">
                <DataLink data={c.currentPosition} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <CandidateStats candidate={c} />
    </div>
  )
}
