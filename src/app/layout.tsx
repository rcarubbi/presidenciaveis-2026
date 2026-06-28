import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/lib/providers'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ToasterProvider } from '@/components/ToasterProvider'
import { CookieConsent } from '@/components/CookieConsent'
import { GaScript } from '@/components/GaScript'
import { generateWebsiteJsonLd } from '@/lib/jsonLd'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://presidenciaveis-2026.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Presidenciáveis 2026',
  description: 'Comparativo dos presidenciáveis 2026 — Lula, Flávio Bolsonaro e Renan Santos',
  openGraph: {
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteJsonLd = generateWebsiteJsonLd(BASE_URL)

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark');var f=localStorage.getItem('fontSize');if(f==='large')document.documentElement.classList.add('text-large');if(f==='xlarge')document.documentElement.classList.add('text-xlarge')}catch(e){}})()`
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <GaScript />
        <div className="min-h-screen relative">
          <div className="blob-bg no-print" aria-hidden="true">
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
          </div>

          <div className="relative z-10">
              <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:px-5 focus:py-2.5 focus:rounded-xl focus:bg-white dark:focus:bg-gray-800 focus:text-gray-900 dark:focus:text-gray-100 focus:shadow-xl focus:text-sm focus:font-medium focus:ring-2 focus:ring-gray-400"
            >
              Pular para conteúdo
            </a>

            <AppProvider>
              <Header />
              <ErrorBoundary>
                <main className="max-w-7xl mx-auto px-4 py-10 page-enter" id="main-content">
                  {children}
                  <Footer />
                </main>
              </ErrorBoundary>
              <ToasterProvider />
              <CookieConsent />
            </AppProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
