"use client";
import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from 'next/image';

interface ImageItem {
  src: StaticImageData;
  description: string;
}

interface ImageSliderProps {
  images: ImageItem[];
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
    <div className="flex gap-10 items-center"> {/* gap 크기를 10으로 조정 */}
      <button 
        onClick={prevSlide}
        className="bg-[#136BFF] text-white max-h-full min-h-12 px-4 py-2 rounded hover:bg-blue-600 transition ml-2"
      >
        &lt;
      </button>
      <div className="flex flex-col items-center justify-center w-full max-w-[170px] h-[400px] mx-auto"> {/* 고정된 높이 및 최대 폭 설정 */}
        <div className="relative w-full h-full flex items-center justify-center"> {/* div 크기를 고정 */}
          <Image
            width={420} // 원하는 너비를 설정
            height={400} // 원하는 높이를 설정
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="object-cover rounded-lg"
            style={{ width: "auto", height: "auto" }} // 비율 유지를 위해 auto 추가
          />
        </div>
        <p className="mt-2 text-center text-black dark:text-white">{images[currentIndex].description}</p>
      </div>
      <button 
        onClick={nextSlide}
        className="bg-[#136BFF] text-white max-h-full min-h-12 px-4 py-2 rounded hover:bg-blue-600 transition mr-5"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
