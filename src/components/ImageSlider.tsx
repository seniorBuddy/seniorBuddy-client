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
    <div className="flex gap-10 items-center">
      <button
        onClick={prevSlide}
        className="bg-[#136BFF] text-white max-h-full min-h-12 px-4 py-2 rounded hover:bg-blue-600 transition ml-2"
      >
        &lt;
      </button>
      <div className="flex flex-col items-center justify-center w-full max-w-[170px] h-[400px] mx-auto">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            width={420}
            height={400}
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`} // 띄어쓰기 추가
            className="object-cover rounded-lg"
            style={{ width: "auto", height: "auto" }}
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
