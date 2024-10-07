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
    <div className="flex flex-row gap-3 items-center justify-start w-full gap-4 ml-[100px]">
      <span className="w-[120px]">{label}</span>
      <input 
        type={type}
        className="w-[300px] border-2 border-gray-400 rounded-xl p-1"
        onInput={onInput}
      />
      {children && (
        <div>{children}</div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col sm:text-lg items-center justify-center w-full gap-4">
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
  );
}