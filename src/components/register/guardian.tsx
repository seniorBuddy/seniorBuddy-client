"use client";

import { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import React from 'react';
import Link from "next/link";
import EmailAuto from '../register/emailAuto';

interface InputProps {
  label: string;
  type?: string;
  children?: React.ReactNode;
}

export default function Guardian() {
  const defaultEmail = '';

  const Input = ({ label, children, type }: InputProps) => (
    <div className="flex flex-col md:flex-row sm:gap-3 sm:items-center justify-start w-full gap-4 md:ml-[100px] mt-2">
      <span className="w-full md:w-[120px]">{label}</span>
      <div className="flex flex-row w-full gap-2">
        {type && (
          <input 
            type={type}
            className="w-[230px] md:w-[300px] border-2 border-gray-400 rounded-xl p-1"
          />
        )}
        {children && (
          <div className="flex flex-row items-center gap-2">{children}</div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex flex-col md:text-lg items-center justify-center w-full h-[500px] md:h-[350px] gap-1 md:gap-4">
        <Input label="이름" type="text" />
        <Input label="이메일">
          <EmailAuto />
          <span className="w-[100px] bg-slate-600 text-white rounded-md p-2 mx-1 text-center">인증번호</span>
        </Input>
        <Input label="인증번호 확인" type="text" />
        <Input label="비밀번호" type="password" />
        <Input label="비밀번호 확인" type="password" />
      </div>
      <div className="flex sm:flex-row">
        <Link href="/auth/login" className="flex justify-center items-center bg-darkblue text-white text-xl mt-[40px] p-2 rounded-xl w-full m-5">취소</Link>
        <Link href="/auth/login" className="flex justify-center items-center bg-darkblue text-white text-xl mt-[40px] p-2 rounded-xl w-full m-5">가입</Link>
      </div>
    </div>
  );
}