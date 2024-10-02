import Image from 'next/image';
import MedicineImg from '../assets/images/medicineImg.png';
import HospitalImg from '../assets/images/hospitalImg.png';
import Medicine from '../../components/medicine';

export default function Reminder() {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px]">
      <div className="flex flex-col sm:flex-row gap-6 font-extrabold text-3xl items-center mb-[40px]">
        {/* 복용정보 페이지 이동 버튼 */}
        <button className="min-h-[70px] min-w-60 flex flex-row gap-4 bg-blue rounded-lg items-center justify-center">
          <Image src={MedicineImg} alt="medicine" width="50" height="50"/>
          <span className="text-white">복용정보</span>
        </button>
        {/* 병원예약 페이지 이동 버튼 */}
        <button className="min-h-[70px] min-w-60 flex flex-row gap-4 bg-blue rounded-lg items-center justify-center">
          <Image src={HospitalImg} alt="hospital" width="50" height="50"/>
          <span className="text-white">병원예약</span>
        </button>
      </div>
      <Medicine/>
    </div>
  );
}