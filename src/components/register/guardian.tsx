"use client";

import React from 'react';

interface InputProps {
  label: string;
  type: string;
  children?: React.ReactNode;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function formatPhoneNumber(value: string) {
  return value
    .replace(/[^0-9]/g, '')
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/, "$1-$2-$3");
}

export default function GuardianRegister() {
  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    target.value = formatPhoneNumber(target.value);
  };

  const Input = ({ label, children, type, onInput }: InputProps) => (
    <div className="flex flex-col md:flex-row sm:gap-3 sm:items-center justify-start w-full gap-4 md:ml-[100px] mt-2">
      <span className="w-full md:w-[120px]">{label}</span>
      <div className="flex flex-row w-full gap-2">
        <input 
          type={type}
          className="w-[230px] md:w-[300px] border-2 border-gray-400 rounded-xl p-1"
          onInput={onInput}
        />
        {children && (
          <div>{children}</div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex flex-col md:text-lg items-center justify-center w-full gap-1 md:gap-4 max-h-screen overflow-y-auto">
        <Input label="아이디" type="text">
          <span className="w-[100px] bg-slate-600 text-white rounded-md p-2 mx-1 text-center">중복 확인</span>
        </Input>
        <Input label="비밀번호" type="password" />
        <Input label="비밀번호 확인" type="password" />
        <Input label="이름" type="text" />
        <Input label="전화번호" type="text" onInput={handlePhoneInput}>
          <span className="w-[100px] bg-slate-600 text-white rounded-md p-2 mx-1 text-center">인증번호</span>
        </Input>
        <Input label="인증번호 확인" type="text" />
      </div>
      <div className="flex sm:flex-row">
        <span className="flex justify-center items-center bg-darkblue text-white text-xl mt-[40px] p-2 rounded-xl w-full m-5">취소</span>
        <span className="flex justify-center items-center bg-darkblue text-white text-xl mt-[40px] p-2 rounded-xl w-full m-5">가입</span>
      </div>
    </div>
  );
}