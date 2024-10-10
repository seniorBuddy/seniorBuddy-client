import React from "react";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import image1 from "../../assets/images/d1-1.png";
import image2 from "../../assets/images/d1-2.png";
import image3 from "../../assets/images/d1-3.png";
import image4 from "../../assets/images/d1-4.png";

const images = [
  { src: image1, description: "1. 연락처 아이콘을 누른다" },
  { src: image2, description: "2. 상단의 플러스 버튼을 눌러 연락처 저장 페이지로 이동한다" },
  { src: image3, description: "3. 이름과 전화번호 등 필요한 정보를 입력한다" },
  { src: image4, description: "4. 하단의 저장 버튼을 눌러 새 연락처를 저장한다" },
];

const D1NumberPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold p-2 bg-[#136BFF] text-white shadow-md rounded">
          전화번호 등록하기
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-4">
        {/* Sidebar (목차) */}
        <div className="lg:w-1/3 p-4 bg-white shadow-md rounded mb-4 lg:mb-0 flex flex-col items-center">
          <h2 className="font-bold text-lg text-[#136BFF] text-center mb-4">목차</h2>
          <ul className="space-y-3 w-full">
            {/* 카카오톡 항목 */}
            <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
              <span className="text-[#136BFF] font-bold">카카오톡</span>
              <ul className="pl-4 text-sm">
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/k1picture">1. 사진 보내기</Link>
                </li>
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/k2groupchat">2. 단톡 생성하기</Link>
                </li>
              </ul>
            </li>
            {/* 일상 항목 */}
            <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
              <span className="text-[#136BFF] font-bold">일상</span>
              <ul className="pl-4 text-sm">
                <li className="font-bold transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/d1number">1. 전화번호 등록하기</Link>
                </li>
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/d2capture">2. 캡처하기</Link>
                </li>
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/d3light">3. 밝기 조절하기</Link>
                </li>
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/d4livechat">4. 영상 통화하기</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Image Slider */}
        <div className="lg:w-2/3 mx-2 w-full">
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  );
};

export default D1NumberPage;
