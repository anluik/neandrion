import { createFileRoute } from "@tanstack/react-router";
import ElasticTabsView from "#/views/elastic-tabs/ElasticTabsView";

export const Route = createFileRoute("/elastic-tabs")({
    component: ElasticTabsView
});
