export interface VideoProgress {
  t: number
  d: number
}

const PREFIX = 'vp:'

function key(id: string) { return `${PREFIX}${id}` }

export function getVideoProgress(youtubeId: string): VideoProgress | null {
  try {
    const raw = localStorage.getItem(key(youtubeId))
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

export function saveVideoProgress(youtubeId: string, p: VideoProgress) {
  try { localStorage.setItem(key(youtubeId), JSON.stringify(p)) } catch {}
}
