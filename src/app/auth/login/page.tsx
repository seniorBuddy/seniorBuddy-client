'use client';

import { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import Link from "next/link";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [changeEmail, setChangeEmail] = useState(true);
  const router = useRouter();

  const changeEmailHandler = () => {
    setChangeEmail(!changeEmail)
  }

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      identifier,
      password,
    };
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`, {
        method: 'POST',
				headers: {
					'Content-Type' : 'application/json',
				},
				body: JSON.stringify(data),
				credentials: 'include',
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const responseData = await res.json();
      Cookies.set('access_token', responseData.access_token);
      Cookies.set('refresh_token', responseData.refresh_token);
      router.push('/');

    } catch (error) {
      console.error('로그인 에러 : ', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[60px]">
      {/* 전체 박스 */}
      <div className=
        "flex flex-col gap-7 sm:gap-5 px-4 h-[550px] w-[380px] sm:w-[600px] justify-center items-center\
        bg-white font-bold text-black rounded-[40px] border-4 border-blue">
        {/* 타이틀, 입력창 묶음 */}
        <form onSubmit={handleLogin}>
          <div className="flex flex-col justify-center items-center gap-6 pt-[20px] w-full px-6">
            <span className="my-4 text-3xl flex justify-center">로그인</span>
            <div className="flex flex-row text-lg items-center justify-center w-full gap-1">
              {changeEmail ? (
                <>
                <span className="hidden sm:block w-[250px]">전화번호</span>
                <input 
                type="text" placeholder="전화번호를 입력해주세요." 
                className="w-[280px] sm:w-full border-2 border-darkblue rounded-lg p-3"
                value={identifier}
                onChange={handleIdInput}
                />
                </>
              ) : (
                <>
                <span className="hidden sm:block w-[250px]">이메일</span>
                <input 
                type="text" placeholder="이메일을 입력해주세요." 
                className="w-[280px] sm:w-full border-2 border-darkblue rounded-lg p-3"
                value={identifier}
                onChange={handleIdInput}
                />
                </>
              )}
            </div>
            <div className="flex flex-col sm:flex-row text-lg items-center justify-center w-full mb-4 gap-1">
              <span className="hidden sm:block w-[250px]">비밀번호</span>
              <input 
                type="password" placeholder="비밀번호를 입력해주세요." 
                className="w-[280px] sm:w-full border-2 border-darkblue rounded-lg p-3"
                value={password}
                onChange={handlePasswordInput}
              />
            </div>
            <div className="flex justify-center w-full text-xl bg-darkblue rounded-lg px-4 py-3">
              <button
                type="submit"
                className="flex justify-center text-white"
              >
                로그인
              </button>
            </div>
            <div 
                onClick={changeEmailHandler}
                className="flex flex-row items-center justify-center w-full gap-8 px-6 text-xl border-2 rounded-lg py-2">
                {changeEmail ? (
                  <>
                  < CiMail size="35"/>
                  <span>이메일 로그인</span>
                  </>
                ) : (
                  <>
                  < CiPhone size="35"/>
                  <span>전화번호 로그인</span>
                  </>
                )}
            </div>
            <div className="flex flex-row justify-center w-full sm:gap-5 p-2 text-blue">
              <Link href="/auth/find_pw" className="flex justify-end flex-[3] hover:text-darkblue">비밀번호 찾기</Link>
              <h1 className="flex flex-[1] justify-center">|</h1>
              <Link href="/auth/register" className="flex justify-start flex-[3] hover:text-darkblue">회원가입</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}