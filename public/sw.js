const POLL_INTERVAL = 30 * 60 * 1000
const VERSION_URL = '/api/data/version'
const CACHE_NAME = 'sw-cache'
const CACHE_KEY = '/sw/version'

async function getLastVersion() {
  try {
    const cache = await caches.open(CACHE_NAME)
    const response = await cache.match(CACHE_KEY)
    return response ? await response.text() : null
  } catch {
    return null
  }
}

async function setLastVersion(version) {
  try {
    const cache = await caches.open(CACHE_NAME)
    const headers = new Headers({ 'Content-Type': 'text/plain' })
    await cache.put(CACHE_KEY, new Response(version, { headers }))
  } catch {}
}

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    clients.claim().then(() => checkVersion())
  )
  setInterval(checkVersion, POLL_INTERVAL)
})

self.addEventListener('message', (event) => {
  if (event.data === 'check') checkVersion()
  if (event.data === 'check-delayed') {
    setTimeout(checkVersion, 3000)
  }
})

function formatBody(changes) {
  return changes?.length
    ? changes.map((c) => `${c.emoji} ${c.label}`).join('\n')
    : 'Clique para ver as atualizacoes.'
}

async function checkVersion() {
  try {
    const res = await fetch(VERSION_URL)
    if (!res.ok) return
    const data = await res.json()
    const stored = await getLastVersion()

    if (stored !== null && stored !== data.version) {
      const body = formatBody(data.changes)

      const windows = await clients.matchAll({ type: 'window', includeUncontrolled: true })
      const focused = windows.find((c) => c.focused)

      if (focused) {
        focused.postMessage({ type: 'data-update', changes: data.changes })
      } else {
        await self.registration.showNotification('Novos dados disponiveis', {
          body,
          icon: '/web-app-manifest-192x192.png',
          tag: 'data-update',
          renotify: true,
        })
      }
    }

    await setLastVersion(data.version)
  } catch {
    // next poll will retry
  }
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      if (windowClients.length > 0) {
        windowClients[0].focus()
      } else {
        clients.openWindow('/')
      }
    })
  )
})
