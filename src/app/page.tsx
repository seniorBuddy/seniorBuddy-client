import { MdKeyboardVoice } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";
import Link from "next/link";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdMedicalInformation } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { mainMenuItem } from "@/types";
import Image from 'next/image';
import Dummy from '@/app/assets/custom-dummy.svg';
import AiChatInput from "@/components/chat/ai-chat-input";

const MainNavigate = () => {
  const menuItems: mainMenuItem[]  = [
    { href: '/manual', bgColor: 'bg-grd-red', iconColor: 'text-sigred', Icon: BiSolidFoodMenu, text: '설명서', content: '설명서로 조작을 배워요'},
    { href: '/reminder',  bgColor: 'bg-grd-yellow', iconColor: 'text-sigyellow', Icon: MdMedicalInformation, text: '알리미', content: '복용과 병원 정보를 관리해요' },
    { href: '/settings', bgColor: 'bg-grd-blue', iconColor: 'text-sigblue', Icon: GrContactInfo, text: '내 정보', content: '현재 나의 정보를 확인해요' },
  ];
  return (
    <section>
      <div className="m-auto grid grid-cols-1 sm:grid-cols-3 font-semibold text-lg gap-3 md:text-xl max-w-1.50">
          {menuItems.map(({ href, bgColor, iconColor, Icon, text, content}: mainMenuItem, idx) => (
          <Link key={idx} href={href} className="cursor-pointer">
            <div className={`w-full p-7 rounded-xl shadow-md flex gap-5 sm:flex-col items-center sm:items-start ${bgColor}`}>
              <Icon className={`${iconColor} size-10 sm:size-14`}/>
              <div className="flex flex-col">
              <span className={`font-bold text-2xl ${iconColor}`} >{text}</span>
              <span className={`text-sm ${iconColor}`} >{content}</span>
              </div>
            </div>
          </Link>
          ))}
        </div>
    </section>
  )
}

const AIAssistant = () => (
    <Link href={'/ai_chat/custom'} className="w-full min-w-56 flex flex-row flex-1 py-5 sm:py-3 px-5 sm:my-5 bg-blue dark:bg-blue-700 rounded-2xl justify-center gap-8 sm:gap-5">
      <div className="sm:hidden size-24 pt-1 bg-white dark:bg-gray-200 rounded-full overflow-hidden">
        <Image src={Dummy} alt='dummy'></Image>
        </div>
      <div className="pt-2 pr-4 sm:pr-0">
          <div className="text-info font-bold min-w-36 m-auto text-slate-800 bg-white text-center mb-2 rounded-3xl">
            AI 비서 Abby
            </div>
          <div className="hidden sm:block size-24 m-auto rounded-full overflow-hidden">
            <Image src={Dummy} alt='dummy'></Image>
          </div>
          <div className="font-medium mt-4 text-md">
            좋은 하루 보내고 계신가요?
          </div>
      </div>
    </Link>
  )

const ChatInput = () => (
  <div className="border-2 border-blue dark:border-blue-500 w-full flex flex-col flex-2 items-center p-3 bg-white text-slate-800 dark:bg-gray-800 shadow-xl rounded-xl">
    <span className="text-info font-extrabold text-xl mb-5 dark:text-slate-400">
      Abby와 대화하기
      </span>
    <div className="mt-6 gap-3 sm:mt-10 my-3 sm:my-5 hidden md:flex items-center justify-center">
      <div className="px-1 py-1.5 border-2 text-blue dark:text-blue-300 border-blue dark:border-blue-500 rounded-md text-sm">오늘 날씨는 어때?</div>
      <div className="px-1 py-1.5 border-2 text-blue dark:text-blue-300 border-blue dark:border-blue-500 rounded-md text-sm">메뉴얼 사용법에 대해</div>
    </div>
    <div className="w-full h-full">
      <AiChatInput />
  </div>    
  </div>    
)

export default function Home() {
  return (
   <main className="flex flex-col mx-5 gap-5 py-10 dark:text-slate-800">
        {/* 상위 섹션 */}
        <section>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-blue"></div>
            <div className="relative z-10 px-8 py-10">
              <h2 className="text-3xl font-bold mb-3">반가워요! 이수연 님</h2>
              <p className="text-lg font-semibold">Abby와 함께 하루를 시작하세요</p>
            </div>
            </div>
        </section>
      {/* 네비게이션 */}
        <MainNavigate />
      <div className="flex items-center justify-center flex-col md:flex-row gap-5">
      {/* AI 비서 캐릭터  */}
        <AIAssistant />
      {/* AI 채팅 시작하기*/}
        <ChatInput />
      </div>
   </main>
  );
}