import source from "#/hooks/experiments/useDebounce.tsx?raw";
import GlowDot from "#/components/GlowDot";

const HookSource = () => (
    <div className="overflow-hidden rounded-2xl border border-(--line) bg-(--surface)">
        <div className="flex items-center gap-2 border-b border-(--line) px-4 py-2.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-(--text-dim)">
            <GlowDot accent="cyan" />
            useDebounce.tsx
        </div>
        <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-[1.7] text-(--text)">
            <code>{source.trim()}</code>
        </pre>
    </div>
);

export default HookSource;
