import { useState } from "react";

const useRecordVoice = () => {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    // const onRead = (text: string) => {
    //     if('speechSynthesis' in window) {
    //         const utterance = new SpeechSynthesisUtterance(text);
    //         utterance.lang = 'Ko-KR'
    //         utterance.rate = 1;
    //         utterance.pitch = 1;
    //         speechSynthesis.speak(utterance);
    //     } else {
    //         alert('이 브라우저는 음성을 지원하지 않습니다')
    //     }

    // }

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

    return { listening, transcript, onRecord, setTranscript, onRead };
};

export default useRecordVoice;
