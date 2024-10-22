import { useState } from 'react';
import Image from 'next/image';
import Sample from '../../app/assets/images/sample.png';

export default function medicineRegister({prop}:{prop: boolean}) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }

  return (
    <div className="w-[650px] h-[500px] bg-white border-4 rounded-2xl border-darkblue">
      <div className="flex flex-row justify-center items-center gap-4">
        <Image src={Sample} alt="medicineSample" width="150" height="300" />
        <div className="flex flex-col gap-2 font-bold text-darkblue test-xl">
          {/* 약 이름 */}
          <div className="flex flex-row items-center justify-between w-full gap-2">
            <span className="flex-[2]">이름</span>
            <input
              type="text"
              placeholder="약 이름 입력"
              className="w-full p-3 flex-[8]"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full gap-2">
            <span className="flex-[2]">시간</span>
            <div className="flex flex-row gap-7">
              <label className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={onChange}
                />
                <span>아침</span>
              </label>
              <label className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={onChange}
                />
                <span>점심</span>
              </label>
              <label className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={onChange}
                />
                <span>저녁</span>
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <span className="flex-[2]">이름</span>
          </div>
        </div>
      </div>
    </div>
  );
}