import {
  Shield,
  TrendingUp,
  Heart,
  BookOpen,
  Clock,
  Building2,
  Leaf,
  Globe,
  Scale,
  HeartHandshake,
  Sprout,
} from 'lucide-react'

export const sectionIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  seguranca: Shield,
  economia: TrendingUp,
  saude: Heart,
  educacao: BookOpen,
  previdencia: Clock,
  infraestrutura: Building2,
  'meio-ambiente': Leaf,
  'relacoes-exteriores': Globe,
  'reforma-politica': Scale,
  costumes: HeartHandshake,
  agricultura: Sprout,
}
