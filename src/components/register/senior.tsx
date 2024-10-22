'use client';

import { useState } from 'react';

export function RegisterForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

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

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 폼 제출 방지
    const data = {
      phoneNumber,
      password,
      name,
      gender,
    };

<<<<<<< HEAD
    console.log(data)
=======
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
        console.log(responseData);
        
        alert('회원가입이 완료되었습니다');
        router.push('/auth/login')
      }


    } catch (error) {
      console.error('회원가입 에러 : ', error);
    }
>>>>>>> 8452a51 (FEAT: tokenStore 추가)
  };
  
  return (
    <form onSubmit={handleRegister}>
      <div className="flex flex-col md:text-lg items-center justify-between gap-1 md:gap-4 min-w-72">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
          <span>이름</span>
          <input
            className="border-2 border-gray-400 rounded-xl p-1 dark:bg-white dark:text-black"
            value={name}
            onChange={handleNameInput}
          />
        </div>
        <div className="flex flex-col sm:flex-row w-full mt-2 justify-between gap-4">
          <span>전화번호</span>
          <input
            className="border-2 border-gray-400 rounded-xl p-1 dark:bg-white dark:text-black"
            value={phoneNumber}
            onChange={handlePhoneInput}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full mt-2  gap-4">
          <span>비밀번호</span>
          <input
            type="password"
            className="border-2 border-gray-400 rounded-xl p-1 dark:bg-white dark:text-black"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
          <span>성별</span>
          <div className="flex flex-row gap-2 ">
            <div className="flex  border-2 border-gray-400 rounded-sm">
              <input
                id="female"
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={handleGenderChange}
                className="hidden peer"
              />
              <label
                htmlFor="female"
                className="w-full h-full flex justify-center items-center peer-checked:bg-gray-500 peer-checked:text-white"
              >
                여성
              </label>
            </div>
            <div className="flex border-2 border-gray-400 rounded-sm">
              <input
                id="male"
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={handleGenderChange}
                className="hidden peer"
              />
              <label
                htmlFor="male"
                className="w-full h-full flex justify-center items-center peer-checked:bg-gray-500 peer-checked:text-white"
              >
                남성
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
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

export default function SeniorRegister() {
  return <RegisterForm />;
}
