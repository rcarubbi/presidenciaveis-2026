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
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GA_ID}');`,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </>
  )
}
