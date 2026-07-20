import ExhibitCaption from "./ExhibitCaption";

const lines = [
    "w-21 [--line-delay:0s]",
    "w-16 [--line-delay:0.18s]",
    "w-18.5 [--line-delay:0.36s]"
];

export default function StaggerCard() {
    return (
        <span
            className="flex flex-col items-center gap-2"
            title="#007 staggered-reveal"
        >
            <span className="exhibit-card accent-magenta flex flex-col gap-1.5 px-4 py-3.5">
                {lines.map((line, i) => (
                    <span key={i} className={`stagger-line ${line}`} />
                ))}
            </span>
            <ExhibitCaption>#007 staggered-reveal</ExhibitCaption>
        </span>
    );
}
