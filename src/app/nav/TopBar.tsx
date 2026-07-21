import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";
import ThemeToggle from "#/components/ThemeToggle.tsx";
import Logo from "#/components/Logo.tsx";

export default function TopBar({
    open,
    onToggle
}: {
    open: boolean;
    onToggle: () => void;
}) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const wasOpen = useRef(false);

    useEffect(() => {
        if (wasOpen.current && !open) {
            buttonRef.current?.focus();
        }
        wasOpen.current = open;
    }, [open]);

    return (
        <header className="flex h-14 shrink-0 items-center gap-2.5 border-b border-(--line) bg-(--side-bg) px-3.5 md:hidden">
            <Link
                to="/"
                title="Home"
                className="flex flex-1 items-center gap-2.5 hover:[text-shadow:0_0_12px_var(--cyan)]"
            >
                <Logo />
                <span className="font-display text-base font-bold">
                    Neandrion
                </span>
            </Link>
            <ThemeToggle />
            <button
                ref={buttonRef}
                type="button"
                onClick={onToggle}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="shelf"
                className="flex cursor-pointer items-center rounded-lg border border-(--line) p-1.5 text-(--t2) transition-all duration-250 hover:border-(--cyan) hover:text-(--cyan) hover:shadow-(--glow-c)"
            >
                <Menu className="size-4.5" aria-hidden />
            </button>
        </header>
    );
}
