'use client'

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark');var f=localStorage.getItem('fontSize');if(f==='large')document.documentElement.classList.add('text-large');if(f==='xlarge')document.documentElement.classList.add('text-xlarge')}catch(e){}})()`
      }}
    />
  )
}
