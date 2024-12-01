import RegisterModal from './modal/reminder-modal';
import { FaPlusCircle } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Toaster, toast } from '@/app/utils/toast';
import { useHospitalStore } from '@/app/lib/store/useHospitalStore';
import useModeStore from '@/app/lib/store/useModeStore';

interface HospitalProps {
  chooseOne: string;
}

export default function Hospital({ chooseOne }: HospitalProps) {
  const [addHospital, setAddHospital] = useState<boolean>(false);
  const [updateHospital, setUpdateHospital] = useState<boolean>(false);
  const [hospitalId, setHospitalId] = useState<number | null>(null);
  //const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const hospitals = useHospitalStore((state) => state.hospitals);
  const fetchHospital = useHospitalStore((state) => state.fetchHospital);
  const deleteHospital = useHospitalStore((state) => state.deleteHospital);

  useEffect(() => {
    if (!addHospital && !updateHospital) {
      fetchHospital();
    }
    console.log("가져오는 병원 정보 리스트 : ", hospitals);
  }, [addHospital, updateHospital]);

  // 모달 외부를 클릭 시 모달 종료
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setAddHospital(false);
      setUpdateHospital(false);
    }
  }

  const handleCancel = () => {
    setAddHospital(false);
    setUpdateHospital(false);
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

  const { mode } = useModeStore();
  console.log(mode);

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
                  {/* 병원 이름 */}
                  <span>{hospital.content}</span>
                  {/* 추가 설명 */}
                  <span className="text-xl sm:text-2xl">{hospital.additional_info}</span>
                  {/* 예약 시간 */}
                  {hospital.start_date_time}
                </div>
              </div>
              {/* 수정/삭제 버튼 */}
              {hoveredIndex === index && (
                <div 
                  className="flex gap-[60px] absolute inset-0 items-center justify-center text-2xl"
                >
                  <button
                  onClick={() => {
                    setHospitalId(hospital.reminder_id);
                    setAddHospital(true);
                    setUpdateHospital(true);
                  }}
                    className="h-[100px] w-[100px] bg-yellow-500 opacity-85 text-white px-2 py-1 rounded-2xl hover:bg-yellow-600"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => deleteHospital(hospital.reminder_id)}
                    className="h-[100px] w-[100px] bg-yellow-500 opacity-85 text-white px-2 py-1 rounded-2xl hover:bg-yellow-600"
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>
          ))}
          {/* 병원 등록 버튼 */}
          <div className="w-full bg-white rounded-lg flex flex-row" />
          <div
            onClick={() => setAddHospital(true)}
            className="min-h-[100px] w-full bg-white rounded-lg flex flex-col items-center justify-center"
          >
            {mode==='simple' ?
              <span className="font-bold text-darkblue text-4xl">병원 등록하기</span> :
              <FaPlusCircle size="70" className="text-blue" />
            }
          </div>
        </div>
      </div>
      {addHospital && (
        <div
          onClick={handleClick}
          className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
        >
          <RegisterModal
            division={chooseOne}
            onCancel={handleCancel}
            onUpdate={updateHospital}
            hospitalId={hospitalId}
            onResult={handleResult}       
          />
        </div>
      )}
    <Toaster />
    </>
  );
}