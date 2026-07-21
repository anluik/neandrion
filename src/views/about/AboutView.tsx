export default function AboutView() {
    return (
        <main className="relative min-h-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0 animate-drift bg-(image:--sky) bg-size-[100%_130%] motion-reduce:animate-none" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-(image:--ember)" />
            <div className="relative z-2 mx-auto w-[min(920px,calc(100%-2rem))] px-4 py-16">
                <section className="animate-rise rounded-2xl border border-(--line) bg-(--s1) p-6 transition-colors duration-500 motion-reduce:animate-none sm:p-8">
                    <p className="mb-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-(--cyan)">
                        About
                    </p>
                    <h1 className="font-display mb-3 mt-0 text-4xl font-bold tracking-tight sm:text-5xl">
                        A shore for small experiments.
                    </h1>
                    <p className="m-0 max-w-3xl text-base/8 text-(--t2)">
                        Neandrion is a personal playground for learning frontend
                        techniques — animations, hooks, and interaction
                        patterns, each built for fun and living on its own page.
                        Pick anything from the shelf and poke it. New things
                        wash up whenever curiosity strikes.
                    </p>
                </section>
            </div>
            <div className="pointer-events-none absolute inset-0 z-5 bg-(image:--grain) opacity-5 mix-blend-overlay" />
        </main>
    );
}
