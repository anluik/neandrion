export interface Experiment {
    index: string;
    title: string;
    to: string;
}

export type AccentName = "magenta" | "cyan" | "amber";

export interface ExperimentGroup {
    label: string;
    accent: AccentName;
    items: Array<Experiment>;
}

export const experimentGroups: Array<ExperimentGroup> = [
    {
        label: "ANIMATIONS",
        accent: "magenta",
        items: [
            {
                index: "#008",
                title: "Magnetic cursor",
                to: "/magnetic-cursor"
            },
            {
                index: "#007",
                title: "Staggered reveal",
                to: "/staggered-reveal"
            }
        ]
    },
    {
        label: "HOOKS",
        accent: "cyan",
        items: [
            { index: "#009", title: "useBreakbeat", to: "/use-breakbeat" },
            { index: "#006", title: "useUndo", to: "/use-undo" }
        ]
    },
    {
        label: "PATTERNS",
        accent: "amber",
        items: [
            { index: "#005", title: "Command palette", to: "/command-palette" },
            { index: "#003", title: "Elastic tabs", to: "/elastic-tabs" }
        ]
    }
];

export const experiments = experimentGroups.flatMap(group =>
    group.items.map(item => ({ ...item, accent: group.accent }))
);
