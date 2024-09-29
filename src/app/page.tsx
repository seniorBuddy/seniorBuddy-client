import { MdKeyboardVoice } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <div className="flex items-center justify-center">
   <section className="mt-5 sm:mt-8 w-72 md:w-full bg-white rounded-xl shadow-lg px-4 py-4 m-4">
      <div className="font-bold text-lg leading-tight pb-3">
        나의 <span className="text-blue">삶을 더 편리</span>하게,<br /> 시작해 보세요
      </div>
      <div className="m-auto text-center px-5 sm:px-0 gap-2 sm:gap-5 m-3 grid grid-cols-2 md:grid-cols-4 font-extrabold text-xl md:text-2xl">
          <Link href={'/menual'} className="py-7 sm:py-12 rounded-lg bg-desc-bg-btn">
            <span className="text-desc">설명서</span>
          </Link>
          <Link href={'/reminder'} className="py-7 sm:py-12 rounded-lg bg-remind-bg-btn">
            <span className="text-remind">알리미</span>
          </Link>
          <Link href={'/my-info'} className="py-7 sm:py-12 rounded-lg bg-info-bg-btn">
            <span className="text-info">내 정보</span>
          </Link>
          <Link href={'/setting'} className="py-7 sm:py-12 rounded-lg bg-option-bg-btn">
            <span className="text-info">설정</span>
          </Link>
      </div>
    </section>
   </div>
   <div className="flex items-center justify-center flex-col md:flex-row gap-3">
    {/* AI 비서 캐릭터  */}
    <Link href={'/ai_chat/custom'} className="w-72 md:min-w-50 flex flex-row flex-1 py-5 sm:py-3 px-5 sm:my-5  bg-blue rounded-xl justify-center gap-3 sm:gap-5">
        <div className="md:hidden h-20 w-20 pt-1 m-auto bg-white rounded-full"></div>
        <div className="">
            <div className="text-info font-bold min-w-36 m-auto bg-white text-center mb-2 rounded-3xl ">
              AI 비서 Abby
              </div>
            <div className="hidden md:block h-24 w-24 m-auto bg-white rounded-full"></div>
            <div className="ml-3 sm:ml-1 text-white font-medium mt-1 sm:mt-3 whitespace-pre-wrap max-w-24 sm:max-w-40 text-sm">
              좋은 하루 
              보내고 계신가요?
            </div>
        </div>
      </Link>
      {/* AI 채팅 시작하기*/}
      <div className="border-2 border-blue w-72 sm:w-full  flex flex-col flex-2 items-center p-3 bg-white shadow-xl rounded-xl ">
        <span className="text-info font-extrabold text-xl mb-5">Abby와 대화하기</span>
        <div className="mt-6 w-full flex gap-3 mt-3 sm:mt-10 my-3 sm:my-5 hidden sm:flex items-center justify-center">
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
   </div>
   </>
  );
}