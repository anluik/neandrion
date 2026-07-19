export default function AboutView() {
  return (
    <main className="relative min-h-full overflow-hidden">
      <div className="stage-sky" />
      <div className="stage-ember" />
      <div className="page-wrap relative z-[2] px-4 py-16">
        <section className="panel rise-in p-6 sm:p-8">
          <p className="mono-label mb-2 uppercase !text-[var(--cyan)]">About</p>
          <h1 className="font-display mb-3 mt-0 text-4xl font-bold tracking-tight sm:text-5xl">
            A shore for small experiments.
          </h1>
          <p className="m-0 max-w-3xl text-base leading-8 text-[var(--t2)]">
            Neandron is a personal playground for learning frontend techniques —
            animations, hooks, and interaction patterns, each built for fun and
            living on its own page. Pick anything from the shelf and poke it.
            New things wash up whenever curiosity strikes.
          </p>
        </section>
      </div>
      <div className="grain z-[5]" />
    </main>
  )
}
