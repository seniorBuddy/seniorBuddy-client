"use client"
import Dummy from '@/app/assets/dummy_ai/ai_5.svg';
import Image from 'next/image';
import AssistantChat from "@/components/chat/assistant-chat";

export default function Page() {
    return (
        <section className="m-auto w-full px-5">
        <div className="bg-blue py-10 px-5 flex flex-col items-center justify-center rounded-lg">
          <div className="rounded-full border-4 border-slate-50/30">
            <Image 
              className="overflow-hidden rounded-full"
              width={150}
              height={150}
              src={Dummy} alt='dummy'></Image>
          </div>
          <div className="text-2xl font-bold py-4">AI 비서 Abby</div>
          <AssistantChat />
        </div>
    </section>
    );
}
