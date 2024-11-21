'use client'
import Link from "next/link";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdMedicalInformation } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { mainMenuItem } from "@/types";
import Image from 'next/image';
import AiChatInput from "@/components/chat/main-chat";
import useUserStore from '@/app/lib/store/useUserStore';
import useModeStore from "./lib/store/useModeStore";
import AssistantChat from "@/components/chat/assistant-chat";
import Dummy from '@/app/assets/dummy_ai/ai_5.svg';

const menuItems: mainMenuItem[]  = [
  { href: '/manual', bgColor: 'bg-grd-red', iconColor: 'text-sigred', Icon: BiSolidFoodMenu, text: '설명서', content: '설명서로 조작을 배워요'},
  { href: '/reminder',  bgColor: 'bg-grd-yellow', iconColor: 'text-sigyellow', Icon: MdMedicalInformation, text: '알리미', content: '복용과 병원 정보를 관리해요' },
  { href: '/settings', bgColor: 'bg-grd-blue', iconColor: 'text-sigblue', Icon: GrContactInfo, text: '내 정보', content: '현재 나의 정보를 확인해요' },
];

function SimpleSection() {
  return (
    <main className="flex flex-col gap-5 sm:gap-7">
    <section>
        <div className="m-auto grid grid-cols-3 font-semibold text-lg gap-3 md:text-xl mx-5 h-36 sm:h-44">
            {menuItems.map(({ href, bgColor, iconColor, Icon, text}: mainMenuItem, idx) => (
            <Link key={idx} href={href} className="cursor-pointer ">
              <div className={`${bgColor} rounded-lg h-full flex flex-col gap-3 items-center justify-center`}>
                <Icon className={`${iconColor} size-10 sm:size-14`}/>
                <div className="flex flex-col gap-0.5">
                <span className={`text-2xl font-bold ${iconColor}`} >{text}</span>
                </div>
              </div>
            </Link>
            ))}
          </div>
      </section>
        <section className="m-auto w-full px-5">
          <div className="bg-blue py-10 px-5 flex flex-col items-center justify-center rounded-xl gap-4">
            <div className="rounded-full border-4 border-slate-50/30">
              <Image 
                className="overflow-hidden rounded-full"
                width={150}
                height={150}
                src={Dummy} alt='dummy'></Image>
            </div>
            <div className="text-2xl font-bold pb-5">AI 비서 Abby</div>
            <AssistantChat />
          </div>
      </section>
    </main>
  )
}

function HeaderSection({name}: {name: string}) {
  return (
      <section>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-blue"></div>
            <div className="relative z-10 px-8 py-10">
              <h2 className="text-3xl font-bold mb-3">반가워요! {name} 님</h2>
              <p className="text-lg font-semibold">Abby와 함께 하루를 시작하세요</p>
            </div>
            </div>
        </section>
  )
}


const MainNavigate = () => {
  return (
    <section>
      <div className="m-auto grid grid-cols-1 sm:grid-cols-3 font-semibold text-lg gap-3 md:text-xl max-w-1.50">
          {menuItems.map(({ href, bgColor, iconColor, Icon, text, content}: mainMenuItem, idx) => (
          <Link key={idx} href={href} className="cursor-pointer">
            <div className={`w-full p-8 sm:px-4 rounded-lg sm:rounded-xl shadow-md flex gap-5 sm:flex-col items-center sm:items-start ${bgColor} h-full`}>
              <Icon className={`${iconColor} size-12 sm:size-14`}/>
              <div className="flex flex-col gap-0.5">
              <span className={`text-2xl font-bold ${iconColor}`} >{text}</span>
              <span className={`text-sm ${iconColor}`} >{content}</span>
              </div>
            </div>
          </Link>
          ))}
        </div>
    </section>
  )
}

// const AIAssistant = () => (
//     <Link href={'/ai_chat/custom'} className="w-full min-w-56 flex flex-row flex-1 bg-blue dark:bg-blue-700 rounded-xl justify-evenly py-4">
//       <div className="sm:hidden bg-white dark:bg-gray-200 rounded-full overflow-hidden">
//         <Image  width={100} height={100} src={Dummy} alt='dummy'></Image>
//         </div>
//       <div className="flex flex-col items-center justify-evenly sm:gap-3">
//           <div className="text-info font-bold min-w-40  text-slate-800 bg-white text-center rounded-3xl">
//             AI 비서 Abby
//             </div>
//           <div className="hidden sm:block m-auto rounded-full overflow-hidden">
//             <Image width={100} height={100} src={Dummy} alt='dummy'></Image>
//           </div>
//           <div className="font-medium text-md pb-3 sm:pb-0 m-2">
//             좋은 하루 보내고 계신가요?
//           </div>
//       </div>
//     </Link>
//   )

const ChatInput = () => (
  <div className="border-2 border-blue dark:border-blue-500 w-full flex flex-col flex-2 items-center p-3 bg-white text-slate-800 dark:bg-gray-800 shadow-xl rounded-xl">
    <span className="text-info font-extrabold text-xl mb-5 dark:text-slate-400">
      Abby와 대화하기
      </span>
    <div className="w-full h-full">
      <AiChatInput />
  </div>    
  </div>    
)

export default function Home() {
  const name = useUserStore((state) => state.name) as string;
  const { mode } = useModeStore();

  if(mode === 'simple') {
    return (
      <SimpleSection />
    
    );
  } else {
    return (
    <main className="flex flex-col mx-5 gap-5 dark:text-slate-800">
        {/* 상위 섹션 */}
          <HeaderSection name={name}/>
        {/* 네비게이션 */}
          <MainNavigate />
        <div className="flex items-center justify-center flex-col md:flex-row gap-5">
        {/* AI 비서 캐릭터  */}
          {/* <AIAssistant /> */}
        {/* AI 채팅 시작하기*/}
          <ChatInput />
        </div>
    </main>
    );
}
}


