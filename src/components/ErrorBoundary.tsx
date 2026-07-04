'use client'

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
          <div className="bento-card p-8 text-center max-w-md">
            <p className="text-xl font-bold mb-1">Algo deu errado</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Tente recarregar a página.</p>
            <button
              onClick={() => { this.setState({ hasError: false }); window.location.reload() }}
              className="civic-button"
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
