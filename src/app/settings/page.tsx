"use client"

import { useState } from "react";
import useUserStore from "../lib/store/useUserStore";
import { logout } from "../actions/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
    const { email, name, phone_number, type } = useUserStore((state) => state);
    const userInfo = [
        { key: '이름', value: name },
        { key: '전화번호', value: phone_number },
        { key: '이메일', value: email },
        { key: '사용자 권한', value: type },
    ];
    const router = useRouter();


    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    }


    const logoutHandler = async () => {
        const res = await logout();
        if(res.success && res?.redirectTo) {
             // 리다이렉트
             router.push(res?.redirectTo);
        } else {
            console.log(res.message)
        }
    }

    return (
    <section className="flex flex-col gap-3 text-slate-800 dark:text-white">
        <h1 className="text-2xl font-bold text-darkblue dark:text-blue">계정 관리</h1>
        {/* 나의 정보 */}
        <div>
            <h3 className="text-xl font-semibold p-2">나의 정보</h3>
            <div className="bg-slate-100 dark:bg-slate-800 p-7 rounded-lg text-gray-700 dark:text-white">
        <div className="flex flex-col gap-3">
            {userInfo.filter((obj) => obj.value !== null).map((obj, idx) => (
            <div
                className="flex flex-col gap-1"
                key={`${idx}`}>
                <div className="text-darkblue dark:text-white font-semibold">
                    {obj.key}
                </div>
                <div className="bg-white dark:text-darkblue p-2 rounded-lg">
                    {obj.value}
                </div>
            </div>
            ))}
        </div>
    </div>
               
            </div>
            {/* 사용자 전환 */}
            <div>
              <h3 className="text-xl font-semibold p-2">로그아웃</h3>
                <div className="bg-green-100 dark:bg-green-800 p-5 rounded-lg flex justify-between items-center gap-5">
                    <span className="text-green-700 dark:text-green-200">사용자의 계정이 로그아웃됩니다</span>
                    <button 
                        onClick={openModal}
                        className="min-w-24 min-h-8 bg-green-500 text-white font-semibold sm:font-bold sm:p-2 sm:px-4 rounded-md ">
                        로그아웃
                    </button>
                </div>
            </div>
            {modal && (
                <div className="flex items-center justify-center fixed inset-0 backdrop-filter backdrop-blur-sm z-20 text-white">
                    <div className="absolute w-70% px-7 py-10 rounded-md shadow-lg bg-blue flex flex-col items-center justify-between">
                        <div className="font-semibold text-xl pb-8">정말 시니어 버디로부터 로그아웃하시겠습니까?</div>
                        <div className="flex flex-col font-semibold text-md gap-3">
                            <button 
                                onClick={openModal}
                                className="bg-white text-slate-600 py-2 px-4 rounded-md transition-transform duration-150 hover:bg-slate-200">아니요. 유지하겠습니다</button>
                            <button 
                                onClick={logoutHandler}
                                className="bg-green-500  py-2 px-4 rounded-md transition-transform duration-150 hover:bg-green-600">네. 로그아웃합니다</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}