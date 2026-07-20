import { Link } from "@tanstack/react-router";
import { experimentGroups } from "#/experiments";
import LogoChip from "./LogoChip";

export default function CollapsedShelf({ onExpand }: { onExpand: () => void }) {
    return (
        <div className="flex h-full w-14 flex-col items-center gap-4 py-4">
            <Link to="/" title="Home" aria-label="Home">
                <LogoChip />
            </Link>
            <button
                type="button"
                onClick={onExpand}
                title="Expand"
                className="ghost-control"
            >
                »
            </button>
            <div className="flex flex-1 flex-col items-center gap-3.5 pt-2">
                {experimentGroups.map(group => (
                    <span
                        key={group.label}
                        title={group.label}
                        className={`glow-dot size-2.25! dot-${group.accent}`}
                    />
                ))}
            </div>
            <span className="mono-label pb-1.5 text-[10px]! tracking-[0.22em]! [writing-mode:vertical-rl]">
                SANDBOX
            </span>
        </div>
    );
}
