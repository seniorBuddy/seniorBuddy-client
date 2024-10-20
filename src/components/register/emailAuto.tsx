'use client'
import React, { useState } from 'react';

interface EmailAutoProps {
  emailAddress: string; // 추가된 props 타입 정의
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>; // 추가된 props 타입 정의
}

const EmailAuto: React.FC<EmailAutoProps> = ({ emailAddress, setEmailAddress }) => {
  const [email, setEmail] = useState(emailAddress); // 초기값을 props로 설정
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const emailDomains = ['naver.com', 'gmail.com', 'daum.net'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailAddress(value); // props로 전달된 상태 업데이트

    const atIndex = value.indexOf('@');
    if (atIndex > -1) {
      const inputDomain = value.slice(atIndex + 1);
      const filteredSuggestions = emailDomains.filter(domain =>
        domain.startsWith(inputDomain)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (domain: string) => {
    const userId = email.split('@')[0];
    const newEmail = `${userId}@${domain}`;
    setEmail(newEmail);
    setEmailAddress(newEmail); // props로 전달된 상태 업데이트
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        value={email}
        onChange={handleChange}
        className="w-[230px] md:w-[300px] border-2 border-gray-400 rounded-xl p-1"
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded">
          {suggestions.map((domain) => (
            <li
              key={domain}
              onClick={() => handleSuggestionClick(domain)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {domain}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmailAuto;
