import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/lib/providers'
import { Header } from '@/components/Layout/Header'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ToasterProvider } from '@/components/ToasterProvider'
import { FooterActions } from '@/components/FooterActions'

export const metadata: Metadata = {
  title: 'Presidenciáveis 2026 — Comparativo',
  description: 'Comparativo dos presidenciáveis 2026 — Lula, Flávio Bolsonaro e Renan Santos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark');var f=localStorage.getItem('fontSize');if(f==='large')document.documentElement.classList.add('text-large');if(f==='xlarge')document.documentElement.classList.add('text-xlarge')}catch(e){}})()`
        }} />
      </head>
      <body>
        <div className="min-h-screen relative">
          <div className="blob-bg no-print" aria-hidden="true">
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
          </div>

          <div className="relative z-10">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-white focus:text-gray-900 focus:shadow-lg focus:text-sm focus:font-medium"
            >
              Pular para conteúdo
            </a>

            <AppProvider>
              <Header />
              <ErrorBoundary>
                <main className="max-w-7xl mx-auto px-4 py-8" id="main-content">
                  {children}
                  <footer className="mt-16 pt-6 border-t border-gray-200/60 dark:border-gray-800/60 text-center text-xs text-gray-400/80 space-y-1">
                    <p>Site informativo sem fins eleitorais. Art. 57-B Lei 9.504/97</p>
                    <FooterActions />
                  </footer>
                </main>
              </ErrorBoundary>
              <ToasterProvider />
            </AppProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
