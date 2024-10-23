import React from 'react';
import Link from 'next/link';
import { manualItems } from '../manual/mock/manual-item'; 

const ManualPage: React.FC = () => {
  return (
    <section className="mx-5 py-10 bg-slate-100 dark:bg-[#1e293b]">
      {/* 설명서 타이틀 */}
     <span className='font-bold text-blue text-2xl'>설명서</span>

      <div className="flex flex-col justify-center items-stretch">
        
        {/* 카카오톡 섹션 */}
        <div className="flex flex-col items-start mb-5 h-full bg-white rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:shadow-lg">
          <p className="mt-2 text-2xl text-[#136BFF] font-bold">카카오톡</p>
          <div className="w-48 h-1 bg-[#136BFF] my-1" /> 

          {/* 카카오톡 항목 링크 생성 */}
          <div className="flex justify-center w-full flex-wrap mb-2">
            {manualItems.filter(item => item.category === '카카오톡').map(item => (
              <Link key={item.id} href={`/manual/${item.id}`}>
                <div className={`mt-2 mx-1 w-${item.title === '전화번호 등록하기' || item.title === '화면 캡처하기' || item.title === '밝기 조절하기' || item.title === '영상통화하기' ? '96' : '72'} h-10 ${item.title === '사진 보내기' || item.title === '단톡 만들기' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-[#136BFF]'} text-white rounded-lg text-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-[#005bb5]`}>
                  {item.title}
                </div>
                
              </Link>
            ))}
          </div>
        </div>
        
        {/* 일상 섹션 */}
        <div className="flex flex-col items-start mt-5 h-full bg-white rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:shadow-lg">
          <p className="mt-2 text-2xl text-[#136BFF] font-bold">일상</p>
          <div className="w-48 h-1 bg-[#136BFF] my-1" /> 

          {/* 일상 항목 링크 생성 (세로 중앙 정렬) */}
          <div className="flex flex-col items-center justify-center w-full">
            {manualItems.filter(item => item.category === '일상').map(item => (
              <Link key={item.id} href={`/manual/${item.id}`}>
                <div className="mt-2 mx-1 w-72 h-10 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg text-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-[#005bb5] hover:text-white">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualPage;
