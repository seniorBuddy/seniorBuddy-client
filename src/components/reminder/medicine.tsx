import RegisterModal from './modal/reminder-modal';
import { FaPlusCircle } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Toaster, toast } from '@/app/utils/toast';
import { useMedicineStore } from '@/app/lib/store/useMedicineStore';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

interface MedicineProps {
  chooseOne: string;
}

export default function MadicineMain({ chooseOne }: MedicineProps) {
  const [addMedicine, setAddmedicine] = useState<boolean>(false);  // 등록 버튼 선택 유무
  const [updateMedicine, setUpdateMedicine] = useState<boolean>(false);  // 수정 버튼 선택 유무
  const [medicineId, setMedicineId] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [toggle, setToggle] = useState<boolean>(true);

  const medicines = useMedicineStore((state) => state.medicines);
  const fetchMedicine = useMedicineStore((state) => state.fetchMedicine);

  useEffect(() => {
    if (!addMedicine && !updateMedicine) {
      fetchMedicine();
    }
    console.log("가져오는 약 정보 테스트 : ", medicines);
  }, [addMedicine, updateMedicine]);

  const time = ['기상', '취침전', '아침 식전', '아침 식후', '점심 식전', '점심 식후', '저녁 식전', '저녁 식후'];

  // 모달 외부를 클릭 시 모달 종료
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setAddmedicine(false);
      setUpdateMedicine(false);
      //setMedicineId(0);
    }
  }

  const handleCancel = () => {
    setAddmedicine(false);
    setUpdateMedicine(false);
    //setMedicineId(0);
  }

  // 수정, 삭제 버튼 나타내기
  const handleMouseEnter = (index: number | null) => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  // 결과값에 따라 toast 나타내기
  const handleResult = (result: {success: boolean, message: string}) => {
    if (!result.success) {
      toast.error(result.message, {
        autoClose: 2000,
        icon: <span>❌</span>,
      });
    } else {
      toast.success(result.message, {
        autoClose: 2000,
        icon: <span>✔️</span>,
      });
    }
  }

  return (
    <>
    {/* 약 알람 설정 */}
    <div className="flex flex-col justify-center gap-2 mb-4">
      {/*
      <div className="flex flex-row gap-2 h-[50px] sm:h-[65px] w-[320px] sm:w-[600px] border-2 border-blue rounded-lg sm:rounded-l-lg flex items-center justify-center">
        <span className="text-blue text-3xl font-bold">알람 설정</span>
      </div> */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-3 items-center">
          <TbTriangleInvertedFilled
            onClick={() => setToggle(!toggle)}
            size="25" className={`text-blue duration-300 ${toggle ? 'rotate-0' : '-rotate-90'}`}
          />
          <span className="text-darkblue text-2xl font-bold">약 알람 설정</span>
        </div>
        <div 
          className={
            `w-[320px] sm:w-[600px] bg-blue rounded-lg p-4 text-2xl duration-300 transition-all
            ${toggle ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`
          }
        >
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
    </div>
    
    {/* 필수 약 정보 */}
    <div className="bg-blue h-full w-[320px] sm:w-[600px] rounded-lg">
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
                <span>{medicine.content}</span>
                {/* 추가 설명 */}
                <span className="text-xl sm:text-2xl">{medicine.additional_info}</span>
                <div className="flex items-center gap-4">
                  {medicine.frequency.map((time) => (
                    <label
                      key={time}
                      className="text-sm font-medium-bold text-xl"
                    >
                      <input type="checkbox" checked readOnly className="hidden w-6 h-6 text-blue" />
                      {time}
                    </label>
                  ))}
                  {/*<span className="text-sm font-medium-bold text-xl">{medicine.timing}</span>*/}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {medicine.start_date}
                <br />
                {medicine.day}
              </div>
            </div>
            {/* 수정/삭제 버튼 */}
            {hoveredIndex === index && (
              <div className="flex gap-[60px] absolute inset-0 items-center justify-center text-2xl">
                <button
                  onClick={() => {
                    setMedicineId(medicine.reminder_id);  // 선택 약 정보 id
                    setAddmedicine(true);  // 모달 열기
                    setUpdateMedicine(true);
                  }}
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
    {/* 모달 오픈 */}
    {addMedicine && (
      <div 
        onClick={handleClick}
        className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
      >
        <RegisterModal 
          division={chooseOne}
          onCancel={handleCancel}
          onUpdate={updateMedicine}
          medicineId={medicineId}
          onResult={handleResult}
        />
        {/*<Register prop={addMedicine} onCancel={() => setAddmedicine(false)} onRegister={handleRegister}/>*/}
      </div>
    )}
    <Toaster />
    </>
  );
}