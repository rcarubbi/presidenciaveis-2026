import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/lib/providers'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ToasterProvider } from '@/components/ToasterProvider'
import { CookieConsent } from '@/components/CookieConsent'
import { GaScript } from '@/components/GaScript'
import { ThemeScript } from '@/components/ThemeScript'
import { JsonLdScript } from '@/components/JsonLdScript'
import { PushInit } from '@/components/PushInit'
import { SettingsPanel } from '@/components/SettingsPanel'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://presidenciaveis-2026.vercel.app'

// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Presidenciáveis 2026',
  description: 'Comparativo dos presidenciáveis 2026 — Lula, Flávio Bolsonaro, Renan Santos, Ronaldo Caiado e Romeu Zema',
    openGraph: {
      title: 'Presidenciáveis 2026',
      description: 'Comparativo dos presidenciáveis 2026. Perfil completo, pesquisas e comparativo lado a lado.',
      locale: 'pt_BR',
      type: 'website',
      siteName: 'Presidenciáveis 2026',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Presidenciáveis 2026',
      description: 'Comparativo dos presidenciáveis 2026. Perfil completo, pesquisas e comparativo lado a lado.',
    },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: { title: 'Presidenciáveis 2026' },
  alternates: { canonical: BASE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <ThemeScript />
        <JsonLdScript baseUrl={BASE_URL} />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Presidenciáveis 2026" />
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
              <SettingsPanel />
              <ErrorBoundary>
                <main className="px-8 py-10 page-enter" id="main-content">
                  {children}
                  <Footer />
                </main>
              </ErrorBoundary>
              <ToasterProvider />
              <CookieConsent />
              <PushInit />
            </AppProvider>
          </div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
