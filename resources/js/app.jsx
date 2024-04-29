import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import WeatherProvider from "./Context/WeatherContext";
import SidebarProvider from "./Context/SidebarContext";
import ModalProvider from "./Context/ModalContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <WeatherProvider>
                <SidebarProvider>
                    <ModalProvider>
                        <App {...props} />
                    </ModalProvider>
                </SidebarProvider>
            </WeatherProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
