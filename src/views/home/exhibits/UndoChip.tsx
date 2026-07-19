import ExhibitCaption from './ExhibitCaption'

export default function UndoChip() {
  return (
    <span className="flex flex-col items-center gap-2" title="#006 useUndo">
      <span
        className="exhibit-card inline-block !rounded-lg bg-[var(--code-bg)] px-3.5 py-2 font-mono text-[12.5px] text-[var(--cyan)]"
        style={
          {
            '--exh-c': 'var(--cyan)',
            '--exh-glow': 'var(--glow-c)',
          } as React.CSSProperties
        }
      >
        undo() ↶
      </span>
      <ExhibitCaption>#006 useUndo</ExhibitCaption>
    </span>
  )
}
