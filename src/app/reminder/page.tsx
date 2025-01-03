"use client";

import { useState } from 'react';
import { GiMedicines } from "react-icons/gi";
import { CiHospital1 } from 'react-icons/ci';
import Medicine from '../../components/reminder/medicine';
import Hospital from '../../components/reminder/hospital';

export default function Reminder() {
  const [chooseOne, setChooseOne] = useState('medicine');

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChooseOne(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center sm:mt-[30px]">
      <div className="flex flex-row gap-2 sm:gap-6 font-extrabold text-2xl sm:text-3xl items-center mb-[20px] sm:mb-[40px]">
        {/* 복용정보 페이지 이동 버튼 */}
        <label>
          <input
            type="radio"
            name="remind"
            value="medicine"
            checked={chooseOne === 'medicine'}
            onChange={handleRoleChange}
            className="hidden peer"  
          />
          <div className={`min-h-[70px] min-w-[150px] sm:min-w-60 flex flex-row gap-4 px-2 bg-blue rounded-lg items-center justify-center
            ${chooseOne === 'medicine' ? 'bg-white border-4 border-blue' : 'bg-blue'}`
          }>
            <GiMedicines size="40" className={`${chooseOne === 'medicine' ? 'text-blue' : 'text-white'}`} />
            <span className={`${chooseOne === 'medicine' ? 'text-blue' : 'text-white'}`}>복용정보</span>
          </div>
        </label>
        
        <label>
          <input
            type="radio"
            name="remind"
            value="hospital"
            checked={chooseOne === 'hospital'}
            onChange={handleRoleChange}  
            className="hidden peer"
          />
          <div className={`min-h-[70px] min-w-[150px] sm:min-w-60 flex flex-row gap-4 px-2 bg-blue rounded-lg items-center justify-center
            ${chooseOne === 'hospital' ? 'bg-white border-4 border-blue' : 'bg-blue'}`
          }>
            <CiHospital1 size="40" className={`${chooseOne === 'hospital' ? 'text-blue' : 'text-white'}`} />
            <span className={`${chooseOne === 'hospital' ? 'text-blue' : 'text-white'}`}>병원예약</span>
          </div>
        </label>
      </div>
      {chooseOne === 'medicine' && <Medicine chooseOne={chooseOne}/>}
      {chooseOne === 'hospital' && <Hospital chooseOne={chooseOne}/>}
    </div>
  );
}