import { createFileRoute } from "@tanstack/react-router";
import StaggeredRevealView from "#/views/staggered-reveal/StaggeredRevealView";

export const Route = createFileRoute("/staggered-reveal")({
    component: StaggeredRevealView
});
