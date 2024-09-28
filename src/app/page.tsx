import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* 버튼 그룹 */}
    <section className="p-5 flex flex-col gap-3 bg-white w-full rounded-lg shadow">
      <div className="font-bold">
        나의 <span className="text-blue">삶을 더 편리</span>하게,<br />
        시작해 보세요
      </div>
      <div className="mx-2 text-center grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 font-extrabold text-xl sm:text-2xl">
          <div className="w-full py-6 sm:py-14 m-auto rounded-lg bg-desc-bg-btn">
            <span className="text-desc">설명서</span>
          </div>
          <div className="w-full py-6 sm:py-14 m-auto rounded-lg bg-remind-bg-btn">
            <span className="text-remind">기억하기</span>
          </div>
          <div className="w-full py-6 sm:py-14 m-auto rounded-lg bg-info-bg-btn">
            <span className="text-info">내 정보</span>
          </div>
          <div className="w-full py-6 sm:py-14 m-auto rounded-lg bg-option-bg-btn">
            <span className="text-option">설정</span>
          </div>
      </div>
    </section>

     {/* AI 비서 그룹 */}
     <section className="p-5 flex flex-col gap-3 bg-white w-full rounded-lg shadow">
      <div className="font-bold">
        나의 <span className="text-blue">삶을 더 편리</span>하게,<br />
        시작해 보세요
      </div>
      <div className="mx-2 text-center grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 font-extrabold text-xl sm:text-2xl">
          <div className="w-full py-6 sm:py-14 m-auto rounded-lg bg-desc-bg-btn">
            <span className="text-desc">설명서</span>
          </div>
          <div className="w-full py-6 sm:py-14 m-auto rounded-lg bg-remind-bg-btn">
            <span className="text-remind">기억하기</span>
          </div>
          <div className="w-full py-6 sm:py-14 m-auto rounded-lg bg-info-bg-btn">
            <span className="text-info">내 정보</span>
          </div>
          <div className="w-full py-6 sm:py-14 m-auto rounded-lg bg-option-bg-btn">
            <span className="text-option">설정</span>
          </div>
      </div>
    </section>
    </>
  );
}
