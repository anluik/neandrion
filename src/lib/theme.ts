export type Theme = "light" | "dark";

export const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var theme=(stored==='light'||stored==='dark')?stored:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(theme);root.setAttribute('data-theme',theme);root.style.colorScheme=theme;}catch(e){}})();`;

function readTheme(): Theme {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") {
        return attr;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function toggleTheme() {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(next);
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;

    try {
        window.localStorage.setItem("theme", next);
    } catch {}
}
