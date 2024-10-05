import React from "react";
import ManualLayout from "../../layout";
import ImageSlider from "@/components/ImageSlider";
import image1 from "@/app/manual/k1picture/images/1.png"; 
import image2 from "@/app/manual/k1picture/images/2.png"; 
import image3 from "@/app/manual/k1picture/images/3.png"; 
import image4 from "@/app/manual/k1picture/images/4.png"; 
import image5 from "@/app/manual/k1picture/images/5.png"; 
import image6 from "@/app/manual/k1picture/images/6.png"; 
import image7 from "@/app/manual/k1picture/images/7.png"; 
import image8 from "@/app/manual/k1picture/images/8.png"; 

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
    <ManualLayout>
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold p-2 bg-[#136BFF] text-white shadow-md rounded">
          사진 보내기
        </h1>
      </div>
      <div className="flex justify-between mt-1">
        <div className="w-1/3 p-4 bg-white shadow-md rounded flex flex-col items-center">
          <h2 className="font-bold text-lg text-[#136BFF] text-center mb-4">목차</h2>
          <ul className="space-y-3 w-full">
            <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
              <span className="text-[#136BFF] font-bold">카카오톡</span>
              <ul className="pl-4 text-sm">
                <li className="font-bold hover:underline hover:text-[#136BFF]">1. 사진 보내기</li>
                <li className="hover:text-[#136BFF]">2. 단톡 보내기</li>
              </ul>
            </li>
            <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
              <span className="text-[#136BFF] font-bold">일상</span>
              <ul className="pl-4 text-sm">
                <li className="hover:underline hover:text-[#136BFF]">1. 전화번호 등록하기</li>
                <li className="hover:underline hover:text-[#136BFF]">2. 캡처하기</li>
                <li className="hover:underline hover:text-[#136BFF]">3. 밝기 조절하기</li>
                <li className="hover:underline hover:text-[#136BFF]">4. 영상 통화하기</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-2/3 mx-2">
          <ImageSlider images={images} />
        </div>
      </div>
    </ManualLayout>
  );
};

export default K1PicturePage;
