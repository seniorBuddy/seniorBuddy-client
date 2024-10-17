import React from 'react';
import Image from 'next/image';
import image1 from '../assets/images/m-m-1.png';
import image2 from '../assets/images/m-m-2.png';
import Link from 'next/link';
import { manualItems } from '../manual/mock/manual-item'; 

const ManualPage: React.FC = () => {
  return (
    <section className="mx-5 py-10 bg-gray-100 dark:bg-[#0F172A]">
      {/* 설명서 타이틀 */}
      <div className="w-full p-5 bg-[#136BFF] rounded-lg shadow-lg text-center text-white text-3xl dark:bg-[#136BFF] font-bold mb-0">
        설명서
      </div>

      {/* 설명 텍스트 */}
      <div className="mb-1 p-1 bg-white rounded-lg shadow-md text-center">
        <p className="text-xl text-[#136BFF] font-semibold">
          내게 필요한 지식을 손쉽게 만나 보세요!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-stretch overflow-hidden bg-[#136BFF] p-5 rounded-lg shadow-lg">
        
        {/* 카카오톡 섹션 */}
        <div className="flex flex-col items-center mb-5 sm:mb-0 sm:mr-5 h-full">
          <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center shadow-md">
            <Image 
              src={image1} 
              alt="카카오톡 이미지" 
              className="rounded-full object-cover" 
              width={144} 
              height={144} 
            />
          </div>
          <p className="mt-2 text-2xl text-white font-bold">카카오톡</p>
          <div className="w-48 h-1 bg-white dark:bg-[#0F172A] my-1" /> 

          {/* 카카오톡 항목 링크 생성 */}
          {manualItems.filter(item => item.category === '카카오톡').map(item => (
            <Link key={item.id} href={`/manual/${item.id}`}>
              <div className="mt-2 w-48 h-12 bg-white text-[#136BFF] rounded-lg text-center text-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-[#005bb5] hover:text-white dark:bg-[#1E293B]  dark:text-white">
                {item.title}
              </div>
            </Link>
          ))}
        </div>

        {/* 일상 섹션 */}
        <div className="flex flex-col items-center sm:ml-5 h-full">
          <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center shadow-md">
            <Image 
              src={image2} 
              alt="일상 이미지" 
              className="rounded-full object-cover" 
              width={144} 
              height={144} 
            />
          </div>
          <p className="mt-2 text-2xl text-white font-bold">일상</p>
          <div className="w-48 h-1 bg-white dark:bg-[#0F172A] my-1" /> 

          {/* 일상 항목 링크 생성 */}
          {manualItems.filter(item => item.category === '일상').map(item => (
            <Link key={item.id} href={`/manual/${item.id}`}>
              <div className="mt-2 w-48 h-12 bg-white text-[#136BFF] rounded-lg text-center text-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-[#005bb5] hover:text-white dark:bg-[#1E293B] dark:text-white">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManualPage;