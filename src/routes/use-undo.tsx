import { createFileRoute } from "@tanstack/react-router";
import UseUndoView from "#/views/use-undo/UseUndoView";

export const Route = createFileRoute("/use-undo")({ component: UseUndoView });
