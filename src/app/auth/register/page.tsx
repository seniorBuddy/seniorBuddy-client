"use client";

import { useState } from 'react';
import Guardian from '../../../components/register/guardian';
import Senior from '../../../components/register/senior';

export default function signup() {
  const [selected, setSelected] = useState('guardian');

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[30px]">
      <div className="flex flex-col gap-2 sm:gap-5 px-4 md:px-20 h-[750px] md:h-[600px] w-[380px] sm:w-[600px] md:w-[850px] justify-center items-center bg-white font-bold rounded-[40px] border-4 border-blue">
        <div className="flex-[2] flex flex-col justify-center items-center gap-3">
          <span className="text-3xl">회원가입</span>
          <div className="flex flex-row gap-10">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="choose"
                value="guardian"
                checked={selected === 'guardian'}
                onChange={handleRoleChange}
              />
              <span className="flex items-center justify-center">보호자</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="choose"
                value="senior"
                checked={selected === 'senior'}
                onChange={handleRoleChange}
              />
              <span className="flex items-center justify-center">사용자</span>
            </label>
          </div>
        </div>
        <div className="flex-[8]">
          {selected === 'guardian' && <Guardian />}
          {selected === 'senior' && <Senior />}
        </div>
      </div>
    </div>
  );
}