import Sidebar from './sidebar/Sidebar'
import type { ReactNode } from 'react'

export default function App({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <Sidebar />
      <div className="relative min-w-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}
