"use client"
import Dummy from '@/app/assets/dummy_ai/ai_5.svg';
import Image from 'next/image';
import { MdKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import useRecordVoice from '@/app/hooks/useRecordVoice';
import { getMessage, sendMessage } from '@/app/actions/assistant';
import { toast } from 'react-toastify';
import { useState } from 'react';
import useModeStore from '@/app/lib/store/useModeStore';


export default function AssistantChat() {
    const { listening, transcript, onRecord, setTranscript } = useRecordVoice();
    const [aiMessage, setAiMessage] = useState('물어보세요, 어르신! 무엇이 궁금하신가요?');
    const [content, setContent] = useState('');



    const getMessageHandler = async () => {
        const res = await getMessage();

        if(!res.success) {
            toast.error(res.message, {
                autoClose: 2000,
                icon: <span>❌</span>,
            });
        }
        setAiMessage(res.content);
    }

    const setMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼 기본 동작 방지

        const formData = new FormData(e.currentTarget);
        const content = formData.get('content') as string;

        if (!content.trim()) {
            toast.warn("메시지를 입력하세요.", { autoClose: 2000 });
            return;
        }

        setContent(content);
        setTranscript('');

        await sendMessageHandler(formData);

    }

    const sendMessageHandler = async (formData: FormData) => {
        setAiMessage('...')

        const res = await sendMessage(formData);
        if(!res.success) {
            toast.error(res.message, {
                autoClose: 2000,
                icon: <span>❌</span>,
            });
        } else {
            getMessageHandler();
        } 
    }

    const onChangeInput = (e: { target: { value: any; }; }) => {
        setTranscript(e.target.value);
    }

   

return (
    <>
    <div className='flex flex-col gap-4 min-w-full'>
    { /* Ai Message */}
    <div className="bg-slate-50/30 text-lg w-full rounded-2xl px-5 py-3">
        <span className="text-white">{aiMessage}</span>    
    </div>
        
   {content !== '' && (
    <div className='flex w-full justify-end'>
        <div className='bg-slate-50/30 text-white text-lg px-4 py-2 rounded-2xl'>
            {content}
    </div>
    </div>
   )}

    {/* 사용자 영역 */}
    <div className='flex items-center w-full bg-slate-50/30 text-white rounded-2xl'>
    <form onSubmit={setMessage} className='flex gap-2 w-full'>
        <div className="w-full h-full">
        <div className="px-2 py-2 rounded-lg flex items-center">
        
        {/* 음성 인식 시작을 위한 핸들러 */}
        <MdKeyboardVoice 
            onClick={onRecord}
            className="size-7"/>

        <div className="relative flex-1 text-md px-3">
            <input 
                value={transcript}
                // onKeyDown={onKeyDown}
                onChange={onChangeInput}
                placeholder={listening ? "..." : transcript ? transcript : '메시지를 입력하세요'}
                className="w-full outline-none bg-transparent text-lg placeholder-slate-300 focus:bg-transparent focus:outline-none" 
                name='content' />
        </div>
            <button type='submit'>
                <IoSend className="w-5 h-5"/>
            </button>
            </div>
        </div>
        </form>
        </div>
    </div>
    </>
//     } else {
//     return (
//     <>
//     { /* Ai Message */}
//     <div className='flex w-full'>
//         <div className='bg-slate-100 text-darkblue text-sm rounded-lg px-4 py-2'>
//                 {aiMessage}
//         </div>
//     </div>
   
//    {content !== '' && (
//     <div className='flex w-full justify-end'>
//         <div className='bg-slate-100 text-darkblue text-sm rounded-lg px-4 py-2'>
//             {content}
//     </div>
//     </div>
//    )}

//     {/* 사용자 영역 */}
//         <div className='flex items-center justify-end w-full '>
//         {/* 음성 인식 시작을 위한 핸들러 */}
//         <button 
//             className="cursor-pointer pr-1 sm:pr-2 transition-transform duration-200 hover:text-darkblue" 
//             onClick={onRecord}
//             >
//         <MdKeyboardVoice className="w-7 h-7 text-darkblue hover:text-white"/>
//         </button>
//         <form onSubmit={setMessage} className='flex gap-2'>
//             <input
//                 value={transcript}
//                 onChange={onChangeInput}
//                 placeholder={listening ? "..." : transcript ? transcript : '메시지를 입력하세요'}
//                 name='content'
//                 className='bg-darkblue text-white text-sm rounded-full px-7 py-2 max-w-72' />
//             <button 
//                 className='bg-white text-blue font-bold px-3 rounded-md' 
//                 type='submit'>
//                 <IoSend className='size-4 text-darkblue'/>
//             </button>
//         </form>
//         </div>
//     </>
//     );}
    )
}
