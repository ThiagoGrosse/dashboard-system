"use client";

import Breadcrumb from "../breadcrumb/breadcrumb";

export default function TitlePage() {
    return (
        <div className="bg-slate-200 p-5">
            <h1 className="text-2xl text-orange-500 font-semibold">Titulo da página</h1>
            <Breadcrumb />
        </div>
    );
}
