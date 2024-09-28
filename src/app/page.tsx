import { MdKeyboardVoice } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";

export default function Home() {
  return (
    <div>
    {/* 버튼 그룹 */}
    <section className="min-w-60 m-5 p-5 flex flex-col gap-2 bg-white rounded-lg shadow-lg">
      <div className="font-bold text-xl">
        나의 <span className="text-blue ">삶을 더 편리</span>하게,<br /> 시작해 보세요
      </div>
      <div className="mx-5 text-center grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 font-extrabold text-xl sm:text-2xl">
          <button className="w-full py-6 sm:py-14 m-auto rounded-lg bg-desc-bg-btn">
            <span className="text-desc">설명서</span>
          </button>
          <button className="w-full py-6 sm:py-14 m-auto rounded-lg bg-remind-bg-btn">
            <span className="text-remind">알리미</span>
          </button>
          <button className="w-full py-6 sm:py-14 m-auto rounded-lg bg-info-bg-btn">
            <span className="text-info">내 정보</span>
          </button>
          <button className="w-full py-6 sm:py-14 m-auto rounded-lg bg-option-bg-btn">
            <span className="text-option">설정</span>
          </button>
      </div>
    </section>

     {/* AI 그룹 */}
     <section className="flex flex-col sm:flex-row justify-center items-center gap-5">
      {/* AI 비서 캐릭터  */}
      <div className=" min-w-36 max-w-64  flex flex-row flex-1 sm:m-5 p-3 bg-blue rounded-xl justify-center gap-3 sm:gap-5">
        <div className="sm:hidden min-h-24 min-w-24 pt-1 m-auto bg-white rounded-full"></div>
        <div className="max-w-">
            <div className="text-info font-bold min-w-32 m-auto bg-white text-center p-1 mb-2 rounded-3xl ">
              AI 비서 Abby
              </div>
            <div className="hidden sm:block h-24 w-24 m-auto bg-white rounded-full"></div>
            <div className="text-white font-medium mt-2">
              좋은 하루 보내고 계신가요?
            </div>
        </div>
      </div>
      {/* AI 채팅 시작하기*/}
      <div className="min-w-56  flex flex-col flex-2 items-center justify-center p-5 bg-white rounded-xl shadow-lg">
        <span className="text-info font-extrabold text-xl">Abby와 대화하기</span>
        <div className="mt-6 w-full flex gap-3 mt-10 my-5">
          <div className="px-1 py-1.5 border-2 text-blue border-blue rounded-md text-sm">오늘 날씨는 어때?</div>
          <div className="px-1 py-1.5 border-2 text-blue border-blue rounded-md text-sm">메뉴얼 사용법에 대해</div>
        </div>
        <div className="mt-2 w-full h-full">
          <div className="px-1 py-1.5 border-2 bg-gray-100 text-gray-400 border-gray-300 rounded-md flex
          items-center">
          <MdKeyboardVoice className="w-5 h-5"/>
            <div className="flex-1 text-sm pr-5">궁금한 것을 물어 보세요</div>
          <BiSolidSend className="w-5 h-5"/>
          </div>
        </div>
      </div>    
     </section>
    </div>
  );
}
