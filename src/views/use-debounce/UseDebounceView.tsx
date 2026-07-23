import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useDebounce } from "#/hooks/experiments/useDebounce";
import GhostButton from "#/components/GhostButton";
import GlowDot from "#/components/GlowDot";
import DebounceStage from "./DebounceStage";
import DelayControl from "./DelayControl";
import HookSource from "./HookSource";
import Readout from "./Readout";

const pickNextTarget = (from: number) => {
    let next = from;
    while (Math.abs(next - from) < 28) {
        next = 8 + Math.random() * 84;
    }
    return next;
};

const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

const UseDebounceView = () => {
    const [rawValue, setRawValue] = useState(50);
    const [delay, setDelay] = useState(420);
    const [auto, setAuto] = useState(true);

    const debounced = useDebounce(rawValue, delay);

    const rawRef = useRef(rawValue);
    const delayRef = useRef(delay);

    useEffect(() => {
        rawRef.current = rawValue;
    }, [rawValue]);

    useEffect(() => {
        delayRef.current = delay;
    }, [delay]);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setAuto(false);
        }
    }, []);

    useEffect(() => {
        if (!auto) {
            return;
        }
        let frame = 0;
        let phase: "active" | "hold" = "active";
        let from = rawRef.current;
        let to = pickNextTarget(from);
        let phaseStart = performance.now();
        let lastPush = 0;

        const tick = (now: number) => {
            if (phase === "active") {
                const duration = 600 + Math.abs(to - from) * 9;
                const progress = Math.min((now - phaseStart) / duration, 1);
                const value = from + (to - from) * easeInOut(progress);
                if (now - lastPush > 40) {
                    setRawValue(Math.round(value));
                    lastPush = now;
                }
                if (progress >= 1) {
                    setRawValue(Math.round(to));
                    from = to;
                    phase = "hold";
                    phaseStart = now;
                }
            } else if (now - phaseStart >= delayRef.current + 550) {
                to = pickNextTarget(from);
                phase = "active";
                phaseStart = now;
            }
            frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [auto]);

    const handleScrub = (value: number) => {
        if (auto) {
            setAuto(false);
        }
        setRawValue(value);
    };

    return (
        <main className="relative flex min-h-full flex-col overflow-hidden">

            <div className="relative z-2 flex min-h-full flex-col gap-5 px-6 py-9 md:px-10">
                <header className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 font-mono text-[10.5px] font-semibold tracking-[0.16em] text-(--text-dim)">
                            <GlowDot accent="cyan" />
                            #009
                        </div>
                        <h1 className="font-display mb-0 mt-3 text-3xl font-bold tracking-tight">
                            useDebounce
                        </h1>
                        <p className="m-0 mt-2 max-w-[54ch] text-[15px] leading-[1.6] text-(--text-dim)">
                            The raw signal changes on every move. The debounced
                            value waits for a pause, only committing once the
                            input has been quiet for the full delay.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <Readout
                            label="raw"
                            value={String(rawValue)}
                            accent="magenta"
                        />
                        <Readout
                            label="debounced"
                            value={String(debounced)}
                            accent="cyan"
                        />
                    </div>
                </header>

                <DebounceStage
                    rawValue={rawValue}
                    debounced={debounced}
                    delay={delay}
                    onScrub={handleScrub}
                />

                <div className="flex flex-wrap items-center gap-5">
                    <DelayControl
                        value={delay}
                        min={120}
                        max={1200}
                        onChange={setDelay}
                    />
                    <div className="flex items-center gap-2.5">
                        <GhostButton
                            onClick={() => setAuto(previous => !previous)}
                            className="gap-1.5"
                        >
                            {auto ? (
                                <Pause className="size-3.5" />
                            ) : (
                                <Play className="size-3.5" />
                            )}
                            {auto ? "Playing" : "Auto"}
                        </GhostButton>
                    </div>
                </div>

                <HookSource />
            </div>

            <div className="pointer-events-none absolute inset-0 z-5 bg-(image:--grain) opacity-5 mix-blend-overlay" />
        </main>
    );
};

export default UseDebounceView;
