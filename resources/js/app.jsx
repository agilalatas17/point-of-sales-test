import "./bootstrap";
import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "./config/themes";
import LayoutComp from "./components/layouts/LayoutComp";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ConfigProvider theme={ThemeConfig}>
                <LayoutComp>
                    <App {...props} />
                </LayoutComp>
            </ConfigProvider>
        );
    },
});
