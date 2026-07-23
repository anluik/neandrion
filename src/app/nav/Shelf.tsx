import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import GhostButton from "#/components/GhostButton";
import ThemeToggle from "#/components/ThemeToggle";
import { experimentGroups } from "#/experiments";
import Logo from "../../components/Logo.tsx";
import ShelfDot from "./ShelfDot";
import ShelfGroup from "./ShelfGroup";
import type { RefObject } from "react";

export default function Shelf({
    onDismiss,
    closeRef
}: {
    onDismiss: () => void;
    closeRef: RefObject<HTMLButtonElement | null>;
}) {
    return (
        <div className="flex h-full w-62.5 flex-col px-3.5 py-4">
            <div className="flex items-center gap-2.5 px-1.5 pb-3.5">
                <Link
                    to="/"
                    title="Home"
                    onClick={onDismiss}
                    className="flex flex-1 items-center gap-2.5 hover:[text-shadow:0_0_12px_var(--cyan)]"
                >
                    <Logo />
                    <span className="font-display text-base font-bold">
                        Neandrion
                    </span>
                </Link>
                <GhostButton
                    ref={closeRef}
                    onClick={onDismiss}
                    title="Close menu"
                    aria-label="Close menu"
                    className="p-1.5 md:hidden"
                >
                    <X className="size-4" aria-hidden />
                </GhostButton>
            </div>

            <nav
                aria-label="Experiments"
                className="relative flex flex-1 flex-col gap-4.5 overflow-auto overscroll-contain pt-1.5"
            >
                {experimentGroups.map(group => (
                    <ShelfGroup
                        key={group.label}
                        group={group}
                        onNavigate={onDismiss}
                    />
                ))}
                <ShelfDot />
            </nav>

            <div className="flex items-center justify-between gap-2.5 border-t border-(--line) pt-3">
                <Link
                    to="/about"
                    onClick={onDismiss}
                    className="rounded-lg px-2 py-1.5 text-[13px] font-semibold text-(--text-dim) transition-all duration-250 hover:text-(--cyan) hover:[text-shadow:0_0_12px_var(--cyan)]"
                >
                    About
                </Link>
                <ThemeToggle />
            </div>
        </div>
    );
}
