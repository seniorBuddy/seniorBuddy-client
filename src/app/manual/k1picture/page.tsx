import React from "react";
import Link from "next/link"; 
import ImageSlider from "@/components/ImageSlider";
import image1 from "../../assets/images/k1-1.png";
import image2 from "../../assets/images/k1-2.png";
import image3 from "../../assets/images/k1-3.png";
import image4 from "../../assets/images/k1-4.png";
import image5 from "../../assets/images/k1-5.png";
import image6 from "../../assets/images/k1-6.png";
import image7 from "../../assets/images/k1-7.png";
import image8 from "../../assets/images/k1-8.png";

// 이미지 데이터 배열
const images = [
  { src: image1, description: "1. 카카오톡 채팅방 접속 후 하단의 플러스 버튼을 누른다" },
  { src: image2, description: "2. 앨범을 누른다" },
  { src: image3, description: "3. 전송하고 싶은 이미지를 슬라이드 해서 선택한다" },
  { src: image4, description: "4. 우측 상단의 노란 화살표 버튼을 누른다" },
  { src: image5, description: "5. 여러 장의 이미지를 보내고 싶을 때는 좌측 하단의 전체 버튼을 누른다" },
  { src: image6, description: "6. 전송하고 싶은 이미지들을 슬라이드 해서 선택한다" },
  { src: image7, description: "7. 좌측 하단의 사진 묶어보내기를 선택한다" },
  { src: image8, description: "8. 우측 상단의 전송 버튼을 누른다" },
];

const K1PicturePage: React.FC = () => {
  return (
    <>
      {/* Title Section */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold p-2 bg-[#136BFF] text-white shadow-md rounded">
          사진 보내기
        </h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-between mt-4">
        {/* Sidebar (목차) */}
        <div className="lg:w-1/3 p-4 bg-white shadow-md rounded mb-4 lg:mb-0 flex flex-col items-center">
          <h2 className="font-bold text-lg text-[#136BFF] text-center mb-4">목차</h2>
          <ul className="space-y-3 w-full">
            <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
              <span className="text-[#136BFF] font-bold">카카오톡</span>
              <ul className="pl-4 text-sm">
                <li className="font-bold transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/k1picture">사진 보내기</Link>
                </li>
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/k2groupchat">단톡 보내기</Link>
                </li>
              </ul>
            </li>
            <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
              <span className="text-[#136BFF] font-bold">일상</span>
              <ul className="pl-4 text-sm">
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/d1number">전화번호 등록하기</Link>
                </li>
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/d2capture">캡처하기</Link>
                </li>
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/d3light">밝기 조절하기</Link>
                </li>
                <li className="transition-transform duration-300 transform hover:scale-105 hover:text-[#0E4BFF]">
                  <Link href="/manual/d4livechat">영상 통화하기</Link>
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
    </>
  );
};

export default K1PicturePage;
