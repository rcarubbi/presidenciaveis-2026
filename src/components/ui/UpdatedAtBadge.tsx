interface UpdatedAtBadgeProps {
  updatedAt: string
}

export function UpdatedAtBadge({ updatedAt }: UpdatedAtBadgeProps) {
  if (!updatedAt) return null
  return (
    <span className="text-[10px] text-gray-400 dark:text-gray-600">
      Atualizado em: {new Date(updatedAt).toLocaleDateString('pt-BR')}
    </span>
  )
}
