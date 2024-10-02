import React from 'react';
import ManualLayout from './layout';
import Image from 'next/image'; // Image 컴포넌트 import
import image1 from './images/image1.png'; // 첫 번째 이미지 경로
import image2 from './images/image2.png'; // 두 번째 이미지 경로

const ManualPage: React.FC = () => {
  return (
    <ManualLayout>
      <div className="min-w-60 w-full m-5 p-5 bg-white rounded-lg shadow-lg text-center text-[#136BFF] text-2xl font-bold">
        설명서
      </div>

      <div className="flex justify-between mx-5 mt-5 overflow-hidden"> 
        <div className="flex flex-col items-center mr-10">
          <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center">
            <Image 
              src={image1} 
              alt="Image 1" 
              className="rounded-full object-cover" 
              width={144} // 너비 설정
              height={144} // 높이 설정
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

        <div className="flex flex-col items-center ml-10">
          <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center">
            <Image 
              src={image2} 
              alt="Image 2" 
              className="rounded-full object-cover" 
              width={144} // 너비 설정
              height={144} // 높이 설정
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
    </ManualLayout>
  );
};

export default ManualPage;