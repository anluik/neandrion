import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  function toggleTheme() {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    applyTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
  }

  const label =
    theme === 'dark'
      ? 'Theme: night. Click to switch to day mode.'
      : 'Theme: day. Click to switch to night mode.'

  const dotColor = theme === 'dark' ? 'var(--magenta)' : 'var(--amber)'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="ghost-control flex items-center gap-[7px] !rounded-full !px-3 !py-1.5 text-[11px] tracking-[0.08em]"
    >
      <span
        className="glow-dot transition-all duration-400"
        style={{ '--dot-c': dotColor } as React.CSSProperties}
      />
      <span>{theme === 'dark' ? 'NIGHT' : 'DAY'}</span>
    </button>
  )
}
