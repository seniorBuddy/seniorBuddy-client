'use client'
import React, { useState } from 'react';

const EmailAuto: React.FC = () => {
  const [email, setEmail] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const emailDomains = ['naver.com', 'gmail.com', 'daum.net'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

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
    setEmail(`${userId}@${domain}`);
    setSuggestions([]);
  };

  return (
    <div className="relative"> <>
  </>
      <input
        type="text"
        name="identifier"
        placeholder='이메일을 입력해주세요.'
        value={email}
        onChange={handleChange}
        className="font-medium p-1 rounded-sm px-4 py-2 dark:bg-white"
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
