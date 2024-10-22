"use client"
import Dummy from '@/app/assets/dummy_ai/ai_5.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdKeyboardVoice } from "react-icons/md";


export default function Page() {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('궁금한 것을 물어 보세요');
    
    function onRecord () {
        // 브라우저 API에 따른 API 설정
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'ko-KR';  // Korean language

        setListening(true);
        // 인스턴스 시작하기
        recognition.start();

        // 인스턴스 결과 출력하기
        recognition.onresult = async function (e) {
            const transcript = e.results[0][0].transcript;
            console.log(transcript)
            setTranscript(transcript); // 먼저 transcript 상태를 업데이트
            setListening(false);
        };
    }

    return (
        <div className="text-white pt-10 flex gap-10 flex-col items-center justify-center max-w-72 sm:max-w-lg m-auto">
            <div className="bg-blue flex flex-col rounded-md items-center justify-center min-w-full gap-5 p-5">
            {/* 비서 영역 */}
                <div className="text-info font-bold min-w-40 py-1 text-slate-800 bg-white text-center rounded-3xl">
                    AI 비서 Abby</div>
                <div className="m-auto rounded-full overflow-hidden">
                    <Image width={200} height={200} src={Dummy} alt='dummy' priority></Image>
                </div>
                <div className='flex w-full'>
                    <div className='bg-slate-100 text-darkblue text-sm rounded-full px-7 py-2 max-w-72'>
                    안녕하세요! 궁금한 게 있으신가요? </div>
                </div>
               
            {/* 사용자 영역 */}
                <div className='flex items-center justify-end w-full '>
                {/* 음성 인식 시작을 위한 핸들러 */}
                <button 
                    className="cursor-pointer pr-1 sm:pr-2 transition-transform duration-200 hover:text-darkblue" 
                    onClick={onRecord}
                    >
                <MdKeyboardVoice className="w-7 h-7 text-darkblue hover:text-white"/>
                </button>
                <div className='bg-darkblue text-white text-sm rounded-full px-7 py-2 max-w-72'>
                {listening ? '...' : transcript}
                </div>
                </div>
            </div>
        
        {/* 질문하기 section */}
       
    </div>
    );
}
