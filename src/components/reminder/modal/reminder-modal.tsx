import MedicineModal from './medicine-modal';
import HospitalModal from './hospital-modal';

interface Hospital {
  content: string;  // 병원 이름
  additional_info: string;  // 기타 사항
  start_date: string;  // 예약 일정
}

interface RegisterModalProps {
  division: string;
  onCancel: () => void;
  onUpdate: boolean;
  medicineId?: number | null;
  hospitalId?: number | null;
  onResult: (result: {success: boolean, message: string}) => void;
}

export default function ReminderModal(
    { division, onCancel, onUpdate, medicineId, hospitalId, onResult } : RegisterModalProps
  ) {

  return (
    <div>
      {/* 모달 전체 틀 */}
      <div className="flex flex-col gap-5 sm:gap-12 items-center justify-center w-[330px] sm:w-[600px] h-full bg-white border-4 border-darkblue rounded-2xl py-6">
        <span className="text-darkblue text-3xl sm:text-4xl font-bold">
          {division === 'medicine' ? "약 정보" : "병원 정보"}
        </span>
        <div className="flex justify-center">
          {division === 'medicine' ?
            <MedicineModal onCancel={onCancel} onUpdate={onUpdate} medicineId={medicineId} onResult={onResult} /> : 
            <HospitalModal onCancel={onCancel} onUpdate={onUpdate} hospitalId={hospitalId} onResult={onResult} />
          }
        </div>
      </div>
    </div>
  )
}