import Image from 'next/image';
import Sample from '../../app/assets/images/sample.png';
import Link from 'next/link';
import { FaPlusCircle } from "react-icons/fa";

export default function madicineMain() {
  return (
    <div className="bg-blue h-[350px] w-[380px] sm:w-[600px] rounded-lg">
      {/* 그리드 */}
      <div className="flex flex-col gap-4 items-center p-[15px]">
        <div className="w-full bg-white rounded-lg flex flex-row">
          {/* 약 정보 */}
          <div className="flex flex-row gap-5 justify-center items-center">
            <Image src={Sample} alt="madicineSample" width="150" height="150" className="hidden sm:block" />
            <div className="flex flex-col ml-4 font-bold text-2xl sm:text-3xl gap-3">
              {/* 약 이름 */}
              <span className="text-darkblue">약 정보</span>
              {/* 약 먹는 시간 체크박스 */}
              <div className="flex items-center gap-4">
                <input id="default-checkbox" type="checkbox" className="w-6 h-6 text-blue" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium-bold text-darkblue text-xl">아침</label>
                <input id="default-checkbox" type="checkbox" className="w-6 h-6 text-blue" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium-bold text-darkblue text-xl">점심</label>
                <input id="default-checkbox" type="checkbox" className="w-6 h-6 text-blue" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium-bold text-darkblue text-xl">저녁</label>
              </div>
              {/* 약에 대한 기타 사항 */}
              <span className="text-darkblue text-xl sm:text-2xl">기타 사항</span>
            </div>
          </div>
        </div>
        <Link href="/reminder/medicineRegister" className="min-h-[150px] w-full bg-white rounded-lg flex flex-col items-center justify-center">
          <FaPlusCircle size="70" className="text-blue"/>
        </Link>
      </div>
    </div>
  );
}