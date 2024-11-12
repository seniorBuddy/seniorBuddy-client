import MedicineModal from './medicine-modal';
import HospitalModal from './hospital-modal';

interface RegisterModalProps {
  division: string;
  onCancel: (value: boolean) => void;
}

export default function ReminderModal({ division, onCancel }: RegisterModalProps) {
  return (
    <div>
      {/* 모달 전체 틀 */}
      <div className="flex flex-col gap-12 items-center justify-center w-[600px] h-[550px] bg-white border-4 border-darkblue rounded-2xl">
        <span className="text-darkblue text-4xl font-bold">
          {division === 'medicine' ? "약 정보" : "병원 정보"}
        </span>
        {division === 'medicine' ?
        <MedicineModal onCancel={() => onCancel(false)}/> : <HospitalModal onCancel={() => onCancel(false)}/>}
      </div>
    </div>
  )
}