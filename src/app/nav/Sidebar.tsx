import { useEffect, useRef } from "react";
import Shelf from "./Shelf";

export default function Sidebar({
    open,
    onClose
}: {
    open: boolean;
    onClose: () => void;
}) {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) {
            return;
        }

        closeRef.current?.focus();

        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, onClose]);

    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 48rem)");

        function onChange() {
            if (desktop.matches) {
                onClose();
            }
        }

        desktop.addEventListener("change", onChange);
        return () => desktop.removeEventListener("change", onChange);
    }, [onClose]);

    return (
        <>
            <div
                aria-hidden
                onClick={onClose}
                className={`fixed inset-0 z-20 bg-(--scrim) transition-opacity duration-300 ease-out md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />
            <aside
                id="shelf"
                className={`fixed inset-y-0 left-0 z-30 w-62.5 shrink-0 overflow-hidden border-r border-(--line) bg-(--side-bg) transition-[translate,visibility,background-color,border-color] duration-[500ms,500ms,500ms,500ms] ease-in-out motion-reduce:transition-none md:visible md:relative md:z-10 md:translate-x-0 ${open ? "visible translate-x-0" : "invisible -translate-x-full"}`}
            >
                <Shelf onDismiss={onClose} closeRef={closeRef} />
            </aside>
        </>
    );
}
