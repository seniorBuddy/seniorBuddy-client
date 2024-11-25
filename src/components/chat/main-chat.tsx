"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function AiChatInput () {
    const item: string[] = ['오늘 날씨는 어때?', '메뉴얼 사용법에 대해']
    
    const router = useRouter();

    const [text, setText] = useState('');
  
    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }
    const onSubmit = () => {
        sessionStorage.setItem('chatMessage', text)
        router.push('/ai_chat')
    }
    const buttonSubmit = (text: string) => {
        sessionStorage.setItem('chatMessage', text)
        router.push('/ai_chat')
    }

    return (
    <div className="w-full h-full">
    <div className="mt-6 gap-3 sm:mt-10 my-3 sm:my-5 hidden md:flex items-center justify-center">
        {item.map((value, idx) => (
            <button 
                key={idx}
                onClick={() => buttonSubmit(value)}
                className="hover:bg-blue hover:text-white transition delay-75 px-1 py-1.5 border-2 text-blue dark:text-blue-300 border-blue dark:border-blue-500 rounded-md text-sm">
                    {value}
                </button>
       
        ))}
    </div>
        <div className="px-1 py-1.5 border-2 bg-gray-100 dark:bg-gray-700 text-gray-400 border-gray-300 dark:border-gray-600 rounded-md flex items-center">
          <div className="relative flex-1 text-md px-3">
            <input 
                value={text}
                onKeyDown={onKeyDown}
                onChange={inputTextHandler}
                className="bg-inherit w-full outline-none" 
                placeholder="궁금한 것을 물어 보세요"/>
          </div>
          <button onClick={onSubmit}>
            <BiSolidSend className="w-5 h-5"/>
          </button>
        </div>
    </div>
    )
}