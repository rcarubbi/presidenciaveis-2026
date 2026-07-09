'use client'

import { useEffect, useRef } from 'react'
import { toast } from 'sonner'

export function PushInit() {
  const swPosted = useRef(false)

  function postConsent(worker: ServiceWorker | null) {
    const c = localStorage.getItem('push-consent')
    worker?.postMessage({ type: 'push-consent', value: c || 'denied' })
  }

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    ;(async () => {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' })

        function postCheck() {
          if (reg.active) {
            reg.active.postMessage('check')
          }
        }

        if (!swPosted.current) {
          postCheck()
          swPosted.current = true
        }

        postConsent(reg.active)

        if (reg.installing) {
          reg.installing.addEventListener('statechange', () => {
            if (reg.installing?.state === 'activated') postCheck()
          })
        }

        reg.addEventListener('updatefound', () => {
          const installing = reg.installing
          if (installing) {
            installing.addEventListener('statechange', () => {
              if (installing.state === 'activated') postCheck()
            })
          }
        })
      } catch {}
    })()

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      navigator.serviceWorker.controller?.postMessage('check')
    })
  }, [])

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.data?.type === 'data-update') {
        const changes = event.data.changes
        if (changes?.length) {
          changes.forEach((c: { emoji: string; label: string }) => {
            toast(c.emoji + ' ' + c.label, { duration: 10000 })
          })
        } else {
          toast('Novos dados disponiveis', {
            description: event.data.body,
            duration: 10000,
          })
        }
      }
    }

    navigator.serviceWorker.addEventListener('message', onMessage)
    return () => navigator.serviceWorker.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    function onVisible() {
      if (document.visibilityState === 'visible') {
        navigator.serviceWorker.controller?.postMessage('check')
      }
    }

    document.addEventListener('visibilitychange', onVisible)
    return () => document.removeEventListener('visibilitychange', onVisible)
  }, [])

  useEffect(() => {
    if (typeof Notification === 'undefined') return

    function sync() {
      const perm = Notification.permission
      if (perm === 'granted') { localStorage.setItem('push-consent', 'granted'); return }
      if (perm === 'denied')  { localStorage.setItem('push-consent', 'denied');  return }
      if (localStorage.getItem('push-consent') === 'granted') {
        localStorage.setItem('push-consent', 'denied')
      }
    }

    sync()
  }, [])

  useEffect(() => {
    if (typeof Notification === 'undefined') return
    if (Notification.permission !== 'default') return
    if (localStorage.getItem('push-consent')) return

    const timer = setTimeout(() => {
      toast('Receba notificacoes quando novos dados forem publicados', {
        action: {
          label: 'Ativar',
          onClick: async () => {
            const r = await Notification.requestPermission()
            localStorage.setItem('push-consent', r)
            postConsent(navigator.serviceWorker.controller)
          },
        },
        duration: 10000,
      })
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
