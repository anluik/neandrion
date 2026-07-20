import { useEffect, useState } from 'react'
import CollapsedShelf from './CollapsedShelf'
import ExpandedShelf from './ExpandedShelf'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  // Transitions are disabled for the first paint so the persisted state
  // applies instantly instead of animating in on load.
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('sidebar')
    if (stored === 'collapsed' || stored === 'expanded') {
      setCollapsed(stored === 'collapsed')
    } else if (window.matchMedia('(max-width: 767px)').matches) {
      setCollapsed(true)
    }
    const id = requestAnimationFrame(() => setAnimate(true))
    return () => cancelAnimationFrame(id)
  }, [])

  function toggle() {
    setCollapsed((prev) => {
      window.localStorage.setItem('sidebar', prev ? 'expanded' : 'collapsed')
      return !prev
    })
  }

  return (
    <aside
      className="relative z-10 flex-shrink-0 overflow-hidden border-r border-[var(--line)] bg-[var(--side-bg)]"
      style={{
        width: collapsed ? '3.5rem' : '250px',
        transition: animate
          ? 'width 320ms cubic-bezier(0.4, 0, 0.2, 1), background-color 500ms ease, border-color 500ms ease'
          : 'background-color 500ms ease, border-color 500ms ease',
      }}
    >
      <div
        aria-hidden={!collapsed}
        inert={!collapsed}
        className="absolute inset-y-0 left-0 transition-opacity duration-200 ease-out"
        style={{ opacity: collapsed ? 1 : 0 }}
      >
        <CollapsedShelf onExpand={toggle} />
      </div>
      <div
        aria-hidden={collapsed}
        inert={collapsed}
        className="absolute inset-y-0 left-0 transition-opacity duration-200 ease-out"
        style={{ opacity: collapsed ? 0 : 1 }}
      >
        <ExpandedShelf onCollapse={toggle} />
      </div>
    </aside>
  )
}
