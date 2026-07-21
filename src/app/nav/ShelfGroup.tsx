import { accentText } from "#/experiments";
import ShelfItem from "./ShelfItem";
import type { ExperimentGroup } from "#/experiments";

export default function ShelfGroup({
    group,
    onNavigate
}: {
    group: ExperimentGroup;
    onNavigate: () => void;
}) {
    return (
        <div>
            <div className="flex items-center gap-2 px-1.5 pb-2">
                <span
                    className={`inline-block size-1.75 shrink-0 rounded-full bg-current shadow-[0_0_8px_currentColor] ${accentText[group.accent]}`}
                />
                <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] text-(--t2)">
                    {group.label}
                </span>
            </div>
            <div className="flex flex-col gap-0.5">
                {group.items.map(item => (
                    <ShelfItem
                        key={item.index}
                        item={item}
                        group={group}
                        onNavigate={onNavigate}
                    />
                ))}
            </div>
        </div>
    );
}
