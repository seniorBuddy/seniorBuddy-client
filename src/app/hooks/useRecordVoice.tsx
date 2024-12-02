import { useState } from "react";


export interface PostMessagePayload {
    message: string;
    assistantResponse?: string;
}

const useRecordVoice = () => {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    const postMessageToRN = (payload: PostMessagePayload) => {
        // Next.js의 경우 Window 객체가 존재하지 않는 환경 (서버)의 경우
        // 혹은 웹뷰가 아닌 브라우저로 접근 시 아무것도 하지 않음
        if (typeof window === "undefined" || !window.ReactNativeWebView) {
            return;
        }
        
        // React Native WebView가 존재할 경우 메시지 전송
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
    };

    const onReadMessage = (text: string) => {
        console.log(text, '실행')
        
        if('speechSynthesis' in window) {
            // voices 로드를 기다림
            window.speechSynthesis.onvoiceschanged = () => {
                const voices = window.speechSynthesis.getVoices();
                
                // 한국어 남성 음성 찾기
                const koreanVoice = voices.find(voice => 
                    voice.lang === "ko-KR" && voice.name.includes("Male")
                ) || voices.find(voice => 
                    voice.lang === "ko-KR" && voice.name.includes("남성")
                ) || voices.find(voice => 
                    voice.lang === "ko-KR"
                );
    
                // 기존 음성 정지
                window.speechSynthesis.cancel();
    
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'ko-KR';
    
                // 남성 목소리에 가깝게 조절
                utterance.pitch = 0.8;     // 음높이 낮게
                utterance.rate = 0.9;      // 속도
                utterance.volume = 1.0;    // 볼륨
    
                if (koreanVoice) {
                    utterance.voice = koreanVoice;
                    console.log("선택된 음성:", koreanVoice.name); // 어떤 음성이 선택되었는지 확인
                } else {
                    console.log("적절한 한국어 음성을 찾지 못했습니다.");
                }
    
                window.speechSynthesis.speak(utterance);
            };
    
            // voices 로드 트리거
            window.speechSynthesis.getVoices();
        } else {
            postMessageToRN({ message: 'speechSynthesis을 지원하지 않습니다.', assistantResponse: text });
        }
    };

    const onRecord = () => {
        // 브라우저의 SpeechRecognition API 사용 설정
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'ko-KR'; // 한국어 설정

        setListening(true);
        recognition.start();  // 음성 인식 시작

        recognition.onresult = function (e) {
            const transcriptResult = e.results[0][0].transcript;  // 결과 텍스트
            setListening(false);
            setTranscript(transcriptResult);  // 텍스트 상태 업데이트
            console.log(transcript);

        };

        recognition.onerror = function () {
            setListening(false);  // 에러 발생 시 listening 상태 해제
        };
    };

    return { listening, transcript, onRecord, setTranscript, onReadMessage };
};

export default useRecordVoice;
