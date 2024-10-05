import React from "react";
import ManualLayout from "../layout";
import ImageSlider from "@/components/ImageSlider";
import image1 from "@/app/manual/k2groupchat/images/1.png"; 
import image2 from "@/app/manual/k2groupchat/images/2.png"; 
import image3 from "@/app/manual/k2groupchat/images/3.png"; 
import image4 from "@/app/manual/k2groupchat/images/4.png"; 
import image5 from "@/app/manual/k2groupchat/images/5.png"; 
import image6 from "@/app/manual/k2groupchat/images/6.png"; 

const images = [
  { src: image1, description: "1. 카카오톡 채팅방 목록에서 우측 상단 중앙에 있는 아이콘을 누른다" },
  { src: image2, description: "2. 팀 채팅을 누른다" },
  { src: image3, description: "3. 단톡에 초대하고 싶은 친구를 여러 명 선택한다" },
  { src: image4, description: "4. 우측 상단의 다음 버튼을 누른다" },
  { src: image5, description: "5. 단톡의 이름을 적어 준다" },
  { src: image6, description: "6. 확인 버튼을 누른다" },
];

const K2GroupChatPage: React.FC = () => {
  return (
    <ManualLayout>
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold p-2 bg-[#136BFF] text-white shadow-md rounded">
          단톡 생성하기
        </h1>
      </div>
      <div className="flex justify-between mt-1">
        <div className="w-1/3 p-4 bg-white shadow-md rounded flex flex-col items-center">
          <h2 className="font-bold text-lg text-[#136BFF] text-center mb-4">목차</h2>
          <ul className="space-y-3 w-full">
            {/** 카카오톡 항목 */}
            <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
              <span className="text-[#136BFF] font-bold hover:text-[#136BFF]">카카오톡</span>
              <ul className="pl-4 text-sm">
                <li className="hover:underline hover:text-[#136BFF]">1. 사진 보내기</li>
                <li className="font-bold hover:text-[#136BFF]">2. 단톡 생성하기</li>
              </ul>
            </li>
            {/** 일상 항목 */}
            <li className="bg-gray-100 p-3 rounded-lg shadow transition duration-300 cursor-pointer">
              <span className="text-[#136BFF] font-bold hover:text-[#136BFF]">일상</span>
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

export default K2GroupChatPage;