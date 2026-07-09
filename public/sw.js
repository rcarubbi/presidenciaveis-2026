// ============================================================
// 1. CONFIG
// ============================================================
const CONFIG = {
  POLL_INTERVAL: 30 * 60 * 1000,
  VERSION_URL: '/api/data/version',
  CACHE_NAME: 'sw-cache',
  CACHE_KEY: '/sw/version',
  NOTIFICATION_ICON: '/web-app-manifest-192x192.png',
  NOTIFICATION_TAG: 'data-update',
}
let pushConsent = 'denied'

// ============================================================
// 2. STORAGE
// ============================================================
async function getLastVersion() {
  try {
    const cache = await caches.open(CONFIG.CACHE_NAME)
    const response = await cache.match(CONFIG.CACHE_KEY)
    return response ? await response.text() : null
  } catch {
    return null
  }
}

async function setLastVersion(version) {
  try {
    const cache = await caches.open(CONFIG.CACHE_NAME)
    const headers = new Headers({ 'Content-Type': 'text/plain' })
    await cache.put(CONFIG.CACHE_KEY, new Response(version, { headers }))
  } catch {}
}

// ============================================================
// 3. POLLING ENGINE
// ============================================================
function startPolling() {
  setInterval(checkVersion, CONFIG.POLL_INTERVAL)
}

function formatBody(changes) {
  return changes?.length
    ? changes.map((c) => `${c.emoji} ${c.label}`).join('\n')
    : 'Clique para ver as atualizacoes.'
}

// ============================================================
// 4. NOTIFICATION DELIVERY
// ============================================================
async function notifyFocusedClients(changes) {
  const windows = await clients.matchAll({ type: 'window', includeUncontrolled: true })
  const focused = windows.find((c) => c.focused)
  if (focused) {
    focused.postMessage({ type: 'data-update', changes })
    return true
  }
  return false
}

async function showPushNotification(body) {
  if (pushConsent !== 'granted') return
  await self.registration.showNotification('Novos dados disponiveis', {
    body,
    icon: CONFIG.NOTIFICATION_ICON,
    tag: CONFIG.NOTIFICATION_TAG,
    renotify: true,
  })
}

async function checkVersion() {
  try {
    const res = await fetch(CONFIG.VERSION_URL)
    if (!res.ok) return
    const data = await res.json()
    const stored = await getLastVersion()

    if (stored !== null && stored !== data.version) {
      const body = formatBody(data.changes)
      const delivered = await notifyFocusedClients(data.changes)
      if (!delivered) {
        await showPushNotification(body)
      }
    }

    await setLastVersion(data.version)
  } catch {
    // next poll will retry
  }
}

// ============================================================
// 5. MESSAGE ROUTER
// ============================================================
self.addEventListener('message', (event) => {
  const { data } = event
  if (data === 'check') return checkVersion()
  if (data === 'check-delayed') return setTimeout(checkVersion, 3000)
  if (data?.type === 'push-consent') { pushConsent = data.value }
})

// ============================================================
// 6. LIFECYCLE
// ============================================================
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await clients.claim()
    await checkVersion()
  })())
  startPolling()
})

// ============================================================
// 7. NOTIFICATION CLICK
// ============================================================
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil((async () => {
    const windowClients = await clients.matchAll({ type: 'window', includeUncontrolled: true })
    if (windowClients.length > 0) {
      windowClients[0].focus()
    } else {
      await clients.openWindow('/')
    }
  })())
})
