import type { SyntheticEvent } from 'react'

export function hideImageOnError(e: SyntheticEvent<HTMLImageElement>) {
  ;(e.target as HTMLImageElement).style.display = 'none'
}
