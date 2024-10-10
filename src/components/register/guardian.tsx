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

export default function GuardianRegister() {
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

  /*
  const EmailGroup: string[] = [
    '@naver.com',
    '@gmail.com',
    '@daum.net',
    '@hanmail.net',
    '@nate.com',
    '@kakao.com',
  ];

  const [email, setEmail] = useState<string>(defaultEmail);
  const [emailList, setEmailList] = useState<string[]>(EmailGroup);
  const [selected, setSelected] = useState<number>(-1);
  const [isDropbox, setIsDropbox] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);

    if (value.includes('@')) {
      const domainPart = value.split('@')[1] || '';
      const filteredList = EmailGroup.filter((el) =>
        el.includes(domainPart)
      );
      setEmailList(filteredList);
      setIsDropbox(filteredList.length > 0);
    } else {
      setIsDropbox(false);
      setSelected(-1);
    }
  };

  const handleDropDownClick = (first: string, second: string) => {
    setEmail(`${first.split('@')[0]}${second}`);
    setIsDropbox(false);
    setSelected(-1);
    inputRef.current?.focus();
  };

  const handleKeyup = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isDropbox) {
      if (e.key === 'ArrowDown' && emailList.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (e.key === 'ArrowUp' && selected > 0) {
        setSelected(selected - 1);
      }
      if (e.key === 'Enter' && selected >= 0) {
        handleDropDownClick(email, emailList[selected]);
      }
    }
  };
*/
  return (
    <div>
      <div className="flex flex-col md:text-lg items-center justify-center w-full h-[500px] md:h-[350px] gap-1 md:gap-4">
        <Input label="이름" type="text" />
        <Input label="이메일">
          <EmailAuto />
          <span className="w-[100px] bg-slate-600 text-white rounded-md p-2 mx-1 text-center">인증번호</span>
        { /*
          <input
            type="email"
            value={email}
            onChange={onChangeEmail}
            onKeyUp={handleKeyup}
            className="w-[230px] md:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            ref={inputRef}
          />
          {isDropbox && (
            <div className="absolute bg-white border border-gray-400 rounded-md mt-1 max-h-40 overflow-auto">
              {emailList.map((item, idx) => (
                <div
                  key={idx}
                  onMouseOver={() => setSelected(idx)}
                  onClick={() => handleDropDownClick(email, item)}
                  className={`p-2 cursor-pointer ${selected === idx ? 'bg-gray-200' : ''}`}
                >
                  {email.split('@')[0]}
                  {item}
                </div>
              ))}
            </div>
          )}
            */ }
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