import {
    HeadContent,
    Scripts,
    createRootRouteWithContext
} from "@tanstack/react-router";
import App from "#/app/App";
import Devtools from "#/app/Devtools";
import { THEME_INIT_SCRIPT } from "#/lib/theme";

import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";

interface MyRouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    head: () => ({
        meta: [
            {
                charSet: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                title: "Neandrion"
            }
        ],
        links: [
            {
                rel: "stylesheet",
                href: appCss
            }
        ]
    }),
    shellComponent: RootDocument
});

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
                />
                <title>Neandrion</title>
                <HeadContent />
            </head>
            <body className="bg-(--bg0) text-(--t1) antialiased transition-colors duration-500 selection:bg-(--magenta-soft) wrap-anywhere">
                <App>{children}</App>
                <Devtools />
                <Scripts />
            </body>
        </html>
    );
}
