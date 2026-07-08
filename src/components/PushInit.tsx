'use client'

import { useEffect, useRef } from 'react'
import { toast } from 'sonner'

export function PushInit() {
  const swPosted = useRef(false)

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then((reg) => {
      function postCheck() {
        if (reg.active) {
          reg.active.postMessage('check')
        }
      }

      if (!swPosted.current) {
        postCheck()
        swPosted.current = true
      }

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
    }).catch(() => {})

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
    if (Notification.permission !== 'default') return
    if (localStorage.getItem('push-consent')) return

    const timer = setTimeout(() => {
      toast('Receba notificacoes quando novos dados forem publicados', {
        action: {
          label: 'Ativar',
          onClick: () => {
            Notification.requestPermission().then((r) => localStorage.setItem('push-consent', r))
          },
        },
        duration: 10000,
      })
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
