export function navWithTransition(update: () => void, type?: 'nav-forward' | 'nav-back') {
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    if (type) document.documentElement.classList.add(type)
    const vt = document.startViewTransition(update)
    vt.finished.finally(() => {
      if (type) document.documentElement.classList.remove(type)
    })
  } else {
    update()
  }
}
