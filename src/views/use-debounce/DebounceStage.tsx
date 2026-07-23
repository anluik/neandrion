import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

const RING_RADIUS = 18;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

interface DebounceStageProps {
    rawValue: number;
    debounced: number;
    delay: number;
    onScrub: (value: number) => void;
}

const DebounceStage = ({
    rawValue,
    debounced,
    delay,
    onScrub
}: DebounceStageProps) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<SVGCircleElement>(null);
    const lastRawRef = useRef(0);
    const delayRef = useRef(delay);
    const [pulseKey, setPulseKey] = useState(0);

    useEffect(() => {
        delayRef.current = delay;
    }, [delay]);

    useEffect(() => {
        lastRawRef.current = performance.now();
    }, [rawValue]);

    useEffect(() => {
        setPulseKey(key => key + 1);
    }, [debounced]);

    useEffect(() => {
        let frame = 0;
        const tick = () => {
            const elapsed = performance.now() - lastRawRef.current;
            const progress = Math.min(
                elapsed / Math.max(delayRef.current, 1),
                1
            );
            if (ringRef.current) {
                ringRef.current.style.strokeDashoffset = String(
                    RING_CIRCUMFERENCE * (1 - progress)
                );
            }
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, []);

    const scrub = (event: PointerEvent<HTMLDivElement>) => {
        const rect = trackRef.current?.getBoundingClientRect();
        if (!rect) {
            return;
        }
        const fraction = (event.clientX - rect.left) / rect.width;
        onScrub(Math.round(Math.min(Math.max(fraction, 0), 1) * 100));
    };

    const gapStart = Math.min(rawValue, debounced);
    const gapWidth = Math.abs(rawValue - debounced);

    return (
        <div className="relative h-[clamp(20rem,58vh,42rem)] overflow-hidden rounded-2xl border border-(--line) bg-(--surface)">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-(image:--ember) opacity-70" />

            <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em]">
                <span className="flex items-center gap-2 text-(--magenta)">
                    <span className="size-1.75 rounded-full bg-(--magenta) shadow-(--glow-magenta)" />
                    live signal
                </span>
                <span className="flex items-center gap-2 text-(--cyan)">
                    <span className="size-1.75 rounded-full bg-(--cyan) shadow-(--glow-cyan)" />
                    debounced echo
                </span>
            </div>

            <div
                ref={trackRef}
                onPointerDown={scrub}
                onPointerMove={event => {
                    if (event.buttons > 0) {
                        scrub(event);
                    }
                }}
                className="absolute inset-x-10 bottom-16 top-10 cursor-ew-resize touch-none"
            >
                <div className="absolute inset-x-0 bottom-0 h-px bg-(--line)" />

                <div
                    style={{ left: `${rawValue}%` }}
                    className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-linear-to-t from-(--magenta) to-transparent opacity-55"
                />
                <div
                    style={{ left: `${debounced}%` }}
                    className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-linear-to-t from-(--cyan) to-transparent opacity-70 transition-[left] duration-200 ease-out"
                />

                <div
                    style={{ left: `${gapStart}%`, width: `${gapWidth}%` }}
                    className="absolute bottom-0 h-0.5 -translate-y-1/2 rounded-full bg-(--amber) opacity-55"
                />

                <div
                    style={{ left: `${rawValue}%` }}
                    className="absolute top-0 -translate-x-1/2 rounded-md bg-(--magenta-soft) px-1.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-(--magenta)"
                >
                    {rawValue}
                </div>
                <div
                    style={{ left: `${debounced}%` }}
                    className="absolute top-0 -translate-x-1/2 rounded-md bg-(--cyan-soft) px-1.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-(--cyan) transition-[left] duration-200 ease-out"
                >
                    {debounced}
                </div>

                <svg
                    viewBox="0 0 44 44"
                    style={{ left: `${rawValue}%` }}
                    className="absolute bottom-0 size-11 -translate-x-1/2 translate-y-1/2 -rotate-90"
                >
                    <circle
                        cx="22"
                        cy="22"
                        r={RING_RADIUS}
                        strokeWidth="2.5"
                        className="fill-none stroke-(--line)"
                    />
                    <circle
                        ref={ringRef}
                        cx="22"
                        cy="22"
                        r={RING_RADIUS}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={RING_CIRCUMFERENCE}
                        className="fill-none stroke-(--amber)"
                    />
                </svg>

                <span
                    key={pulseKey}
                    style={{ left: `${debounced}%` }}
                    className="animate-commit absolute bottom-0 size-7 rounded-full border border-(--cyan)"
                />

                <div
                    style={{ left: `${debounced}%` }}
                    className="absolute bottom-0 size-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-(--cyan) shadow-(--glow-cyan) transition-[left] duration-200 ease-out"
                />
                <div
                    style={{ left: `${rawValue}%` }}
                    className="absolute bottom-0 size-4 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-(--magenta) bg-(--surface) shadow-(--glow-magenta)"
                />
            </div>
        </div>
    );
};

export default DebounceStage;
