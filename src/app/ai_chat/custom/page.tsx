import CustomImage from "@/components/customimage"
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";

export default function Page() {
    return (
        <div className="relative mt-10 sm:mt-20 max-w-full bg-blue mx-5 sm:mx-0 py-5 px-6 rounded-lg font-semibold">
            {/* 이전으로 돌아가게 수정 */}
            {/* 현재: */}
            <Link href={'/'} className="absolute top-5 left-5">
                <IoArrowBackCircle className="h-7 w-7 text-white"/>
            </Link>
            {/* 상위 텍스트 영역 */}
            <div className="flex flex-col justify-center items-center mb-5 gap-2">
                <div className="bg-white py-1 px-8 bg-blue text-info rounded-lg font-black">나만의 AI 비서 모습</div>
                <div className="text-white">당신의 Abby는 어떤 모습인가요?</div>
            </div> 
            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="min-w-32 min-h-32 bg-white rounded-lg mr-2">
                </div>
                <CustomImage />
            </div>
        </div>
    )
}