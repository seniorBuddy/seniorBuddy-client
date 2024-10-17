'use client';

import { useState } from 'react';
import Link from "next/link";
import registerUser from '@/app/action/registerAction';

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

    console.log(data)
    
    // try {
    //   const result = await registerUser(data);
    //   console.log("회원가입 결과:", result);
    // } catch (error) {
    //   console.error("회원가입 오류:", error);
    // }
  };
  
  return (
    <form onSubmit={handleRegister}>
      <div className="flex flex-col md:text-lg items-center justify-center w-full h-[500px] md:h-[350px] gap-1 md:gap-4">
      <div className="flex flex-col md:flex-row sm:gap-3 sm:items-center justify-start w-full gap-4 md:ml-[100px] mt-2">
          <span className="w-full md:w-[120px]">이름</span>
          <input
            className="w-[230px] md:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={name}
            onChange={handleNameInput}
          />
        </div>
        <div className="flex flex-col md:flex-row sm:gap-3 sm:items-center justify-start w-full gap-4 md:ml-[100px] mt-2">
          <span className="w-full md:w-[120px]">전화번호</span>
          <input
            className="w-[230px] md:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={phoneNumber}
            onChange={handlePhoneInput}
          />
        </div>
        <div className="flex flex-col md:flex-row sm:gap-3 sm:items-center justify-start w-full gap-4 md:ml-[100px] mt-2">
          <span className="w-full md:w-[120px]">비밀번호</span>
          <input
            type='password'
            className="w-[230px] md:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <span className="w-full md:w-[120px]">성별</span>
          <div className="flex flex-row gap-2">
            <div className="flex w-[150px] border-2 border-gray-400 rounded-sm">
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
            <div className="flex w-[150px] border-2 border-gray-400 rounded-sm">
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
      <div className="flex sm:flex-row">
        <button
          type="submit"
          className="flex justify-center items-center bg-darkblue text-white text-xl mt-[40px] p-2 rounded-xl w-full m-5"
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
