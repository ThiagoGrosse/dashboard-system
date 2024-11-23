"use client";

import {MenuItem} from "@/types/MenusTypes";
import MenuSecond from "./sidebar-menu-nivel-2";

type Props = {
    items: MenuItem;
};

export default function MenuFirst({items}: Props) {
    return (
        <div>
            <div>
                <span>{items.title}</span>
                {items.subMenu && items.subMenu.map((item, index) => <MenuSecond key={index} items={item} />)}
            </div>
        </div>
    );
}
