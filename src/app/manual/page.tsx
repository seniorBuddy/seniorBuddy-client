import React from 'react';
import Image from 'next/image';
import image1 from './images/image1.png';
import image2 from './images/image2.png';

const ManualPage: React.FC = () => {
  return (
    <section className="mx-5 py-5">
      <div className="min-w-60 w-full p-5 bg-white rounded-lg shadow-lg text-center text-[#136BFF] text-2xl font-bold mb-5">
        설명서
      </div>

      <div className="flex flex-col sm:flex-row justify-between overflow-hidden">
        {/* 카카오톡 섹션 */}
        <div className="flex flex-col items-center mb-5 sm:mb-0 sm:mr-10">
          <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center">
            <Image 
              src={image1} 
              alt="Image 1" 
              className="rounded-full object-cover" 
              width={144} 
              height={144} 
            />
          </div>
          <p className="mt-2 text-2xl text-[#136BFF] font-bold">카카오톡</p>
          <div className="mt-2 w-48 h-12 bg-[#136BFF] text-white rounded-lg text-center cursor-pointer text-lg flex items-center justify-center">
            사진 보내기
          </div>
          <div className="mt-2 w-48 h-12 bg-[#136BFF] text-white rounded-lg text-center cursor-pointer text-lg flex items-center justify-center">
            단톡 생성하기
          </div>
        </div>

        {/* 일상 섹션 */}
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center">
            <Image 
              src={image2} 
              alt="Image 2" 
              className="rounded-full object-cover" 
              width={144} 
              height={144} 
            />
          </div>
          <p className="mt-2 text-2xl text-[#136BFF] font-bold">일상</p>
          <div className="mt-2 w-48 h-12 bg-[#136BFF] text-white rounded-lg text-center cursor-pointer text-lg flex items-center justify-center">
            전화번호 등록하기
          </div>
          <div className="mt-2 w-48 h-12 bg-[#136BFF] text-white rounded-lg text-center cursor-pointer text-lg flex items-center justify-center">
            캡처하기
          </div>
          <div className="mt-2 w-48 h-12 bg-[#136BFF] text-white rounded-lg text-center cursor-pointer text-lg flex items-center justify-center">
            밝기 조절하기
          </div>
          <div className="mt-2 w-48 h-12 bg-[#136BFF] text-white rounded-lg text-center cursor-pointer text-lg flex items-center justify-center">
            영상 통화하기
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualPage;
