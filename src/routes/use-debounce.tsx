import { createFileRoute } from "@tanstack/react-router";
import UseDebounceView from "#/views/use-debounce/UseDebounceView.tsx";

export const Route = createFileRoute("/use-debounce")({
    component: UseDebounceView
});
