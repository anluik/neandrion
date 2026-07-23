interface DelayControlProps {
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
}

const DelayControl = ({ value, min, max, onChange }: DelayControlProps) => (
    <label className="flex flex-1 flex-col gap-2">
        <span className="flex items-center justify-between font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-(--text-dim)">
            <span>debounce delay</span>
            <span className="text-(--cyan)">{value} ms</span>
        </span>
        <input
            type="range"
            min={min}
            max={max}
            step={20}
            value={value}
            onChange={event => onChange(Number(event.target.value))}
            className="w-full cursor-pointer accent-(--cyan)"
        />
    </label>
);

export default DelayControl;
