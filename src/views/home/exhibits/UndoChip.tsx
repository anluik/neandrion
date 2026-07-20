import ExhibitCaption from "./ExhibitCaption";

export default function UndoChip() {
    return (
        <span className="flex flex-col items-center gap-2" title="#006 useUndo">
            <span className="exhibit-card accent-cyan inline-block rounded-lg! bg-(--code-bg) px-3.5 py-2 font-mono text-[12.5px] text-(--cyan)">
                undo() ↶
            </span>
            <ExhibitCaption>#006 useUndo</ExhibitCaption>
        </span>
    );
}
