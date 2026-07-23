import { cn } from "#/lib/utils";
import type { AccentName } from "#/experiments";
import type { Ref } from "react";

const accentText: Record<AccentName, string> = {
    magenta: "text-(--magenta)",
    cyan: "text-(--cyan)",
    amber: "text-(--amber)"
};

interface GlowDotProps {
    ref?: Ref<HTMLSpanElement>;
    accent: AccentName;
    title?: string;
    className?: string;
}

const GlowDot = ({ ref, accent, title, className }: GlowDotProps) => (
    <span
        ref={ref}
        title={title}
        className={cn(
            "inline-block size-1.75 shrink-0 rounded-full bg-current shadow-[0_0_8px_currentColor]",
            accentText[accent],
            className
        )}
    />
);

export default GlowDot;
