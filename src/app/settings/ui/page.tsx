'use client'
import useUIStore from "@/app/lib/store/useUIStore";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";


export default function Page() {
    // UIStore 가져오기
    const { fontSize, setFontSize } = useUIStore();
    // 테마 설정
    const { theme, setTheme } = useTheme()

    const fontSizeOption = [
        { label: '보통', size: 16 },
        { label: '크게', size: 18 },
        { label: '매우 크게', size: 21 },
    ]

    return (
        <section className="flex flex-col gap-5 text-gray-700 dark:text-white">
        {/* 나의 정보 */}
        <h1 className="text-2xl font-bold text-darkblue dark:text-white">화면 설정</h1>


        {/* 테마 설정 */}
            <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 p-7 rounded-lg ">
            <span className="font-bold text-lg  ">테마 설정</span>
            <div className="flex gap-2">
                {/* Light 설정 */}
                <button
                    onClick={() => setTheme('light')}
                    className="w-8 h-8 box-content" >
                <MdLightMode className={`w-8 h-8 ${theme === 'light' && 'text-yellow-400'}`} />
                </button>

                {/* Dark 설정 */}
                <button
                    onClick={() => setTheme('dark')}
                    className="w-8 h-8 box-content" >
                <MdDarkMode className={`w-8 h-8 ${theme === 'dark' && 'text-yellow-400'}`}/>
                </button>
            </div>
            </div>

        {/* 밝기 설정
            <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 p-7 rounded-lg">
                <span className="font-bold text-lg">대비 설정</span>
                <input 
                    type="checkbox"
                    // checked={settings.contrast}
                    // onChange={(e) => setSettings({ contrast: e.target.checked })}
                    />
            </div> */}
        <div className="flex flex-col gap-3 justify-center bg-slate-100 dark:bg-slate-800 p-7 rounded-lg">
            <span className="font-bold text-lg">글자 설정</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full justify-between gap-5">
                {fontSizeOption.map(({label, size }) => (
                    <button
                        onClick={() => setFontSize(size)} 
                        key={size}
                        className="bg-blue w-full py-2 text-md font-semibold text-white rounded-lg">
                            {label}
                    </button>
                ))}
                </div>
            </div>
    </section>
    )
}
