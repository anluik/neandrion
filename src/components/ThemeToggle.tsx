import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
        return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function applyTheme(theme: Theme) {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const initialTheme = getInitialTheme();
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    function toggleTheme() {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        applyTheme(nextTheme);
        window.localStorage.setItem("theme", nextTheme);
    }

    const label =
        theme === "dark"
            ? "Theme: night. Click to switch to day mode."
            : "Theme: day. Click to switch to night mode.";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={label}
            title={label}
            className="ghost-control flex items-center gap-1.75 rounded-full! px-3! py-1.5! text-[11px] tracking-[0.08em]"
        >
            <span className="glow-dot theme-dot transition-all duration-400" />
            <span>{theme === "dark" ? "NIGHT" : "DAY"}</span>
        </button>
    );
}
