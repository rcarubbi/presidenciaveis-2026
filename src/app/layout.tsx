import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { AppProvider } from '@/lib/providers'
import { Header } from '@/components/Layout/Header'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ToasterProvider } from '@/components/ToasterProvider'
import { FooterActions } from '@/components/FooterActions'
import { generateWebsiteJsonLd } from '@/lib/jsonLd'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://presidenciaveis-2026.vercel.app'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Presidenciáveis 2026 — Comparativo',
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
        {GA_ID && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GA_ID}');`,
            }}
          />
        )}
      </head>
      <body>
        {GA_ID && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
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
