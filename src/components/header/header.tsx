"use client";

import {Menu} from "lucide-react";
import {useSidebar} from "../sidebar-provider";
import {MenuHeader} from "./components/menu-header";

export default function Header() {
    const {toggleSidebar} = useSidebar();

    const openSidebar = () => {
        toggleSidebar(true);
    };

    return (
        <nav className="p-5 w-full flex justify-between items-center">
            <button type="button" onClick={openSidebar}>
                <Menu />
            </button>

            <MenuHeader />
        </nav>
    );
}
