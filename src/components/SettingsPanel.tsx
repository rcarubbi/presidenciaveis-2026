'use client'

import { useState, useEffect } from 'react'
import { X, Bell, ShieldCheck } from 'lucide-react'
import { useApp } from '@/lib/app-context'

const COOKIE_KEY = 'cookie-consent'
const PUSH_KEY = 'push-consent'

function applyGa(val: string | null) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  if (gaId && typeof window !== 'undefined') {
    ;(window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] = val === 'refused'
  }
}

export function SettingsPanel() {
  const { settingsOpen, setSettingsOpen } = useApp()
  const [cookie, setCookie] = useState<string | null>(null)
  const [pushConsent, setPushConsent] = useState<string | null>(null)

  useEffect(() => {
    if (settingsOpen) {
      setCookie(localStorage.getItem(COOKIE_KEY))
      setPushConsent(localStorage.getItem(PUSH_KEY))
    }
  }, [settingsOpen])

  function handleCookie(val: string | null) {
    if (val === null) {
      localStorage.removeItem(COOKIE_KEY)
    } else {
      localStorage.setItem(COOKIE_KEY, val)
      applyGa(val)
    }
    setCookie(val)
  }

  function handlePushGrant() {
    localStorage.setItem(PUSH_KEY, 'granted')
    setPushConsent('granted')
    if (typeof Notification !== 'undefined') {
      Notification.requestPermission()
    }
  }

  function handlePushDeny() {
    localStorage.setItem(PUSH_KEY, 'denied')
    setPushConsent('denied')
  }

  const cookieLabel = cookie === 'accepted' ? 'Aceito' : cookie === 'refused' ? 'Recusado' : 'Não definido'
  const pushLabel = pushConsent === 'granted' ? 'Notificações ativas' : pushConsent === 'denied' ? 'Notificações desativadas' : 'Não definido'

  return (
    <>
      {settingsOpen && (
        <div
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg transition-opacity dark:bg-slate-950/95"
          onClick={() => setSettingsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 border-l border-gray-200/60 bg-[#fff] shadow-xl transition-transform duration-300 ease-out dark:border-gray-800/60 dark:bg-slate-900 ${
          settingsOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14 border-b border-gray-200/40 dark:border-gray-800/40">
          <h2 className="text-sm font-black uppercase tracking-[0.12em] text-gray-800 dark:text-gray-200">
            Configurações
          </h2>
          <button
            onClick={() => setSettingsOpen(false)}
            className="flex size-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-slate-800 dark:hover:text-gray-300 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-5 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Bell size={14} className="text-gray-400" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
                Notificações
              </h3>
            </div>
            <div className="bento-card rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Push</p>
                  <p className="text-xs text-gray-400 mt-0.5">{pushLabel}</p>
                </div>
                <button
                  role="switch"
                  aria-checked={pushConsent === 'granted'}
                  onClick={pushConsent === 'granted' ? handlePushDeny : handlePushGrant}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    pushConsent === 'granted'
                      ? 'bg-green-500'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block size-5 rounded-full bg-white shadow ring-0 transition-transform duration-200 ${
                      pushConsent === 'granted' ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={14} className="text-gray-400" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
                Privacidade
              </h3>
            </div>
            <div className="bento-card rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Cookies</p>
                <span className="text-xs text-gray-400">{cookieLabel}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCookie('accepted')}
                  className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    cookie === 'accepted'
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                  }`}
                >
                  Aceitar
                </button>
                <button
                  onClick={() => handleCookie('refused')}
                  className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    cookie === 'refused'
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                  }`}
                >
                  Recusar
                </button>
                {cookie !== null && (
                  <button
                    onClick={() => handleCookie(null)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition-all duration-200"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
