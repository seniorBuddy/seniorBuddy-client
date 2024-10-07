"use client"

import { useState } from "react";

export default function Page() {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    }

    return (
        <section className="flex flex-col gap-3 text-slate-800 dark:text-white">
            <h1 className="text-2xl font-bold text-darkblue dark:text-blue">계정 관리</h1>
            {/* 나의 정보 */}
            <div>
              <h3 className="text-xl font-semibold p-2">나의 정보</h3>
                <div className="bg-slate-100 dark:bg-slate-800 p-7 rounded-lg text-gray-700 dark:text-white">
                    여기에 사용자 정보가 표시됩니다.
                </div>
            </div>
            {/* 사용자 전환 */}
            <div>
              <h3 className="text-xl font-semibold p-2">사용자 전환</h3>
                <div className="bg-green-100 dark:bg-green-800 p-5 rounded-lg flex justify-between items-center gap-5">
                    <span className="text-green-700 dark:text-green-200">여기에 사용자의 계정 권한이 전환됩니다</span>
                    <button 
                        onClick={openModal}
                        className="min-w-24 min-h-8 bg-green-500 text-white font-semibold sm:font-bold sm:p-2 sm:px-4 rounded-md ">
                        보호자 전환
                    </button>
                </div>
            </div>
            {modal && (
                <div className="flex items-center justify-center fixed inset-0 backdrop-filter backdrop-blur-sm z-20 text-white">
                    <div className="absolute w-70% px-7 py-10 rounded-md shadow-lg bg-blue flex flex-col items-center justify-between">
                        <div className="font-semibold text-xl pb-8">계정 권한을 변경하시겠습니까?</div>
                        <div className="flex flex-col font-semibold text-md gap-3">
                            <button 
                                onClick={openModal}
                                className="bg-white text-slate-600 py-2 px-4 rounded-md transition-transform duration-150 hover:bg-slate-200">아니요. 유지하겠습니다</button>
                            <button 
                                className="bg-green-500  py-2 px-4 rounded-md transition-transform duration-150 hover:bg-green-600">네. 계정 유형을 변경합니다</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}