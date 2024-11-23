"use client";

import {SubMenuItem} from "@/types/MenusTypes";
import MenuFinal from "./siderbar-menu-nivel-3";

type Props = {
    items: SubMenuItem;
};

export default function MenuSecond({items}: Props) {
    return (
        <div>
            <div>
                <span>{items.title}</span>
                {items.subMenu && items.subMenu.map((item, index) => <MenuFinal key={index} items={item}/>)}
            </div>
        </div>
    );
}
