import ExhibitCaption from './ExhibitCaption'

export default function StaggerCard() {
  const lines = [
    { w: 84, delay: '0s' },
    { w: 64, delay: '0.18s' },
    { w: 74, delay: '0.36s' },
  ]
  return (
    <span
      className="flex flex-col items-center gap-2"
      title="#007 staggered-reveal"
    >
      <span
        className="exhibit-card flex flex-col gap-1.5 px-4 py-3.5"
        style={
          {
            '--exh-c': 'var(--magenta)',
            '--exh-glow': 'var(--glow-m)',
          } as React.CSSProperties
        }
      >
        {lines.map((line) => (
          <span
            key={line.w}
            className="h-[7px] rounded bg-[var(--magenta-soft)]"
            style={{
              width: line.w,
              animation: `ns-cascade 3.6s ease ${line.delay} infinite`,
            }}
          />
        ))}
      </span>
      <ExhibitCaption>#007 staggered-reveal</ExhibitCaption>
    </span>
  )
}
