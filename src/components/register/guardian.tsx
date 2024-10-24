"use client";

import { useState } from 'react';
import EmailAuto from '../register/emailAuto';

export default function Guardian() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      emailAddress,
      password,
      name,
    };
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="flex flex-col sm:text-lg items-center justify-center w-full h-[280px] gap-1 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center gap-4 mt-2">
          <span className="w-[120px]">이름</span>
          <input 
            className="w-[230px] sm:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={name}
            onChange={handleNameInput}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center gap-4 mt-2">
          <span className="w-[120px]">이메일</span>
          <EmailAuto emailAddress={emailAddress} setEmailAddress={setEmailAddress} />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center gap-4 mt-2">
          <span className="w-[120px]">비밀번호</span>
          <input 
            type='password'
            className="w-[230px] sm:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
      </div>
      <div className="flex justify-center">
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
