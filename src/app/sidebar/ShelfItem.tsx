import { Link } from "@tanstack/react-router";
import { statusDotClass } from "#/experiments";
import type { Experiment, ExperimentGroup } from "#/experiments";

export default function ShelfItem({
    item,
    group
}: {
    item: Experiment;
    group: ExperimentGroup;
}) {
    const content = (
        <>
            <span className="mono-label w-7.5 shrink-0 tracking-[0.06em]!">
                {item.index}
            </span>
            <span className="min-w-0 flex-1 truncate">{item.title}</span>
            <span
                className={`glow-dot size-1.5! ${statusDotClass[item.status]}`}
                title={item.status}
            />
        </>
    );

    if (item.to) {
        return (
            <Link to={item.to} className={`shelf-link accent-${group.accent}`}>
                {content}
            </Link>
        );
    }

    return (
        <span
            className={`shelf-link accent-${group.accent} cursor-default opacity-75`}
            title="Not built yet"
        >
            {content}
        </span>
    );
}
