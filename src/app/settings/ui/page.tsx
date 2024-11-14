'use client'
import { useUIStore } from "@/app/lib/store/useUIStore";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";


export default function Page() {
    // UIStore 가져오기
    const { settings, setSettings, getTheme } = useUIStore();
    // theme state 설정
    const [themeColor, setThemeColor] = useState(getTheme());
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        // 로컬 스토리지 내 theme 값 설정
        localStorage.setItem('use-setting', JSON.stringify(settings));
        document.documentElement.classList.toggle('dark', settings.theme === 'dark');

        // 테마에 따른 아이콘 색상 업데이트
        setThemeColor(settings.theme);
    }, [settings]);

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
                <MdLightMode className={`w-8 h-8 ${themeColor === 'light' && 'text-yellow-400'}`} />
                </button>

                {/* Dark 설정 */}
                <button
                    onClick={() => setTheme('dark')}
                    className="w-8 h-8 box-content" >
                <MdDarkMode className={`w-8 h-8 ${themeColor === 'dark' && 'text-yellow-400'}`}/>
                </button>
            </div>
            </div>

        {/* 밝기 설정 */}
            <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 p-7 rounded-lg">
                <span className="font-bold text-lg">대비 설정</span>
                <input 
                    type="checkbox"
                    checked={settings.contrast}
                    onChange={(e) => setSettings({ contrast: e.target.checked })}
                    />
            </div>
    </section>
    )
}
