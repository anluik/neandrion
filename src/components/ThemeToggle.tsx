import { toggleTheme } from "#/lib/theme";

const ThemeToggle = () => (
    <button
        type="button"
        onClick={toggleTheme}
        className="flex cursor-pointer items-center gap-1.75 rounded-full border border-(--line) px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-(--t2) transition-all duration-250 hover:border-(--cyan) hover:text-(--cyan) hover:shadow-(--glow-c)"
    >
        <span className="inline-block size-1.75 shrink-0 rounded-full bg-current text-(--amber) shadow-[0_0_8px_currentColor] transition-all duration-400 dark:text-(--magenta)" />
        <span className="hidden dark:inline">
            NIGHT<span className="sr-only">, switch to day mode</span>
        </span>
        <span className="dark:hidden">
            DAY<span className="sr-only">, switch to night mode</span>
        </span>
    </button>
);

export default ThemeToggle;
