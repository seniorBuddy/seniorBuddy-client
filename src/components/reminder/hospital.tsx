import Link from 'next/link';
import { FaPlusCircle } from "react-icons/fa";

export default function Hospital() {
  return(
    <div className="bg-blue h-[420px] w-[380px] sm:w-[600px] rounded-lg">
      {/* 그리드 */}
      <div className="flex flex-col gap-4 items-center p-[15px]">
        <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-5 text-2xl text-darkblue font-bold">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-[100px]">
            <div className="flex flex-row gap-4">
              <span className="hidden sm:block">병원이름</span>
              <span className="relative pl-2 text-slate-600">
                김태영 정형외과
                <span className="absolute left-0 bottom-[-5px] w-[250px] h-[3px] bg-slate-400" />
              </span>
            </div>
            <div className="flex flex-row gap-4">
              <span className="hidden sm:block">방문 목적</span>
              <span className="relative pl-2 text-slate-600">
                방문 목적 작성
                <span className="absolute left-0 bottom-[-5px] w-[300px] sm:w-[330px] lg:w-[400px] h-[3px] bg-slate-400" />
              </span>
            </div>
          </div>
          <span>2024년 10월 9일 수요일 오전 10시</span>
          <div className="flex flex-row gap-4">
            <span>기타사항</span>
            <span className="text-slate-600">기타사항 아무거나</span>
          </div>
        </div>
        <Link href="/reminder/medicineRegister" className="min-h-[150px] w-full bg-white rounded-lg flex flex-col items-center justify-center">
          <FaPlusCircle size="70" className="text-blue"/>
        </Link>
      </div>
    </div>
  );
}