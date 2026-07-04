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
          <div className="absolute inset-0 overflow-hidden animate-slide-from-right">
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
            <span className="absolute right-5 top-5 z-20 inline-flex items-center justify-center min-w-[4rem] h-14 px-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 text-2xl font-black tracking-tight text-white shadow-lg select-none md:hidden">
              {c.party.number}
            </span>
            <span className="absolute right-6 bottom-6 z-10 text-[clamp(5rem,12vw,10rem)] font-black leading-none text-white/10 select-none pointer-events-none hidden md:block">
              {c.party.number}
            </span>
          </div>
          <div className="animate-slide-from-left absolute inset-0 overflow-hidden" style={{ animationDelay: '400ms' }}>
            <div className="absolute left-5 top-5 z-20">
              <img
                src={c.party.logo}
                alt={c.party.name.value}
                className="h-12 max-w-24 object-contain drop-shadow-lg"
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
