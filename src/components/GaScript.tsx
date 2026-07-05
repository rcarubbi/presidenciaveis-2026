'use client'

import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export function GaScript() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        id="ga-optout"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{if(localStorage.getItem('cookie-consent')==='refused'){window['ga-disable-${GA_ID}']=true}}catch(e){}})()`,
        }}
      />
      <Script
        id="ga-gtag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="ga-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{cookie_flags:'max-age=7200;secure;samesite=lax'});`,
        }}
      />
    </>
  )
}
