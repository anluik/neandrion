import { createFileRoute } from "@tanstack/react-router";
import CommandPaletteView from "#/views/command-palette/CommandPaletteView";

export const Route = createFileRoute("/command-palette")({
    component: CommandPaletteView
});
