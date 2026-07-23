import { experiments } from "#/experiments";
import GlowDot from "./GlowDot";

const ExperimentPlaceholder = ({ index }: { index: string }) => {
    const experiment = experiments.find(item => item.index === index);

    if (!experiment) {
        return null;
    }

    return (
        <main className="relative min-h-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0 animate-drift bg-(image:--sky) bg-size-[100%_130%] motion-reduce:animate-none" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-(image:--ember)" />
            <div className="relative z-2 flex min-h-full items-center justify-center px-6 py-16">
                <section className="animate-rise w-[min(34rem,100%)] rounded-2xl border border-dashed border-(--line) bg-(--surface) p-8 text-center transition-colors duration-500 motion-reduce:animate-none">
                    <div className="flex items-center justify-center gap-2 font-mono text-[10.5px] font-semibold tracking-[0.16em] text-(--text-dim)">
                        <GlowDot accent={experiment.accent} />
                        {experiment.index}
                    </div>
                    <h1 className="font-display mb-3 mt-4 text-3xl font-bold tracking-tight">
                        {experiment.title}
                    </h1>
                    <p className="m-0 text-[15px] leading-[1.7] text-(--text-dim)">
                        An empty bench. This one has a spot on the shelf and a
                        page of its own — the experiment itself hasn&apos;t been
                        built yet.
                    </p>
                </section>
            </div>
            <div className="pointer-events-none absolute inset-0 z-5 bg-(image:--grain) opacity-5 mix-blend-overlay" />
        </main>
    );
};

export default ExperimentPlaceholder;
