import { createFileRoute } from "@tanstack/react-router";
import MagneticCursorView from "#/views/magnetic-cursor/MagneticCursorView";

export const Route = createFileRoute("/magnetic-cursor")({
    component: MagneticCursorView
});
