export type ExperimentStatus = "live" | "wip" | "idea";

export interface Experiment {
    /** Mono shelf index, e.g. "#008" */
    index: string;
    title: string;
    status: ExperimentStatus;
    /** Route path once the experiment has its own page; omit while it's an idea */
    to?: string;
}

export type AccentName = "magenta" | "cyan" | "amber";

export interface ExperimentGroup {
    label: string;
    accent: AccentName;
    items: Array<Experiment>;
}

/*
 * Status → glow-dot color class. Accent colors are applied directly from
 * `group.accent` via the matching `.accent-*` / `.dot-*` classes in styles.css.
 */
export const statusDotClass: Record<ExperimentStatus, string> = {
    live: "dot-cyan",
    wip: "dot-amber",
    idea: "dot-magenta"
};

/*
 * The shelf. Everything except #004 is a placeholder from the design until
 * the real experiment is built — give an entry a `to` route when it goes live.
 */
export const experimentGroups: Array<ExperimentGroup> = [
    {
        label: "ANIMATIONS",
        accent: "magenta",
        items: [
            { index: "#008", title: "Magnetic cursor", status: "idea" },
            { index: "#007", title: "Staggered reveal", status: "idea" },
            {
                index: "#004",
                title: "Horizon gradient",
                status: "live",
                to: "/"
            }
        ]
    },
    {
        label: "HOOKS",
        accent: "cyan",
        items: [
            { index: "#009", title: "useBreakbeat", status: "idea" },
            { index: "#006", title: "useUndo", status: "idea" }
        ]
    },
    {
        label: "PATTERNS",
        accent: "amber",
        items: [
            { index: "#005", title: "Command palette", status: "idea" },
            { index: "#003", title: "Elastic tabs", status: "idea" }
        ]
    }
];
