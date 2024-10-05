import Image from 'next/image';
import Sample from '../app/assets/images/sample.png';

export default function madicineMain() {
  return (
    <div className="bg-blue w-[500px] lg:w-[1000px] rounded-lg">
      {/* 버튼 그리드 */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-center p-[15px]">
        <div className="min-h-[150px] bg-white rounded-lg flex flex-row">
          {/* 약 정보 */}
          <div className="flex flex-row gap-5 justify-center items-center">
            <Image src={Sample} alt="madicineSample" width="150" height="150" />
            <div className="flex flex-col font-bold text-3xl gap-3">
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
              <span className="text-darkblue text-2xl">기타 사항</span>
            </div>
          </div>
        </div>
        {/* grid 제대로 작동하는지 확인하기 위한 임시 */}
        <div className="min-h-[150px] bg-white rounded-lg flex flex-col">

        </div>
      </div>
    </div>
  );
}