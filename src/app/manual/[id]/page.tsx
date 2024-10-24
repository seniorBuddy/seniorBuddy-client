"use client"; 
import React from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import { manualItems } from "@/app/manual/mock/manual-item"; 
import { StaticImageData } from "next/image";

const ManualPage: React.FC = () => {
    const pathname = usePathname();
    const id = pathname ? pathname.split("/").pop() : null; // pathname이 null이 아닐 때만 split 수행
    const item = id ? manualItems.find((item) => item.id === id) : null;

    if (!item) {
        return <div>해당 항목을 찾을 수 없습니다.</div>;
    }

    const allImages = item.steps.flatMap(step => step.images) as { src: StaticImageData; description: string; }[];

    return (
        <>
            <div className="text-center mt-4">
                <h1 className="text-3xl font-bold p-2 bg-[#136BFF] text-white shadow-md rounded">
                    {item.title}
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-4">
                <div className="lg:w-1/3 p-4 bg-white shadow-md rounded mb-4 lg:mb-0 flex flex-col items-center">
                    <h2 className="font-bold text-lg text-[#136BFF] text-center mb-4">목차</h2>
                    <ul className="space-y-3 w-full">
                        <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
                            <span className="text-[#136BFF] font-bold">카카오톡</span>
                            <ul className="pl-4 text-sm">
                                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/k1picture">1. 사진 보내기</Link>
                                </li>
                                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/k2groupchat">2. 단톡 생성하기</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
                            <span className="text-[#136BFF] font-bold">일상</span>
                            <ul className="pl-4 text-sm">
                                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/d1number">1. 전화번호 등록하기</Link>
                                </li>
                                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/d2capture">2. 캡처하기</Link>
                                </li>
                                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/d3light">3. 밝기 조절하기</Link>
                                </li>
                                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                                    <Link href="/manual/d4livechat">4. 영상 통화하기</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-2/3 mx-2 w-full">
                    <ImageSlider images={allImages} />
                </div>
            </div>
        </>
    );
};

export default ManualPage; 
