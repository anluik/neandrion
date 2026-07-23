import { useEffect, useLayoutEffect, useRef, useState } from "react";

const flight: KeyframeAnimationOptions = {
    duration: 420,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fill: "forwards"
};

const instant: KeyframeAnimationOptions = { duration: 0, fill: "forwards" };

const useIsomorphicLayoutEffect =
    typeof window === "undefined" ? useEffect : useLayoutEffect;

const translate = (x: number, y: number): Keyframe => ({
    translate: `${x}px ${y}px`
});

/** Where `element` sits inside `container`, in the container's own coordinates. */
const offsetIn = (container: HTMLElement, element: HTMLElement) => {
    const from = container.getBoundingClientRect();
    const to = element.getBoundingClientRect();

    return {
        x: to.left - from.left - container.clientLeft + container.scrollLeft,
        y: to.top - from.top - container.clientTop + container.scrollTop
    };
};

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Drives one absolutely positioned dot around its container: it parks on the
 * element marked `data-dot-slot="<key>"` and flies there whenever the key
 * changes. The container is the dot's `offsetParent` — by definition the
 * element its coordinates are measured from, so there is no ref to thread
 * through and the two measurements always share an origin.
 *
 * The position lives entirely in a Web Animations keyframe, so nothing writes
 * an inline style, and every move starts from the dot's live position — an
 * interrupted flight continues from wherever it actually is.
 *
 * `placed` stays false until the first measurement, so the dot can hide rather
 * than flash in the container's corner before hydration.
 */
const useFlyingDot = (key: string | undefined) => {
    const dotRef = useRef<HTMLSpanElement>(null);
    const animationRef = useRef<Animation | null>(null);
    const previousKey = useRef<string | undefined>(undefined);
    const [placed, setPlaced] = useState(false);

    useIsomorphicLayoutEffect(() => {
        const dot = dotRef.current;
        const container = dot?.offsetParent;

        if (!dot || !(container instanceof HTMLElement)) {
            return;
        }

        if (!key) {
            // Fade out where it is; come back in place, not from a stale row.
            previousKey.current = undefined;
            return;
        }

        const move = (fly: boolean) => {
            const slot = container.querySelector<HTMLElement>(
                `[data-dot-slot="${key}"]`
            );

            if (!slot) {
                return;
            }

            const from = offsetIn(container, dot);
            const to = offsetIn(container, slot);

            animationRef.current?.cancel();
            animationRef.current = dot.animate(
                [translate(from.x, from.y), translate(to.x, to.y)],
                fly && !prefersReducedMotion() ? flight : instant
            );
            setPlaced(true);
        };

        move(previousKey.current !== undefined);
        previousKey.current = key;

        let live = true;
        const settle = () => {
            if (live) {
                move(false);
            }
        };

        // Rows shift under the dot when the shelf resizes or the webfonts land.
        let firstObservation = true;
        const observer = new ResizeObserver(() => {
            if (firstObservation) {
                firstObservation = false;
                return;
            }

            settle();
        });

        observer.observe(container);

        if (document.fonts.status !== "loaded") {
            void document.fonts.ready.then(settle);
        }

        return () => {
            live = false;
            observer.disconnect();
        };
    }, [key]);

    return { ref: dotRef, placed };
};

export default useFlyingDot;
