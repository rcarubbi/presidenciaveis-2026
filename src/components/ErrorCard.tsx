export function ErrorCard({ message = 'Algo deu errado' }: { message?: string }) {
  return (
    <div className="bento-card p-10 text-center">
      <p className="text-sm text-gray-400">{message}</p>
    </div>
  )
}
