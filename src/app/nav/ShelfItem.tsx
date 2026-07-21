import { Link } from "@tanstack/react-router";
import { accentText, statusAccent } from "#/experiments";
import type { AccentName, Experiment, ExperimentGroup } from "#/experiments";

const link =
    "flex items-center gap-2.25 rounded-lg px-2 py-1.75 text-[13.5px] font-medium transition-all duration-200 focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-(--cyan)";

const accentHover: Record<AccentName, string> = {
    magenta:
        "hover:bg-(--magenta-soft) hover:text-(--magenta) hover:[text-shadow:0_0_12px_var(--magenta)]",
    cyan: "hover:bg-(--cyan-soft) hover:text-(--cyan) hover:[text-shadow:0_0_12px_var(--cyan)]",
    amber: "hover:bg-(--amber-soft) hover:text-(--amber) hover:[text-shadow:0_0_12px_var(--amber)]"
};

export default function ShelfItem({
    item,
    group,
    onNavigate
}: {
    item: Experiment;
    group: ExperimentGroup;
    onNavigate: () => void;
}) {
    const content = (
        <>
            <span className="w-7.5 shrink-0 font-mono text-[10.5px] font-semibold tracking-[0.06em] text-(--t2)">
                {item.index}
            </span>
            <span className="min-w-0 flex-1 truncate">{item.title}</span>
            <span
                title={item.status}
                className={`inline-block size-1.5 shrink-0 rounded-full bg-current shadow-[0_0_8px_currentColor] ${accentText[statusAccent[item.status]]}`}
            />
        </>
    );

    return (
        <Link
            to={item.to}
            onClick={onNavigate}
            className={`${link} ${accentHover[group.accent]}`}
        >
            {content}
        </Link>
    );
}
