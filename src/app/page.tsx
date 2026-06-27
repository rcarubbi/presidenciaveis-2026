import { VisaoGeral } from '@/components/sections/VisaoGeral'
import { candidates } from '@/data/candidates'

export default function HomePage() {
  return <VisaoGeral candidates={candidates} />
}
