"use client";
import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image"; 

interface ImageItem {
  src: StaticImageData; // 이미지 소스 타입
  description: string; // 이미지 설명
}

interface ImageSliderProps {
  images: ImageItem[]; // 이미지 배열
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl h-auto mx-auto bg-white rounded-lg shadow-lg flex flex-col gap-2 p-5">
      {/* 이미지 슬라이드 섹션 */}
      <div className="flex justify-between items-center h-full">
        <button 
          onClick={prevSlide}
          className="bg-[#136BFF] text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          &lt;
        </button>
        <div className="relative flex-grow h-64 md:h-96">
          <Image
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="contain" 
            className="rounded shadow-lg"
          />
        </div>
        <button 
          onClick={nextSlide}
          className="bg-[#136BFF] text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          &gt;
        </button>
      </div>

      {/* 이미지 설명 */}
      <div className="text-center mt-2 text-sm md:text-lg font-semibold">
        {images[currentIndex].description}
      </div>
    </div>
  );
};

export default ImageSlider;
