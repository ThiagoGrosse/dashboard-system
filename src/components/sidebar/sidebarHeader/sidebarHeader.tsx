"use client";

import {useSidebar} from "@/components/sidebar-provider";

export default function SidebarHeader() {
    const {toggleSidebar} = useSidebar();

    const toggleSidebarMenu = () => {
        toggleSidebar(false);
    };

    return (
        <div className="w-full h-16 flex items-center justify-center bg-slate-600">
            <h2>Dashboard</h2>
            <button type="button" className="absolute right-5" onClick={toggleSidebarMenu}>
                x
            </button>
        </div>
    );
}
