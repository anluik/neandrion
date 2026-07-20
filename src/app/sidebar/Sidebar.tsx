import { useEffect, useState } from "react";
import CollapsedShelf from "./CollapsedShelf";
import ExpandedShelf from "./ExpandedShelf";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    // Transitions are disabled for the first paint so the persisted state
    // applies instantly instead of animating in on load.
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const stored = window.localStorage.getItem("sidebar");
        if (stored === "collapsed" || stored === "expanded") {
            setCollapsed(stored === "collapsed");
        } else if (window.matchMedia("(max-width: 767px)").matches) {
            setCollapsed(true);
        }
        const id = requestAnimationFrame(() => setAnimate(true));
        return () => cancelAnimationFrame(id);
    }, []);

    function toggle() {
        setCollapsed(prev => {
            window.localStorage.setItem(
                "sidebar",
                prev ? "expanded" : "collapsed"
            );
            return !prev;
        });
    }

    return (
        <aside
            className={`relative z-10 shrink-0 overflow-hidden border-r border-(--line) bg-(--side-bg) ${collapsed ? "w-14" : "w-62.5"} ${animate ? "shelf-frame--animate" : "shelf-frame"}`}
        >
            <div
                aria-hidden={!collapsed}
                inert={!collapsed}
                className={`absolute inset-y-0 left-0 transition-opacity duration-200 ease-out ${collapsed ? "opacity-100" : "opacity-0"}`}
            >
                <CollapsedShelf onExpand={toggle} />
            </div>
            <div
                aria-hidden={collapsed}
                inert={collapsed}
                className={`absolute inset-y-0 left-0 transition-opacity duration-200 ease-out ${collapsed ? "opacity-0" : "opacity-100"}`}
            >
                <ExpandedShelf onCollapse={toggle} />
            </div>
        </aside>
    );
}
