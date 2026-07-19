import ExhibitCaption from './ExhibitCaption'

export default function BreakbeatBars() {
  const bars = [
    { c: 'var(--cyan)', dur: '0.9s', delay: '0s' },
    { c: 'var(--magenta)', dur: '1.15s', delay: '0.15s' },
    { c: 'var(--amber)', dur: '0.75s', delay: '0.3s' },
    { c: 'var(--cyan)', dur: '1.3s', delay: '0.45s' },
  ]
  return (
    <span
      className="flex flex-col items-center gap-2"
      title="#009 useBreakbeat"
    >
      <span
        className="exhibit-card flex h-[58px] items-end gap-1 px-3.5 py-2.5"
        style={
          {
            '--exh-c': 'var(--cyan)',
            '--exh-glow': 'var(--glow-c)',
          } as React.CSSProperties
        }
      >
        {bars.map((bar, i) => (
          <span
            key={i}
            className="w-1.5 rounded-[3px]"
            style={{
              height: 34,
              background: bar.c,
              boxShadow: `0 0 8px ${bar.c}`,
              transformOrigin: 'bottom',
              animation: `ns-bar ${bar.dur} ease-in-out ${bar.delay} infinite`,
            }}
          />
        ))}
      </span>
      <ExhibitCaption>#009 useBreakbeat</ExhibitCaption>
    </span>
  )
}
