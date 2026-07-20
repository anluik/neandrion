import ExhibitCaption from "./ExhibitCaption";

export default function ElasticTabs() {
    return (
        <span
            className="flex flex-col items-center gap-2"
            title="#003 elastic-tabs"
        >
            <span className="exhibit-card accent-amber relative flex gap-1.5 rounded-full! p-1.75">
                <span className="absolute left-1.75 top-1.75 h-6.5 w-12 rounded-full border border-(--amber) bg-(--amber-soft) shadow-[0_0_10px_oklch(0.78_0.14_55/0.4)] animate-[ns-slide_4s_cubic-bezier(0.34,1.56,0.64,1)_infinite]" />
                <span className="relative px-3 py-1.5 font-mono text-[11px] text-(--t1)">
                    aa
                </span>
                <span className="relative px-3 py-1.5 font-mono text-[11px] text-(--t2)">
                    bb
                </span>
            </span>
            <ExhibitCaption>#003 elastic-tabs</ExhibitCaption>
        </span>
    );
}
