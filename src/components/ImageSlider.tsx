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
    <div className="flex gap-5 items-center">
      <button 
        onClick={prevSlide}
        className="bg-[#136BFF] text-white max-h-full min-h-12 px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        &lt;
      </button>
      <div className="flex flex-col items-center justify-center w-full max-h-[400px] max-w-[420px] mx-auto">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"> 
          <Image
            priority
            width={280} 
            height={200}
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="object-cover rounded-lg"
          />
        </div>
        <p className="mt-2 text-center dark:text-white">{images[currentIndex].description}</p>
      </div>
      <button 
        onClick={nextSlide}
        className="bg-[#136BFF] text-white max-h-full min-h-12 px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
