'use client';

import { useState } from 'react';
import Image from 'next/image';
import Sample from '../../assets/images/sample.png';

export default function MedicineRegister() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[80px]">
      <div className="flex flex-row gap-4">
        <Image src={Sample} alt="madicineSample" width="150" height="300" />
        <div className="flex flex-col gap-2 font-bold text-darkblue text-xl">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <span className="flex-[2]">이름</span>
            <input
              type="text"
              placeholder="약 이름 입력"
              className="w-full p-3 flex-[8]"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <span className="flex-[2]">시간</span>
            <div className="flex flex-row gap-2">
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
        </div>
      </div>
    </div>
  );
}
