import { toggleTheme } from "#/lib/theme";

const ThemeToggle = () => (
    <button
        type="button"
        onClick={toggleTheme}
        className="ghost-control flex items-center gap-1.75 rounded-full! px-3! py-1.5! text-[11px] tracking-[0.08em]"
    >
        <span className="glow-dot theme-dot transition-all duration-400" />
        <span className="theme-label-night">
            NIGHT<span className="sr-only">, switch to day mode</span>
        </span>
        <span className="theme-label-day">
            DAY<span className="sr-only">, switch to night mode</span>
        </span>
    </button>
);

export default ThemeToggle;
