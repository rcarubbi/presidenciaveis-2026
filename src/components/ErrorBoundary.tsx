import { Component } from 'react'

interface Props { children: React.ReactNode }
interface State { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="glass p-8 text-center max-w-md">
            <p className="text-xl mb-2">Algo deu errado</p>
            <p className="text-sm text-gray-500 mb-4">Tente recarregar a página.</p>
            <button
              onClick={() => { this.setState({ hasError: false }); window.location.reload() }}
              className="px-5 py-2 rounded-xl bg-gray-800 text-white dark:bg-white dark:text-gray-900 text-sm font-medium"
            >
              Recarregar
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
