import Register from './medicineRegist';
import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';

interface Medicine {
  name: string;
  details: string;
  times: string[];
  period: string;
  timing: string;
  endDate: string | null;
}

export default function MadicineMain() {
  const [addMedicine, setAddmedicine] = useState<boolean>(false);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const time = ['기상', '취침전', '아침 식전', '아침 식후', '점심 식전', '점심 식후', '저녁 식전', '저녁 식후'];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setAddmedicine(false);
    }
  }

  const handleRegister = (newMedicine: Medicine) => {
    setMedicines([...medicines, newMedicine]);
    setAddmedicine(false);
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return (
    <>
    {/* 약 알람 설정 */}
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-2 h-[185px] w-[100px] border-2 border-blue rounded-l-lg flex items-center justify-center">
        <span className="text-blue text-3xl font-bold">알람</span>
        <span className="text-blue text-3xl font-bold">설정</span>
      </div>
      <div className="h-full w-[500px] bg-blue rounded-r-lg mb-4 p-4 text-2xl">
        <div className="grid grid-cols-2 gap-2">
          {time.map((time, index) =>
            <label key={time} htmlFor={`time-${index}`}>
              <input
                type="checkbox"
                id={`time-${index}`}
                className="mr-3"
              />
              {time}
            </label>
          )}
        </div>
      </div>
    </div>
    
    {/* 필수 약 정보 */}
    <div className="bg-blue h-full w-[380px] sm:w-[600px] rounded-lg">
      <div className="flex flex-col gap-2 p-[15px]">
        {/* 새로 등록된 약 정보 */}
        {medicines.map((medicine, index) => (
          <div 
            key={index}
            className="relative w-full bg-white rounded-lg flex flex-row text-black py-2"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-row justify-between w-full gap-3 mx-4 font-bold text-2xl sm:text-3xl">
              <div className="flex flex-col gap-3">
                {/* 약 이름 */}
                <span>{medicine.name}</span>
                {/* 추가 설명 */}
                <span className="text-xl sm:text-2xl">{medicine.details}</span>
                <div className="flex items-center gap-4">
                  {medicine.times.map((time) => (
                    <label
                      key={time}
                      className="text-sm font-medium-bold text-xl"
                    >
                      <input type="checkbox" checked readOnly className="hidden w-6 h-6 text-blue" />
                      {time}
                    </label>
                  ))}
                  <span className="text-sm font-medium-bold text-xl">{medicine.timing}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {medicine.period}
                <br />
                {medicine.endDate}
              </div>
            </div>
            {/* 수정/삭제 버튼 */}
            {hoveredIndex === index && (
              <div className="flex gap-[60px] absolute inset-0 items-center justify-center text-2xl">
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
        {/* 약 등록 버튼 */}
        <div className="w-full bg-white rounded-lg flex flex-row" />
        <div
          onClick={() => setAddmedicine(true)}
          className="min-h-[100px] w-full bg-white rounded-lg flex flex-col items-center justify-center"
        >
          <FaPlusCircle size="70" className="text-blue"/>
        </div>
      </div>
    </div>
    {addMedicine === true && (
      <div 
        onClick={handleClick}
        className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
      >
        <Register prop={addMedicine} onCancel={() => setAddmedicine(false)} onRegister={handleRegister}/>
      </div>
    )}
    </>
  );
}