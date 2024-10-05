'use client'
import { useUIStore } from "@/app/lib/store/useUIStore";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export default function Page() {
    // const {
    //     font,
    //     theme,
    //     contrast,
    //     brightness
    // } = useUIStore(16);

    

    return (
        <section className="flex flex-col gap-5">
        {/* 나의 정보 */}
        <h1 className="text-2xl font-bold text-darkblue">화면 설정</h1>
        {/* 글자 크기 조정 */}
        <div className="flex justify-between items-center bg-slate-100 p-7 rounded-lg text-gray-700">
            <span className="font-bold text-lg">글자 크기</span>
            <input 
                type="range"
                min="12"
                max="24"
                value={16}
                // onChange={(e) => setFontSize(Number(e.target.value))}
                />
            </div>
            {/* 테마 설정 */}
            <div className="flex justify-between items-center bg-slate-100 p-7 rounded-lg text-gray-700">
                <span className="font-bold text-lg">테마 설정</span>
                    <div className="flex gap-3 ">
                    <button>
                        <MdLightMode className="w-10 h-10 box-content"/>
                    </button>
                    <button>
                        <MdOutlineDarkMode className="w-10 h-10 box-content"/>
                    </button>
                    </div>
                </div>
            {/* 밝기 설정 */}
            <div className="flex justify-between items-center bg-slate-100 p-7 rounded-lg text-gray-700">
                <span className="font-bold text-lg">밝기 설정</span>
                <input 
                    type="range"
                    min="10"
                    max="20"
                    value={16}
                    // onChange={(e) => setFontSize(Number(e.target.value))}
                    />
            </div>
    </section>
    )
}