'use client'

import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";
import Image from 'next/image';
import Dummy1 from '@/app/assets/dummy_ai/ai_1.svg';
import Dummy2 from '@/app/assets/dummy_ai/ai_2.svg';
import Dummy3 from '@/app/assets/dummy_ai/ai_3.svg';
import Dummy4 from '@/app/assets/dummy_ai/ai_4.svg';
import { useState } from "react";

function CustomImage({ changeAI }: { changeAI: (image: any) => void }) {
    const AiImage = [
        { src: Dummy1, alt: 'dummy1' },
        { src: Dummy2, alt: 'dummy2' },
        { src: Dummy3, alt: 'dummy3' },
        { src: Dummy4, alt: 'dummy4' },
    ];
    
    return (
        <div className="min-w-[300px] overflow-auto px-2 py-5 flex gap-3">
            {AiImage.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => changeAI(image)}
                    className="cursor-pointer transition hover:scale-110"
                    priority
                />
            ))}
        </div>
    );
}

export default function Page() {
    const [selected, setSelected] = useState<any>(null);

    const changeAI = (image: any) => {
        setSelected(image);
    };

    return (
        <div className="relative mt-10 sm:mt-20 max-w-full bg-blue mx-5 sm:mx-0 py-5 px-6 rounded-lg font-semibold">
            {/* 이전으로 돌아가기 */}
            <Link href={'/'} className="absolute top-5 left-5">
                <IoArrowBackCircle className="h-7 w-7 text-white"/>
            </Link>
            
            {/* 상위 텍스트 영역 */}
            <div className="flex flex-col justify-center items-center mb-5 gap-2">
                <div className="bg-white py-1 px-8 text-info rounded-lg text-darkblue font-black">나만의 AI 비서 모습</div>
                <div className="text-white">당신의 Abby는 어떤 모습인가요?</div>
            </div> 

            {/* 선택된 이미지와 이미지 선택 영역 */}
            <div className="flex flex-col sm:flex-row justify-center items-center w-full ">
                <div className="bg-white size-[140px] rounded-lg mr-2 flex justify-center items-center">
                    {selected ? (
                        <Image src={selected.src} alt={selected.alt} width={140} height={140}/>
                    ) : (
                        <div></div>
                    )}
                </div>
                <CustomImage changeAI={changeAI} />
            </div>
        </div>
    );
}
