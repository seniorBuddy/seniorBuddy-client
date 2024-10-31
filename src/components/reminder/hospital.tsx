import Register from './hospitalRegist';
import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';

interface Hospital {
  name: string;
  details: string;
  period: string;
}

export default function Hospital() {
  const [addHospital, setAddHospital] = useState<boolean>(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setAddHospital(false);
    }
  }

  const handleRegister = (newHospital: Hospital) => {
    setHospitals([...hospitals, newHospital]);
    setAddHospital(false);
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return(
    <>
      <div className="bg-blue w-[380px] sm:w-[600px] rounded-lg">
        <div className="flex flex-col gap-2 p-[15px]">
          {/* 등록된 병원 정보 */}
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="relative w-full bg-white rounded-lg flex flex-row text-black py-2"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-row justify-between w-full gap-3 mx-4 font-bold text-2xl sm:text-3xl">
                <div className="flex flex-col gap-3">
                  <span>{hospital.name}</span>
                  <span className="text-xl sm:text-2xl">{hospital.details}</span>
                  {hospital.period}
                </div>
              </div>
              {hoveredIndex === index && (
                <div 
                  className="flex gap-[60px] absolute inset-0 items-center justify-center text-2xl"
                >
                  <button
                    className="h-[100px] w-[100px] bg-yellow-500 opacity-85 text-white px-2 py-1 rounded-2xl hover:bg-yellow-600"
                  >
                    수정
                  </button>
                  <button
                    className="h-[100px] w-[100px] bg-yellow-500 opacity-85 text-white px-2 py-1 rounded-2xl hover:bg-yellow-600"
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>
          ))}
          <div className="w-full bg-white rounded-lg flex flex-row" />
          <div
            onClick={() => setAddHospital(true)}
            className="min-h-[100px] w-full bg-white rounded-lg flex flex-col items-center justify-center"
          >
            <FaPlusCircle size="70" className="text-blue" />
          </div>
        </div>
      </div>
      {addHospital === true && (
        <div
          onClick={handleClick}
          className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
        >
          <Register
            prop={addHospital}
            onCancel={() => setAddHospital(false)}
            onRegister={handleRegister}
          />
        </div>
      )}
    </>
  );
}