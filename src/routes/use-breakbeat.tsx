import { createFileRoute } from "@tanstack/react-router";
import UseBreakbeatView from "#/views/use-breakbeat/UseBreakbeatView";

export const Route = createFileRoute("/use-breakbeat")({
    component: UseBreakbeatView
});
