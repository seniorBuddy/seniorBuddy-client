'use client';

import UserFw from '@/components/auth/pwModal';
import { useState } from 'react';
import PhoneInput from './phone-input';
import EmailAuto from './emailAuto';

export default function FindForm() {
  const [userChange, setUserChange] = useState('senior');
  const [certification, setCertification] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [findPw, setFindPw] = useState<boolean>(false);
  const [idMessage, setIdMessage] = useState<string>('');

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserChange(e.target.value);
  }

  const correctNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertification(e.target.value);
    setIsCorrect(true);
  }

  const handleTest = () => {
    if (isCorrect) {
      if (certification === '1234') {
        setIdMessage("인증되었습니다.");
      }
      else {
        setIdMessage("인증에 실패하였습니다.");
      }
    }
  }

  const handleNext = (e:React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setFindPw(false);
    }
  }
  
  return (
    <>
    <form className="flex flex-col gap-8">
      <div className="flex flex-row gap-10 justify-center text-darkblue">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="choose"
            value="senior"
            checked={userChange === 'senior'}
            onChange={handleRoleChange}
          />
          <span className="flex items-center justify-center">사용자</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="choose"
            value="guardian"
            checked={userChange === 'guardian'}
            onChange={handleRoleChange}
          />
          <span className="flex items-center jusitfy-center">보호자</span>
        </label>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5 text-black">
          {userChange === 'senior' ? <PhoneInput/> : <EmailAuto/>}
          <button
            type="submit"
            className="flex w-full justify-center items-center px-3 rounded-xl bg-blue text-white text-lg font-bold"
          >
            인증번호
          </button>
        </div>
        <div className="flex flex-row gap-3 text-black">
          <input
            type="text"
            className="font-medium p-1 rounded-sm px-4 py-2 border border-blue"
            placeholder="인증번호를 입력해주세요."
            onChange={correctNumber}
          />
          <button
            type="button"
            className="flex w-full justify-center items-center px-3 rounded-xl bg-blue text-white text-lg font-bold"
            onClick={handleTest}
          >인증</button>
        </div>
        <span 
          className={`${
            idMessage === "인증되었습니다." ? "text-lime-500" : "text-red-600"
          }`}
        >
          {idMessage}
        </span>
      </div>
      <div
        className="flex justify-center items-center p-3 rounded-xl bg-blue text-white font-bold text-xl"
        onClick={() => setFindPw(true)}
      >
        비밀번호 찾기
      </div>
    </form>
    {findPw === true && (
      <div
        onClick={handleNext}
        className="fixed inset-0 flex items-center justify-center bg-white"
      >
        <UserFw />
      </div>
    )}
    </>
  );
}