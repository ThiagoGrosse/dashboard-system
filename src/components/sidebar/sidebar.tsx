"use client";

import { items } from "@/data/dataLinksSideBar";
import MenuFirst from "./sidebarItems/sidebar-menu-nivel-1";

const menuItems = items;

export default function Sidebar() {

    return (
        <aside>
            <nav className="p-4">
                {menuItems.map((item, index) => (
                    <MenuFirst key={index} items={item}/>
               ))}
            </nav>
        </aside>
    );
}
