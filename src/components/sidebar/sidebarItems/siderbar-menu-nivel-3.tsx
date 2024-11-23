"use client";

import {SubMenuItem} from "@/types/MenusTypes";

type Props = {
    items: SubMenuItem;
};

export default function MenuFinal({items}: Props) {
    return (
        <div>
            <div>
                <span>{items.title}</span>
            </div>
        </div>
    );
}
