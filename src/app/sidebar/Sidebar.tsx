import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import ThemeToggle from '#/components/ThemeToggle'
import { accentColor, experimentGroups } from '#/experiments'
import LogoChip from './LogoChip'
import ShelfItem from './ShelfItem'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('sidebar')
    if (stored === 'collapsed' || stored === 'expanded') {
      setCollapsed(stored === 'collapsed')
    } else if (window.matchMedia('(max-width: 767px)').matches) {
      setCollapsed(true)
    }
  }, [])

  function toggle() {
    setCollapsed((prev) => {
      window.localStorage.setItem('sidebar', prev ? 'expanded' : 'collapsed')
      return !prev
    })
  }

  if (collapsed) {
    return (
      <aside className="z-10 flex w-14 flex-shrink-0 flex-col items-center gap-4 border-r border-[var(--line)] bg-[var(--side-bg)] py-4 transition-colors duration-500">
        <Link to="/" title="Home" aria-label="Home">
          <LogoChip />
        </Link>
        <button
          type="button"
          onClick={toggle}
          title="Expand"
          className="ghost-control"
        >
          »
        </button>
        <div className="flex flex-1 flex-col items-center gap-[14px] pt-2">
          {experimentGroups.map((group) => (
            <span
              key={group.label}
              title={group.label}
              className="glow-dot !h-[9px] !w-[9px]"
              style={
                {
                  '--dot-c': accentColor[group.accent].c,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <span className="mono-label pb-1.5 !text-[10px] !tracking-[0.22em] [writing-mode:vertical-rl]">
          SANDBOX
        </span>
      </aside>
    )
  }

  return (
    <aside className="z-10 flex w-[250px] flex-shrink-0 flex-col border-r border-[var(--line)] bg-[var(--side-bg)] px-3.5 py-4 transition-colors duration-500">
      <div className="flex items-center gap-2.5 px-1.5 pb-3.5">
        <Link
          to="/"
          title="Home"
          className="flex flex-1 items-center gap-2.5 text-inherit no-underline hover:text-inherit hover:[text-shadow:0_0_12px_var(--cyan)]"
        >
          <LogoChip />
          <span className="font-display text-base font-bold">Neandron</span>
        </Link>
        <button
          type="button"
          onClick={toggle}
          title="Collapse"
          className="ghost-control"
        >
          «
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-[18px] overflow-auto pt-1.5">
        {experimentGroups.map((group) => (
          <div key={group.label}>
            <div className="flex items-center gap-2 px-1.5 pb-2">
              <span
                className="glow-dot"
                style={
                  {
                    '--dot-c': accentColor[group.accent].c,
                  } as React.CSSProperties
                }
              />
              <span className="mono-label">{group.label}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <ShelfItem key={item.index} item={item} group={group} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2.5 border-t border-[var(--line)] pt-3">
        <Link
          to="/about"
          className="rounded-lg px-2 py-1.5 text-[13px] font-semibold text-[var(--t2)] no-underline transition-all duration-250 hover:text-[var(--cyan)] hover:[text-shadow:0_0_12px_var(--cyan)]"
        >
          About
        </Link>
        <ThemeToggle />
      </div>
    </aside>
  )
}
