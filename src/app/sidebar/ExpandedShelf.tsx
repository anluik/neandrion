import { Link } from "@tanstack/react-router";
import ThemeToggle from "#/components/ThemeToggle";
import { experimentGroups } from "#/experiments";
import LogoChip from "./LogoChip";
import ShelfItem from "./ShelfItem";

export default function ExpandedShelf({
    onCollapse
}: {
    onCollapse: () => void;
}) {
    return (
        <div className="flex h-full w-62.5 flex-col px-3.5 py-4">
            <div className="flex items-center gap-2.5 px-1.5 pb-3.5">
                <Link
                    to="/"
                    title="Home"
                    className="flex flex-1 items-center gap-2.5 text-inherit no-underline hover:text-inherit hover:[text-shadow:0_0_12px_var(--cyan)]"
                >
                    <LogoChip />
                    <span className="font-display text-base font-bold">
                        Neandrion
                    </span>
                </Link>
                <button
                    type="button"
                    onClick={onCollapse}
                    title="Collapse"
                    className="ghost-control"
                >
                    «
                </button>
            </div>

            <div className="flex flex-1 flex-col gap-4.5 overflow-auto pt-1.5">
                {experimentGroups.map(group => (
                    <div key={group.label}>
                        <div className="flex items-center gap-2 px-1.5 pb-2">
                            <span className={`glow-dot dot-${group.accent}`} />
                            <span className="mono-label">{group.label}</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            {group.items.map(item => (
                                <ShelfItem
                                    key={item.index}
                                    item={item}
                                    group={group}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between gap-2.5 border-t border-(--line) pt-3">
                <Link
                    to="/about"
                    className="rounded-lg px-2 py-1.5 text-[13px] font-semibold text-(--t2) no-underline transition-all duration-250 hover:text-(--cyan) hover:[text-shadow:0_0_12px_var(--cyan)]"
                >
                    About
                </Link>
                <ThemeToggle />
            </div>
        </div>
    );
}
