"use client";

import {Menu} from "lucide-react";
import {useSidebar} from "../sidebar-provider";

export default function Header() {
    const {toggleSidebar} = useSidebar();

    const openSidebar = () => {
        toggleSidebar(true);
    };

    return (
        <div className="p-5">
            <button type="button" onClick={openSidebar}>
                <Menu />
            </button>
        </div>
    );
}
