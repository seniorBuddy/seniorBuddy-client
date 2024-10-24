"use client"; 
import React from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import { manualItems } from "@/app/manual/mock/manual-item"; 
import { StaticImageData } from "next/image";

const ManualPage: React.FC = () => {
    const pathname = usePathname();
    const id = pathname ? pathname.split("/").slice(-2).pop() : null; // pathname이 null이 아닐 때만 split 수행
    const item = id ? manualItems.find((item) => item.id === id) : null;

    if (!item) {
        return <div>해당 항목을 찾을 수 없습니다.</div>;
    }

    const allImages = item.steps.flatMap(step => step.images) as { src: StaticImageData; description: string; }[];

    return (
        <>
            <div className="text-center mt-4">
                <h1 className="text-3xl font-bold p-2 bg-[#136BFF] dark:bg-[#0B3BA3] text-white shadow-md rounded">
                    {item.title}
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-4">
                {/* 목차 박스의 너비를 2/5로 설정 */}
                <div className="p-4 bg-white dark:bg-gray-900 shadow-md mb-4 lg:mb-0 flex flex-col items-center lg:px-4 lg:w-2/5">
                    <h2 className="font-bold text-lg text-[#136BFF] dark:text-[#0E4BFF] text-center mb-4">목차</h2>
                    <ul className="space-y-3 w-full">
                        <li className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
                            <span className="text-[#136BFF] font-bold dark:text-[#0E4BFF]">카카오톡</span>
                            <ul className="pl-4 text-sm">
                                <li className="text-black dark:text-gray-200 transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/picture">1. 사진 보내기</Link>
                                </li>
                                <li className="text-black dark:text-gray-200 transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/groupchat">2. 단톡 생성하기</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
                            <span className="text-[#136BFF] font-bold dark:text-[#0E4BFF]">일상</span>
                            <ul className="pl-4 text-sm">
                                <li className="text-black dark:text-gray-200 transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/number">1. 전화번호 등록하기</Link>
                                </li>
                                <li className="text-black dark:text-gray-200 transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/capture">2. 캡처하기</Link>
                                </li>
                                <li className="text-black dark:text-gray-200 transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/light">3. 밝기 조절하기</Link>
                                </li>
                                <li className="text-black dark:text-gray-200 transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/livechat">4. 영상 통화하기</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mx-2 lg:px-4 w-full">
                    <ImageSlider images={allImages} />
                </div>
            </div>
        </>
    );
};

export default ManualPage;
