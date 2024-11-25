"use client"
import { MdKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import useRecordVoice from '@/app/hooks/useRecordVoice';
import { getMessage, sendMessage } from '@/app/actions/assistant';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Toaster from "@/app/utils/toast";
import { getRefreshToken } from "@/app/lib/auth/token";


export default function AssistantChat() {
    const message = sessionStorage.getItem('chatMessage') as string;

    useEffect(() => {
        if(message) {
            mainMessage(message);
        }
        
    }, [message])
    

    const { listening, transcript, onRecord, setTranscript, onRead } = useRecordVoice();
    const [aiMessage, setAiMessage] = useState('물어보세요, 어르신! 무엇이 궁금하신가요?');
    const [content, setContent] = useState('');

    const mainMessage = (message: string) => {
        // 메시지 설정
        setContent(message);
        
        // 메시지 전송
        const formData = new FormData();
        formData.append('content', message);
        sendMessageHandler(formData);
        
        // 메시지 사용 후 삭제
        sessionStorage.removeItem('chatMessage');
       
    }


    const getMessageHandler = async () => {
        const res = await getMessage();

        if(!res.success) {
            toast.success(res.message, {
                autoClose: 2000,
                icon: <span>❌</span>,
            });
        }

        setAiMessage(res.content);
        onRead(res.content);
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
        setAiMessage('메시지 생성 중...')
        setTranscript('');
        
        await sendMessageHandler(formData);

    }



    const sendMessageHandler = async (formData: FormData) => {
        const res = await sendMessage(formData);

        if(!res.success) {
            if (res.status === 401) {
                console.log("토큰 만료 후 재요청")
                sendMessageHandler(formData);
              }
        }
        // POST 후 메시지 GET
        getMessageHandler();
    }
    

    const onChangeInput = (e: { target: { value: any; }; }) => {
        setTranscript(e.target.value);
    }

   

return (
    <>
    <Toaster />
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
    )
}
