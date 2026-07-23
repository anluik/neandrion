import { useRouterState } from "@tanstack/react-router";
import { useRef } from "react";
import GlowDot from "#/components/GlowDot";
import { experiments } from "#/experiments";
import useFlyingDot from "#/hooks/useFlyingDot";
import { cn } from "#/lib/utils";
import type { AccentName } from "#/experiments";

const ShelfDot = () => {
    const pathname = useRouterState({
        select: state => state.location.pathname
    });
    const active = experiments.find(experiment => experiment.to === pathname);
    const { ref, placed } = useFlyingDot(active?.index);

    const accent = useRef<AccentName>("cyan");
    accent.current = active?.accent ?? accent.current;

    return (
        <GlowDot
            ref={ref}
            accent={accent.current}
            className={cn(
                "pointer-events-none absolute left-0 top-0 size-1.5 transition-[color,box-shadow,opacity] duration-300 ease-out",
                !(active && placed) && "opacity-0"
            )}
        />
    );
};

export default ShelfDot;
