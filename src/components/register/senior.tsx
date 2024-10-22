'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Senior({selected}:{selected: string}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  function formatPhoneNumber(value: string) {
    return value
      .replace(/[^0-9]/g, '')
      .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/, "$1-$2-$3");
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedValue);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 폼 제출 방지
    const data = {
      "user_real_name": name,
      "password": password,
      "user_type": selected,
      "phone_number": phoneNumber,
    }
      

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (!res.ok) {
        console.log(res)
        alert('회원가입에 실패했습니다');
      } else {
        const responseData = await res.json();
        alert('회원가입이 완료되었습니다');
        router.push('/auth/login')
      }
    } catch (error) {
      console.error('회원가입 에러 : ', error);
    }
  };
  
  return (
    <form onSubmit={handleRegister}>
      {/* 인적사항 입력창 묶음 */}
      <div className="flex flex-col sm:text-lg items-center justify-center w-full h-[280px] gap-1 sm:gap-6">
        {/* 이름 입력창 */}
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center gap-4 mt-2">
          <span className="w-[120px]">이름</span>
          <input
            className="w-[230px] sm:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={name}
            onChange={handleNameInput}
          />
        </div>
        {/* 전화번호 입력창 */}
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center gap-4 mt-2">
          <span className="w-[120px]">전화번호</span>
          <input
            className="w-[230px] sm:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={phoneNumber}
            onChange={handlePhoneInput}
          />
        </div>
        {/* 비밀번호 입력창 */}
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center  gap-4 mt-2">
          <span className="w-[120px]">비밀번호</span>
          <input
            type='password'
            className="w-[230px] sm:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
      </div>
      {/* 가입 버튼 */}
      <div className="flex jutify-center">
        <button
          type="submit"
          className="bg-darkblue text-white text-xl mt-[40px] p-2 rounded-xl w-full m-5"
        >
          가입
        </button>
      </div>
    </form>
  );
}