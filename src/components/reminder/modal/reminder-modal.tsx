import MedicineModal from './medicine-modal';
import HospitalModal from './hospital-modal';

interface Medicine {
  content: string;  // 약 이름
  additional_info: string;  // 기타 사항
  frequency: string[];  // 약 먹는 시간
  //timing: string;  // 식전, 식후
  start_date: string;  // 시작 날짜
  day: number;  // 종료 날짜
}
// interface Medicine {
//   name: string;  // 약 이름
//   other: string;  // 기타 사항
//   takingTime: string[];  // 약 먹는 시간
//   timing: string;  // 식전, 식후
//   startDate: string;  // 시작 날짜
//   endDate: string | null;  // 종료 날짜
// }

interface Hospital {
  content: string;  // 병원 이름
  additional_info: string;  // 기타 사항
  start_date: string;  // 예약 일정
}


interface RegisterModalProps {
  division: string;
  onCancel: (value: boolean) => void;
  onResult: (result: {success: boolean, message: string}) => void;
  onMedicineRegister?: (newData: Medicine) => void;
  onHospitalRegister?: (newData: Hospital) => void;
}

export default function ReminderModal(
    { division, onCancel, onResult, onMedicineRegister, onHospitalRegister } : RegisterModalProps
  ) {

  const handleMedicineRegister = (newData: Medicine) => {
    if (onMedicineRegister) {
      onMedicineRegister(newData);
    }
  };

  const handleHospitalRegister = (newData: Hospital) => {
    if (onHospitalRegister) {
      onHospitalRegister(newData);
    }
  };

  return (
    <div>
      {/* 모달 전체 틀 */}
      <div className="flex flex-col gap-12 items-center justify-center w-[600px] h-[550px] bg-white border-4 border-darkblue rounded-2xl">
        <span className="text-darkblue text-4xl font-bold">
          {division === 'medicine' ? "약 정보" : "병원 정보"}
        </span>
        {division === 'medicine' ?
          <MedicineModal onCancel={() => onCancel(false)} onResult={onResult} onRegister={handleMedicineRegister} /> : 
          <HospitalModal onCancel={() => onCancel(false)} onResult={onResult} onRegister={handleHospitalRegister} />
        }
      </div>
    </div>
  )
}