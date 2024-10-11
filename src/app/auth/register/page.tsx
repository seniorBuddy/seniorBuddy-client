"use client";

import { useState } from 'react';
import Guardian from '../../../components/register/guardian';
import Senior from '../../../components/register/senior';

export default function signup() {
  const [selected, setSelected] = useState('senior');

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[60px]">
      {/* 전체 내용 묶음 */}
      <div className=
            "flex flex-col gap-2 px-4 h-[550px] w-[380px] sm:w-[600px] justify-center items-center\
            bg-white font-bold text-black rounded-[40px] border-4 border-blue">
        {/* 회원가입 제목, 사용자 선택 버튼 묶음 */}
        <div className="flex-[2] flex flex-col justify-center items-center gap-6 pt-[50px]">
          <span className="text-3xl">회원가입</span>
          {/* 사용자 선택 라디오버튼 */}
          <div className="flex flex-row gap-10">
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
          </div>
        </div>
        {/* 사용자에 따른 인적사항 입력창 컴포넌트 */}
        <div className="flex-[8]">
          {selected === 'guardian' && <Guardian />}
          {selected === 'senior' && <Senior />}
        </div>
      </div>
    </div>
  );
}