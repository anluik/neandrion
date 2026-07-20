import ExhibitCaption from "./ExhibitCaption";

const bars = [
    "[--bar-c:var(--cyan)] [--bar-dur:0.9s] [--bar-delay:0s]",
    "[--bar-c:var(--magenta)] [--bar-dur:1.15s] [--bar-delay:0.15s]",
    "[--bar-c:var(--amber)] [--bar-dur:0.75s] [--bar-delay:0.3s]",
    "[--bar-c:var(--cyan)] [--bar-dur:1.3s] [--bar-delay:0.45s]"
];

export default function BreakbeatBars() {
    return (
        <span
            className="flex flex-col items-center gap-2"
            title="#009 useBreakbeat"
        >
            <span className="exhibit-card accent-cyan flex h-14.5 items-end gap-1 px-3.5 py-2.5">
                {bars.map((bar, i) => (
                    <span key={i} className={`beat-bar ${bar}`} />
                ))}
            </span>
            <ExhibitCaption>#009 useBreakbeat</ExhibitCaption>
        </span>
    );
}
