import { Link } from '@tanstack/react-router'
import { accentColor, statusColor } from '#/experiments'
import type { Experiment, ExperimentGroup } from '#/experiments'

export default function ShelfItem({
  item,
  group,
}: {
  item: Experiment
  group: ExperimentGroup
}) {
  const accent = accentColor[group.accent]
  const rowStyle = {
    '--grp-c': accent.c,
    '--grp-bg': accent.bg,
  } as React.CSSProperties

  const content = (
    <>
      <span className="mono-label w-[30px] flex-shrink-0 !tracking-[0.06em]">
        {item.index}
      </span>
      <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {item.title}
      </span>
      <span
        className="glow-dot !h-[6px] !w-[6px]"
        style={{ '--dot-c': statusColor[item.status] } as React.CSSProperties}
        title={item.status}
      />
    </>
  )

  if (item.to) {
    return (
      <Link to={item.to} className="shelf-link" style={rowStyle}>
        {content}
      </Link>
    )
  }

  return (
    <span
      className="shelf-link cursor-default opacity-75"
      style={rowStyle}
      title="Not built yet"
    >
      {content}
    </span>
  )
}
