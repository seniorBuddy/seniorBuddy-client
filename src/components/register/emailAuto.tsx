import React, { useState } from 'react';

const emailAuto: React.FC = () => {
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
    <div className="relative">
      <input
        type="text"
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

export default emailAuto;