import ExhibitCaption from './ExhibitCaption'

export default function ElasticTabs() {
  return (
    <span
      className="flex flex-col items-center gap-2"
      title="#003 elastic-tabs"
    >
      <span
        className="exhibit-card relative flex gap-1.5 !rounded-full p-[7px]"
        style={
          {
            '--exh-c': 'var(--amber)',
            '--exh-glow': 'var(--glow-a)',
          } as React.CSSProperties
        }
      >
        <span className="absolute left-[7px] top-[7px] h-[26px] w-12 rounded-full border border-[var(--amber)] bg-[var(--amber-soft)] shadow-[0_0_10px_oklch(0.78_0.14_55_/_0.4)] [animation:ns-slide_4s_cubic-bezier(0.34,1.56,0.64,1)_infinite]" />
        <span className="relative px-3 py-1.5 font-mono text-[11px] text-[var(--t1)]">
          aa
        </span>
        <span className="relative px-3 py-1.5 font-mono text-[11px] text-[var(--t2)]">
          bb
        </span>
      </span>
      <ExhibitCaption>#003 elastic-tabs</ExhibitCaption>
    </span>
  )
}
