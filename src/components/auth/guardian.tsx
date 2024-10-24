"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Guardian({ selected }: { selected: string }) {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const emailDomains = ['naver.com', 'gmail.com', 'daum.net'];

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailAddress(value);

    const atIndex = value.indexOf('@');
    if (atIndex > -1) {
      const inputDomain = value.slice(atIndex + 1);
      const filteredSuggestions = emailDomains.filter((domain) =>
        domain.startsWith(inputDomain)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (domain: string) => {
    const userId = emailAddress.split('@')[0];
    const newEmail = `${userId}@${domain}`;
    setEmailAddress(newEmail);
    setSuggestions([]);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      user_real_name: name,
      password: password,
      user_type: selected,
      email: emailAddress,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          credentials: 'include',
        }
      );

      if (!res.ok) {
        console.log(res);
        alert('회원가입에 실패했습니다');
      } else {
        const responseData = await res.json();
        alert('회원가입이 완료되었습니다');
        router.push('/auth/login');
      }
    } catch (error) {
      console.error('회원가입 에러 : ', error);
    }
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
          <input
            className="w-[230px] sm:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            value={emailAddress}
            onChange={handleEmailChange}
          />
          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul className="bg-white border mt-2">
              {suggestions.map((domain, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2"
                  onClick={() => handleSuggestionClick(domain)}
                >
                  {emailAddress.split('@')[0]}@{domain}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center gap-4 mt-2">
          <span className="w-[120px]">비밀번호</span>
          <input
            type="password"
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
