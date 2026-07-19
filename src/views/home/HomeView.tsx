import BreakbeatBars from './exhibits/BreakbeatBars'
import ElasticTabs from './exhibits/ElasticTabs'
import MagneticPill from './exhibits/MagneticPill'
import StaggerCard from './exhibits/StaggerCard'
import UndoChip from './exhibits/UndoChip'

/*
 * Floating exhibits: tiny live previews of experiments from the shelf.
 * Each is a placeholder until its experiment gets a real route — see
 * src/experiments.ts.
 */

interface FloatSpot {
  className: string
  dur: string
  delay: string
  exhibit: React.ReactNode
}

const floats: Array<FloatSpot> = [
  {
    className: 'left-[9%] top-[16%]',
    dur: '7s',
    delay: '0s',
    exhibit: <MagneticPill />,
  },
  {
    className: 'right-[11%] top-[13%]',
    dur: '9s',
    delay: '1.2s',
    exhibit: <BreakbeatBars />,
  },
  {
    className: 'right-[8%] bottom-[24%]',
    dur: '8s',
    delay: '0.6s',
    exhibit: <ElasticTabs />,
  },
  {
    className: 'left-[10%] bottom-[22%]',
    dur: '10s',
    delay: '2s',
    exhibit: <StaggerCard />,
  },
  {
    className: 'left-[22%] bottom-[7%]',
    dur: '8.5s',
    delay: '1.5s',
    exhibit: <UndoChip />,
  },
]

export default function HomeView() {
  return (
    <main className="relative min-h-full overflow-hidden">
      <div className="stage-sky" />
      <div className="stage-ember" />
      <div
        className="bloom -left-[8%] top-[6%] h-[380px] w-[480px]"
        style={
          { '--bloom-c': 'oklch(0.72 0.23 350 / 0.15)' } as React.CSSProperties
        }
      />
      <div
        className="bloom -right-[6%] top-[30%] h-[360px] w-[440px] [animation-delay:2.4s] [animation-duration:12s]"
        style={
          { '--bloom-c': 'oklch(0.8 0.13 195 / 0.12)' } as React.CSSProperties
        }
      />

      <div className="relative z-[2] flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center md:px-[60px]">
        <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan)] [text-shadow:0_0_12px_var(--cyan-soft)]">
          React playground · est. sundown
        </div>
        <h1 className="font-display mx-0 mb-0 mt-[18px] max-w-[14ch] text-balance text-[clamp(38px,6vw,64px)] font-bold leading-[1.04] tracking-[-0.015em]">
          One beach, many experiments.
        </h1>
        <p className="mb-0 mt-[18px] max-w-[50ch] text-pretty text-[16.5px] leading-[1.65] text-[var(--t2)]">
          Everything glowing on this shore is a real experiment from the shelf —
          animations, hooks, and patterns, each living on its own page. This one
          is made of all of them.
        </p>
        <div className="mt-[26px] flex items-center gap-2.5 font-mono text-xs tracking-[0.1em] text-[var(--t2)]">
          <span className="text-[var(--amber)]">←</span>
          <span>pick one from the shelf, or poke whatever floats</span>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-center gap-x-8 gap-y-6 md:hidden">
          {floats.map((spot, i) => (
            <span key={i}>{spot.exhibit}</span>
          ))}
        </div>
      </div>

      {floats.map((spot, i) => (
        <span
          key={i}
          className={`float-y absolute z-[3] hidden md:block ${spot.className}`}
          style={
            {
              '--float-dur': spot.dur,
              '--float-delay': spot.delay,
            } as React.CSSProperties
          }
        >
          {spot.exhibit}
        </span>
      ))}

      <span className="mono-label absolute bottom-[8%] right-[10%] z-[3] hidden items-center gap-2 !tracking-[0.1em] md:flex">
        <span
          className="glow-dot !h-[6px] !w-[6px]"
          style={{ '--dot-c': 'var(--amber)' } as React.CSSProperties}
        />
        #004 horizon-gradient — you’re looking at it
      </span>

      <div className="grain z-[5]" />
    </main>
  )
}
