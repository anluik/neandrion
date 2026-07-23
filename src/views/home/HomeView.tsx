export default function HomeView() {
    return (
        <main className="relative min-h-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0 animate-drift bg-(image:--sky) bg-size-[100%_130%] motion-reduce:animate-none" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-(image:--ember)" />
            <div className="pointer-events-none absolute left-[-8%] top-[6%] h-95 w-120 animate-bloom rounded-full bg-(image:--bloom-warm) blur-[10px] motion-reduce:animate-none" />
            <div className="pointer-events-none absolute right-[-6%] top-[30%] h-90 w-110 animate-bloom rounded-full bg-(image:--bloom-cool) blur-[10px] [animation-delay:2.4s] [animation-duration:12s] motion-reduce:animate-none" />

            <div className="relative z-2 flex min-h-full flex-col items-center justify-center px-6 py-16 text-center md:px-15">
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-(--cyan) [text-shadow:0_0_12px_var(--cyan-soft)]">
                    React playground · est. sundown
                </div>
                <h1 className="font-display mx-0 mb-0 mt-4.5 max-w-[14ch] text-balance text-[clamp(38px,6vw,64px)] font-bold leading-[1.04] tracking-[-0.015em]">
                    One beach, many experiments.
                </h1>
                <p className="mb-0 mt-4.5 max-w-[50ch] text-pretty text-[16.5px] leading-[1.65] text-(--text-dim)">
                    Everything on the shelf is a small experiment in frontend
                    technique — animations, hooks, and interaction patterns,
                    each living on its own page.
                </p>
                <div className="mt-6.5 flex items-center gap-2.5 font-mono text-xs tracking-widest text-(--text-dim)">
                    <span className="text-(--amber)">←</span>
                    <span>pick one from the shelf and start poking</span>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-5 bg-(image:--grain) opacity-5 mix-blend-overlay" />
        </main>
    );
}
