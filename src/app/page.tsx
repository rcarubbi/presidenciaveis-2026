import { Candidatos } from '@/components/sections/Candidatos'
import { candidates } from '@/data/candidates'

export default function HomePage() {
  return <Candidatos candidates={candidates} />
}
