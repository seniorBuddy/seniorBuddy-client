"use client"

import { useState } from 'react';

export default function Page() {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [error, setError] = useState('');

    const recordHandler = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setError("Speech recognition is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'ko-KR';  // Korean language

        setListening(true);
        recognition.start();

        recognition.onresult = function(event) {
            const speechTranscript = event.results[0][0].transcript;
            console.log('Transcript:', speechTranscript);
            setTranscript(speechTranscript);
            setListening(false);
        };

        recognition.onerror = function(event) {
            console.error('Error occurred in speech recognition:', event.error);
            setError("An error occurred during speech recognition.");
            setListening(false);
        };

        recognition.onspeechend = function() {
            recognition.stop();  // Stop recognition when speech ends
            setListening(false);
        };
    };

    return (
        <div className="bg-stone-700 text-white p-4">
            <div>여긴 채팅 페이지입니다</div>
            {error && <div className="text-red-500">{error}</div>}
            <button
                className={`font-bold p-2 rounded-md ${listening ? 'bg-green-500' : 'bg-blue-500'}`}
                onClick={recordHandler}
                disabled={listening}
            >
                {listening ? 'Listening...' : '음성 시작'}
            </button>

            {transcript && <div className="mt-4">음성 인식 결과: {transcript}</div>}
        </div>
    );
}
