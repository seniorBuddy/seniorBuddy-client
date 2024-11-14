"use client"
import Dummy from '@/app/assets/dummy_ai/ai_5.svg';
import Image from 'next/image';
import { MdKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import useRecordVoice from '@/app/hooks/useRecordVoice';
import useTokenStore from '@/app/lib/store/useTokenStore';
import { getMessage, sendMessage } from '@/app/actions/assistant';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export default function Page() {
    const { listening, transcript, onRecord, setTranscript } = useRecordVoice();
    const token = useTokenStore((state) => state.token) as string;
    const [aiMessage, setAiMessage] = useState('물어보세요, 어르신! 무엇이 궁금하신가요?');
    const [content, setContent] = useState('');



    const getMessageHandler = async(token: string) => {
        const res = await getMessage(token);
        console.log(res);
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
    const res = await sendMessage(formData, token);
    console.log(res)
    if(!res.success) {
        toast.error(res.message, {
            autoClose: 2000,
            icon: <span>❌</span>,
        });
    } else {
        getMessageHandler(token);
    } 

    }

    const onChangeInput = (e: { target: { value: any; }; }) => {
        setTranscript(e.target.value);
    }


    return (
        <div className="text-white flex flex-col items-center justify-center w-[80%] m-auto">
            <div className="bg-blue flex flex-col rounded-md items-center justify-center min-w-full gap-10 px-5 pt-7 pb-10">
            {/* 비서 영역 */}
                <div className='flex flex-col gap-5'>
                    <div className="text-info font-bold min-w-40 py-2 text-slate-800 bg-white text-center rounded-3xl">
                        AI 비서 Abby</div>
                    <div className="m-auto rounded-full overflow-hidden">
                        <Image width={200} height={200} src={Dummy} alt='dummy' priority></Image>
                    </div>
                </div>
               
               {/* Ai Message */}
                <div className='flex w-full'>
                    <div className='bg-slate-100 text-darkblue text-sm rounded-lg px-4 py-2'>
                            {aiMessage}
                    </div>
                </div>
               
               {content !== '' && (
                <div className='flex w-full justify-end'>
                    <div className='bg-slate-100 text-darkblue text-sm rounded-lg px-4 py-2'>
                        {content}
                </div>
                </div>
               )}

            {/* 사용자 영역 */}
                <div className='flex items-center justify-end w-full '>
                {/* 음성 인식 시작을 위한 핸들러 */}
                <button 
                    className="cursor-pointer pr-1 sm:pr-2 transition-transform duration-200 hover:text-darkblue" 
                    onClick={onRecord}
                    >
                <MdKeyboardVoice className="w-7 h-7 text-darkblue hover:text-white"/>
                </button>
                <form onSubmit={setMessage} className='flex gap-2'>
                    <input
                        value={transcript}
                        onChange={onChangeInput}
                        placeholder={listening ? "..." : transcript ? transcript : '메시지를 입력하세요'}
                        name='content'
                        className='bg-darkblue text-white text-sm rounded-full px-7 py-2 max-w-72' />
                    <button 
                        className='bg-white text-blue font-bold px-3 rounded-md' 
                        type='submit'>
                        <IoSend className='size-4 text-darkblue'/>
                    </button>
                </form>
                </div>
            </div>
    </div>
    );
}
