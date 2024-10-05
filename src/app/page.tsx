import { MdKeyboardVoice } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";
import Link from "next/link";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdMedicalInformation } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { mainMenuItem } from "@/types";
import Image from 'next/image';
import Dummy from '@/app/assets/custom-dummy.svg';

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
          <Link key={idx} href={href} className="cursor-pointer ">
            <div className={` w-full p-7 rounded-xl shadow-md flex gap-5 sm:flex-col items-center sm:items-start text-white ${bgColor}`}>
              <Icon className={`${iconColor} w-14 h-14 `}/>
              <div className="flex flex-col">
              <span className='font-bold text-2xl'>{text}</span>
              <span className='text-md sm:text-sm'>{content}</span>
              </div>
            </div>
          </Link>
          ))}
        </div>
    </section>
  )
}

const AIAssistant = () => (
  <Link href={'/ai_chat/custom'} className="w-full min-w-56 flex flex-row flex-1 py-5 sm:py-3 px-5 sm:my-5  bg-blue rounded-2xl justify-center gap-8 sm:gap-5">
    <div className="md:hidden h-28 w-28 pt-1 bg-white rounded-full overflow-hidden">
      <Image src={Dummy} alt='dummy'></Image>
      </div>
    <div className="pt-2">
        <div className="text-info font-bold min-w-36 m-auto bg-white text-center mb-2 rounded-3xl ">
          AI 비서 Abby
          </div>
        <div className="hidden md:block h-24 w-24 m-auto bg-white rounded-full overflow-hidden">
          <Image src={Dummy} alt='dummy'></Image>
        </div>
        <div className=" text-white font-medium mt-4 text-md">
          좋은 하루 보내고 계신가요?
        </div>
    </div>
  </Link>
)
const ChatInput = () => (
  <div className="border-2 border-blue w-full flex flex-col flex-2 items-center p-3 bg-white shadow-xl rounded-xl ">
    <span className="text-info font-extrabold text-xl mb-5">Abby와 대화하기</span>
    <div className="mt-6 gap-3 sm:mt-10 my-3 sm:my-5 hidden md:flex items-center justify-center">
      <div className="px-1 py-1.5 border-2 text-blue border-blue rounded-md text-sm">오늘 날씨는 어때?</div>
      <div className="px-1 py-1.5 border-2 text-blue border-blue rounded-md text-sm">메뉴얼 사용법에 대해</div>
    </div>
    <div className="w-full h-full">
      <div className="px-1 py-1.5 border-2 bg-gray-100 text-gray-400 border-gray-300 rounded-md flex items-center">
      <MdKeyboardVoice className="w-5 h-5"/>
        <div className="flex-1 text-md pr-5 ">궁금한 것을 물어 보세요</div>
      <Link href={'/ai_chat'}>
        <BiSolidSend className="w-5 h-5"/>
      </Link>
      </div>
    </div>
  </div>    
)
export default function Home() {
  return (
   <main className="flex flex-col mx-5 gap-5 py-10 ">
        {/* 상위 섹션 */}
        <section>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-blue"></div>
            <div className="relative z-10 px-8 py-10 text-white">
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