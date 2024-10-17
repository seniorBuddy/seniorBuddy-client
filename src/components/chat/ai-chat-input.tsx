"use client"

import { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function AiChatInput () {
    const [text, setText] = useState('');
  
    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }
    const onSubmit = async () => {
        console.log(text);
        // const res = fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/assistant/threads/${token}`)
        setText('');
    }

    return (
    <div className="w-full h-full">
        <div className="px-1 py-1.5 border-2 bg-gray-100 dark:bg-gray-700 text-gray-400 border-gray-300 dark:border-gray-600 rounded-md flex items-center">
        <MdKeyboardVoice className="w-5 h-5"/>
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