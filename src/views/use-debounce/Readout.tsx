import { cn } from "#/lib/utils";
import type { AccentName } from "#/experiments";

const accentText: Record<AccentName, string> = {
    magenta: "text-(--magenta)",
    cyan: "text-(--cyan)",
    amber: "text-(--amber)"
};

interface ReadoutProps {
    label: string;
    value: string;
    accent: AccentName;
    className?: string;
}

const Readout = ({ label, value, accent, className }: ReadoutProps) => (
    <div className={cn("flex flex-col gap-1", className)}>
        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-(--text-dim)">
            {label}
        </span>
        <span
            className={cn(
                "font-display text-2xl font-bold tabular-nums",
                accentText[accent]
            )}
        >
            {value}
        </span>
    </div>
);

export default Readout;
